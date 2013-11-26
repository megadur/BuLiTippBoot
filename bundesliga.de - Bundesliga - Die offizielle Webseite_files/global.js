/* DEBUGGER !!! */
// Eventlistener hinzufügen (onLoad etc.)
function addEvent(obj, evType, func){
  if (obj.addEventListener){
    obj.addEventListener(evType, func, false);
    return true;
  }else if (obj.attachEvent){
    var r = obj.attachEvent("on"+evType, func);
    return r;
  }else {
    return false;
  }
}
function basename(path) {
    return path.replace(/\\/g,'/').replace( /.*\//, '' );
}
function DEBUGGER(){
  /* initialisiert den Debugger */
  var tmp_debug = document.getElementsByTagName('a')[0];
  tmp_debug.className='DEBUGGER';
  tmp_debug.innerHTML ='<h5 style="border-bottom: 1px solid #C80000; text-align:center;"><b>JS DEBUGGER by DN</b></h5>';
}
function DEBUG(value){
  /* DEBUGGER stellt die Inhalte dar */
  var tmp_debug = document.getElementsByTagName('a')[0];
  tmp_debug.innerHTML += value + '<br class="20" /><div style="line-height: 3px; overflow:hidden">&nbsp;</div>';
}
/* addEvent(window, 'load', DEBUGGER); */
<!-- DEBUGGER AUFRUF -->
/*
<script language="Javascript" type="text/javascript">
DEBUGGER();
</script>
*/
<!-- DEBUGGER AUFRUF -->

/* /DEBUGGER !!! */

AJAX_HISTORY = new Array();

/* Vereins-Icons-Leiste
** Definitionen für die Vereins-Icons-Leiste unter dem Header */
/*
vereinsleiste = 1;
vereinsleiste_opposite=2
*/

function check_leiste(){
  if(vereinsleiste == 1){
    vereinsleiste=2;
    vereinsleiste_opposite=1;
  }else{
    vereinsleiste=1;
    vereinsleiste_opposite=2;
  }
  document.getElementById('ligenleiste_go').src='/pics/_buttons/btn_' + vereinsleiste + 'te_bliga.gif';
}
/* /Vereins-Icons-Leiste */


function fenster(url,fenster,params){
  if( url.indexOf('bildergalerie.php') > 0 ) {
    params = 'width=728,height=657';
  } else {
      if (params == null) { params = 'width=950,height=750'; }
    }
  fInstanz = window.open(url,fenster,params);
  fInstanz.focus();
}


/* Preloader für Menue Bilder */
function bilderVorladen(){
  document.Vorladen = new Array();
  if(document.images){
    for(var i = 0; i < bilderVorladen.arguments.length; i++){
      document.Vorladen[i] = new Image();
      document.Vorladen[i].src = bilderVorladen.arguments[i];
    }
  }
}


function phpBlockVisible(bool) {
  if(bool == false) {
    document.getElementById('php_include').style.display='none';
  } else {
    document.getElementById('php_include').style.display='block';
  }
  return false;
}



/***** KARTEIREITER NAVIGATION ******/
if( typeof(ACTIV_INDEX) == 'undefined' ) {
  var ACTIV_INDEX = 0;
}


function setNavOver(num,i)
{
	// Abbrechen da der aktive Link kein MouseOver hat
	if(i == ACTIV_INDEX)
		return;

	if(i > 0)
	{
	  document.getElementById('navRechts_' + (i - 1)).style.display = 'none';
	}

	// es gibt nur einen alleinstehenden Link
	if(num == 1)
	{
    classLinks = 'links_1_einzelnt';
    classText = 'text_1_einzelnt';
    classRechts = 'rechts_1_einzelnt';
	}
  // erster Navipunkt
  else if(i == 0)
 	{
    classLinks = 'links_1_anfang';
    classText = 'text_1_anfang';
    classRechts = 'rechts_1_anfang';
  }
  // letzten Navipunkt ermitteln
  else if(i == (num - 1))
  {
    classLinks = 'links_1_ende';
    classText = 'text_1_ende';
    classRechts = 'rechts_1_ende';
  }
  else
  {
    classLinks = 'links_1';
    classText = 'text_1';
    classRechts = 'rechts_1';
  }

	if(ACTIV_INDEX == (i - 1))
	{
	  classLinks = 'reiter_beide_1';
	}
	else if(ACTIV_INDEX == (i + 1))
	{
	  document.getElementById('navLinks_' + (i + 1)).className = 'reiter_beide_1';
	}

  document.getElementById('navLinks_' + i).className = classLinks;
  document.getElementById('navText_' + i).className = classText;
  document.getElementById('navRechts_' + i).className = classRechts;
}


function setNavOut(num,i)
{
	// Abbrechen da der aktive Link kein MouseOver hat
	if(i == ACTIV_INDEX)
		return;

	if(i > 0)
	{
	  document.getElementById('navRechts_' + (i - 1)).style.display = 'block';
	}

	if(ACTIV_INDEX == (i + 1))
	{
	  document.getElementById('navLinks_' + (i+1)).className = 'links_1';
	}


  // erster Navipunkt
  if(i == 0)
  {
    classLinks = 'links_0_anfang';
    classText = 'text_0_anfang';
    classRechts = ((i+1) == i ? 'reiter_clear' : 'rechts_0_anfang');
  }
  // letzten Navipunkt ermitteln
  else if(i == (num - 1))
  {
    classLinks = 'links_0_ende';
    classText = 'text_0_ende';
    classRechts = ((i+1) == i ? 'reiter_clear' : 'rechts_0_ende');
  }
  else
  {
    classLinks = 'links_0';
    classText = 'text_0';
    classRechts = ((i+1) == i ? 'reiter_clear' : 'rechts_0');
  }

  document.getElementById('navLinks_' + i).className = classLinks;
  document.getElementById('navText_' + i).className = classText;
  document.getElementById('navRechts_' + i).className = classRechts;
}


function setNavActiv(num,newActivIndex)
{

  // erster Navipunkt
  if(ACTIV_INDEX == 0)
  {
    classLinks = 'links_0_anfang';
    classText = 'text_0_anfang';
    classRechts = 'rechts_0_anfang';
  }
  // letzten Navipunkt ermitteln
  else if(ACTIV_INDEX == (num - 1))
  {
    classLinks = 'links_0_ende';
    classText = 'text_0_ende';
    classRechts = 'rechts_0_ende';

    document.getElementById('navRechts_' + (ACTIV_INDEX - 1)).style.display = 'block';
  }
  else
  {
    classLinks = 'links_0';
    classText = 'text_0';
    classRechts = 'rechts_0';

    document.getElementById('navRechts_' + (ACTIV_INDEX - 1)).style.display = 'block';
  }

  document.getElementById('navLinks_' + ACTIV_INDEX).className = classLinks;
  document.getElementById('navText_' + ACTIV_INDEX).className = classText;
  document.getElementById('navRechts_' + ACTIV_INDEX).className = classRechts;


	// es gibt nur einen alleinstehenden Link
	if(num == 1)
	{
    classLinks = 'links_1_einzelnt';
    classText = 'text_1_einzelnt';
    classRechts = 'rechts_1_einzelnt';
	}
  // erster Navipunkt
  else if(newActivIndex == 0)
 	{
    classLinks = 'links_1_anfang';
    classText = 'text_1_anfang';
    classRechts = 'rechts_1_anfang';
  }
  // letzten Navipunkt ermitteln
  else if(newActivIndex == (num - 1))
  {
    classLinks = 'links_1_ende';
    classText = 'text_1_ende';
    classRechts = 'rechts_1_ende';

    document.getElementById('navRechts_' + (newActivIndex - 1)).style.display = 'none';
  }
  else
  {
    classLinks = 'links_1';
    classText = 'text_1';
    classRechts = 'rechts_1';

    document.getElementById('navRechts_' + (newActivIndex - 1)).style.display = 'none';
  }

  document.getElementById('navRechts_' + newActivIndex).style.display = 'block';

  document.getElementById('navLinks_' + newActivIndex).className = classLinks;
  document.getElementById('navText_' + newActivIndex).className = classText;
  document.getElementById('navRechts_' + newActivIndex).className = classRechts;


	// GLOBALE VARIABLE!
	ACTIV_INDEX = newActivIndex;
}

/***** / ENDE : KARTEIREITER NAVIGATION ******/

/* History Back Funktion */
function my_history(){
  history.back();
}

/* Funktion, die einen Artikel in die Spalte unter dem Artikel */
function get_Artikel(myURL) {
  retrieveURL(myURL, 'inhalt');
}

/* Funktion, die einen Artikel in die Spalte unter dem Artikel */
function get_spieler_list(myABC) {
  //alert("myABC: "+myABC+"\n"+"-> global.js -> get_spieler_list("+myABC+")\n\n-> vHtmlPlayersByInitial");
  //retrieveURL(myURL, 'inhalt');
}

/* Diese Funktion versteckt/öffnet die Antworttexte für das
** FAQ-Modul
** show_me = id des zu öffnenden divs
** max = maximale Anzahl der Fragen
*/
function ShowMe(show_me, max)
{
  /* Wir setzten erstmal wieder alles auf HIDDEN */
  for(var i = 1; i <= max; i++)
  {
    var idname = 'area_answer_'+i;
    if (document.getElementById(idname).style)
    { document.getElementById(idname).style.display = 'none'; }
  }
  if (show_me != '')
  { document.getElementById(show_me).style.display = 'block'; }
}

function BreadCrumb(was, wie){
  /*
  ** was -> Neuer Text
  ** wie -> hinzufügen/ersetzen/wiederherstellen
  */
  /* Wir speichern den Original Namen */
  /*
  //OriginalName = 'Test';
  OriginalName = document.getElementsByName("breadcrumb")[0].text;
  myTarget = document.getElementById("breadcrumb");
  if(wie == 'add'){
    myTarget.innerHTML += ' &gt; ' + was;
  }else if(wie == 'replace'){
    myTarget.innerHTML = OriginalName + ' &gt; ' + was;
  }else if(wie == 'restore'){
    myTarget.innerHTML = OriginalName;
  }else{
    myTarget.innerHTML = OriginalName;
  }
  */
}


/* Bilder Vorausladen -> Startseite */
/* Diese Reiter Bilder müssen nicht mehr jedesmal vorladen
bilderVorladen(
  '/pics/_reiter/reiter_rechts_hl.gif',
  '/pics/_reiter/reiter_mitte_hl.gif',
  '/pics/_reiter/reiter_links_hl.gif',
  '/pics/_reiter/reiter_ecke_links_hl.gif',
  '/pics/_reiter/reiter_ecke_rechts_hl.gif',
  '/pics/_reiter/reiter_no_hl.gif',
  '/pics/_reiter/reiter_mitte_no_hl.gif',
  '/pics/_reiter/reiter_beide_hl.gif'
);*/

// Wird für die INDEX.PHP / MELDUNG.PHP benötigt.
my_news_count = 0;

// Wird für die INDEX.PHP / MELDUNG.PHP Problematik benötigt.
function reset_my_news_count (){
  /* ACHTUNG: der Bereich reset_my_news_count und die Funktion heissen gleich, dafür wird ein for in Test benötigt.
     Bei Artikel-Übersichtsseiten ist der div Bereich da, bei Artikeln selber nicht.
   */
  var forInTest = '';
  for( z in document.getElementById('reset_my_news_count') ){
    forInTest += z + ": " + document.getElementById('reset_my_news_count')[z] + "\n";
  }
  if( typeof( document.getElementById('reset_my_news_count') ) != 'undefined' ){
    if( forInTest != '' ){
      bereich = document.getElementById('reset_my_news_count');
      tmp = bereich.firstChild.nodeValue;
      if(tmp == 'true'){
        my_news_count = 0;
      }else if(tmp == 'false'){
        my_news_count++;
      }else{
        //alert('Fehler in reset_my_news_count() -> /js/global.js');
      }
    }else{
      //my_news_count = 1;
    }
  }else{
    //my_news_count = 1;
  }
  //retrieveURL('meldung.php?p='+my_news_count, 'inhalt');
}

// Dei folgende Funktion wird fuer weiter/zurueck auf den Meldungsseiten der Clubs verwendet.
news_count_curr = 0;
news_count_next = 1;
news_count_prev = 0;
news_count_max = 0;

function set_news_counts(dir, maxcount) {
  news_count_max = maxcount;

  if(dir=='down') {
    news_count_curr = news_count_curr - 1;
  } else {
    if(news_count_curr == (news_count_max-1))
    {
      news_count_curr = news_count_curr;
    }
    else
    { news_count_curr = news_count_curr + 1; }
  }

  news_count_next = news_count_curr;
  news_count_prev = news_count_curr;

  var prev_link = document.getElementById('my_prev_html');
  if(prev_link != undefined) {
    if(news_count_curr == 0) {
      prev_link.style.display = 'none';
    } else {
      prev_link.style.display = 'inline';
    }
  }

  var next_link = document.getElementById('my_next_html');
  if(next_link != undefined) {
    if(news_count_next == (news_count_max-1)) {
      next_link.style.display = 'none';
    } else {
      next_link.style.display = 'inline';
    }
  }
}

function my_prev_newspage(my_news_count)
{
  var forInTest = '';
  for( z in document.getElementById('reset_my_news_count') ){
    forInTest += z + ": " + document.getElementById('reset_my_news_count')[z] + "\n";
  }
  if( typeof( document.getElementById('reset_my_news_count') ) != 'undefined' ){
    if( forInTest != '' ){
      bereich = document.getElementById('reset_my_news_count');
      tmp = bereich.firstChild.nodeValue;
      if(tmp == 'true'){
        my_news_count = 0;
      }else if(tmp == 'false'){
          document.getElementById('my_prev_html').innerHTML = '&nbsp;&nbsp;<a href="#" style="cursor:pointer;" onClick="my_news_count = my_news_count - 2; retrieveURL(\'meldung.php?p='+my_news_count+'\',\'inhalt\');" class="txt_link_red"><nobr>&nbsp;vorherige Meldungen</a>&nbsp;&nbsp;</nobr>';
      }
    }
  }

}

function loadIVW(was){
  if( typeof(document.getElementById('ivw') ) != 'undefined' ){
    var ziel = document.getElementById('ivw');
  }else{
    return;
  }
  if( typeof(IVWpath) != 'undefined' ){
    was = was.toLowerCase();
    ziel.innerHTML += '<img src="http://bundliga.ivwbox.de/cgi-bin/ivw/CP/' + IVWpath + '_' + was + '" alt="" />';
    //ziel.innerHTML += '<nobr><br /><span class="font_1"><b>IVW: <span style="color: #CC0000">' + IVWpath + '_' + was + "</span></b></nobr>";
  }else{
    return;
  }
}

function wechselBarriereCSS() {
    // deleted function content
}

function wechselBarriereCSS_Callback(req, my_id, optional_var){
    // deleted function content
}

function show_weitere_Meldungen(show_hide) {
  var next_link = document.getElementById('my_next_html');
  var prev_link = document.getElementById('my_prev_html');
  var my_archiv = document.getElementById('my_archiv');
  var footer_rechts = document.getElementById('footer_rechts');

  // Wenn wir eine "Archivverlinkung" haben, dann soll die immer entfernt werden.
  if(my_archiv != null)
  { my_archiv.style.display = 'none'; }

  if(next_link != null) {
    if(show_hide == 'show'){
      news_count_curr = 0;
      // nur weiterlink einblenden, da wir bei 0 starten
      if(next_link != null) {
        next_link.style.display = 'inline';
      }
    }else{
      if(next_link != null) { next_link.style.display = 'none'; }
      if(prev_link != null) { prev_link.style.display = 'none'; }
    }

  } else { // backward compatible

    myText = '';
    if(show_hide == 'show'){
      myText += '&nbsp;&nbsp;<a href="#" style="cursor: pointer;" onclick="reset_my_news_count(); retrieveURL(\'meldung.php?p=\'+my_news_count,\'inhalt\');" class="txt_link_red">&gt;&nbsp;weitere Meldungen</a>';
    }else{
      myText += '';
    }
    if(footer_rechts != undefined)
      footer_rechts.innerHTML = myText;
  }
}

function swfOpenTickerURL(lang, liga, omi) {
  var newwin;
  var lig = 'mbl';
  if(liga == 2) {
    lig = 'mbl2';
  }
  var tickerurl = 'http://ticker.bundesliga.de/ticker/dfl_fb_' + lig + '/html_php/ticker_' + lang + '_' + omi + '.html';

  newwin = window.open(tickerurl, 'ticker','width=750, height=690');
}


function swfOpenSpecialTickerURL(url) {
  var newwin;
  var tickerurl = url;

  newwin = window.open(tickerurl, 'ticker','width=750, height=690');
}

/* sizes for video player */

var vpSmallWidth = 252;
var vpSmallHeight = 189;

var vpBigWidth = 376;
var vpBigHeight = 282;

var aShadowID = 'shadow';

function detectMacXFF() {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.indexOf('mac') != -1 && userAgent.indexOf('firefox')!=-1) {
    return true;
  }
}

