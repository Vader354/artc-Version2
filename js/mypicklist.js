// display myPicks
var currentPicks = localStorage.getItem("Picks");
currentPicks = JSON.parse(currentPicks);


function createTable(tableData) {
    var table = document.createElement('table');
    var tableBody = document.createElement('tbody');
  
    tableData.forEach(function(rowData) {
        var row = document.createElement('tr');
        row.appendChild(document.createTextNode(rowData));
        tableBody.appendChild(row);
    });
  
    table.appendChild(tableBody);
    document.body.appendChild(table);
};


document.getElementById("displayMyPicks").innerHTML = createTable(currentPicks); 
