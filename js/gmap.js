
var map;
function initMap() { 
  map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 45.752355, lng: 4.8166183},
  zoom: 13
  
  });


    var url = "https://api.jcdecaux.com/vls/v1/stations?contract=Lyon&apiKey=aa4b28e03026e92e161322718552cd38d0239586"

    let a = {    
        ajax : ajaxGet( url, function (reponse) {
            var stations = JSON.parse(reponse);
            // console.log(reponse); affiche le nom des stations
            var gMarker = [];
            var icone = null;
            
            stations.forEach(function(station){    
                   var operation = (((station.available_bikes)/(station.bike_stands))*100);
                    
                if (operation >= 75) {
                icone =  'images/iconeV.png';
                }
                if (operation >= 50 && operation < 75  ) {
                icone = 'images/iconeU.png';
                }
                if (operation >= 25 && operation < 50 ) {
                    icone = 'images/iconeO.png';
                }
                if (operation < 25) {
                icone = 'images/iconeR.png';
                }
                
                
                marker = new google.maps.Marker ({
                    position : station.position,
                    map : map,
                    title : station.name,
                    icon : icone
                    
                });

                function classeStation  (){  //f° constructeur L47
                    this.nom  = station.name
                    this.adresse = station.address,
                    this.etat = station.status,
                    this.veloDispo = station.available_bikes,
                    this.total = station.bike_stands;
                }
     
                let maStation =  new classeStation();
                marker.addListener('click', function(){
                    document.getElementById('nom').innerHTML = maStation.nom;
                    document.getElementById('adresse').innerHTML = maStation.adresse;
                    document.getElementById('etat').innerHTML = maStation.etat;
                    document.getElementById('nb_vélos').innerHTML = maStation.veloDispo; 

                    timer.verifClick(); // countDown.js

                });
                
                gMarker.push(marker); 
            });
        
        var markerCluster = new MarkerClusterer(map, gMarker,{ 
        imagePath: 'images/m'});

        }), 
    }
    
}

