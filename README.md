# Critical Tech Tracker

A comprehensive dashboard to track US-China research collaborations in Made in China 2025 strategic priority sectors, identifying foreign influence through funding sources and institutional partnerships.

## Overview

This tool analyzes publicly available research publications using the OpenAlex API to identify:
- **US-China Research Collaborations**: Publications with both US and Chinese authors
- **Foreign Influence Groups**: Chinese government, military, and state-owned enterprise funders
- **Strategic Sectors**: Coverage across 10 Made in China 2025 priority areas
- **Collaboration Patterns**: Trends, citation impacts, and institutional relationships

## Made in China 2025 Strategic Sectors

The dashboard tracks collaborations across these 10 priority sectors:

1. **Next-Generation Information Technology** - Semiconductors, 5G/6G, quantum computing, industrial software
2. **High-End CNC Machines and Robotics** - Industrial automation, precision manufacturing
3. **Energy-Saving and New Energy Vehicles** - Electric vehicles, battery technology, fuel cells
4. **Aviation and Aerospace Equipment** - Aircraft engines, satellites, launch vehicles
5. **Offshore Engineering Equipment and High-Tech Ships** - Deep-sea exploration, LNG tankers
6. **Advanced Rail Transportation Equipment** - High-speed rail, maglev, intelligent systems
7. **Electrical Equipment** - Smart grid, energy storage, renewable energy
8. **Agricultural Machinery and Equipment** - Precision agriculture, automated harvesting
9. **New Materials** - Graphene, nanomaterials, superconductors, rare earth materials
10. **Biotech, Pharma, and High-Performance Medical Devices** - Gene therapy, medical robotics, imaging

## Features

- 🔍 **Comprehensive Search**: Query across all sectors or focus on specific areas
- 📊 **Visual Analytics**: Statistics on collaborations, funders, and trends
- ⚠️ **Risk Assessment**: Automatic identification and classification of Chinese foreign influence groups
- 🎯 **Collaboration Scoring**: Algorithmic scoring of partnership depth and breadth
- 📈 **Citation Tracking**: Impact analysis through citation counts
- 🏛️ **Institution Mapping**: US and Chinese research institution identification

## Architecture

Built as a Cloudflare Worker for global deployment:

- **Backend**: TypeScript on Cloudflare Workers
- **API**: OpenAlex (free, no API key required)
- **Frontend**: Embedded HTML/CSS/JavaScript dashboard
- **Deployment**: Wrangler CLI

## Setup

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account (free tier works)
- Wrangler CLI

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/yourusername/criticaltechtracker.git
cd criticaltechtracker
```

2. **Install dependencies**:
```bash
npm install
```

3. **Configure Wrangler** (if not already logged in):
```bash
npx wrangler login
```

4. **Update wrangler.toml** with your account details if needed.

## Development

### Local Development

Run the worker locally:

```bash
npm run dev
```

This starts a local development server at `http://localhost:8787`.

### Testing the API

**Health Check**:
```bash
curl http://localhost:8787/api/health
```

**Get All Sectors**:
```bash
curl http://localhost:8787/api/sectors
```

**Search Collaborations** (Next-Gen IT sector):
```bash
curl "http://localhost:8787/api/search?sector=next_gen_it&yearFrom=2020&yearTo=2025"
```

**Search with Custom Keywords**:
```bash
curl "http://localhost:8787/api/search?keywords=quantum,semiconductor&minCitations=10"
```

## Deployment

### Deploy to Cloudflare Workers

```bash
npm run deploy
```

Your dashboard will be available at: `https://critical-tech-tracker.<your-subdomain>.workers.dev`

### Custom Domain (Optional)

1. Add a custom domain in Cloudflare dashboard
2. Update `wrangler.toml`:
```toml
[env.production]
route = "tracker.yourdomain.com/*"
```

## API Endpoints

### `GET /api/health`
Health check endpoint.

**Response**:
```json
{
  "status": "healthy",
  "timestamp": "2025-12-01T00:00:00.000Z",
  "version": "1.0.0"
}
```

### `GET /api/sectors`
Get all Made in China 2025 sectors.

**Response**:
```json
{
  "sectors": [
    {
      "id": "next_gen_it",
      "name": "Next-Generation Information Technology",
      "description": "...",
      "keywords": ["semiconductor", "5G", ...],
      "priority_level": "critical"
    },
    ...
  ]
}
```

### `GET /api/sectors/{sectorId}`
Get specific sector details.

### `GET /api/search`
Search for US-China research collaborations.

