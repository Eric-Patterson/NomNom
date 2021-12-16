import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./ValidateInfo";
import "./Form.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, values, loginUser, errors } = useForm(
    submitForm,
    validate
  );

  // const [status, setStatus] = useState(false);

  return (
    <form className="form" onSubmit={loginUser}>
      <h1>Log In</h1>
      
      {/* This is a field for email */}
      <div className="forHome">
        <div className="form-inputs">
        <label htmlFor="usernmae" className="form-label">
          Username
        </label>
        <input
          id="username"
          type="text"
          name="username"
          className="form-input"
          placeholder="Enter your username"
          value={values.username}
          onChange={handleChange}
        />
        {errors.username && <p>{errors.username}</p>}
      </div>
      {/* This is a field for password */}
      <div className="form-inputs">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          //for selecting password field on click in the browser
          id="password"
          type="password"
          name="password"
          className="form-input"
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p>{errors.password}</p>}
      </div>
      {/* button to sign up */}
      <button
        className="form-input-btn"
        type="submit"
        // onClick={() => setStatus(!status)}
      >
        {/* {console.log(status)} */}
        Log In
      </button>
      </div>
    </form>
  );
};

export default FormLogin;
