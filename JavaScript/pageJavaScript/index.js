window.addEventListener("load", function () {
    document.getElementById("aboutBut").addEventListener("click", function () {
        var url = location.href.split("/");
        url[url.length - 1] = "about.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
    document.getElementById("servicesBut").addEventListener("click", function () {
        var url = location.href.split("/");
        url[url.length - 1] = "services.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
    document.getElementById("applyBut").addEventListener("click", function () {
        var url = location.href.split("/");
        url[url.length - 1] = "apply.html";
        var finalUrl = "";
        for (var i = 0; i < url.length; i++) {
            finalUrl += (i != url.length - 1) ? url[i] + "/" : url[i];
        }
        location.href = finalUrl;
    });
});