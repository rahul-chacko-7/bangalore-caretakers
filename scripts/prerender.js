import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import { createServer } from 'http';
import handler from 'serve-handler';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.resolve(__dirname, '../dist');

const ROUTES = [
  '/',
  '/old-age-homes-bangalore',
  '/home-nursing-services-bangalore',
  '/dementia-alzheimers-care-bangalore',
  '/palliative-cancer-care-bangalore',
  '/assisted-living-senior-care-bangalore',
  '/post-surgery-rehabilitation-care',
  '/specialized-nursing-care',
  '/home-for-disabled-and-rehabilitation',
  '/caretaker-nursing-jobs-bangalore',
  '/contact-us',
  '/elderly-care-indiranagar',
  '/elderly-care-jayanagar',
  '/elderly-care-whitefield',
  '/elderly-care-electronic-city',
  '/elderly-care-yelahanka',
  '/blog',
  '/blog/how-to-choose-old-age-home-bangalore',
  '/blog/dementia-home-care-guide-bangalore',
  '/blog/post-surgery-nursing-care-checklist'
];

async function prerender() {
  console.log('🚀 Starting Build-Time HTML Prerendering for static routes...');

  if (!fs.existsSync(DIST_DIR)) {
    console.error('❌ dist/ directory not found. Please run `vite build` first.');
    process.exit(1);
  }

  // 1. Start local static HTTP server for dist
  const PORT = 4173;
  const server = createServer((req, res) => {
    return handler(req, res, {
      public: DIST_DIR,
      rewrites: [{ source: '**', destination: '/index.html' }]
    });
  });

  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`🌐 Local static server running at http://localhost:${PORT}`);

  // 2. Launch Puppeteer Browser
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();

  for (const route of ROUTES) {
    const url = `http://localhost:${PORT}${route}`;
    console.log(`⏳ Prerendering route: ${route}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      await page.waitForSelector('h1', { timeout: 10000 });

      // Extract fully rendered HTML
      const html = await page.content();

      // Determine output file path
      let targetFile;
      if (route === '/') {
        targetFile = path.join(DIST_DIR, 'index.html');
      } else {
        const routeDir = path.join(DIST_DIR, route);
        if (!fs.existsSync(routeDir)) {
          fs.mkdirSync(routeDir, { recursive: true });
        }
        targetFile = path.join(routeDir, 'index.html');
      }

      fs.writeFileSync(targetFile, html, 'utf-8');
      console.log(`✅ Saved static HTML -> ${path.relative(DIST_DIR, targetFile)}`);
    } catch (err) {
      console.error(`⚠️ Failed to prerender ${route}:`, err.message);
    }
  }

  await browser.close();
  server.close();
  console.log('🎉 Static HTML Prerendering finished successfully!');
}

prerender();
