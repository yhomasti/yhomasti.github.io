import { useState, useEffect } from 'react';

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll effect + active section highlighting
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
    handleScroll(); // run once on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Brand (sock icon + name)
  const Brand = () => (
    <a
      href="#profile"
      className="logo brand"
      onClick={() => setMenuOpen(false)}
      aria-label="Go to top"
    >
      <img className="brand__icon" src="/assets/sock-profile.png" alt="" />
      <span className="brand__text">Thomas Yi</span>
    </a>
  );

  return (
    <>
      <nav id="desktop-nav" className={scrolled ? 'scrolled' : ''}>
        <Brand />

        <div>
          <ul className="nav-links">
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                Experience
              </a>
            </li>
            <li>
              <a href="#art" className={activeSection === 'art' ? 'active' : ''}>
                Animation
              </a>
            </li>
            <li>
              <a href="#code" className={activeSection === 'code' ? 'active' : ''}>
                Code
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <nav id="hamburger-nav" className={scrolled ? 'scrolled' : ''}>
        <Brand />

        <div className="hamburger-menu">
          <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          <div className={`menu-links ${menuOpen ? 'open' : ''}`}>
            <li>
              <a href="#about" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#experience" onClick={toggleMenu}>
                Experience
              </a>
            </li>
            <li>
              <a href="#art" onClick={toggleMenu}>
                Animation
              </a>
            </li>
            <li>
              <a href="#code" onClick={toggleMenu}>
                Code
              </a>
            </li>
            <li>
              <a href="#contact" onClick={toggleMenu}>
                Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;
