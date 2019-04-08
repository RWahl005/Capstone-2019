window.addEventListener("load", aboutLoad);

var locActive = false;

function aboutLoad() {
    var location = document.getElementById("location");
    location.getElementsByTagName("div")[0].style.display = "none";
    location.onclick = locClick;
}

function locClick() {
    if (locActive) {
        var location = document.getElementById("location");
        location.getElementsByTagName("div")[0].style.display = "none";
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        locActive = false;
    } else {
        var location = document.getElementById("location");
        location.getElementsByTagName("div")[0].style.display = "block";
        location.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        locActive = true;
    }
}