import React from 'react';

export default function MascotIcon({ type = 'hero', size = 120, className = '' }) {
  if (type === 'logo') {
    return (
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none" className={className}>
        {/* Cute tiny peach inside BUAH PIKIRAN logo */}
        <path d="M18 8 C19 3, 25 4, 24 9 C21 9, 19 8, 18 8 Z" fill="#84CC16" stroke="#4A2511" strokeWidth="1.5" />
        <path
          d="M18 9 C11 9 6 14 6 21 C6 28 13 32 18 30 C23 32 30 28 30 21 C30 14 25 9 18 9 Z"
          fill="#FF5E7E"
          stroke="#4A2511"
          strokeWidth="2"
        />
        <circle cx="14" cy="20" r="2" fill="#4A2511" />
        <circle cx="22" cy="20" r="2" fill="#4A2511" />
        <circle cx="14.6" cy="19.4" r="0.7" fill="#FFFFFF" />
        <circle cx="22.6" cy="19.4" r="0.7" fill="#FFFFFF" />
        <path d="M15.5 24 Q18 26.5 20.5 24" stroke="#4A2511" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'inline-peach') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 36 36"
        fill="none"
        style={{ display: 'inline-block', verticalAlign: 'middle', margin: '0 2px' }}
        className={className}
      >
        <path d="M18 7 C20 2, 27 3, 25 9 C22 9, 19 8, 18 7 Z" fill="#84CC16" />
        <path d="M18 7 C15 3, 10 4, 12 9" fill="#65A30D" />
        <path
          d="M18 9 C10 9 5 14 5 21 C5 28 13 33 18 31 C23 33 31 28 31 21 C31 14 26 9 18 9 Z"
          fill="#FF6B81"
        />
        <ellipse cx="14" cy="20" rx="2.5" ry="3.2" fill="#FFFFFF" />
        <ellipse cx="22" cy="20" rx="2.5" ry="3.2" fill="#FFFFFF" />
        <circle cx="14" cy="20.5" r="1.5" fill="#1E293B" />
        <circle cx="22" cy="20.5" r="1.5" fill="#1E293B" />
        <path d="M16 25 Q18 27 20 25" stroke="#4A2511" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === 'hero') {
    // Page 1: Peach warrior with sword and knight shield
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }} className={className}>
        <svg width={size} height={size * 1.1} viewBox="0 0 220 240" fill="none">
          {/* Ground shadow */}
          <ellipse cx="110" cy="222" rx="58" ry="10" fill="rgba(74, 37, 17, 0.1)" />

          {/* Stem & Green Leaves */}
          <path d="M108 54 C105 32, 82 32, 86 52 C94 54, 102 54, 108 54 Z" fill="#84CC16" />
          <path d="M108 54 C115 30, 142 32, 136 52 C126 55, 116 54, 108 54 Z" fill="#A3E635" />
          <path d="M108 42 L108 58" stroke="#4D7C0F" strokeWidth="4" strokeLinecap="round" />

          {/* Right Arm holding Sword up */}
          <path d="M150 115 C165 100, 170 85, 162 72" stroke="#4A2511" strokeWidth="4" strokeLinecap="round" />
          {/* Sword Blade */}
          <path d="M178 16 L190 22 L166 86 L154 80 Z" fill="#E2E8F0" />
          <path d="M184 19 L160 83" stroke="#94A3B8" strokeWidth="2" />
          {/* Sword Guard & Hilt */}
          <rect x="144" y="76" width="32" height="7" rx="3.5" fill="#F59E0B" transform="rotate(22 144 76)" />
          <rect x="153" y="83" width="9" height="18" rx="3" fill="#B45309" transform="rotate(22 153 83)" />

          {/* Peach Body */}
          <path
            d="M110 56 C65 48 36 84 38 128 C40 172 80 198 110 188 C140 198 180 172 182 128 C184 84 155 48 110 56 Z"
            fill="#FF6B81"
          />
          {/* Subtle Peach Highlight */}
          <path
            d="M110 56 C145 50 176 80 176 124 C176 160 145 186 115 186"
            fill="#FF8598"
            opacity="0.45"
          />

          {/* Cute Large Eyes */}
          <ellipse cx="92" cy="116" rx="11" ry="14" fill="#FFFFFF" />
          <ellipse cx="126" cy="116" rx="11" ry="14" fill="#FFFFFF" />
          <ellipse cx="94" cy="117" rx="6" ry="8" fill="#1E293B" />
          <ellipse cx="128" cy="117" rx="6" ry="8" fill="#1E293B" />
          <circle cx="96" cy="113" r="2.5" fill="#FFFFFF" />
          <circle cx="130" cy="113" r="2.5" fill="#FFFFFF" />

          {/* Eyebrows */}
          <path d="M83 98 Q92 94 100 99" stroke="#4A2511" strokeWidth="3" strokeLinecap="round" />
          <path d="M118 99 Q126 94 135 98" stroke="#4A2511" strokeWidth="3" strokeLinecap="round" />

          {/* Rosy Cheeks */}
          <ellipse cx="74" cy="130" rx="9" ry="5.5" fill="#FF3B5C" opacity="0.55" />
          <ellipse cx="144" cy="130" rx="9" ry="5.5" fill="#FF3B5C" opacity="0.55" />

          {/* Happy Open Smile */}
          <path d="M101 132 Q110 143 119 132 Z" fill="#991B1B" />
          <path d="M101 132 Q110 142 119 132" stroke="#4A2511" strokeWidth="2.5" strokeLinecap="round" />

          {/* Warrior Belt / Sash */}
          <path d="M55 162 Q110 176 165 156" stroke="#78350F" strokeWidth="8" strokeLinecap="round" />
          <rect x="102" y="158" width="16" height="14" rx="3" fill="#FBBF24" />

          {/* Knight Shield on Left */}
          <path
            d="M42 135 L86 135 C88 172 72 200 64 210 C56 200 40 172 42 135 Z"
            fill="#CBD5E1"
            stroke="#64748B"
            strokeWidth="4"
          />
          <path d="M64 138 L64 206" stroke="#94A3B8" strokeWidth="3" />
          <path d="M44 166 L84 166" stroke="#94A3B8" strokeWidth="3" />

          {/* Striped Socks / Legs */}
          <rect x="88" y="186" width="12" height="28" rx="4" fill="#FFFFFF" />
          <rect x="88" y="192" width="12" height="5" fill="#E11D48" />
          <rect x="88" y="202" width="12" height="5" fill="#E11D48" />
          <ellipse cx="92" cy="216" rx="11" ry="6" fill="#64748B" />

          <rect x="122" y="186" width="12" height="28" rx="4" fill="#FFFFFF" />
          <rect x="122" y="192" width="12" height="5" fill="#E11D48" />
          <rect x="122" y="202" width="12" height="5" fill="#E11D48" />
          <ellipse cx="128" cy="216" rx="11" ry="6" fill="#64748B" />
        </svg>
      </div>
    );
  }

  if (type === 'researcher') {
    // Page 2 & Page 6: Peach Researcher with binoculars, glasses, books/briefcase, striped socks
    return (
      <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center' }} className={className}>
        <svg width={size} height={size * 1.1} viewBox="0 0 220 240" fill="none">
          <ellipse cx="115" cy="224" rx="56" ry="8" fill="rgba(74, 37, 17, 0.08)" />

          {/* Leaves at top */}
          <path d="M115 44 C112 22, 88 24, 92 44 Z" fill="#84CC16" />
          <path d="M115 44 C122 20, 148 24, 142 44 Z" fill="#A3E635" />

          {/* Peach Body */}
          <path
            d="M115 46 C70 40 42 76 44 120 C46 164 85 190 115 180 C145 190 184 164 186 120 C188 76 160 40 115 46 Z"
            fill="#FF6B81"
          />

          {/* Blue & Gold Round Glasses */}
          <circle cx="94" cy="86" r="18" fill="#E0F2FE" stroke="#D97706" strokeWidth="4.5" />
          <circle cx="136" cy="86" r="18" fill="#E0F2FE" stroke="#D97706" strokeWidth="4.5" />
          <circle cx="94" cy="86" r="14" stroke="#0284C7" strokeWidth="2.5" />
          <circle cx="136" cy="86" r="14" stroke="#0284C7" strokeWidth="2.5" />
          <line x1="112" y1="86" x2="118" y2="86" stroke="#D97706" strokeWidth="4" />
          <circle cx="94" cy="86" r="5" fill="#1E293B" />
          <circle cx="136" cy="86" r="5" fill="#1E293B" />
          <circle cx="96" cy="84" r="2" fill="#FFFFFF" />
          <circle cx="138" cy="84" r="2" fill="#FFFFFF" />

          {/* Binoculars / Scroll held on left */}
          <g transform="rotate(-12 45 92)">
            <rect x="20" y="76" width="38" height="16" rx="6" fill="#E2E8F0" stroke="#94A3B8" strokeWidth="2" />
            <rect x="24" y="90" width="38" height="16" rx="6" fill="#CBD5E1" stroke="#94A3B8" strokeWidth="2" />
            <ellipse cx="20" cy="84" rx="4" ry="8" fill="#64748B" />
            <ellipse cx="24" cy="98" rx="4" ry="8" fill="#475569" />
          </g>

          {/* Cute smile */}
          <path d="M108 118 Q115 125 122 118" stroke="#4A2511" strokeWidth="3" strokeLinecap="round" />

          {/* Books & Leather Briefcase under right arm */}
          <rect x="128" y="128" width="46" height="36" rx="5" fill="#78350F" stroke="#451A03" strokeWidth="2.5" />
          <rect x="136" y="122" width="32" height="8" rx="2" fill="#38BDF8" />
          <rect x="132" y="138" width="42" height="12" rx="2" fill="#92400E" />
          <rect x="148" y="142" width="10" height="6" rx="1" fill="#FBBF24" />

          {/* Striped Legs & Green Shoes */}
          <rect x="92" y="178" width="13" height="36" rx="4" fill="#FFFFFF" />
          <rect x="92" y="185" width="13" height="6" fill="#E11D48" />
          <rect x="92" y="197" width="13" height="6" fill="#E11D48" />
          <rect x="84" y="212" width="22" height="9" rx="4.5" fill="#65A30D" />

          <rect x="124" y="178" width="13" height="36" rx="4" fill="#FFFFFF" />
          <rect x="124" y="185" width="13" height="6" fill="#E11D48" />
          <rect x="124" y="197" width="13" height="6" fill="#E11D48" />
          <rect x="120" y="212" width="22" height="9" rx="4.5" fill="#65A30D" />
        </svg>
      </div>
    );
  }

  if (type === 'footer') {
    // Footer standing cute peach mascot
    return (
      <svg width={size} height={size * 1.15} viewBox="0 0 120 138" fill="none" className={className}>
        <path d="M60 24 C58 10, 42 12, 45 24 Z" fill="#84CC16" />
        <path d="M60 24 C65 10, 80 12, 76 24 Z" fill="#A3E635" />
        <path
          d="M60 25 C34 22 18 42 20 68 C22 94 44 108 60 102 C76 108 98 94 100 68 C102 42 86 22 60 25 Z"
          fill="#FF6B81"
        />
        {/* Eyes */}
        <ellipse cx="48" cy="60" rx="6" ry="8" fill="#FFFFFF" />
        <ellipse cx="72" cy="60" rx="6" ry="8" fill="#FFFFFF" />
        <circle cx="49" cy="61" r="3.5" fill="#1E293B" />
        <circle cx="73" cy="61" r="3.5" fill="#1E293B" />
        <circle cx="50" cy="59" r="1.2" fill="#FFFFFF" />
        <circle cx="74" cy="59" r="1.2" fill="#FFFFFF" />
        {/* Cheeks & Smile */}
        <ellipse cx="38" cy="70" rx="5" ry="3" fill="#FF3B5C" opacity="0.5" />
        <ellipse cx="82" cy="70" rx="5" ry="3" fill="#FF3B5C" opacity="0.5" />
        <path d="M54 70 Q60 77 66 70 Z" fill="#991B1B" />
        {/* Striped Legs */}
        <rect x="46" y="100" width="8" height="24" rx="3" fill="#FFFFFF" />
        <rect x="46" y="106" width="8" height="4" fill="#E11D48" />
        <rect x="46" y="114" width="8" height="4" fill="#E11D48" />
        <ellipse cx="49" cy="126" rx="7" ry="3.5" fill="#65A30D" />

        <rect x="66" y="100" width="8" height="24" rx="3" fill="#FFFFFF" />
        <rect x="66" y="106" width="8" height="4" fill="#E11D48" />
        <rect x="66" y="114" width="8" height="4" fill="#E11D48" />
        <ellipse cx="71" cy="126" rx="7" ry="3.5" fill="#65A30D" />
      </svg>
    );
  }

  if (type === 'fruits-row') {
    // Page 3: Row of 6 cute fruit mascots (Orange, Peach, Banana x 2)
    const pair = [0, 1];
    return (
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }} className={className}>
        {pair.map((idx) => (
          <React.Fragment key={idx}>
            {/* Cute Orange */}
            <svg width="54" height="58" viewBox="0 0 60 64" fill="none">
              <path d="M30 12 C32 4, 42 5, 40 13 C36 13, 33 12, 30 12 Z" fill="#65A30D" />
              <circle cx="30" cy="36" r="22" fill="#FF5722" stroke="#4A2511" strokeWidth="2" />
              <ellipse cx="24" cy="34" rx="4" ry="5.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.5" />
              <ellipse cx="34" cy="34" rx="4" ry="5.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.5" />
              <circle cx="25" cy="34" r="2" fill="#1E293B" />
              <circle cx="35" cy="34" r="2" fill="#1E293B" />
            </svg>
            {/* Cute Peach */}
            <svg width="54" height="58" viewBox="0 0 60 64" fill="none">
              <path d="M30 12 C27 4, 17 5, 20 13 Z" fill="#84CC16" stroke="#4A2511" strokeWidth="1.5" />
              <path d="M30 12 C34 4, 44 5, 41 13 Z" fill="#A3E635" stroke="#4A2511" strokeWidth="1.5" />
              <path
                d="M30 14 C16 12 8 24 8 37 C8 50 21 58 30 54 C39 58 52 50 52 37 C52 24 44 12 30 14 Z"
                fill="#FF6B81"
                stroke="#4A2511"
                strokeWidth="2"
              />
              <ellipse cx="25" cy="35" rx="4" ry="5.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.5" />
              <ellipse cx="35" cy="35" rx="4" ry="5.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.5" />
              <circle cx="25" cy="35" r="2" fill="#1E293B" />
              <circle cx="35" cy="35" r="2" fill="#1E293B" />
            </svg>
            {/* Cute Bananas */}
            <svg width="58" height="58" viewBox="0 0 64 64" fill="none">
              <path
                d="M42 10 C48 24 38 44 14 48 C10 48 8 43 13 40 C30 35 38 22 36 12 Z"
                fill="#FACC15"
                stroke="#4A2511"
                strokeWidth="2"
              />
              <path
                d="M48 14 C56 30 44 52 18 56 C13 56 11 50 16 47 C35 42 44 27 42 15 Z"
                fill="#FBBF24"
                stroke="#4A2511"
                strokeWidth="2"
              />
              <circle cx="30" cy="42" r="3.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.2" />
              <circle cx="37" cy="40" r="3.5" fill="#FFFFFF" stroke="#4A2511" strokeWidth="1.2" />
              <circle cx="30" cy="42" r="1.6" fill="#1E293B" />
              <circle cx="37" cy="40" r="1.6" fill="#1E293B" />
            </svg>
          </React.Fragment>
        ))}
      </div>
    );
  }

  // Page 2 Bottom CTA: Trio celebrating peach mascots with cans, flying envelopes & ground line
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', width: '100%' }} className={className}>
      <svg width="460" height="210" viewBox="0 0 460 210" fill="none" style={{ maxWidth: '100%', height: 'auto' }}>
        {/* Flying Envelopes & Confetti */}
        <g transform="rotate(-18 55 30)">
          <rect x="40" y="20" width="34" height="22" rx="3" fill="#FF6B81" stroke="#4A2511" strokeWidth="1.5" />
          <path d="M40 20 L57 33 L74 20" stroke="#FFFFFF" strokeWidth="2" />
        </g>
        <g transform="rotate(15 150 20)">
          <rect x="135" y="15" width="28" height="18" rx="2" fill="#FBBF24" stroke="#4A2511" strokeWidth="1.5" />
          <path d="M135 15 L149 25 L163 15" stroke="#4A2511" strokeWidth="1.5" />
        </g>
        <g transform="rotate(-12 275 24)">
          <rect x="260" y="16" width="34" height="22" rx="3" fill="#FF5370" stroke="#4A2511" strokeWidth="1.5" />
          <path d="M260 16 L277 29 L294 16" stroke="#FFFFFF" strokeWidth="2" />
        </g>
        <g transform="rotate(20 390 28)">
          <rect x="375" y="18" width="34" height="22" rx="3" fill="#FF8598" stroke="#4A2511" strokeWidth="1.5" />
          <path d="M375 18 L392 31 L409 18" stroke="#FFFFFF" strokeWidth="2" />
        </g>

        {/* Three Celebrating Peaches */}
        {[95, 225, 355].map((cx, i) => (
          <g key={i}>
            {/* Leaves */}
            <path d={`M${cx} 58 C${cx - 5} 40, ${cx - 24} 42, ${cx - 18} 58 Z`} fill="#84CC16" />
            <path d={`M${cx} 58 C${cx + 8} 40, ${cx + 26} 42, ${cx + 20} 58 Z`} fill="#A3E635" />
            {/* Peach Body */}
            <path
              d={`M${cx} 60 C${cx - 34} 55 ${cx - 52} 80 ${cx - 50} 112 C${cx - 48} 144 ${cx - 18} 162 ${cx} 155 C${cx + 18} 162 ${cx + 48} 144 ${cx + 50} 112 C${cx + 52} 80 ${cx + 34} 55 ${cx} 60 Z`}
              fill="#FF6B81"
            />
            {/* Eyes */}
            <ellipse cx={cx - 14} cy="100" rx="7" ry="9" fill="#FFFFFF" />
            <ellipse cx={cx + 14} cy="100" rx="7" ry="9" fill="#FFFFFF" />
            <circle cx={cx - 13} cy="101" r="4" fill="#1E293B" />
            <circle cx={cx + 15} cy="101" r="4" fill="#1E293B" />
            {/* Smile */}
            <path d={`M${cx - 8} 116 Q${cx} 126 ${cx + 8} 116 Z`} fill="#991B1B" />
            {/* Blue Drink Can in Hand */}
            <rect x={cx + 36} y={i === 1 ? 52 : 76} width="16" height="26" rx="3" fill="#0284C7" stroke="#E0F2FE" strokeWidth="1.5" />
            <path d={`M${cx + 39} ${i === 1 ? 65 : 89} L${cx + 49} ${i === 1 ? 65 : 89}`} stroke="#38BDF8" strokeWidth="3" />
            {/* Legs */}
            <rect x={cx - 18} y="154" width="9" height="32" rx="3" fill="#FFFFFF" />
            <rect x={cx - 18} y="162" width="9" height="5" fill="#E11D48" />
            <rect x={cx - 18} y="172" width="9" height="5" fill="#E11D48" />
            <rect x={cx + 10} y="154" width="9" height="32" rx="3" fill="#FFFFFF" />
            <rect x={cx + 10} y="162" width="9" height="5" fill="#E11D48" />
            <rect x={cx + 10} y="172" width="9" height="5" fill="#E11D48" />
          </g>
        ))}

        {/* Dark Brown Ground Line */}
        <line x1="20" y1="190" x2="440" y2="190" stroke="#4A2511" strokeWidth="4" strokeLinecap="round" />
      </svg>
    </div>
  );
}
