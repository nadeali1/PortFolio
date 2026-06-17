import { C } from '../constants';
import { Section, SectionHeader, Card, Tag } from './UI';

const highlights = [
  { label: 'Focus', value: 'React & JavaScript' },
  { label: 'Degree', value: 'BS Computer Science' },
  { label: 'University', value: 'SMIU, Karachi' },
  { label: 'Status', value: 'Available for work' },
];

const techStack = [
  'React.js', 'JavaScript', 'HTML5', 'CSS3',
  'Java', 'C', 'C++', 'Git', 'WordPress',
];

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        tag="About"
        title="Who I Am"
        subtitle="A passionate developer crafting modern digital experiences."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32, alignItems: 'start',
      }}>
        {/* ── Bio card ─── */}
        <Card style={{ padding: '36px 32px' }}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, color: C.muted, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 20,
          }}>Bio</p>

          <p style={{
            fontSize: 15, color: `${C.ash}cc`, lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif", marginBottom: 20,
          }}>
            I'm a Computer Science student with a strong passion for frontend
            development and modern web technologies. My primary focus is
            React development, where I enjoy building responsive, interactive,
            and user-friendly web applications.
          </p>

          <p style={{
            fontSize: 15, color: `${C.ash}cc`, lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif", marginBottom: 20,
          }}>
            Beyond code, I've worked in SEO, blogging, content writing, and
            website management — giving me a fuller perspective on the
            digital landscape.
          </p>

          <p style={{
            fontSize: 15, color: `${C.ash}cc`, lineHeight: 1.85,
            fontFamily: "'Inter', sans-serif",
          }}>
            I'm continuously improving my skills and plan to expand into
            full-stack development. My goal is to build impactful digital
            products while growing as a professional software developer.
          </p>
        </Card>

        {/* ── Right column ─── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Quick facts */}
          <Card style={{ padding: '28px 28px' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: C.muted, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 20,
            }}>Quick Facts</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {highlights.map(({ label, value }) => (
                <div key={label} style={{
                  background: `${C.charcoal}80`,
                  borderRadius: 10, padding: '14px 16px',
                  border: `1px solid ${C.dark}`,
                }}>
                  <p style={{
                    fontSize: 11, color: `${C.ash}55`,
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4,
                  }}>{label}</p>
                  <p style={{
                    fontSize: 14, color: C.ash,
                    fontFamily: "'Inter', sans-serif", fontWeight: 600,
                  }}>{value}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Tech stack */}
          <Card style={{ padding: '28px 28px' }}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: C.muted, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 20,
            }}>Tech Stack</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
              {techStack.map(t => <Tag key={t}>{t}</Tag>)}
            </div>
          </Card>
        </div>
      </div>
    </Section>
  );
}
