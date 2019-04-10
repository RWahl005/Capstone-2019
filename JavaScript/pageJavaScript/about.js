window.addEventListener("load", aboutLoad);

var locActive = false;
var curActive = false;
var certActive = false;
var otherActive = true;

function aboutLoad() {
    var location = document.getElementById("location");
    // location.getElementsByTagName("div")[0].style.display = "none";
    location.getElementsByTagName("h2")[0].onclick = locClick;
    var cur = document.getElementById("cur");
    // location.getElementsByTagName("div")[0].style.display = "none";
    cur.getElementsByTagName("h2")[0].onclick = curClick;
    var cert = document.getElementById("cert");
    // location.getElementsByTagName("div")[0].style.display = "none";
    cert.getElementsByTagName("h2")[0].onclick = certClick;
    var other = document.getElementById("other");
    other.getElementsByTagName("h2")[0].onclick = otherClick;
    other.getElementsByTagName("div")[0].className = "open";
    other.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
}

function locClick() {
    if (locActive) {
        var location = document.getElementById("location");
        // location.getElementsByTagName("div")[0].style.display = "none";
        location.getElementsByTagName("div")[0].className = "";
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        locActive = false;
    } else {
        var location = document.getElementById("location");
        // location.getElementsByTagName("div")[0].style.display = "block";
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        location.getElementsByTagName("div")[0].className = "open";
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