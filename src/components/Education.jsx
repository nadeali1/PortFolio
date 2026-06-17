import { C } from '../constants';
import { Section, SectionHeader } from './UI';

const education = [
  {
    degree: 'BS Computer Science',
    university: 'Sindh Madressatul Islam University (SMIU)',
    location: 'Karachi, Pakistan',
    period: '2022 – Present',
    semester: 'Final Year (8th Semester)',
    status: 'In Progress',
    highlights: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'Programming Fundamentals',
      'Web Technologies & Development',
      'Database Management Systems',
      'Software Engineering',
      'Digital Marketing',
    ],
  },
];

export default function Education() {
  return (
    <Section id="education">
      <SectionHeader
        tag="Education"
        title="Academic Background"
        subtitle="Building a strong Computer Science foundation."
      />

      <div style={{ maxWidth: 780, margin: '0 auto' }}>
        {education.map((edu, i) => (
          <EduCard key={i} edu={edu} />
        ))}
      </div>
    </Section>
  );
}

function EduCard({ edu }) {
  return (
    <div style={{
      background: `${C.dark}55`,
      border: `1px solid ${C.dark}80`,
      borderRadius: 18, padding: '36px 36px',
      backdropFilter: 'blur(12px)',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Decorative number watermark */}
      <div style={{
        position: 'absolute', top: -20, right: 24,
        fontFamily: "'Syne', sans-serif",
        fontSize: 120, fontWeight: 800,
        color: `${C.deep}12`, userSelect: 'none', lineHeight: 1,
        pointerEvents: 'none',
      }}>BS</div>

      {/* Top row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: 16, marginBottom: 24,
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
            <div style={{
              width: 10, height: 10, borderRadius: '50%',
              background: C.muted, boxShadow: `0 0 8px ${C.muted}80`,
            }} />
            <span style={{
              fontSize: 12, color: C.muted,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase',
            }}>{edu.status}</span>
          </div>
          <h3 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: 'clamp(20px, 3vw, 26px)',
            fontWeight: 800, color: C.ash, marginBottom: 6,
          }}>{edu.degree}</h3>
          <p style={{
            fontSize: 16, color: C.muted, fontWeight: 600,
            fontFamily: "'Inter', sans-serif", marginBottom: 4,
          }}>{edu.university}</p>
          <p style={{
            fontSize: 13, color: `${C.ash}55`,
            fontFamily: "'Inter', sans-serif",
          }}>{edu.location}</p>
        </div>

        <div style={{ textAlign: 'right' }}>
          <div style={{
            background: `${C.deep}20`, border: `1px solid ${C.deep}40`,
            borderRadius: 10, padding: '14px 20px',
          }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 15, color: C.ash, fontWeight: 700, marginBottom: 4,
            }}>{edu.period}</p>
            <p style={{
              fontSize: 12, color: `${C.ash}65`,
              fontFamily: "'Inter', sans-serif",
            }}>{edu.semester}</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{
        height: 1,
        background: `linear-gradient(90deg, ${C.deep}50, transparent)`,
        marginBottom: 24,
      }} />

      {/* Coursework */}
      <p style={{
        fontSize: 12, color: `${C.ash}55`,
        fontFamily: "'JetBrains Mono', monospace",
        letterSpacing: 3, textTransform: 'uppercase',
        marginBottom: 16, fontWeight: 600,
      }}>Key Coursework</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {edu.highlights.map(h => (
          <span key={h} style={{
            fontSize: 13, color: `${C.ash}cc`,
            background: `${C.charcoal}80`,
            border: `1px solid ${C.dark}`,
            borderRadius: 8, padding: '7px 14px',
            fontFamily: "'Inter', sans-serif", fontWeight: 500,
          }}>{h}</span>
        ))}
      </div>
    </div>
  );
}
