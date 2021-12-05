import React from 'react'
import useForm from './useForm'
import validate from './ValidateInfo'
import './Form.css'

const FormSignup = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate)

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Let's get started! Create account by filling out the information below.</h1>
                {/* This is a field for username */}
                <div className="form-inputs">
                    <label
                        htmlFor="username"
                        className="form-label">
                        Username
                    </label>
                    <input
                        id="username" //for selecting username field on click in the browser
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
                    <label
                        htmlFor="email"
                        className="form-label">
                        Email
                    </label>
                    <input
                        id="email" //for selecting email field on click in the browser
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
                    <label
                        htmlFor="password"
                        className="form-label">
                        Password
                    </label>
                    <input
                        id="password" //for selecting password field on click in the browser
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
                    <label
                        htmlFor="password2"
                        className="form-label">
                        Confirm Password
                    </label>
                    <input
                        id="password2" //for selecting Confirm Password field on click in the browser
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
                <button
                    className="form-input-btn"
                    type="submit">
                    Sign up
                </button>
                <span className="form-input-login">
                    Already have an account? Login <a href="#">here</a>
                </span>
            </form>
        </div>
    )
}

export default FormSignup
