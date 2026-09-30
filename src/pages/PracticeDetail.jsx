import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import Contact from '../components/Contact/Contact.jsx';
import { getPracticeBySlug, practiceAreas } from '../data/practice.js';
import './PracticeDetail.css';

export default function PracticeDetail() {
  const { slug } = useParams();
  const practice = getPracticeBySlug(slug);

  useEffect(() => {
    if (practice) {
      document.title = `${practice.title} — CMPK Raheem`;
    }
  }, [practice]);

  if (!practice) {
    return <Navigate to="/practice" replace />;
  }

  const index = practiceAreas.findIndex((item) => item.slug === slug);
  const next = practiceAreas[(index + 1) % practiceAreas.length];

  return (
    <>
      <header className="practice-detail__header">
        <div className="container">
          <Reveal>
            <Link to="/practice" className="link-arrow practice-detail__back">
              <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" /> All Practice Areas
            </Link>
          </Reveal>
          <Reveal delay={0.06} className="eyebrow">
            Areas of Advisory
          </Reveal>
          <Reveal delay={0.12} as="div" className="practice-detail__title-row">
            <span className="clause-number">{practice.number}</span>
            <h1>{practice.title}</h1>
          </Reveal>
          <Reveal delay={0.18} as="p" className="body-text practice-detail__short">
            {practice.short}
          </Reveal>
        </div>
      </header>

      <section className="section practice-detail__body">
        <div className="container practice-detail__grid">
          <div>
            <Reveal as="h2" className="practice-detail__heading">
              Overview
            </Reveal>
            <Reveal delay={0.06} as="p" className="body-text">
              {practice.overview}
            </Reveal>

            <Reveal delay={0.12} as="h2" className="practice-detail__heading">
              Typical Challenges
            </Reveal>
            <ul className="practice-detail__list">
              {practice.challenges.map((challenge, i) => (
                <Reveal key={challenge} as="li" delay={0.14 + i * 0.05} className="body-text">
                  {challenge}
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.2} as="h2" className="practice-detail__heading">
              Advisory Approach
            </Reveal>
            <Reveal delay={0.24} as="p" className="body-text">
              {practice.approach}
            </Reveal>
          </div>

          <aside className="practice-detail__sidebar">
            <Reveal delay={0.1}>
              <p className="micro-label">Relevant Stakeholders</p>
              <p className="body-text">{practice.stakeholders}</p>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="micro-label">Expected Engagement Format</p>
              <p className="body-text">{practice.engagement}</p>
            </Reveal>
          </aside>
        </div>

        <div className="container">
          <Reveal delay={0.1} className="practice-detail__next">
            <span className="micro-label">Next Practice Area</span>
            <Link to={`/practice/${next.slug}`} className="link-arrow practice-detail__next-link">
              {next.title}
            </Link>
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
