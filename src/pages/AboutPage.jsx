import React, { useState } from 'react';
import MascotIcon from '../components/MascotIcon';
import BrandMarquee from '../components/BrandMarquee';
import ApproachModal from '../components/ApproachModal';

function ValueIllustration({ type }) {
  if (type === 'boldness' || type === 'approach') {
    // Yellow chat bubble + pink magnifying glass
    return (
      <svg width="86" height="72" viewBox="0 0 86 72" fill="none">
        <rect x="6" y="24" width="42" height="30" rx="7" fill="#FFC700" />
        <path d="M14 54 L10 62 L22 54 Z" fill="#FFC700" />
        <line x1="15" y1="35" x2="36" y2="35" stroke="#4A2511" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="15" y1="43" x2="30" y2="43" stroke="#4A2511" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="54" cy="26" r="17" stroke="#FF3B5C" strokeWidth="4" fill="rgba(255,255,255,0.65)" />
        <path d="M49 18 C54 15, 60 18, 61 24" stroke="#FF8598" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="66" y1="39" x2="78" y2="54" stroke="#FF3B5C" strokeWidth="5.5" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'integrity') {
    // Balance scale
    return (
      <svg width="86" height="72" viewBox="0 0 86 72" fill="none">
        <line x1="43" y1="12" x2="43" y2="58" stroke="#E11D48" strokeWidth="4.5" strokeLinecap="round" />
        <rect x="26" y="56" width="34" height="6" rx="3" fill="#E11D48" />
        <line x1="18" y1="22" x2="68" y2="22" stroke="#E11D48" strokeWidth="4" strokeLinecap="round" />
        <path d="M18 22 L11 40 L25 40 Z" stroke="#E11D48" strokeWidth="2.5" fill="none" />
        <path d="M9 40 C9 46, 27 46, 27 40 Z" fill="#FFC700" />
        <path d="M68 22 L61 40 L75 40 Z" stroke="#E11D48" strokeWidth="2.5" fill="none" />
        <path d="M59 40 C59 46, 77 46, 77 40 Z" fill="#FFC700" />
      </svg>
    );
  }
  if (type === 'teamwork') {
    // High-five hands with burst lines
    return (
      <svg width="86" height="72" viewBox="0 0 86 72" fill="none">
        <line x1="43" y1="6" x2="43" y2="14" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" />
        <line x1="31" y1="10" x2="36" y2="17" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" />
        <line x1="55" y1="10" x2="50" y2="17" stroke="#FFC700" strokeWidth="3" strokeLinecap="round" />
        <path d="M24 62 L32 34 C34 26, 41 26, 42 34 L42 62 Z" fill="#FDE047" />
        <path d="M62 62 L54 34 C52 26, 45 26, 44 34 L44 62 Z" fill="#FBBF24" />
      </svg>
    );
  }
  // Effectiveness: Yellow briefcase + pink clock
  return (
    <svg width="86" height="72" viewBox="0 0 86 72" fill="none">
      <rect x="14" y="22" width="44" height="32" rx="6" fill="#FFC700" />
      <path d="M28 22 V16 C28 13, 44 13, 44 16 V22" stroke="#E11D48" strokeWidth="3.5" />
      <line x1="14" y1="34" x2="58" y2="34" stroke="#4A2511" strokeWidth="2.5" />
      <circle cx="56" cy="46" r="14" fill="#FCA5A5" stroke="#E11D48" strokeWidth="3.5" />
      <polyline points="56,39 56,46 62,46" stroke="#991B1B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function FounderAvatar({ id }) {
  if (id === 'suharto') {
    return (
      <svg width="132" height="132" viewBox="0 0 132 132" fill="none">
        <circle cx="66" cy="66" r="56" fill="#38BDF8" />
        {/* Neck & Blue Collared Shirt */}
        <path d="M32 118 C36 94, 96 94, 100 118" fill="#0284C7" stroke="#1E293B" strokeWidth="2.5" />
        <rect x="58" y="80" width="16" height="18" fill="#FDE68A" />
        {/* Face */}
        <ellipse cx="66" cy="56" rx="24" ry="27" fill="#FDE68A" stroke="#1E293B" strokeWidth="2.5" />
        {/* Dark Hair */}
        <path d="M42 50 C40 26, 92 22, 90 50 C82 36, 52 36, 42 50 Z" fill="#0F172A" />
        {/* Eyes & Smile */}
        <circle cx="57" cy="55" r="2.8" fill="#1E293B" />
        <circle cx="75" cy="55" r="2.8" fill="#1E293B" />
        <path d="M52 47 Q57 44 62 47" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M70 47 Q75 44 80 47" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
        <path d="M60 68 Q66 73 72 68" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    );
  }
  if (id === 'kartika') {
    return (
      <svg width="132" height="132" viewBox="0 0 132 132" fill="none">
        <circle cx="66" cy="66" r="56" fill="#BAE6FD" />
        {/* Red Ponytail & Hair */}
        <circle cx="88" cy="36" r="14" fill="#E11D48" stroke="#1E293B" strokeWidth="2.2" />
        {/* Black Blazer */}
        <path d="M34 118 C38 94, 94 94, 98 118" fill="#1E293B" />
        <path d="M56 96 L66 114 L76 96" fill="#FFFFFF" />
        {/* Face */}
        <ellipse cx="66" cy="58" rx="22" ry="25" fill="#FEF3C7" stroke="#1E293B" strokeWidth="2.5" />
        <path d="M44 52 C44 28, 88 28, 88 52 C76 38, 56 38, 44 52 Z" fill="#E11D48" stroke="#1E293B" strokeWidth="2.2" />
        {/* Glasses */}
        <rect x="49" y="51" width="14" height="10" rx="3" stroke="#1E293B" strokeWidth="2.2" fill="rgba(255,255,255,0.5)" />
        <rect x="69" y="51" width="14" height="10" rx="3" stroke="#1E293B" strokeWidth="2.2" fill="rgba(255,255,255,0.5)" />
        <line x1="63" y1="55" x2="69" y2="55" stroke="#1E293B" strokeWidth="2.2" />
        <path d="M61 70 Q66 74 71 70" stroke="#E11D48" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  }
  // Nurul: Blue Hijab + Peace Sign
  return (
    <svg width="132" height="132" viewBox="0 0 132 132" fill="none">
      <circle cx="66" cy="66" r="56" fill="#E0F2FE" />
      {/* Blue Hijab outer shape */}
      <path d="M34 114 C32 60, 40 28, 66 28 C92 28, 100 60, 98 114 Z" fill="#0284C7" stroke="#1E293B" strokeWidth="2.5" />
      {/* Face */}
      <ellipse cx="66" cy="58" rx="19" ry="21" fill="#FDE68A" stroke="#1E293B" strokeWidth="2.2" />
      <circle cx="59" cy="56" r="2.5" fill="#1E293B" />
      <circle cx="73" cy="56" r="2.5" fill="#1E293B" />
      <path d="M61 66 Q66 71 71 66" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round" />
      {/* Peace Sign Hand */}
      <rect x="40" y="76" width="14" height="16" rx="6" fill="#FDE68A" stroke="#1E293B" strokeWidth="2" />
      <line x1="44" y1="76" x2="42" y2="63" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" />
      <line x1="50" y1="76" x2="52" y2="63" stroke="#FDE68A" strokeWidth="5" strokeLinecap="round" />
    </svg>
  );
}

export default function AboutPage({ onNavigate }) {
  const [activeApproachModal, setActiveApproachModal] = useState(null);
  const [toggledFounder, setToggledFounder] = useState(null);

  const founders = [
    {
      id: 'suharto',
      name: 'Suharto Rizkiadi',
      role: 'Chief Executive Officer',
      expertise: [
        'Business Strategy &\nClient Development',
        'Cross-Client\nCollaboration',
        'Team Building &\nCulture Amplification'
      ]
    },
    {
      id: 'kartika',
      name: 'Kartika Eprilla',
      role: 'Chief Operating Officer',
      expertise: [
        '360 Marketing\nStrategy',
        'Digital Content\nMarketing',
        'The Framework &\nStandart Enforcer'
      ]
    },
    {
      id: 'nurul',
      name: 'Nurul Imania',
      role: 'Chief Growth Officer',
      expertise: [
        'Growth Strategy &\nDigital Transformation',
        'Cross-Channel Campaign\nOptimization',
        'Startup & Scape-Up\nBrand Acceleration'
      ]
    }
  ];

  const values = [
    {
      id: 'boldness',
      title: 'Boldness',
      desc: 'Shows boldness in their actions in the role that they’re in.',
      isHotPink: true
    },
    {
      id: 'integrity',
      title: 'Integrity',
      desc: 'Shows honesty in their intentions & actions in the role that they’re in.',
      isHotPink: false
    },
    {
      id: 'teamwork',
      title: 'Teamwork',
      desc: 'Communicate clearly their problems/solutions so the team can move forward effectively',
      isHotPink: true
    },
    {
      id: 'effectiveness',
      title: 'Effectiveness',
      desc: 'Do work that shows effective results in the role that they’re in',
      isHotPink: false
    }
  ];

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {/* SECTION 1: HERO (Soft-Pink Rounded Box connected with top Navbar pill as in Page 2) */}
      <section style={{ padding: '0 0 3rem 0' }}>
        <div className="container-custom">
          <div
            className="responsive-stack"
            style={{
              marginTop: '-58px',
              backgroundColor: '#FCE8E8',
              borderRadius: '28px',
              padding: '5.5rem 3.5rem 3.5rem 3.5rem',
              display: 'grid',
              gridTemplateColumns: '1.1fr 0.9fr',
              gap: '2.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.5vw, 3.2rem)',
                  fontWeight: 800,
                  color: '#4A2511',
                  letterSpacing: '-0.02em',
                  marginBottom: '1.25rem'
                }}
              >
                About Us
              </h1>
              <p
                style={{
                  fontSize: 'clamp(1.25rem, 2.2vw, 1.55rem)',
                  fontWeight: 400,
                  color: '#4A2511',
                  lineHeight: 1.38,
                  maxWidth: '340px'
                }}
              >
                Started in 2019,<br />
                Buah Pikiran build<br />
                its culture and value<br />
                to reach global<br />
                market
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <MascotIcon type="researcher" size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: OUR VALUE (4 Alternating Folder-Tab Cards) */}
      <section style={{ padding: '2.5rem 0 3.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 800, color: '#4A2511', letterSpacing: '-0.02em' }}>
              Our value
            </h2>
          </div>

          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1.35rem'
            }}
          >
            {values.map((val) => {
              const cardBg = val.isHotPink ? '#FF5370' : '#F8C2C8';
              const backStripBg = val.isHotPink ? '#FAD4D8' : '#FCE8E8';
              const textColor = val.isHotPink ? '#FFFFFF' : '#4A2511';

              return (
                <div
                  key={val.id}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '280px'
                  }}
                >
                  {/* Folder Top Row: Raised Tab on Left + Subtle Strip on Right */}
                  <div style={{ display: 'flex', alignItems: 'flex-end', height: '38px', position: 'relative' }}>
                    <div
                      style={{
                        backgroundColor: cardBg,
                        color: textColor,
                        fontWeight: 800,
                        fontSize: '1.08rem',
                        fontFamily: 'var(--font-heading)',
                        padding: '8px 18px 4px 16px',
                        borderRadius: '14px 14px 0 0',
                        zIndex: 2
                      }}
                    >
                      {val.title}
                    </div>
                    <div
                      style={{
                        flex: 1,
                        height: '26px',
                        backgroundColor: backStripBg,
                        borderRadius: '0 12px 0 0',
                        marginLeft: '-6px',
                        marginRight: '10px'
                      }}
                    />
                  </div>

                  {/* Folder Main Card Body */}
                  <div
                    style={{
                      flex: 1,
                      backgroundColor: cardBg,
                      borderRadius: '0 16px 16px 16px',
                      padding: '1.15rem 1.25rem 1.35rem 1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <p
                      style={{
                        fontSize: '0.78rem',
                        color: textColor,
                        lineHeight: 1.4,
                        fontWeight: 500
                      }}
                    >
                      {val.desc}
                    </p>

                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.25rem' }}>
                      <ValueIllustration type={val.id} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: MEET THE FOUNDERS (Hover on Avatar reveals Core Expertise) */}
      <section style={{ padding: '3rem 0 3.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.75rem' }}>
            <h2 style={{ fontSize: '2.35rem', fontWeight: 800, color: '#4A2511', letterSpacing: '-0.02em' }}>
              Meet the Founders
            </h2>
          </div>

          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2rem',
              alignItems: 'start'
            }}
          >
            {founders.map((founder) => {
              const isOpen = toggledFounder === founder.id;
              return (
                <div
                  key={founder.id}
                  className={`founder-col ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setToggledFounder(isOpen ? null : founder.id)}
                >
                  {/* Circular Founder Avatar (Hover Trigger) */}
                  <div className="founder-avatar-trigger" style={{ marginBottom: '0.85rem' }}>
                    <FounderAvatar id={founder.id} />
                  </div>

                  <h3
                    style={{
                      fontSize: '1.08rem',
                      fontWeight: 800,
                      color: '#4A2511',
                      marginBottom: '2px'
                    }}
                  >
                    {founder.name}
                  </h3>
                  <div style={{ fontSize: '0.88rem', color: '#4A2511', fontWeight: 400 }}>
                    {founder.role}
                  </div>

                  {/* Core Expertise Drawer (Reveals on Hover) */}
                  <div className="founder-expertise-box">
                    <div
                      style={{
                        backgroundColor: '#FAF0F0',
                        borderRadius: '18px',
                        padding: '1.15rem 1.25rem',
                        textAlign: 'center'
                      }}
                    >
                      <div
                        style={{
                          display: 'inline-block',
                          backgroundColor: '#FFC700',
                          color: '#4A2511',
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          padding: '3px 12px',
                          borderRadius: '9999px',
                          marginBottom: '0.85rem'
                        }}
                      >
                        Core Expertise &amp; Focus Area:
                      </div>

                      <div>
                        {founder.expertise.map((exp, i) => (
                          <div
                            key={i}
                            style={{
                              fontSize: '0.82rem',
                              fontWeight: 600,
                              color: '#4A2511',
                              padding: '0.6rem 0',
                              whiteSpace: 'pre-line',
                              lineHeight: 1.3,
                              borderBottom:
                                i < founder.expertise.length - 1
                                  ? '1.5px solid #4A2511'
                                  : 'none'
                            }}
                          >
                            {exp}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: BRANDS MARQUEE */}
      <BrandMarquee />

      {/* SECTION 5: OUR SIGNTURE APPROACH (Soft-Pink Box with Sprint & PODS popups) */}
      <section style={{ padding: '2.5rem 0 3.5rem 0' }}>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: '#FCE8E8',
              borderRadius: '28px',
              padding: '3.5rem 2.5rem',
              textAlign: 'center'
            }}
          >
            <h2
              style={{
                fontSize: 'clamp(1.95rem, 3.6vw, 2.4rem)',
                fontWeight: 800,
                color: '#4A2511',
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem'
              }}
            >
              Our Signture Approach
            </h2>

            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: 'clamp(3rem, 10vw, 8rem)',
                flexWrap: 'wrap'
              }}
            >
              {/* Sprint Column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <ValueIllustration type="approach" />
                <button
                  onClick={() => setActiveApproachModal('Sprint')}
                  className="wireframe-btn-peach"
                  style={{ fontSize: '1.15rem', padding: '8px 30px' }}
                >
                  Sprint
                </button>
              </div>

              {/* PODS Column */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
                <ValueIllustration type="approach" />
                <button
                  onClick={() => setActiveApproachModal('PODS')}
                  className="wireframe-btn-peach"
                  style={{ fontSize: '1.15rem', padding: '8px 32px' }}
                >
                  PODS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: START YOUR PROJECT WITH US! */}
      <section style={{ padding: '2rem 0 1rem 0', textAlign: 'center' }}>
        <div className="container-custom">
          <h2
            style={{
              fontSize: 'clamp(1.95rem, 3.6vw, 2.4rem)',
              fontWeight: 800,
              color: '#4A2511',
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}
          >
            Start your project with us!
          </h2>

          <div style={{ margin: '1rem 0 2rem 0' }}>
            <MascotIcon type="trio" />
          </div>

          <div>
            <button
              onClick={() => onNavigate('contact')}
              className="wireframe-btn-peach"
              style={{ fontSize: '1.18rem', padding: '11px 34px' }}
            >
              Book a Discovery Call
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
