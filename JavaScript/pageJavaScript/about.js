"use strict";

/*
    The javascript file for the about.html page.
    This script mainly handles the spoilers
*/

window.addEventListener("load", aboutLoad);

// Variables storing data about if the spoilers are open or not
var locActive = false;
var curActive = false;
var certActive = false;
var otherActive = true;

function aboutLoad() {
    // Adds event to the location spoiler
    var location = document.getElementById("location");
    location.getElementsByTagName("h2")[0].onclick = locClick;

    // Adds events to the cur spoiler
    var cur = document.getElementById("cur");
    cur.getElementsByTagName("h2")[0].onclick = curClick;

    // Adds the events to the cert spoiler
    var cert = document.getElementById("cert");
    cert.getElementsByTagName("h2")[0].onclick = certClick;

    // Opens the other by default
    var other = document.getElementById("other");
    other.getElementsByTagName("h2")[0].onclick = otherClick;
    other.getElementsByTagName("div")[0].className = "open";
    other.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
}

/**
 * When the location button is clicked
 */
function locClick() {
    // if the spoiler is open (Close the spoiler)
    if (locActive) {
        //get the element
        var location = document.getElementById("location");
        // location.getElementsByTagName("div")[0].style.display = "none";
        // Remove it's classes
        location.getElementsByTagName("div")[0].className = "";
        // Set the arrow to down
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        // Set the bool to false
        locActive = false;
    } else {
        var location = document.getElementById("location");
        // location.getElementsByTagName("div")[0].style.display = "block";
        // Set the arrow to an up arrow
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        // Add the open class
        location.getElementsByTagName("div")[0].className = "open";
        // Set the bool to true
        locActive = true;
    }
}

function curClick() {
    if (curActive) {
        var cur = document.getElementById("cur");
        // location.getElementsByTagName("div")[0].style.display = "none";
        cur.getElementsByTagName("div")[0].className = "";
        cur.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        curActive = false;
    } else {
        var cur = document.getElementById("cur");
        // location.getElementsByTagName("div")[0].style.display = "block";
        cur.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        cur.getElementsByTagName("div")[0].className = "open";
        curActive = true;
    }
}

function certClick() {
    if (certActive) {
        var cert = document.getElementById("cert");
        // location.getElementsByTagName("div")[0].style.display = "none";
        cert.getElementsByTagName("div")[0].className = "";
        cert.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        certActive = false;
    } else {
        var cert = document.getElementById("cert");
        // location.getElementsByTagName("div")[0].style.display = "block";
        cert.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        cert.getElementsByTagName("div")[0].className = "open";
        certActive = true;
    }
}

function otherClick() {
    if (otherActive) {
        var other = document.getElementById("other");
        // location.getElementsByTagName("div")[0].style.display = "none";
        other.getElementsByTagName("div")[0].className = "";
        other.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        otherActive = false;
    } else {
        var other = document.getElementById("other");
        // location.getElementsByTagName("div")[0].style.display = "block";
        other.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        other.getElementsByTagName("div")[0].className = "open";
        otherActive = true;
    }
}