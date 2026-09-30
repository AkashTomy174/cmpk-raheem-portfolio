import { useEffect } from 'react';
import PageHeader from '../components/PageHeader/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Contact from '../components/Contact/Contact.jsx';
import { insights } from '../data/insights.js';
import './Insights.css';

export default function InsightsPage() {
  useEffect(() => {
    document.title = 'Insights — CMPK Raheem';
  }, []);

  return (
    <>
      <PageHeader
        eyebrow="Perspectives"
        title="Ideas for navigating institutional complexity."
        description="Editorial topics reflecting the areas CMPK Raheem thinks and writes about. These are placeholder subjects pending publication, not existing articles."
      />

      <section className="section insights-page">
        <div className="container insights-page__grid">
          {insights.map((item, index) => (
            <Reveal key={item.id} delay={0.04 + index * 0.04} className="insights-page__card">
              <p className="micro-label">{item.category}</p>
              <h2 className="insights-page__card-title serif">{item.title}</h2>
              <span className="insights-page__card-tag">Editorial topic &middot; Forthcoming</span>
            </Reveal>
          ))}
        </div>
      </section>

      <Contact />
    </>
  );
}
