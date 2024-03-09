// frontend/src/components/Navigation/index.js
import React, { useEffect } from "react";
import MainContent from "./mainContent";
import RightMenu from "./rightMenu";
import "./style/landingPage.css";

function LandingPage({ isLoaded }) {
  useEffect(() => {}, []);
  return (
    <>
      <h1>LandingPage</h1>
      <div className="landingPage-container">
        <div className="landingPage-content-wrapper">
          <span>
            <MainContent />
          </span>
          <span>
            <RightMenu />
          </span>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
