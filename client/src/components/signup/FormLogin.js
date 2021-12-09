import React from "react";
import useForm from "./useForm";
import validate from "./ValidateInfo";
import "./Form.css";

const FormLogin = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
      <form className="form" onSubmit={handleSubmit}>
        <h1>
          Please use your credentials to Log In
        </h1>
        {/* This is a field for email */}
        <div className="form-inputs">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            //for selecting email field on click in the browser
            id="email"
            type="email"
            name="email"
            className="form-input"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
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
          Sign up
        </button>
      </form>
  );
};

export default FormLogin;
