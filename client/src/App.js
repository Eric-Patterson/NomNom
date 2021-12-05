import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import Home from "./components/pages/Home";
import DonationForm from "./components/forms/DonationForm";
import PickupForm from "./components/forms/PickupForm";
import DonationList from "./components/DonationList";
import DonationDetail from "./components/DonationDetail";
// import Form from "./components/signup/Form";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Form /> */}
      <DonationForm />
      {/* <PickupForm /> */}
      {/* <DonationList /> */}
    </div>
  );
}

export default App;
