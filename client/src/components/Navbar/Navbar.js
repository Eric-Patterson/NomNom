import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button";
import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <Link to="/" className="nav-links">
            React
            <i className="fab fa-react"></i>
          </Link>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          {/* burger menu: if clicked it will change to X sign (all imported from font awesome) */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/details" className="nav-links">
              Details Page
            </Link>
          </li>
          <li>
            <Link to="/donationform" className="nav-links">
              Donation Form
            </Link>
          </li>
          <li>
            <Link to="/pickupform" className="nav-links">
              Pickup Form
            </Link>
          </li>
          <li>
            <Link to="/register" className="nav-links">
              Sign In
            </Link>
          </li>
        </ul>
        {/* <Button>Sign Up</Button> */}
      </nav>
    );
  }
}

export default Navbar;
