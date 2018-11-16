class Venue {
    constructor(venueID, name, venueType, openingHours) {
        this.venueID = venueID;
        this.name = name;
        this.venueType = venueType;
        this.openingHours = openingHours;
    }

    setAddress() {
        this.address = new Address
        // new Address(this.email, this.phone, this.street, this.streetNr, this.postalCode, this.city, this.country, this.geolocation)
    }

    createHTML(){
        return '<li class="ListItem">' + '<h2 id="nameVe1">' + this.name + '</h2>' + '<span class="venueType" id="venueType1">' + this.venueType + '</span>' +  '</li>'
    }
}


var venues = []

// create the list of venues
venues.push(new Venue(987, "Louisiana Museum Of Modern Art", "museum", "Mo-Fr 10-20, Sa-So 10-18"))
venues.push(new Venue(654, "Kunsthal Charlottenborg", "museum", "Mo-Fr 9-19, Sa-So 10-16"))
venues.push(new Venue(321, "V1 Gallery", "gallery", "Mo-Fr 12-20, Sa-So 10-20"))

// set the addresses => still show as undefined, need to figure that out
venues[0].setAddress("louisiana@mail.com", 81818181, "Norrebrogade", 22, 2200, "København", "Denmark", 5555)
venues[1].setAddress("kunsthalchar@mail.com", 6565656, "Osterbrogade", 33, 3300, "København", "Denmark", 6666)
venues[2].setAddress("vone@mail.com", 32323232, "Vesterbrogade", 44, 4400, "København", "Denmark", 7777)