/// Definition des pointeurs de navigation  ///

var navPrensentationElt = document.getElementById("presentation")
var navcvElt = document.getElementById("cv")
var navporteFolioElt = document.getElementById("porteFolio")
var navcontactElt = document.getElementById("contact")

/// variable programme  ///
var eltClickId;

/// Function de modification du corp de la page ///

function editElt(contenu){
    console.log(contenu)
    console.log('ok')
    document.getElementById("content").innerHTML = contenu;
}



/// Function preparation de la demande ajaxGet  ///

function navSelected (idElt){
    switch(idElt){
        case "presentation": ajaxGet("./HTML/presentation.html", editElt)
        case "cv":
        case "portefolio":
        case "contact":
    }
}

/// Creation des events de nav ///

navPrensentationElt.addEventListener("click", (e) => {
    e.preventDefault();
    eltClickId = navPrensentationElt.id;
    navSelected(eltClickId);
} )
navcvElt.addEventListener("click", (e) => {
    e.preventDefault();
    eltClickId = navcvElt.id;
    navSelected(eltClickId);
} )
navporteFolioElt.addEventListener("click", (e) => {
    e.preventDefault();
    eltClickId = navporteFolioElt.id;
    navSelected(eltClickId);
} )
navcontactElt.addEventListener("click", (e) => {
    e.preventDefault();
    eltClickId = navcontactElt;
    navSelected(eltClickId);
} )