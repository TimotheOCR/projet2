



$("#trans").on( "click", "#fReserver", function(){  // countDown2  timer.init
    
    sessionStorage.setItem( "resa", Date.now()/* [countDown2.js L2] */) // on stock une date qui sera réutilisée au chargement de la page
    localStorage.setItem("nom",  $("#inputNom").val())
    localStorage.setItem("prenom", $("#inputPrenom").val())
    storage.soustraction()
    storage.stationR()

});

let storage = {
    
    timer : function(param){
        if (param>1200000){  // 1 200 000 millisecondes  = 20 minutes
            sessionStorage.clear();
            //réservation off
        } else {
            var display = $('#cd');
            var diff2 = (1200000 - param)/1000; // 20 min - Xminutes  = temps restant
    
            timer.writeTimer(diff2, display); // timer apparaissant en bas de page. 
        }
    },
    soustraction : function (){ // enlève 1 vélo au nombre de vélos disponibles
        var soustraction = document.getElementById('nb_vélos').innerHTML;
        var resultatsous = (soustraction - 1);
        document.getElementById('nb_vélos').innerHTML = resultatsous;
    },
    stationR : function () {   // réservation sessionStorage
        var tab = new Array();
        var tab = $(".sujet");
         
        if (tab[0].textContent == "") {

        }else{
            sessionStorage.setItem("nom", tab[0].textContent);
            sessionStorage.setItem("adresse", tab[1].textContent);
            sessionStorage.setItem("etat", tab[2].textContent);
            sessionStorage.setItem("veloDispo", tab[3].textContent);      
        }
    },
    station : function(nom, adresse, etat, veloDispo){   // affichage après rechargement
        
        $("#nom").text(""+nom+"");
        $("#adresse").text(""+adresse+"");
        $("#etat").text(""+etat+"");
        $("#nb_vélos").text(""+veloDispo+"");

    },
    local : function(nom, prenom){  //réservation localStorage
        $("#inputNom").val(nom);
        $("#inputPrenom").val(prenom);
    }
}


$(window).on("load", function (){
    initMap() // googlemap
    if(sessionStorage.getItem("resa")){     // si au rechargement de la page il y a une clef resa, on récupère cette clef.
        var dateActu = new Date ();
        var op = dateActu.getTime() - sessionStorage.getItem("resa");
        popUp.annuler(console.log("win.onload.#annuler")); // si resa existe, on crée un bouton annuler réservation.
        storage.timer(op) // L17 
    }
    if(sessionStorage.getItem("nom","adresse","etat","veloDispo")){
       var s = sessionStorage;
        storage.station(s.getItem("nom"),s.getItem("adresse"),s.getItem("etat"),s.getItem("veloDispo"));
    }
    if(localStorage.getItem("nom","prenom")){
        storage.local(localStorage.getItem("nom"), localStorage.getItem("prenom"));
    }
});
