var ersterAufruf = true;
var currVideoPath = '';
var searchThis = '';

var stopClicked = 0;
var streamTime = 0;
var isPlaying = 0;
var playListCount = 0;
var TVRubrik = '';
var trackXTforPlaylist = 0;

/**
 * Aus der aktuellen URL die Rubrik des Videos ermitteln
 */
function getTvArea() {
    var result = "Aktuell";
    // Pfad ermitteln und aufsplitten
    var path = window.location.pathname;
    var pathParts = path.split("/");
    if (pathParts.length < 2)
        return result;
    //Dateiname entfernen (letztes Element)
    pathParts.pop();
    //Kategorie auslesen (vorletztes Element)
    var category = pathParts.pop();

    switch(category) {
        case "spieltag":
            result = 'Spieltag';
            break;
        case "highlights":
            result = 'Highlights';
            break;
        case "vorschau":
            result = 'Vorschau';
            break;
        case "interview":
            result = 'Interview';
            break;
        case "hintergrund":
            result = 'Hintergrund';
            break;
        case "dfl":
            result = 'DFL';
            break;
        case "historie":
            result = 'Historie';
            break;
        case "partner":
            result = 'Partner';
            break;
        default:
            result = 'Aktuell';
    }
    return result;
}

/*
 * Anhand der moeglicherweise eingeblendeten Wappen wird die ID der beiden Vereine
 * ermittelt und in den passenden Lettercode umgewandelt.
 *
 * @returns {string} Format XXX_YYY_ oder ''
 */
function getMatchtitle(){
    var result = '';
    $('#wappen img').each(function(){
        matches = $(this).attr('src').match(/(.*)\/([0-9]+)\.png$/);
        if (typeof(matches[2]) !== "undefined")
            result += getClubShortName(matches[2])+'_';
    });
    return result;
}

/*
 * Anhand der ID eines Vereins wird der passenden Lettercode gesucht.
 *
 * @param {string} clubID die ID des Clubs dessen Lettercode ermittelt werden soll
 * @returns {string} Dreistelliger Lettercode bzw. ''
 */
function getClubShortName(clubID){
    clubName = '';
    $.each(teamsBL, function(index,value){
        if(value['id'] == clubID){
            clubName = value['lettercode'];
            return false;
        }

    });
    if(clubName == ''){
        $.each(teamsBL2, function(index,value){
            if(value['id'] == clubID){
                clubName = value['lettercode'];
                return false;
            }
        });
    }
    return clubName;
}

function replaceUmlauts(mystring){
  var anArray = new Array(2);
  anArray[0] = new Array("Ö", "ö", "Ä", "ä", "Ü", "ü", "ß", " ", "\"", "'");
  anArray[1] = new Array("Oe", "oe", "Ae", "ae", "Ue", "ue", "ss", "_", "", "");
  for (var i=0; i<anArray[0].length; i++){
    mystring = mystring.split(anArray[0][i]).join(anArray[1][i]);
  }
  return mystring;
}

function setStreamData(streamlength) {
  streamTime = streamlength;
  setXTClickVideo('play');
}

function setXTAdCallData() {
  tmpisPlaying = isPlaying; // Alten Status merken
  onPlayVideo('sliderVideo'+currentSlider);
  
  // ACHTUNG Normalerweise sollte verhindert werden, dass Werbung unterbrochen wird, 
  // allerdings wird diese Funktion auch nach dem Abspielen des Videos getriggert 
  // (wahrscheinlich Postroll), sodass dieser Wert immer gesetzt sein wuerder. 
  // Deshalb erst mal auskommeniert
  
  // Wenn der alte Status false ist, dann ist das Video zu Ende (onStopVideo wurde bereits getriggert)
  // und es wird versucht die Postroll zu laden. Dann also wieder in den Nicht-Abspielmodus wechseln.
  if (tmpisPlaying === 1 || tmpisPlaying === false) {
    isPlaying = 0;
  } else {
    isPlaying = 1;
  }

  var videoCallTitle = replaceUmlauts($(".title").html());
  var videoCall = 'VideoAdCall::'+videoCallTitle;
  //alert("xtclick_videoAdCall_Aktionsklick Name: "+videoCall);
  return xt_click(this,'C',level2id,videoCall,'A');
}