function prepareVideoShadow(aid) {

  aShadowID = aid;
  var shadow = document.getElementById(aid);

  if(!shadow) return;

  var d = detectMacXFF(); //note new detectMacXFF2 script above
  if (d) {
    //osx ff css opacity + flash wmode transparent doesn't work
    shadow.style.backgroundImage= "url(/pics/bg_shadow.png)";
    shadow.style.backgroundRepeat="repeat";
  } else {
    shadow.style.backgroundColor = "#114244";
    shadow.style.MozOpacity = .50;
    shadow.style.opacity = .50;
    shadow.style.filter = "alpha(opacity=50)";
  }
}

function resizeVideoPlayer(aState, aPlayerID) {

    var container = document.getElementById(aPlayerID);
    var shadow = (aShadowID != undefined) ? document.getElementById(aShadowID) : undefined;

    switch(aState) {

      case 'big':
           container.style.width = vpBigWidth + 'px';
           container.style.height = vpBigHeight + 'px';
           if(shadow) {
               shadow.style.width = (vpBigWidth) + 'px';
               shadow.style.left = shadow.offsetLeft + 10 + 'px';
               shadow.style.height = (vpBigHeight + 10)  + 'px';
           }
           break;

      case 'small':
           container.style.width = vpSmallWidth + 'px';
           container.style.height = vpSmallHeight + 'px';
           if(shadow) {
               shadow.style.width = vpSmallWidth + 'px';
               shadow.style.left = shadow.offsetLeft - 10 + 'px';
               shadow.style.height = vpSmallHeight + 'px';
           }
           break;
    }
}

