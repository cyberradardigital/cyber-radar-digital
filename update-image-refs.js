const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

// Image extensions to replace
const imageExtensions = ['.jpg', '.jpeg', '.png', '.jfif'];

function updateImageReferences(dir) {
  const files = fs.readdirSync(dir);
  let updatedFiles = 0;
  let totalReplacements = 0;

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const result = updateImageReferences(filePath);
      updatedFiles += result.files;
      totalReplacements += result.replacements;
    } else if (file.endsWith('.js') || file.endsWith('.jsx')) {
      // Read file content
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      let fileReplacements = 0;

      // Replace each image extension with .webp
      imageExtensions.forEach(ext => {
        const regex = new RegExp(`(["\`].*?)${ext.replace('.', '\\.')}(["\`])`, 'g');
        const matches = content.match(regex);
        if (matches) {
          content = content.replace(regex, `$1.webp$2`);
          fileReplacements += matches.length;
          modified = true;
        }
      });

      if (modified) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✓ Updated ${path.relative(srcDir, filePath)} (${fileReplacements} replacements)`);
        updatedFiles++;
        totalReplacements += fileReplacements;
      }
    }
  }

  return { files: updatedFiles, replacements: totalReplacements };
}

console.log('🔄 Updating image references to WebP...\n');
const result = updateImageReferences(srcDir);

console.log(`\n✅ Update complete!`);
console.log(`   Files updated: ${result.files}`);
console.log(`   Total replacements: ${result.replacements}`);
console.log(`\n📝 Next steps:`);
console.log(`   1. Copy WebP images from public-webp/ to public/`);
console.log(`   2. Test your website to ensure all images load correctly`);
console.log(`   3. Delete old .jpg/.png images from public/ (optional)`);
