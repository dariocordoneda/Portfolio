import React from 'react';

const items = ['React', 'Python / Django', 'Node.js', 'PostgreSQL', 'Microelectronics', 'Robotics', 'Solar Energy', 'Guitar', 'Raspberry Pi', 'AI Applied', 'Redux', 'C1 English', 'RC Vehicles', 'Drones', 'Express', 'Bootstrap'];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div style={{ background: 'var(--y)', padding: '13px 0', overflow: 'hidden', whiteSpace: 'nowrap' }}>
      <div style={{ display: 'inline-flex', animation: 'ticker 22s linear infinite' }}>
        {doubled.map((item, i) => (
          <span key={i} style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.95rem', letterSpacing: '3px', color: 'var(--bg)', padding: '0 28px', display: 'inline-flex', alignItems: 'center', gap: '28px' }}>
            {item}
            <span style={{ fontSize: '0.45rem' }}>◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }`}</style>
    </div>
  );
}
