import Reveal from '../Reveal.jsx';
import './Introduction.css';

const pillars = [
  {
    number: '01',
    label: 'Enterprise',
    body: 'Capital allocation, commercial momentum, and structural resilience amid regulatory and market pressure.',
  },
  {
    number: '02',
    label: 'Governance',
    body: 'Board alignment, shareholder consensus, internal authority frameworks, and promoter family equilibrium.',
  },
  {
    number: '03',
    label: 'Institutions',
    body: 'Regulatory environments, statutory friction, and administrative protocol across jurisdictions.',
  },
];

export default function Introduction() {
  return (
    <section className="section introduction">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">The Work Between the Lines</Reveal>
          <Reveal delay={0.08} as="h2">
            Complex decisions rarely exist within a single discipline.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            Commercial ambition intersects with regulation. Corporate strategy intersects with
            governance. Leadership decisions intersect with institutional realities. CMPK Raheem
            works within these intersections, helping decision-makers understand the systems
            around a problem before determining how to act.
          </Reveal>
        </div>

        <div className="introduction__pillars">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={0.06 + index * 0.06} className="card introduction__pillar">
              <span className="clause-number">{pillar.number}</span>
              <span className="introduction__pillar-label">{pillar.label}</span>
              <p className="body-text">{pillar.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
