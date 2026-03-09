import React, { useState, useEffect } from 'react';

const slides = [
  { src: '/assets/lgi-01.png', label: 'Dashboard — Fichas activas y estados' },
  { src: '/assets/lgi-02.png', label: 'Ficha de trabajo — Cliente y equipo' },
  { src: '/assets/lgi-03.png', label: 'Diagnóstico técnico y evidencia fotográfica' },
  { src: '/assets/lgi-04.png', label: 'Control de Stock de repuestos' },
  { src: '/assets/lgi-05.png', label: 'Resumen de Ganancias con filtro por fecha' },
  { src: '/assets/lgi-06.png', label: 'Gestión de Personal y permisos' },
  { src: '/assets/lgi-07.png', label: 'Historial de eliminados' },
];

const features = ['Fichas de trabajo', 'Control de stock', 'Resumen de ganancias', 'Evidencia fotográfica', 'WhatsApp', 'Multi-usuario', 'Papelera'];

export default function LGI() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, []);

  const go = (n) => setCurrent((n + slides.length) % slides.length);

  return (
    <section id="lgi" style={{ padding: '110px 60px', background: '#060606', borderTop: '1px solid var(--border)' }}>
      <div className="section-label">07 / LGI</div>
      <h2 className="section-title rv">LGI<br />Electronics</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'start' }}>

        {/* Slider */}
        <div className="rv" style={{ background: 'var(--surf)', borderRadius: '8px', overflow: 'hidden' }}>
          {/* Mac-style bar */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '12px 16px', background: '#0a0a0a', borderBottom: '1px solid var(--border)' }}>
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--r)' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ffd700' }} />
            <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#47ff7a' }} />
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.48rem', color: '#555', letterSpacing: '2px', marginLeft: '8px' }}>
              LGI Electronics — Sistema de Gestión
            </span>
          </div>

          {/* Slide image */}
          <img src={slides[current].src} alt={slides[current].label} style={{ width: '100%', display: 'block' }} />

          {/* Label */}
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '2px', color: 'var(--muted)', padding: '9px 14px', background: '#060606', borderTop: '1px solid var(--border)' }}>
            {slides[current].label}
          </div>

          {/* Controls */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '11px 14px', background: 'var(--surf)' }}>
            <button onClick={() => go(current - 1)}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--muted)', background: 'none', border: '1px solid var(--border)', padding: '5px 12px', borderRadius: '2px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--text)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.borderColor = 'var(--border)'; }}>
              ←
            </button>
            <div style={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
              {slides.map((_, i) => (
                <button key={i} onClick={() => go(i)}
                  style={{ width: '6px', height: '6px', borderRadius: '50%', background: i === current ? 'var(--b)' : 'var(--border)', border: 'none', padding: 0, transform: i === current ? 'scale(1.4)' : 'scale(1)', transition: 'all 0.2s' }} />
              ))}
            </div>
            <button onClick={() => go(current + 1)}
              style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.75rem', color: 'var(--muted)', background: 'none', border: '1px solid var(--border)', padding: '5px 12px', borderRadius: '2px', transition: 'all 0.2s' }}
              onMouseEnter={e => { e.target.style.color = 'var(--text)'; e.target.style.borderColor = 'var(--text)'; }}
              onMouseLeave={e => { e.target.style.color = 'var(--muted)'; e.target.style.borderColor = 'var(--border)'; }}>
              →
            </button>
          </div>
        </div>

        {/* Info */}
        <div className="rv d2">
          <h3 style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '3px', color: 'var(--r)', marginBottom: '14px', textTransform: 'uppercase' }}>
            Servicio Técnico · Software Propio
          </h3>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.2rem', lineHeight: 0.9, marginBottom: '22px', letterSpacing: '-1px' }}>
            LGI<br />System
          </div>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, fontSize: '0.92rem', marginBottom: '14px' }}>
            LGI Electronics is my repair business and my most ambitious project. Every tool I needed that didn't exist, I built myself.
          </p>
          <p style={{ color: 'var(--muted)', lineHeight: 1.7, fontWeight: 300, fontSize: '0.92rem', marginBottom: '14px' }}>
            The management system you see here is <strong style={{ color: 'var(--text)' }}>live and in daily use</strong>. It handles the full repair lifecycle: intake with photos, diagnosis, parts stock, earnings tracking, multi-user roles, and WhatsApp integration.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '20px' }}>
            {features.map(f => <span key={f} className="tag">{f}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}
