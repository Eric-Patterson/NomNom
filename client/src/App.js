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
import Reset from "./components/pages/ResetPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Form />} />
        <Route path="/login" element={<FormLogin />} />
        <Route path="/donationform" element={<CreateDonationPage />} />
        <Route path="/donation/:id" element={<DonationEditPage />} />
        <Route path="/details" element={<DonationDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
