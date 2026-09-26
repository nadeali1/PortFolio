import { useMemo, useState } from 'react';
import { C, INFO } from '../constants';
import { Section, SectionHeader, Tag } from './UI';
import { GithubIcon, ExternalIcon } from './Icons';

// PROJECT LINKS: paste a deployed URL into `demo` and a repository URL into `github`.
// Leave either value empty ("") and that button will automatically stay hidden.
const projects = [
  {
    id: 1,
    title: 'HireFlow — AI Resume Analyzer',
    description: 'A portfolio-grade MERN application for resume analysis and application tracking, with Gemini-powered resume feedback, responsive dashboards, and a clean component-based interface.',
    tags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Gemini API'],
    github: INFO.github, // Replace with the exact HireFlow repository URL
    demo: '',           // Paste HireFlow live URL here
    category: 'React / MERN',
    featured: true,
    accentColor: C.muted,
  },
  {
    id: 2,
    title: 'Velora Furniture',
    description: 'A modern furniture e-commerce experience with product search, filtering, sorting and responsive catalog UI, built with a React frontend and Express/MongoDB backend.',
    tags: ['React.js', 'Express', 'MongoDB', 'REST API', 'Responsive UI'],
    github: INFO.github, // Replace with the exact Velora repository URL
    demo: '',            // Paste Velora live URL here
    category: 'React / MERN',
    featured: true,
    accentColor: C.ash,
  },
  {
    id: 2,
    title: 'SUAMS — Smart University Application Management System',
    description: 'A full-stack MERN university management system with multi-role access, secure authentication, application workflows, responsive dashboards, and real-time notifications.',
    tags: ['React.js', 'Express', 'MongoDB', 'REST API', 'JWT' ,'Responsive UI', 'Socket.io'],
    github: INFO.github, // Replace with the exact Velora repository URL
    demo: '',            // Paste Velora live URL here
    category: 'React / MERN',
    featured: true,
    accentColor: C.muted,
  },
  {
    id: 3,
    title: 'FitGyM Fitness Website',
    description: 'A responsive fitness website with engaging layouts, clear calls to action, smooth navigation, and a mobile-friendly experience.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    github: '', // Paste FitGyM GitHub URL here if available
    demo: 'https://fit-gym-lime.vercel.app/',
    category: 'React / MERN',
    featured: false,
    accentColor: C.ash,
  },
  {
    id: 4,
    title: 'Nexa Digital — WordPress Website',
    description: 'A responsive business website created in WordPress with Elementor, using reusable sections, responsive layouts, hover interactions, and polished page structure.',
    tags: ['WordPress', 'Elementor', 'Responsive Design', 'UI/UX'],
    github: '',
    demo: '', // PASTE NEXA DIGITAL LIVE PROJECT URL HERE
    category: 'WordPress',
    featured: false,
    accentColor: C.muted,
  },
  {
    id: 5,
    title: 'WooCommerce Online Store',
    description: 'An e-commerce storefront built with WordPress and WooCommerce, including product setup, PKR pricing, shop layouts, responsive product grids, and store configuration.',
    tags: ['WordPress', 'WooCommerce', 'Elementor', 'E-commerce'],
    github: '',
    demo: '', // PASTE WOOCOMMERCE STORE LIVE PROJECT URL HERE
    category: 'WordPress',
    featured: false,
    accentColor: C.ash,
  },
  // {
  //   id: 6,
  //   title: 'React Native Applications',
  //   description: 'Cross-platform mobile projects exploring component-based UI, navigation, state handling, and mobile-first interaction patterns.',
  //   tags: ['React Native', 'JavaScript', 'Mobile', 'Cross-Platform'],
  //   github: INFO.github,
  //   demo: '',
  //   category: 'Mobile',
  //   featured: false,
  //   accentColor: C.deep,
  // },
];

const filters = ['All', 'React / MERN', 'WordPress'];

