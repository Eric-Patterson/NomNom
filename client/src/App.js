import React from "react";
import { Routes, Route, Link} from "react-router-dom";
import DonationDetailPage from "./components/pages/DonationDetailPage";
import Home from "./components/pages/Home";
import DonationForm from "./components/forms/DonationForm";
import PickupForm from "./components/forms/PickupForm";
import DonationList from "./components/DonationList";
import DonationDetail from "./components/DonationDetail";
import Navbar from "./components/Navbar/Navbar";
import Form from "./components/SignUp/Form";
import "./App.css";

function App() {
  return (
    <div className="App">

    <nav>
      <Link to="/">Home</Link>
      <Link to="/signup">Sign Up</Link>
    </nav>

      <Routes>
        <Route path="/" element= {<DonationList />}/>
        <Route path="/signup" element={<Form />}/>
        <Route path="/donate" element={<DonationForm />}/>
        <Route path="/pickup" element={<PickupForm />}/>
        {/* <Route path="*" element={<main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>}/> */}
      </Routes>
 

      {/* <Form /> */}
      {/* <PickupForm /> */}
      {/* <DonationList /> */}
    </div>
  );
}

export default App;
