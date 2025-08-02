import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import PrototypePage from './pages/PrototypePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/casestudy" replace />} />
      <Route path="/prototype" element={<PrototypePage />} />
      <Route path="/casestudy" element={<CaseStudyPage />} />
    </Routes>
    <Footer />
  </Router>
)

export default App
