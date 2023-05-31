import React, { useEffect } from "react";

import NoiseAnalysisResults from "./pages/noise_analysis_results";

function App() {
  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }
  useEffect(() => {
    setScreenSize();
  });

  return <NoiseAnalysisResults />;
}

export default App;
