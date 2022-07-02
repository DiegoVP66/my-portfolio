import Logo from "assets/img/logo.svg";
import { AuthContext } from "AuthContextData";
import "bootstrap/js/src/collapse.js";
import { useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { isAuthenticated } from "utils/auth";
import { removeAuthData } from "utils/storage";
import { getTokenData } from "utils/token";
import "./styles.css";

const ADMNavbar = () => {
  const history = useNavigate();

  const { authContextData, setAuthContextData } = useContext(AuthContext);

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData(),
      });
    } else {
      setAuthContextData({
        authenticated: false,
      });
    }
  }, [setAuthContextData]);

  const handleLogoutClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({
      authenticated: false,
    });
    history("/");
  };
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
              <Link to="/">HOME</Link>
            </li>
            <li>
              {authContextData.authenticated ? (
                <NavLink to="/admin/crud">PROJECTS</NavLink>
              ) : (
                <></>
              )}
            </li>
            <li>
              {authContextData.authenticated ? (
                <NavLink to="/about">ABOUT</NavLink>
              ) : (
                <></>
              )}
            </li>
            {authContextData.authenticated ? (
              <NavLink to="/contact">MESSAGES</NavLink>
            ) : (
              <></>
            )}
            <li>
              {authContextData.authenticated ? (
                <div className="logout-container">
                  <a href="#logout" onClick={handleLogoutClick}>
                    LOGOUT
                  </a>
                </div>
              ) : (
                <></>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ADMNavbar;