function callSendToFriend(aURL, aPlayerID) {

    var sendto = window.open('https://' + window.location.host + '/de/popup_sendto.php?refurl=' + aURL, 'SendTo', 'width=668,height=520,scrollbars=yes,resize=yes');
    sendto.focus();

}

function VPCallSendToFriend(url, area, id) {

  var params = '';

  if( (typeof(area) != "undefined") && (typeof(id) != "undefined") && area != "" && id != "" ) {
    params = '?f=/de/bundesliga-tv/inc/video_flv/' + area + '/' + id + '.inc.php';
  }

  var sendto = window.open('/de/popup_sendto.php?refurl=' + url + params, 'SendTo', 'width=668,height=520,scrollbars=yes,resize=yes');
  sendto.focus();

}


function showListElem(obj_id, list, num) {

  var title_obj = document.getElementById(obj_id);
  var txt = (num && list[num]) ? list[num] : '&nbsp;';

  if(title_obj) {
    title_obj.innerHTML = txt;
  }

}

function activate_teaser(prefix, act, len) {

  var actobj = document.getElementById(prefix + act);
  if(!actobj) return;

  for(var i=0; i<len; i++) {

    var o = document.getElementById(prefix + i);
    if(!o) { continue; }

    if( i != act) {
        o.style.display = 'none';
    } else {
        o.style.display = 'block';
    }

  }
}

