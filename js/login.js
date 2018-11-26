

// variable to get user input value
var loginForm = document.getElementById("loginForm");
var submit = document.getElementById("submit")
// Retrieving stored users from localStorage
var users =  JSON.parse(localStorage.getItem("Users"));
// Creates a variable for maxium user login attempts
var loginAttempts = 5;


// Empty array to store user login in, to store that the user is logged in in... if that makes sense
var currentUser = [];

function hashPassword(password) {
  var a = 1, c = 0, h, o;
  if (password) {
    a = 0;
    /*jshint plusplus:false bitwise:false*/
    for (h = password.length - 1; h >= 0; h--) {
      o = password.charCodeAt(h);
      a = (a<<6&268435455) + o + (o<<14);
      c = a & 266338304;
      a = c!==0?a^c>>21:a;
    }
  }
    return String(a);
}

// var hashedInputPassword = users.hashPassword(inputPassword.value);

  // Eventlistener for clicking login. 
  submit.addEventListener("click", function(){
    // Variable for user input email
    var username = loginForm.email.value;
    var inputPassword = loginForm.password.value;
    
    if(username.length == 0 || inputPassword.length == 0){
      alert("Please enter a username and password");
      return false;
    } else { 
        for(var i = 0; i < users.length; i++) {
            if(username == users[i].email && hashPassword(inputPassword) == users[i].password) {
                currentUser.push(new CurrentUser(loginForm.email.value))
                document.location.href = "../html/overview.html";
                var loggedinUser = JSON.stringify(currentUser);
                localStorage.setItem("currentUser", loggedinUser);
                return true;
            }
    
      else {
        // Displays alert with number of attempts left before being shut out
        loginAttempts--;
        alert("Incorrect username and/or password " + loginAttempts + " attempts remaining.");
        loginForm.disabled = true;
        alert("Please register as a new user in order to continue");
      }
      // prevent user from doing anything further
      return false;
    }
  }
});

