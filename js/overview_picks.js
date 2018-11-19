
// try to connect button array to exhibitions array


// ADD 
var addPickButtons = document.getElementsByClassName("addPickButton");
console.log(addPickButtons);
console.log(exhibitions);

function addPick() {
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    // check if picks in local storage is empty, if yes push
    if (userPicks == null) {
        userPicks = [];
        userPicks.push(this.id);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        alert(JSON.stringify(this.id) + " has been added to your picks.");
    } else {
        if (userPicks.includes(this.id)) {
            return false;
        } else {
            userPicks.push(this.id);
            localStorage.setItem("Picks", JSON.stringify(userPicks));
            alert(JSON.stringify(this.id) + " has been added to your picks.");
        }  
    }
};

// check which button was clicked, and execute addPick function
for (var i = 0; i < addPickButtons.length; i++) {
    addPickButtons[i].addEventListener("click", addPick);
}


// HOVER BEFORE REMOVE




// REMOVE
var removePickButtons = document.getElementsByClassName("removePickButton")

function removePick() {
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    var index = userPicks.indexOf(this.id);
    if (index > -1) {
        userPicks.splice(index, 1);
    };
    localStorage.setItem("Picks", JSON.stringify(userPicks));
}

for (var i = 0; i < removePickButtons.length; i++) {
    removePickButtons[i].addEventListener("click", removePick);
}

// => dass sich der button dann umwandelt in schwarz/aktiv mit Häckchen "Saved to my Picks"
// und wenn man hovert man sieht "Remove from my Picks" ... addEventListener("hover", ... function style display bla)


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

