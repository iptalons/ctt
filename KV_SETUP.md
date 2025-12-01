# Cloudflare KV Setup for CN_FIGs Data

This guide explains how to set up Cloudflare KV storage for the CN_FIGs (Chinese Foreign Influence Groups) database.

## Overview

The CN_FIGs CSV file (2,024 entries, 974KB) is too large to bundle directly into the Worker. Using Cloudflare KV provides:
- Fast lookups with minimal Worker size impact
- Authoritative risk ratings from verified database
- Easy updates without redeploying the Worker

## Step 1: Create KV Namespaces

Run these commands to create production and preview KV namespaces:

```bash
# Create production namespace
npx wrangler kv:namespace create "CN_FIGS_KV"

# Create preview namespace (for testing)
npx wrangler kv:namespace create "CN_FIGS_KV" --preview
```

You'll see output like:
```
🌀 Creating namespace with title "criticaltechtracker-CN_FIGS_KV"
✨ Success!
Add the following to your configuration file in your kv_namespaces array:
{ binding = "CN_FIGS_KV", id = "abc123..." }
```

## Step 2: Update wrangler.toml

Replace the placeholder IDs in `wrangler.toml` with the actual IDs from Step 1:

```toml
[[kv_namespaces]]
binding = "CN_FIGS_KV"
id = "YOUR_PRODUCTION_ID_HERE"  # From first command
preview_id = "YOUR_PREVIEW_ID_HERE"  # From second command
```

## Step 3: Upload CN_FIGs Data

Run the upload script to populate KV with all 2,024 CN_FIGs entries:

```bash
npx tsx scripts/upload-cn-figs-to-kv.ts
```

The script will:
- Parse CN_FIGs.csv
- Split data into chunks (KV bulk upload limit: 1000 entries)
- Upload each chunk to KV
- Upload statistics and metadata
- Show progress and summary

Expected output:
```
📊 Parsing CN_FIGs.csv...
✅ Parsed 2024 entries

📦 Preparing data for KV upload...
📂 Split into 3 chunks

⬆️  Uploading chunk 1/3 (1000 entries)...
✅ Chunk 1 uploaded successfully

⬆️  Uploading chunk 2/3 (1000 entries)...
✅ Chunk 2 uploaded successfully

⬆️  Uploading chunk 3/3 (24 entries)...
✅ Chunk 3 uploaded successfully

📈 Uploading metadata and statistics...
✅ Statistics uploaded successfully

🎉 All data uploaded to Cloudflare KV successfully!

📋 Summary:
   Total entries: 2024
   HIGH risk: 735
   MEDIUM risk: 1289
   LOW risk: 0

✨ You can now use CN_FIGS_KV in your worker!
```

## Step 4: Deploy Worker

Deploy your Worker with KV bindings:

```bash
npx wrangler deploy --env=""
```

## How It Works

### KV Key Structure

Each CN_FIG entry is stored with a normalized key:
```
fig:beihang_university → { "riskRating": "HIGH", "institution": "Beihang University", ... }
fig:tsinghua_university → { "riskRating": "HIGH", "institution": "Tsinghua University", ... }
```

Statistics are stored at:
```
cn_figs:stats → { "total": 2024, "high": 735, "medium": 1289, ... }
```

### Fallback Behavior

The Worker code includes pattern-based fallback:
1. **KV Available**: Uses authoritative CN_FIGs data from KV
2. **KV Unavailable**: Falls back to pattern matching (current behavior)

This ensures the dashboard works immediately without KV, and automatically improves once KV is configured.

### Usage in Code

```typescript
import { lookupCNFig, mapRiskRating } from './utils/cn-figs-kv';

// In your handler
const figData = await lookupCNFig(env.CN_FIGS_KV, 'Beihang University');

if (figData) {
  const riskLevel = mapRiskRating(figData.riskRating);
  console.log(`Risk: ${riskLevel}, Kind: ${figData.kind}`);
}
```

## Updating Data

To update the CN_FIGs data after modifying CN_FIGs.csv:

```bash
# Re-run the upload script
npx tsx scripts/upload-cn-figs-to-kv.ts
```

No Worker redeployment needed! Changes take effect immediately.

## Costs

Cloudflare KV pricing (as of 2024):
- **Reads**: First 10M/month free, then $0.50 per million
- **Writes**: First 1M/month free, then $5.00 per million
- **Storage**: First 1GB free, then $0.50 per GB/month
- **Deletes**: Free

With 2,024 entries (~974KB), storage is well within free tier.

## Troubleshooting

### "Namespace not found" error
- Verify KV namespace IDs in wrangler.toml match output from Step 1
- Check you're deploying with correct environment (use `--env=""` for default)

### Upload fails with "too many keys"
- Script automatically handles chunking (1000 entries per batch)
- If issues persist, reduce `chunkSize` in upload script

### Worker can't access KV
- Ensure binding name matches: `CN_FIGS_KV` in both wrangler.toml and code
- Redeploy Worker after updating wrangler.toml

## Verification

Check KV contains data:

```bash
# List first 10 keys
npx wrangler kv:key list --binding=CN_FIGS_KV | head -10

# Get specific entry
npx wrangler kv:key get "fig:beihang_university" --binding=CN_FIGS_KV

# Get stats
npx wrangler kv:key get "cn_figs:stats" --binding=CN_FIGS_KV
```

## Alternative: Using Wrangler Config

You can also configure KV namespace in wrangler.toml without CLI:

```toml
[[kv_namespaces]]
binding = "CN_FIGS_KV"
id = "your-namespace-id"
preview_id = "your-preview-namespace-id"
```

Then deploy normally with `npx wrangler deploy`.
