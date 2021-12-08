import React from "react";
import { Routes, Route } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import Home from "./components/pages/Home";

import CreateDonationPage from "./components/pages/CreateDonationPage";
import PickupFormPage from "./components/pages/PickupFormPage";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/signup/Form";
import FormLogin from "./components/signup/FormLogin";
import ErrorPage from "./components/pages/ErrorPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <Navbar />
      <nav>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details Page</Link>
          </li>
          <li>
            <Link to="/donationform">Donation Form</Link>
          </li>
          <li>
            <Link to="/pickupform">Pickup Form</Link>
          </li>
        </ul> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/donationform" element={<CreateDonationPage />} />
        <Route path="/pickupform" element={<PickupFormPage />} />
        <Route path="/details" element={<DonationDetailPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>

      {/* <Navbar />
      <DonationForm />
      <PickupForm />
      <DonationList /> */}
    </div>
  );
}

export default App;
