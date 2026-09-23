import { useState } from 'react';
import { Phone, MessageSquare, X, ShieldCheck, HeartHandshake } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

export default function LeadCaptureModal({ isOpen, onClose, defaultService = "Old Age Home / Nursing Care" }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: defaultService,
    location: '',
    notes: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Build WhatsApp redirection text
      const text = `Hello Bangalore Caretakers, I am looking for ${formData.service} in ${formData.location || 'Bangalore'}. Name: ${formData.name}, Phone: ${formData.phone}. Notes: ${formData.notes}`;
      window.open(`https://wa.me/${GENERAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
      setSubmitted(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        
        {/* Header */}
        <div className="bg-brand-blue text-white px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-teal-500/20 rounded-lg text-teal-300">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold">24/7 Quick Care Inquiry</h3>
              <p className="text-xs text-slate-300">Get Instant Callback within 15 Minutes</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-800">Inquiry Received!</h4>
              <p className="text-sm text-slate-600">Connecting you directly with our 24/7 senior care counselor on WhatsApp...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98765 43210 or +91 77605 06666"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 text-sm"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Required Service
                </label>
                <select
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="Old Age Home Bangalore">Old Age Home with Medical Care</option>
                  <option value="Home Nursing Services">Home Nursing Services (Male/Female)</option>
                  <option value="Dementia & Alzheimer's Care">Dementia & Alzheimer's Specialized Care</option>
                  <option value="Palliative & Cancer Care">Palliative & Cancer Care Services</option>
                  <option value="Post Surgery Rehabilitation">Post Surgery & Paralysis Care</option>
                  <option value="Specialized Clinical Care">Tracheostomy / Catheter / Tube Care</option>
                  <option value="Senior Living & Assisted Living">Assisted Living / Retirement Homes</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                  Location in Bangalore
                </label>
                <input
                  type="text"
                  placeholder="e.g. Indiranagar, Jayanagar, Whitefield"
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full btn-primary py-3 text-sm font-bold flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  Connect via WhatsApp
                </button>

                <a
                  href={`tel:${GENERAL_INFO.phoneRaw}`}
                  className="w-full btn-phone py-3 text-sm font-bold flex items-center justify-center gap-2 text-slate-900"
                >
                  <Phone className="w-4 h-4 text-slate-900" />
                  Direct Emergency Call
                </a>
              </div>

              <p className="text-[11px] text-slate-500 text-center flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Confidential & No Spam Guarantee
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
