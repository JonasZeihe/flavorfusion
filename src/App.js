// src/App.js

import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyles from './styles/GlobalStyles'
import PrototypePage from './pages/PrototypePage'
import CaseStudyPage from './pages/CaseStudyPage'
import Header from './components/Header'
import ScrollToTopButton from './components/ScrollToTopButton'

const App = () => (
  <Router>
    <GlobalStyles />
    <Header />
    <Routes>
      <Route path="/" element={<CaseStudyPage />} />
      <Route path="/prototype" element={<PrototypePage />} />
    </Routes>
    <ScrollToTopButton />
  </Router>
)

export default App
