import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import GitHub from './components/GitHub';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import { Divider } from './components/UI';
import { C } from './constants';

export default function App() {
  return (
    <div style={{ background: C.charcoal, minHeight: '100vh', position: 'relative' }}>
      {/* Subtle grid texture */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        backgroundImage: `
          linear-gradient(${C.dark}18 1px, transparent 1px),
          linear-gradient(90deg, ${C.dark}18 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <Hero />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <About />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Skills />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Experience />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Projects />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Education />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <GitHub />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Resume />

        <div style={{ padding: '0 clamp(20px, 5%, 80px)' }}>
          <Divider />
        </div>

        <Contact />

        <Footer />
        <BackToTop />
      </div>
    </div>
  );
}
