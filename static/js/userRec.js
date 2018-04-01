DZ.getLoginStatus(function(response){
  id = response.userID;
  token = response.authResponse.accessToken;
  console.log(token);

var url = 'https://api.deezer.com/user/' + id +'/history&access_token='+ token;
var url1 = 'https://api.deezer.com/user/' + id +'/tracks';
var urlUser = 'https://api.deezer.com/user/' + id;
var urlUserFollowings = 'https://api.deezer.com/user/' + id +'/followings';
var urlUserFollowers = 'https://api.deezer.com/user/' + id +'/followers';
var urlDateJoined = 'https://api.deezer.com/user/' + id + '&access_token='+ token;
var urlTrackRec1 = 'https://api.deezer.com/user/' + id +' /recommendations/tracks/&access_token'+token;

function httpGet(url)
	{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", url, false ); 
    xmlHttp.send( null );
    return JSON.parse(xmlHttp.response);
}

var apiresponse = httpGet(url)
var tracksresponse = httpGet(url1)
var apiUserName = httpGet(urlUser)
var apiUserFollowings = httpGet(urlUserFollowings)
var apiUserFollowers = httpGet(urlUserFollowers)
var apiDateJoined = httpGet(urlDateJoined)
var apiTrackRec1 = httpGet(urlTrackRec1)

document.getElementById("UserName").innerHTML  += apiUserName['name'].substring(0,8);
document.getElementById("UserFollowings").innerHTML  = apiUserFollowings['total'];
document.getElementById("UserFollowers").innerHTML  = apiUserFollowers['total'];
document.getElementById("DateJoined").innerHTML  = apiDateJoined['inscription_date'];

//******************** API CALL FOR TRACK RECOMMENDATION ********************-->  

DZ.api('/user/me/recommendations/tracks', function(response){
  var  RankRecText = [];
    for (var i = 0; i <4; i++) {
      var  TrackRec = response.data[i].album.cover_big;
      var  TrackRecText = response.data[i].title;
      var  ArtistRecText = response.data[i].artist.name;
      RankRecText.push(response.data[i].rank); 

      document.getElementById("trackrecsRow1").innerHTML += "<div class='col-md-3'><img class='user_img_tracks' src='"+TrackRec+"' style='width:100%'></img></div>";
      document.getElementById("trackrecsRow2").innerHTML += "<div class='col-md-3'><h2  class='trackRecText' style='font-size: 18px; color: #02B5C8'><b>"+TrackRecText+" </b></h2></div>";
      document.getElementById("artistrecsRow3").innerHTML += "<div class='col-md-3'><h2 class='artistRecText' style='font-size: 16px; color: #162737'>"+ArtistRecText+"</h2></div>";
      document.getElementById("chartGuage").innerHTML += "<div class='col-md-3'><div id='chartGuage"+i+"' class='RankRecText' style='font-size: 20px; text-align: center'></div></div>";
}
  var j = new JustGage({
    id: "chartGuage0",
    value: (RankRecText[0]/10000),
    min: 0,
    max: 100,
    title: "Popularity",
    pointer: true,
    symbol: '%',
  });
  var k = new JustGage({
    id: "chartGuage1",
    value: (RankRecText[1]/10000),
    min: 0,
    max: 100,
    title: "Popularity",
    pointer: true,
    symbol: '%'
  });
  var l = new JustGage({
    id: "chartGuage2",
    value: (RankRecText[2]/10000),
    min: 0,
    max: 100,
    title: "Popularity",
    pointer: true,
    symbol: '%'
  });
  var m = new JustGage({
    id: "chartGuage3",
    value: (RankRecText[3]/10000),
    min: 0,
    max: 100,
    title: "Popularity",
    pointer: true,
    symbol: '%'
  });
})

DZ.api('/user/me', function(response){
  var  UserPicture = response.picture_big;

  document.getElementById("UserPictureIMG").innerHTML += "<img class='user_img_tracks userImage' src='"+UserPicture+"'></img>";
})

//******************** API CALL FOR PLAYLIST RECOMMENDATION ********************-->  

DZ.api('/user/me/recommendations/playlists', function(response){
  var  PlaylistRec0 = response.data[0].picture_xl;
  var  PlaylistRec1 = response.data[1].picture_xl;
  var  PlaylistRec2 = response.data[2].picture_xl;
  var  PlaylistRec3 = response.data[3].picture_xl;
  var  PlaylistRec4 = response.data[4].picture_xl;

  var  PlaylistRecLink0 = response.data[0].link;
  var  PlaylistRecLink1 = response.data[1].link;
  var  PlaylistRecLink2 = response.data[2].link;
  var  PlaylistRecLink3 = response.data[3].link;
  var  PlaylistRecLink4 = response.data[4].link;

  document.getElementById("RecPlaylistOuter0").innerHTML += "<a href ='"+PlaylistRecLink0+"'><img class='user_img_playlist playlistCarousel' src='"+PlaylistRec0+"' href ='"+PlaylistRec0+"'></img></a>";
  document.getElementById("RecPlaylist0").style.backgroundImage="url('"+PlaylistRec0+"')";

  document.getElementById("RecPlaylistOuter1").innerHTML += "<a href ='"+PlaylistRecLink1+"'><img class='user_img_playlist playlistCarousel' src='"+PlaylistRec1+"' href ='"+PlaylistRec1+"'></img></a>";
  document.getElementById("RecPlaylist1").style.backgroundImage="url('"+PlaylistRec1+"')";

  document.getElementById("RecPlaylistOuter2").innerHTML += "<a href ='"+PlaylistRecLink2+"'><img class='user_img_playlist playlistCarousel' src='"+PlaylistRec2+"' href ='"+PlaylistRec2+"'></img></a>";
  document.getElementById("RecPlaylist2").style.backgroundImage="url('"+PlaylistRec2+"')";

  document.getElementById("RecPlaylistOuter3").innerHTML += "<a href ='"+PlaylistRecLink3+"'><img class='user_img_playlist playlistCarousel' src='"+PlaylistRec3+"' href ='"+PlaylistRec3+"'></img></a>";
  document.getElementById("RecPlaylist3").style.backgroundImage="url('"+PlaylistRec3+"')";

  document.getElementById("RecPlaylistOuter4").innerHTML += "<a href ='"+PlaylistRecLink4+"'><img class='user_img_playlist playlistCarousel' src='"+PlaylistRec4+"' href ='"+PlaylistRec4+"'></img></a>";
  document.getElementById("RecPlaylist4").style.backgroundImage="url('"+PlaylistRec4+"')";
})

//******************** API CALL FOR ARTIST RECOMMENDATION ********************-->  

DZ.api('/user/me/recommendations/artists', function(response){
  var  ArtistLightbox0 = response.data[0].picture_xl;
  var  ArtistLightbox1 = response.data[1].picture_xl;
  var  ArtistLightbox2 = response.data[2].picture_xl;
  var  ArtistLightbox3 = response.data[3].picture_xl;
  var  ArtistLightbox4 = response.data[4].picture_xl;
  var  ArtistLightbox5 = response.data[5].picture_xl;
  var  ArtistLightbox6 = response.data[6].picture_xl;
  var  ArtistLightbox7 = response.data[7].picture_xl;

  var i = Math.floor(Math.random()*8)+1;
  var  ArtistPlayer = [response.data[i].id];

  var  ArtistName0 = response.data[0].name;
  var  ArtistName1 = response.data[1].name;
  var  ArtistName2 = response.data[2].name;
  var  ArtistName3 = response.data[3].name;
  var  ArtistName4 = response.data[4].name;
  var  ArtistName5 = response.data[5].name;
  var  ArtistName6 = response.data[6].name;
  var  ArtistName7 = response.data[7].name;

  document.getElementById("RecArtist0").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox0+"' href ='"+ArtistLightbox0+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName0+"'></img>";
  document.getElementById("RecArtist1").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox1+"' href ='"+ArtistLightbox1+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName1+"'></img>";
  document.getElementById("RecArtist2").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox2+"' href ='"+ArtistLightbox2+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName2+"'></img>";
  document.getElementById("RecArtist3").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox3+"' href ='"+ArtistLightbox3+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName3+"'></img>";
  document.getElementById("RecArtist4").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox4+"' href ='"+ArtistLightbox4+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName4+"'></img>";
  document.getElementById("RecArtist5").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox5+"' href ='"+ArtistLightbox5+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName5+"'></img>";
  document.getElementById("RecArtist6").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox6+"' href ='"+ArtistLightbox6+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName6+"'></img>";
  document.getElementById("RecArtist7").innerHTML += "<img class='user_img_artist zoom artistLightbox' src='"+ArtistLightbox7+"' href ='"+ArtistLightbox7+"' data-toggle='tooltip' data-placement='top' title='"+ArtistName7+"'></img>";

  document.getElementById("playerData").innerHTML += "<iframe style='width: 16.73%;' scrolling='no' frameborder='0' allowTransparency='true' src='https://www.deezer.com/plugins/player?format=square&autoplay=false&width=250&height=250playlist=false&color=008aff&layout=dark&size=big&type=artist&id="+ ArtistPlayer+"&app_id=253822' width='250' height='250' </iframe>";  
})

//******************** API CALL FOR FRIENDS TRACKS ********************-->  

var  FriendsName = [];

DZ.api('/user/me/followings', function(response){
  var  FriendsTotal = response.total;
  var  SelectRandFriend = Math.floor(Math.random()*FriendsTotal);
  var  Friendsid = response.data[SelectRandFriend].id;
  var  FriendsName = response.data[SelectRandFriend].name;

  DZ.api('/user/'+Friendsid+'/flow', function(response){
    var  FriendsSong0 = response.data[0].artist.picture_xl;
    var  FriendsSong1 = response.data[1].artist.picture_xl;
    var  FriendsSong2 = response.data[2].artist.picture_xl;
    var  FriendsSong3 = response.data[3].artist.picture_xl;
    var  FriendsSong4 = response.data[4].artist.picture_xl;

    var  FriendsSongTitle0 = response.data[0].title;
    var  FriendsSongTitle1 = response.data[1].title;
    var  FriendsSongTitle2 = response.data[2].title;
    var  FriendsSongTitle3 = response.data[3].title;
    var  FriendsSongTitle4 = response.data[4].title;

    var  FriendsSongArtist0 = response.data[0].artist.name;
    var  FriendsSongArtist1 = response.data[1].artist.name;
    var  FriendsSongArtist2 = response.data[2].artist.name;
    var  FriendsSongArtist3 = response.data[3].artist.name;
    var  FriendsSongArtist4 = response.data[4].artist.name;

    document.getElementById("RandomFriend").innerHTML += "<p style = ' font-size: 20px; font-family: Verdana; color: #E72D63; display: inline-block; '>" +FriendsName+ "</p><p style = 'font-size: 20px; font-family: Verdana; display: inline-block'>'s favorite tracks</P>";

    document.getElementById("FriendsMusicOuter1").innerHTML += "<a href =''><div class='carousel-caption'><h3 class='h3-responsive'>"+FriendsSongTitle0+"</h3><p>"+FriendsSongArtist0+"</p></div><img class='user_img_playlist friendCarousel' src='"+FriendsSong0+"' href =''></img></a>";
    document.getElementById("FriendsMusic1").style.backgroundImage="url('"+FriendsSong0+"')";

    document.getElementById("FriendsMusicOuter2").innerHTML += "<a href =''><div class='carousel-caption'><h3 class='h3-responsive'>"+FriendsSongTitle1+"</h3><p>"+FriendsSongArtist1+"</p></div><img class='user_img_playlist friendCarousel' src='"+FriendsSong1+"' href ='' ></img></a>";
    document.getElementById("FriendsMusic2").style.backgroundImage="url('"+FriendsSong1+"')";

    document.getElementById("FriendsMusicOuter3").innerHTML += "<a href =''><div class='carousel-caption'><h3 class='h3-responsive'>"+FriendsSongTitle2+"</h3><p>"+FriendsSongArtist2+"</p></div><img class='user_img_playlist friendCarousel' src='"+FriendsSong2+"' href ='' ></img></a>";
    document.getElementById("FriendsMusic3").style.backgroundImage="url('"+FriendsSong2+"')";

    document.getElementById("FriendsMusicOuter4").innerHTML += "<a href =''><div class='carousel-caption'><h3 class='h3-responsive'>"+FriendsSongTitle3+"</h3><p>"+FriendsSongArtist3+"</p></div><img class='user_img_playlist friendCarousel' src='"+FriendsSong3+"' href ='' ></img></a>";
    document.getElementById("FriendsMusic4").style.backgroundImage="url('"+FriendsSong3+"')";

    document.getElementById("FriendsMusicOuter5").innerHTML += "<a href =''><div class='carousel-caption'><h3 class='h3-responsive'>"+FriendsSongTitle4+"</h3><p>"+FriendsSongArtist4+"</p></div><img class='user_img_playlist friendCarousel' src='"+FriendsSong4+"' href ='' ></img></a>";
    document.getElementById("FriendsMusic5").style.backgroundImage="url('"+FriendsSong4+"')";
    })
  })
})