import React, { useState, useRef } from 'react';

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
const BASE = 7000; // Large integer base for infinite forward/backward scroll
const ITEM_HEIGHT = 44;
const GAP = 10;
const STEP = ITEM_HEIGHT + GAP; // 54px
const CONTAINER_HEIGHT = 162;
const CENTER_OFFSET = (CONTAINER_HEIGHT - ITEM_HEIGHT) / 2; // 59px

export default function VerticalServicePicker({ selectedService, onSelectService, onNext }) {
  const initIdx = SERVICES.indexOf(selectedService) !== -1 ? SERVICES.indexOf(selectedService) : 3;
  const [currAbsIdx, setCurrAbsIdx] = useState(BASE + initIdx);
  const isAnimating = useRef(false);

  const scrollBy = (delta) => {
    const nextAbs = currAbsIdx + delta;
    setCurrAbsIdx(nextAbs);
    const resolvedService = SERVICES[((nextAbs % N) + N) % N];
    onSelectService(resolvedService);
  };

  const goUp = () => scrollBy(-1);
  const goDown = () => scrollBy(1);

  // Render 5 items around currAbsIdx: [-2, -1, 0, 1, 2]
  // [-1, 0, 1] are visible inside the 162px container; [-2, 2] smoothly slide in/out
  const visibleIndices = [-2, -1, 0, 1, 2].map(offset => currAbsIdx + offset);
  const translateY = CENTER_OFFSET - currAbsIdx * STEP;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '1.5rem',
        padding: '1.5rem 2.5rem',
        backgroundColor: '#FFF0F2',
        borderRadius: '28px',
        border: '2px dashed #FFB8C2',
        position: 'relative',
        minHeight: '180px'
      }}
    >
      {/* Left: "I need" */}
      <div style={{ flex: '0 0 auto' }}>
        <h3
          style={{
            fontSize: '2.4rem',
            fontWeight: 800,
            color: '#111827',
            letterSpacing: '-0.02em',
            margin: 0,
            fontFamily: 'var(--font-heading)'
          }}
        >
          I need
        </h3>
      </div>

      {/* Center: 3-Item Drum Picker with Rolling Scroll Animation */}
      <div
        style={{
          flex: '1 1 320px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative'
        }}
      >
        {/* Top Scroll Indicator Arrow */}
        <button
          onClick={goUp}
          aria-label="Previous service"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px 12px',
            color: '#FF5E7E',
            fontSize: '0.9rem',
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease',
            userSelect: 'none',
            zIndex: 10
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          ▲
        </button>

        {/* 3-Item Window Container */}
        <div
          style={{
            width: '100%',
            maxWidth: '280px',
            height: `${CONTAINER_HEIGHT}px`,
            position: 'relative',
            overflow: 'hidden',
            borderRadius: '16px'
          }}
        >
          {/* Top subtle fade gradient */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '16px',
              background: 'linear-gradient(to bottom, #FFF0F2, rgba(255, 240, 242, 0))',
              zIndex: 6,
              pointerEvents: 'none'
            }}
          />

          {/* Animated Rolling Track */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              transform: `translateY(${translateY}px)`,
              transition: 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
              willChange: 'transform'
            }}
          >
            {visibleIndices.map(absIdx => {
              const service = SERVICES[((absIdx % N) + N) % N];
              const isCenter = absIdx === currAbsIdx;
              const isAdjacent = Math.abs(absIdx - currAbsIdx) === 1;
              const isAbove = absIdx === currAbsIdx - 1;
              const isBelow = absIdx === currAbsIdx + 1;
              const topPx = absIdx * STEP;

              return (
                <div
                  key={absIdx}
                  onClick={isAbove ? goUp : isBelow ? goDown : undefined}
                  style={{
                    position: 'absolute',
                    top: `${topPx}px`,
                    left: '50%',
                    transform: `translateX(-50%) scale(${isCenter ? 1 : 0.94})`,
                    width: '240px',
                    height: `${ITEM_HEIGHT}px`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 20px',
                    borderRadius: '9999px',
                    border: isCenter ? '2px solid #EAB308' : '1.5px solid #E5E7EB',
                    backgroundColor: isCenter ? '#FFC000' : '#FFFFFF',
                    color: isCenter ? '#111827' : '#4B5563',
                    fontWeight: isCenter ? 800 : 600,
                    fontSize: isCenter ? '1.05rem' : '0.92rem',
                    fontFamily: 'var(--font-heading)',
                    boxShadow: isCenter
                      ? '0 6px 18px rgba(255, 192, 0, 0.45)'
                      : '0 2px 6px rgba(0, 0, 0, 0.04)',
                    opacity: isCenter ? 1 : isAdjacent ? 0.72 : 0,
                    cursor: isCenter ? 'default' : 'pointer',
                    userSelect: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease',
                    zIndex: isCenter ? 5 : 2
                  }}
                  onMouseEnter={(e) => {
                    if (!isCenter) {
                      e.currentTarget.style.opacity = '1';
                      e.currentTarget.style.borderColor = '#FF5E7E';
                      e.currentTarget.style.color = '#111827';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isCenter) {
                      e.currentTarget.style.opacity = '0.72';
                      e.currentTarget.style.borderColor = '#E5E7EB';
                      e.currentTarget.style.color = '#4B5563';
                    }
                  }}
                >
                  {service}
                </div>
              );
            })}
          </div>

          {/* Bottom subtle fade gradient */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '16px',
              background: 'linear-gradient(to top, #FFF0F2, rgba(255, 240, 242, 0))',
              zIndex: 6,
              pointerEvents: 'none'
            }}
          />
        </div>

        {/* Bottom Scroll Indicator Arrow */}
        <button
          onClick={goDown}
          aria-label="Next service"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px 12px',
            color: '#FF5E7E',
            fontSize: '0.9rem',
            fontWeight: 900,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'transform 0.15s ease',
            userSelect: 'none',
            zIndex: 10
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(2px)')}
          onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
        >
          ▼
        </button>
      </div>

      {/* Right: "Next →" Button */}
      <div style={{ flex: '0 0 auto' }}>
        <button
          onClick={onNext}
          className="wireframe-btn-peach"
          style={{
            fontSize: '1.2rem',
            fontWeight: 800,
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
