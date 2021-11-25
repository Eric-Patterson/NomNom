import React from "react";
import { useState } from "react";


function DonationForm() {
    //set begining state for all variables
  const [foodType, setFoodType] = useState("");
  const [numberOfServings, setNumberOfServings] = useState("");
  const [pickUp, setPickUp] = useState(false);
  const [deliver, setDeliver] = useState(false);
  const [cookingInstructions, setCookingInstructions] = useState("");
  const [disclaimer, setDisclaimer] = useState("");
  const [agree, setAgree] = useState(false);
  const [disagree, setDisagree] = useState(false);
 
  
   function onInputUpdate(event, setter) {
    let newValue = event.target.value
    setter(newValue)
}

  async function donationSubmitFunction() {
    const donationInfo = {
        foodType,
        numberOfServings,
        pickUp, deliver,
        cookingInstructions,
        disclaimer,
        agree, disagree
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


  return (
    <div>
        <h2>Donation Form</h2>
        <div className="detail-fields">
            <label className="field-title">Food Type</label>
            <input value={foodType} onChange={(event) => onInputUpdate(event, setFoodType) } />
            <label className="field-title">Number Of Servings</label>
            <input value={numberOfServings} onChange={(event) => onInputUpdate(event, setNumberOfServings) } />
            <label className="field-title">Pick Up</label>
            <input value={pickUp} onChange={(event) => onInputUpdate(event, setPickUp) } />
            <label className="field-title">Deliver</label>
            <input value={deliver} onChange={(event) => onInputUpdate(event, setDeliver) } />
            <label className="field-title">Cooking Instructions</label>
            <input value={cookingInstructions} onChange={(event) => onInputUpdate(event, setCookingInstructions) }/>
            <label className="field-title">Disclaimer</label>
            <input value={disclaimer} onChange={(event) => onInputUpdate(event, setDisclaimer) }/>
            <label className="field-title">Agree</label>
            <input value={agree} onChange={(event) => onInputUpdate(event, setAgree) }/>
            <label className="field-title">Disagree</label>
            <input value={disagree} onChange={(event) => onInputUpdate(event, setDisagree) }/>
        </div>
        <button onClick={donationSubmitFunction} >Submit</button>

    </div>
  );
}




export default DonationForm;