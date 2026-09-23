import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import LeadCaptureModal from './components/LeadCaptureModal';
import FloatingMobileBar from './components/FloatingMobileBar';

import HomePage from './pages/HomePage';
import OldAgeHomesPage from './pages/OldAgeHomesPage';
import HomeNursingPage from './pages/HomeNursingPage';
import DementiaCarePage from './pages/DementiaCarePage';
import PalliativeCarePage from './pages/PalliativeCarePage';
import AssistedLivingPage from './pages/AssistedLivingPage';
import PostSurgeryCarePage from './pages/PostSurgeryCarePage';
import SpecializedNursingPage from './pages/SpecializedNursingPage';
import DisabledCarePage from './pages/DisabledCarePage';
import JobsPage from './pages/JobsPage';
import ContactPage from './pages/ContactPage';
import NeighborhoodCarePage from './pages/NeighborhoodCarePage';
import BlogListPage from './pages/BlogListPage';
import BlogPostPage from './pages/BlogPostPage';

export default function App() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryService, setInquiryService] = useState('Old Age Home / Nursing Care');

  const handleOpenInquiry = (serviceName = 'Old Age Home / Nursing Care') => {
    setInquiryService(serviceName);
    setInquiryOpen(true);
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-teal-500 selection:text-white pb-14 lg:pb-0 overflow-x-hidden w-full max-w-full">
        
        {/* Navigation */}
        <Header onOpenInquiry={() => handleOpenInquiry()} />

        {/* Dynamic Route Viewports */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenInquiry={() => handleOpenInquiry()} />} />
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
            <Route path="/contact-us" element={<ContactPage onOpenInquiry={() => handleOpenInquiry()} />} />
            
            {/* Geo-Targeted Micro-Location Neighborhood Routes */}
            <Route path="/elderly-care-indiranagar" element={<NeighborhoodCarePage localityKey="indiranagar" onOpenInquiry={() => handleOpenInquiry('Indiranagar Care')} />} />
            <Route path="/elderly-care-jayanagar" element={<NeighborhoodCarePage localityKey="jayanagar" onOpenInquiry={() => handleOpenInquiry('Jayanagar Care')} />} />
            <Route path="/elderly-care-whitefield" element={<NeighborhoodCarePage localityKey="whitefield" onOpenInquiry={() => handleOpenInquiry('Whitefield Care')} />} />
            <Route path="/elderly-care-electronic-city" element={<NeighborhoodCarePage localityKey="electronic-city" onOpenInquiry={() => handleOpenInquiry('Electronic City Care')} />} />
            <Route path="/elderly-care-yelahanka" element={<NeighborhoodCarePage localityKey="yelahanka" onOpenInquiry={() => handleOpenInquiry('Yelahanka Care')} />} />

            <Route path="*" element={<HomePage onOpenInquiry={() => handleOpenInquiry()} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenInquiry={() => handleOpenInquiry()} />

        {/* Lead Capture Modal */}
        <LeadCaptureModal
          isOpen={inquiryOpen}
          onClose={() => setInquiryOpen(false)}
          defaultService={inquiryService}
        />

        {/* Sticky Mobile Floating Contact Bar */}
        <FloatingMobileBar onOpenInquiry={() => handleOpenInquiry()} />

      </div>
    </Router>
  );
}
