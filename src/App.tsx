import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Audit from './pages/Audit';
import About from './pages/About';
import FAQs from './pages/FAQs';
import Contact from './pages/Contact';
import VacasaAlternative from './pages/VacasaAlternative';
import EvolveAlternative from './pages/EvolveAlternative';
import CasagoAlternative from './pages/CasagoAlternative';
import TampaAudit from './pages/owners/TampaAudit';
import TampaAuditThanks from './pages/owners/TampaAuditThanks';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

// Handle scroll and GSAP refresh on route change
function RouteHandler() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Refresh ScrollTrigger on route change
    ScrollTrigger.refresh();
    
    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, [location.pathname]);

  return null;
}

const TAMPA_AUDIT_PATHS = ['/owners/tampa-audit', '/owners/tampa-audit/thanks'];

function AppLayout() {
  const location = useLocation();
  const hideNavFooter = TAMPA_AUDIT_PATHS.some((p) => location.pathname === p || location.pathname.startsWith(p + '/'));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {!hideNavFooter && <Navigation />}
      <main className="flex-1">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/audit" element={<Audit />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog/vacasa-alternative-in-tampa-bay" element={<VacasaAlternative />} />
            <Route path="/blog/evolve-alternative-in-tampa-bay" element={<EvolveAlternative />} />
            <Route path="/blog/casago-alternative-in-tampa-bay" element={<CasagoAlternative />} />
            <Route path="/owners/tampa-audit" element={<TampaAudit />} />
            <Route path="/owners/tampa-audit/thanks" element={<TampaAuditThanks />} />
          </Routes>
        </main>
      {!hideNavFooter && <Footer />}
      </div>
  );
}

function App() {
  return (
    <Router>
      <RouteHandler />
      <AppLayout />
    </Router>
  );
}

export default App;
