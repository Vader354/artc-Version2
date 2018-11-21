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

    getAddress() {
        for (var i = 0; i < addresses.length; i++) {
            if (this.venueID == addresses[i].ownerID) {
                return addresses[i];
            } 
        }
    }

    createHTML(){
        return '<li class="ListItem">' + '<a href="' + this.link + '" style="padding:0">' + '<h2>' + this.name + '</h2>' + '</a>' + '<p>' + this.description + '</p>' + '<span class="artType">' + this.type + '</span>' + '    ' + '<span class="artStyle">' + this.artStyle + '</span>' + '<div>' + '<button class="pickButton" id="' + this.name + '">' + '+ My Picks' + '</button>' + '</div>' + '</li>'
    }

    createTypeOption(){
        var select = document.getElementById("chooseArtType");
        var newOption = document.createElement("option");
        newOption.text = this.type;
        select.options.add(newOption);
    }

    createStyleOption(){
        var select = document.getElementById("chooseArtStyle");
        var newOption = document.createElement("option");
        newOption.text = this.artStyle;
        select.options.add(newOption);
    }
}

var exhibitions = []

// create our list of exhibitions
exhibitions.push(new Exhibition("E1", "V2", "Luca Tombolini Exhibition", "photography", "contemporary", "A photoseries shot in the US", "2018-01-22", "2018-03-14"));
exhibitions.push(new Exhibition("E2", "V1", "Frida Kahlo Exhibition", "painting", "colonial", "A painting series from Mexico", "2018-02-01", "2018-06-01"));
exhibitions.push(new Exhibition("E3", "V3", "Lee Woodman Exhibition", "sculptures", "contemporary", "A creative director working 3D", "2018-05-05", "2018-07-07"));
exhibitions.push(new Exhibition("E4", "V3", "Luca Tombolini Exhibition", "sculptures", "contemporary", "SCULPTURE TEST", "2018-01-22", "2018-03-14"))

// example :)
console.log("Address for exhibition with index 0 is: " + JSON.stringify(exhibitions[0].getAddress()))