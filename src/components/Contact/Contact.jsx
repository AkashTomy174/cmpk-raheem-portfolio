import { useState } from 'react';
import { Mail } from 'lucide-react';
import Reveal from '../Reveal.jsx';
import './Contact.css';

const initialState = {
  name: '',
  email: '',
  organisation: '',
  interest: '',
  description: '',
};

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (event) => {
    setValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = 'Please provide your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Please provide a valid email address.';
    }
    if (!values.description.trim()) {
      nextErrors.description = 'Please provide a brief description of your enquiry.';
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
    <section className="section contact" id="contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <Reveal as="h2" className="contact__heading">
            Start a Private Conversation.
          </Reveal>
          <Reveal delay={0.08} as="p" className="body-text">
            For confidential enquiries regarding strategic advisory, institutional matters, or
            private briefings.
          </Reveal>
          <Reveal delay={0.14} className="contact__email">
            <Mail size={16} strokeWidth={1.5} aria-hidden="true" />
            <a href="mailto:advisory@cmpkraheem.com">advisory@cmpkraheem.com</a>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success" role="status">
              <h3>Enquiry received.</h3>
              <p className="body-text">Thank you. Your enquiry has been recorded confidentially.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  required
                />
                {errors.name && (
                  <span className="contact__error" id="contact-name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  required
                />
                {errors.email && (
                  <span className="contact__error" id="contact-email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-org">Organisation</label>
                <input
                  id="contact-org"
                  type="text"
                  value={values.organisation}
                  onChange={handleChange('organisation')}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-interest">Area of Interest</label>
                <input
                  id="contact-interest"
                  type="text"
                  value={values.interest}
                  onChange={handleChange('interest')}
                />
              </div>

              <div className="contact__field">
                <label htmlFor="contact-description">Brief Description</label>
                <textarea
                  id="contact-description"
                  rows={4}
                  value={values.description}
                  onChange={handleChange('description')}
                  aria-invalid={Boolean(errors.description)}
                  aria-describedby={errors.description ? 'contact-description-error' : undefined}
                  required
                />
                {errors.description && (
                  <span className="contact__error" id="contact-description-error">
                    {errors.description}
                  </span>
                )}
              </div>

              <button type="submit" className="btn btn--primary contact__submit">
                Request a Private Consultation
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
