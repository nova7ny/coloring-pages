const fs = require('fs');
const path = require('path');

const ARTIFACT_DIR = 'C:\\Users\\Jose\\.gemini\\antigravity\\brain\\42ce07a1-a73c-41e2-98a4-f375a810d8b2';
const CONTENT_DIR = path.join(__dirname, '../public/content');

const mappings = {
  "friendly-swamp-monster": { category: "fantasy", prefix: "friendly_swamp_monster" },
  "vintage-hat-makeup-kit": { category: "fashion", prefix: "vintage_hat_makeup_kit" },
  "butterfly-wildflower-garden": { category: "flowers", prefix: "butterfly_wildflower_garden" },
  "giant-sundae-bowl": { category: "food", prefix: "giant_sundae_bowl" },
  "pharaoh-sarcophagus-tomb": { category: "history", prefix: "pharaoh_sarcophagus_tomb" },
  "easter-bunny-basket": { category: "holidays", prefix: "easter_bunny_basket" },
  "santa-filling-stockings": { category: "holidays", prefix: "santa_filling_stockings" },
  "cool-electric-guitar": { category: "music", prefix: "cool_electric_guitar" },
  "forest-river-bridge": { category: "nature", prefix: "forest_river_bridge" },
  "great-white-reef-patrol": { category: "ocean", prefix: "great_white_reef_patrol" },
  "medium-jellyfish": { category: "ocean", prefix: "medium_jellyfish" },
  "medium-vampire-squid": { category: "ocean", prefix: "medium_vampire_squid" },
  "simple-baby-turtle": { category: "ocean", prefix: "simple_baby_turtle" },
  "vibrant-coral-sea-life": { category: "ocean", prefix: "vibrant_coral_sea_life" },
  "spacewalk-moon-landing": { category: "space", prefix: "spacewalk_moon_landing" },
  "easy-concrete-pump-truck": { category: "vehicles", prefix: "easy_concrete_pump_truck" }
};

// Read all files in artifact directory
const artifactFiles = fs.readdirSync(ARTIFACT_DIR);

for (const [pageId, info] of Object.entries(mappings)) {
  // Find all matching files and sort them by timestamp in filename
  const matchingFiles = artifactFiles.filter(f => f.startsWith(info.prefix) && f.endsWith('.png'));

  if (matchingFiles.length === 0) {
    console.error(`❌ Could not find matching artifact for ${pageId} (prefix: ${info.prefix})`);
    continue;
  }

  // Sort matching files descending by timestamp
  matchingFiles.sort((a, b) => {
    const getTimestamp = (filename) => {
      const matches = filename.match(/\d+/g);
      if (matches && matches.length > 0) {
        return parseInt(matches[matches.length - 1], 10);
      }
      return 0;
    };
    return getTimestamp(b) - getTimestamp(a);
  });

  const matchingFile = matchingFiles[0];
  const srcPath = path.join(ARTIFACT_DIR, matchingFile);
  const destDir = path.join(CONTENT_DIR, info.category, pageId);
  const destImagePath = path.join(destDir, 'image.png');
  const destPdfPath = path.join(destDir, 'printable.pdf');
  const destMarkerPath = path.join(destDir, '.is_placeholder');

  console.log(`Ingesting [${pageId}]...`);
  console.log(`  Source: ${matchingFile}`);
  console.log(`  Dest Image: ${destImagePath}`);

  try {
    // Ensure destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Copy image
    fs.copyFileSync(srcPath, destImagePath);
    console.log(`  ✅ Image copied successfully.`);

    // Write mock PDF
    fs.writeFileSync(destPdfPath, "MOCK PDF CONTENT\n", 'utf8');
    console.log(`  ✅ Mock PDF written.`);

    // Delete placeholder marker if exists
    if (fs.existsSync(destMarkerPath)) {
      fs.unlinkSync(destMarkerPath);
      console.log(`  ✅ Removed .is_placeholder marker.`);
    }

  } catch (err) {
    console.error(`  ❌ Error processing ${pageId}:`, err.message);
  }
}

console.log('=== Ingestion process finished ===');
