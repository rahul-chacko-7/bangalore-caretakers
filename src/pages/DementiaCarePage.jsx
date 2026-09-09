import { Phone, Brain, ShieldCheck, Heart, UserCheck, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

export default function DementiaCarePage({ onOpenInquiry }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Dementia & Alzheimer's Care Homes Bangalore - Bangalore Caretakers",
    "description": "Specialized Dementia Care Homes and Home Caretakers in Bangalore for Alzheimer's and Parkinson's patients. Safe 24/7 memory care facilities.",
    "telephone": "+917760506666"
  };

  const dementiaFaqs = [
    {
      q: "How do your Dementia Care Homes ensure patient safety and prevent wandering?",
      a: "Our dementia care facilities feature 24/7 RFID keycard door access, anti-wandering alarm sensors, slip-resistant floors, padded furniture edges, and continuous 1-on-1 staff monitoring to guarantee zero unsafe wandering."
    },
    {
      q: "Can I get a specialized Dementia Caretaker at home in Bangalore?",
      a: "Yes. We deploy home caretakers specifically trained in cognitive orientation, gentle behavioral redirection, aggression management, and memory stimulation activities."
    },
    {
      q: "What conditions do you support in your memory care centers?",
      a: "We specialize in early, moderate, and advanced stages of Vascular Dementia, Alzheimer's Disease, Parkinson's Dementia, and Lewy Body Dementia."
    }
  ];

  return (
    <>
      <SEO
        title="Dementia Care in Bangalore | Alzheimer's & Parkinson's Care Homes"
        description="Specialized Dementia Care Homes and Home Caretakers in Bangalore for Alzheimer's, Parkinson's & memory loss. Safe, compassionate 24/7 care."
        keywords={[
          "Dementia Care in Bangalore",
          "Alzheimer's Care in Bangalore",
          "Parkinson's Care in Bangalore",
          "Dementia Care Homes in Bangalore",
          "Dementia Care Centres in Bangalore",
          "Dementia Care Near Me",
          "Alzheimer's Care home",
          "Parkinson's Care Facilities Near Me"
        ]}
        canonicalPath="/dementia-alzheimers-care-bangalore"
        schemaData={schema}
      />

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-300 text-xs font-semibold">
            <Brain className="w-4 h-4" /> SL #3 Priority Target Service
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Specialized <span className="text-amber-400">Dementia & Alzheimer's Care</span> in Bangalore
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Looking for compassionate <strong className="text-white">Dementia Care Homes in Bangalore</strong> or home attendants for <strong className="text-white">Alzheimer's Care</strong>? Our dedicated memory care centers and home staff provide 24/7 safety, patience, and dignified care for cognitive conditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={onOpenInquiry}
              className="btn-primary py-4 px-6 text-base font-bold shadow-lg"
            >
              Consult Memory Care Specialist
            </button>
            <a
              href={`tel:${GENERAL_INFO.phoneRaw}`}
              className="btn-phone py-4 px-6 text-base font-bold flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call 24/7 Line (+91 77605 06666)
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Memory Care Pillars */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Expert Memory Care for Cognitive Conditions
            </h2>
            <p className="text-slate-600 text-base">
              Providing emotional stability, behavioral redirection, and safe physical environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-indigo-600 text-white rounded-xl w-fit">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Alzheimer's Care Homes</h3>
              <p className="text-sm text-slate-600">
                Specialized residential care centers with structured routines, sensory stimulation, and gentle assistance.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-teal-600 text-white rounded-xl w-fit">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Parkinson's Care Facilities</h3>
              <p className="text-sm text-slate-600">
                Focused mobility assistance, tremor management, fall prevention, and daily speech/physiotherapy exercises.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3">
              <div className="p-3 bg-amber-600 text-white rounded-xl w-fit">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">1-on-1 Home Memory Attendants</h3>
              <p className="text-sm text-slate-600">
                Trained caretakers who stay at home to manage agitation, sundowning symptoms, medication, and personal hygiene.
              </p>
            </div>
          </div>

        </div>
      </section>

      <FAQSection faqs={dementiaFaqs} title="Dementia & Alzheimer's Care - FAQ" />
    </>
  );
}
