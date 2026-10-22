import { useState, useCallback, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingMobileBar from './components/FloatingMobileBar';

import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import PolicyPage from './pages/PolicyPage';

const OldAgeHomesPage = lazy(() => import('./pages/OldAgeHomesPage'));
const HomeNursingPage = lazy(() => import('./pages/HomeNursingPage'));
const DementiaCarePage = lazy(() => import('./pages/DementiaCarePage'));
const PalliativeCarePage = lazy(() => import('./pages/PalliativeCarePage'));
const AssistedLivingPage = lazy(() => import('./pages/AssistedLivingPage'));
const PostSurgeryCarePage = lazy(() => import('./pages/PostSurgeryCarePage'));
const SpecializedNursingPage = lazy(() => import('./pages/SpecializedNursingPage'));
const DisabledCarePage = lazy(() => import('./pages/DisabledCarePage'));
const JobsPage = lazy(() => import('./pages/JobsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NeighborhoodCarePage = lazy(() => import('./pages/NeighborhoodCarePage'));
const BlogListPage = lazy(() => import('./pages/BlogListPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('Old Age Home / Nursing Care');

  const handleOpenInquiry = useCallback((serviceName = 'Old Age Home / Nursing Care') => {
    setInquiryService(typeof serviceName === 'string' ? serviceName : 'Old Age Home / Nursing Care');
    setInquiryOpen(true);
  }, []);
  const closeInquiry = useCallback(() => setInquiryOpen(false), []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-20 xl:pb-0 overflow-x-hidden w-full max-w-full">
        
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] bg-white p-3">Skip to content</a>
        {/* Navigation */}
        <Header onOpenInquiry={handleOpenInquiry} />

        {/* Dynamic Route Viewports with Code Splitting */}
        <main id="main-content" className="flex-grow" tabIndex={-1}>
          <Suspense fallback={
            <div className="min-h-[50vh] flex items-center justify-center p-8">
              <div className="flex items-center gap-3 text-teal-800 font-bold text-sm bg-teal-50 border border-teal-200 px-6 py-3 rounded-2xl shadow-sm animate-pulse">
                <span>Loading Bangalore Caretakers...</span>
              </div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<HomePage onOpenInquiry={handleOpenInquiry} />} />
              <Route path="/old-age-homes-bangalore" element={<OldAgeHomesPage onOpenInquiry={() => handleOpenInquiry('Old Age Home Bangalore')} />} />
              <Route path="/home-nursing-services-bangalore" element={<HomeNursingPage onOpenInquiry={() => handleOpenInquiry('Home Nursing Services')} />} />
              <Route path="/dementia-alzheimers-care-bangalore" element={<DementiaCarePage onOpenInquiry={() => handleOpenInquiry('Dementia Care')} />} />
              <Route path="/palliative-cancer-care-bangalore" element={<PalliativeCarePage onOpenInquiry={() => handleOpenInquiry('Palliative Care')} />} />
              <Route path="/assisted-living-senior-care-bangalore" element={<AssistedLivingPage onOpenInquiry={() => handleOpenInquiry('Assisted Living')} />} />
              <Route path="/post-surgery-rehabilitation-care" element={<PostSurgeryCarePage onOpenInquiry={() => handleOpenInquiry('Post Surgery Care')} />} />
              <Route path="/specialized-nursing-care" element={<SpecializedNursingPage onOpenInquiry={() => handleOpenInquiry('Specialized Nursing')} />} />
              <Route path="/home-for-disabled-and-rehabilitation" element={<DisabledCarePage onOpenInquiry={() => handleOpenInquiry('Disabled Care')} />} />
              <Route path="/blog" element={<BlogListPage onOpenInquiry={() => handleOpenInquiry('Blog Inquiry')} />} />
              <Route path="/blog/:slug" element={<BlogPostPage onOpenInquiry={() => handleOpenInquiry('Blog Post Inquiry')} />} />
              <Route path="/caretaker-nursing-jobs-bangalore" element={<JobsPage />} />
              <Route path="/contact-us" element={<ContactPage onOpenInquiry={handleOpenInquiry} />} />
              
              {/* Geo-Targeted Micro-Location Neighborhood Routes */}
              <Route path="/elderly-care-indiranagar" element={<NeighborhoodCarePage localityKey="indiranagar" onOpenInquiry={() => handleOpenInquiry('Indiranagar Care')} />} />
              <Route path="/elderly-care-jayanagar" element={<NeighborhoodCarePage localityKey="jayanagar" onOpenInquiry={() => handleOpenInquiry('Jayanagar Care')} />} />
              <Route path="/elderly-care-whitefield" element={<NeighborhoodCarePage localityKey="whitefield" onOpenInquiry={() => handleOpenInquiry('Whitefield Care')} />} />
              <Route path="/elderly-care-electronic-city" element={<NeighborhoodCarePage localityKey="electronic-city" onOpenInquiry={() => handleOpenInquiry('Electronic City Care')} />} />
              <Route path="/elderly-care-yelahanka" element={<NeighborhoodCarePage localityKey="yelahanka" onOpenInquiry={() => handleOpenInquiry('Yelahanka Care')} />} />

              <Route path="/privacy-policy" element={<PolicyPage />} />
              <Route path="/terms-of-service" element={<PolicyPage terms />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>

        {/* Global Footer */}
        <Footer onOpenInquiry={handleOpenInquiry} />

        {/* Lead Capture Modal */}
        <LeadCaptureModal
          isOpen={inquiryOpen}
          onClose={closeInquiry}
          defaultService={inquiryService}
        />

        {/* Sticky Mobile Floating Contact Bar */}
        <FloatingMobileBar onOpenInquiry={handleOpenInquiry} />

      </div>
    </Router>
  );
}
