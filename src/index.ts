/**
 * Critical Tech Tracker - Cloudflare Worker
 * Main entry point for the worker
 */

import {
  handleSearch,
  handleGetSectors,
  handleGetSector,
  handleHealthCheck,
  handleOptions
} from './handlers/api';
import { dashboardHTML } from './dashboard-html';

export interface Env {
  ENVIRONMENT?: string;
  CACHE?: KVNamespace;
}

/**
 * Main worker fetch handler
 */
export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    const path = url.pathname;

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return handleOptions();
    }

    // Route handling
    try {
      // API routes
      if (path === '/api/search') {
        return await handleSearch(request);
      }

      if (path === '/api/sectors') {
        return await handleGetSectors();
      }

      if (path.startsWith('/api/sectors/')) {
        const sectorId = path.split('/').pop();
        if (sectorId) {
          return await handleGetSector(sectorId);
        }
      }

      if (path === '/api/health') {
        return await handleHealthCheck();
      }

      // Serve static frontend for root and other paths
      if (path === '/' || path === '/index.html') {
        return serveHTML();
      }

      // 404 for unknown routes
      return new Response('Not Found', { status: 404 });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(
        JSON.stringify({
          error: 'Internal server error',
          details: error instanceof Error ? error.message : 'Unknown error'
        }),
        {
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }
};

/**
 * Serve the main HTML page
 */
function serveHTML(): Response {
  return new Response(dashboardHTML, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0'
    }
  });
}

