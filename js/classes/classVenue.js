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

    //creates HTML, in this case a list item for the venue list for the respective object, including information about the venue
    createHTML(){
        return '<li class="ListItem">' + '<h2>' + this.name + '</h2>' + '<span class="venueType" id="venueType1">' + this.type + '</span>' +  '</li>'
    }

    //Creates a venuetype option for the filter dropdown on the overview page. 
    createTypeOption(){
        var select = document.getElementById("chooseVenueType");
        var newOption = document.createElement("option");
        newOption.text = this.type;
        select.options.add(newOption);
    }
}