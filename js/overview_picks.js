
// ADD 

// create an array of addPickButtons
var addPickButtons = document.getElementsByClassName("addPickButton");

// loop through the array to check which button was clicked, and execute addPick function
for (var i = 0; i < addPickButtons.length; i++) {
    addPickButtons[i].addEventListener("click", addPick);
}

function addPick() {
    // get picks from local storage
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    // check if picks in local storage is empty, if true create empty userPicks array and push selected element
    if (userPicks == null) {
        userPicks = [];
        userPicks.push(this.id);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        alert(JSON.stringify(this.id) + " has been added to your picks.");
    } else {
        // local storage is not empty. check if the clicked element is already stored to prevent to be added multiple times 
        if (userPicks.includes(this.id)) {
            return false;
        } else {
            userPicks.push(this.id);
            localStorage.setItem("Picks", JSON.stringify(userPicks));
            alert(JSON.stringify(this.id) + " has been added to your picks.");
        }  
    }
};


// HOVER BEFORE REMOVE
// => dass sich der button dann umwandelt in schwarz/aktiv mit Häckchen "Saved to my Picks"
// und wenn man hovert man sieht "Remove from my Picks" ... addEventListener("hover", ... function style display bla)


// REMOVE

// create array of removePickButtons
var removePickButtons = document.getElementsByClassName("removePickButton")

// loop through the array to check which button was clicked, and execute removePick function
for (var i = 0; i < removePickButtons.length; i++) {
    removePickButtons[i].addEventListener("click", removePick);
}

function removePick() {
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    var index = userPicks.indexOf(this.id);
    // check if the id is included at all (-1 means not included) otherwise there's nothing to be removed 
    if (index > -1) {
        userPicks.splice(index, 1);
    };
    localStorage.setItem("Picks", JSON.stringify(userPicks));
}


/*

// NEW TRY


var addPickButtons = document.getElementsByClassName("addPickButton");
console.log(addPickButtons);
console.log(exhibitions);

// check which button was clicked, and execute addPick function
for (var i = 0; i < addPickButtons.length; i++) {
    addPickButtons[i].addEventListener("click", addPick);
} 


function addPick() {
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    // check which exhibition is picked
    var pickedExhibition = null;
    for (var i = 0; i < addPickButtons.length; i++) {
        if (addPickButtons.findIndex(addPickButtons[i]) == exhibitions.findIndex(exhibitions[i])) {
            console.log(indexOf.addPickButtons[i]);
            pickedExhibition = exhibitions[i];
            console.log(pickedExhibition);
            // return pickedExhibition;
        } 
    }
    // check if picks in local storage is empty, if yes push
    if (userPicks == null) {
        userPicks = [];
        userPicks.push(pickedExhibition);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        alert(JSON.stringify(pickedExhibition) + " has been added to your picks.");
    } else {
        if (userPicks.includes(pickedExhibition)) {
            return false;
        } else {
            userPicks.push(pickedExhibition);
            localStorage.setItem("Picks", JSON.stringify(userPicks));
            alert(JSON.stringify(pickedExhibition) + " has been added to your picks.");
        }  
    }
}; */

