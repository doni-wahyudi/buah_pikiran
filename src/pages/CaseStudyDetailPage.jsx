import React, { useState, useEffect } from 'react';
import WireframePlaceholder from '../components/WireframePlaceholder';

const PROJECT_DATA = {
  'femmy-fyber': {
    name: 'FEMMY FYBER',
    tag: 'KOL',
    year: '2026',
    scene: 'femmy-fyber'
  },
  komix: {
    name: 'KOMIX',
    tag: 'Branding',
    year: '2026',
    scene: 'komix'
  },
  flyjaya: {
    name: 'FLYJAYA',
    tag: 'SEO',
    year: '2026',
    scene: 'flyjaya'
  },
  physiogel: {
    name: 'PHYSIOGEL',
    tag: 'Social Media',
    year: '2026',
    scene: 'physiogel'
  },
  lampag: {
    name: 'LAMPAG',
    tag: 'Website',
    year: '2026',
    scene: 'lampag'
  }
};

export default function CaseStudyDetailPage({ onNavigate, projectId = 'femmy-fyber' }) {
  const project = PROJECT_DATA[projectId] || PROJECT_DATA['femmy-fyber'];

  const [counts, setCounts] = useState({
    traffic: 0,
    keywords: 0,
    clicks: 0,
    buyers: 0
  });

  useEffect(() => {
    setCounts({ traffic: 0, keywords: 0, clicks: 0, buyers: 0 });
    const timer = setInterval(() => {
      setCounts((prev) => ({
        traffic: prev.traffic < 155 ? Math.min(155, prev.traffic + 5) : 155,
        keywords: prev.keywords < 1.9 ? +(prev.keywords + 0.1).toFixed(1) : 1.9,
        clicks: prev.clicks < 235 ? Math.min(235, prev.clicks + 8) : 235,
        buyers: prev.buyers < 140 ? Math.min(140, prev.buyers + 5) : 140
      }));
    }, 30);

    return () => clearInterval(timer);
  }, [projectId]);

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* SECTION 1: TOP SOFT-PINK HERO BAND (Matching Page 5) */}
      <section
        style={{
          backgroundColor: '#FCE8E8',
          padding: '2rem 0 2.5rem 0',
          marginBottom: '3.5rem'
        }}
      >
        <div className="container-custom">
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.9fr 1fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            {/* Left Main Campaign Image with Overlaid Yellow "Back to our works" Pill */}
            <div>
              <WireframePlaceholder scene={project.scene} height="340px" borderRadius="22px">
                <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                  <button
                    onClick={() => onNavigate('works')}
                    className="wireframe-btn-peach"
                    style={{
                      padding: '8px 22px',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      boxShadow: '0 4px 12px rgba(0,0,0,0.18)'
                    }}
                  >
                    Back to our works
                  </button>
                </div>
              </WireframePlaceholder>
            </div>

            {/* Right Project Metadata (Stacked Vertically as in Page 5) */}
            <div style={{ color: '#4A2511' }}>
              <div style={{ marginBottom: '4px' }}>
                <span
                  style={{
                    backgroundColor: '#FF5370',
                    color: '#FFFFFF',
                    padding: '2px 10px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    display: 'inline-block'
                  }}
                >
                  {project.tag}
                </span>
              </div>

              <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.85rem' }}>
                {project.year}
              </div>

              <h1
                style={{
                  fontSize: '1.65rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.65rem'
                }}
              >
                {project.name}
              </h1>

              <div
                style={{
                  fontSize: '0.88rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  marginBottom: '0.65rem'
                }}
              >
                Project info
              </div>

              <p
                style={{
                  fontSize: '0.84rem',
                  color: '#4A2511',
                  lineHeight: 1.45,
                  fontWeight: 500
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container-custom">
        {/* SECTION 2: OBJECTIVE & THE CHALLENGE (2-Column Challenge Row) */}
        <section style={{ maxWidth: '960px', margin: '0 auto 3.5rem auto' }}>
          {/* Objective */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                color: '#4A2511',
                marginBottom: '0.5rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Objective
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.65rem, 3.2vw, 2.2rem)',
                fontWeight: 500,
                color: '#4A2511',
                lineHeight: 1.25
              }}
            >
              Launching Dojo in B2B UK market to half<br />
              a bill £ revenue business in 5 years
            </h2>
          </div>

          {/* The challenge: 2-column layout (Label on Left, Paragraph on Right) */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '175px 1fr',
              gap: '1.5rem',
              alignItems: 'start'
            }}
          >
            <div
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                color: '#4A2511',
                fontFamily: 'var(--font-heading)'
              }}
            >
              The challenge
            </div>
            <p
              style={{
                fontSize: '0.96rem',
                color: '#4A2511',
                lineHeight: 1.5,
                fontWeight: 500
              }}
            >
              Dojo was a new start up brand that came out of our client Paymentsense. They appointed us to help drive organic non brand growth, through industry leading SEO and Digital PR. As a brand new domain, we had to build a lot of trust and authority fast. In the initial launch period, Dojo was a new card machine provider for small b2b businesses, and brand traffic accounted for 70% of clicks. In order to save money on PPC and drive non-brand traffic, we built a plan to grow them to own the card machine category organically.
            </p>
          </div>
        </section>

        {/* SECTION 3: ANIMATED ROLLING NUMBERS (4 Soft-Pink Left-Aligned Cards) */}
        <section style={{ marginBottom: '4rem' }}>
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.35rem'
            }}
          >
            {[
              { value: `${counts.traffic}%`, label: 'Increase in monthly\nbrand traffic' },
              { value: `${counts.keywords}K`, label: 'Keywords pos 1-3' },
              { value: `${counts.clicks}+`, label: 'Link clicks directly into sales' },
              { value: `${counts.buyers}K`, label: 'Increase buyer in the\nmarketplace in a month' }
            ].map((stat, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FCE8E8',
                  borderRadius: '16px',
                  padding: '3.25rem 1.35rem 1.25rem 1.35rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  textAlign: 'left',
                  minHeight: '165px'
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(2.3rem, 3.8vw, 2.9rem)',
                    fontWeight: 800,
                    color: '#FF5370',
                    fontFamily: 'var(--font-heading)',
                    lineHeight: 1.05,
                    marginBottom: '0.4rem'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: '#4A2511',
                    lineHeight: 1.3,
                    whiteSpace: 'pre-line'
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: WHAT WE DID? & 5-BOX GALLERY (2 Horizontal Over 3 Vertical Hot-Pink Boxes) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 2.5rem auto' }}>
            <div
              style={{
                fontSize: '0.98rem',
                fontWeight: 800,
                color: '#4A2511',
                marginBottom: '0.65rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              What we did?
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.55rem, 3vw, 2.05rem)',
                fontWeight: 500,
                color: '#4A2511',
                lineHeight: 1.28
              }}
            >
              The Rise team on London streets showing<br />
              just how much prescence Dojo now has<br />
              on the highstreet
            </h2>
          </div>

          {/* Row 1: 2 Wide Hot-Pink Rounded Boxes (Left one labeled "Gallery") */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}
          >
            <div
              style={{
                height: '250px',
                backgroundColor: '#FF5370',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '1.15rem',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Gallery
            </div>
            <div
              style={{
                height: '250px',
                backgroundColor: '#FF5370',
                borderRadius: '20px'
              }}
            />
          </div>

          {/* Row 2: 3 Tall Portrait Hot-Pink Rounded Boxes */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.5rem'
            }}
          >
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                style={{
                  height: '360px',
                  backgroundColor: '#FF5370',
                  borderRadius: '20px'
                }}
              />
            ))}
          </div>
        </section>

        {/* SECTION 5: YOU MAY ALSO LIKE */}
        <section>
          <h2
            style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
              fontWeight: 800,
              color: '#4A2511',
              letterSpacing: '-0.02em',
              marginBottom: '1.75rem'
            }}
          >
            You may also like
          </h2>

          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}
          >
            {[
              { id: 'komix', name: 'KOMIX', tag: 'KOL', year: '2026', scene: 'komix' },
              { id: 'flyjaya', name: 'FLYJAYA', tag: 'SEO', year: '2026', scene: 'flyjaya' }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => onNavigate('case-study', { id: item.id })}
                style={{
                  height: '280px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.25s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <WireframePlaceholder scene={item.scene} height="100%" borderRadius="22px">
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.6) 100%)',
                      zIndex: 4
                    }}
                  />
                  {/* Top-Left Category Tag */}
                  <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
                    <span
                      style={{
                        backgroundColor: '#FF6B7D',
                        color: '#FFFFFF',
                        fontSize: '1rem',
                        fontWeight: 800,
                        padding: '4px 16px',
                        borderRadius: '9999px',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom-Left Overlaid Title & Year */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: '18px',
                      left: '20px',
                      zIndex: 10,
                      color: '#FFFFFF'
                    }}
                  >
                    <div
                      style={{
                        fontSize: '1.4rem',
                        fontWeight: 800,
                        lineHeight: 1.15,
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {item.name}
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                      {item.year}
                    </div>
                  </div>
                </WireframePlaceholder>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
