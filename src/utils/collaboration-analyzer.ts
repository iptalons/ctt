/**
 * Collaboration Analysis Utility
 * Analyzes research works for US-China collaborations
 */

import {
  Work,
  CollaborationAnalysis,
  Authorship,
  Institution,
  SearchResults,
  FunderSummary,
  YearlyTrend
} from '../models/types';
import {
  extractChineseFunders,
  aggregateFunders,
  isChineseInstitution
} from './funder-classifier';
import { MIC2025_SECTORS } from '../models/sectors';

/**
 * Analyze a single work for US-China collaboration
 */
export function analyzeCollaboration(work: Work): CollaborationAnalysis {
  const usAuthors: Authorship[] = [];
  const chinaAuthors: Authorship[] = [];
  const usInstitutions: Institution[] = [];
  const chinaInstitutions: Institution[] = [];

  // Analyze authorships
  if (work.authorships) {
    work.authorships.forEach(authorship => {
      const countries = authorship.countries || [];
      const institutions = authorship.institutions || [];

      // Check for US authors
      if (countries.includes('US')) {
        usAuthors.push(authorship);
        institutions.forEach(inst => {
          if (inst.country_code === 'US' && !usInstitutions.find(i => i.id === inst.id)) {
            usInstitutions.push(inst);
          }
        });
      }

      // Check for Chinese authors
      if (countries.includes('CN')) {
        chinaAuthors.push(authorship);
        institutions.forEach(inst => {
          if (
            (inst.country_code === 'CN' || isChineseInstitution(inst.display_name, inst.country_code)) &&
            !chinaInstitutions.find(i => i.id === inst.id)
          ) {
            chinaInstitutions.push(inst);
          }
        });
      }
    });
  }

  // Extract Chinese funders
  const chineseFunders = work.grants ? extractChineseFunders(work.grants) : [];

  // Calculate collaboration score (0-100)
  const collaborationScore = calculateCollaborationScore(
    usAuthors.length,
    chinaAuthors.length,
    usInstitutions.length,
    chinaInstitutions.length,
    chineseFunders.length
  );

  return {
    work,
    us_authors: usAuthors,
    china_authors: chinaAuthors,
    us_institutions: usInstitutions,
    china_institutions: chinaInstitutions,
    chinese_funders: chineseFunders,
    is_us_china_collaboration: usAuthors.length > 0 && chinaAuthors.length > 0,
    collaboration_score: collaborationScore
  };
}

/**
 * Calculate collaboration score based on various factors
 */
function calculateCollaborationScore(
  usAuthorCount: number,
  cnAuthorCount: number,
  usInstCount: number,
  cnInstCount: number,
  cnFunderCount: number
): number {
  let score = 0;

  // Base score for having both US and CN authors (40 points)
  if (usAuthorCount > 0 && cnAuthorCount > 0) {
    score += 40;
  }

  // Score for balanced collaboration (20 points max)
  const totalAuthors = usAuthorCount + cnAuthorCount;
  if (totalAuthors > 0) {
    const balance = 1 - Math.abs(usAuthorCount - cnAuthorCount) / totalAuthors;
    score += balance * 20;
  }

  // Score for institutional diversity (20 points max)
  const totalInst = usInstCount + cnInstCount;
  if (totalInst > 1) {
    score += Math.min(totalInst * 5, 20);
  }

  // Score for Chinese funding (20 points max)
  if (cnFunderCount > 0) {
    score += Math.min(cnFunderCount * 10, 20);
  }

  return Math.round(Math.min(score, 100));
}

/**
 * Analyze multiple works and generate summary statistics
 */
export function analyzeMultipleWorks(works: Work[]): CollaborationAnalysis[] {
  return works.map(work => analyzeCollaboration(work));
}

/**
 * Generate search results with metadata
 */
