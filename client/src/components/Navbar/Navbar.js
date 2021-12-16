import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "../Button";
import "./Navbar.css";
// import useForm from "../signup/useForm";

// import useForm from "../signup/useForm";

function Navbar() {
  // let { status } = useForm();
  // status = newStatus;

  // function userLoggedIn = loginUser({})

  // console.log("i am in navbar", status);

  // const [loggedIn, setLoggedIn] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked({ clicked: !clicked });
  }

  // function loggedin() {
  //   if (status === false) {
  //     return (
  //       <div>
  // <li>
  //   <Link to="/register" className="nav-links">
  //     Sign Up
  //   </Link>
  // </li>
  // <li>
  //   <Link to="/login" className="nav-links">
  //     Login
  //   </Link>
  // </li>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="true">
  //         <li>
  //           <Link to="/details" className="nav-links">
  //             Details Page
  //           </Link>
  //         </li>
  //         <li>
  //           <Link to="/logout" className="nav-links">
  //             Logout
  //           </Link>
  //         </li>
  //       </div>
  //     );
  //   }
  // }

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        <Link to="/" className="nav-links">
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

        {/* {loggedin()} */}
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
          <Link to="/register" className="nav-links">
            Sign Up
          </Link>
        </li>
        <li>
          <Link to="/login" className="nav-links">
            Login
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
