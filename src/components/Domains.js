import React from 'react';

const domains = [
  { num: '01', icon: '⌨️', title: 'Development',    desc: 'Fullstack web apps, APIs, database design. React, Python/Django, Node.js, PostgreSQL. From idea to production.', color: 'var(--b)', href: '#projects' },
  { num: '02', icon: '🔧', title: 'LGI Electronics', desc: 'My electronics repair business — and the custom management system I built for it, live in production.',            color: 'var(--r)', href: '#lgi'      },
  { num: '03', icon: '🎸', title: 'Music',           desc: 'Guitar, composition, home recording. Music as a technical and creative discipline.',                               color: 'var(--y)', href: '#music'    },
  { num: '04', icon: '🚁', title: 'RC Projects',     desc: 'Radio control vehicles, drones, custom builds. Where electronics meets mechanical engineering.',                   color: 'var(--o)', href: '#rc'       },
];

const glowMap = {
  '#projects': 'rgba(0,212,255,0.08)',
  '#lgi':      'rgba(255,71,71,0.08)',
  '#music':    'rgba(232,255,71,0.08)',
  '#rc':       'rgba(255,149,0,0.08)',
};

export default function Domains() {
  return (
    <section id="domains" style={{ padding: '110px 60px', background: 'var(--bg)' }}>
      <div className="section-label">02 / AREAS</div>
      <h2 className="section-title">What I<br />Do</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }}>
        {domains.map((d, i) => (
          <DomainCard key={d.href} domain={d} delay={i} />
        ))}
        <CVCard />
      </div>
    </section>
  );
}

function DomainCard({ domain, delay }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href={domain.href} className={`rv d${delay}`} style={{ textDecoration: 'none', display: 'block' }}>
      <div
        style={{ background: hovered ? 'var(--surf2)' : 'var(--surf)', padding: '46px 38px', position: 'relative', overflow: 'hidden', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', transition: 'background 0.35s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at top left, ${glowMap[domain.href]}, transparent 70%)`, opacity: hovered ? 1 : 0, transition: 'opacity 0.35s', pointerEvents: 'none' }} />
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '3px', color: 'var(--muted)' }}>{domain.num}</div>
          <div style={{ fontSize: '2.2rem', margin: '18px 0 10px', transition: 'transform 0.3s', transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)' }}>{domain.icon}</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.6rem', letterSpacing: '1px', color: domain.color }}>{domain.title}</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.6, marginTop: '10px', fontWeight: 300 }}>{domain.desc}</p>
        </div>
        <div style={{ position: 'absolute', bottom: '38px', right: '38px', width: '40px', height: '40px', border: `1px solid ${hovered ? domain.color : 'var(--border)'}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: hovered ? domain.color : 'var(--muted)', transform: hovered ? 'rotate(0deg)' : 'rotate(-45deg)', transition: 'all 0.3s' }}>→</div>
      </div>
    </a>
  );
}

function CVCard() {
  const [hovered, setHovered] = React.useState(false);
  return (
    <a href="/assets/cv-dario-cordoneda.pdf" target="_blank" rel="noopener noreferrer" className="rv d4" style={{ textDecoration: 'none', gridColumn: 'span 2', display: 'block' }}>
      <div
        style={{ background: hovered ? 'var(--surf2)' : 'var(--surf)', padding: '38px 50px', position: 'relative', overflow: 'hidden', minHeight: '180px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: '40px', transition: 'background 0.35s' }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at left, rgba(180,100,255,0.08), transparent 70%)', opacity: hovered ? 1 : 0, transition: 'opacity 0.35s', pointerEvents: 'none' }} />
        <div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', letterSpacing: '3px', color: 'var(--muted)', marginBottom: '10px' }}>05</div>
          <div style={{ fontSize: '2.2rem', marginBottom: '10px', transition: 'transform 0.3s', transform: hovered ? 'scale(1.1) rotate(-5deg)' : 'scale(1)' }}>📄</div>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.6rem', letterSpacing: '1px', color: 'var(--p)' }}>About / CV</div>
          <p style={{ color: 'var(--muted)', fontSize: '0.82rem', lineHeight: 1.6, marginTop: '8px', fontWeight: 300 }}>
            Full profile — background, experience, education, and what drives me.{' '}
            <span style={{ color: 'var(--p)' }}>Opens PDF ↗</span>
          </p>
        </div>
        <div style={{ width: '40px', height: '40px', flexShrink: 0, border: `1px solid ${hovered ? 'var(--p)' : 'var(--border)'}`, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: hovered ? 'var(--p)' : 'var(--muted)', transform: hovered ? 'rotate(0deg)' : 'rotate(-45deg)', transition: 'all 0.3s' }}>→</div>
      </div>
    </a>
  );
}
