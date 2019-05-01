"use strict";

/*
    The index script for the index.html page.
*/

//when the page is loaded
window.addEventListener("load", function () {
    //Add a click listenr to the about button
    document.getElementById("aboutBut").addEventListener("click", function () {
        // Calculate the url for the about page based upon the current url.
        var url = location.href.split("/");
        url[url.length - 1] = "about.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
    //Add a click listenr to the services button
    document.getElementById("servicesBut").addEventListener("click", function () {
        // Calculate the url for the services page based upon the current url.
        var url = location.href.split("/");
        url[url.length - 1] = "services.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
    //Add a click listenr to the apply button
    document.getElementById("applyBut").addEventListener("click", function () {
        // Calculate the url for the apply page based upon the current url.
        var url = location.href.split("/");
        url[url.length - 1] = "apply.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
});