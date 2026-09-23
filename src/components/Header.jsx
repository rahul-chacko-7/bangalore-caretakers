import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ShieldCheck, Clock, MapPin, ChevronDown, MessageSquare, Star, HeartHandshake, Sparkles } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function Header({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [locationsDropdown, setLocationsDropdown] = useState(false);
  const location = useLocation();

  const primaryNav = [
    { name: 'Home', path: '/' },
    { name: 'Old Age Homes', path: '/old-age-homes-bangalore', badge: 'Top Rated' },
    { name: 'Home Nursing', path: '/home-nursing-services-bangalore' }
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
      {/* 1. Top Announcement Bar */}
      <div className="bg-slate-950 text-white text-xs py-2 px-4 border-b border-slate-800/80 tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          
          <div className="flex items-center gap-4 text-slate-300">
            <span className="inline-flex items-center gap-1.5 font-bold text-amber-400">
              <Clock className="w-3.5 h-3.5" /> 24/7 Medical Emergency Line
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" /> 100% Police Verified Staff & Doctor On-Call
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a 
              href="https://share.google/W9H1wtPkYyfOfYpsT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 px-2.5 py-0.5 rounded-full border border-amber-500/30 text-amber-300 transition-all text-[11px] font-semibold"
            >
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="font-extrabold text-amber-400">4.9 ★</span>
              <span className="text-slate-200">761+ Verified Google Reviews</span>
            </a>

            <a
              href={`https://wa.me/${GENERAL_INFO.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-bold transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Us
            </a>

            <a 
              href={`tel:${GENERAL_INFO.phoneRaw}`} 
              className="font-black text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {GENERAL_INFO.phone}
            </a>
          </div>

        </div>
      </div>

      {/* 2. Main Executive Header Navbar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4">
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center group shrink-0">
            <img 
              src="/assets/site-logo.png" 
              alt="Bangalore Caretakers Official Logo" 
              width="233" 
              height="44"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 font-bold text-slate-700 text-xs xl:text-sm">
            {primaryNav.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-2.5 xl:px-3 py-2 rounded-xl transition-all whitespace-nowrap inline-flex items-center gap-1.5 ${
                    isActive
                      ? 'text-teal-800 bg-teal-50/90 font-black shadow-sm ring-1 ring-teal-500/20'
                      : 'hover:text-teal-700 hover:bg-slate-100/70'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] uppercase font-black px-1.5 py-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 shadow-xs inline-flex items-center gap-0.5">
                      <Sparkles className="w-2.5 h-2.5 text-slate-950" />
                      {link.badge}
                    </span>
                  )}
                </Link>
              );
            })}

            {/* All Care Services Mega Menu Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button 
                className={`px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 inline-flex items-center gap-1 font-bold whitespace-nowrap transition-colors ${
                  servicesDropdown ? 'bg-slate-100 text-teal-800' : ''
                }`}
                aria-expanded={servicesDropdown}
              >
                <span>All Care Services</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdown ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {servicesDropdown && (
                <div className="absolute top-full right-0 w-96 bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-3 z-50 animate-fadeIn grid grid-cols-1 gap-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-teal-700 px-3 py-1.5 bg-teal-50/80 rounded-lg mb-1 flex items-center justify-between">
                    <span>Medical & Senior Services</span>
                    <span className="text-[9px] font-bold text-slate-500">Bangalore Wide</span>
                  </div>
                  {serviceCategories.map((s, idx) => (
                    <Link
                      key={idx}
                      to={s.path}
                      className="p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors group block"
                    >
                      <div className="font-bold text-slate-900 text-xs group-hover:text-teal-700 flex items-center justify-between">
                        <span>{s.name}</span>
                        <span className="text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{s.desc}</div>
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
                className={`px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 inline-flex items-center gap-1 font-bold whitespace-nowrap transition-colors ${
                  locationsDropdown ? 'bg-slate-100 text-teal-800' : ''
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-teal-600" />
                <span>Locations</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${locationsDropdown ? 'rotate-180 text-teal-600' : 'text-slate-400'}`} />
              </button>

              {locationsDropdown && (
                <div className="absolute top-full right-0 w-64 bg-white rounded-2xl border border-slate-200/90 shadow-2xl p-2 z-50 animate-fadeIn space-y-1">
                  <div className="text-[10px] font-black uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                    Covered Bangalore Areas
                  </div>
                  {locationLinks.map((loc, idx) => (
                    <Link
                      key={idx}
                      to={loc.path}
                      className="block px-3 py-2 rounded-xl text-xs font-bold text-slate-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
                    >
                      {loc.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/caretaker-nursing-jobs-bangalore"
              className="px-3 py-2 rounded-xl text-slate-700 hover:text-teal-700 hover:bg-slate-100/70 font-bold whitespace-nowrap transition-colors"
            >
              Jobs
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Primary CTA - Book 24/7 Care (Desktop/Tablet) */}
            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white text-xs xl:text-sm py-2.5 px-3.5 xl:px-4 rounded-xl font-extrabold shadow-md shadow-teal-700/20 hover:shadow-lg transition-all"
            >
              <HeartHandshake className="w-4 h-4 text-teal-200 shrink-0" />
              <span className="whitespace-nowrap">Book 24/7 Care</span>
            </button>

            {/* Emergency Phone CTA - Compact Icon on Mobile, Full Pill on Tablet/Desktop */}
            <a
              href={`tel:${GENERAL_INFO.phoneRaw}`}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 hover:from-amber-500 hover:to-amber-600 text-slate-950 text-xs xl:text-sm p-2.5 sm:py-2.5 sm:px-4 rounded-xl font-black shadow-md shadow-amber-500/25 border border-amber-300 hover:shadow-lg transition-all"
              aria-label="Call helpline"
            >
              <Phone className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Call Helpline</span>
            </a>

            {/* Mobile Hamburger Toggle Button (ALWAYS Visible on Mobile) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 px-2.5 sm:px-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 focus:outline-none border border-slate-700 shadow-md flex items-center gap-1 font-bold text-xs transition-colors shrink-0"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-400" />
              ) : (
                <Menu className="w-5 h-5 text-amber-400" />
              )}
              <span className="text-[11px] uppercase tracking-wider font-extrabold text-amber-400 hidden xs:inline">Menu</span>
            </button>
          </div>

        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200/90 bg-white/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto animate-fadeIn">
            
            <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-2 pt-1">
              Main Menu
            </div>
            
            <div className="grid grid-cols-1 gap-1">
              {primaryNav.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${
                    location.pathname === link.path
                      ? 'bg-teal-600 text-white shadow-md'
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[9px] uppercase font-black px-2 py-0.5 rounded-full bg-amber-400 text-slate-950">
                      {link.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>

            <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 px-2 pt-3 border-t border-slate-100">
              Services & Specialties
            </div>

            <div className="grid grid-cols-1 gap-1">
              {serviceCategories.slice(0, 5).map((s, idx) => (
                <Link
                  key={idx}
                  to={s.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 hover:bg-teal-50 hover:text-teal-800"
                >
                  • {s.name}
                </Link>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl font-extrabold text-sm shadow-md flex items-center justify-center gap-2"
              >
                <HeartHandshake className="w-4 h-4 text-teal-200" />
                <span>Book 24/7 Care / Schedule Visit</span>
              </button>

              <a
                href={`tel:${GENERAL_INFO.phoneRaw}`}
                className="w-full bg-amber-400 hover:bg-amber-500 text-slate-950 py-3 rounded-xl font-black text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>Call Helpline (+91 77605 06666)</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
