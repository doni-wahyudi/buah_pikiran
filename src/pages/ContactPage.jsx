import React, { useState, useEffect } from 'react';
import MascotIcon from '../components/MascotIcon';
import ArrowIcon from '../components/ArrowIcon';

export default function ContactPage({ queryParams }) {
  const [inquiryType, setInquiryType] = useState('project');

  const servicesList = [
    'Choose Services',
    'Digital PR',
    'SEO',
    'Content',
    'Client Services',
    'Creative Studio',
    'Data',
    'People',
    'Resources',
    'Social Media',
    'Paid Ads',
    'AOE Search',
    '360° Campaign',
    'Branding',
    'Web design',
    'KOL',
    'Strategic communication',
    'Marketing strategy'
  ];

  const [selectedService, setSelectedService] = useState('Choose services*');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sync with incoming parameter from Homepage "I need [pill] Next ->"
  useEffect(() => {
    if (queryParams?.preselectedService) {
      const match = servicesList.find(
        (s) => s.toLowerCase() === queryParams.preselectedService.toLowerCase()
      );
      setSelectedService(match || queryParams.preselectedService);
    }
  }, [queryParams]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div style={{ padding: '2.5rem 0 4rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '880px' }}>
        {/* Top Row of 6 Cute Fruit Mascots (Left-Aligned as in Page 3) */}
        <div style={{ marginBottom: '2rem' }}>
          <MascotIcon type="fruits-row" />
        </div>

        {/* Drop us hello at: hello@buahpikiran.id */}
        <div style={{ marginBottom: '3.25rem' }}>
          <div
            style={{
              fontSize: 'clamp(1.35rem, 2.4vw, 1.75rem)',
              fontWeight: 400,
              color: '#4A2511',
              marginBottom: '0.15rem'
            }}
          >
            Drop us hello at:
          </div>
          <a
            href="mailto:hello@buahpikiran.id"
            style={{
              fontSize: 'clamp(2.1rem, 4.8vw, 3.25rem)',
              fontWeight: 800,
              color: '#4A2511',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
              fontFamily: 'var(--font-heading)',
              display: 'inline-block'
            }}
          >
            hello@buahpikiran.id
          </a>
        </div>

        {/* OR, LET US CONTACT YOU */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h2
            style={{
              fontSize: '1.45rem',
              fontWeight: 800,
              color: '#4A2511',
              letterSpacing: '0.01em',
              textTransform: 'uppercase'
            }}
          >
            OR, LET US CONTACT YOU
          </h2>
        </div>

        {isSubmitted ? (
          <div
            style={{
              backgroundColor: '#FCE8E8',
              borderRadius: '28px',
              padding: '3rem 2rem',
              textAlign: 'center'
            }}
          >
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#4A2511', marginBottom: '0.75rem' }}>
              Thank you for reaching out!
            </h3>
            <p style={{ color: '#4A2511', marginBottom: '1.5rem' }}>
              We have received your inquiry for{' '}
              <strong>
                {selectedService === 'Choose services*' || selectedService === 'Choose Services'
                  ? 'General Inquiry'
                  : selectedService}
              </strong>{' '}
              and will contact you shortly.
            </p>
            <button onClick={() => setIsSubmitted(false)} className="wireframe-btn-peach">
              Back to Form
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Question 1: How can you be part of us? */}
            <div>
              <div
                style={{
                  fontSize: '1.55rem',
                  fontWeight: 400,
                  color: '#4A2511',
                  marginBottom: '1rem'
                }}
              >
                How can you be part of us?
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  { id: 'project', label: 'I have a project' },
                  { id: 'referral', label: 'I can refer you to a potential client' },
                  { id: 'team', label: 'I want to be part of your team' }
                ].map((option) => {
                  const isChecked = inquiryType === option.id;
                  return (
                    <label
                      key={option.id}
                      onClick={() => setInquiryType(option.id)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'pointer',
                        fontWeight: 800,
                        fontSize: '1.1rem',
                        color: '#4A2511',
                        fontFamily: 'var(--font-heading)',
                        userSelect: 'none'
                      }}
                    >
                      <span
                        style={{
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          border: '2px solid #991B1B',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          backgroundColor: '#FFFFFF'
                        }}
                      >
                        {isChecked && (
                          <span
                            style={{
                              width: '10px',
                              height: '10px',
                              borderRadius: '50%',
                              backgroundColor: '#991B1B'
                            }}
                          />
                        )}
                      </span>
                      <span>{option.label}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Question 2: Choose services* Dropdown */}
            <div style={{ position: 'relative', maxWidth: '290px' }}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 22px',
                  backgroundColor: '#FCE8E8',
                  border: 'none',
                  borderRadius: '9999px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                  fontSize: '1.08rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                <span>{selectedService}</span>
                <span
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: '#FFC700',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#4A2511',
                    transition: 'transform 0.2s ease',
                    transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                  }}
                >
                  <ArrowIcon direction="chevron-down" size={16} strokeWidth={3.4} />
                </span>
              </button>

              {/* Hot-Pink Dropdown Menu matching Page 3 */}
              {dropdownOpen && (
                <div
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 6px)',
                    left: '14px',
                    width: '250px',
                    backgroundColor: '#FF4D6D',
                    borderRadius: '18px',
                    boxShadow: '0 14px 30px rgba(255, 77, 109, 0.32)',
                    zIndex: 60,
                    padding: '12px 0',
                    maxHeight: '340px',
                    overflowY: 'auto'
                  }}
                >
                  {servicesList.map((svc) => {
                    const isPicked =
                      selectedService === svc ||
                      (selectedService === 'Choose services*' && svc === 'Choose Services');
                    return (
                      <div
                        key={svc}
                        onClick={() => {
                          setSelectedService(svc === 'Choose Services' ? 'Choose services*' : svc);
                          setDropdownOpen(false);
                        }}
                        style={{
                          padding: '7px 18px',
                          color: '#FFFFFF',
                          fontWeight: 600,
                          fontSize: '0.92rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '8px'
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.12)')}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <span style={{ width: '14px', display: 'inline-block', fontWeight: 900 }}>
                          {isPicked ? '✓' : ''}
                        </span>
                        <span>{svc}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Your name* (First & Last Soft-Pink Pill Inputs) */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Your name*
              </label>
              <div
                className="responsive-stack"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '2.5rem'
                }}
              >
                <div>
                  <input
                    type="text"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 20px',
                      borderRadius: '9999px',
                      border: 'none',
                      fontSize: '1rem',
                      backgroundColor: '#FCE8E8',
                      color: '#4A2511',
                      outline: 'none'
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.92rem',
                      color: '#4A2511',
                      marginTop: '6px',
                      display: 'block'
                    }}
                  >
                    First
                  </span>
                </div>

                <div>
                  <input
                    type="text"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    style={{
                      width: '100%',
                      height: '46px',
                      padding: '0 20px',
                      borderRadius: '9999px',
                      border: 'none',
                      fontSize: '1rem',
                      backgroundColor: '#FCE8E8',
                      color: '#4A2511',
                      outline: 'none'
                    }}
                  />
                  <span
                    style={{
                      fontSize: '0.92rem',
                      color: '#4A2511',
                      marginTop: '6px',
                      display: 'block'
                    }}
                  >
                    Last
                  </span>
                </div>
              </div>
            </div>

            {/* Your email* (Full-width Soft-Pink Pill Input) */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Your email*
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  height: '46px',
                  padding: '0 22px',
                  borderRadius: '9999px',
                  border: 'none',
                  fontSize: '1rem',
                  backgroundColor: '#FCE8E8',
                  color: '#4A2511',
                  outline: 'none'
                }}
              />
            </div>

            {/* Message (optional) (Large Soft-Pink Rounded Box) */}
            <div>
              <label
                style={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#4A2511',
                  marginBottom: '0.5rem',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Message <span style={{ fontWeight: 400 }}>(optional)</span>
              </label>
              <textarea
                rows="6"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  minHeight: '210px',
                  padding: '18px 22px',
                  borderRadius: '26px',
                  border: 'none',
                  fontSize: '1rem',
                  backgroundColor: '#FCE8E8',
                  color: '#4A2511',
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>

            {/* Bottom-Right Yellow Pill "Send" Button */}
            <div style={{ textAlign: 'right' }}>
              <button
                type="submit"
                className="wireframe-btn-peach"
                style={{ fontSize: '1.25rem', padding: '10px 36px' }}
              >
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
