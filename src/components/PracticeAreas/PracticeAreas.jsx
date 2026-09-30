import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Reveal from '../Reveal.jsx';
import { practiceAreas } from '../../data/practice.js';
import './PracticeAreas.css';

export default function PracticeAreas() {
  return (
    <section className="section practice-areas" id="practice">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">Areas of Advisory</Reveal>
          <Reveal delay={0.08} as="h2">
            Five areas of strategic practice.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            Advisory structured to resolve multi-party gridlocks, de-escalate confrontations, and
            protect the foundational equity of complex enterprises.
          </Reveal>
        </div>

        <div className="practice-areas__list">
          {practiceAreas.map((area, index) => (
            <Reveal key={area.slug} delay={0.06 + index * 0.05}>
              <Link to={`/practice/${area.slug}`} className="practice-areas__item">
                <span className="clause-number">{area.number}</span>
                <div className="practice-areas__item-body">
                  <h3 className="practice-areas__item-title">{area.title}</h3>
                  <p className="body-text">{area.short}</p>
                </div>
                <span className="micro-label practice-areas__cta">Explore Practice</span>
                <ArrowUpRight
                  className="practice-areas__arrow"
                  size={16}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
