# Deep SEO Action Plan — Bangalore Caretakers Vercel

## Priority 0 — Confirm the canonical deployment

Decide whether `bangalorecaretakers.in` or `bangalore-caretakers.vercel.app` is the search property. If the custom domain is primary, retain the current canonical and sitemap behavior, configure the custom domain in Vercel, and submit the custom-domain sitemap in Search Console. If Vercel is primary, update every canonical, Open Graph URL, sitemap URL and `llms.txt` link together.

## Priority 1 — Measure real performance

Run mobile and desktop Lighthouse from a local browser or PageSpeed Insights after the quota resets. Record LCP, INP, CLS, TTFB, total blocking time and transfer size for the homepage and the three highest-value service pages. Fix any failing Core Web Vital before adding more pages.

## Priority 2 — Strengthen YMYL trust

Add a named business author/reviewer, last-reviewed dates, verifiable address and contact details, care-team qualifications where true, licensing/accreditation evidence where applicable, privacy/consent language, and a clear distinction between general information and clinical advice.

## Priority 3 — Improve AEO extraction

On each core service page, place a direct answer paragraph immediately below the H1, then add a short process, eligibility/fit section, service area, pricing/contact qualification and evidence-backed CTA. Keep answers human-written and avoid unsupported claims.

## Priority 4 — Improve GEO/entity corroboration

Keep NAP identical across the website, Google Business Profile and reputable local directories. Earn independent local mentions and reviews; link those profiles from the contact page. Review `llms.txt` whenever services, phone numbers or locations change.

## Priority 5 — Validate media and accessibility

Run a browser crawl for semantic image alternatives, contrast, keyboard focus, form labels, dialog focus trapping, reduced-motion behavior and tap-target size. Use semantic images for meaningful service/property photos and descriptive alt text.

## Priority 6 — Competitor and content expansion

Use a defined Bangalore competitor set and Search Console queries to identify gaps before creating comparison or locality pages. Publish only pages with unique local evidence, a distinct search intent and a useful conversion path.

## Verification cadence

- Every code/content release: `npm test` and `npm run build`.
- Weekly: Search Console coverage, canonical selection, sitemap errors and lead-form validation.
- Monthly: Core Web Vitals, local pack visibility, review/citation consistency and competitor SERP changes.
