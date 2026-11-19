import React from 'react';

function BrandLogoItem({ id }) {
  switch (id) {
    case 'bumame':
      return (
        <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 800, fontSize: '1.85rem', letterSpacing: '-0.04em', color: '#111827' }}>
          bumame
        </span>
      );
    case 'physiogel':
      return (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', lineHeight: 1 }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.15rem', letterSpacing: '0.04em', color: '#111827' }}>
            PHYSIOGEL
          </span>
          <span style={{ fontSize: '0.5rem', letterSpacing: '0.18em', fontWeight: 700, color: '#374151', marginTop: '2px' }}>
            HYPOALLERGENIC
          </span>
        </div>
      );
    case 'alva':
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#111827' }}>
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="13.5" stroke="#111827" strokeWidth="2.5" />
            <path d="M12 24 L20 8" stroke="#111827" strokeWidth="2.8" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '1.35rem', letterSpacing: '0.22em' }}>
            ALVA
          </span>
        </div>
      );
    case 'starbucks':
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#111827' }}>
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="16" fill="#111827" />
            <circle cx="18" cy="15" r="4" fill="#FFFFFF" />
            <path d="M10 26 C12 20, 24 20, 26 26" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M15 9 L18 6 L21 9" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 900, fontSize: '1.15rem', letterSpacing: '0.08em' }}>
            STARBUCKS®
          </span>
        </div>
      );
    case 'cpprima':
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', color: '#111827' }}>
          <svg width="38" height="28" viewBox="0 0 42 30" fill="none">
            <ellipse cx="21" cy="15" rx="19" ry="12" fill="#111827" />
            <path d="M6 17 C14 9, 26 9, 36 14" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
            <path d="M10 22 C18 15, 28 15, 35 19" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.02 }}>
            <span style={{ fontWeight: 900, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>CPPrima</span>
            <span style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>Seafood</span>
          </div>
        </div>
      );
    case 'soyjoy':
      return (
        <div style={{ display: 'inline-flex', flexDirection: 'column', lineHeight: 0.95, color: '#111827' }}>
          <span style={{ fontSize: '0.45rem', fontWeight: 800, letterSpacing: '0.08em' }}>SOY BAR</span>
          <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.65rem', letterSpacing: '0.02em' }}>
            SOYJOY
          </span>
        </div>
      );
    case 'algonova':
      return (
        <div
          style={{
            backgroundColor: '#111827',
            color: '#FFFFFF',
            padding: '5px 14px',
            borderRadius: '4px',
            fontFamily: 'var(--font-heading)',
            fontWeight: 800,
            fontSize: '1.2rem',
            letterSpacing: '-0.01em'
          }}
        >
          Algonova
        </div>
      );
    case 'ismaya':
      return (
        <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', lineHeight: 1, color: '#111827' }}>
          <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 300, fontSize: '1.45rem', letterSpacing: '0.18em' }}>
            ISMAYA
          </span>
          <span style={{ fontSize: '0.44rem', letterSpacing: '0.16em', color: '#4B5563', marginTop: '3px' }}>
            CREATING THE GOOD LIFE
          </span>
        </div>
      );
    case 'tiktok':
      return (
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#111827' }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
          </svg>
          <span style={{ fontWeight: 900, fontSize: '1.35rem', letterSpacing: '-0.03em' }}>TikTok</span>
          <span
            style={{
              border: '2px solid #111827',
              borderRadius: '6px',
              padding: '1px 6px',
              fontSize: '0.85rem',
              fontWeight: 900
            }}
          >
            GO
          </span>
        </div>
      );
    default:
      return null;
  }
}

const BRAND_IDS = [
  'bumame',
  'physiogel',
  'alva',
  'starbucks',
  'cpprima',
  'soyjoy',
  'algonova',
  'ismaya',
  'tiktok'
];

export default function BrandMarquee({ title = "Brands we've worked with" }) {
  const duplicated = [...BRAND_IDS, ...BRAND_IDS, ...BRAND_IDS];

  return (
    <section style={{ padding: '3rem 0', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
        <h3
          style={{
            fontSize: '1.75rem',
            fontWeight: 800,
            color: '#4A2511',
            letterSpacing: '-0.02em',
            fontFamily: 'var(--font-heading)'
          }}
        >
          {title}
        </h3>
      </div>

      <div className="marquee-container" style={{ padding: '0.75rem 0' }}>
        <div className="marquee-track">
          {duplicated.map((id, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, opacity 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.07)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <BrandLogoItem id={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
