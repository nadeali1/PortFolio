import { useState } from 'react';
import { C, INFO } from '../constants';
import { GithubIcon, LinkedInIcon, EmailIcon, PhoneIcon } from './Icons';

export default function Footer() {
  const year = new Date().getFullYear();
  const links = [
    { label: 'About',      id: 'about' },
    { label: 'Skills',     id: 'skills' },
    { label: 'Experience', id: 'experience' },
    { label: 'Projects',   id: 'projects' },
    { label: 'Education',  id: 'education' },
    { label: 'Contact',    id: 'contact' },
  ];

  const socials = [
    { icon: <GithubIcon size={17} />, href: INFO.github, label: 'GitHub' },
    { icon: <LinkedInIcon size={17} />, href: INFO.linkedin, label: 'LinkedIn' },
    { icon: <EmailIcon size={17} />, href: `mailto:${INFO.email}`, label: 'Email' },
    { icon: <PhoneIcon size={17} />, href: `tel:${INFO.phone}`, label: 'Phone' },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      borderTop: `1px solid ${C.dark}`,
      background: `${C.charcoal}`,
      padding: '60px clamp(20px, 5%, 80px) 28px',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: 40,
          marginBottom: 48,
        }}>
          {/* Brand */}
          <div style={{ maxWidth: 280 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                background: C.deep, display: 'flex', alignItems: 'center',
                justifyContent: 'center',
                fontFamily: "'Syne', sans-serif",
                fontWeight: 800, fontSize: 14, color: C.ash,
              }}>NA</div>
              <span style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700, fontSize: 18, color: C.ash,
              }}>Nade Ali</span>
            </div>
            <p style={{
              fontSize: 14, color: `${C.ash}60`,
              fontFamily: "'Inter', sans-serif", lineHeight: 1.7,
            }}>
              React Frontend Developer & CS Student based in Karachi, Pakistan.
              Building modern, responsive digital experiences.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: C.muted, letterSpacing: 3,
              textTransform: 'uppercase', marginBottom: 16,
            }}>Navigation</p>
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 32px',
            }}>
              {links.map(({ label, id }) => (
                <FooterLink key={id} onClick={() => scrollTo(id)}>{label}</FooterLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11, color: C.muted, letterSpacing: 3,
              textTransform: 'uppercase', marginBottom: 16,
            }}>Connect</p>
            <div style={{ display: 'flex', gap: 10, marginBottom: 20 }}>
              {socials.map(({ icon, href, label }) => (
                <SocialBtn key={label} href={href} label={label}>{icon}</SocialBtn>
              ))}
            </div>
            <a href={`mailto:${INFO.email}`} style={{
              fontSize: 13, color: `${C.ash}70`,
              fontFamily: "'Inter', sans-serif",
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
              onMouseEnter={e => e.target.style.color = C.muted}
              onMouseLeave={e => e.target.style.color = `${C.ash}70`}
            >{INFO.email}</a>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div style={{
          borderTop: `1px solid ${C.dark}60`,
          paddingTop: 24,
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', flexWrap: 'wrap', gap: 12,
        }}>
          <p style={{
            fontSize: 13, color: `${C.ash}45`,
            fontFamily: "'Inter', sans-serif",
          }}>
            © {year} Nade Ali. All Rights Reserved.
          </p>
          <p style={{
            fontSize: 12, color: `${C.ash}35`,
            fontFamily: "'JetBrains Mono', monospace",
          }}>
            Built with React
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: 'none', border: 'none',
        color: hov ? C.muted : `${C.ash}65`,
        fontSize: 14, fontFamily: "'Inter', sans-serif",
        fontWeight: 500, cursor: 'pointer',
        textAlign: 'left', padding: 0,
        transition: 'color 0.2s',
      }}>{children}</button>
  );
}

function SocialBtn({ children, href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 40, height: 40, borderRadius: 9,
        background: hov ? C.dark : `${C.dark}50`,
        border: `1px solid ${hov ? C.deep : C.dark}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov ? C.muted : `${C.ash}60`,
        textDecoration: 'none', transition: 'all 0.2s',
        transform: hov ? 'translateY(-2px)' : 'none',
      }}>{children}</a>
  );
}
