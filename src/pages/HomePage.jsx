import React, { useState } from 'react';
import MascotIcon from '../components/MascotIcon';
import WireframePlaceholder from '../components/WireframePlaceholder';
import BrandMarquee from '../components/BrandMarquee';
import VerticalServicePicker from '../components/VerticalServicePicker';
import ArrowIcon from '../components/ArrowIcon';
import TestimonialFlipBook from '../components/TestimonialFlipBook';

export default function HomePage({ onNavigate }) {
  // 1. "What we do?" interactive services accordion (Before click = title only, After click = short desc)
  const [activeService, setActiveService] = useState('writing');
  const servicesList = [
    {
      id: 'writing',
      title: 'Writing Content',
      desc: 'Lorem ipsum dolor sit amet, high-converting copywriting, SEO-driven articles, and editorial brand storytelling.'
    },
    {
      id: 'ads',
      title: 'Paid Ads',
      desc: 'Lorem ipsum dolor sit amet, full-funnel media buying across Meta, Google Search, YouTube, and TikTok Ads.'
    },
    {
      id: 'message',
      title: 'Customer Message',
      desc: 'Lorem ipsum dolor sit amet, direct-to-consumer messaging, CRM lifecycle flows, and retention strategy.'
    }
  ];

  // 2. "I need" selection state
  const [selectedPill, setSelectedPill] = useState('SEO');

  // 3. Testimonial Flip Book entries
  const testimonials = [
    {
      lead: '“Buah Pikiran is one of our partners that opens new perspectives and insights on digital strategies.',
      body: 'We appriciate its responsiveness for every tasks and discussions in building PLN’s digital presence.',
      signoff: 'Cheers!',
      author: 'Joshia Pardede',
      role: 'Coorporate Social & Digital\nMedia Officer PT PLN (Persero)'
    },
    {
      lead: '“Working with Buah Pikiran transformed our digital launch velocity and search visibility across Indonesia.',
      body: 'Their team brings structured creativity and fast execution to every campaign milestone we set together.',
      signoff: 'Thank you!',
      author: 'Nadya Kusuma',
      role: 'Head of Brand & Digital\nNational FMCG Category Leader'
    },
    {
      lead: '“From SEO strategy to high-impact KOL storytelling, Buah Pikiran consistently delivers measurable growth.',
      body: 'They operate like an extension of our in-house growth team with sharp market intuition and speed.',
      signoff: 'Warm regards!',
      author: 'Reza Mahendra',
      role: 'VP of Marketing & Growth\nRegional Consumer Tech Brand'
    }
  ];

  const handleNextInquiry = () => {
    onNavigate('contact', { preselectedService: selectedPill });
  };

  const cycleService = (delta) => {
    const currentIndex = servicesList.findIndex((s) => s.id === activeService);
    const baseIdx = currentIndex === -1 ? 0 : currentIndex;
    const nextIndex = (baseIdx + delta + servicesList.length) % servicesList.length;
    setActiveService(servicesList[nextIndex].id);
  };

  return (
    <div style={{ paddingBottom: '2rem' }}>
      {/* SECTION 1: HERO (Soft Pink Box + Intro Paragraph Outside Below) */}
      <section style={{ padding: '0 0 2.5rem 0', textAlign: 'center' }}>
        <div className="container-custom">
          {/* Soft-Pink Rounded Hero Box (connects seamlessly with top Navbar pill as in Page 1) */}
          <div
            style={{
              marginTop: '-58px',
              backgroundColor: '#FCE8E8',
              padding: '5.25rem 2rem 3.25rem 2rem',
              borderRadius: '28px'
            }}
          >
            <h1
              style={{
                fontSize: 'clamp(3.2rem, 6vw, 4.5rem)',
                fontWeight: 500,
                letterSpacing: '-0.02em',
                lineHeight: 1.05,
                color: '#4A2511',
                marginBottom: '0.75rem'
              }}
            >
              Hello!
            </h1>

            <div style={{ margin: '0.5rem 0 1rem 0' }}>
              <MascotIcon type="hero" size={190} />
            </div>

            <div
              style={{
                fontSize: 'clamp(1.85rem, 3.6vw, 2.45rem)',
                fontWeight: 800,
                lineHeight: 1.15,
                color: '#4A2511',
                fontFamily: 'var(--font-heading)'
              }}
            >
              We Are<br />
              Buah Pikiran
            </div>
          </div>

          {/* Intro Paragraph OUTSIDE and BELOW the Hero Pink Box */}
          <div style={{ padding: '3.75rem 1rem 1.5rem 1rem', maxWidth: '820px', margin: '0 auto' }}>
            <p
              style={{
                fontSize: 'clamp(1.15rem, 2.1vw, 1.42rem)',
                color: '#4A2511',
                lineHeight: 1.5,
                fontWeight: 400
              }}
            >
              Independent digital <MascotIcon type="inline-peach" size={28} /> agency based in Indonesia since 2019.
              <br />
              We partner with local and international brands and
              <br />
              institutions to build their brand, digital presence and campaigns.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO? (PERFORMANCE) */}
      <section style={{ padding: '2.5rem 0 3.5rem 0' }}>
        <div className="container-custom">
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.05fr',
              gap: '3.5rem',
              alignItems: 'start'
            }}
          >
            {/* Left Hot-Pink Square Box + Yellow Prev/Next Arrows */}
            <div>
              <div
                style={{
                  backgroundColor: '#FF5370',
                  borderRadius: '22px',
                  aspectRatio: '1 / 0.92',
                  minHeight: '320px',
                  width: '100%'
                }}
              />

              {/* Prev / Next Yellow Circle Controls */}
              <div style={{ display: 'flex', gap: '14px', marginTop: '1.35rem', justifyContent: 'center' }}>
                <button
                  onClick={() => cycleService(-1)}
                  className="arrow-circle-btn arrow-circle-btn-left"
                  aria-label="Previous service"
                >
                  <ArrowIcon direction="left" size={20} strokeWidth={3.4} />
                </button>
                <button
                  onClick={() => cycleService(1)}
                  className="arrow-circle-btn arrow-circle-btn-right"
                  aria-label="Next service"
                >
                  <ArrowIcon direction="right" size={20} strokeWidth={3.4} />
                </button>
              </div>
            </div>

            {/* Right Interactive Service List with Dark Brown Horizontal Divider Lines */}
            <div style={{ paddingTop: '0.5rem' }}>
              <div
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 500,
                  color: '#4A2511',
                  marginBottom: '0.2rem'
                }}
              >
                What we do?
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2.2rem, 4vw, 2.9rem)',
                  fontWeight: 800,
                  color: '#4A2511',
                  marginBottom: '1.75rem',
                  letterSpacing: '-0.02em'
                }}
              >
                Performance
              </h2>

              <div style={{ borderTop: '1.5px solid #4A2511' }}>
                {servicesList.map((svc) => {
                  const isExpanded = activeService === svc.id;
                  return (
                    <div
                      key={svc.id}
                      onClick={() => setActiveService(isExpanded ? null : svc.id)}
                      style={{
                        padding: '1.15rem 0.25rem',
                        borderBottom: '1.5px solid #4A2511',
                        cursor: 'pointer',
                        userSelect: 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                        <div style={{ marginTop: '2px', flexShrink: 0 }}>
                          <MascotIcon type="inline-peach" size={24} />
                        </div>
                        <div>
                          <div
                            style={{
                              fontWeight: 800,
                              fontSize: '1.15rem',
                              color: '#4A2511',
                              fontFamily: 'var(--font-heading)'
                            }}
                          >
                            {svc.title}
                          </div>

                          {/* Short description only appears after click */}
                          {isExpanded && (
                            <p
                              style={{
                                marginTop: '4px',
                                fontSize: '0.92rem',
                                color: '#4A2511',
                                lineHeight: 1.5,
                                fontWeight: 400
                              }}
                            >
                              {svc.desc}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: "I NEED [SCROLL-ABLE] NEXT ->" */}
      <section style={{ padding: '2rem 0 3rem 0' }}>
        <div className="container-custom">
          <VerticalServicePicker
            selectedService={selectedPill}
            onSelectService={setSelectedPill}
            onNext={handleNextInquiry}
          />
        </div>
      </section>

      {/* SECTION 4: BRANDS MARQUEE */}
      <BrandMarquee />

      {/* SECTION 5: WHAT THEY SAY ABOUT BUAH PIKIRAN (FLIP BOOK ANIMATION) */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container-custom">
          <div
            style={{
              backgroundColor: '#FCE8E8',
              borderRadius: '28px',
              padding: '3.5rem 2.5rem 2.75rem 2.5rem'
            }}
          >
            {/* Header with 4 Peaches */}
            <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '0.65rem' }}>
                <MascotIcon type="inline-peach" size={32} />
                <MascotIcon type="inline-peach" size={32} />
                <MascotIcon type="inline-peach" size={32} />
                <MascotIcon type="inline-peach" size={32} />
              </div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
                  fontWeight: 800,
                  color: '#4A2511',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.18
                }}
              >
                What They Say About<br />
                Buah Pikiran
              </h2>
            </div>

            {/* Realistic 3D Flip Book Component */}
            <TestimonialFlipBook testimonials={testimonials} />
          </div>
        </div>
      </section>

      {/* SECTION 6: READ THE JUICY ARTICLES */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container-custom">
          {/* Centered Section Heading */}
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 3.8vw, 2.5rem)',
                fontWeight: 800,
                color: '#4A2511',
                letterSpacing: '-0.02em'
              }}
            >
              Read the Juicy Articles
            </h2>
          </div>

          {/* 3 Article Cards matching Page 1 & Page 6 design */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.75rem'
            }}
          >
            {[
              {
                scene: 'article-1',
                tag: 'SEO & AI Search',
                title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today',
                date: '16 November 2026',
                time: '8 mins'
              },
              {
                scene: 'article-2',
                tag: 'SEO & AI Search',
                title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates',
                date: '16 November 2026',
                time: '5 mins'
              },
              {
                scene: 'article-3',
                tag: 'Branding & Positioning',
                title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media',
                date: '16 November 2026',
                time: '3 mins'
              }
            ].map((art, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('articles')}
                style={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* Tall Rounded Cover with Category Pill Overlaid Top-Left */}
                <WireframePlaceholder scene={art.scene} height="295px" borderRadius="20px">
                  <div style={{ position: 'absolute', top: '14px', left: '14px', zIndex: 10 }}>
                    <span
                      style={{
                        backgroundColor: '#F8BFC7',
                        color: '#4A2511',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        padding: '4px 12px',
                        borderRadius: '9999px',
                        display: 'inline-block'
                      }}
                    >
                      {art.tag}
                    </span>
                  </div>
                </WireframePlaceholder>

                {/* Two Coral-Pink Metadata Pills + Dark Brown Title Below */}
                <div style={{ paddingTop: '0.85rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.65rem', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        backgroundColor: '#FF6B7D',
                        color: '#FFFFFF',
                        padding: '3px 11px',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px'
                      }}
                    >
                      <span>📅</span> {art.date}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: 700,
                        backgroundColor: '#FF6B7D',
                        color: '#FFFFFF',
                        padding: '3px 11px',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px'
                      }}
                    >
                      <span>🕒</span> {art.time}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.02rem',
                      fontWeight: 800,
                      color: '#4A2511',
                      lineHeight: 1.35
                    }}
                  >
                    {art.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom-Left "View more" Yellow Pill Button */}
          <div style={{ marginTop: '1.75rem' }}>
            <button
              onClick={() => onNavigate('articles')}
              className="wireframe-btn-peach"
              style={{ fontSize: '1.05rem', padding: '10px 28px' }}
            >
              View more
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 7: RECENT PROJECT */}
      <section style={{ padding: '3rem 0 2rem 0' }}>
        <div className="container-custom">
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: '190px 1fr',
              gap: '1.75rem',
              alignItems: 'center'
            }}
          >
            {/* Left Intro Column */}
            <div>
              <h2
                style={{
                  fontSize: '2.15rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  letterSpacing: '-0.02em',
                  marginBottom: '0.65rem',
                  lineHeight: 1.12
                }}
              >
                Recent<br />
                Project
              </h2>
              <p
                style={{
                  fontSize: '0.78rem',
                  color: '#4A2511',
                  lineHeight: 1.45,
                  marginBottom: '1.5rem'
                }}
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit
              </p>
              <button
                onClick={() => onNavigate('works')}
                className="wireframe-btn-peach"
                style={{ fontSize: '1.02rem', padding: '9px 26px' }}
              >
                View more
              </button>
            </div>

            {/* Right 3 Project Cards */}
            <div
              className="responsive-stack"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1.25rem'
              }}
            >
              {[
                { id: 'femmy-fyber', scene: 'femmy-fyber', name: 'FEMMY FYBER', date: 'May 2026', tag: 'Featured' },
                { id: 'komix', scene: 'komix', name: 'KOMIX', date: 'Mar 2026', tag: 'Featured' },
                { id: 'flyjaya', scene: 'flyjaya', name: 'FLYJAYA', date: 'Dec 2025', tag: 'Featured' }
              ].map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onNavigate('case-study', { id: proj.id })}
                  style={{
                    backgroundColor: '#ECEAE6',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {/* Visual with Featured Badge Overlaid at Top-Left */}
                  <WireframePlaceholder scene={proj.scene} height="135px" borderRadius="0px">
                    <div style={{ position: 'absolute', top: '12px', left: '12px', zIndex: 10 }}>
                      <span
                        style={{
                          backgroundColor: '#FF6B7D',
                          color: '#FFFFFF',
                          fontSize: '0.74rem',
                          fontWeight: 800,
                          padding: '3px 12px',
                          borderRadius: '9999px'
                        }}
                      >
                        {proj.tag}
                      </span>
                    </div>
                  </WireframePlaceholder>

                  {/* Card Body */}
                  <div style={{ padding: '1rem 1.15rem' }}>
                    <div
                      style={{
                        fontWeight: 800,
                        fontSize: '1.08rem',
                        color: '#4A2511',
                        marginBottom: '4px',
                        fontFamily: 'var(--font-heading)'
                      }}
                    >
                      {proj.name}
                    </div>
                    <p
                      style={{
                        fontSize: '0.76rem',
                        color: '#4A2511',
                        lineHeight: 1.35,
                        marginBottom: '1rem'
                      }}
                    >
                      Lorem ipsum dolor<br />
                      sit amet...
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.76rem', color: '#4A2511', fontWeight: 600 }}>
                        {proj.date}
                      </span>
                      <ArrowIcon direction="right" size={18} color="#991B1B" strokeWidth={3.4} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
