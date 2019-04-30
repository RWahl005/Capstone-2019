"use strict";

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

function fnameVal() {
    var elm = document.getElementById("fname");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your first name!");
    } else {
        elm.setCustomValidity("");
    }
}

function lnameVal() {
    var elm = document.getElementById("lname");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your last name!");
    } else {
        elm.setCustomValidity("");
    }
}

function emailVal() {
    var elm = document.getElementById("email");
    var tel = document.getElementById("phn");

    if (elm.validity.valueMissing && tel.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your email or phone number!");
    } else {
        elm.setCustomValidity("");
    }
}

function telVal() {
    var elm = document.getElementById("phn");
    var email = document.getElementById("email");

    if (elm.validity.valueMissing && email.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your email or phone number!");
    } else if (!elm.validity.valueMissing && !/^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/.test(elm.value)) {
        elm.setCustomValidity("Incorrect phone number. Example: (623) 877-6927")
    } else {
        elm.setCustomValidity("");
    }
}

function checkAttrib() {
    var tel = document.getElementById("phn");
    var email = document.getElementById("email");
    if ((tel.validity.valueMissing && email.validity.valueMissing) || (tel.value === "" && email.value === "")) {
        tel.setAttribute("required", "");
        email.setAttribute("required", "");
    } else if ((tel.validity.valueMissing || tel.value === "") && !email.validity.valueMissing) {
        email.setAttribute("required", "");
        if (tel.hasAttribute("required")) {
            tel.removeAttribute("required");
        }
    } else if (!tel.validity.valueMissing && (email.validity.valueMissing || email.value === "")) {
        tel.setAttribute("required", "");
        if (email.hasAttribute("required")) {
            email.removeAttribute("required");
        }
    }
}

function txtVal() {
    var elm = document.getElementById("info");

    if (elm.validity.valueMissing) {
        elm.setCustomValidity("Please enter in your comments!");
    } else {
        elm.setCustomValidity("");
    }
}

function runSubmit() {
    fnameVal();
    lnameVal();
    emailVal();
    txtVal();
}