export default function validateInfo(values) {
    let errors = {}

    if (!values.username) { //If username is not in place, there will be this error.
        errors.username = "Username required"
    }
    if (!values.email) { //Same logic as username
        errors.email = "Email required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) { //This abra-kadabra shows the below message if some text was entered without proper email format
        errors.email = "Please enter a valid email"

    }
    if (!values.password) {
        errors.password = "Password required"
    } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters"
    }
    if (!values.password2) {
        errors.password2 = "Password required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Passwords do not match"
    }
    return errors
}