import React from "react";
import Navbar from "./components/Navbar/Navbar";
import DonationForm from "./components/forms/DonationForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <DonationForm />
    </div>
  );
}

export default App;
