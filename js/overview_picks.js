// check if picks in local storage is empty, if true create empty userPicks array, if false get stored elements
var userPicks = (localStorage.getItem("Picks") == null) ? [] : JSON.parse(localStorage.getItem("Picks"));

// create an array of addPickButtons
var addPickButtons = document.getElementsByClassName("addPickButton");

// loop through the array to check which button was clicked, and execute addPick function
for (var i = 0; i < addPickButtons.length; i++) {
    addPickButtons[i].addEventListener("click", pick);
}

function pick() {
    // check if button is active i.e. element is already in the pick list
    // if button not active, push to pick list and change button appearing 
    if (event.currentTarget.className !== "addPickButton active") {
        userPicks.push(this.id);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        alert(JSON.stringify(this.id) + " has been added to your picks.");
        event.currentTarget.className += " active";
        event.currentTarget.textContent = "– My Picks";
        event.currentTarget.style.background = "black";
        event.currentTarget.style.color = "white";
        console.log(addPickButtons);
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