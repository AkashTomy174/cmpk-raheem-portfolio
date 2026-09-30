import { useState } from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../Reveal.jsx';
import './Briefing.css';

const topics = [
  'Regulatory developments',
  'Infrastructure friction',
  'Institutional risk',
  'Governance trends',
  'Dispute-resolution patterns',
];

const initialState = {
  name: '',
  designation: '',
  organisation: '',
  email: '',
  interest: '',
  message: '',
};

export default function Briefing() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please provide your name.';
    if (!values.organisation.trim()) nextErrors.organisation = 'Please provide your organisation.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please provide a valid professional email address.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="section briefing" id="briefings">
      <div className="container briefing__grid">
        <div className="briefing__intro">
          <Reveal className="eyebrow">Private Strategic Briefings</Reveal>
          <Reveal delay={0.08} as="h2" className="briefing__heading">
            Sovereign &amp; Regulatory Horizons
          </Reveal>
          <Reveal delay={0.14} as="p" className="body-text">
            A periodic strategic briefing examining emerging regulatory, institutional,
            infrastructure, and governance developments relevant to senior decision-makers.
          </Reveal>
          <Reveal delay={0.17} as="p" className="body-text">
            Request access here for recurring briefings on a topic area. For a specific,
            one-off matter, use the{' '}
            <Link to="/contact" className="link-arrow briefing__contact-link">
              Contact form
            </Link>{' '}
            instead.
          </Reveal>
          <Reveal delay={0.2} as="ul" className="briefing__topics">
            {topics.map((topic) => (
              <li key={topic}>{topic}</li>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.16} className="briefing__form-wrap">
          {submitted ? (
            <div className="briefing__success" role="status">
              <h3>Request received.</h3>
              <p className="body-text">
                Thank you. Your request for briefing access has been recorded.
              </p>
            </div>
          ) : (
            <form className="briefing__form" onSubmit={handleSubmit} noValidate>
              <p className="micro-label briefing__form-label">Request Briefing Access</p>

              <div className="briefing__field">
                <label htmlFor="briefing-name">Name</label>
                <input
                  id="briefing-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'briefing-name-error' : undefined}
                  required
                />
                {errors.name && (
                  <span className="briefing__error" id="briefing-name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="briefing__field">
                <label htmlFor="briefing-designation">Designation</label>
                <input
                  id="briefing-designation"
                  type="text"
                  value={values.designation}
                  onChange={handleChange('designation')}
                />
              </div>

              <div className="briefing__field">
                <label htmlFor="briefing-org">Organisation</label>
                <input
                  id="briefing-org"
                  type="text"
                  value={values.organisation}
                  onChange={handleChange('organisation')}
                  aria-invalid={Boolean(errors.organisation)}
                  aria-describedby={errors.organisation ? 'briefing-org-error' : undefined}
                  required
                />
                {errors.organisation && (
                  <span className="briefing__error" id="briefing-org-error">
                    {errors.organisation}
                  </span>
                )}
              </div>

              <div className="briefing__field">
                <label htmlFor="briefing-email">Professional Email</label>
                <input
                  id="briefing-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'briefing-email-error' : undefined}
                  required
                />
                {errors.email && (
                  <span className="briefing__error" id="briefing-email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="briefing__field">
                <label htmlFor="briefing-interest">Area of Interest</label>
                <input
                  id="briefing-interest"
                  type="text"
                  value={values.interest}
                  onChange={handleChange('interest')}
                />
              </div>

              <div className="briefing__field">
                <label htmlFor="briefing-message">Message</label>
                <textarea
                  id="briefing-message"
                  rows={3}
                  value={values.message}
                  onChange={handleChange('message')}
                />
              </div>

              <button type="submit" className="btn btn--primary briefing__submit">
                Request Access
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
