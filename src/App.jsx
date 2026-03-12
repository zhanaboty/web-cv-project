import React, { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import GithubStats from './components/GithubStats';
import Contact from './components/Contact';
import LanguageSwitcher from './components/LanguageSwitcher';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';

function App() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    let rafId;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="portfolio-app">
      <CustomCursor />

      <div className="top-controls">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>

      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <GithubStats />
      <Contact />
    </div>
  );
}

export default App;
