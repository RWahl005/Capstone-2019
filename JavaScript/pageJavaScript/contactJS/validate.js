"use strict";

/*
 *  Validates the form on the contact page 
 */

/**
 * The load function whichs sets all of the event listeners.
 */
window.addEventListener("load", function () {
    document.getElementById("fname").oninput = fnameVal;
    document.getElementById("submit").onclick = runSubmit;
    document.getElementById("lname").oninput = lnameVal;
    document.getElementById("email").addEventListener("input", emailVal);
    document.getElementById("email").addEventListener("input", checkAttrib);
    document.getElementById("email").addEventListener("blur", checkAttrib);
    document.getElementById("phn").addEventListener("input", telVal);
    document.getElementById("phn").addEventListener("input", checkAttrib);
    document.getElementById("phn").addEventListener("blur", checkAttrib);
    document.getElementById("info").addEventListener("input", txtVal);
    checkAttrib();
});

/**
 * Validates the first name
 */
function fnameVal() {
    var elm = document.getElementById("fname");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your first name!");
    } else {
        elm.setCustomValidity("");
    }
}

/**
 * Validates the last name
 */
function lnameVal() {
    var elm = document.getElementById("lname");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your last name!");
    } else {
        elm.setCustomValidity("");
    }
}

/**
 * Validates the email
 */
function emailVal() {
    var elm = document.getElementById("email");
    var tel = document.getElementById("phn");

    if (elm.validity.valueMissing && tel.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your email or phone number!");
    } else {
        elm.setCustomValidity("");
    }
}

/**
 * Validates the telephone
 */
function telVal() {
    var elm = document.getElementById("phn");
    var email = document.getElementById("email");

    if (elm.validity.valueMissing && email.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your email or phone number!");
        // Test the telephone against the regex in javascript to provide a custom error message.
    } else if (!elm.validity.valueMissing && !/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/.test(elm.value)) {
        elm.setCustomValidity("Incorrect phone number. Example: (623) 877-6927")
    } else {
        elm.setCustomValidity("");
    }
}

/**
 * Handles the required attributes on the email and telephone elements.
 */
function checkAttrib() {
    var tel = document.getElementById("phn");
    var email = document.getElementById("email");
    // If BOTH fields are empty
    if ((tel.validity.valueMissing && email.validity.valueMissing) || (tel.value === "" && email.value === "")) {
        // Add the required attributes.
        tel.setAttribute("required", "");
        email.setAttribute("required", "");
        // If the email field is not missing
    } else if ((tel.validity.valueMissing || tel.value === "") && !email.validity.valueMissing) {
        email.setAttribute("required", "");
        if (tel.hasAttribute("required")) {
            tel.removeAttribute("required");
        }
        // If the telephone field is not missing.
    } else if (!tel.validity.valueMissing && (email.validity.valueMissing || email.value === "")) {
        tel.setAttribute("required", "");
        if (email.hasAttribute("required")) {
            email.removeAttribute("required");
        }
    }
}

/**
 * Validates the comments box
 */
function txtVal() {
    var elm = document.getElementById("info");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your comments!");
    } else {
        elm.setCustomValidity("");
    }
}

/**
 * When the submit button is ran
 */
function runSubmit() {
    fnameVal();
    lnameVal();
    emailVal();
    txtVal();
}