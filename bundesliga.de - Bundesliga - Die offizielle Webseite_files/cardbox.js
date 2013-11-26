/* javascript for RO module cardbox and cardboxcontrol */

// httprequest object (AJAX)
var CB_REQ;

// IE PATCH - not threadsave!
var CB_REQ_CONTAINER = null;

if (typeof CB_TABS_CONF == "undefined") {
    CB_TABS_CONF = {};
}

var newtab_cardbox_id = "notset";
var spieltags_reiter = "false";


/* xtclick for the Matchday & Fixtures Tracking */
var firstCardbox = 1;
var setXTLink = 0;
var clickForCardboxMatches = '';
var clickForCardbox1 = '';
var clickForCardbox2 = '';
var xtpageCardbox = '';
var banner_reload = false;
$(document).ready(function(){ xtpageCardbox = xtpage; });
var picCount = 1;
/* /xtclick */


// create card box
function cb_create(cbcid) {

    if (CB_TABS_CONF["id_"+cbcid] == null) {
        CB_TABS_CONF["id_"+cbcid] = {
	    "style" : "std"
	};
    }

    var style = CB_TABS_CONF["id_"+cbcid].style;

    // get configuration
    var data = CB_TABS["id_"+cbcid];

    // get container for card box
    var container = document.getElementById("cb_container_"+cbcid);

    // assign configuration
    container.conf = data;
    container.cbcid = cbcid;

    // build container for tabs
    var tabs = document.createElement("div");
    tabs.className = "cb_"+style+"_tab_container";
    container.appendChild(tabs);

    // build container for content
    var body = document.createElement("div");
    body.style.borderLeft = "1px solid #6C6C6C";
    body.style.borderRight = "1px solid #6C6C6C";
    body.style.overflow = "hidden";
    body.innerHTML = "Lade...";
    container.appendChild(body);
   
    // check for user desired default tab (?firsttab=...)
    var userfirst = null;
    var url = document.location.href.split("?");
    if (url.length > 1) {
        var params = url[1].split("&");
	for (var i=0; i<params.length; i++) {
	    if (params[i].split("=")[0] == "firsttab") {
	        userfirst = params[i].split("=")[1];
	        break;
	    }
	}
    }

    // left corner
    var tab = document.createElement("div");
    tab.className = "cb_"+style+"_tab_first_off";
    tab.innerHTML = "&nbsp;";
    tabs.appendChild(tab);

    // build tabs
    for (var i=0; i<data.length; i++) {

        // center
        tab = document.createElement("div");
	tab.url = data[i].url;
	tab.pos = i;
	tab.innerHTML = data[i].label;

        // assign eventhandler if tab is active
        if (data[i].active) {
	    tab.onclick = new Function("cb_select("+cbcid+", "+i+");");
	    tab.onmouseover = function () {cb_mover(this); };
	    tab.onmouseout = function () {cb_mout(this); };
	}
	tabs.appendChild(tab);

        if (i == data.length - 1) {
	    continue;
	}

	// separator between tabs
        tab = document.createElement("div");
	tab.className = "cb_"+style+"_separator_off_off";
	tab.innerHTML = "&nbsp;";
	tabs.appendChild(tab);
    }

    // right corner
    tab = document.createElement("div");
    tab.innerHTML = "&nbsp;";
    tab.className = "cb_"+style+"_tab_last_off";
    tabs.appendChild(tab);

    // stop css float
    var stop = document.createElement("div");
    stop.style.clear = "both";
    tabs.appendChild(stop);

    // figure out default tab
    var first = null;

    // user specified default tab
    if (userfirst != null) {

        // look for its position
        for (var i=0; i<data.length; i++) {

	    // found it => keep position
	    if (data[i].name == userfirst) {
	        if (data[i].type == "popup") {
                    cb_select(cbcid, i, false);
		} else {
	            first = i;
		}
		break;
	    }
	}
    }

    // no default tab specified by user or specified tab not found =>
    // look for default tab specified by cms
    if (first == null) {
        for (var i=0; i<data.length; i++) {

	    // found it = keep position
	    if (data[i].first == true) {
	        first = i;
		break;
	    }
	}
    }

    // got still no default tab => take first tab
    if (first == null) {
        first = 0;
    }

    // select default tab
    cb_select(cbcid, first, false);
}

