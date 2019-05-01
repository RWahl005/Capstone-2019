"use strict";

/*
    This script is used for the confirm.html page.
*/

/**
 * Takes the user back.
 */
function backToPage() {
    window.history.back();
}

/**
 * Takes the user to the homepage by calculating the url based upon the current url and the index file name.
 */
function homePage() {
    var url = location.href.split("/");
    url[url.length - 1] = "index.html";
    var finalUrl = "";
    for (var i = 0; i < url.length; i++) {
        finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
    }
    location.href = finalUrl;
}

var currentSession;

var session = {
    valid: 0,
    expired: 1

};

// Alerts the user their session has expired after 5 minutes. The user is then taken to the homepage.
window.addEventListener("load", function () {
    currentSession = session.valid
    setTimeout(function () {
        // Has little purpose besides fill the object requirement.
        currentSession = session.expired;
        alert('Your session has expired!');
        homePage();
    }, 300000);
});