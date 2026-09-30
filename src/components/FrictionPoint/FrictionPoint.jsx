import Reveal from '../Reveal.jsx';
import './FrictionPoint.css';

const points = [
  {
    number: '01',
    title: 'The Litigation Trap',
    body: 'Premature escalation can transform an operational disagreement into a prolonged institutional dispute.',
    risk: 'RISK: STATUTORY INERTIA & IRREVERSIBLE ALIENATION',
  },
  {
    number: '02',
    title: 'Regulatory Exposure',
    body: 'Informal influence and poorly documented decisions can create unnecessary legal, compliance, and reputational exposure.',
    risk: 'RISK: ASYMMETRIC COMPLIANCE EXPOSURE',
  },
  {
    number: '03',
    title: 'Leadership Isolation',
    body: 'Consequential decisions require an independent perspective capable of seeing beyond internal organisational interests.',
    risk: 'RISK: CONFIRMATION BIAS IN HIGH-VELOCITY CRISES',
  },
];

export default function FrictionPoint() {
  return (
    <section className="section friction">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">The Friction Point</Reveal>
          <Reveal delay={0.08} as="h2">
            Where Conventional Responses Create New Risks.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            When high-value enterprise encounters complex administrative and regulatory systems,
            the obvious response is not always the most effective one.
          </Reveal>
        </div>

        <div className="friction__list">
          {points.map((point, index) => (
            <Reveal key={point.number} delay={0.1 + index * 0.08} className="card friction__item">
              <span className="clause-number">{point.number}</span>
              <h3 className="friction__item-title">{point.title}</h3>
              <p className="body-text">{point.body}</p>
              <span className="hairline" />
              <p className="micro-label friction__risk">{point.risk}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
