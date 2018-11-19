class Exhibition {
    constructor(exhibitionID, name, artType, artStyle, description, startDate, endDate) {
        this.exhibitionID = exhibitionID;
        this.name = name;
        this.artType = artType;
        this.artStyle = artStyle;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    //TODO: Add property: Link, in order to import the link into html as well

    createHTML(){
        return '<li class="ListItem">' + '<a href="../html/exhibition_subpages/exhibition1.html" style="padding:0">' + '<h2>' + this.name + '</h2>' + '</a>' + '<span class="artType">' + this.artType + '</span>' + '    ' + '<span class="artStyle">' + this.artStyle + '</span>' + '<p>' + this.description + '</p>' + '<button class="addPickButton" id="' + this.name + '">' + '+ My Picks' + '</button>' + '<button class="removePickButton" id="' + this.name + '">' + '– My Picks' + '</button>' + '</li>'
    }

    /*
    // WIP ...
    getAddress() {
        this.address = document.getElementsByClassName(Address)
    }
    */
}

var exhibitions = []

// create our list of exhibitions
exhibitions.push(new Exhibition(123, "Luca Tombolini Exhibition", "photography", "contemporary", "A photoseries shot in the US", "2018-01-22", "2018-03-14"))
exhibitions.push(new Exhibition(456, "Frida Kahlo Exhibition", "painting", "colonial", "A painting series from Mexico", "2018-02-01", "2018-06-01"))
exhibitions.push(new Exhibition(789, "Lee Woodman Exhibition", "sculptures", "contemporary", "A creative director working 3D", "2018-05-05", "2018-07-07"))

var exhibition1 = exhibitions[0];
var exhibition2 = exhibitions[1];
var exhibition3 = exhibitions[2];

