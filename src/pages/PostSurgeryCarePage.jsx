import { Phone, Stethoscope, ShieldCheck, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import { GENERAL_INFO } from '../data/keywordsData';

export default function PostSurgeryCarePage({ onOpenInquiry }) {
  return (
    <>
      <SEO
        title="Post Surgery Care & Rehabilitation in Bangalore | Bedridden & Stroke Care"
        description="Comprehensive Post-Operative Care, Paralysis Care, Stroke Rehabilitation, and Bedridden Patient Care at home & center in Bangalore."
        keywords={[
          "Post Surgery Care in Bangalore",
          "Post-operative Care in Bangalore",
          "Post Surgery Care at Home in Bangalore",
          "Paralysis care in Bangalore",
          "Stroke Rehabilitation in Bangalore",
          "Coma Patient Care in Bangalore",
          "Bedridden Patient Care in Bangalore",
          "Oxygen Supportive Care in Bangalore"
        ]}
        canonicalPath="/post-surgery-rehabilitation-care"
      />

      <section className="bg-gradient-to-r from-slate-900 via-teal-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Post-Surgery, Paralysis & <span className="text-teal-400">Stroke Rehabilitation</span> in Bangalore
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Fast-track recovery with doctor-guided <strong className="text-white">Post Surgery Care at Home in Bangalore</strong>. Specializing in paralysis rehabilitation, stroke recovery, bedridden care, and coma patient nursing care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpenInquiry} className="btn-primary py-4 px-6 font-bold">
              Book Rehab Assessment
            </button>
            <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone py-4 px-6 font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call +91 77605 06666
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            Specialized Critical & Post-Operative Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Post-Op Wound & Vitals</h3>
              <p className="text-sm text-slate-600">Surgical dressing, drain management, pain control, and infection prevention.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Paralysis & Stroke Rehab</h3>
              <p className="text-sm text-slate-600">Daily physical therapy, range-of-motion exercises, and nerve stimulation.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Bedridden Patient Support</h3>
              <p className="text-sm text-slate-600">2-hourly position turning to prevent bed sores, air bed management, and full hygiene.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Oxygen & Ventilator Care</h3>
              <p className="text-sm text-slate-600">Oxygen concentrator setup, BiPAP/CPAP monitoring, and ICU home nursing.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
