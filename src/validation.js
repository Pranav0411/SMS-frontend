function Validation(values) {

    let error = {}

    if (values.cpass !== values.pass) {
        error.cpass = "Password not matching"
    }

    return error;
}

export default Validation;