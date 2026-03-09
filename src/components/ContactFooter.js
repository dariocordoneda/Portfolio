import React from 'react';

export function Contact() {
  return (
    <section id="contact" style={{ background: 'var(--surf)', textAlign: 'center', padding: '110px 60px', borderTop: '1px solid var(--border)' }}>
      <p className="section-label" style={{ justifyContent: 'center' }}>08 / CONTACT</p>
      <h2 className="section-title rv" style={{ marginBottom: '36px' }}>
        Let's<br /><span style={{ color: 'var(--y)' }}>Talk</span>
      </h2>
      <div className="rv d1" style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
        <a href="mailto:DarioCordoneda@hotmail.com"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', background: 'var(--y)', color: 'var(--bg)', fontWeight: 700, borderRadius: '2px', transition: 'background 0.3s' }}
          onMouseEnter={e => e.target.style.background = 'var(--text)'}
          onMouseLeave={e => e.target.style.background = 'var(--y)'}>
          Send Email
        </a>
        <a href="https://www.linkedin.com/in/dario-cordoneda-08a84b244/" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '2px', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--text)'; e.target.style.color = 'var(--text)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; }}>
          LinkedIn
        </a>
        <a href="https://github.com/dariocordoneda" target="_blank" rel="noopener noreferrer"
          style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '3px', textTransform: 'uppercase', padding: '14px 32px', textDecoration: 'none', border: '1px solid var(--border)', color: 'var(--muted)', borderRadius: '2px', transition: 'all 0.3s' }}
          onMouseEnter={e => { e.target.style.borderColor = 'var(--text)'; e.target.style.color = 'var(--text)'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.color = 'var(--muted)'; }}>
          GitHub
        </a>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', padding: '22px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border)' }}>
      {['© 2026 Dario Cordoneda Bojanich', 'Resistencia, Chaco, Argentina', 'Built with React · Vercel'].map(t => (
        <p key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase' }}>{t}</p>
      ))}
    </footer>
  );
}
