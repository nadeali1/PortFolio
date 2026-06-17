import { useState } from 'react';
import { C } from '../constants';
import { Section, SectionHeader, Card } from './UI';

const skillGroups = [
  {
    category: 'Frontend Development',
    icon: '⬡',
    color: C.muted,
    skills: [
      { name: 'React.js',              level: 85 },
      { name: 'JavaScript (ES6+)',     level: 80 },
      { name: 'HTML5',                 level: 92 },
      { name: 'CSS3 & Responsive',     level: 88 },
    ],
  },
  {
    category: 'Programming Languages',
    icon: '◈',
    color: C.deep,
    skills: [
      { name: 'Java',  level: 78 },
      { name: 'C',     level: 72 },
      { name: 'C++',   level: 70 },
    ],
  },
  {
    category: 'Tools & Technologies',
    icon: '◫',
    color: C.ash,
    skills: [
      { name: 'Git & GitHub',  level: 82 },
      { name: 'VS Code',       level: 90 },
      { name: 'WordPress',     level: 75 },
    ],
  },
  {
    category: 'Digital Marketing',
    icon: '◉',
    color: C.muted,
    skills: [
      { name: 'SEO',             level: 72 },
      { name: 'Content Writing', level: 78 },
      { name: 'Blogging',        level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <Section id="skills">
      <SectionHeader
        tag="Skills"
        title="My Expertise"
        subtitle="Technologies and tools I work with on a regular basis."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: 24,
      }}>
        {skillGroups.map((group) => (
          <SkillCard key={group.category} group={group} />
        ))}
      </div>
    </Section>
  );
}

function SkillCard({ group }) {
  const [hov, setHov] = useState(false);
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: `${C.dark}55`,
        border: `1px solid ${hov ? group.color + '50' : C.dark + '80'}`,
        borderRadius: 16, padding: '28px 26px',
        backdropFilter: 'blur(12px)',
        transition: 'all 0.25s ease',
        transform: hov ? 'translateY(-4px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,0.25)` : 'none',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
        <div style={{
          width: 40, height: 40, borderRadius: 10,
          background: `${group.color}18`,
          border: `1px solid ${group.color}30`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 18, color: group.color,
        }}>{group.icon}</div>
        <h3 style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: 15, fontWeight: 700, color: C.ash,
        }}>{group.category}</h3>
      </div>

      {/* Skill bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
        {group.skills.map((skill) => (
          <SkillBar key={skill.name} skill={skill} accentColor={group.color} />
        ))}
      </div>
    </div>
  );
}

function SkillBar({ skill, accentColor }) {
  const [animated, setAnimated] = useState(false);

  return (
    <div onMouseEnter={() => setAnimated(true)}>
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', marginBottom: 8,
      }}>
        <span style={{
          fontSize: 13, fontWeight: 500, color: `${C.ash}cc`,
          fontFamily: "'Inter', sans-serif",
        }}>{skill.name}</span>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 12, color: accentColor, fontWeight: 600,
        }}>{skill.level}%</span>
      </div>

      {/* Track */}
      <div style={{
        height: 5, background: `${C.charcoal}`,
        borderRadius: 10, overflow: 'hidden',
        border: `1px solid ${C.dark}`,
      }}>
        {/* Fill */}
        <div style={{
          height: '100%',
          width: `${skill.level}%`,
          background: `linear-gradient(90deg, ${C.deep}, ${accentColor})`,
          borderRadius: 10,
          transition: 'width 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        }} />
      </div>
    </div>
  );
}
