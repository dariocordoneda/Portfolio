import React from 'react';

export default function RC() {
  return (
    <section id="rc" style={{ padding: '110px 60px', background: 'var(--bg)', borderTop: '1px solid var(--border)' }}>
      <div className="section-label">06 / RC PROJECTS</div>
      <h2 className="section-title rv">Radio<br />Control</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'start' }}>
        <div>
          <p className="rv d1" style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem', marginBottom: '18px' }}>
            Radio control is where <strong style={{ color: 'var(--text)' }}>electronics, mechanics, and programming</strong> converge. Building and tuning RC vehicles demands the same precision as writing good code — every component has to work together perfectly.
          </p>
          <p className="rv d2" style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem', marginBottom: '28px' }}>
            From custom chassis builds to ESC programming and telemetry systems, this is where hardware gets pushed to its limits.
          </p>
          <div className="rv d3" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {['Custom builds', 'ESC tuning', 'Telemetry', 'Raspberry Pi', 'FPV', 'Mechanical mods'].map(t => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        </div>

        <div className="rv d2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
          <div style={{ background: 'var(--surf)', padding: '32px', aspectRatio: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--o)', textTransform: 'uppercase' }}>Cars</div>
            <div>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3rem', color: 'var(--o)', lineHeight: 1 }}>RC</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '2px', marginTop: '4px' }}>DRIFT · CRAWL · RACE</div>
            </div>
          </div>
          <div style={{ background: 'var(--surf)', border: '1px solid rgba(255,149,0,0.2)', padding: '32px', aspectRatio: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--o)', textTransform: 'uppercase' }}>Drones</div>
            <div>
              <div style={{ fontSize: '2.2rem' }}>🚁</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '2px', marginTop: '4px' }}>FPV · AERIAL</div>
            </div>
          </div>
          <div style={{ background: 'var(--surf)', border: '1px solid rgba(255,149,0,0.2)', padding: '32px', aspectRatio: '1', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--o)', textTransform: 'uppercase' }}>Electronics</div>
            <div>
              <div style={{ fontSize: '2.2rem' }}>⚡</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.5rem', color: 'var(--muted)', letterSpacing: '2px', marginTop: '4px' }}>ESC · BEC · RX</div>
            </div>
          </div>
          <div style={{ background: 'var(--surf2)', padding: '32px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ textAlign: 'center', fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', color: 'var(--o)', lineHeight: 1.3 }}>Fotos<br />próximamente</div>
          </div>
        </div>
      </div>
    </section>
  );
}
