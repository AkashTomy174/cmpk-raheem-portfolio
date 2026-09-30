import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import PageHeader from '../components/PageHeader/PageHeader.jsx';
import Reveal from '../components/Reveal.jsx';
import Contact from '../components/Contact/Contact.jsx';
import { institutions } from '../data/institutions.js';

export default function InstitutionDetail() {
  const { slug } = useParams();
  const institution = institutions.find((item) => item.slug === slug);

  useEffect(() => {
    if (institution) {
      document.title = `${institution.name} — CMPK Raheem`;
    }
  }, [institution]);

  if (!institution) {
    return <Navigate to="/institutions" replace />;
  }

  return (
    <>
      <div className="page-spacer" />
      <PageHeader eyebrow={institution.label} title={institution.name} description={institution.description} />

      <section className="section">
        <div className="container section-intro">
          <Reveal>
            <p className="micro-label">Role</p>
            <p className="body-text">{institution.role}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="micro-label">Focus Areas</p>
            <p className="body-text">{institution.tags}</p>
          </Reveal>
        </div>
      </section>

      <Contact />
    </>
  );
}
