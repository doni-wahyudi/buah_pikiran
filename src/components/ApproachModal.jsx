import React from 'react';

export default function ApproachModal({ approach, onClose }) {
  if (!approach) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        style={{
          backgroundColor: '#F8C2C9',
          borderRadius: '26px',
          maxWidth: '340px',
          width: '100%',
          padding: '2.5rem 2rem 2.25rem 2rem',
          boxShadow: '0 24px 48px rgba(74, 37, 17, 0.25)',
          position: 'relative',
          textAlign: 'center',
          color: '#4A2511'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top-Right Bright Yellow Circular Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#FFC700',
            border: 'none',
            fontSize: '0.95rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 900,
            color: '#4A2511',
            boxShadow: '0 2px 6px rgba(0,0,0,0.12)'
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        {/* Animation GIF Showcase Area */}
        <div
          style={{
            minHeight: '110px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            paddingBottom: '1.25rem',
            borderBottom: '2px solid #4A2511',
            marginBottom: '1.25rem'
          }}
        >
          <svg width="68" height="56" viewBox="0 0 84 68" fill="none">
            <rect x="6" y="18" width="44" height="32" rx="8" fill="#FFC700" />
            <line x1="16" y1="30" x2="38" y2="30" stroke="#4A2511" strokeWidth="3.5" strokeLinecap="round" />
            <line x1="16" y1="38" x2="32" y2="38" stroke="#4A2511" strokeWidth="3.5" strokeLinecap="round" />
            <circle cx="54" cy="24" r="16" stroke="#FF3B5C" strokeWidth="4" fill="rgba(255,255,255,0.5)" />
            <line x1="65" y1="36" x2="77" y2="50" stroke="#FF3B5C" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontSize: '0.78rem',
              fontWeight: 800,
              color: '#4A2511',
              letterSpacing: '0.02em'
            }}
          >
            {approach} — Animation GIF
          </span>
        </div>

        {/* Centered Description Copy matching Page 2 popup */}
        <p
          style={{
            fontSize: '0.9rem',
            color: '#4A2511',
            lineHeight: 1.55,
            fontWeight: 500
          }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
        </p>
      </div>
    </div>
  );
}
