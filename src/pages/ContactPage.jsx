import { Phone, Mail, MapPin, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import SEO from '../components/SEO';
import { GENERAL_INFO } from '../data/keywordsData';

export default function ContactPage({ onOpenInquiry }) {
  return (
    <>
      <SEO
        title="Contact Bangalore Caretakers | 24/7 Helpline +91 77605 06666"
        description="Contact Bangalore Caretakers for 24/7 Old Age Home admissions and Home Nursing inquiries across Bangalore. Phone: +91 77605 06666."
        canonicalPath="/contact-us"
      />

      <section className="bg-gradient-to-r from-brand-blue via-slate-900 to-teal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Contact <span className="text-teal-400">Bangalore Caretakers</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Available 24 Hours a Day, 7 Days a Week for Immediate Senior Care & Nursing Support.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 space-y-4">
              <div className="p-3 bg-amber-500 text-slate-950 rounded-xl w-fit font-bold">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">24/7 Emergency Line</h3>
              <p className="text-sm text-slate-700">Immediate admission or emergency nurse deployment.</p>
              <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="text-lg font-black text-slate-900 hover:underline block">
                {GENERAL_INFO.phone}
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-teal-50 border border-teal-200 space-y-4">
              <div className="p-3 bg-teal-600 text-white rounded-xl w-fit font-bold">
                <MessageSquare className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">WhatsApp Instant Connect</h3>
              <p className="text-sm text-slate-700">Send patient details for quick pricing & photo brochure.</p>
              <a 
                href={`https://wa.me/${GENERAL_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold text-teal-800 hover:underline block"
              >
                Chat on WhatsApp →
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 space-y-4">
              <div className="p-3 bg-blue-600 text-white rounded-xl w-fit font-bold">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Headquarters Address</h3>
              <p className="text-sm text-slate-700">{GENERAL_INFO.address}</p>
              <span className="text-xs font-semibold text-blue-800">Serving all Bangalore Regions</span>
            </div>

          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenInquiry}
              className="btn-primary py-4 px-8 text-base font-bold"
            >
              Open 24/7 Direct Inquiry Form
            </button>
          </div>

        </div>
      </section>
    </>
  );
}
