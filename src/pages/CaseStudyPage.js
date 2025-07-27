import CaseStudyHeroScreen from './casestudy/CaseStudyHeroScreen'
import CaseStudyOverviewScreen from './casestudy/CaseStudyOverviewScreen'
import CaseStudyDiscoveryScreen from './casestudy/CaseStudyDiscoveryScreen'
import CaseStudyUXProcessScreen from './casestudy/CaseStudyUXProcessScreen'
import CaseStudyFinalDesignScreen from './casestudy/CaseStudyFinalDesignScreen'
import CaseStudyImpactScreen from './casestudy/CaseStudyImpactScreen'
import CaseStudyReflectionScreen from './casestudy/CaseStudyReflectionScreen'

const screens = [
  CaseStudyHeroScreen,
  CaseStudyOverviewScreen,
  CaseStudyDiscoveryScreen,
  CaseStudyUXProcessScreen,
  CaseStudyFinalDesignScreen,
  CaseStudyImpactScreen,
  CaseStudyReflectionScreen,
]

const CaseStudyPage = () => screens.map((Screen, i) => <Screen key={i} />)

export default CaseStudyPage
