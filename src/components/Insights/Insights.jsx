import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import { insights } from '../../data/insights.js';
import './Insights.css';

export default function Insights() {
  return (
    <section className="section insights">
      <div className="container">
        <div className="insights__header">
          <div className="section-intro insights__intro">
            <Reveal className="eyebrow">Perspectives</Reveal>
            <Reveal delay={0.08} as="h2">
              Ideas for navigating institutional complexity.
            </Reveal>
            <Reveal delay={0.14} as="p" className="body-text">
              Editorial topics reflecting the areas CMPK Raheem thinks and writes about.
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <Link to="/insights" className="link-arrow insights__view-all">
              View All Perspectives
            </Link>
          </Reveal>
        </div>

        <div className="insights__list">
          {insights.slice(0, 5).map((item, index) => (
            <Reveal key={item.id} delay={0.06 + index * 0.05} className="card insights__item">
              <p className="micro-label">{item.category}</p>
              <h3 className="insights__item-title serif">{item.title}</h3>
              <span className="hairline" />
              <span className="micro-label insights__item-tag">Editorial Topic &middot; Forthcoming</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
