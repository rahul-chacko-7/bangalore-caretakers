import { Star, ShieldCheck, Stethoscope, Clock, Heart, Award } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function TrustBadges() {
  const badges = [
    {
      icon: Star,
      color: "text-amber-500 bg-amber-50 border-amber-200",
      title: `${GENERAL_INFO.googleRating}★ Google Rating`,
      desc: `Based on ${GENERAL_INFO.totalReviews}+ Verified Patient Reviews`
    },
    {
      icon: Stethoscope,
      color: "text-teal-600 bg-teal-50 border-teal-200",
      title: "24/7 Doctor On-Call",
      desc: "Instant medical support & emergency escalation"
    },
    {
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50 border-emerald-200",
      title: "100% Background Verified",
      desc: "Police verified & certified male/female nurses"
    },
    {
      icon: Clock,
      color: "text-blue-600 bg-blue-50 border-blue-200",
      title: "24-Hour Shift Coverage",
      desc: "Day, night, or 24/7 live-in caretaker support"
    }
  ];

  return (
    <div className="py-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b, i) => {
            const IconComp = b.icon;
            return (
              <div 
                key={i} 
                className={`p-4 rounded-xl border flex items-center gap-4 transition-all hover:shadow-md ${b.color}`}
              >
                <div className="p-3 rounded-lg bg-white shadow-sm shrink-0">
                  <IconComp className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{b.title}</h4>
                  <p className="text-xs text-slate-600 mt-0.5">{b.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
