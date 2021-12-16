import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const useForm = (callback, validate) => {
  // let navigate = useNavigate();
  // navigate("/details");

  //values to set initial state value and setValues to update this state
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  // const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    //to target events happening in any name fields from FormSignup.js file
    const { name, value } = e.target;
    setValues({
      //to add values to the array
      ...values,
      [name]: value,
    });
  };
  // for register
  async function registerUser(event) {
    event.preventDefault();
    console.log("Hi there from register!");

    setErrors(validate(values));
    const response = await fetch("http://localhost:5000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        values,
      }),
    });
    const data = await response.json();
    console.log(data);
  }

  // for login
  async function loginUser(event) {
    event.preventDefault();
    console.log("Hi there from login!");
    setErrors(validate(values));
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: values.username,
        password: values.password,
      }),
    });

    const data = await response.text();
    console.log(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let validateErrors = validate(values);
    if (Object.keys(validateErrors).length > 0) {
      return setErrors(validateErrors);
    }

    registerUser(e).then(callback);

    console.log("handleSubmit something");
    // setIsSubmitting(true);
  };

  return {
    handleChange,
    values,
    errors,
    handleSubmit,
    registerUser,
    loginUser,
  };
};
//we exporting handleChange function to FormSignup.js
export default useForm;
