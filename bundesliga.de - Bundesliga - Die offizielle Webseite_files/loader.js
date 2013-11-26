/* AJAX */
// Timeout nach dem Ajax die Daten aktualisiert
//var ajaxRefreshTimeout = 15000 + Math.random() * 20000;
var ajaxRefreshTimeout = 5000;
var naviLastClicks = "";
var activTimeout = new Object();
var changeIVW = true;
function retrieveURL (url, my_id, callback_func, optional_var, allowChangeIVW) {
  // Wenn das Element my_id nicht existiert, dann muss man auch keinen Aufruf
  // durchfuehren.

  
  if (typeof(document.getElementById(my_id)) == 'undefined') {
    return 0;
  }

  if (allowChangeIVW == 'false') {
    changeIVW = false;
  } else { 
    changeIVW = true;
  }

  /* Test auf IE7 */
  myappVersion = navigator.appVersion;
  var Ergebnis = myappVersion.search(/MSIE 7.+/);

  //AJAX_HISTORY.push([url,my_id,callback_func,optional_var]);

  var req, callback_func, url;
  // Default callback function + ladestatus
  if (typeof(callback_func) == "undefined" || callback_func == "") {
    callback_func = "processStateChange";
  }

  if (url != "") {
    if (url.indexOf("?") == -1) {
      url += "?";
    } else {
      url += "&";
    }
    // Variable gegen Cache + aktuelle Session
    url += (new Date().getTime());

    if (window.XMLHttpRequest) {
      if (Ergebnis != -1){
        Browser = "MSIE7";

      }else{
        Browser = 'OTHER';
      }
      // Non-IE browsers oder IE 7
      req = new XMLHttpRequest();
      req.onreadystatechange = function() {
        eval(callback_func)(req,my_id,optional_var,url);
      }
      try {
        req.open("GET", url, true);

      } catch(e) {
        //alert(e);
      }
      req.send(null);

    } else if(window.ActiveXObject) {
      Browser = 'WINDOOF';
      // IE < 7
      try {
        req = new ActiveXObject("Msxml2.XMLHTTP");
      } catch(e) {
          try {
            req = new ActiveXObject("Microsoft.XMLHTTP");

          } catch(e) {
            //alert(e);
          }
      }
      if (req) {
        req.onreadystatechange = function() {
          eval(callback_func)(req,my_id,optional_var,url);
        }
        req.open("GET", url, true);
        req.send();
      }

    } else {
      // AJAX funktioniert nicht beim Client
    }
  }
}

function progressLayer(my_id) {
  //document.getElementById(my_id).innerHTML = "<em>Lade...</em>";
  //document.getElementById("foot").style.visibility = 'hidden';
}

function processStateChange(req, my_id, optional_var, url) {
  if (typeof(document.getElementById(my_id)) == 'undefined') {
    return 0;
  }

  // Complete
  if (req.readyState == 4) {
    // OK response
    if (req.status == 200) {
      // HTML bzw. Text Datei direkt ausgeben
      if (typeof(DEBUG_AJAX) != 'undefined') {
        document.getElementById(my_id).innerHTML = req.responseText + "\n" + '<!-- AJAX_URL --><div style="display:none;" name="AJAX_URL">' + url + '</div><!-- /AJAX_URL -->' + "\n";
        document.getElementsByTagName('body')[0].innerHTML += '<br clear="all" /><small style="position:relative;left:180px;background-color:Yellow;">AJAX URL im Fenster "' + my_id + '" : ' + url + '</small>';

      } else {
        document.getElementById(my_id).innerHTML = req.responseText;
      }
      // Nun noch IVW holen, wenn sinnvoll.
      if (!url.match(/^\/data\/fmt/)) {
        // Keinen Pfad definieren, da dieser der aktuellen URL entsprechen
        // soll.
        if (changeIVW) {
          ivw_get();
        }
      }
      // lediglich eine Debug-Ausgabe...
      //var head = document.getElementById('head');
      //head.innerHTML =  url + "<br>" + head.innerHTML;
      
      // Skript Aufrufe nach dem 
      // der Inhalt geladen ist.
      // Funktions Inhalt wird in den 
      // Index Seiten als Modul gesetzt
      cb_contentLoaded(req.parentNode);


    } else {
      // 404
      var tmp = document.getElementById(my_id);
      var myText = '';
      if(lang == 'de'){
        myText += '<table class="ERROR"><tr><td class="sub1"><a href="/index.php" title="HOME"><img src="/pics/error_bl_logo.gif" align="left" alt="404 AJAX" /></a></td><td class="sub2 font_18">Diese Seite existiert derzeit nicht.</td></tr>';
        myText += '</table><br />' + "\n";
        myText += '<table class="ERROR" cellpadding="20" style="display:none"><tr><td class="font_18 colspan="2">' + req.responseText + '</td></tr></table><br />';

      }else{
        myText += '<table class="ERROR"><tr><td class="sub1"><a href="/index.php" title="HOME"><img src="/pics/error_bl_logo.gif" align="left" alt="404 AJAX" /></a></td><td class="sub2 font_18">This site is currently not available.</td></tr>';
        myText += '</table><br />' + '\n';
        myText += '<table class="ERROR" cellpadding="20" style="display:none"><tr><td class="font_18 colspan="2">' + req.responseText + '</td></tr></table><br />';
      }
      tmp.innerHTML = myText;
    }
  }
}



// Funktion zur Anzeige eines Zufallsbanners
// Einbindung auf den Artikelseiten (Vorbericht oder Spielbericht)
// Die Banner werden im CMS vordefiniert unter /de/randombanner/
var check_randombanner = 0;
function anzeigen_randombanner() {
	if (check_randombanner == 0) {
		var nowselector = Math.floor(Math.random() * 10);
		var selector = (nowselector % 4) + 1;
		document.getElementById('banners'+selector).style.display = "block";
	} else {}
}

$('img').live('contextmenu select',function(e){
  e.stopPropagation(); e.preventDefault();
  alert('Dieses Bild ist urheberrechtlich gesch\u00fctzt');
  return false;
});

$('img').live('touchstart', function(){
    $(this).css("user-select","none");
    $(this).css("-moz-user-select","none");
    $(this).css("-webkit-user-select","none");
	$(this).css("-webkit-touch-callout","none");
    return false;
}).live('touchend', function(){
    $(this).css("user-select","none");
    $(this).css("-moz-user-select","none");
    $(this).css("-webkit-user-select","none");
	$(this).css("-webkit-touch-callout","none");
    return false;
});
