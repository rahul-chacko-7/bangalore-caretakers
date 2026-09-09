import { Phone, Heart, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import { GENERAL_INFO } from '../data/keywordsData';

export default function DisabledCarePage({ onOpenInquiry }) {
  return (
    <>
      <SEO
        title="Home for Disabled & Mentally Challenged Rehabilitation in Bangalore"
        description="Compassionate residential care home for physically challenged, handicapped, and mentally disabled individuals in Bangalore. 24/7 care and rehabilitation."
        keywords={[
          "Home for Disabled in Bangalore",
          "Home for the Aged and Disabled in Bangalore",
          "Home for Physically Challenged",
          "Home for Disabled",
          "Handicapped Ashram in Bangalore",
          "Disabled Care Home",
          "Care Home for Physically Disabled",
          "Care Home for Physically Challenged",
          "Home for Disabled Person",
          "Home for Mentally Challenged in Bangalore",
          "Home for Mentally Retarded in Bangalore",
          "Home of Mentally Disabled in Bangalore",
          "Rehabilitation Centre in Bangalore",
          "Rehabilitation Care Centre for Schizophrenia in Bangalore",
          "Psychiatric Rehabilitation Care Centre in Bangalore"
        ]}
        canonicalPath="/home-for-disabled-and-rehabilitation"
      />

      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            Home for Disabled & <span className="text-teal-400">Rehabilitation Care</span> in Bangalore
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Dignified residential care and specialized rehabilitation centers for physically challenged, handicapped, and mentally disabled individuals. Safe, structured, and compassionate environment in Bangalore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpenInquiry} className="btn-primary py-4 px-6 font-bold">
              Inquire Admission & Facility Details
            </button>
            <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone py-4 px-6 font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call +91 77605 06666
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            Physically & Mentally Challenged Care Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Physically Challenged Care</h3>
              <p className="text-sm text-slate-600">Wheelchair accessible campus, mobility assistance, daily grooming, and physical rehabilitation therapies.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Mentally Challenged & Special Care</h3>
              <p className="text-sm text-slate-600">Safe, calm residential environment, specialized behavioral support, and 24/7 attendant monitoring.</p>
            </div>
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="font-bold text-lg text-slate-900 mb-2">Psychiatric & Schizophrenia Rehab</h3>
              <p className="text-sm text-slate-600">Doctor-monitored medication management, psychiatric rehabilitation, therapy, and family guidance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
