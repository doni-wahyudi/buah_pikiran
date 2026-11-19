import React from 'react';
import MascotIcon from './MascotIcon';

export default function Navbar({ currentPage, onNavigate }) {
  const navItems = [
    { id: 'about', label: 'About Us' },
    { id: 'works', label: 'Our Works' },
    { id: 'articles', label: 'Articles' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <header style={{ position: 'sticky', top: '12px', zIndex: 100, paddingTop: '0.5rem' }}>
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '58px',
            backgroundColor: '#F8BFC7',
            borderRadius: '9999px',
            padding: '0 2.25rem',
            boxShadow: '0 4px 14px rgba(74, 37, 17, 0.06)'
          }}
        >
          {/* Stacked 2-Line Brand Logo: BUAH 🍑 / PIKIRAN */}
          <div
            onClick={() => onNavigate('home')}
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              cursor: 'pointer',
              userSelect: 'none',
              lineHeight: 0.92
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2px',
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '0.98rem',
                letterSpacing: '-0.03em',
                color: '#4A2511'
              }}
            >
              <span>BUAH</span>
              <MascotIcon type="logo" size={16} />
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 900,
                fontSize: '0.98rem',
                letterSpacing: '-0.03em',
                color: '#4A2511'
              }}
            >
              PIKIRAN
            </div>
          </div>

          {/* Navigation Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.05rem',
                    fontWeight: isActive ? 900 : 700,
                    color: '#4A2511',
                    cursor: 'pointer',
                    position: 'relative',
                    padding: '4px 2px',
                    transition: 'opacity 0.15s ease'
                  }}
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-2px',
                        left: 0,
                        right: 0,
                        height: '2.5px',
                        backgroundColor: '#4A2511',
                        borderRadius: '9999px'
                      }}
                    />
                  )}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
