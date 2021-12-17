import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "../Button";
import "./Navbar.css";
import AuthNav from "../auth-nav";

import { useAuth0 } from "@auth0/auth0-react";

function Navbar() {
  const { isAuthenticated } = useAuth0();

  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked({ clicked: !clicked });
  }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <Link to="/" className="nav-links" id="nomnom">
          NomNom
        </Link>
      </h1>
      <div className="menu-icon" onClick={handleClick}>
        {/* burger menu: if clicked it will change to X sign (all imported from font awesome) */}
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/about" className="nav-links">
            About
          </Link>
        </li>
        {isAuthenticated ? (
          <li>
            <Link to="/details" className="nav-links">
              Details Page
            </Link>
          </li>
        ) : (
          <div></div>
        )}

        <li>
          <Link to="/donationform" className="nav-links">
            Donation Form
          </Link>
        </li>

        {/* <li>
          <Link to="/register" className="nav-links">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-links">
            Login
          </Link>
        </li> */}
      </ul>
      <AuthNav />
    </nav>
  );
}

export default Navbar;
