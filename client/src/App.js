import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import Home from "./components/pages/Home";
import DonationForm from "./components/forms/DonationForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/details">Details Page</Link>
          </li>
          <li>
            <Link to="/donate">Donate Page</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<DonationDetailPage />} />
        <Route path="/donate" element={<DonationForm />} />
      </Routes>

      {/* <Navbar /> */}
      {/* <DonationForm /> */}
      {/* <PickupForm /> */}
      {/* <DonationList /> */}
    </div>
  );
}

export default App;
