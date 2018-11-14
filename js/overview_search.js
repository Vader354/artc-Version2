//**** Import Exhibition Object Properties ****/ NOTE: Works in Console but not here yet
//** Exhibition Name: **/

    var nameEx1 = document.getElementById("nameEx1");
        nameEx1.textContent = exhibition1.name;
    var nameEx2 = document.getElementById("nameEx2");
        nameEx2.textContent = exhibition2.name;
    var nameEx3 = document.getElementById("nameEx3");
        nameEx3.textContent = exhibition3.name;

// //** Exhibition ArtType: **/
    var artType1 = document.getElementById("artType1");
        artType1.textContent = exhibition1.artType;
    var artType2 = document.getElementById("artType2");
        artType2.textContent = exhibition2.artType;
    var artType3 = document.getElementById("artType3");
        artType3.textContent = exhibition3.artType;

    
// //** Exhibition ArtStyle: **/
    var artStyle1 = document.getElementById("artStyle1");
        artStyle1.textContent = exhibition1.artStyle;    
    var artStyle2 = document.getElementById("artStyle2");
        artStyle2.textContent = exhibition2.artStyle;
    var artStyle3 = document.getElementById("artStyle3");
        artStyle3.textContent = exhibition3.artStyle;

// //** Exhibition Description: **/
    var desEx1 = document.getElementById("desEx1");
        desEx1.textContent = exhibition1.description;    
    var desEx2 = document.getElementById("desEx2");
        desEx2.textContent = exhibition2.description;
    var desEx3 = document.getElementById("desEx3");
        desEx3.textContent = exhibition3.description;

//**** Import Venue Object Properties ****/
//** Venue Name: **/

    var nameVe1 = document.getElementById("nameVe1");
        nameVe1.textContent = venues[0].name;        
    var nameVe2 = document.getElementById("nameVe2");
        nameVe2.textContent = venues[1].name;
    var nameVe3 = document.getElementById("nameVe3");
        nameVe3.textContent = venues[2].name;

//** Venue Type: **/

    var venueType1 = document.getElementById("venueType1");
        venueType1.textContent = venues[0].venueType;
    var venueType2 = document.getElementById("venueType2");
        venueType2.textContent = venues[1].venueType;
    var venueType3 = document.getElementById("venueType3");
        venueType3.textContent = venues[2].venueType;


//**** SEARCH FUNCTION ****/

function searchFunction() {

    var inputSearchEx = document.getElementById("inputSearchEx");
    var inputSearchVe = document.getElementById("inputSearchVe");
    var buttons = document.getElementsByClassName("tablinks");
    
    if (buttons[0].classList.contains("active")) {
        //All Letters to uppercase so upper/lower case doesn't matter; SearchEx
        var filter = inputSearchEx.value.toUpperCase();
        //Get elements from list
        var ul = document.getElementById("ExhibitionUL");
    } else if (buttons[1].classList.contains("active")) {
        //All Letters to uppercase so upper/lower case doesn't matter; SearchVe
        var filter = inputSearchVe.value.toUpperCase();
        //Get elements from list
        var ul = document.getElementById("VenueUL");
    }
        // Get specific list items
        var li = ul.getElementsByTagName('li');
        var h2;
        var i;

        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
            h2 = li[i].getElementsByTagName("h2")[0];
            if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }   
    } 

// **** Filter Functions ****
//TODO: Make both filter work together, e.g. show all exhibitions: sculptures, contemporary

// ** Filter for Art Type **

function filterArtType(){

    //Set variables:
    var inputArtType = document.getElementById("filterArtType")
    var ul = document.getElementById("ExhibitionUL");
    // Get specific list items
    var li = ul.getElementsByTagName("li");
    var b;
    var i;

    //Loop through all List Items

for (i = 0; i < li.length; i++) {
    b = li[i].getElementsByClassName("artType")[0]; 
        if (b.innerHTML === inputArtType.value) {
            li[i].style.display = "";
        } else if (inputArtType.value === ""){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// ** Filter for Art Style **

function filterArtStyle(){

    //Set variables:
    var inputArtStyle = document.getElementById("filterArtStyle")
        console.log(inputArtStyle.value);
    var ul = document.getElementById("ExhibitionUL");
    // Get specific list items
    var li = ul.getElementsByTagName("li");
    var c;
    var i;

    //Loop through all List Items

for (i = 0; i < li.length; i++) {
    c = li[i].getElementsByClassName("artStyle")[0];
        if (c.innerHTML === inputArtStyle.value) {
            li[i].style.display = "";
        } else if (inputArtStyle.value === ""){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


// **** VENUE TAB ****

// ** FILTER for VenueType **

function filterVenueType(){

    //Set variables:
    var inputVenueType = document.getElementById("filterVenueType")
        console.log(inputVenueType.value);
    var ul = document.getElementById("VenueUL");
    // Get specific list items
    var li = ul.getElementsByTagName("li");
    var c;
    var i;

    //Loop through all List Items

for (i = 0; i < li.length; i++) {
    c = li[i].getElementsByClassName("venueType")[0];
        if (c.innerHTML === inputVenueType.value) {
            li[i].style.display = "";
        } else if (inputVenueType.value === ""){
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
