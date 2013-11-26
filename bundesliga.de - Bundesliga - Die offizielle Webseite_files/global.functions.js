var de          = de || {};
de.wwemedia     = de.wwemedia || {};
de.wwemedia.dfl = de.wwemedia.dfl || {};
de.wwemedia.util = de.wwemedia.util || {};

/** Thanks and credit to Chris from stackoverflow (stackoverflow.com/users/92813) */
de.wwemedia.util.escapeHtmlEntities = function (text) {
    return text.replace(/[\u00A0-\u2666<>&]/g, function(c) {
        return '&' +
            (de.wwemedia.util.escapeHtmlEntities.entityTable[c.charCodeAt(0)] || '#'+c.charCodeAt(0)) + ';';
    });
};
// all HTML4 entities as defined here: http://www.w3.org/TR/html4/sgml/entities.html
// added: amp, lt, gt, quot and apos
de.wwemedia.util.escapeHtmlEntities.entityTable = {
    34 : 'quot',
    38 : 'amp',
    39 : 'apos',
    60 : 'lt',
    62 : 'gt',
    160 : 'nbsp',
    161 : 'iexcl',
    162 : 'cent',
    163 : 'pound',
    164 : 'curren',
    165 : 'yen',
    166 : 'brvbar',
    167 : 'sect',
    168 : 'uml',
    169 : 'copy',
    170 : 'ordf',
    171 : 'laquo',
    172 : 'not',
    173 : 'shy',
    174 : 'reg',
    175 : 'macr',
    176 : 'deg',
    177 : 'plusmn',
    178 : 'sup2',
    179 : 'sup3',
    180 : 'acute',
    181 : 'micro',
    182 : 'para',
    183 : 'middot',
    184 : 'cedil',
    185 : 'sup1',
    186 : 'ordm',
    187 : 'raquo',
    188 : 'frac14',
    189 : 'frac12',
    190 : 'frac34',
    191 : 'iquest',
    192 : 'Agrave',
    193 : 'Aacute',
    194 : 'Acirc',
    195 : 'Atilde',
    196 : 'Auml',
    197 : 'Aring',
    198 : 'AElig',
    199 : 'Ccedil',
    200 : 'Egrave',
    201 : 'Eacute',
    202 : 'Ecirc',
    203 : 'Euml',
    204 : 'Igrave',
    205 : 'Iacute',
    206 : 'Icirc',
    207 : 'Iuml',
    208 : 'ETH',
    209 : 'Ntilde',
    210 : 'Ograve',
    211 : 'Oacute',
    212 : 'Ocirc',
    213 : 'Otilde',
    214 : 'Ouml',
    215 : 'times',
    216 : 'Oslash',
    217 : 'Ugrave',
    218 : 'Uacute',
    219 : 'Ucirc',
    220 : 'Uuml',
    221 : 'Yacute',
    222 : 'THORN',
    223 : 'szlig',
    224 : 'agrave',
    225 : 'aacute',
    226 : 'acirc',
    227 : 'atilde',
    228 : 'auml',
    229 : 'aring',
    230 : 'aelig',
    231 : 'ccedil',
    232 : 'egrave',
    233 : 'eacute',
    234 : 'ecirc',
    235 : 'euml',
    236 : 'igrave',
    237 : 'iacute',
    238 : 'icirc',
    239 : 'iuml',
    240 : 'eth',
    241 : 'ntilde',
    242 : 'ograve',
    243 : 'oacute',
    244 : 'ocirc',
    245 : 'otilde',
    246 : 'ouml',
    247 : 'divide',
    248 : 'oslash',
    249 : 'ugrave',
    250 : 'uacute',
    251 : 'ucirc',
    252 : 'uuml',
    253 : 'yacute',
    254 : 'thorn',
    255 : 'yuml',
    402 : 'fnof',
    913 : 'Alpha',
    914 : 'Beta',
    915 : 'Gamma',
    916 : 'Delta',
    917 : 'Epsilon',
    918 : 'Zeta',
    919 : 'Eta',
    920 : 'Theta',
    921 : 'Iota',
    922 : 'Kappa',
    923 : 'Lambda',
    924 : 'Mu',
    925 : 'Nu',
    926 : 'Xi',
    927 : 'Omicron',
    928 : 'Pi',
    929 : 'Rho',
    931 : 'Sigma',
    932 : 'Tau',
    933 : 'Upsilon',
    934 : 'Phi',
    935 : 'Chi',
    936 : 'Psi',
    937 : 'Omega',
    945 : 'alpha',
    946 : 'beta',
    947 : 'gamma',
    948 : 'delta',
    949 : 'epsilon',
    950 : 'zeta',
    951 : 'eta',
    952 : 'theta',
    953 : 'iota',
    954 : 'kappa',
    955 : 'lambda',
    956 : 'mu',
    957 : 'nu',
    958 : 'xi',
    959 : 'omicron',
    960 : 'pi',
    961 : 'rho',
    962 : 'sigmaf',
    963 : 'sigma',
    964 : 'tau',
    965 : 'upsilon',
    966 : 'phi',
    967 : 'chi',
    968 : 'psi',
    969 : 'omega',
    977 : 'thetasym',
    978 : 'upsih',
    982 : 'piv',
    8226 : 'bull',
    8230 : 'hellip',
    8242 : 'prime',
    8243 : 'Prime',
    8254 : 'oline',
    8260 : 'frasl',
    8472 : 'weierp',
    8465 : 'image',
    8476 : 'real',
    8482 : 'trade',
    8501 : 'alefsym',
    8592 : 'larr',
    8593 : 'uarr',
    8594 : 'rarr',
    8595 : 'darr',
    8596 : 'harr',
    8629 : 'crarr',
    8656 : 'lArr',
    8657 : 'uArr',
    8658 : 'rArr',
    8659 : 'dArr',
    8660 : 'hArr',
    8704 : 'forall',
    8706 : 'part',
    8707 : 'exist',
    8709 : 'empty',
    8711 : 'nabla',
    8712 : 'isin',
    8713 : 'notin',
    8715 : 'ni',
    8719 : 'prod',
    8721 : 'sum',
    8722 : 'minus',
    8727 : 'lowast',
    8730 : 'radic',
    8733 : 'prop',
    8734 : 'infin',
    8736 : 'ang',
    8743 : 'and',
    8744 : 'or',
    8745 : 'cap',
    8746 : 'cup',
    8747 : 'int',
    8756 : 'there4',
    8764 : 'sim',
    8773 : 'cong',
    8776 : 'asymp',
    8800 : 'ne',
    8801 : 'equiv',
    8804 : 'le',
    8805 : 'ge',
    8834 : 'sub',
    8835 : 'sup',
    8836 : 'nsub',
    8838 : 'sube',
    8839 : 'supe',
    8853 : 'oplus',
    8855 : 'otimes',
    8869 : 'perp',
    8901 : 'sdot',
    8968 : 'lceil',
    8969 : 'rceil',
    8970 : 'lfloor',
    8971 : 'rfloor',
    9001 : 'lang',
    9002 : 'rang',
    9674 : 'loz',
    9824 : 'spades',
    9827 : 'clubs',
    9829 : 'hearts',
    9830 : 'diams',
    338 : 'OElig',
    339 : 'oelig',
    352 : 'Scaron',
    353 : 'scaron',
    376 : 'Yuml',
    710 : 'circ',
    732 : 'tilde',
    8194 : 'ensp',
    8195 : 'emsp',
    8201 : 'thinsp',
    8204 : 'zwnj',
    8205 : 'zwj',
    8206 : 'lrm',
    8207 : 'rlm',
    8211 : 'ndash',
    8212 : 'mdash',
    8216 : 'lsquo',
    8217 : 'rsquo',
    8218 : 'sbquo',
    8220 : 'ldquo',
    8221 : 'rdquo',
    8222 : 'bdquo',
    8224 : 'dagger',
    8225 : 'Dagger',
    8240 : 'permil',
    8249 : 'lsaquo',
    8250 : 'rsaquo',
    8364 : 'euro'
};

