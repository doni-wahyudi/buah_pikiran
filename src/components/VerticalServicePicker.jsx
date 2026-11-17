import React, { useState, useRef, useCallback } from 'react';

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
// Triple the array for infinite loop illusion
const CLONED = [...SERVICES, ...SERVICES, ...SERVICES];

const ITEM_HEIGHT = 48;
const GAP = 10;
const STEP = ITEM_HEIGHT + GAP;

export default function VerticalServicePicker({ selectedService, onSelectService, onNext }) {
  // Start in the middle set so we can go up or down
  const initialRaw = N + (SERVICES.indexOf(selectedService) !== -1 ? SERVICES.indexOf(selectedService) : 3);
  const [rawIndex, setRawIndex] = useState(initialRaw);
  const [animated, setAnimated] = useState(true);
  const isTransitioning = useRef(false);

  // translateY: center item is at visual center (96px offset for the 240px window)
  const translateY = 96 - rawIndex * STEP;

  const goUp = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(true);
    setRawIndex(prev => {
      const next = prev - 1;
      onSelectService(CLONED[((next % N) + N) % N]);
      return next;
    });
  }, [onSelectService]);

  const goDown = useCallback(() => {
    if (isTransitioning.current) return;
    isTransitioning.current = true;
    setAnimated(true);
    setRawIndex(prev => {
      const next = prev + 1;
      onSelectService(CLONED[((next % N) + N) % N]);
      return next;
    });
  }, [onSelectService]);

  const handleTransitionEnd = useCallback(() => {
    isTransitioning.current = false;
    // Silently teleport back into middle set if we drifted to outer sets
    setRawIndex(prev => {
      if (prev < N) {
        // jumped into first clone set → reset to middle set equivalent
        setAnimated(false);
        return prev + N;
      } else if (prev >= 2 * N) {
        // jumped into third clone set → reset to middle set equivalent
        setAnimated(false);
        return prev - N;
      }
      return prev;
    });
  }, []);

  // After turning off animation for teleport, re-enable on next frame
  const handleAfterTeleport = useCallback(() => {
    if (!animated) {
      requestAnimationFrame(() => setAnimated(true));
    }
  }, [animated]);

  const currentVisualIndex = ((rawIndex % N) + N) % N;

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
        <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', margin: 0 }}>
          I need
        </h3>
      </div>

      {/* Center: Infinite Vertical Drum Picker */}
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
        {/* Top fade + click area → go UP (previous item) */}
        <div
          onClick={goUp}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '56px',
            background: 'linear-gradient(to bottom, #FFF0F2 45%, rgba(255, 240, 242, 0))',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingTop: '6px',
            userSelect: 'none'
          }}
        >
          <span style={{ fontSize: '0.85rem', fontWeight: 900, color: '#FF5E7E' }}>▲</span>
        </div>

        {/* Drum track — renders CLONED (3× array) */}
        <div
          onTransitionEnd={handleTransitionEnd}
          onAnimationEnd={handleAfterTeleport}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: `${GAP}px`,
            transform: `translateY(${translateY}px)`,
            transition: animated ? 'transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
            willChange: 'transform'
          }}
        >
          {CLONED.map((service, idx) => {
            const visualDist = idx - rawIndex;
            const isCenter = visualDist === 0;
            const distance = Math.abs(visualDist);

            let opacity = 1;
            let scale = 1;
            if (distance === 1) { opacity = 0.7; scale = 0.94; }
            else if (distance === 2) { opacity = 0.45; scale = 0.88; }
            else if (distance >= 3) { opacity = 0.15; scale = 0.82; }
            // Far items stay in DOM (to keep translateY math correct) but are invisible
            if (distance > 4) { opacity = 0; }

            return (
              <button
                key={`${service}-${idx}`}
                onClick={() => {
                  const diff = idx - rawIndex;
                  if (diff < 0) {
                    // above center → go up N times
                    for (let i = 0; i < Math.abs(diff); i++) goUp();
                  } else if (diff > 0) {
                    for (let i = 0; i < diff; i++) goDown();
                  }
                }}
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
                  userSelect: 'none',
                  flexShrink: 0
                }}
              >
                {service}
              </button>
            );
          })}
        </div>

        {/* Bottom fade + click area → go DOWN (next item) */}
        <div
          onClick={goDown}
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '56px',
            background: 'linear-gradient(to top, #FFF0F2 45%, rgba(255, 240, 242, 0))',
            zIndex: 10,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            cursor: 'pointer',
            paddingBottom: '6px',
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
