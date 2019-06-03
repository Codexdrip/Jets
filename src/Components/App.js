import React from "react";
import LandingPagePic from "./LandingPage/LandingPagePic";
import Navbar from "./Navigation/Navbar";
import Tweets from "./LandingPage/TwitterPost";
import Welcome from "./WelcomeCopy/Welcome";
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
