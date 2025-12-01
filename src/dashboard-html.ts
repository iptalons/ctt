/**
 * Professional MVP Dashboard HTML Template
 * Investor-ready interface with charts, tables, and drill-down capabilities
 */

export const dashboardHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Critical Tech Tracker - Intelligence Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    :root {
      --navy-dark: #0A2239;
      --navy: #1E3A5F;
      --navy-light: #2E4A6F;
      --gold: #D4AF37;
      --gold-light: #E5C158;
      --white: #FFFFFF;
      --gray-50: #F9FAFB;
      --gray-100: #F3F4F6;
      --gray-200: #E5E7EB;
      --gray-300: #D1D5DB;
      --gray-600: #4B5563;
      --gray-800: #1F2937;
      --red: #DC2626;
      --orange: #EA580C;
      --green: #059669;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', sans-serif;
      line-height: 1.6;
      color: var(--gray-800);
      background: var(--gray-50);
    }

    /* Header */
    .header {
      background: linear-gradient(135deg, var(--navy-dark) 0%, var(--navy) 100%);
      color: var(--white);
      padding: 1.5rem 0;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .logo-placeholder {
      width: 140px;
      height: 50px;
      background: var(--white);
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      color: var(--navy-dark);
      font-size: 0.9rem;
      border: 2px solid var(--gold);
    }

    .header-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--white);
    }

    .header-subtitle {
      font-size: 0.875rem;
      opacity: 0.9;
      margin-top: 0.25rem;
    }

    .header-actions {
      display: flex;
      gap: 0.75rem;
    }

    /* Container */
    .container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }

    /* Executive Summary Section */
    .executive-summary {
      background: var(--white);
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border-left: 4px solid var(--gold);
    }

    .summary-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--gray-200);
    }

    .summary-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--navy-dark);
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    /* KPI Cards */
    .kpi-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 2rem;
    }

    .kpi-card {
      background: linear-gradient(135deg, var(--white) 0%, var(--gray-50) 100%);
      border-radius: 10px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      border: 1px solid var(--gray-200);
      transition: transform 0.2s, box-shadow 0.2s;
      position: relative;
      overflow: hidden;
    }

    .kpi-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 4px;
      background: linear-gradient(90deg, var(--navy) 0%, var(--gold) 100%);
    }

    .kpi-card:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    }

    .kpi-icon {
      width: 48px;
      height: 48px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .kpi-icon.blue { background: #DBEAFE; color: var(--navy); }
    .kpi-icon.gold { background: #FEF3C7; color: #92400E; }
    .kpi-icon.red { background: #FEE2E2; color: var(--red); }
    .kpi-icon.green { background: #D1FAE5; color: var(--green); }

    .kpi-value {
      font-size: 2.25rem;
      font-weight: 700;
      color: var(--navy-dark);
      line-height: 1;
      margin-bottom: 0.5rem;
    }

    .kpi-label {
      font-size: 0.875rem;
      color: var(--gray-600);
      font-weight: 500;
    }

    .kpi-trend {
      font-size: 0.75rem;
      margin-top: 0.5rem;
      display: flex;
      align-items: center;
      gap: 0.25rem;
    }

    .trend-up { color: var(--green); }
    .trend-down { color: var(--red); }

    /* Search Panel */
    .search-panel {
      background: var(--white);
      border-radius: 12px;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .search-panel h3 {
      font-size: 1.25rem;
      color: var(--navy-dark);
      margin-bottom: 1.5rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .search-form {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 600;
      color: var(--gray-700);
      font-size: 0.875rem;
    }

    .form-group select,
    .form-group input {
      padding: 0.75rem 1rem;
      border: 2px solid var(--gray-200);
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.2s;
    }

    .form-group select:focus,
    .form-group input:focus {
      outline: none;
      border-color: var(--gold);
    }

    /* Buttons */
    .btn {
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s;
      border: none;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
    }

    .btn-primary {
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-light) 100%);
      color: var(--white);
    }

    .btn-primary:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 8px rgba(0,0,0,0.15);
    }

    .btn-secondary {
      background: var(--white);
      color: var(--navy);
      border: 2px solid var(--navy);
    }

    .btn-secondary:hover {
      background: var(--navy);
      color: var(--white);
    }

    .btn-gold {
      background: var(--gold);
      color: var(--navy-dark);
    }

    .btn:disabled {
      background: var(--gray-300);
      cursor: not-allowed;
      transform: none;
    }

    /* Charts Section */
    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .chart-card {
      background: var(--white);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .chart-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      padding-bottom: 1rem;
      border-bottom: 2px solid var(--gray-200);
    }

    .chart-title {
      font-size: 1.125rem;
      font-weight: 700;
      color: var(--navy-dark);
    }

    .chart-container {
      position: relative;
      height: 300px;
    }

    /* Data Table */
    .table-card {
      background: var(--white);
      border-radius: 12px;
      padding: 1.5rem;
      margin-bottom: 2rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
    }

    .table-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--navy-dark);
    }

    .table-actions {
      display: flex;
      gap: 0.75rem;
    }

    .data-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 0.875rem;
    }

    .data-table thead {
      background: var(--gray-100);
    }

    .data-table th {
      padding: 1rem;
      text-align: left;
      font-weight: 600;
      color: var(--navy-dark);
      border-bottom: 2px solid var(--gray-300);
    }

    .data-table td {
      padding: 1rem;
      border-bottom: 1px solid var(--gray-200);
    }

    .data-table tbody tr:hover {
      background: var(--gray-50);
      cursor: pointer;
    }

    /* Risk Badges */
    .risk-badge {
      padding: 0.25rem 0.75rem;
      border-radius: 9999px;
      font-size: 0.75rem;
      font-weight: 600;
      display: inline-block;
    }

    .risk-high {
      background: #FEE2E2;
      color: #991B1B;
    }

    .risk-medium {
      background: #FEF3C7;
      color: #92400E;
    }

    .risk-low {
      background: #D1FAE5;
      color: #065F46;
    }

    /* Modal */
    .modal {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0,0,0,0.5);
      z-index: 1000;
      align-items: center;
      justify-content: center;
      padding: 2rem;
    }

    .modal.active {
      display: flex;
    }

    .modal-content {
      background: var(--white);
      border-radius: 12px;
      max-width: 900px;
      max-height: 90vh;
      overflow-y: auto;
      position: relative;
      box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1);
    }

    .modal-header {
      padding: 2rem;
      border-bottom: 2px solid var(--gray-200);
      display: flex;
      justify-content: space-between;
      align-items: start;
    }

    .modal-title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--navy-dark);
      flex: 1;
    }

    .modal-close {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      border: none;
      background: var(--gray-100);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.25rem;
      color: var(--gray-600);
    }

    .modal-close:hover {
      background: var(--gray-200);
    }

    .modal-body {
      padding: 2rem;
    }

    /* Loading */
    .loading {
      text-align: center;
      padding: 4rem 2rem;
    }

    .spinner {
      width: 48px;
      height: 48px;
      border: 4px solid var(--gray-200);
      border-top-color: var(--navy);
      border-radius: 50%;
      animation: spin 1s linear infinite;
      margin: 0 auto 1rem;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Alert */
    .alert {
      padding: 1rem 1.5rem;
      border-radius: 8px;
      margin-bottom: 1rem;
      display: flex;
      align-items: start;
      gap: 0.75rem;
    }

    .alert-info {
      background: #DBEAFE;
      color: #1E40AF;
      border-left: 4px solid #3B82F6;
    }

    .alert-warning {
      background: #FEF3C7;
      color: #92400E;
      border-left: 4px solid #F59E0B;
    }

    /* Footer */
    .footer {
      text-align: center;
      padding: 3rem 2rem;
      color: var(--gray-600);
      font-size: 0.875rem;
      border-top: 1px solid var(--gray-200);
      margin-top: 4rem;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .charts-grid {
        grid-template-columns: 1fr;
      }

      .search-form {
        grid-template-columns: 1fr;
      }

      .kpi-grid {
        grid-template-columns: 1fr;
      }

      .header-content {
        flex-direction: column;
        gap: 1rem;
        align-items: flex-start;
      }

      .container {
        padding: 1rem;
      }
    }

    /* Hide when no results */
    .hidden {
      display: none !important;
    }
  </style>
</head>
<body>
  <!-- Header -->
  <header class="header">
    <div class="header-content">
      <div class="logo-section">
        <div class="logo-placeholder">
          <img src="https://images.squarespace-cdn.com/content/v1/64f7594469971a2373540cad/f7dccc87-2458-4b9d-a545-8bd39e2c6874/IPTalonsLogo.png"
               alt="IP Talons"
               style="max-width: 100%; max-height: 100%; object-fit: contain;"
               onerror="this.style.display='none'; this.parentElement.textContent='IP TALONS'">
        </div>
        <div>
          <div class="header-title">Critical Tech Tracker</div>
          <div class="header-subtitle">US-China Research Intelligence Dashboard</div>
        </div>
      </div>
      <div class="header-actions">
        <button class="btn btn-secondary" onclick="exportData()">
          <i class="fas fa-download"></i> Export Report
        </button>
      </div>
    </div>
  </header>

  <div class="container">
    <!-- Filter Panel -->
    <section class="search-panel">
      <h3><i class="fas fa-filter"></i> Filter Parameters</h3>
      <form id="searchForm" class="search-form">
        <div class="form-group">
          <label for="sector">Strategic Sector</label>
          <select id="sector" name="sector">
            <option value="">Loading sectors...</option>
          </select>
        </div>

        <div class="form-group">
          <label for="yearFrom">Year From</label>
          <input type="number" id="yearFrom" name="yearFrom" placeholder="2015" min="2000" max="2025" value="2020">
        </div>

        <div class="form-group">
          <label for="yearTo">Year To</label>
          <input type="number" id="yearTo" name="yearTo" placeholder="2025" min="2000" max="2025" value="2025">
        </div>

        <div class="form-group">
          <label for="minCitations">Min. Citations</label>
          <input type="number" id="minCitations" name="minCitations" placeholder="10" min="0" value="10">
        </div>

        <div class="form-group" style="display: none;">
          <button type="submit" class="btn btn-primary" id="searchBtn" style="width: 100%;">
            <i class="fas fa-sync-alt"></i> Refresh Results
          </button>
        </div>
      </form>
    </section>

    <!-- Executive Summary -->
    <section class="executive-summary hidden" id="executiveSummary">
      <div class="summary-header">
        <div class="summary-title">
          <i class="fas fa-chart-line"></i>
          Executive Summary
        </div>
      </div>

      <!-- KPI Grid -->
      <div class="kpi-grid" id="kpiGrid">
        <!-- KPIs will be inserted here -->
      </div>

      <div class="alert alert-warning">
        <i class="fas fa-exclamation-triangle"></i>
        <div>
          <strong>Foreign Influence Alert:</strong> This analysis identifies research collaborations
          involving Chinese government, military, and state-owned enterprise funding in strategic technology sectors.
        </div>
      </div>
    </section>

    <!-- Loading State -->
    <div id="loading" class="loading hidden">
      <div class="spinner"></div>
      <p style="color: var(--gray-600); font-weight: 600;">Analyzing research collaborations...</p>
    </div>

    <!-- Results Section -->
    <div id="results" class="hidden">
      <!-- Charts Grid -->
      <section class="charts-grid">
        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-chart-line"></i> Collaboration Trends</div>
          </div>
          <div class="chart-container">
            <canvas id="trendsChart"></canvas>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-chart-bar"></i> Sector Distribution</div>
          </div>
          <div class="chart-container">
            <canvas id="sectorsChart"></canvas>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-chart-pie"></i> Funder Risk Levels</div>
          </div>
          <div class="chart-container">
            <canvas id="fundersChart"></canvas>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-medal"></i> Top Institutions</div>
          </div>
          <div class="chart-container">
            <canvas id="institutionsChart"></canvas>
          </div>
        </div>
      </section>

      <!-- Chinese Funders Table -->
      <section class="table-card hidden" id="fundersTable">
        <div class="table-header">
          <div class="table-title"><i class="fas fa-exclamation-triangle"></i> Chinese Foreign Influence Groups</div>
          <div class="table-actions">
            <button class="btn btn-secondary" onclick="exportFunders()">
              <i class="fas fa-file-csv"></i> Export
            </button>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Funder Name</th>
              <th>Type</th>
              <th>Risk Level</th>
              <th>Publications</th>
              <th>Citations</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="fundersTableBody">
            <!-- Rows will be inserted here -->
          </tbody>
        </table>
      </section>

      <!-- Publications Table -->
      <section class="table-card">
        <div class="table-header">
          <div class="table-title"><i class="fas fa-file-alt"></i> Research Publications</div>
          <div class="table-actions">
            <button class="btn btn-secondary" onclick="exportPublications()">
              <i class="fas fa-file-csv"></i> Export
            </button>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Year</th>
              <th>Citations</th>
              <th>Collab Score</th>
              <th>Risk</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody id="publicationsTableBody">
            <!-- Rows will be inserted here -->
          </tbody>
        </table>
      </section>
    </div>
  </div>

  <!-- Detail Modal -->
  <div id="detailModal" class="modal">
    <div class="modal-content">
      <div class="modal-header">
        <div class="modal-title" id="modalTitle"></div>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body" id="modalBody">
        <!-- Content will be inserted here -->
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="footer">
    <p><strong>Data Source:</strong> OpenAlex API | <strong>Analysis:</strong> Made in China 2025 Strategic Sectors</p>
    <p style="margin-top: 0.5rem; font-size: 0.8rem;">
      This tool analyzes publicly available research publications. Results should be verified through additional sources.
    </p>
  </footer>

  <script>
    const API_BASE = '';
    let currentData = null;
    let charts = {};

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
          // Set Next-Generation IT as default
          if (sector.id === 'next_gen_it') {
            option.selected = true;
          }
          select.appendChild(option);
        });

        // Add event listeners for auto-search on any form change
        select.addEventListener('change', () => {
          performSearch();
        });

        // Add event listeners to year and citation inputs
        document.getElementById('yearFrom').addEventListener('change', () => {
          performSearch();
        });
        document.getElementById('yearTo').addEventListener('change', () => {
          performSearch();
        });
        document.getElementById('minCitations').addEventListener('change', () => {
          performSearch();
        });

        // Auto-load with default sector on page load
        setTimeout(() => performSearch(), 500);
      } catch (error) {
        console.error('Failed to load sectors:', error);
      }
    }

    // Handle search form submission
    document.getElementById('searchForm').addEventListener('submit', async (e) => {
      e.preventDefault();
      await performSearch();
    });

    async function performSearch() {
      const formData = new FormData(document.getElementById('searchForm'));
      const params = new URLSearchParams();

      for (const [key, value] of formData.entries()) {
        if (value) params.append(key, value);
      }

      // Show loading
      document.getElementById('loading').classList.remove('hidden');
      document.getElementById('results').classList.add('hidden');
      document.getElementById('executiveSummary').classList.add('hidden');
      document.getElementById('searchBtn').disabled = true;

      try {
        const response = await fetch(\`\${API_BASE}/api/search?\${params}\`);
        const data = await response.json();

        if (data.error) {
          alert('Error: ' + data.error);
          return;
        }

        currentData = data;
        displayResults(data);
      } catch (error) {
        console.error('Search failed:', error);
        alert('Search failed. Please try again.');
      } finally {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('searchBtn').disabled = false;
      }
    }

    function displayResults(data) {
      // Show results sections
      document.getElementById('results').classList.remove('hidden');
      document.getElementById('executiveSummary').classList.remove('hidden');

      // Display KPIs
      displayKPIs(data);

      // Display Charts
      displayCharts(data);

      // Display Tables
      displayFundersTable(data);
      displayPublicationsTable(data);
    }

    function displayKPIs(data) {
      const totalCollabs = data.results.length;
      const totalCitations = data.results.reduce((sum, r) => sum + r.work.cited_by_count, 0);
      const avgCitations = totalCollabs > 0 ? Math.round(totalCitations / totalCollabs) : 0;
      const highRiskFunders = data.meta.top_chinese_funders.filter(f => f.name.toLowerCase().includes('pla') ||
        f.name.toLowerCase().includes('military') || f.name.toLowerCase().includes('national')).length;

      const kpis = [
        {
          icon: 'fa-handshake',
          iconClass: 'blue',
          value: totalCollabs.toLocaleString(),
          label: 'US-China Collaborations',
          trend: null
        },
        {
          icon: 'fa-exclamation-triangle',
          iconClass: 'red',
          value: data.meta.top_chinese_funders.length,
          label: 'Chinese Funders Identified',
          trend: highRiskFunders > 0 ? \`\${highRiskFunders} High Risk\` : null
        },
        {
          icon: 'fa-industry',
          iconClass: 'gold',
          value: data.meta.sectors_covered.length,
          label: 'Strategic Sectors',
          trend: null
        },
        {
          icon: 'fa-quote-right',
          iconClass: 'green',
          value: avgCitations.toLocaleString(),
          label: 'Avg. Citations/Paper',
          trend: \`Total: \${totalCitations.toLocaleString()}\`
        }
      ];

      const kpiHTML = kpis.map(kpi => \`
        <div class="kpi-card">
          <div class="kpi-icon \${kpi.iconClass}">
            <i class="fas \${kpi.icon}"></i>
          </div>
          <div class="kpi-value">\${kpi.value}</div>
          <div class="kpi-label">\${kpi.label}</div>
          \${kpi.trend ? \`<div class="kpi-trend">\${kpi.trend}</div>\` : ''}
        </div>
      \`).join('');

      document.getElementById('kpiGrid').innerHTML = kpiHTML;
    }

    function displayCharts(data) {
      // Destroy existing charts
      Object.values(charts).forEach(chart => chart.destroy());
      charts = {};

      // Trends Chart
      const trendData = data.meta.collaboration_trends || [];
      charts.trends = new Chart(document.getElementById('trendsChart'), {
        type: 'line',
        data: {
          labels: trendData.map(t => t.year),
          datasets: [{
            label: 'Collaborations',
            data: trendData.map(t => t.count),
            borderColor: '#1E3A5F',
            backgroundColor: 'rgba(30, 58, 95, 0.1)',
            tension: 0.4,
            fill: true
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      // Sectors Chart
      const sectorCounts = {};
      data.results.forEach(r => {
        if (r.work.concepts) {
          r.work.concepts.slice(0, 3).forEach(c => {
            sectorCounts[c.display_name] = (sectorCounts[c.display_name] || 0) + 1;
          });
        }
      });
      const topSectors = Object.entries(sectorCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5);

      charts.sectors = new Chart(document.getElementById('sectorsChart'), {
        type: 'bar',
        data: {
          labels: topSectors.map(s => s[0]),
          datasets: [{
            label: 'Publications',
            data: topSectors.map(s => s[1]),
            backgroundColor: '#D4AF37'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true }
          }
        }
      });

      // Funders Risk Chart
      const riskCounts = { high: 0, medium: 0, low: 0 };
      data.results.forEach(r => {
        r.chinese_funders.forEach(f => {
          riskCounts[f.risk_level]++;
        });
      });

      charts.funders = new Chart(document.getElementById('fundersChart'), {
        type: 'doughnut',
        data: {
          labels: ['High Risk', 'Medium Risk', 'Low Risk'],
          datasets: [{
            data: [riskCounts.high, riskCounts.medium, riskCounts.low],
            backgroundColor: ['#DC2626', '#EA580C', '#059669']
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });

      // Institutions Chart
      const instCounts = {};
      data.results.forEach(r => {
        r.china_institutions.slice(0, 2).forEach(inst => {
          instCounts[inst.display_name] = (instCounts[inst.display_name] || 0) + 1;
        });
      });
      const topInsts = Object.entries(instCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      charts.institutions = new Chart(document.getElementById('institutionsChart'), {
        type: 'bar',
        data: {
          labels: topInsts.map(i => i[0].length > 30 ? i[0].substring(0, 30) + '...' : i[0]),
          datasets: [{
            label: 'Publications',
            data: topInsts.map(i => i[1]),
            backgroundColor: '#1E3A5F'
          }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            x: { beginAtZero: true }
          }
        }
      });
    }

    function displayFundersTable(data) {
      if (data.meta.top_chinese_funders.length === 0) {
        document.getElementById('fundersTable').classList.add('hidden');
        return;
      }

      document.getElementById('fundersTable').classList.remove('hidden');

      // Aggregate funder info with risk assessment
      const funderMap = {};
      data.results.forEach(r => {
        r.chinese_funders.forEach(f => {
          if (!funderMap[f.name]) {
            funderMap[f.name] = {
              name: f.name,
              type: f.type,
              risk: f.risk_level,
              pubs: 0,
              citations: 0
            };
          }
          funderMap[f.name].pubs++;
          funderMap[f.name].citations += r.work.cited_by_count;
        });
      });

      const funders = Object.values(funderMap).sort((a, b) => b.pubs - a.pubs);

      const tableHTML = funders.map(f => \`
        <tr onclick="showFunderDetail('\${f.name.replace(/'/g, "\\\\'")}')">
          <td><strong>\${f.name}</strong></td>
          <td><span style="text-transform: capitalize;">\${f.type}</span></td>
          <td><span class="risk-badge risk-\${f.risk}">\${f.risk.toUpperCase()}</span></td>
          <td>\${f.pubs}</td>
          <td>\${f.citations.toLocaleString()}</td>
          <td><button class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">View</button></td>
        </tr>
      \`).join('');

      document.getElementById('fundersTableBody').innerHTML = tableHTML;
    }

    function displayPublicationsTable(data) {
      const tableHTML = data.results.map((r, idx) => {
        const highestRisk = r.chinese_funders.reduce((max, f) => {
          const levels = { high: 3, medium: 2, low: 1 };
          return levels[f.risk_level] > levels[max] ? f.risk_level : max;
        }, 'low');

        return \`
          <tr onclick="showPublicationDetail(\${idx})">
            <td><strong>\${r.work.title}</strong></td>
            <td>\${r.work.publication_year}</td>
            <td>\${r.work.cited_by_count}</td>
            <td>\${r.collaboration_score}/100</td>
            <td><span class="risk-badge risk-\${highestRisk}">\${highestRisk.toUpperCase()}</span></td>
            <td><button class="btn btn-secondary" style="padding: 0.25rem 0.75rem; font-size: 0.8rem;">View</button></td>
          </tr>
        \`;
      }).join('');

      document.getElementById('publicationsTableBody').innerHTML = tableHTML;
    }

    function showPublicationDetail(index) {
      const result = currentData.results[index];
      const work = result.work;

      const modalHTML = \`
        <div style="display: grid; gap: 1.5rem;">
          <div>
            <h4 style="color: var(--navy-dark); margin-bottom: 0.5rem;">Publication Details</h4>
            <p><strong>Year:</strong> \${work.publication_year}</p>
            <p><strong>Citations:</strong> \${work.cited_by_count}</p>
            <p><strong>Collaboration Score:</strong> \${result.collaboration_score}/100</p>
            \${work.doi ? \`<p><strong>DOI:</strong> <a href="https://doi.org/\${work.doi}" target="_blank">\${work.doi}</a></p>\` : ''}
          </div>

          <div>
            <h4 style="color: var(--navy-dark); margin-bottom: 0.5rem;">US Authors & Institutions</h4>
            <p><strong>Authors:</strong> \${result.us_authors.length}</p>
            <p><strong>Institutions:</strong></p>
            <ul style="margin-left: 1.5rem;">
              \${result.us_institutions.map(i => \`<li>\${i.display_name}</li>\`).join('')}
            </ul>
          </div>

          <div>
            <h4 style="color: var(--navy-dark); margin-bottom: 0.5rem;">Chinese Authors & Institutions</h4>
            <p><strong>Authors:</strong> \${result.china_authors.length}</p>
            <p><strong>Institutions:</strong></p>
            <ul style="margin-left: 1.5rem;">
              \${result.china_institutions.map(i => \`<li>\${i.display_name}</li>\`).join('')}
            </ul>
          </div>

          \${result.chinese_funders.length > 0 ? \`
            <div>
              <h4 style="color: var(--red); margin-bottom: 0.5rem;">⚠️ Chinese Funders</h4>
              <ul style="margin-left: 1.5rem;">
                \${result.chinese_funders.map(f => \`
                  <li>
                    <strong>\${f.name}</strong>
                    <span class="risk-badge risk-\${f.risk_level}">\${f.risk_level.toUpperCase()}</span>
                    <br><small>Type: \${f.type}</small>
                  </li>
                \`).join('')}
              </ul>
            </div>
          \` : ''}
        </div>
      \`;

      document.getElementById('modalTitle').textContent = work.title;
      document.getElementById('modalBody').innerHTML = modalHTML;
      document.getElementById('detailModal').classList.add('active');
    }

    function showFunderDetail(funderName) {
      const relatedPubs = currentData.results.filter(r =>
        r.chinese_funders.some(f => f.name === funderName)
      );

      const funder = relatedPubs[0].chinese_funders.find(f => f.name === funderName);

      const modalHTML = \`
        <div style="display: grid; gap: 1.5rem;">
          <div>
            <span class="risk-badge risk-\${funder.risk_level}" style="font-size: 1rem; padding: 0.5rem 1rem;">
              \${funder.risk_level.toUpperCase()} RISK
            </span>
            <p style="margin-top: 1rem;"><strong>Type:</strong> \${funder.type}</p>
            <p><strong>Publications Found:</strong> \${relatedPubs.length}</p>
            <p><strong>Total Citations:</strong> \${relatedPubs.reduce((sum, r) => sum + r.work.cited_by_count, 0).toLocaleString()}</p>
          </div>

          <div>
            <h4 style="color: var(--navy-dark); margin-bottom: 0.5rem;">Related Publications</h4>
            <ul style="margin-left: 1.5rem; max-height: 400px; overflow-y: auto;">
              \${relatedPubs.map(r => \`
                <li style="margin-bottom: 1rem;">
                  <strong>\${r.work.title}</strong><br>
                  <small>Year: \${r.work.publication_year} | Citations: \${r.work.cited_by_count}</small>
                </li>
              \`).join('')}
            </ul>
          </div>
        </div>
      \`;

      document.getElementById('modalTitle').textContent = funderName;
      document.getElementById('modalBody').innerHTML = modalHTML;
      document.getElementById('detailModal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('detailModal').classList.remove('active');
    }

    function exportData() {
      if (!currentData) {
        alert('Please perform a search first.');
        return;
      }
      alert('Export functionality - Ready to implement CSV/PDF export');
    }

    function exportFunders() {
      alert('Export funders data - Ready to implement');
    }

    function exportPublications() {
      alert('Export publications data - Ready to implement');
    }

    // Close modal when clicking outside
    document.getElementById('detailModal').addEventListener('click', (e) => {
      if (e.target.id === 'detailModal') {
        closeModal();
      }
    });

    // Load sectors and auto-run search on page load
    loadSectors();
  </script>
</body>
</html>`;
