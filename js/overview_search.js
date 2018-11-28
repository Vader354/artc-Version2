// **** SEARCH and Filter functions ****

//** Import filter Options for dropdowns from Exhibition and Venue List **
//ArtType
//Create an Array for all current Options in the Dropdown
var selectArtType = document.getElementById('chooseArtType');
var optionsArtType= [];
for (var i = 0; i < selectArtType.length; i++) {
    optionsArtType.push(selectArtType[i].text);
}

//Loop through exhibitions array and see if the options array includes the type
for (var i=0; i < exhibitions.length; i++) {
    //If exhibition Type is not included, create new option
    if (!optionsArtType.includes(exhibitions[i].type)) {
        exhibitions[i].createTypeOption();
        //Update options array
        selectArtType = document.getElementById('chooseArtType');
        optionsArtType= [];
        for (var j = 0; j < selectArtType.length; j++) {
        optionsArtType.push(selectArtType[j].text);
        }
    }
}

//ArtStyle
//Create an Array for all current Options in the Dropdown
var selectArtStyle = document.getElementById('chooseArtStyle');
var optionsArtStyle = [];
for (var i = 0; i < selectArtStyle.length; i++) {
    optionsArtStyle.push(selectArtStyle[i].text);
}

//Loop through exhibitions array and see if the options array includes the style
for (var i=0; i < exhibitions.length; i++) {
    //If exhibition style is not included, create new option
    if (!optionsArtStyle.includes(exhibitions[i].artStyle)) {
        exhibitions[i].createStyleOption();
        //Update options array
        selectArtStyle = document.getElementById('chooseArtStyle');
        optionsArtStyle = [];
        for (var j = 0; j < selectArtStyle.length; j++) {
        optionsArtStyle.push(selectArtStyle[j].text);
        }
    }
}

//VenueType
//Create an Array for all current Options in the Dropdown
var selectVenueType = document.getElementById('chooseVenueType');
var optionsVenueType = [];
for (var i = 0; i < selectVenueType.length; i++) {
    optionsVenueType.push(selectVenueType[i].text);
}

//Loop through venues array and see if the options array includes the type
for (var i=0; i < venues.length; i++) {
    //If venue type is not included, create new option
    if (!optionsVenueType.includes(venues[i].type)) {
        venues[i].createTypeOption();
        //Update options array
        selectVenueType = document.getElementById('chooseVenueType');
        optionsVenueType = [];
        for (var j = 0; j < selectVenueType.length; j++) {
        optionsVenueType.push(selectVenueType[j].text);
        }
    }
}

//** General Filter Function **
//Create Object with all filter options
var searchFilters = {
    searchText: '',
    searchType: '',
    searchStyle: ''
};

//Filter Function
function renderResults (list, query) {
    //Declare html, empty in the beginning
    var html = '';

    //Declare variable for filtered Results as the filtered list (filtered by the declared function)
    const filteredResults = list.filter(function(item) {
        //Function filters after: Matching TextQuery, Matching Type Query, Matching Style Query
        //Check if name of the listitem includes the entered text
        const isTextMatch = item.name.toLowerCase().includes(query.searchText.toLowerCase());
        //Check if type of the listitem includes the entered type
        const isTypeMatch = item.type.includes(query.searchType);
        //Check if style of the listitem includes the entered style
        const isStyleMatch = item.artStyle !== undefined ? item.artStyle.includes(query.searchStyle) : item ;
        //Returns boolean value for each LI. 
        return isTextMatch && isTypeMatch && isStyleMatch
    });

if (filteredResults.length === 0) {
//Create Error Message
    function createError() {
        return '<li class="ListItem">' 
                    + '<p>' + "We are sorry, there are no search results matching your criteria... :("+ '</p>' 
                + '</li>'
    }

//Set error message as output for respective list
html = createError();
document.getElementById("ExhibitionUL").innerHTML = html;
document.getElementById("VenueUL").innerHTML = html;  
    
} else {
    //Loop through list of filtered items and display them 
    for (let i=0; i < filteredResults.length; i++) {
        //update html variable for every result
        html += filteredResults[i].createHTML();
            //Show list in exhibition tab if searched for exhibitions, Show list in venues tab if searched for venues
            if (filteredResults[i] instanceof Exhibition) {
                document.getElementById("ExhibitionUL").innerHTML = html
            } else if (filteredResults[i] instanceof Venue) {
                document.getElementById("VenueUL").innerHTML = html
            }
        }
    }
}

//Eventlistener for every input field so search function is called by input/change

document.getElementById('textSearchEx').addEventListener('input', function(e){
    //Set property of SearchFilter object to the respective Input
    searchFilters.searchText = e.target.value;
    //Call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtType').addEventListener('change', function(e){
    //Set property of SearchFilter object to the respective Input
    searchFilters.searchType = e.target.value;
    //Call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtStyle').addEventListener('change', function(e){
    //Set property of SearchFilter object to the respective Input
    searchFilters.searchStyle = e.target.value;
    //Call function with the right input
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('textSearchVe').addEventListener('input', function(e){
    //Set property of SearchFilter object to the respective Input
    searchFilters.searchText = e.target.value;
    //Call function with the right input
    renderResults(venues, searchFilters);
    });

document.getElementById('chooseVenueType').addEventListener('change', function(e){
    //Set property of SearchFilter object to the respective Input
    searchFilters.searchType = e.target.value;
    //Call function with the right input
    renderResults(venues, searchFilters);
    });

//Reset the searches when changing the tabs
//Exhibitions tab
document.getElementById('defaultOpen').addEventListener('click', function(){
    searchFilters.searchText = '';
    searchFilters.searchType = '';
    searchFilters.searchStyle= '';
// We figured out that this is the part that keeps the other Eventlistener from running
    renderResults(exhibitions, searchFilters);
    //clear input fields
    document.getElementById('textSearchEx').value = "";
    document.getElementById('chooseArtType').value = "";
    document.getElementById('chooseArtStyle').value = "";
    });

//Venues Tab
document.getElementById('venueButton').addEventListener('click', function(){
    searchFilters.searchText = '';
    searchFilters.searchType = '';
    searchFilters.searchStyle= '';
    renderResults(venues, searchFilters);
//clear Input Fields
    document.getElementById('textSearchVe').value = "";
    document.getElementById('chooseVenueType').value = "";
}); 