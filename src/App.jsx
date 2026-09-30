import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation.jsx';
import Footer from './components/Footer/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Practice from './pages/Practice.jsx';
import PracticeDetail from './pages/PracticeDetail.jsx';
import Briefings from './pages/Briefings.jsx';
import Institutions from './pages/Institutions.jsx';
import InstitutionDetail from './pages/InstitutionDetail.jsx';
import ContactPage from './pages/ContactPage.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Navigation />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/practice/:slug" element={<PracticeDetail />} />
          <Route path="/briefings" element={<Briefings />} />
          <Route path="/institutions" element={<Institutions />} />
          <Route path="/institutions/:slug" element={<InstitutionDetail />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
