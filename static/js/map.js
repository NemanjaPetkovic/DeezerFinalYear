var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
	  	zoom: 4.2,
	  	gestureHandling: "cooperative",
	  	center: new google.maps.LatLng(46.7985624, 8.2319736),
	  	disableDefaultUI: true,
	  	vAxis: {
	  		minValue: 0,
	  		gridlines: {
	    		color:'transparent'
	  				}
			},
	  		styles:[
					  {
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#ebe3cd"
					      }
					    ]
					  },
					  {
					    "elementType": "labels",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#523735"
					      }
					    ]
					  },
					  {
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#f5f1e6"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.country",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#c0c0c0"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.country",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#24242c"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.land_parcel",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.land_parcel",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#dcd2be"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.land_parcel",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#ae9e90"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.locality",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.neighborhood",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "administrative.province",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "visibility": "simplified"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "visibility": "simplified"
					      },
					      {
					        "weight": 1
					      }
					    ]
					  },
					  {
					    "featureType": "landscape",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "visibility": "on"
					      }
					    ]
					  },
					  {
					    "featureType": "landscape.natural",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#dfd2ae"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#dfd2ae"
					      }
					    ]
					  },
					  {
					    "featureType": "poi",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#93817c"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#a5b076"
					      }
					    ]
					  },
					  {
					    "featureType": "poi.park",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#447530"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "stylers": [
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "road",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#f5f1e6"
					      },
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "road.arterial",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#fdfcf8"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#f8c967"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#e9bc62"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway.controlled_access",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#e98d58"
					      }
					    ]
					  },
					  {
					    "featureType": "road.highway.controlled_access",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#db8555"
					      }
					    ]
					  },
					  {
					    "featureType": "road.local",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#806b63"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.line",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#dfd2ae"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.line",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#8f7d77"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.line",
					    "elementType": "labels.text.stroke",
					    "stylers": [
					      {
					        "color": "#ebe3cd"
					      }
					    ]
					  },
					  {
					    "featureType": "transit.station",
					    "elementType": "geometry",
					    "stylers": [
					      {
					        "color": "#dfd2ae"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "stylers": [
					      {
					        "color": "#110f0f"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "geometry.fill",
					    "stylers": [
					      {
					        "color": "#24242c"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "geometry.stroke",
					    "stylers": [
					      {
					        "color": "#110f0f"
					      },
					      {
					        "visibility": "off"
					      }
					    ]
					  },
					  {
					    "featureType": "water",
					    "elementType": "labels.text.fill",
					    "stylers": [
					      {
					        "color": "#92998d"
					      }
					    ]
						}
				]
	});

let  countries =["AUSL","AUS", "AUS","ARG","BEL","BRA","CAN","CHI","COL","COS","CRO","DEN","ECU","EST","FIN","FRA","GER","HUN","IND","ITA","LAT","LIT","MEX","NET","NOR","POL","ROM","RUS","SER","SIN","SLO","SOU","SPA","SWE","SWI","TUR","UK","USA"];
let countriesLength = countries.length;
      
AUSL = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/australia.png',position: {lat: -24.7761085,lng: 134.75513}});
AUS = new google.maps.Marker({map: map, draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/austria.png',position: {lat: 47.2000338,lng: 13.199959}});
ARG = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/argentina.png',position: {lat: -34.9964962,  lng: -64.9672816}});
BEL = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/belgium.png',position: {lat: 50.6407351, lng:  4.66696}});
BRA = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/brazil.png',position: {lat: -10.3333332, lng: -53.1999999}});
CAN = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/canada.png',position: {lat: 61.0666922,  lng: -107.991707}});
CHI = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/chile.png',position: {lat: -31.7613364,  lng: -71.3187696}});
COL = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/british-columbia.png',position: {lat: 2.8894434,  lng: -73.7838919}});
COS = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/costa-rica.png',position: {lat: 10.2735633,  lng: -84.0739101}});
CZE = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/czech-republic.png',position: {lat: 49.8167003,  lng: 15.4749544  }});
CRO = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/croatia.png',position: {lat: 45.5643442,  lng: 17.0118954}});
DEN = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/denmark.png',position: {lat: 55.670249, lng: 10.3333283}});
ECU = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/ecuador.png',position: {lat: -1.3397667, lng: -79.3666964}});
EST = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/estonia.png',position: {lat: 58.7523778, lng: 25.3319078 }});
FIN = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/finland.png',position: {lat: 63.2467777,  lng: 25.9209164}});
FRA = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/france.png',position: {lat: 46.603354,  lng: 1.8883335}});
GER = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/germany.png',position: {lat: 51.0834196,  lng: 10.4234469}});
HUN = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/hungary.png',position: {lat: 47.1817585,  lng: 19.5060937}});
IND = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/indonesia.png',position: {lat: -4.7993356,   lng: 114.5632032}});
ITA = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/italy.png',position: {lat: 42.6384261, lng: 12.674297}});
LAT = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/latvia.png',position: {lat: 56.8406494,  lng: 24.7537645}});
LIT = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/lithuania.png',position: {lat: 55.3500003,  lng: 23.7499997}});
MEX = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/mexico.png',position: {lat: 22.5000485,  lng: -100.0000374}});
NET = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/netherlands.png',position: {lat: 52.2379891,  lng: 5.5346074}});
NOR = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/norway.png',position: {lat: 60.5000209, lng: 9.0999715}});
POL = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/republic-of-poland.png',position: {lat: 52.0977181,  lng: 19.0258159}});
ROM = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/romania.png',position: {lat: 45.9852129,  lng: 24.6859225}});
RUS = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/russia.png',position: {lat: 64.6863136,  lng: 97.7453061}});
SER = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/serbia.png',position: {lat: 44.1534121,  lng: 20.55144}});
SIN = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/singapore.png',position: {lat: 1.357107,  lng: 103.8194992}});
SLO = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/slovakia.png',position: {lat: 48.7411522,   lng: 19.4528646}});
SOU = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/south-africa.png',position: {lat: -28.8166235,   lng: 24.991639}});
SPA = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/spain.png',position: {lat: 40.0028028, lng: -4.0031039}});
SWE = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/sweden.png',position: {lat: 59.6749712,   lng: 14.5208584}});
SWI = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/switzerland.png',position: {lat: 46.7985624,   lng: 8.2319736}});
TUR = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/turkey.png',position: {lat: 38.9597594,   lng: 34.9249653}});
UK = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/united-kingdom.png',position: {lat: 54.7023545,   lng: -3.2765752}});
USA = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/united-states.png',position: {lat: 39.7837304,   lng: -100.4458824}});
IRL = new google.maps.Marker({ map: map,draggable: false,animation: google.maps.Animation.DROP, icon: 'static/img/ireland.png',position: {lat: 52.865196,    lng: -7.9794599}});

function unclick(country){
      for(var i=0;i<countriesLength;i++)
      {
        if (countries[i]!=country){
             let country = window[countries[i]];
             country.setAnimation(null);
        }
      }
  }

var urlAUSL ='https://api.deezer.com/playlist/1313615765/tracks?limit=5';//fix!!
var urlAUS = 'https://api.deezer.com/playlist/1313615765/tracks?limit=5';
var urlUSA = 'https://api.deezer.com/playlist/1313621735/tracks?limit=5';
var urlIRL = 'https://api.deezer.com/playlist/1313619455/tracks?limit=5'
var urlARG = 'https://api.deezer.com/playlist/1279119721/tracks?limit=5';
var urlBEL = 'https://api.deezer.com/playlist/1266968331/tracks?limit=5';
var urlBRA = 'https://api.deezer.com/playlist/1111141961/tracks?limit=5';
var urlCAN = 'https://api.deezer.com/playlist/1652248171/tracks?limit=5';
var urlCHI = 'https://api.deezer.com/playlist/1279119121/tracks?limit=5';
var urlCOL = 'https://api.deezer.com/playlist/1116188451/tracks?limit=5';
var urlCOS = 'https://api.deezer.com/playlist/1313618455/tracks?limit=5';
var urlCZE = 'https://api.deezer.com/playlist/1266969571/tracks?limit=5';
var urlCRO = 'https://api.deezer.com/playlist/1266971131/tracks?limit=5';
var urlDEN = 'https://api.deezer.com/playlist/1313618905/tracks?limit=5';
var urlECU = 'https://api.deezer.com/playlist/1362501235/tracks?limit=5';
var urlEST = 'https://api.deezer.com/playlist/1221037201/tracks?limit=5';
var urlFIN = 'https://api.deezer.com/playlist/1221034071/tracks?limit=5';
var urlFRA = 'https://api.deezer.com/playlist/1109890291/tracks?limit=5';
var urlGER = 'https://api.deezer.com/playlist/1111143121/tracks?limit=5';
var urlHUN = 'https://api.deezer.com/playlist/1362506695/tracks?limit=5';
var urlIND = 'https://api.deezer.com/playlist/1116188761/tracks?limit=5';
var urlITA = 'https://api.deezer.com/playlist/1116187241/tracks?limit=5';
var urlLAT = 'https://api.deezer.com/playlist/1221037511/tracks?limit=5';
var urlLIT = 'https://api.deezer.com/playlist/1221037371/tracks?limit=5';
var urlMEX = 'https://api.deezer.com/playlist/1111142361/tracks?limit=5';
var urlNET = 'https://api.deezer.com/playlist/1266971851/tracks?limit=5';
var urlNOR = 'https://api.deezer.com/playlist/1313619885/tracks?limit=5';
var urlPOL = 'https://api.deezer.com/playlist/1266972311/tracks?limit=5';
var urlRUS = 'https://api.deezer.com/playlist/1116189381/tracks?limit=5';
var urlROM = 'https://api.deezer.com/playlist/1279117071/tracks?limit=5';
var urlSER = 'https://api.deezer.com/playlist/1266972981/tracks?limit=5';
var urlSIN = 'https://api.deezer.com/playlist/1313620765/tracks?limit=5';
var urlSLO = 'https://api.deezer.com/playlist/1266973701/tracks?limit=5';
var urlSOU = 'https://api.deezer.com/playlist/1362528775/tracks?limit=5';
var urlSPA = 'https://api.deezer.com/playlist/1116190041/tracks?limit=5';
var urlSWE = 'https://api.deezer.com/playlist/1313620305/tracks?limit=5';
var urlSWI = 'https://api.deezer.com/playlist/1313617925/tracks?limit=5';
var urlTUR = 'https://api.deezer.com/playlist/1116189071/tracks?limit=5';
var urlUK = 'https://api.deezer.com/playlist/1111142221/tracks?limit=5';


function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
}

var infowindow = new google.maps.InfoWindow({});


google.maps.event.addListener(AUSL, 'click', function() {
                    var response = httpGet(urlAUSL);
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Australia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });
google.maps.event.addListener(AUS, 'click', function() {
                    var response = httpGet(urlAUS)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Austria</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });
google.maps.event.addListener(USA, 'click', function() {
                    var response = httpGet(urlUSA)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for USA</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });
google.maps.event.addListener(IRL, 'click', function() {
                    var response = httpGet(urlIRL)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Ireland</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });
google.maps.event.addListener(ARG, 'click', function() {
                    var response = httpGet(urlARG)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Argentina</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  }); 
google.maps.event.addListener(BEL, 'click', function() {
                    var response = httpGet(urlBEL)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Belgium</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(BRA, 'click', function() {
                    var response = httpGet(urlBRA)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Brazil</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  

google.maps.event.addListener(CAN, 'click', function() {
                    var response = httpGet(urlCAN)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Canada</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(CHI, 'click', function() {
                    var response = httpGet(urlCHI)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Chile</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(COL, 'click', function() {
                    var response = httpGet(urlCOL)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Columbia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(COS, 'click', function() {
                    var response = httpGet(urlCOS)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Costa rica</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(CZE, 'click', function() {
                    var response = httpGet(urlCZE)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Czech republic</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(CRO, 'click', function() {
                    var response = httpGet(urlCRO)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Croatia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(DEN, 'click', function() {
                    var response = httpGet(urlDEN)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Denmark</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(ECU, 'click', function() {
                    var response = httpGet(urlECU)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Ecuador</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(EST, 'click', function() {
                    var response = httpGet(urlEST)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Estonia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(FIN, 'click', function() {
                    var response = httpGet(urlFIN)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Finland</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(FRA, 'click', function() {
                    var response = httpGet(urlFRA)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for France</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(GER, 'click', function() {
                    var response = httpGet(urlGER)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Germany</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(HUN, 'click', function() {
                    var response = httpGet(urlHUN)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Hungary</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(IND, 'click', function() {
                    var response = httpGet(urlIND)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Indonesia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(ITA, 'click', function() {
                    var response = httpGet(urlITA)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Italy</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(LAT, 'click', function() {
                    var response = httpGet(urlLAT)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Latvia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(LIT, 'click', function() {
                    var response = httpGet(urlLIT)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Lithuania</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(MEX, 'click', function() {
                    var response = httpGet(urlMEX)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Mexico</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(NET, 'click', function() {
                    var response = httpGet(urlNET)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Netherlands</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(NOR, 'click', function() {
                    var response = httpGet(urlNOR)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Norway</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(POL, 'click', function() {
                    var response = httpGet(urlPOL)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Poland</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(RUS, 'click', function() {
                    var response = httpGet(urlRUS)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Russia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(ROM, 'click', function() {
                    var response = httpGet(urlROM)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Romania</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SER, 'click', function() {
                    var response = httpGet(urlSER)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Serbia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SIN, 'click', function() {
                    var response = httpGet(urlSIN)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Singapore</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SLO, 'click', function() {
                    var response = httpGet(urlSLO)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Slovakia</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SOU, 'click', function() {
                    var response = httpGet(urlSOU)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for South africa</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SPA, 'click', function() {
                    var response = httpGet(urlSPA)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Spain</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SWE, 'click', function() {
                    var response = httpGet(urlSWE)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Sweden</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(SWI, 'click', function() {
                    var response = httpGet(urlSWI)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Switzerland</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(TUR, 'click', function() {
                    var response = httpGet(urlTUR)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for Turkey</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
google.maps.event.addListener(UK, 'click', function() {
                    var response = httpGet(urlUK)
                    infowindow.setContent('<div style="font-size: 20px;"><p style="color:#E72D63">Top tracks for United kingdom</p></div>'+ '<br> <p style="color:#02B5C8">No.1</p>'+'<b>'+response['data'][0]['title']+'</b>'+  '<br>' +response['data'][0]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.2</p>'+ '<b>'+ response['data'][1]['title']+'</b>' +'<br>' +response['data'][1]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.3</p>'+'<b>'+response['data'][2]['title']+'</b>'+'<br>' +response['data'][2]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.4</p>'+'<b>'+response['data'][3]['title'] +'</b>' +'<br>' +response['data'][3]['artist']['name']+ '<br>'+'<br><p style="color:#02B5C8">No.5</p>'+ '<b>' +response['data'][4]['title'] +'</b>' +'<br>' +response['data'][4]['artist']['name']);
                    infowindow.open(map, this);
                  });  
}