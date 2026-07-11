import { ThemeProvider } from './context/ThemeContext';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Personality } from './components/Personality';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';

export default function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <div className="ambient-glow" />
      <div className="grain min-h-screen bg-stone-50 dark:bg-neutral-950 text-stone-800 dark:text-stone-200 transition-colors duration-300">
        <Nav />
        <main>
          <Hero />
          <Personality />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
