import React from 'react';

export default function WireframePlaceholder({
  label = 'Media / Image Placeholder',
  aspectRatio = '16/9',
  variant = 'gray', // 'gray' or 'pink'
  height,
  width = '100%',
  className = '',
  children
}) {
  const isPink = variant === 'pink';

  const baseStyle = {
    width,
    height: height || 'auto',
    aspectRatio: height ? undefined : aspectRatio,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    backgroundColor: isPink ? '#FF5E7E' : '#F1F3F5',
    color: isPink ? '#FFFFFF' : '#6B7280',
    border: isPink ? '1px solid rgba(0,0,0,0.05)' : '1.5px dashed #D1D5DB',
    overflow: 'hidden',
    padding: '1rem',
    textAlign: 'center',
    userSelect: 'none'
  };

  return (
    <div style={baseStyle} className={className}>
      {/* Blueprint diagonal lines for gray placeholders */}
      {!isPink && (
        <svg
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            stroke: 'rgba(156, 163, 175, 0.25)',
            strokeWidth: '1'
          }}
        >
          <line x1="0" y1="0" x2="100%" y2="100%" />
          <line x1="100%" y1="0" x2="0" y2="100%" />
        </svg>
      )}

      <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.7 }}
        >
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
        </svg>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.02em' }}>{label}</span>
        {aspectRatio && <span style={{ fontSize: '0.7rem', opacity: 0.65 }}>[{aspectRatio}]</span>}
        {children}
      </div>
    </div>
  );
}
