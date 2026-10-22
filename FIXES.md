# Local website fixes

Project: `C:\Users\rahul\.gemini\antigravity\scratch\bangalore-caretakers`

## Implemented

- Inquiry forms now prepare a WhatsApp message synchronously, validate name/phone, provide a persistent fallback link, and explain that the visitor must send the message. No false received/submitted confirmation or invented callback deadline.
- Job applications use the same explicit WhatsApp handoff. The initial role matches an available option.
- The inquiry dialog preserves route and care-wizard choices, refreshes its selected service when reopened, associates form labels, traps keyboard focus, restores focus, supports Escape, and prevents background scrolling.
- Added privacy and terms pages with working footer links. Added a keyboard skip link, named mobile search, reduced-motion styles, and matching space for the fixed mobile contact bar.
- Updated homepage title, description and introduction. Removed the footer keyword cloud and the unsupported 100/100 performance claim. Updated contact/location information to the Kothanur facility and avoided suggesting separate physical neighborhood branches.
- One global business schema supplies consistent identity, address and hours; service schemas reference it. Removed self-serving rating schema and FAQ rich-result markup while retaining visible FAQs.
- Route metadata now updates canonical, Open Graph and Twitter fields, clears stale page schema and keywords, and only scrolls on route changes.
- Generated a 1200x630 social image and correctly sized 192/512 app icons. Corrected logo dimensions and retained existing optimized gallery assets.
- Unknown pages and blog slugs display a noindex not-found page. Static deployment includes `404.html`.
- Prerendering now renders the homepage and all routes on every environment, verifies output, and fails the build on errors. It discovers blog routes from source, produces page-specific HTML and generates the sitemap.
- Moved Vercel configuration to the project root; removed the universal homepage rewrite. Retained legacy redirects, added static-hosting headers for Vercel/Netlify, and configured custom not-found handling.
- The service worker no longer serves stale HTML or caches error responses. It caches only public assets and refreshes them in the background.

## Verification

Commands:

```powershell
npm run build
npm test
```

The build generates 29 public pages plus the not-found page. The regression script checks 116 static-page assertions and browser scenarios for invalid phone input, WhatsApp fallback links, correct service selection, care-wizard selections, job handoff, route metadata/schema cleanup, unknown blog URLs, image loading and layout at 390px and 1440px. It stubs WhatsApp opening; no test messages are sent. Browser tests run with the configured Content Security Policy and inspect violations. Screenshots are saved under `verification/` (Git-ignored).

To regenerate the committed social image and icons after replacing source assets:

```powershell
npm run prepare:assets
```

## Deployment and remaining factual inputs

These are local project changes; the live WordPress site has not been changed. Deploy the generated `dist` directory using the provided host configuration. The build environment needs the Chrome browser used by Puppeteer; if it is missing, install it with `npx puppeteer browsers install chrome`. Builds now fail visibly rather than publishing empty HTML when rendering fails.

Clinical leadership names, registration details, actual staffing/equipment arrangements, pricing, review counts and business record-retention practices require verified business information. No staff credentials or care capabilities were invented. Confirm those existing factual claims and the policy wording before publication. Core Web Vitals and real-world search performance remain unmeasured; no score or ranking improvement is claimed.