// load next news page
function news_count_next_page(max, tag) {
    if (news_count_curr < max) {
        news_count_curr++;
    }
    news_count_do(tag);
}

// load previous news page
function news_count_prev_page(tag) {
    if (news_count_curr > 0) {
        news_count_curr--;
    }
    news_count_do(tag);
}

// load current news page
function news_count_do(tag) {

    // get content area of current card box
    var cb = tag.parentNode.parentNode;

    // define link
    var link = document.location.href.replace(/index.php/,"meldung.php?p="+news_count_curr);

    // load pag into current card box
    cb_load(cb, null, link);
}

// ------------------------------------------------------------------------
// IVW-Funktionen fuer Javascript-Klicks.

var IVW_REQ;

// send url
function ivw_get(path) {

    // if no path is given, send page's path
    if (path == null) {
        path = document.location.href.replace(/^https?:\/\/.*?\.?(bundesliga|dfl)\.(de|com)/, '');
    }

    if(window.XMLHttpRequest) {

        // Non-IE browsers
        IVW_REQ = new XMLHttpRequest();


    } else if(window.ActiveXObject) {

        // IE
        try {
            IVW_REQ = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                IVW_REQ = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
//                alert(e);
            }
        }
    } else {
        // AJAX funktioniert nicht beim Client
        return;
    }

    IVW_REQ.onreadystatechange = function () {
        if (IVW_REQ.readyState != 4) {
            return;
        }
        if (IVW_REQ.status != 200) {
            return;
        }
        ivw_update_pixel(IVW_REQ.responseText);
        // PIs generieren über Click
        if(!clickForCardboxMatches) {
	        xt_click(this,'F', level2id, IVW_REQ.responseText);
	      }

    };

    var url = "/inc/ivw.php?path="+path;

   // GET IT !
   /*
    IVW_REQ.open("GET", url, true);
    IVW_REQ.send(null);

    return;
    */

   // POST IT !
    if (url.match(/\?/)) {

        var data = url.split("?");
        url = data.shift();
        params = data.join("?");

    } else {
        params = '';
    }
    IVW_REQ.open("POST", url, true);
    IVW_REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    IVW_REQ.setRequestHeader("Content-length", params.length);
    IVW_REQ.setRequestHeader("Connection", "close");
    IVW_REQ.send(params);
}

