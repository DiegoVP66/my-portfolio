import Logo from "assets/img/logo.svg";
import "bootstrap/js/src/collapse.js";

import "./styles.css";

const Navbar = () => {
  return (
    <nav className="navbar-container navbar sticky-top navbar-light navbar-expand-md">
      <div className="container">
        <div className="nav-img">
          <img src={Logo} alt="" />
          <h4>Diego</h4>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#portfolio-navbar"
          aria-controls="portfolio-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="portfolio-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#projects">PROJECTS</a>
            </li>
            <li>
              <a href="#contact">CONTACT</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
