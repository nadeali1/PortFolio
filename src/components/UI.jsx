import { useEffect, useRef, useState } from 'react';
import { C } from '../constants';

/* ── Scroll-reveal wrapper ─────────────────────── */
export function Section({ id, children, style = {} }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} style={{
      padding: 'clamp(64px, 8vw, 100px) clamp(20px, 5%, 80px)',
      maxWidth: 1200, margin: '0 auto',
      opacity: vis ? 1 : 0,
      transform: vis ? 'translateY(0)' : 'translateY(28px)',
      transition: 'opacity 0.65s ease, transform 0.65s ease',
      ...style,
    }}>{children}</section>
  );
}

/* ── Section header ────────────────────────────── */
export function SectionHeader({ tag, title, subtitle }) {
  return (
    <div style={{ marginBottom: 56, textAlign: 'center' }}>
      <span style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12, color: C.muted, fontWeight: 600,
        letterSpacing: 4, textTransform: 'uppercase',
        display: 'block', marginBottom: 12,
      }}>{tag}</span>
      <h2 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 'clamp(28px, 4vw, 42px)',
        fontWeight: 800, color: C.ash,
        letterSpacing: '-0.5px', marginBottom: subtitle ? 16 : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{
          fontSize: 16, color: `${C.ash}70`,
          fontFamily: "'Inter', sans-serif",
          maxWidth: 520, margin: '0 auto', lineHeight: 1.7,
        }}>{subtitle}</p>
      )}
      <div style={{
        width: 48, height: 3, background: C.deep,
        borderRadius: 2, margin: '20px auto 0',
      }} />
    </div>
  );
}

/* ── Glass card ────────────────────────────────── */
export function Card({ children, style = {}, hover = true }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => hover && setHov(true)}
      onMouseLeave={() => hover && setHov(false)}
      style={{
        background: `${C.dark}60`,
        border: `1px solid ${hov ? C.deep + '80' : C.dark + '80'}`,
        borderRadius: 16,
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,0.3)` : 'none',
        ...style,
      }}
    >{children}</div>
  );
}

/* ── Tag/chip ──────────────────────────────────── */
export function Tag({ children }) {
  return (
    <span style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12, color: C.muted,
      background: `${C.deep}22`,
      border: `1px solid ${C.deep}40`,
      borderRadius: 6, padding: '4px 10px',
      fontWeight: 500, letterSpacing: '0.2px',
    }}>{children}</span>
  );
}

/* ── Divider ───────────────────────────────────── */
export function Divider() {
  return (
    <div style={{
      height: 5, maxWidth: 1200, margin: '0 auto',
      background: `linear-gradient(90deg, transparent, ${C.dark}, transparent)`,
    }} />
  );
}
