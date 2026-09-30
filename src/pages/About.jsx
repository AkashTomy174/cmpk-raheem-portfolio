import { useEffect } from 'react';
import Principal from '../components/Principal/Principal.jsx';
import Integrity from '../components/Integrity/Integrity.jsx';
import Institutions from '../components/Institutions/Institutions.jsx';
import Contact from '../components/Contact/Contact.jsx';

export default function About() {
  useEffect(() => {
    document.title = 'About — CMPK Raheem';
  }, []);

  return (
    <>
      <div className="page-spacer" />
      <Principal />
      <Integrity />
      <Institutions />
      <Contact />
    </>
  );
}
