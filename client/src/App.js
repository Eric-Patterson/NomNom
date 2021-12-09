import React from "react";
import { Routes, Route } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CreateDonationPage from "./components/pages/CreateDonationPage";

import Navbar from "./components/Navbar/Navbar";

import Form from "./components/signup/Form";

import FormLogin from "./components/signup/FormLogin";

import DonationEditPage from "./components/pages/DonationEditPage";

import ErrorPage from "./components/pages/ErrorPage";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>

        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<FormLogin />} />

        <Route path="/" element={<HomePage />} />
        {/* <Route path="/signIn" element={<Form />} /> */}

        <Route path="/donationform" element={<CreateDonationPage />} />
        <Route path="/donation/:id" element={<DonationEditPage />} />
        {/* <Route path="/pickupform" element={<PickupFormPage />} />
         */}
        <Route path="/details" element={<DonationDetailPage />} />

        <Route path="*" element={<ErrorPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      {/* <Navbar />
      <DonationForm />
      <PickupForm />
      <DonationList /> */}
    </div>
  );
}

export default App;
