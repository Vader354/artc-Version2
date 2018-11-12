var user = [];
var userAdress = [];

// Eventlistener for entire form, connected to form button
var btn = document.getElementById("onSubmitButton");
// btn.addEventListener("keyup", validateReg()); THINK I WILL REMOVE THIS IF BELOW WORKS

// Enables button and runs validation functions if enter is pressed
document.getElementById("onSubmitButton").addEventListener("keyup", function(event) {
    if(event.keyCode == 13)
        btn.validateReg();
        return true;
});

// Checking for user in localStorage
// var existingUser = JSON.parse(localStorage.getItem("user"));


// var message = document.getElementById("message");

function validateReg() {
        // If statements run through the validation functions for the registration form. If validation fails, boolean statement within the function will not store entered value. 
        if(!checkPc){
        alert("Postal code is not in Copenhagen");
        }
        if(!checkCity){
        alert("Password not valid");
        }
        if(!checkPwd){
        alert("Password not valid");
        }
        if(!confirmPwd){
            alert("Validated pass does not work");
        }
        if(!checkEmail) {
            alert("Email not valid");
        }
        if(!checkPhone){
            alert("It must be a Danish phone number");
        }
        else{
            // Pushing registration info into users array
            // password needs to be hashed
            // Have not tested this
            user.push(new user).document.getElementById("firstname, lastname, gender, email, dateOfBirth, password");
            // Pushing user adress into userAdress array
            user.push(new useradress).document.getElementById("street, postal, city");
        }
    }

    // Enable button to run functions when "enter" is pressed for each element
        // document.getElementById("firstname").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("lastname").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("gender").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("email").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("dateOfBirth").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("street").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("postal").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("city").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("password").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("confirmPass").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("phone").addEventListener("keyup", function(event) {
        //     if(event.keyCode == 13)
        //         btn.click();
        // });
        // document.getElementById("phone").addEventListener("keyup", function(validateReg) {
        // });

    // Confirm birthday  
    

var checkPc = function() {
    var postalCode = document.getElementById("postal").value;
    // Super basic. Checks if the entered postal number is within the range of postal codes in copenhagen.
        if(postalCode >= 1000 && postalCode <= 2990){
            alert("You live in Copenhagen");
            return true;
        }else {
        alert("Your postal code indicates that you do not live in Copenhagen");
            return false;
        }
    }

// It would be nice to create a function that would check for the input city
var checkCity = function() {
    var city = document.getElementById("city").value;
}

var checkPwd = function() {
    //first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
    var pwd = /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{6,}$/;
    
    // Sets password variable equal to user input
    var password = document.getElementById("password").value;

        // Checks if password matches criteria of variable pwd
        if(password.match(pwd)) {
            // returns message if true. Have to change from alert 
            message.innerHTML = "";
           return true; 
        }
        else {
            // returns message if invalid. Have to change from alert
            message.innerHTML = "Please enure that password contains one special character, one capital letter and is at least six characters long";
            return false;
        }
    }

// *** Password match variable ****
// Is it possible to use password.value.match(""), would keep code DRY
var confirmPwd = function() {
    if(document.getElementById("password").value == document.getElementById("confirmPass").value) {
        message.innerHTML = "";
        return true;
    } else {
        message.innerHTML = "Please ensure that passwords match.";
        return false;
        }
     }


// *** Validate email ***
// Function to check user against array
var checkEmail = function() {
    var len = userEmails.length;
    var email = document.getElementById("email").value;
    for(var i = 0; i < len; i++){
        if (userEmails[i] == email) {
            message.innerHTML = "The email is currently used by another user";
            return false;
        } else {
            message.innerHTML = "";
            return true;           
            }
        }
    }
// *** Validate phone number ***

var checkPhone = function() {
    //first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
   //  created this regEx and have not yet tested it
    var phone1 = /^((^\d{8})|(^\d{2}[ ]\d{2}[ ]\d{2}[ ]\d{2})|(^\d{4}[ ]\d{4}))$/;

   
    // Sets phone number variable equal to user input
    var phone = document.getElementById("phone").value;
   
        // Checks if password matches criteria of variable pwd
        if(phone.match(phone1)) {
            // returns message if true. Have to change from alert 
            alert("Success");
            message.innerHTML = "";
           return true; 
        }
        else {
            // returns message if invalid. Have to change from alert
            alert("fail");
            message.innerHTML = "Please ensure that phone number consists of at least 8 digits.";
            return false;
        }
   }



