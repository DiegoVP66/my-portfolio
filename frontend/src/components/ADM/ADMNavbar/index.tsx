import Logo from "assets/img/logo.svg";
import "bootstrap/js/src/collapse.js";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./styles.css";

const ADMNavbar = () => {
  return (
    <nav className="adm-navbar-container navbar sticky-top navbar-light navbar-expand-md">
      <div className="container">
        <div className="adm-nav-img">
          <img src={Logo} alt="" />
          <h4>Admin</h4>
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
          <ul className="navbar-nav offset-md-2 adm-main-menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/admin/crud">Projects</NavLink>
            </li>
            <NavLink to="/contact">Messages</NavLink>
            <li>
              <Link to="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ADMNavbar;
