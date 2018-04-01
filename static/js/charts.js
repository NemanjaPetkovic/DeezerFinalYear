var id;
var token;

//--******************** Logout Function ********************


function logout(){
    DZ.logout();
        }

//--******************** Return User Information ********************

DZ.getLoginStatus(function(response){
           id = response.userID;
           token = response.authResponse.accessToken;

var url = 'https://api.deezer.com/user/' + id +'/history&access_token='+ token;
var url1 = 'https://api.deezer.com/user/' + id +'/charts&access_token='+ token;
var energyNum = 20;

//--******************** XML HTTP RESPONSE TO RETRIEVE TRACK DATA ********************

function httpGet(url){
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
		}

var apiresponse = httpGet(url);
var tracksresponse = httpGet(url1);

//--******************** RECENTLY PLAYED TRACKS DOUGHNUT CHART ********************

var ctx9 = document.getElementById('userChart1');
var stackedBar = new Chart(ctx9, {
    type: 'doughnut',
    data: {
   	labels: [apiresponse['data'][0]['title'],apiresponse['data'][1]['title'],apiresponse['data'][2]['title'],apiresponse['data'][3]['title'],apiresponse['data'][4]['title'],apiresponse['data'][5]['title'],apiresponse['data'][6]['title'],apiresponse['data'][7]['title']],
      datasets: [
        {  
          data: [10,10,10,10,10,10,10,10],
          backgroundColor: [
            'rgb(0, 184, 204)',
            'rgb(10, 175, 194)',
            'rgb(20, 167, 184)',
            'rgb(31, 159, 173)',
            'rgb(41, 151, 163)',
            'rgb(51, 143, 153)',
            'rgb(61, 135, 143)',
            'rgb(71, 126, 133)',
            ],         
          borderColor: [
      		'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            ]}
     	  ]},
		  options: {
        //CUSTOMISING TOOLTIP
  			tooltips: {
    			custom: function(tooltip) {
      		if (!tooltip) return;
      			tooltip.displayColors = true;
    				},
   			callbacks: {
      			title: function(tooltipItem, data) {
        			return data['labels'][tooltipItem[0]['index']];
      		},
      			label: function(tooltipItem, data) {
        			return;
      			},
    			}	
		  },
      //CUSTOMISING AXIS
			responsive: true,
	    	maintainAspectRatio: false,
			legend: {
	            display: false,
	            data: false
	            },
	            scale: {
	   				    ticks: {
	      				 display: false
	   					}
					},
	       }
   		});

//--******************** RECENTLY FAVORITED TRACKS DOGHNUT CHART ********************

var ctx10 = document.getElementById('userChart2');
var stackedBar = new Chart(ctx10, {
    type: 'doughnut',
    data: {
   	labels: [tracksresponse['data'][0]['title'],tracksresponse['data'][1]['title'],tracksresponse['data'][2]['title'],tracksresponse['data'][3]['title'],tracksresponse['data'][4]['title'],tracksresponse['data'][5]['title'],tracksresponse['data'][6]['title'],tracksresponse['data'][7]['title']],
      datasets: [
        {          data: [10,10,10,10,10,10,10,10],
      backgroundColor: [
            'rgb(255, 20, 87)',
            'rgb(243, 32, 92)',
            'rgb(232, 44, 97)',
            'rgb(220, 56, 102)',
            'rgb(208, 67, 107)',
            'rgb(196, 79, 112)',
            'rgb(185, 91, 117)',
            'rgb(173, 103, 122)',
            ],         
      borderColor: [
      		'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)', 
            'rgba(0,0,0,0.3)',
            'rgba(0,0,0,0.3)',
            ]        
		  }
 	]},
	options: {
    //CUSTOMISING TOOLTIP
		tooltips: {
  			custom: function(tooltip) {
    		if (!tooltip) return;
    			tooltip.displayColors = true;
  				},
 			callbacks: {
    			title: function(tooltipItem, data) {
      			return data['labels'][tooltipItem[0]['index']];
    		},
    			label: function(tooltipItem, data) {
      			return;
    			},
  			}	
		},
    //CUSTOMISING AXIS
		responsive: true,
    	maintainAspectRatio: false,
		legend: {
            display: false,
            data: false
            },
            scale: {
   				ticks: {
      				display: false
   				}
			},
    }
});

//--******************** TRACK ANALYSIS CHART ********************

//RETRIEVE 3 TRACKS
DZ.api('/user/me/recommendations/tracks', function(response){
	var  trackId1 = response.data[0].id;
	var  trackId2 = response.data[1].id;
	var  trackId3 = response.data[2].id;

//DATA FOR TRACK 1
DZ.api('/track/'+trackId1, function(response){
	var trackName1 = response.title_short
	var bpm1 = response.bpm;
	var gain1 = response.gain;
	var duration1 = response.duration;

//DATA FOR TRACK 2
DZ.api('/track/'+trackId2, function(response){
	var trackName2 = response.title_short
	var bpm2 = response.bpm;
	var gain2 = response.gain;
	var duration2 = response.duration;

//DATA FPR TRACK 3
DZ.api('/track/'+trackId3, function(response){
	var trackName3 = response.title_short
	var bpm3 = response.bpm;
	var gain3 = response.gain;
	var duration3 = response.duration;

//DISPLAYING DATA ON EACH AXIS
  var ctx12 = document.getElementById('userChart4');
  var energy1 = bpm1-energyNum;
  var energy2 = bpm2-energyNum;
  var energy3 = bpm3-energyNum;
  var myRadarChart = new Chart(ctx12, {
    type: 'radar',
    data: {
    labels: ['bpm', 'energy', 'duration'],
    datasets: [{
    	label: [trackName1],
        data: [bpm1, energy1, duration1],
        borderColor: ['rgba(0, 181, 200, 0.8)'],
        backgroundColor: ['rgba(0, 181, 200, 0.1)']
    },
    {
    	label: [trackName2],
        data: [bpm2, energy2, duration2],
        borderColor: ['rgba(254, 235, 21, 0.8)'],
        backgroundColor: ['rgba(254, 235, 21, 0.1)']
    },
    {
    	label: [trackName3],
        data: [bpm3, energy3, duration3],
        borderColor: ['rgba(240, 39, 98, 0.8)'],
        backgroundColor: ['rgba(240, 39, 98, 0.1)']
    }]
},
    //CUSTOMISING AXIS
    options: {
    	scale: {
        ticks: {
          beginAtZero: true
                },
        pointLabels: { fontSize:20 }
          },
		responsive: true,
	    maintainAspectRatio: false
	           }
          });
				})
			})
		})
})

//--******************** MOST LISTENED TRACKS CHART ********************
var len = tracksresponse['data'].length;
var ctx11 = document.getElementById('userChart3');
var stackedBar = new Chart(ctx11, {
    type: 'bar',
    data: {
   	labels: [tracksresponse['data'][0]['title'],tracksresponse['data'][1]['title'],tracksresponse['data'][2]['title'],tracksresponse['data'][3]['title'],tracksresponse['data'][4]['title'],tracksresponse['data'][5]['title'],tracksresponse['data'][6]['title'],tracksresponse['data'][7]['title'],tracksresponse['data'][8]['title']],
      datasets: [
        {          data: [10,9.5,9,8.5,8,7.5,7,6.5,6,5.5],
      backgroundColor: [
                'rgba(227,35,29, 0.8)',
                'rgba(239,144,123, 0.8)',
                'rgba(254,221,0, 0.8)',
                'rgba(215,44,136, 0.8)',
                'rgba(232,168,204, 0.8)',
                'rgba(195,210,0, 0.8)',
                'rgba(228,225,122, 0.8)',
                'rgba(64,180,230, 0.8)',
                'rgba(187,217,234, 0.8)',
                'rgba(200,200,200, 0.8)'
            ]}
      ]},
		options: {
      //CUSTOMISING TOOLTIP
			 tooltips: {
      			custom: function(tooltip) {
        		if (!tooltip) return;
        			tooltip.displayColors = true;
      				},
     			callbacks: {
        			label: function(tooltipItem, data) {
          			return tooltipItem.xLabel;
        			},
        			title: function(tooltipItem, data) {
          			return;
        			}
      		}	
    	},
      //CUSTOMISING AXIS
			responsive: true,
    		maintainAspectRatio: false,
			legend: {
                display: false,
                data: false
            },
        	scales: {
          		xAxes: [{
          			ticks : {
                        max : 1,    
                        min : 0
                    },
            		display: true,
          				}],
          		yAxes: [{
            		display: false
          				}],
        			}
      			}
    })
})