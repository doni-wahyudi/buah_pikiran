import React from 'react';

export default function WireframePlaceholder({
  scene = 'default',
  label = '',
  height = '240px',
  width = '100%',
  borderRadius = '20px',
  style = {},
  children
}) {
  // Visual scenes matching the exact imagery in Revamp Web BP.pdf
  const renderScene = () => {
    if (scene === 'femmy-fyber') {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 30%, #991B1B 0%, #4C0519 55%, #1E1B4B 100%)',
            overflow: 'hidden'
          }}
        >
          {/* Berry pattern background */}
          {[
            { top: '12%', left: '10%', color: '#E11D48', r: 26 },
            { top: '65%', left: '14%', color: '#312E81', r: 22 },
            { top: '20%', left: '72%', color: '#BE123C', r: 28 },
            { top: '70%', left: '75%', color: '#1E3A8A', r: 24 },
            { top: '42%', left: '48%', color: '#9F1239', r: 30 },
            { top: '15%', left: '42%', color: '#1D4ED8', r: 20 }
          ].map((b, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: b.top,
                left: b.left,
                width: b.r * 2,
                height: b.r * 2,
                borderRadius: '50%',
                backgroundColor: b.color,
                opacity: 0.75,
                filter: 'blur(1px)'
              }}
            />
          ))}
          {/* Green Femmy Fyber Sachet sticks */}
          {[
            { top: '22%', left: '12%', rot: '-18deg' },
            { top: '42%', left: '28%', rot: '12deg' },
            { top: '18%', left: '52%', rot: '22deg' },
            { top: '60%', left: '46%', rot: '-14deg' }
          ].map((s, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: s.top,
                left: s.left,
                width: '120px',
                height: '36px',
                borderRadius: '8px',
                background: 'linear-gradient(90deg, #16A34A 0%, #4ADE80 65%, #DCFCE7 100%)',
                transform: `rotate(${s.rot})`,
                boxShadow: '0 6px 14px rgba(0,0,0,0.35)',
                display: 'flex',
                alignItems: 'center',
                padding: '0 10px',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '0.72rem',
                letterSpacing: '-0.02em'
              }}
            >
              femmy fyber
            </div>
          ))}
        </div>
      );
    }

    if (scene === 'komix') {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #334155 0%, #475569 50%, #1E293B 100%)',
            overflow: 'hidden'
          }}
        >
          {/* 3 Komix Herbal Sachets (Green, Orange, Blue) */}
          {[
            { top: '16%', left: '24%', rot: '18deg', bg: 'linear-gradient(90deg, #65A30D, #A3E635)' },
            { top: '42%', left: '20%', rot: '-6deg', bg: 'linear-gradient(90deg, #EA580C, #FACC15)' },
            { top: '64%', left: '26%', rot: '-20deg', bg: 'linear-gradient(90deg, #0284C7, #38BDF8)' }
          ].map((k, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                top: k.top,
                left: k.left,
                width: '150px',
                height: '44px',
                borderRadius: '8px',
                background: k.bg,
                transform: `rotate(${k.rot})`,
                boxShadow: '0 8px 18px rgba(0,0,0,0.35)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '0 14px',
                color: '#FFFFFF',
                fontWeight: 900,
                fontSize: '0.85rem'
              }}
            >
              <span>KOMIX</span>
              <span style={{ fontSize: '0.45rem', opacity: 0.9 }}>HERBAL TUBE</span>
            </div>
          ))}
        </div>
      );
    }

    if (scene === 'flyjaya') {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, #0284C7 0%, #38BDF8 65%, #BAE6FD 100%)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Stylized White Commercial Airplane fuselage */}
          <svg width="90%" height="75%" viewBox="0 0 320 180" fill="none">
            <path
              d="M30 55 C90 50, 220 80, 305 120 C275 130, 140 115, 45 85 C25 78, 18 60, 30 55 Z"
              fill="#FFFFFF"
            />
            <path d="M42 62 C55 60, 68 65, 72 72 L45 72 Z" fill="#1E293B" />
            <text x="86" y="88" fill="#0284C7" fontWeight="900" fontSize="18" transform="rotate(14 86 88)">
              FlyJaya
            </text>
            {/* Windows */}
            {[155, 168, 181, 194, 207, 220, 233, 246].map((wx, idx) => (
              <rect
                key={idx}
                x={wx}
                y={70 + idx * 3.2}
                width="5"
                height="8"
                rx="2.5"
                fill="#334155"
              />
            ))}
          </svg>
        </div>
      );
    }

    if (scene === 'physiogel') {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(145deg, #0F172A 0%, #1E3A8A 55%, #0284C7 100%)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Two white skincare tubes */}
          <div
            style={{
              width: '74px',
              height: '165px',
              backgroundColor: '#F8FAFC',
              borderRadius: '10px 10px 22px 22px',
              transform: 'rotate(-10deg) translateX(-10px)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
              padding: '14px 8px',
              borderTop: '8px solid #0284C7'
            }}
          >
            <div style={{ fontSize: '0.58rem', fontWeight: 900, color: '#0F172A' }}>PHYSIOGEL</div>
            <div style={{ width: '100%', height: '3px', backgroundColor: '#38BDF8', margin: '4px 0' }} />
            <div style={{ fontSize: '0.42rem', color: '#0284C7', fontWeight: 800 }}>DAILY MOISTURE THERAPY</div>
          </div>
          <div
            style={{
              width: '74px',
              height: '165px',
              backgroundColor: '#F8FAFC',
              borderRadius: '10px 10px 22px 22px',
              transform: 'rotate(14deg) translateX(10px) translateY(12px)',
              boxShadow: '0 12px 24px rgba(0,0,0,0.4)',
              padding: '14px 8px',
              borderTop: '8px solid #0284C7'
            }}
          >
            <div style={{ fontSize: '0.58rem', fontWeight: 900, color: '#0F172A' }}>PHYSIOGEL</div>
            <div style={{ width: '100%', height: '3px', backgroundColor: '#38BDF8', margin: '4px 0' }} />
            <div style={{ fontSize: '0.42rem', color: '#0284C7', fontWeight: 800 }}>FACIAL CREAM</div>
          </div>
        </div>
      );
    }

    if (scene === 'lampag') {
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 50% 40%, #064E3B 0%, #022C22 60%, #000000 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: '#FFFFFF' }}>
            <div
              style={{
                fontSize: '2.6rem',
                fontWeight: 900,
                lineHeight: 1,
                borderRight: '1.5px solid rgba(255,255,255,0.35)',
                paddingRight: '16px'
              }}
            >
              G
            </div>
            <div>
              <div style={{ fontSize: '1.35rem', fontWeight: 900, letterSpacing: '0.12em', borderBottom: '2px solid #22C55E', paddingBottom: '2px' }}>
                LAMPAG
              </div>
              <div style={{ fontSize: '0.68rem', opacity: 0.85, marginTop: '3px' }}>
                Member of Alu Group
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (scene === 'article-1') {
      // Laptop desk flatlay with floating green Portuguese/SEO tags ("minhas", "ferramentas", "de", "criação", "favoritas")
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, #78716C 0%, #57534E 50%, #292524 100%)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '1.5rem'
          }}
        >
          {['minhas', 'ferramentas', 'de', 'criação', 'favoritas'].map((word, idx) => (
            <span
              key={idx}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.85)',
                color: '#65A30D',
                padding: '2px 10px',
                borderRadius: '6px',
                fontSize: '0.78rem',
                fontWeight: 800,
                transform: `translateX(${(idx % 2 === 0 ? -1 : 1) * 18}px)`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
            >
              {word}
            </span>
          ))}
        </div>
      );
    }

    if (scene === 'article-2') {
      // Mitre Restaurant & Bar Google Maps UI card with red drink
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #D6D3D1 0%, #A8A29E 100%)',
            overflow: 'hidden',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              marginTop: '26px',
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              padding: '6px 12px',
              fontSize: '0.65rem',
              color: '#374151',
              fontWeight: 600,
              boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
            }}
          >
            🔍 C. José Amado Soler esq, Santo Domingo
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
            <div
              style={{
                width: '84px',
                height: '110px',
                borderRadius: '42px 42px 16px 16px',
                background: 'linear-gradient(180deg, #EF4444 0%, #991B1B 100%)',
                boxShadow: '0 8px 16px rgba(153, 27, 27, 0.35)'
              }}
            />
            <div
              style={{
                flex: 1,
                backgroundColor: '#F5F5F4',
                borderRadius: '14px',
                padding: '10px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)'
              }}
            >
              <div style={{ fontSize: '0.85rem', fontWeight: 900, color: '#1F2937' }}>MITRE</div>
              <div style={{ fontSize: '0.58rem', color: '#EA580C', fontWeight: 700, marginTop: '4px' }}>
                🍴 MITRE Restaurant & Bar
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (scene === 'article-3') {
      // Social media frame with smiling creator & "Real connections, unique stories."
      return (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(160deg, #451A03 0%, #1C1917 100%)',
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ textAlign: 'right', fontSize: '0.75rem', fontWeight: 900, color: '#111827', padding: '0 4px' }}>
              •••
            </div>
            <div
              style={{
                flex: 1,
                borderRadius: '10px',
                background: 'linear-gradient(145deg, #78350F 0%, #292524 100%)',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                color: '#FFFFFF'
              }}
            >
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.1rem', lineHeight: 1.15 }}>
                Real<br />connections,<br />unique stories.
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: '#374151', padding: '4px 4px 0 4px' }}>
              <span>♡ 💬 ▽</span>
              <span>🔖</span>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: '#F3F4F6',
        ...style
      }}
    >
      {renderScene()}
      {children}
    </div>
  );
}
