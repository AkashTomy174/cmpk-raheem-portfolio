import { useEffect } from 'react';
import Hero from '../components/Hero/Hero.jsx';
import Introduction from '../components/Introduction/Introduction.jsx';
import FrictionPoint from '../components/FrictionPoint/FrictionPoint.jsx';
import StrategicBridge from '../components/StrategicBridge/StrategicBridge.jsx';
import PracticeAreas from '../components/PracticeAreas/PracticeAreas.jsx';
import PersonalCounsel from '../components/PersonalCounsel/PersonalCounsel.jsx';
import Methodology from '../components/Methodology/Methodology.jsx';
import Integrity from '../components/Integrity/Integrity.jsx';
import Principal from '../components/Principal/Principal.jsx';
import Institutions from '../components/Institutions/Institutions.jsx';
import Insights from '../components/Insights/Insights.jsx';
import Briefing from '../components/Briefing/Briefing.jsx';
import Contact from '../components/Contact/Contact.jsx';

export default function Home() {
  useEffect(() => {
    document.title = 'CMPK Raheem | Strategic Advisor & Founder';
  }, []);

  return (
    <>
      <Hero />
      <Introduction />
      <FrictionPoint />
      <StrategicBridge />
      <PracticeAreas />
      <PersonalCounsel />
      <Methodology />
      <Integrity />
      <Principal />
      <Institutions />
      <Insights />
      <Briefing />
      <Contact />
    </>
  );
}
