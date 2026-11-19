import React, { useState, useRef, useEffect } from 'react';
import ArrowIcon from './ArrowIcon';

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
const BASE = 7000; // Large multiple of 7 for seamless infinite scrolling
const ITEM_HEIGHT = 40;
const GAP = 10;
const STEP = ITEM_HEIGHT + GAP; // 50px
// Window height = 300px so 5 items are fully visible and the 2 outer items (-3, +3) are partially clipped at top/bottom edge just like Page 1 of the PDF!
const CONTAINER_HEIGHT = 300;
const CENTER_OFFSET = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 130px

export default function VerticalServicePicker({ selectedService, onSelectService, onNext }) {
  const initIdx = SERVICES.indexOf(selectedService) !== -1 ? SERVICES.indexOf(selectedService) : 3;
  const [currAbsIdx, setCurrAbsIdx] = useState(BASE + initIdx);
  const wheelBoxRef = useRef(null);
  const wheelLockRef = useRef(false);
  const touchStartYRef = useRef(null);

  const scrollBy = (delta) => {
    setCurrAbsIdx((prev) => {
      const nextAbs = prev + delta;
      const resolvedService = SERVICES[((nextAbs % N) + N) % N];
      onSelectService(resolvedService);
      return nextAbs;
    });
  };

  // Native wheel event listener with passive: false so scrolling inside the drum picker rolls items cleanly
  useEffect(() => {
    const el = wheelBoxRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      e.preventDefault();
      if (wheelLockRef.current) return;
      if (Math.abs(e.deltaY) < 6) return;

      wheelLockRef.current = true;
      scrollBy(e.deltaY > 0 ? 1 : -1);
      setTimeout(() => {
        wheelLockRef.current = false;
      }, 160);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchMove = (e) => {
    if (touchStartYRef.current === null || !e.touches || e.touches.length === 0) return;
    const diff = touchStartYRef.current - e.touches[0].clientY;
    if (Math.abs(diff) > 26) {
      scrollBy(diff > 0 ? 1 : -1);
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = () => {
    touchStartYRef.current = null;
  };

  // Render 9 items around currAbsIdx: [-4..+4], where [-3..+3] appear inside the 300px window
  const visibleIndices = [-4, -3, -2, -1, 0, 1, 2, 3, 4].map((offset) => currAbsIdx + offset);
  const translateY = CENTER_OFFSET - currAbsIdx * STEP;

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: '1.5rem',
        padding: '0 3.5rem',
        backgroundColor: '#FCE8E8',
        borderRadius: '28px',
        position: 'relative',
        height: `${CONTAINER_HEIGHT}px`,
        overflow: 'hidden'
      }}
    >
      {/* Left: "I need" */}
      <div style={{ justifySelf: 'start' }}>
        <h3
          style={{
            fontSize: 'clamp(1.85rem, 3.5vw, 2.65rem)',
            fontWeight: 800,
            color: '#4A2511',
            letterSpacing: '-0.02em',
            margin: 0,
            fontFamily: 'var(--font-heading)'
          }}
        >
          I need
        </h3>
      </div>

      {/* Center: Scrollable Drum Picker (Scroll interaction strictly limited to this center column) */}
      <div
        ref={wheelBoxRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        title="Scroll or click to pick a service"
        style={{
          width: '300px',
          height: `${CONTAINER_HEIGHT}px`,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'ns-resize',
          touchAction: 'none'
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            transform: `translateY(${translateY}px)`,
            transition: 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform'
          }}
        >
          {visibleIndices.map((absIdx) => {
            const service = SERVICES[((absIdx % N) + N) % N];
            const offset = absIdx - currAbsIdx;
            const isCenter = offset === 0;
            const topPx = absIdx * STEP;

            return (
              <div
                key={absIdx}
                onClick={() => {
                  if (offset !== 0) scrollBy(offset);
                }}
                style={{
                  position: 'absolute',
                  top: `${topPx}px`,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 'fit-content',
                  height: `${ITEM_HEIGHT}px`,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 22px',
                  borderRadius: '9999px',
                  backgroundColor: isCenter ? '#FFC700' : '#F8C2C8',
                  color: '#4A2511',
                  fontWeight: 800,
                  fontSize: '1.08rem',
                  fontFamily: 'var(--font-heading)',
                  cursor: isCenter ? 'default' : 'pointer',
                  userSelect: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'background-color 0.25s ease, transform 0.25s ease',
                  zIndex: isCenter ? 5 : 2
                }}
              >
                {service}
              </div>
            );
          })}
        </div>
      </div>

      {/* Right: "Next" + Yellow Circle Arrow Button */}
      <div style={{ justifySelf: 'end' }}>
        <button
          type="button"
          onClick={onNext}
          style={{
            background: 'none',
            border: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '14px',
            cursor: 'pointer',
            padding: '8px 0'
          }}
        >
          <span
            style={{
              fontSize: 'clamp(1.85rem, 3.5vw, 2.65rem)',
              fontWeight: 800,
              color: '#4A2511',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Next
          </span>
          <span className="arrow-circle-btn arrow-circle-btn-right">
            <ArrowIcon direction="right" size={20} strokeWidth={3.4} />
          </span>
        </button>
      </div>
    </div>
  );
}
