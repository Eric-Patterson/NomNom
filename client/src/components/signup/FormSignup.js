import React from "react";
import useForm from "./useForm";
import validate from "./ValidateInfo";
import "./FormSignup.css";

const FormSignup = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form className="singup-form" onSubmit={handleSubmit}>
      <h1>
        Let's get started! Create account by filling out the information below.
      </h1>
      {/* This is a field for username */}
      <div className="form-inputs">
        <label htmlFor="username">Username</label>
        <input
          //for selecting username field on click in the browser
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
      {/* This is a field for email */}
      <div className="form-inputs">
        <label htmlFor="email">Email</label>
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
        <label htmlFor="password">Password</label>
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
      {/* This is a field for password confirmation */}
      <div className="form-inputs">
        <label htmlFor="password2">Confirm Password</label>
        <input
          //for selecting Confirm Password field on click in the browser
          id="password2"
          type="password"
          name="password2"
          className="form-input"
          placeholder="Enter your password2"
          value={values.password2}
          onChange={handleChange}
        />
        {errors.password2 && <p>{errors.password2}</p>}
      </div>
      {/* button to sign up */}
      <button className="form-input-btn" type="submit">
        Sign up
      </button>
      <span className="form-input-login">
        Already have an account? Login <a href="#">here</a>
      </span>
    </form>
  );
};

export default FormSignup;
