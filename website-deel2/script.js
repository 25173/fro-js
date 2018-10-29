"use strict";

// Declare variables
var student = "Timothy Falonri";
var d = new Date();
var year_now = d.getFullYear();
var group = "MD2A";
var title = "JavaScript Bootcamp " + year_now;
var instruction6 = document.getElementById("instruction6");
var year = document.getElementsByClassName("year");

// Init
instruction2();
instruction5();
instruction6.addEventListener('click',instruction_6);

//Instructions
function instruction2() {
    document.title = title;
    document.getElementById("pageHeader").innerText = title;
    document.getElementById("group").innerText = group;

    for (var i = 0; i < year.length; i++) {
        year[i].innerText = year_now;
    }

    var name = document.getElementsByClassName("student");
    for (var i = 0; i < name.length; i++) {
        name[i].innerText = student;
    }
}


function instruction3() {
    var description = "Na op de link 'Click Event' te hebben geklikt werden de header," 
        + " de beschrijving en de oplossing van de opdracht aangepast";

    updateContent("opdracht 3",description,"");
}

function instruction5() {
        if (year_now <= 2017) {
            year[0].innerText = "2017"
        } else {
            year[0].innerText = '2017 - ' + year_now;
        }
}
function instruction_6() {
    var description = "<strong>omschrijving</strong> <br>"
        + " Bepaal de periode op basis van het startjaar en het huidige jaar en voer een klein testje uit voor verschillende startjaren: vorig jaar, huidige jaar en volgend jaar ";

    var result = "<strong>Resultaat</strong> <br> <br> Huidige  jaar: "+ year_now+ "<br> Startjaren: <br>" +
        "<ul>" +
        "<li> "+ 2017 +" : "+ (year_now - 1) + "-" + year_now+ "</li> " +
        "<li> "+ year_now +" : "+ year_now + "</li> " +
        "<li> "+ (year_now + 1) +" : "+ (year_now + 1) +  "</li> "
        +"</ul>";

    updateContent("Opdracht 6 - periode testen",description,result);
}

function instruction7() {
    var description = "Bepaal de dag van vandaag op drie verschillende manieren: 1)if/else, 2)switch en 3)array";
    var result = instruction7a() + "<br/>";
    result += instruction7b() + "<br/>";
    result += instruction7c() + "<br/>";
    result += "<hr/>";
    //result += "De beste manier is gebruik maken van een array!!!";
    result += "De beste manier is gebruik maken van ..... omdat ......";
    updateContent("Opdracht 7 - Dag in de week", description, result);
}

function instruction7a() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    if (dayNumber === 0) {
        day = "Zondag";
    }
    else if (dayNumber === 1) {
        day = "Maandag";
    }
    else if (dayNumber === 2) {
        day = "Dinsdag";
    }
    else if (dayNumber === 3) {
        day = "Woensdag";
    }
    else if (dayNumber === 4) {
        day = "Donderdag";
    }
    else if (dayNumber === 5) {
        day = "Vrijdag";
    }
    else if (dayNumber === 6) {
        day = "Zaterdag";
    }

    return "Door gebruik te maken van if/else weet ik dat het vandaag " + day + " is.";
}

function instruction7b() {
    var dayNumber = (new Date()).getDay();
    var day = "";
    switch (dayNumber) {
        case 0:
            day = "Zondag";
            break;
        case 1:
            day = "Maandag";
            break;
        case 2:
            day = "Dinsdag";
            break;
        case 3:
            day = "Woensdag";
            break;
        case 4:
            day = "Donderdag";
            break;
        case 5:
            day = "Vrijdag";
            break;
        case 6:
            day = "Zaterdag";
            break;
        default:
            day = "Geen dag";
    }

    return "Ook wanneer ik switch gebruik weet ik dat het vandaag " + day + " is.";
}

function instruction7c() {
    var dayNumber = (new Date()).getDay();
    var days = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"]
    var day = days[dayNumber];
    return "En tenslotte door gebruik te maken van een array weet ik ook dat het vandaag " + day + " is.";
}

function instruction8() {
    var description = "Toon een ongesorteerde array met namen van kleuren. Toon vervolgens de oplopend (A-Z) gesorteerde array en de aflopend (Z-A) gesorteerde array";
    var colors = ["Rood", "Geel", "Blauw", "Groen", "Zwart"];
    var result = "Kleuren: " + colors + "<br />";
    var sorted = colors.sort();
    result += "Gesorteerd (A-Z): " + sorted + "<br />";
    var sortedReverse = colors.reverse();
    result += "Gesorteerd (Z-A): " + sortedReverse + "<br />";
    updateContent("Opdracht 8 - Array sorteren", description, result);
}



// Instruction 4
function updateContent(header, description, result) {
    document.getElementById("instructionHeader").innerText = header;
    document.getElementById("instructionDescription").innerHTML = description;
    document.getElementById("instructionResult").innerHTML = result;
}