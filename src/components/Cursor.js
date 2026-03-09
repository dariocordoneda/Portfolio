import React, { useEffect, useRef } from 'react';

const cursorStyle = {
  position: 'fixed', width: '10px', height: '10px',
  background: 'var(--y)', borderRadius: '50%',
  pointerEvents: 'none', zIndex: 99999,
  transform: 'translate(-50%, -50%)',
  mixBlendMode: 'difference',
  transition: 'width 0.2s, height 0.2s',
};
const ringStyle = {
  position: 'fixed', width: '38px', height: '38px',
  border: '1px solid rgba(232,255,71,0.4)', borderRadius: '50%',
  pointerEvents: 'none', zIndex: 99998,
  transform: 'translate(-50%, -50%)',
  transition: 'width 0.3s, height 0.3s',
};

export default function Cursor() {
  const curRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (curRef.current) {
        curRef.current.style.left = e.clientX + 'px';
        curRef.current.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMove);

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + 'px';
        ringRef.current.style.top = ring.current.y + 'px';
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    const grow = () => {
      if (curRef.current) { curRef.current.style.width = '18px'; curRef.current.style.height = '18px'; }
      if (ringRef.current) { ringRef.current.style.width = '56px'; ringRef.current.style.height = '56px'; }
    };
    const shrink = () => {
      if (curRef.current) { curRef.current.style.width = '10px'; curRef.current.style.height = '10px'; }
      if (ringRef.current) { ringRef.current.style.width = '38px'; ringRef.current.style.height = '38px'; }
    };
    const targets = document.querySelectorAll('a, button, .dc, .proj-row, .mc');
    targets.forEach((el) => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      targets.forEach((el) => { el.removeEventListener('mouseenter', grow); el.removeEventListener('mouseleave', shrink); });
    };
  }, []);

  return (
    <>
      <div ref={curRef} style={cursorStyle} />
      <div ref={ringRef} style={ringStyle} />
    </>
  );
}
