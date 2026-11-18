import React from 'react';

const BRANDS = [
  { name: 'STARBUCKS', category: 'F&B' },
  { name: 'CPPrima Seafood', category: 'FMCG' },
  { name: 'SOYJOY', category: 'FMCG' },
  { name: 'Algonova', category: 'Tech' },
  { name: 'ISMAYA', category: 'Lifestyle' },
  { name: 'TikTok GO', category: 'Digital Platform' },
  { name: 'bumame', category: 'Healthcare' },
  { name: 'PHYSIOGEL', category: 'Skincare' },
  { name: 'ALVA', category: 'EV / Mobility' },
];

export default function BrandMarquee({ title = "Brands we've worked with" }) {
  // Triple items for seamless infinite marquee loop
  const duplicated = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <section style={{ padding: '3.5rem 0', backgroundColor: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB', overflow: 'hidden' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#111827', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          {title}
        </h3>
      </div>

      <div className="marquee-container" style={{ padding: '0.5rem 0' }}>
        <div className="marquee-track">
          {duplicated.map((brand, idx) => (
            <div
              key={idx}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 22px',
                background: '#F9FAFB',
                border: '1px solid #E5E7EB',
                borderRadius: '10px',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#FF7B7B';
                e.currentTarget.style.transform = 'scale(1.04)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#FF7B7B'
                }}
              />
              <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '-0.01em', color: '#111827' }}>
                {brand.name}
              </span>
              <span style={{ fontSize: '0.75rem', color: '#9CA3AF', textTransform: 'uppercase', fontWeight: 700 }}>
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
