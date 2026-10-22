import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_TITLE, SITE_DESCRIPTION, SOCIAL_IMAGE } from '../data/site';

export default function SEO({ title = SITE_TITLE, description = SITE_DESCRIPTION, keywords, canonicalPath, schemaData, image = SOCIAL_IMAGE, noindex = false }) {
  const { pathname } = useLocation();
  const keywordText = keywords?.join(', ') || '';
  const schemaText = schemaData ? JSON.stringify(schemaData).replace(/</g, '\u003c') : '';
  useEffect(() => {
    document.title = title;
    const meta = (key, content, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = content;
    };
    const canonical = new URL(canonicalPath ?? pathname, SITE_URL).href;
    meta('description', description);
    meta('keywords', keywordText);
    meta('robots', noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
    for (const [key, value] of Object.entries({title, description, url: canonical, image, type: 'website', site_name: 'Bangalore Care Takers', locale: 'en_IN'})) meta(`og:${key}`, value, true);
    if (image === SOCIAL_IMAGE) { meta('og:image:width', '1200', true); meta('og:image:height', '630', true); }
    else { document.head.querySelector('meta[property="og:image:width"]')?.remove(); document.head.querySelector('meta[property="og:image:height"]')?.remove(); }
    meta('twitter:card', 'summary_large_image');
    meta('twitter:title', title); meta('twitter:description', description); meta('twitter:image', image);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) { link = document.createElement('link'); link.rel = 'canonical'; document.head.appendChild(link); }
    link.href = canonical;
    document.getElementById('dynamic-page-schema')?.remove();
    if (schemaText) {
      const script = document.createElement('script'); script.id = 'dynamic-page-schema'; script.type = 'application/ld+json'; script.textContent = schemaText; document.head.appendChild(script);
    }
    document.documentElement.dataset.seoPath = pathname;
    return () => { document.getElementById('dynamic-page-schema')?.remove(); delete document.documentElement.dataset.seoPath; };
  }, [title, description, keywordText, canonicalPath, pathname, schemaText, image, noindex]);
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}