function setXTClickVideo(action) {
    if (action=="play") { onPlayVideo('sliderVideo'+currentSlider); }
    else { onStopVideo('sliderVideo'+currentSlider); }

    if (action=="play") { isPlaying = 1;}
    if (action=="stop") { isPlaying = 0; stopClicked = 1; theEnd(); }
    if (action=="specialStop") { isPlaying = 0; stopClicked = 1; action = "stop"; }
    if (trackXTforPlaylist == 1) {
    if (action=="next") { playListCount++; }
    if (action=="prev") { playListCount--; }

  }

  TVRubrik = getTvArea();


  var videoTitle = getMatchtitle() + replaceUmlauts($(".title").html());
  var videoName = TVRubrik + '::Video::'+videoTitle;
  if (playListCount > 0) {
    videoName = TVRubrik + '::Video::'+videoTitle+"_Video" + playListCount;
  }
  if (action == "next" && playListCount > 0) {
    tempCount = playListCount - 1;
    videoName = TVRubrik + '::Video::'+videoTitle+"_Video" + tempCount;
  }
  if (action == "prev" && playListCount > 0) {
    tempCount = playListCount + 1;
    videoName = TVRubrik + '::Video::'+videoTitle+"_Video" + tempCount;
  }
  if (action=="next" || action=="prev") { action = "stop"; ivw_get('/de/bundesliga-tv/index.php'); }
  if (action=="play" && stopClicked == 1) { stopClicked = 0; }

  //alert("xtclick_video Sek: " + streamTime + ", Action: "+ action + ", VideoName: "+videoName);

  // Video Parameter
  var A = 'video&plyr=1';     // Inhaltsart und welcher Player (video, audio, animation, vpost)
  var B = level2id;           // Level2 ID
  var C = videoName;          // Bezeichnung xtpage (bei vpost keine :: verwenden)
  var D = action;             //
  var E = '';                 //
  var F = 0;                  // Refresh-Dauer in Sekunden
  if (action=="play"){F=15;}
  var G = '';                 // Gesamtdauer in Sekunden (leer lassen, wenn L=live)
                              // var G = streamTime; (old version)
  var H = 0;                  // nicht verwendete Variablen
  var I = '';                 // Qualiät des Videos
  var J = '';                 // Streaming Datenrate
  var K = 'int';              // Ort (int oder ext)
  var L = 'live';             // Übertragung (live oder clip)
  var M = '';                 // Größe des Inhalts (leer lassen, wenn L=live)
  var N = '';                 // vordefinierte ATI Kennung (1=22 kHz,2=44 kHz,3=32 kHz,4=70 kHz)

  //Aufruf der AT Internet Funktion
  return xt_rm(A,B,C,D,E,F,G,H,I,J,K,L,M,N);
}

function setCookieHDforTV(){
  var a = document.cookie;
  var expires = new Date();
  var expires_date = expires.getTime() + (1000*60*60*24*365);
  expires.setTime(expires_date);
  if(document.cookie.indexOf("hdfortv") != 1) {
    document.cookie = "hdfortv=1; expires="+expires.toGMTString();
  }
}

function deleteCookieHDforTV() {
  if(document.cookie.indexOf("hdfortv") != -1) {
    document.cookie = "hdfortv=0; expires=Thu, 01-Jan-1970 00:00:01 GMT;"
  }
}

var iphoneSkriptInit = 0;
function showVideoSnippet(aPath,playlist,titel) {

  //XT Click
  streamTime = 0;
  if (isPlaying==1) { setXTClickVideo('specialStop'); }
  if (playlist != undefined) { playListCount = 1; trackXTforPlaylist = 1; }
  else { playListCount = 0; trackXTforPlaylist = 0; }

  if (document.getElementById("videoliste") != null) {
    document.getElementById("videoliste").style.display = "none";
  }
  var p = (aPath != undefined) ? aPath : '';
  p = p.replace('/mediathek/', '/bundesliga-tv/');
  if(p == '') p = currVideoPath;
  if(p == '') return;

  var pelems = p.split('/');
  var pelems2 = pelems[pelems.length-1].split('.');
  var pid = pelems2[0];

  // Wir senden die Parameter über POST
  $("#tv_params").attr('action', p);
  $("#tv_param_playlist").val(playlist);
  $("#tv_param_title").val(titel);
  $("#tv_param_addvars").val('1');
  $("#tv_params").submit();

}