// update ivw-pixel for java-script-gui. Just change the img of the given
// ivw-pixel which has a name attribute.
function ivw_update_pixel (pixel) {
  var IVW="http://bundliga.ivwbox.de/cgi-bin/ivw/CP/" + pixel + ";";
  document.szmimages.src = IVW+"?r="+escape(document.location.href)+"&d="+(Math.random()*100000);
}

// get countdown running on stadia-pages; this function is triggered either
// on den snippet itself or on the surrounding club-page, that loads the snippet
function showStadiaCountdown ( nextEventTS )
{
  if ( document.getElementById('countdown_days') &&
       document.getElementById('countdown_hours') &&
       document.getElementById('countdown_minutes') &&
       (typeof(nextEventTS)!='undefined') &&
       (nextEventTS>0) ) {
    var Now = new Date();
    var SecondsDiff = nextEventTS-Math.floor(Now.getTime()/1000);

    var Days    = 0;
    var Hours   = 0;
    var Minutes = 0;
    var Seconds = 0;

    if ( SecondsDiff > 0 )
    {
      var Days    = Math.floor(SecondsDiff/86400);
      var Hours   = Math.floor((SecondsDiff-(Days*86400))/3600);
      var Minutes = Math.floor((SecondsDiff-(Days*86400)-(Hours*3600))/60);
    }

    document.getElementById('countdown_days').innerHTML    = Days;
    document.getElementById('countdown_hours').innerHTML   = Hours;
    document.getElementById('countdown_minutes').innerHTML = Minutes;
    window.setTimeout("showStadiaCountdown(" + nextEventTS + ")", 1000*60);
  }
}

