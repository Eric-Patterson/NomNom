import { useState, useEffect } from "react";

const useForm = (callback, validate) => {
  //values to set initial state value and setValues to update this state
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    //to target events happening in any name fields from FormSignup.js file
    const { name, value } = e.target;
    setValues({
      //to add values to the array
      ...values,
      [name]: value,
    });
  };
  // to prevent page from refreshing:
  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  // to prevent submitting empty form:
  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    //only triggers when it updates errors
    [errors]
  );

  return { handleChange, values, handleSubmit, errors };
};
//we exporting handleChange function to FormSignup.js
export default useForm;
