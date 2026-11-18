import React, { useState } from 'react';

const SERVICES = [
  '360° Campaign',
  'Branding',
  'Web design',
  'SEO',
  'KOL',
  'Strategic communication',
  'Marketing strategy'
];

const N = SERVICES.length;
const ITEM_HEIGHT = 42;
const GAP = 8;
const STEP = ITEM_HEIGHT + GAP; // 50px
const CONTAINER_HEIGHT = 96;
const CENTER_Y = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 27px

export default function VerticalServicePicker({ selectedService, onSelectService, onNext }) {
  const initIdx = SERVICES.indexOf(selectedService) !== -1 ? SERVICES.indexOf(selectedService) : 3;
  const [centerIdx, setCenterIdx] = useState(initIdx);

  const goUp = () => {
    setCenterIdx(prev => {
      const next = (prev - 1 + N) % N;
      onSelectService(SERVICES[next]);
      return next;
    });
  };

  const goDown = () => {
    setCenterIdx(prev => {
      const next = (prev + 1) % N;
      onSelectService(SERVICES[next]);
      return next;
    });
  };

  // 3 slots: -1 (above), 0 (center), +1 (below)
  const slots = [-1, 0, 1];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        padding: '1.25rem 2.5rem',
        backgroundColor: '#FFF0F2',
        borderRadius: '28px',
        border: '2px dashed #FFB8C2',
        position: 'relative',
        minHeight: '110px'
      }}
    >
      {/* Left: "I need" */}
      <div style={{ flex: '0 0 auto' }}>
        <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', margin: 0, fontFamily: 'var(--font-heading)' }}>
          I need
        </h3>
      </div>

      {/* Center: Vertical Drum Picker */}
      <div
        style={{
          flex: '1 1 300px',
          position: 'relative',
          height: `${CONTAINER_HEIGHT}px`,
          overflow: 'hidden'
        }}
      >
        {/* Top click zone & up indicator */}
        <div
          onClick={goUp}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'linear-gradient(to bottom, #FFF0F2 60%, transparent)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            paddingTop: '1px'
          }}
          title="Click to scroll up"
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#FF5E7E' }}>▲</span>
        </div>

        {/* Absolutely positioned items */}
        {slots.map(offset => {
          const serviceIdx = ((centerIdx + offset) % N + N) % N;
          const service = SERVICES[serviceIdx];
          const isCenter = offset === 0;

          const opacity = isCenter ? 1 : 0.38;
          const scale = isCenter ? 1 : 0.92;
          const topPx = CENTER_Y + offset * STEP;

          return (
            <div
              key={offset}
              onClick={offset < 0 ? goUp : offset > 0 ? goDown : undefined}
              style={{
                position: 'absolute',
                left: '50%',
                top: `${topPx}px`,
                transform: `translateX(-50%) scale(${scale})`,
                transition: 'top 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease, transform 0.3s ease',
                opacity,
                cursor: offset !== 0 ? 'pointer' : 'default',
                zIndex: isCenter ? 5 : 3,
                minWidth: '220px',
                height: `${ITEM_HEIGHT}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                borderRadius: '9999px',
                border: isCenter ? '2px solid #EAB308' : '1px solid #E5E7EB',
                backgroundColor: isCenter ? '#FFC000' : '#FFFFFF',
                color: isCenter ? '#111827' : '#4B5563',
                fontWeight: isCenter ? 800 : 600,
                fontSize: isCenter ? '1.05rem' : '0.92rem',
                fontFamily: 'var(--font-heading)',
                boxShadow: isCenter
                  ? '0 6px 16px rgba(255, 192, 0, 0.45)'
                  : '0 2px 6px rgba(0,0,0,0.03)',
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              {service}
            </div>
          );
        })}

        {/* Bottom click zone & down indicator */}
        <div
          onClick={goDown}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '24px',
            background: 'linear-gradient(to top, #FFF0F2 60%, transparent)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            cursor: 'pointer',
            userSelect: 'none',
            paddingBottom: '1px'
          }}
          title="Click to scroll down"
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 900, color: '#FF5E7E' }}>▼</span>
        </div>
      </div>

      {/* Right: "Next →" Button */}
      <div style={{ flex: '0 0 auto' }}>
        <button
          onClick={onNext}
          className="wireframe-btn-peach"
          style={{
            fontSize: '1.15rem',
            fontWeight: 800,
            padding: '12px 32px',
            boxShadow: '0 6px 18px rgba(255, 192, 0, 0.4)'
          }}
        >
          <span>Next</span>
          <span style={{ fontSize: '1.3rem', fontWeight: 900 }}>→</span>
        </button>
      </div>
    </div>
  );
}
