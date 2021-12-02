import React from "react";
import { useState } from "react";
import "./DonationForm.css";
// reuse later one
// import DateTimePicker from "react-datetime-picker";



function DonationForm(onSave) {
  //set begining state for all variables
  const [foodType, setFoodType] = useState("vegetarian");
  const [numberOfServings, setNumberOfServings] = useState("0");
  const [radio, setRadio] = useState("");
  // const [deliver, setDeliver] = useState(false);
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [agree, setAgree] = useState(false);
  const [disagree, setDisagree] = useState(false);
  const [value, onChange] = useState(new Date());
  const [showResults, setShowResults] = useState(false);
  const [termsAgree, setTermsAgree] = useState(false);
  const [ingredients, setIngredients] = useState("");

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    // Don't miss the exclamation mark
  };
  // When the button is clicked
  function submitHandler() {
    donationSubmitFunction()
  }
  function onInputUpdate(event, setter) {
    let newValue = event.target.value;
    setter(newValue);
  }

  //for database//
  async function donationSubmitFunction() {
    const donationInfo = {
      foodType,
      numberOfServings,
      cookingInstructions,
      disclaimer,
      ingredients,
      agree,
    };

    console.log('donation submission data', donationInfo)
    await fetch('/api/donationForm', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(donationInfo)
    })
  }

  return (
    <div className="center">
      <form method="post" action="/login">
        <h1>Donation Form</h1>
        <br />

          <br />
          <label >Food Type</label>
          <select
            value={foodType}
            onChange={(e) => {
              setFoodType(e.target.value);
            }}
          >
            <option value="vegetarian"> Vegetarian </option>
            <option value="glutenFree"> Gluten-free </option>
            <option value="dairyFree"> Dairy-free </option>
            <option value="nonPerishable"> Non-Perishable </option>
            <option value="meals"> Meals </option>
          </select> <br/>
          <label >Number Of Servings</label>
          <input
            type="number"
            min="0"
            max="4"
            value={numberOfServings}
            onChange={(event) => onInputUpdate(event, setNumberOfServings)}
          />
          <br />
          <p>Delivery Option</p>
          <label >Pick Up</label>
          <input
            type="radio"
            value="pickup"
            checked={radio === "pickup"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          <label >Deliver</label>
          <input
            type="radio"
            value="deliver"
            checked={radio === "deliver"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          <label >Cooking Instructions</label>
          <input
            type="text"
            value={cookingInstructions}
            onChange={(event) => onInputUpdate(event, setCookingInstructions)}
          />
          <label >Disclaimer</label>
          <input
            type="text"
            value={disclaimer}
            onChange={(event) => onInputUpdate(event, setDisclaimer)}
          />
          <label >Ingredients</label>
          <input
            type="text"
            value={ingredients}
            onChange={(event) => onInputUpdate(event, setIngredients)}
          /><br/>

          <label >Pick Time and Date</label><br/><br/>

          <label htmlFor="agree">
            {" "}
            I agree to <b>terms and conditions</b>
          </label><br/>
          <label >Agree</label><br/>
          <input type="checkbox" id="agree" onChange={checkboxHandler} />

          {/* reuse later on */}
          {/* <DateTimePicker onChange={onChange} value={value} /> */}


        <button disabled={!agree} className="btn" onClick={submitHandler}>
          Submit
        </button>

      {/* half working button */}
        <button 
        className="btn"
        onClick={() => {
          const confirmBox = window.confirm(
            "You are about to submit your donation, would you like to proceed?"
          )
          if (confirmBox === true) {
          }
        }}> Confirm Donation
        </button>

      </form>
    </div>
  );
}

export default DonationForm;
