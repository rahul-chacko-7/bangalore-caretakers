import { Link } from 'react-router-dom';
import { Phone, CheckCircle, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { CareBasics } from '../components/ServiceDetails';
import { LANDING_PAGES } from '../data/landingPages';
import { GENERAL_INFO } from '../data/keywordsData';
import NotFoundPage from './NotFoundPage';

// Template for pages kept at their original bangalorecaretakers.in URLs
// (see src/data/landingPages.js).
export default function LandingPage({ slug, onOpenInquiry }) {
  const page = LANDING_PAGES[slug];
  if (!page) return <NotFoundPage />;
  const path = `/${slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: page.service,
    serviceType: page.service,
    url: `https://bangalorecaretakers.in${path}`,
    description: page.description,
    areaServed: { '@type': 'City', name: 'Bangalore' },
    provider: { '@type': 'LocalBusiness', '@id': 'https://bangalorecaretakers.in/#business', name: 'Bangalore Care Takers' }
  };

  return (
    <>
      <SEO title={page.title} description={page.description} canonicalPath={path} schemaData={schema} />
      <section className="bg-gradient-to-r from-brand-blue to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold">{page.eyebrow}</div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight max-w-4xl">{page.h1}</h1>
          {page.intro.map(text => <p key={text} className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">{text}</p>)}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone py-4 px-6 font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" /> Call +91 77605 06666
            </a>
            <button type="button" onClick={() => onOpenInquiry?.()} className="btn-primary py-4 px-6 font-bold flex items-center justify-center gap-2">
              <MessageCircle className="w-5 h-5" aria-hidden="true" /> Discuss care needs
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {page.sections.map(section => (
            <div key={section.h} className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{section.h}</h2>
              {section.p && <p className="text-slate-600 leading-relaxed">{section.p}</p>}
              {section.list && (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {section.list.map(item => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" /><span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <CareBasics />
      <FAQSection faqs={page.faqs} />

      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-xl font-extrabold text-slate-900">Related care services</h2>
          <ul className="flex flex-wrap gap-2">
            {page.related.map(link => (
              <li key={link.to}><Link to={link.to} className="inline-block text-sm font-semibold px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:border-teal-500">{link.label}</Link></li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
