import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';
import ArticlesPage from './pages/ArticlesPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [queryParams, setQueryParams] = useState({});

  const handleNavigate = (page, params = {}) => {
    setCurrentPage(page);
    setQueryParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#FAFAFB' }}>
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      <main style={{ flex: 1 }}>
        {currentPage === 'home' && (
          <HomePage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'about' && (
          <AboutPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'works' && (
          <WorksPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'case-study' && (
          <CaseStudyDetailPage
            onNavigate={handleNavigate}
            projectId={queryParams.id || 'femmy-fyber'}
          />
        )}
        {currentPage === 'articles' && (
          <ArticlesPage
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'contact' && (
          <ContactPage
            onNavigate={handleNavigate}
            queryParams={queryParams}
          />
        )}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
