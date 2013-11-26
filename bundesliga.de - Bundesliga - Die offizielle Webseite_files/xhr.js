// author: CR

var XHR_QUEUE = [];

function ___xhr_create() {
    var xhr = null;
    if(window.XMLHttpRequest) {

        // Non-IE browsers
        xhr = new XMLHttpRequest();

    } else if(window.ActiveXObject) {

        // IE
        try {
            xhr = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(e) {
            try {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
                xhr_message("CANNOT INITIATE ACTIVEXOBJECT");
            }
        }
    } else {

        // XHR funktioniert nicht beim Client
	hxr_error("CANNOT INITIATE HXR OBJECT");
        return;
    }

    var index = 0;
    while(true) {
        if (index >= XHR_QUEUE.lenth) {
            XHR_QUEUE.push(xhr);
            break;
        }

        if (XHR_QUEUE[index] == null) {
            XHR_QUEUE[index] = xhr;
            break;
        }
        index++;
    }
    XHR_QUEUE[index].onreadystatechange = new Function("xhr_eval("+index+");");

    return index;
}

function xhr_get(url) {
    var index = ___xhr_create();
    XHR_QUEUE[index].open("GET", url, true); 
    XHR_QUEUE[index].send(null);
}

function xhr_post(url) {

    var index = ___xhr_create();
/*
    if (url.match(/\?/)) {

        var data = url.split("?");
        url = data.shift();
        params = data.join("?");

        params += "&AJAX_TID="+AJAX_TID;
    } else {
        params = "AJAX_TID="+AJAX_TID;
    }
    */

    var params = "";

    if (url.match(/\?/)) {

        var data = url.split("?");
        url = data[0];
        params = data[1];
    } 

    XHR_QUEUE[index].open("POST", url, true);

    XHR_QUEUE[index].setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XHR_QUEUE[index].setRequestHeader("Content-length", params.length);
    XHR_QUEUE[index].setRequestHeader("Connection", "close");
    XHR_QUEUE[index].send(params);
}

function xhr_eval(index) {

    switch (XHR_QUEUE[index].readyState) {
        case 0 :
        case 1 :
        case 2 :
        case 3 :
            break;
        case 4 :
            if (XHR_QUEUE[index].status == 200) {

                if (XHR_QUEUE[index].responseText == "") {
                    //xhr_error("EMPTY RESPONSE");
                    return;
                }

                var response = eval("("+XHR_QUEUE[index].responseText+")");
                XHR_QUEUE[index] = null;

                var command = response.command;

		if (command == null) {
		    xhr_error("NO COMMAND SPECIFIED");
		    return;
		}

                if (window[command] == null) {
                    xhr_error("COMMAND "+command+" DOES NOT EXISTS");
                    return;
                }

                var content = response.content;
                eval("window."+command+"(content)");

            } else {
                xhr_error("HTTP ERROR: "+XHR_QUEUE[index].status);
		return;
            }
            break;
        default :
            xhr_error("UNKNOWN HXR STATE: "+XHR_QUEUE[index].readyState);
	    return;
    }
}

function xhr_error(msg) {
    alert(msg);
}

