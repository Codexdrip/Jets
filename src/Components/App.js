import React from "react";
import LandingPagePic from "./LandingPage/LP-Pic/LandingPagePic";
import Navbar from "./Navigation/Navbar";

import Welcome from "./LandingPage/WelcomeCopy/Welcome";
import ParallaxComponent from "react-parallax-component";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPagePic />
      <Welcome />
    </div>
  );
}

export default App;
