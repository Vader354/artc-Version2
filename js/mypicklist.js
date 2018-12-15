// get current picks from local storage
var currentPicks = JSON.parse(localStorage.getItem("Picks"));


function createHTMLlist(exhibitions) {
    return "<h2 style='font-size:22px'>" + exhibitions.name + "</h2>"
    +   "<div class='venuename'>" + exhibitions.getVenueName() + "</div>"
    +   "<div>" + exhibitions.startDate + " – " + exhibitions.endDate + "</div>"
    +   "<div class='artType'>" + exhibitions.type + " " + exhibitions.artStyle + "</div>";
}

var content = "";

    for (var i = 0; i < currentPicks.length; i++) {
        for (var j = 0; j < exhibitions.length; j++) 
            if (currentPicks[i] == exhibitions[j].name) {
                console.log(exhibitions[j]);
                content += createHTMLlist(exhibitions[j])
            }
        }

document.getElementById("picklist").innerHTML = content;






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