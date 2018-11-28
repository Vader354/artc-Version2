// CREATE LISTS ON OVERVIEW PAGE

// initial render, UL list is empty   
var htmlEx = '';   
var htmlVe = '';   

// loop through the exhibitions-array and display the respective html   
for (var i=0; i < exhibitions.length; i++) {   
    htmlEx += exhibitions[i].createHTML();   
}   
for (var i=0; i < venues.length; i++) {   
    htmlVe += venues[i].createHTML();   
}   
// output all imported exhibitions:   
document.getElementById('ExhibitionUL').innerHTML = htmlEx;   
document.getElementById('VenueUL').innerHTML = htmlVe; 



// ONLOAD / DEFAULT

// check if picks in local storage is empty, if true create empty userPicks array, if false get stored elements
var userPicks = (localStorage.getItem("Picks") == null) ? [] : JSON.parse(localStorage.getItem("Picks"));

// create an array of pickButtons
var pickButtons = document.getElementsByClassName("pickButton");

// function which will be called on load within the body
function init() {
    // select exhibition tab by default
    document.getElementById("defaultOpen").click();
    // check which picks are in local storage and make these buttons active 
    // (prevents that when refreshing the page buttons are 'unselected' again and thus picks can be added double)
    for (var i = 0; i < pickButtons.length; i++) {
        for (var j = 0; j < userPicks.length; j++) {
            if (userPicks[j] == pickButtons[i].id) {
            pickButtons[i].className += " active";
            pickButtons[i].textContent = "– My Picks";
            }
        }
    }
}



// TABS 

// function to first hide all tab contents and then show selected 'active' one
function openTab(event, listName) {
    // get all elements with class="tabcontent" and hide them
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }
    
    // get all elements with class="tablinks" (tab buttons) and remove the class "active"
    var tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    // show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(listName).style.display = "block";
    event.currentTarget.className += " active";
}


// MYPICKS

