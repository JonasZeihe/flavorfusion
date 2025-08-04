import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import PrototypePage from './pages/PrototypePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => (
  <Router basename="/flavorfusion">
    {' '}
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<Navigate to="/casestudy" replace />} />
      <Route path="/prototype" element={<PrototypePage />} />
      <Route path="/casestudy" element={<CaseStudyPage />} />
    </Routes>
    <ScrollToTopButton />
  </Router>
)

export default App
