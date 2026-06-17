import { useState } from 'react';
import { C, INFO } from '../constants';
import { Section, SectionHeader, Card } from './UI';
import { DownloadIcon, ExternalIcon } from './Icons';

export default function Resume() {
  return (
    <Section id="resume">
      <SectionHeader
        tag="Resume"
        title="My Resume"
        subtitle="Download or preview my resume to learn more about my background."
      />

      <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 24 }}>

        {/* Preview area */}
        <Card style={{ padding: 0, overflow: 'hidden' }} hover={false}>
          <div style={{
            background: `linear-gradient(135deg, ${C.dark} 0%, ${C.charcoal} 100%)`,
            minHeight: 360,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 20,
            padding: 48,
          }}>
            {/* File icon */}
            <div style={{
              width: 80, height: 80, borderRadius: 16,
              background: `${C.deep}30`,
              border: `1px solid ${C.deep}50`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 8,
            }}>
              <svg width={36} height={36} viewBox="0 0 24 24" fill="none" stroke={C.muted} strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>

            <div style={{ textAlign: 'center' }}>
              <h3 style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: 22, fontWeight: 700, color: C.ash, marginBottom: 8,
              }}>Nade Ali — Resume</h3>
              {/* <p style={{
                fontSize: 14, color: `${C.ash}65`,
                fontFamily: "'Inter', sans-serif",
              }}>You can download or view my resume using the buttons below.</p> */}
            </div>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: `${C.dark}80`, border: `1px solid ${C.dark}`,
              borderRadius: 100, padding: '6px 16px',
            }}>
              <span style={{
                width: 7, height: 7, borderRadius: '50%',
                background: '#e0a070', animation: 'pulse 2s infinite',
              }} />
              <span style={{
                fontSize: 14, color: `${C.ash}90`,
                fontFamily: "'Inter', sans-serif", fontWeight: 500,
              }}>You can download or view my latest resume using the buttons below.</span>
            </div>
          </div>
        </Card>

        {/* Action buttons */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <ResumeBtn icon={<DownloadIcon size={17} />} href="/Nade-Ali's-Resume.pdf" download primary>
            Download Resume
          </ResumeBtn>
          <ResumeBtn icon={<ExternalIcon size={16} />} href="/Nade-Ali's-Resume.pdf" target="_blank">
            View Resume
          </ResumeBtn>
        </div>

        {/* Contact nudge */}
        <Card style={{ padding: '24px 28px', textAlign: 'center' }} hover={false}>
          <p style={{
            fontSize: 14, color: `${C.ash}70`,
            fontFamily: "'Inter', sans-serif", lineHeight: 1.7,
          }}>
            Prefer to reach out directly?{' '}
            <a href={`mailto:${INFO.email}`} style={{
              color: C.muted, fontWeight: 600, textDecoration: 'none',
            }}>Send me an email</a>{' '}
            or connect on{' '}
            <a href={INFO.linkedin} target="_blank" rel="noopener noreferrer" style={{
              color: C.muted, fontWeight: 600, textDecoration: 'none',
            }}>LinkedIn</a>.
          </p>
        </Card>
      </div>
    </Section>
  );
}

function ResumeBtn({ children, href, icon, primary, download, target }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} download={download} target={target}
      rel={target ? 'noopener noreferrer' : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 9,
        padding: '13px 28px', borderRadius: 9,
        fontSize: 15, fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        textDecoration: 'none', transition: 'all 0.2s',
        background: primary ? (hov ? C.muted : C.deep) : 'transparent',
        color: primary ? C.ash : (hov ? C.muted : C.ash),
        border: primary ? 'none' : `1.5px solid ${hov ? C.muted : C.deep}`,
        transform: hov ? 'translateY(-2px)' : 'none',
        boxShadow: primary && hov ? `0 8px 24px ${C.deep}60` : 'none',
      }}
    >{icon}{children}</a>
  );
}
