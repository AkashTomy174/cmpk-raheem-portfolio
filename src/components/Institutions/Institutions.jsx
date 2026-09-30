import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { institutions } from '../../data/institutions.js';
import Reveal from '../Reveal.jsx';
import './Institutions.css';

export default function Institutions() {
  return (
    <section className="section institutions" id="institutions">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">Institutions</Reveal>
          <Reveal delay={0.08} as="h2">
            Building institutions beyond the advisory table.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            Vakkeel &amp; Associates and Indian Law School are institutions founded and led by
            CMPK Raheem &mdash; distinct chapters of his professional journey, separate from his
            personal advisory practice.
          </Reveal>
        </div>

        <div className="institutions__list">
          {institutions.map((institution, index) => (
            <Reveal key={institution.id} delay={0.1 + index * 0.08} className="card institutions__item">
              <p className="micro-label">{institution.label}</p>
              <h3 className="institutions__item-title serif">{institution.name}</h3>
              <p className="micro-label institutions__item-role">{institution.role}</p>
              <p className="body-text">{institution.description}</p>
              <span className="hairline" />
              <div className="institutions__item-footer">
                <p className="micro-label">{institution.tags}</p>
                <Link
                  to={`/institutions/${institution.slug}`}
                  className="link-arrow institutions__item-cta"
                >
                  {institution.cta}
                  <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
