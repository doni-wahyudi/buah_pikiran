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
    <header style={{ position: 'sticky', top: '12px', zIndex: 100, marginBottom: '1rem' }}>
      <div className="container-custom" style={{ padding: '0 1.5rem' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '62px',
          backgroundColor: '#FFCCD2',
          borderRadius: '9999px',
          padding: '0 2rem',
          boxShadow: '0 4px 16px rgba(255, 120, 140, 0.15)',
          border: '1px solid #FFAEB8'
        }}
      >
        {/* Brand Logo */}
        <div
          onClick={() => onNavigate('home')}
          style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', userSelect: 'none' }}
        >
          <MascotIcon type="logo" size={32} />
          <div style={{ fontWeight: 900, fontSize: '1.15rem', letterSpacing: '-0.03em', lineHeight: 1.05, color: '#1F2937' }}>
            BUAH <span style={{ color: '#E11D48' }}>PIKIRAN</span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 900 : 700,
                  color: isActive ? '#991B1B' : '#374151',
                  cursor: 'pointer',
                  position: 'relative',
                  padding: '6px 2px',
                  transition: 'all 0.15s ease'
                }}
              >
                {item.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: '0',
                      right: '0',
                      height: '2.5px',
                      backgroundColor: '#991B1B',
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