export function generateSearchResults(
  collaborations: CollaborationAnalysis[],
  page: number,
  perPage: number
): SearchResults {
  // Extract all funders
  const allFunders = collaborations.flatMap(c => c.chinese_funders);
  const aggregatedFunders = aggregateFunders(allFunders);

  // Calculate top funders
  const topFunders: FunderSummary[] = aggregatedFunders.slice(0, 10).map(funder => ({
    name: funder.name,
    id: funder.name.toLowerCase().replace(/\s+/g, '_'),
    country_code: 'CN',
    works_count: funder.funding_count,
    total_citations: collaborations
      .filter(c => c.chinese_funders.some(f => f.name === funder.name))
      .reduce((sum, c) => sum + c.work.cited_by_count, 0),
    sectors: Array.from(new Set(funder.sectors))
  }));

  // Identify sectors covered
  const sectorsCovered = new Set<string>();
  collaborations.forEach(collab => {
    const workKeywords = extractWorkKeywords(collab.work);
    workKeywords.forEach(keyword => {
      Object.entries(MIC2025_SECTORS).forEach(([sectorId, sector]) => {
        if (sector.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))) {
          sectorsCovered.add(sector.name);
        }
      });
    });
  });

  // Calculate yearly trends
  const yearlyTrends = calculateYearlyTrends(collaborations);

  return {
    results: collaborations,
    meta: {
      count: collaborations.length,
      page,
      per_page: perPage,
      sectors_covered: Array.from(sectorsCovered),
      top_chinese_funders: topFunders,
      collaboration_trends: yearlyTrends
    }
  };
}

/**
 * Extract keywords from a work
 */
function extractWorkKeywords(work: Work): string[] {
  const keywords = new Set<string>();

  // Add from concepts
  if (work.concepts) {
    work.concepts.forEach(concept => {
      keywords.add(concept.display_name.toLowerCase());
    });
  }

  // Add from title
  if (work.title) {
    const titleWords = work.title.toLowerCase().split(/\s+/);
    titleWords.forEach(word => {
      if (word.length > 3) {
        keywords.add(word);
      }
    });
  }

  return Array.from(keywords);
}

/**
 * Calculate yearly collaboration trends
 */
function calculateYearlyTrends(collaborations: CollaborationAnalysis[]): YearlyTrend[] {
  const yearMap = new Map<number, YearlyTrend>();

  collaborations.forEach(collab => {
    const year = collab.work.publication_year;
    if (!year) return;

    if (!yearMap.has(year)) {
      yearMap.set(year, {
        year,
        count: 0,
        citations: 0,
        top_sectors: []
      });
    }

    const trend = yearMap.get(year)!;
    trend.count += 1;
    trend.citations += collab.work.cited_by_count || 0;
  });

  return Array.from(yearMap.values()).sort((a, b) => a.year - b.year);
}

/**
 * Identify MIC2025 sector for a work
 */
export function identifySectors(work: Work): string[] {
  const workKeywords = extractWorkKeywords(work);
  const matchedSectors = new Set<string>();

  Object.entries(MIC2025_SECTORS).forEach(([sectorId, sector]) => {
    const hasMatch = sector.keywords.some(sectorKeyword =>
      workKeywords.some(workKeyword =>
        workKeyword.includes(sectorKeyword.toLowerCase()) ||
        sectorKeyword.toLowerCase().includes(workKeyword)
      )
    );

    if (hasMatch) {
      matchedSectors.add(sector.name);
    }
  });

  return Array.from(matchedSectors);
}

/**
 * Reconstruct abstract from inverted index
 */
export function reconstructAbstract(invertedIndex: Record<string, number[]>): string {
  if (!invertedIndex) return '';

  const words: [string, number][] = [];

  Object.entries(invertedIndex).forEach(([word, positions]) => {
    positions.forEach(pos => {
      words.push([word, pos]);
    });
  });

  words.sort((a, b) => a[1] - b[1]);
  return words.map(w => w[0]).join(' ');
}
