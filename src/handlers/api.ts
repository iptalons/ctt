/**
 * API Handlers for Cloudflare Workers
 */

import { createOpenAlexClient } from '../api/openalex';
import { analyzeMultipleWorks, generateSearchResults } from '../utils/collaboration-analyzer';
import { MIC2025_SECTORS, getSectorById } from '../models/sectors';
import { SearchParams } from '../models/types';

/**
 * Handle search request
 */
export async function handleSearch(request: Request, env?: any): Promise<Response> {
  const url = new URL(request.url);
  const params = url.searchParams;

  // Parse search parameters
  const searchParams: SearchParams = {
    sector: params.get('sector') || undefined,
    keywords: params.get('keywords')?.split(',').map(k => k.trim()) || undefined,
    yearFrom: params.get('yearFrom') ? parseInt(params.get('yearFrom')!) : undefined,
    yearTo: params.get('yearTo') ? parseInt(params.get('yearTo')!) : undefined,
    page: params.get('page') ? parseInt(params.get('page')!) : 1,
    perPage: params.get('perPage') ? parseInt(params.get('perPage')!) : 25,
    minCitations: params.get('minCitations') ? parseInt(params.get('minCitations')!) : undefined,
    includeAbstracts: params.get('includeAbstracts') === 'true'
  };

  // If sector is specified, use sector keywords
  if (searchParams.sector) {
    const sector = getSectorById(searchParams.sector);
    if (sector) {
      searchParams.keywords = sector.keywords;
    } else {
      return new Response(
        JSON.stringify({ error: 'Invalid sector ID' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }
  }

  // Ensure we have keywords to search
  if (!searchParams.keywords || searchParams.keywords.length === 0) {
    return new Response(
      JSON.stringify({ error: 'Keywords or sector parameter required' }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  try {
    const client = createOpenAlexClient();
    const openAlexResults = await client.searchWorks(searchParams);

    // Filter for true US-China collaborations
    const filteredWorks = client.filterUSChinaCollaborations(openAlexResults.results);

    // Analyze collaborations
    const collaborations = analyzeMultipleWorks(filteredWorks);

    // Generate results with metadata
    const results = generateSearchResults(
      collaborations,
      searchParams.page || 1,
      searchParams.perPage || 25
    );

    return new Response(JSON.stringify(results), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  } catch (error) {
    console.error('Search error:', error);
    return new Response(
      JSON.stringify({
        error: 'Failed to search publications',
        details: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
}

/**
 * Get all sectors
 */
export async function handleGetSectors(): Promise<Response> {
  return new Response(
    JSON.stringify({
      sectors: Object.values(MIC2025_SECTORS)
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}

/**
 * Get specific sector details
 */
export async function handleGetSector(sectorId: string): Promise<Response> {
  const sector = getSectorById(sectorId);

  if (!sector) {
    return new Response(
      JSON.stringify({ error: 'Sector not found' }),
      {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return new Response(
    JSON.stringify({ sector }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}

/**
 * Health check endpoint
 */
export async function handleHealthCheck(): Promise<Response> {
  return new Response(
    JSON.stringify({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      version: '1.0.0'
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }
  );
}

/**
 * Handle CORS preflight
 */
export async function handleOptions(): Promise<Response> {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
