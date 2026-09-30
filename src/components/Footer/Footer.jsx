import { Link } from 'react-router-dom';
import './Footer.css';

const siteLinks = [
  { to: '/about', label: 'About' },
  { to: '/practice', label: 'Practice' },
  { to: '/institutions', label: 'Institutions' },
  { to: '/briefings', label: 'Private Briefing' },
  { to: '/contact', label: 'Contact' },
];

const legalLinks = ['Privacy', 'Confidentiality', 'Legal Notice'];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__name serif">CMPK Raheem</p>
            <p className="micro-label">Strategic Advisor &middot; Founder &middot; Institutional Counsel</p>
          </div>

          <nav className="footer__nav" aria-label="Footer">
            {siteLinks.map((link) => (
              <Link key={link.to} to={link.to} className="footer__link">
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="footer__institutions">
            <p className="micro-label">Institutions</p>
            <span className="footer__static-link">Vakkeel &amp; Associates</span>
            <span className="footer__static-link">Indian Law School</span>
          </div>
        </div>

        <hr className="hairline" />

        <p className="footer__compliance">
          CMPK Raheem Advisory operates as an independent strategic and dispute-resolution
          advisory practice. Matters requiring formal judicial adjudication or statutory filings
          are coordinated alongside appropriately qualified legal practitioners and other relevant
          professionals.
        </p>

        <div className="footer__bottom">
          <p className="micro-label">&copy; {new Date().getFullYear()} CMPK Raheem Advisory</p>
          <div className="footer__legal">
            {legalLinks.map((label) => (
              <span key={label} className="footer__static-link">
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
