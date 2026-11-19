import React, { useState, useRef, useEffect, useCallback } from 'react';
import ArrowIcon from './ArrowIcon';

// C2-smooth organic paper-turn easing: gentle lift, fluid glide through 90deg, cushioned air-pillow landing
function easePaperTurn(t) {
  const clamped = Math.max(0, Math.min(1, t));
  const sine = -(Math.cos(Math.PI * clamped) - 1) / 2;
  const cubic =
    clamped < 0.5
      ? 4 * clamped * clamped * clamped
      : 1 - Math.pow(-2 * clamped + 2, 3) / 2;
  return 0.35 * sine + 0.65 * cubic;
}

function QuotePageContent({ item }) {
  return (
    <>
      <div style={{ fontSize: '0.98rem', lineHeight: 1.55, position: 'relative', zIndex: 2 }}>
        <p style={{ fontWeight: 800, marginBottom: '1rem' }}>{item.lead}</p>
        <p style={{ fontWeight: 500, marginBottom: '1rem' }}>{item.body}</p>
        <p style={{ fontWeight: 500 }}>{item.signoff}</p>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          marginTop: '1.75rem',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '8px',
            backgroundColor: '#FFFFFF',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: '1px solid #E5E7EB'
          }}
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="14" r="7" fill="#475569" />
            <path d="M8 36 C8 27, 32 27, 32 36" fill="#1E293B" />
          </svg>
        </div>
        <div>
          <div
            style={{
              fontWeight: 800,
              fontSize: '1.05rem',
              color: '#4A2511',
              fontFamily: 'var(--font-heading)'
            }}
          >
            {item.author}
          </div>
          <div
            style={{
              fontSize: '0.72rem',
              color: '#4A2511',
              whiteSpace: 'pre-line',
              lineHeight: 1.3
            }}
          >
            {item.role}
          </div>
        </div>
      </div>
    </>
  );
}

