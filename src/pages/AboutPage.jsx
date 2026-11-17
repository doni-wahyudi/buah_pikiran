import React, { useState } from 'react';
import MascotIcon from '../components/MascotIcon';
import BrandMarquee from '../components/BrandMarquee';
import ApproachModal from '../components/ApproachModal';

export default function AboutPage({ onNavigate }) {
  const [activeApproachModal, setActiveApproachModal] = useState(null);

  const founders = [
    {
      id: 'suharto',
      name: 'Suharto Rizkiadi',
      role: 'Chief Executive Officer',
      avatarIcon: '👨‍💼',
      expertise: [
        'Business Strategy & Client Development',
        'Cross-Client Collaboration',
        'Team Building & Culture Amplification'
      ]
    },
    {
      id: 'kartika',
      name: 'Kartika Eprilla',
      role: 'Chief Operating Officer',
      avatarIcon: '👩‍💼',
      expertise: [
        '360 Marketing Strategy',
        'Digital Content Marketing',
        'The Framework & Standart Enforcer'
      ]
    },
    {
      id: 'nurul',
      name: 'Nurul Imania',
      role: 'Chief Growth Officer',
      avatarIcon: '🧕',
      expertise: [
        'Growth Strategy & Digital Transformation',
        'Cross-Channel Campaign Optimization',
        'Startup & Scale-Up Brand Acceleration'
      ]
    }
  ];

  const values = [
    {
      title: 'Boldness',
      desc: 'Shows boldness in their actions in the role that they’re in.',
      icon: '🔍'
    },
    {
      title: 'Integrity',
      desc: 'Shows honesty in their intentions & actions in the role that they’re in.',
      icon: '⚖️'
    },
    {
      title: 'Teamwork',
      desc: 'Communicate clearly their problems/solutions so the team can move forward effectively',
      icon: '🙌'
    },
    {
      title: 'Effectiveness',
      desc: 'Do work that shows effective results in the role that they’re in',
      icon: '⏱️'
    }
  ];

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* SECTION 1: HERO (Peach/Pink Rounded Box) */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: '#FFF2F4', // Soft peach/pink rounded box
              borderRadius: '32px',
              border: '1.5px solid #FFD3D9',
              padding: '3.5rem 3rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'center'
            }}
          >
            <div>
              <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#E11D48', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Who We Are
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', margin: '0.5rem 0 1.25rem 0' }}>
                About Us
              </h1>
              <p style={{ fontSize: '1.35rem', fontWeight: 600, color: '#374151', lineHeight: 1.5, maxWidth: '480px' }}>
                Started in 2019, Buah Pikiran build its culture and value to reach global market.
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <MascotIcon type="researcher" size={170} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR VALUES */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>
              Our value
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {values.map((val, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1.5px solid #E5E7EB',
                  borderRadius: '24px',
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '230px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-block',
                      backgroundColor: '#FF6B7D', // Coral/pink rounded tag
                      color: '#FFFFFF',
                      fontWeight: 800,
                      fontSize: '0.85rem',
                      padding: '5px 14px',
                      borderRadius: '10px',
                      marginBottom: '1rem',
                      boxShadow: '0 2px 8px rgba(255, 107, 125, 0.3)'
                    }}
                  >
                    {val.title}
                  </div>
                  <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.55 }}>
                    {val.desc}
                  </p>
                </div>

                <div style={{ fontSize: '2rem', marginTop: '1.5rem', textAlign: 'right' }}>
                  {val.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE FOUNDERS */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>
              Meet the Founders
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {founders.map((founder) => (
              <div key={founder.id} className="founder-card" style={{ borderRadius: '24px' }}>
                {/* Founder Photo Icon */}
                <div className="founder-avatar-wrap">
                  {founder.avatarIcon}
                </div>

                <h3 style={{ fontSize: '1.3rem', fontWeight: 900, color: '#111827', marginBottom: '4px' }}>
                  {founder.name}
                </h3>
                <div style={{ fontSize: '0.9rem', color: '#6B7280', fontWeight: 600 }}>
                  {founder.role}
                </div>

                {/* Core Expertise Drawer */}
                <div className="founder-expertise-drawer">
                  <div
                    style={{
                      backgroundColor: '#FFF5F6',
                      border: '1px solid #FFD3D9',
                      borderRadius: '16px',
                      padding: '1.1rem',
                      textAlign: 'left'
                    }}
                  >
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#B45309', backgroundColor: '#FEF3C7', padding: '3px 8px', borderRadius: '4px', display: 'inline-block', marginBottom: '8px' }}>
                      Core Expertise & Focus Area:
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {founder.expertise.map((exp, i) => (
                        <div
                          key={i}
                          style={{
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            color: '#374151',
                            padding: '4px 8px',
                            backgroundColor: '#FFFFFF',
                            borderRadius: '6px',
                            border: '1px solid #E5E7EB'
                          }}
                        >
                          • {exp}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: BRANDS MARQUEE */}
      <BrandMarquee />

      {/* SECTION 5: OUR SIGNATURE APPROACH (PEACH/PINK ROUNDED CONTAINER AS IN DOCUMENT) */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: '#FFEBEB', // Soft peach/pink rounded box from document
              borderRadius: '32px',
              border: '2px solid #FFCCD2',
              padding: '4rem 2.5rem',
              textAlign: 'center'
            }}
          >
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
              Our Signature Approach
            </h2>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2.5rem', flexWrap: 'wrap' }}>
              {/* Sprint Button */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid #FFCCD5',
                  maxWidth: '280px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 8px 16px -4px rgba(255, 107, 125, 0.1)'
                }}
              >
                <div style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>⚡</div>
                <button
                  onClick={() => setActiveApproachModal('Sprint')}
                  className="wireframe-btn-peach"
                  style={{ fontSize: '1.15rem', padding: '12px 36px' }}
                >
                  Sprint
                </button>
              </div>

              {/* PODS Button */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2.5rem 2rem',
                  border: '1.5px solid #FFCCD5',
                  maxWidth: '280px',
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  boxShadow: '0 8px 16px -4px rgba(255, 107, 125, 0.1)'
                }}
              >
                <div style={{ fontSize: '3.2rem', marginBottom: '1.25rem' }}>🧩</div>
                <button
                  onClick={() => setActiveApproachModal('PODS')}
                  className="wireframe-btn-peach"
                  style={{ fontSize: '1.15rem', padding: '12px 36px' }}
                >
                  PODS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA (START YOUR PROJECT WITH US!) */}
      <section style={{ padding: '3.5rem 0', textAlign: 'center' }}>
        <div
          className="container-custom"
          style={{
            maxWidth: '920px',
            backgroundColor: '#FFF8F7',
            borderRadius: '32px',
            border: '1.5px solid #FFE4E2',
            padding: '3.5rem 2rem'
          }}
        >
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
            Start your project with us!
          </h2>

          <div style={{ margin: '1.5rem 0 2rem 0' }}>
            <MascotIcon type="trio" size={120} />
          </div>

          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="wireframe-btn-peach"
              style={{ fontSize: '1.15rem', padding: '14px 36px' }}
            >
              Book a Discovery Call →
            </button>
          </div>
        </div>
      </section>

      {/* Sprint / PODS Modal Dialog */}
      <ApproachModal
        approach={activeApproachModal}
        onClose={() => setActiveApproachModal(null)}
      />
    </div>
  );
}
