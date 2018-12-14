// Set variable for ease of use and makes it easier to read. Will not have to use getElementById as much
var form = document.getElementById('regForm');

// Validation that will run on click and if valid, push user into users array
function validateReg() {
    // If statements run through the validation functions for the registration form. 
    // If validation fails, boolean statement within the function will not store entered value and system will stop running. 
    if (!checkGender()) {
        alert("You need to pick a gender.");
        return false;
        // Changed to return false... Working the same. 
    }
    if (!checkEmail()) {
        alert("Email not valid or is used by another user.");
        return false;
    }
    if (!checkDateOfBirth()) {
        alert("You need to enter a valid Danish CPR number, e.g. DDMMYY-NNNN.");
        return false;
    }
    if (!checkPc()) {
        alert("Postal code is not in Copenhagen.");
        return false;
    }
    if (!checkPwd()) {
        alert("Password needs to contain a special character, one capital letter and be at least 6 characters long.");
        return false;
    }
    if (!confirmPwd()) {
        alert("Passwords need to match.");
        return false;
    }
    if (!checkPhone()) {
        alert("You must enter a Danish phone number.");
        return false;
    } else {
        // Push user input into new object and store it in localStorage
        users.push(new User(form.firstname.value, form.lastname.value, form.gender.value, form.email.value, form.cpr.value, form.password.value))
        localStorage.setItem("Users", JSON.stringify(users));

        // Push user input into new object and store it in localStorage    
        userAddresses.push(new Address(form.email.value, form.email.value, form.phone.value, form.street.value, form.postal.value, form.city.value))
        localStorage.setItem("UserAddresses", JSON.stringify(userAddresses));
        // alerts user if all validations have worked and redirects the user to the login page
        alert("You have successfully created an account and will be redirected to our login page.");
        document.location.href = "../html/login.html";
    }
};

    form.addEventListener("keyup", function(event) {
        event.preventDefault();
            if(event.keyCode === 13){
                document.getElementById("onSubmitButton").click();
            }
    })

// Checks if one of the gender radio buttons is selected 
function checkGender() { 
    // Set variable for user input/check 
    var gender = document.getElementsByName("gender");
    // Set variable equal to false that will be changed to true when radio button is clicked
    var isChecked = false;
    // loops through radio button, to check if radiobuttons are clicked
    for (var i = 0; i < gender.length; i++) {
        // if either genders are checked, var isChecked = true and return true and validation will go through 
        if (gender[i].checked) {
            isChecked = true;
            return true;
            }
        }
        // if none of the radio buttons are checked, code will stop
        if (!isChecked) { 
            return false;
        }       
}

// Checks if email is already used by checking if it's already in local storage
function checkEmail(email) {
    // loop through users, which are unpacked from localStorage, in order to check for match
    for (var i = 0; i < users.length; i++) {
        // if there is a match within localStorage, the program will stop running
        if (users[i].email == email) {
        return false;               
        }
    }
    return true;
}    

function checkDateOfBirth() {
    // The regex accepts 10 numbers, ddmmyy-nnnn. Does not check whether the last four digits are correct or not. 
    var cpr1 = /^[0-3][0-9][0-1]\d{3}-\d{4}?/;
    
    // Sets var cpr equal to user input
    var cpr = form.cpr.value;
    
    // Checks if cpr matches criteria of cpr1 (pattern)
    if (cpr.match(cpr1)) {
        return true; 
    } else {
        return false;
    }
}

// Checks if the entered postal number is within the range of postal codes in CPH
function checkPc() {
    var postalCode = form.postal.value;
    if (postalCode >= 1000 && postalCode <= 2990) {
        return true;
    } else {
        return false;
    }
}

// Checks if password meets certain criteria
function checkPwd() {
    // first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
    var pwd = /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{6,}$/;
        
    // Sets password variable equal to user input
    var password = form.password.value;

    // Checks if password matches criteria of variable pwd
    if (password.match(pwd)) {
        return true; 
    } else {
        return false;
    }
};

// Checks if confirmation password is the same as the entered password
function confirmPwd() {
    if (form.password.value == form.confirmPass.value) {
        return true;
    } else {
        return false;
    }
}
    
// Checks if phone number matches certain criteria
function checkPhone() {
    // The regex accepts 8 numbers, either written together, two and two or four and four or 8 numbers following each other
    var phone1 = /^^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
        
    // Sets phone number variable equal to user input
    var phone = form.phone.value;
        
    // Checks if phone1 (pattern) number matches criteria of variable phone
    if (phone.match(phone1)) {
        return true; 
    } else {
        return false;
    }
}