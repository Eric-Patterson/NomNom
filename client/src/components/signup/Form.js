
import React, { useState } from "react";
import FormSignup from "./FormSignup";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">

        {/* this is the logic for sign up button to redirect to FormSuccess.js */}
        {!isSubmitted ? <FormSignup submitForm={submitForm} /> : <FormSuccess />}
      </div>
    </>
  );
};

export default Form;

// this to be moved to FormSignup and then same instance to FormLogin
async function registerUser(event) {
  event.preventDefault()

  const response = await fetch('http://localhost:5000/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      password2
    }),
  })
  const data = await response.json()
  console.log(data)
}