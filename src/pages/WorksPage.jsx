import React from 'react';
import MascotIcon from '../components/MascotIcon';
import WireframePlaceholder from '../components/WireframePlaceholder';

function WorkProjectCard({ id, name, tag, year, scene, onNavigate }) {
  return (
    <div
      onClick={() => onNavigate('case-study', { id })}
      style={{
        height: '330px',
        borderRadius: '22px',
        overflow: 'hidden',
        position: 'relative',
        cursor: 'pointer',
        transition: 'transform 0.25s ease, box-shadow 0.25s ease'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 14px 28px rgba(74, 37, 17, 0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <WireframePlaceholder scene={scene} height="100%" borderRadius="22px">
        {/* Bottom dark gradient overlay for white title legibility */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.08) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,0.65) 100%)',
            zIndex: 4
          }}
        />

        {/* Top-Left Category Pill */}
        <div style={{ position: 'absolute', top: '16px', left: '16px', zIndex: 10 }}>
          <span
            style={{
              backgroundColor: '#FF6B7D',
              color: '#FFFFFF',
              fontSize: '0.88rem',
              fontWeight: 800,
              padding: '4px 16px',
              borderRadius: '9999px',
              display: 'inline-block',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {tag}
          </span>
        </div>

        {/* Bottom-Left Overlaid Project Title & Year */}
        <div
          style={{
            position: 'absolute',
            bottom: '18px',
            left: '20px',
            zIndex: 10,
            color: '#FFFFFF',
            textAlign: 'left'
          }}
        >
          <div
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              letterSpacing: '-0.01em',
              lineHeight: 1.15,
              fontFamily: 'var(--font-heading)'
            }}
          >
            {name}
          </div>
          <div style={{ fontSize: '0.92rem', fontWeight: 500, opacity: 0.95 }}>
            {year}
          </div>
        </div>
      </WireframePlaceholder>
    </div>
  );
}

function PinkSlotBox() {
  return (
    <div
      style={{
        height: '330px',
        backgroundColor: '#FF5370',
        borderRadius: '22px',
        width: '100%'
      }}
    />
  );
}

export default function WorksPage({ onNavigate }) {
  return (
    <div style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container-custom">
        {/* Top Header Row on Clean White Background (Matching Page 4) */}
        <div
          className="responsive-stack"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            alignItems: 'center',
            marginBottom: '3.25rem'
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: '#4A2511',
                letterSpacing: '-0.02em',
                lineHeight: 1.08
              }}
            >
              The problem<br />
              we <MascotIcon type="inline-peach" size={44} /> solved
            </h1>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <p
              style={{
                fontSize: '0.95rem',
                color: '#4A2511',
                lineHeight: 1.45,
                fontWeight: 500,
                textAlign: 'right',
                maxWidth: '410px'
              }}
            >
              Clients globally come to us with either one of these problems: Demand or Discovery. We drive search demand or discovery for brands with ambitions to be category leaders.
            </p>
          </div>
        </div>

        {/* 6-Row Asymmetric 2-Column Bento Grid (Matching Page 4 of PDF) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {/* ROW 1: 50% / 50% (FEMMY FYBER + KOMIX) */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}
          >
            <WorkProjectCard
              id="femmy-fyber"
              name="FEMMY FYBER"
              tag="KOL"
              year="2026"
              scene="femmy-fyber"
              onNavigate={onNavigate}
            />
            <WorkProjectCard
              id="komix"
              name="KOMIX"
              tag="Branding"
              year="2026"
              scene="komix"
              onNavigate={onNavigate}
            />
          </div>

          {/* ROW 2: Wider Left / Narrower Right (FLYJAYA + Pink Box) */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.42fr 1fr',
              gap: '1.5rem'
            }}
          >
            <WorkProjectCard
              id="flyjaya"
              name="FLYJAYA"
              tag="SEO"
              year="2026"
              scene="flyjaya"
              onNavigate={onNavigate}
            />
            <PinkSlotBox />
          </div>

          {/* ROW 3: Narrower Left / Wider Right (PHYSIOGEL + Pink Box) */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.42fr',
              gap: '1.5rem'
            }}
          >
            <WorkProjectCard
              id="physiogel"
              name="PHYSIOGEL"
              tag="Social Media"
              year="2026"
              scene="physiogel"
              onNavigate={onNavigate}
            />
            <PinkSlotBox />
          </div>

          {/* ROW 4: Left Pink Box / Right LAMPAG */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.12fr 1fr',
              gap: '1.5rem'
            }}
          >
            <PinkSlotBox />
            <WorkProjectCard
              id="lampag"
              name="LAMPAG"
              tag="Website"
              year="2026"
              scene="lampag"
              onNavigate={onNavigate}
            />
          </div>

          {/* ROW 5: Narrower Left Pink Box / Wider Right Pink Box */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.42fr',
              gap: '1.5rem'
            }}
          >
            <PinkSlotBox />
            <PinkSlotBox />
          </div>

          {/* ROW 6: Left Pink Box / Right Pink Box */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1.12fr 1fr',
              gap: '1.5rem'
            }}
          >
            <PinkSlotBox />
            <PinkSlotBox />
          </div>
        </div>
      </div>
    </div>
  );
}
