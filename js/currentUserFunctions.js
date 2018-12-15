// Hide myPicks when no user in current user, currently no ID to get from in HTML
// the window object lets us access the DOM document loaded in the window and handle the event. Further, it ensures that the below functions will always be run first - as it is the first thing that gets loaded into the browser
// When the document is loaded the following function will run
window.addEventListener("load", function() {
    // checks if the localStorage contains a currentUser/loggedIn user
	if (localStorage.getItem("CurrentUser") == null) {
    // if localStorage is empty myPickList will be hidden from the user
    document.getElementById("myPickList").style.display = "none";
    // if localStorage is empty the buttons under overview will be hidden from the user
    var hiddenButtons = document.getElementsByClassName("hiddenElement")
    // loop to hide all buttons from user
    for (var i = 0; i < hiddenButtons.length; i++) {
        // hides the buttons from the user
        hiddenButtons[i].style.display = "none";
    }
    } // changes log in to log out 
    else if (localStorage.getItem("CurrentUser") !== null) {
        // if there is a currentUser in localStorage, the text of the log in button will be changed to log out
        document.getElementById("logInNav").textContent = "Log Out";
        // log out, change the functionality of the log-in button
        // Adds and eventListener to the login button, which will respond to a click
        document.getElementById("logInNav").addEventListener("click", function() {
        // if there is a user in local storage, and the log in/log out button is clicked, the currentUser will be removed from localStorage
        localStorage.removeItem("CurrentUser");
        }) 
    }	
})