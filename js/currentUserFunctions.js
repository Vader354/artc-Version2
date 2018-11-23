// Hide myPicks when no user in current user, currently no ID to get from in HTML
window.addEventListener("load", function() {
	if (localStorage.getItem("CurrentUser") == null) {
    document.getElementById("myPickList").style.display = "none";
    var hiddenButtons = document.getElementsByClassName("hiddenElement")
    for (var i = 0; i < hiddenButtons.length; i++) {
        hiddenButtons[i].style.display = "none";
    }
	}	
})

// changes log in to log out 
window.addEventListener("load", function() {
	if (localStorage.getItem("CurrentUser") !== null) {
    document.getElementById("logInNav").textContent = "Log Out"; 
    }
})

// log out
document.getElementById("logInNav").addEventListener("click", function() {
    if (localStorage.getItem("CurrentUser") !== null) {
        localStorage.removeItem("CurrentUser");
    }
})