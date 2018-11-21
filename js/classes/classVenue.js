class Venue {
    constructor(venueID, name, venueType, openingHours) {
        this.venueID = venueID;
        this.name = name;
        this.type = venueType;
        this.openingHours = openingHours;
    }

    getAddress() {
        for (var i = 0; i < addresses.length; i++) {
            if (this.venueID == addresses[i].ownerID) {
                return addresses[i];
            } 
        }
    }

    createHTML(){
        return '<li class="ListItem">' + '<h2 id="nameVe1">' + this.name + '</h2>' + '<span class="venueType" id="venueType1">' + this.type + '</span>' +  '</li>'
    }
}


// create the list of venues
var venues = []

venues.push(new Venue("V1", "Louisiana Museum Of Modern Art", "museum", "Mo-Fr 10-20, Sa-So 10-18"))
venues.push(new Venue("V2", "Kunsthal Charlottenborg", "museum", "Mo-Fr 9-19, Sa-So 10-16"))
venues.push(new Venue("V3", "V1 Gallery", "gallery", "Mo-Fr 12-20, Sa-So 10-20"))


// example :) 
console.log("Address for venue with index 0 is: " + JSON.stringify(venues[0].getAddress()));