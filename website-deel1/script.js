"use strict";
// ophalen van elementen uit de html
var jaar = document.getElementById("Jaar_js");

var d = new Date();
var year = d.getFullYear() - 1;
jaar.innerHTML = year;


// overal de dezelfde naam
var naam = document.getElementsByClassName("name");
for (var i = 0; i< naam.length; i++) {
    naam[i].innerText = "Timothy Falorni";
}


// click event
var link = document.getElementById("link");
link.addEventListener('click',instruction3);

function instruction3() {
    var description = "Door op link ‘Click event’ te klikken wordt de content aangepast";

    document.getElementById("uitwerking").style.display ="none";
    document.getElementById("title").innerHTML = "instruction3";
    document.getElementById("assignment").innerHTML = description;
}