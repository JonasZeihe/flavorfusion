import CaseStudyHeroScreen from './casestudy/1_HeroScreen'
import CaseStudyOverviewScreen from './casestudy/2_OverviewScreen'
import CaseStudyDiscoveryScreen from './casestudy/3_DiscoveryScreen'
import CaseStudyUXProcessScreen from './casestudy/4_UXProcessScreen'
import CaseStudyFinalDesignScreen from './casestudy/5_FinalDesignScreen'
import CaseStudyImpactScreen from './casestudy/6_ImpactScreen'
import CaseStudyReflectionScreen from './casestudy/7_ReflectionScreen'

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