function setRelatedVideos(aPath,playlist,titel) {

  var p = (aPath != undefined) ? aPath : '';
  p = p.replace('/mediathek/', '/bundesliga-tv/');
  if(p == '') p = currVideoPath;
  if(p == '') return;

  var pelems = p.split('/');
  var pelems2 = pelems[pelems.length-1].split('.');
  var pid = pelems2[0];

  if(ersterAufruf) { retrieveURL('/'+language+'/bundesliga-tv/relatedvideos.php?language='+language+'&pageid='+pid+'&pagepath='+p, 'tv_related', '', '', 'false'); }
  else { retrieveURL('/'+language+'/bundesliga-tv/relatedvideos.php?language='+language+'&pageid='+pid+'&pagepath='+p, 'tv_related', '', '', 'true'); }

  ersterAufruf = false;
  currVideoPath = p;
  iphoneSkriptInit++;
  if (iphoneSkriptInit > 1) {
    window.setTimeout("ATMedia.init('VIDEO','AUDIO')", 1800);
  }
}

function darkenIt() {
  document.getElementById('overlay').style.display = "block";
  document.getElementById('overlay2').style.display = "block";
  document.getElementById('overlay3').style.display = "block";
  document.getElementById('overlay4').style.display = "block";
  document.getElementById('bl_logo').style.display = "block";
  document.getElementById('tv_movie').style.zIndex = "10000";
  document.getElementById('videoliste').style.zIndex = "10001";
  document.getElementById('navigation').style.zIndex = "1";
}

function setSearchThis() {
  searchThis = document.getElementById('searchthis').value;
}

function lightIt() {
  document.getElementById('overlay').style.display = "none";
  document.getElementById('overlay2').style.display = "none";
  document.getElementById('overlay3').style.display = "none";
  document.getElementById('overlay4').style.display = "none";
  document.getElementById('bl_logo').style.display = "none";
  //document.getElementById('tv_movie').style.zIndex = "0";
  //document.getElementById('videoliste').style.zIndex = "1";
  document.getElementById('navigation').style.zIndex = "201";
}

function showDiv(divName) {
  if (divName == "front") {
    //document.getElementById("back").style.display = "none";
    document.getElementById("front").style.display = "block";
    document.getElementById("what").style.display = "none";
  } else {
    //document.getElementById("back").style.display = "block";
    document.getElementById("front").style.display = "none";
    document.getElementById("what").style.display = "none";
  }
}

function changeBlock(nr,count) {
  var newcount = count + 1;
  for(var i= 1; i < newcount; i++) {
    var temp = 10 + i;
    var temp2 = "pager" + i;
    if (i == nr) {
      var minus = nr - 1;
      var plus = nr + 1;
      document.getElementById("videopage"+temp).style.display = "block";
      document.getElementById(temp2).style.color = "#c80000";
      if (minus == 0) { document.getElementById("pfeill").innerHTML = '<div class="page_pfeil" id="pager0" style="cursor: pointer;"></div>'; }
      else { document.getElementById("pfeill").innerHTML = '<div class="page_pfeil" id="pager0" onclick="javascript:changeBlock('+minus+','+count+');" style="cursor: pointer;"></div>'; }
      if (plus == count) { document.getElementById("pfeilr").innerHTML = '<div class="page" id="pager'+count+'" style="cursor: pointer;"></div>'; }
      else { document.getElementById("pfeilr").innerHTML = '<div class="page" id="pager'+count+'" onclick="javascript:changeBlock('+plus+','+count+');" style="cursor: pointer;"></div>'; }
    } else {
      if (i!=count) {
      document.getElementById("videopage"+temp).style.display = "none";
      document.getElementById(temp2).style.color = "black";
      }
    }
  }
  if (nr>=3) {
    faktor = ((nr-1) * 40) - 80;
  } else {
    faktor = 0;
  }
  document.getElementById("pageNummern").style.marginLeft = "-" + faktor + "px";
}


