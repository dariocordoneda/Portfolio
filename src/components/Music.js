import React from 'react';

const cards = [
  { type: 'Guitar', title: 'Electric Guitar', desc: "Rock, blues and everything in between. Playing since childhood as a way to think differently.", delays: [0, 0.1, 0.2, 0.05, 0.15, 0.25, 0.08, 0.18], heights: ['100%', '60%', '80%', '45%', '70%', '55%', '90%', '40%'] },
  { type: 'Recording', title: 'Studio Projects', desc: 'Home recording, production and mixing. Music as an engineering problem.', delays: [0.12, 0.03, 0.22, 0.07, 0.17, 0.27, 0.09, 0.19], heights: ['50%', '85%', '40%', '70%', '60%', '95%', '45%', '75%'] },
  { type: 'Composition', title: 'Original Work', desc: 'Original compositions blending electronic textures with live instrumentation.', delays: [0.06, 0.16, 0.26, 0.04, 0.14, 0.24, 0.11, 0.21], heights: ['75%', '40%', '90%', '55%', '80%', '35%', '65%', '50%'] },
];

export default function Music() {
  return (
    <section id="music" style={{ padding: '110px 60px', background: '#060606', borderTop: '1px solid var(--border)' }}>
      <div className="section-label">05 / MUSIC</div>
      <h2 className="section-title rv">Sound<br />&amp; Rhythm</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
        {cards.map((c, i) => <MusicCard key={c.type} card={c} delay={i} />)}
      </div>
      <style>{`@keyframes wb { 0%,100%{transform:scaleY(.3)} 50%{transform:scaleY(1)} }`}</style>
    </section>
  );
}

function MusicCard({ card, delay }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className={`mc rv d${delay}`}
      style={{ background: hovered ? 'var(--surf2)' : 'var(--surf)', padding: '34px', transition: 'background 0.3s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div style={{ height: '38px', marginBottom: '22px', display: 'flex', alignItems: 'center', gap: '3px' }}>
        {card.heights.map((h, i) => (
          <div key={i} style={{ flex: 1, background: 'var(--y)', borderRadius: '1px', height: h, opacity: hovered ? 1 : 0.25, animation: `wb 1.2s ease-in-out ${card.delays[i]}s infinite`, transition: 'opacity 0.3s' }} />
        ))}
      </div>
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--y)', textTransform: 'uppercase', marginBottom: '7px' }}>{card.type}</div>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.9rem', letterSpacing: '1px', marginBottom: '10px' }}>{card.title}</div>
      <p style={{ fontSize: '0.82rem', color: 'var(--muted)', lineHeight: 1.6, fontWeight: 300 }}>{card.desc}</p>
    </div>
  );
}
