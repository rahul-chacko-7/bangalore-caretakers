import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogData';
import { Calendar, Clock, User, ArrowLeft, PhoneCall, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function BlogPostPage({ onOpenInquiry }) {
  const { slug } = useParams();
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://bangalorecaretakers.in${post.image}`,
    "author": {
      "@type": "Organization",
      "name": "Bangalore Caretakers Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Bangalore Caretakers",
      "url": "https://bangalorecaretakers.in"
    },
    "datePublished": "2026-09-15",
    "mainEntityOfPage": `https://bangalorecaretakers.in/blog/${post.slug}`
  };

  const faqSchema = post.faq && post.faq.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faq.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  } : null;

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title={`${post.metaTitle} | Bangalore Caretakers`}
        description={post.metaDescription}
        keywords={post.keywords}
        canonicalPath={`/blog/${post.slug}`}
        schemaData={[articleSchema, faqSchema].filter(Boolean)}
      />

      {/* Article Header */}
      <header className="bg-slate-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-teal-400 text-sm font-semibold mb-6 hover:underline">
            <ArrowLeft className="w-4 h-4 mr-1" /> Back to Senior Care Guides
          </Link>
          <span className="block bg-teal-800/80 text-teal-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit mb-4">
            {post.category}
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white mb-4 leading-snug">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-300 text-xs md:text-sm pt-4 border-t border-slate-800">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4 text-teal-400" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-teal-400" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-teal-400" /> {post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-sm border border-slate-200/80 mb-10">
          <div className="rounded-xl overflow-hidden mb-8 max-h-[400px]">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          {/* Article HTML Content */}
          <div 
            className="prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-p:text-slate-700 prose-p:leading-relaxed prose-li:text-slate-700 prose-a:text-teal-700 hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* FAQs section if available */}
          {post.faq && post.faq.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {post.faq.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                    <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                      {item.question}
                    </h4>
                    <p className="text-slate-600 text-sm pl-7">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Floating Helpline Banner */}
        <div className="bg-gradient-to-r from-teal-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-300 mb-2">
              <ShieldCheck className="w-4 h-4" /> Trusted Elder Care Specialists
            </span>
            <h3 className="text-xl font-bold text-white mb-1">Need Elder Care Assistance in Bangalore?</h3>
            <p className="text-slate-300 text-sm">Speak with our registered nursing supervisor for immediate consultation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button 
              onClick={onOpenInquiry}
              className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-6 py-3 rounded-xl shadow text-center text-sm whitespace-nowrap"
            >
              Request Free Consultation
            </button>
            <a 
              href="tel:+918047485555"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl border border-white/20 flex items-center justify-center gap-2 text-sm whitespace-nowrap"
            >
              <PhoneCall className="w-4 h-4 text-teal-300" /> Call 080 4748 5555
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
