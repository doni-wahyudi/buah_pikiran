import React from 'react';
import WireframePlaceholder from './WireframePlaceholder';

export default function ApproachModal({ approach, onClose }) {
  if (!approach) return null;

  const isSprint = approach === 'Sprint';

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: '20px',
          maxWidth: '520px',
          width: '100%',
          padding: '2rem 2.25rem',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
          position: 'relative',
          border: '1.5px solid #E5E7EB'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#F3F4F6',
            border: 'none',
            fontSize: '1rem',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: '#4B5563'
          }}
          aria-label="Close modal"
        >
          ✕
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '9999px',
              backgroundColor: '#FEF08A',
              fontWeight: 800,
              fontSize: '0.8rem',
              color: '#854D0E',
              border: '1px solid #FDE047'
            }}
          >
            {isSprint ? '⚡ SPRINT METHODOLOGY' : '🧩 PODS METHODOLOGY'}
          </span>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 900, color: '#111827' }}>
            {isSprint ? 'Sprint Approach' : 'Dedicated PODS'}
          </h3>
        </div>

        {/* Media / Animation placeholder */}
        <div style={{ marginBottom: '1.25rem' }}>
          <WireframePlaceholder
            variant="pink"
            aspectRatio="16/9"
            label={isSprint ? "Process Animation GIF" : "PODS Structure Animation GIF"}
          />
        </div>

        {/* Description Copy */}
        <p style={{ fontSize: '0.92rem', color: '#4B5563', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {isSprint
            ? "Our 2-week Sprint framework accelerates time-to-market. We diagnose friction points, prototype rapid growth experiments, and iterate based on live telemetry to ensure your campaign beats category benchmarks within the first 14 days."
            : "PODS (Performance, Operations, Design, Strategy) give your brand an autonomous, multidisciplinary team exclusively assigned to your roadmap. No fragmented communication or agency silos—just unified velocity and measurable outcomes."}
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={onClose}
            style={{
              padding: '10px 22px',
              borderRadius: '9999px',
              border: '1px solid #D1D5DB',
              backgroundColor: '#F9FAFB',
              fontWeight: 700,
              fontSize: '0.9rem',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
