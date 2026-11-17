import React from 'react';

const SERVICES = [
  '360° Campaign',
  'Branding',
  'Web design',
  'SEO',
  'KOL',
  'Strategic communication',
  'Marketing strategy'
];

export default function VerticalServicePicker({ selectedService, onSelectService, onNext }) {
  const currentIndex = SERVICES.indexOf(selectedService) !== -1 
    ? SERVICES.indexOf(selectedService) 
    : 3; // default 'SEO'

  // Height of each pill row in px
  const ITEM_HEIGHT = 48;
  const GAP = 10;
  const TOTAL_ITEM_STEP = ITEM_HEIGHT + GAP;

  // Clicking an item above or below
  const handleItemClick = (index) => {
    onSelectService(SERVICES[index]);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectService(SERVICES[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < SERVICES.length - 1) {
      onSelectService(SERVICES[currentIndex + 1]);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '2rem',
        padding: '3rem 2.5rem',
        backgroundColor: '#FFF0F2', // Soft peach/pink rounded box as in document
        borderRadius: '32px',
        border: '2px dashed #FFB8C2',
        position: 'relative',
        minHeight: '280px'
      }}
    >
      {/* Left: "I need" */}
      <div style={{ flex: '0 0 auto' }}>
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>
          I need
        </h3>
      </div>

      {/* Center: Vertical Slot / Drum Picker (Scrolled vertically by clicking items above/below) */}
      <div
        style={{
          flex: '1 1 340px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          height: '240px',
          overflow: 'hidden'
        }}
      >
        {/* Top Fade Gradient & Up Click Chevron */}
        <div
          onClick={handlePrev}
          title={currentIndex > 0 ? `Click to scroll up to ${SERVICES[currentIndex - 1]}` : ''}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '48px',
            background: 'linear-gradient(to bottom, #FFF0F2 40%, rgba(255, 240, 242, 0))',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            cursor: currentIndex > 0 ? 'pointer' : 'default',
            color: currentIndex > 0 ? '#FF5E7E' : 'transparent',
            fontSize: '1rem',
            paddingTop: '4px',
            userSelect: 'none'
          }}
        >
          {currentIndex > 0 && <span style={{ fontSize: '0.85rem', fontWeight: 900 }}>▲</span>}
        </div>

        {/* Vertical Drum Track */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: `${GAP}px`,
            transform: `translateY(${96 - currentIndex * TOTAL_ITEM_STEP}px)`,
            transition: 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
            willChange: 'transform'
          }}
        >
          {SERVICES.map((service, idx) => {
            const isCenter = idx === currentIndex;
            const distance = Math.abs(idx - currentIndex);

            // Calculate subtle opacity and scale based on distance from center
            let opacity = 1;
            let scale = 1;
            if (distance === 1) {
              opacity = 0.7;
              scale = 0.94;
            } else if (distance === 2) {
              opacity = 0.45;
              scale = 0.88;
            } else if (distance >= 3) {
              opacity = 0.2;
              scale = 0.82;
            }

            return (
              <button
                key={service}
                onClick={() => handleItemClick(idx)}
                style={{
                  height: `${ITEM_HEIGHT}px`,
                  minWidth: '220px',
                  padding: '0 26px',
                  borderRadius: '9999px',
                  border: isCenter ? '2px solid #EAB308' : '1px solid #E5E7EB',
                  backgroundColor: isCenter ? '#FFC000' : '#FFFFFF',
                  color: isCenter ? '#111827' : '#4B5563',
                  fontWeight: isCenter ? 900 : 700,
                  fontSize: isCenter ? '1.05rem' : '0.92rem',
                  boxShadow: isCenter
                    ? '0 6px 16px rgba(255, 192, 0, 0.45)'
                    : '0 2px 6px rgba(0, 0, 0, 0.04)',
                  cursor: 'pointer',
                  opacity,
                  transform: `scale(${scale})`,
                  transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  whiteSpace: 'nowrap',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  userSelect: 'none'
                }}
              >
                {service}
              </button>
            );
          })}
        </div>

        {/* Bottom Fade Gradient & Down Click Chevron */}
        <div
          onClick={handleNext}
          title={currentIndex < SERVICES.length - 1 ? `Click to scroll down to ${SERVICES[currentIndex + 1]}` : ''}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '48px',
            background: 'linear-gradient(to top, #FFF0F2 40%, rgba(255, 240, 242, 0))',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            cursor: currentIndex < SERVICES.length - 1 ? 'pointer' : 'default',
            color: currentIndex < SERVICES.length - 1 ? '#FF5E7E' : 'transparent',
            fontSize: '1rem',
            paddingBottom: '4px',
            userSelect: 'none'
          }}
        >
          {currentIndex < SERVICES.length - 1 && <span style={{ fontSize: '0.85rem', fontWeight: 900 }}>▼</span>}
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
