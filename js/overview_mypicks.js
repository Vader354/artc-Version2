



var myPicks = [];

var exhibitionList = document.getElementsByClassName("exhibitionListItem");

var i = exhibitionList.indexOf("exhibitionListItem");

var exhibitionListItem = exhibitionList[i]

function addPick() {
    myPicks.push(new myPick("exhibitionListItem"));
}


slice! 

// or: ? 
// var pick = document.getElementsByClassName("addPickButton");
// pick.onclick = function() {
//    myPicks.push(new myPick("exhibitionListItem"));
// }

// or: ?
// add(exhibitionListItem) {
//    if (pick.onlick) {
//        this.myPicks.push(exhibitionListItem)
//    }
//}

console.log(myPicks)

alert(exhibitionListItem + "has been added to your picks.")



// WIP!

// function removePick(exhibitionListItem) { 
// }