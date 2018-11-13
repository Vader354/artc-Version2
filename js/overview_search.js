//**** SEARCH FUNCTION ****/

function searchFunction() {

// Set variables
//Get value from Input field
var input = document.getElementById('myInput');
//Change all Letters to uppercase so for search Upper/lower case doesn't matter
var filter = input.value.toUpperCase();
//Get elements from list
var ul = document.getElementById("myUL");
// Get specific list items
var li = ul.getElementsByTagName('li');
var a;
var i;

// Loop through all list items, and hide those who don't match the search query
// implement it for venue tab, Filter nach Venue Type, Filter nach Artstyle etc.
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

//**** Import Exhibition Object Properties ****/ NOTE: Works in Console but not here yet
//** Exhibition Name: **/
// var nameEx1 = document.getElementById("nameEx1").textContent;
//     nameEx1 = exhibitions1.name
    
// var nameEx2 = document.getElementById("nameEx2").textContent;
//     nameEx2 = exhibition2.name

// var nameEx3 = document.getElementById("nameEx3").textContent;
//     nameEx3 = exhibition3.name

// //** Exhibition Description: **/
// var desEx1 = document.getElementById("desEx1").textContent;
//     desEx1 = exhibition1.description
    
// var desEx2 = document.getElementById("desEx2").textContent;
//     desEx2 = exhibition2.description

// var desEx3 = document.getElementById("desEx3").textContent;
//     desEx3 = exhibition3.description

//**** Import Venue Object Properties ****/
//** Venue Name: **/

//** Venue Description: **/
    
// GetElementsbyClass probieren, class für Venue UL und Exhibition UL bzw. lis implementieren, return a list