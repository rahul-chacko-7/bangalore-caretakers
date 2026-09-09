import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, Clock, MapPin, ChevronDown, MessageSquare, Star, HeartHandshake } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function Header({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const location = useLocation();

  const primaryNav = [
    { name: 'Home', path: '/' },
    { name: 'Old Age Homes', path: '/old-age-homes-bangalore', badge: 'Top Rated' },
    { name: 'Home Nursing', path: '/home-nursing-services-bangalore' },
    { name: 'Dementia Care', path: '/dementia-alzheimers-care-bangalore' },
    { name: 'Palliative Care', path: '/palliative-cancer-care-bangalore' }
  ];

  const serviceCategories = [
    { name: 'Best Old Age Homes in Bangalore', path: '/old-age-homes-bangalore', desc: '24/7 Medical Care & Nursing Rooms' },
    { name: 'Home Nursing Services (Male/Female)', path: '/home-nursing-services-bangalore', desc: '12h & 24h Live-in Home Caretakers' },
    { name: "Dementia & Alzheimer's Care", path: '/dementia-alzheimers-care-bangalore', desc: 'Memory Care Facilities & Attendants' },
    { name: 'Palliative & Cancer Care', path: '/palliative-cancer-care-bangalore', desc: 'Pain Management & Comfort Care' },
    { name: 'Assisted Living & Senior Living', path: '/assisted-living-senior-care-bangalore', desc: 'Retirement Homes in Bangalore' },
    { name: 'Post-Surgery & Stroke Rehab', path: '/post-surgery-rehabilitation-care', desc: 'Paralysis & Bedridden Recovery' },
    { name: 'Tracheostomy & Tube Nursing', path: '/specialized-nursing-care', desc: 'Catheter, Feeding Tube & Wound Care' },
    { name: 'Disabled & Rehabilitation Care', path: '/home-for-disabled-and-rehabilitation', desc: 'Physically & Mentally Challenged' },
  ];

  const locationLinks = [
    { name: 'Indiranagar Senior Care', path: '/elderly-care-indiranagar' },
    { name: 'Jayanagar Home Nursing', path: '/elderly-care-jayanagar' },
    { name: 'Whitefield Old Age Homes', path: '/elderly-care-whitefield' },
    { name: 'Electronic City Caretakers', path: '/elderly-care-electronic-city' },
    { name: 'Yelahanka Medical Care', path: '/elderly-care-yelahanka' },
  ];

  return (
    <>
      {/* 1. Top Emergency & Rating Announcement Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          
          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1.5 font-bold text-amber-400">
              <Clock className="w-3.5 h-3.5" /> 24/7 Open Helpline
            </span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> 100% Police Verified Staff & Doctor On-Call
            </span>
          </div>

          <div className="flex items-center gap-5 ml-auto text-xs">
            <a 
              href="https://share.google/W9H1wtPkYyfOfYpsT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-amber-300 transition-colors"
            >
              <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-1.5 py-0.5 rounded">4.9 ★</span>
              <span className="font-semibold text-slate-200">761+ Google Reviews</span>
            </a>

            <a
              href={`https://wa.me/${GENERAL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us
            </a>

            <a 
              href={`tel:${GENERAL_INFO.phoneRaw}`} 
              className="font-extrabold text-amber-400 hover:underline flex items-center gap-1 text-sm bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30"
            >
              <Phone className="w-3.5 h-3.5" /> {GENERAL_INFO.phone}
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Header Navbar */}
      <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/assets/site-logo.png" 
              alt="Bangalore Caretakers Official Logo" 
              width="233" 
              height="39"
              className="h-11 sm:h-13 w-auto object-contain group-hover:scale-[1.02] transition-transform"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden xl:flex items-center gap-1 font-bold text-slate-700 text-sm">
            {primaryNav.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                  location.pathname === link.path
                    ? 'text-teal-700 bg-teal-50 font-extrabold'
                    : 'hover:text-teal-700 hover:bg-slate-50'
                }`}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded bg-amber-500 text-slate-950">
                    {link.badge}
                  </span>
                )}
              </Link>
            ))}

            {/* All Services Dropdown Mega Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className="px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-50 flex items-center gap-1 font-bold"
                aria-expanded={servicesDropdown}
              >
                <span>All Care Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdown ? 'rotate-180 text-teal-600' : ''}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full right-0 w-96 bg-white rounded-2xl border border-slate-200 shadow-2xl p-3 z-50 animate-fadeIn grid grid-cols-1 gap-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100">
                    Medical & Senior Services
                  </div>
                  {serviceCategories.map((s, idx) => (
                    <Link
                      key={idx}
                      to={s.path}
                      className="p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group block"
                    >
                      <div className="font-bold text-slate-900 text-xs group-hover:text-teal-700">{s.name}</div>
                      <div className="text-[11px] text-slate-500">{s.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setLocationsDropdown(true)}
              onMouseLeave={() => setLocationsDropdown(false)}
            >
              <button 
                className="px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-50 flex items-center gap-1 font-bold"
              >
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Locations</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${locationsDropdown ? 'rotate-180 text-teal-600' : ''}`} />
              </button>

              {locationsDropdown && (
                <div className="absolute top-full right-0 w-60 bg-white rounded-2xl border border-slate-200 shadow-2xl p-2 z-50 animate-fadeIn space-y-1">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 px-3 py-1 border-b border-slate-100">
                    Bangalore Localities
                  </div>
                  {locationLinks.map((loc, idx) => (
                    <Link
                      key={idx}
                      to={loc.path}
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/caretaker-nursing-jobs-bangalore"
              className="px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-50 font-bold"
            >
              Jobs
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex btn-primary text-xs sm:text-sm py-2.5 px-4 font-extrabold shadow-lg"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>Book 24/7 Care</span>
            </button>

            <a
              href={`tel:${GENERAL_INFO.phoneRaw}`}
              className="btn-phone text-xs sm:text-sm py-2.5 px-3 sm:px-4 font-black"
              aria-label="Call emergency line"
            >
              <Phone className="w-4 h-4 text-slate-950 shrink-0" />
              <span className="hidden sm:inline">Call Helpline</span>
              <span className="sm:hidden">Call</span>
            </a>

            {/* Mobile Hamburger Menu */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none border border-slate-200"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-2xl max-h-[85vh] overflow-y-auto">
            
            <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-2 pt-2">
              Main Menu
            </div>
            
            {primaryNav.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-bold ${
                  location.pathname === link.path
                    ? 'bg-teal-600 text-white'
                    : 'text-slate-800 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="text-xs font-black uppercase tracking-wider text-slate-400 px-2 pt-3 border-t border-slate-100">
              Services & Localities
            </div>

            {serviceCategories.slice(0, 4).map((s, idx) => (
              <Link
                key={idx}
                to={s.path}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-2 rounded-lg text-xs font-semibold text-slate-700 hover:bg-teal-50"
              >
                • {s.name}
              </Link>
            ))}

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full btn-primary py-3 font-bold text-sm"
              >
                Request 24/7 Nurse / Caretaker
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