function changediv(nr,count) {
  var newcount = count + 1;
  for(var i= 1; i < newcount; i++) {
    var temp = 10000 + i;
    var temp2 = "pagerspan" + i;
    if (i == nr) {
      var minus = nr - 1;
      var plus = nr + 1;
      document.getElementById(temp).style.display = "block";
      document.getElementById(temp2).style.color = "#c80000";
      if (minus == 0) { document.getElementById("pfeillinks").innerHTML = '<div class="page" id="pagerspan0" style="cursor: pointer;"></div>'; }
      else { document.getElementById("pfeillinks").innerHTML = '<div class="page" id="pagerspan0" onclick="javascript:changediv('+minus+','+count+');" style="cursor: pointer;"></div>'; }
      if (plus == count) { document.getElementById("pfeilrechts").innerHTML = '<div class="page" id="pagerspan'+count+'" style="cursor: pointer;"></div>'; }
      else { document.getElementById("pfeilrechts").innerHTML = '<div class="page" id="pagerspan'+count+'" onclick="javascript:changediv('+plus+','+count+');" style="cursor: pointer;"></div>'; }
    } else {
      if (i!=count) {
      document.getElementById(temp).style.display = "none";
      document.getElementById(temp2).style.color = "white";
      }
    }
  }
  if (nr>=3) {
    faktor = ((nr-1) * 40) - 80;
  } else {
    faktor = 0;
  }
  document.getElementById("pageNummernRelated").style.marginLeft = "-" + faktor + "px";
}


function theEnd() {
    var video1 = $("#area_artikelbild_ng #altContent");
    if (video1.length > 0) {
        // Artikel-Video: hier das Flash-Objekt neu initialisieren

        // Die flashvars extrahieren
        var values = video1.find("param[name=flashvars]").attr("value");
        // Autoplay abschalten
        values = values.replace(new RegExp("autostart%3Dtrue", "g"), "autostart%3Dfalse");
        var queryString = {};
        values.replace(
            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
            function($0, $1, $2, $3) { queryString[$1] = $3; }
        );

        // Mit SWFObject einbinden
        var flashvars = queryString;
        var params = {
            menu: "false",
            scale: "noScale",
            wmode: "transparent",
            allowFullscreen: "true",
            allowScriptAccess: "always"
        };
        var attributes = {
            id: "altContent"
        };
        swfobject.embedSWF(
            "/flash/vplayer/vplayer_small.swf",
            "altContent",
            "692",
            "389",
            "9.0.0",
            "expressInstall.swf",
            flashvars,
            params,
            attributes
        );
    } else {
        //lightIt();
        document.getElementById("movie").style.display = "none";
        document.getElementById("theend").style.display = "block";
        document.getElementById("videoliste").style.display = "block";
        document.getElementById("videoliste").style.bottom = "85px";
        document.getElementById("socialmarks").style.display = "none";
        if (document.getElementById("hdtvBt") != null) { document.getElementById("hdtvBt").style.display = "none"; }
        document.getElementById("videosBt").style.backgroundPosition = "0 -23px";
    }
}

function theStart() {
  document.getElementById("movie").style.display = "block";
  document.getElementById("theend").style.display = "none";
  document.getElementById("videoliste").style.display = "none";
  document.getElementById("videoliste").style.bottom = "106px";
  document.getElementById("socialmarks").style.display = "block";
  if (document.getElementById("hdtvBt") != null) { document.getElementById("hdtvBt").style.display = "block"; }
  document.getElementById("videosBt").style.backgroundPosition = "0 0";
}

function openWeiter(popit) {
  what = "https://www.bundesliga.de/de/popup_sendto.php?refurl=/de/bundesliga-tv/?f="+popit;
  fenster = window.open(what, "weiterempfehlen", "width=660,height=530,status=no,scrollbars=no,resizable=no");
  fenster.focus();
}

function openVZ(siteurl,vtitle) {
  what = "http://www.studivz.net/Link/Share/?url="+siteurl+"&description=Bundesliga-TV&title="+vtitle;
  fenster = window.open(what, "studiVZ", "width=600,height=530,status=no,scrollbars=yes,resizable=no");
  fenster.focus();
}

function openTweet(siteurl,vtitle) {
  what = "http://twitter.com/share?url="+siteurl;
  fenster = window.open(what, "twitter", "width=600,height=530,status=no,scrollbars=yes,resizable=no");
  fenster.focus();
}

function openFace(siteurl,vtitle) {
  what = "http://www.facebook.com/sharer.php?u="+siteurl+"&t="+vtitle;
  fenster = window.open(what, "facebook", "width=600,height=530,status=no,scrollbars=no,resizable=no");
  fenster.focus();
}