/**
 * Tells whether player statistics data is available.
 * @param season
 * @return {Boolean}
 */
de.wwemedia.dfl.playerStatisticsDataAvailable = function (season)
{
    return (season >= 2011);
};

/**
 * Tells whether tracking data is available.
 * @param league
 * @param season
 * @return {Boolean}
 */
de.wwemedia.dfl.trackingDataAvailable = function (league, season)
{
    return ((league == 51) && (season >= 2011));
};

/**
 * Tells whether complete bench data is available.
 * @param league
 * @param season
 * @return {Boolean}
 */
de.wwemedia.dfl.benchDataAvailable = function (league, season) {
	return (((league == 51) && (season >= 1992)) || ((league == 52) && (season >= 2000)));
};

/**
 * Tells whether complete shirt number data is available.
 * @param league
 * @param season
 * @return {Boolean}
 */
de.wwemedia.dfl.shirtNumberDataAvailable = function (league, season) {
	return ((league == 51) && (season >= 1992)) || ((league == 52) && (season >= 1999));
};

/**
 * Tells whether lineup interval data is available.
 * @param league
 * @param season
 * @param matchDay
 * @return {Boolean}
 */
de.wwemedia.dfl.lineupIntervalDataAvailable = function (league, season, matchDay) {
	return ((season >= 2012) || ((league == 51) && (season == 2011) && (matchDay >= 18)));
};

