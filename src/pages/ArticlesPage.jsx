import React, { useState, useRef, useEffect } from 'react';
import MascotIcon from '../components/MascotIcon';
import WireframePlaceholder from '../components/WireframePlaceholder';
import ArrowIcon from '../components/ArrowIcon';

function ArticleCardItem({ art }) {
  return (
    <article
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s ease'
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
      onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      {/* Rounded Cover with Optional Top-Left Overlaid Category Pill */}
      <WireframePlaceholder scene={art.scene} height="295px" borderRadius="20px">
        {art.tag && (
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
        )}
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
    </article>
  );
}

export default function ArticlesPage() {
  // Static Recent Articles (Top section never changes when pagination/filters below are clicked)
  const recentArticles = [
    {
      id: 1,
      scene: 'article-1',
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '8 mins',
      title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today'
    },
    {
      id: 2,
      scene: 'article-2',
      tag: 'SEO & AI Search',
      date: '16 November 2026',
      time: '5 mins',
      title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates'
    },
    {
      id: 3,
      scene: 'article-3',
      tag: 'Branding & Positioning',
      date: '16 November 2026',
      time: '3 mins',
      title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media'
    },
    {
      id: 4,
      scene: 'article-1',
      tag: null,
      date: '16 November 2026',
      time: '8 mins',
      title: "Organic vs Paid in AI Search? You're Asking the Wrong Question"
    },
    {
      id: 5,
      scene: 'article-1',
      tag: null,
      date: '16 November 2026',
      time: '6 mins',
      title: "Organic vs Paid in AI Search? You're Asking the Wrong Question"
    },
    {
      id: 6,
      scene: 'article-1',
      tag: null,
      date: '16 November 2026',
      time: '10 mins',
      title: "Organic vs Paid in AI Search? You're Asking the Wrong Question"
    }
  ];

  const [selectedYear, setSelectedYear] = useState('Year');
  const [selectedMonth, setSelectedMonth] = useState('Month');
  const [openDropdown, setOpenDropdown] = useState(null); // 'year' | 'month' | null
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const filtersRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filtersRef.current && !filtersRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const previousArticlesDatabase = {
    1: [
      {
        id: 101,
        scene: 'article-1',
        tag: 'SEO & AI Search',
        date: '16 November 2026',
        time: '8 mins',
        title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today'
      },
      {
        id: 102,
        scene: 'article-2',
        tag: 'SEO & AI Search',
        date: '16 November 2026',
        time: '5 mins',
        title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates'
      },
      {
        id: 103,
        scene: 'article-3',
        tag: 'Branding & Positioning',
        date: '16 November 2026',
        time: '3 mins',
        title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media'
      }
    ],
    2: [
      {
        id: 104,
        scene: 'article-2',
        tag: 'SEO & AI Search',
        date: '10 October 2026',
        time: '6 mins',
        title: 'Creating Editorial Engines: Why Brand Publications Outperform Generic Blogs'
      },
      {
        id: 105,
        scene: 'article-3',
        tag: 'Branding & Positioning',
        date: '28 September 2026',
        time: '7 mins',
        title: 'Decentering Vanity Metrics: Measuring Real Business Impact in GA4'
      },
      {
        id: 106,
        scene: 'article-1',
        tag: 'SEO & AI Search',
        date: '14 September 2026',
        time: '4 mins',
        title: 'The Art of Thumb-Stopping Creative in Short-Form Vertical Video'
      }
    ],
    3: [
      {
        id: 107,
        scene: 'article-1',
        tag: 'SEO & AI Search',
        date: '16 November 2026',
        time: '8 mins',
        title: 'Zero-Click Searches Are Rising: How to Keep Your Website Traffic Alive Today'
      },
      {
        id: 108,
        scene: 'article-2',
        tag: 'SEO & AI Search',
        date: '16 November 2026',
        time: '5 mins',
        title: 'How Google’s AI Overviews Are Quietly Reshaping Your Organic Click-Through Rates'
      },
      {
        id: 109,
        scene: 'article-3',
        tag: 'Branding & Positioning',
        date: '16 November 2026',
        time: '3 mins',
        title: 'The Hidden Cost of Inconsistent Messaging Across Your Website and Social Media'
      }
    ],
    4: [
      {
        id: 110,
        scene: 'article-3',
        tag: 'Branding & Positioning',
        date: '25 June 2026',
        time: '7 mins',
        title: 'Meta Advantage+ vs Manual Bidding: What Actually Converts in SEA Markets'
      },
      {
        id: 111,
        scene: 'article-1',
        tag: 'SEO & AI Search',
        date: '11 June 2026',
        time: '5 mins',
        title: 'High-Converting Landing Pages: Typography and Spatial Psychology'
      },
      {
        id: 112,
        scene: 'article-2',
        tag: 'SEO & AI Search',
        date: '01 June 2026',
        time: '8 mins',
        title: 'Full-Funnel Growth Frameworks for Fast-Growing D2C Consumer Brands'
      }
    ],
    5: [
      {
        id: 113,
        scene: 'article-1',
        tag: 'SEO & AI Search',
        date: '15 May 2026',
        time: '6 mins',
        title: 'Semantic Keyword Clusters: Moving Past Single-Keyword Optimizations'
      },
      {
        id: 114,
        scene: 'article-2',
        tag: 'SEO & AI Search',
        date: '03 May 2026',
        time: '4 mins',
        title: 'Brand Resonance in Indonesian FMCG: Connecting Modern Values to Heritage'
      },
      {
        id: 115,
        scene: 'article-3',
        tag: 'Branding & Positioning',
        date: '20 April 2026',
        time: '7 mins',
        title: 'TikTok Algorithm Changes: Community-Led Loops and Search Visibility'
      }
    ]
  };

  const currentPreviousList = previousArticlesDatabase[currentPageNum] || previousArticlesDatabase[1];

  return (
    <div style={{ padding: '2rem 0 3.5rem 0' }}>
      <div className="container-custom">
        {/* HERO SECTION (Clean White Background as in Page 6) */}
        <div
          className="responsive-stack"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: '2.5rem',
            alignItems: 'center',
            marginBottom: '3.5rem'
          }}
        >
          <div>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.6rem)',
                fontWeight: 800,
                color: '#4A2511',
                letterSpacing: '-0.02em',
                lineHeight: 1.08,
                marginBottom: '1.25rem'
              }}
            >
              Enjoy the <MascotIcon type="inline-peach" size={44} /><br />
              Juicy Articles
            </h1>
            <p
              style={{
                fontSize: '1.18rem',
                color: '#4A2511',
                lineHeight: 1.45,
                maxWidth: '470px',
                fontWeight: 400
              }}
            >
              Lorem ipsum dolor sit amet,<br />
              consectetuer adipiscing elit, sed<br />
              diam nonummy nibh euismod tincid<br />
              ut laoreet dolore magna aliquam erat
            </p>
          </div>

          <div style={{ textAlign: 'center' }}>
            <MascotIcon type="researcher" size={210} />
          </div>
        </div>

        {/* SECTION 1: RECENT ARTICLES (Static 3x2 Grid) */}
        <section style={{ marginBottom: '4.5rem' }}>
          <h2
            style={{
              fontSize: '1.55rem',
              fontWeight: 800,
              color: '#4A2511',
              marginBottom: '1.75rem'
            }}
          >
            Recent Articles
          </h2>

          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '2.25rem 1.75rem'
            }}
          >
            {recentArticles.map((art) => (
              <ArticleCardItem key={art.id} art={art} />
            ))}
          </div>
        </section>

        {/* SECTION 2: PREVIOUS ARTICLES YOU MIGHT MISSED (Paginated & Filtered) */}
        <section>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              marginBottom: '2.25rem',
              flexWrap: 'wrap',
              gap: '1.25rem'
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  color: '#4A2511',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.12
                }}
              >
                Previous articles<br />
                you might missed
              </h2>
            </div>

            {/* Custom Styled Yellow Pill Dropdowns (Year & Month) with Hot-Pink Menu matching Contact Service Options */}
            <div ref={filtersRef} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {[
                {
                  id: 'year',
                  val: selectedYear,
                  setVal: setSelectedYear,
                  minWidth: '116px',
                  menuWidth: '160px',
                  options: ['Year', '2026', '2025', '2024', '2023']
                },
                {
                  id: 'month',
                  val: selectedMonth,
                  setVal: setSelectedMonth,
                  minWidth: '132px',
                  menuWidth: '190px',
                  options: [
                    'Month',
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December'
                  ]
                }
              ].map((filter) => {
                const isOpen = openDropdown === filter.id;
                return (
                  <div key={filter.id} style={{ position: 'relative' }}>
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(isOpen ? null : filter.id)}
                      style={{
                        minWidth: filter.minWidth,
                        padding: '8px 10px 8px 18px',
                        backgroundColor: '#FFC700',
                        border: 'none',
                        borderRadius: '9999px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        cursor: 'pointer',
                        color: '#4A2511',
                        fontWeight: 800,
                        fontSize: '1rem',
                        fontFamily: 'var(--font-heading)',
                        boxShadow: isOpen ? '0 6px 14px rgba(255, 199, 0, 0.4)' : 'none',
                        transition: 'box-shadow 0.2s ease, transform 0.15s ease'
                      }}
                    >
                      <span>{filter.val}</span>
                      <span
                        style={{
                          width: '24px',
                          height: '24px',
                          borderRadius: '50%',
                          backgroundColor: '#4A2511',
                          color: '#FFC700',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'transform 0.2s ease',
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      >
                        <ArrowIcon direction="chevron-down" size={13} strokeWidth={3.4} />
                      </span>
                    </button>

                    {/* Hot-Pink Dropdown Menu matching ContactPage Choose Services */}
                    {isOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: 'calc(100% + 8px)',
                          right: 0,
                          width: filter.menuWidth,
                          backgroundColor: '#FF4D6D',
                          borderRadius: '18px',
                          boxShadow: '0 14px 30px rgba(255, 77, 109, 0.32)',
                          zIndex: 60,
                          padding: '10px 0',
                          maxHeight: '280px',
                          overflowY: 'auto'
                        }}
                      >
                        {filter.options.map((opt) => {
                          const isPicked = filter.val === opt;
                          return (
                            <div
                              key={opt}
                              onClick={() => {
                                filter.setVal(opt);
                                setCurrentPageNum(1);
                                setOpenDropdown(null);
                              }}
                              style={{
                                padding: '8px 18px',
                                color: '#FFFFFF',
                                fontWeight: isPicked ? 800 : 600,
                                fontSize: '0.92rem',
                                cursor: 'pointer',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                backgroundColor: isPicked ? 'rgba(0, 0, 0, 0.12)' : 'transparent',
                                transition: 'background-color 0.15s ease'
                              }}
                              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.14)')}
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor = isPicked
                                  ? 'rgba(0, 0, 0, 0.12)'
                                  : 'transparent')
                              }
                            >
                              <span style={{ width: '14px', display: 'inline-block', fontWeight: 900 }}>
                                {isPicked ? '✓' : ''}
                              </span>
                              <span>{opt}</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 3 Paginated Previous Articles Cards */}
          <div
            className="responsive-stack"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1.75rem',
              marginBottom: '3.25rem'
            }}
          >
            {currentPreviousList.map((art) => (
              <ArticleCardItem key={art.id} art={art} />
            ))}
          </div>

          {/* Unified Yellow Capsule Pagination Bar (< 1 2 3 4 5 >) matching Page 6 */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                backgroundColor: '#FFC700',
                borderRadius: '9999px',
                padding: '6px 18px'
              }}
            >
              <button
                onClick={() => setCurrentPageNum((p) => Math.max(1, p - 1))}
                disabled={currentPageNum === 1}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#4A2511',
                  cursor: currentPageNum === 1 ? 'not-allowed' : 'pointer',
                  padding: '4px 8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: currentPageNum === 1 ? 0.45 : 1
                }}
                aria-label="Previous page"
              >
                <ArrowIcon direction="chevron-left" size={17} strokeWidth={3.4} />
              </button>

              {[1, 2, 3, 4, 5].map((num) => {
                const isActive = currentPageNum === num;
                return (
                  <button
                    key={num}
                    onClick={() => setCurrentPageNum(num)}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      backgroundColor: isActive ? '#4A2511' : 'transparent',
                      color: isActive ? '#FFC700' : '#4A2511',
                      border: 'none',
                      fontWeight: 800,
                      fontSize: '1.05rem',
                      fontFamily: 'var(--font-heading)',
                      cursor: 'pointer',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.15s ease'
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
                  background: 'none',
                  border: 'none',
                  color: '#4A2511',
                  cursor: currentPageNum === 5 ? 'not-allowed' : 'pointer',
                  padding: '4px 8px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: currentPageNum === 5 ? 0.45 : 1
                }}
                aria-label="Next page"
              >
                <ArrowIcon direction="chevron-right" size={17} strokeWidth={3.4} />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
