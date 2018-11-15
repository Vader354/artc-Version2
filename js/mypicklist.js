// get current picks from local storage
var currentPicks = localStorage.getItem("Picks");
currentPicks = JSON.parse(currentPicks);
  
function createTable(tableArr) {
    //create a Table Object
    let table = document.createElement('table');
    //iterate over every array(row) within tableArr
    for (let row of tableArr) {
        //Insert a new row element into the table element
        table.insertRow();
        //Iterate over every index(cell) in each array(row)
        for (let cell of row) {
            //While iterating over the index(cell)
            //insert a cell into the table element
            let newCell = table.rows[table.rows.length - 1].insertCell();
            //add text to the created cell element
            newCell.textContent = cell;
        }
    }
    // append the compiled table to the DOM
    document.body.appendChild(table);
}

// execute function to create table
createTable(currentPicks);




