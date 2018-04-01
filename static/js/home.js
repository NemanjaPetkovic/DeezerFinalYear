//--******************** KOOLCHART WORDCLOUD IMPLEMENTATION ********************

var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";

KoolChart.create("chartKool", "chartHolder", chartVars, "100%", "90%");

function chartReadyHandler(id) {
  document.getElementById(id).setLayout(layoutStr);
  document.getElementById(id).setData(makeData());
  setTimeout(changeData, 3000);
}

var layoutStr =
  '<KoolChart backgroundColor="white"  borderStyle="none" fontFamily="Verdana">'
   +'<Options>'
   +'</Options>'
   +'<WordCloudChart showDataTips="true">'
    +'<series>'
     +'<WordCloudSeries textField="text" weightField="weight">'
      +'<showDataEffect>'
       +'<SeriesInterpolate duration="1000"/>'
      +'</showDataEffect>'
      +'<fills>'
       +'<SolidColor color="#B81700"/>'
       +'<SolidColor color="#EC671C"/>'
       +'<SolidColor color="#2A6321"/>'
       +'<SolidColor color="#162737"/>'
       +'<SolidColor color="#592F74"/>'
       +'<SolidColor color="#ABDBE5"/>'
      +'</fills>'
     +'</WordCloudSeries>'
    +'</series>'
   +'</WordCloudChart>'
  +'</KoolChart>';

  function httpGet(url)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
}
urlgenre = 'https://api.deezer.com/genre/0/artists';
var genreresponse = httpGet(urlgenre)

 function makeData(){
  var i, n,
   chartData = [],
   data = [genreresponse['data'][0]['name'],genreresponse['data'][1]['name'],genreresponse['data'][2]['name'],genreresponse['data'][3]['name'],genreresponse['data'][4]['name'],genreresponse['data'][5]['name'],genreresponse['data'][6]['name'],genreresponse['data'][7]['name'],genreresponse['data'][8]['name'],genreresponse['data'][9]['name'],genreresponse['data'][10]['name'],genreresponse['data'][11]['name'],genreresponse['data'][12]['name'],genreresponse['data'][13]['name'],genreresponse['data'][14]['name'],genreresponse['data'][15]['name'],genreresponse['data'][16]['name'],genreresponse['data'][17]['name'],genreresponse['data'][18]['name'],genreresponse['data'][19]['name'],genreresponse['data'][20]['name'],genreresponse['data'][21]['name'],genreresponse['data'][22]['name'],genreresponse['data'][23]['name'],genreresponse['data'][24]['name'],genreresponse['data'][25]['name'],genreresponse['data'][26]['name'],genreresponse['data'][27]['name'],genreresponse['data'][28]['name'],genreresponse['data'][29]['name']];

  for(i = 0, n = data.length ; i < n ; i += 1){
   chartData.push({
    text : data[i],
    weight : Math.floor(Math.random(10) * 100)
   });
  }
  return chartData;
 };

function changeData(){
  document.getElementById("chartKool").setData(makeData());
  setTimeout(changeData, 5000);
 }



