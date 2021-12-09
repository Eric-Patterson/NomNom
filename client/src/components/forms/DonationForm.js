import React from "react";
import { useState, useEffect } from "react";
import "./DonationForm.css";

function DonationForm({ existingValues, onSave }) {
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
    // if(setAgree === false){

    // }
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
    <div className="donation-container">
      <div className="donation-form">
        <h1>Donation Form</h1>
        <div className="donation-label-container food-container">
          <label for="foodtype">Food Type</label>
          <select
            id="foodtype"
            value={foodType}
            onChange={(e) => {
              setFoodType(e.target.value);
            }}
          >
            <option value="Vegetarian"> Vegetarian </option>
            <option value="Gluten-Free"> Gluten-free </option>
            <option value="Dairy-Free"> Dairy-free </option>
            <option value="Non-Perishable"> Non-Perishable </option>
          </select>
        </div>

        <div className="donation-label-container serving-container">
          <label for="servings">Number Of Servings</label>
          <input
            id="servings"
            type="number"
            min="0"
            max="4"
            value={numberOfServings}
            onChange={(event) => onInputUpdate(event, setNumberOfServings)}
          />
        </div>

        <div className="donation-label-container radio">
          <p>Delivery Options</p>
          <label for="pickup">Pick Up</label>
          <input
            id="pickup"
            type="radio"
            value="Pick Up"
            checked={radio === "Pick Up"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
          <label for="delivery">Delivery</label>
          <input
            id="delivery"
            type="radio"
            value="Deliver"
            checked={radio === "Deliver"}
            onChange={(e) => {
              setRadio(e.target.value);
            }}
          />
        </div>

        <div className="donation-label-container cooking-container">
          <label for="cooking">Cooking Instructions</label>
          <input
            id="cooking"
            type="text"
            value={cookingInstructions}
            onChange={(event) => onInputUpdate(event, setCookingInstructions)}
          />
        </div>

        <div className="donation-label-container disclaimer-container">
          <label for="disclaimer">Disclaimer</label>
          <input
            id="disclaimer"
            type="text"
            value={disclaimer}
            onChange={(event) => onInputUpdate(event, setDisclaimer)}
          />
        </div>

        <div className="donation-label-container ingredients-container">
          <label for="ingredients">Ingredients</label>
          <input
            id="ingredients"
            type="text"
            value={ingredients}
            onChange={(event) => onInputUpdate(event, setIngredients)}
          />
        </div>

        <div className="donation-label-container date-container">
          <label for="date">Date</label>
          <input
            id="date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
            required
          />
        </div>

        <div className="donation-label-container agree-container">
          <label htmlFor="agree">
            I agree to <b>terms and conditions</b>
          </label>

          <input type="checkbox" id="agree" onChange={checkboxHandler} />
        </div>
        <div className="button-container-donation">
          <button
            disabled={!agree}
            className={agree ? "buttontrue" : "buttonfalse"}
            onClick={postData}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;
