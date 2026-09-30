import { useEffect } from 'react';
import Briefing from '../components/Briefing/Briefing.jsx';

export default function Briefings() {
  useEffect(() => {
    document.title = 'Private Briefings — CMPK Raheem';
  }, []);

  return (
    <>
      <div className="page-spacer" />
      <Briefing />
    </>
  );
}
