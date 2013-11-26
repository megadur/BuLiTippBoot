/* AT Internet Video Tracking in den TOP TEASERN */

var streamTime = 0;
var xtVideoName = '';
var isTopTeaser = 0;

function replaceUmlauts(mystring){
  var anArray = new Array(2);
  anArray[0] = new Array("&Ouml;", "&ouml;", "&Auml;", "&auml;", "&Uuml;", "&uuml;", "ß", "&szlig;", "&#223;", "<br />", "<br>", " ", "&quot;", "'", "\"", "%DC", "%FC", "%D6", "%F6", "%C4", "%E4", "Ü", "ü", "Ö", "ö", "Ä", "ä", "?");
  anArray[1] = new Array("Oe", "oe", "Ae", "ae", "Ue", "ue", "ss", "ss", "ss", "_", "_", "_", "", "", "", "Ue", "ue", "Oe", "oe", "Ae", "ae", "Ue", "ue", "Oe", "oe", "Ae", "ae", "");
  for (var i=0; i<anArray[0].length; i++){
    mystring = mystring.split(anArray[0][i]).join(anArray[1][i]);    
  }
  return mystring;
}

function setStreamDataTeaser(streamlength,vname) {
  streamTime = streamlength;
  if (vname != "") { xtVideoName = replaceUmlauts(vname); }
  else { xtVideoName = "Artikel_Video"; }
  xtVideoName = 'Video::' + xtVideoName;
  if (isTopTeaser == 1) { xtVideoName = 'TopTeaser::' + xtVideoName; }
  else { xtVideoName = 'VideoBox::' + xtVideoName; }
  //alert("Sekunden: "+streamTime+", Name: "+xtVideoName);
  setXTClickVideoTeaser('play');
  isTopTeaser = 0;
}

function setXTAdCallDataVideoBox() {
  var xtVideoCall = 'VideoAdCall::VideoBox';
  //alert("xtclick_videoAdCall_Aktionsklick Name: "+xtVideoCall);
  xt_click(this,'C',level2id,xtVideoCall,'A');
}

function setXTAdCallDataTeaser() {
  isTopTeaser = 1;
  var xtVideoCall = 'VideoAdCall::TopTeaser';
  //alert("xtclick_videoAdCall_Aktionsklick Name: "+xtVideoCall);
  xt_click(this,'C',level2id,xtVideoCall,'A');
}

function setXTClickVideoTeaser(action) {
  
  //alert("xtclick_video Sek: " + streamTime + ", Action: "+ action + ", VideoName: "+xtVideoName);
  
  // Video Parameter
  var A = 'video&plyr=1';     // Inhaltsart und welcher Player (video, audio, animation, vpost)
  var B = level2id;           // Level2 ID
  var C = xtVideoName;        // Bezeichnung xtpage (bei vpost keine :: verwenden)
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
  xt_rm(A,B,C,D,E,F,G,H,I,J,K,L,M,N);    
}