export default function Projects() {
  const [active, setActive] = useState('All');
  const visible = useMemo(() => active === 'All' ? projects : projects.filter(p => p.category === active), [active]);

  return (
    <Section id="projects">
      <SectionHeader
        tag="Portfolio"
        title="Featured Projects"
        subtitle="Selected React, MERN, WordPress and frontend work — built with a focus on responsive UI and practical functionality."
      />

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 8, margin: '-10px 0 34px' }}>
        {filters.map(filter => (
          <button key={filter} onClick={() => setActive(filter)} style={{
            border: `1px solid ${active === filter ? C.muted : C.dark}`,
            background: active === filter ? `${C.deep}55` : `${C.dark}45`,
            color: active === filter ? C.ash : `${C.ash}88`,
            padding: '9px 15px', borderRadius: 999, cursor: 'pointer',
            fontFamily: "'Inter', sans-serif", fontSize: 12, fontWeight: 600,
          }}>{filter}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(285px, 1fr))', gap: 20 }}>
        {visible.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <a href={INFO.github} target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          color: C.muted, border: `1.5px solid ${C.deep}`, borderRadius: 8,
          padding: '13px 28px', fontSize: 14, fontWeight: 600,
          fontFamily: "'Inter', sans-serif", textDecoration: 'none',
        }}><GithubIcon size={17} /> View GitHub Profile</a>
      </div>
    </Section>
  );
}

function ProjectCard({ project: p }) {
  const [hov, setHov] = useState(false);
  return (
    <article onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
      background: `${C.dark}55`, border: `1px solid ${hov ? p.accentColor + '55' : C.dark + '90'}`,
      borderRadius: 18, padding: '28px 26px', backdropFilter: 'blur(10px)',
      transition: 'all .25s ease', transform: hov ? 'translateY(-5px)' : 'none',
      boxShadow: hov ? '0 18px 45px rgba(0,0,0,.28)' : 'none', display: 'flex', flexDirection: 'column',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
        <span style={{ fontSize: 10, color: p.accentColor, fontFamily: "'JetBrains Mono', monospace", fontWeight: 700, letterSpacing: 2.2, textTransform: 'uppercase' }}>{p.category}</span>
        {p.featured && <span style={{ fontSize: 10, color: C.ash, background: `${C.deep}55`, border: `1px solid ${C.deep}`, borderRadius: 999, padding: '4px 9px', fontFamily: "'Inter', sans-serif" }}>Featured</span>}
      </div>

      <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: C.ash, marginBottom: 12 }}>{p.title}</h3>
      <p style={{ fontSize: 13.5, color: `${C.ash}88`, fontFamily: "'Inter', sans-serif", lineHeight: 1.75, marginBottom: 20, flex: 1 }}>{p.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginBottom: 22 }}>{p.tags.map(t => <Tag key={t}>{t}</Tag>)}</div>

      <div style={{ display: 'flex', gap: 10, minHeight: 38 }}>
        {p.github && <ProjectBtn href={p.github} icon={<GithubIcon size={15} />}>Code</ProjectBtn>}
        {p.demo && <ProjectBtn href={p.demo} icon={<ExternalIcon size={14} />} primary>Live Project</ProjectBtn>}
        {!p.github && !p.demo && <span style={{ fontSize: 12, color: `${C.ash}45`, fontFamily: "'Inter', sans-serif", alignSelf: 'center' }}>Live link can be added anytime</span>}
      </div>
    </article>
  );
}

function ProjectBtn({ children, href, icon, primary }) {
  return <a href={href} target="_blank" rel="noopener noreferrer" style={{
    display: 'inline-flex', alignItems: 'center', gap: 7, padding: '9px 15px', borderRadius: 8,
    fontSize: 12.5, fontWeight: 600, fontFamily: "'Inter', sans-serif", textDecoration: 'none',
    background: primary ? C.deep : 'transparent', color: C.ash,
    border: `1px solid ${primary ? C.deep : C.deep + '80'}`,
  }}>{icon}{children}</a>;
}
