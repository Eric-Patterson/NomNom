import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
    const [values, setValues] = useState({ //values to set initial state value and setValues to update this state
        username: "",
        email: "",
        password: "",
        password2: ""
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)


    const handleChange = e => {
        const { name, value } = e.target //to target events happening in any name fields from FormSignup.js file
        setValues({
            ...values, //to add values to the array
            [name]: value
        })
    }
    // to prevent page from refreshing:
    const handleSubmit = e => {
        e.preventDefault()

        setErrors(validate(values))
        setIsSubmitting(true)
    }

    // to prevent submitting empty form:
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
        }
    },
    [errors] //only triggers when it updates errors
    )

    return { handleChange, values, handleSubmit, errors }
}

export default useForm //we exporting handleChange function to FormSignup.js