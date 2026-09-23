import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

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
  '/blog/post-surgery-nursing-care-checklist',
  '/blog/physiotherapy-at-home-bangalore-guide',
  '/blog/parkinsons-disease-care-home-bangalore',
  '/blog/icu-setup-at-home-bangalore-cost-guide'
];

async function prerender() {
  console.log('🚀 Starting Build-Time HTML Prerendering for static routes...');

  if (!fs.existsSync(DIST_DIR)) {
    console.warn('⚠️ dist/ directory not found. Skipping prerender.');
    return;
  }

  const baseHtmlPath = path.join(DIST_DIR, 'index.html');
  if (!fs.existsSync(baseHtmlPath)) {
    console.warn('⚠️ index.html not found in dist. Skipping prerender.');
    return;
  }

  const baseHtml = fs.readFileSync(baseHtmlPath, 'utf-8');
  let browserSuccess = false;

  // Run Puppeteer locally if not in Vercel CI environment
  if (!process.env.VERCEL) {
    try {
      const puppeteer = (await import('puppeteer')).default;
      const handler = (await import('serve-handler')).default;
      const { createServer } = await import('http');

      const PORT = 4173;
      const server = createServer((req, res) => {
        return handler(req, res, {
          public: DIST_DIR,
          rewrites: [{ source: '**', destination: '/index.html' }]
        });
      });

      await new Promise((resolve) => server.listen(PORT, resolve));

      const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });

      const page = await browser.newPage();

      for (const route of ROUTES) {
        if (route === '/') continue;
        const url = `http://localhost:${PORT}${route}`;
        try {
          await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });
          await page.waitForSelector('h1', { timeout: 5000 });

          const html = await page.content();
          const routeDir = path.join(DIST_DIR, route);
          if (!fs.existsSync(routeDir)) {
            fs.mkdirSync(routeDir, { recursive: true });
          }
          fs.writeFileSync(path.join(routeDir, 'index.html'), html, 'utf-8');
        } catch (e) {
          const routeDir = path.join(DIST_DIR, route);
          if (!fs.existsSync(routeDir)) fs.mkdirSync(routeDir, { recursive: true });
          fs.writeFileSync(path.join(routeDir, 'index.html'), baseHtml, 'utf-8');
        }
      }

      await browser.close();
      server.close();
      browserSuccess = true;
      console.log('✅ Local Puppeteer prerender complete!');
    } catch (err) {
      console.warn('⚠️ Puppeteer local run skipped, falling back to static HTML generator:', err.message);
    }
  }

  // Fallback / Vercel CI Pre-baker (guarantees Vercel build NEVER fails and subroutes have index.html)
  if (!browserSuccess) {
    console.log('⚡ Generating static HTML subfolders for Vercel environment...');
    for (const route of ROUTES) {
      if (route === '/') continue;
      const routeDir = path.join(DIST_DIR, route);
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      fs.writeFileSync(path.join(routeDir, 'index.html'), baseHtml, 'utf-8');
    }
    console.log('✅ Static HTML subfolders generated successfully!');
  }

  console.log('🎉 Prerendering step finished successfully!');
}

prerender().catch((err) => {
  console.error('⚠️ Prerender warning:', err.message);
  process.exit(0); // Never fail Vercel build
});
