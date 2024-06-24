// 4. The Password Validator:
//    You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function passwordValidator(password) {
    if (password.length < 8) {
        return "Password is too short";
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);

    if (!hasUpperCase) {
        return "Password must have uppercase letter";
    }
    if (!hasLowerCase) {
        return "Password must have lowercase letter";
    }

    const hasDigit = /\d/.test(password);

    if (!hasDigit) {
        return "Password must have a digit";
    }
    return "Password Validated";
}
let password1 = "Password123";
let password2 = "password";
let password3 = "PASSWORD123";
let password4 = "Pass123";

console.log(passwordValidator(password1)); 
console.log(passwordValidator(password2));  
console.log(passwordValidator(password3));  
console.log(passwordValidator(password4)); 