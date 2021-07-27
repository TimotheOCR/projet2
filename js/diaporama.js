
var diaporama = document.querySelectorAll('#diaporama .slide');
var affichage = document.getElementById("slider");
let i=0;


$(document).ready(function(){                       // initialisation slider
  Diaporama.play();
  Diaporama.touches();
  Diaporama.clone(diaporama[0]);                        
});

let Diaporama = {
  play : function (){
      {Diaporama.timer = setInterval(function(){Diaporama.sens('next');},5000);};
  },

  stop : function (){
    clearInterval(Diaporama.timer);
  },

  sens : function (param){                            // boutons
    if (param === 'next'){
      i++;
      if(i === diaporama.length) { i = 0}
      affichage.innerHTML = "";// supprime le clone précédent 
      Diaporama.clone(diaporama[i]);
    }
    if (param === 'prev'){
      i--;
      if(i<0) { i = diaporama.length -1}
      affichage.innerHTML = "";
      Diaporama.clone(diaporama[i]);
    }
  },

  clone : function (diapo) {                               // affichage div tank -> slider
    var slideClone = diapo.cloneNode(true);
    affichage.appendChild(slideClone); 
  },

  touches : function () {                                  //touches clavier
    document.addEventListener("keydown", function (e) {    
      if (e.keyCode == 39) {
        Diaporama.sens('next');
        Diaporama.stop();
      }
      if (e.keyCode == 37) {
        Diaporama.sens('prev');
        Diaporama.stop();
      }
    });
  }
};


