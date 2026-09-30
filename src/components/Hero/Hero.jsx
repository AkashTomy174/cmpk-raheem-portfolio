import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Portrait from '../Portrait/Portrait.jsx';
import portraitImg from '../../assets/cmpk-raheem-portrait.webp';
import './Hero.css';

const ease = [0.16, 1, 0.3, 1];

const rise = {
  hidden: { opacity: 0, y: 22 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease },
  }),
};

const trustItems = ['Independent', 'Confidential', 'Legally Structured'];

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <motion.div
            className="hero__credentials"
            variants={rise}
            custom={0.15}
            initial="hidden"
            animate="show"
          >
            <span className="hero__dot" aria-hidden="true" />
            <span className="hero__credential-label">Strategic Advisor</span>
            <span className="hero__divider" aria-hidden="true" />
            <span className="hero__credential-muted">Independent Practice</span>
          </motion.div>

          <motion.h1 variants={rise} custom={0.3} initial="hidden" animate="show">
            Strategic Counsel for Complex Institutional Decisions.
          </motion.h1>

          <motion.p
            className="hero__alt"
            variants={rise}
            custom={0.45}
            initial="hidden"
            animate="show"
          >
            Where enterprise, governance and leadership intersect.
          </motion.p>

          <motion.p
            className="hero__paragraph body-text"
            variants={rise}
            custom={0.55}
            initial="hidden"
            animate="show"
          >
            Independent strategic advisory for corporate leaders, institutional promoters, and
            senior decision-makers navigating regulatory complexity, governance challenges,
            stakeholder negotiations, and high-stakes disputes.
          </motion.p>

          <motion.div
            className="hero__actions"
            variants={rise}
            custom={0.65}
            initial="hidden"
            animate="show"
          >
            <Link to="/briefings" className="btn btn--primary">
              Request a Private Briefing
            </Link>
            <Link to="/practice" className="btn btn--outline">
              Explore His Practice
            </Link>
          </motion.div>

          <motion.ul
            className="hero__trust"
            variants={rise}
            custom={0.75}
            initial="hidden"
            animate="show"
          >
            {trustItems.map((item) => (
              <li key={item} className="hero__trust-item">
                <span className="hero__trust-dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        <span className="hairline hero__rule" />

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
          animate={{ opacity: 1, clipPath: 'inset(0 0 0% 0)' }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <Portrait
            src={portraitImg}
            alt="Portrait of CMPK Raheem"
            caption={['CMPK Raheem', 'Founder · Strategic Advisor']}
          />
        </motion.div>
      </div>
    </section>
  );
}
