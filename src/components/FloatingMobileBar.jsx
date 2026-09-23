import { Phone, MessageSquare, HeartHandshake } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function FloatingMobileBar({ onOpenInquiry }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 xl:hidden bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 p-2 shadow-2xl">
      <div className="max-w-lg mx-auto grid grid-cols-3 gap-1.5">
        
        {/* 1. Direct Call Button */}
        <a
          href={`tel:${GENERAL_INFO.phoneRaw}`}
          className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 py-2.5 px-2 rounded-xl font-black text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-md border border-amber-300 transition-transform active:scale-[0.98]"
          aria-label="Call emergency line"
        >
          <Phone className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
          <span className="truncate">Call Helpline</span>
        </a>

        {/* 2. WhatsApp Button */}
        <a
          href={`https://wa.me/${GENERAL_INFO.whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-2 rounded-xl font-bold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-md border border-emerald-500 transition-transform active:scale-[0.98]"
          aria-label="WhatsApp Us"
        >
          <MessageSquare className="w-4 h-4 shrink-0 text-emerald-100" />
          <span className="truncate">WhatsApp</span>
        </a>

        {/* 3. Quick Inquiry / Book Care */}
        <button
          onClick={onOpenInquiry}
          className="bg-teal-600 hover:bg-teal-700 text-white py-2.5 px-2 rounded-xl font-extrabold text-xs flex flex-col sm:flex-row items-center justify-center gap-1 shadow-md border border-teal-500 transition-transform active:scale-[0.98]"
        >
          <HeartHandshake className="w-4 h-4 shrink-0 text-teal-200" />
          <span className="truncate">Book Care</span>
        </button>

      </div>
    </div>
  );
}

