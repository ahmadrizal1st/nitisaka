import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const illustrationsDir = path.join(process.cwd(), 'public', 'illustrations');
const darkDir = path.join(process.cwd(), 'public', 'dark');

async function optimizeImages() {
  console.log('Starting image optimization...');

  // 1. Convert specific files and make responsive versions
  const tasks = [
    { file: 'responsive-mockup-dark.png', dir: illustrationsDir, quality: 82, responsive: [828, 1200, 1600] },
    { file: 'responsive-mockup-light.png', dir: illustrationsDir, quality: 82, responsive: [828, 1200, 1600] },
    { file: 'professional-website.png', dir: illustrationsDir, quality: 80, responsive: [828, 1200, 1402] },
    { file: 'manual-business.png', dir: illustrationsDir, quality: 80, responsive: [828, 1200, 1402] },
    { file: 'growth-and-scale.png', dir: illustrationsDir, quality: 80, responsive: [828, 1200, 1402] },
    { file: 'systems-and-automation.png', dir: illustrationsDir, quality: 80, responsive: [828, 1200, 1402] },
    { file: 'wave-hands.png', dir: illustrationsDir, quality: 80, responsive: [600, 800] },
    { file: 'nitisaka-about-mascot.png', dir: illustrationsDir, quality: 80, responsive: [828, 1200, 1536] },
    { file: 'digital-solustion-dark.png', dir: illustrationsDir, quality: 80, responsive: [600, 1000] },
    { file: 'logo-text-nobg.png', dir: darkDir, quality: 85, responsive: [] },
  ];

  for (const task of tasks) {
    const inputPath = path.join(task.dir, task.file);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    const basename = path.basename(task.file, '.png');

    // Base webp
    const outputPath = path.join(task.dir, `${basename}.webp`);
    await sharp(inputPath)
      .webp({ quality: task.quality })
      .toFile(outputPath);
    console.log(`Created ${outputPath}`);

    // Responsive webp
    for (const width of task.responsive) {
      const respPath = path.join(task.dir, `${basename}-${width}w.webp`);
      await sharp(inputPath)
        .resize({ width })
        .webp({ quality: task.quality })
        .toFile(respPath);
      console.log(`Created ${respPath}`);
    }
  }

  console.log('Image optimization complete!');
}

optimizeImages().catch(console.error);
