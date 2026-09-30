import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navigation.css';

const links = [
  { to: '/about', label: 'About' },
  { to: '/practice', label: 'Practice' },
  { to: '/institutions', label: 'Institutions' },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    const handlePointerDown = (event) => {
      if (panelRef.current && event.target === panelRef.current) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handlePointerDown);
    };
  }, [menuOpen]);

  return (
    <header className="nav">
      <div className="nav__bar container">
        <Link to="/" className="nav__brand" onClick={() => setMenuOpen(false)}>
          <span className="nav__mark" aria-hidden="true" />
          <span className="nav__identity">
            <span className="nav__name">CMPK Raheem</span>
            <span className="nav__subtitle">Strategic Advisor</span>
          </span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/briefings" className="btn btn--outline nav__cta">
          Private Briefing
        </Link>

        <button
          type="button"
          className="nav__menu-btn"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <div
        id="mobile-nav"
        ref={panelRef}
        className={`nav__mobile ${menuOpen ? 'nav__mobile--open' : ''}`}
      >
        <nav className="nav__mobile-links" aria-label="Mobile">
          {links.map((link, index) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="nav__mobile-link"
              style={{ transitionDelay: `${index * 45}ms` }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="nav__mobile-link" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </nav>
        <Link
          to="/briefings"
          className="btn btn--primary nav__mobile-cta"
          onClick={() => setMenuOpen(false)}
        >
          Private Briefing
        </Link>
      </div>
    </header>
  );
}
