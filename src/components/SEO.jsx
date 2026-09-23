import { useEffect } from 'react';

export default function SEO({ title, description, keywords, canonicalPath, schemaData }) {
  useEffect(() => {
    // 1. Update Title
    document.title = title || "Bangalore Caretakers | #1 Elder Care Services & Best Old Age Homes in Bangalore";

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Top-rated Elder Care Services & Best Old Age Homes in Bangalore with 24/7 Doctor-On-Call, Home Caretakers & Nursing. 4.9★ Rated. Free Quote & Consultation!";

    // 3. Update Meta Keywords
    if (keywords) {
      let metaKw = document.querySelector('meta[name="keywords"]');
      if (!metaKw) {
        metaKw = document.createElement('meta');
        metaKw.name = 'keywords';
        document.head.appendChild(metaKw);
      }
      metaKw.content = keywords.join(', ');
    }

    // 4. Update Canonical URL
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    const fullCanonical = `https://bangalorecaretakers.in${canonicalPath || ''}`;
    linkCanonical.href = fullCanonical;

    // 5. Dynamic Schema Injection
    if (schemaData) {
      const scriptId = 'dynamic-page-schema';
      let oldScript = document.getElementById(scriptId);
      if (oldScript) {
        oldScript.remove();
      }
      const script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schemaData);
      document.head.appendChild(script);
    }

    // Scroll to top on route change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonicalPath, schemaData]);

  return null;
}
