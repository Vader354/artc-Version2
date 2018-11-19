

// Not really necessary anymore
var loginForm = document.getElementById("loginForm");
var submit = document.getElementById("submit")
// Retrieving stored users from localStorage
var users = JSON.parse(localStorage.getItem("Users"));
console.log(users)
// Creates a variable for maxium user login attempts
var loginAttempts = 5;


// Empty array to store user login in, to store that the user is logged in in... if that makes sense
var currentUser = [];


// var hashedInputPassword = users.hashPassword(inputPassword.value);

  // Eventlistener for clicking login. 
  submit.addEventListener("click", function(){
    console.log("Eventlistener fired on click");
    // Variable for user input email
    var username = loginForm.email.value;
    console.log(loginForm.email.value);
    var inputPassword = loginForm.password.value;
    console.log(loginForm.password.value);
    if(username.length == 0 || inputPassword.length == 0){
      alert("Please enter a username and password");
      return false;
    } else {   
      console.log("first function finished")
    // Look through array to check if input password matches stored password
    var hashedInputPassword = users[i].hashPassword(inputPassword);
    // Need to get = hashedInputPassword aswell
    for(var i = 0; i < users.length; i++) {
      console.log("for loop fired");
      // This is not working, tells me the password is wrong even with hardcoded users
      if(username == users[i].email && hashedInputPassword == users[i].password) {

        currentUser.push(new CurrentUser(loginForm.email.value))
        console.log(currentUser)
        document.location.href = "../html/overview.html";
        var loggedinUser = JSON.stringify(currentUser);
        localStorage.setItem("currentUser", loggedinUser);
        console.log(localStorage)
        users.setLastAccess();
        console.log(setLastAccess())
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
  