**Query Parameters**:
- `sector` (optional): Sector ID (e.g., `next_gen_it`)
- `keywords` (optional): Comma-separated keywords (e.g., `quantum,semiconductor`)
- `yearFrom` (optional): Start year (e.g., `2015`)
- `yearTo` (optional): End year (e.g., `2025`)
- `minCitations` (optional): Minimum citation count (e.g., `10`)
- `page` (optional): Page number (default: 1)
- `perPage` (optional): Results per page (default: 25, max: 100)
- `includeAbstracts` (optional): Include abstracts (boolean)

**Example Response**:
```json
{
  "results": [
    {
      "work": {
        "id": "W123456789",
        "title": "Advances in Quantum Computing...",
        "publication_year": 2023,
        "cited_by_count": 45,
        "doi": "10.1000/example"
      },
      "us_authors": [...],
      "china_authors": [...],
      "us_institutions": [...],
      "china_institutions": [...],
      "chinese_funders": [
        {
          "name": "National Natural Science Foundation of China",
          "type": "government",
          "risk_level": "high"
        }
      ],
      "collaboration_score": 85
    }
  ],
  "meta": {
    "count": 25,
    "page": 1,
    "per_page": 25,
    "sectors_covered": ["Next-Generation Information Technology"],
    "top_chinese_funders": [...],
    "collaboration_trends": [...]
  }
}
```

## Funder Risk Classification

The system automatically classifies Chinese funders into risk categories:

### High Risk
- **Military**: PLA-linked funding, SASTIND, Military-Civil Fusion Commission
- **Strategic Government**: NSFC, MOST, MIIT, NDRC, State Council agencies
- Indicators of direct national security implications

### Medium Risk
- **State-Owned Enterprises**: AVIC, CASC, CSSC, CETC, State Grid
- **Chinese Academy of Sciences** (CAS)
- Provincial and municipal government funding

### Low Risk
- University funding (unless combined with high-risk funders)
- Private sector funding (requires additional scrutiny)

## Data Sources

### OpenAlex
- **Coverage**: 250M+ scholarly works
- **Free Access**: No API key required (polite pool recommended)
- **Update Frequency**: Daily
- **Data Quality**: High (aggregates from multiple sources)

### Limitations
- Depends on publication metadata quality
- Author affiliation data may be incomplete
- Funding information not always disclosed
- Some collaborations may not be captured

## Use Cases

1. **Research Security Offices**: Identify potential foreign influence risks
2. **Grant Reviewers**: Assess collaboration patterns in proposals
3. **Policy Analysts**: Track trends in strategic technology sectors
4. **Academic Institutions**: Due diligence for international partnerships
5. **National Security**: Monitor critical technology knowledge transfer

## Configuration

### Environment Variables

Create a `.dev.vars` file for local development:

```bash
OPENALEX_EMAIL=your-email@example.com
```

For production, set secrets via Wrangler:

```bash
echo "your-email@example.com" | npx wrangler secret put OPENALEX_EMAIL
```

### Customization

**Add Custom Sectors**: Edit `src/models/sectors.ts`

**Modify Funder Classifications**: Edit `src/utils/funder-classifier.ts`

**Adjust Collaboration Scoring**: Edit `src/utils/collaboration-analyzer.ts`

## Performance

- **Response Time**: ~1-3 seconds per search (depends on OpenAlex API)
- **Concurrent Requests**: Handled by Cloudflare Workers global network
- **Caching**: Optional KV namespace for frequently accessed data
- **Rate Limits**: OpenAlex polite pool: 100,000 requests/day

## Security Considerations

⚠️ **Important**: This tool is for research and analysis purposes only.

- Data is from publicly available sources
- No classified or restricted information
- Proper attribution to OpenAlex required
- Comply with your institution's policies on research security
- Consider operational security when deploying

## Contributing

Contributions welcome! Areas for improvement:

- Additional sector keywords and refinement
- Enhanced funder classification algorithms
- Visualization improvements
- Export functionality (CSV, PDF reports)
- Historical trend analysis
- Institution network graphs

## License

MIT License - See LICENSE file for details

## Acknowledgments

- **OpenAlex**: For providing open access to scholarly data
- **Cloudflare Workers**: For global edge computing platform
- Research based on publicly available information about Made in China 2025

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub
- Contact: [your-email@example.com]

---

**Disclaimer**: This tool provides analysis based on publicly available data. Results should be interpreted in context and verified through additional sources. The tool is not a substitute for professional security assessments or due diligence processes.
