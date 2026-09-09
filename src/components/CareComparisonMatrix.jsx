import { Check, X, Shield, Star } from 'lucide-react';

export default function CareComparisonMatrix({ onOpenInquiry }) {
  const careLevels = [
    {
      name: "Independent Senior Living",
      target: "Active Seniors",
      doctor: "Weekly Checkup",
      nursing: "On-Call Support",
      meals: "4 Dietitian Meals",
      bgCheck: "100% Verified",
      price: "Flexible Monthly",
      link: "/assisted-living-senior-care-bangalore"
    },
    {
      name: "Assisted Old Age Home",
      target: "Seniors needing daily help",
      doctor: "Daily Physician Visit",
      nursing: "24/7 On-Duty Nurses",
      meals: "Diabetic & Custom Diet",
      bgCheck: "100% Verified",
      price: "Comprehensive Plan",
      featured: true,
      link: "/old-age-homes-bangalore"
    },
    {
      name: "24/7 Bedridden Nursing Care",
      target: "Post-op, Stroke, ICU Care",
      doctor: "Daily Doctor & Specialist",
      nursing: "1-on-1 Dedicated Nurse",
      meals: "Ryle's Tube / Soft Diet",
      bgCheck: "100% Verified",
      price: "Full Medical Support",
      link: "/home-nursing-services-bangalore"
    },
    {
      name: "Dementia & Memory Care",
      target: "Alzheimer's & Parkinson's",
      doctor: "Geriatric Specialist",
      nursing: "24/7 Trained Attendant",
      meals: "Soft & Pureed Diet",
      bgCheck: "100% Verified",
      price: "Specialized Care",
      link: "/dementia-alzheimers-care-bangalore"
    }
  ];

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-teal-700 uppercase tracking-widest bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Transparent Care Matrix
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900">
            Compare Senior Care & Nursing Options in Bangalore
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Detailed breakdown inspired by leading clinical geriatric standards (NABH & JCI quality protocols).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careLevels.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 border-2 flex flex-col justify-between transition-all space-y-6 ${
                plan.featured
                  ? 'border-teal-500 bg-teal-950 text-white shadow-2xl relative'
                  : 'border-slate-200 bg-slate-50 text-slate-900'
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-500 text-slate-950 font-black text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                  Most Popular for Families
                </span>
              )}

              <div className="space-y-4">
                <div className="border-b pb-4 border-slate-200/20">
                  <h3 className="font-extrabold text-xl">{plan.name}</h3>
                  <p className={`text-xs mt-1 ${plan.featured ? 'text-teal-300' : 'text-slate-500'}`}>
                    Ideal for: {plan.target}
                  </p>
                </div>

                <ul className="space-y-3 text-xs leading-relaxed">
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span><strong>Doctor Support:</strong> {plan.doctor}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span><strong>Nursing:</strong> {plan.nursing}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span><strong>Meals:</strong> {plan.meals}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className={`w-4 h-4 shrink-0 ${plan.featured ? 'text-teal-400' : 'text-teal-600'}`} />
                    <span><strong>Verification:</strong> {plan.bgCheck}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200/20 space-y-3">
                <div className="text-center font-bold text-sm text-amber-400">
                  {plan.price}
                </div>
                <button
                  onClick={() => onOpenInquiry(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-xs shadow-md transition-all ${
                    plan.featured
                      ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                      : 'bg-brand-blue hover:bg-slate-800 text-white'
                  }`}
                >
                  Inquire Plan Details
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
