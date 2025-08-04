import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import CookieConsent from './components/CookieConsent';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CollaborationModels from './components/CollaborationModels';
import CareersSection from './components/CareersSection';
import Footer from './components/Footer.tsx';
import EngagementModel from './pages/EngagementModel';
import Careers from './pages/Careers';
import CareersApplication from './pages/CareersApplication';
import Contact from './pages/Contact';
import ServiceDetail from './pages/ServiceDetail';
import PartnersIframe from './pages/PartnersIframe';
import TeamMember from './pages/TeamMember';
import Resources from './pages/Resources';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import DataProtection from './pages/DataProtection';
import ContinuousGrowthEngine from './pages/ContinuousGrowthEngine';
import TransformationPartner from './pages/TransformationPartner';
import LeadershipIncubator from './pages/LeadershipIncubator';
import About from './pages/About';
import EmergingTechRadar from './pages/EmergingTechRadar';
import CrossIndustrySolutionMatching from './pages/CrossIndustrySolutionMatching';
import CollaborativeInnovation from './pages/CollaborativeInnovation';
import TeamSkillsVsBusinessNeeds from './pages/TeamSkillsVsBusinessNeeds';
import PracticalTechDesignSessions from './pages/PracticalTechDesignSessions';
import GrowthPlansForFutureReadyTeams from './pages/GrowthPlansForFutureReadyTeams';
import UnderstandBusinessNeeds from './pages/UnderstandBusinessNeeds';
import TestFastWithSimulations from './pages/TestFastWithSimulations';
import ScaleSmartWithAutomation from './pages/ScaleSmartWithAutomation';
import ConnectOldSystemsWithNewTech from './pages/ConnectOldSystemsWithNewTech';
import BuildFlexibleSystemsThatTalkToEachOther from './pages/BuildFlexibleSystemsThatTalkToEachOther';
import OneDashboardSmarterWorkflows from './pages/OneDashboardSmarterWorkflows';
import FindWhatsBrokenAndWhy from './pages/FindWhatsBrokenAndWhy';
import FixQuicklyImproveContinuously from './pages/FixQuicklyImproveContinuously';
import LetAIKeepThingsGettingBetterOverTime from './pages/LetAIKeepThingsGettingBetterOverTime';
import Vendors from './pages/Vendors';
import Suppliers from './pages/Suppliers';
import './index.css';
import { BlogSection } from './components/BlogSection.tsx';
import HeroImage from './components/HeroImage.tsx';
import GlobalPresence from './components/GlobalPresence.tsx';
import StrategicImpact from './pages/StrategicImpact';
import Industries from './pages/Industries';
// import HeroImage from './components/Hero';

function App() {
  return (
    <Router>
      <div className="font-sans text-gray-900 bg-white overflow-x-hidden">
        <Navigation />
        <Routes>
          <Route path="/" element={
            <>
            <HeroImage />
              <Hero />
              <GlobalPresence />
              <CollaborationModels />
               
              {/* <BlogSection category="opho-tech" status="published" /> */}

              <CareersSection />
             
            </>
          } />
          <Route path="/engagement-model" element={<EngagementModel />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers-application" element={<CareersApplication />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/partner-portal" element={<PartnersIframe />} />
          <Route path="/solutions/:solutionId" element={<ServiceDetail />} />
          <Route path="/team/:memberId" element={<TeamMember />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-protection" element={<DataProtection />} />
          <Route path="/continuous-growth-engine" element={<ContinuousGrowthEngine />} />
          <Route path="/transformation-partner" element={<TransformationPartner />} />
          <Route path="/leadership-incubator" element={<LeadershipIncubator />} />
          <Route path="/strategic-impact" element={<StrategicImpact />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/emerging-tech-radar" element={<EmergingTechRadar />} />
          <Route path="/cross-industry-solution-matching" element={<CrossIndustrySolutionMatching />} />
          <Route path="/collaborative-innovation" element={<CollaborativeInnovation />} />
          <Route path="/team-skills-vs-business-needs" element={<TeamSkillsVsBusinessNeeds />} />
          <Route path="/practical-tech-design-sessions" element={<PracticalTechDesignSessions />} />
          <Route path="/growth-plans-for-future-ready-teams" element={<GrowthPlansForFutureReadyTeams />} />
          <Route path="/understand-business-needs" element={<UnderstandBusinessNeeds />} />
          <Route path="/test-fast-with-simulations" element={<TestFastWithSimulations />} />
          <Route path="/scale-smart-with-automation" element={<ScaleSmartWithAutomation />} />
          <Route path="/connect-old-systems-with-new-tech" element={<ConnectOldSystemsWithNewTech />} />
          <Route path="/build-flexible-systems-that-talk-to-each-other" element={<BuildFlexibleSystemsThatTalkToEachOther />} />
          <Route path="/one-dashboard-smarter-workflows" element={<OneDashboardSmarterWorkflows />} />
          <Route path="/find-whats-broken-and-why" element={<FindWhatsBrokenAndWhy />} />
          <Route path="/fix-quickly-improve-continuously" element={<FixQuicklyImproveContinuously />} />
          <Route path="/let-ai-keep-things-getting-better-over-time" element={<LetAIKeepThingsGettingBetterOverTime />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/suppliers" element={<Suppliers />} />
        </Routes>
         <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;