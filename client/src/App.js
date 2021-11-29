import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DonationForm from "./components/forms/DonationForm";
import PickupForm from "./components/forms/PickupForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DonationForm />
      <PickupForm />
    </div>
  );
}

export default App;
