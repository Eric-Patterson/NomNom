import React from "react";
import useForm from "./useForm";
import validate from "./ValidateInfo";
import "./Form.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, values, loginUser, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form className="form" onSubmit={loginUser}>
    <h1>
          Please use your credentials to Log In
        </h1>
        {/* This is a field for email */}
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
        <button className="form-input-btn" type="submit">
          Log In
        </button>
      </form>
  );
};

export default FormLogin;
