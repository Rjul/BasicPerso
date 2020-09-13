/// Definition des pointeurs de navigation  ///

var navPrensentationElt = document.getElementById("presentation")
var navcvElt = document.getElementById("cv")
var navporteFolioElt = document.getElementById("porteFolio")
var navcontactElt = document.getElementById("contact")

/// variable programme  ///
var eltClickId;

/// Function de modification du corp de la page ///

function editElt(contenu){
    console.log('ok')
    document.getElementById("content").innerHTML = contenu;
}



/// Function preparation de la demande ajaxGet  ///

function navSelected (idElt){
    switch(idElt){
        case "presentation": 
            ajaxGet("./presentation.html", editElt);
            break;
        case "cv":
             ajaxGet("./cv.html", editElt);
             break;
        case "portefolio":
            break;

        case "contact":
            break;

        default:
            console.error("navSelected function, was a parameter not defined")
    }
}

/// Creation des events de nav ///

navPrensentationElt.addEventListener("click", (e) => {
    e.stopPropagation();
    eltClickId = navPrensentationElt.id;
    console.log("presentation CLICK")
    navSelected(eltClickId);
    
} );
navcvElt.addEventListener("click", (e) => {
    e.stopPropagation();
    eltClickId = navcvElt.id;
    console.log("cv CLICK")
    navSelected(eltClickId);
    
} );
navporteFolioElt.addEventListener("click", (e) => {
    e.stopPropagation();
    eltClickId = navporteFolioElt.id;
    navSelected(eltClickId);
} );
navcontactElt.addEventListener("click", (e) => {
    e.stopPropagation();
    eltClickId = navcontactElt;
    navSelected(eltClickId);
} );