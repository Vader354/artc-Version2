class Venue {
    constructor(venueID, name, venueType, openingHours) {
        this.venueID = venueID;
        this.name = name;
        this.type = venueType;
        this.openingHours = openingHours;
    }

    getAddress() {
        for (var i = 0; i < venueAddresses.length; i++) {
            if (this.venueID == venueAddresses[i].ownerID) {
                return venueAddresses[i];
            } 
        }
    }

    createHTML(){
        return '<li class="ListItem">' + '<h2 id="nameVe1">' + this.name + '</h2>' + '<span class="venueType" id="venueType1">' + this.type + '</span>' +  '</li>'
    }

    createTypeOption(){
        var select = document.getElementById("chooseVenueType");
        var newOption = document.createElement("option");
        newOption.text = this.type;
        select.options.add(newOption);
    }
}