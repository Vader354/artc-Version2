//**** Import Object Information for Exhibitions and venues Properties ****/
// Initial Render, UL List is empty
var htmlEx = '';
var htmlVe = '';

// Loop through the exhibitions/venue-array and display the respective html
for (var i=0; i < exhibitions.length; i++) {
    htmlEx += exhibitions[i].createHTML();
}
for (var i=0; i < venues.length; i++) {
    htmlVe += venues[i].createHTML();
}

// Output all imported exhibition and venuess:
document.getElementById('ExhibitionUL').innerHTML = htmlEx;
document.getElementById('VenueUL').innerHTML = htmlVe;

// **** SEARCH and Filter functions ****




// Define all search variables:

var searchQuerys = {
    searchText: '',
    searchArtType: '',
    searchArtStyle: '',
}

// ** Search/Filter Exhibitions **
//**Search Function Search Bar ***

//TODO: Compress the code, one function for venues and arttype, make filters/search work together



// console.log(buttons)

// if (buttons[0].classList.contains("active") === false) {
//     console.log("buttons if works");
// } else {
//     console.log("else works")
// }

document.getElementById('inputSearchEx').addEventListener('input', function(e) {
    var html = ''
    searchQuerys.searchText= e.target.value;
    searchQuerys.searchArtType = document.getElementById('filterArtType').value;
    searchQuerys.searchArtStyle = document.getElementById('filterArtStyle').value;

    
    var filteredExhibitions = []
    for(i = 0; i < exhibitions.length; i++){
        if(exhibitions[i].name.toLowerCase().includes(searchQuerys.searchText.toLowerCase())){
            filteredExhibitions.push(exhibitions[i])
        }
    }

    for (var i=0; i < filteredExhibitions.length; i++) {
        html += filteredExhibitions[i].createHTML()
    }

    document.getElementById('ExhibitionUL').innerHTML = html

})

//** Filter ArtType */

document.getElementById('filterArtType').addEventListener('change', function(e) {
    var html = ''
    searchQuerys.searchText= e.target.value;
    searchQuerys.searchArtType = document.getElementById('filterArtType').value;
    searchQuerys.searchArtStyle = document.getElementById('filterArtStyle').value;
    
    var filteredExhibitions = []
    for(i = 0; i < exhibitions.length; i++){
        if(exhibitions[i].artType.toLowerCase().includes(searchQuerys.searchArtType.toLowerCase())){
            filteredExhibitions.push(exhibitions[i])
        }
    }
    
    for (var i=0; i < filteredExhibitions.length; i++) {
        html += filteredExhibitions[i].createHTML()
    }

    document.getElementById('ExhibitionUL').innerHTML = html

})

//** Filter ArtStyle */

document.getElementById('filterArtStyle').addEventListener('change', function(e) {
    var html = ''
    searchQuerys.searchText= e.target.value;
    searchQuerys.searchArtType = document.getElementById('filterArtType').value;
    searchQuerys.searchArtStyle = document.getElementById('filterArtStyle').value;
    
    var filteredExhibitions = []
    for(i = 0; i < exhibitions.length; i++){
        if(exhibitions[i].artStyle.toLowerCase().includes(searchQuerys.searchArtStyle.toLowerCase())){
            filteredExhibitions.push(exhibitions[i])
        }
    }
    
    for (var i=0; i < filteredExhibitions.length; i++) {
        html += filteredExhibitions[i].createHTML()
    }

    document.getElementById('ExhibitionUL').innerHTML = html

})

// Ve


//###### FIRST TRY SEARCH + FILTER ############



//**** SEARCH + FILTER ****/

var buttons = document.getElementsByClassName("tablinks");

//**** SEARCH FUNCTION ****/

// function searchFunction() {

//     var inputSearchEx = document.getElementById("inputSearchEx");
//     var inputSearchVe = document.getElementById("inputSearchVe");
    