// handle selected card
function cb_select(cbcid, pos, ivw) {

    if (ivw == null) {
        ivw = true;
    }

    var style = CB_TABS_CONF["id_"+cbcid].style;

    // get config for cardbox
    var data = CB_TABS["id_"+cbcid];

    // get container containing cardbox
    var container = document.getElementById("cb_container_"+cbcid);

    // call before click hook
    // can be overwriten by application
    cb_beforeClick(container.conf, pos);

    // store selected tab
    container.selected = pos;
    newtab_cardbox_id = container.selected;

    // get container containing tabs
    var tabs = container.firstChild;

    // reset left corner
    tabs.firstChild.className = "cb_"+style+"_tab_first_off";

    for (var i=1; i<=data.length; i++) {

        // reset tab
        if (data[i-1].active == false) {
            tabs.childNodes[i*2-1].className = "cb_"+style+"_tab_center_inactive";
        } else {
            tabs.childNodes[i*2-1].className = "cb_"+style+"_tab_center_off";
        }
	if (i == data.length) {
	    break;
	}

	// reset separator
        tabs.childNodes[i*2].className = "cb_"+style+"_separator_off_off";
    }

    // reset right corner
    tabs.childNodes[data.length*2].className = "cb_"+style+"_tab_last_off";

    // mark selected tab
    tabs.childNodes[pos*2+1].className = "cb_"+style+"_tab_center_on";
    switch(pos) {
      case 0:
	      // mark left corner
 	      tabs.firstChild.className = "cb_"+style+"_tab_first_on";
	      // mark first separator
 	      tabs.childNodes[2].className = "cb_"+style+"_separator_on_off";
	      break;
	    case data.length-1:
	      // mark last separator
 	      tabs.childNodes[pos*2].className = "cb_"+style+"_separator_off_on";
	      // mark rirght corner
 	      tabs.childNodes[pos*2+2].className = "cb_"+style+"_tab_last_on";
	      break;
      default:
	      // mark surrounding separator of inner tabs
 	      tabs.childNodes[pos*2].className = "cb_"+style+"_separator_off_on";
	      tabs.childNodes[pos*2+2].className = "cb_"+style+"_separator_on_off";
	      break;
    }


    if (setXTLink==1) {      
      xt_click(this, 'F', level2id, clickForCardbox1+data[pos].label.split(" ").join("_")+'_'+clickForCardbox2);  
      xtpageCardbox = clickForCardbox1+data[pos].label.split(" ").join("_")+'_'+clickForCardbox2;
    } 
    setXTLink=0;
    
    if(clickForCardboxMatches && data[pos].label != 'Ticker/Radio' && firstCardbox > 1) { 
      xt_click(this, 'F', level2id, clickForCardbox1+data[pos].label.split(" ").join("_")+'_'+clickForCardbox2);
      xtpageCardbox = clickForCardbox1+data[pos].label.split(" ").join("_")+'_'+clickForCardbox2;
    }
    firstCardbox++;
    picCount = 1;
    

    switch (data[pos].type) {
        case "popup":
            if (data[pos].params == null) {
                data[pos].params = "";
            }

            window.open(data[pos].source, "POPUP", data[pos].params);
            break;
        case "script":
            if (data[pos].params == null) {
                data[pos].params = "";
            }
            cmdline = data[pos].source + "('" + data[pos].params.replace(/'/g,/\\'/) + "')";
            eval(cmdline);
            break;
        case "url":
        default:

            // get body for content
            var body = container.childNodes[1];
            body.id = "cb_body"+cbcid;

            // load content corresponding to selected tab into body
            cb_load(body, data[pos].type, data[pos].source, ivw);

    }
    
    // banner reload if cardbox selected
    // only after the banners are loaded
    if (banner_reload!=undefined && banner_reload) {
        for (i = 0; i < bannerTags.length; i++) {
            var destdiv=document.getElementById(bannerTags[i] + "_dest");
            var sourcediv=document.getElementById(bannerTags[i] + "_source");
            var tmpContainer = sourcediv.cloneNode(true);
            destdiv.replaceChild(tmpContainer, sourcediv);
        }
    }
    
}


