import { C } from '../constants';
import { Section, SectionHeader, Tag } from './UI';

const experiences = [
  {
    company:   'Hex Software',
    role:      'Frontend Developer Intern',
    period:    'Nov 2025 – Dec 2025',
    type:      'Internship',
    location:  'Remote',
    description:
      'Worked as a Frontend Developer Intern at Hex Software, contributing to the development of responsive and user-friendly web applications. Built interactive user interfaces using React.js, JavaScript, HTML, CSS, and Bootstrap. Collaborated on frontend features, optimized website performance, and ensured cross-browser compatibility. Applied modern development practices, component-based architecture, and responsive design techniques to deliver an enhanced user experience.',
    responsibilities: [
      'Developed reusable React components for web applications.',
      'Implemented responsive UI designs using HTML, CSS, and Bootstrap.',
      'Integrated frontend components with APIs and backend services.',
      'Debugged and optimized application performance.',
      'Collaborated with team members using Git and GitHub for version control.',
    ],
    tags: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Bootstrap', 'Git', 'GitHub'],
  },
  {
    company:   'AZ Textile',
    role:      'IT Intern',
    period:    'Nov 2024 – Dec 2024',
    type:      'Internship',
    location:  'Karachi, Pakistan',
    description:
      'Supported the digital marketing and IT operations team at AZ Textile, contributing to online presence growth and content management initiatives.',
    responsibilities: [
      'Executed on-page and off-page SEO strategies to improve search rankings',
      'Authored blog articles, product descriptions, and marketing copy',
      'Managed and maintained the company website via WordPress CMS',
      'Assisted with content scheduling, publishing, and performance tracking',
      'Provided digital marketing support across multiple channels',
    ],
    tags: ['SEO', 'WordPress', 'Content Writing', 'Digital Marketing', 'Blogging'],
  },
  
];

export default function Experience() {
  return (
    <Section id="experience">
      <SectionHeader
        tag="Experience"
        title="Work Experience"
        subtitle="Professional experience and hands-on industry exposure."
      />

      <div style={{
        maxWidth: 780, margin: '0 auto',
        display: 'flex', flexDirection: 'column', gap: 0,
      }}>
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} isLast={i === experiences.length - 1} />
        ))}

        {/* "More coming" note */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, paddingLeft: 22,
          marginTop: 4,
        }}>
          <div style={{
            width: 1, height: 36,
            background: `linear-gradient(180deg, ${C.deep}, transparent)`,
            marginLeft: 9,
          }} />
          <p style={{
            fontSize: 13, color: `${C.ash}45`,
            fontFamily: "'Inter', sans-serif", fontStyle: 'italic',
          }}>More experiences coming soon…</p>
        </div>
      </div>
    </Section>
  );
}

function TimelineItem({ exp, isLast }) {
  return (
    <div style={{ display: 'flex', gap: 28, position: 'relative' }}>
      {/* Timeline spine */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        {/* Dot */}
        <div style={{
          width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
          background: C.deep, border: `3px solid ${C.charcoal}`,
          boxShadow: `0 0 0 3px ${C.deep}40`, marginTop: 4, zIndex: 1,
        }} />
        {/* Line */}
        {!isLast && (
          <div style={{
            width: 2, flex: 1, minHeight: 60,
            background: `linear-gradient(180deg, ${C.deep}, ${C.dark}40)`,
          }} />
        )}
      </div>

      {/* Card */}
      <div style={{
        flex: 1, marginBottom: isLast ? 0 : 40,
        background: `${C.dark}55`,
        border: `1px solid ${C.dark}80`,
        borderRadius: 16, padding: '28px 30px',
        backdropFilter: 'blur(10px)',
        transition: 'border-color 0.2s',
      }}>
        {/* Top row */}
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', gap: 12, flexWrap: 'wrap', marginBottom: 6,
        }}>
          <div>
            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 19, fontWeight: 700, color: C.ash, marginBottom: 3,
            }}>{exp.role}</h3>
            <p style={{
              fontSize: 15, color: C.muted, fontWeight: 600,
              fontFamily: "'Inter', sans-serif",
            }}>{exp.company}</p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{
              display: 'inline-block',
              background: `${C.deep}25`, border: `1px solid ${C.deep}50`,
              borderRadius: 6, padding: '4px 12px',
              fontSize: 12, color: C.muted,
              fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
              marginBottom: 4,
            }}>{exp.type}</span>
            <p style={{
              fontSize: 13, color: `${C.ash}60`,
              fontFamily: "'Inter', sans-serif",
            }}>{exp.period}</p>
            <p style={{
              fontSize: 12, color: `${C.ash}45`,
              fontFamily: "'Inter', sans-serif", marginTop: 2,
            }}>{exp.location}</p>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: `${C.dark}`, margin: '16px 0' }} />

        <p style={{
          fontSize: 14, color: `${C.ash}88`, lineHeight: 1.7,
          fontFamily: "'Inter', sans-serif", marginBottom: 16,
        }}>{exp.description}</p>

        {/* Responsibilities */}
        <ul style={{ paddingLeft: 0, listStyle: 'none', marginBottom: 20 }}>
          {exp.responsibilities.map((r, i) => (
            <li key={i} style={{
              display: 'flex', alignItems: 'flex-start', gap: 10,
              marginBottom: 8,
            }}>
              <span style={{
                color: C.muted, fontWeight: 700, fontSize: 16,
                lineHeight: '1.5', flexShrink: 0, marginTop: 1,
              }}>›</span>
              <span style={{
                fontSize: 14, color: `${C.ash}99`,
                fontFamily: "'Inter', sans-serif", lineHeight: 1.6,
              }}>{r}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
          {exp.tags.map(t => <Tag key={t}>{t}</Tag>)}
        </div>
      </div>
    </div>
  );
}
