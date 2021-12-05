import React, { useState } from 'react'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'
import './Form.css'

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true)
    }
    return (
        <>
            <div className="form-container"></div>

            <span className="close-btn">x</span>

            <div className="form-content-left"></div>

            {!isSubmitted ? <FormSignup submitForm= //this is the logic for sign up button to redirect to FormSuccess.js
                {submitForm} /> : <FormSuccess />}
        </>
    )
}

export default Form