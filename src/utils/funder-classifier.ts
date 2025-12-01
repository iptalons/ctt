/**
 * Funder Classification Module
 * Identifies and classifies Chinese funding organizations
 */

import { ChineseForeignInfluenceGroup } from '../models/types';

/**
 * Known Chinese government and military-linked funding organizations
 */
export const KNOWN_CHINESE_FUNDERS: Record<string, ChineseForeignInfluenceGroup> = {
  'nsfc': {
    name: 'National Natural Science Foundation of China (NSFC)',
    type: 'government',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Primary government agency for basic research funding in China'
  },
  'most': {
    name: 'Ministry of Science and Technology (MOST)',
    type: 'government',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Chinese government ministry overseeing science and technology development'
  },
  'cas': {
    name: 'Chinese Academy of Sciences (CAS)',
    type: 'government',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'State-run comprehensive research and development organization'
  },
  'ndrc': {
    name: 'National Development and Reform Commission (NDRC)',
    type: 'government',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Macroeconomic management agency under the State Council'
  },
  'miit': {
    name: 'Ministry of Industry and Information Technology (MIIT)',
    type: 'government',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Regulator and supervisor of China\'s industrial and information technology sectors'
  },
  'pla': {
    name: 'People\'s Liberation Army (PLA) - Related Funding',
    type: 'military',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Military-linked research funding'
  },
  'cmse': {
    name: 'Commission on Military-Civil Fusion',
    type: 'military',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Organization promoting military-civil fusion strategy'
  },
  'sastind': {
    name: 'State Administration for Science, Technology and Industry for National Defense (SASTIND)',
    type: 'military',
    funding_count: 0,
    related_works: [],
    sectors: [],
    risk_level: 'high',
    description: 'Manages defense science, technology and industry'
  }
};

/**
 * Keywords and patterns to identify Chinese government/military funders
 */
const CHINESE_GOV_PATTERNS = [
  // Government agencies
  /national.*natural.*science.*foundation.*china/i,
  /nsfc/i,
  /ministry.*science.*technology/i,
  /chinese.*academy.*sciences/i,
  /\bcas\b/i,
  /national.*development.*reform/i,
  /\bndrc\b/i,
  /ministry.*industry.*information/i,
  /\bmiit\b/i,
  /state.*council/i,

  // Military and defense
  /people.*liberation.*army/i,
  /\bpla\b/i,
  /military.*civil.*fusion/i,
  /national.*defense/i,
  /sastind/i,
  /commission.*military/i,

  // State-owned enterprises
  /china.*national.*corporation/i,
  /state.*grid/i,
  /sinopec/i,
  /petrochina/i,
  /aviation.*industry.*corporation/i,
  /\bavic\b/i,
  /china.*aerospace/i,
  /casc/i,
  /china.*shipbuilding/i,
  /cssc/i,
  /china.*electronics/i,
  /cetc/i,

  // Provincial government
  /provincial.*science.*technology/i,
  /municipal.*science.*technology/i,

  // National programs
  /973.*program/i,
  /863.*program/i,
  /thousand.*talents/i,
  /national.*key.*r.*d/i,
  /torch.*program/i,
  /spark.*program/i,
  /climbing.*program/i
];

/**
 * Check if a funder name indicates Chinese government/military affiliation
 */
export function isChineseGovernmentFunder(funderName: string): boolean {
  return CHINESE_GOV_PATTERNS.some(pattern => pattern.test(funderName));
}

/**
 * Classify funder type based on name
 */
export function classifyFunderType(
  funderName: string
): 'government' | 'military' | 'state-owned' | 'university' | 'private' | 'unknown' {
  const lowerName = funderName.toLowerCase();

  // Military-related
  if (
    lowerName.includes('pla') ||
    lowerName.includes('military') ||
    lowerName.includes('defense') ||
    lowerName.includes('sastind')
  ) {
    return 'military';
  }

  // Government agencies
  if (
    lowerName.includes('ministry') ||
    lowerName.includes('commission') ||
    lowerName.includes('administration') ||
    lowerName.includes('state council') ||
    lowerName.includes('nsfc') ||
    lowerName.includes('natural science foundation') ||
    lowerName.includes('provincial') ||
    lowerName.includes('municipal')
  ) {
    return 'government';
  }

  // State-owned enterprises
  if (
    lowerName.includes('state grid') ||
    lowerName.includes('sinopec') ||
    lowerName.includes('petrochina') ||
    lowerName.includes('china national') ||
    lowerName.includes('aviation industry') ||
    lowerName.includes('aerospace') ||
    lowerName.includes('shipbuilding')
  ) {
    return 'state-owned';
  }

  // Universities
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
 * Assess risk level of a funder
 */
export function assessFunderRiskLevel(
  funderType: string,
  funderName: string
): 'high' | 'medium' | 'low' {
  const lowerName = funderName.toLowerCase();

  // High risk: Military and key government agencies
  if (
    funderType === 'military' ||
    lowerName.includes('pla') ||
    lowerName.includes('military-civil fusion') ||
    lowerName.includes('national defense')
  ) {
    return 'high';
  }

  // High risk: Strategic government funders
  if (
    lowerName.includes('nsfc') ||
    lowerName.includes('most') ||
    lowerName.includes('miit') ||
    lowerName.includes('ndrc') ||
    lowerName.includes('state council')
  ) {
    return 'high';
  }

  // Medium risk: State-owned enterprises and CAS
  if (
    funderType === 'state-owned' ||
    lowerName.includes('chinese academy of sciences') ||
    lowerName.includes('provincial') ||
    lowerName.includes('municipal')
  ) {
    return 'medium';
  }

  // Low risk: Universities and private (if not strategic)
  return 'low';
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

    // Check if it's a Chinese funder
    if (isChineseGovernmentFunder(funderName) || funderName.toLowerCase().includes('china')) {
      const funderType = classifyFunderType(funderName);
      const riskLevel = assessFunderRiskLevel(funderType, funderName);

      chineseFunders.push({
        name: funderName,
        type: funderType,
        funding_count: 1,
        related_works: [grant.award_id || ''],
        sectors: [],
        risk_level: riskLevel,
        description: `Funding through grant: ${grant.award_id || 'N/A'}`
      });
    }
  });

  return chineseFunders;
}

/**
 * Aggregate funders across multiple works
 */
export function aggregateFunders(
  allFunders: ChineseForeignInfluenceGroup[]
): ChineseForeignInfluenceGroup[] {
  const funderMap = new Map<string, ChineseForeignInfluenceGroup>();

  allFunders.forEach(funder => {
    const key = funder.name.toLowerCase();

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

  const lowerName = institutionName.toLowerCase();
  return (
    lowerName.includes('china') ||
    lowerName.includes('chinese') ||
    lowerName.includes('beijing') ||
    lowerName.includes('shanghai') ||
    lowerName.includes('shenzhen') ||
    lowerName.includes('guangzhou') ||
    lowerName.includes('tsinghua') ||
    lowerName.includes('peking university') ||
    lowerName.includes('fudan') ||
    lowerName.includes('zhejiang')
  );
}
