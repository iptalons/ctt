/**
 * Fuzzy matching utility using Levenshtein distance
 */

/**
 * Calculate Levenshtein distance between two strings
 */
function levenshteinDistance(str1: string, str2: string): number {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix: number[][] = [];

  // Initialize matrix
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }

  // Fill matrix
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,      // deletion
        matrix[i][j - 1] + 1,      // insertion
        matrix[i - 1][j - 1] + cost // substitution
      );
    }
  }

  return matrix[len1][len2];
}

/**
 * Calculate similarity ratio between two strings (0-1)
 */
export function similarity(str1: string, str2: string): number {
  const longer = str1.length > str2.length ? str1 : str2;
  const shorter = str1.length > str2.length ? str2 : str1;

  if (longer.length === 0) {
    return 1.0;
  }

  const distance = levenshteinDistance(longer, shorter);
  return (longer.length - distance) / longer.length;
}

/**
 * Normalize institution name for matching
 */
export function normalizeInstitutionName(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s]/g, '') // Remove special characters
    .replace(/\s+/g, ' ');    // Normalize whitespace
}

/**
 * Find best fuzzy match from a list of candidates
 * Returns null if no match meets the threshold
 */
export function findBestMatch<T>(
  query: string,
  candidates: T[],
  getText: (item: T) => string,
  threshold: number = 0.7
): { match: T; score: number } | null {
  const normalizedQuery = normalizeInstitutionName(query);

  let bestMatch: T | null = null;
  let bestScore = 0;

  for (const candidate of candidates) {
    const candidateText = normalizeInstitutionName(getText(candidate));
    const score = similarity(normalizedQuery, candidateText);

    if (score > bestScore && score >= threshold) {
      bestScore = score;
      bestMatch = candidate;
    }
  }

  if (bestMatch === null) {
    return null;
  }

  return { match: bestMatch, score: bestScore };
}

/**
 * Check if query contains any of the keywords
 */
export function containsKeyword(query: string, keywords: string[]): boolean {
  const normalized = normalizeInstitutionName(query);
  return keywords.some(keyword =>
    normalized.includes(normalizeInstitutionName(keyword))
  );
}
