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

    // WIP ...
    getAddress() {
        this.address = document.getElementsByClassName(Address)
    }

}


var exhibitions = []

// create our list of exhibitions
exhibitions.push(new Exhibition(123, "Luca Tombolini Exhibition", "photography", "contemporary", "A photoseries shot in the US", "2018-01-22", "2018-03-14"))
exhibitions.push(new Exhibition(456, "Frida Kahlo Exhibition", "painting", "colonial", "A painting series from Mexico", "2018-02-01", "2018-06-01"))
exhibitions.push(new Exhibition(789, "Lee Woodman Exhibition", "sculptures", "contemporary", "A creative director working 3D", "2018-05-05", "2018-07-07"))

console.log(exhibitions)

var exhibition1 = exhibitions[0];
var exhibition2 = exhibitions[1];
var exhibition3 = exhibitions[2];


// MY PICKS - WIP.

var myPicks = [];

addPick() {
    let i = 0;
    for (i = 0; i < exhibitions.length; i++) {
        if (myPicks.includes.exhibitions[i]) {
                false
            } else {
                myPicks.push.exhibitions[i];
                alert(JSON.stingify(exhibitions[i]) + "has been added to your picks.");
        }
    }
}


removePick() {
    // myPicks.slice[i] 
}



