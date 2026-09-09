import { useState } from 'react';
import { Heart, Stethoscope, Home, Building, UserCheck, ShieldCheck, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function InteractiveCareWizard({ onOpenInquiry }) {
  const [step, setStep] = useState(1);
  const [careType, setCareType] = useState('elderly');
  const [locationType, setLocationType] = useState('home');

  const handleFinish = () => {
    onOpenInquiry(`${careType === 'elderly' ? 'Elderly Care' : careType === 'dementia' ? 'Dementia Care' : 'Nursing Care'} - ${locationType === 'home' ? 'At Home' : 'In Old Age Home'}`);
  };

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl max-w-4xl mx-auto space-y-6">
      
      {/* Title */}
      <div className="text-center space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
          Easy 30-Second Finder
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
          Find the Right Care for Your Loved One
        </h3>
        <p className="text-sm text-slate-600">
          Select your requirements below to get instant pricing and personalized recommendations.
        </p>
      </div>

      {/* Step Progress */}
      <div className="flex items-center justify-center gap-3 text-xs font-bold">
        <div className={`px-3 py-1 rounded-full ${step >= 1 ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          1. Select Condition
        </div>
        <span className="text-slate-300">→</span>
        <div className={`px-3 py-1 rounded-full ${step >= 2 ? 'bg-teal-600 text-white' : 'bg-slate-100 text-slate-500'}`}>
          2. Care Location
        </div>
        <span className="text-slate-300">→</span>
        <div className={`px-3 py-1 rounded-full ${step === 3 ? 'bg-amber-500 text-slate-950 font-black' : 'bg-slate-100 text-slate-500'}`}>
          3. Get Fee Quote
        </div>
      </div>

      {/* Step 1: Condition */}
      {step === 1 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <button
            onClick={() => { setCareType('elderly'); setStep(2); }}
            className="p-5 rounded-2xl border-2 border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-teal-50/50 text-left space-y-3 transition-all group"
          >
            <div className="p-3 bg-teal-600 text-white rounded-xl w-fit group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Elderly & Assisted Living</h4>
            <p className="text-xs text-slate-600">General senior care, mobility, feeding, hygiene, and daily companion care.</p>
          </button>

          <button
            onClick={() => { setCareType('nursing'); setStep(2); }}
            className="p-5 rounded-2xl border-2 border-slate-200 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/50 text-left space-y-3 transition-all group"
          >
            <div className="p-3 bg-amber-600 text-white rounded-xl w-fit group-hover:scale-110 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Post-Surgery & Bedridden</h4>
            <p className="text-xs text-slate-600">Catheter, tracheostomy, IV fluids, wound dressing, and clinical nursing care.</p>
          </button>

          <button
            onClick={() => { setCareType('dementia'); setStep(2); }}
            className="p-5 rounded-2xl border-2 border-slate-200 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/50 text-left space-y-3 transition-all group"
          >
            <div className="p-3 bg-blue-600 text-white rounded-xl w-fit group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">Dementia & Memory Care</h4>
            <p className="text-xs text-slate-600">Alzheimer's, Parkinson's, cognitive support, and safe anti-wandering care.</p>
          </button>
        </div>
      )}

      {/* Step 2: Location */}
      {step === 2 && (
        <div className="space-y-4 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              onClick={() => { setLocationType('home'); setStep(3); }}
              className="p-6 rounded-2xl border-2 border-slate-200 hover:border-teal-500 bg-slate-50 hover:bg-teal-50/50 text-left space-y-3 transition-all group"
            >
              <div className="p-3 bg-teal-600 text-white rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Home className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg">Care Provided At Home</h4>
              <p className="text-xs text-slate-600">Certified male or female nurse/caretaker arrives at your home in Bangalore (12h / 24h shifts).</p>
            </button>

            <button
              onClick={() => { setLocationType('center'); setStep(3); }}
              className="p-6 rounded-2xl border-2 border-slate-200 hover:border-amber-500 bg-slate-50 hover:bg-amber-50/50 text-left space-y-3 transition-all group"
            >
              <div className="p-3 bg-amber-600 text-white rounded-xl w-fit group-hover:scale-110 transition-transform">
                <Building className="w-6 h-6" />
              </div>
              <h4 className="font-bold text-slate-900 text-lg">Stay in an Old Age Home Center</h4>
              <p className="text-xs text-slate-600">Peaceful residential stay with 24/7 doctor supervision, nutritious meals, and medical rooms.</p>
            </button>
          </div>

          <div className="text-center">
            <button onClick={() => setStep(1)} className="text-xs text-slate-500 hover:underline">
              ← Back to Step 1
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Confirmation */}
      {step === 3 && (
        <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-4 text-center">
          <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle className="w-6 h-6" />
          </div>

          <h4 className="text-xl font-bold">Recommended Care Plan Ready!</h4>
          <p className="text-sm text-slate-300 max-w-md mx-auto">
            Customized plan for <strong>{careType.toUpperCase()} CARE ({locationType === 'home' ? 'AT HOME' : 'OLD AGE HOME STAY'})</strong> in Bangalore.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleFinish}
              className="btn-primary py-3.5 px-6 font-bold text-sm"
            >
              Get Free Fee Quote & Callback
            </button>
            <a
              href={`tel:${GENERAL_INFO.phoneRaw}`}
              className="btn-phone py-3.5 px-6 font-bold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Counselor Direct
            </a>
          </div>

          <button onClick={() => setStep(1)} className="text-xs text-slate-400 hover:underline block mx-auto">
            Change Selections
          </button>
        </div>
      )}

    </div>
  );
}
