/**
 * Cloudflare KV utilities for CN_FIGs data lookup
 */

export interface CNFigEntry {
  riskRating: 'HIGH' | 'MEDIUM' | 'LOW';
  countryCode: string;
  institution: string;
  kind: string;
  securityCredentials: string;
  endUserLists: string;
  espionage: string;
}

/**
 * Normalize institution name for KV key lookup
 */
export function normalizeInstitutionName(name: string): string {
  return name.toLowerCase().trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '_');
}

/**
 * Lookup institution in CN_FIGs KV store
 */
export async function lookupCNFig(
  kv: KVNamespace | undefined,
  institutionName: string
): Promise<CNFigEntry | null> {
  if (!kv) {
    return null;
  }

  try {
    const key = `fig:${normalizeInstitutionName(institutionName)}`;
    const value = await kv.get(key);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as CNFigEntry;
  } catch (error) {
    console.warn(`Failed to lookup ${institutionName} in KV:`, error);
    return null;
  }
}

/**
 * Get CN_FIGs statistics from KV
 */
export async function getCNFigsStats(kv: KVNamespace | undefined): Promise<any | null> {
  if (!kv) {
    return null;
  }

  try {
    const value = await kv.get('cn_figs:stats');
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  } catch (error) {
    console.warn('Failed to get CN_FIGs stats from KV:', error);
    return null;
  }
}

/**
 * Map CN_FIGs risk rating to our risk level type
 */
export function mapRiskRating(rating: 'HIGH' | 'MEDIUM' | 'LOW'): 'high' | 'medium' | 'low' {
  return rating.toLowerCase() as 'high' | 'medium' | 'low';
}

/**
 * Map CN_FIGs kind to our funder type
 */
export function mapKindToType(
  kind: string
): 'government' | 'military' | 'state-owned' | 'university' | 'private' | 'unknown' {
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
