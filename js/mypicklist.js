// get current picks from local storage
var currentPicks = localStorage.getItem("Picks");
currentPicks = JSON.parse(currentPicks);
  
// cells are not really necessary for us now but maybe in the future when we work with real objects and want to display more than the name
function createTable(tableArr) {
    // create a table object
    let table = document.createElement('table');
    // iterate over every array(row) within tableArr
    // the for...of loop is the same (but shorter) as:
    // for (let row = 0; row <= tableArr.length; row++)
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