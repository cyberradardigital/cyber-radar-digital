const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');
const outputDir = path.join(__dirname, 'public-webp');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Get all image files
const imageExtensions = ['.jpg', '.jpeg', '.png', '.jfif'];
const files = fs.readdirSync(publicDir);

let converted = 0;
let skipped = 0;

async function convertImages() {
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    
    // Skip if not an image or already webp
    if (!imageExtensions.includes(ext)) {
      skipped++;
      continue;
    }

    const inputPath = path.join(publicDir, file);
    const outputFileName = path.parse(file).name + '.webp';
    const outputPath = path.join(outputDir, outputFileName);

    try {
      await sharp(inputPath)
        .webp({ quality: 85 })
        .toFile(outputPath);
      
      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);
      
      console.log(`✓ ${file} → ${outputFileName} (${savings}% smaller)`);
      converted++;
    } catch (error) {
      console.error(`✗ Failed to convert ${file}:`, error.message);
    }
  }

  console.log(`\n✅ Conversion complete!`);
  console.log(`   Converted: ${converted} images`);
  console.log(`   Skipped: ${skipped} files`);
  console.log(`\n📁 WebP images saved to: ${outputDir}`);
  console.log(`\n⚠️  Next steps:`);
  console.log(`   1. Review the converted images in public-webp/`);
  console.log(`   2. Backup your original images`);
  console.log(`   3. Replace the images in public/ with the WebP versions`);
  console.log(`   4. Update all image references in your code to use .webp extension`);
}

convertImages();
