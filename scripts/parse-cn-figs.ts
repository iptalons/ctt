/**
 * Script to parse CN_FIGs.csv and generate TypeScript data module
 */

import * as fs from 'fs';
import * as path from 'path';

interface CNFigEntry {
  riskRating: 'HIGH' | 'MEDIUM' | 'LOW';
  countryCode: string;
  institution: string;
  kind: string;
  securityCredentials: string;
  endUserLists: string;
  espionage: string;
}

function parseCSV(csvPath: string): CNFigEntry[] {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split('\n');
  const entries: CNFigEntry[] = [];

  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    // Parse CSV line (handle commas in quoted fields)
    const parts = line.split(',');
    if (parts.length < 7) continue;

    entries.push({
      riskRating: parts[0].trim() as 'HIGH' | 'MEDIUM' | 'LOW',
      countryCode: parts[1].trim(),
      institution: parts[2].trim(),
      kind: parts[3].trim(),
      securityCredentials: parts[4].trim(),
      endUserLists: parts[5].trim(),
      espionage: parts[6].trim()
    });
  }

  return entries;
}

function generateTypeScriptModule(entries: CNFigEntry[]): string {
  const normalized = entries.map(entry => ({
    ...entry,
    normalizedName: entry.institution.toLowerCase().trim()
  }));

  // Use JSON.stringify with proper escaping
  const mapData = JSON.stringify(
    normalized.map(e => [e.normalizedName, {
      riskRating: e.riskRating,
      countryCode: e.countryCode,
      institution: e.institution,
      kind: e.kind,
      securityCredentials: e.securityCredentials,
      endUserLists: e.endUserLists,
      espionage: e.espionage
    }])
  );

  const arrayData = JSON.stringify(normalized, null, 2);

  return `/**
 * Chinese Foreign Influence Groups (FIGs) Data
 * Auto-generated from CN_FIGs.csv
 * Total entries: ${entries.length}
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

export interface NormalizedCNFigEntry extends CNFigEntry {
  normalizedName: string;
}

/**
 * Map of normalized institution names to their FIG data
 */
export const CN_FIGS_MAP = new Map<string, CNFigEntry>(${mapData});

/**
 * Array of all CN FIG entries for fuzzy matching
 */
export const CN_FIGS_ARRAY: NormalizedCNFigEntry[] = ${arrayData};

/**
 * Get FIG entry by exact match (case-insensitive)
 */
export function getCNFigByName(institutionName: string): CNFigEntry | null {
  const normalized = institutionName.toLowerCase().trim();
  return CN_FIGS_MAP.get(normalized) || null;
}

/**
 * Statistics
 */
export const CN_FIGS_STATS = {
  total: ${entries.length},
  high: ${entries.filter(e => e.riskRating === 'HIGH').length},
  medium: ${entries.filter(e => e.riskRating === 'MEDIUM').length},
  low: ${entries.filter(e => e.riskRating === 'LOW').length},
  military: ${entries.filter(e => e.kind === 'Military').length},
  defence: ${entries.filter(e => e.kind === 'Defence industry conglomerate').length},
  civilian: ${entries.filter(e => e.kind === 'Civilian').length},
  sevenSons: ${entries.filter(e => e.kind === 'Seven Sons').length}
};
`;
}

// Main execution
const csvPath = path.join(__dirname, '..', 'CN_FIGs.csv');
const outputPath = path.join(__dirname, '..', 'src', 'data', 'cn-figs-data.ts');

console.log('Parsing CN_FIGs.csv...');
const entries = parseCSV(csvPath);
console.log(`Parsed ${entries.length} entries`);

console.log('Generating TypeScript module...');
const tsModule = generateTypeScriptModule(entries);

// Ensure data directory exists
const dataDir = path.dirname(outputPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

fs.writeFileSync(outputPath, tsModule);
console.log(`Generated ${outputPath}`);
console.log('Done!');
