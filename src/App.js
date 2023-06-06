import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NoiseAnalysisResults from "./pages/noise_analysis_results";
import ComplaintApply from "./pages/complaint_apply";
import MentalHearingHealth from "./pages/mental_hearing_health";
import Product from "./pages/product";
import ReduceNoise from "./pages/reduce_noise_floors_main";
import ReduceNoiseFloors from "./pages/reduce_noise_floors";

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
        <Route path="/mental_hearing_health" element={<MentalHearingHealth />} />
        <Route path="/product" element={<Product />} />
        <Route path="/solution" element={<ReduceNoise />} />
        <Route path="/solution_tab" element={<ReduceNoiseFloors />} />
      </Routes>
    </Router>
  );
}

export default App;