//     if (buttons[0].classList.contains("active")) {
//         //All Letters to uppercase so upper/lower case doesn't matter; SearchEx
//         var filter = inputSearchEx.value.toUpperCase();
//         //Get elements from list
//         var ul = document.getElementById("ExhibitionUL");
//     } else if (buttons[1].classList.contains("active")) {
//         //All Letters to uppercase so upper/lower case doesn't matter; SearchVe
//         var filter = inputSearchVe.value.toUpperCase();
//         //Get elements from list
//         var ul = document.getElementById("VenueUL");
//     }
//         // Get specific list items
//         var li = ul.getElementsByTagName('li');
//         var h2;
//         var i;

//         // Loop through all list items, and hide those who don't match the search query
//         for (i = 0; i < li.length; i++) {
//             h2 = li[i].getElementsByTagName("h2")[0];
//             if (h2.innerHTML.toUpperCase().indexOf(filter) > -1) {
//                 li[i].style.display = "";
//             } else {
//                 li[i].style.display = "none";
//             }
//         }   
//     } 

// // **** Filter Functions ****
// //TODO: Make both filter work together, e.g. show all exhibitions: sculptures, contemporary

// // General Filter Function:

// function genFilter(){

//     if (buttons[0].classList.contains("active")){
//         if (document.getElementById("filterArtType").value !== "") {
//             var input = document.getElementById("filterArtType");
//             console.log("if if works");
//         } else if (document.getElementById("filterArtStyle").value !== "") {
//             var input = document.getElementById("filterArtStyle");
//             console.log("if else if works");
//         }

//         var ul = document.getElementById("ExhibitionUL");

//     } else if (buttons[1].classList.contains("active")) {
//         var input = document.getElementById("filterVenueType");
//         console.log("else if works");
//         var ul = document.getElementById("VenueUL");
//     }

//     var li = ul.getElementsByTagName("li");
//     var b;
//     var i;

//     for (i = 0; i < li.length; i++) {
//         b = li[i].getElementsByTagName("span")[0]; 
//             if (b.innerHTML === input.value) {
//                 li[i].style.display = "";
//             } else if (input.value === "") {
//                 li[i].style.display = "";
//             } else {
//                 li[i].style.display = "none";
//             }
//         }
// }


// // ** Filter for Art Type **

// function filterArtType(){

//     //Set variables:
//     var inputArtType = document.getElementById("filterArtType");
//     var ul = document.getElementById("ExhibitionUL");
//     // Get specific list items
//     var li = ul.getElementsByTagName("li");
//     var b;
//     var i;

//     //Loop through all List Items

// for (i = 0; i < li.length; i++) {
//     b = li[i].getElementsByClassName("artType")[0]; 
//         if (b.innerHTML === inputArtType.value) {
//             li[i].style.display = "";
//         } else if (inputArtType.value === "") {
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }

// // ** Filter for Art Style **

// function filterArtStyle(){

//     //Set variables:
//     var inputArtStyle = document.getElementById("filterArtStyle")
//         console.log(inputArtStyle.value);
//     var ul = document.getElementById("ExhibitionUL");
//     // Get specific list items
//     var li = ul.getElementsByTagName("li");
//     var c;
//     var i;

//     //Loop through all List Items

// for (i = 0; i < li.length; i++) {
//     c = li[i].getElementsByClassName("artStyle")[0];
//         if (c.innerHTML === inputArtStyle.value) {
//             li[i].style.display = "";
//         } else if (inputArtStyle.value === ""){
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }


// // **** VENUE TAB ****

// // ** FILTER for VenueType **

// function filterVenueType(){

//     //Set variables:
//     var inputVenueType = document.getElementById("filterVenueType")
//         console.log(inputVenueType.value);
//     var ul = document.getElementById("VenueUL");
//     // Get specific list items
//     var li = ul.getElementsByTagName("li");
//     var c;
//     var i;

//     //Loop through all List Items

// for (i = 0; i < li.length; i++) {
//     c = li[i].getElementsByClassName("venueType")[0];
//         if (c.innerHTML === inputVenueType.value) {
//             li[i].style.display = "";
//         } else if (inputVenueType.value === ""){
//             li[i].style.display = "";
//         } else {
//             li[i].style.display = "none";
//         }
//     }
// }
