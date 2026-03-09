import React, { useEffect, useRef } from 'react';

const tags = ['React', 'Python · Django', 'Node.js', 'Microelectronics', 'Robotics', 'Solar Energy', 'C1 English'];

export default function Hero() {
  const nameRef = useRef(null);

  useEffect(() => {
    const el = nameRef.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 1s ease 0.3s, transform 1s ease 0.3s';
    setTimeout(() => { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; }, 100);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      justifyContent: 'flex-end', padding: '0 60px 80px', position: 'relative', overflow: 'hidden',
    }}>
      {/* Backgrounds */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(232,255,71,0.06) 0%, transparent 70%), radial-gradient(ellipse 40% 60% at 10% 80%, rgba(0,212,255,0.05) 0%, transparent 60%)' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '80px 80px', maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 80%)' }} />

      {/* Eyebrow */}
      <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.62rem', letterSpacing: '3px', color: 'var(--muted)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px', position: 'relative' }}>
        <span style={{ width: '36px', height: '1px', background: 'var(--muted)', display: 'inline-block' }} />
        01 / INTRO
      </div>

      {/* Name */}
      <h1 ref={nameRef} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(4.5rem, 12vw, 13rem)', lineHeight: 0.88, letterSpacing: '-2px', position: 'relative' }}>
        <span style={{ display: 'block', color: 'var(--text)' }}>DARIO</span>
        <span style={{ display: 'block', color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.18)' }}>
          CORDONEDA <span style={{ color: 'var(--y)', WebkitTextStroke: 0 }}>BOJANICH</span>
        </span>
      </h1>

      {/* Sub */}
      <div style={{ marginTop: '30px', display: 'flex', alignItems: 'center', gap: '50px', flexWrap: 'wrap', position: 'relative' }}>
        <p style={{ fontSize: '0.95rem', color: 'var(--muted)', maxWidth: '380px', lineHeight: 1.65, fontWeight: 300 }}>
          Full Stack Developer · Microelectronics Expert · Mechanic · Musician · Solar Energy. Building systems that solve real problems — in software and in the real world.
        </p>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {tags.map((t, i) => (
            <span key={t} className={`tag${i === 0 ? ' active' : ''}`}>{t}</span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: 'absolute', bottom: '38px', right: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '3px', color: 'var(--muted)', textTransform: 'uppercase', writingMode: 'vertical-rl' }}>
        <div style={{ width: '1px', height: '55px', background: 'linear-gradient(to bottom, var(--muted), transparent)', animation: 'scrollPulse 2s infinite' }} />
        Scroll
      </div>

      <style>{`@keyframes scrollPulse { 0%,100%{opacity:.3} 50%{opacity:1} }`}</style>
    </section>
  );
}
