import { Phone, Stethoscope, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import { GENERAL_INFO } from '../data/keywordsData';

export default function SpecializedNursingPage({ onOpenInquiry }) {
  return (
    <>
      <SEO
        title="Tracheostomy, Catheter & Feeding Tube Care in Bangalore"
        description="Clinical Nursing Procedures at Home in Bangalore: Tracheostomy Care, Catheterization, Feeding Tube (Ryle's tube/PEG), Colostomy Care & Wound Dressing."
        keywords={[
          "Tracheostomy Care in Bangalore",
          "Catheter Care in Bangalore",
          "Feeding Tube Care in Bangalore",
          "Colostomy Care in Bangalore",
          "Wound Care in Bangalore",
          "Wound Dressing Bangalore",
          "Diabetic Care in Bangalore"
        ]}
        canonicalPath="/specialized-nursing-care"
      />

      <section className="bg-gradient-to-r from-slate-900 via-blue-950 to-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Specialized Clinical Nursing: <span className="text-amber-400">Tracheostomy, Catheter & Tube Care</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Certified GNM / B.Sc clinical nurses in Bangalore trained in sterile tracheostomy suctioning, urinary catheterization, Ryle's tube feeding, colostomy pouch changing, and diabetic wound dressing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpenInquiry} className="btn-primary py-4 px-6 font-bold">
              Book Nurse for Clinical Procedure
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
            Clinical Nursing Procedures Performed at Home
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Tracheostomy Care & Suctioning</h3>
              <p className="text-sm text-slate-600">Sterile airway maintenance, inner cannula cleaning, tie replacement, and regular suctioning.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Feeding Tube Care (Ryle's/PEG)</h3>
              <p className="text-sm text-slate-600">Tube insertion assistance, flushing, dietary liquid feed administration, and site hygiene.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Catheter Care & Flushing</h3>
              <p className="text-sm text-slate-600">Foley catheter insertion, bag drainage, UTI prevention, and sterile bladder washes.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
