import Reveal from '../Reveal.jsx';
import './PageHeader.css';

export default function PageHeader({ eyebrow, title, description }) {
  return (
    <header className="page-header">
      <div className="container">
        {eyebrow && <Reveal className="eyebrow">{eyebrow}</Reveal>}
        <Reveal delay={0.08} as="h1" className="page-header__title">
          {title}
        </Reveal>
        {description && (
          <Reveal delay={0.14} as="p" className="body-text page-header__description">
            {description}
          </Reveal>
        )}
      </div>
    </header>
  );
}
