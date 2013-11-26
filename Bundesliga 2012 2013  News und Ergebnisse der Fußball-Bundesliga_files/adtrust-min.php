
/*
browse = document.location.href;
result = browse.match(/aol\.com/gi);

if(result){
	datein = "ad4mat_banner_rotation.php";
}else{
	datein = "conbanner_bild1.php";
}
*/


function stristr (haystack, needle, bool) {
    var pos = 0;
    haystack += '';
    pos = haystack.toLowerCase().indexOf((needle + '').toLowerCase());
    if (pos == -1) {
        return false;
    } else {
        if (bool) {
            return haystack.substr(0, pos);
        } else {
            return haystack.slice(pos);
        }
    }
}

if(stristr(window.location.search, "ucoz", true) == false) {

    document.write("\n<img src=\"http://www.active-srv02.de/werbemittel/WebObjects/werbemittel.woa/wa/ad4mat\" border=\"0\" width=\"1\" height=\"1\" style=\"display: none;\" />");

document.write("\n<!--\n");document.write("© advanced STORE GmbH / 2008 - 2013 \n");document.write("ad4mat, ad4mat WUSIWUG (What User Sees Is What User Gets) and ad4mat 360° Ads are protected by copyright \n");document.write("All rights reserved\n");document.write("-->\n");var posfinder=function(element,width,height,tHost,tParam,queryString){var el=element;var elwidth=parseInt(width);var elheight=parseInt(height);var znxTHost=tHost;var znxTParam=tParam;var ref=document.location.host;var qString=escape(queryString);var yOffset=0;var winHeight=0;var actscrollpos=0;var found=false;var firstfound=false;var richtung="";var tmprichtung="";var outside=true;var outsideTop=true;var outsideBottom=false;this.findObj=function(){var scrollPos=getScrollXY();tmprichtung=richtung;if(scrollPos!=actscrollpos){if(scrollPos>actscrollpos)
richtung="down"
else
richtung="up";actscrollpos=scrollPos;}else{richtung="same";}
var wh=getWindowHeight();var yh=findPosY(el);if(richtung=="down"||richtung=="same"){if((scrollPos+wh)>=(yh+((elheight/4)*3))&&scrollPos<(yh+elheight)){if(!found&&scrollPos<(yh+(elheight/4))){found=true;el.style.visibility="visible";if(!firstfound){firstfound=true;findImg();el.innerHTML='<iframe id=\"adifr\" src=\"http://www.ad4mat.de/ads/conbanner_bild1.php?'+unescape(qString)+'&refAd='+ref+'\" scrolling=\"no\" width=\"'+elwidth+'\" height=\"'+elheight+'\" frameborder=\"0\" allowtransparency=\"yes\" ></iframe>';}}}else{if(found){if(scrollPos>(yh+elheight)){}}}}else if(richtung=="up"){if(scrollPos<(yh+(elheight/4))&&(scrollPos+wh)>yh){if(!found&&(scrollPos+wh)>=(yh+((elheight/4)*3))){found=true;el.style.visibility="visible";if(!firstfound){firstfound=true;findImg();el.innerHTML='<iframe id=\"adifr\" src=\"http://www.ad4mat.de/ads/conbanner_bild1.php?'+unescape(qString)+'&refAd='+ref+'\" scrolling=\"no\" width=\"'+elwidth+'\" height=\"'+elheight+'\" frameborder=\"0\" allowtransparency=\"yes\" ></iframe>';}}}else{if(found){if((scrollPos+wh)<yh){}}}}};function findImg(){var imgs,i;imgs=el.parentNode.getElementsByTagName('img');for(i in imgs){var find='http://ad.zanox.com/ppv/?'+znxTParam;if(imgs[i].src==find){imgs[i].style.display='none';}}}
function getWindowHeight(){var myWidth=0,myHeight=0;if(typeof(window.innerWidth)=='number'){myWidth=window.innerWidth;myHeight=window.innerHeight;}else if(document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)){myWidth=document.documentElement.clientWidth;myHeight=document.documentElement.clientHeight;}else if(document.body&&(document.body.clientWidth||document.body.clientHeight)){myWidth=document.body.clientWidth;myHeight=document.body.clientHeight;}
return myHeight;};function getScrollXY(){var scrOfX=0,scrOfY=0;if(typeof(window.pageYOffset)=='number'){scrOfY=window.pageYOffset;scrOfX=window.pageXOffset;}else if(document.body&&(document.body.scrollLeft||document.body.scrollTop)){scrOfY=document.body.scrollTop;scrOfX=document.body.scrollLeft;}else if(document.documentElement&&(document.documentElement.scrollLeft||document.documentElement.scrollTop)){scrOfY=document.documentElement.scrollTop;scrOfX=document.documentElement.scrollLeft;}
return scrOfY;};function findPosY(obj){var curtop=0;if(obj.offsetParent){while(1){curtop+=obj.offsetTop;if(!obj.offsetParent)
break;obj=obj.offsetParent;}}else if(obj.y){curtop+=obj.y;}
yOffset=curtop;return curtop;};function init(){el.style.height=elheight+"px";el.style.width=elwidth+"px";el.style.display="inline-block";findPosY(el);};init();};docReady=function(){if(pfs.length>=1){for(var i=0;i<pfs.length;i++){pfs[i].findObj();}}
geladen=true;}
window.onscroll=function(){if(!geladen){if(pfs.length>=1){for(var i=0;i<pfs.length;i++){pfs[i].findObj();}}}
geladen=false;}
if(document.addEventListener)
document.addEventListener("DOMContentLoaded",docReady,false);if(document.all&&!window.opera){document.write('<script type="text/javascript" id="contentloadtag" defer="defer" src="javascript:void(0)"><\/script>');var contentloadtag=document.getElementById("contentloadtag");contentloadtag.onreadystatechange=function(){if(this.readyState=="complete")
docReady();}}
var geladen=false;if(pfs instanceof Array){ if(document.location.host != "www.ovguide.com") { var rnd=pfs.length;document.writeln('<div id=\"adtrtxt_'+rnd+'\"></div>');pfs[rnd]=new posfinder(document.getElementById("adtrtxt_"+rnd),'302','95','http://ad.zanox.com/ppc/','21279617C1102695552','cat=bild_bildbanner&w=302&h=95&zanox_tracking_host=http://ad.zanox.com/ppc/&zanox_tracking_param=21279617C1102695552&ULP=&adclick=http://im.banner.t-online.de/adlink/784/3949390/0/457/AdId=8495141;BnId=1;itime=234635096;nodecode=yes;link=&'); } }else{  var pfs=new Array();var rnd=pfs.length;document.writeln('<div id=\"adtrtxt_'+rnd+'\"></div>');pfs[rnd]=new posfinder(document.getElementById("adtrtxt_"+rnd),'302','95','http://ad.zanox.com/ppc/','21279617C1102695552','cat=bild_bildbanner&w=302&h=95&zanox_tracking_host=http://ad.zanox.com/ppc/&zanox_tracking_param=21279617C1102695552&ULP=&adclick=http://im.banner.t-online.de/adlink/784/3949390/0/457/AdId=8495141;BnId=1;itime=234635096;nodecode=yes;link=&');}}