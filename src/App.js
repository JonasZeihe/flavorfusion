import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import LandingPage from "./pages/LandingPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import HomePage from "./pages/HomePage";
import Footer from "./components/layout/Footer";

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/case-study" element={<CaseStudyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
