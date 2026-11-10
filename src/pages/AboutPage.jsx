import { Link } from 'react-router-dom';
import { MapPin, Phone, ShieldCheck, ClipboardCheck, Users, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import { GENERAL_INFO } from '../data/keywordsData';

export default function AboutPage({ onOpenInquiry }) {
  return (
    <>
      <SEO title="About Bangalore Care Takers | Senior Care in Kothanur" description="How Bangalore Care Takers plans senior care, home nursing and residential care from Kothanur, Bengaluru, with written care plans and facility visits." canonicalPath="/about-bangalore-caretakers" />
      <section className="bg-gradient-to-b from-brand-blue via-slate-900 to-slate-950 text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-bold uppercase tracking-widest text-amber-300">About the care team</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-black leading-tight">Bangalore Care Takers senior-care enquiries</h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">Bangalore Care Takers helps families discuss residential senior care, home nursing, assisted living, dementia support, palliative care and recovery needs in Bengaluru. The residential facility address is in Kothanur; home-care availability depends on the person’s needs, location and current staffing.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3"><button onClick={onOpenInquiry} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 font-bold">Discuss a care plan <ArrowRight className="w-4 h-4" /></button><a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone inline-flex items-center justify-center gap-2 px-6 py-3 font-bold"><Phone className="w-4 h-4" /> {GENERAL_INFO.phone}</a></div>
        </div>
      </section>
      <main className="py-16 bg-white"><div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6" aria-label="What families can verify">
          {[[MapPin, 'Location and visits', 'The residential address is 206, BCT Nagar, Athmavidyanagar Layout, Kothanur Post, Bengaluru 560077. Arrange a visit and confirm the current room, staffing and facility details before admission.'], [ClipboardCheck, 'Written care scope', 'Ask for the current inclusions, exclusions, shift pattern, equipment, meals, visiting rules, emergency escalation and charges in writing.'], [Users, 'Care-team questions', 'Ask which role is assigned, what training and supervision apply, who coordinates with the family and how replacement or escalation is handled.']].map(([Icon, title, text]) => <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6"><Icon className="w-7 h-7 text-teal-700" aria-hidden="true" /><h2 className="mt-4 text-xl font-extrabold text-slate-900">{title}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p></article>)}
        </section>
        <section className="max-w-3xl" aria-labelledby="trust-heading"><div className="flex items-start gap-4"><ShieldCheck className="w-7 h-7 text-emerald-700 shrink-0" aria-hidden="true" /><div><h2 id="trust-heading" className="text-2xl font-black text-slate-900">Choose care using verifiable details</h2><p className="mt-3 text-slate-600 leading-relaxed">Care information on this website is general guidance for an enquiry. It is not a diagnosis, emergency service or promise of admission. Families should confirm clinical suitability with the treating clinician and the care team, then visit the facility and review the written plan before deciding.</p><p className="mt-3 text-slate-600 leading-relaxed">For privacy, consent, enquiry handling and service terms, read the <Link className="font-bold text-teal-700 underline" to="/privacy-policy">Privacy Policy</Link> and <Link className="font-bold text-teal-700 underline" to="/terms-of-service">Terms of Service</Link>.</p></div></div></section>
        <section className="rounded-2xl border border-teal-200 bg-teal-50 p-6" aria-labelledby="service-links-heading"><h2 id="service-links-heading" className="text-xl font-extrabold text-slate-900">Explore care options</h2><div className="mt-4 flex flex-wrap gap-3 text-sm font-bold"><Link className="rounded-lg bg-white px-4 py-2 text-teal-800" to="/old-age-homes-bangalore">Residential senior care</Link><Link className="rounded-lg bg-white px-4 py-2 text-teal-800" to="/home-nursing-services-bangalore">Home nursing</Link><Link className="rounded-lg bg-white px-4 py-2 text-teal-800" to="/dementia-alzheimers-care-bangalore">Dementia care</Link><Link className="rounded-lg bg-white px-4 py-2 text-teal-800" to="/contact-us">Contact the team</Link></div></section>
      </div></main>
    </>
  );
}
