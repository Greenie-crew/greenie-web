import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoiseAnalysisResults from "./pages/noise_analysis_results";
import ComplaintApply from "./pages/complaint_apply";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<NoiseAnalysisResults />} />
        <Route path="/complaint_apply" element={<ComplaintApply />} />
      </Routes>
    </Router>
  );
}

export default App;
