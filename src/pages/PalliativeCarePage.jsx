import { Phone, Heart, ShieldCheck, Stethoscope, Activity } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function PalliativeCarePage({ onOpenInquiry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Palliative & Cancer Care Services Bangalore - Bangalore Caretakers",
    "description": "Compassionate Palliative Care Services and Cancer Care at Home in Bangalore. Doctor-supervised pain management, symptom relief, and end-of-life care.",
    "telephone": "+917760506666"
  };

  const palliativeFaqs = [
    {
      q: "What is Palliative Care and who needs it?",
      a: "Palliative Care is specialized medical care focused on providing relief from the symptoms, pain, and stress of serious illnesses such as advanced cancer, kidney failure, or late-stage heart disease. It aims to improve quality of life for both the patient and family."
    },
    {
      q: "Can Palliative Care Services be provided at home in Bangalore?",
      a: "Yes. Our team of palliative care physicians, clinical oncology nurses, and trained caretakers deliver pain management, oxygen support, IV medication, and emotional counseling directly in the comfort of your home."
    },
    {
      q: "Do you offer specialized Cancer Care Services in Bangalore?",
      a: "Yes, we specialize in post-chemotherapy care, radiation side-effect management, cancer pain management, tracheostomy/feeding tube handling, and compassionate end-of-life support."
    }
  ];

  return (
    <>
      <SEO
        title="Palliative Care Services in Bangalore | Cancer Care at Home"
        description="Compassionate Palliative Care Services and Cancer Care in Bangalore. Expert pain management, home nursing, and 24/7 doctor supervision."
        keywords={[
          "Palliative Care Services in Bangalore",
          "Palliative Care in Bangalore",
          "Palliative Care Services at Home",
          "Palliative Care Bangalore",
          "Cancer Care Services in Bangalore"
        ]}
        canonicalPath="/palliative-cancer-care-bangalore"
        schemaData={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-950 via-slate-900 to-teal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-semibold">
            <Activity className="w-4 h-4" /> SL #4 Priority Target Service
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Compassionate <span className="text-emerald-400">Palliative & Cancer Care</span> in Bangalore
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Professional <strong className="text-white">Palliative Care Services at Home in Bangalore</strong> and <strong className="text-white">Cancer Care Services</strong>. We prioritize pain relief, dignity, symptom management, and emotional support for patients facing chronic or advanced medical conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="btn-primary py-4 px-6 text-base font-bold shadow-lg"
            >
              Consult Palliative Team
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

      {/* Services Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Holistic Care focused on Comfort & Dignity
            </h2>
            <p className="text-slate-600 text-base">
              Relieving pain, controlling nausea, and supporting family members every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-emerald-600 text-white rounded-xl w-fit">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Cancer Care Services</h3>
              <p className="text-sm text-slate-600">
                Post-chemo recovery, pain relief infusion, wound care, and nursing assistance for oncology patients.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-teal-600 text-white rounded-xl w-fit">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Doctor Pain Management</h3>
              <p className="text-sm text-slate-600">
                Regular visits by palliative specialists to adjust pain medications and manage severe physical discomfort.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-amber-600 text-white rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">End-of-Life Comfort Care</h3>
              <p className="text-sm text-slate-600">
                Gentle, dignified nursing care ensuring maximum peace, hygiene, and family counseling during delicate times.
              </p>
            </div>

          </div>

        </div>
      </section>

      <FAQSection faqs={palliativeFaqs} title="Palliative & Cancer Care - FAQ" />
    </>
  );
}
