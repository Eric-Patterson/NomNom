import React from "react";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "./DonationForm.css";

function DonationForm() {
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
  const btnHandler = () => {
    // alert("The buttion is clickable!");
  };

  function submitHandler() {
    btnHandler();
    donationSubmitFunction();
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
      disagree,
    };
    // console.log('donation submission data', donationInfo)
    // await fetch('/api/donationForm', {
    //     method: "POST",
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(donationInfo)
    // })
  }

  // const handleChange = () => {
  //   console.log ("the checkbox was toggled")
  // }

  return (
    <div className="center">
      <form method="post" action="/login">
        <h2>Donation Form</h2>
        <div className="detail-fields">
          {/* <label className="field-title">Food Type</label>
            <input value={foodType} onChange={(event) => onInputUpdate(event, setFoodType) } /> */}
          <label className="field-title">Food Type</label>
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
          </select>
          <label className="field-title">Number Of Servings</label>
          <input
            type="number"
            min="0"
            value={numberOfServings}
            onChange={(event) => onInputUpdate(event, setNumberOfServings)}
          />
          <label className="field-title">Pick Up</label>
          <input
            type="radio"
            value="pickup"
            checked={radio === "pickup"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          <label className="field-title">Deliver</label>
          <input
            type="radio"
            value="deliver"
            checked={radio === "deliver"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          {/* <label className="field-title">Deliver</label>
            <input type="radio" value={deliver} checked= {radio === "deliver"} onChange={(event) => onInputUpdate(event, setDeliver) } /> */}
          <label className="field-title">Cooking Instructions</label>
          <input
            type="text"
            value={cookingInstructions}
            onChange={(event) => onInputUpdate(event, setCookingInstructions)}
          />
          <label className="field-title">Disclaimer</label>
          <input
            type="text"
            value={disclaimer}
            onChange={(event) => onInputUpdate(event, setDisclaimer)}
          />
          <label className="field-title">Ingredients</label>
          <input
            type="text"
            value={disclaimer}
            onChange={(event) => onInputUpdate(event, setIngredients)}
          />
          <label className="field-title">Agree</label>

          <input type="checkbox" id="agree" onChange={checkboxHandler} />
          <label htmlFor="agree">
            {" "}
            I agree to <b>terms and conditions</b>
          </label>

          <label className="field-title">Pick Time and Date</label>
          <DateTimePicker onChange={onChange} value={value} />
        </div>
        {/* <button onClick={donationSubmitFunction}>Submit</button> */}
        <button disabled={!agree} className="btn" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default DonationForm;
