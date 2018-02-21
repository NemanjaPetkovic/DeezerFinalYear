    function httpGet(url)
				{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); // false for synchronous request
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
				}
var urlworld = 'https://api.deezer.com/playlist/3155776842/tracks';
var urlcountry = 'https://api.deezer.com/playlist/1313619455/tracks';

var responseworld = httpGet(urlworld)
var responsecountry = httpGet(urlcountry)



		var ctx1 = document.getElementById('myChart1');
        var stackedBar = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
    labels: [responseworld['data'][0]['title_short'], responseworld['data'][1]['title_short'], responseworld['data'][2]['title_short'], responseworld['data'][3]['title_short'], responseworld['data'][4]['title_short'],responseworld['data'][5]['title_short'], responseworld['data'][6]['title_short'], responseworld['data'][7]['title_short'], responseworld['data'][8]['title_short'], responseworld['data'][9]['title_short']],
      datasets: [
        {
          label: "Popularity",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [Math.round(responseworld['data'][0]['rank']/10000),Math.round(responseworld['data'][1]['rank']/10000),Math.round(responseworld['data'][2]['rank']/10000),Math.round(responseworld['data'][3]['rank']/10000),Math.round(responseworld['data'][4]['rank']/10000),Math.round(responseworld['data'][5]['rank']/10000),Math.round(responseworld['data'][6]['rank']/10000),Math.round(responseworld['data'][7]['rank']/10000),Math.round(responseworld['data'][8]['rank']/10000),Math.round(responseworld['data'][9]['rank']/10000)],
       backgroundColor: [
                'rgb(227,35,29)',
                'rgb(239,144,123)',
                'rgb(254,221,0)',
                'rgb(215,44,136)',
                'rgb(232,168,204)',
                'rgb(195,210,0)',
                'rgb(228,225,122)',
                'rgb(64,180,230)',
                'rgb(187,217,234)'

            ]}
      ]},
    options:{
        responsive: true,
        maintainAspectRatio: false,
        legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks : {
                        max : 5,    
                        min : 100
                    },
                    display: false,
                     
                        }],
                yAxes: [{
                    display: true
                        }],
                    }
        }

    });

var ctx2 = document.getElementById('myChart2');
var stackedBar = new Chart(ctx2, {
    type: 'horizontalBar',
    data: {
   	labels: [responsecountry['data'][0]['title_short'].substring(0,10), responsecountry['data'][1]['title_short'].substring(0,10), responsecountry['data'][2]['title_short'].substring(0,10), responsecountry['data'][3]['title_short'].substring(0,10), responsecountry['data'][4]['title_short'].substring(0,10),responsecountry['data'][5]['title_short'].substring(0,10), responsecountry['data'][6]['title_short'].substring(0,10), responsecountry['data'][7]['title_short'].substring(0,10), responsecountry['data'][8]['title_short'].substring(0,10), responsecountry['data'][9]['title_short'].substring(0,10)],
      datasets: [
        {
          label: "Popularity",
          backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
          data: [Math.round(responsecountry['data'][0]['rank']/10000),Math.round(responsecountry['data'][1]['rank']/10000),Math.round(responsecountry['data'][2]['rank']/10000),Math.round(responsecountry['data'][3]['rank']/10000),Math.round(responsecountry['data'][4]['rank']/10000),Math.round(responsecountry['data'][5]['rank']/10000),Math.round(responsecountry['data'][6]['rank']/10000),Math.round(responsecountry['data'][7]['rank']/10000),Math.round(responsecountry['data'][8]['rank']/10000),Math.round(responsecountry['data'][9]['rank']/10000)],
       backgroundColor: [
                'rgb(227,35,29)',
                'rgb(239,144,123)',
                'rgb(254,221,0)',
                'rgb(215,44,136)',
                'rgb(232,168,204)',
                'rgb(195,210,0)',
                'rgb(228,225,122)',
                'rgb(64,180,230)',
                'rgb(187,217,234)'

            ]}
      ]},
		options:{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    ticks : {
                        max : 5,    
                        min : 100
                    },
                    display: false,
                     
                        }],
                yAxes: [{
                    display: true
                        }],
                    }
        }

    });

//     var ctx3 = document.getElementById('myChart3');
// var stackedBar = new Chart(ctx3, {
//     type: 'horizontalBar',
//     data: {
//     labels: [responsecountry['data'][0]['title_short'], responsecountry['data'][1]['title_short'], responsecountry['data'][2]['title_short'], responsecountry['data'][3]['title_short'], responsecountry['data'][4]['title_short'],responsecountry['data'][5]['title_short'], responsecountry['data'][6]['title_short'], responsecountry['data'][7]['title_short'], responsecountry['data'][8]['title_short'], responsecountry['data'][9]['title_short']],
//       datasets: [
//         {
//           label: "Popularity",
//           backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
//           data: [Math.round(responsecountry['data'][0]['rank']/10000),Math.round(responsecountry['data'][1]['rank']/10000),Math.round(responsecountry['data'][2]['rank']/10000),Math.round(responsecountry['data'][3]['rank']/10000),Math.round(responsecountry['data'][4]['rank']/10000),Math.round(responsecountry['data'][5]['rank']/10000),Math.round(responsecountry['data'][6]['rank']/10000),Math.round(responsecountry['data'][7]['rank']/10000),Math.round(responsecountry['data'][8]['rank']/10000),Math.round(responsecountry['data'][9]['rank']/10000)],
//        backgroundColor: [
//                 'rgba(185, 0, 0, 0.5)',
//                 'rgba(185, 128, 0, 0.5)',
//                 'rgba(185, 185, 0, 0.5)',
//                 'rgba(128, 185, 0, 0.5)',
//                 'rgba(0, 185, 128, 0.5)',
//                 'rgba(0, 128, 185, 0.5)',
//                 'rgba(0, 0, 185, 0.5)',
//                 'rgba(127, 0, 165, 0.5)',
//                 'rgba(185, 0, 165, 0.5)',
//                 'rgba(102, 0, 52, 0.5)'

//             ]}
//       ]},
//         options:{
//             legend: {
//                 display: false
//             },
//             scales: {
//                 xAxes: [{
//                     ticks : {
//                         max : 70,    
//                         min : 100
//                     },
//                     display: false,
                     
//                         }],
//                 yAxes: [{
//                     display: true
//                         }],
//                     }
//         }

//     });