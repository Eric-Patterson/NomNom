import React from "react";
import { useState, useEffect } from "react";
import "./DonationForm.css";

function PickupForm({ existingValues, onSave }) {
  const [enteredDate, setEnteredDate] = useState("");
  const [foodType, setFoodType] = useState("vegetarian");
  const [numberOfServings, setNumberOfServings] = useState("0");
  const [radio, setRadio] = useState("");
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [agree, setAgree] = useState(false);
  const [ingredients, setIngredients] = useState("");

  useEffect(() => {
    if (existingValues) {
      // onChange(existingValues.value);
      setEnteredDate(existingValues.enteredDate);
      setFoodType(existingValues.foodType);
      setNumberOfServings(existingValues.numberOfServings);
      setRadio(existingValues.radio);
      setCookingInstructions(existingValues.cookingInstructions);
      setDisclaimer(existingValues.disclaimer);
      setAgree(existingValues.agree);
      setIngredients(existingValues.ingredients);
    }
  }, [existingValues]);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  async function postData() {
    let donationInfo = {
      date: new Date(enteredDate),
      // value,
      foodType,
      numberOfServings,
      cookingInstructions,
      disclaimer,
      ingredients,
      agree,
      radio,
    };
    console.log("Saving donation", donationInfo);
    await onSave(donationInfo);
  }

  function onInputUpdate(event, setter) {
    let newValue = event.target.value;
    setter(newValue);
  }

  return (
    <div className="center">
      <h1>Donation Form</h1>
      <label>Food Type</label>
      <select
        value={foodType}
        onChange={(e) => {
          setFoodType(e.target.value);
        }}
      >
        <option value="Vegetarian"> Vegetarian </option>
        <option value="Gluten-Free"> Gluten-free </option>
        <option value="Dairy-Free"> Dairy-free </option>
        <option value="Non-Perishable"> Non-Perishable </option>
      </select>{" "}
      <label>Number Of Servings</label>
      <input
        type="number"
        min="0"
        max="4"
        value={numberOfServings}
        onChange={(event) => onInputUpdate(event, setNumberOfServings)}
      />
      <div className="delivery-option-container">
        <p>Delivery Option</p>
        <label>Pick Up</label>
        <input
          type="radio"
          value="pickup"
          checked={radio === "pickup"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
        <label>Deliver</label>
        <input
          type="radio"
          value="deliver"
          checked={radio === "deliver"}
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />
      </div>
      <label>Cooking Instructions</label>
      <input
        type="text"
        value={cookingInstructions}
        onChange={(event) => onInputUpdate(event, setCookingInstructions)}
      />
      <label>Disclaimer</label>
      <input
        type="text"
        value={disclaimer}
        onChange={(event) => onInputUpdate(event, setDisclaimer)}
      />
      <label>Ingredients</label>
      <input
        type="text"
        value={ingredients}
        onChange={(event) => onInputUpdate(event, setIngredients)}
      />
      <label>Date</label>
      <input
        type="date"
        min="2019-01-01"
        max="2022-12-31"
        value={enteredDate}
        onChange={dateChangeHandler}
        required
      />
      <label htmlFor="agree">
        {" "}
        I agree to <b>terms and conditions</b>
      </label>
      <label>Agree</label>
      <input type="checkbox" id="agree" onChange={checkboxHandler} />
      <button disabled={!agree} className="btn" onClick={postData}>
        Submit
      </button>
    </div>
  );
}

export default PickupForm;
