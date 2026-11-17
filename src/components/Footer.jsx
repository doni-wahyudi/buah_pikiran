import React from 'react';
import MascotIcon from './MascotIcon';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ marginTop: '5rem', backgroundColor: '#FAFAFA' }}>
      {/* Top Banner Prompt */}
      <div className="container-custom" style={{ paddingBottom: '2.5rem' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            padding: '2rem 2.5rem',
            backgroundColor: '#FFFFFF',
            border: '1.5px dashed #D1D5DB',
            borderRadius: '20px'
          }}
        >
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#4B5563', marginBottom: '4px' }}>
              Drop us hello at:
            </div>
            <a
              href="mailto:hello@buahpikiran.id"
              style={{
                fontSize: '1.8rem',
                fontWeight: 900,
                color: '#111827',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                transition: 'color 0.15s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#FF4D6D')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#111827')}
            >
              hello@buahpikiran.id
            </a>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <MascotIcon type="hero" size={72} />
          </div>
        </div>
      </div>

      {/* Main Yellow Agency Card */}
      <div style={{ backgroundColor: '#FFC800', padding: '3.5rem 0 2.5rem 0', color: '#1F2937' }}>
        <div className="container-custom">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2.5rem',
              alignItems: 'start'
            }}
          >
            {/* Column 1: Info & Address */}
            <div>
              <div style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
                buahpikiran.id
              </div>
              <p style={{ fontSize: '0.88rem', lineHeight: 1.6, fontWeight: 500, color: '#27272A', maxWidth: '320px', marginBottom: '1.25rem' }}>
                Menara Sentraya Lt-10 Unit A6<br />
                Jl. Iskandarsyah Raya No. 1A Melawai,<br />
                Kebayoran Baru, Jakarta Selatan
              </p>

              {/* Social links */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {['Instagram (IG)', 'LinkedIn (In)', 'TikTok (TT)'].map((social, i) => (
                  <span
                    key={i}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'rgba(255, 255, 255, 0.45)',
                      borderRadius: '8px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>

            {/* Column 2: Sitemap & Back to Top */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-between', height: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '1.5rem' }}>
                {[
                  { id: 'home', label: 'HOMEPAGE' },
                  { id: 'about', label: 'ABOUT' },
                  { id: 'works', label: 'OUR WORKS' },
                  { id: 'contact', label: 'CONTACT' }
                ].map((link) => (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      textAlign: 'left',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      letterSpacing: '0.05em',
                      color: '#18181B',
                      cursor: 'pointer'
                    }}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#3F3F46' }}>
                  (c) 2026 Buah Pikiran. All rights reserved.
                </div>

                <button
                  onClick={scrollToTop}
                  title="Scroll to top"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#18181B',
                    color: '#FFFFFF',
                    border: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
                  }}
                >
                  ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
