import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DonationForm from "./components/forms/DonationForm";
import PickupForm from "./components/forms/PickupForm";
import DonationList from "./components/DonationList";
import DonationDetail from "./components/DonationDetail";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DonationForm />
      <PickupForm />
      <DonationList />
    </div>
  );
}

export default App;
