import { useState } from 'react';
import { C, INFO } from '../constants';
import { Section, SectionHeader, Card } from './UI';
import { EmailIcon, PhoneIcon, LocationIcon, LinkedInIcon, GithubIcon } from './Icons';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'success' | 'error' | null
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.subject.trim()) e.subject = 'Subject is required';
    if (!form.message.trim()) e.message = 'Message is required';
    else if (form.message.trim().length < 20) e.message = 'Message too short (min 20 chars)';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(e2 => ({ ...e2, [e.target.name]: undefined }));
  };

  const handleSubmit = async () => {
    const e = validate();

  if (Object.keys(e).length) {
    setErrors(e);
    return;
  }

  setLoading(true);

  try {
    await emailjs.send(
      "service_4kngesd",
      "template_z891hqp",
      {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
      },
      "5TtOZ3O5KLO4f3_H0"
    );

    setStatus("success");
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    setStatus("error");
  }

  setLoading(false);

    // const e = validate();
    // if (Object.keys(e).length) { setErrors(e); return; }
    // setLoading(true);
    // // Simulate async send
    // await new Promise(r => setTimeout(r, 1200));
    // setLoading(false);
    // setStatus('success');
    // setForm({ name: '', email: '', subject: '', message: '' });
    // setTimeout(() => setStatus(null), 5000);
  };

  const contacts = [
    { icon: <EmailIcon size={18} />, label: 'Email', value: INFO.email, href: `mailto:${INFO.email}` },
    { icon: <PhoneIcon size={18} />, label: 'Phone', value: INFO.phone, href: `tel:${INFO.phone}` },
    { icon: <LocationIcon size={18} />, label: 'Location', value: INFO.location, href: null },
  ];

  const socials = [
    { icon: <GithubIcon size={18} />, href: INFO.github, label: 'GitHub' },
    { icon: <LinkedInIcon size={18} />, href: INFO.linkedin, label: 'LinkedIn' },
    { icon: <EmailIcon size={18} />, href: `mailto:${INFO.email}`, label: 'Email' },
  ];

  return (
    <Section id="contact">
      <SectionHeader
        tag="Contact"
        title="Let's Work Together"
        subtitle="Have a project in mind or want to collaborate? I'd love to hear from you."
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 32, alignItems: 'start',
      }}>
        {/* ── Left: Info ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Card style={{ padding: '32px 28px' }} hover={false}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: C.muted, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 20,
            }}>Get in Touch</p>

            <h3 style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 22, fontWeight: 700, color: C.ash, marginBottom: 12,
            }}>Open to opportunities</h3>

            <p style={{
              fontSize: 14, color: `${C.ash}80`,
              fontFamily: "'Inter', sans-serif", lineHeight: 1.75, marginBottom: 28,
            }}>
              Whether you're reaching out for a freelance project,
              internship, full-time opportunity, collaboration,
              or just a quick hello — my inbox is always open.
              I'll do my best to get back to you as soon as possible.
            </p>

            {contacts.map(({ icon, label, value, href }) => (
              <ContactRow key={label} icon={icon} label={label} value={value} href={href} />
            ))}
          </Card>

          {/* Social links */}
          <Card style={{ padding: '24px 28px' }} hover={false}>
            <p style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12, color: C.muted, letterSpacing: 4,
              textTransform: 'uppercase', marginBottom: 16,
            }}>Find Me On</p>
            <div style={{ display: 'flex', gap: 12 }}>
              {socials.map(({ icon, href, label }) => (
                <SocialBtn key={label} href={href} label={label}>{icon}</SocialBtn>
              ))}
            </div>
          </Card>
        </div>

        {/* ── Right: Form ── */}
        <Card style={{ padding: '36px 32px' }} hover={false}>
          <p style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12, color: C.muted, letterSpacing: 4,
            textTransform: 'uppercase', marginBottom: 24,
          }}>Send a Message</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <Field label="Name" name="name" value={form.name} error={errors.name} onChange={handleChange} placeholder="Your name" />
              <Field label="Email" name="email" type="email" value={form.email} error={errors.email} onChange={handleChange} placeholder="you@example.com" />
            </div>
            <Field label="Subject" name="subject" value={form.subject} error={errors.subject} onChange={handleChange} placeholder="What's this about?" />
            <Field label="Message" name="message" value={form.message} error={errors.message} onChange={handleChange} placeholder="Tell me about your project or idea…" textarea rows={5} />

            {/* Success/error banners */}
            {status === 'success' && (
              <div style={{
                background: `${C.deep}30`, border: `1px solid ${C.deep}`,
                borderRadius: 8, padding: '12px 16px',
                fontSize: 14, color: C.muted,
                fontFamily: "'Inter', sans-serif",
              }}>
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}

            <SubmitBtn onClick={handleSubmit} loading={loading} />
          </div>
        </Card>
      </div>
    </Section>
  );
}

