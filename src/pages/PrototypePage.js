import Prototype1Flavourfusionscreen from './prototype/Prototype1Flavourfusionscreen'
import Prototype2Pitch1screen from './prototype/Prototype2Pitch1screen'
import Prototype3Downloadscreen from './prototype/Prototype3Downloadscreen'
import Prototype4Cardscreen from './prototype/Prototype4Cardscreen'
import Prototype5Pricingscreen from './prototype/Prototype5Pricingscreen'
import Prototype6Pitch2screen from './prototype/Prototype6Pitch2screen'
import Prototype7Faqscreen from './prototype/Prototype7Faqscreen'
import Prototype8Imprintscreen from './prototype/Prototype8Imprintscreen'

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
