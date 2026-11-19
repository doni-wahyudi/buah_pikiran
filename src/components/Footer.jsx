import React from 'react';
import MascotIcon from './MascotIcon';
import ArrowIcon from './ArrowIcon';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ marginTop: '4rem', backgroundColor: '#FAF6F0', color: '#4A2511' }}>
      <div className="container-custom" style={{ padding: 0, maxWidth: '100%' }}>
        <div
          className="responsive-stack"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 1fr 1.05fr',
            minHeight: '210px'
          }}
        >
          {/* COLUMN 1 (Left): Drop us hello at + Standing Peach Mascot */}
          <div
            style={{
              backgroundColor: '#FAF6F0',
              padding: '2.25rem 2.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div>
              <div style={{ fontSize: '0.95rem', fontWeight: 500, color: '#4A2511', marginBottom: '2px' }}>
                Drop us hello at:
              </div>
              <a
                href="mailto:hello@buahpikiran.id"
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  textDecoration: 'none',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                hello@buahpikiran.id
              </a>
            </div>

            <div style={{ flexShrink: 0 }}>
              <MascotIcon type="footer" size={88} />
            </div>
          </div>

          {/* COLUMN 2 (Center): Yellow Block with Address & Outlined Social SVG Icons */}
          <div
            style={{
              backgroundColor: '#FFC700',
              padding: '2.25rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <div
              style={{
                fontSize: '0.95rem',
                fontWeight: 800,
                color: '#4A2511',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              buahpikiran.id
            </div>

            <p
              style={{
                fontSize: '0.78rem',
                lineHeight: 1.45,
                fontWeight: 500,
                color: '#4A2511',
                marginBottom: '1.1rem'
              }}
            >
              Menara Sentraya Lt-10 Unit A6<br />
              Jl. Iskandarsyah Raya No. 1A Melawai,<br />
              Kebayoran Baru, Jakarta Selatan
            </p>

            {/* 3 Outlined Rounded-Square Social Icons: Instagram, LinkedIn, TikTok */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {/* Instagram */}
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '7px',
                  border: '1.8px solid #4A2511',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A2511',
                  textDecoration: 'none'
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#linkedin"
                onClick={(e) => e.preventDefault()}
                aria-label="LinkedIn"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '7px',
                  border: '1.8px solid #4A2511',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A2511',
                  textDecoration: 'none',
                  fontWeight: 800,
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-sans)'
                }}
              >
                in
              </a>

              {/* TikTok */}
              <a
                href="#tiktok"
                onClick={(e) => e.preventDefault()}
                aria-label="TikTok"
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '7px',
                  border: '1.8px solid #4A2511',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4A2511',
                  textDecoration: 'none'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 3 (Right): Sitemap Links, Copyright & Yellow Up Arrow Button */}
          <div
            style={{
              backgroundColor: '#FAF6F0',
              padding: '2.25rem 2.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
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
                    fontWeight: 600,
                    fontSize: '0.76rem',
                    letterSpacing: '0.03em',
                    color: '#4A2511',
                    cursor: 'pointer'
                  }}
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginTop: '1.25rem' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 500, color: '#4A2511' }}>
                (c) 2026 Buah Pikiran. All rights reserved.
              </div>

              <button
                onClick={scrollToTop}
                title="Scroll to top"
                aria-label="Scroll to top"
                className="arrow-circle-btn arrow-circle-btn-up"
              >
                <ArrowIcon direction="up" size={20} strokeWidth={3.4} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
