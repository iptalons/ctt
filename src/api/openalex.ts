/**
 * OpenAlex API Client for Cloudflare Workers
 */

import { Work, SearchParams, Authorship } from '../models/types';

const OPENALEX_BASE_URL = 'https://api.openalex.org';

export class OpenAlexClient {
  private email?: string;

  constructor(email?: string) {
    this.email = email;
  }

  /**
   * Build OpenAlex API URL with filters
   */
  private buildSearchUrl(params: SearchParams): string {
    const filters: string[] = [];
    const searchParams = new URLSearchParams();

    // Add keywords filter
    if (params.keywords && params.keywords.length > 0) {
      const keywordQuery = params.keywords.map(k => `"${k}"`).join(' OR ');
      filters.push(`default.search:${keywordQuery}`);
    }

    // Add year range filter
    if (params.yearFrom || params.yearTo) {
      const from = params.yearFrom || 2000;
      const to = params.yearTo || new Date().getFullYear();
      filters.push(`publication_year:${from}-${to}`);
    }

    // Add citation filter
    if (params.minCitations && params.minCitations > 0) {
      filters.push(`cited_by_count:>${params.minCitations}`);
    }

    // Filter for works with both US and CN authorships
    filters.push('authorships.countries:US');
    filters.push('authorships.countries:CN');

    // Add filters to search params
    if (filters.length > 0) {
      searchParams.set('filter', filters.join(','));
    }

    // Pagination
    searchParams.set('page', String(params.page || 1));
    searchParams.set('per-page', String(params.perPage || 25));

    // Select fields to return
    const selectFields = [
      'id',
      'doi',
      'title',
      'publication_year',
      'publication_date',
      'authorships',
      'grants',
      'concepts',
      'cited_by_count',
      'open_access'
    ];

    if (params.includeAbstracts) {
      selectFields.push('abstract_inverted_index');
    }

    searchParams.set('select', selectFields.join(','));

    // Add email for polite pool
    if (this.email) {
      searchParams.set('mailto', this.email);
    }

    return `${OPENALEX_BASE_URL}/works?${searchParams.toString()}`;
  }

  /**
   * Search for works in OpenAlex
   */
  async searchWorks(params: SearchParams): Promise<{
    results: Work[];
    meta: {
      count: number;
      page: number;
      per_page: number;
      db_response_time_ms?: number;
    };
  }> {
    const url = this.buildSearchUrl(params);

    try {
      const response = await fetch(url, {
        headers: {
          'User-Agent': 'CriticalTechTracker/1.0 (https://github.com/criticaltechtracker)',
        },
      });

      if (!response.ok) {
        throw new Error(`OpenAlex API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching from OpenAlex:', error);
      throw error;
    }
  }

  /**
   * Filter works to only include US-China collaborations
   * (works that have BOTH US and Chinese authors)
   */
  filterUSChinaCollaborations(works: Work[]): Work[] {
    return works.filter(work => {
      const countries = new Set<string>();

      if (work.authorships) {
        work.authorships.forEach((authorship: Authorship) => {
          if (authorship.countries) {
            authorship.countries.forEach(country => countries.add(country));
          }
        });
      }

      // Must have both US and CN
      return countries.has('US') && countries.has('CN');
    });
  }

  /**
   * Get details about a specific funder
   */
  async getFunderDetails(funderId: string): Promise<any> {
    const url = this.email
      ? `${OPENALEX_BASE_URL}/funders/${funderId}?mailto=${this.email}`
      : `${OPENALEX_BASE_URL}/funders/${funderId}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch funder: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching funder details:', error);
      return null;
    }
  }

  /**
   * Search for funders by name
   */
  async searchFunders(name: string): Promise<any> {
    const searchParams = new URLSearchParams({
      search: name,
      'per-page': '20',
    });

    if (this.email) {
      searchParams.set('mailto', this.email);
    }

    const url = `${OPENALEX_BASE_URL}/funders?${searchParams.toString()}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to search funders: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching funders:', error);
      return { results: [] };
    }
  }

  /**
   * Get institution details
   */
  async getInstitutionDetails(institutionId: string): Promise<any> {
    const url = this.email
      ? `${OPENALEX_BASE_URL}/institutions/${institutionId}?mailto=${this.email}`
      : `${OPENALEX_BASE_URL}/institutions/${institutionId}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch institution: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching institution details:', error);
      return null;
    }
  }
}

/**
 * Create a singleton instance
 */
export function createOpenAlexClient(email?: string): OpenAlexClient {
  return new OpenAlexClient(email);
}
