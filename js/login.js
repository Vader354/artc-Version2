var loginForm = document.getElementById("loginForm");
var submit = document.getElementById("submit");
// variable for maxium user login attempts
var loginAttempts = 5;

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

// eventlistener for clicking login. 
submit.addEventListener("click", function() {
  // variable for user input email
  var username = loginForm.email.value;
  var inputPassword = loginForm.password.value;
    
  if (username.length == 0 || inputPassword.length == 0) {
    alert("Please enter a username and password");
    return false;
  } else { 
      for (var i = 0; i < users.length; i++) {
        if (username == users[i].email && hashPassword(inputPassword) == users[i].password) {
          currentUser.push(new CurrentUser(loginForm.email.value));
          document.location.href = "../html/overview.html";
          var loggedinUser = JSON.stringify(currentUser);
          localStorage.setItem("CurrentUser", loggedinUser);
          users.setLastAccess();
          return true;
        } else {
          // displays alert with number of attempts left before being shut out
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