// send url
function cb_load(container, type, source, ivw) {
    
    
    if (ivw == null) {
        ivw = true;
    }

    if(window.XMLHttpRequest) {
        // Non-IE browsers
        CB_REQ = new XMLHttpRequest();


    } else if(window.ActiveXObject) {

        // IE
        try {

            CB_REQ = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                CB_REQ = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
//                alert(e);
            }
        }
    } else {

        // AJAX funktioniert nicht beim Client
        return;
    }

    CB_REQ_CONTAINER = container;

    CB_REQ.onreadystatechange = function () {
        if (CB_REQ.readyState != 4) {
            return;
        }
        if (CB_REQ.status != 200) {
            return;
        }
        
        CB_REQ_CONTAINER.innerHTML = cb_wrapper(CB_REQ);
        evalScript(CB_REQ.responseText);
        cb_contentLoaded(container.parentNode);
    };


    var url = source;

    if (type == 'path') {
//        alert("PATH");
    }

   // GET IT !
    CB_REQ.open("GET", url, true); 
    CB_REQ.send(null);
    
    if (ivw) {
      ivw_get();
    }
    
    
    return;
/*
   // POST IT !
    if (url.match(/\?/)) {

        var data = url.split("?");
        url = data.shift();
        params = data.join("?");

    } else {
        params = '';
    }
    CB_REQ.open("POST", url, true);
    CB_REQ.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    CB_REQ.setRequestHeader("Content-length", params.length);
    CB_REQ.setRequestHeader("Connection", "close");
    CB_REQ.send(params);
    */
}


function evalScript(scripts){
    try{
        if(scripts != ''){
            var script = "";
            scripts = scripts.replace(/<script[^>]*>([\s\S]*?)<\/script>/gi, function(){
                if (scripts !== null) script += arguments[1] + '\n'; return '';
            });
            if(script) {
                script = script.replace(/SOI_AUTOPLAY = '([a-z]*)'/g, "SOI_AUTOPLAY = SOI_AUTOPLAY");
                (window.execScript) ? window.execScript(script) : window.setTimeout(script, 0);
            }
        }
        return false;
    }
    catch(e){
        //alert(e)
    }
}


// handle mouse over event
function cb_mover(tab) {


    var style = CB_TABS_CONF["id_"+tab.parentNode.parentNode.cbcid].style;

    // get container containing cardbox
    var container = tab.parentNode.parentNode;

    // mouse over selected tag => return
    if (container.selected == tab.pos) {
        return;
    }

    // we distinguish three cases: first, last, else
    // change images in order as follows:
    // 1: separator to left neighbour / left corner
    // 2: tab itself
    // 3: separator to right neighbour / right corner
    switch(tab.pos) {
        case 0:
	    tab.previousSibling.className = "cb_"+style+"_tab_first_on";
	    tab.className = "cb_"+style+"_tab_center_on";
	    if ((container.conf.length > 0) && (container.selected == 1)) {
	        tab.nextSibling.className = "cb_"+style+"_separator_on_on";
	    } else {
	        tab.nextSibling.className = "cb_"+style+"_separator_on_off";
	    }
	    break;
        case container.conf.length-1:
	    if ((container.conf.length > 1) && (container.selected == container.conf.length-2)) {
	        tab.previousSibling.className = "cb_"+style+"_separator_on_on";
	    } else {
	        tab.previousSibling.className = "cb_"+style+"_separator_off_on";
	    }
	    tab.className = "cb_"+style+"_tab_center_on";
	    tab.nextSibling.className = "cb_"+style+"_tab_last_on";
	    break;
        default:
	    if (container.selected == tab.pos-1) {
	        tab.previousSibling.className = "cb_"+style+"_separator_on_on";
	    } else {
	        tab.previousSibling.className = "cb_"+style+"_separator_off_on";
            }
	    tab.className = "cb_"+style+"_tab_center_on";
	    if (container.selected == tab.pos+1) {
	        tab.nextSibling.className = "cb_"+style+"_separator_on_on";
	    } else {
	        tab.nextSibling.className = "cb_"+style+"_separator_on_off";
	    }
	    break;
    }
}

