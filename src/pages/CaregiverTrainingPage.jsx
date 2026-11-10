import { Link } from 'react-router-dom';
import { Phone, GraduationCap, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';
import FAQSection from '../components/FAQSection';
import { GENERAL_INFO } from '../data/keywordsData';

// Syllabus as published on the original bangalorecaretakers.in training page.
const MODULES = [
  { title: 'Daily living support', items: ['Help with activities of daily living', 'Bathing and assisted bathing', 'Changing clothes, continence aids and soiled sheets', 'Brushing teeth and cleaning dentures', 'Toileting and other elimination needs', 'Light housekeeping'] },
  { title: 'Safety and moving patients', items: ['Preventing falls', 'Preventing pressure sores', 'Lifting, transferring and positioning', 'Safe walking and mobility support'] },
  { title: 'Feeding and medicines', items: ['Proper feeding techniques', 'Assisting with oral and tube feeding', 'Medicine reminders and checking medicines are taken', 'Simple wound dressing under the guidance of registered nurses'] },
  { title: 'Activities for memory and wellbeing', items: ['Memory-based and logic-based card games', 'Spatial orientation block games', 'Visual recognition and card-matching games', 'Mental processing activities for seniors with dementia'] }
];

const FAQS = [
  { q: 'Who can join the caregiver training?', a: 'Men and women who want to work as caregivers, care takers or bedside assistants for elderly and bedridden people.' },
  { q: 'Is the training theory or practical?', a: 'Both. Trainees learn the theory and practise it at Bangalore Care Takers, which runs a residential care home in Kothanur.' },
  { q: 'How long is the course and what does it cost?', a: 'Call +91 77605 06666 to confirm the current batch dates, duration and fees.' },
  { q: 'Can trained caregivers apply for jobs with you?', a: 'Yes. Trained caregivers can apply through our care taker and nursing jobs page; openings depend on current requirements.' },
  { q: 'Can family members take the training to care for a parent at home?', a: 'Families can call to ask whether a session can be arranged for home caregivers.' }
];

export default function CaregiverTrainingPage() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: 'Caregiver and care taker training in Bangalore',
    description: 'Practical caregiver training covering daily living support, fall and pressure-sore prevention, safe transfers, feeding, medicine reminders and activities for seniors with dementia.',
    provider: { '@type': 'Organization', '@id': 'https://bangalorecaretakers.in/#business', name: 'Bangalore Care Takers' },
    inLanguage: 'en-IN'
  };
  return (
    <>
      <SEO
        title="Caregiver Training Centre in Bangalore | Bangalore Care Takers"
        description="Practical caregiver and care taker training in Bangalore: daily living support, fall prevention, safe transfers, feeding, medicine reminders and dementia activities."
        keywords={['Caregiver Training in Bangalore', 'Care Taker Training Bangalore', 'Bedside Assistant Training', 'Elderly Care Training Bangalore']}
        canonicalPath="/care-giver-training-center-in-bangalore"
        schemaData={schema}
      />
      <section className="bg-gradient-to-r from-brand-blue to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 text-teal-300 text-xs font-semibold">
            <GraduationCap className="w-4 h-4" aria-hidden="true" /> For men and women
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">Caregiver Training Centre in Bangalore</h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-3xl leading-relaxed">
            Bangalore Care Takers trains caregivers, care takers and bedside assistants in the theory and practice of caring for elderly and bedridden people, at our residential care home in Kothanur.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a href={`tel:${GENERAL_INFO.phoneRaw}`} className="btn-phone py-4 px-6 font-bold flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" aria-hidden="true" /> Call +91 77605 06666 for batch details
            </a>
            <Link to="/caretaker-nursing-jobs-bangalore" className="btn-primary py-4 px-6 font-bold text-center">See care taker jobs</Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">What the training covers</h2>
            <p className="text-slate-600 leading-relaxed">Trainees learn the everyday skills families and care homes expect from a caregiver, with practice in a working care setting.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MODULES.map(module => (
              <div key={module.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="font-bold text-lg text-slate-900">{module.title}</h3>
                <ul className="space-y-2">
                  {module.items.map(item => (
                    <li key={item} className="flex gap-2 text-sm text-slate-700"><CheckCircle className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" aria-hidden="true" />{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">Who it is for</h2>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="border-l-2 border-teal-500 pl-3">People starting a career as a caregiver or bedside assistant</li>
                <li className="border-l-2 border-teal-500 pl-3">Care takers who want structured training in safe patient handling</li>
                <li className="border-l-2 border-teal-500 pl-3">Those planning to work with seniors who have dementia or are bedridden</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">How to join</h2>
              <ol className="space-y-2 text-sm text-slate-700 list-decimal pl-5">
                <li>Call or WhatsApp +91 77605 06666.</li>
                <li>Confirm the next batch dates, duration and fees.</li>
                <li>Visit the training centre at #206, BCT Nagar, Athmavidyanagar Layout, Kothanur, Bangalore 560077.</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <FAQSection faqs={FAQS} title="Caregiver Training - FAQ" />
    </>
  );
}
