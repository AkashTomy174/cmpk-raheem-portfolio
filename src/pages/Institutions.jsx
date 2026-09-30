import { useEffect } from 'react';
import Institutions from '../components/Institutions/Institutions.jsx';
import Contact from '../components/Contact/Contact.jsx';

export default function InstitutionsPage() {
  useEffect(() => {
    document.title = 'Institutions — CMPK Raheem';
  }, []);

  return (
    <>
      <div className="page-spacer" />
      <Institutions />
      <Contact />
    </>
  );
}
