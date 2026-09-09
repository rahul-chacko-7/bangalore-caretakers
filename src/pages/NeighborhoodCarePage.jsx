import { Link, useParams } from 'react-router-dom';
import { Phone, MapPin, ShieldCheck, Heart, Stethoscope, Star, CheckCircle, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';
import TrustBadges from '../components/TrustBadges';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

const NEIGHBORHOOD_DATA = {
  "indiranagar": {
    name: "Indiranagar",
    title: "Best Old Age Homes & Home Nursing Services in Indiranagar Bangalore",
    metaDesc: "Top-rated 24/7 Old Age Homes and Home Nursing Care in Indiranagar, East Bangalore. Certified male & female nurses, dementia care, and doctor availability.",
    h1: "24/7 Senior & Home Nursing Care Services in Indiranagar",
    landmark: "Serving Indiranagar 100 Feet Road, CMH Road, HAL 2nd Stage, and Defence Colony."
  },
  "jayanagar": {
    name: "Jayanagar",
    title: "Old Age Homes & 24/7 Home Nursing Services in Jayanagar Bangalore",
    metaDesc: "Compassionate Elderly Care, Old Age Homes with medical care, and trained Home Caretakers in Jayanagar, South Bangalore. Rated 4.9★.",
    h1: "Trusted Senior Living & Home Caretakers in Jayanagar",
    landmark: "Serving Jayanagar 3rd Block, 4th Block, 9th Block, JP Nagar, and Banashankari."
  },
  "whitefield": {
    name: "Whitefield",
    title: "Best Old Age Homes & Nursing Services in Whitefield Bangalore",
    metaDesc: "24/7 Assisted Living, Old Age Homes with doctor support, and Home Nursing Care in Whitefield, ITPL, and Hope Farm Bangalore.",
    h1: "24/7 Elderly Care & Home Nursing in Whitefield",
    landmark: "Serving Whitefield Main Road, ITPL, Marathahalli, Varthur, and Hoodi."
  },
  "electronic-city": {
    name: "Electronic City",
    title: "Old Age Homes & Home Nursing Care in Electronic City Bangalore",
    metaDesc: "Affordable & Premium Senior Living, Old Age Homes, Dementia Care, and Home Nurses in Electronic City Phase 1 & Phase 2.",
    h1: "Senior Living & Home Nursing Services in Electronic City",
    landmark: "Serving Electronic City Phase 1, Phase 2, Singasandra, and Bommasandra."
  },
  "yelahanka": {
    name: "Yelahanka",
    title: "Best Old Age Homes & Elderly Care Services in Yelahanka Bangalore",
    metaDesc: "Peaceful residential Old Age Homes with 24/7 medical care, bedridden patient nursing, and palliative care in Yelahanka, North Bangalore.",
    h1: "Doctor-Supervised Senior Care in Yelahanka",
    landmark: "Serving Yelahanka New Town, Hebbal, Sahakarnagar, and Kogilu."
  }
};

export default function NeighborhoodCarePage({ localityKey, onOpenInquiry }) {
  const data = NEIGHBORHOOD_DATA[localityKey] || NEIGHBORHOOD_DATA["indiranagar"];

  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": `Bangalore Caretakers - ${data.name}`,
    "description": data.metaDesc,
    "telephone": "+917760506666",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": data.name,
      "addressRegion": "Bangalore",
      "addressCountry": "IN"
    }
  };

  const neighborhoodFaqs = [
    {
      q: `How quickly can a home nurse or caretaker reach my location in ${data.name}?`,
      a: `We deploy background-verified male and female home nurses to any home address in ${data.name} within 2 to 4 hours of your booking request.`
    },
    {
      q: `Are your Old Age Homes near ${data.name} equipped with doctor facilities?`,
      a: `Yes, our partner senior care centers near ${data.name} feature daily physician visits, 24/7 on-duty nurses, oxygen support, and hospital tie-ups for emergency admission.`
    }
  ];

  return (
    <>
      <SEO
        title={data.title}
        description={data.metaDesc}
        keywords={[
          `Old Age Homes in ${data.name} Bangalore`,
          `Home Nursing Services in ${data.name}`,
          `Best Old Age Home ${data.name}`,
          `Female Nurse for Home Care ${data.name}`,
          `Caretaker in ${data.name} Bangalore`
        ]}
        canonicalPath={`/elderly-care-${localityKey}`}
        schemaData={schema}
      />

      <section className="bg-gradient-to-r from-brand-blue via-slate-900 to-teal-950 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold">
            <MapPin className="w-4 h-4 text-teal-400" /> Serving {data.name} & Surrounding Suburbs
          </div>

          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
            {data.h1}
          </h1>

          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Searching for reliable <strong className="text-white">Old Age Homes in {data.name}</strong> or professional <strong className="text-white">Home Nursing Services</strong>? Bangalore Caretakers delivers 24/7 medical supervision, background-checked caretakers, and peaceful senior living.
          </p>

          <p className="text-xs text-amber-300 font-medium">📍 {data.landmark}</p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button onClick={onOpenInquiry} className="btn-primary py-4 px-6 font-bold">
              Book Care in {data.name}
            </button>
            <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone py-4 px-6 font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Hotline (+91 77605 06666)
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h2 className="text-3xl font-extrabold text-slate-900 text-center">
            24/7 Healthcare & Senior Care Available in {data.name}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Old Age Homes with Medical Care</h3>
              <p className="text-sm text-slate-600">Peaceful residential centers near {data.name} equipped with doctor visits, 24/7 nursing, and nutritious meals.</p>
              <Link to="/old-age-homes-bangalore" className="text-xs font-bold text-teal-700 block pt-2">Learn More →</Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">12h / 24h Home Nurses & Caretakers</h3>
              <p className="text-sm text-slate-600">Male & female nurses for bedridden, post-surgery, catheter, and tracheostomy care delivered at your doorstep in {data.name}.</p>
              <Link to="/home-nursing-services-bangalore" className="text-xs font-bold text-teal-700 block pt-2">Learn More →</Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-lg text-slate-900">Dementia & Palliative Care</h3>
              <p className="text-sm text-slate-600">Memory care and end-of-life palliative symptom management supervised by geriatric specialists.</p>
              <Link to="/dementia-alzheimers-care-bangalore" className="text-xs font-bold text-teal-700 block pt-2">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={neighborhoodFaqs} title={`Care Services in ${data.name} - FAQ`} />
    </>
  );
}
