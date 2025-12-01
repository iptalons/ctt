/**
 * Type definitions for the Critical Tech Tracker application
 */

export interface Authorship {
  author_position: string;
  author: {
    id: string;
    display_name: string;
    orcid?: string;
  };
  institutions: Institution[];
  countries: string[];
  is_corresponding: boolean;
  raw_affiliation_string?: string;
}

export interface Institution {
  id: string;
  display_name: string;
  ror?: string;
  country_code: string;
  type: string;
  lineage?: string[];
}

export interface Funder {
  id: string;
  display_name: string;
  country_code?: string;
  description?: string;
  homepage_url?: string;
  image_url?: string;
  grants_count?: number;
  works_count?: number;
}

export interface Grant {
  funder: string;
  funder_display_name: string;
  award_id?: string;
}

export interface Concept {
  id: string;
  wikidata: string;
  display_name: string;
  level: number;
  score: number;
}

export interface Work {
  id: string;
  doi?: string;
  title: string;
  publication_year: number;
  publication_date?: string;
  authorships: Authorship[];
  grants?: Grant[];
  concepts: Concept[];
  cited_by_count: number;
  abstract_inverted_index?: Record<string, number[]>;
  open_access?: {
    is_oa: boolean;
    oa_url?: string;
  };
}

export interface CollaborationAnalysis {
  work: Work;
  us_authors: Authorship[];
  china_authors: Authorship[];
  us_institutions: Institution[];
  china_institutions: Institution[];
  chinese_funders: Funder[];
  is_us_china_collaboration: boolean;
  collaboration_score: number;
}

export interface MIC2025Sector {
  id: string;
  name: string;
  description: string;
  keywords: string[];
  priority_level: 'high' | 'medium' | 'critical';
  related_fields: string[];
}

export interface SearchParams {
  sector?: string;
  keywords?: string[];
  yearFrom?: number;
  yearTo?: number;
  page?: number;
  perPage?: number;
  minCitations?: number;
  includeAbstracts?: boolean;
}

export interface SearchResults {
  results: CollaborationAnalysis[];
  meta: {
    count: number;
    page: number;
    per_page: number;
    total_count?: number;
    sectors_covered: string[];
    top_chinese_funders: FunderSummary[];
    collaboration_trends: YearlyTrend[];
  };
}

export interface FunderSummary {
  name: string;
  id: string;
  country_code: string;
  works_count: number;
  total_citations: number;
  sectors: string[];
}

export interface YearlyTrend {
  year: number;
  count: number;
  citations: number;
  top_sectors: string[];
}

export interface ChineseForeignInfluenceGroup {
  name: string;
  type: 'government' | 'military' | 'state-owned' | 'private' | 'university' | 'unknown';
  funding_count: number;
  related_works: string[];
  sectors: string[];
  risk_level: 'high' | 'medium' | 'low' | 'unknown';
  description?: string;
}
