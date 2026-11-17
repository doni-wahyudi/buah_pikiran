import React, { useState, useEffect } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';

export default function CaseStudyDetailPage({ onNavigate, projectId = 'femmy-fyber' }) {
  const [counts, setCounts] = useState({
    traffic: 0,
    keywords: 0,
    clicks: 0,
    buyers: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCounts(prev => ({
        traffic: prev.traffic < 155 ? Math.min(155, prev.traffic + 5) : 155,
        keywords: prev.keywords < 1.9 ? +(prev.keywords + 0.1).toFixed(1) : 1.9,
        clicks: prev.clicks < 235 ? Math.min(235, prev.clicks + 8) : 235,
        buyers: prev.buyers < 140 ? Math.min(140, prev.buyers + 5) : 140
      }));
    }, 35);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-custom">
        
        {/* Back Link */}
        <div style={{ marginBottom: '2.5rem' }}>
          <button
            onClick={() => onNavigate('works')}
            className="wireframe-btn-peach"
            style={{ padding: '10px 24px', fontSize: '0.95rem' }}
          >
            ← Back to our works
          </button>
        </div>

        {/* Hero Banner + Project Metadata */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'start', marginBottom: '4rem' }}>
          {/* Main Visual Placeholder */}
          <div>
            <WireframePlaceholder
              height="360px"
              label="Primary Campaign Visual: FEMMY FYBER Launch"
            />
          </div>

          {/* Project Details */}
          <div>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
              <span style={{ backgroundColor: '#FF4D6D', color: '#FFFFFF', padding: '5px 14px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 800 }}>
                KOL
              </span>
              <span style={{ backgroundColor: '#F3F4F6', color: '#4B5563', padding: '5px 14px', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 800 }}>
                2026
              </span>
            </div>

            <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
              FEMMY FYBER
            </h1>

            <div style={{ backgroundColor: '#FFF2F4', borderLeft: '4px solid #FF4D6D', padding: '1.5rem', borderRadius: '0 20px 20px 0' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 800, color: '#991B1B', textTransform: 'uppercase', marginBottom: '6px' }}>
                Project info
              </div>
              <p style={{ fontSize: '0.95rem', color: '#4B5563', lineHeight: 1.6 }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>

        {/* Narrative: Objective & The Challenge */}
        <div style={{ maxWidth: '880px', marginBottom: '4rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FF4D6D', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              Objective
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', lineHeight: 1.3 }}>
              Launching Dojo in B2B UK market to half a bill £ revenue business in 5 years
            </h2>
          </div>

          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FF4D6D', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.5rem' }}>
              The challenge
            </div>
            <p style={{ fontSize: '1.05rem', color: '#4B5563', lineHeight: 1.7 }}>
              Dojo was a new start up brand that came out of our client Paymentsense. They appointed us to help drive organic non brand growth, through industry leading SEO and Digital PR. As a brand new domain, we had to build a lot of trust and authority fast. In the initial launch period, Dojo was a new card machine provider for small b2b businesses, and brand traffic accounted for 70% of clicks. In order to save money on PPC and drive non-brand traffic, we built a plan to grow them to own the card machine category organically.
            </p>
          </div>
        </div>

        {/* Section: Animated Rolling Numbers (Peach/Pink Rounded Cards) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            <div style={{ backgroundColor: '#FFF2F4', border: '1.5px solid #FFD3D9', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#FF4D6D', fontFamily: 'monospace' }}>
                {counts.traffic}%
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B5563', marginTop: '6px' }}>
                Increase in monthly brand traffic
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF2F4', border: '1.5px solid #FFD3D9', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#FF4D6D', fontFamily: 'monospace' }}>
                {counts.keywords}K
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B5563', marginTop: '6px' }}>
                Keywords pos 1-3
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF2F4', border: '1.5px solid #FFD3D9', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#FF4D6D', fontFamily: 'monospace' }}>
                {counts.clicks}+
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B5563', marginTop: '6px' }}>
                Link clicks directly into sales
              </div>
            </div>

            <div style={{ backgroundColor: '#FFF2F4', border: '1.5px solid #FFD3D9', borderRadius: '24px', padding: '2rem 1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 900, color: '#FF4D6D', fontFamily: 'monospace' }}>
                {counts.buyers}K
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#4B5563', marginTop: '6px' }}>
                Increase buyer in the marketplace in a month
              </div>
            </div>
          </div>
        </section>

        {/* Section: What we did? & Gallery Grid (Hot pink rounded boxes) */}
        <section style={{ marginBottom: '5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 2.5rem auto' }}>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, color: '#FF4D6D', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              What we did?
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', lineHeight: 1.35 }}>
              The Rise team on London streets showing just how much prescence Dojo now has on the highstreet
            </h2>
          </div>

          {/* Gallery Wireframe Slots in Hot Pink Rounded Boxes as in document */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  height: '240px',
                  backgroundColor: '#FF5E7E', // Hot pink rounded box
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  padding: '1.5rem',
                  boxShadow: '0 8px 16px rgba(255, 94, 126, 0.2)'
                }}
              >
                <div style={{ fontSize: '2rem', marginBottom: '6px' }}>🖼️</div>
                <span style={{ fontWeight: 800, fontSize: '0.95rem' }}>Gallery Asset #{i}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section: You may also like */}
        <section style={{ borderTop: '1px solid #E5E7EB', paddingTop: '4rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            You may also like
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {/* Related 1: KOMIX */}
            <div
              onClick={() => onNavigate('case-study', { id: 'komix' })}
              style={{
                borderRadius: '24px',
                border: '1.5px solid #E5E7EB',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: '#FFFFFF'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF4D6D')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <WireframePlaceholder height="200px" label="KOMIX Packaging & Campaign" />
              <div style={{ padding: '1.25rem' }}>
                <span style={{ backgroundColor: '#FF4D6D', color: '#FFFFFF', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                  KOL
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '8px 0 4px 0' }}>
                  KOMIX
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>2026</span>
              </div>
            </div>

            {/* Related 2: FLYJAYA */}
            <div
              onClick={() => onNavigate('case-study', { id: 'flyjaya' })}
              style={{
                borderRadius: '24px',
                border: '1.5px solid #E5E7EB',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                backgroundColor: '#FFFFFF'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#FF4D6D')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#E5E7EB')}
            >
              <WireframePlaceholder height="200px" label="FLYJAYA Airline Growth" />
              <div style={{ padding: '1.25rem' }}>
                <span style={{ backgroundColor: '#FF4D6D', color: '#FFFFFF', padding: '4px 12px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800 }}>
                  SEO
                </span>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#111827', margin: '8px 0 4px 0' }}>
                  FLYJAYA
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#6B7280' }}>2026</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
