import React, { useState, useEffect } from 'react';

const links = [
  { href: '#domains', label: 'Work' },
  { href: '#projects', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#music', label: 'Music' },
  { href: '#rc', label: 'RC' },
  { href: '#lgi', label: 'LGI' },
  { href: '#contact', label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      padding: '22px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      background: scrolled ? 'rgba(8,8,8,0.97)' : 'linear-gradient(to bottom, rgba(8,8,8,0.96), transparent)',
      borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      transition: 'background 0.4s, border 0.4s',
    }}>
      <a href="#hero" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.3rem', letterSpacing: '3px', color: 'var(--y)', textDecoration: 'none' }}>
        DC/B
      </a>
      <ul style={{ display: 'flex', gap: '36px', listStyle: 'none' }}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', letterSpacing: '2px', color: 'var(--muted)', textDecoration: 'none', textTransform: 'uppercase', transition: 'color 0.3s' }}
              onMouseEnter={e => e.target.style.color = 'var(--text)'}
              onMouseLeave={e => e.target.style.color = 'var(--muted)'}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
