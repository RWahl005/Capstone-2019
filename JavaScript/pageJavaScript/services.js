"use strict";

/*
    Services script used for the services.html page.
*/

window.addEventListener("load", servicesLoad);

// If the services spoiler is active
var servActive = false;

function servicesLoad() {
    var serv = document.getElementById("serv");
    // location.getElementsByTagName("div")[0].style.display = "none";
    serv.getElementsByTagName("h2")[0].onclick = servClick;
}

/**
 * When the service spoiler is clicked
 */
function servClick() {
    // Close the spoiler
    if (servActive) {
        var serv = document.getElementById("serv");
        // location.getElementsByTagName("div")[0].style.display = "none";
        serv.getElementsByTagName("div")[0].className = "";
        serv.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        servActive = false;
    } else {
        // open the spoiler
        var serv = document.getElementById("serv");
        // location.getElementsByTagName("div")[0].style.display = "block";
        serv.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        serv.getElementsByTagName("div")[0].className = "open";
        servActive = true;
    }
}