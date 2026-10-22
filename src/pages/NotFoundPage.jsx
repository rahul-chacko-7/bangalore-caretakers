import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
export default function NotFoundPage() {
  return <section className="max-w-3xl mx-auto px-6 py-20 space-y-6"><SEO title="Page not found | Bangalore Care Takers" description="This page could not be found. Browse care services or contact Bangalore Care Takers." noindex /><h1 className="text-4xl font-bold">Page not found</h1><p>The address may have changed. Browse our care services or contact the team for help.</p><Link to="/" className="btn-primary">Go to homepage</Link><Link to="/contact-us" className="block underline">Contact us</Link></section>;
}
