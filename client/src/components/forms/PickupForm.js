import React from "react";
import { useState } from "react";
import DateTimePicker from 'react-datetime-picker';


function PickupForm() {
    //set begining state for all variables
  const [foodType, setFoodType] = useState("vegetarian");
  const [numberOfServings, setNumberOfServings] = useState("0");
  //const [radio, setRadio] = useState("");
  // const [deliver, setDeliver] = useState(false);
//  const [cookingInstructions, setCookingInstructions] = useState("");
//  const [disclaimer, setDisclaimer] = useState("");
//  const [agree, setAgree] = useState(false);
//  const [disagree, setDisagree] = useState(false);
 const [value, onChange] = useState(new Date());
//  const [showResults, setShowResults] = useState(false);
  //const onClick = () => setShowResults(true)
  
   function onInputUpdate(event, setter) {
    let newValue = event.target.value
    setter(newValue)
}


//for database//
  async function pickupSubmitFunction() {
    const donationInfo = {
        foodType,
        numberOfServings,
        //cookingInstructions,
       // disclaimer,
        //agree, disagree
      }
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

const Results = () => {
  <div>
    bla bla blaajjjjhgfdfghjkjhgfdfghjhgfdfghjhgfghjjhgfdfghjhgfdrtyuytrertyuiuydsdfgvcxcvbnbvcxcvbnbvsdfghgfdertyuytrtyhvcdrtyhbvcdfghjnbv
  </div>
}

  return (
    <form method="post" action="/login">
        <h2>Pickup Form</h2>
        <div className="detail-fields">
            {/* <label className="field-title">Food Type</label>
            <input value={foodType} onChange={(event) => onInputUpdate(event, setFoodType) } /> */}
            <label className="field-title">Food Type</label>
            <select value={foodType} onChange = {(e)=> {setFoodType(e.target.value)}}>
              <option value= "vegetarian"> Vegetarian </option>
              <option value= "glutenFree"> Gluten-free </option>
              <option value= "dairyFree"> Dairy-free </option>
              <option value= "nonPerishable"> Non-Perishable </option>
              <option value= "meals"> Meals </option>
            </select>
            <label className="field-title">Number Of Servings</label>
            <input type="number" min="0" value={numberOfServings} onChange={(event) => onInputUpdate(event, setNumberOfServings) } />
            {/*<label className="field-title">Pick Up</label>
            {/*<input type="radio" value="pickup" checked= {radio === "pickup"} onChange = {(e) => {setRadio(e.target.value)}} />
            <label className="field-title">Deliver</label>
            <input type="radio" value="deliver" checked= {radio === "deliver"} onChange = {(e) => {setRadio(e.target.value)}} />
            {/* <label className="field-title">Deliver</label>
            <input type="radio" value={deliver} checked= {radio === "deliver"} onChange={(event) => onInputUpdate(event, setDeliver) } /> */}
            {/*<label className="field-title">Cooking Instructions</label>

            <label className="field-title">Disclaimer</label>
            
            <label className="field-title">Agree</label>
            
            {/* <input type= "checkbox" value={agree} required onChange={handleChange}/> */}
            {/* <div>{showResults ? <Results/> : null}</div> */}
            <label className="field-title">Pick Time and Date</label>
            <DateTimePicker
            onChange={onChange}
            value={value}
      />
        </div>
        <button onClick={pickupSubmitFunction} >Submit</button>

    </form>
  );
}




export default PickupForm