import { useState, useEffect } from 'react';
import { C } from '../constants';
import { ArrowUpIcon } from './Icons';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const [hov, setHov] = useState(false);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'fixed', bottom: 32, right: 32, zIndex: 999,
        width: 48, height: 48, borderRadius: 12,
        background: hov ? C.muted : C.deep,
        border: 'none', color: C.ash,
        cursor: 'pointer', display: 'flex',
        alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        pointerEvents: visible ? 'all' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      <ArrowUpIcon />
    </button>
  );
}
