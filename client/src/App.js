import React from "react";
import { Routes, Route } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import Home from "./components/pages/Home";

import CreateDonationPage from "./components/pages/CreateDonationPage";

import Navbar from "./components/Navbar/Navbar";
import Form from "./components/signup/Form";
import DonationEditPage from "./components/pages/DonationEditPage";

// import PickupFormPage from "./components/pages/PickupFormPage";
// import PickupFormDetailsPage from "./components/pages/PickupFormDetailsPage";

// import ErrorPage from "./components/pages/ErrorPage";

// import PickupForm from "./components/forms/PickupForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<Form />} />
        <Route path="/donationform" element={<CreateDonationPage />} />
        <Route path="/donation/:id" element={<DonationEditPage />} />
        {/* <Route path="/pickupform" element={<PickupFormPage />} />
         */}
        <Route path="/details" element={<DonationDetailPage />} />
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>

      {/* <Navbar />
      <DonationForm />
      <PickupForm />
      <DonationList /> */}
    </div>
  );
}

export default App;
