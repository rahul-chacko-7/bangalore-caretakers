# Deep SEO Audit — Bangalore Caretakers Vercel

**Audited URL:** https://bangalore-caretakers.vercel.app/  
**Audit date:** 2026-11-02  
**Business type:** Local senior-care and home-nursing provider

## Executive result

The Vercel build is technically strong and includes SEO, AEO, and GEO foundations. The production response is HTTP 200, the homepage has a focused title, description, H1 and JSON-LD, and the live robots and AI guidance files are available. The most important configuration decision is that the Vercel host canonicals and sitemap point to `https://bangalorecaretakers.in/`. That is correct when Vercel is a deployment mirror; it prevents the Vercel hostname from competing with the primary domain. If the Vercel hostname is intended to rank independently, this must be changed before launch.

## Evidence summary

| Area | Evidence | Result |
|---|---|---|
| Crawlability | `robots.txt` returns 200; all user agents allowed; sitemap declared | ✅ Pass |
| Sitemap | Live XML sitemap returns 42 canonical-domain URLs | ✅ Pass |
| Homepage metadata | Title: `Old Age Home in Bangalore | Bangalore Care Takers`; description and one H1 present | ✅ Pass |
| Canonical strategy | Homepage canonical is `https://bangalorecaretakers.in/` | ⚠️ Confirm deployment intent |
| Structured data | JSON-LD present on homepage; unsupported self-serving rating/FAQ markup removed in source | ✅ Pass |
| AI search readiness | `llms.txt` and `llms-full.txt` return 200 with services, location, phone and review date | ✅ Pass |
| Security | HSTS, CSP, X-Frame-Options, nosniff, Referrer-Policy and Permissions-Policy observed | ✅ Pass |
| Mobile/layout | Repository verification passed 390px and 1440px layout checks | ✅ Pass |
| Performance | PageSpeed API returned quota 429; no current Lighthouse field score can be confirmed | ℹ️ Unverified |
| Automated scripts | Bundled Python scripts could not run because Python is unavailable in this environment | ℹ️ Environment limitation |

## Findings by skill

### Technical SEO

- Confirmed: HTTPS, indexable public routes, robots directives, sitemap declaration, static headers and a 404/noindex implementation are present.
- Confirmed: the site exposes all required AI crawler directives for GPTBot, ChatGPT-User, ClaudeBot, PerplexityBot and Google-Extended.
- Warning: the sitemap and canonical domain are the WordPress domain while the audited host is Vercel. Keep this only if the WordPress domain is the intended search property.
- Recommendation: verify one canonical production domain in Search Console and submit only that domain's sitemap.

### On-page SEO and content

- Confirmed: the homepage targets old-age-home and nursing-support intent in the title, H1 and description.
- Confirmed: service, locality, blog and care-guide routes are included in the static route inventory and internal navigation.
- Recommendation: review every medical, staffing, pricing, review-count and availability claim against current business records. These are YMYL-adjacent claims and need visible author/business trust signals.

### Schema

- Confirmed: JSON-LD is used rather than Microdata/RDFa, with consistent business identity and route metadata.
- Confirmed: restricted commercial FAQ rich-result and unsupported self-serving rating markup were removed.
- Recommendation: validate all route JSON-LD in Google Rich Results Test and Schema Markup Validator after each content release.

### AEO

- Confirmed: question-led service copy, clear answer sections, descriptive headings and care-guide content support featured snippets and People Also Ask extraction.
- Recommendation: add concise answer-first summaries (40–60 words) to the highest-value service pages, followed by supporting evidence and a direct contact CTA. Do not add FAQPage schema for this commercial site.

### GEO

- Confirmed: `llms.txt` and `llms-full.txt` provide authoritative service, location, phone, service-area and review-date context.
- Confirmed: entity information is consistent around Kothanur/Bengaluru and senior-care services.
- Recommendation: strengthen off-site corroboration through a complete Google Business Profile, consistent NAP citations, local healthcare directories and independently verifiable reviews. AI visibility cannot be proven from HTML alone.

### Images, links and accessibility

- Confirmed: the repository uses optimized local assets/WebP assets, sized icons and social imagery; mobile and desktop layout checks pass.
- Observation: the live homepage response contained no `<img>` elements, so hero imagery may be CSS or a component background. Use semantic `<img>`/`<picture>` with descriptive alt text when an image conveys service meaning; keep decorative imagery CSS-only.
- Recommendation: run a browser accessibility crawl for contrast, keyboard order, focus states, form labels and image alternatives after deployment.

### Programmatic SEO and location coverage

- Confirmed: routes are drawn from a known inventory; unknown blog paths are not indexed; 404 routes are handled; no uncontrolled location-page generator was found.
- Recommendation: keep each locality page materially unique and below the quality threshold for thin doorway pages. Add only locations with real service coverage and useful local proof.

### Hreflang and competitors

- Hreflang is not required for this single-language English site.
- A direct competitor SERP benchmark was not claimed because no competitor set or live ranking dataset was supplied. Run that separately before publishing comparison pages.

### GitHub/repository quality

- Repository build and verification scripts pass; route metadata and SEO assets are version-controlled.
- Keep the README, repository description, topics, license and deployment status aligned with the live product if GitHub discovery is a goal.

## Provisional scoring

| Category | Score | Confidence |
|---|---:|---|
| Technical SEO | 90/100 | High |
| Content/E-E-A-T | 78/100 | Medium |
| On-page SEO | 92/100 | High |
| Schema | 88/100 | High |
| Performance/CWV | N/A | Blocked by PageSpeed quota |
| Images | 82/100 | Medium |
| GEO/AEO readiness | 84/100 | Medium |

Overall, the implementation is **Good**, with the score limited by unmeasured real-user performance and external authority signals rather than a confirmed indexing failure.

## Environment limitations

- The SEO skill's Python scripts could not run because Python is not installed in the execution environment.
- Google PageSpeed Insights API returned HTTP 429 quota exceeded, so Lighthouse metrics are not reported as facts.
- Search Console, Google Business Profile, backlink and competitor ranking data were not available in this workspace.
