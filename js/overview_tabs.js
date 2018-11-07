// TABS (// https://www.w3schools.com/howto/howto_js_tabs.asp)

// function which will be called onload within the body, so that exhibition tab is active by default through click()
function init() {
    document.getElementById("defaultOpen").click();
}

// function to first hide all tab contents and then show selected 'active' one
function openTab(event, listName) {
    // Declare all variables
    let i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" (button) and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(listName).style.display = "block";
    event.currentTarget.className += " active";
}



// MYPICKS












// SEARCH 