import React, { useState } from 'react';
import MascotIcon from '../components/MascotIcon';
import WireframePlaceholder from '../components/WireframePlaceholder';

export default function ArticlesPage() {
  const recentArticles = [
    {
      id: 1,
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '8 mins',
      title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today'
    },
    {
      id: 2,
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '5 mins',
      title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates'
    },
    {
      id: 3,
      tag: 'Branding & Positioning',
      date: '16 November 2026',
      time: '3 mins',
      title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media'
    },
    {
      id: 4,
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '8 mins',
      title: 'Organic vs Paid in AI Search? You\'re Asking the Wrong Question'
    },
    {
      id: 5,
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '6 mins',
      title: 'Organic vs Paid in AI Search? You\'re Asking the Wrong Question'
    },
    {
      id: 6,
      tag: 'Branding & Positioning',
      date: '16 November 2026',
      time: '10 mins',
      title: 'Organic vs Paid in AI Search? You\'re Asking the Wrong Question'
    }
  ];

  const [selectedYear, setSelectedYear] = useState('2026');
  const [selectedMonth, setSelectedMonth] = useState('All');
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const previousArticlesDatabase = {
    1: [
      { id: 101, tag: 'SEO & AI Search', date: '16 November 2026', time: '8 mins', title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today' },
      { id: 102, tag: 'SEO & AI Search', date: '16 November 2026', time: '5 mins', title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates' },
      { id: 103, tag: 'Branding & Positioning', date: '16 November 2026', time: '3 mins', title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media' }
    ],
    2: [
      { id: 104, tag: 'Content Strategy', date: '10 October 2026', time: '6 mins', title: 'Creating Editorial Engines: Why Brand Publications Outperform Generic Blogs' },
      { id: 105, tag: 'Data & Analytics', date: '28 September 2026', time: '7 mins', title: 'Decentering Vanity Metrics: Measuring Real Business Impact in GA4' },
      { id: 106, tag: 'Creative Studio', date: '14 September 2026', time: '4 mins', title: 'The Art of Thumb-Stopping Creative in Short-Form Vertical Video' }
    ],
    3: [
      { id: 107, tag: 'KOL Marketing', date: '20 August 2026', time: '9 mins', title: 'From Transactional Sponsors to Co-Creators: The New Influencer Playbook' },
      { id: 108, tag: 'Digital PR', date: '02 August 2026', time: '5 mins', title: 'Building Digital Authority: Securing High-Tier Editorial Coverage in Tier 1 Media' },
      { id: 109, tag: 'AOE Search', date: '19 July 2026', time: '11 mins', title: 'Answer Engine Optimization: Getting Cited by Perplexity and Claude' }
    ],
    4: [
      { id: 110, tag: 'Paid Ads', date: '25 June 2026', time: '7 mins', title: 'Meta Advantage+ vs Manual Bidding: What Actually Converts in SEA Markets' },
      { id: 111, tag: 'Web Design', date: '11 June 2026', time: '5 mins', title: 'High-Converting Landing Pages: Typography and Spatial Psychology' },
      { id: 112, tag: 'Performance', date: '01 June 2026', time: '8 mins', title: 'Full-Funnel Growth Frameworks for Fast-Growing D2C Consumer Brands' }
    ],
    5: [
      { id: 113, tag: 'SEO & AI Search', date: '15 May 2026', time: '6 mins', title: 'Semantic Keyword Clusters: Moving Past Single-Keyword Optimizations' },
      { id: 114, tag: 'Branding', date: '03 May 2026', time: '4 mins', title: 'Brand Resonance in Indonesian FMCG: Connecting Modern Values to Heritage' },
      { id: 115, tag: 'Social Media', date: '20 April 2026', time: '7 mins', title: 'TikTok Algorithm Changes: Community-Led Loops and Search Visibility' }
    ]
  };

  const currentPreviousList = previousArticlesDatabase[currentPageNum] || previousArticlesDatabase[1];

  return (
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-custom">
        
        {/* Hero Section (Peach/Pink Rounded Box) */}
        <div
          style={{
            backgroundColor: '#FFF2F4', // Peach/pink rounded container
            borderRadius: '32px',
            border: '1.5px solid #FFD3D9',
            padding: '3.5rem 3rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '4.5rem'
          }}
        >
          <div>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '1.25rem' }}>
              Enjoy the <span style={{ fontSize: '2.1rem' }}>🍑</span><br />
              Juicy Articles
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#4B5563', lineHeight: 1.6, maxWidth: '480px' }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincid ut laoreet dolore magna aliquam erat.
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <MascotIcon type="researcher" size={170} />
          </div>
        </div>

        {/* Section 1: Recent Articles (Static Grid) */}
        <section style={{ marginBottom: '5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#111827', marginBottom: '2rem' }}>
            Recent Articles
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {recentArticles.map((art) => (
              <article
                key={art.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1.5px solid #E5E7EB',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#FF5E7E';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#E5E7EB';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <WireframePlaceholder height="210px" label={`Cover: ${art.tag}`} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, backgroundColor: '#FFE4E6', color: '#BE123C', padding: '4px 10px', borderRadius: '6px' }}>
                      {art.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                      📅 {art.date} • ⏱ {art.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#111827', lineHeight: 1.45 }}>
                    {art.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Section 2: Previous Articles (Filtered & Paginated) */}
        <section style={{ borderTop: '2px solid #E5E7EB', paddingTop: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2.5rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h2 style={{ fontSize: '1.65rem', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em' }}>
                Previous articles you might missed
              </h2>
            </div>

            {/* Filter Dropdowns in Yellow Pill Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFC000',
                  color: '#111827',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: '0 4px 10px rgba(255, 192, 0, 0.25)'
                }}
              >
                <option value="2026">Year: 2026</option>
                <option value="2025">Year: 2025</option>
                <option value="2024">Year: 2024</option>
              </select>

              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '9999px',
                  backgroundColor: '#FFC000',
                  color: '#111827',
                  fontWeight: 800,
                  fontSize: '0.92rem',
                  border: 'none',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: '0 4px 10px rgba(255, 192, 0, 0.25)'
                }}
              >
                <option value="All">Month: All</option>
                <option value="Nov">November</option>
                <option value="Oct">October</option>
                <option value="Sep">September</option>
                <option value="Aug">August</option>
              </select>
            </div>
          </div>

          {/* Paginated Previous Articles Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginBottom: '3.5rem' }}>
            {currentPreviousList.map((art) => (
              <article
                key={art.id}
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '24px',
                  border: '1.5px solid #E5E7EB',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.03)'
                }}
              >
                <WireframePlaceholder height="190px" label={`Archive Cover: ${art.tag}`} />
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 800, backgroundColor: '#FFE4E6', color: '#BE123C', padding: '4px 10px', borderRadius: '6px' }}>
                      {art.tag}
                    </span>
                    <span style={{ fontSize: '0.75rem', color: '#6B7280' }}>
                      📅 {art.date} • ⏱ {art.time}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#111827', lineHeight: 1.45 }}>
                    {art.title}
                  </h3>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination Controls (< 1 2 3 4 5 >) */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
              disabled={currentPageNum === 1}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                border: '1px solid #D1D5DB',
                fontWeight: 'bold',
                cursor: currentPageNum === 1 ? 'not-allowed' : 'pointer',
                opacity: currentPageNum === 1 ? 0.4 : 1
              }}
            >
              &lt;
            </button>

            {[1, 2, 3, 4, 5].map((num) => {
              const isActive = currentPageNum === num;
              return (
                <button
                  key={num}
                  onClick={() => setCurrentPageNum(num)}
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#FFC000' : '#FFFFFF',
                    color: '#111827',
                    border: isActive ? '2px solid #EAB308' : '1px solid #E5E7EB',
                    fontWeight: 900,
                    fontSize: '1rem',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 4px 10px rgba(255, 192, 0, 0.4)' : 'none'
                  }}
                >
                  {num}
                </button>
              );
            })}

            <button
              onClick={() => setCurrentPageNum((p) => Math.min(5, p + 1))}
              disabled={currentPageNum === 5}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: '#F3F4F6',
                border: '1px solid #D1D5DB',
                fontWeight: 'bold',
                cursor: currentPageNum === 5 ? 'not-allowed' : 'pointer',
                opacity: currentPageNum === 5 ? 0.4 : 1
              }}
            >
              &gt;
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