// open liveticker popup with a given ticker url
// and a optional given popup name
function openLivetickerPopup ( ticker_url , popup_label ) {
  if ( ticker_url && (ticker_url.length>0) ) {

    var popup_width  = 750;
    var popup_height = 750;

    if ( ! popup_label || (popup_label.length==0) ) {
      popup_label  = 'Liveticker'
    }

    // override for bl, bl2 and dfb tickers due to ads
    if ( (ticker_url.search(/\/dfl_fb_mbl2?\//i)!=-1) || (ticker_url.search(/\/dfl_fb_mbl\//i)!=-1) || (ticker_url.search(/\/dfl_fb_mdfb\//i)!=-1) ) {
      var popup_width  = 910;
      var popup_height = 750;
    }

    liveticker_popup = window.open(ticker_url,popup_label,'width='+popup_width+',height='+popup_height+',scrollbars=yes,resizable=yes');
  }
  return true;
}

// ------------------------------------------------------------------------

/* Header */

  $(document).ready(function(){

                /* Login */
                $('.header .login').hover(function(){
                    $('.header .login_form').show();
                },function(){
                    $('.header .login_form').hide();
                });

                $('.header .login_form').hover(function(){
                    $(this).show();
                    $('.header div.login a').css("background","url('/pics/_header2013/arrow-up.png') right 40% no-repeat");
                    $('.header div.login').css("background","url('/pics/_header2013/sprite_livebox.png') -90px 0 no-repeat");
                    $('.header div.login a').css("color","white");
                    $('.header div.login a').css("text-shadow","none");
                },function(){
                    $(this).hide();
                    $('.header div.login a').css('color','black');
                    $('.header div.login a').css("background","url('/pics/_header2013/arrow-down.png') right 50% no-repeat");
                    $('.header div.login a').css("text-shadow","0px 3px 6px #1b1b1b");
                    $('.header .login').css('background','none');

                    $('.header .login').hover(function(){
                        $('.header div.login').css("background","url('/pics/_header2013/sprite_livebox.png') -90px 0 no-repeat");
                        $('.header div.login a').css("background","url('/pics/_header2013/arrow-up.png') right 40% no-repeat");
                        $('.header div.login a').css('color','white');
                        $('.header div.login a').css("text-shadow","none");
                    },function(){
                        $('.header .login').css('background','none');
                        $('.header div.login a').css('color','black');
                        $('.header div.login a').css("text-shadow","0px 3px 6px #1b1b1b");
                        $('.header div.login a').css("background","url('/pics/_header2013/arrow-down.png') right 50% no-repeat");
                    });
                });

              /* Suche */

                $('.header .suche_link').hover(function(){
                    $('.header .suche').show();
                },function(){
                    $('.header .suche').hide();
                });

                $('.header .suche').hover(function(){
                    $(this).show();
                    $('.header .suche_link a').css("background","url('/pics/_header2013/arrow-up.png') right 40% no-repeat");
                    $('.header .suche_link').css("background","url('/pics/_header2013/tabs-btn-bg-red.png') -90px 0 no-repeat");
                    $('.header .suche_link a').css("color","white");
                    $('.header .suche_link a').css("text-shadow","none");
                },function(){
                    $(this).hide();
                    $('.header .suche_link a').css('color','black');
                    $('.header .suche_link a').css("background","url('/pics/_header2013/arrow-down.png') right 50% no-repeat");
                    $('.header .suche_link a').css("text-shadow","0px 3px 6px #1b1b1b");
                    $('.header .suche_link').css('background','none');

                    $('.header .suche_link').hover(function(){
                        $('.header .suche_link').css("background","url('/pics/_header2013/tabs-btn-bg-red.png') -90px 0 no-repeat");
                        $('.header .suche_link a').css("background","url('/pics/_header2013/arrow-up.png') right 40% no-repeat");
                        $('.header .suche_link a').css('color','white');
                        $('.header .suche_link a').css("text-shadow","none");
                    },function(){
                        $('.header .suche_link').css('background','none');
                        $('.header .suche_link a').css('color','black');
                        $('.header .suche_link a').css("text-shadow","0px 3px 6px #1b1b1b");
                        $('.header .suche_link a').css("background","url('/pics/_header2013/arrow-down.png') right 50% no-repeat");
                    });
                });


               /* Liga icons */

               $('#ipad_buttons').click(function(){

//                   if( $('#ipad_leiste_liga').is(":visible") ){
//                       $('#ipad_leiste_liga').hidde();
//                       $('#ipad_leiste_liga2').show();
//                   }else{
//                       $('#ipad_leiste_liga2').hidde();
//                       $('#ipad_leiste_liga').show();
//                   }

                   //$(this).parent().prev().show();
                   //$(this).parent().hidde();
               });

            });


/*
 * DEFINE VIDEO STATE
 */
var isPlaying = false;
var isEnded = false;
var isPaused = false;
var isStopped = false;

/**
 * LAYOUT
 */
var LAYOUT = "desktop";
var isIPad = navigator.userAgent.match(/iPad/i) != null;
var isIPhone = navigator.userAgent.match(/iPhone/i) != null;

var currentSlider = 1;
$(document).ready( function(){

    /* Slider */
    if ($(".topTeaser").flexslider) {
        $(".topTeaser").flexslider({
            animation       : $.browser.safari && !isIPad && !isIPhone ? "fade" : "slide",
            animationLoop   : true,
            slideshow       : true,
            pauseOnHover    : true,
            slideshowSpeed  : 10000,
            animationSpeed  : 1250,
            directionNav: false,
            controlsContainer : "",
            manualControls  : ".flex-control-nav-custom li",
            move            : 1,
            videoOn         : true,
            isTopTeaser     : true,
            resizing        : true
        });
    }

	/* Super CSS */


	var fantraum = window.location.protocol+"//"+window.location.host+"/de/fantraum/";
	var home = window.location.protocol+"//"+window.location.host+"/de/index.php";
	var home2 = window.location.protocol+"//"+window.location.host+"/de/";
	var interna = window.location.protocol+"//"+window.location.host+"/de/stadien/";
	var saisonvorschau = window.location.protocol+"//"+window.location.host+"/de/liga/saisonvorschau/index.php";
	var medien = window.location.protocol+"//"+window.location.host+"/de/medien/";

	if( window.location.href == medien ){

		$('.boxpresse .zeile_full_b .button_ng').css('margin-right','35px');
		$('.boxpresse_top .button_ng').css('margin-right','25px');
		$('#content .artikelcontent2 .PCright .boxrechts .down .red a').css('margin-left','7px');
		$('.text2').css('padding-bottom','0px');
		$('.text2 div:last-child').css('margin-bottom','0px');
	}

	if( window.location.href == saisonvorschau ){

		$('#content-left-spalte .artikelcontent').css('background','#f0f0f0');
	}

	if( window.location.href == fantraum ){
		$('#content .left #box_ng_small').css('margin-bottom','0');
	}

	if( window.location.href == home || window.location.href == home2 ){
	
		$('#box_links_liga').css('margin-top','0px');
		$('#box_links_liga2').css('margin-top','0px');
	}

	if( window.location.href == interna ){
		$('form#competitionTeamsMenu div:first-child').css('margin-left','0px');
	}




	
	$('#box_links_liga2 div:last-child').css('display','none');
	$('#box_links_liga2 div:last-child').prev().css('display','none');

	$('#box_links_liga div:last-child').css('display','none');
	$('#box_links_liga div:last-child').prev().css('display','none');

    /* Bookmark */
    $("#bookmark1").click(function(){
        $(".TopTeaserHeaders li").removeClass("TopTeaserActive");
        $("#bookmark1").addClass("TopTeaserActive");
        $("#list1").css("display","block");
        $("#list2,#list3").css("display","none");
        $("#list2,#list3").css("display","none");
    });

    $("#bookmark2").click(function(){
        $(".TopTeaserHeaders li").removeClass("TopTeaserActive");
        $("#bookmark2").addClass("TopTeaserActive");
        $("#list2").css("display","block");
        $("#list1,#list3").css("display","none");
    });

    $("#bookmark3").click(function(){
        $(".TopTeaserHeaders li").removeClass("TopTeaserActive");
        $("#bookmark3").addClass("TopTeaserActive");
        $("#list3").css("display","block");
        $("#list1,#list2").css("display","none");
    });

	$('.str_result_row_active').next().css('background','#C3C3C3');

   /* Navigation background*/
   $('#nav li').not('#nav li:first-child').hover( function(){
	    $(this).next().css('background','none');
       },
	function(){
          $(this).next().css('background','url("/pics/_header2013/nav-sep.png") 0 50% no-repeat');
       }
    );

});



/*
 * VIDEO FUNCTIONS
 * different video controling functions
 * =====================================
 */
//Provides the proper address for
//the movie depending on browser
/*function getFlashMovie(movieName) {
    var isIE = navigator.appName.indexOf("Microsoft") != -1;
    return (isIE) ? window[movieName] : document[movieName];
}
*/

//starts the funtion in flash, if flash video exists
function SendDataToFlashMovie(videoId) {
    if (isPlaying && LAYOUT=="desktop") {
        document.getElementById(videoId+"Flash").pauseInFlash();
        //getFlashMovie(videoId+"Flash").pauseInFlash();
    }
}
//starts playing the html5 video
function playVideo(videoId) {
    document.getElementById("html5Video" + videoId).play();
    isPlaying = true;
}
//stops the html5 video
function stopVideo(videoId) {
    document.getElementById("html5Video" + videoId).pause();
    isPlaying = false;
}
//stops the html5 video
function pauseVideo(videoId) {
    document.getElementById("html5Video" + videoId).pause();
    isPlaying = false;
}
//hide headline of the video onPlay
function onPlayVideo(videoId) {
    if (LAYOUT!="mobile") {
        $("#"+videoId+" .flex-caption").hide();
    }
    isPlaying = true;
}
//show headline of the video onStop
function onStopVideo(videoId) {
    if (LAYOUT!="mobile") {
        $("#"+videoId+" .flex-caption").show();
    }
    isPlaying = false;
}
