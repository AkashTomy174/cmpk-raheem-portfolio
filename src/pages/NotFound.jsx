import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found — CMPK Raheem';
  }, []);

  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="clause-number">404</span>
        <h1 className="not-found__heading">This page does not exist.</h1>
        <p className="body-text">
          The page you are looking for may have been moved or is no longer available.
        </p>
        <Link to="/" className="btn btn--outline">
          Return to Home
        </Link>
      </div>
    </section>
  );
}
