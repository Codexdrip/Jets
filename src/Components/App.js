import React from "react";
import LandingPagePic from "./LandingPage/LandingPagePic";
import Navbar from "./Navigation/Navbar";
import Tweets from "./LandingPage/TwitterPost";
import Welcome from "./WelcomeCopy/Welcome";
import "../CSS/LandingPage.css";

function App() {
  return (
    <div className="App container-fluid">
      <Navbar />
      <LandingPagePic />
      <Welcome />

      <div id="about">
        <h2>This is the about section</h2>
      </div>
    </div>
  );
}

export default App;
