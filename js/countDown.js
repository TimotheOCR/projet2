
var start = Date.now()     
var check = [];        


let timer = {
    writeTimer : function (duration, display){  
         
        var start = new Date();
        var x = setInterval( function(){
        
            var diff = duration - (((Date.now() - start) / 1000) | 0);

                minutes = (diff / 60) | 0;
                seconds = (diff % 60) | 0;

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;
        
            display.text("il vous reste " + minutes +":"+ seconds +" minutes pour récupérer votre vélo.");
                if (diff <= 0) {
                    clearInterval(x);
                    display.text("")
                    console.log("distance <= 0")
                }
        },1000)

        $("#annuler").on("click", function(){
            clearInterval(x);
            sessionStorage.clear();
            localStorage.clear();
            display.text("");
            console.log("tonton")
        });

    }, 

    champObligatoire : function(that = ""){ // par défaut le contenu est vide

        if (!that) {      // s'assurer que la fonction a bien un paramètre lorsqu'elle est appelée.
            console.log("la fonction doit comporter un paramètre")} ; 
        if (that.value == "") {
            console.log('le champ est vide');
             console.log(that);
             $("#reserver").attr('disabled', true);

        }else {
            console.log('le champ est rempli');
            console.log(that.value)
            if(that.id == "inputNom"){               
                check[0] = that.value;
                console.log("ouioui")
            } 
            if(that.id == "inputPrenom") {
                check[1] = that.value;
                console.log("nonon")
            }
            
            if (check.length >= 2){
                $("#reserver").attr('disabled', false);
                console.log(that);
            }
            console.log(check)
            
        }    
        
    }, 
    verif : function (){
    
        $('.textO').blur(function(e){
            timer.champObligatoire(this);
        })
            
    },
    verifClick : function (){
        if($("#nom").is(":empty")){ // input#nom
            $(".textO").attr("disabled", true)
        }else(
            $(".textO").attr("disabled", false)
        )
    },
    setTimer : function (){

        var twentyMin = 60 * 20,
            display = $('#cd'); // affiche display dans #cd
        
        timer.writeTimer(twentyMin, display)    
 
    },
    init : function () {
        timer.verifClick()
        $("#reserver").attr('disabled', true);
        $("#trans").on( "click", "#fReserver", function(){  // délégation
            timer.setTimer();
            popUp.close();
        });
        
    }
} 

$(window).ready(function(){    
    timer.champObligatoire();
    timer.init();
    timer.verif();
  });



 