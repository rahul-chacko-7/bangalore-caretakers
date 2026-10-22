import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createServer } from 'node:http';
import handler from 'serve-handler';
import puppeteer from 'puppeteer';
import { BLOG_POSTS } from '../src/data/blogData.js';

const app = await fs.readFile('src/App.jsx', 'utf8');
const routes = [...app.matchAll(/<Route path="([^"]+)"/g)].map(match => match[1]).filter(route => !route.includes(':') && route !== '*').concat(BLOG_POSTS.map(post => `/blog/${post.slug}`));
let assertions = 0;
for (const route of routes) {
  const file = route === '/' ? 'dist/index.html' : `dist${route}/index.html`;
  const html = await fs.readFile(file, 'utf8');
  assert.match(html, /<h1[\s>]/); assert.match(html, /id="business-schema"/);
  assert.ok(html.includes(`href="https://bangalorecaretakers.in${route}"`), `Canonical for ${route}`);
  assert.ok(!html.includes('"AggregateRating"'), `No self-serving rating schema: ${route}`);
  assertions += 4;
}
const hosting = JSON.parse(await fs.readFile('vercel.json', 'utf8'));
const server = createServer(async (request, response) => {
  for (const header of hosting.headers[0].headers) response.setHeader(header.key, header.value);
  const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
  if (!path.extname(pathname)) {
    const file = path.join('dist', pathname === '/' ? 'index.html' : pathname.slice(1), pathname === '/' ? '' : 'index.html');
    try { await fs.access(file); }
    catch { response.writeHead(404, { 'Content-Type': 'text/html' }); response.end(await fs.readFile('dist/404.html')); return; }
  }
  return handler(request, response, { public: 'dist' });
});
let browser;
try {
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
  const page = await browser.newPage(); const errors = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.evaluateOnNewDocument(() => {
    window.__cspErrors = []; document.addEventListener('securitypolicyviolation', event => window.__cspErrors.push(event.violatedDirective));
  });
  await page.setBypassServiceWorker(true);
  await page.setRequestInterception(true);
  page.on('request', request => request.url().startsWith(base) || request.url().startsWith('data:') ? request.continue() : request.abort());
  // Stub the external handoff: no application or enquiry is actually sent.
  await page.evaluateOnNewDocument(() => { window.open = (...args) => { window.__handoff = args; return null; }; });
  const goto = async route => { await page.goto(`${base}${route}`, { waitUntil: 'domcontentloaded' }); await page.waitForFunction(expected => document.documentElement.dataset.seoPath === expected, {}, route); };
  await page.setViewport({ width: 390, height: 844 });
  await goto('/');
  await page.evaluate(() => [...document.querySelectorAll('button')].find(button => button.textContent.includes('Inquire Available'))?.click());
  await page.waitForSelector('[role=dialog]');
  assert.equal(await page.$eval('select', select => select.value), 'Old Age Home / Nursing Care');
  assert.equal(await page.evaluate(() => document.activeElement.id), 'inquiry-name');
  await page.type('#inquiry-name', 'Local Test'); await page.type('#inquiry-phone', 'invalid');
  await page.click('button[type=submit]'); await page.waitForSelector('[role=alert]');
  assert.equal(await page.evaluate(() => window.__handoff), undefined);
  await page.$eval('#inquiry-phone', input => { input.select(); }); await page.type('#inquiry-phone', '9876543210');
  await page.click('button[type=submit]'); await page.waitForSelector('[role=status] a');
  assert.ok(await page.evaluate(() => window.__handoff[0].includes('wa.me/917760506666')));
  assert.ok(!(await page.$eval('[role=status]', element => element.textContent)).includes('Received'));
  await page.keyboard.press('Escape'); assert.equal(await page.$('[role=dialog]'), null);
  // Wizard retains both care condition and location in the modal.
  await page.evaluate(() => [...document.querySelectorAll('button')].find(button => button.textContent.includes('Dementia & Memory Care'))?.click());
  await page.evaluate(() => [...document.querySelectorAll('button')].find(button => button.textContent.includes('Care Provided At Home'))?.click());
  await page.evaluate(() => [...document.querySelectorAll('button')].find(button => button.textContent.includes('Ask about fees'))?.click());
  await page.waitForSelector('[role=dialog]');
  assert.equal(await page.$eval('select', select => select.value), 'Dementia Care - At Home');
  await page.keyboard.press('Escape');
  await goto('/home-nursing-services-bangalore');
  await page.evaluate(() => document.querySelector('main button')?.click());
  await page.waitForSelector('[role=dialog]');
  assert.equal(await page.$eval('select', select => select.value), 'Home Nursing Services');
  await page.keyboard.press('Escape');
  await goto('/caretaker-nursing-jobs-bangalore');
  assert.equal(await page.$eval('#job-role', element => element.value), 'Female Nurse / Caretaker');
  await page.type('#job-name', 'Local Applicant'); await page.type('#job-phone', '9876543210');
  await page.click('button[type=submit]'); await page.waitForSelector('[role=status]');
  assert.ok(await page.evaluate(() => decodeURIComponent(window.__handoff[0]).includes('Job inquiry for Female Nurse / Caretaker')));
  assert.ok(!(await page.$eval('main', element => element.textContent)).includes('Submitted Successfully'));
  // Transition from a schema-bearing route to one without page schema.
  await goto(`/blog/${BLOG_POSTS[0].slug}`);
  await page.evaluate(() => [...document.querySelectorAll('a')].find(link => link.textContent === 'Privacy Policy')?.click());
  await page.waitForFunction(() => document.documentElement.dataset.seoPath === '/privacy-policy');
  assert.equal(await page.$('#dynamic-page-schema'), null);
  assert.equal(await page.$eval('meta[property="og:url"]', element => element.content), 'https://bangalorecaretakers.in/privacy-policy');
  const response = await page.goto(`${base}/blog/nonexistent-audit-post`, { waitUntil: 'domcontentloaded' });
  await page.waitForFunction(() => document.querySelector('h1')?.textContent === 'Page not found');
  assert.equal(response.status(), 404);
  assert.equal(await page.$eval('meta[name=robots]', element => element.content), 'noindex, follow');
  for (const width of [390, 1440]) {
    await page.setViewport({ width, height: 900 }); await goto('/');
    const broken = await page.evaluate(async () => { await Promise.all([...document.images].map(img => { img.loading = 'eager'; return img.decode().catch(() => {}); })); return [...document.images].filter(img => !img.naturalWidth).map(img => img.src); });
    assert.deepEqual(broken, []);
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false);
    await fs.mkdir('verification', { recursive: true }); await page.screenshot({ path: `verification/home-${width}.png`, fullPage: true });
  }
  assert.deepEqual(errors, []);
  assert.deepEqual(await page.evaluate(() => window.__cspErrors), []);
  console.log(`PASS: ${routes.length} static pages (${assertions} assertions), inquiry validation/handoff, service persistence, wizard, job handoff, schema cleanup, 404, and 390/1440px image/layout checks.`);
} finally { await browser?.close(); await new Promise(resolve => server.close(resolve)); }
