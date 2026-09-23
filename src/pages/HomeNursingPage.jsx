import { Phone, ShieldCheck, Heart, Stethoscope, UserCheck, Clock, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function HomeNursingPage({ onOpenInquiry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Best Home Nursing Services in Bangalore - Bangalore Caretakers",
    "description": "Hire verified male and female home nurses in Bangalore for 12-hour or 24-hour home care, post-surgery recovery, and bedridden elderly patient care.",
    "telephone": "+917760506666",
    "image": "https://bangalorecaretakers.in/assets/nurse-patient-care.jpg"
  };

  const nursingFaqs = [
    {
      q: "What is the difference between a home nurse and a home caretaker?",
      a: "A Home Nurse (ANM/GNM/B.Sc Nursing) performs clinical medical procedures such as IV infusions, catheter insertion, wound dressing, and vitals monitoring. A Home Caretaker assists with daily living activities like bathing, feeding, diaper changing, and mobility support."
    },
    {
      q: "Can I hire a Female Nurse for Home Care in Bangalore for my elderly mother?",
      a: "Yes! We have a dedicated team of verified, experienced female home nurses and female caretakers available for 12-hour day/night shifts or 24-hour live-in care across Bangalore."
    },
    {
      q: "Are your male and female nurses background-checked?",
      a: "100% yes. Every nursing staff member undergoes rigorous police verification, address validation, background checks, and practical nursing competency evaluations."
    },
    {
      q: "How fast can you send a home nurse near me in Bangalore?",
      a: "We deploy qualified nurses to your doorstep within 2 to 4 hours of confirmation across all localities in Bangalore."
    }
  ];

  return (
    <>
      <SEO
        title="Best Home Nursing Services in Bangalore | Male & Female Nurses"
        description="Looking for Home Nursing Services in Bangalore? Hire certified male and female nurses for 12-hour or 24-hour home care. Fast 2-hour deployment."
        keywords={[
          "Home Nursing Services in Bangalore",
          "Home Nursing Services Bangalore",
          "Best Home Nursing Services in Bangalore",
          "Home Nursing Services near me",
          "Female Nurse for Home Care Bangalore",
          "Male Nurse for Home Care Bangalore",
          "Care Taker at Home in Bangalore",
          "24/7 Home Care Services"
        ]}
        canonicalPath="/home-nursing-services-bangalore"
        schemaData={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold">
            <Stethoscope className="w-4 h-4" /> SL #2 Priority Target Service
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Best <span className="text-teal-400">Home Nursing Services</span> in Bangalore (24/7 Patient Care)
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Need a qualified <strong className="text-white">Female Nurse for Home Care in Bangalore</strong> or a reliable <strong className="text-white">Male Nurse for Home Care</strong>? We provide trained, background-verified GNM/B.Sc nurses and home caretakers for 12h shifts and 24h live-in patient care.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="btn-primary py-4 px-6 text-base font-bold shadow-lg"
            >
              Book Verified Nurse Now
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

      {/* Real Patient Care Feature Card */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6">
              <img
                src="/assets/senior-caretaker-bond.jpg"
                alt="Compassionate Female Nurse & Care Taker at Home in Bangalore"
                width="600"
                height="400"
                loading="lazy"
                className="w-full h-80 lg:h-full object-cover"
              />
            </div>
            <div className="lg:col-span-6 p-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
                Gentle & Medical Assistance
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Personalized 1-on-1 Patient Care at Home
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Our certified nurses provide continuous monitoring, catheter maintenance, oxygen administration, tube feeding, and compassionate emotional support for bedridden or recovering patients.
              </p>
              <div className="pt-2">
                <button onClick={onOpenInquiry} className="btn-primary py-3 px-6 font-bold text-sm">
                  Request Home Nurse Deployment
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nurse Options Grid */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Tailored Home Nursing & Caretaker Solutions
            </h2>
            <p className="text-slate-600 text-base">
              Choose the exact level of care your family member requires at home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-teal-600 text-white flex items-center justify-center font-bold">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Female Nurse for Home Care</h3>
              <p className="text-sm text-slate-600">
                Gentle, experienced female nurses for elderly mothers, female post-operative recovery, and general elder hygiene care.
              </p>
              <button onClick={onOpenInquiry} className="text-xs font-bold text-teal-700 hover:underline">
                Request Female Nurse →
              </button>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-amber-600 text-white flex items-center justify-center font-bold">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Male Nurse for Home Care</h3>
              <p className="text-sm text-slate-600">
                Physically strong, clinically trained male nurses specialized in handling male patients, mobility assistance, and ICU care at home.
              </p>
              <button onClick={onOpenInquiry} className="text-xs font-bold text-amber-700 hover:underline">
                Request Male Nurse →
              </button>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 hover:shadow-lg transition-all">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">24/7 Live-in Caretakers</h3>
              <p className="text-sm text-slate-600">
                Round-the-clock live-in attendants providing non-stop monitoring, feeding, medication, and companionship.
              </p>
              <button onClick={onOpenInquiry} className="text-xs font-bold text-blue-700 hover:underline">
                Request Live-in Caretaker →
              </button>
            </div>

          </div>

          <div className="p-8 bg-slate-900 text-white rounded-3xl space-y-4">
            <h3 className="text-2xl font-bold text-teal-400">Clinical Procedures Handled at Home</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs text-slate-300">
              <div className="p-3 bg-slate-800 rounded-lg">✔ Injection & IV Fluid Admin</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Catheter Care & Flush</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Ryle's Tube / Feeding Care</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Tracheostomy & Suctioning</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Wound Dressing & Bed Sores</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Oxygen & Nebulizer Support</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Diabetic Insulin Management</div>
              <div className="p-3 bg-slate-800 rounded-lg">✔ Vitals & Sugar Monitoring</div>
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={nursingFaqs} title="Home Nursing Services Bangalore - FAQ" />
    </>
  );
}
