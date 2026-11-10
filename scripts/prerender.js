// Build-time static rendering. Uses React's server renderer (no headless
// browser), so it runs on Vercel's build machines. Every route gets full
// HTML content plus its own title, description, canonical and JSON-LD.
// Any route that fails to render or validate fails the build, instead of
// silently shipping an empty shell.
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { BLOG_POSTS } from '../src/data/blogData.js';
import { COVERAGE_PAGES } from '../src/data/coveragePages.js';
import { BUSINESS_SCHEMA, SITE_URL, SITE_NAME } from '../src/data/site.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, 'dist-ssr');
const app = await fs.readFile(path.join(root, 'src/App.jsx'), 'utf8');
const routes = [...new Set([...app.matchAll(/<Route path="([^"]+)"/g)].map(match => match[1])
  .filter(route => !route.includes(':') && route !== '*')
  .concat(BLOG_POSTS.map(post => `/blog/${post.slug}`), Object.keys(COVERAGE_PAGES).map(slug => `/care-guides/${slug}`)))];

const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const escapeAttr = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

// Remove the template's generic SEO tags; each page gets its own set below.
const baseHead = template
  .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
  .replace(/<meta\s+name="(description|keywords|robots)"[^>]*>\s*/gi, '')
  .replace(/<meta\s+property="og:[^"]*"[^>]*>\s*/gi, '')
  .replace(/<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi, '')
  .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, '');

function headTags(head) {
  const tags = [
    `<title>${escapeAttr(head.title)}</title>`,
    `<meta name="description" content="${escapeAttr(head.description)}" />`,
    head.keywords ? `<meta name="keywords" content="${escapeAttr(head.keywords)}" />` : '',
    `<meta name="robots" content="${head.robots}" />`,
    `<link rel="canonical" href="${head.canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="en_IN" />`,
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:title" content="${escapeAttr(head.title)}" />`,
    `<meta property="og:description" content="${escapeAttr(head.description)}" />`,
    `<meta property="og:url" content="${head.canonical}" />`,
    `<meta property="og:image" content="${escapeAttr(head.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeAttr(head.title)}" />`,
    `<meta name="twitter:description" content="${escapeAttr(head.description)}" />`,
    `<meta name="twitter:image" content="${escapeAttr(head.image)}" />`,
    `<script id="business-schema" type="application/ld+json">${JSON.stringify(BUSINESS_SCHEMA).replace(/</g, '\\u003c')}</script>`,
    head.schemaText ? `<script id="dynamic-page-schema" type="application/ld+json">${head.schemaText}</script>` : ''
  ];
  return tags.filter(Boolean).join('\n    ');
}

const outputFor = route => route === '/' ? path.join(dist, 'index.html') : route === '/404' ? path.join(dist, '404.html') : path.join(dist, route.slice(1), 'index.html');
const problems = [];
const pages = [];

for (const route of [...routes, '/404']) {
  let result;
  try { result = await render(route); }
  catch (error) { problems.push(`${route}: render failed (${error.message})`); continue; }
  const { html, head } = result;
  const h1s = (html.match(/<h1[\s>]/g) || []).length;
  const words = html.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const expectedCanonical = `${SITE_URL}${route === '/404' ? '/404' : route}`;
  if (!head.title) problems.push(`${route}: <SEO> did not render`);
  if (h1s !== 1) problems.push(`${route}: expected 1 <h1>, found ${h1s}`);
  if (route !== '/404' && head.canonical !== expectedCanonical && head.canonical !== `${SITE_URL}/`) problems.push(`${route}: canonical ${head.canonical} != ${expectedCanonical}`);
  if (route !== '/404' && words < 150) problems.push(`${route}: only ${words} words rendered`);
  const page = baseHead
    .replace('</head>', `    ${headTags(head)}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  pages.push([route, page, words]);
}

if (problems.length) {
  console.error(`Prerender failed for ${problems.length} issue(s):\n- ${problems.join('\n- ')}`);
  process.exit(1);
}

for (const [route, page] of pages) {
  const destination = outputFor(route);
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.writeFile(destination, page);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map(route => `<url><loc>${SITE_URL}${route}</loc></url>`).join('')}</urlset>\n`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);
await fs.rm(ssrDir, { recursive: true, force: true });
const counts = pages.map(([, , words]) => words);
console.log(`Prerendered ${pages.length} pages (${Math.min(...counts)}-${Math.max(...counts)} words each) and wrote sitemap.xml with ${routes.length} URLs.`);
