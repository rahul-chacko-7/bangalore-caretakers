import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { BLOG_POSTS } from '../data/blogData';
import { BookOpen, Calendar, Clock, ChevronRight, UserCheck } from 'lucide-react';

export default function BlogListPage({ onOpenInquiry }) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Bangalore Caretakers Elder Care & Medical Guides",
    "description": "Expert senior living, home nursing, and dementia care guides for families in Bangalore.",
    "url": "https://bangalorecaretakers.in/blog"
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      <SEO 
        title="Senior Care Guides & Elder Living Articles Bangalore | Bangalore Caretakers Blog"
        description="Read expert guides on choosing old age homes in Bangalore, dementia care techniques, post-surgery home nursing checklists, and senior health tips."
        keywords={['elder care blog bangalore', 'old age home guides', 'dementia care tips', 'home nursing articles']}
        canonicalPath="/blog"
        schemaData={schemaData}
      />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-teal-900 via-slate-900 to-teal-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 bg-teal-800/60 text-teal-200 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-teal-600/30 mb-4">
            <BookOpen className="w-4 h-4" /> Elder Care Knowledge Hub
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Bangalore Senior Care & Medical Guides
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-base md:text-lg">
            Expert insights, medical care checklists, and practical guidance to help families make informed elder care decisions in Bangalore.
          </p>
        </div>
      </section>

      {/* Main Blog Cards Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-200/80 flex flex-col overflow-hidden">
              <div className="relative h-48 bg-slate-200 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 left-3 bg-teal-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                  {post.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-slate-500 gap-4 mb-3">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900 hover:text-teal-700 transition-colors mb-3 line-clamp-2">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                    <UserCheck className="w-3.5 h-3.5 text-teal-600" /> By Editorial Team
                  </span>
                  <Link 
                    to={`/blog/${post.slug}`} 
                    className="inline-flex items-center text-teal-700 font-bold text-sm hover:text-teal-800"
                  >
                    Read Guide <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-900 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Need Immediate Senior Care Assistance in Bangalore?</h2>
          <p className="text-teal-100 mb-6 text-sm md:text-base">
            Our medical care specialists are available 24/7 to guide you on home nursing, dementia caretakers, and luxury old age home admissions.
          </p>
          <button 
            onClick={onOpenInquiry}
            className="bg-amber-400 hover:bg-amber-500 text-slate-950 font-extrabold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
          >
            Speak to a Senior Care Consultant
          </button>
        </div>
      </section>
    </div>
  );
}
