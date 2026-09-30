import Reveal from '../Reveal.jsx';
import './Methodology.css';

const phases = [
  {
    number: '01',
    phase: 'PHASE // DIAGNOSE',
    title: 'Comprehensive Mapping',
    body: 'Understand the institutional landscape, constraints, incentives and risks before formulating action.',
    deliverable: 'DELIVERABLE: DIAGNOSTIC DOSSIER',
  },
  {
    number: '02',
    phase: 'PHASE // CONVENE',
    title: 'Protected Channels',
    body: 'Create structured and appropriately authorised communication between relevant stakeholders.',
    deliverable: 'DELIVERABLE: CLOSED TABLE PROTOCOL',
  },
  {
    number: '03',
    phase: 'PHASE // STRUCTURE',
    title: 'Lawful Resolution',
    body: 'Develop lawful frameworks, documentation and potential resolution pathways.',
    deliverable: 'DELIVERABLE: EXECUTABLE COVENANTS',
  },
  {
    number: '04',
    phase: 'PHASE // SUSTAIN',
    title: 'Governance Equilibrium',
    body: 'Support continuity through governance, monitoring and strategic advisory.',
    deliverable: 'DELIVERABLE: INSTITUTIONAL STABILITY',
  },
];

export default function Methodology() {
  return (
    <section className="section methodology">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">How He Works</Reveal>
          <Reveal delay={0.08} as="h2">
            From complexity to clarity.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            A disciplined four-phase advisory engagement model, structured to deconstruct systemic
            risk and pursue durable institutional resolution.
          </Reveal>
        </div>

        <div className="methodology__list">
          {phases.map((phase, index) => (
            <Reveal key={phase.number} delay={0.06 + index * 0.06} className="card methodology__phase">
              <span className="methodology__phase-number">{phase.number}</span>
              <p className="micro-label">{phase.phase}</p>
              <h3 className="methodology__phase-title">{phase.title}</h3>
              <p className="body-text">{phase.body}</p>
              <p className="micro-label methodology__phase-deliverable">{phase.deliverable}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
