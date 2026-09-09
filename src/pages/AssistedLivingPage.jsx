import { Phone, Building, ShieldCheck, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function AssistedLivingPage({ onOpenInquiry }) {
  return (
    <>
      <SEO
        title="Assisted Living & Senior Retirement Homes in Bangalore"
        description="Premium & Affordable Assisted Living, Senior Living Retirement Homes in Bangalore. 24/7 doctor supervision, luxury rooms, and active senior living."
        keywords={[
          "Retirement Homes in Bangalore",
          "Senior Living Bangalore",
          "Senior Living in Bangalore",
          "Assisted Living Bangalore",
          "Assisted Living in Bangalore",
          "Elder Care in Bangalore",
          "Elder Care Services in Bangalore"
        ]}
        canonicalPath="/assisted-living-senior-care-bangalore"
      />

      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Assisted Living & <span className="text-amber-400">Senior Living Retirement Homes</span> in Bangalore
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Independent and medically-assisted senior retirement living in Bangalore. Enjoy peaceful, green campuses, delicious food, 24/7 nursing security, and vibrant community living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpenInquiry} className="btn-primary py-4 px-6 font-bold">
              Book Campus Tour
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
            Senior Living Facilities & Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Luxury & Deluxe Private Suites</h3>
              <p className="text-sm text-slate-600">Single and double occupancy air-conditioned rooms with grab rails, emergency call buttons, and attached accessible washrooms.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">24/7 On-Site Medical Room</h3>
              <p className="text-sm text-slate-600">Resident doctor availability, daily health checkups, medicine distribution, and ambulance standby.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Active Senior Lifestyle</h3>
              <p className="text-sm text-slate-600">Yoga sessions, walking tracks, library, TV lounge, cultural events, and outdoor garden walks.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
