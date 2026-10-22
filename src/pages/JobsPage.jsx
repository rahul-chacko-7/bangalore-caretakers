import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import SEO from '../components/SEO';
import { GENERAL_INFO } from '../data/keywordsData';

export default function JobsPage() {
  const [messageUrl, setMessageUrl] = useState('');
  const [error, setError] = useState('');
  const [jobForm, setJobForm] = useState({
    name: '',
    phone: '',
    role: 'Female Nurse / Caretaker',
    experience: '1-3 Years',
    locality: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const digits = jobForm.phone.replace(/\D/g, '');
    if (!jobForm.name.trim() || digits.length < 7 || digits.length > 15) { setError('Enter your name and a valid phone number (7 to 15 digits).'); return; }
    setError('');
    const text = `Job inquiry for ${jobForm.role}. Name: ${jobForm.name.trim()}. Phone: ${jobForm.phone.trim()}. Experience: ${jobForm.experience}. Locality: ${jobForm.locality.trim() || 'Bangalore'}.`;
    const url = `https://wa.me/${GENERAL_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`;
    setMessageUrl(url); window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <SEO
        title="Care Taker Jobs in Bangalore | Nursing Jobs in Bangalore (24/7 Hiring)"
        description="Apply for Caretaker Jobs and Nursing Jobs in Bangalore. High salary, flexible shifts, food & accommodation provided. Call +91 77605 06666."
        keywords={[
          "Care Taker Jobs in Bangalore",
          "Nursing Jobs in Bangalore",
          "Female Nursing Jobs Bangalore",
          "Male Caretaker Jobs Bangalore",
          "Home Nurse Jobs Bangalore"
        ]}
        canonicalPath="/caretaker-nursing-jobs-bangalore"
      />

      <section className="bg-gradient-to-r from-brand-blue to-teal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 text-xs font-semibold">
            <Briefcase className="w-4 h-4" /> We Are Hiring 24/7
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Apply for <span className="text-amber-400">Care Taker Jobs</span> & Nursing Jobs in Bangalore
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Are you a trained male/female nurse or experienced elderly caretaker looking for immediate employment in Bangalore? Contact Bangalore Caretakers to discuss current vacancies, qualifications, duties, pay and accommodation arrangements.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">
              Instant Job Application via WhatsApp
            </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="job-name" className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Full Name *</label>
                    <input id="job-name" name="name"
                      type="text" maxLength={100}
                      required
                      placeholder="e.g. Suresh Kumar"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.name}
                      onChange={(e) => { setMessageUrl(''); setError(''); setJobForm({ ...jobForm, name: e.target.value }); }}
                    />
                  </div>
                  <div>
                    <label htmlFor="job-phone" className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                    <input id="job-phone" name="phone"
                      type="tel" autoComplete="tel" maxLength={25}
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.phone}
                      onChange={(e) => { setMessageUrl(''); setError(''); setJobForm({ ...jobForm, phone: e.target.value }); }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="job-role" className="block text-xs font-bold uppercase text-slate-700 mb-1">Applying For *</label>
                    <select id="job-role" name="role"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.role}
                      onChange={(e) => { setMessageUrl(''); setError(''); setJobForm({ ...jobForm, role: e.target.value }); }}
                    >
                      <option value="Female Nurse / Caretaker">Female Nurse / Caretaker</option>
                      <option value="Male Nurse / Caretaker">Male Nurse / Caretaker</option>
                      <option value="GNM / B.Sc Registered Nurse">GNM / B.Sc Registered Nurse</option>
                      <option value="Dementia Care Attendant">Dementia Care Attendant</option>
                      <option value="Old Age Home Cook / Staff">Old Age Home Cook / Staff</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="job-experience" className="block text-xs font-bold uppercase text-slate-700 mb-1">Experience *</label>
                    <select id="job-experience" name="experience"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.experience}
                      onChange={(e) => { setMessageUrl(''); setError(''); setJobForm({ ...jobForm, experience: e.target.value }); }}
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="job-locality" className="block text-xs font-bold uppercase text-slate-700 mb-1">Current Locality in Bangalore</label>
                    <input id="job-locality" name="locality"
                    type="text" maxLength={100}
                    placeholder="e.g. Majestic, Yeshwanthpur, Electronic City"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                    value={jobForm.locality}
                    onChange={(e) => { setMessageUrl(''); setError(''); setJobForm({ ...jobForm, locality: e.target.value }); }}
                  />
                </div>

                <p className="text-sm text-slate-600">Your details will be included in a WhatsApp link. Send the message there for our team to receive your application. <Link to="/privacy-policy" className="underline">Privacy policy</Link></p>
                {error && <p role="alert" className="text-red-700">{error}</p>}
                {messageUrl && <p role="status" className="text-sm">Your message is ready; the website has not sent it. <a href={messageUrl} target="_blank" rel="noopener noreferrer" className="underline font-bold">Open WhatsApp to send your application</a></p>}
                <button type="submit" className="w-full btn-primary py-3.5 font-bold text-sm">
                  Continue application in WhatsApp
                </button>
              </form>

            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-600">
              <span>📞 Direct HR Contact: +91 77605 06666</span>
              <span>📍 Walk-in Interview Available Daily</span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
