import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Heart, Shield, Star, ChevronRight } from 'lucide-react';
import { GENERAL_INFO, KEYWORD_CATEGORIES } from '../data/keywordsData';

export default function Footer({ onOpenInquiry }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: About & Trust */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/site-logo.png" 
                alt="Bangalore Caretakers Logo" 
                width="200"
                height="35"
                className="h-10 w-auto bg-white p-1 rounded-lg"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Bangalore Caretakers is Karnataka's most trusted 24/7 Elderly Care, Old Age Home, Home Nursing, and Palliative Care service provider. Providing compassionate, doctor-supervised medical care at home & centers.
            </p>

            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm">
              <Star className="w-5 h-5 fill-current" />
              <span>4.9 / 5.0 Rating based on 761+ Google Reviews</span>
            </div>

            <div className="pt-2">
              <button 
                onClick={onOpenInquiry}
                className="btn-primary py-2.5 px-4 text-xs font-bold"
              >
                Request 15-Min Callback
              </button>
            </div>
          </div>

          {/* Col 2: Top Care Services */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-teal-500 pl-3">
              Top Medical Care Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/old-age-homes-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> Best Old Age Homes in Bangalore
                </Link>
              </li>
              <li>
                <Link to="/home-nursing-services-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> 24/7 Home Nursing & Caretakers
                </Link>
              </li>
              <li>
                <Link to="/dementia-alzheimers-care-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> Dementia & Alzheimer's Care Homes
                </Link>
              </li>
              <li>
                <Link to="/palliative-cancer-care-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> Palliative & Cancer Care at Home
                </Link>
              </li>
              <li>
                <Link to="/assisted-living-senior-care-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> Assisted Living & Senior Living
                </Link>
              </li>
              <li>
                <Link to="/post-surgery-rehabilitation-care" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-teal-400" /> Post-Surgery & Stroke Rehab Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Geo-Targeted Area Coverage */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-amber-500 pl-3">
              Bangalore Localities Covered
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/elderly-care-indiranagar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Indiranagar Elderly Care
                </Link>
              </li>
              <li>
                <Link to="/elderly-care-jayanagar" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Jayanagar Senior & Nursing Care
                </Link>
              </li>
              <li>
                <Link to="/elderly-care-whitefield" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Whitefield Old Age Homes
                </Link>
              </li>
              <li>
                <Link to="/elderly-care-electronic-city" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Electronic City Home Nursing
                </Link>
              </li>
              <li>
                <Link to="/elderly-care-yelahanka" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Yelahanka Medical Care
                </Link>
              </li>
              <li>
                <Link to="/caretaker-nursing-jobs-bangalore" className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-4 h-4 text-amber-400" /> Caretaker & Nursing Jobs
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hotline */}
          <div className="space-y-4">
            <h3 className="text-white font-bold text-base mb-4 border-l-4 border-emerald-500 pl-3">
              24/7 Helpline & Address
            </h3>

            <div className="space-y-3 text-sm">
              <a 
                href={`tel:${GENERAL_INFO.phoneRaw}`}
                className="flex items-center gap-3 p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold hover:bg-amber-500/20 transition-colors"
              >
                <Phone className="w-5 h-5 text-amber-400" />
                <div>
                  <span className="block text-[10px] text-amber-200 uppercase tracking-wider font-normal">Call 24/7 Emergency Line</span>
                  <span>{GENERAL_INFO.phone}</span>
                </div>
              </a>

              <div className="flex items-start gap-3 text-slate-300">
                <MapPin className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>Serving all areas across Bangalore Urban, Indiranagar, Jayanagar, Whitefield, Electronic City, Yelahanka & surrounding suburbs.</span>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{GENERAL_INFO.email}</span>
              </div>
            </div>
          </div>

        </div>

        {/* SEO Keyword Cloud */}
        <div className="py-8 border-b border-slate-800 space-y-4 text-xs text-slate-400">
          <h4 className="text-slate-200 font-bold text-sm uppercase tracking-wider">
            Popular Care Searches in Bangalore:
          </h4>
          <div className="flex flex-wrap gap-2 leading-relaxed">
            {KEYWORD_CATEGORIES.flatMap(cat => cat.keywords).map((kw, i) => (
              <span key={i} className="bg-slate-800/60 hover:bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md border border-slate-700/50">
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} Bangalore Caretakers. All Rights Reserved. Designed for 100/100 Speed & Mobile Performance.</p>
          <div className="flex items-center gap-4">
            <Link to="/contact-us" className="hover:text-slate-400">Privacy Policy</Link>
            <Link to="/contact-us" className="hover:text-slate-400">Terms of Service</Link>
            <Link to="/caretaker-nursing-jobs-bangalore" className="hover:text-slate-400">Careers</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
