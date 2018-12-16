// get current picks from local storage
// var currentPicks = JSON.parse(localStorage.getItem("Picks"));

// creates HTML elemenet for the picklist
function createHTMLlist(exhibitions) {
    return "<h2 style='font-size:22px'>" + exhibitions.name + "</h2>"
    +   "<div class='venuename'>" + exhibitions.getVenueName() + "</div>"
    +   "<div>" + exhibitions.startDate + " – " + exhibitions.endDate + "</div>"
    +   "<div class='artType'>" + exhibitions.type + " " + exhibitions.artStyle + "</div>";
}

// content variable set to empty
var content = "";

// nested loop: for each currentPicks element it goes through the exhibitions 
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




// OLD VERSION
/*
// cells are not really necessary for us now but maybe in the future when we work with real objects and want to display more than the name
function createTable(tableArr) {
    // create a table object
    let table = document.createElement('table');
    // iterate over every array(row) within tableArr
    for (let row of tableArr) {
        // insert a new row element into the table element
        table.insertRow();
        // iterate over every index(cell) in each array(row)
        for (let cell of row) {
            // while iterating over the index(cell)
            // insert a cell into the table element
            let newCell = table.rows[table.rows.length - 1].insertCell();
            // add text to the created cell element
            newCell.textContent = cell;
        }
    }
    // append the compiled table to the DOM
    document.body.appendChild(table);
}

// execute function to create table
createTable(currentPicks);
*/