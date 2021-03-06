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
    main.addContenItem("Variabelen", variables);
    main.addContenItem("object",objects);
    main.addContenItem("array",array);
    main.addContenItem("AJAX - tabel",ajax1);
    //activate the right insert of values
    myValue();
    // Activate the first navigation link
    ajax1();
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

function variables() {
    let   postcode="1234ab";
    let    huisnummer= "99";
    let    datum= "2018-01-01";
    let    gas=300;
    let    water=30;
    let    electriciteit =[1001, 1002];
    let    slimmeMeter= true;

    let tittel = "<strong>verslag van de meting</strong> <br>"
    let text = "voor postcode" + postcode + "en huisnummer" + huisnummer +"zijn op " + datum +" metingen gedaan."+
                      "en dit zijn de resultaten: gas= "+gas +", water= "+ water +", electriciteitHoog= "+ electriciteit[0]+" en electiciteit laag= "+ electriciteit[1];
    if (slimmeMeter){
        text +=    " dit is gedaan met een slimme meter";
    }else {
        text +=    " dit is niet gedaan met een slimme meter";
    }

    let tekens = text.length;
    let words = text.split(" ");
    let aantalWoorden = words.length;

    let text2 = "<br><br><strong> nog wat eigenschappen  </strong> <br>" +
        "het verslag geeft "+ tekens + ' tekens, ' + aantalWoorden + "woorden, het eerste woord is "+ words[0] +" en het laaste woord is " + words[aantalWoorden -1 ];

    let text3 ="<br><br><strong>-> bonus<- draar je verslag van de metingen om en dan krijg je </strong> <br>";

    text3 += reverse(text);

    let description =  tittel + text +text2 + text3;

    main.updateContent("vaeiabelen", description)

}
function reverse(s){
    return s.split("").reverse().join("");
}

function objects() {
    let   postcode="1234ab";
    let    huisnummer= "99";
    let d = new Date(2018, 1, 1, 1, 0, 0, 0);
    let    datum= d ;
    let    gas=300;
    let    water=30;
    let    electriciteit =[1001, 1002];
    let    slimmeMeter= true;

    let title = "<strong> verslag van de meting</strong><br>";
    let text = "voor postcode "+ postcode+ " en huisnummer "+ huisnummer+" zijn op metingen gedaan op " + datum+" en dit zij de resultaten: <br>";
     text +=
        "<table> " +
            "<tr>" +
                "<th>gas:</th> <th>"+ gas+ "</th>" +
            "</tr>" +
            "<tr>" +
                "<th>water:</th><th>"+ water+ "</th>" +
            "</tr>" +
            "<tr>" +
                "<th>Electriciteit Hoog:</th><th>"+ electriciteit[0]+ "</th>" +
            "</tr>" +
            "<tr>" +
                "<th>Electriciteit laag:</th><th>"+ electriciteit[1]+ "</th>" +
            "</tr>" +
        " </table>";
    if (slimmeMeter){
        text +=    " dit is gedaan met een slimme meter";
    }else {
        text +=    " dit is niet gedaan met een slimme meter";
    }

    let description = title + text

    main.updateContent("Object", description)
}

function array() {
    let description;
    let meting1 = {
        poscode: "1234AB",
        huisnummer:99,
        datum:"2018-01-01",
        gas: 300,
        water: 30,
        elecktriceteit: [1001, 1002],
        slimmeMeter:true
    };
    let meting2 = {
        poscode: "1234AB",
        huisnummer:45,
        datum:"2018-01-01",
        gas: 130,
        water: 130,
        elecktriceteit: [11001, 11002],
        slimmeMeter:false
    };
    let metingen = [];
    metingen.push(meting1);
    metingen.push(meting2);
    // console.log(metingen); // controle of het werkt
    description = "<strong> overzicht van de metingen voor poscode 1234AB </strong><br><br>";
    description += meting2;

    description+= "<table>" +
        "<tr id='firstRow'>" +
        "<th>postcode:</th> <th>huisnummer</th> <th>datum</th> <th>gas</th><th>water</th><th>electriciteit</th><th>slimmemeter</th>" +
        "</tr>";

    for (let i = 0; i < metingen.length; i++){
        description += "<tr> <th> " + metingen[i].poscode+ "</th>" ;
        description += "<th>"+ metingen[i].huisnummer+"</th>";
        description += "<th>"+ metingen[i].datum+"</th>";
        description += "<th>"+ metingen[i].gas+"</th>";
        description += "<th>"+ metingen[i].water+"</th>";
        description += "<th>"+ metingen[i].elecktriceteit[0] +","+ metingen[i].elecktriceteit[1]+"</th>";
        description += "<th>"+ metingen[i].slimmeMeter+"</th>";
        description += "</tr>";
        }
        description += " </table>";



    main.updateContent("array",description)

}

function ajax1() {
    // De URL van de webAPI
    let url = "http://gert-rikkers.nl/api/meterstanden";
    let description;
    // Zorg ervoor dat de opdracht goed wordt uitgevoerd en dat de content wordt bijgewerkt.
    let gasverbruikt;
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            description += "<strong> overzicht van de metingen voor poscode 1234AB </strong><br><br>";
            let myArr = JSON.parse(this.responseText);
            // console.log(this.responseText);
            // console.log(description);
            console.log(myArr);
            // description += myArr;
            description+= "<table>" +
                "<tr id='firstRow'>" +
                "<th>postcode:</th> <th>huisnummer</th> <th>datum</th> <th>gas</th><th>water</th><th>slimmemeter</th><th>electriciteit hoog</th><th>electriciteit laag</th><th>maand</th><th>gasverbruikt</th> " +
                "</tr>";

            for (let i = 0; i < myArr.length; i++){
                description += "<tr><th>" + myArr[i].postcode+ "</th>" ;
                description += "<th>"+ myArr[i].huisnummer+"</th>";
                description += "<th>"+ myArr[i].datum+"</th>";
                description += "<th>"+ myArr[i].gas+"</th>";
                description += "<th>"+ myArr[i].water+"</th>";
                description += "<th>"+ slimmemeter(myArr[i].slimmeMeter) +"</th>";
                description += "<th>"+ myArr[i].elektriciteit[0] +"</th>";
                description += "<th>"+ myArr[i].elektriciteit[1] +"</th>";
                description += "<th>"+ maand(i) +"</th>";
                if (i !== 0 ) {
                    description += "<th>" + gasVerbruikt(gasverbruikt, myArr[i].gas) + "</th>";
                }else {
                    description += "<th>" + myArr[i].gas + "</th>";
                }
                gasverbruikt = myArr[i].gas;
                description += "</tr>";
            }
            description += " </table>";

            main.updateContent("Ajax-tabel",description);
        }
    };
    xhttp.open("GET", url, true);

    xhttp.send();

}

function slimmemeter(meter) {
    if (meter){
        return "+";
    }else {
        return "";
    }
}

function gasVerbruikt(x,y) {
    return y - x;
}

function maand( x) {
    x = x % 12;
    let month = new Array();
    month[0] = "Jan";
    month[1] = "Feb";
    month[2] = "Mrt";
    month[3] = "Apr";
    month[4] = "Mei";
    month[5] = "Jun";
    month[6] = "Jul";
    month[7] = "Aug";
    month[8] = "Sep";
    month[9] = "Okt";
    month[10] = "Nov";
    month[11] = "Dec";
return month[x];
}
