import React, { useState } from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

export default function Landing() {
  // State to toggle the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="landingPageContainer">
      <nav>
        <div className="navHeader">
          <h2>Zoom Clone</h2>
        </div>
        <div className={`navlist ${isMenuOpen ? "open" : ""}`}>
          <Link to="/guest">
            <p>Join as Guest</p>
          </Link>
          <Link to="/auth">
            <p>Register</p>
          </Link>

          <Link to="/auth">
            <p>Login</p>
          </Link>
        </div>

        {/* Hamburger Menu Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
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
          </div>
        </div>
        <div>
          <img
            src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*yogb8pbd0pUunXAEM3fJaw.png"
            alt="Zoom Logo"
          />
        </div>
      </div>
    </div>
  );
}
