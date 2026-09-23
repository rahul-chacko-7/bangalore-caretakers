import { Link } from 'react-router-dom';
import { Phone, ShieldCheck, Heart, Stethoscope, Star, CheckCircle, ArrowRight, UserCheck, Activity, Award, Building } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import InteractiveCareWizard from '../components/InteractiveCareWizard';
import CareComparisonMatrix from '../components/CareComparisonMatrix';
import TransitionCareSection from '../components/TransitionCareSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function HomePage({ onOpenInquiry }) {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness"],
    "name": "Bangalore Caretakers - Best Old Age Homes in Bangalore with Medical Care",
    "description": "Bangalore Caretakers provides the Best Old Age Homes in Bangalore equipped with 24/7 medical facilities, nursing care, doctor visits, and caretaker at home services. Rated 4.9★.",
    "telephone": "+917760506666",
    "image": "https://bangalorecaretakers.in/assets/old-age-home-room.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "761"
    }
  };

  const oldAgeHomeHighlights = [
    {
      title: "Best Old Age Homes in Bangalore",
      desc: "Top-rated residential senior living centers offering peaceful rooms, 24/7 doctor supervision, and specialized geriatric care.",
      icon: Building,
      link: "/old-age-homes-bangalore"
    },
    {
      title: "Old Age Home with Medical Facilities",
      desc: "Equipped with medical beds, oxygen concentrators, daily vitals monitoring, wheelchair support, and emergency ICU escalation.",
      icon: Stethoscope,
      link: "/old-age-homes-bangalore"
    },
    {
      title: "Old Age Home with Nursing Care",
      desc: "Round-the-clock registered GNM/ANM female and male nurses for medication administration, catheter, and bedridden patient care.",
      icon: Heart,
      link: "/old-age-homes-bangalore"
    },
    {
      title: "Care Taker at Home in Bangalore",
      desc: "Dedicated 12-hour or 24-hour live-in caretakers deployed to your doorstep for personal hygiene, feeding, and senior companionship.",
      icon: UserCheck,
      link: "/home-nursing-services-bangalore"
    }
  ];

  const homeFaqs = [
    {
      q: "Why is Bangalore Caretakers ranked among the Best Old Age Homes in Bangalore?",
      a: "Bangalore Caretakers combines 24/7 doctor availability, round-the-clock skilled nursing care, dietitian-approved meal plans, high hygiene standards, and emergency ambulance tie-ups. We hold a 4.9★ Google rating based on 761+ family reviews."
    },
    {
      q: "What medical facilities are provided in your Old Age Homes in Bangalore?",
      a: "Our old age home facilities include 24/7 on-duty nurses, physician visits, oxygen support, vitals monitoring, wheelchair ramps, grab rails, and specialized bedridden patient care."
    },
    {
      q: "Can I get a Care Taker at Home in Bangalore for 24/7 Elderly Care?",
      a: "Yes! We provide verified male and female caretakers at home for 12-hour shifts or 24-hour live-in care across all Bangalore locations including Indiranagar, Jayanagar, Whitefield, and Electronic City."
    },
    {
      q: "What is the monthly fee for an Old Age Home with Nursing Care in Bangalore?",
      a: "Pricing depends on single vs double occupancy rooms and the level of nursing required (independent senior living vs 24/7 bedridden care). Call +91 77605 06666 for a transparent fee brochure."
    }
  ];

  return (
    <>
      <SEO
        title="Best Old Age Homes in Bangalore | 24/7 Medical Care & Nursing"
        description="Looking for the Best Old Age Homes in Bangalore? Bangalore Caretakers offers 24/7 Old Age Home Care Services with medical facilities, nursing care, doctor visits & caretaker at home."
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
          "Care Taker at Home in Bangalore"
        ]}
        canonicalPath="/"
        schemaData={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-blue via-slate-900 to-slate-950 text-white pt-10 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs sm:text-sm font-semibold">
                <Star className="w-4 h-4 fill-current text-amber-400" />
                <span>#1 Rated Old Age Home & Senior Care in Bangalore (4.9★ Rating)</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
                Best <span className="text-amber-400 underline decoration-teal-500 decoration-4">Old Age Homes in Bangalore</span> (24/7 Medical & Nursing Care)
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Looking for <strong className="text-white">Good Old Age Homes in Bangalore</strong> or an <strong className="text-white">Old Age Home with Medical Facilities</strong>? Bangalore Caretakers provides 24/7 doctor-supervised senior living, skilled nursing care, dietitian meals, and verified <strong className="text-white">Care Takers at Home in Bangalore</strong>.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button
                  onClick={onOpenInquiry}
                  className="btn-primary py-4 px-6 text-base font-bold shadow-xl shadow-emerald-900/30 flex items-center justify-center gap-2"
                >
                  <ShieldCheck className="w-5 h-5" />
                  Inquire Available Rooms & Fees
                </button>

                <a
                  href={`tel:${GENERAL_INFO.phoneRaw}`}
                  className="btn-phone py-4 px-6 text-base font-bold flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call Helpline (+91 77605 06666)
                </a>
              </div>

              {/* Highlights List */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>24/7 Doctor On-Call</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>24/7 Elderly Care</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-400 shrink-0" />
                  <span>Medical Beds & Oxygen</span>
                </div>
              </div>

            </div>

            {/* Hero Right Real Facility Photo */}
            <div className="lg:col-span-5 bg-white text-slate-900 rounded-3xl p-4 shadow-2xl border border-slate-100 space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md">
                <img
                  src="/assets/senior-caretaker-bond.webp"
                  alt="Bangalore Caretakers - Verified Nurse & Senior Bonding Care"
                  width="600"
                  height="400"
                  fetchpriority="high"
                  loading="eager"
                  className="w-full h-56 sm:h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/90 to-transparent p-4 text-white">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Bangalore Care Takers</span>
                  <div className="text-sm font-bold">Compassionate 24/7 Medical Care & Nursing</div>
                </div>
              </div>

              <div className="px-2 space-y-3">
                <button
                  onClick={onOpenInquiry}
                  className="w-full btn-primary py-3 font-bold text-sm"
                >
                  Schedule Campus Tour / Book Room
                </button>

                <div className="text-center text-[11px] text-slate-500">
                  ⚡ Trusted by 760+ Bangalore families for Old Age Home Care Services
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* Competitor Feature: Transition Care Section */}
      <TransitionCareSection onOpenInquiry={onOpenInquiry} />

      {/* Interactive Care Finder Wizard */}
      <section className="py-12 bg-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveCareWizard onOpenInquiry={onOpenInquiry} />
        </div>
      </section>

      {/* Competitor Feature: Care Comparison Matrix */}
      <CareComparisonMatrix onOpenInquiry={onOpenInquiry} />

      {/* Core Old Age Home Features Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Karnataka's Most Trusted Senior Living
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Top-Rated Old Age Home Care Services in Bangalore & 24/7 Elderly Care
            </h2>
            <p className="text-slate-600 text-base">
              Engineered to provide home-like warmth alongside hospital-grade medical infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {oldAgeHomeHighlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-2xl border-2 border-slate-200 bg-white shadow-sm hover:shadow-xl transition-all space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="p-3 rounded-xl bg-slate-900 text-white w-fit">
                      <IconComp className="w-6 h-6 text-amber-400" />
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                    <Link
                      to={item.link}
                      className="font-bold text-sm text-teal-700 hover:text-teal-900 flex items-center gap-1.5"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={onOpenInquiry}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800"
                    >
                      Inquire Pricing
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Real Photos & Medical Care Feature Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                24/7 Doctor & Nurse Supervision
              </span>

              <h2 className="text-3xl font-extrabold text-slate-900 leading-tight">
                Why Bangalore Caretakers is Chosen as the Best Old Age Home in Bangalore
              </h2>

              <p className="text-slate-600 text-base leading-relaxed">
                Selecting a <strong className="text-slate-900">Good Old Age Home in Bangalore</strong> or hiring a reliable <strong className="text-slate-900">Care Taker at Home in Bangalore</strong> requires absolute trust. We offer 24/7 medical oversight, background-verified caretakers, and specialized care for bedridden, dementia, and post-surgery seniors.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-700 shrink-0 mt-1">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Old Age Home with Medical Care & Doctor Backup</h3>
                    <p className="text-sm text-slate-600">Daily physician checkups, vitals logging, oxygen support, and 24/7 emergency hospital escalation.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-teal-100 text-teal-700 shrink-0 mt-1">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Old Age Home with Nursing Care & Live-in Caretakers</h3>
                    <p className="text-sm text-slate-600">Male and female nurses for catheter, feeding tube, tracheostomy, and bedridden patient support.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-blue-100 text-blue-700 shrink-0 mt-1">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">4.9★ Google Rating & Verified Trust</h3>
                    <p className="text-sm text-slate-600">Rated highest in Bangalore by over 760+ families for cleanliness, food quality, and compassionate staff.</p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={`tel:${GENERAL_INFO.phoneRaw}`}
                  className="btn-phone py-3 px-6 text-sm font-bold inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Speak to Old Age Home Counselor (+91 77605 06666)
                </a>
              </div>
            </div>

            {/* Gallery Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <img
                  src="/assets/old-age-home-room.webp"
                  alt="Old Age Home with Medical Facilities in Bangalore"
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3 text-xs">
                  <div className="font-bold text-amber-400">Medical Bed Rooms</div>
                  <div className="text-slate-300">Equipped with medical beds & wheelchair ramps</div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <img
                  src="/assets/senior-healthy-meal.webp"
                  alt="Hygienic Senior Meal at Old Age Home Bangalore"
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3 text-xs">
                  <div className="font-bold text-teal-400">Dietitian Senior Meals</div>
                  <div className="text-slate-300">Diabetic & low-sodium 4 daily fresh meals</div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <img
                  src="/assets/senior-caretaker-bond.webp"
                  alt="Compassionate Female Care Taker at Home in Bangalore"
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="p-3 text-xs">
                  <div className="font-bold text-amber-400">Verified Female Caretaker</div>
                  <div className="text-slate-300">Compassionate 1-on-1 senior nursing care</div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-2xl overflow-hidden shadow-lg border border-slate-800">
                <img
                  src="/assets/medical-camp-team.webp"
                  alt="Free Medical Camp Staff Team Bangalore"
                  width="400"
                  height="300"
                  loading="lazy"
                  className="w-full h-44 object-cover"
                />
                <div className="p-3 text-xs">
                  <div className="font-bold text-emerald-400">Free Health Camps</div>
                  <div className="text-slate-300">Doctor & nursing staff team in Bangalore</div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection faqs={homeFaqs} title="Old Age Homes in Bangalore - Frequently Asked Questions" />
    </>
  );
}
