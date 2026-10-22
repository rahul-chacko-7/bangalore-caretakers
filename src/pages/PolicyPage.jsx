import SEO from '../components/SEO';
import { GENERAL_INFO } from '../data/keywordsData';
export default function PolicyPage({ terms = false }) {
  const title = terms ? 'Terms of Service' : 'Privacy Policy';
  return <article className="max-w-3xl mx-auto px-6 py-16 space-y-6 text-slate-700">
    <SEO title={`${title} | Bangalore Care Takers`} description={terms ? 'How to use the Bangalore Care Takers website and request care services.' : 'How website inquiry and application details are handed off to WhatsApp, and how to contact Bangalore Care Takers about privacy.'} />
    <h1 className="text-4xl font-bold text-slate-900">{title}</h1>
    {terms ? <>
      <h2 className="text-xl font-bold">Website information</h2><p>This website describes care services and lets you contact our team. Content is general information and does not replace an individual medical assessment or advice from your treating clinician.</p>
      <h2 className="text-xl font-bold">Inquiries and applications</h2><p>Forms prepare a WhatsApp message. You must send that message in WhatsApp to complete the handoff. Opening a chat does not confirm an admission, booking, employment offer or callback time.</p>
      <h2 className="text-xl font-bold">Care plans and availability</h2><p>Confirm staff availability, qualifications, facilities, fees, inclusions and any care arrangements directly with the team before making a decision. An individual service agreement governs any agreed care services.</p>
      <h2 className="text-xl font-bold">Urgent medical needs</h2><p>For a medical emergency, contact local emergency services or your treating hospital. Website forms and WhatsApp are not monitored emergency dispatch services.</p>
    </> : <>
      <h2 className="text-xl font-bold">Information you enter</h2><p>Inquiry forms ask for your name, phone number, requested care and locality. Job forms also ask for your preferred role and experience. Form values stay in the current page until you choose the WhatsApp handoff; these forms do not submit to a website application database.</p>
      <h2 className="text-xl font-bold">WhatsApp handoff</h2><p>When you continue, your entered details are included in a WhatsApp message link. WhatsApp is a third-party service and processes that link under its own privacy terms. You must send the message there for our team to receive it. Avoid entering medical records, identification documents or other sensitive details in these forms.</p>
      <h2 className="text-xl font-bold">Site operation and external links</h2><p>Your browser may cache public site files to make later visits faster. Hosting and external services may process technical request information. External links, including WhatsApp and Google reviews, are governed by those services' policies.</p>
      <h2 className="text-xl font-bold">Questions about your information</h2><p>Contact us to ask how details received by our team are used, or to request correction or deletion. Requirements relating to care records or other applicable obligations may affect a request.</p>
    </>}
    <h2 className="text-xl font-bold">Contact</h2><p>{GENERAL_INFO.address}</p><a className="block underline" href={`mailto:${GENERAL_INFO.email}`}>{GENERAL_INFO.email}</a><a className="block underline" href={`tel:${GENERAL_INFO.phoneRaw}`}>{GENERAL_INFO.phone}</a>
  </article>;
}
