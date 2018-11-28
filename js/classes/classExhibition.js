class Exhibition {
    constructor(exhibitionID, venueID, name, artType, artStyle, description, startDate, endDate) {
        this.exhibitionID = exhibitionID;
        this.venueID = venueID;
        this.name = name;
        this.type = artType;
        this.artStyle = artStyle;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.link = "../html/exhibition_subpages/" + this.exhibitionID + ".html"
    }

    getVenueName() {
        for (var i = 0; i < venues.length; i++) {
            if (this.venueID == venues[i].venueID) {
                return venues[i].name;
            } 
        }
    }

    // get address of venue exhibition is in
    getAddress() {
        for (var i = 0; i < venueAddresses.length; i++) {
            if (this.venueID == venueAddresses[i].ownerID) {
                return venueAddresses[i];
            } 
        }
    }

    // method that creates HTML, in this case a list item for the respective object, including specific object information and the mypicks button.
    createHTML(){
        return '<li class="ListItem">' 
                    + '<a href="' + this.link + '" style="padding:0">' + '<h2>' + this.name + '</h2>' + '</a>' 
                    + '<div class="venuename">' + this.getVenueName() + '</div>'
                    + '<div class="dates">' + this.startDate + " – " + this.endDate
                    + '<p>' + this.description + '</p>' 
                    + '<span class="artType">' + this.type + '</span>'
                    + '<span class="artStyle">' + this.artStyle + '</span>' 
                    + '<div class="hiddenElement">' + '<button class="pickButton" id="' + this.name + '">' + '+ My Picks' + '</button>' + '</div>' 
                + '</li>'
    }

    // creates an arttype option for the filter dropdown on the overview page. 
    createTypeOption(){
        var select = document.getElementById("chooseArtType");
        var newOption = document.createElement("option");
        newOption.text = this.type;
        select.options.add(newOption);
    }

    // creates an artstyle option for the filter dropdown on the overview page. 
    createStyleOption(){
        var select = document.getElementById("chooseArtStyle");
        var newOption = document.createElement("option");
        newOption.text = this.artStyle;
        select.options.add(newOption);
    }
}