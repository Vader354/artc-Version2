
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

// simple version without local storage, works
function addPick(exhibition) {
    userPicks.push(exhibition);
    alert(JSON.stringify(exhibition.name) + " has been added to your picks!")
    console.log(userPicks);
}


console.log(userPicks)



var userPicks = [{
        name: "pickname1", 
        age: "pickage1"
    },{
        name: "pickname2", 
        age: "pickage2"
    }
];

let picksString = JSON.stringify(userPicks);
console.log(picksString);
localStorage.setItem("Picks", picksString);
let retrievePicksFromLocalStorage = localStorage.getItem("Picks");
retrievePicksFromLocalStorage = JSON.parse(retrievePicksFromLocalStorage) // back as object / array 

/*
// sobald mit local storage gearbeitet wird, soll erst gecheckt werden ob es schon in der Liste ist
function addPickACTUALLY(exhibition) {
    let i;
    for (i = 0; i < exhibitions.length; i++) {
        if (retrievePicksFromLocalStorage.includes(exhibition)) {
                false
            } else {
                userPicks.push(exhibition);
                alert(JSON.stringify(exhibition.name) + "has been added to your picks.");
        }
    }
}
*/




// eventListener ist wohl besser als onclick, aber funktioniert irgendwie nicht. onclick funktioniert mit myPicks

// var buttons = document.getElementsByClassName("addPickButton")
// var button1 = document.getElementById("button1")
// var button2 = document.getElementById("button2")
// var button3 = document.getElementById("button3")

// button1.addEventListener("click", addPick(exhibition1))
// button2.addEventListener("click", addPick(exhibition2))
// button3.addEventListener("click", addPick(exhibition3))

// => dass sich der button dann umwandelt in schwarz/aktiv mit Häckchen "Saved to my Picks"
// und wenn man hovert man sieht "Remove from my Picks" ... addEventListener("hover", ... function style display bla)




function removePick() {
    // myPicks.slice[i] 
}


// display myPicks
// document.getElementById("displayMyPicks").innerHTML = userPicks; 