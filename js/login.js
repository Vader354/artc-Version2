// Retrieving user input on login 
// Create object with pass and email
var usersTest = ["g@gmail.com"];
// Not really necessary anymore
var loginForm = document.getElementById("LoginForm");
var submit = document.getElementById("submit")
// Retrieving stored users from localStorage
// var users = JSON.parse(localStorage.getItem("users"));

// Creates a variable for maxium user login attempts
var loginAttempts = 5;


// Empty array to store user login in, to store that the user is logged in in... if that makes sense
var currentUser = [];

// Variable for user input email
var username = document.getElementById("email");
var password = document.getElementById("password");

// var hashedInputPassword = users.hashPassword(inputPassword.value);

  // Eventlistener for clicking login. 
  submit.addEventListener("click", function(){
    console.log("Eventlistener fired on click");
    if(username.value.length == 0 || password.value.length == 0){
      alert("Please enter a username and password");
      return false;
    } else {   
      console.log("first function finished")
    // Look through array to check if input password matches stored password
    // Need to get = hashedInputPassword aswell
    for(var i = 0; i < usersTest.length; i++) {
      console.log("for loop fired");
      // This is not working, tells me the password is wrong even with hardcoded users
      if(username == usersTest[i] && password == usersTest[i]) {
        // create this
        currentUser.push(new CurrentUser)
        document.location.href = "../html/overview.html";
        // var loggedinUser = JSON.stringify(userLogin);
        // localStorage.setItem("userLogin", loggedinUser);
        user.setLastAccess()
        return true;
      }
    
      else {
        // Displays alert with number of attempts left before being shut out
        loginAttempts--;
        alert("Incorrect username and/or password " + loginAttempts + "attempts remaining.");
        loginForm.disabled = true;
        alert("Please register as a new user in order to continue");
      }
      // prevent user from doing anything further
      return false;
    }
  }
});
  