// handle mouse out event
function cb_mout(tab) {

    var style = CB_TABS_CONF["id_"+tab.parentNode.parentNode.cbcid].style;

    // get container containing cardbox
    var container = tab.parentNode.parentNode;

    // mouse left selected tag => return
    if (container.selected == tab.pos) {
        return;
    }

    // we distinguish three cases: first, last, else
    // change images in order as follows:
    // 1: separator to left neighbour / left corner
    // 2: tab itself
    // 3: separator to right neighbour / right corner
    switch(tab.pos) {
        case 0:
	    tab.previousSibling.className = "cb_"+style+"_tab_first_off";
	    tab.className = "cb_"+style+"_tab_center_off";
	    if ((container.conf.length > 0) && (container.selected == 1)) {
	        tab.nextSibling.className = "cb_"+style+"_separator_off_on";
	    } else {
	        tab.nextSibling.className = "cb_"+style+"_separator_off_off";
	    }
	    break;
        case container.conf.length-1:
	    if ((container.conf.length > 1) && (container.selected == container.conf.length-2)) {
	        tab.previousSibling.className = "cb_"+style+"_separator_on_off";
	    } else {
	        tab.previousSibling.className = "cb_"+style+"_separator_off_off";
	    }
	    tab.className = "cb_"+style+"_tab_center_off";
	    tab.nextSibling.className = "cb_"+style+"_tab_last_off";
	    break;
        default:
	    if (container.selected == tab.pos-1) {
	        tab.previousSibling.className = "cb_"+style+"_separator_on_off";
	    } else {
	        tab.previousSibling.className = "cb_"+style+"_separator_off_off";
            }
            tab.className = "cb_"+style+"_tab_center_off";
	    if (container.selected == tab.pos+1) {
	        tab.nextSibling.className = "cb_"+style+"_separator_off_on";
	    } else {
	        tab.nextSibling.className = "cb_"+style+"_separator_off_off";
	    }
	    break;
    }
}

function cb_activate(cbcid, pos) {

    // get config for cardbox
    CB_TABS["id_"+cbcid][pos].active = true;

    // get container containing cardbox
    var container = document.getElementById("cb_container_"+cbcid);

    // get tab to be activated
//alert(container.firstChild.childNodes.length);
    var tab = container.firstChild.childNodes[pos*2+1];

    // get style to be used
    var style = CB_TABS_CONF["id_"+cbcid].style;

    // reconfigure tab
    if (container.selected == pos) {
        tab.className   = "cb_"+style+"_tab_center_on";
    } else {
        tab.className   = "cb_"+style+"_tab_center_off";
    }
    tab.onclick     = new Function("cb_select("+cbcid+", "+pos+");");
    tab.onmouseover = function () {cb_mover(this); };
    tab.onmouseout  = function () {cb_mout(this); };
}

// fieser wrapper
// um die retrieveURL Function aufs eigene Framework umzubiegen
// sollte eigentlich in eine eigene Datei...

// retrieveURL Aufrufe werden ersetzt durch cb_link_wrapper
function cb_wrapper(req) {
    var text = req.responseText;

    // replace call of "retrieveURL"
    text = text.replace(/retrieveURL\(/g, "cb_link_wrapper('"+CB_REQ_CONTAINER.id+"', ");

    // replace call of "show_player"
    text = text.replace(/show_player\(/g, "cb_show_play_wrapper('"+CB_REQ_CONTAINER.id+"', ");

    return text;
}

// replacement for "retrieveURL"
function cb_link_wrapper(id, link) {
    cb_load(document.getElementById(id), null, link);
}

// replacement for "show_player"
function cb_show_play_wrapper(id, foo, bar, spielerName) {

//    var link = document.location.href.replace(/.index.php$/, "/");
    var link = document.location.href.replace(/.index.php.*$/, "/");

    link = "/" + lang + "/spieler/"+spielerName.toLowerCase()+".php";
    cb_load(document.getElementById(id), null, link);
}

// dummy callback
// call before click
function cb_beforeClick(cb, pos) { }

// dummy callback
// call when new content loaded
function cb_contentLoaded(cb) {}
