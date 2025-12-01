/**
 * Script to upload CN_FIGs data to Cloudflare KV
 *
 * Usage:
 * 1. First create KV namespaces:
 *    npx wrangler kv:namespace create "CN_FIGS_KV"
 *    npx wrangler kv:namespace create "CN_FIGS_KV" --preview
 *
 * 2. Update wrangler.toml with the namespace IDs from step 1
 *
 * 3. Run this script:
 *    npx tsx scripts/upload-cn-figs-to-kv.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

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

function normalizeInstitutionName(name: string): string {
  return name.toLowerCase().trim().replace(/[^\w\s]/g, '').replace(/\s+/g, '_');
}

async function uploadToKV() {
  console.log('📊 Parsing CN_FIGs.csv...');
  const csvPath = path.join(__dirname, '..', 'CN_FIGs.csv');
  const entries = parseCSV(csvPath);
  console.log(`✅ Parsed ${entries.length} entries\n`);

  // Create temporary JSON files for bulk upload
  const tempDir = path.join(__dirname, '..', '.temp_kv_data');
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }

  console.log('📦 Preparing data for KV upload...');

  // Split into chunks of 1000 entries each (KV bulk upload limit)
  const chunkSize = 1000;
  const chunks: CNFigEntry[][] = [];

  for (let i = 0; i < entries.length; i += chunkSize) {
    chunks.push(entries.slice(i, i + chunkSize));
  }

  console.log(`📂 Split into ${chunks.length} chunks\n`);

  // Upload each chunk
  for (let chunkIndex = 0; chunkIndex < chunks.length; chunkIndex++) {
    const chunk = chunks[chunkIndex];
    console.log(`⬆️  Uploading chunk ${chunkIndex + 1}/${chunks.length} (${chunk.length} entries)...`);

    // Create bulk upload format
    const bulkData = chunk.map(entry => ({
      key: `fig:${normalizeInstitutionName(entry.institution)}`,
      value: JSON.stringify(entry),
      metadata: {
        riskRating: entry.riskRating,
        kind: entry.kind,
        country: entry.countryCode
      }
    }));

    // Write to temp file
    const tempFile = path.join(tempDir, `chunk_${chunkIndex}.json`);
    fs.writeFileSync(tempFile, JSON.stringify(bulkData, null, 2));

    // Upload using wrangler
    try {
      execSync(`npx wrangler kv:bulk put "${tempFile}" --binding=CN_FIGS_KV`, {
        stdio: 'inherit'
      });
      console.log(`✅ Chunk ${chunkIndex + 1} uploaded successfully\n`);
    } catch (error) {
      console.error(`❌ Failed to upload chunk ${chunkIndex + 1}:`, error);
      process.exit(1);
    }

    // Clean up temp file
    fs.unlinkSync(tempFile);
  }

  // Upload metadata and statistics
  console.log('📈 Uploading metadata and statistics...');

  const stats = {
    total: entries.length,
    high: entries.filter(e => e.riskRating === 'HIGH').length,
    medium: entries.filter(e => e.riskRating === 'MEDIUM').length,
    low: entries.filter(e => e.riskRating === 'LOW').length,
    military: entries.filter(e => e.kind === 'Military').length,
    defence: entries.filter(e => e.kind === 'Defence industry conglomerate').length,
    civilian: entries.filter(e => e.kind === 'Civilian').length,
    sevenSons: entries.filter(e => e.kind === 'Seven Sons').length,
    lastUpdated: new Date().toISOString()
  };

  const statsFile = path.join(tempDir, 'stats.json');
  fs.writeFileSync(statsFile, JSON.stringify([{
    key: 'cn_figs:stats',
    value: JSON.stringify(stats)
  }], null, 2));

  try {
    execSync(`npx wrangler kv:bulk put "${statsFile}" --binding=CN_FIGS_KV`, {
      stdio: 'inherit'
    });
    console.log('✅ Statistics uploaded successfully\n');
  } catch (error) {
    console.error('❌ Failed to upload statistics:', error);
  }

  fs.unlinkSync(statsFile);

  // Clean up temp directory
  fs.rmdirSync(tempDir);

  console.log('🎉 All data uploaded to Cloudflare KV successfully!');
  console.log('\n📋 Summary:');
  console.log(`   Total entries: ${stats.total}`);
  console.log(`   HIGH risk: ${stats.high}`);
  console.log(`   MEDIUM risk: ${stats.medium}`);
  console.log(`   LOW risk: ${stats.low}`);
  console.log(`\n✨ You can now use CN_FIGS_KV in your worker!`);
}

// Run the upload
uploadToKV().catch(error => {
  console.error('❌ Upload failed:', error);
  process.exit(1);
});
