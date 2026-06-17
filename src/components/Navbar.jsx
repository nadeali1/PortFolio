import { useState, useEffect } from 'react';
import { C, INFO } from '../constants';
import { MenuIcon, CloseIcon } from './Icons';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'];

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 72,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 clamp(20px, 5%, 80px)',
      background: scrolled ? `${C.charcoal}ee` : 'transparent',
      backdropFilter: scrolled ? 'blur(20px)' : 'none',
      borderBottom: scrolled ? `1px solid ${C.dark}` : '1px solid transparent',
      transition: 'all 0.3s ease',
    }}>
      {/* Logo */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 8,
          background: C.deep, display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: 14, color: C.ash,
          letterSpacing: '0.5px',
        }}>NA</div>
        <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: C.ash }}>
          Nade Ali
        </span>
      </button>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', gap: 4, alignItems: 'center' }} className="nav-desktop">
        {navLinks.map(link => (
          <NavLink key={link} onClick={() => scrollTo(link)}>{link}</NavLink>
        ))}
        <HireButton onClick={() => scrollTo('Contact')} />
      </div>

      {/* Mobile Toggle */}
      <button onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        style={{
          background: 'none', border: 'none', color: C.ash,
          cursor: 'pointer', display: 'none', padding: 4,
        }} className="nav-mobile-btn">
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: 72, left: 0, right: 0,
          background: `${C.dark}f8`, backdropFilter: 'blur(20px)',
          borderBottom: `1px solid ${C.deep}40`,
          padding: '12px 20px 20px',
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          {navLinks.map(link => (
            <button key={link} onClick={() => scrollTo(link)}
              style={{
                background: 'none', border: 'none', color: C.ash,
                fontSize: 16, fontWeight: 500, padding: '12px 16px',
                cursor: 'pointer', borderRadius: 8, textAlign: 'left',
                fontFamily: "'Inter', sans-serif",
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = C.muted}
              onMouseLeave={e => e.target.style.color = C.ash}
            >{link}</button>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}

function NavLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: 'none', border: 'none',
        color: hov ? C.muted : `${C.ash}bb`,
        fontSize: 14, fontWeight: 500,
        padding: '8px 14px', cursor: 'pointer',
        borderRadius: 6, fontFamily: "'Inter', sans-serif",
        transition: 'color 0.2s',
      }}>{children}</button>
  );
}

function HireButton({ onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? C.muted : C.deep,
        border: 'none', color: C.ash,
        fontSize: 14, fontWeight: 600,
        padding: '9px 22px', cursor: 'pointer',
        borderRadius: 7, fontFamily: "'Inter', sans-serif",
        marginLeft: 8, transition: 'background 0.2s',
        letterSpacing: '0.2px',
      }}>Hire Me</button>
  );
}
