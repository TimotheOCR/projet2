
let popUp = {
    newDiv : function (){

        $('#trans').append('<div id=fBox ></div>'); // création de la popUp 
        $('#fBox').css({
            "background-color":"rgb(233, 221, 153)"
        });

        $('#fBox').append('<div id=canvasBox></div>');
        $('#fBox').append('<button type=button id=clearDraw>effacer</button>');
        $('#clearDraw').css({"width":"100px", "margin":"auto", "display" : "inherit"});
        $('#clearDraw').click(function(){
            signature.clear();
        })
        $('#fBox').append('<button type=button id=fReserver>reserver</button>'); // bouton #fReserver 
        $('#fReserver').css({
            "width":"100px", "margin":"auto", "display" : "inherit"
        });
        
        $('#fReserver').click(function(){
           popUp.annuler(); 
        });
    },
    annuler : function(){ // utilisée ici L22 et en [sessionStorage.js L 74]
        $('#reserver').css({"visibility":"hidden"});
        $('#trans').css({"visibility":"hidden"});
        jQuery('#averif').append('<button type=button id=annuler>annuler la réservation</button>');
        $('#annuler').css({
            "width":"100px", "margin":"auto", "display" : "inherit"
        });
        $('#annuler').on("click", function(){
            $('#reserver').css({"visibility":"visible"});
            $('.sujet').text("");
            $('.textO').val("");
            localStorage.clear()       
            sessionStorage.clear()
            $("#cd").text("");
            $('#annuler').remove();
            check = [];
        });
    },
    canvas : function () {
        var newCanvas = $('<canvas/>',{id: 'newCanvas'}).prop({
                width: 300,
                height: 200,
            });
        $('#canvasBox').append(newCanvas); // crée <canvas> dans #canvasBox

        $('#newCanvas').css({"background-color":"white", "margin":"auto", "display":"block" });
    },

    setCanvas : function (){
        popUp.canvas() = new signature;
    },

    close : function(){ 
        $("#fBox").remove();
        $("#reserver").attr('disabled', false);
    },

    init : function (){  // la PopUp se lance via [canvas2bis.js  L130]
        popUp.newDiv();
        $("#reserver").attr('disabled', true);
        $("#fReserver").attr('disabled', true);
    }

}


