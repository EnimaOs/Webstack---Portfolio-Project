function validation(values) {
    let errors = {};

    const password_pattern = /^(?=.\d)(?=.[a-z])(?=.[A-Z])(?=.[!@#$%^&*()_+~\-={}[\]:;<>?,.\/]).{8,}$/;

    if (!values.password) {
        errors.password = "Password should not be empty";
    } else if (!password_pattern.test(values.password)) {
        errors.password = "Password must contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character (!@#$%^&*()_+~\-={}[\]:;<>?,.\/) and be at least 8 characters long";
    }

    if (!values.DirectionProvinciale || values.DirectionProvinciale.trim() === "") {
        errors.DirectionProvinciale = "Direction provinciale should not be empty";
    }

    return errors;
}

export default validation;