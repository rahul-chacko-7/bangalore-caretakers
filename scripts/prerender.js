import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import { BLOG_POSTS } from '../src/data/blogData.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const app = await fs.readFile(path.join(root, 'src/App.jsx'), 'utf8');
const routes = [...new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(match => match[1]).filter(route => !route.includes(':') && route !== '*').concat(BLOG_POSTS.map(post => `/blog/${post.slug}`)))];
const server = createServer((req, res) => handler(req, res, { public: dist, rewrites: [{ source: '**', destination: '/index.html' }] }));
let browser;
const baseHtml = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

async function writeFallbackShell() {
  for (const route of [...routes, '/404']) {
    const destination = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html');
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, baseHtml);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>https://bangalorecaretakers.in${route}</loc></url>`).join('')}</urlset>\n`;
  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
  console.warn('Prerender browser unavailable; generated static route shells and sitemap.');
}

try {
  await new Promise((resolve, reject) => { server.once('error', reject); server.listen(0, '127.0.0.1', resolve); });
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  } catch (error) {
    console.warn(`Puppeteer prerender skipped: ${error.message}`);
    await writeFallbackShell();
    process.exitCode = 0;
  }
  if (!browser) {
    await new Promise(resolve => server.close(resolve));
  } else {
  const page = await browser.newPage();
  await page.setBypassServiceWorker(true);
  await page.setRequestInterception(true);
  page.on('request', request => request.url().startsWith(base) || request.url().startsWith('data:') ? request.continue() : request.abort());
  const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  const snapshots = [];
  for (const route of [...routes, '/404']) {
    await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded', timeout: 30000 });
    await page.waitForFunction(expected => document.documentElement.dataset.seoPath === expected && document.querySelector('h1'), { timeout: 15000 }, route);
    const state = await page.evaluate(() => ({ canonical: document.querySelector('link[rel=canonical]')?.href, h1s: document.querySelectorAll('h1').length, business: document.querySelectorAll('#business-schema').length }));
    if (errors.length || state.h1s !== 1 || state.business !== 1 || state.canonical !== `https://bangalorecaretakers.in${route}`) throw new Error(`Invalid prerender for ${route}: ${JSON.stringify({state, errors})}`);
    // Collect all snapshots before replacing the original SPA shell.
    snapshots.push([route, await page.content()]);
    console.log(`Prerendered ${route}`);
  }
  for (const [route, html] of snapshots) {
    const destination = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html');
    await fs.mkdir(path.dirname(destination), { recursive: true });
    await fs.writeFile(destination, html);
  }
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>https://bangalorecaretakers.in${route}</loc></url>`).join('')}</urlset>\n`;
  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
  console.log(`Verified ${snapshots.length} prerendered pages and generated sitemap.`);
  }
} finally {
  await browser?.close();
  await new Promise(resolve => server.close(resolve));
}
