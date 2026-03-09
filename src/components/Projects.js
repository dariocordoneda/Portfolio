import React from 'react';

const projects = [
  { num: '001', name: 'LGI Management System', tech: ['React', 'Node.js', 'PostgreSQL'], year: '2025 →', url: 'https://github.com/dariocordoneda/sistema_tecnico_lgi' },
  { num: '002', name: 'Pokédex App', tech: ['React', 'Redux', 'Bootstrap'], year: '2024', url: 'https://github.com/dariocordoneda' },
  { num: '003', name: 'Weather App', tech: ['React', 'REST API'], year: '2024', url: 'https://github.com/dariocordoneda' },
  { num: '004', name: 'Books App', tech: ['Node.js', 'Bootstrap'], year: '2023', url: 'https://github.com/dariocordoneda' },
  { num: '005', name: 'GitHub Clone UI', tech: ['JS', 'Bootstrap', 'HTML'], year: '2023', url: 'https://github.com/dariocordoneda' },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '110px 60px', background: 'var(--bg)' }}>
      <div className="section-label">03 / WORK</div>
      <h2 className="section-title">Selected<br />Projects</h2>

      {projects.map((p, i) => (
        <div key={p.num} className={`rv d${Math.min(i, 4)}`}>
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }}>
            <ProjectRow project={p} />
          </a>
        </div>
      ))}
    </section>
  );
}

function ProjectRow({ project }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div className="proj-row"
      style={{ display: 'grid', gridTemplateColumns: '70px 1fr 220px 120px', alignItems: 'center', padding: hovered ? '26px 36px' : '26px 28px', background: hovered ? 'var(--surf2)' : 'var(--surf)', position: 'relative', overflow: 'hidden', marginBottom: '2px', gap: '28px', transition: 'all 0.3s' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: hovered ? '3px' : '0', background: 'var(--y)', transition: 'width 0.3s' }} />
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.58rem', color: 'var(--muted)', letterSpacing: '2px' }}>{project.num}</span>
      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.7rem', letterSpacing: '1px', color: hovered ? 'var(--y)' : 'var(--text)', transition: 'color 0.3s' }}>{project.name}</span>
      <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
        {project.tech.map(t => (
          <span key={t} style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.52rem', letterSpacing: '1px', padding: '3px 7px', border: '1px solid var(--border)', borderRadius: '2px', color: 'var(--muted)' }}>{t}</span>
        ))}
      </div>
      <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.65rem', color: 'var(--muted)', textAlign: 'right', letterSpacing: '2px' }}>{project.year}</span>
    </div>
  );
}
