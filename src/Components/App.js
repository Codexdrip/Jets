import React from "react";
import LandingPagePic from "./LandingPage/LP-Pic/LandingPagePic";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer/Footer";
import Welcome from "./LandingPage/WelcomeCopy/Welcome";
import ParallaxComponent from "react-parallax-component";
import LPLogo from "./LandingPage/LP-Pic/LpLogo";

function App() {
  return (
    <div className="App">
      <Navbar />

      <LandingPagePic />
      <LPLogo />
      <Welcome />
      <Footer />
    </div>
  );
}

export default App;
