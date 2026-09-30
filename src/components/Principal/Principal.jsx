import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import Portrait from '../Portrait/Portrait.jsx';
import portraitImg from '../../assets/cmpk-raheem-portrait.webp';
import './Principal.css';

export default function Principal() {
  return (
    <section className="section principal">
      <div className="container principal__inner">
        <Reveal className="principal__quote">
          <span className="principal__quote-rule" aria-hidden="true" />
          <p className="principal__quote-text">
            &ldquo;Understand the system before attempting to change the outcome.&rdquo;
          </p>
          <span className="micro-label">&mdash; CMPK Raheem</span>
        </Reveal>

        <div className="principal__feature">
          <Reveal className="principal__portrait">
            <Portrait src={portraitImg} alt="Portrait of CMPK Raheem" variant="wide" />
          </Reveal>

          <div className="principal__copy">
            <Reveal className="eyebrow">The Principal</Reveal>
            <Reveal delay={0.08} as="h2" className="principal__name">
              CMPK Raheem
            </Reveal>
            <Reveal delay={0.14} as="p" className="principal__subtitle">
              Founder &middot; Strategic Advisor &middot; Institutional Counsel
            </Reveal>

            <Reveal delay={0.18} className="principal__affiliations">
              <span className="principal__affiliation">Founder &amp; MD &mdash; Vakkeel &amp; Associates</span>
              <span className="principal__affiliation">Founder &mdash; Indian Law School</span>
            </Reveal>

            <Reveal delay={0.24} className="principal__bio">
              <p className="body-text">
                CMPK Raheem advises institutional promoters, corporate boards, and senior
                decision-makers navigating complex regulatory, governance, and dispute
                environments.
              </p>
              <p className="body-text">
                His work operates at the intersection of capital allocation, administrative
                systems, institutional relationships, and leadership.
              </p>
              <p className="body-text">
                His methodology combines systemic analysis, structured negotiation, procedural
                discipline, and confidential strategic counsel.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <Link to="/about" className="btn btn--outline">
                Explore Profile
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
