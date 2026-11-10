import { Link } from 'react-router-dom';
import { CheckCircle, Users, ClipboardList, IndianRupee, MapPin, AlertTriangle, Clock } from 'lucide-react';
import { SERVICE_DETAILS, TEAM_POINTS, START_STEPS, COST_GUIDE, AREA_LINKS } from '../data/serviceDetails';

function Checklist({ items }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {items.map(item => (
        <li key={item} className="flex gap-2 text-sm text-slate-700 leading-relaxed">
          <CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Shared "what's included / who it suits / care team / how it starts / cost /
// areas" block used by every service page, so each page covers the sections
// families compare between providers.
export default function ServiceDetails({ service }) {
  const data = SERVICE_DETAILS[service];
  if (!data) return null;
  const team = data.team ? [...data.team, ...TEAM_POINTS.slice(2)] : TEAM_POINTS;

  return (
    <section className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{data.heading}</h2>
          <p className="text-slate-600 leading-relaxed">{data.intro}</p>
          <Checklist items={data.included} />
        </div>

        {data.shifts && (
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2"><Clock className="w-5 h-5 text-teal-600" aria-hidden="true" /> Shift options</h2>
            <Checklist items={data.shifts} />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Who this care suits</h2>
            <ul className="space-y-2">
              {data.suitsFor.map(item => <li key={item} className="text-sm text-slate-700 leading-relaxed border-l-2 border-teal-500 pl-3">{item}</li>)}
            </ul>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2"><Users className="w-5 h-5 text-teal-600" aria-hidden="true" /> Who provides the care</h2>
            <ul className="space-y-2">
              {team.map(item => <li key={item} className="text-sm text-slate-700 leading-relaxed border-l-2 border-teal-500 pl-3">{item}</li>)}
            </ul>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2"><ClipboardList className="w-5 h-5 text-teal-600" aria-hidden="true" /> How care starts</h2>
          <ol className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {START_STEPS.map((step, index) => (
              <li key={step.title} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                <span className="text-xs font-bold text-teal-700">Step {index + 1}</span>
                <h3 className="font-bold text-slate-900">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2"><IndianRupee className="w-5 h-5 text-teal-600" aria-hidden="true" /> What affects the cost</h2>
            <p className="text-sm text-slate-700 leading-relaxed">{data.costNote} You receive the fee in writing with the care plan, before care starts.</p>
            <Link to={data.costLink || COST_GUIDE} className="inline-block text-sm font-bold text-teal-700 underline">See typical price ranges in our cost guide</Link>
          </div>
          <div className="space-y-3">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2"><MapPin className="w-5 h-5 text-teal-600" aria-hidden="true" /> Where we provide care</h2>
            <p className="text-sm text-slate-700 leading-relaxed">Residential care is at our facility at #206, BCT Nagar, Athmavidyanagar Layout, Kothanur, Bangalore 560077. Home care is arranged across Bangalore, subject to staff availability:</p>
            <ul className="flex flex-wrap gap-2">
              {AREA_LINKS.map(area => <li key={area.to}><Link to={area.to} className="inline-block text-xs font-semibold px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 hover:bg-teal-50">{area.name}</Link></li>)}
            </ul>
          </div>
        </div>

        {data.caution && (
          <p className="flex gap-2 text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-4">
            <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" aria-hidden="true" /> {data.caution}
          </p>
        )}
      </div>
    </section>
  );
}