/* ── Sub-components ─────────────────────────────── */
function Field({ label, name, type = 'text', value, error, onChange, placeholder, textarea, rows }) {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: '100%',
    background: `${C.charcoal}80`,
    border: `1px solid ${error ? '#e07070' : focused ? C.deep : C.dark}`,
    borderRadius: 8, padding: '12px 14px',
    fontSize: 14, color: C.ash,
    fontFamily: "'Inter', sans-serif",
    outline: 'none', resize: 'vertical',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <label style={{
        display: 'block', marginBottom: 7,
        fontSize: 12, color: `${C.ash}80`,
        fontFamily: "'Inter', sans-serif", fontWeight: 600,
        letterSpacing: '0.5px', textTransform: 'uppercase',
      }}>{label}</label>
      {textarea ? (
        <textarea
          name={name} value={value} onChange={onChange} placeholder={placeholder}
          rows={rows}
          style={baseStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      ) : (
        <input
          name={name} type={type} value={value} onChange={onChange} placeholder={placeholder}
          style={baseStyle}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
        />
      )}
      {error && (
        <p style={{
          marginTop: 5, fontSize: 12, color: '#e07070',
          fontFamily: "'Inter', sans-serif",
        }}>{error}</p>
      )}
    </div>
  );
}

function ContactRow({ icon, label, value, href }) {
  const [hov, setHov] = useState(false);
  const inner = (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 14,
      marginBottom: 16, cursor: href ? 'pointer' : 'default',
    }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <div style={{
        width: 40, height: 40, borderRadius: 10,
        background: `${C.charcoal}80`,
        border: `1px solid ${hov && href ? C.deep : C.dark}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov && href ? C.muted : C.deep,
        transition: 'all 0.2s', flexShrink: 0,
      }}>{icon}</div>
      <div>
        <p style={{
          fontSize: 11, color: `${C.ash}50`,
          fontFamily: "'Inter', sans-serif",
          textTransform: 'uppercase', letterSpacing: 1, marginBottom: 2,
        }}>{label}</p>
        <p style={{
          fontSize: 14, color: hov && href ? C.muted : C.ash,
          fontFamily: "'Inter', sans-serif", fontWeight: 500,
          transition: 'color 0.2s',
        }}>{value}</p>
      </div>
    </div>
  );
  return href
    ? <a href={href} style={{ textDecoration: 'none' }}>{inner}</a>
    : inner;
}

function SocialBtn({ children, href, label }) {
  const [hov, setHov] = useState(false);
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        width: 46, height: 46, borderRadius: 10,
        background: hov ? C.dark : `${C.dark}60`,
        border: `1px solid ${hov ? C.deep : C.dark}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: hov ? C.muted : `${C.ash}80`,
        textDecoration: 'none',
        transition: 'all 0.2s', transform: hov ? 'translateY(-2px)' : 'none',
      }}>{children}</a>
  );
}

function SubmitBtn({ onClick, loading }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      disabled={loading}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        width: '100%', padding: '14px 24px',
        background: loading ? C.dark : hov ? C.muted : C.deep,
        border: 'none', borderRadius: 8,
        color: C.ash, fontSize: 15, fontWeight: 600,
        fontFamily: "'Inter', sans-serif",
        cursor: loading ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
        opacity: loading ? 0.7 : 1,
      }}
    >
      {loading ? (
        <>
          <div style={{
            width: 16, height: 16, border: `2px solid ${C.ash}40`,
            borderTop: `2px solid ${C.ash}`,
            borderRadius: '50%', animation: 'spin 0.7s linear infinite',
          }} />
          Sending…
        </>
      ) : 'Send Message'}
    </button>
  );
}
