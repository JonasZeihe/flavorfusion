import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import HomePage from './pages/HomePage'
import PrototypePage from './pages/PrototypePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Footer from './components/layout/Footer'

const App = () => (
  <Router>
    <GlobalStyles />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/prototype" element={<PrototypePage />} />
      <Route path="/casestudy" element={<CaseStudyPage />} />
    </Routes>
    <Footer />
  </Router>
)

export default App