//var xml_hostURL = "http://dfl.wwe.biz/data/feed/xml/";
//var xml_path_tournamentKey = "51";
//var xml_path_seasonKey = "2010";
var reloadmsec = 10; // waiting in msec before reloading xml
var urlParam;
var wwe_language = 'de';
var firstLoad = true;

jQuery.fn.extend({

    /**
     * returns location object if searchStr not exist
     * returns true / false if searchStr found or not
     *
     */

 urlParser: function(searchStr){
     if(typeof searchStr != 'undefined' && searchStr){
         /* window.location.pathname */
         if (window.location.href.search(searchStr) > -1){
             return true;
         } else {
             return false;
         }
     } else {
         return window.location;
     }
    },

/**
* Returns get parameters.
*
* If the desired param does not exist, null will be returned
*
* If param === true then a function with all GET params will be returned
* @example func = $(document).getUrlParam(true);
* @example value = func('myParam');
* by Marko Meischke
*
* To get the document params:
* @example value = $(document).getUrlParam("paramName");
*
* To get the params of a html-attribut (uses src attribute)
* @example value = $('#imgLink').getUrlParam("paramName");
*/
 getUrlParam: function(strParamName){
      if(strParamName !== true) strParamName = encodeURIComponent(decodeURI(strParamName));
	  var returnVal = new Array();
	  var qString = null;
      var retFunc = function(){return null;}
	  //if ($(this).attr("nodeName")=="#document") { // JQ <= 1.5
      //if ($(this).prop("nodeName")=="#document") { // JQ >= 1.6
	  if ($(this).get(0).nodeName =="#document") { // JQ >= 1.6.2
	  	//document-handler
		if (strParamName === true || window.location.search.search(strParamName) > -1 ){
			qString = window.location.search.substr(1,window.location.search.length).split("&");
		}
	  } /*else if ($(this).attr("src")!="undefined") {
	  	var strHref = $(this).attr("src")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  } else if ($(this).attr("href")!="undefined") {
	  	var strHref = $(this).attr("href")
	  	if ( strHref.indexOf("?") > -1 ){
	    	var strQueryString = strHref.substr(strHref.indexOf("?")+1);
	  		qString = strQueryString.split("&");
	  	}
	  }*/
      else {
	  	if(strParamName === true) {return retFunc;} else {return null;};
	  }

	  if (strParamName !== true && (qString==null || qString=="")) {
          return null;
      } else if(strParamName === true && (qString==null || qString=="")){
          return retFunc;
      }

      if(strParamName === true){
          //var retObj={};
          var sKey = '';
          var sVal = '';
          retFunc = function(){
            if(arguments.length==1 && typeof this[arguments[0]] != 'undefined'){
                return this[arguments[0]];
            } else if(arguments.length==2 && arguments[0] > ''){
                this[arguments[0]] = arguments[1];
                return this[arguments[0]];
            } else {
                return null;
            }
          }

          for (var i=0;i<qString.length; i++){
              sKey = encodeURIComponent(decodeURI(qString[i].split("=")[0]));
              sVal = encodeURIComponent(decodeURI(qString[i].split("=")[1]));
              //alert(sKey + " = " + sVal);
              //retObj[sKey]=sVal;
              retFunc(sKey,sVal);
          }
          //return retObj;
          return retFunc;
      } else {
	    for (var i=0;i<qString.length; i++){
			if (encodeURIComponent(decodeURI(qString[i].split("=")[0])) == strParamName){
				returnVal.push(qString[i].split("=")[1]);
			}
	    }
	    if (returnVal.length==0) return null;
	    else if (returnVal.length==1) return returnVal[0];
	    else return returnVal;
	  }
      return null;
 }
});


function wwe_UrlExists(url,type){
	if (!url || typeof url != 'string') return false;    
	try {
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send(null);
		if (type==1) return http.status;
		if (http.status==200) return true;
		return false;
	} catch (e) {
		return false;
	}
	return false;
}

function getRandomParam(){
	return '?cb=' + parseInt(Math.random() * 999999).toString();
}

