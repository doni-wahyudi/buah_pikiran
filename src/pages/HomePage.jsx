import React, { useState } from 'react';
import MascotIcon from '../components/MascotIcon';
import WireframePlaceholder from '../components/WireframePlaceholder';
import BrandMarquee from '../components/BrandMarquee';
import VerticalServicePicker from '../components/VerticalServicePicker';

export default function HomePage({ onNavigate }) {
  // 1. "What we do?" interactive services accordion
  const [activeService, setActiveService] = useState('writing');
  const servicesList = [
    {
      id: 'writing',
      title: 'Writing Content',
      desc: 'High-converting copywriting, SEO-driven articles, editorial narratives, and brand storytelling that engage and retain users.'
    },
    {
      id: 'ads',
      title: 'Paid Ads',
      desc: 'Full-funnel media buying across Meta, Google Search/YouTube, TikTok, and Programmatic with high ROAS attribution.'
    },
    {
      id: 'message',
      title: 'Customer Message',
      desc: 'Direct-to-consumer messaging, WhatsApp conversational marketing, newsletter lifecycle CRM, and customer retention flows.'
    }
  ];

  // 2. "I need" selection state
  const [selectedPill, setSelectedPill] = useState('SEO');

  // 3. Testimonial Flip Book
  const testimonials = [
    {
      quote: "Buah Pikiran is one of our partners that opens new perspectives and insights on digital strategies. We appreciate its responsiveness for every tasks and discussions in building PLN's digital presence. Cheers!",
      author: "Joshia Pardede",
      role: "Corporate Social & Digital Media Officer PT PLN (Persero)"
    },
    {
      quote: "Working with the Buah Pikiran team transformed our product launch velocity. Their integrated KOL and search strategy drove a 140K surge in verified marketplace shoppers.",
      author: "Brand Director",
      role: "Leading Regional Health & FMCG Brand"
    }
  ];
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const handleNextInquiry = () => {
    onNavigate('contact', { preselectedService: selectedPill });
  };

  return (
    <div style={{ paddingBottom: '3rem' }}>
      {/* SECTION 1: HERO */}
      <section style={{ padding: '3.5rem 0 3rem 0', textAlign: 'center' }}>
        <div className="container-custom">
        <div
          style={{
            backgroundColor: '#FFF8F7',
            padding: '3.5rem 2rem',
            borderRadius: '32px',
            border: '1px solid #FFE4E2'
          }}
        >
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, color: '#111827', marginBottom: '1.25rem' }}>
            Hello!<br />
            <span style={{ color: '#111827' }}>We Are </span>
            <span style={{ color: '#FF4D6D' }}>Buah Pikiran</span>
          </h1>

          <div style={{ margin: '1.5rem 0' }}>
            <MascotIcon type="hero" size={160} />
          </div>

          <p style={{ fontSize: '1.2rem', color: '#4B5563', lineHeight: 1.6, fontWeight: 500, maxWidth: '680px', margin: '0 auto' }}>
            Independent digital <span style={{ fontSize: '1.3rem' }}>🍑</span> agency based in Indonesia since 2019.
            We partner with local and international brands and institutions to build their brand, digital presence and campaigns.
          </p>
        </div>
        </div>
      </section>

      {/* SECTION 2: WHAT WE DO? (PERFORMANCE) */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            
            {/* Left Dynamic Showcase Container (Pink rounded box as in document) */}
            <div>
              <div
                style={{
                  backgroundColor: '#FF5E7E',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  minHeight: '360px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  textAlign: 'center',
                  boxShadow: '0 12px 24px rgba(255, 94, 126, 0.25)'
                }}
              >
                <div>
                  <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🖼️</div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 900 }}>
                    {servicesList.find(s => s.id === activeService)?.title}
                  </h4>
                  <p style={{ fontSize: '0.85rem', opacity: 0.9, marginTop: '6px', maxWidth: '280px' }}>
                    Showcase media for active capability
                  </p>
                </div>
              </div>

              {/* Prev / Next controls */}
              <div style={{ display: 'flex', gap: '12px', marginTop: '1.25rem', justifyContent: 'center' }}>
                <button
                  onClick={() => {
                    const currentIndex = servicesList.findIndex(s => s.id === activeService);
                    const prevIndex = (currentIndex - 1 + servicesList.length) % servicesList.length;
                    setActiveService(servicesList[prevIndex].id);
                  }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC000',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: '#111827',
                    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.3)'
                  }}
                  aria-label="Previous service"
                >
                  ←
                </button>
                <button
                  onClick={() => {
                    const currentIndex = servicesList.findIndex(s => s.id === activeService);
                    const nextIndex = (currentIndex + 1) % servicesList.length;
                    setActiveService(servicesList[nextIndex].id);
                  }}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC000',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 900,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.1rem',
                    color: '#111827',
                    boxShadow: '0 4px 10px rgba(255, 192, 0, 0.3)'
                  }}
                  aria-label="Next service"
                >
                  →
                </button>
              </div>
            </div>

            {/* Right Interactive Accordion */}
            <div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#6B7280', marginBottom: '0.25rem' }}>
                What we do?
              </div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', marginBottom: '1.75rem', letterSpacing: '-0.02em' }}>
                Performance
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {servicesList.map((svc) => {
                  const isExpanded = activeService === svc.id;
                  return (
                    <div
                      key={svc.id}
                      onClick={() => setActiveService(svc.id)}
                      style={{
                        padding: '1.25rem 1.5rem',
                        backgroundColor: isExpanded ? '#FFF5F5' : '#FFFFFF',
                        border: isExpanded ? '2px solid #FF5E7E' : '1.5px solid #E5E7EB',
                        borderRadius: '20px',
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        boxShadow: isExpanded ? '0 6px 16px rgba(255, 94, 126, 0.12)' : 'none'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '1.3rem' }}>🍑</span>
                        <div style={{ fontWeight: 800, fontSize: '1.2rem', color: isExpanded ? '#FF4D6D' : '#1F2937' }}>
                          {svc.title}
                        </div>
                      </div>

                      {/* Description appears only after click */}
                      {isExpanded && (
                        <p style={{ marginTop: '0.75rem', paddingLeft: '2.1rem', fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6 }}>
                          {svc.desc}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: "I NEED ... NEXT ->" (VERTICAL DRUM PICKER IN PEACH/PINK ROUNDED BOX) */}
      <section style={{ padding: '3rem 0' }}>
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

      {/* SECTION 5: WHAT THEY SAY ABOUT BUAH PIKIRAN (TESTIMONIALS IN PEACH/PINK ROUNDED CARD) */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', fontSize: '1.6rem', marginBottom: '0.5rem' }}>
              <span>🍑</span><span>🍑</span><span>🍑</span><span>🍑</span><span>🍑</span>
            </div>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>
              What They Say About<br />Buah Pikiran
            </h2>
          </div>

          {/* Testimonial Peach/Pink Rounded Card */}
          <div
            style={{
              maxWidth: '920px',
              margin: '0 auto',
              backgroundColor: '#FFF2F4', // Peach/pink rounded box container
              border: '1.5px solid #FFD3D9',
              borderRadius: '28px',
              padding: '2.5rem',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2.5rem',
              alignItems: 'center',
              boxShadow: '0 10px 25px -5px rgba(255, 120, 140, 0.08)'
            }}
          >
            {/* Quote details */}
            <div>
              <p style={{ fontSize: '1.15rem', fontStyle: 'italic', color: '#1F2937', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                "{testimonials[activeTestimonialIdx].quote}"
              </p>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    color: '#4B5563',
                    border: '1.5px solid #FFCCD5'
                  }}
                >
                  👤
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827' }}>
                    {testimonials[activeTestimonialIdx].author}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>
                    {testimonials[activeTestimonialIdx].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Media side: Hot pink rounded box as in document */}
            <div>
              <div
                style={{
                  height: '240px',
                  backgroundColor: '#FF5E7E',
                  borderRadius: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#FFFFFF',
                  padding: '1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(255, 94, 126, 0.25)'
                }}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>🏢</div>
                <h4 style={{ fontWeight: 800, fontSize: '1.1rem' }}>
                  {testimonials[activeTestimonialIdx].author}
                </h4>
                <div style={{ fontSize: '0.8rem', opacity: 0.85, marginTop: '4px' }}>
                  Client Partner Feature
                </div>
              </div>
            </div>
          </div>

          {/* Flip / Carousel navigation controls */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '1.5rem' }}>
            <button
              onClick={() => setActiveTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFC000',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(255, 192, 0, 0.3)'
              }}
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={() => setActiveTestimonialIdx((prev) => (prev + 1) % testimonials.length)}
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                backgroundColor: '#FFC000',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                color: '#111827',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(255, 192, 0, 0.3)'
              }}
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 6: READ THE JUICY ARTICLES */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>
              Read the Juicy Articles
            </h2>
            <button
              onClick={() => onNavigate('articles')}
              className="wireframe-btn-peach"
            >
              View more →
            </button>
          </div>

          {/* Articles Grid (3 Cards with rounded corners) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem' }}>
            {[
              {
                tag: 'SEO & AI Search',
                title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today',
                date: '16 November 2026',
                time: '8 mins'
              },
              {
                tag: 'SEO & AI Search',
                title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates',
                date: '16 November 2026',
                time: '5 mins'
              },
              {
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
                  backgroundColor: '#FFFFFF',
                  borderRadius: '20px',
                  border: '1.5px solid #E5E7EB',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <WireframePlaceholder height="200px" label={`Article Cover: ${art.tag}`} />
                <div style={{ padding: '1.25rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, backgroundColor: '#FFE4E6', color: '#BE123C', padding: '3px 8px', borderRadius: '6px' }}>
                      {art.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                      📅 {art.date} • ⏱ {art.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', lineHeight: 1.4 }}>
                    {art.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: RECENT PROJECT */}
      <section style={{ padding: '4.5rem 0' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '2rem', alignItems: 'start' }}>
            
            {/* Left Intro Card */}
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
                Recent<br />Project
              </h2>
              <p style={{ fontSize: '0.95rem', color: '#6B7280', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. We engineer sustainable growth pipelines for category leaders.
              </p>
              <button
                onClick={() => onNavigate('works')}
                className="wireframe-btn-peach"
              >
                View more →
              </button>
            </div>

            {/* Right Project Cards — forced 3-column single row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { id: 'femmy-fyber', name: 'FEMMY FYBER', date: 'May 2026', tag: 'Featured' },
                { id: 'komix', name: 'KOMIX', date: 'Mar 2026', tag: 'Featured' },
                { id: 'flyjaya', name: 'FLYJAYA', date: 'Dec 2025', tag: 'Featured' }
              ].map((proj) => (
                <div
                  key={proj.id}
                  onClick={() => onNavigate('case-study', { id: proj.id })}
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '1.5px solid #E5E7EB',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#FF5E7E';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E7EB';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <WireframePlaceholder height="140px" label={proj.name} />
                  <div style={{ padding: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#FF4D6D', textTransform: 'uppercase' }}>
                        {proj.tag}
                      </span>
                      <span style={{ fontSize: '0.75rem', color: '#9CA3AF' }}>{proj.date}</span>
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#111827', marginBottom: '8px' }}>
                      {proj.name}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.8rem', color: '#6B7280' }}>View case study</span>
                      <span style={{ color: '#FF4D6D', fontWeight: 'bold' }}>→</span>
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
