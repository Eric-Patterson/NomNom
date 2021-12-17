import React from "react";
import { Link } from "react-router-dom";
import "../components/Navbar/Navbar.css";

import LoginButton from "./login-button";
import LogoutButton from "./logout-button";
// import Details from "../components/pages/";

import { useAuth0 } from "@auth0/auth0-react";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? <LogoutButton /> : <LoginButton />;
};

export default AuthenticationButton;
