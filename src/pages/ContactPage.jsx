import React, { useState, useEffect } from 'react';

export default function ContactPage({ queryParams }) {
  const [inquiryType, setInquiryType] = useState('project');

  const servicesList = [
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
    'AOE Search'
  ];

  const [selectedService, setSelectedService] = useState('SEO');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Sync with incoming parameter from Homepage "I need [pill] Next ->"
  useEffect(() => {
    if (queryParams?.preselectedService) {
      const match = servicesList.find(
        (s) => s.toLowerCase() === queryParams.preselectedService.toLowerCase()
      );
      if (match) {
        setSelectedService(match);
      } else {
        setSelectedService(queryParams.preselectedService);
      }
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
    <div style={{ padding: '2.5rem 0 5rem 0' }}>
      <div className="container-custom" style={{ maxWidth: '820px' }}>
        
        {/* Top Fruits Row Banner (Peach/Pink Rounded Box) */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '2.5rem',
            backgroundColor: '#FFF2F4', // Soft peach/pink rounded container
            borderRadius: '32px',
            border: '1.5px solid #FFD3D9',
            padding: '3rem 2rem'
          }}
        >
          <div style={{ fontSize: '1.9rem', display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '1.25rem' }}>
            <span>🍎</span><span>🍑</span><span>🍌</span><span>🍎</span><span>🍑</span><span>🍌</span>
          </div>
          
          <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#4B5563', marginBottom: '6px' }}>
            Drop us hello at:
          </div>
          <div style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#111827', letterSpacing: '-0.02em', marginBottom: '2rem' }}>
            hello@buahpikiran.id
          </div>

          <div style={{ display: 'inline-block', backgroundColor: '#FFFFFF', border: '1px solid #FFCCD5', padding: '8px 26px', borderRadius: '9999px', fontSize: '0.92rem', fontWeight: 800, color: '#374151', letterSpacing: '0.04em' }}>
            OR, LET US CONTACT YOU
          </div>
        </div>

        {/* Form Container (Peach/Pink Rounded Box) */}
        <div
          style={{
            backgroundColor: '#FFF8F9', // Soft peach/pink rounded box as in document
            borderRadius: '32px',
            border: '2px solid #FFCCD5',
            padding: '3rem 2.5rem',
            boxShadow: '0 10px 25px -5px rgba(255, 120, 140, 0.08)'
          }}
        >
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>🎉</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#111827', marginBottom: '0.5rem' }}>
                Thank you for reaching out!
              </h3>
              <p style={{ color: '#4B5563', maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                Our team will review your inquiry for <strong>{selectedService}</strong> and respond within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="wireframe-btn-peach"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              
              {/* Question 1: How can you be part of us? */}
              <div>
                <label style={{ display: 'block', fontSize: '1.25rem', fontWeight: 900, color: '#111827', marginBottom: '1rem' }}>
                  How can you be part of us?
                </label>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    { id: 'project', label: 'I have a project' },
                    { id: 'referral', label: 'I can refer you to a potential client' },
                    { id: 'team', label: 'I want to be part of your team' }
                  ].map((option) => (
                    <label
                      key={option.id}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '14px 20px',
                        backgroundColor: '#FFFFFF',
                        border: inquiryType === option.id ? '2px solid #FF5E7E' : '1.5px solid #FFD3D9',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        fontWeight: 700,
                        color: inquiryType === option.id ? '#FF4D6D' : '#374151',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <input
                        type="radio"
                        name="inquiryType"
                        value={option.id}
                        checked={inquiryType === option.id}
                        onChange={() => setInquiryType(option.id)}
                        style={{ width: '18px', height: '18px', accentColor: '#FF4D6D', cursor: 'pointer' }}
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2: Choose Services */}
              <div>
                <label style={{ display: 'block', fontSize: '1.2rem', fontWeight: 900, color: '#111827', marginBottom: '0.75rem' }}>
                  Choose services*
                </label>

                {/* Custom Interactive Dropdown */}
                <div style={{ position: 'relative' }}>
                  <button
                    type="button"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    style={{
                      width: '100%',
                      padding: '14px 22px',
                      backgroundColor: '#FFFFFF',
                      border: dropdownOpen ? '2px solid #FF5E7E' : '1.5px solid #FFCCD5',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      cursor: 'pointer',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#111827',
                      textAlign: 'left'
                    }}
                  >
                    <span>{selectedService}</span>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: '#FFC000',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 'bold',
                        color: '#111827',
                        transition: 'transform 0.2s ease',
                        transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0)'
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown Options List */}
                  {dropdownOpen && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '110%',
                        left: 0,
                        right: 0,
                        backgroundColor: '#FF4D6D', // Vibrant hot pink dropdown card as in document
                        borderRadius: '20px',
                        boxShadow: '0 12px 28px rgba(255, 77, 109, 0.3)',
                        zIndex: 50,
                        overflow: 'hidden',
                        padding: '8px 0',
                        maxHeight: '260px',
                        overflowY: 'auto'
                      }}
                    >
                      {servicesList.map((svc) => (
                        <div
                          key={svc}
                          onClick={() => {
                            setSelectedService(svc);
                            setDropdownOpen(false);
                          }}
                          style={{
                            padding: '12px 22px',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            backgroundColor: selectedService === svc ? 'rgba(0,0,0,0.18)' : 'transparent',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between'
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.12)')}
                          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = selectedService === svc ? 'rgba(0,0,0,0.18)' : 'transparent')}
                        >
                          <span>{svc}</span>
                          {selectedService === svc && <span>✓</span>}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Name Fields (First & Last) */}
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>
                  Your name*
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        border: '1.5px solid #FFD3D9',
                        fontSize: '0.95rem',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#FF4D6D')}
                      onBlur={(e) => (e.target.style.borderColor = '#FFD3D9')}
                    />
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '4px', display: 'block' }}>First</span>
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '14px 18px',
                        borderRadius: '14px',
                        border: '1.5px solid #FFD3D9',
                        fontSize: '0.95rem',
                        backgroundColor: '#FFFFFF',
                        outline: 'none'
                      }}
                      onFocus={(e) => (e.target.style.borderColor = '#FF4D6D')}
                      onBlur={(e) => (e.target.style.borderColor = '#FFD3D9')}
                    />
                    <span style={{ fontSize: '0.75rem', color: '#6B7280', marginTop: '4px', display: 'block' }}>Last</span>
                  </div>
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>
                  Your email*
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    border: '1.5px solid #FFD3D9',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#FF4D6D')}
                  onBlur={(e) => (e.target.style.borderColor = '#FFD3D9')}
                />
              </div>

              {/* Message Field */}
              <div>
                <label style={{ display: 'block', fontSize: '1rem', fontWeight: 800, color: '#111827', marginBottom: '0.5rem' }}>
                  Message (optional)
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project, timeline, and goals..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: '14px',
                    border: '1.5px solid #FFD3D9',
                    fontSize: '0.95rem',
                    backgroundColor: '#FFFFFF',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.target.style.borderColor = '#FF4D6D')}
                  onBlur={(e) => (e.target.style.borderColor = '#FFD3D9')}
                />
              </div>

              {/* Submit Button */}
              <div style={{ textAlign: 'right' }}>
                <button
                  type="submit"
                  className="wireframe-btn-peach"
                  style={{ fontSize: '1.15rem', padding: '14px 40px' }}
                >
                  Send
                </button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
