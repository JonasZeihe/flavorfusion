import React from "react";
import CaseStudyHeroScreen from "../components/screens/CaseStudyHeroScreen";
import CaseStudyOverviewScreen from "../components/screens/CaseStudyOverviewScreen";
import CaseStudyDiscoveryScreen from "../components/screens/CaseStudyDiscoveryScreen";
import CaseStudyUXProcessScreen from "../components/screens/CaseStudyUXProcessScreen";
import CaseStudyFinalDesignScreen from "../components/screens/CaseStudyFinalDesignScreen";
import CaseStudyImpactScreen from "../components/screens/CaseStudyImpactScreen";
import CaseStudyReflectionScreen from "../components/screens/CaseStudyReflectionScreen";

const CaseStudyPage = () => {
  return (
    <div>
      <CaseStudyHeroScreen />
      <CaseStudyOverviewScreen />
      <CaseStudyDiscoveryScreen />
      <CaseStudyUXProcessScreen />
      <CaseStudyFinalDesignScreen />
      <CaseStudyImpactScreen />
      <CaseStudyReflectionScreen />
    </div>
  );
};

export default CaseStudyPage;
