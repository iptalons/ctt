/**
 * Funder Classification Module
 * Identifies and classifies Chinese funding organizations using CN_FIGs.csv data
 */

import { ChineseForeignInfluenceGroup } from '../models/types';
import { getCNFigByName, CN_FIGS_ARRAY, CNFigEntry } from '../data/cn-figs-data';
import { findBestMatch, normalizeInstitutionName, containsKeyword } from './fuzzy-match';

/**
 * Map CN_FIGs risk rating to our risk level type
 */
function mapRiskRating(rating: 'HIGH' | 'MEDIUM' | 'LOW'): 'high' | 'medium' | 'low' {
  return rating.toLowerCase() as 'high' | 'medium' | 'low';
}

/**
 * Map CN_FIGs kind to our funder type
 */
function mapKindToType(kind: string): 'government' | 'military' | 'state-owned' | 'university' | 'private' | 'unknown' {
  const lowerKind = kind.toLowerCase();

  if (lowerKind.includes('military') || lowerKind === 'seven sons') {
    return 'military';
  }
  if (lowerKind.includes('defence') || lowerKind.includes('defense')) {
    return 'state-owned';
  }
  if (lowerKind === 'civilian' || lowerKind.includes('university') || lowerKind.includes('college')) {
    return 'university';
  }
  if (lowerKind.includes('government') || lowerKind.includes('ministry') || lowerKind.includes('commission')) {
    return 'government';
  }

  return 'unknown';
}

/**
 * Lookup institution in CN_FIGs database with fuzzy matching
 */
export function lookupCNFig(institutionName: string): {
  entry: CNFigEntry;
  matchType: 'exact' | 'fuzzy';
  score?: number;
} | null {
  // Try exact match first
  const exactMatch = getCNFigByName(institutionName);
  if (exactMatch) {
    return {
      entry: exactMatch,
      matchType: 'exact'
    };
  }

  // Try fuzzy match with 70% threshold
  const fuzzyMatch = findBestMatch(
    institutionName,
    CN_FIGS_ARRAY,
    (item) => item.institution,
    0.7
  );

  if (fuzzyMatch) {
    return {
      entry: fuzzyMatch.match,
      matchType: 'fuzzy',
      score: fuzzyMatch.score
    };
  }

  return null;
}

/**
 * Pattern-based keywords for general Chinese funding detection
 * Used as fallback when institution not in CN_FIGs database
 */
const CHINESE_FUNDING_KEYWORDS = [
  // Government agencies
  'nsfc', 'national natural science foundation of china',
  'most', 'ministry of science and technology',
  'cas', 'chinese academy of sciences',
  'ndrc', 'national development and reform',
  'miit', 'ministry of industry and information',
  'state council',

  // Programs
  '973 program', '863 program',
  'thousand talents', 'national key r&d',
  'torch program', 'spark program',

  // Provincial/Municipal
  'provincial science', 'municipal science',

  // Generic Chinese indicators
  'china national', 'chinese academy'
];

/**
 * Check if a funder name indicates Chinese government/military affiliation
 * Returns risk level or 'UNKNOWN' if found in patterns but not in database
 */
export function assessInstitutionRisk(
  institutionName: string
): 'high' | 'medium' | 'low' | 'unknown' {
  // Try CN_FIGs database first
  const cnFig = lookupCNFig(institutionName);
  if (cnFig) {
    return mapRiskRating(cnFig.entry.riskRating);
  }

  // Check if it matches general Chinese funding keywords
  if (containsKeyword(institutionName, CHINESE_FUNDING_KEYWORDS)) {
    // Found in general patterns but not in database - return 'unknown'
    return 'unknown';
  }

  // Check if it's Chinese based on name
  if (isChineseByName(institutionName)) {
    return 'unknown';
  }

  // Not Chinese or not identifiable
  return 'unknown';
}

/**
 * Classify funder type based on CN_FIGs data or patterns
 */
export function classifyFunderType(
  institutionName: string
): 'government' | 'military' | 'state-owned' | 'university' | 'private' | 'unknown' {
  // Try CN_FIGs database first
  const cnFig = lookupCNFig(institutionName);
  if (cnFig && cnFig.entry.kind) {
    return mapKindToType(cnFig.entry.kind);
  }

  // Fallback to pattern matching
  const lowerName = institutionName.toLowerCase();

  if (
    lowerName.includes('pla') ||
    lowerName.includes('military') ||
    lowerName.includes('defense') ||
    lowerName.includes('defence')
  ) {
    return 'military';
  }

  if (
    lowerName.includes('ministry') ||
    lowerName.includes('commission') ||
    lowerName.includes('administration') ||
    lowerName.includes('state council')
  ) {
    return 'government';
  }

  if (
    lowerName.includes('state grid') ||
    lowerName.includes('sinopec') ||
    lowerName.includes('petrochina') ||
    lowerName.includes('china national corporation')
  ) {
    return 'state-owned';
  }

  if (
    lowerName.includes('university') ||
    lowerName.includes('college') ||
    lowerName.includes('institute of technology')
  ) {
    return 'university';
  }

  return 'unknown';
}