export default function TestimonialFlipBook({ testimonials }) {
  const [activeIdx, setActiveIdx] = useState(0);
  // flip = { dir: 'next' | 'prev', fromIdx, toIdx, p: 0..1 } | null
  const [flip, setFlip] = useState(null);
  const [hoverSide, setHoverSide] = useState(null); // 'next' | 'prev' | null

  const rafRef = useRef(null);
  const activeIdxRef = useRef(0);
  const flipActiveRef = useRef(false);
  const queuedDirRef = useRef(null);
  const hoverSideRef = useRef(null);

  useEffect(() => {
    activeIdxRef.current = activeIdx;
  }, [activeIdx]);

  useEffect(() => {
    hoverSideRef.current = hoverSide;
  }, [hoverSide]);

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const startFlip = useCallback(
    (dir) => {
      if (flipActiveRef.current) {
        // Queue one rapid click so flipping multiple pages feels fluent
        queuedDirRef.current = dir;
        return;
      }

      const fromIdx = activeIdxRef.current;
      const toIdx =
        dir === 'next'
          ? (fromIdx + 1) % testimonials.length
          : fromIdx === 0
          ? testimonials.length - 1
          : fromIdx - 1;

      flipActiveRef.current = true;
      const duration = 840; // fluid natural paper-turn duration
      // If user was already hovering that side, start smoothly right from the 6deg peek angle
      const initialOffset = hoverSideRef.current === dir ? 42 : 0;
      const startTime = performance.now() - initialOffset;

      const tick = (now) => {
        const rawT = Math.min(1, (now - startTime) / duration);
        const easedP = easePaperTurn(rawT);

        if (rawT < 1) {
          setFlip({ dir, fromIdx, toIdx, p: easedP });
          rafRef.current = requestAnimationFrame(tick);
        } else {
          // Commit new active page on the exact final frame — zero flicker!
          activeIdxRef.current = toIdx;
          flipActiveRef.current = false;
          setActiveIdx(toIdx);
          setFlip(null);

          if (queuedDirRef.current) {
            const nextQueued = queuedDirRef.current;
            queuedDirRef.current = null;
            rafRef.current = requestAnimationFrame(() => startFlip(nextQueued));
          }
        }
      };

      rafRef.current = requestAnimationFrame(tick);
    },
    [testimonials.length]
  );

  // Determine what sits on the stationary Left & Right base pages
  const baseLeftIdx =
    flip?.dir === 'prev'
      ? flip.toIdx
      : flip?.dir === 'next'
      ? flip.fromIdx
      : activeIdx;

  // Compute physical animation parameters from current progress `p` (0..1)
  const isNext = flip?.dir === 'next';
  const isPrev = flip?.dir === 'prev';
  const p = flip ? flip.p : 0;
  const angle = p * 180; // 0deg -> 180deg
  const arch = Math.sin(p * Math.PI); // 0 -> 1 -> 0 (peaks when page stands vertical at 90deg)
  const paperSkew = arch * (isNext ? -1.9 : 1.9);
  const paperLiftZ = arch * 8;

  // Dynamic cast shadows on stationary pages underneath
  // Uncovering side: shadow recedes smoothly as page lifts 0 -> 95deg
  const uncoverShadowOpacity = flip ? Math.max(0, 1 - p * 1.85) * 0.26 : 0;
  // Receiving side: shadow glides in smoothly as page descends 85 -> 180deg and disappears on landing
  const receiveShadowOpacity = flip
    ? Math.max(0, Math.sin(Math.max(0, (p - 0.38) / 0.62) * Math.PI)) * 0.28
    : 0;

  // Specular paper sheen & ambient shade across front & back of turning leaf
  const frontShadeOpacity = flip ? Math.min(0.32, Math.max(0, p * 0.62)) : 0;
  const backShadeOpacity = flip ? Math.min(0.32, Math.max(0, (1 - p) * 0.62)) : 0;
  const sheenPos = Math.round(15 + p * 75);

  // Subtle corner-peek lift when hovering the arrow or page while resting
  const showRightPeek = !flip && hoverSide === 'next';
  const showLeftPeek = !flip && hoverSide === 'prev';

  return (
    <div>
      {/* 3D Open Book Stage */}
      <div className="flipbook-stage">
        {/* Stacked Paper Thickness Edges Underneath the Book */}
        <div className="flipbook-paper-stack-left" />
        <div className="flipbook-paper-stack-right" />

        <div className="flipbook-spread">
          {/* BASE LEFT PAGE (Quote & Author) */}
          <div
            className="flipbook-page-left"
            onClick={() => startFlip('prev')}
            onMouseEnter={() => setHoverSide('prev')}
            onMouseLeave={() => setHoverSide(null)}
            style={{
              cursor: 'pointer',
              transform: showLeftPeek ? 'rotateY(6deg)' : 'rotateY(0deg)',
              transformOrigin: 'right center',
              transition: flip ? 'none' : 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            title="Click to flip to previous page"
          >
            <QuotePageContent item={testimonials[baseLeftIdx]} />

            {/* Subtle Curved Paper Gutter Shading */}
            <div className="flipbook-gutter-left" />

            {/* Cast Shadow sweeping across Left Base Page */}
            {(isNext && receiveShadowOpacity > 0.005) && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 8,
                  background: `linear-gradient(270deg, rgba(74, 37, 17, ${receiveShadowOpacity}) 0%, rgba(74, 37, 17, ${
                    receiveShadowOpacity * 0.45
                  }) ${Math.min(95, (p - 0.35) * 145)}%, rgba(74, 37, 17, 0) 100%)`
                }}
              />
            )}
            {(isPrev && uncoverShadowOpacity > 0.005) && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 8,
                  background: `linear-gradient(270deg, rgba(74, 37, 17, ${uncoverShadowOpacity}) 0%, rgba(74, 37, 17, 0) ${Math.max(
                    18,
                    (1 - p * 1.6) * 85
                  )}%)`
                }}
              />
            )}
          </div>

          {/* BASE RIGHT PAGE (Hot Pink Spread) */}
          <div
            className="flipbook-page-right"
            onClick={() => startFlip('next')}
            onMouseEnter={() => setHoverSide('next')}
            onMouseLeave={() => setHoverSide(null)}
            style={{
              cursor: 'pointer',
              transform: showRightPeek ? 'rotateY(-6deg)' : 'rotateY(0deg)',
              transformOrigin: 'left center',
              transition: flip ? 'none' : 'transform 0.32s cubic-bezier(0.22, 1, 0.36, 1)'
            }}
            title="Click to flip to next page"
          >
            {/* Subtle Curved Paper Gutter Shading */}
            <div className="flipbook-gutter-right" />

            {/* Cast Shadow sweeping across Right Base Page */}
            {(isNext && uncoverShadowOpacity > 0.005) && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 8,
                  background: `linear-gradient(90deg, rgba(74, 37, 17, ${uncoverShadowOpacity}) 0%, rgba(74, 37, 17, 0) ${Math.max(
                    18,
                    (1 - p * 1.6) * 85
                  )}%)`
                }}
              />
            )}
            {(isPrev && receiveShadowOpacity > 0.005) && (
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  pointerEvents: 'none',
                  zIndex: 8,
                  background: `linear-gradient(90deg, rgba(74, 37, 17, ${receiveShadowOpacity}) 0%, rgba(74, 37, 17, ${
                    receiveShadowOpacity * 0.45
                  }) ${Math.min(95, (p - 0.35) * 145)}%, rgba(74, 37, 17, 0) 100%)`
                }}
              />
            )}
          </div>

          {/* Center Book Binding Spine */}
          <div className="flipbook-spine" />

          {/* ACTIVE 3D TURNING LEAF (NEXT: Right -> Left) */}
          {isNext && (
            <div
              className="flipbook-leaf"
              style={{
                left: '50%',
                transformOrigin: 'left center',
                transform: `translateZ(${paperLiftZ}px) rotateY(${-angle}deg) skewY(${paperSkew}deg)`,
                boxShadow: `${-arch * 22}px ${arch * 14}px ${arch * 38}px rgba(74, 37, 17, ${arch * 0.22})`
              }}
            >
              {/* Front Face: Outgoing Right Hot-Pink Page */}
              <div className="flipbook-leaf-face flipbook-page-right" style={{ height: '100%' }}>
                <div className="flipbook-gutter-right" />
                {/* Moving Overhead Specular Highlight + Dynamic Shade */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: `linear-gradient(90deg, rgba(74,37,17,${frontShadeOpacity * 0.8}) 0%, rgba(255,255,255,${
                      arch * 0.24
                    }) ${sheenPos}%, rgba(74,37,17,${frontShadeOpacity}) 100%)`
                  }}
                />
                {/* Crisp Thin Paper Edge Highlight */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: '2px',
                    backgroundColor: `rgba(255, 255, 255, ${arch * 0.55})`,
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Back Face: Incoming Left Quote Page */}
              <div className="flipbook-leaf-face flipbook-leaf-back flipbook-page-left" style={{ height: '100%' }}>
                <QuotePageContent item={testimonials[flip.toIdx]} />
                <div className="flipbook-gutter-left" />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 6,
                    background: `linear-gradient(270deg, rgba(74,37,17,${backShadeOpacity * 0.7}) 0%, rgba(255,255,255,${
                      arch * 0.26
                    }) ${100 - sheenPos}%, rgba(74,37,17,${backShadeOpacity}) 100%)`
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '2px',
                    backgroundColor: `rgba(255, 255, 255, ${arch * 0.55})`,
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
          )}

          {/* ACTIVE 3D TURNING LEAF (PREV: Left -> Right) */}
          {isPrev && (
            <div
              className="flipbook-leaf"
              style={{
                left: 0,
                transformOrigin: 'right center',
                transform: `translateZ(${paperLiftZ}px) rotateY(${angle}deg) skewY(${paperSkew}deg)`,
                boxShadow: `${arch * 22}px ${arch * 14}px ${arch * 38}px rgba(74, 37, 17, ${arch * 0.22})`
              }}
            >
              {/* Front Face: Outgoing Left Quote Page */}
              <div className="flipbook-leaf-face flipbook-page-left" style={{ height: '100%' }}>
                <QuotePageContent item={testimonials[flip.fromIdx]} />
                <div className="flipbook-gutter-left" />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 6,
                    background: `linear-gradient(270deg, rgba(74,37,17,${frontShadeOpacity * 0.75}) 0%, rgba(255,255,255,${
                      arch * 0.25
                    }) ${sheenPos}%, rgba(74,37,17,${frontShadeOpacity}) 100%)`
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    width: '2px',
                    backgroundColor: `rgba(255, 255, 255, ${arch * 0.55})`,
                    pointerEvents: 'none'
                  }}
                />
              </div>

              {/* Back Face: Incoming Right Hot-Pink Page */}
              <div className="flipbook-leaf-face flipbook-leaf-back flipbook-page-right" style={{ height: '100%' }}>
                <div className="flipbook-gutter-right" />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    pointerEvents: 'none',
                    background: `linear-gradient(90deg, rgba(74,37,17,${backShadeOpacity * 0.75}) 0%, rgba(255,255,255,${
                      arch * 0.24
                    }) ${100 - sheenPos}%, rgba(74,37,17,${backShadeOpacity}) 100%)`
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    width: '2px',
                    backgroundColor: `rgba(255, 255, 255, ${arch * 0.55})`,
                    pointerEvents: 'none'
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Flip Book Navigation Controls */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', marginTop: '1.85rem' }}>
        <button
          onClick={() => startFlip('prev')}
          onMouseEnter={() => setHoverSide('prev')}
          onMouseLeave={() => setHoverSide(null)}
          className="arrow-circle-btn arrow-circle-btn-left"
          aria-label="Previous page"
        >
          <ArrowIcon direction="left" size={20} strokeWidth={3.4} />
        </button>
        <button
          onClick={() => startFlip('next')}
          onMouseEnter={() => setHoverSide('next')}
          onMouseLeave={() => setHoverSide(null)}
          className="arrow-circle-btn arrow-circle-btn-right"
          aria-label="Next page"
        >
          <ArrowIcon direction="right" size={20} strokeWidth={3.4} />
        </button>
      </div>
    </div>
  );
}
