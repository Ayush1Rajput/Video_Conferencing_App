import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function landing() {
  return (
    <div className="landingPageContainer" >
      <nav>
        <div className="navHeader">
          <h2>Zoom Clone</h2>
        </div>
        <div className="navlist">
          <p>Join as Guest</p>
          <p>Register</p>
          <div role="button">
            <p>Login</p>
          </div>
        </div>
      </nav>

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#42aaf5" }}>Connect</span> with the World!
          </h1>
          <p>Cover the distance by Zoom</p>
          <div role="button">
            <Link to={"/auth"}>Get Started</Link>
            {/* <h5 style={{color:"#42aaf5"}}>Get Started</h5> */}
          </div>
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*yogb8pbd0pUunXAEM3fJaw.png"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
}
