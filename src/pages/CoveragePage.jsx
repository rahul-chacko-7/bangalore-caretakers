import { Link, useParams } from 'react-router-dom';
import { ArrowRight, CheckCircle, Phone } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';
import { COVERAGE_PAGES } from '../data/coveragePages';

export default function CoveragePage() {
  const { slug } = useParams();
  const data = COVERAGE_PAGES[slug] || COVERAGE_PAGES['home-nurses-male-female-bangalore'];
  const faqs = [
    { q: `How do I arrange ${data.heading.toLowerCase()}?`, a: 'Start by sharing the person’s current needs, location, medical instructions, preferred schedule, and the date care is needed. Ask the team for a written scope and current availability.' },
    { q: 'What should I confirm before starting care?', a: 'Confirm staff responsibilities, shift handover, supplies, equipment, family updates, fees, exclusions, visiting rules, and the emergency escalation process.' },
    { q: 'Is this page medical advice?', a: 'No. It is a planning guide. Clinical decisions, treatment, diagnosis, and emergency care must come from a qualified clinician.' }
  ];
  return <>
    <SEO title={data.title} description={data.description} keywords={data.keywords} canonicalPath={`/care-guides/${slug}`} schemaData={{ '@context': 'https://schema.org', '@type': 'Service', name: data.heading, serviceType: data.heading, areaServed: { '@type': 'City', name: 'Bengaluru' }, provider: { '@type': 'LocalBusiness', name: 'Bangalore Care Takers', url: 'https://bangalorecaretakers.in/' } }} />
    <main className="bg-slate-50">
      <section className="bg-gradient-to-b from-brand-blue to-slate-950 text-white py-16"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><p className="text-sm font-bold uppercase tracking-widest text-amber-300">Bangalore senior-care guide</p><h1 className="mt-4 text-3xl sm:text-5xl font-black leading-tight">{data.heading}</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">{data.intro}</p><div className="mt-8 flex flex-col sm:flex-row gap-3"><a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone inline-flex items-center justify-center gap-2 px-6 py-3 font-bold"><Phone className="w-4 h-4" />Call +91 77605 06666</a><Link to="/contact-us" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-bold text-white">Request a care discussion <ArrowRight className="w-4 h-4" /></Link></div></div></section>
      <section className="py-14"><div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"><div className="grid grid-cols-1 md:grid-cols-3 gap-5">{data.sections.map(([title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><CheckCircle className="w-6 h-6 text-teal-600" /><h2 className="mt-4 text-xl font-extrabold text-slate-900">{title}</h2><p className="mt-2 text-slate-600 leading-relaxed">{text}</p></article>)}</div><div className="mt-12 rounded-2xl border border-teal-200 bg-teal-50 p-6"><h2 className="text-2xl font-black text-slate-900">Related care services</h2><div className="mt-4 flex flex-wrap gap-3"><Link className="font-bold text-teal-800 underline" to="/home-nursing-services-bangalore">Home nursing</Link><Link className="font-bold text-teal-800 underline" to="/old-age-homes-bangalore">Old age homes</Link><Link className="font-bold text-teal-800 underline" to="/dementia-alzheimers-care-bangalore">Dementia care</Link><Link className="font-bold text-teal-800 underline" to="/contact-us">Contact the team</Link></div></div></div></section>
      <FAQSection faqs={faqs} title={`${data.heading} - Frequently Asked Questions`} />
    </main>
  </>;
}
