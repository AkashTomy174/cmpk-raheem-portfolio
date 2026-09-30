import { useEffect } from 'react';
import Contact from '../components/Contact/Contact.jsx';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — CMPK Raheem';
  }, []);

  return (
    <>
      <div className="page-spacer" />
      <Contact />
    </>
  );
}
