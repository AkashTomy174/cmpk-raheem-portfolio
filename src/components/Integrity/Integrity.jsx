import { ShieldCheck, LockKeyhole, Scale } from 'lucide-react';
import Reveal from '../Reveal.jsx';
import './Integrity.css';

const principles = [
  {
    icon: ShieldCheck,
    title: 'Independence',
    body: 'Advice is not subordinated to internal corporate factions, political interests, or commercial pressure.',
    protocol: 'PROTOCOL // ZERO-CONFLICT MANDATE',
  },
  {
    icon: LockKeyhole,
    title: 'Confidentiality',
    body: 'Client information, advisory discussions and sensitive materials are treated as confidential within applicable professional and legal frameworks.',
    protocol: 'PROTOCOL // PRIVILEGED NON-DISCLOSURE',
  },
  {
    icon: Scale,
    title: 'Compliance',
    body: 'Engagements are structured around applicable law, regulatory requirements, and documented institutional processes.',
    protocol: 'PROTOCOL // STATUTORY RIGOUR',
  },
];

export default function Integrity() {
  return (
    <section className="section integrity">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">Integrity Firewall</Reveal>
          <Reveal delay={0.08} as="h2">
            Trust requires boundaries.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            Strategic advisory requires trust. That trust depends on clear boundaries.
          </Reveal>
        </div>

        <div className="integrity__grid">
          {principles.map((principle, index) => {
            const Icon = principle.icon;
            return (
              <Reveal key={principle.title} delay={0.1 + index * 0.08} className="card integrity__item">
                <Icon size={24} strokeWidth={1.5} color="var(--accent)" aria-hidden="true" />
                <h3 className="integrity__item-title">{principle.title}</h3>
                <p className="body-text">{principle.body}</p>
                <span className="hairline" />
                <p className="micro-label">{principle.protocol}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
