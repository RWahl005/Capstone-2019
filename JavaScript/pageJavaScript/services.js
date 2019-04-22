window.addEventListener("load", servicesLoad);

var servActive = false;

function servicesLoad() {
    var serv = document.getElementById("serv");
    // location.getElementsByTagName("div")[0].style.display = "none";
    serv.getElementsByTagName("h2")[0].onclick = servClick;
}

function servClick() {
    if (servActive) {
        var serv = document.getElementById("serv");
        // location.getElementsByTagName("div")[0].style.display = "none";
        serv.getElementsByTagName("div")[0].className = "";
        serv.getElementsByTagName("p")[0].innerHTML = "&#x22c1;";
        servActive = false;
    } else {
        var serv = document.getElementById("serv");
        // location.getElementsByTagName("div")[0].style.display = "block";
        serv.getElementsByTagName("p")[0].innerHTML = "&#x22c0;";
        serv.getElementsByTagName("div")[0].className = "open";
        servActive = true;
    }
}