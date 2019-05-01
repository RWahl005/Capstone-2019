"use strict";

/*
    This script is for the apply.html page.
*/

// When the page is loaded call this.
window.addEventListener("load", function () {
    // Get all link elments
    var as = document.getElementsByTagName("a");
    // Add a click event listener to all of them
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener("click", function (e) {
            // Alert the user that they are leaving the page and ask if they want to continue
            var val = confirm("You are leaving this page. Any unsaved progress in the application will be lost. Would you like to leave?");
            if (!val) {
                // Prevents the link from firing
                e.preventDefault();
            } else {
                // Removes the leave event listener
                window.removeEventListener("beforeunload", leave);
            }
        });
    }
    window.addEventListener("beforeunload", leave);
});

/**
 * When the page is about to unloaded
 * @param {Event} evt 
 */
function leave(evt) {
    // Tell the browser there could be unsaved changes.
    var message = 'Are you sure you want to leave?';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }
    return message;
}