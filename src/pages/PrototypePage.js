import Prototype1Flavourfusionscreen from './prototype/1_Flavourfusionscreen'
import Prototype2Pitch1screen from './prototype/2_Pitch1screen'
import Prototype3Downloadscreen from './prototype/3_Downloadscreen'
import Prototype4Cardscreen from './prototype/4_Cardscreen'
import Prototype5Pricingscreen from './prototype/5_Pricingscreen'
import Prototype6Pitch2screen from './prototype/6_Pitch2screen'
import Prototype7Faqscreen from './prototype/7_Faqscreen'
import Prototype8Imprintscreen from './prototype/8_Imprintscreen'

const screens = [
  Prototype1Flavourfusionscreen,
  Prototype2Pitch1screen,
  Prototype3Downloadscreen,
  Prototype4Cardscreen,
  Prototype5Pricingscreen,
  Prototype6Pitch2screen,
  Prototype7Faqscreen,
  Prototype8Imprintscreen,
]

const PrototypePage = () => screens.map((Screen, i) => <Screen key={i} />)

export default PrototypePage
