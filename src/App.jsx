import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Code from './components/Code';
import Animation from './components/Animation';
import Contact from './components/Contact';
import './styles/style.css';
import './styles/mediaqueries.css';
import './styles/spotify.css';
import './styles/art.css';

function App() {
  const [cursorTrails, setCursorTrails] = useState([]);

  //cursor trail effect
  useEffect(() => {
    let lastTrailTime = 0;
    const trailDelay = 100;
    let trailId = 0;

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTrailTime > trailDelay) {
        const newTrail = {
          id: trailId++,
          x: e.clientX,
          y: e.clientY
        };

        setCursorTrails(prev => {
          const updated = [...prev, newTrail];
          return updated.length > 15 ? updated.slice(-15) : updated;
        });

        lastTrailTime = now;

        setTimeout(() => {
          setCursorTrails(prev => prev.filter(t => t.id !== newTrail.id));
        }, 800);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  //parallax background
  useEffect(() => {
    const bg = document.createElement('div');
    bg.className = 'parallax-bg';
    document.body.insertBefore(bg, document.body.firstChild);
    
    return () => {
      if (bg.parentNode) bg.parentNode.removeChild(bg);
    };
  }, []);

  //reveal sections on scroll
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {cursorTrails.map(trail => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{ left: trail.x + 'px', top: trail.y + 'px' }}
        />
      ))}

      <Navigation />
      <Profile />
      <About />
      <Animation />
      <Experience />
      <Code />
      <Contact />
    </>
  );
}

export default App;