function show_more(types) {
  document.getElementById("videoliste").style.bottom = "106px";
  document.getElementById("videoliste").style.display = "block";
  document.getElementById("videosBt").style.backgroundPosition = "0 -23px";
}

function hide_more(types) {
  document.getElementById("videoliste").style.display = "none";
  document.getElementById("videosBt").style.backgroundPosition = "0 0";
}

function setReiter(reiter) {
  switch (reiter) {
    case 1: TVRubrik = 'Aktuell'; break;
    case 2: TVRubrik = 'Spieltag'; break;
    case 3: TVRubrik = 'Stars'; break;
    case 4: TVRubrik = 'Insider'; break;
    case 5: TVRubrik = 'Historie'; break;
    case 6: TVRubrik = 'Vereine'; break;
    case 7: TVRubrik = 'Partner'; break;
  }
  document.getElementById("reiter1").style.backgroundPosition = "0 0";
  document.getElementById("reiter2").style.backgroundPosition = "-90px 0";
  document.getElementById("reiter3").style.backgroundPosition = "-190px 0";
  document.getElementById("reiter4").style.backgroundPosition = "-254px 0";
  document.getElementById("reiter5").style.backgroundPosition = "-329px 0";
  if (!hideclubs) {
    document.getElementById("reiter6").style.backgroundPosition = "-409px 0";
    document.getElementById("reiter7").style.backgroundPosition = "-652px 0";
  }
  if(reiter == 1) { document.getElementById("reiter1").style.backgroundPosition = "0 -32px"; }
  if(reiter == 2) { document.getElementById("reiter2").style.backgroundPosition = "-90px -32px"; }
  if(reiter == 3) { document.getElementById("reiter3").style.backgroundPosition = "-190px -32px"; }
  if(reiter == 4) { document.getElementById("reiter4").style.backgroundPosition = "-254px -32px"; }
  if(reiter == 5) { document.getElementById("reiter5").style.backgroundPosition = "-329px -32px"; }
  if (!hideclubs) {
    if(reiter == 6) { document.getElementById("reiter6").style.backgroundPosition = "-409px -32px"; }
    if(reiter == 7) { document.getElementById("reiter7").style.backgroundPosition = "-652px -32px"; }
  }
}

function getFlashMovie(movieName) {
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    return (isIE || typeof(document[movieName]) == "undefined") ? document.getElementById(movieName) : document[movieName];
}

function sendPlayToFlash(videoId) {
    //document.getElementById(videoId).playInFlash();
    if (typeof(getFlashMovie(videoId).playInFlash) === "function")
        getFlashMovie(videoId).playInFlash();
    else
        $("#" + videoId + " object")[0].playInFlash();
}

function showHidePlayButton(action) {
    if ($("#tv_movie").length > 0) {
        if (document.getElementById("addPlayBtn") == null) {
            $("#tv_movie").append('<div id="addPlayBtn"></div>');
        }
        if ($("#tv_movie #addPlayBtn").html() == "") {
            $("#tv_movie #addPlayBtn").append('<span class="addPlayBtn" onclick="sendPlayToFlash(\'altContent\')"></span>');
            $("#tv_movie #addPlayBtn").show();
            //document.getElementById('altContent').playButtonInfo(true);
            getFlashMovie('altContent').playButtonInfo(true);
        } else {
            $("#tv_movie #addPlayBtn").html('');
            $("#tv_movie #addPlayBtn").hide();
            //document.getElementById('altContent').playButtonInfo(false);
            getFlashMovie('altContent').playButtonInfo(false);
        }
    } else {
        if ($(".topTeaser").length > 0) {
            id = 'sliderVideo' + currentSlider;
        } else {
            id = 'altContent';
        }
        if (document.getElementById("addPlayBtn") == null) {
            $("#" + id).after('<div id="addPlayBtn"></div>');
        }
        if ($("#addPlayBtn").html() == "") {
            $("#addPlayBtn").append('<span class="addPlayBtn" onclick="sendPlayToFlash(\''+id+'\')"></span>');
            $("#addPlayBtn").show();
            getFlashMovie(id).playButtonInfo(true);
        } else {
            $("#addPlayBtn").html('');
            $("#addPlayBtn").hide();
            getFlashMovie(id).playButtonInfo(false);
        }
    }
}
