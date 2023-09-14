const validation =(userData) => {
    let errors = {}

    if(!/\S+@\S+\.\S+/.test(userData.email))
    errors.email= "incorrect email address"
    if(!userData.email)
    errors.email= "email is required"
    if(!/.*\d+.*/.test(userData.password))
    errors.password = "password require a number"
    if(userData.password.length < 6 || userData.password.length > 10)
    errors.password = "password must be 6 to 10 characters"
    if(!userData.password)
    errors.password = "password is required"

    return errors;
}

export default validation;