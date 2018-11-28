// Set variable for ease of use and makes it easier to read. Will not have to use getElementById as much
var loginForm = document.getElementById("loginForm");

// Set variable for ease of use and makes it easier to read code
var submit = document.getElementById("submit");

// variable for maxium user login attempts
var loginAttempts = 5;

// function for hashing password. Not created this myself as it would increase the risk of errors and as a result make our system more vulnerable.
// The function is rather basic and could have been improved using salt, which would then add randomized string to the password before hashing.
function hashPassword(password) {
  var a = 1, c = 0, h, o;
  if (password) {
    a = 0;
    for (h = password.length - 1; h >= 0; h--) {
      o = password.charCodeAt(h);
      a = (a<<6&268435455) + o + (o<<14);
      c = a & 266338304;
      a = c!==0?a^c>>21:a;
    }
  }
    return String(a);
}

// eventlistener for clicking login. 
submit.addEventListener("click", function() {
  // variable for user input email
  var username = loginForm.email.value;

  // variable for user input password
  var inputPassword = loginForm.password.value;
  
  // if theere is no input in the username and/or password field the system will return an alert and stop running. 
  if (username.length == 0 || inputPassword.length == 0) {
    alert("Please enter a username and password");
    return false;

  } else { 
      // loop to check for input matching users in localStorage
      for (var i = 0; i < users.length; i++) {
        // checks for matches in localStorage, both have to be a match
        // the user login input password is hashed to be able to check it against saved passwords in localStorage, since we cannot unhash an already hashed password.
        if (username == users[i].email && hashPassword(inputPassword) == users[i].password) {
          // if both input matches a new object is created through the CurrentUser class constructor. This is done to make the system understand if a user is logged on. It only stores username/email. 
          currentUser.push(new CurrentUser(loginForm.email.value));
          // redirects the user to the exhibition overview
          document.location.href = "../html/overview.html";
          // pushes CurrentUser to local storage
          var loggedinUser = JSON.stringify(currentUser);
          localStorage.setItem("CurrentUser", loggedinUser);
          return true;
        }
      }
      // if user input does not match, the variable loginAttempts will decrease by 1 for every time the user enters faulty input 
      // prevent user from doing anything further
      loginAttempts--;
      // each time the user enters a faulty input an alert will pop up displaying remaining attempts
      alert("Incorrect username and/or password. " + loginAttempts + " attempts remaining.");
      // if  loginAttempts reaches zero, the submit button will be disabled and the user will not be able to log in. The function is limited, since all the user have to do to try again is to refresh the page.
      if (loginAttempts === 0) {
        // disables submit button 
        submit.disabled = true;
        // Alert the user that he/she needs to create a user in order to continue
        alert("Please register as a new user in order to continue");
      }
      return false;
  }
});