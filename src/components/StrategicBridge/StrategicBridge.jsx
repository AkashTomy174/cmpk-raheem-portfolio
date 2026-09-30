import Reveal from '../Reveal.jsx';
import './StrategicBridge.css';

const nodes = [
  {
    step: '01 / SOURCE',
    title: 'Enterprise',
    tag: 'Capital Allocation',
    body: 'Asset liquidity, board mandates, and exposure mapping.',
  },
  {
    step: '02 / CONSTRAINT',
    title: 'Regulation',
    tag: 'Policy Framework',
    body: 'Diagnostic overview of statutory mandates and compliance friction.',
  },
  {
    step: '03 / APPARATUS',
    title: 'Governance',
    tag: 'Administration',
    body: 'Bureaucratic incentives, discretion boundaries, and internal authority.',
  },
  {
    step: '04 / DIALOGUE',
    title: 'Stakeholders',
    tag: 'Interest Alignment',
    body: 'Confidential multi-party communication without public friction.',
  },
  {
    step: '05 / RESOLUTION',
    title: 'Resolution',
    tag: 'Systemic Finality',
    body: 'Executable covenants, durable equilibrium, and asset protection.',
  },
];

export default function StrategicBridge() {
  return (
    <section className="section bridge">
      <div className="container">
        <div className="section-intro">
          <Reveal className="eyebrow">The Strategic Bridge</Reveal>
          <Reveal delay={0.08} as="h2">
            Understand the system before attempting to change the outcome.
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            His advisory approach focuses on understanding institutional incentives, identifying
            constraints, structuring lawful communication, and developing sustainable paths
            forward.
          </Reveal>
        </div>

        <Reveal delay={0.1} className="bridge__panel">
          <div className="bridge__panel-header">
            <p className="micro-label bridge__panel-label">Connected Advisory Architecture</p>
            <p className="micro-label">Protocol Flow</p>
          </div>

          <div className="bridge__flow">
            {nodes.map((node, index) => (
              <Reveal
                key={node.title}
                delay={0.16 + index * 0.06}
                className="bridge__node"
              >
                <span className="micro-label bridge__node-step">{node.step}</span>
                <div className="bridge__node-copy">
                  <h3 className="bridge__node-title">{node.title}</h3>
                  <span className="micro-label bridge__node-tag">{node.tag}</span>
                  <p className="body-text">{node.body}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="bridge__panel-footer">
            <p className="body-text">
              Non-linear diagnostic analysis calibrated across all five institutional nodes.
            </p>
            <p className="bridge__panel-footer-label">Diagnostic Methodology</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
