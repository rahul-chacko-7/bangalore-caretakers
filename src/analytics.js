// Google Analytics 4 (property "BANGALORE CARE TAKERS", stream G-RDWJ9PH55Y).
// Loads only on the live domain, so Vercel previews and local builds never
// pollute the reports. No personal details (names, phone numbers, typed
// text) are ever sent.
const GA_ID = 'G-RDWJ9PH55Y';
const LIVE_HOSTS = new Set(['bangalorecaretakers.in', 'www.bangalorecaretakers.in']);

const enabled = () => typeof window !== 'undefined' && LIVE_HOSTS.has(window.location.hostname);
let started = false;
let lastPageViewPath = null;

export function track(name, params = {}) {
  if (!started) return;
  window.gtag('event', name, params);
}

// Called by <SEO> after it sets document.title, so every page view carries
// the right title. GA4's own history-based page views are switched off in
// the stream settings (Enhanced measurement > Page views > advanced) to
// avoid double counting.
export function trackPageView(pathname) {
  if (!started || pathname === lastPageViewPath) return;
  lastPageViewPath = pathname;
  track('page_view', { page_location: window.location.href, page_title: document.title });
}

function onClick(event) {
  const link = event.target.closest?.('a[href^="tel:"]');
  if (!link) return;
  // WhatsApp taps are already captured by GA4 (outbound click -> whatsapp_click
  // custom event), so only phone taps are sent from here.
  track('phone_call_click', { link_text: link.textContent.trim().slice(0, 60), page_path: window.location.pathname });
}

export function initAnalytics() {
  if (started || !enabled()) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA_ID, { send_page_view: false });
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);
  document.addEventListener('click', onClick, true);
}
