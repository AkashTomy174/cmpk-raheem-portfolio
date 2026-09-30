import Reveal from '../Reveal.jsx';
import './PersonalCounsel.css';

const pillars = [
  {
    number: '01',
    title: 'Promoter & Family Enterprise',
    tags: 'Governance · Succession · Internal Alignment',
  },
  {
    number: '02',
    title: 'Crisis & Reputation',
    tags: 'Public Exposure · Regulatory Risk · Crisis Navigation',
  },
  {
    number: '03',
    title: 'Institutional Exposure',
    tags: 'Administrative Systems · Regulatory Transitions',
  },
  {
    number: '04',
    title: 'Strategic Sounding Board',
    tags: 'Independent Analysis · Consequential Decisions',
  },
];

export default function PersonalCounsel() {
  return (
    <section className="section counsel">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">Personal Strategic Counsel</Reveal>
          <Reveal delay={0.08} as="h2">
            For decisions that cannot be made in a room alone.
          </Reveal>
          <Reveal delay={0.16} as="p" className="body-text">
            Senior decision-makers often need more than specialist advice. They need an
            independent perspective capable of examining the wider consequences of a decision.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="counsel__media">
          <span className="counsel__media-mark">[Working Portrait]</span>
          <div className="counsel__quote">
            <span className="micro-label counsel__quote-label">Indelible Discretion</span>
            <p className="counsel__quote-text">
              &ldquo;When the stakes are existential, the loudest room is rarely where clarity is
              found.&rdquo;
            </p>
          </div>
        </Reveal>

        <div className="counsel__pillars">
          {pillars.map((pillar, index) => (
            <Reveal key={pillar.number} delay={0.14 + index * 0.06} className="card counsel__pillar">
              <span className="micro-label">{`Pillar // ${pillar.number}`}</span>
              <h3 className="counsel__pillar-title">{pillar.title}</h3>
              <p className="micro-label counsel__pillar-tags">{pillar.tags}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
