import React, { useEffect } from 'react';
import './index.css';
import Cursor from './components/Cursor';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import Domains from './components/Domains';
import Projects from './components/Projects';
import About from './components/About';
import Music from './components/Music';
import RC from './components/RC';
import LGI from './components/LGI';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  // Scroll reveal observer
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('show');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll('.rv').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div>
      <Cursor />
      <Nav />
      <Hero />
      <Ticker />
      <Domains />
      <Projects />
      <About />
      <Music />
      <RC />
      <LGI />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
