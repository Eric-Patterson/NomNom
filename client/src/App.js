// import React, { useState } from "react";
import React from "react";
import { Routes, Route } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import CreateDonationPage from "./components/pages/CreateDonationPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

// import Form from "./components/signup/Form";
// import FormLogin from "./components/signup/FormLogin";

import DonationEditPage from "./components/pages/DonationEditPage";
import ErrorPage from "./components/pages/ErrorPage";
import Reset from "./components/pages/ResetPage";
import "./App.css";

// Auth0 stuff
import { useAuth0 } from "@auth0/auth0-react";
// import ProtectedRoute from "./auth/protected-route";
// import { Profile, ExternalApi } from "./views";
// import Auth0ProviderWithHistory from "./auth/auth0-history";

// imports stuff from components
import Loading from "./components/loading";

function App() {
  // const [isLoggedIn, setLoggedIn] = useState(false);
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* auth0 stuff */}

        <Route path="/" element={<HomePage />} />
        {/* <Route path="/register" element={<Form />} />
          <Route path="/login" element={<FormLogin />} /> */}
        <Route path="/donationform" element={<CreateDonationPage />} />
        <Route path="/donation/:id" element={<DonationEditPage />} />
        <Route path="/details" element={<DonationDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reset" element={<Reset />} />
        <Route path="*" element={<ErrorPage />} />

        {/* <ProtectedRoute path="/profile" element={Profile} />
        <ProtectedRoute path="/external-api" element={ExternalApi} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
