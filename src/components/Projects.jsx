import { useState } from 'react';
import { C, INFO } from '../constants';
import { Section, SectionHeader, Tag } from './UI';
import { GithubIcon, ExternalIcon } from './Icons';

const projects = [
  {
  id: 1,
  title: "FitGyM Fitness Website",
  description: "A modern and responsive fitness website built using HTML, CSS, and JavaScript. Features engaging layouts, smooth navigation, and mobile-friendly design.",
  tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
  github: "YOUR_GITHUB_LINK",
  demo: "https://fit-gym-lime.vercel.app/",
  featured: true,
  accentColor: C.ash,
  label: "Web App",
},
  {
    id: 2,
    title: 'React Frontend Projects',
    description:
      'A collection of modern, responsive web applications built with React and JavaScript. Demonstrates component architecture, state management, and real-world UI patterns including hooks, context, and API integration.',
    tags: ['React.js', 'JavaScript', 'CSS3', 'HTML5', 'REST API'],
    github: INFO.github,
    demo: null,
    featured: false,
    gradient: `linear-gradient(135deg, ${C.dark} 0%, ${C.charcoal} 100%)`,
    accentColor: C.muted,
    label: 'Web App',
  },
  {
    id: 3,
    title: 'Java Socket Chat & File Transfer',
    description:
      'A desktop application featuring real-time chat and peer-to-peer file-sharing functionality built using Java Socket Programming. Implements multi-threaded server architecture and binary data streaming.',
    tags: ['Java', 'Socket Programming', 'Multi-threading', 'Swing/JFrame'],
    github: INFO.github,
    demo: null,
    featured: false,
    gradient: `linear-gradient(135deg, ${C.charcoal} 0%, ${C.dark} 100%)`,
    accentColor: C.deep,
    label: 'Desktop App',
  },
  {
    id: 4,
    title: 'React Native Mobile Applications',
    description:
      'Mobile applications developed during React Native coursework, exploring cross-platform development, native device APIs, navigation patterns, and mobile-first UI/UX principles.',
    tags: ['React Native', 'JavaScript', 'Mobile', 'Cross-Platform'],
    github: INFO.github,
    demo: null,
    featured: false,
    gradient: `linear-gradient(135deg, ${C.dark} 0%, ${C.charcoal} 100%)`,
    accentColor: C.ash,
    label: 'Mobile App',
  },
  
];

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        tag="Projects"
        title="Selected Work"
        subtitle="Projects I've built across web, mobile, and desktop platforms."
      />

      {/* Featured projects (big cards) */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, marginBottom: 24 }}>
        {projects.filter(p => p.featured).map((p, i) => (
          <FeaturedCard key={p.id} project={p} flip={i % 2 === 1} />
        ))}
      </div>

      {/* Other projects (grid) */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: 20,
      }}>
        {projects.filter(p => !p.featured).map(p => (
          <SmallCard key={p.id} project={p} />
        ))}
      </div>

      {/* Add more CTA */}
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <a href={INFO.github} target="_blank" rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'transparent', color: C.muted,
            border: `1.5px solid ${C.deep}`,
            borderRadius: 8, padding: '13px 28px',
            fontSize: 14, fontWeight: 600,
            fontFamily: "'Inter', sans-serif",
            textDecoration: 'none', transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = `${C.dark}80`;
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.transform = 'none';
          }}
        >
          <GithubIcon size={17} />
          View All Projects on GitHub
        </a>
      </div>
    </Section>
  );
}

function FeaturedCard({ project: p }) {
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: `${C.dark}60`,
        border: `1px solid ${hov ? p.accentColor + '50' : C.dark + '80'}`,
        borderRadius: 18, overflow: 'hidden',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s ease',
        boxShadow: hov ? `0 20px 60px rgba(0,0,0,0.35)` : 'none',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      }}
    >
      {/* Visual panel */}
      <div style={{
        background: p.gradient,
        minHeight: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
        padding: 32,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(circle at 50% 50%, ${p.accentColor}18 0%, transparent 70%)`,
        }} />
        <div style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 64, fontWeight: 800,
          color: `${p.accentColor}20`, letterSpacing: '-4px',
          userSelect: 'none', lineHeight: 1,
        }}>{String(p.id).padStart(2, '0')}</div>
      </div>

      {/* Content panel */}
      <div style={{ padding: '32px 32px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14,
        }}>
          <span style={{
            fontSize: 11, color: p.accentColor,
            fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
            letterSpacing: 3, textTransform: 'uppercase',
          }}>{p.label}</span>
        </div>

        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: 700, color: C.ash,
          marginBottom: 14, lineHeight: 1.2,
        }}>{p.title}</h3>

        <p style={{
          fontSize: 14, color: `${C.ash}88`,
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.75, marginBottom: 20,
        }}>{p.description}</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
          {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <ProjectBtn href={p.github} icon={<GithubIcon size={15} />}>Code</ProjectBtn>
          {p.demo && <ProjectBtn href={p.demo} icon={<ExternalIcon size={14} />} primary>Live Demo</ProjectBtn>}
        </div>
      </div>
    </div>
  );
}

function SmallCard({ project: p }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: `${C.dark}55`,
        border: `1px solid ${hov ? p.accentColor + '50' : C.dark + '70'}`,
        borderRadius: 16, padding: '28px 26px',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.25s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,0.3)` : 'none',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
        <span style={{
          fontSize: 11, color: p.accentColor,
          fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
          letterSpacing: 3, textTransform: 'uppercase',
        }}>{p.label}</span>
        <div style={{ display: 'flex', gap: 8 }}>
          {p.github && <IconLink href={p.github}><GithubIcon size={16} /></IconLink>}
          {p.demo && <IconLink href={p.demo}><ExternalIcon size={14} /></IconLink>}
        </div>
      </div>

      <h3 style={{
        fontFamily: "'Syne', sans-serif",
        fontSize: 18, fontWeight: 700, color: C.ash, marginBottom: 10,
      }}>{p.title}</h3>

      <p style={{
        fontSize: 13, color: `${C.ash}80`,
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.7, marginBottom: 18,
      }}>{p.description}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {p.tags.map(t => <Tag key={t}>{t}</Tag>)}
      </div>
    </div>
  );
}

function ProjectBtn({ children, href, icon, primary }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        padding: '9px 18px', borderRadius: 8,
        fontSize: 13, fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        textDecoration: 'none', transition: 'all 0.2s',
        background: primary ? (hov ? C.muted : C.deep) : (hov ? `${C.dark}` : 'transparent'),
        color: primary ? C.ash : (hov ? C.muted : `${C.ash}88`),
        border: `1.5px solid ${primary ? 'transparent' : hov ? C.muted : C.deep + '60'}`,
      }}
    >{icon}{children}</a>
  );
}

function IconLink({ children, href }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        color: hov ? C.muted : `${C.ash}55`,
        transition: 'color 0.2s', display: 'flex',
      }}>{children}</a>
  );
}
