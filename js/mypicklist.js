// creates HTML elemenet for the picklist
function createHTMLlist(exhibitions) {
    return "<h2 style='font-size:22px'>" + exhibitions.name + "</h2>"
    +   "<div class='venuename'>" + exhibitions.getVenueName() + "</div>"
    +   "<div>" + exhibitions.startDate + " – " + exhibitions.endDate + "</div>"
    +   "<div class='artType'>" + exhibitions.type + " " + exhibitions.artStyle + "</div>";
}

// content variable set to empty
var content = "";

// checks which users[i] is the current user, with email match
// if found, goes through all the exhibition for each pick and see if it finds match
// when the matching exhibition is found, the program puts calls the createHTMLlist function on the matched exhibition object and binds it to the contet variable
for (var i = 0; i < users.length; i++) {
    if (users[i].email == currentUser[0].email) {
        for (var j = 0; j < users[i].myPicks.length; j++) {
            for (var k = 0; k < exhibitions.length; k++) {
                if (users[i].myPicks[j] == exhibitions[k].name) {
                    content += createHTMLlist(exhibitions[k])
                }
            }
        }
    }
}

// content will be displayed in the picklist div
document.getElementById("picklist").innerHTML = content;