function backToPage() {
    window.history.back();
}

function homePage() {
    var url = location.href.split("/");
    url[url.length - 1] = "index.html";
    var finalUrl = "";
    for (var i = 0; i < url.length; i++) {
        finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
    }
    location.href = finalUrl;
}