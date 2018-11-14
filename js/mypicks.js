var exhibitions = []

// create our list of exhibitions
exhibitions.push(new Exhibition(123, "Luca Tombolini Exhibition", "photography", "contemporary", "A photoseries shot in the US", "2018-01-22", "2018-03-14"))
exhibitions.push(new Exhibition(456, "Frida Kahlo Exhibition", "painting", "colonial", "A painting series from Mexico", "2018-02-01", "2018-06-01"))
exhibitions.push(new Exhibition(789, "Lee Woodman Exhibition", "sculptures", "contemporary", "A creative director working 3D", "2018-05-05", "2018-07-07"))


var exhibition1 = exhibitions[0];
var exhibition2 = exhibitions[1];
var exhibition3 = exhibitions[2];


// MY PICKS - WIP.

// var userPicks = [];

/*
// simple version with local storage, works, but doesn't check if object already is in the myPicks list
function addPick(exhibition) {
    userPicks.push(exhibition);
    localStorage.setItem("Picks", JSON.stringify(userPicks));
    alert(JSON.stringify(exhibition.name) + " has been added to your picks!")
    console.log(userPicks);
}
*/
/*
// first check if item is already in local storage, if yes, it shouldnt be pushed
function addPick(exhibition) {
    var picksFromLS = localStorage.getItem("Picks");
    console.log(picksFromLS);
    picksFromLS = JSON.parse(picksFromLS);
    console.log(picksFromLS);
    // check if picks in local storage is empty, if yes push
    if (picksFromLS == null) {
        userPicks.push(exhibition);
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        alert(JSON.stringify(exhibition.name) + " has been added to your picks."); 
    } else {
        console.log(picksFromLS);
        if (picksFromLS.includes(exhibition)) {
            return false;
        } else {
            userPicks.push(exhibition);
            localStorage.setItem("Picks", JSON.stringify(userPicks));
            alert(JSON.stringify(exhibition.name) + " has been added to your picks.");
        }  
    }
};
*/

// eventListener ist wohl besser als onclick, aber funktioniert irgendwie nicht. onclick funktioniert mit myPicks


// ADD 
var addPickButtons = document.getElementsByClassName("addPickButton");
console.log(addPickButtons);

function addPick() {
    console.log("Hi");
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    // check if picks in local storage is empty, if yes push
    if (userPicks == null) {
        console.log("userPicks was null.")
        userPicks = [];
        console.log("empty array created!")
        userPicks.push(this.name);
        console.log("pusehd to the array.")
        localStorage.setItem("Picks", JSON.stringify(userPicks));
        console.log("set to local storage.")
        alert(JSON.stringify(this.name) + " has been added to your picks."); 
    } else {
        if (userPicks.includes(this.name)) {
            console.log("already inside.")
            return false;
        } else {
            userPicks.push(this.name);
            localStorage.setItem("Picks", JSON.stringify(userPicks));
            alert(JSON.stringify(this.name) + " has been added to your picks.");
        }  
    }
};

for (var i = 0; i < addPickButtons.length; i++) {
    addPickButtons[i].addEventListener("click", addPick);
}


// REMOVE
var removePickButtons = document.getElementsByClassName("removePickButton")

function removePick() {
    console.log("ciao");
    var picksFromLS = localStorage.getItem("Picks");
    var userPicks = JSON.parse(picksFromLS);
    var index = userPicks.indexOf(this.name);
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
// display myPicks
var currentPicks = localStorage.getItem("Picks")
currentPicks = JSON.parse(currentPicks);
document.getElementById("displayMyPicks").innerHTML = JSON.stringify(currentPicks);  */