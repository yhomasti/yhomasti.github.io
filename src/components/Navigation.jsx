import { useState, useEffect } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = document.querySelectorAll('section');
      let current = '';

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute('id') || '';
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav id="desktop-nav" className={scrolled ? 'scrolled' : ''}>
        {/* Just text logo */}
        <a href="/" className="logo">Thomas Yi</a>

        <div>
          <ul className="nav-links">
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a></li>
            <li><a href="#art" className={activeSection === 'art' ? 'active' : ''}>Animation</a></li>
            <li><a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>Experience</a></li>
            <li><a href="#code" className={activeSection === 'code' ? 'active' : ''}>Code</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav" className={scrolled ? 'scrolled' : ''}>
        {/* Just text logo */}
        <div className="logo">Thomas Yi</div>

        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li><a href="#about" onClick={toggleMenu}>About</a></li>
            <li><a href="#art" onClick={toggleMenu}>Animation</a></li>
            <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
            <li><a href="#code" onClick={toggleMenu}>Code</a></li>
            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;