import { useEffect } from 'react';
import PracticeAreas from '../components/PracticeAreas/PracticeAreas.jsx';
import Methodology from '../components/Methodology/Methodology.jsx';
import Contact from '../components/Contact/Contact.jsx';

export default function Practice() {
  useEffect(() => {
    document.title = 'Practice — CMPK Raheem';
  }, []);

  return (
    <>
      <div className="page-spacer" />
      <PracticeAreas />
      <Methodology />
      <Contact />
    </>
  );
}
