// check if picks in local storage is empty, if true create empty userPicks array, if false get stored elements
var userPicks = (localStorage.getItem("Picks") == null) ? [] : JSON.parse(localStorage.getItem("Picks"));

// create an array of pickButtons
var pickButtons = document.getElementsByClassName("pickButton");

// function which will be called onload within the body, so that exhibition tab is active by default through click()
function init() {
    // select exhibition tab by default
    document.getElementById("defaultOpen").click();
    // check which picks are in local storage and make these buttons active 
    // (prevents when refreshing the page that buttons are 'unselected' and picks can be added double)
    for (var i = 0; i < pickButtons.length; i++) {
        for (var j = 0; j < userPicks.length; j++) {
            if (userPicks[j] == pickButtons[i].id) {
            pickButtons[i].className += " active";
            pickButtons[i].textContent = "– My Picks";
            }
        }
    }
}

// TABS (// https://www.w3schools.com/howto/howto_js_tabs.asp)
// function to first hide all tab contents and then show selected 'active' one
function openTab(event, listName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" (button) and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(listName).style.display = "block";
    event.currentTarget.className += " active";
}



// MYPICKS

// loop through the array to check which button was clicked, and execute pick() function
for (var i = 0; i < pickButtons.length; i++) {
    pickButtons[i].addEventListener("click", pick);
}


function pick() {
    // check if button is active i.e. element is already in the pick list
    // if button not active, push to pick list and change button appearing 
    if (event.currentTarget.className !== "pickButton active") {
        userPicks.push(this.id);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        // localStorage ... set for buttons or just take the load thing from userPicks
        alert(JSON.stringify(this.id) + " has been added to your picks.");
        // change class to active
        event.currentTarget.className += " active";
        // change apperance of button
        event.currentTarget.textContent = "– My Picks";
        event.currentTarget.style.background = "black";
        event.currentTarget.style.color = "white";
        console.log(pickButtons);
    // if button active (= element already in picks list)
    } else {
        // find index of clicked element
        var index = userPicks.indexOf(this.id);
        // check if the id is included at all (-1 means not included) otherwise there's nothing to be removed 
        if (index > -1) {
        // splice it out of the picks list and store new array to local storage
            userPicks.splice(index, 1);
        }
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        // change button class and appearing so that element can be added again after being removed
        event.currentTarget.className = event.currentTarget.className.replace(" active", "");
        event.currentTarget.textContent = "+ My Picks";
        event.currentTarget.style.background = "white";
        event.currentTarget.style.color = "black";
        alert(JSON.stringify(this.id) + " has been removed from your picks.");
    }
}










// SEARCH 