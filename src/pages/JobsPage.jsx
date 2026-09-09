import { useState } from 'react';
import { Phone, Briefcase, CheckCircle, UserCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { GENERAL_INFO } from '../data/keywordsData';

export default function JobsPage() {
  const [applied, setApplied] = useState(false);
  const [jobForm, setJobForm] = useState({
    name: '',
    phone: '',
    role: 'Caretaker (Male/Female)',
    experience: '1-3 Years',
    locality: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setApplied(true);
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
            Are you a trained male/female nurse or experienced elderly caretaker looking for immediate employment in Bangalore? Join Bangalore Caretakers today for high monthly salaries, free food, accommodation, and timely payment guarantees.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b pb-4">
              Instant Job Application Form
            </h2>

            {applied ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-xl font-bold text-slate-900">Application Submitted Successfully!</h3>
                <p className="text-slate-600 text-sm">Our HR recruitment team will contact you within 2 hours. You can also call us directly at +91 77605 06666.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Kumar"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.name}
                      onChange={(e) => setJobForm({ ...jobForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.phone}
                      onChange={(e) => setJobForm({ ...jobForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Applying For *</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.role}
                      onChange={(e) => setJobForm({ ...jobForm, role: e.target.value })}
                    >
                      <option value="Female Nurse / Caretaker">Female Nurse / Caretaker</option>
                      <option value="Male Nurse / Caretaker">Male Nurse / Caretaker</option>
                      <option value="GNM / B.Sc Registered Nurse">GNM / B.Sc Registered Nurse</option>
                      <option value="Dementia Care Attendant">Dementia Care Attendant</option>
                      <option value="Old Age Home Cook / Staff">Old Age Home Cook / Staff</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Experience *</label>
                    <select
                      className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                      value={jobForm.experience}
                      onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                    >
                      <option value="Fresher">Fresher</option>
                      <option value="1-3 Years">1 - 3 Years</option>
                      <option value="3-5 Years">3 - 5 Years</option>
                      <option value="5+ Years">5+ Years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Current Locality in Bangalore</label>
                  <input
                    type="text"
                    placeholder="e.g. Majestic, Yeshwanthpur, Electronic City"
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm"
                    value={jobForm.locality}
                    onChange={(e) => setJobForm({ ...jobForm, locality: e.target.value })}
                  />
                </div>

                <button type="submit" className="w-full btn-primary py-3.5 font-bold text-sm">
                  Submit Job Application Now
                </button>
              </form>
            )}

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
