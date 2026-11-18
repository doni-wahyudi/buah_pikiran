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
const ITEM_HEIGHT = 48;
const GAP = 10;
const STEP = ITEM_HEIGHT + GAP;
// Visual center of the 240px drum window
const CENTER_Y = 96;

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

  // Render a window of 5 slots: center ± 2
  // Each slot offset from center: -2, -1, 0, +1, +2
  const slots = [-2, -1, 0, 1, 2];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '3rem 2.5rem',
        backgroundColor: '#FFF0F2',
        borderRadius: '32px',
        border: '2px dashed #FFB8C2',
        position: 'relative',
        minHeight: '280px'
      }}
    >
      {/* Left: "I need" */}
      <div style={{ flex: '0 0 auto' }}>
        <h3 style={{ fontSize: '2rem', fontWeight: 800, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>
          I need
        </h3>
      </div>

      {/* Center: Drum picker */}
      <div
        style={{
          flex: '1 1 300px',
          position: 'relative',
          height: '240px',
          overflow: 'hidden'
        }}
      >
        {/* Top click zone */}
        <div
          onClick={goUp}
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0,
            height: '72px',
            background: 'linear-gradient(to bottom, #FFF0F2 50%, transparent)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '6px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#FF5E7E' }}>▲</span>
        </div>

        {/* Absolutely positioned items */}
        {slots.map(offset => {
          const serviceIdx = ((centerIdx + offset) % N + N) % N;
          const service = SERVICES[serviceIdx];
          const isCenter = offset === 0;
          const distance = Math.abs(offset);

          let opacity = 1;
          let scale = 1;
          if (distance === 1) { opacity = 0.65; scale = 0.93; }
          else if (distance === 2) { opacity = 0.3; scale = 0.85; }

          // top position: CENTER_Y centers the item vertically
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
                transition: 'top 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.35s ease, transform 0.35s ease',
                opacity,
                cursor: offset !== 0 ? 'pointer' : 'default',
                zIndex: isCenter ? 5 : 3,
                width: '240px',
                height: `${ITEM_HEIGHT}px`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '9999px',
                border: isCenter ? '2px solid #EAB308' : '1px solid #E5E7EB',
                backgroundColor: isCenter ? '#FFC000' : '#FFFFFF',
                color: isCenter ? '#111827' : '#4B5563',
                fontWeight: isCenter ? 900 : 700,
                fontSize: isCenter ? '1.05rem' : '0.92rem',
                boxShadow: isCenter
                  ? '0 6px 16px rgba(255, 192, 0, 0.45)'
                  : '0 2px 6px rgba(0,0,0,0.04)',
                whiteSpace: 'nowrap',
                userSelect: 'none'
              }}
            >
              {service}
            </div>
          );
        })}

        {/* Bottom click zone */}
        <div
          onClick={goDown}
          style={{
            position: 'absolute',
            bottom: 0, left: 0, right: 0,
            height: '72px',
            background: 'linear-gradient(to top, #FFF0F2 50%, transparent)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            paddingBottom: '6px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#FF5E7E' }}>▼</span>
        </div>
      </div>

      {/* Right: "Next →" Button */}
      <div style={{ flex: '0 0 auto' }}>
        <button
          onClick={onNext}
          className="wireframe-btn-peach"
          style={{
            fontSize: '1.2rem',
            padding: '14px 34px',
            boxShadow: '0 6px 18px rgba(255, 192, 0, 0.4)'
          }}
        >
          <span>Next</span>
          <span style={{ fontSize: '1.35rem', fontWeight: 900 }}>→</span>
        </button>
      </div>
    </div>
  );
}
