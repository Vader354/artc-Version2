var users = [];
var userAdress = [];


// Eventlistener for entire form, connected to form button
var btn = document.getElementById("onSubmitButton");

// Enables button and runs validation functions if enter is pressed
// document.getElementById("onSubmitButton").addEventListener("keyup", function(event) {
//     if(event.keyCode == 13)
//         btn.validateReg();
//         return true;
// });


// Validation that will run onclick and if valid, push user into users array
function validateReg() {
    console.log('onclick fired')
        // If statements run through the validation functions for the registration form. If validation fails, boolean statement within the function will not store entered value. 
        // Should change from alert
        if(checkEmail()) {
            console.log("checkEmail works")
            alert("Email not valid");
            return false;
        }
        if(!checkPc()){
            console.log('checkPC works')
        alert("Postal code is not in Copenhagen");
        }
        // if(!checkCity){
        // alert("Password not valid");
        // }
        if(!checkPwd()){
            console.log("checkPwd works")
        alert("Password not valid");
        return false;
        }
        if(!confirmPwd()){
            console.log("confirmPwd works")
            alert("Passwords need to match");
            return false;
        }
        if(!checkPhone()){
            console.log("checkPhone works")
            alert("You must enter a Danish phone number");
            return false;
        }
        else{

            var form = document.getElementById('regForm');

            // How do we handle the gender, since they all have different id's, do we look for all of them?
            users.push(new User(form.firstname.value, form.lastname.value, form.male.value, form.email.value, form.dateOfBirth.value, form.password.value ))
            console.log("User pushed to users array")
            localStorage.setItem("Users", JSON.stringify(users));
        }
    }
    


    // Confirm birthday  
    
    function checkPc() {
        var postalCode = document.getElementById("postal").value;
        // Super basic. Checks if the entered postal number is within the range of postal codes in copenhagen.
            if(postalCode >= 1000 && postalCode <= 2990){
                return true;
            }else {
                return false;
            }
        }


// It would be nice to create a function that would check for the input city
// var checkCity = function() {
//     var city = document.getElementById("city").value;
// }

function checkPwd() {
    //first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
    var pwd = /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{6,}$/;
    
    // Sets password variable equal to user input
    var password = document.getElementById("password").value;

        // Checks if password matches criteria of variable pwd
        if(password.match(pwd)) {
           return true; 
        }
        else {
            return false;
        }
    }

// *** Password match variable ****
// Is it possible to use password.value.match(""), would keep code DRY
function confirmPwd() {
    if(document.getElementById("password").value == document.getElementById("confirmPass").value) {
        return true;
    } else {
        return false;
        }
     }


// *** Validate email ***
// Function to check user against array
function checkEmail() {
    console.log("Runs function")
    var len = users.length;
    console.log("Sets len = users.length")
    var email = document.getElementById("email").value;
    console.log("Gets user input")
    for(var i = 0; i < len; i++){
        console.log("Checks user input against array")
        if (users[i] !== email) {
            console.log("Checked for match")
            return true;
        } else {
            return false;           
            }
        }
    }
// *** Validate phone number ***

function checkPhone() {
    //first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
   //  created this regEx and have not yet tested it
    var phone1 = /^((^\d{8})|(^\d{2}[ ]\d{2}[ ]\d{2}[ ]\d{2})|(^\d{4}[ ]\d{4}))$/;
   
    // Sets phone number variable equal to user input
    var phone = document.getElementById("phone").value;
   
        // Checks if phone1 (pattern) number matches criteria of variable phone
        if(phone.match(phone1)) {
            // returns message if true. Have to change from alert 
           return true; 
        }
        else {
            // returns message if invalid. Have to change from alert
            return false;
        }
   }



