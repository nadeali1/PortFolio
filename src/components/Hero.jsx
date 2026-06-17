import { useState } from 'react';
import { C, INFO } from '../constants';
import { GithubIcon, LinkedInIcon, EmailIcon, DownloadIcon } from './Icons';
import { ArrowDownCircle } from "lucide-react";
import resume from './Resume';

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', alignItems: 'center',
      padding: '120px clamp(20px, 5%, 80px) 80px',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 15% 50%, ${C.dark}90 0%, transparent 55%),
                     radial-gradient(ellipse at 80% 10%, ${C.dark}60 0%, transparent 40%)`,
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        gap: 60, flexWrap: 'wrap',
      }}>
        {/* ── Left ──────────────────────── */}
        <div style={{ flex: '1 1 420px', zIndex: 1 }}>

          {/* Status badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `${C.dark}80`, border: `1px solid ${C.deep}60`,
            borderRadius: 100, padding: '6px 16px', marginBottom: 32,
            backdropFilter: 'blur(12px)',
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: '50%', background: C.muted,
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontSize: 13, color: C.muted,
              fontFamily: "'Inter', sans-serif", fontWeight: 500, letterSpacing: '0.3px',
            }}>Available for opportunities</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(38px, 5.5vw, 68px)',
            fontWeight: 800, lineHeight: 1.08,
            color: C.ash, marginBottom: 14, letterSpacing: '-1px',
          }}>
            Hi, I'm<br />
            <span style={{
              color: C.muted,
              WebkitTextStroke: '1px transparent',
            }}>Nade Ali</span>
          </h1>

          {/* Sub-title */}
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(16px, 2vw, 20px)',
            color: C.deep, fontWeight: 600, marginBottom: 20,
            letterSpacing: '0.2px',
          }}>
            React Frontend Developer &amp; CS Student
          </p>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16, color: `${C.ash}99`,
            lineHeight: 1.8, maxWidth: 480, marginBottom: 40,
          }}>
            I build modern, responsive, and user-friendly web applications
            using React and JavaScript. Passionate about crafting elegant
            digital experiences that make an impact.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 40 }}>
            <CTABtn primary onClick={() => scrollTo('projects')}>
              View Projects
            </CTABtn>
            <CTABtn onClick={() => scrollTo('contact')}>
              Contact Me
            </CTABtn>
            <CTABtn icon={<DownloadIcon size={16} />}/* href="/public/Nade-Ali's-Resume.pdf"*/ onClick={() => scrollTo('resume')}>
              Resume
            </CTABtn>
          </div>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { icon: <GithubIcon size={19} />, href: INFO.github, label: 'GitHub' },
              { icon: <LinkedInIcon size={19} />, href: INFO.linkedin, label: 'LinkedIn' },
              { icon: <EmailIcon size={19} />, href: `mailto:${INFO.email}`, label: 'Email' },
            ].map(({ icon, href, label }) => (
              <SocialBtn key={label} href={href} label={label}>{icon}</SocialBtn>
            ))}
          </div>
        </div>

        {/* ── Right: Profile image ───────── */}
        <div style={{
          flex: '0 0 auto', display: 'flex',
          alignItems: 'center', justifyContent: 'center', zIndex: 1,
        }}>
          <ProfileFrame />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: 36, left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
        opacity: 0.45, animation: 'bounce 2.5s ease infinite',
        cursor: 'pointer',
      }} onClick={() => scrollTo('about')}>
        <span style={{
          fontSize: 10, color: C.ash,
          fontFamily: "'JetBrains Mono', monospace",
          letterSpacing: 3, textTransform: 'uppercase',
        }}>Explore More</span>
        <svg width={40} height={26} viewBox="0 0 18 25" fill="none">
          {/* <rect x="" y="1.5" width="30" height="35" rx="7.5" stroke={C.ash} strokeWidth="1.5"/> */}
          {/* <circle cx="9" cy="8" r="3" fill={C.muted}/> */}
          <ArrowDownCircle size={24} color={C.ash} />
        </svg>
      </div>
    </section>
  );
}

/* ── Sub-components ─────────────────────────────── */
function ProfileFrame() {
  const SIZE = 300;
  return (
    <div style={{ position: 'relative', width: SIZE, height: SIZE }}>
      {/* Slow-spin outer ring */}
      <div style={{
        position: 'absolute', inset: -16,
        borderRadius: '50%', border: `1.5px solid ${C.deep}35`,
        animation: 'spin 25s linear infinite',
      }} />
      {/* Dashed middle ring */}
      <div style={{
        position: 'absolute', inset: -8,
        borderRadius: '50%', border: `1px dashed ${C.deep}50`,
      }} />

      {/* Main image container */}
      <div style={{
        width: SIZE, height: SIZE, borderRadius: '50%',
        border: `3px solid ${C.deep}`,
        overflow: 'hidden', position: 'relative',
        boxShadow: `0 0 0 1px ${C.dark}, 0 0 50px ${C.deep}35, 0 24px 60px rgba(0,0,0,0.5)`,
        background: C.dark,
      }}>
        <img
          src="/images/profile.jpg"
          alt="Nade Ali"
          style={{
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'bottom center',
            display: 'block',
          }}
          onError={e => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        {/* Fallback monogram */}
        <div style={{
          display: 'none', width: '100%', height: '100%',
          alignItems: 'center', justifyContent: 'center',
          background: `linear-gradient(135deg, ${C.dark} 0%, ${C.charcoal} 100%)`,
          fontFamily: "'Syne', sans-serif", fontSize: 72,
          fontWeight: 800, color: `${C.deep}80`,
        }}>NA</div>
      </div>

      {/* Floating tag — bottom-right */}
      <FloatingTag style={{ bottom: -12, right: -28 }}>
        <span style={{ width: 7, height: 7, borderRadius: '50%', background: C.muted, flexShrink: 0 }} />
        <span style={{ fontSize: 12, color: C.ash, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
          React Dev
        </span>
      </FloatingTag>

      {/* Floating tag — top-left */}
      <FloatingTag style={{ top: 20, left: -36 }}>
        <span style={{ fontSize: 12, color: C.muted, fontFamily: "'JetBrains Mono', monospace", fontWeight: 600 }}>
          {'< Frontend />'}
        </span>
      </FloatingTag>
    </div>
  );
}

function FloatingTag({ children, style }) {
  return (
    <div style={{
      position: 'absolute',
      background: `${C.dark}f0`, backdropFilter: 'blur(12px)',
      border: `1px solid ${C.deep}60`,
      borderRadius: 10, padding: '7px 14px',
      display: 'flex', alignItems: 'center', gap: 8,
      ...style,
    }}>{children}</div>
  );
}

function CTABtn({ children, primary, onClick, href, icon }) {
  const [hov, setHov] = useState(false);
  const base = {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '13px 26px', borderRadius: 8,
    fontSize: 15, fontWeight: 600, cursor: 'pointer',
    fontFamily: "'Inter', sans-serif",
    transition: 'all 0.2s ease', border: 'none',
    textDecoration: 'none', letterSpacing: '0.2px',
    transform: hov ? 'translateY(-2px)' : 'translateY(0)',
  };

  if (href) {
    return (
      <a href={href}
        onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
        style={{
          ...base,
          background: 'transparent',
          color: hov ? C.ash : `${C.ash}70`,
          border: `1.5px solid ${hov ? C.deep : C.dark}`,
        }}>
        {icon}{children}
      </a>
    );
  }

  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        ...base,
        background: primary ? (hov ? C.muted : C.deep) : 'transparent',
        color: primary ? C.ash : (hov ? C.muted : C.ash),
        border: primary ? 'none' : `1.5px solid ${hov ? C.muted : C.deep}`,
        boxShadow: primary && hov ? `0 8px 24px ${C.deep}60` : 'none',
      }}>{children}</button>
  );
}

function SocialBtn({ children, href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 44, height: 44, borderRadius: 10,
        background: hov ? C.dark : `${C.dark}60`,
        border: `1px solid ${hov ? C.deep : `${C.dark}`}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov ? C.muted : `${C.ash}88`,
        textDecoration: 'none',
        transition: 'all 0.2s', transform: hov ? 'translateY(-2px)' : 'none',
      }}>{children}</a>
  );
}