/**
Convert rgb to hex 
*/
function rgb2hex(rgb) {
	if (typeof rgb != 'string') return '#000000';		
	if (rgb.search("rgb") == -1 ) {
          return rgb;
     } else {
          rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
          function hex(x) {
               return ("0" + parseInt(x).toString(16)).slice(-2);
          }
          return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]); 
     }
}

/**
Convert rgb to 1-Bit per color channel 
*/
function rgb2bit(rgb) {
	if(typeof rgb == 'string') {
	
	    function intToBin(x) {
			return parseInt(((('00000000' + parseInt(x).toString(2)).slice(-8)).slice(0,1)), 2).toString();
        }
		
		function hexToBin(x) {
			return parseInt(((('00000000' + parseInt('0x'+x).toString(2)).slice(-8)).slice(0,1)), 2).toString();
        }
	
		if ( rgb.search("rgb") == -1 && rgb.search('#') == 0) {
			return  hexToBin(rgb.slice(1,3)) + hexToBin(rgb.slice(3,5)) + hexToBin(rgb.slice(5,7)); 
		} else if (rgb.search("rgb") >= 0) {
			rgb = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+))?\)$/);
			return  intToBin(rgb[1]) + intToBin(rgb[2]) + intToBin(rgb[3]); 
		} 
	} 
	return rgb;
}

/**
get tallest element and set all other width the same class to this height
*/
function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}

/**
 * get localized text
 */

function checkLanguage() {
    if(typeof lang == 'string' && lang == 'en') wwe_language = 'en';
    if($().urlParser('/en/')) wwe_language = 'en';
    //if($().urlParser('lang=en')) wwe_language = 'en'; // DEV
}

function loadLanguage(){
    var str = '';
    var lang = wwe_language;
    if(lang != 'de'){
        $('[class*=wwe-lang]').each(function(i1,e1){
            str = $(e1).attr('class').split(" ");
            $(str).each(function(i2,e2){
               if(e2.match(/^wwe-lang-.+/) && typeof gLangStr[lang][e2] != 'undefined'){

                   if(gLangStr[lang][e2].indexOf('<') != -1 && gLangStr[lang][e2].indexOf('>') != -1){
                    $('.'+ e2).html(gLangStr[lang][e2]);
                   } else {
                    $('.'+ e2).text(gLangStr[lang][e2]);
                   }
               }
            });
		});
    }
}

function setToolTipTimer(){
	$('.wwe-tooltip-container').hover(
		function() {
			var newthis = $(this);
			timer = setInterval(function() {showTip(newthis)}, 500);
			$(this).css({'z-index' : '20'}); /*Add a higher z-index value so this div stays on top*/ 
			var toolTipWidth		= $(this).children().width();
			var toolTipXPosition	= $(this).position().left;
			var toolTipParentWidth	= $(this).parents('.wwe-main').width();
			
			if (toolTipParentWidth < (toolTipWidth + toolTipXPosition + 20)) {
				$(this).children().css('left','-'+(toolTipWidth-31)+'px');
				$(this).children().find('em').css('left',(toolTipWidth-10)+'px');
			}
		},
		function() {
			clearInterval(timer);
			$(this).find('span.wwe-tooltip').hide();
			$(this).css({'z-index' : '1'}); /* Set z-index back to 0 */
		},
		showTip = function(newthis) {
			clearInterval(timer);
			newthis.find('span.wwe-tooltip').show();
		}
	);
}

function setToolTipTimerDetails() {
	$('.wwe-tooltip-container').hover(
		function() {
			var newthis = $(this);
			timer = setInterval(function() {showTip(newthis)}, 500);
		},
		function() {
			clearInterval(timer);
			$(this).find('span.wwe-tooltip-goals').hide();
		},
		showTip = function(newthis) {
			clearInterval(timer);
			newthis.find('span.wwe-tooltip-goals').show();
		}
	);
}


/* returns formatted string for output in html */
function getOStr (value) {
	if (typeof value == 'undefined' || isNaN(value) || value.toString()=='NULL') {
		if(arguments.length==2) {
			return arguments[1];
		} else {
			return '';
		}
	}
	return value;
}

/* returns string if value is 0 */
function replaceStr (value,eqValue,replaceString) {
	if(value == eqValue){
		return replaceString;
	}
	return value;
}

/* Auf der Funktion ivw_get() von BTD um den Zählpixel neu zu laden*/
function wwe_ivwget() {
	//if(!firstLoad)ivw_get();	
	firstLoad = false;
}
