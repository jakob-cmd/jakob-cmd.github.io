/*eslint-env browser*/

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