// loop through the array to check which button was clicked, and execute pick() function
for (var i = 0; i < pickButtons.length; i++) {
// PROBLEM: this Eventlistener does not fire for some reason.
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

// FILTER

// 1) import filter options for dropdowns from exhibition and venue list

// ArtType
// create an array for all current options in the dropdown
var selectArtType = document.getElementById('chooseArtType');
var optionsArtType= [];
for (var i = 0; i < selectArtType.length; i++) {
    optionsArtType.push(selectArtType[i].text);
}

// loop through exhibitions array and see if the options array includes the type
for (var i=0; i < exhibitions.length; i++) {
    // if exhibition Type is not included, create new option
    if (!optionsArtType.includes(exhibitions[i].type)) {
        exhibitions[i].createTypeOption();
        // update options array
        selectArtType = document.getElementById('chooseArtType');
        optionsArtType= [];
        for (var j = 0; j < selectArtType.length; j++) {
        optionsArtType.push(selectArtType[j].text);
        }
    }
}

// ArtStyle
// create an array for all current options in the dropdown
var selectArtStyle = document.getElementById('chooseArtStyle');
var optionsArtStyle = [];
for (var i = 0; i < selectArtStyle.length; i++) {
    optionsArtStyle.push(selectArtStyle[i].text);
}

// loop through exhibitions array and see if the options array includes the style
for (var i=0; i < exhibitions.length; i++) {
    // if exhibition style is not included, create new option
    if (!optionsArtStyle.includes(exhibitions[i].artStyle)) {
        exhibitions[i].createStyleOption();
        // update options array
        selectArtStyle = document.getElementById('chooseArtStyle');
        optionsArtStyle = [];
        for (var j = 0; j < selectArtStyle.length; j++) {
        optionsArtStyle.push(selectArtStyle[j].text);
        }
    }
}

// VenueType
// create an array for all current options in the dropdown
var selectVenueType = document.getElementById('chooseVenueType');
var optionsVenueType = [];
for (var i = 0; i < selectVenueType.length; i++) {
    optionsVenueType.push(selectVenueType[i].text);
}

// loop through venues array and see if the options array includes the type
for (var i=0; i < venues.length; i++) {
    // if venue type is not included, create new option
    if (!optionsVenueType.includes(venues[i].type)) {
        venues[i].createTypeOption();
        // update options array
        selectVenueType = document.getElementById('chooseVenueType');
        optionsVenueType = [];
        for (var j = 0; j < selectVenueType.length; j++) {
        optionsVenueType.push(selectVenueType[j].text);
        }
    }
}


// filtering
// create Object with all filter options
var searchFilters = {
    searchText: '',
    searchType: '',
    searchStyle: ''
};

// filter function
function renderResults (list, query) {
    // declare html, empty in the beginning
    var html = '';

    // declare variable for filtered results as the filtered list (filtered by the declared function)
    const filteredResults = list.filter(function(item) {
        // function filters after: Matching TextQuery, Matching Type Query, Matching Style Query
        // check if name of the listitem includes the entered text
        const isTextMatch = item.name.toLowerCase().includes(query.searchText.toLowerCase());
        // check if type of the listitem includes the entered type
        const isTypeMatch = item.type.includes(query.searchType);
        // check if style of the listitem includes the entered style
        const isStyleMatch = item.artStyle !== undefined ? item.artStyle.includes(query.searchStyle) : item ;
        // returns boolean value for each LI. 
        return isTextMatch && isTypeMatch && isStyleMatch
    });

// loop through list of filtered items and display them 
    for (let i=0; i < filteredResults.length; i++) {
        // update html variable for every result
        html += filteredResults[i].createHTML();
            // show list in exhibition tab if searched for exhibitions, Show list in venues tab if searched for venues
            if (filteredResults[i] instanceof Exhibition) {
                document.getElementById("ExhibitionUL").innerHTML = html
            } else if (filteredResults[i] instanceof Venue) {
                document.getElementById("VenueUL").innerHTML = html
            }
        }
}

// eventlistener for every input field so search function is called by input/change

document.getElementById('textSearchEx').addEventListener('input', function(e){
    // set property of SearchFilter object to the respective Input
    searchFilters.searchText = e.target.value;
    // call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtType').addEventListener('change', function(e){
    // set property of SearchFilter object to the respective Input
    searchFilters.searchType = e.target.value;
    // call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtStyle').addEventListener('change', function(e){
    // set property of SearchFilter object to the respective Input
    searchFilters.searchStyle = e.target.value;
    // call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('textSearchVe').addEventListener('input', function(e){
    // set property of SearchFilter object to the respective Input
    searchFilters.searchText = e.target.value;
    // call function with the right input
    renderResults(venues, searchFilters);
    });

document.getElementById('chooseVenueType').addEventListener('change', function(e){
    // set property of SearchFilter object to the respective Input
    searchFilters.searchType = e.target.value;
    // call function with the right input
    renderResults(venues, searchFilters);
    });

//****Error message and reset filters**** 
// if (filteredResults.length === 0) {
//     //Create Error Message
//         function createError() {
//             return '<li class="ListItem">' 
//                         + '<p>' + "We are sorry, there are no search results matching your criteria... :("+ '</p>' 
//                     + '</li>'
//         }
    
//     //Set error message as output for respective list
//     html = createError();
//     document.getElementById("ExhibitionUL").innerHTML = html;
//     document.getElementById("VenueUL").innerHTML = html;  
        
//     } else { //put for loop here 
//     }

// //Reset the searches when changing the tabs
// //Exhibitions tab
// document.getElementById('defaultOpen').addEventListener('click', function(){
//     searchFilters.searchText = '';
//     searchFilters.searchType = '';
//     searchFilters.searchStyle= '';
// // We figured out that this is the part that keeps the other Eventlistener from running
//     renderResults(exhibitions, searchFilters);
//     //clear input fields
//     document.getElementById('textSearchEx').value = "";
//     document.getElementById('chooseArtType').value = "";
//     document.getElementById('chooseArtStyle').value = "";
//     });

// //Venues Tab
// document.getElementById('venueButton').addEventListener('click', function(){
//     searchFilters.searchText = '';
//     searchFilters.searchType = '';
//     searchFilters.searchStyle= '';
//     renderResults(venues, searchFilters);
// //clear Input Fields
//     document.getElementById('textSearchVe').value = "";
//     document.getElementById('chooseVenueType').value = "";
// }); 