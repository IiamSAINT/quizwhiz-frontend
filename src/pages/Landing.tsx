import { Button } from '@/common/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Calendar, CheckCircle, Trophy, Users } from 'lucide-react';
import QuizHero from '../common/components/landing/QuizHero';
import QuizHeroV2 from './QuizHeroV2';
import FeaturesSection from '../pages/FeaturesSection';
import QuizFeatures from './QuizFeatures';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import CleanCTA from './CleanCTA';

const Landing = () => {
  return (
    <>
      <QuizHero />
      <QuizFeatures />
      <HowItWorks />
      <Testimonials />
      <CleanCTA />
      <br />
    </>
  );
};

export default Landing;
