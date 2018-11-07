class User {

    // The constructor for our class, which will allow us to create new objects of our class
    constructor (firstname, lastname, gender, email,dateOfBirth, address, password, phoneNumber) {
      this.firstname = firstname;
      this.lastname = lastname;
      this.gender = gender;
      this.email = email;
      this.dateOfBirth = dateOfBirth;
      this.address = address;
      this.password = this.encryptPwd(password);
      this.phoneNumber = phoneNumber;
      this.lastAccess = null;
    }

    encryptPwd() {

    }

    setLastAccess() {
        this.lastAccess = Date.now();  
    }

}

var assignUserId = function(){
    
}

var checkPc = function() {

}

// **** Password character validation *****
// The variable is not attached to HTML
// Should probably create a variable out of this

var checkPwd = function() {
    //first () indicates at least 1 special character requirement, second () indicates at least 1 capital letter, third() indicates that the password has to contain at least 6 characters
    var pwd = /^(?=(.*[\W]){1,})(?=(.*?[A-Z]){1,})(?!.*\s).{6,}$/;
    
    // Sets password variable equal to user input
    var password = document.getElementById("password").value;

        // Checks if password matches criteria of variable pwd
        if(password.value.match(pwd)) {
            // returns message if true. Have to change from alert 
            alert("Password meets criteria")
           return true; 
        }
        else {
            // returns message if invalid. Have to change from alert
            alert("Password is invalid, please try again.")
            return false;
        }
    }

// *** Password match variable ****
// The variable is not attached to HTML
var confirmPwd = function() {
    if(document.getElementById("password").value == document.getElementById("confirmPass").value) {
        alert("Match")
        return true;
    } else {
        alert("No match")
        return false;
        }
     }


// ***Validate email ***

// Function to check user against array
function checkEmail() {
    var len = userEmails.length;
    var email = document.getElementById("email").value;
    console.log('checkEmail called')
    for(var i = 0; i < len; i++){
        if (userEmails[i] == email) {
            alert("NO");
        } else {
            
        }
    }
}


// *** Validate phone number ***

var checkPhone = function() {

}