/**
 * Check if institution name suggests Chinese origin
 */
function isChineseByName(institutionName: string): boolean {
  const lowerName = institutionName.toLowerCase();
  const chineseIndicators = [
    'china', 'chinese', 'beijing', 'shanghai', 'shenzhen',
    'guangzhou', 'tsinghua', 'peking', 'fudan', 'zhejiang',
    'nanjing', 'wuhan', 'xi\'an', 'chengdu', 'tianjin',
    'harbin', 'dalian', 'qingdao', 'jiangsu', 'shandong',
    'cas', 'nsfc', 'most', 'miit'
  ];

  return chineseIndicators.some(indicator => lowerName.includes(indicator));
}

/**
 * Extract Chinese funders from a work's grants
 */
export function extractChineseFunders(grants: any[]): ChineseForeignInfluenceGroup[] {
  if (!grants || grants.length === 0) {
    return [];
  }

  const chineseFunders: ChineseForeignInfluenceGroup[] = [];

  grants.forEach(grant => {
    const funderName = grant.funder_display_name || grant.funder || '';

    if (!funderName) return;

    // Check if it's Chinese
    const riskLevel = assessInstitutionRisk(funderName);

    // Only include if we detected it as Chinese
    if (riskLevel !== 'unknown' || isChineseByName(funderName)) {
      const funderType = classifyFunderType(funderName);
      const cnFig = lookupCNFig(funderName);

      chineseFunders.push({
        name: funderName,
        type: funderType,
        funding_count: 1,
        related_works: [grant.award_id || ''],
        sectors: [],
        risk_level: riskLevel,
        description: cnFig
          ? `${cnFig.entry.kind || 'N/A'} (${cnFig.matchType} match${cnFig.score ? `, ${Math.round(cnFig.score * 100)}% confidence` : ''})`
          : `Detected via pattern matching`
      });
    }
  });

  return chineseFunders;
}

/**
 * Extract Chinese institutions from a work's authorships
 */
export function extractChineseInstitutions(authorships: any[]): Array<{
  name: string;
  riskLevel: 'high' | 'medium' | 'low' | 'unknown';
  type: string;
  cnFigData?: CNFigEntry;
}> {
  if (!authorships || authorships.length === 0) {
    return [];
  }

  const institutions: Array<{
    name: string;
    riskLevel: 'high' | 'medium' | 'low' | 'unknown';
    type: string;
    cnFigData?: CNFigEntry;
  }> = [];

  authorships.forEach(authorship => {
    if (!authorship.institutions) return;

    authorship.institutions.forEach((institution: any) => {
      const instName = institution.display_name || '';
      const countryCode = institution.country_code || '';

      // Only process Chinese institutions
      if (countryCode === 'CN' || isChineseByName(instName)) {
        const riskLevel = assessInstitutionRisk(instName);
        const funderType = classifyFunderType(instName);
        const cnFig = lookupCNFig(instName);

        institutions.push({
          name: instName,
          riskLevel: riskLevel,
          type: funderType,
          cnFigData: cnFig?.entry
        });
      }
    });
  });

  return institutions;
}

/**
 * Aggregate funders across multiple works
 */
export function aggregateFunders(
  allFunders: ChineseForeignInfluenceGroup[]
): ChineseForeignInfluenceGroup[] {
  const funderMap = new Map<string, ChineseForeignInfluenceGroup>();

  allFunders.forEach(funder => {
    const key = normalizeInstitutionName(funder.name);

    if (funderMap.has(key)) {
      const existing = funderMap.get(key)!;
      existing.funding_count += funder.funding_count;
      existing.related_works.push(...funder.related_works);
      existing.sectors.push(...funder.sectors);
    } else {
      funderMap.set(key, { ...funder });
    }
  });

  // Sort by funding count (descending)
  return Array.from(funderMap.values()).sort(
    (a, b) => b.funding_count - a.funding_count
  );
}

/**
 * Check if an institution is Chinese
 */
export function isChineseInstitution(institutionName: string, countryCode?: string): boolean {
  if (countryCode === 'CN') {
    return true;
  }

  return isChineseByName(institutionName);
}
