/*eslint-env browser*/
/* eslint-env es6 */

var bigButton = document.getElementById("bigbutton");

bigButton.onclick = buttonFunction;

function buttonFunction() {
    "use strict";
    document.getElementById("mainheader").innerHTML = "【﻿ｊａｋｏｂ　ｃａｓｅｙ　－　ｇｒｏｕｐ　ａ】";
    document.getElementById("navheader").innerHTML = "Navigation Bar";
    document.getElementById("nav1").innerHTML = "<a style='text-decoration: none; color: aliceblue;' href='page-1.html'>Home</a>";
    document.getElementById("nav2").innerHTML = "<a style='text-decoration: none; color: aliceblue;' href='page-2.html'>About me</a>";
    document.getElementById("nav3").innerHTML = "<a style='text-decoration: none; color: aliceblue;' href='page-3.html'>My Anime List</a>";
    document.getElementById("nav4").innerHTML = "<a style='text-decoration: none; color: aliceblue;' href='page-4.html'>Lab Exercises</a>";
}

document.getElementById("buttondropdown").addEventListener("click", revealContentDropdown);

function revealContentDropdown() {
    "use strict";
    const menu = document.querySelector(".dropdown");
    if (menu.style.display === "none") {
        menu.style.display = "inline";
    } else {
        menu.style.display = "none";
    }

}

document.getElementById("cultureobsession").addEventListener("click", revealCultureObsession);


function revealCultureObsession() {
    "use strict";
    const cultureContent = document.querySelector(".cultureobsessioncontent")
    if (cultureContent.style.display === "none") {
        cultureContent.style.display = "inline";
    } else {
        cultureContent.style.display = "none";
    }
}

document.getElementById("malembed").addEventListener("click", revealMalEmbed);

function revealMalEmbed() {
    "use strict";
    const malContent = document.querySelector(".listembedcontent")
    if (malContent.style.display === "none") {
        malContent.style.display = "inline";
    } else {
        malContent.style.display = "none";
    }
}