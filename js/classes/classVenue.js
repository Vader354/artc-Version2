class Venue {
    constructor(venueID, name, venueType, openingHours, geoLocation) {
        this.venueID = venueID;
        this.name = name;
        this.venueType = venueType;
        this.openingHours = openingHours;
    }

    // setAddress() {
    //
    // }
}


var venues = []

venues.push(new Venue(987, "Louisiana Museum Of Modern Art", "museum", "Mo-Fr 10-20, Sa-So 10-18"))
venues.push(new Venue(654, "Kunsthal Charlottenborg", "museum", "Mo-Fr 9-19, Sa-So 10-16"))
venues.push(new Venue(321, "V1 Gallery", "gallery", "Mo-Fr 12-20, Sa-So 10-20"))

console.log(venues)