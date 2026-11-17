import React from 'react';

export default function MascotIcon({ type = 'hero', size = 120, className = '' }) {
  if (type === 'logo') {
    return (
      <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className={className}>
        <circle cx="20" cy="22" r="16" fill="#FF7B7B" />
        <ellipse cx="14" cy="20" rx="2.5" ry="3.5" fill="#1F2937" />
        <ellipse cx="26" cy="20" rx="2.5" ry="3.5" fill="#1F2937" />
        <circle cx="15" cy="19" r="1" fill="#FFFFFF" />
        <circle cx="27" cy="19" r="1" fill="#FFFFFF" />
        <path d="M17 26 Q20 29 23 26" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" />
        <ellipse cx="11" cy="24" rx="2" ry="1.2" fill="#FFA5A5" />
        <ellipse cx="29" cy="24" rx="2" ry="1.2" fill="#FFA5A5" />
        {/* Leaf */}
        <path d="M20 7 C23 2, 28 5, 26 10 C23 9, 21 8, 20 7 Z" fill="#84CC16" />
        <path d="M20 7 C18 4, 15 5, 16 9" stroke="#65A30D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'hero') {
    // Peach warrior with sword and shield
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }} className={className}>
        <svg width={size} height={size * 1.15} viewBox="0 0 200 230" fill="none">
          {/* Stem & Leaf */}
          <path d="M100 45 C100 25, 125 30, 120 48" fill="#84CC16" stroke="#65A30D" strokeWidth="2.5" />
          <path d="M100 45 C90 35, 80 40, 85 50" fill="#65A30D" />
          
          {/* Sword in hand */}
          <path d="M135 15 L145 25 L125 105 L115 95 Z" fill="#E2E8F0" stroke="#475569" strokeWidth="2" />
          <path d="M125 15 L140 30" stroke="#94A3B8" strokeWidth="2" />
          <rect x="110" y="98" width="30" height="6" rx="3" fill="#D97706" transform="rotate(-35 110 98)" />
          <rect x="112" y="105" width="8" height="18" rx="2" fill="#78350F" transform="rotate(-35 112 105)" />

          {/* Peach Body */}
          <path
            d="M100 65 C60 65 35 95 35 135 C35 175 75 195 100 185 C125 195 165 175 165 135 C165 95 140 65 100 65 Z"
            fill="#FF7E79"
            stroke="#EA580C"
            strokeWidth="3.5"
          />

          {/* Cheeks */}
          <ellipse cx="65" cy="145" rx="8" ry="5" fill="#FFA4A0" />
          <ellipse cx="135" cy="145" rx="8" ry="5" fill="#FFA4A0" />

          {/* Eyes */}
          <ellipse cx="75" cy="125" rx="7" ry="10" fill="#1E293B" />
          <circle cx="77" cy="122" r="3" fill="#FFFFFF" />
          <ellipse cx="125" cy="125" rx="7" ry="10" fill="#1E293B" />
          <circle cx="127" cy="122" r="3" fill="#FFFFFF" />

          {/* Happy smile */}
          <path d="M90 142 Q100 152 110 142" stroke="#1E293B" strokeWidth="3" strokeLinecap="round" />

          {/* Knight Shield on left */}
          <path
            d="M30 140 L50 140 C52 170 42 195 30 205 C18 195 8 170 10 140 Z"
            fill="#94A3B8"
            stroke="#334155"
            strokeWidth="2.5"
          />
          <path d="M20 140 L20 200" stroke="#475569" strokeWidth="2" />
          <path d="M10 165 L50 165" stroke="#475569" strokeWidth="2" />

          {/* Feet */}
          <rect x="70" y="185" width="10" height="20" rx="3" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
          <ellipse cx="73" cy="206" rx="9" ry="5" fill="#64748B" />
          <rect x="115" y="185" width="10" height="20" rx="3" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
          <ellipse cx="120" cy="206" rx="9" ry="5" fill="#64748B" />
        </svg>
      </div>
    );
  }

  if (type === 'researcher') {
    // Peach with blueprint roll & magnifying glasses
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }} className={className}>
        <svg width={size} height={size * 1.1} viewBox="0 0 200 220" fill="none">
          <path d="M100 35 C100 15, 125 20, 120 38" fill="#84CC16" stroke="#65A30D" strokeWidth="2.5" />
          {/* Blueprint roll */}
          <rect x="55" y="40" width="45" height="18" rx="4" fill="#38BDF8" stroke="#0284C7" strokeWidth="2" transform="rotate(-25 55 40)" />
          {/* Peach Body */}
          <path
            d="M100 55 C60 55 35 85 35 125 C35 165 75 185 100 175 C125 185 165 165 165 125 C165 85 140 55 100 55 Z"
            fill="#FF7E79"
            stroke="#EA580C"
            strokeWidth="3.5"
          />
          {/* Glasses */}
          <circle cx="80" cy="115" r="14" stroke="#0284C7" strokeWidth="3" fill="rgba(255,255,255,0.7)" />
          <circle cx="120" cy="115" r="14" stroke="#0284C7" strokeWidth="3" fill="rgba(255,255,255,0.7)" />
          <line x1="94" y1="115" x2="106" y2="115" stroke="#0284C7" strokeWidth="3" />
          <ellipse cx="80" cy="115" rx="4" ry="6" fill="#1E293B" />
          <ellipse cx="120" cy="115" rx="4" ry="6" fill="#1E293B" />
          <path d="M92 138 Q100 146 108 138" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
          {/* Belt & legs */}
          <rect x="75" y="172" width="10" height="24" rx="2" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
          <rect x="115" y="172" width="10" height="24" rx="2" fill="#E2E8F0" stroke="#334155" strokeWidth="2" />
          <ellipse cx="78" cy="198" rx="8" ry="4" fill="#64748B" />
          <ellipse cx="120" cy="198" rx="8" ry="4" fill="#64748B" />
        </svg>
      </div>
    );
  }

  // Trio celebration
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }} className={className}>
      <MascotIcon type="hero" size={size * 0.7} />
      <MascotIcon type="researcher" size={size * 0.8} />
      <MascotIcon type="hero" size={size * 0.7} />
    </div>
  );
}
