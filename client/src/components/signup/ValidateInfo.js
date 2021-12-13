export default function validateInfo(values) {
  console.log("validating form");
  console.log("values", values);
  let errors = {};
  //If username is not in place, there will be this error.
  if (!values.username) {
    errors.username = "Username required";
  }
  //Same logic as username
  if (!values.email) {
    errors.email = "Email required";
    //This abra-kadabra shows the below message if some text was entered without proper email format
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Please enter a valid email";
  }
  if (!values.password) {
    errors.password = "Password required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be at least 8 characters";
  }
  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }
  return errors;
}
