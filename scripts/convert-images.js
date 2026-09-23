import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ASSETS_DIR = path.resolve(__dirname, '../public/assets');

async function convertImages() {
  console.log('🖼️ Starting WebP image conversion & compression...');
  const files = fs.readdirSync(ASSETS_DIR);

  for (const file of files) {
    const filePath = path.join(ASSETS_DIR, file);
    const ext = path.extname(file).toLowerCase();

    if (['.jpg', '.jpeg', '.png'].includes(ext) && !file.endsWith('.webp')) {
      const baseName = path.basename(file, ext);
      const webpPath = path.join(ASSETS_DIR, `${baseName}.webp`);

      let imagePipeline = sharp(filePath);

      // Special handling for hero image to resize to optimal display width (600px)
      if (baseName === 'senior-caretaker-bond') {
        imagePipeline = imagePipeline.resize({ width: 600, withoutEnlargement: true });
      }

      await imagePipeline
        .webp({ quality: 80, effort: 6 })
        .toFile(webpPath);

      const oldSize = (fs.statSync(filePath).size / 1024).toFixed(1);
      const newSize = (fs.statSync(webpPath).size / 1024).toFixed(1);

      console.log(`⚡ Converted ${file} (${oldSize} KB) -> ${baseName}.webp (${newSize} KB) [Savings: ${(100 - (newSize/oldSize)*100).toFixed(0)}%]`);
    }
  }

  console.log('🎉 Image WebP conversion finished successfully!');
}

convertImages();
