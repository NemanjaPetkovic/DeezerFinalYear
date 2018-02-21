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

function changeData(){
  document.getElementById("chartKool").setData(makeData());
  setTimeout(changeData, 5000);
 }