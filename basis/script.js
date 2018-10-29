"use strict";

// Declare variables
const studentName = "Timothy Falorni";
const studentGroup = "MD2A";
const year = main.year;
const studentClass = document.getElementsByClassName("studentGroup");
const pageYear = document.getElementsByClassName("pageYear");
const studentNameClass = document.getElementsByClassName("studentName");


// Init
init();

// Functions

function init() {
    // Set content based on variables
    document.getElementById("studentName").innerText = studentName;
    // Add navigation link to the navigation panel on the left of the page
    main.addContenItem("Inleiding", intro);
    //activate the right insert of values
    myValue();
    // Activate the first navigation link
    intro();
}

function intro() {
    let description = "Je bent in dienst van energiemaatschappij Energy Solutions en"
        + " krijgt de opdracht om een webpagina te maken die de energiestanden toont van een aantal adressen."
        + " De data wordt via een webAPI beschikbaar gesteld. "
        + " Dit gebeurt in kleine stapjes en uiteindelijk is het de bedoeling om de data op een nette manier te presenteren."
        + "<p>Succes!!!</p>";
    main.updateContent("Inleiding", description);

    // Set link to the element in the DOM
    var element = document.getElementById("contentPlaceholder");

    // Create the image and set some properties
    var img = document.createElement("img");
    img.src = "photo.jpg";
    img.style.width = "100px";

    // Create the label
    var label = document.createElement("label");
    label.innerHTML = studentName;

    // Create the paragraph and add the image and label to it
    var p = document.createElement("p");
    p.appendChild(img);
    p.appendChild(document.createElement("br"));
    p.appendChild(label);
    
    // Add the paragraph to the DOM
    element.appendChild(p); 
}

function myValue() {
    //change the group in the page
    for(let i = 0; i < studentClass.length; i++ ){
        studentClass[i].innerText = studentGroup;
    }

    //change my name
    for(let i = 0; i < studentNameClass.length; i++ ){
        studentNameClass[i].innerText = studentName;
    }

    //change the year
    for(let i = 0; i < pageYear.length; i++ ){
        pageYear[i].innerText = year;
    }

}