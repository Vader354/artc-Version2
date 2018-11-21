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

//** Import filter Options for dropdowns **
//ArtType

var selectArtType = document.getElementById('chooseArtType');
// for (var j = 0; j < selectArtType.options.length; j++) {
//     for (var i = 0; i < exhibitions.length; i++) {
//         if (exhibitions[i].type !== document.getElementById('chooseArtType').options[j]) {
//             exhibitions[i].createTypeOption();
//         }
//     }
// }

// TODO: Only one option created for each NEW artType. RIght now for every exhibition one option is created
for (var i=0; i < exhibitions.length; i++) {
    if (exhibitions[i].type !== selectArtType.options[i]) {
        exhibitions[i].createTypeOption();
    } else {
        console.log("else works")        
    }
}
//ArtStyle
for (var i=0; i < exhibitions.length; i++) {
    exhibitions[i].createStyleOption();
}

//VenueType
for (var i=0; i < venues.length; i++) {
    venues[i].createTypeOption();
}

//General Filter Function
// TODO: If none of the items in the list match ALL criteria, display nothing!

var searchFilters = {
    searchText: '',
    searchType: '',
    searchStyle: ''
};

function renderResults (list, query) {
    var html = '';

    const filteredResults = list.filter(function(item) {
        const isTextMatch = item.name.toLowerCase().includes(query.searchText.toLowerCase());
        const isTypeMatch = item.type.includes(query.searchType);
        const isStyleMatch = item.artStyle !== undefined ? item.artStyle.includes(query.searchStyle) : item ;
        return isTextMatch && isTypeMatch && isStyleMatch
    });

for (let i=0; i < filteredResults.length; i++) {
    html += filteredResults[i].createHTML();
        if (filteredResults[i] instanceof Exhibition) {
            document.getElementById("ExhibitionUL").innerHTML = html
        } else if (filteredResults[i] instanceof Venue) {
            document.getElementById("VenueUL").innerHTML = html
        }
    }
}

//Eventlistener for every Input-Field

document.getElementById('textSearchEx').addEventListener('input', function(e){
    searchFilters.searchText = e.target.value;
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtType').addEventListener('change', function(e){
    searchFilters.searchType = e.target.value;
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('chooseArtStyle').addEventListener('change', function(e){
    searchFilters.searchStyle = e.target.value;
    renderResults(exhibitions, searchFilters);
    });

document.getElementById('textSearchVe').addEventListener('input', function(e){
    searchFilters.searchText = e.target.value;
    renderResults(venues, searchFilters);
    });

document.getElementById('chooseVenueType').addEventListener('change', function(e){
    searchFilters.searchType = e.target.value;
    renderResults(venues, searchFilters);
    });