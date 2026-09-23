import { Phone, ShieldCheck, Heart, Stethoscope, CheckCircle, Building } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function OldAgeHomesPage({ onOpenInquiry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Best Old Age Homes in Bangalore with Medical Care - Bangalore Caretakers",
    "description": "Looking for the best Old Age Homes in Bangalore? Bangalore Caretakers provides 24/7 doctor-supervised senior living homes with medical facilities and nursing care.",
    "telephone": "+917760506666",
    "image": "https://bangalorecaretakers.in/assets/old-age-home-room.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "761"
    }
  };

  const oldAgeFaqs = [
    {
      q: "What medical facilities are available in Bangalore Caretakers Old Age Homes?",
      a: "Our old age homes in Bangalore are equipped with 24/7 registered nursing staff, daily doctor visits, oxygen concentrators, vitals monitoring, wheelchair support, and rapid emergency ambulance escalation."
    },
    {
      q: "What is the monthly fee for Old Age Homes in Bangalore?",
      a: "Monthly charges vary depending on the level of care required (independent senior living vs 24/7 bedridden nursing care) and room preference (single occupancy vs twin sharing). Contact us for a transparent, customized fee brochure."
    },
    {
      q: "Are short-term stays allowed for post-surgery recovery or temporary family travel?",
      a: "Yes! We offer flexible short-term stay plans (weekly or monthly) as well as long-term residential senior care."
    },
    {
      q: "How do you handle dietary and food requirements for elderly residents?",
      a: "We provide 4 freshly prepared, hygienic, vegetarian/non-vegetarian meals daily formulated according to physician guidelines (diabetic-friendly, low-sodium, soft/pureed diets)."
    }
  ];

  return (
    <>
      <SEO
        title="Best Old Age Homes in Bangalore | 24/7 Medical Care & Nursing"
        description="Top-rated Old Age Homes in Bangalore with 24/7 medical care, nursing facilities, doctor visits, and emergency backup. Rated 4.9★ by 760+ families."
        keywords={[
          "Old Age Homes in Bangalore",
          "Old Age Home Bangalore",
          "Best Old Age Homes in Bangalore",
          "Good Old Age Homes in Bangalore",
          "Old Age Home Care Services in Bangalore",
          "Old Age Home with Medical Care",
          "Old Age Home with Medical Facilities",
          "Old Age Home with Nursing Care",
          "24/7 Elderly Care",
          "List of Old Age Homes in Bangalore"
        ]}
        canonicalPath="/old-age-homes-bangalore"
        schemaData={schema}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-brand-blue to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs font-semibold">
            <Building className="w-4 h-4" /> SL #1 Priority Target Service
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Best <span className="text-amber-400">Old Age Homes in Bangalore</span> with 24/7 Medical & Nursing Care
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Searching for reliable, medical-assisted <strong className="text-white">Old Age Home Care Services in Bangalore</strong>? We offer peaceful residential environments equipped with 24/7 nursing supervision, physician visits, customized nutritious meals, and complete emergency medical backup.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="btn-primary py-4 px-6 text-base font-bold shadow-lg"
            >
              Check Available Rooms & Fees
            </button>
            <a
              href={`tel:${GENERAL_INFO.phoneRaw}`}
              className="btn-phone py-4 px-6 text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call Helpline (+91 77605 06666)
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Real Facility Showcase Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Inside Our Bangalore Senior Living Facilities
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Clean, air-conditioned rooms, medical beds, wheelchair support, and hygienic physician-approved meals.
            </p>
          </div>

          {/* Real Photo Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white space-y-4">
              <img
                src="/assets/old-age-home-room.webp"
                alt="Bangalore Caretakers Old Age Home Room with Medical Beds"
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">Medical Room Amenities</span>
                <h3 className="text-xl font-bold">24/7 Equipped Medical Beds & Wheelchair Support</h3>
                <p className="text-sm text-slate-300">
                  Fully furnished single and twin sharing rooms equipped with adjustable medical beds, IV stands, grab rails, anti-skid floors, and emergency nurse call buttons.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white space-y-4">
              <img
                src="/assets/senior-healthy-meal.webp"
                alt="Nutritious Senior Diet Meals at Bangalore Caretakers"
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-72 object-cover"
              />
              <div className="p-6 space-y-2">
                <span className="text-xs font-bold text-teal-400 uppercase tracking-widest">Hygienic Dining</span>
                <h3 className="text-xl font-bold">Dietitian-Approved Nutritious Meal Plans</h3>
                <p className="text-sm text-slate-300">
                  4 freshly prepared meals served daily tailored to individual health conditions including diabetic, low-sodium, soft, and pureed dietary requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Core Features & Medical Facilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-6">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-teal-600 text-white rounded-xl w-fit">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">24/7 Medical & Nursing Care</h3>
              <p className="text-sm text-slate-600">
                On-duty registered nurses monitor blood pressure, sugar levels, medication schedules, and vitals around the clock.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-amber-600 text-white rounded-xl w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Personalized Senior Nutrition</h3>
              <p className="text-sm text-slate-600">
                Freshly prepared, dietitian-crafted meals suited for diabetic, cardiac, and pureed meal requirements.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-emerald-600 text-white rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Emergency Escalation</h3>
              <p className="text-sm text-slate-600">
                Direct tie-ups with leading super-specialty hospitals in Bangalore for zero-delay emergency admissions.
              </p>
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={oldAgeFaqs} title="Old Age Homes in Bangalore - Frequently Asked Questions" />
    </>
  );
}
