import { Stethoscope, ShieldCheck, Heart, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function TransitionCareSection({ onOpenInquiry }) {
  const steps = [
    {
      num: "01",
      title: "Hospital Discharge Planning",
      desc: "Our medical team coordinates directly with hospital doctors (Manipal, Apollo, Fortis, Aster) to review discharge summaries and clinical prescriptions."
    },
    {
      num: "02",
      title: "ICU / Room Equipment Setup",
      desc: "Immediate delivery of medical beds, oxygen concentrators, suction apparatus, IV stands, and air beds to your home or room within 2 hours."
    },
    {
      num: "03",
      title: "Nurse & Caretaker Deployment",
      desc: "Assignment of certified GNM / ANM male or female nurses experienced in catheter care, tube feeding, wound dressing, and vitals monitoring."
    },
    {
      num: "04",
      title: "Daily Physician Supervision",
      desc: "Continuous progress tracking, weekly doctor visits, medication adjustments, and 24/7 hospital emergency ambulance standby."
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-400 uppercase tracking-widest bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/30">
            Hospital-to-Home Transition Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Seamless Post-Hospital Recovery & Rehabilitation
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Transition smoothly from hospital discharge to full recovery at home or in our medical senior centers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 relative hover:border-teal-500 transition-all"
            >
              <span className="text-3xl font-black text-amber-400 block">{step.num}</span>
              <h3 className="font-bold text-lg text-white">{step.title}</h3>
              <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-gradient-to-r from-teal-900 to-brand-blue border border-teal-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold text-white">Need Immediate Post-Discharge Caretaker or Nurse?</h3>
            <p className="text-sm text-slate-300">We deploy trained care staff to all Bangalore hospitals and homes within 2 hours.</p>
          </div>
          <button
            onClick={() => onOpenInquiry('Transition Care / Post-Discharge')}
            className="btn-primary py-4 px-8 font-bold text-sm shrink-0"
          >
            Schedule Hospital Transition Care
          </button>
        </div>

      </div>
    </section>
  );
}
