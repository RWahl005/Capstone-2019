"use strict";

/*

    The javascript file for the navigation bar.

*/

var active = false;

var mobile = false;

window.onload = init;

window.onresize = res;

var ul;
var navicon;
var imgNavIcon;

function init(){
    ul = document.getElementById("navigation");
    navicon = document.getElementById("navicon");
    imgNavIcon = navicon.getElementsByTagName("img")[0];
    if(window.innerWidth < 675){
        mobileMode();
    }else if(window.innerWidth > 675){
        desktopMode();
    }
    navicon.addEventListener("click", onClick);
}

function onClick(){
    if(!active){
        ul.style.display = "block";
        imgNavIcon.className = "rotated";
        active = true;
    }else{
        ul.style.display = "none";
        imgNavIcon.className = "";
        active = false;
    }
}

function res(e){
    if(window.innerWidth < 675 && !mobile){
        mobileMode();
    }else if(window.innerWidth > 675 && mobile){
        desktopMode();
    }
}

function mobileMode(){
    mobile = true;
    active = false;
    ul.style.display = "none";
    navicon.style.display = "block";
}

function desktopMode(){
    mobile = false;
    active = false;
    ul.style.display = "";
    navicon.style.display = "none";
    imgNavIcon.className = "";
}