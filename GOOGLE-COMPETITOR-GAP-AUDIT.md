# Google Algorithm and Competitor Gap Audit

**Property:** https://bangalore-caretakers.vercel.app/  
**Primary canonical domain:** https://bangalorecaretakers.in/  
**Audit date:** 2026-11-02

## Google guidance used

Google's current Search Essentials emphasize helpful, reliable, people-first content, crawlable links, descriptive page signals and structured-data best practices. Google's spam policies specifically identify scaled content abuse and doorway pages as risks. Core Web Vitals remain recommended page-experience measures: LCP under 2.5 seconds, INP under 200 ms and CLS under 0.1 at the 75th percentile. Sources: [Search Essentials](https://developers.google.com/search/docs/essentials), [people-first content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content), [spam policies](https://developers.google.com/search/docs/essentials/spam-policies), and [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Algorithm alignment

| Google requirement | Site evidence | Status |
|---|---|---|
| Crawlable, secure pages | HTTPS, robots, sitemap, static routes, security headers | ✅ Aligned |
| Helpful, people-first content | Service pages, guides, care wizard and answer sections | ⚠️ Needs stronger first-hand proof |
| Avoid scaled content abuse | Static route inventory and controlled blog routes | ✅ No confirmed violation |
| Avoid doorway abuse | Several locality routes describe the same Kothanur facility | ⚠️ Highest content risk |
| Avoid misleading claims | Unsupported ratings and “top-rated/most trusted” language removed in commit `b017faa` | ✅ Fixed |
| Page experience | Mobile/desktop tests pass; field CWV not available | ℹ️ Unverified |
| LocalBusiness structured data | Business identity, phone, address and hours present | ✅ Aligned; validate after release |

No public evidence proves a Google manual action or algorithmic penalty. Search Console is required to confirm indexing, manual actions, canonical selection and query-level losses.

## Competitor benchmark

### Nightingales Medical Trust

Nightingales publishes a clear organisational history, a dementia-care continuum, memory clinics, day care, residential care, caregiver training, family support groups, named centres and contact/helpline information. Its Kothanur centre is described with address, care scope and registration context. Sources: [services](https://www.nightingaleseldercare.com/services), [contact](https://www.nightingaleseldercare.com/contact), [about](https://www.nightingaleseldercare.com/about).

**Gap for Bangalore Caretakers:** no comparable named leadership/clinical team, organisation history, programme evidence, caregiver education, registration/accreditation page, facility capacity or independent annual/report evidence is visible in the current project.

### Sumukha Home Nursing

Sumukha competes directly for home-nursing intent and communicates long operating history and a focused home-nursing proposition. Source: [Sumukha Home Nursing](https://homenursingservices.in/index).

**Gap for Bangalore Caretakers:** the home-nursing page should make service boundaries, nurse/caretaker role differences, shift coverage, escalation, onboarding, replacement policy and verified availability easier to compare.

### Heritage Care and local directories

Heritage Care foregrounds senior-care positioning, care/recovery experience and multiple enquiry paths. Local directory results expose many Bangalore providers with locations and review counts, including KITES, SCSVK, Sunandi, Akshaya and others. Sources: [Heritage Care](https://heritagecare.in/), [Bangalore assisted-living directory](https://homecareconnect.link/agencies/assisted-living/), [Karo Care directory](https://karocare.in/bangalore/elder-care).

**Gap for Bangalore Caretakers:** stronger local proof is needed: a verified Google Business Profile, consistent NAP citations, real facility photographs with captions, service-area evidence, independent reviews and map/contact trust signals.

## Priority gaps

### P0 — Canonical and property governance

The Vercel host emits canonicals and sitemap URLs for `bangalorecaretakers.in`. Keep that only if the custom domain is the single indexable property. Verify the custom domain in Search Console, submit its sitemap, and ensure the Vercel hostname is not promoted as a separate search property.

### P0 — Local doorway-page risk

The locality routes for Indiranagar, Jayanagar, Whitefield, Electronic City and Yelahanka use a common Kothanur facility and similar templates. Google defines pages created for similar city queries that funnel users to one destination as doorway abuse. Each page needs unique, useful local information or should be consolidated/noindexed.

### P1 — E-E-A-T and YMYL proof

Add a named organisation/about page, responsible reviewer or clinical lead where truthful, staff qualification and verification policy, facility registration/accreditation evidence where applicable, last-reviewed dates, emergency limitations, and a clear medical-information disclaimer.

### P1 — Service decision support

Competitors explain care pathways and programmes. Add a genuinely useful comparison for residential care, home nursing, dementia support, rehabilitation and palliative support: who it is for, what is included, exclusions, staffing, visit process, escalation, documents, expected response time and how current pricing is quoted.

### P1 — Independent local authority

Build and maintain Google Business Profile, consistent NAP citations, map listing, local healthcare/community partnerships and genuine review requests. Do not fabricate review counts or add self-serving aggregate ratings to the site.

### P2 — AEO/GEO evidence

The site has answer sections and `llms.txt`, but each answer should identify the service context, review date and responsible business source. Add concise answer-first summaries and link them to detailed, human-useful pages. AI inclusion is not guaranteed by `llms.txt` alone.

### P2 — Performance measurement

Run Lighthouse and Search Console Core Web Vitals on the primary domain. Record LCP, INP, CLS, TTFB and mobile transfer size for the homepage and highest-converting service pages. The previous PageSpeed request was blocked by API quota, so no performance failure is confirmed yet.

## Confirmed fixes already shipped

- Removed unsupported 4.9/761 review claims and “top-rated/most trusted” wording.
- Preserved canonical, sitemap, robots, JSON-LD, AEO sections and AI crawler files.
- Verified 34 static-page assertions and 43 prerendered routes.