// Legacy function for reference (replaced by imported dashboard HTML)
function serveHTMLOld(): Response {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Critical Tech Tracker - US-China Research Collaborations Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background: #f5f5f5;
    }

    .header {
      background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
      color: white;
      padding: 2rem 0;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }

    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }

    h1 {
      font-size: 2rem;
      margin-bottom: 0.5rem;
    }

    .subtitle {
      font-size: 1.1rem;
      opacity: 0.9;
    }

    .search-section {
      background: white;
      padding: 2rem;
      margin: 2rem auto;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .search-form {
      display: grid;
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    label {
      font-weight: 600;
      color: #555;
    }

    select, input {
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    select:focus, input:focus {
      outline: none;
      border-color: #3b82f6;
    }

    .btn {
      padding: 0.75rem 1.5rem;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background 0.2s;
    }

    .btn:hover {
      background: #2563eb;
    }

    .btn:disabled {
      background: #94a3b8;
      cursor: not-allowed;
    }

    .loading {
      text-align: center;
      padding: 2rem;
      color: #666;
    }

    .results-section {
      margin-top: 2rem;
    }

    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }

    .stat-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .stat-value {
      font-size: 2rem;
      font-weight: bold;
      color: #3b82f6;
    }

    .stat-label {
      color: #666;
      font-size: 0.9rem;
      margin-top: 0.25rem;
    }

    .funders-section {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .funders-section h3 {
      margin-bottom: 1rem;
      color: #1e3a8a;
    }

    .funder-item {
      padding: 0.75rem;
      border-left: 3px solid #ef4444;
      background: #fef2f2;
      margin-bottom: 0.5rem;
      border-radius: 4px;
    }

    .funder-name {
      font-weight: 600;
      color: #991b1b;
    }

    .funder-stats {
      font-size: 0.85rem;
      color: #666;
      margin-top: 0.25rem;
    }

    .work-card {
      background: white;
      padding: 1.5rem;
      margin-bottom: 1rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      border-left: 4px solid #3b82f6;
    }

    .work-title {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1e3a8a;
      margin-bottom: 0.5rem;
    }

    .work-meta {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
    }

    .work-details {
      display: grid;
      gap: 0.5rem;
      font-size: 0.9rem;
    }

    .detail-item {
      display: flex;
      gap: 0.5rem;
    }

    .detail-label {
      font-weight: 600;
      min-width: 120px;
    }

    .badge {
      display: inline-block;
      padding: 0.25rem 0.5rem;
      background: #dbeafe;
      color: #1e40af;
      border-radius: 4px;
      font-size: 0.85rem;
      margin-right: 0.5rem;
    }

    .risk-high {
      background: #fef2f2;
      color: #991b1b;
    }

    .risk-medium {
      background: #fef3c7;
      color: #92400e;
    }

    .footer {
      text-align: center;
      padding: 2rem;
      color: #666;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="header">
    <div class="container">
      <h1>🔍 Critical Tech Tracker</h1>
      <p class="subtitle">US-China Research Collaborations in Made in China 2025 Strategic Sectors</p>
    </div>
  </div>

  <div class="container">
    <div class="search-section">
      <form id="searchForm" class="search-form">
        <div class="form-group">
          <label for="sector">Select Strategic Sector</label>
          <select id="sector" name="sector">
            <option value="">Loading sectors...</option>
          </select>
        </div>

        <div class="form-group">
          <label for="yearFrom">Year Range</label>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <input type="number" id="yearFrom" name="yearFrom" placeholder="From (e.g., 2015)" min="2000" max="2025">
            <input type="number" id="yearTo" name="yearTo" placeholder="To (e.g., 2025)" min="2000" max="2025">
          </div>
        </div>

        <div class="form-group">
          <label for="minCitations">Minimum Citations</label>
          <input type="number" id="minCitations" name="minCitations" placeholder="e.g., 10" min="0">
        </div>

        <button type="submit" class="btn" id="searchBtn">Search Collaborations</button>
      </form>
    </div>

    <div id="loading" class="loading" style="display: none;">
      <p>🔄 Searching publications...</p>
    </div>

    <div id="results" class="results-section" style="display: none;">
      <div class="stats" id="stats"></div>
      <div class="funders-section" id="fundersSection" style="display: none;">
        <h3>⚠️ Chinese Foreign Influence Groups Identified</h3>
        <div id="funders"></div>
      </div>
      <div id="works"></div>
    </div>
  </div>

  <div class="footer">
    <p>Data provided by OpenAlex. Analysis focuses on publicly available research publications.</p>
  </div>

  <script>
    const API_BASE = '';

    // Load sectors on page load
    async function loadSectors() {
      try {
        const response = await fetch(\`\${API_BASE}/api/sectors\`);
        const data = await response.json();
        const select = document.getElementById('sector');
        select.innerHTML = '<option value="">All Sectors</option>';
        data.sectors.forEach(sector => {
          const option = document.createElement('option');
          option.value = sector.id;
          option.textContent = sector.name;
          select.appendChild(option);
        });
      } catch (error) {
        console.error('Failed to load sectors:', error);
      }
    }

    // Handle search
    document.getElementById('searchForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      const params = new URLSearchParams();

      for (const [key, value] of formData.entries()) {
        if (value) params.append(key, value);
      }

      // Show loading
      document.getElementById('loading').style.display = 'block';
      document.getElementById('results').style.display = 'none';
      document.getElementById('searchBtn').disabled = true;

      try {
        const response = await fetch(\`\${API_BASE}/api/search?\${params}\`);
        const data = await response.json();

        if (data.error) {
          alert('Error: ' + data.error);
          return;
        }

        displayResults(data);
      } catch (error) {
        console.error('Search failed:', error);
        alert('Search failed. Please try again.');
      } finally {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('searchBtn').disabled = false;
      }
    });

    function displayResults(data) {
      // Show results section
      document.getElementById('results').style.display = 'block';

      // Display stats
      const statsHTML = \`
        <div class="stat-card">
          <div class="stat-value">\${data.results.length}</div>
          <div class="stat-label">Collaborations Found</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">\${data.meta.top_chinese_funders.length}</div>
          <div class="stat-label">Chinese Funders</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">\${data.meta.sectors_covered.length}</div>
          <div class="stat-label">Sectors Covered</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">\${data.results.reduce((sum, r) => sum + r.work.cited_by_count, 0)}</div>
          <div class="stat-label">Total Citations</div>
        </div>
      \`;
      document.getElementById('stats').innerHTML = statsHTML;

      // Display top Chinese funders
      if (data.meta.top_chinese_funders.length > 0) {
        document.getElementById('fundersSection').style.display = 'block';
        const fundersHTML = data.meta.top_chinese_funders.map(funder => \`
          <div class="funder-item">
            <div class="funder-name">\${funder.name}</div>
            <div class="funder-stats">
              \${funder.works_count} publications · \${funder.total_citations} citations
            </div>
          </div>
        \`).join('');
        document.getElementById('funders').innerHTML = fundersHTML;
      }

      // Display works
      const worksHTML = data.results.map(result => {
        const work = result.work;
        return \`
          <div class="work-card">
            <div class="work-title">\${work.title}</div>
            <div class="work-meta">
              📅 \${work.publication_year} · 📚 \${work.cited_by_count} citations · 🤝 Score: \${result.collaboration_score}/100
            </div>
            <div class="work-details">
              <div class="detail-item">
                <span class="detail-label">🇺🇸 US Authors:</span>
                <span>\${result.us_authors.length}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">🇨🇳 Chinese Authors:</span>
                <span>\${result.china_authors.length}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">US Institutions:</span>
                <span>\${result.us_institutions.map(i => i.display_name).join(', ')}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">CN Institutions:</span>
                <span>\${result.china_institutions.map(i => i.display_name).join(', ')}</span>
              </div>
              \${result.chinese_funders.length > 0 ? \`
                <div class="detail-item">
                  <span class="detail-label">⚠️ CN Funders:</span>
                  <span>
                    \${result.chinese_funders.map(f => \`
                      <span class="badge risk-\${f.risk_level}">\${f.name}</span>
                    \`).join('')}
                  </span>
                </div>
              \` : ''}
              \${work.doi ? \`
                <div class="detail-item">
                  <span class="detail-label">DOI:</span>
                  <a href="https://doi.org/\${work.doi}" target="_blank">\${work.doi}</a>
                </div>
              \` : ''}
            </div>
          </div>
        \`;
      }).join('');
      document.getElementById('works').innerHTML = worksHTML;
    }

    // Load sectors on page load
    loadSectors();
  </script>
</body>
</html>`;

  return new Response(html, {
    headers: {
      'Content-Type': 'text/html',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
