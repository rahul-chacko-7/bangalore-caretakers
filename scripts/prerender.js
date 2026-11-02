import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'node:http';
import puppeteer from 'puppeteer';
import handler from 'serve-handler';
import { BLOG_POSTS } from '../src/data/blogData.js';
import { COVERAGE_PAGES } from '../src/data/coveragePages.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const app = await fs.readFile(path.join(root, 'src/App.jsx'), 'utf8');
const routes = [...new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(match => match[1]).filter(route => !route.includes(':') && route !== '*').concat(BLOG_POSTS.map(post => `/blog/${post.slug}`), Object.keys(COVERAGE_PAGES).map(slug => `/care-guides/${slug}`)))];
const server = createServer((req, res) => handler(req, res, { public: dist, rewrites: [{ source: '**', destination: '/index.html' }] }));
let browser;
const baseHtml = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

const FALLBACK_META = {
  '/': ['Old Age Home in Bangalore | Bangalore Care Takers', 'Explore elderly care, nursing support and assisted living at Bangalore Care Takers in Kothanur, Bengaluru.'],
  '/old-age-homes-bangalore': ['Old Age Homes in Bangalore | Nursing and Residential Care', 'Discuss residential senior care, nursing support, room options and a written care plan in Bangalore.'],
  '/home-nursing-services-bangalore': ['Home Nursing Services in Bangalore | Caretakers and Nurses', 'Discuss home nursing, caretaker shifts, recovery support and current staff availability across Bangalore.'],
  '/dementia-alzheimers-care-bangalore': ['Dementia and Alzheimer\'s Care in Bangalore', 'Discuss dementia support, family guidance, residential care and home-care options in Bangalore.'],
  '/palliative-cancer-care-bangalore': ['Palliative and Cancer Care in Bangalore', 'Discuss palliative support, symptom-care coordination and home nursing enquiries in Bangalore.'],
  '/about-bangalore-caretakers': ['About Bangalore Caretakers | Senior Care in Kothanur', 'Learn how Bangalore Caretakers handles senior-care, home-nursing and residential-care enquiries from Kothanur, Bengaluru.'],
  '/contact-us': ['Contact Bangalore Caretakers | Senior Care Enquiries', 'Contact Bangalore Caretakers to discuss residential care, home nursing, dementia support and facility visits.'],
  '/blog': ['Senior Care Guides for Bangalore | Bangalore Caretakers', 'Read practical senior-care, home-nursing, dementia and recovery guides for families in Bangalore.'],
  '/404': ['Page not found | Bangalore Caretakers', 'The requested page could not be found. Explore Bangalore Caretakers senior-care services or contact the team.']
};

function escapeHtml(value) {
  return value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
}

function applyFallbackMetadata(html, route) {
  const [title, description] = FALLBACK_META[route] || [`${route.split('/').filter(Boolean).pop()?.replaceAll('-', ' ') || 'Senior care'} | Bangalore Care Takers`, 'Bangalore Care Takers provides senior care, home nursing and residential-care enquiries in Bengaluru.'];
  const canonical = `https://bangalorecaretakers.in${route === '/' || route === '/404' ? '/' : route}`;
  const robots = route === '/404' ? 'noindex, follow' : 'index, follow, max-image-preview:large';
  return html
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(title)}</title>`)
    .replace(/<meta name="description"[^>]*>/i, `<meta name="description" content="${escapeHtml(description)}" />`)
    .replace(/<meta name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`)
    .replace(/<link rel="canonical"[^>]*>/i, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/i, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta property="og:description"[^>]*>/i, `<meta property="og:description" content="${escapeHtml(description)}" />`)
    .replace(/<meta property="og:url"[^>]*>/i, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${escapeHtml(title)}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${escapeHtml(description)}" />`);
}

async function writeFallbackShell() {
  for (const route of [...routes, '/404']) {
    const destination = route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html');
    await fs.mkdir(path.dirname(destination), { recursive: true });
    const pageName = route === '/' ? 'Old Age Home in Bangalore' : route === '/404' ? 'Page not found' : route.split('/').filter(Boolean).pop().replaceAll('-', ' ');
    const heading = pageName.replace(/\b\w/g, character => character.toUpperCase());
    const fallbackBody = route === '/' ? `<main><h1>Old Age Home in Bangalore with Nursing Support</h1><p>Bangalore Care Takers provides residential elderly care in Kothanur, Bengaluru. Families can discuss assisted living, home nursing, dementia support, palliative care, and post-surgery recovery before arranging a visit.</p><p>Care plans depend on room type, staffing, clinical tasks, equipment, meals, and duration. Request a written scope and current fee quote from the care team.</p><h2>Senior care services in Bangalore</h2><ul><li><a href="/old-age-homes-bangalore">Old age homes and residential senior care</a></li><li><a href="/home-nursing-services-bangalore">Home nursing and live-in caretakers</a></li><li><a href="/dementia-alzheimers-care-bangalore">Dementia and Alzheimer's care</a></li><li><a href="/palliative-cancer-care-bangalore">Palliative and cancer care</a></li><li><a href="/post-surgery-rehabilitation-care">Post-surgery rehabilitation</a></li></ul><h2>Contact and visit planning</h2><p>Call <a href="tel:+917760506666">+91 77605 06666</a> or <a href="/contact-us">contact the care team</a> to discuss availability, staff qualifications, visiting hours, and emergency escalation.</p><nav aria-label="Primary"><a href="/">Home</a><a href="/blog">Senior care guides</a><a href="/about-bangalore-caretakers">About and trust</a><a href="/privacy-policy">Privacy policy</a></nav><script id="business-schema" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Bangalore Care Takers', url: 'https://bangalorecaretakers.in/', telephone: '+917760506666', address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressRegion: 'Karnataka', postalCode: '560077', addressCountry: 'IN' } })}</script></main>` : route === '/about-bangalore-caretakers' ? `<main><h1>Bangalore Caretakers senior-care enquiries</h1><p>Bangalore Caretakers helps families discuss residential senior care, home nursing, assisted living, dementia support, palliative care and recovery needs in Bengaluru. The residential facility address is in Kothanur; home-care availability depends on needs, location and current staffing.</p><h2>Choose care using verifiable details</h2><p>Arrange a visit, request a written scope and confirm current staffing, facilities, charges and emergency coordination before deciding. This website provides general enquiry guidance, not a diagnosis or promise of admission.</p><nav aria-label="Primary"><a href="/old-age-homes-bangalore">Residential senior care</a><a href="/home-nursing-services-bangalore">Home nursing</a><a href="/contact-us">Contact the team</a></nav><script id="business-schema" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'AboutPage', name: 'About Bangalore Caretakers', url: 'https://bangalorecaretakers.in/about-bangalore-caretakers' })}</script></main>` : `<main><h1>${heading}</h1><p>Bangalore Care Takers provides elderly care, nursing support, assisted living, dementia care, and palliative-care enquiries in Bengaluru. Confirm current coverage, staffing and suitability with the team.</p><nav aria-label="Primary"><a href="/">Home</a><a href="/old-age-homes-bangalore">Old age homes in Bangalore</a><a href="/home-nursing-services-bangalore">Home nursing services</a><a href="/about-bangalore-caretakers">About and trust</a><a href="/contact-us">Contact us</a></nav><script id="business-schema" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Bangalore Care Takers', url: 'https://bangalorecaretakers.in/' })}</script></main>`;
    const html = applyFallbackMetadata(baseHtml.replace('<div id="root"></div>', `<div id="root">${fallbackBody}</div>`), route);
    await fs.writeFile(destination, html);
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
