var chartVars = "KoolOnLoadCallFunction=chartReadyHandler";

KoolChart.create("chartKool", "chartHolder", chartVars, "90%", "90%");

function chartReadyHandler(id) {
  document.getElementById(id).setLayout(layoutStr);
  document.getElementById(id).setData(makeData());
  setTimeout(changeData, 3000);
}

var layoutStr =
  '<KoolChart backgroundColor="white"  borderStyle="none" fontFamily="Noto Sans">'
   +'<Options>'
   +'</Options>'
   +'<WordCloudChart showDataTips="true">'
    +'<series>'
     +'<WordCloudSeries textField="text" weightField="weight">'
      +'<showDataEffect>'
       +'<SeriesInterpolate duration="1000"/>'
      +'</showDataEffect>'
      +'<fills>'
       +'<SolidColor color="#5586a4"/>'
       +'<SolidColor color="#40b2e6"/>'
       +'<SolidColor color="#ffa123"/>'
       +'<SolidColor color="#595c7b"/>'
       +'<SolidColor color="#ef8075"/>'
       +'<SolidColor color="#f8ba03"/>'
       +'<SolidColor color="#03b79a"/>'
       +'<SolidColor color="#a5d4e6"/>'
       +'<SolidColor color="#b79d7c"/>'
       +'<SolidColor color="#9e589e"/>'
      +'</fills>'
     +'</WordCloudSeries>'
    +'</series>'
   +'</WordCloudChart>'
  +'</KoolChart>';

function changeData(){
  document.getElementById("chartKool").setData(makeData());
  setTimeout(changeData, 5000);
 }