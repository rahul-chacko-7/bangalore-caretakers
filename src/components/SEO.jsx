import { useEffect } from 'react';

export default function SEO({ title, description, keywords, canonicalPath, schemaData }) {
  useEffect(() => {
    // 1. Update Title
    document.title = title || "Best Old Age Homes in Bangalore | 24/7 Home Nursing & Medical Care";

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description || "Bangalore Caretakers provides 24/7 senior living, old age homes with medical care, home nursing services, dementia care, and palliative care in Bangalore.";

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
