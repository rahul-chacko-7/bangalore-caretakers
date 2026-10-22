import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, X } from 'lucide-react';
import { GENERAL_INFO } from '../data/keywordsData';

const SERVICES = ['Old Age Home / Nursing Care', 'Old Age Home Bangalore', 'Home Nursing Services', 'Dementia Care', 'Palliative Care', 'Assisted Living', 'Post Surgery Care', 'Specialized Nursing', 'Disabled Care'];

export default function LeadCaptureModal({ isOpen, onClose, defaultService = SERVICES[0] }) {
  const dialog = useRef(null);
  const [form, setForm] = useState({ name: '', phone: '', service: defaultService, location: '' });
  const [messageUrl, setMessageUrl] = useState('');
  const [error, setError] = useState('');
  useEffect(() => {
    if (isOpen) { setForm(value => ({ ...value, service: defaultService })); setMessageUrl(''); setError(''); }
  }, [isOpen, defaultService]);
  useEffect(() => {
    if (!isOpen) return;
    const previous = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const main = document.getElementById('main-content');
    const wasInert = main?.inert;
    if (main) main.inert = true;
    dialog.current?.querySelector('input')?.focus();
    const handleKey = event => {
      if (event.key === 'Escape') { event.preventDefault(); onClose(); }
      if (event.key !== 'Tab') return;
      const items = [...dialog.current.querySelectorAll('button, input, select, a[href]')].filter(item => !item.disabled && item.getClientRects().length);
      const first = items[0]; const last = items.at(-1);
      if (event.shiftKey && (document.activeElement === first || !dialog.current.contains(document.activeElement))) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && (document.activeElement === last || !dialog.current.contains(document.activeElement))) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', handleKey);
    return () => { document.removeEventListener('keydown', handleKey); document.body.style.overflow = previousOverflow; if (main) main.inert = wasInert; previous?.focus(); };
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  const update = event => { setForm({ ...form, [event.target.name]: event.target.value }); setMessageUrl(''); setError(''); };
  const submit = event => {
    event.preventDefault();
    const digits = form.phone.replace(/\D/g, '');
    if (!form.name.trim() || digits.length < 7 || digits.length > 15) { setError('Enter your name and a valid phone number (7 to 15 digits).'); return; }
    const text = `Hello Bangalore Care Takers, I am looking for ${form.service} in ${form.location.trim() || 'Bangalore'}. Name: ${form.name.trim()}. Phone: ${form.phone.trim()}.`;
    const url = `https://wa.me/${GENERAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setMessageUrl(url); window.open(url, '_blank', 'noopener,noreferrer');
  };
  const services = SERVICES.includes(form.service) ? SERVICES : [form.service, ...SERVICES];
  const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 text-sm';
  return <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80" onMouseDown={event => { if (event.target === event.currentTarget) onClose(); }}>
    <div ref={dialog} role="dialog" aria-modal="true" aria-labelledby="inquiry-title" aria-describedby="inquiry-description" className="w-full max-w-lg max-h-[90dvh] overflow-y-auto bg-white rounded-2xl shadow-2xl">
      <div className="bg-brand-blue text-white p-5 flex items-center justify-between"><h2 id="inquiry-title" className="text-lg font-bold">Care inquiry</h2><button type="button" onClick={onClose} aria-label="Close dialog" className="p-2"><X /></button></div>
      <form onSubmit={submit} className="p-6 space-y-4">
        <p id="inquiry-description" className="text-sm text-slate-600">Prepare a WhatsApp message for our care team. Send it in WhatsApp to complete your inquiry.</p>
        <div><label htmlFor="inquiry-name" className="block font-semibold text-sm mb-1">Your full name *</label><input id="inquiry-name" name="name" autoComplete="name" required maxLength={100} value={form.name} onChange={update} className={inputClass} /></div>
        <div><label htmlFor="inquiry-phone" className="block font-semibold text-sm mb-1">Phone number *</label><input id="inquiry-phone" name="phone" type="tel" autoComplete="tel" required maxLength={25} value={form.phone} onChange={update} className={inputClass} /></div>
        <div><label htmlFor="inquiry-service" className="block font-semibold text-sm mb-1">Required service</label><select id="inquiry-service" name="service" value={form.service} onChange={update} className={inputClass}>{services.map(service => <option key={service}>{service}</option>)}</select></div>
        <div><label htmlFor="inquiry-location" className="block font-semibold text-sm mb-1">Locality in Bangalore</label><input id="inquiry-location" name="location" autoComplete="address-level3" maxLength={100} value={form.location} onChange={update} className={inputClass} /></div>
        {error && <p role="alert" className="text-red-700">{error}</p>}
        <button type="submit" className="btn-primary w-full"><MessageSquare className="w-4 h-4" />Continue to WhatsApp</button>
        {messageUrl && <div role="status" className="bg-teal-50 p-3 rounded-lg text-sm"><p>Your message is ready. It has not been sent by this website.</p><a href={messageUrl} target="_blank" rel="noopener noreferrer" className="font-bold underline">Open WhatsApp and send your message</a></div>}
        <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone w-full"><Phone className="w-4 h-4" />Call the care team</a>
        <p className="text-xs text-slate-600">Continuing shares the entered details with WhatsApp. Avoid sensitive medical information. <Link to="/privacy-policy" onClick={onClose} className="underline">Privacy policy</Link></p>
      </form>
    </div>
  </div>;
}
