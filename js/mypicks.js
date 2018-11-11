
// MY PICKS - WIP.

var userPicks = [];

// let myPicksString = JSON.stringify(userPicks)
// localStorage.setItem('Picks', userPicks)
// let retrievePicksFromLocalStorage = localStorage.getItem('Picks')
// retrievePicksFromLocalStorage = JSON.parse(retrievePicksFromLocalStorage) // back as object / array

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


function addPick(exhibition) {
        userPicks.push(exhibition);
        alert(JSON.stringify(exhibition.name) + " has been added to your picks!");
}

console.log(userPicks)


// sobald mit local storage gearbeitet wird, soll erst gecheckt werden ob es schon in der Liste ist
function addPickACTUALLY(exhibition) {
    let i;
    for (i = 0; i < exhibitions.length; i++) {
        if (retrievePicksFromLocalStorage.includes.exhibition) {
                false
            } else {
                userPicks.push.exhibition;
                alert(JSON.stringify(exhibition.name) + "has been added to your picks.");
        }
    }
}


function removePick() {
    // myPicks.slice[i] 
}

// check out innerHTML for filtering