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
      --iptalons-green: #6B9E3E;
      --iptalons-green-dark: #5A8533;
      --iptalons-green-light: #7BB049;
      --white: #FFFFFF;
      --gray-50: #F9FAFB;
      --gray-100: #F3F4F6;
      --gray-200: #E5E7EB;
      --gray-300: #D1D5DB;
      --gray-400: #9CA3AF;
      --gray-500: #6B7280;
      --gray-600: #4B5563;
      --gray-700: #374151;
      --gray-800: #1F2937;
      --gray-900: #111827;
      --red: #DC2626;
      --orange: #EA580C;
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
      margin: 0;
      padding: 0;
    }

    /* Header */
    .header {
      background: var(--white);
      color: var(--gray-700);
      padding: 0.75rem 2rem;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      max-width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-section {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .logo-img {
      height: 40px;
      width: auto;
    }

    .header-actions {
      display: flex;
      gap: 0.75rem;
    }

    /* Main Layout */
    .main-layout {
      display: flex;
      min-height: calc(100vh - 60px);
    }

    /* Sidebar */
    .sidebar {
      width: 280px;
      background: var(--iptalons-green);
      padding: 2rem 1.5rem;
      box-shadow: 2px 0 8px rgba(0,0,0,0.1);
      position: sticky;
      top: 60px;
      height: calc(100vh - 60px);
      overflow-y: auto;
    }

    /* Container */
    .container {
      flex: 1;
      padding: 2rem;
      overflow-x: auto;
    }

    /* Page Title */
    .page-title {
      margin-bottom: 1.5rem;
    }

    .page-title h1 {
      font-size: 2rem;
      color: var(--iptalons-green);
      margin-bottom: 0.25rem;
      font-weight: 700;
    }

    .page-title p {
      color: var(--gray-600);
      font-size: 1rem;
    }

    /* Search Panel (Sidebar) */
    .search-panel {
      background: transparent;
      border-radius: 0;
      padding: 0;
      margin-bottom: 0;
      box-shadow: none;
    }

    .search-panel h3 {
      font-size: 1.1rem;
      color: var(--white);
      margin-bottom: 1.5rem;
      font-weight: 600;
    }

    /* Executive Summary Section */
    .executive-summary {
      background: var(--white);
      border-radius: 8px;
      padding: 1.5rem;
      margin-bottom: 1.5rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
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
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--gray-800);
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
      background: var(--white);
      border-radius: 8px;
      padding: 1.25rem;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      border: 1px solid var(--gray-200);
      display: flex;
      align-items: center;
      gap: 1rem;
      transition: box-shadow 0.2s;
    }

    .kpi-card:hover {
      box-shadow: 0 2px 6px rgba(0,0,0,0.15);
    }

    .kpi-icon {
      width: 60px;
      height: 60px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      flex-shrink: 0;
      background: var(--iptalons-green);
      color: var(--white);
    }

    .kpi-content {
      flex: 1;
    }

    .kpi-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--gray-800);
      line-height: 1;
      margin-bottom: 0.25rem;
    }

    .kpi-label {
      font-size: 0.875rem;
      color: var(--gray-600);
      font-weight: 400;
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

    .search-form {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      font-weight: 500;
      color: var(--white);
      font-size: 0.875rem;
    }

    .form-group select,
    .form-group input {
      padding: 0.65rem 0.875rem;
      border: 1px solid rgba(255,255,255,0.3);
      border-radius: 6px;
      font-size: 0.95rem;
      background: var(--white);
      color: var(--gray-800);
      transition: border-color 0.2s;
    }

    .form-group select:focus,
    .form-group input:focus {
      outline: none;
      border-color: var(--iptalons-green-light);
      box-shadow: 0 0 0 3px rgba(255,255,255,0.2);
    }

    /* Buttons */
    .btn {
      padding: 0.65rem 1.25rem;
      border-radius: 6px;
      font-size: 0.95rem;
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
      background: var(--iptalons-green);
      color: var(--white);
    }

    .btn-primary:hover {
      background: var(--iptalons-green-dark);
      transform: translateY(-1px);
      box-shadow: 0 2px 4px rgba(0,0,0,0.15);
    }

    .btn-secondary {
      background: var(--white);
      color: var(--iptalons-green);
      border: 1px solid var(--iptalons-green);
    }

    .btn-secondary:hover {
      background: var(--iptalons-green);
      color: var(--white);
    }

    .btn-action {
      background: var(--iptalons-green);
      color: var(--white);
      padding: 0.35rem 0.75rem;
      font-size: 0.85rem;
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
      background: var(--iptalons-green);
    }

    .data-table th {
      padding: 0.875rem 1rem;
      text-align: left;
      font-weight: 600;
      color: var(--white);
      font-size: 0.875rem;
      border: none;
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
      max-width: 1200px;
      width: 95%;
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
      border-top-color: var(--iptalons-green);
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
    @media (max-width: 1024px) {
      .main-layout {
        flex-direction: column;
      }

      .sidebar {
        width: 100%;
        position: relative;
        height: auto;
        top: 0;
      }
    }

    @media (max-width: 768px) {
      .charts-grid {
        grid-template-columns: 1fr;
      }

      .kpi-grid {
        grid-template-columns: 1fr;
      }

      .header-content {
        flex-wrap: wrap;
        gap: 1rem;
      }

      .container {
        padding: 1rem;
      }

      .page-title h1 {
        font-size: 1.5rem;
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
        <img src="https://images.squarespace-cdn.com/content/v1/64f7594469971a2373540cad/f7dccc87-2458-4b9d-a545-8bd39e2c6874/IPTalonsLogo.png"
             alt="IPTalons"
             class="logo-img"
             onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 150 40%22%3E%3Ctext x=%2210%22 y=%2228%22 font-family=%22Arial%22 font-size=%2220%22 font-weight=%22bold%22 fill=%22%236B9E3E%22%3EIPTalons%3C/text%3E%3C/svg%3E'">
      </div>
      <div class="header-actions">
        <button class="btn btn-primary" onclick="exportData()">
          <i class="fas fa-download"></i> Export Report
        </button>
      </div>
    </div>
  </header>

  <div class="main-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <section class="search-panel">
        <h3>Search Parameters</h3>
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
    </aside>

    <!-- Main Content -->
    <main class="container">
      <!-- Page Title -->
      <div class="page-title">
        <h1>Critical Tech Tracker</h1>
        <p>US-China Research Intelligence Dashboard</p>
      </div>

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
            <div class="chart-title"><i class="fas fa-building"></i> Top Chinese Institutions</div>
          </div>
          <div class="chart-container">
            <canvas id="institutionsChart"></canvas>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-university"></i> Top US Institutions</div>
          </div>
          <div class="chart-container">
            <canvas id="usInstitutionsChart"></canvas>
          </div>
        </div>

        <div class="chart-card">
          <div class="chart-header">
            <div class="chart-title"><i class="fas fa-calendar-alt"></i> Publications by Year</div>
          </div>
          <div class="chart-container">
            <canvas id="yearDistributionChart"></canvas>
          </div>
        </div>
      </section>

      <!-- Top US Institutions Table -->
      <section class="table-card hidden" id="usInstitutionsTable">
        <div class="table-header">
          <div class="table-title"><i class="fas fa-university"></i> Top US Institutions</div>
          <div class="table-actions">
            <button class="btn btn-secondary" onclick="exportUSInstitutions()">
              <i class="fas fa-file-csv"></i> Export
            </button>
          </div>
        </div>
        <table class="data-table">
          <thead>
            <tr>
              <th>Institution Name</th>
              <th>Type</th>
              <th>Publications</th>
              <th>Citations</th>
              <th>Top Sector</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody id="usInstitutionsTableBody">
            <!-- Rows will be inserted here -->
          </tbody>
        </table>
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

    </main>
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
      displayUSInstitutionsTable(data);
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
          value: totalCollabs.toLocaleString(),
          label: 'US-China Collaborations',
          sublabel: highRiskFunders > 0 ? \`(\${highRiskFunders} High Risk)\` : ''
        },
        {
          icon: 'fa-exclamation-triangle',
          value: data.meta.top_chinese_funders.length,
          label: 'Chinese Funders Identified',
          sublabel: highRiskFunders > 0 ? \`(\${highRiskFunders} High Risk)\` : ''
        },
        {
          icon: 'fa-industry',
          value: data.meta.sectors_covered.length,
          label: 'Strategic Sectors',
          sublabel: ''
        },
        {
          icon: 'fa-quote-right',
          value: avgCitations.toLocaleString(),
          label: 'Avg. Citations/Paper',
          sublabel: ''
        }
      ];

      const kpiHTML = kpis.map(kpi => \`
        <div class="kpi-card">
          <div class="kpi-icon">
            <i class="fas \${kpi.icon}"></i>
          </div>
          <div class="kpi-content">
            <div class="kpi-value">\${kpi.value}</div>
            <div class="kpi-label">\${kpi.label} \${kpi.sublabel}</div>
          </div>
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
            borderColor: '#6B9E3E',
            backgroundColor: 'rgba(107, 158, 62, 0.1)',
            tension: 0.4,
            fill: true,
            borderWidth: 3
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
            backgroundColor: '#6B9E3E'
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
            backgroundColor: ['#DC2626', '#EA580C', '#6B9E3E']
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
            backgroundColor: '#6B9E3E'
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

      // US Institutions Chart
      const usInstCounts = {};
      data.results.forEach(r => {
        r.us_institutions.slice(0, 2).forEach(inst => {
          usInstCounts[inst.display_name] = (usInstCounts[inst.display_name] || 0) + 1;
        });
      });
      const topUSInsts = Object.entries(usInstCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

      charts.usInstitutions = new Chart(document.getElementById('usInstitutionsChart'), {
        type: 'bar',
        data: {
          labels: topUSInsts.map(i => i[0].length > 30 ? i[0].substring(0, 30) + '...' : i[0]),
          datasets: [{
            label: 'Publications',
            data: topUSInsts.map(i => i[1]),
            backgroundColor: '#6B9E3E'
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

      // Publications by Year Chart
      const yearCounts = {};
      data.results.forEach(r => {
        const year = r.work.publication_year;
        if (year) {
          yearCounts[year] = (yearCounts[year] || 0) + 1;
        }
      });
      const yearData = Object.entries(yearCounts)
        .sort((a, b) => parseInt(a[0]) - parseInt(b[0]));

      charts.yearDistribution = new Chart(document.getElementById('yearDistributionChart'), {
        type: 'bar',
        data: {
          labels: yearData.map(y => y[0]),
          datasets: [{
            label: 'Publications',
            data: yearData.map(y => y[1]),
            backgroundColor: '#6B9E3E'
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
    }

    function displayUSInstitutionsTable(data) {
      // Aggregate US institutions from all publications
      const usInstMap = {};

      data.results.forEach(r => {
        r.us_institutions.forEach(inst => {
          if (!usInstMap[inst.display_name]) {
            usInstMap[inst.display_name] = {
              name: inst.display_name,
              type: inst.type || 'University',
              pubs: 0,
              citations: 0,
              sectors: new Set()
            };
          }
          usInstMap[inst.display_name].pubs++;
          usInstMap[inst.display_name].citations += r.work.cited_by_count;

          // Track sectors this institution is involved in
          if (r.work.concepts && r.work.concepts.length > 0) {
            r.work.concepts.slice(0, 3).forEach(concept => {
              usInstMap[inst.display_name].sectors.add(concept.display_name);
            });
          }
        });
      });

      const usInstitutions = Object.values(usInstMap)
        .map(inst => ({
          ...inst,
          topSector: Array.from(inst.sectors)[0] || 'N/A'
        }))
        .sort((a, b) => b.citations - a.citations); // Sort by citations

      if (usInstitutions.length === 0) {
        document.getElementById('usInstitutionsTable').classList.add('hidden');
        return;
      }

      document.getElementById('usInstitutionsTable').classList.remove('hidden');

      const tableHTML = usInstitutions.map(inst => \`
        <tr onclick="showUSInstitutionDetail('\${inst.name.replace(/'/g, "\\\\'")}')">
          <td><strong>\${inst.name}</strong></td>
          <td><span style="text-transform: capitalize;">\${inst.type}</span></td>
          <td>\${inst.pubs}</td>
          <td>\${inst.citations.toLocaleString()}</td>
          <td>\${inst.topSector}</td>
          <td><button class="btn btn-action">Details</button></td>
        </tr>
      \`).join('');

      document.getElementById('usInstitutionsTableBody').innerHTML = tableHTML;
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
          <td><button class="btn btn-action">Details</button></td>
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
            <td><button class="btn btn-action">Action</button></td>
          </tr>
        \`;
      }).join('');

      document.getElementById('publicationsTableBody').innerHTML = tableHTML;
    }

    function showPublicationDetail(index) {
      const result = currentData.results[index];
      const work = result.work;

      // Calculate highest risk level from funders
      const highestRisk = result.chinese_funders.reduce((max, f) => {
        const levels = { high: 3, medium: 2, low: 1 };
        return levels[f.risk_level] > levels[max] ? f.risk_level : max;
      }, 'low');

      // Build authors & affiliations data
      const authorsData = [];
      work.authorships?.forEach(a => {
        const authorName = a.author?.display_name || 'Unknown';
        const institution = a.institutions?.[0]?.display_name || 'Unknown';
        const country = a.institutions?.[0]?.country_code || 'N/A';

        // Determine risk based on country and institution
        let risk = 'low';
        if (country === 'CN') {
          // Check if institution is in Chinese funders or has high risk
          const isHighRisk = result.chinese_funders.some(f =>
            institution.toLowerCase().includes(f.name.toLowerCase()) ||
            f.risk_level === 'high'
          );
          risk = isHighRisk ? 'high' : 'medium';
        }

        authorsData.push({
          author: authorName,
          institution: institution,
          country: country,
          risk: risk
        });
      });

      // Build collaborating institutions data with citation tracking
      const institutionMap = {};
      work.authorships?.forEach(a => {
        a.institutions?.forEach(inst => {
          const instName = inst.display_name || 'Unknown';
          const country = inst.country_code || '';

          if (!institutionMap[instName]) {
            let category = inst.type || 'University';
            let risk = 'low';

            if (country === 'CN') {
              // Check if this is a known high-risk institution
              const instLower = instName.toLowerCase();
              if (instLower.includes('military') || instLower.includes('pla') || instLower.includes('defense')) {
                category = 'Military';
                risk = 'high';
              } else if (instLower.includes('academy of sciences') || instLower.includes('ministry')) {
                category = 'Government';
                risk = 'high';
              } else {
                risk = 'medium';
              }
            }

            institutionMap[instName] = {
              name: instName,
              category: category,
              risk: risk,
              country: country,
              citations: work.cited_by_count // Add citation count
            };
          }
        });
      });

      const institutions = Object.values(institutionMap);

      // Calculate impact factor (using citation count / years since publication as proxy)
      const yearsSincePublication = new Date().getFullYear() - work.publication_year;
      const impactFactor = yearsSincePublication > 0 ?
        (work.cited_by_count / yearsSincePublication).toFixed(2) :
        work.cited_by_count.toFixed(2);

      // Function to generate network visualization
      const generateNetworkSVG = (filteredInsts) => {
        const topInstitutions = filteredInsts.slice(0, 15);
        const centerX = 600;  // Center of 1200 width
        const centerY = 250;  // Center of 500 height
        const radius = 200;   // Larger radius for wider display

        let svg = '';

        // Calculate min/max citations for scaling
        const citationCounts = topInstitutions.map(i => i.citations);
        const maxCitations = Math.max(...citationCounts);
        const minCitations = Math.min(...citationCounts);

        topInstitutions.forEach((inst, i) => {
          const angle = (i / topInstitutions.length) * 2 * Math.PI;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          // Node color based on risk
          const nodeColor = inst.risk === 'high' ? '#dc3545' : inst.risk === 'medium' ? '#ffc107' : '#28a745';

          // Calculate node size based on citations (using square root for better visual scaling)
          const minSize = 10;
          const maxSize = 30;
          const citationRange = maxCitations - minCitations;
          const nodeSize = citationRange > 0
            ? minSize + (Math.sqrt(inst.citations - minCitations + 1) / Math.sqrt(citationRange + 1)) * (maxSize - minSize)
            : 15;

          // Draw connection line
          svg += \`<line x1="\${centerX}" y1="\${centerY}" x2="\${x}" y2="\${y}" stroke="#ccc" stroke-width="2" opacity="0.5"/>\`;

          // Draw node with title for tooltip
          svg += \`<circle cx="\${x}" cy="\${y}" r="\${nodeSize}" fill="\${nodeColor}" stroke="white" stroke-width="2">
            <title>\${inst.name}\\nCitations: \${inst.citations.toLocaleString()}\\nRisk: \${inst.risk.toUpperCase()}</title>
          </circle>\`;

          // Add label
          const labelX = centerX + (radius + 45) * Math.cos(angle);
          const labelY = centerY + (radius + 45) * Math.sin(angle);
          const textAnchor = labelX > centerX ? 'start' : 'end';
          svg += \`<text x="\${labelX}" y="\${labelY}" text-anchor="\${textAnchor}" font-size="12" fill="#333" font-weight="500">\${inst.name.substring(0, 25)}\${inst.name.length > 25 ? '...' : ''}</text>\`;
        });

        // Center node (publication)
        svg += \`<circle cx="\${centerX}" cy="\${centerY}" r="40" fill="#6B9E3E" stroke="white" stroke-width="3"/>\`;
        svg += \`<text x="\${centerX}" y="\${centerY}" text-anchor="middle" dominant-baseline="middle" font-size="14" fill="white" font-weight="bold">Publication</text>\`;

        // Add legend for node sizing
        svg += \`<text x="20" y="480" font-size="13" fill="#666" font-weight="500">Node size = Citations</text>\`;

        return svg;
      };

      // Generate initial network with all institutions
      const initialNetworkSVG = generateNetworkSVG(institutions);

      const modalHTML = \`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 1.5rem;">
          <!-- Citation Count Card -->
          <div style="border: 3px solid #6B9E3E; border-radius: 8px; padding: 1.5rem; text-align: center; background: white;">
            <div style="color: #666; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">CITATION COUNT:</div>
            <div style="color: #6B9E3E; font-size: 2rem; font-weight: bold;">\${work.cited_by_count}</div>
          </div>

          <!-- Impact Factor Card -->
          <div style="border: 3px solid #6B9E3E; border-radius: 8px; padding: 1.5rem; text-align: center; background: white; position: relative;">
            <div style="position: absolute; top: 10px; right: 10px; width: 20px; height: 20px; background: #6B9E3E; border-radius: 50%;"></div>
            <div style="color: #666; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">IMPACT FACTOR:</div>
            <div style="color: #6B9E3E; font-size: 2rem; font-weight: bold;">\${impactFactor}</div>
          </div>
        </div>

        <!-- Risk Level Filter (Clickable) -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 1.5rem; justify-content: center; align-items: center;">
          <span style="color: #666; font-size: 0.9rem; font-weight: 600; margin-right: 0.5rem;">Filter by Risk:</span>
          <span id="riskFilter_all" onclick="filterPublicationNetwork('all')" style="padding: 0.5rem 1rem; background: #6B9E3E; color: white; border-radius: 4px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 3px solid #6B9E3E;">ALL</span>
          <span id="riskFilter_high" onclick="filterPublicationNetwork('high')" style="padding: 0.5rem 1rem; background: #ff6b6b; color: white; border-radius: 4px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 3px solid transparent;">HIGH</span>
          <span id="riskFilter_medium" onclick="filterPublicationNetwork('medium')" style="padding: 0.5rem 1rem; background: #ffc107; color: white; border-radius: 4px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 3px solid transparent;">MEDIUM</span>
          <span id="riskFilter_low" onclick="filterPublicationNetwork('low')" style="padding: 0.5rem 1rem; background: #90EE90; color: #333; border-radius: 4px; font-size: 0.85rem; font-weight: 600; cursor: pointer; border: 3px solid transparent;">LOW</span>
        </div>

        <!-- Full-Width Network Visualization -->
        <div style="background: #f8f9fa; border-radius: 8px; padding: 1rem; margin-bottom: 2rem;">
          <svg id="publicationNetworkSVG" width="100%" height="500" viewBox="0 0 1200 500" style="background: white; border-radius: 4px;">
            \${initialNetworkSVG}
          </svg>
        </div>

        <!-- Tables Section (Two Columns) -->
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
          <!-- Authors & Affiliations Table -->
          <div style="background: #f8f9fa; border-radius: 8px; padding: 1rem;">
            <h4 style="color: #6B9E3E; margin-bottom: 1rem; font-size: 1rem;">Authors & Affiliations</h4>
            <div style="overflow-x: auto;">
              <table style="width: 100%; font-size: 0.85rem; background: white; border-collapse: collapse;">
                <thead style="background: #6B9E3E; color: white;">
                  <tr>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Author</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Institution</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Country</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Risk</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Details</th>
                  </tr>
                </thead>
                <tbody>
                  \${authorsData.slice(0, 10).map(a => \`
                    <tr>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">\${a.author.substring(0, 20)}\${a.author.length > 20 ? '...' : ''}</td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">\${a.institution.substring(0, 25)}\${a.institution.length > 25 ? '...' : ''}</td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">\${a.country}</td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">
                        <span style="color: \${a.risk === 'high' ? '#dc3545' : a.risk === 'medium' ? '#ffc107' : '#28a745'}; font-weight: 600;">
                          \${a.risk.toUpperCase()}
                        </span>
                      </td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd; color: #666;">Information ...</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Collaborating Institutions Table -->
          <div style="background: #f8f9fa; border-radius: 8px; padding: 1rem;">
            <h4 style="color: #6B9E3E; margin-bottom: 1rem; font-size: 1rem;">Collaborating Institutions</h4>
            <div style="overflow-x: auto;">
              <table style="width: 100%; font-size: 0.85rem; background: white; border-collapse: collapse;">
                <thead style="background: #6B9E3E; color: white;">
                  <tr>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Institution</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Category</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Risk</th>
                    <th style="padding: 0.5rem; text-align: left; border: 1px solid #ddd;">Details</th>
                  </tr>
                </thead>
                <tbody>
                  \${institutions.slice(0, 10).map(inst => \`
                    <tr>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">\${inst.name.substring(0, 30)}\${inst.name.length > 30 ? '...' : ''}</td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">\${inst.category}</td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd;">
                        <span style="color: \${inst.risk === 'high' ? '#dc3545' : inst.risk === 'medium' ? '#ffc107' : '#28a745'}; font-weight: 600;">
                          \${inst.risk.toUpperCase()}
                        </span>
                      </td>
                      <td style="padding: 0.5rem; border: 1px solid #ddd; color: #666;">Information ...</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Footer with data source -->
        <div style="margin-top: 1.5rem; padding: 1rem; background: #f8f9fa; border-radius: 4px; font-size: 0.75rem; color: #666;">
          <strong>Data source:</strong> <a href="https://www.nist.gov/itl/ssd/software-quality-group/collaborations-2023" target="_blank" style="color: #6B9E3E;">https://www.nist.gov/itl/ssd/software-quality-group/collaborations-2023</a>
          <br>
          <strong>Disclaimer:</strong> While considerable efforts were undertaken to verify all data, possible errors remain. Technical quality, etc. We disclaim all liability for accuracy, completeness, so possible to file a petition for survey of actions relating within working quality proceedings. | <a href="#" style="color: #6B9E3E;">Privacy Policy</a>
        </div>

        <!-- Publication Details -->
        <div style="margin-top: 1rem; padding: 1rem; background: white; border-radius: 4px; border-left: 4px solid #6B9E3E;">
          <p style="margin: 0.25rem 0;"><strong>Year:</strong> \${work.publication_year}</p>
          <p style="margin: 0.25rem 0;"><strong>Collaboration Score:</strong> \${result.collaboration_score}/100</p>
          \${work.doi ? \`<p style="margin: 0.25rem 0;"><strong>DOI:</strong> <a href="https://doi.org/\${work.doi}" target="_blank" style="color: #6B9E3E;">\${work.doi}</a></p>\` : ''}
        </div>
      \`;

      document.getElementById('modalTitle').textContent = 'Research Publication: ' + work.title;
      document.getElementById('modalTitle').style.color = '#6B9E3E';
      document.getElementById('modalBody').innerHTML = modalHTML;
      document.getElementById('detailModal').classList.add('active');

      // Store institutions data and generator function in window for filtering
      window.publicationInstitutions = institutions;
      window.generatePublicationNetworkSVG = generateNetworkSVG;
    }

    function showFunderDetail(funderName) {
      const relatedPubs = currentData.results.filter(r =>
        r.chinese_funders.some(f => f.name === funderName)
      );

      const funder = relatedPubs[0].chinese_funders.find(f => f.name === funderName);

      // Extract researchers from publications
      const researcherMap = {};
      relatedPubs.forEach(r => {
        r.work.authorships?.forEach(a => {
          const authorName = a.author?.display_name || 'Unknown';
          const country = a.countries?.[0] || '';
          const institution = a.institutions?.[0]?.display_name || 'Unknown';

          if (country === 'CN' || country === 'US') {
            if (!researcherMap[authorName]) {
              researcherMap[authorName] = {
                name: authorName,
                institution: institution,
                country: country,
                publications: 0,
                citations: 0
              };
            }
            researcherMap[authorName].publications++;
            researcherMap[authorName].citations += r.work.cited_by_count;
          }
        });
      });

      const topResearchers = Object.values(researcherMap)
        .sort((a, b) => b.publications - a.publications)
        .slice(0, 10);

      // Extract collaborating institutions
      const institutionMap = {};
      relatedPubs.forEach(r => {
        r.work.authorships?.forEach(a => {
          a.institutions?.forEach(inst => {
            const instName = inst.display_name || 'Unknown';
            const country = inst.country_code || '';

            if (country === 'CN' || country === 'US') {
              if (!institutionMap[instName]) {
                institutionMap[instName] = {
                  name: instName,
                  country: country,
                  type: inst.type || 'University',
                  publications: 0,
                  citations: 0
                };
              }
              institutionMap[instName].publications++;
              institutionMap[instName].citations += r.work.cited_by_count;
            }
          });
        });
      });

      const topInstitutions = Object.values(institutionMap)
        .sort((a, b) => b.publications - a.publications)
        .slice(0, 10);

      // Determine security credentials based on funder description or type
      let securityCredentials = 'Not Available';
      let securityClass = 'medium';

      if (funder.description) {
        if (funder.description.toLowerCase().includes('top secret')) {
          securityCredentials = 'TOP SECRET';
          securityClass = 'high';
        } else if (funder.description.toLowerCase().includes('secret')) {
          securityCredentials = 'SECRET';
          securityClass = 'medium';
        } else if (funder.description.toLowerCase().includes('military') || funder.description.toLowerCase().includes('seven sons')) {
          securityCredentials = 'CLASSIFIED';
          securityClass = 'high';
        }
      } else if (funder.type === 'military') {
        securityCredentials = 'CLASSIFIED';
        securityClass = 'high';
      }

      const modalHTML = \`
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-bottom: 2rem;">
          <!-- Risk Category Card -->
          <div style="border: 3px solid \${funder.risk_level === 'high' ? '#dc3545' : funder.risk_level === 'medium' ? '#ffc107' : '#28a745'}; border-radius: 8px; padding: 1.5rem; text-align: center; background: white;">
            <div style="color: #666; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">RISK CATEGORY:</div>
            <div style="color: \${funder.risk_level === 'high' ? '#dc3545' : funder.risk_level === 'medium' ? '#ffc107' : '#28a745'}; font-size: 2rem; font-weight: bold;">
              \${funder.risk_level === 'high' ? 'VERY HIGH' : funder.risk_level.toUpperCase()}
            </div>
          </div>

          <!-- Security Credentials Card -->
          <div style="border: 3px solid \${securityClass === 'high' ? '#dc3545' : '#6B9E3E'}; border-radius: 8px; padding: 1.5rem; text-align: center; background: white;">
            <div style="color: #666; font-size: 0.9rem; font-weight: 600; margin-bottom: 0.5rem;">SECURITY CREDENTIALS:</div>
            <div style="color: \${securityClass === 'high' ? '#dc3545' : '#6B9E3E'}; font-size: 2rem; font-weight: bold;">
              \${securityCredentials}
            </div>
          </div>
        </div>

        <!-- Risk Level Legend -->
        <div style="display: flex; gap: 0.5rem; margin-bottom: 2rem; background: #f8f9fa; padding: 1rem; border-radius: 4px;">
          <div style="flex: 1; background: #dc3545; color: white; padding: 0.5rem; text-align: center; border-radius: 4px; font-weight: 600;">VERY HIGH</div>
          <div style="flex: 1; background: #fd7e14; color: white; padding: 0.5rem; text-align: center; border-radius: 4px; font-weight: 600;">HIGH</div>
          <div style="flex: 1; background: #ffc107; color: white; padding: 0.5rem; text-align: center; border-radius: 4px; font-weight: 600;">MEDIUM</div>
          <div style="flex: 1; background: #28a745; color: white; padding: 0.5rem; text-align: center; border-radius: 4px; font-weight: 600;">LOW</div>
        </div>

        <!-- Network Visualization -->
        <div style="margin-top: 2rem;">
          <h4 style="color: var(--iptalons-green); margin-bottom: 1rem; border-bottom: 2px solid var(--iptalons-green); padding-bottom: 0.5rem;">
            <i class="fas fa-project-diagram"></i> Collaboration Network
          </h4>
          <div id="networkChart-\${Date.now()}" style="background: white; border-radius: 8px; padding: 1rem; height: 500px; position: relative; overflow: hidden;">
            <svg width="100%" height="100%" style="display: block;" viewBox="0 0 800 500">
              <!-- Define text for wrapping -->
              <defs>
                <style>
                  .inst-label { font-size: 9px; font-family: Arial, sans-serif; }
                  .central-label { font-size: 11px; font-weight: bold; font-family: Arial, sans-serif; fill: white; }
                </style>
              </defs>

              <!-- Connected institutions (circular layout) -->
              \${topInstitutions.slice(0, 15).map((inst, idx) => {
                const angle = (idx * 2 * Math.PI) / Math.min(topInstitutions.length, 15);
                const radius = 180;
                const centerX = 400; // center of 800px width
                const centerY = 250; // center of 500px height
                const x = centerX + radius * Math.cos(angle - Math.PI / 2);
                const y = centerY + radius * Math.sin(angle - Math.PI / 2);
                const color = inst.country === 'CN' ? '#dc3545' : '#007bff';

                // Enhanced size scaling based on CITATIONS (better metric than publications)
                // Use square root scale for better visual distinction
                // Size ranges from 8px (low citations) to 30px (high citations)
                const minSize = 8;
                const maxSize = 30;
                const scaleFactor = 0.15; // Controls growth rate for citations
                const scaledSize = minSize + Math.sqrt(inst.citations) * scaleFactor;
                const size = Math.min(maxSize, Math.max(minSize, scaledSize));

                // Shorten institution name for display
                const shortName = inst.name.length > 25 ? inst.name.substring(0, 22) + '...' : inst.name;

                // Position label outside the circle (adjust for varying node sizes)
                const labelRadius = radius + 25 + (size - minSize) / 2;
                const labelX = centerX + labelRadius * Math.cos(angle - Math.PI / 2);
                const labelY = centerY + labelRadius * Math.sin(angle - Math.PI / 2);

                return \`
                  <!-- Connection line -->
                  <line x1="\${centerX}" y1="\${centerY}" x2="\${x}" y2="\${y}" stroke="#ddd" stroke-width="2" opacity="0.4"/>
                  <!-- Institution node -->
                  <circle cx="\${x}" cy="\${y}" r="\${size}" fill="\${color}" stroke="#333" stroke-width="2" opacity="0.85">
                    <title>\${inst.name}\\n\${inst.citations.toLocaleString()} citations | \${inst.publications} publications</title>
                  </circle>
                  <!-- Institution label -->
                  <text x="\${labelX}" y="\${labelY}" text-anchor="middle" class="inst-label" fill="#333">
                    \${shortName}
                  </text>
                \`;
              }).join('')}

              <!-- Central node (FIG) - Draw last so it's on top -->
              <circle cx="400" cy="250" r="45" fill="\${funder.risk_level === 'high' ? '#dc3545' : funder.risk_level === 'medium' ? '#ffc107' : '#6B9E3E'}" stroke="#333" stroke-width="3"/>

              <!-- FIG name in center (wrap if needed) -->
              \${(() => {
                // Create abbreviation or short name for the FIG
                const figName = funderName;
                let displayName = figName;

                // Common abbreviations
                if (figName.includes('National Natural Science Foundation')) {
                  displayName = 'NSFC';
                } else if (figName.includes('Ministry of Science and Technology')) {
                  displayName = 'MOST';
                } else if (figName.includes('Chinese Academy of Sciences')) {
                  displayName = 'CAS';
                } else if (figName.length > 30) {
                  // Abbreviate long names
                  const words = figName.split(' ');
                  if (words.length > 3) {
                    displayName = words.slice(0, 3).join(' ') + '...';
                  } else {
                    displayName = figName.substring(0, 25) + '...';
                  }
                }

                return \`<text x="400" y="250" text-anchor="middle" dominant-baseline="middle" class="central-label">\${displayName}</text>\`;
              })()}

            </svg>

            <!-- Legend -->
            <div style="position: absolute; top: 10px; right: 10px; background: white; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.8rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-weight: 600; margin-bottom: 5px; color: #333;">Legend</div>
              <div><span style="display: inline-block; width: 12px; height: 12px; background: #dc3545; border-radius: 50%; margin-right: 5px;"></span>Chinese Institution</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: #007bff; border-radius: 50%; margin-right: 5px;"></span>US Institution</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: \${funder.risk_level === 'high' ? '#dc3545' : funder.risk_level === 'medium' ? '#ffc107' : '#6B9E3E'}; border-radius: 50%; margin-right: 5px;"></span>Central FIG</div>
              <div style="margin-top: 8px; padding-top: 5px; border-top: 1px solid #ddd; font-size: 0.75rem; color: #666;">Node size = citations</div>
            </div>

            <!-- FIG Full Name Display -->
            <div style="position: absolute; bottom: 10px; left: 10px; right: 10px; background: #f8f9fa; padding: 0.75rem; border-radius: 4px; border-left: 4px solid var(--iptalons-green); font-size: 0.85rem;">
              <strong>Central Node:</strong> \${funderName}
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin-top: 2rem;">
          <!-- Top Researchers -->
          <div>
            <h4 style="color: var(--iptalons-green); margin-bottom: 1rem; border-bottom: 2px solid var(--iptalons-green); padding-bottom: 0.5rem;">
              <i class="fas fa-users"></i> Top Researchers
            </h4>
            <div style="max-height: 400px; overflow-y: auto;">
              <table style="width: 100%; font-size: 0.9rem;">
                <thead style="background: var(--iptalons-green); color: white; position: sticky; top: 0;">
                  <tr>
                    <th style="padding: 0.5rem; text-align: left;">Name</th>
                    <th style="padding: 0.5rem; text-align: left;">Category</th>
                    <th style="padding: 0.5rem; text-align: center;">Pubs</th>
                  </tr>
                </thead>
                <tbody>
                  \${topResearchers.map((r, idx) => \`
                    <tr style="border-bottom: 1px solid #ddd; \${idx % 2 === 0 ? 'background: #f9f9f9;' : ''}">
                      <td style="padding: 0.5rem;">\${r.name}</td>
                      <td style="padding: 0.5rem; font-size: 0.85rem;">\${r.country === 'CN' ? 'Chinese' : 'US'} Researcher</td>
                      <td style="padding: 0.5rem; text-align: center;">\${r.publications}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Collaborations -->
          <div>
            <h4 style="color: var(--iptalons-green); margin-bottom: 1rem; border-bottom: 2px solid var(--iptalons-green); padding-bottom: 0.5rem;">
              <i class="fas fa-handshake"></i> Collaborations
            </h4>
            <div style="max-height: 400px; overflow-y: auto;">
              <table style="width: 100%; font-size: 0.9rem;">
                <thead style="background: var(--iptalons-green); color: white; position: sticky; top: 0;">
                  <tr>
                    <th style="padding: 0.5rem; text-align: left;">Institution</th>
                    <th style="padding: 0.5rem; text-align: left;">Country</th>
                    <th style="padding: 0.5rem; text-align: center;">Pubs</th>
                  </tr>
                </thead>
                <tbody>
                  \${topInstitutions.map((inst, idx) => \`
                    <tr style="border-bottom: 1px solid #ddd; \${idx % 2 === 0 ? 'background: #f9f9f9;' : ''}">
                      <td style="padding: 0.5rem;">\${inst.name}</td>
                      <td style="padding: 0.5rem;">
                        <span style="display: inline-block; padding: 0.2rem 0.5rem; background: \${inst.country === 'CN' ? '#dc3545' : '#007bff'}; color: white; border-radius: 3px; font-size: 0.75rem;">
                          \${inst.country}
                        </span>
                      </td>
                      <td style="padding: 0.5rem; text-align: center;">\${inst.publications}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <!-- Summary Stats -->
        <div style="margin-top: 2rem; padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--iptalons-green);">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
            <div>
              <div style="font-size: 0.9rem; color: #666;">Total Publications</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green);">\${relatedPubs.length}</div>
            </div>
            <div>
              <div style="font-size: 0.9rem; color: #666;">Total Citations</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green);">
                \${relatedPubs.reduce((sum, r) => sum + r.work.cited_by_count, 0).toLocaleString()}
              </div>
            </div>
            <div>
              <div style="font-size: 0.9rem; color: #666;">Institution Type</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green); text-transform: capitalize;">
                \${funder.type}
              </div>
            </div>
          </div>
        </div>
      \`;

      document.getElementById('modalTitle').textContent = 'Chinese Foreign Influence Group: ' + funderName;
      document.getElementById('modalBody').innerHTML = modalHTML;
      document.getElementById('detailModal').classList.add('active');
    }

    function showUSInstitutionDetail(institutionName, filterChinaOnly = false) {
      const relatedPubs = currentData.results.filter(r =>
        r.us_institutions.some(inst => inst.display_name === institutionName)
      );

      const usInstitution = relatedPubs[0].us_institutions.find(inst => inst.display_name === institutionName);

      // Extract collaborating institutions with risk assessment
      const institutionMap = {};
      relatedPubs.forEach(r => {
        r.work.authorships?.forEach(a => {
          a.institutions?.forEach(inst => {
            const instName = inst.display_name || 'Unknown';
            const country = inst.country_code || '';

            // Skip the US institution itself
            if (instName === institutionName) return;

            // If filter is on, only include Chinese institutions
            if (filterChinaOnly && country !== 'CN') return;

            // Include both CN and US institutions (or only CN if filtered)
            if (country === 'CN' || (!filterChinaOnly && country === 'US')) {
              if (!institutionMap[instName]) {
                // Determine risk level
                let risk = 'low';
                if (country === 'CN') {
                  const instLower = instName.toLowerCase();
                  // Very High Risk: Military, Defense, PLA
                  if (instLower.includes('military') || instLower.includes('pla') ||
                      instLower.includes('defense') || instLower.includes('strategic')) {
                    risk = 'veryhigh';
                  }
                  // High Risk: Government, State agencies, National programs
                  else if (instLower.includes('academy of sciences') || instLower.includes('ministry') ||
                           instLower.includes('state key') || instLower.includes('national')) {
                    risk = 'high';
                  }
                  // Medium Risk: Other Chinese institutions
                  else {
                    risk = 'medium';
                  }
                }

                institutionMap[instName] = {
                  name: instName,
                  country: country,
                  type: inst.type || 'University',
                  risk: risk,
                  publications: 0,
                  citations: 0
                };
              }
              institutionMap[instName].publications++;
              institutionMap[instName].citations += r.work.cited_by_count;
            }
          });
        });
      });

      const topInstitutions = Object.values(institutionMap)
        .sort((a, b) => b.citations - a.citations)
        .slice(0, 15);

      const totalCitations = relatedPubs.reduce((sum, r) => sum + r.work.cited_by_count, 0);
      const avgCitations = relatedPubs.length > 0 ? Math.round(totalCitations / relatedPubs.length) : 0;

      const modalHTML = \`
        <!-- Filter Controls -->
        <div style="margin-bottom: 2rem; padding: 1rem; background: #f8f9fa; border-radius: 4px; display: flex; align-items: center; justify-content: space-between;">
          <div style="font-weight: 600; color: #333;">
            <i class="fas fa-filter"></i> Filter Collaborators:
          </div>
          <div>
            <label style="margin-right: 1rem; cursor: pointer;">
              <input type="radio" name="instFilter" value="all" \${!filterChinaOnly ? 'checked' : ''}
                     onchange="showUSInstitutionDetail('\${institutionName.replace(/'/g, "\\\\'")}', false)"
                     style="margin-right: 5px;">
              Show All Institutions
            </label>
            <label style="cursor: pointer;">
              <input type="radio" name="instFilter" value="china" \${filterChinaOnly ? 'checked' : ''}
                     onchange="showUSInstitutionDetail('\${institutionName.replace(/'/g, "\\\\'")}', true)"
                     style="margin-right: 5px;">
              Chinese Institutions Only
            </label>
          </div>
        </div>

        <!-- Network Visualization -->
        <div style="margin-bottom: 2rem;">
          <h4 style="color: var(--iptalons-green); margin-bottom: 1rem; border-bottom: 2px solid var(--iptalons-green); padding-bottom: 0.5rem;">
            <i class="fas fa-project-diagram"></i> Collaboration Network
          </h4>
          <div style="background: white; border-radius: 8px; padding: 1rem; height: 500px; position: relative; overflow: hidden;">
            <svg width="100%" height="100%" style="display: block;" viewBox="0 0 800 500">
              <defs>
                <style>
                  .inst-label { font-size: 9px; font-family: Arial, sans-serif; }
                  .central-label { font-size: 10px; font-weight: bold; font-family: Arial, sans-serif; fill: white; }
                </style>
              </defs>

              <!-- Connected institutions (circular layout) -->
              \${topInstitutions.map((inst, idx) => {
                const angle = (idx * 2 * Math.PI) / Math.min(topInstitutions.length, 15);
                const radius = 180;
                const centerX = 400;
                const centerY = 250;
                const x = centerX + radius * Math.cos(angle - Math.PI / 2);
                const y = centerY + radius * Math.sin(angle - Math.PI / 2);

                // Color based on country and risk
                let color;
                let riskLabel;
                if (inst.country === 'US') {
                  color = '#007bff';  // Blue for US institutions
                  riskLabel = 'US';
                } else {
                  // Risk-based color for Chinese institutions (traffic light colors)
                  color = inst.risk === 'veryhigh' ? '#8B0000' :  // Dark red
                          inst.risk === 'high' ? '#dc3545' :      // Red
                          inst.risk === 'medium' ? '#ffc107' :    // Yellow
                          '#28a745';                               // Green (low risk)
                  riskLabel = inst.risk === 'veryhigh' ? 'VERY HIGH' :
                              inst.risk === 'high' ? 'HIGH' :
                              inst.risk === 'medium' ? 'MEDIUM' : 'LOW';
                }

                // Size based on citations
                const minSize = 8;
                const maxSize = 30;
                const scaleFactor = 0.15;
                const scaledSize = minSize + Math.sqrt(inst.citations) * scaleFactor;
                const size = Math.min(maxSize, Math.max(minSize, scaledSize));

                const shortName = inst.name.length > 25 ? inst.name.substring(0, 22) + '...' : inst.name;
                const labelRadius = radius + 25 + (size - minSize) / 2;
                const labelX = centerX + labelRadius * Math.cos(angle - Math.PI / 2);
                const labelY = centerY + labelRadius * Math.sin(angle - Math.PI / 2);

                return \`
                  <line x1="\${centerX}" y1="\${centerY}" x2="\${x}" y2="\${y}" stroke="#ddd" stroke-width="2" opacity="0.4"/>
                  <circle cx="\${x}" cy="\${y}" r="\${size}" fill="\${color}" stroke="#333" stroke-width="2" opacity="0.85">
                    <title>\${inst.name}\\n\${inst.citations.toLocaleString()} citations | \${inst.publications} publications\\nRisk: \${riskLabel}</title>
                  </circle>
                  <text x="\${labelX}" y="\${labelY}" text-anchor="middle" class="inst-label" fill="#333">
                    \${shortName}
                  </text>
                \`;
              }).join('')}

              <!-- Central node (US Institution) -->
              <circle cx="400" cy="250" r="45" fill="#007bff" stroke="#333" stroke-width="3"/>

              <!-- US Institution name in center -->
              \${(() => {
                let displayName = institutionName;
                if (displayName.length > 30) {
                  const words = displayName.split(' ');
                  if (words.length > 3) {
                    displayName = words.slice(0, 3).join(' ') + '...';
                  } else {
                    displayName = displayName.substring(0, 25) + '...';
                  }
                }
                return \`<text x="400" y="250" text-anchor="middle" dominant-baseline="middle" class="central-label">\${displayName}</text>\`;
              })()}

            </svg>

            <!-- Legend -->
            <div style="position: absolute; top: 10px; right: 10px; background: white; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; font-size: 0.8rem; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <div style="font-weight: 600; margin-bottom: 5px; color: #333;">Legend</div>
              <div><span style="display: inline-block; width: 12px; height: 12px; background: #007bff; border-radius: 50%; margin-right: 5px;"></span>US Institution</div>
              <div style="margin-top: 8px; padding-top: 5px; border-top: 1px solid #ddd; font-weight: 600; color: #333;">Risk Level (CN)</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: #8B0000; border-radius: 50%; margin-right: 5px;"></span>Very High</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: #dc3545; border-radius: 50%; margin-right: 5px;"></span>High</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: #ffc107; border-radius: 50%; margin-right: 5px;"></span>Medium</div>
              <div style="margin-top: 3px;"><span style="display: inline-block; width: 12px; height: 12px; background: #28a745; border-radius: 50%; margin-right: 5px;"></span>Low</div>
              <div style="margin-top: 8px; padding-top: 5px; border-top: 1px solid #ddd; font-size: 0.75rem; color: #666;">Node size = citations</div>
            </div>

            <!-- Institution Full Name Display -->
            <div style="position: absolute; bottom: 10px; left: 10px; right: 10px; background: #f8f9fa; padding: 0.75rem; border-radius: 4px; border-left: 4px solid #007bff; font-size: 0.85rem;">
              <strong>Central Node:</strong> \${institutionName}
            </div>
          </div>
        </div>

        <!-- Summary Stats -->
        <div style="padding: 1.5rem; background: #f8f9fa; border-radius: 8px; border-left: 4px solid var(--iptalons-green);">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; text-align: center;">
            <div>
              <div style="font-size: 0.9rem; color: #666;">Total Publications</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green);">\${relatedPubs.length}</div>
            </div>
            <div>
              <div style="font-size: 0.9rem; color: #666;">Total Citations</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green);">
                \${totalCitations.toLocaleString()}
              </div>
            </div>
            <div>
              <div style="font-size: 0.9rem; color: #666;">Avg. Citations/Paper</div>
              <div style="font-size: 1.5rem; font-weight: bold; color: var(--iptalons-green);">
                \${avgCitations.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      \`;

      document.getElementById('modalTitle').textContent = 'US Institution: ' + institutionName;
      document.getElementById('modalBody').innerHTML = modalHTML;
      document.getElementById('detailModal').classList.add('active');
    }

    function closeModal() {
      document.getElementById('detailModal').classList.remove('active');
    }

    function filterPublicationNetwork(riskLevel) {
      // Update filter button styles
      ['all', 'high', 'medium', 'low'].forEach(level => {
        const btn = document.getElementById('riskFilter_' + level);
        if (btn) {
          if (level === riskLevel) {
            btn.style.border = '3px solid ' + (level === 'all' ? '#6B9E3E' : level === 'high' ? '#ff6b6b' : level === 'medium' ? '#ffc107' : '#90EE90');
          } else {
            btn.style.border = '3px solid transparent';
          }
        }
      });

      // Filter institutions based on risk level
      const allInstitutions = window.publicationInstitutions || [];
      const filteredInstitutions = riskLevel === 'all'
        ? allInstitutions
        : allInstitutions.filter(inst => inst.risk === riskLevel);

      // Regenerate network SVG with filtered institutions
      if (window.generatePublicationNetworkSVG) {
        const newSVG = window.generatePublicationNetworkSVG(filteredInstitutions);
        const svgElement = document.getElementById('publicationNetworkSVG');
        if (svgElement) {
          svgElement.innerHTML = newSVG;
        }
      }
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

    function exportUSInstitutions() {
      alert('Export US institutions data - Ready to implement');
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
