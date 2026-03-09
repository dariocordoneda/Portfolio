import React from 'react';
import photo from '../assets/photo.jpg';

const experience = [
  { role: 'Founder & Technical Director', company: 'LGI ELECTRONICS', color: 'var(--r)' },
  { role: 'Apple Specialist Technician', company: 'IFIX NEA', color: 'var(--b)' },
  { role: 'Operations Manager', company: 'CONING S.A.C.C.', color: 'var(--p)' },
  { role: 'After-Sales Advisor', company: 'SEBASTIANI S.A. — VOLKSWAGEN', color: 'var(--muted)' },
];

const stats = [
  { n: '3+', l: 'Years fullstack dev' },
  { n: '4', l: 'Companies & roles' },
  { n: '1', l: 'Live system in prod' },
  { n: 'C1', l: 'English level' },
];

export default function About() {
  return (
    <section id="about" style={{ padding: '110px 60px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '80px', alignItems: 'start' }}>
      {/* Photo */}
      <div className="rv" style={{ position: 'relative' }}>
        <img src={photo} alt="Dario Cordoneda Bojanich"
          style={{ width: '100%', display: 'block', objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(15%) contrast(1.05)' }} />
        <div style={{ position: 'absolute', inset: 0, border: '1px solid var(--y)', transform: 'translate(10px, 10px)', pointerEvents: 'none', zIndex: -1 }} />
      </div>

      {/* Content */}
      <div>
        <div className="section-label">04 / ABOUT</div>
        <h2 className="section-title rv">Who<br />I Am</h2>

        <p className="rv d1" style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem', marginBottom: '20px' }}>
          I'm <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Dario Cordoneda Bojanich</strong> — Full Stack Developer, microelectronics expert, mechanic, and musician based in <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Resistencia, Chaco, Argentina</strong>. English C1 Advanced.
        </p>
        <p className="rv d2" style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem', marginBottom: '20px' }}>
          Founder and Technical Director of <strong style={{ color: 'var(--text)', fontWeight: 500 }}>LGI Electronics</strong>, where I design autonomous hardware systems with solar energy integration, perform advanced microelectronics repair (Apple, consoles, drones), and build all the software tools the business needs — from scratch. Previously <strong style={{ color: 'var(--text)', fontWeight: 500 }}>Apple specialist technician</strong> at Ifix NEA and operations manager at Coning S.A.C.C.
        </p>
        <p className="rv d3" style={{ color: 'var(--muted)', lineHeight: 1.8, fontWeight: 300, fontSize: '1rem', marginBottom: '20px' }}>
          My philosophy: the best work lives at the intersection of <strong style={{ color: 'var(--text)', fontWeight: 500 }}>software, hardware, and creativity</strong>. Whether writing clean code, designing a circuit, building an RC vehicle, or composing music — precision and passion are the constants.
        </p>

        {/* Stats */}
        <div className="rv d4" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', marginTop: '36px' }}>
          {stats.map(s => (
            <div key={s.l} style={{ background: 'var(--surf)', padding: '22px' }}>
              <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '2.8rem', color: 'var(--y)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: 'var(--muted)', textTransform: 'uppercase', marginTop: '5px' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Experience */}
        <div className="rv d4" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.55rem', letterSpacing: '3px', color: 'var(--y)', textTransform: 'uppercase', margin: '28px 0 14px' }}>
          Experience
        </div>
        <div className="rv d4" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {experience.map(e => (
            <div key={e.company} style={{ padding: '14px 18px', background: 'var(--surf)', borderLeft: `2px solid ${e.color}` }}>
              <div style={{ fontWeight: 500, fontSize: '0.9rem', color: 'var(--text)' }}>{e.role}</div>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: e.color, marginTop: '3px' }}>{e.company}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
