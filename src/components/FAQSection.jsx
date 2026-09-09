import { HelpCircle } from 'lucide-react';

export default function FAQSection({ faqs, title = "Frequently Asked Questions" }) {
  if (!faqs || faqs.length === 0) return null;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" /> Got Questions?
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {title}
          </h2>
          <p className="text-sm text-slate-600">
            Clear answers for families seeking the best elderly care and home nursing services in Bangalore.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-white rounded-xl border border-slate-200 p-5 shadow-sm transition-all hover:border-teal-300 [&[open]]:border-teal-500 [&[open]]:ring-1 [&[open]]:ring-teal-500"
            >
              <summary className="flex items-center justify-between cursor-pointer font-bold text-slate-900 text-base sm:text-lg list-none select-none">
                <span>{faq.q}</span>
                <span className="text-teal-600 text-xl font-bold ml-4 group-open:rotate-180 transition-transform">
                  ↓
                </span>
              </summary>
              <div className="mt-3 pt-3 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}

