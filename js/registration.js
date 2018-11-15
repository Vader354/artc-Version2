var users = [];
var usersAdress = [];
// var btn = document.getElementById("onSubmitButton");
var form = document.getElementById('regForm');


// Validation that will run on click and if valid, push user into users array
function validateReg() {

    console.log(form.email.value)
        // If statements run through the validation functions for the registration form. If validation fails, boolean statement within the function will not store entered value. 
        if(!checkGender()) {
            alert("You need to pick a gender")
            return false;
        }
        
        if(!checkEmail(form.email.value)) {
            alert("Email not valid or is used by another user");
            return false;
        }
        console.log("checkEmail run")
       
        if(!checkDateOfBirth()) {
            alert("You need to enter a valid Danish CPR number, e.g. DDMMYY-NNNN");
            return false;
        }
        if(!checkPc()){
            alert("Postal code is not in Copenhagen");
        }

        if(!checkPwd()){
            alert("Password not valid");
        return false;
        }
        if(!confirmPwd()){
            alert("Passwords need to match");
            return false;
        }
        if(!checkPhone()){
            alert("You must enter a Danish phone number");
            return false;
        }
        else{
            // How do we handle the gender, since they all have different id's, do we look for all of them?
            users.push(new User(form.firstname.value, form.lastname.value, form.gender.value, form.email.value, form.cpr.value, form.password.value ))
            console.log("User pushed to users array")
            localStorage.setItem("Users", JSON.stringify(users));
            
            usersAdress.push(new Address(form.email.value, form.phone.value, form.street.value, form.postal.value, form.city.value))
            console.log("user address pushed to classAdress array")
            localStorage.setItem("UsersAdress", JSON.stringify(usersAdress));
            document.location.href = "../html/login.html";
            }
        } 

    
    // Check clicked gender, set gender = this.gender
    
    function checkGender() {
        var male = form.male.value.checked;
        var female = form.female.value.checked;
            if( male == false || female == false) {
                return false;
            }
            else {
                return true;
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
    return true;
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
    // Need to include female false when male is true
    function checkIsMale() {
        if(form.male.value) {
            this.isMale = true;
        } else {
            this.isMale = false; 
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
// Need to check against localStorage, currently not working
function checkEmail(email) {
    console.log("1. check email runs");
    var email = document.getElementById("email");
    console.log("2. Email value is stored in variable");
    var users = (localStorage.getItem("User") !== null) ? JSON.parse(localStorage.getItem("User")) : [];
    console.log("3. Gets users from local storage");
    console.log(users)
        for (var i = 0; i < users.length; i++) {
            console.log("4. Loops through user array");
            console.log(users[i].email)
            console.log(email)
            if (users[i].email == email.value) {
                console.log("5. Checks for match in array");
            return false;               
            } console.log("Returns false");
        }
        return true;
    }         
    


// *** Validate phone number ***
function checkPhone() {
    // The regex accepts 8 numbers, either written together, two and two or four and four
    var phone1 = /^^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;
    // var phone1 = /^((^\d{8})|(^\d{2}[ ]\d{2}[ ]\d{2}[ ]\d{2})|(^\d{4}[ ]\d{4}))$/;
   
    // Sets phone number variable equal to user input
    var phone = document.getElementById("phone").value;
   
        // Checks if phone1 (pattern) number matches criteria of variable phone
        if(phone.match(phone1)) {
           return true; 
        }
        else {
            return false;
        }
   }
function checkDateOfBirth() {
    // The regex accepts 10 numbers, ddmmyy-mm
    var cpr1 = /^[0-3][0-9][0-1]\d{3}-\d{4}?/;
   
    // Sets phone number variable equal to user input
    var cpr = document.getElementById("cpr").value;
   
        // Checks if phone1 (pattern) number matches criteria of variable phone
        if(cpr.match(cpr1)) {
           return true; 
        }
        else {
            return false;
        }
   }
