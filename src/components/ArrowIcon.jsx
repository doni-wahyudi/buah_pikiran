import React from 'react';

export default function ArrowIcon({
  direction = 'right',
  size = 20,
  color = 'currentColor',
  strokeWidth = 3.2,
  style = {},
  className = ''
}) {
  const renderPath = () => {
    switch (direction) {
      case 'left':
        return (
          <>
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="11.5 5.5 5 12 11.5 18.5" />
          </>
        );
      case 'right':
        return (
          <>
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12.5 5.5 19 12 12.5 18.5" />
          </>
        );
      case 'up':
        return (
          <>
            <line x1="12" y1="19" x2="12" y2="5" />
            <polyline points="5.5 11.5 12 5 18.5 11.5" />
          </>
        );
      case 'down':
        return (
          <>
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="5.5 12.5 12 19 18.5 12.5" />
          </>
        );
      case 'chevron-down':
        return <polyline points="6 9 12 15 18 9" />;
      case 'chevron-left':
        return <polyline points="15 6 9 12 15 18" />;
      case 'chevron-right':
        return <polyline points="9 6 15 12 9 18" />;
      default:
        return null;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={{
        display: 'block',
        flexShrink: 0,
        transition: 'transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
        ...style
      }}
      aria-hidden="true"
    >
      {renderPath()}
    </svg>
  );
}
