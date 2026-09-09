import { Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function FloatingMobileBar({ onOpenInquiry }) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800 p-2.5 shadow-2xl">
      <div className="max-w-md mx-auto grid grid-cols-2 gap-2">
        
        {/* Direct Call Button */}
        <a
          href={`tel:${GENERAL_INFO.phoneRaw}`}
          className="btn-phone py-3 px-3 text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 shadow-md"
          aria-label="Call emergency line"
        >
          <Phone className="w-4 h-4 text-slate-950 shrink-0" />
          <span>Call 24/7 Helpline</span>
        </a>

        {/* Quick Inquiry / WhatsApp Button */}
        <button
          onClick={onOpenInquiry}
          className="btn-primary py-3 px-3 text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 shadow-md"
        >
          <MessageSquare className="w-4 h-4 shrink-0" />
          <span>Instant Callback</span>
        </button>

      </div>
    </div>
  );
}
