var W=window,D=document,E=document.documentElement,N=navigator,L=location,R=RegExp,U="undefined",B,H=TgET("head")[0],C,x,i;
var TisjQ=W.jQuery?1:0,T$=TisjQ?jQuery.noConflict():function(){},T$W=T$(window)||{},T$D=T$(document)||{},T$B;
if(!W.T){var T={T0:"",EGO:"",SN:0,ID:0,TI:0,SLIN:0,PN:"",PORT:0,ART:0,PRE:0,KG:"",R0:"",PA:"",TPD:"",TS:0},TMS={IVW:""}
}T.HOME=T.ID==46?1:0;if(!C){(function(){var _ua=N.userAgent.toLowerCase(),_v=0,_vv=0,_vs="0.0",_n=0,_x,_b="";
function fU(s){return _ua.indexOf(s)!=-1}function fUL(a){var i=arguments.length;for(;
i--;){if(_ua.indexOf(arguments[i])!=-1){return 1}}return 0}function fV(s,n){var v=_ua.match(RegExp(s+"[ \\/]?(\\d*\\.?[0-9a-z]*)(\\.[0-9a-z]*)?(\\.[0-9a-z]*)?"));
_v=parseFloat(_vs=(v[1]||0)+(v[2]||"")+(v[3]||""));_n=n}function fV2(s){return(s=_ua.match(RegExp("[ \\(]"+s+" ?(\\d*(?:[_\\.]\\d*)*)")))&&s[1]?s[1].replace(/_/g,"."):0
}C={ua:_ua,bVer:0,bVerM:0,bVerS:0,bName:0,bBrows:0,isIE:0,isFF:0,isCH:0,isSF:0,isOP:0,isWK:0,isNN:0,isMZ:0,os:0,osVer:0,isIos:0,isWin:0,isWinPhone:0,isAndr:0,vpW:-1,vpH:-1,vp:{w0:-1,h0:-1,SB:15},swf:0,_:0};
with(C){if(fU("opera")){if(fU("version")){fV("version",_b="OP")}else{_ua=(_x=_ua).replace("opera m","OperA m");
fV("opera",_b="OP");_ua=_x}isOP=1}else{if(fU("msie")){fV("msie","IE");isIE=1}else{if(fU("firefox")){fV("firefox\\d*",_b="FF");
isFF=1}else{if(fU("chrome")){fV("chrome",_b="CH");isCH=1}else{if(fU("safari")){if(fU("version")){fV("version",_b="SF")
}else{fV("safari",_b="SF")}if(_v>=85){_v=parseFloat(_vs="0."+_vs)}isSF=1}else{if(fU("khtml")){fV("khtml","WK");
isWK=1}else{if(fU("netscape")){fV("netscape\\d*","NN");isNN=1}else{if(fU("gecko")){fV("rv:","MZ");
isMZ=1}else{if(fU("mozilla")){fV("mozilla","NN");isNN=1}}}}}}}}}if(_v==(_vv=parseInt(_v))){_v+=".0"
}bVer=_v,bVerM=_vv,bVerS=_vs,bName=_n,bBrows=(!_n||!_v)?0:_n+_vv;if(_b){_x=TgET("html")[0];
_x.className+=(_x.className?" Tis":"Tis")+_b}}C.isIEVer=function(v,x){var V=C.bVerM;
return C.isIE&&(x&&(x>0?V>=v:V<=v)||V==(v||V))?V:0};C.isTouch=fUL("touch","windows phone","(ipod","(ipad","(iphone","android");
C.isIpad=fU("(ipad")?1:0;C.isIphone=fU("(iphone")?1:0;C.isIpod=fU("(ipod")?1:0;C.isBberry=fU("blackberry")?1:0;
with(C){if(fU("win")){if(fU("windows phone")){isWinPhone=1;os="WPH";osVer=fV2("windows phone(?: os)?")
}else{isWin=1;os="WIN";osVer=(_x=_ua.replace("windows xp","winnt5.1").match(/win(?:dows )?nt ?(\d*\.?\d*)/))?_x[1]:0
}}else{if(fU("mac ")){if(fU("like mac os")||fU("mobile")){os="IOS";isIos=1}else{os="MAC"
}osVer=fV2("os(?: x)?")}else{if(fU("android")){os="AND";isAndr=1;osVer=fV2("android")
}else{if(_ua.replace("firefox","").indexOf("x")!=-1){os="UNX"}}}}}C.isAndrVer=function(v){var V=parseInt(C.osVer);
return C.isAndr&&V==(v||V)?1:0};C.osWNTName=function(){var v=C.osVer,n;return C.isWin?v&&v<=4?"Windows NT":(n={"5.0":"2000","5.1":"XP","5.2":"XP x64","6.0":"Vista","6.1":"7","6.2":"8"}[v])?"Windows "+n:0:0
};C.isBit64=function(){return(N.platform.toLowerCase().indexOf("win64")!=-1||_ua.match(/\w64\b/)&&fUL("amd64","x86_64","x64;","win64","wow64"))?1:0
};if(((_x=N.mimeTypes)&&(_x=_x["application/x-shockwave-flash"]))?(_v=_x.enabledPlugin):0){C.swf=parseFloat(_v.description.substring("Shockwave Flash ".length))
}else{if(C.isIE&&C.isWin){execScript('on error resume next:dim f,x,o:f=0:for x=4 to 20:o=0:o=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash."&x)):if o then f=x else exit for end if:next',"vbscript");
C.swf=f}}C.cook=typeof(_x=N.cookieEnabled)==U?false:_x?1:0;C.java=typeof(N.javaEnabled)==U?false:N.javaEnabled()?1:0;
C.vpgWH=W.innerWidth?function(){C.vpH=W.innerHeight;return C.vpW=W.innerWidth}:function(){C.vpH=E.offsetHeight;
return C.vpW=E.offsetWidth};C.vpgSB=function(){with(C.vp){var r=0;C.vpgWH();if(w0<0){w0=C.vpW;
h0=C.vpH}if(w0-E.clientWidth>=SB){r|=2}if(h0-E.clientHeight>=SB){r|=1}return r}};
C.atWork=false;C.iniTmDf=0;C.ini=function(){if(T.PORT&&T.R0&&L.protocol!="https:"){T$.get(T.R0+(T.HOME?"?_"+T.T0:""),null,function(d,s,x){if(x){d=x.getResponseHeader("Date");
C.iniTmDf=d?Date.parse(d)-TgT():0;s=x.getResponseHeader("Via");C.atWork=(T.PRE||s&&s.match(/proxy\d*\.t-online\.net/))?1:0
}})}}})()}function Alert(txt){if(typeof(alert_on)==U||alert_on){alert(txt)}}var TfiB,TfiH;
function TfiBxH(){var x,e=document.documentElement;TfiH=W.innerHeight?W.innerHeight:(x=e.offsetHeight)?x:-1;
return TfiB=W.innerWidth?W.innerWidth:(x=e.offsetWidth)?x:-1}function rxV(x,n){(eval("/"+x+"[ \\/]?(\\d*\\.?\\d*)(\\.(\\d*))?(\\.(\\d*))?/")).exec(brU);
brVs=R.$1+R.$3+R.$5;brV=parseFloat(brVs);if(n){brN=n}}function uX(s){return brU.indexOf(s)+1
}if(typeof sys==U){with(N){brV0=appVersion;brC0=appCodeName;brU=(brU0=userAgent).toLowerCase();
os=uX("win")?"WIN":uX("mac")?"MAC":uX("x")?"UNX":"-";brVs="-";brN=(brN0=appName).toLowerCase();
brF=brN=brN.indexOf("microsoft")>=0?"IE":brN.indexOf("netscape")>=0?"NN":"-";if(uX("gecko")){brF="GK";
isGK=1}else{isGK=0;if(uX("t-online")){brN="TO"}}if(uX("netscape")){rxV("netscape\\d*",0)
}else{if(uX("firefox")){rxV("firefox\\d*","FF")}else{if(uX("safari")){rxV("safari","SF");
if((""+brV).indexOf(".")<0){brV="0."+brV}}else{if(uX("gecko")){rxV("rv:","MZ")}else{if(uX("opera")){rxV("opera","OP")
}else{brVs=brV=parseFloat((x=uX("msie"))?brU.substring(x+4):brV0)}}}}}brB=brN+(brVv=parseInt(brV));
if(brV==brVv){brV+=".0"}if(W.screen){bsB=screen.width;bsH=screen.height;bsF=screen.colorDepth
}else{bsB=bsH=bsF=0}fiB=fiH=0;if(W.outerWidth){faB=W.outerWidth;faH=W.outerHeight
}else{faB=faH=0}brJ=typeof(N.javaEnabled)==U?-1:javaEnabled()?1:0;brC=typeof(x=N.cookieEnabled)==U?-1:x?1:0;
isIE=D.all?1:0,isIE4=(!(jsDOM=D.getElementById?1:0)&&brIE)?1:0,isNN4=D.layers?1:0,brD=jsDOM?"DOM":isIE4?"IE4":isNN4?"NN4":"-";
sf=0;if(((x=N.mimeTypes)&&(x=x["application/x-shockwave-flash"]))?(x=x.enabledPlugin):0){sf=parseFloat(x.description.substring("Shockwave Flash ".length))
}else{if(brF=="IE"&&os=="WIN"){execScript('on error resume next:dim f,x,o:f=0:for x=4 to 20:o=0:o=IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash."&x)):if o then f=x else exit for end if:next',"vbscript");
sf=f}}brX=brF;sys=1}}var TisIE=brU.indexOf("msie")>=0,TisIE6=TisIE&&brV<7,TisIE7=TisIE&&brV>=7&&brV<8,TisIE8=TisIE&&brV>=8&&brV<9,TisIE9=TisIE&&brV>=9,TisIEall=TisIE||D.all,TisFF=brU.indexOf("firefox")>=0,TisGK=brU.indexOf("gecko")>=0,TisOP=brU.indexOf("opera")>=0,TisCH=brU.indexOf("chrome")>=0,TisSF=brU.indexOf("safari")>=0&&!TisCH,TisWK=brU.indexOf("khtml")>=0;
var T_os=os,T_brN=brN;var TisTouch=function(){var t=["touch","windows phone","ipod","ipad","iphone","android"],i=t.length,u=brU;
for(;i--;){if(u.indexOf(t[i])>=0){return true}}return false}();var TisIpad=brU.indexOf("ipad")>=0,TisIphone=brU.indexOf("iphone")>=0,TisAndr=brU.indexOf("android")>=0,TisAndr4=brU.indexOf("android 4")>=0;
if(!self.name&&T.EGO){self.name=T.EGO}var Ttop=self==top?1:0;function TgEI(e,b){return(b?b:document).getElementById(e)
}function TgEN(e,b){return(b?b:document).getElementsByName(e)}function TgET(e,b){return(b?b:document).getElementsByTagName(e)
}function TgEC(e,t,b,s){var a=arguments,l=a.length,i,j,x,r=eval("/\\b"+e+"\\b/"),c=[];
if(l==1){s=b=0,t="*"}else{switch(typeof a[1]){case"number":s=t,b=0,t="*";break;case"object":s=b,b=t,t="*"
}}if(l>2&&typeof a[2]=="number"){s=b,b=0}if(!b){b=document}if(!s){s=0}if(typeof b.length==U){b=[b]
}for(j=0;j<b.length;j++){for(x=TgET(t,b[j]),l=x.length,i=0;i<l;i++){if((a=x[i]).className&&a.className.match(r)){if(a.className.replace(/ /g,"")==e){if(s>=0){c.push(a)
}}else{if(s<=0){c.push(a)}}}}}return c}function TgEx(e,m,i){if(typeof(e)=="object"){return e
}if(!m){return TgEI(e)}return(m==1?TgEN(e):m==2?TgET(e):TgEC(e))[i?i:0]}function TgEpx(e,m,i){var r;
return(r=TgEx(e,m,i).firstChild).nodeType!=1?r.nextSibling:r}function TgEfC(e,m,i){var r=TgEx(e,m,i).firstChild;
while(r&&r.nodeType!=1){r=r.nextSibling}return r}TgEfc=TgEfC;function TgElC(e,m,i){var r=TgEx(e,m,i).lastChild;
while(r&&r.nodeType!=1){r=r.previousSibling}return r}TgElc=TgElC;function TgEax(e,m,i){var r;
return(r=TgEx(e,m,i).parentNode).nodeType!=1?r.previousSibling:r}function TgEpN(e,m,i){return TgEx(e,m,i).parentNode
}TgEpn=TgEpN;function TgEpX(e,m,i){var r;return(r=TgEx(e,m,i).nextSibling).nodeType!=1?r.nextSibling:r
}function TgEnS(e,m,i){var r=TgEx(e,m,i).nextSibling;while(r&&r.nodeType!=1){r=r.nextSibling
}return r}TgEns=TgEnS;function TgEaX(e,m,i){var r;return(r=TgEx(e,m,i).previousSibling).nodeType!=1?r.previousSibling:r
}function TgEpS(e,m,i){var r=TgEx(e,m,i).previousSibling;while(r&&r.nodeType!=1){r=r.previousSibling
}return r}TgEps=TgEpS;function TgExT(ex,et,m,i){return TgEx(ex,m,i).getElementsByTagName(et)
}function TgfC(e,x){for(var i=0;i<x;i++){e=e.firstChild}return e}function TgpN(e,x){for(var i=0;
i<x;i++){e=e.parentNode}return e}function TsA(e,a,v,m,i){TgEx(e,m,i).setAttribute(a,v)
}function TgA(e,a,m,i){return TgEx(e,m,i).getAttribute(a)}function TgAN(e,a,m,i){return Number(TgEx(e,m,i).getAttribute(a))
}function TgS(e,m,i){return TgEx(e,m,i).style}function TsS(e,s,v,m,i){TgEx(e,m,i).style[s]=v
}function TsV(e,v,m,i){TgEx(e,m,i).style.visibility=v?"visible":"hidden"}function TsD(e,d,m,i){TgEx(e,m,i).style.display=d==0?"none":d=="i"?"inline":"block"
}function TsZ(e,z,m,i){TgEx(e,m,i).style.zIndex=z}function TsG(e,x,m,i){TgEx(e,m,i).disabled=x
}function TaddEv(obj,ev,fn,m,i){obj=TgEx(obj,m,i);ev=ev.split(";");var ev1=ev[0],ev2=ev[1]?ev[1]:ev1;
if(obj.addEventListener){obj.addEventListener(ev1,fn,false)}else{if(obj.attachEvent){obj.attachEvent("on"+ev2,fn)
}else{return false}}return true}function TgT(){return(new Date()).getTime()}function TcET(tag,typ){var el=D.createElement(tag);
if(typ){el.type=typ}return el}function ThEC(e,c){return eval("/\\b"+c+"\\b/").test(e.className)?1:0
}function TsdEC(e,c,x,m,i){var el=TgEx(e,m,i),nm=el.className.replace(eval("/ *\\b"+c+"\\b/g"),"");
el.className=nm+(x==1?" "+c:"")}function TgDOM_0(pN){var d,p,r;document.write('<div id="T_"></div>');
p=(d=document.getElementById("T_")).parentNode;if(pN){r=p}else{r=d;do{r=r.previousSibling
}while(r.tagName!="SCRIPT");r=r.previousSibling;while(r&&r.nodeType!=1){r=r.previousSibling
}}p.removeChild(d);return r}function TgPos(obj,robj){var l=0,t=0,d;if(typeof obj=="string"){obj=(TgEI(obj))
}while(obj){l+=obj.offsetLeft;t+=obj.offsetTop;obj=obj.offsetParent}if(robj){d=typeof robj=="string"?TgPos(TgEI(robj)):robj.length?robj:TgPos(robj);
l-=d[0];t-=d[1]}return[l,t]}function TgZZ(s){return Math.round(Math.random()*(s||100000))
}function TgZI(s){return"T"+TgZZ(s)}function Tzn(x,n){return"00000".substr(0,n-(""+x).length)+x
}function Tz2(x){return((x=""+x).length<2?"0"+x:x).substr(0,2)}function TmCED(ex){return typeof(ex)=="number"?new Date(TgT()+ex*1000):(ex=ex.split(",")).length==3?new Date(ex[0],ex[1]-1,ex[2]):new Date(ex[0],ex[1]-1,ex[2],ex[3],ex[4],ex[5])
}function TsC(n,v,e,p,d,s,vne){if(!C.cook){return false}D.cookie=n+"="+(vne?v:escape(v))+(e?"; expires="+TmCED(e).toGMTString():"")+(p?"; path="+p:"")+(d?"; domain="+d:"")+(s?"; secure":"");
return true}function TgC(n){if(!C.cook){return false}var c,s=(c=D.cookie).indexOf(n+="="),e;
return s<0?null:unescape(c.substring(s+n.length,(e=c.indexOf(";",s))<0?c.length:e))
}function TdC(n,p,d,s){return TsC(n,0,-1,p,d,s)}function TgCwt(){var a=[],b="0",c,i,j,x;
if(!(c=TgC("wt"))||c.indexOf("[")<26){c="00000000000000000000000000|0[]"}Ads_prf=x=c.replace(/^(..)(..)(..)(..)(..)(..)(.)(.)(..)(..)(..)(..)(.)(..)(.).*/,"a[0]='$1';a[1]='$2';a[2]='$3';a[3]='$4';a[4]='$5';a[5]='$6';a[6]='$7';a[7]='$8';a[8]='$9';a[9]='$10';a[10]='$11';a[11]='$12';a[12]='$13';a[13]='$14';a[14]='$15';");
if((i=c.indexOf("|"))>0&&(j=c.indexOf("["))>i+1){b=c.substring(i+1,j)}Ads_prf+="b='"+b+"';";
eval(x);a[15]=b;return a}var Twt=Ttop?TgCwt():"";function TckWS(x){return typeof(x)==U?W.Storage?1:0:x?localStorage:sessionStorage
}function TsWS(n,v,e,a,vne,vjn){if((a=a||1)>=1&&TckWS()){var st=TckWS(a<=2),ws=vne||vjn?v:escape(v);
if(vjn){st[n]=JSON.stringify(ws);st[n+"_jsn"]=1}else{st[n]=ws;st[n+"_jsn"]=0}st[n+"_exp"]=e?TmCED(e):0;
return 1}else{if(a&1){TsC(n,v,e,0,0,0,vne);return -1}}return null}var Tgws_="";function TgWS(n,a){if((a=a||1)>=1&&TckWS()){var st=TckWS(a<=2),ws,e;
if(!(Tgws_=ws=st[n])){return null}if(a<=2&&(e=st[n+"_exp"]||0)&&TgT()>Date.parse(e)){TdWS(n,a);
return null}return st[n+"_jsn"]!="0"?JSON.parse(ws):unescape(ws)}else{if(a&1){Tgws_=-1;
return TgC(n)}}return Tgws_=null}function TdWS(n,a){if((a=a||1)>=1&&TckWS()){var st=TckWS(a<=2);
if(n===0){st.clear()}else{st.removeItem(n);st.removeItem(n+"_jsn");st.removeItem(n+"_exp")
}return 1}else{if(a&1){TdC(n);return -1}}return null}function cssX(css){D.write('<style type="text/css">'+css+"</style>")
}function cssD(css){D.write('<link rel="stylesheet" type="text/css" href="'+css+'" />')
}function Tinc(css_js,media,parent){var a=arguments,l=a.length,x,el,par=H,med="",cj=css_js;
if(l>1&&typeof(x=a[l-1])=="object"){par=x;l--}if(l>1&&typeof(x=a[l-1])=="string"){med=x
}if(cj.match(".js")||cj.match("/tid_js/")){(el=TcET("script","text/javascript")).src=cj;
par.appendChild(el)}else{if(cj.match(".css")||cj.match("/tid_css/")){(el=TcET("link","text/css")).href=cj;
el.rel="stylesheet";if(med){el.media=med}par.appendChild(el)}else{el=TcET("style","text/css");
par.appendChild(el);cj=med?"@media "+med+" {"+cj+"} ":cj+" ";if(el.styleSheet){el.styleSheet.cssText=cj
}else{el.appendChild(D.createTextNode(cj))}}}return el}function Tdel(e,m,i){var el;
return(el=TgEx(e,m,i)).parentNode.removeChild(el)}function TincHead(cssfile,cssx,jsfile,media){var a=arguments,c="",i=0,h=TgET("head")[0],s=D.createElement("style"),j,x=a[a.length-1],m=x.indexOf("media=")==0?x.substr(6):"";
for(;i<a.length;){if((x=a[i++]).indexOf(".js")!=-1){(j=D.createElement("script")).type="text/javascript";
j.src=x;h.appendChild(j)}else{c+=x.indexOf(".css")!=-1?"@import url("+x+")"+m+";":x
}}s.type="text/css";h.appendChild(s);x=s.styleSheet;if(x){x.cssText=c}else{s.appendChild(D.createTextNode(c))
}}function Tcss2Head(file,media){var l=D.createElement("link");l.rel="stylesheet";
l.type="text/css";l.href=file;if(media){l.media=media}TgET("head")[0].appendChild(l)
}function Ttag2Head(tag1,tag2){var a=arguments,ai,i,el,aj,j,m,x;for(i=0;i<a.length;
i++){ai=a[i];x=ai.indexOf(" ");el=D.createElement(ai.slice(0,x));ai=(ai.slice(x+1)+" ").split('" ');
for(j=0,m=ai.length-1;j<m;j++){aj=ai[j];x=aj.indexOf("=");el.setAttribute(aj.slice(0,x),aj.slice(x+2,aj.length))
}H.appendChild(el)}}ADRnd=Math.random().toString().substr(2,9);function IMloadVideoBanner(url){TgEI("im_if_video_cad").src=url
}loadBanner=IMloadVideoBanner;function TadSky(){return C.vpgWH()>820}var ToW_=0;function ToW(u,n,w,h,l,t,r,s,b,k,i){var x=0,y=(b<0&&brX=="IE")?(b=0):1,f;
if(w==-1){x=l=t=-2;w=screen.availWidth;h=screen.availHeight}if(arguments.length==2||n=="ef"){f=W.open("",n)
}else{f=W.open("",n,(w?(",width="+w+(l?(",left="+(l==-1?((bsB-w-10)/2):(l==-2?0:l))):"")):"")+(h?(",height="+h+(t?(",top="+(t==-1?((bsH-h-50)/2):(t==-2?0:t))):"")):"")+(r?",resizable":"")+(s?",status":"")+(b?",scrollbars=yes":"")+(k?",menubar,toolbar,location=yes,directories":""))
}if(!f){return}if(x){f.resizeTo(w,h)}if(y){f.location.href=u}else{with(f.document){open();
write('<html><head></head><body style="margin:0;padding:0"><iframe src="'+u+'" id="'+(n="i"+n)+'" name="'+n+'" width="100%" height="100%" frameborder="0"></iframe></body></html>');
close();if(i){try{title=i=="-1"?eval("f."+n+".document.title"):i}catch(e){}}}}f.focus();
ToW_=f}oW=ToW;openPopup=openPWCT=openPW=openWindow=ToW;function oWcS(u,n,w,h,l,t,r,s,c,k,i){if(arguments.length>2){oW(u,n,w,h,l,t,r,s,c,k,i)
}else{oW(u,n)}self.close()}function oWtf(o){W.open("",o.target).focus()}function oWtest(txt,x){if(!txt){txt="---"
}with(open("","win_test","width=900,height=300,left=50,top=100,scrollbars,resizable").document){open();
write('<html><body style="margin:10px;padding:0;font:normal 12px courier new" onload="focus();setTimeout(\'focus()\',100)">'+(x?txt.toString().replace(/</g,"&lt;").replace(/>/g,"&gt;"):txt)+"</body></html>");
close()}}function TfH(){if(W.TfH2){TfH2()}TglobHead.inc()}function TfA(){if(W.T){T.T1=TgT()
}B=D.body;T$B=T$(B)||{};B.className+=" Tisjs";Tliq.init();if(W.Tto_homeIni){Tto_homeIni()
}if(W.ArtAddLayer){ArtAddLayer()}if(W.TfA2){TfA2()}TglobHead.run()}function TfU(){if(W.TfU2){TfU2()
}if(W.T){T.T2=TgT()}}function TfY(){TreadyRun();if(W.TfY2){TfY2()}Tliq.setBut();if(W.T){T.T3=TgT()
}}var szmvars;function TfZ(){if(D.pix&&W.T&&T.KG!=40000000&&L.href.indexOf("https:")==-1){szmvars="toi//CP//"+T.KG;
D.write('<script src="http://toi.ivwbox.de/2004/01/survey.js" type="text/javascript"><\/script>')
}if(W.TfZ2){TfZ2()}if(W.T){T.T4=TgT()}}function ToL(){}function pF(s,v,l,w,h,m,u,y,t,a,o,c){var x,r=v?sf>=v:false,f='width="'+w+'" height="'+h+'" ';
l=l?"true":"false";if(r){x=(c?'<span class="'+c+'">':"")+'<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" '+(m?'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+v+',0,0,0" ':"")+f+' /><param name="movie" value="'+s+'" /><param name="quality" value="high" /><param name="loop" value="'+l+'" />'+(o?'<param name="wmode" value="'+o+'" />':"")+'<embed src="'+s+'" '+f+'" quality="high" loop="'+l+'" swliveconnect="false" type="application/x-shockwave-flash"'+(m?' pluginspage="http://www.macromedia.com/go/getflashplayer"':"")+(o?' wmode="'+o+'"':"")+"></embed></object>"+(c?"</span>":"")
}else{x=(y?'<a href="'+y+(t?'" target="'+t:"")+'">':"")+'<img src="'+(u?u:"t.gif")+'" '+f+' alt="'+(a?a:"")+'" border="0" />'+(y?"</a>":"")
}D.write(x);return r}playFlash=pF;function pr(){if(window.print){print()}else{alert("Ihr Browser kann leider nicht aus einer Seite heraus drucken!")
}}var _TclrI;function TclrI(obj,va,vn){if(typeof(va)=="number"){switch(va){case 1:va=obj.title;
break;case -1:obj.av=obj.value;_TclrI=obj;setTimeout("TclrI(0,-9)",150);return;case -9:with(_TclrI){if(av==""){value=title||""
}}return;case 2:var bi=T$(obj).css("background-image");if(bi!="none"){obj.bi=bi}obj.style.backgroundImage="none";
return;case -2:if(obj.value==""&&obj.bi){obj.style.backgroundImage=obj.bi}return}}if(obj.value==va){obj.value=vn||""
}}function Tmxi(o,m,h){o.style.backgroundPosition="0 -"+(m?(m==3?1:m)*(h?h:o.height):0)+"px"
}function rbT(o){o.firstChild.checked=true}function cbT(o){if(o){if(cbt){o.firstChild.checked=o.firstChild.checked?false:true
}cbt=1}else{cbt=0}}cbt=1;var TscIne=null,TscInt=0;function TscSubm(inID){if(TgEI(inID||"Tscini").value){return true
}else{open("http://suche.t-online.de/toi/html/de/startseite_de.html")}return false
}function TscInf(x){if(x==-1){clearTimeout(TscInt);TclrI(TscIne,-2);return}if(x==1||TscIne.value!=""){TclrI(TscIne,2);
return}TscInt=setTimeout("TscInf(0)",200)}function TifIDn(url,h,scl){D.write('<iframe name="x'+(W.ID?ID:0)+'" src="'+url+'" width="100%"'+(h?' height="'+h+'"':"")+' scrolling="'+(scl?scl:"no")+'" frameborder="0" class="tifidn"></iframe>')
}TnlSV=500;TnlH=TnlST=0;TnlV=15;TnlDZ=TnlDI=1;TnlP=1;function TnlRun(){if(parseInt(Tnl0s.top)>-TnlH){Tnl0s.top=parseInt(Tnl0s.top)-TnlDZ+"px";
Tnl1s.top=parseInt(Tnl1s.top)-TnlDZ+"px"}if(parseInt(Tnl0s.top)<=-TnlH){Tnl0s.top=TnlH+"px"
}if(parseInt(Tnl1s.top)<=-TnlH){Tnl1s.top=TnlH+"px"}}function TnlIni(){(Tnl0s=(Tnl0=TgEI("nl0")).style).top=TnlST;
TnlH=Tnl0.offsetHeight;(Tnl1s=(Tnl1=TgEI("nl1")).style).top=TnlST+TnlH+"px";Tnl1.innerHTML=Tnl0.innerHTML;
setInterval("TnlRun()",parseInt(1000/TnlV))}function TnlM(obj,x){TnlDZ=x?TnlP?0:TnlDZ:TnlDI
}var Tuhr={diff:0,el:null,ini:function(){var t=Tuhr;t.el=TgEI("Tuhr");if(!T.ART){t.start()
}},start:function(){var t=Tuhr;t.diff=C.iniTmDf;if(!isNaN(t.diff)){t.run();setInterval(t.run,1000)
}else{t.el.innerHTML="-"}},run:function(){var t=Tuhr,d=new Date(TgT()+t.diff);t.el.innerHTML=Tz2(d.getDate())+"."+Tz2(d.getMonth()+1)+"."+d.getFullYear().toString().substr(2)+"<b>&nbsp;</b>"+d.toLocaleTimeString().substr(0,5)
}};function TdateISO2Local(s,x){var r;r=(r=/(\d+)-(\d+)-(\d+)T([\d:]+)\+([\d:]+)/.exec(s))?new Date(Date.parse(r[3]+" "+"MONjanfebmaraprmayjunjulaugsepoctnovdec".substr(r[2]*3,3)+" "+r[1]+" "+r[4]+" GMT")):"";
if(r&&x){if(x>=1){r="SoMoDiMiDoFrSa".substr(r.getDay()*2,2)+" "+Tz2(r.getDate())+"."+Tz2(r.getMonth()+1)+"."+(x==1?r.getFullYear()+" | "+r.toLocaleTimeString().substr(0,5)+" Uhr":"")
}else{r=r.toLocaleString()}}return !r||r=="NaN"?null:r}var TstatOK=1;var TR=escape(D.referrer),TD=TgT(),TX="",T1px=' width="1" height="1" align="right" />';
var TSx,TS0={d:0,ivw:0,pi:0,ct:0,f:function(){if(!this.d){var i,k=["SN","ID","TS","PA","KG"],v=[1,0,0,"",""];
if(typeof(T)==U){T={}}for(i=0;i<k.length;i++){eval("if(typeof(T."+k[i]+")==U)T."+k[i]+"=v[i]")
}TSx=T.TS?T.TS:Math.floor(TD/1000);if(typeof(TMS)==U){TMS={IVW:["http://","toi.ivwbox.de/cgi-bin/ivw/","CP"]}
}}this.d=1}};function TS1(){}function TSIVW(){if(!TstatOK){return}if(L.search.match(/Tvidas/g)){sendivw=false;
return}if(T.EGO!="_mf"&&T.EGO!="ifp"){if(TMS.IVW){D.write(TS0.ivw=('<img src="'+TMS.IVW[0]+TMS.IVW[1]+TMS.IVW[2]+"/"+T.KG+";"+T.PA+".html"+(typeof(SI)!=U?"/"+SI:"")+","+T.ID+"?r="+TR+"&d="+TD+'" name="pix"'+T1px))
}}}function TS2(){}function S(z,l,b,t,s,x){}function S2(z,l,b,t,s){}function A(){}function TSLB(o){var si="/"+o.si;
var a=o.PA.split("/"),L=a.length-1;ct="andere",sendivw=T.EGO!="_mf"&&T.EGO!="ifp"&&TMS.IVW;
if(L>=0&&a[L].indexOf("ar-")==0){ct="artikel"}if((L>=0&&a[L].indexOf("fs-")==0)||(L>=1&&a[L-1]=="shows")){ct="fotoshow"
}if(L>=1&&a[L].indexOf("fp-")==0&&a[L-1].indexOf("v_")==0){ct="video"}if(o.PA.indexOf("/00-startseite")>=0){ct="startseite"
}if(ct=="video"&&L>=3&&a[1]=="video"){a[1]=a[2];a[2]="video";o.PA=a.join("/");if(W.Tvidas==1){sendivw=false
}}if(sendivw){(new Image()).src=TMS.IVW[0]+TMS.IVW[1]+TMS.IVW[2]+"/"+o.KG+";"+o.PA+".html"+si+","+o.ID+"?r="+TR+"&d="+TD
}W.Tvidas=0}function TSEM(x){}var xtnv=D,xt_form="",xtsd="http://logc206",xtsite=463005,xtn2="",xtpage="",xtdi="",xtparam="",xt_multc="",xt_an="",xt_ac="",xtati="",xtergo=0;
var TSob={enableTeasers:1,enableClicks:1,numTIs:80,rxOF:/(A\("|A\(')(.+)("\)|'\))/,rxCLS:/\$/,rxClean:/[^a-z0-9 äöüß_.-]/gi,rxBlank:/\s+/,rxUrl:/^(http:\/\/logc[0-9]+.xiti.com\/(go|gopc).url|http:\/\/count.shopping.t-online.de\/RE)/,rxBracket:/[\[\]]|%5b|%5d/gi,rxMME:/Tmme-?(\w*)\b/,rxMMNO:/\bTmmno\b/,tsrs:{},gti:function(){var a=T$(".Tmm"),b=[],o,ts=TSob,s="";
if(ts.enableTeasers&&TisjQ){a.each(function(){o=ts.pt(this);if(o.id){s="PID-["+o.id+"]-["+(o.mp||"")+"]";
if(!ts.tsrs[s]){b.push(s);ts.tsrs[s]=1}}})}return b},reti:function(){var a=this.gti();
if(a.length>0){(new Image).src="http://logc206.xiti.com/hit.xiti?s="+xtsite+"&ati="+a.join(",")
}},pt:function(e){var i,a,b,d,o={id:(e.id||"T-0").substr(2)},j=T$(e),of=j.attr("onfocus"),dm=j.attr("data-mm");
if(of){a=(of+"").match(TSob.rxOF);if(a&&a.length>=3){d=a[2]}}d=d||dm||"";a=d.split(";");
for(i=0;i<a.length;i++){b=a[i].split("=");if(b.length>=2){o[b[0]]=b[1]}}return o},idtab:{Tnnav1:"Top-Navigation$",Tnnav2:"Navigation$",Tnnav3:"Sub-Navigation$",Tliqbut:"Buttons$",Tlogo2:"Header::Logo",Tscok:"Header::Suche",Tscokf:"Footer::Suche",Tscoka:"Artikel-Test::Suche",Tfootblock:"Footer$","Thead-de":"Header::T-Logo",Tlogofb:"Social Media::Facebook:Jetzt-Fan-werden","T-51101764":"Outbrain$","T-SlinCl":"SlideInClose",Tsolo:"Header::Special"},cltab:{Tdivmap:"Netzwerk-Partner$",Tbew:"Social Media::Bewertungen",Tcom:"Einstellungen::Kommentare",Tfsc:"Einstellungen::Schrift",Tprt:"Einstellungen::Drucken",Ttwitter:"Social Media::Tweet",Tfacebook:"Social Media::Facebook",Twebnews:"Social Media::Webnews",Tsend:"Social Media::Versenden",Tlink:"Social Media::Link",Tletter:"Social Media::an-die-Redaktion",Tliveconnect:"Social Media::LiveConnect",tnavto:"Header$",Tarthome:"ArtikelBacklink","CDB-main-content":"Global-Header$::ZU","CDB-right-content":"Global-Header::Button-AUF-ZU::ZU"},clck:function(ev){if(!TstatOK){return
}var a,i,id,p,o={},el=ev.target,di=el,ts=TSob,ep=el.parentNode,x=el.tagName,lt=(x=="IMG"||x=="AREA")?0:(ep&&ep.tagName=="H5"?1:2),txt,cl,clk;
if(ts.enableClicks){x=T$(el);txt=x.attr("data-mmt")||x.text()||x.attr("alt")||T$(ep).text()||"";
while(di&&di.tagName!="A"&&di.tagName!="AREA"&&di.tagName!="DIV"){di=di.parentNode
}while(di){id=di.id;if(id&&!clk){x=ts.idtab[id];if(x){clk=x}}cl=di.className;if(cl&&!clk){a=cl.split(" ");
for(i=0;i<a.length;i++){x=ts.cltab[a[i]];if(x){clk=x;break}}}if(clk){i=txt.length>>1;
if(txt.substr(0,i)==txt.substr(i)){txt=txt.substr(i)}txt=T$.trim(txt.replace(ts.rxClean," ").replace(ts.rxBlank," "));
if(txt.length>40){txt="unbekannt"}clk=clk.replace(ts.rxCLS,"::"+txt)+Txt_click_(clk);
if(W.xt_click){xt_click({},"X",xtn2,clk,"A")}break}di=di.parentNode}}if(ts.enableTeasers){try{clk=el.className.match(ts.rxMME);
if(!clk){while(el&&el.tagName!="A"&&el.tagName!="AREA"){el=el.parentNode}}if(el&&!el.className.match(ts.rxMMNO)){di=el;
while(di&&!(di.tagName=="DIV"&&di.className.match(/Tmm\b/))){di=di.parentNode}if(di){o=ts.pt(di);
p=ts.pt(el);delete p.id;T$.extend(o,p);o.hr=el.href||"";o.lt=lt;o.mp=o.mp||"";o.ec=o.ec||"";
di=T$(di);txt=T$.trim(T$(di.find(".Tmmt")[0]).text());o.tt=T$.trim(txt||T$(di.find("H5")[0]).text()||T$(di.find("H6")[0]).text()||T$(el).text()||"");
if(ts.rxUrl.test(o.hr)){x=o.hr.split("&");for(i=0;i<x.length;i++){if(x[i].toLowerCase().indexOf("url=")==0){o.hr=unescape(x[i].substr(4));
break}}}o.hr=o.hr.replace(ts.rxBracket,"")}}}catch(ex){}if(o.id){x=[o.id,o.hr,o.tt,o.ec,o.mp,o.lt];
for(i=0;i<x.length;i++){x[i]=encodeURIComponent(x[i])}x="PID-["+x.join("]-[")+"]";
a=el.tagName=="AREA"?2:el.parentNode.tagName=="LI"?1:0;a=a?"-[]-[]-["+encodeURIComponent(T$.trim(a==1?T$(el).text():el.alt))+"]":"";
if(W.xt_ad){xt_ad(x+a)}}}}};var Txt_click_=function(clk){return""};var Txt_click=function(zk,lok){Txt_click_=function(clk){return(!lok||("!"+lok.join("!")+"!").indexOf("!"+clk+"!")>=0)?"::"+zk:""
}};var Txt_form=function(){return""};function TSATI(a,b,c,d,e,f,g){if(!TstatOK){return
}xtsd=a||xtsd;xtsite=b||xtsite;xtn2=c||xtn2;xtpage=d||xtpage;xtdi=e||xtdi;xtergo=f||xtergo;
var i,e=encodeURIComponent,q="",p=0,r=D.referrer||"",a=[],h=L.href,ti=TSob.gti().join(",");
try{a=r.split("#")[0].split("?")[1].split("&")}catch(ex){}for(i=0;i<a.length;i++){if(a[i].indexOf("q=")==0){q=a[i].substr(2)
}if(a[i].indexOf("start=")==0){p=a[i].substr(6)}}if(r.toLowerCase().indexOf(".google.")>0&&q&&h.toLowerCase().indexOf("#xtor")<0){xtparam+="&x1="+e(q)+"|"+e(xtpage)+"||"+e(p)
}if(xtpage=="Fehlerseite"||xtpage.indexOf("404-Seite")==0){xtparam+="&f1=404&f2="+e(r)+"&f3="+e(h)
}xtparam+="&ati="+ti+"&ac="+xt_ac+"&an="+xt_an+"&x10=99"+xt_multc+"&x25="+function(){var c=TgC("rsi_segs"),r=0;
if(c){if(c.indexOf("A11497")!=-1){r=1}if(c.indexOf("A11496")!=-1){r+=2}return r||4
}return 5}();a=h.match(/[&?#](news|base)/gi);if(a){xtparam+="&x11="+a[0].substr(1)
}a=TgET("meta");for(i=0,c="";i<a.length;i++){if(a[i].name=="keywords"){c=a[i].content;
break}}xt_tags="["+encodeURIComponent(c.replace(/, /g,"!!")).replace(/!!/g,"]|[")+"]";
xtparam+="&tag="+xt_tags;f=(typeof xt_form=="function"?"":xt_form)+Txt_form();xtparam=f+xtparam;
if(g&&W.xt_click){if(W.xtcustom&&xtcustom.cms_doc_types){xtpage+="&stc={%22cms_doc_types%22%3A%22"+xtcustom.cms_doc_types+"%22}"
}xt_click(this,"F",xtn2,xtpage)}}if(TSob&&TisjQ){T$D.click(TSob.clck)}function TStest(xtp){D.write("<img src=http://logc206.xiti.com/hit.xiti?s=453042&s2=1&p="+xtp+' width="1" height="1" alt="1" />')
}function Tfpc(){}var TSc,TSd;TSc=TSd=function(){};function TabcWeiche(ups,mck,ich){if(ich&&L.href!=ich){return 0
}var c,i,n,p,u,z=Math.random()*100;if(mck){n=mck[1]?mck[1]:"TabcW";if((c=TgC(n))!=null){if(c<0){TstatOK=0;
L.replace(ups[-c-1][0])}return Number(c)}}for(i=p=u=0;i<ups.length;i++){if(z<(p+=ups[i][1])){u=ups[i][0];
break}}i++;c=u===0?0:u?-i:i;if(mck){TsC(n,c,mck[0])}if(u){TstatOK=0;L.replace(u)}return c
}var TreadyA=[];function Tready(fkt){TreadyA.push(fkt)}function TreadyRun(){T$(".Tsel").narrativeselect();
if(T$(".Tsellks").length){T$(".Tsellks").change(function(){location.href=T$(this).val()
})}for(var i=0;i<TreadyA.length;i++){TreadyA[i]()}}var Tload={snd:"",txt:"Keine Performance-Messung möglich",div:null,ini:function(){TaddEv(W,"load",function(){Tload.run(0,1|(L.search.match("Tload=on")?2:0))
})},end:function(){TsD(this.div,0)},run:function(count,art){var p=W.performance||{},t=T||{};
p=p.timing||null;if(count<50){if(p&&!p.loadEventEnd){setTimeout("Tload.run("+(count+1)+","+art+")",100)
}else{p=p||{};var to={nS:p.navigationStart||0,rS:p.responseStart||0,dL:p.domLoading||0,T0:t.T0||0,T1:t.T1||0,T2:t.T2||0,T3:t.T3||0,T4:t.T4||0,dC:p.domComplete||0,lE:p.loadEventEnd||0};
if(art&1){var i=-1,toa=[];for(p in to){toa[++i]=p+"="+to[p]}this.snd="?BR="+C.bBrows+"&"+toa.join("&")
}if(art&2){this.too=to;Tinc("http://stats.toi.de/js/tload.js")}}}else{if(art&2){alert(this.txt+="\nTimeout!")
}}},show:function(){this.run(0,2)}};Tload.ini();var TglobHead={opn:0,opnT:["ZU","AUF"],stat:function(){var ct=TSob.cltab,gh="Global-Header",az=this.opnT[this.opn];
ct["CDB-main-content"]=gh+"$::"+az;ct["CDB-right-content"]=gh+"::Button-AUF-ZU::"+az
},inc:function(){if(T.PORT){D.write('<script type="text/javascript" src="http://header.cdb.t-online.de/dashboard/global_header/script.js"><\/script>')
}},run:function(){if(W.CDB){var headerID="Tglobhead";D.write('<div id="'+headerID+'"></div>');
var header=TgEI(headerID);var opts={menuType:"small",openLinksExternally:true,leftAlignHeader:true,callback:function(){with(TglobHead){opn=arguments[0]?1:0;
stat()}}};header.appendChild(CDB.globalNavigationModule.getHeaderElement("tonline",opts),header)
}}};sys=-1;function DM_prepClient(csid,client){client.DM_setLoc(T.TPD+T.PA)}function TSA(){}function TSZ(){Tinc((L.protocol=="https:"?"https":"http")+"://js.revsci.net/gateway/gw.js?csid=J11257&auto=t")
};