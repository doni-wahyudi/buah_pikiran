import React, { useState } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';

export default function WorksPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Demand', 'Discovery', 'KOL', 'Branding', 'SEO', 'Website', 'Social Media'];

  const caseStudies = [
    {
      id: 'femmy-fyber',
      name: 'FEMMY FYBER',
      tag: 'KOL',
      pillar: 'Demand',
      year: '2026',
      desc: 'Influencer ecosystem & high-impact awareness launch.'
    },
    {
      id: 'komix',
      name: 'KOMIX',
      tag: 'Branding',
      pillar: 'Discovery',
      year: '2026',
      desc: 'National brand repositioning and modern youth relevance.'
    },
    {
      id: 'flyjaya',
      name: 'FLYJAYA',
      tag: 'SEO',
      pillar: 'Demand',
      year: '2026',
      desc: 'Search dominance for direct flight bookings & airline routes.'
    },
    {
      id: 'physiogel',
      name: 'PHYSIOGEL',
      tag: 'Social Media',
      pillar: 'Discovery',
      year: '2026',
      desc: 'Dermatological storytelling and community advocacy.'
    },
    {
      id: 'lampag',
      name: 'LAMPAG',
      tag: 'Website',
      pillar: 'Demand',
      year: '2026',
      desc: 'B2B enterprise architectural website for Member of Alu Group.'
    }
  ];

  const filtered = activeFilter === 'All'
    ? caseStudies
    : caseStudies.filter(
        c => c.tag.toLowerCase() === activeFilter.toLowerCase() || c.pillar.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-custom">
        
        {/* Header & Statement (Peach/Pink Rounded Box) */}
        <div
          style={{
            backgroundColor: '#FFF2F4', // Peach/pink rounded container
            borderRadius: '32px',
            border: '1.5px solid #FFD3D9',
            padding: '3.5rem 3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3rem'
          }}
        >
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.03em', lineHeight: 1.1 }}>
              The problem<br />we <span style={{ fontSize: '2.8rem' }}>🍑</span> solved
            </h1>
          </div>

          <div>
            <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: 1.6, fontWeight: 500 }}>
              Clients globally come to us with either one of these problems: <strong>Demand</strong> or <strong>Discovery</strong>. We drive search demand or discovery for brands with ambitions to be category leaders.
            </p>
          </div>
        </div>

        {/* Filter bar */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '1rem', marginBottom: '2.5rem' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 700,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                backgroundColor: activeFilter === cat ? '#FFC000' : '#FFFFFF',
                color: activeFilter === cat ? '#111827' : '#374151',
                border: activeFilter === cat ? '2px solid #EAB308' : '1px solid #E5E7EB',
                boxShadow: activeFilter === cat ? '0 4px 10px rgba(255, 192, 0, 0.3)' : 'none',
                transition: 'all 0.15s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {filtered.map((study) => (
            <div
              key={study.id}
              onClick={() => onNavigate('case-study', { id: study.id })}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '24px',
                border: '1.5px solid #E5E7EB',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.25s ease',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF5E7E';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 12px 24px -6px rgba(255, 94, 126, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.03)';
              }}
            >
              <div style={{ position: 'relative' }}>
                <WireframePlaceholder height="260px" label={`Project Visual: ${study.name}`} />
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                  <span
                    style={{
                      backgroundColor: '#FF4D6D',
                      color: '#FFFFFF',
                      fontSize: '0.78rem',
                      fontWeight: 800,
                      padding: '5px 14px',
                      borderRadius: '9999px',
                      boxShadow: '0 2px 6px rgba(255, 77, 109, 0.4)'
                    }}
                  >
                    {study.tag}
                  </span>
                </div>
              </div>

              <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827', marginBottom: '4px' }}>
                    {study.name}
                  </h3>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>
                    {study.year} • {study.pillar}
                  </div>
                </div>

                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    color: '#111827',
                    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.25)'
                  }}
                >
                  →
                </div>
              </div>
            </div>
          ))}

          {/* Wireframe Pink Rounded Boxes (as explicitly shown in Page 4) */}
          <div style={{ minHeight: '340px' }}>
            <div
              style={{
                height: '100%',
                backgroundColor: '#FF5E7E', // Hot pink rounded box
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(255, 94, 126, 0.2)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🖼️</div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Upcoming Project Slot</span>
            </div>
          </div>

          <div style={{ minHeight: '340px' }}>
            <div
              style={{
                height: '100%',
                backgroundColor: '#FF5E7E',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(255, 94, 126, 0.2)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🖼️</div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Upcoming Project Slot</span>
            </div>
          </div>

          <div style={{ minHeight: '340px' }}>
            <div
              style={{
                height: '100%',
                backgroundColor: '#FF5E7E',
                borderRadius: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 8px 20px rgba(255, 94, 126, 0.2)'
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🖼️</div>
              <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>Upcoming Project Slot</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
