window.addEventListener("load", function () {
    var as = document.getElementsByTagName("a");
    for (var i = 0; i < as.length; i++) {
        as[i].addEventListener("click", function (e) {
            var val = confirm("You are leaving this page. Any unsaved progress in the application will be lost. Would you like to leave?");
            if (!val) {
                e.preventDefault();
            } else {
                window.removeEventListener("beforeunload", leave);
            }
        });
    }
    window.addEventListener("beforeunload", leave);
});

window.onhashchange = function () {
    confirm("You are leaving this page. Any unsaved progress in the application will be lost. Would you like to leave?");
}

function leave(evt) {
    var message = 'Are you sure you want to leave?';
    if (typeof evt == 'undefined') {
        evt = window.event;
    }
    if (evt) {
        evt.returnValue = message;
    }
    return message;
}