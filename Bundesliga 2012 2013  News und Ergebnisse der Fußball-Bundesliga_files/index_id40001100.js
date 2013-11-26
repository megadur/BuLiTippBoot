C.ini();var Tliq={L:TfiBxH()>=1250?1:0,setL:function(l){var c=B.className.replace(/\bTliql\b/g,"").replace(/\s+/g," ");
B.className=l?c+" Tliql":c},fix:0,setFix:function(sp){this.fix=sp?sp:-1;Tinc("#Tliqbut{display:none}");
if(B&&sp){with(this){if((sp-=3)==L){setL(sp)}else{togg()}}}},no:0,setNo:function(){this.no=1;
Tinc("#Tliqbut{display:none}")},objBut:null,txtBut:function(l){this.objBut.innerHTML=["Zur breiten Ansicht","Zur schmalen Ansicht"][l]
},setBut:function(){with(this){if(!fix&&!no){objBut=TgEI("Tliqbut");if(objBut){txtBut(L);
Tinc("#Tliqbut{display:block}")}}}},init:function(){if(this.no){return}if(!B){B=D.body
}if(ThEC(B,"Tliqfix")){this.fix=ThEC(B,"Tliql")?4:ThEC(B,"Tliqs")?3:-1}with(this){if(fix>0){L=fix-3
}setL(L);init2()}},init2:function(){},togg:function(obj){with(this){L=L?0:1;setL(L);
imgAll();ifrAll();if(objBut){txtBut(L)}togg2()}TInitBCrumb();var o={fadeSpeed:"medium",defautContent:0,rotTime:0,stg:"false",lockHeight:0,rotTimeSt:10000};
T$("#Tcontbox div.Tmreitsew").Ttabs(o);T$("#Tcontbox div.Tmreitsea").Ttabs(o);T$("#Tcontbox div.Tmreitautoc").Ttabs(o);
T$("#Tcontbox div.Tmreit:not(#Tcontbox div.Tmst4 div.Tmreit, #Tcontbox div.Tmst8c div.Tmreit)").Ttabs(o);
if(W.TSob){TSob.reti()}},togg2:function(){},_imgArr:[],img_0:function(s){var img=TgET("img",TgDOM_0().parentNode)[0];
if(this.L){if(img.src.indexOf("/t.gif")>=0){img.src=s}}else{this._imgArr.push([img,s])
}},imgAll:function(){var a=this._imgArr,i=0,x;for(;i<a.length;){if((x=a[i++])[0].src.indexOf("/t.gif")>=0){x[0].src=x[1]
}}},_ifrArr:[],_ifrL:["S","L"],_ifrx:["Tliqnx","Tliqx"],ifr_0:function(i1,i2,a){var url,h,iz,id,pp=TgDOM_0(1);
do{id=TgZI()}while(TgEI(id));pp.id=id;iz=2;if(!i2){iz=1}else{if(i2.a){iz=1;a=i2}}url=a&&a.url?a.url:"";
h=i1.h||0;this._ifrArr.push([url+i1.url,h,iz==2?url+i2.url:"",iz==2?i2.h||h:0,id]);
var i=0,ifr="",nm="x"+(W.T?T.ID:0)+TtIFrame+id,scl=a&&a.scl?a.scl:"no";for(;i<iz;
i++){ifr+='<iframe name="'+nm+'" id="'+id+this._ifrL[i]+'" width="100%" scrolling="'+scl+'" frameborder="0" class="Tifri '+this._ifrx[i]+'"></iframe>'
}pp.innerHTML=ifr;this.ifrAll()},ifrAll:function(){var a=this._ifrArr,al=a.length,i,ai,d,l,id,o,h;
if(al){if(this.L){d=2;l=1}else{d=l=0}for(i=0;i<al;i++){ai=a[i],id=ai[4],o=TgEI(id+this._ifrL[l]);
if(o&&!o.src){o.src=ai[d]}h=ai[d+1];if(h){TsS(id,"height",h+"px")}}}},fsx:function(){}};
Tliq.sBut=Tliq.setBut;function TsetContPos(p1,p2){for(var i=0,p="";i<arguments.length;
i++){p+=" Tcontpos"+arguments[i]}B.className+=p}var Tml2allNews={ry:0,go:function(x,obj){if(x){if(!this.ry){var cb=D.createElement("div"),an=TgEI("Tml2all-0").cloneNode(true);
cb.id="Tml2all-1";cb.className="Tcontabs";an.id="Tml2all-c";TsD(an,1);cb.appendChild(an);
TgEI("Tcontbox").appendChild(cb);this.ry=1}TsS("Tml2all-c","top",TgPos(TgEax(TgEax(obj)),"Tcontbox")[1]+"px")
}TsD("Tml2all-1",x)}};var Tml20allArt={ry:0,go:function(x,obj){if(x&&obj&&!this.ry){var a1=TgEax(TgEax(obj)),aa=TgEI("Tml20all-0"),ls=TgET("ul",a1)[0],ll;
a1.id="Tml20all";aa=aa.cloneNode(true);aa.id="Tml20all-1";ll=TgET("ul",aa)[0];ll.innerHTML=ls.innerHTML+"\n"+ll.innerHTML;
TgEax(a1).insertBefore(aa,a1);this.ry=1}TsD("Tml20all-1",x);TsD("Tml20all",x?0:1)
}};var Tml22allKeys={ry:0,go:function(x,obj){if(x){if(!this.ry){var cb=D.createElement("div"),ak=TgEI("Tml22all-0").cloneNode(true);
cb.id="Tml22all-1";cb.className="Tcontabs";ak.id="Tml22all-c";TsD(ak,1);cb.appendChild(ak);
TgEI("Tcontbox").appendChild(cb);this.ry=1}TsS("Tml22all-c","top",TgPos(TgEax(TgEax(obj)),"Tcontbox")[1]+"px")
}TsD("Tml22all-1",x)}};var Tml7heightAZ={ok:1,go:function(h){if(this.ok){var az=TgDOM_0(1),ll=TgEC("Tlll",az),mx=0,i,oh;
if(az.className.indexOf("Thhx")<0){az.className=az.className.replace(/Thh/g,"T__");
for(i=ll.length;i--;){if((oh=ll[i].offsetHeight)>mx){mx=oh}}az.style.height=mx+(h?h:49)+(navigator.userAgent.toLowerCase().indexOf("msie")>=0?0:1)+"px"
}}}};var Tmn5varHeight={ok:1,go:function(h){if(this.ok){}}};var TtIFrame="...",TuIFrame;
function TsIFrame(url,h,scl,uid){var ei=(uid&&(ei=uid.match(/\d+/)))?"i"+ei[0]:"",e=TgEI(uid),ifr;
ifr='<iframe src="'+url+'" name="x'+(W.T?T.ID:0)+(ei?TtIFrame+ei+'" id="'+ei:"")+'" width="100%"'+(h?' height="'+h+'"':"")+' scrolling="'+(scl?scl:"no")+'" frameborder="0" class="Tifri"></iframe>';
if(e){e.innerHTML=ifr;e.parentNode.style.backgroundImage="none"}else{D.write(ifr)
}}function TxIFrame(s){var h=-1,ifr,p0;eval(s.replace(/\.{3}/g,"';").replace(/:/g,"='")+"'");
if(h>-1&&(ifr=TgEI(id))){ifr.style.height=h+"px"}if(p0>0){scrollTo(0,0)}}var Twait=new Image();
Twait.src="http://img.toi.de/ladegrafik.gif";(function(T$){T$.fn.Ttabs=function(option){var para=jQuery.extend({fadeSpeed:"medium",defautContent:0,rotTime:0,stg:"false",lockHeight:1,rotTimeSt:10000,tabParamName:"aktreiter",tabParamValues:new Array(0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19),calcWidth:1},option);
T$(this).each(function(){var uid="Tmr-"+Math.round(Math.random()*10000);if(T$(this).attr("id")){var uid=T$(this).attr("id")
}T$(this).attr("id",uid);var rotSt=0;var seitenurl=window.location.href;var $thisId="#"+uid;
var sTabs=T$($thisId+" div.Ttab");var $aktNav=T$($thisId+" div.Ttabs-nav");var nbTab=sTabs.size();
if(T$($thisId).hasClass("Tmreitsea")){para.defautContent=getaktreit();T$("#Tstat script").remove();
T$("#Tstat img:eq(0)").remove();$reittxt=sTabs.eq(para.defautContent).find("h3:first span").text();
var $ivws2path=T.PA+"/"+replaceUmlauts($reittxt,0);TSIVWS2()}setContent();buildNav();
hideAll();if(para.stg=="true"){initStg()}setaktCont(para.defautContent);if(para.rotTime!=0){setTimeout(function(){rotEngine(para.defautContent)
},para.rotTimeSt)}function setContent(){sTabs.attr("id",function(arr){T$(this).find("div.Tml20 div.Tml20").attr("id","Tml20l-"+arr);
T$(this).find("div.Tml20:first").attr("id","Tml20s-"+arr);return uid+"-"+arr})}function initAutoCont(){T$($thisId+" div.Tllx").die();
T$($thisId+" div.Tllx").live("click",function(){var $aktReit=T$(this).parent().parent().attr("id");
$aktReit=$aktReit.substr(7);if(T$("#Tml20s-"+$aktReit+" #Tml20l-"+$aktReit).hasClass("Td0")){var $listli=T$("#Tml20s-"+$aktReit+" div.Tllcs li").clone();
var $listxl=T$("#Tml20l-"+$aktReit);$listli=$listli.prependTo($listxl.find("ul"));
$listxl.insertAfter(T$("#Tml20s-"+$aktReit))}T$("#Tml20l-"+$aktReit).toggleClass("Td0");
T$("#Tml20s-"+$aktReit).toggleClass("Td0")})}if(T$(this).hasClass("Tmreitautoc")){initAutoCont()
}function TSIVWS2(){if(T.EGO!="_mf"&&T.EGO!="ifp"){if(TMS.IVW){T$("#Tstat").append(TS0.ivw=('<img src="'+TMS.IVW[0]+TMS.IVW[1]+TMS.IVW[2]+"/"+T.KG+";"+$ivws2path+".html"+(typeof(SI)!=U?"/"+SI:"")+","+T.ID+"?r="+TR+"&d="+TD+'" name="pix"'+T1px))
}}}function replaceUmlauts(string,index){var anArray=new Array(2);anArray[0]=new Array("Ö","ö","Ä","ä","Ü","ü","ß"," ");
anArray[1]=new Array("Oe","oe","Ae","ae","Ue","ue","sz","-");for(var i=0;i<anArray[index].length;
i++){myRegExp=new RegExp(anArray[index][i],"g");string=string.replace(myRegExp,anArray[(index==0?1:0)][i])
}return string}function getaktreit(){var urlreitpart;var urlreit=seitenurl.slice(7).split("/");
for(var i=0;i<urlreit.length;i++){urlreitpart=urlreit[i].split("_");if(urlreitpart[0]==para.tabParamName){for(var j=0;
j<para.tabParamValues.length;j++){if(para.tabParamValues[j]==urlreitpart[1]){return j
}}}}urlreit=seitenurl.slice(window.location.href.indexOf("?")+1).split("&");for(var i=0;
i<urlreit.length;i++){urlreitpart=urlreit[i].split("=");if(urlreitpart[0]==para.tabParamName){return urlreitpart[1]
}}return 0}function hideAll(){sTabs.hide()}function initStg(){T$("div.Tmst4").attr("id","Tstg-"+uid.substr(4));
T$("div.Tmst8c").attr("id","Tstg-"+uid.substr(4));var $stgreitb=T$("#Tstg-"+uid.substr(4)+" div.Tbl");
$stgreitb.attr("id",function(ary){return"Trtbz-"+ary});$stgreitb.css("display","none");
T$("#Trtbz-"+para.defautContent).css("display","block")}function chngBackg(hovId){T$("#Tstg-"+uid.substr(4)+" div.Tbl").css("display","none");
T$("#Trtbz-"+hovId).css("display","block")}function rotEngine(indi){if(indi<$aktNav.find("li").size()-3){indi++
}else{indi=0}setaktCont(indi);rotSt=setTimeout(function(){rotEngine(indi)},para.rotTime);
T$("#Tstg-"+uid.substr(4)).hover(function(){clearTimeout(rotSt)},function(){clearTimeout(rotSt);
rotSt=setTimeout(function(){rotEngine(indi)},para.rotTime)})}function setaktCont(indice){if(indice>=nbTab){indice=0
}hideAll();$aktNav.find("li").removeClass("Tact");T$($thisId+"-nav-"+indice).addClass("Tact");
if(indice==0){T$($thisId+"-nav-"+indice).prev().addClass("Tnavl")}else{$aktNav.find("li:first").removeClass("Tnavl")
}if(($aktNav.find("li").size()-3)==indice){T$($thisId+"-nav-"+indice).next().addClass("Tnavr")
}else{$aktNav.find("li:last").removeClass("Tnavr")}T$($thisId+"-"+indice).show();
if(para.stg=="true"){chngBackg(indice)}}function buildNavLink(i){var regExpTabParam=new RegExp("/"+para.tabParamName+"_[^/]*");
if(T$($thisId+"-"+i+" h3:first").length<1){t="<span>"+T$($thisId+"-"+i+" h6:first").text()+"</span>"
}else{t=T$($thisId+"-"+i+" h3:first").text()}var aktUrl=seitenurl;if(aktUrl.indexOf("id_")<0){var tstr=aktUrl.substr(0,aktUrl.lastIndexOf("/"));
var trst=aktUrl.substr(aktUrl.lastIndexOf("/"));aktUrl=tstr+"/id_"+T.ID+trst}if(T$($thisId).hasClass("Tmreitsea")){if(aktUrl.search(regExpTabParam)!=-1){aktUrl=aktUrl.replace(regExpTabParam,"/"+para.tabParamName+"_"+para.tabParamValues[i])
}else{if(aktUrl.indexOf("index")>0){aktUrl=aktUrl.replace(/\/index/,"/"+para.tabParamName+"_"+para.tabParamValues[i]+"/index")
}else{aktUrl=aktUrl+para.tabParamName+"_"+para.tabParamValues[i]}}return'<a href="'+aktUrl+'">'+t+"</a>"
}else{return t}}function buildNav(){var listeNav="";var countW=0;var curW=0;var curTab=0;
var negT=false;listeNav="<li class='Taa'></li>";for(var i=0;i<nbTab;i++){listeNav=listeNav+'<li id="'+uid+"-nav-"+i+'"><i></i>'+buildNavLink(i)+"<b></b></li>";
T$($thisId+"-"+i+" h3:first, "+$thisId+"-"+i+" h6:first").css("visibility","hidden");
if($aktNav.find("li").eq(i+1).hasClass("Tact")){curTab=i}}listeNav=listeNav+"<li class='Tzz'></li>";
curW=T$($thisId+"-"+curTab+" > div:first").width();T$($thisId).width(curW);$aktNav.width(curW);
$aktNav.children().remove();if(para.lockHeight==1){T$($thisId).height(T$($thisId+"-0 > div:first").height())
}$aktNav.append("<ul>"+listeNav+"</ul>");for(var g=0;g<nbTab;g++){countW=countW+(T$($thisId+"-nav-"+g).width())
}countW=countW-22+(1*(nbTab-1))+(nbTab*20);var grestW=curW-countW;var rest=grestW%nbTab;
tabW=Math.floor(grestW/nbTab);if(grestW<0){negT=true;rest*=-1;tabW=Math.floor((grestW*-1)/nbTab)
}T$($thisId+"-nav-"+para.defautContent).addClass("Tact");for(var r=0;r<nbTab;r++){$akttab=T$($thisId+"-nav-"+r);
if(!negT&&$akttab.hasClass("Tact")){rest=0}else{if(rest>0){$akttab.width($akttab.width()+1);
rest--}}if(para.calcWidth!=0){if(negT){$akttab.width($akttab.width()-tabW)}else{$akttab.width($akttab.width()+tabW)
}}}var $lastLiNav=T$($thisId+" div.Ttabs-nav li:last");var $firstLiNav=T$($thisId+" div.Ttabs-nav li:first");
if(para.calcWidth!=0){$lastLiNav.prev().width($lastLiNav.prev().width()-10);$firstLiNav.next().width($firstLiNav.next().width()-10)
}$lastLiNav.prev().css({"border-right":"0px","padding-right":"0px"});$firstLiNav.next().css({"padding-left":"0px"})
}$aktNav.find("ul").bind("click",function(e){var target=e.target;var targetIDl=target.id.length;
if(target.nodeName==="LI"&&targetIDl>0){if(target.id.length>T$(this).closest("ul").find("li:eq(1)").attr("id").length){var numContent=target.id.substr(targetIDl-2,targetIDl)
}else{var numContent=target.id.substr(targetIDl-1,targetIDl)}setaktCont(numContent,$thisId,uid)
}else{if(target.nodeName==="SPAN"||target.nodeName==="B"||target.nodeName==="I"){var targetIDl=e.target.parentElement.id.length;
var numContent=e.target.parentElement.id.substr(targetIDl-1,targetIDl);setaktCont(numContent,$thisId,uid)
}}if(W.TSob){TSob.reti()}})})}})(T$);T$D.ready(function(){if((typeof TrotT!=U)&&TisIE6){TrotT()
}T$("#Tcontbox div.Tmreit").not("#Tcontbox div.Tmst4 div.Tmreit,#Tcontbox div.Tmst8c div.Tmreit").Ttabs({fadeSpeed:"medium",defautContent:0,rotTime:0,stg:"false",lockHeight:0,rotTimeSt:10000})
});var Tmdd={};function Tn1ddinit(){}var Tnnav={go:function(ev){ev=ev||W.event;if(!ev){return
}var el=ev.target?ev.target:ev.srcElement,li,dd,dw,nn;if((el.tagName=="A"||el.tagName=="SPAN")&&(li=TgEpN(el)).tagName=="LI"){dd=TgEC("Tnnav4",li);
if(dd.length){dd=dd[0];TsD(dd);dw=dd.offsetWidth;nn=TgEpN(li);TgS(dd).display="";
dd.className="Tnnav4"+(li.offsetLeft+dw>nn.offsetLeft+nn.offsetWidth?" Tnnav4r":"");
nn.className=li.offsetWidth>dw?"Tnnav3x":""}}},ini:function(){var e=TgEI("Tnnav3");
if(e){TaddEv(e,"mouseover",this.go)}if(this.ini2){this.ini2()}}};if(TisIE6){T$D.ready(function(){T$("#Tnnav3 li a,#Tnnav3 li span").hover(function(){var o=T$(this).next();
while(o&&!o.hasClass("Tnnav4")){o=o.next}o.attr("id","Tnnav3akt");setTimeout("var x=T$('#Tnnav3akt'); x.show(); x.attr('id','')",0)
},function(){var o=T$(this).next();while(o&&!o.hasClass("Tnnav4")){o=o.next}o.hide()
});T$(".Tnnav4 dt").hover(function(){T$(this).toggleClass("Tnnmo")},function(){T$(this).toggleClass("Tnnmo")
});T$(".Tnnav4").hover(function(){T$(this).show()},function(){T$(this).hide()})})
}Tready(function(){TInitBCrumb()});function TInitBCrumb(){var $i=T$("#Tbcrumbinner > div"),$d=T$("#Tbrcrdots");
if($i.height()>25){$d.show();$d.css("left",$i.width()+7)}else{$d.hide()}}function TShowFullBCrumb(o){T$("#Tbcrumbinner").css("overflow","visible");
T$("#Tbcrumb").one("mouseleave",function(){T$("#Tbcrumbinner").css("overflow","hidden");
T$("#Tbrcrdots").show()});T$("#Tbrcrdots").hide()}var aktform;var aktbew=0;function ArtI(){if(x=TgC("ArtSchrgr")){TartFont.sX(x,TgC("ArtZeihoe"));
T$(".Tart").addClass("Tarfs"+x)}T$(".Tart span > img").each(function(index){var y=0;
if(T$(this).parent().width()>(y=T$(this).width())){T$(this).parent().width(y)}});
T$(".Tart span > a > img").each(function(index){var y=T$(this).width();var p=T$(this).parent().parent();
if(!p.attr("class").match(/Tlbviprq/g)&&p.width()>y){p.width(y)}});T$(".Tprt").click(function(){T$("#Tliqbut").css("display","none");
Tprint()});if(!T$("#TComments > div").attr("id")){T$("#TFunctionTop div.Tcom").css("display","none")
}}function ArtAddLayer(){if(T.SLIN==1&&T.ART==1&&T.TPD.indexOf("t-online")>0&&T$("body").hasClass("Tliql")){var layerID="TartAddLayerId",subdmn=window.location.host.substring(0,window.location.host.indexOf("t-online.de"));
if(T.PRE==1){url="http://"+subdmn+"t-online.de:90/toiPortal/servlet/-/id_54207786/index"
}else{url="http://"+subdmn+"t-online.de/-/id_54207786/index"}T$("body").append('<div id="'+layerID+'"></div>');
layer=T$("#"+layerID);T$.get(url,null,function(data){layer.html(data.replace(/TsourceT/g,T.ID))
});T$(window).scroll(function(ev){if(T$(window).scrollTop()>500&&layer.css("display")!="none"){if(!layer.hasClass("Tslishow")){layer.addClass("Tslishow").stop().animate({bottom:"0",queue:false},1000)
}}else{layer.removeClass("Tslishow").stop().animate({bottom:"-389",queue:false},1000)
}})}}function Tprint(){print()}var TartFont={fsm:9,fs:0,fsM:2,lh:15,fX:function(x){with(this){if(fs+x>fsM){x=0;
fs=0}fs+=x;TsC("ArtSchrgr",fs,30758400,"/");TsC("ArtZeihoe",lh,30758400,"/");if(T$(".Tart").attr("class")){var at=T$(".Tart").attr("class");
at=at.replace(/Tarfs./g,"");afs=fs;at+=" Tarfs"+afs;T$(".Tart").attr("class",at)}}},sX:function(x,y){with(this){fs=Number(x);
lh=Number(y);if(fs<0||fs>2){fs=0}TsC("ArtSchrgr",fs,30758400,"/");TsC("ArtZeihoe",lh,30758400,"/");
var d,ad=TgET("div");if(T$(".Tart").attr("class")&&(as=T$(".Tart").attr("class").match(/Tarfs./))){var at=T$(".Tart").attr("class");
at=at.replace(/Tarfs./g,"");T$(".Tart").attr("class",at)}}}};Tready(function(){ArtI();
T$(".Tart .Tfsc").click(function(){TartFont.fX(1)});T$(".Tvote > p").click(function(e){aktbew=Math.round((e.pageX-T$(this).parent().offset().left)/12);
T$(".Tvote > span").html("bewertet");T$(".Tvote").addClass("Tinakt");T$(".Tvote > p").unbind()
});T$(".Tvote > p").hover(null,function(){(y=T$(this).find("img")).removeClass();
y.addClass("Tbew"+aktbew)});T$(".Tvote > p").mousemove(function(e){var x=Math.round((e.pageX-T$(this).parent().offset().left)/12);
(y=T$(this).find("img")).removeClass();y.addClass("Tbew"+x)});TaddFKTEvents()});function TaddFKTEvents(lbid){if(lbid){prefix="#"+lbid+" "
}else{prefix=""}T$(prefix+".Tclose").click(function(){T$("#"+T$(this).parent().attr("id")).slideUp("fast",function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
});aktform=null});T$(prefix+".Tsend,"+prefix+".Tletter,"+prefix+".Tcom,"+prefix+".Tlink").click(function(){var fid="#"+T$(this).attr("id")+"form";
if(fid!=aktform){T$(aktform).hide()}var hc=true;if(T$(fid).hasClass("Tcocl")){T$(fid).removeClass("Tcocl");
var hc=false}if(T$(fid).is(":visible")&&hc){T$(fid).slideUp("fast",function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
})}else{if(!hc){T$(fid).hide();T$(fid).slideDown("slow",function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
})}else{T$(fid).slideDown("fast",function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
});aktform=fid}}});T$(prefix+".Tcomml").click(function(){T$(this).prev().toggleClass("Tcomh");
T$(this).html("weniger")});T$(prefix+"#Tcomedt").click(function(){T$("#Tcomfo").slideDown()
});T$("#Tcomrechtl").click(function(){T$("#Tcomrecht").slideDown()});T$(".Tcomme").click(function(){T$("#Tcomkomid").val(T$(this).attr("id"));
T$("#Tcommeld").slideDown()});T$(prefix+"#Tcomkom").keyup(function(){var n=T$("#Tcomkom").val().length;
if(n>499){T$("#Tcomkom").val(T$("#Tcomkom").val().substr(0,499))}else{if(n==0){T$("#Tcomnch").html("Maximal 500 Zeichen")
}else{T$("#Tcomnch").html("noch "+(499-n)+" Zeichen")}}});T$(prefix+"#Tcomsend").click(function(){var err=nerr=berr=kerr=0;
var errstr="";var to;if(!(to=T$("#Tcomname")).val()||to.val().length==0){nerr=1;err++;
errstr+="Name";to.addClass("Tcomier")}else{to.removeClass("Tcomier")}if(!(to=T$("#Tcombetreff")).val()||to.val().length==0){berr=1;
err++;errstr+=errstr.length>0?",":"";errstr+=" Betreff";to.addClass("Tcomier")}else{to.removeClass("Tcomier")
}if(!(to=T$("#Tcomkom")).val()||to.val().length==0){kerr=1;err++;errstr+=errstr.length>0?" und ":"";
errstr+="Kommentar";to.addClass("Tcomker")}else{to.removeClass("Tcomker")}if(err>1){errstr="Bitte füllen Sie die Felder "+errstr+" aus!"
}else{if(err>0){errstr="Bitte füllen Sie das Feld "+errstr+" aus!"}}if(err>0){T$("#Tcomerr").html(errstr);
T$("#Tcomerr").show()}else{T$("#Tcomerr").hide();T$.get(T$("#Tcomfo").attr("action"),{name:T$("#Tcomname").val(),betreff:T$("#Tcombetreff").val(),kommentar:T$("#Tcomkom").val()},function(data){T$("#Tcomfo").html(data)
})}});T$(prefix+"#Tcommsend").click(function(){var err=0;if(!(to=T$("#Tcombem")).val()||to.val().length==0){err++;
to.addClass("Tcomker")}else{to.removeClass("Tcomker")}if(err>0){T$("#Tcommerr").html("Bitte schreiben Sie eine Bemerkung.");
T$("#Tcommerr").show()}else{T$("#Tcommerr").hide();T$.get(T$("#Tcommeld").attr("action"),{komid:T$("#Tcomkomid").val(),bemerkung:T$("#Tcombem").val()},function(data){T$("#Tcommeld").html(data)
})}});T$("a.Thidtxt").off("click").on("click",function(e){var shdv=T$(this).parent().next("div.Thidtxt");
if(shdv.hasClass("Tsld")){shdv.removeClass("Tsld").slideUp("fast",function(){T$(this).find("i").removeClass("Tsld")
})}else{shdv.addClass("Tsld").slideDown("fast",function(){T$(this).find("i").addClass("Tsld")
})}e.preventDefault()})}function TslideOver(arr,id,index,plurl,hidecaption){var x='<div id="'+id+'fpc" style="height:'+arr[index]["height"]+"px; width:"+arr[index]["width"]+'px;" class="TFlashPlayer"><p align="center"><br />Flash-Plugins wurden nicht gefunden <br /><br />Flash <a href="http://download.softwareload.de/Adobe-Flash-Player/19685" target="_blank">hier laden</a></p></div>';
T$("#"+id).html(x);if(plurl.substr(0,7).match(/http\:\/\//)){var ud=plurl.substr(7);
var urd=ud.substr(ud.indexOf("/"));ud=ud.substr(0,ud.indexOf("/"));var ld=location.href.substr(7);
ld=ld.substr(0,ld.indexOf("/"));if(!ud.match(ld)){plurl="http://"+ld+urd}}var so=new SWFObject(plurl+"?img1="+arr[index]["url1"]+"&img2="+arr[index]["url2"],"Tflash-"+id,arr[index]["width"],arr[index]["height"],"8","#FFFFFF");
so.addParam("swliveconnect","true");so.addParam("quality","high");so.addParam("allowScriptAccess","always");
so.addParam("align","left");so.addParam("scale","noscale");so.addParam("wmode","opaque");
so.addParam("salign","lt");so.write(id+"fpc");if(!hidecaption){T$("#"+id).append('<p class="Tbu" style="width:'+arr[index]["width"]+'px">'+arr[index]["caption"]+"</p>")
}}function TbAC(){D.write('<div id="_TnewDiv"></div>');var x=TgEI("_TnewDiv");x.id="";
var xa=arguments;T$.get(xa[1],null,function(data){x.innerHTML=data})}(function(T$){T$.fn.stagePager=function(opt){var opt=T$.extend({easeT:600,loca:1,jumpS:1,rowNr:3,rotTime:0,rotTimeSt:10000},opt);
T$(this).each(function(){var uid="Trt-"+Math.round(Math.random()*10000);T$(this).parent().parent().attr("id",uid);
var cnt=0,pos=0,aktpId=0,step,autoscrp=4,tmppos=0,viewpos=0,orgaktId=0;var $cont=T$(this),$pagerLi=T$(this).find("ul li"),$pagersUl=T$(this).find("ul"),orgSize=T$(this).find("ul li").size()-1,contSize=$pagerLi.size();
step=$pagerLi.height()+(opt.loca==1?4:1);function chngSel(){$cont.prev().toggleClass("Tstgpupun")
}function remSel(){if($cont.prev().hasClass("Tstgpupun")){$cont.next().removeClass("Tstgpupun")
}}function iLayer(){if(opt.loca==1){T$("#"+uid+" div.Tstgr div.Ttsi").hover(function(){t=T$(this);
if(T$("body").hasClass("Tliql")!=true){t.find("p").css("z-index","99");Takttitle=t.parent().find("h2").clone();
Taktlink=t.next().find("a").clone();phover='<p class="Tstgrh"></p>';t.append(phover);
t.find("p").append(Takttitle,Taktlink);t.find("p").show();t.find("p").height(t.height())
}},function(){t.find("p").css("z-index","1");t.find("p.Tstgrh").remove();t.find("p").hide()
})}}function chgB(){if(opt.loca==2){T$("#"+uid+" div.Tstgri li").attr("id",function(arr){return"Trt-"+arr
});T$("#"+uid+" li.Tbla").attr("id",function(ary){return"Trtb-"+ary});T$("#Trt-0").addClass("Taktp");
T$("#Trt-0 div.Tstgpf").css("display","block");T$("#"+uid+" div.Tstgri li").click(function(){var alt=aktpId;
T$("#"+uid+" div.Tstgpf").css("display","none");aktpId=T$(this).attr("id").substr(4);
orgaktId=aktpId;T$("#"+uid+" div.Tstgri li").removeClass("Taktp");if(aktpId.length<3){T$(this).addClass("Taktp");
T$("#Trt-"+aktpId+"a"+aktpId).addClass("Taktp");T$("#Trt-"+aktpId+"a"+aktpId+" div.Tstgpf").css("display","block");
T$(this).find("div.Tstgpf").css("display","block")}if(aktpId.length>2){if(aktpId.length==3){aktpId=aktpId.substr(aktpId.length-1)
}else{aktpId=aktpId.substr(aktpId.length-2)}T$(this).addClass("Taktp");T$("#Trt-"+aktpId).addClass("Taktp");
T$("#Trt-"+aktpId+" div.Tstgpf").css("display","block");T$(this).find("div.Tstgpf").css("display","block")
}fadeInOut(aktpId,alt)})}}function fadeInOut(k,alteid){T$("#Trtb-"+alteid).addClass("mittlereebene");
T$("#Trtb-"+alteid).removeClass("obersteebene");T$("#Trtb-"+k).css({opacity:0});T$("#Trtb-"+k).addClass("obersteebene");
T$("#Trtb-"+k).animate({opacity:1},1300,function(){T$("#Trtb-"+alteid).removeClass("mittlereebene")
});T$("#"+uid+" div.Tstgc").removeClass("Tstgzi")}function rotT(){if(opt.loca==3){T$("#"+uid+" .Tms3 h2 a").attr("id",function(arr){return"Trt-"+arr
});T$("#"+uid+" .Tms3 .Tbl").attr("id",function(ary){return"Trtb-"+ary});T$("#"+uid+" .Tms3 h2 a").hover(function(){hovId=T$(this).attr("id").substr(4);
T$("#"+uid+" .Tms3 .Tbl").css("display","none");T$("#Trtb-"+hovId).css("display","block")
})}}function rotEngine(){tmppos=pos;autoscrp=parseInt(aktpId)+4;viewpos=autoscrp-(tmppos+1);
if(tmppos==1&&orgaktId.length>2||tmppos==2&&orgaktId.length>2||tmppos==0&&orgaktId.length>2){viewpos=(autoscrp-(tmppos+1))-(contSize);
autoscrp=autoscrp-contSize}if((contSize+2)==autoscrp){autoscrp=2}if((contSize+3)==autoscrp&&orgaktId.length<3){autoscrp=2;
orgaktId=$pagerLi.eq(2).attr("id").substr(4)}if(viewpos==1){T$("#"+uid+" div.Tstgpdn").click()
}if(viewpos==2){T$("#"+uid+" div.Tstgpdn").click()}if(viewpos!=2){$pagersUl.find("li:eq("+autoscrp+")").click()
}autoscrp++;rotSt=setTimeout(function(){rotEngine()},opt.rotTime);T$("#"+uid).hover(function(){clearTimeout(rotSt)
},function(){clearTimeout(rotSt);rotSt=setTimeout(function(){rotEngine()},opt.rotTime)
})}function rotEngine1(){T$("div.Tstgpdn").click();rotSt=setTimeout(function(){rotEngine1()
},opt.rotTime);T$("div.Tmst1").hover(function(){clearTimeout(rotSt)},function(){clearTimeout(rotSt);
rotSt=setTimeout(function(){rotEngine1()},opt.rotTime)})}chgB();rotT();iLayer();cnt=-3*step;
if(opt.loca<3){$pagersUl.prepend($pagerLi.slice(contSize-opt.rowNr-1+1).clone(true)).append($pagerLi.slice("0","3").clone(true));
$pagersUl.find("li:eq(0)").attr("id","Trt-"+(orgSize-2)+"a"+(orgSize-2));$pagersUl.find("li:eq(1)").attr("id","Trt-"+(orgSize-1)+"a"+(orgSize-1));
$pagersUl.find("li:eq(2)").attr("id","Trt-"+(orgSize)+"a"+(orgSize));var orgSize4=orgSize+4;
var orgSize5=orgSize+5;var orgSize6=orgSize+6;$pagersUl.find("li:eq("+orgSize4+")").attr("id","Trt-"+((orgSize-2)+"b"+(orgSize-2)));
$pagersUl.find("li:eq("+orgSize5+")").attr("id","Trt-"+((orgSize-1)+"b"+(orgSize-1)));
$pagersUl.find("li:eq("+orgSize6+")").attr("id","Trt-"+((orgSize)+"b"+(orgSize)))
}$pagersUl.css("top",cnt);pos=3;if(opt.rotTime!=0&&opt.loca==2){setTimeout(function(){rotEngine()
},opt.rotTimeSt)}if(opt.rotTime!=0&&opt.loca==1){setTimeout(function(){rotEngine1()
},opt.rotTimeSt)}T$("#"+uid+" div.Tstgpup").click(function(){var $pagerUl=T$(this).parent().find("ul");
if(pos<=0){cnt=((contSize+pos)*step)*-1;$pagerUl.css("top",cnt);cnt=cnt+step;pos=contSize-1
}else{cnt=cnt+step;pos--}$pagerUl.animate({top:cnt},opt.easeT);return false});T$("#"+uid+" div.Tstgpdn").click(function(){var $pagerUl=T$(this).parent().find("ul");
if(contSize==pos){$pagerUl.css("top",0);cnt=-2*step+step;pos=1}else{cnt=cnt-step;
pos++}$pagerUl.animate({top:cnt},opt.easeT);return false})})}})(T$);var TlightboxReady=false;
function ToLb(u,i,c,w,h,hs,vs,ha,va,rf){TlightboxReady=false;if(c.match(/Temb_fs/g)){var nu=u.replace("tid_lightbox","tid_embedded");
location.href=nu;return false}if(T$(".Tlbbg").length){T$(".Tlbbg").remove()}TfiBxH();
var bd=T$("body"),win=T$(window),tt,oln;T$(document).bind("keydown",function(e){if((e.keyCode==27)&&T$("#"+i).is(":visible")){TLBCl(i)
}});if(T$("#Tlbol").html()==null){tt='<div id="Tlbol"></div>';oln=1;bd.append(tt);
T$("#Tlbol").css({width:bd.width(),height:bd.height(),opacity:0.5});T$("#Tlbol").click(function(){TLBCl(i)
});tt=""}else{oln=0}if(T$(".Tlbco").length&&T$(".Tlbco").prop("id")!=i){T$(".Tlbco").remove()
}if(T$("#"+i).html()==null){tt+='<div class="Tlbco '+c+'" id="'+i+'"><div class="Tlb1"></div><div class="Tlb2"></div><div class="Tlb3"></div>';
tt+='<div class="Tlb4"></div><div class="Tlb5"><br />\nInhalte werden geladen...<br />\n<br />\n\n</div><div class="Tlb6"></div><div class="Tlb7"></div><div class="Tlb8"></div><div class="Tlb9"></div><div class="Tlbclb"></div></div>';
bd.append(tt);T$("#"+i+" .Tlbclb").click(function(){TLBCl(i)})}if(c.match(/Tlbvideo/)){u+="?video-lbx"
}if(u.substr(0,7).match(/http\:\/\//)){var ud=u.substr(7);var urd=ud.substr(ud.indexOf("/"));
ud=ud.substr(0,ud.indexOf("/"));var ld=location.href.substr(7);ld=ld.substr(0,ld.indexOf("/"));
if(!ud.match(ld)){u="http://"+ld+urd}}T$.get(u,null,function(data){if(data.indexOf("TSLB")>-1){var ts=data.indexOf("<script"),te=data.indexOf("<\/script>")+9;
var ndata=data.substring(0,ts)+data.substring(te);var js=data.substring(ts,te);js=js.substring(js.indexOf("*/")+2);
js=js.substring(0,js.indexOf("/*"));eval(js);data=ndata}T$("#"+i+" .Tlb5").html(data);
if(c.match(/Tlbgen/)&&T$("#"+i+" .Tlb5 .Tart").length>0){if(T$(".Tliql").length){tw=641
}else{tw=425}T$("#"+i+" .Tlb5").css("width",tw);T$("#"+i+" > table").css("width",tw+16);
T$("#"+i).css("width",tw+16);if(ha){T$("#"+i).css({left:(win.width()-T$("#"+i).width())/2,right:null})
}}TLbAdjVBorders(i);if(TisIE7){T$("#"+i+" .Tlb2,#"+i+" .Tlb8").width(T$("#"+i).width());
T$("#"+i+" .Tlb5").css("background","#fff");if(!T$("#"+i+" .Tlbartx").length){T$("#"+i+" .Tlb5").height(T$("#"+i).height()-14)
}}TaddFKTEvents(i);if(c.match(/Tlbgen/)){if(w){T$("#"+i+" .Tlb5").css("width",w-16);
T$("#"+i+" > table").css("width",w)}if(h){T$("#"+i+" .Tlb5").css("height",h-12);T$("#"+i+" > table").css("height",h)
}}else{if(w){T$("#"+i).css("width",w)}if(h){T$("#"+i).css("height",h)}}if(ha==1){T$("#"+i).css({left:(win.width()-T$("#"+i).width())/2,right:null})
}else{if(ha==2){T$("#"+i).css({left:null,right:hs})}else{T$("#"+i).css({left:hs,right:null})
}}if(va==1){T$("#"+i).css({top:((win.height()-T$("#"+i).height())/2)+win.scrollTop(),bottom:"auto"})
}else{if(va==2){T$("#"+i).css({bottom:win.scrollTop(),top:"auto"})}else{T$("#"+i).css({top:win.scrollTop()+vs,bottom:"auto"})
}}T$("#Tlbol").show();T$("#"+i).fadeIn("slow",function(){T$("#Tlbol").css({width:T$(document).width(),height:T$(document).height()})
});TlightboxReady=true;Tlbcb(u)});if(rf!=1){return false}}function TLBCl(i){if(T$(".Tlbvplr").attr("id")){var xi=T$(".Tlbvplr").attr("id");
if(TgEI("Tvideomodul"+xi)&&TgEI("Tvideomodul"+xi).invokeStop){TgEI("Tvideomodul"+xi).invokeStop()
}}if(T$("#"+i).length>0){T$("#"+i).fadeOut("slow",function(){T$("#Tlbol").hide();
T$(this).find(".Tlb5").empty()})}else{T$(".Tlbco").fadeOut("slow",function(){T$("#Tlbol").hide();
T$(this).find(".Tlb5").empty()})}}function Tlbcb(u){T$(".Tlb5 .TflexTable").TflexTable({si:parseInt(u.replace(/.*si_([0-9]*).*/,"$1"))})
}function TLbAdjVBorders(i){if(TisIE7){T$("#"+i+" .Tlb4,#"+i+" .Tlb6").height(T$("#"+i).height()-14)
}else{T$("#"+i+" .Tlb4,#"+i+" .Tlb6").height(T$("#"+i).height()-17)}}function TSelectBox(){}(function(T$){T$.fn.narrativeselect=function(settings){config={tooltip_opacity:0.95,tooltip_max_height:"200"};
if(typeof(settings)=="object"){T$.extend(config,settings)}else{if(typeof(settings)=="string"&&settings==="destroy"){this.each(function(){_remove_narrative_skin(T$(this))
});return}}this.each(function(){if(this.nodeName!="SELECT"){return}if(T$(this).attr("multiple")){return
}if(T$(this).is(":visible")){_apply_narrative_skin(T$(this))}});var narrative_tooltip=_create_narrative_tooltip();
function _apply_narrative_skin(select_elm){var sec=select_elm.attr("class").replace("Tsel","");
var wi="",wx=select_elm.width(),x;if(wx){wx+=((x=select_elm.css("border-left-width"))?parseInt(x):0)+((x=select_elm.css("border-right-width"))?parseInt(x):0);
if(select_elm.attr("class").match("Tseln")){wx-=40}else{if(TisIE8){wx-=5}}wi='style="width:'+wx+'px"'
}select_elm.css({display:"none"});var narrative_select_text=T$("<div class='narrative_select'></div>");
select_elm.bind("change",function(e){var container=T$(T$(this).parent());T$(container.find("s.text")).html(_get_current_text(this)).fadeOut(200).fadeIn(200);
_close_tooltip()});narrative_select_text.bind("click",function(event){var html="";
var selected_index=select_elm.prop("selectedIndex");if(select_elm.find("optgroup").length>0){var total_index=0;
select_elm.find("optgroup").each(function(i,opt_elm){opt_elm=T$(opt_elm);html+="<ul><span class='label'>"+opt_elm.attr("label")+"</span>";
opt_elm.find("option").each(function(i,elm){current=(total_index==selected_index)?"current":"";
html+="<li index='"+total_index+"' class='"+current+"'>"+T$(elm).text()+"</li>\n";
total_index+=1});html+="</ul>"});html=T$(html)}else{select_elm.find("option").each(function(i,elm){var disabled_class=T$(elm).attr("disabled")?" Tseldis":"";
var current=(i==selected_index)?"Tselaa":"";html+="<a href='javascript:;' index='"+i+"' class='"+current+disabled_class+"'>"+T$(elm).text()+"</a>\n"
});html=T$('<table class="Tseldd '+sec+'"><tr><td class="Tseldd0"><img src="http://www.t-online.de/rl09/static/imgs/t.gif" width="7" height="1" /></td><td class="Tseldd1"></td><td class="Tseldd2"><img src="http://www.t-online.de/rl09/static/imgs/t.gif" width="7" height="1" /></td></tr><tr><td class="Tseldd3"></td><td class="Tseldd4"><div>'+html+'</div></td><td class="Tseldd5"></td></tr><tr><td class="Tseldd6"></td><td class="Tseldd7"></td><td class="Tseldd8"></td></tr></table>')
}narrative_tooltip.find("div.narrative_content").html(html);narrative_tooltip.find("a").bind("click",function(){if(!T$(this).hasClass("Tseldis")){select_elm.prop("selectedIndex",T$(this).attr("index"));
select_elm.trigger("change")}});narrative_tooltip.show();var tooltip_height=(html.outerHeight()<config.tooltip_max_height)?(html.outerHeight()+20)+"px":config.tooltip_max_height+"px";
narrative_tooltip.css({height:tooltip_height});var tooltip_position={left:0,top:0};
tooltip_position.left=T$(event.target).offset().left+(T$(event.target).outerWidth()/2)-(narrative_tooltip.outerWidth()/2);
tooltip_position.left=tooltip_position.left<0?0:tooltip_position.left;tooltip_position.top=T$(event.target).offset().top-(narrative_tooltip.outerHeight()/2);
narrative_tooltip.css({left:tooltip_position.left,top:tooltip_position.top})});select_elm.wrap(narrative_select_text);
T$('<div class="Tselc"><div class="Tselb1"></div><div class="Tselb2"'+wi+'><s class="text">'+_get_current_text(select_elm)+'</s></div><div class="Tselb3"></div><span class="Tselbar"></span></div>').appendTo(select_elm.parent())
}function _remove_narrative_skin(select_elm){var T$select_elm=T$(select_elm);if(T$select_elm.closest("div.narrative_select").length>0){var T$cloned_elm=T$select_elm.unbind("change").clone();
T$select_elm.closest("div.narrative_select").replaceWith(T$cloned_elm);T$cloned_elm.show()
}}function _close_tooltip(){var narrative_tooltip=T$("#narrative_tooltip");narrative_tooltip.removeClass("Tausulyr");
narrative_tooltip.fadeOut(200);narrative_tooltip.find("li").unbind();narrative_tooltip.find("div.narrative_content").html("")
}function _create_narrative_tooltip(){if(T$("#narrative_tooltip").length==0){var narrative_tooltip=T$("<div id='narrative_tooltip'>           <div class='narrative_content'>           </div>         </div>").appendTo("body");
if(!TisIE){narrative_tooltip.find("div.narrative_content").css({opacity:config.tooltip_opacity})
}narrative_tooltip.find("div.close_button").bind("click",function(){_close_tooltip()
});T$(document).bind("keydown",function(e){if((e.keyCode==27)&&T$("#narrative_tooltip").is(":visible")){_close_tooltip()
}}).bind("click",function(e){var tooltip=T$("#narrative_tooltip");var x_range=[tooltip.offset().left,tooltip.offset().left+tooltip.outerWidth()];
var y_range=[tooltip.offset().top,tooltip.offset().top+tooltip.outerHeight()];var target_offset=T$(e.target).offset();
if(target_offset.left<x_range[0]||target_offset>x_range[1]||target_offset.top<y_range[0]||target_offset.top>y_range[1]){_close_tooltip()
}})}return T$("#narrative_tooltip")}function _get_current_text(select_elm){var text=T$(select_elm).find("option:selected").text();
if(text.length==0){return"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}else{return text
}}return this}})(jQuery);var aFP_PlayerNames=new Array(),aStatistic=new Array();aStatistic.CMSDocId="";
aStatistic.CMSPartner="";aStatistic.CMSPortal="";aStatistic.CMSTyp="";function TWriteFlashPlayer(configArr,uid){if(TisIpad||TisIphone){if(uid.indexOf("T")>-1){urisi=1
}else{urisi=0}var uri="http://www.t-online.de/videos/id_41455472/tid_html5videotest/vid_"+uid.substring(urisi)+"/video.html";
T$("#"+uid).empty();var ifrheight=configArr.height-20;var x='<div id="tFlashPlayer'+uid+'" style="height:'+ifrheight+"px; width:"+configArr.width+'px;" class="TFlashPlayer"><iframe src="'+uri+'" scrolling="no"  frameborder="0" width="100%" height="100%"></iframe></div>';
T$("#"+uid).html(x)}else{T$("#"+uid).empty();var x='<div id="tFlashPlayer'+uid+'" style="height:'+configArr.height+"px; width:"+configArr.width+'px;" class="TFlashPlayer"><p align="center"><br />Flash-Plugins wurden nicht gefunden Flash <a href="http://spiele.download.t-online.de/Adobe-Flash-Player/113641" onclick="S(\'b7yeg\',\'b7yem\',2,2)" target="toi" onfocus="TSc(this,18846952,\'18846958/1\',7,2)">hier laden</a></p></div>';
x+='<div id="tFlashPlayerStat'+uid+'" style="height: 1em; width: 1em; overflow: hidden;position: absolute;left: -200em;"></div>';
T$("#"+uid).html(x);var so=new SWFObject(configArr.playerSWF,"Tvideomodul"+uid,configArr.width,configArr.height,"8","#FFFFFF");
var hashes=new Array("json","playlistJson","playlistIndex","autoStart","playlistStart","playlistCountdown");
so.addVariable(hashes[0],escape(configArr[hashes[0]]));for(i=0;i<hashes.length;i++){if(configArr[hashes[i]]&&configArr[hashes[i]].length>0){so.addVariable(hashes[i],configArr[hashes[i]])
}}so.addParam("swliveconnect","true");so.addParam("quality","high");so.addParam("allowScriptAccess","always");
so.addParam("allowFullScreen","true");so.addParam("align","left");so.addParam("scale","noscale");
so.addParam("wmode","opaque");so.addParam("salign","lt");so.write("tFlashPlayer"+uid);
aFP_PlayerNames.push("Tvideomodul"+uid);aStatistic.CMSDocId=configArr.CMSDocId;aStatistic.CMSPartner=configArr.CMSPartner;
aStatistic.CMSPortal=configArr.CMSPortal;aStatistic.CMSTyp=configArr.CMSTyp}}function Tfpc(){for(var lFP_Key in aFP_PlayerNames){if(typeof(TgEI(aFP_PlayerNames[lFP_Key]).gStopFlashVideo)=="function"){sReturnvalue=TgEI(aFP_PlayerNames[lFP_Key]).gStopFlashVideo()
}}}function tVideoPlayerStat(FLVName,uid,CMSDocId){var x,statUrl,statUrlPrefix;statUrlPrefix="http://toi.passul.t-online.de/cgi-bin/CP/00000000;/Flash-Player/";
FLVName=FLVName.replace(/\//,"_");statUrl=statUrlPrefix+aStatistic.CMSPortal+"/"+aStatistic.CMSPartner+"/"+aStatistic.CMSTyp+"/"+escape(FLVName)+"/"+CMSDocId;
if(x=TgEI("tFlashPlayerStat"+uid)){var newimg=D.createElement("img");newimg.src=statUrl;
newimg.alt="";newimg.id="tFlashPlayerStatImg"+uid;x.appendChild(newimg)}}function Teva(vidid,vidurl){var vidurlpath=vidurl.replace("//","").replace(/[^\/]*\/(.*)/,"$1");
var nurl=location.protocol+"//"+location.host+"/"+vidurlpath;T$(vidid).load(nurl)
}function ToEmb(url){window.location.href=url}var Tcfpos=new Array(new Array(60,40,75,75,1),new Array(106,33,89,89,2),new Array(180,24,103,103,3),new Array(270,14,123,123,4),new Array(360,24,103,103,3),new Array(435,33,89,89,2),new Array(500,40,75,75,1));
var Tcf2pos=new Array(new Array(96,40,53,75,1),new Array(144,33,63,89,2),new Array(202,24,73,103,3),new Array(270,14,88,123,4),new Array(353,24,73,103,3),new Array(421,33,63,89,2),new Array(479,40,53,75,1));
var aktstart=0;var aktbu;var numcovers=0;var Tcoflisscroll=0;Tready(function(){var mid;
T$(".Tcofl a img").each(function(i){if(i>=aktstart&&i<aktstart+7){T$(this).css({left:Tcfpos[i][0],top:Tcfpos[i][1],width:Tcfpos[i][2],height:Tcfpos[i][3],"z-index":Tcfpos[i][4]})
}T$(this).removeClass();if(i==aktstart+3){mid=T$(this);aktbu=mid.parent().next()}if(i<aktstart||i>aktstart+6){T$(this).addClass("Tcoflpi");
T$(this).css({left:Tcfpos[6][0],top:Tcfpos[6][1],width:Tcfpos[6][2],height:Tcfpos[6][3],"z-index":0})
}numcovers++});T$(".Tcofl2 a img").each(function(i){if(i>=aktstart&&i<aktstart+7){T$(this).css({left:Tcf2pos[i][0],top:Tcf2pos[i][1],width:Tcf2pos[i][2],height:Tcf2pos[i][3],"z-index":Tcf2pos[i][4]})
}T$(this).removeClass();if(i==aktstart+3){mid=T$(this);aktbu=mid.parent().next()}if(i<aktstart||i>aktstart+6){T$(this).addClass("Tcoflpi");
T$(this).css({left:Tcf2pos[6][0],top:Tcf2pos[6][1],width:Tcf2pos[6][2],height:Tcf2pos[6][3],"z-index":0})
}numcovers++});T$(".Tcofl .Tcfarrl").click(function(){if(Tcoflisscroll==1||aktstart<-2){return 0
}aktstart--;if(aktstart<-3){aktstart++}TcoflScroll()});T$(".Tcofl .Tcfarrr").click(function(){if(Tcoflisscroll==1||aktstart+5>numcovers){return 0
}aktstart++;if(aktstart>numcovers-4){aktstart--}TcoflScroll()});T$(".Tcofl2 .Tcfarrl").click(function(){if(Tcoflisscroll==1||aktstart<-2){return 0
}aktstart--;if(aktstart<-3){aktstart++}Tcofl2Scroll()});T$(".Tcofl2 .Tcfarrr").click(function(){if(Tcoflisscroll==1||aktstart+5>numcovers){return 0
}aktstart++;if(aktstart>numcovers-4){aktstart--}Tcofl2Scroll()})});function TcoflScroll(){Tcoflisscroll=1;
T$(".Tcofl a img").each(function(i){if(i>=aktstart&&i<aktstart+7){T$(this).animate({left:Tcfpos[i-aktstart][0],top:Tcfpos[i-aktstart][1],width:Tcfpos[i-aktstart][2],height:Tcfpos[i-aktstart][3]},"normal","linear",function(){T$(this).css({zIndex:Tcfpos[i-aktstart][4]});
if(i==aktstart+3){aktbu.hide();(aktbu=T$(this).parent().next()).show();Tcoflisscroll=0
}})}else{T$(this).hide("fast",function(){T$(this).css("z-index","0")})}})}function Tcofl2Scroll(){Tcoflisscroll=1;
T$(".Tcofl2 a img").each(function(i){if(i>=aktstart&&i<aktstart+7){T$(this).animate({left:Tcf2pos[i-aktstart][0],top:Tcf2pos[i-aktstart][1],width:Tcf2pos[i-aktstart][2],height:Tcf2pos[i-aktstart][3]},"normal","linear",function(){T$(this).show();
T$(this).css({zIndex:Tcfpos[i-aktstart][4]});if(i==aktstart+3){aktbu.hide();(aktbu=T$(this).parent().next()).show();
Tcoflisscroll=0}})}else{T$(this).hide("fast",function(){T$(this).css("z-index","0")
})}})}function TMaskIlChars(s,t){s=s.replace(/\//g,"%20");s=s.replace(/ü/g,"ue");
s=s.replace(/Ü/g,"Ue");s=s.replace(/ä/g,"ae");s=s.replace(/Ä/g,"Ae");s=s.replace(/ö/g,"oe");
s=s.replace(/Ö/g,"Oe");s=s.replace(/ß/g,"ss");var ts="";for(i=0;i<s.length;i++){var iv=0;
for(j=0;j<t.length;j++){if(t.charAt(j)==s.charAt(i)){iv++;j=t.length}}if(iv>0){ts+=s.charAt(i)
}else{ts+="+"}}return ts}function TRepWeSu(o){var t1=o.action;var p=t1.substr(0,t1.lastIndexOf("/"));
var q=t1.substr(t1.lastIndexOf("/"));var t2="/pattern_"+TMaskIlChars(o.elements.searchPattern.value,"abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ ()+-_%0123456789");
o.action=p+t2+q;window.location.href=o.action;return false}function Tform2url(o){params=T$(o).serialize().replace(/&/g,"/").replace(/=/g,"_");
var t1=o.action;o.action="javascript:;";var p=t1.substr(0,t1.lastIndexOf("/"));var q=t1.substr(t1.lastIndexOf("/"));
t1=p+"/"+params+q;window.location.href=t1;return false}function TLoadPers(u,i){var pp=TgDOM_0(1);
while(!i||TgEI(i)){i=Math.round(Math.random()*1000000)}pp.id=i;T$("#"+i).load(u);
pp.style.backgroundImage="none"}var im_s_stat="load";var im_c_cont;function im_sload(){im_s_stat="rdy"
}var ConstructAd=function(displayreg){var dreg=this[displayreg];if(im_s_stat=="rdy"){switch(dreg.ResTyp){case"Static":if(dreg.CreaTyp=="image/jpeg"||dreg.CreaTyp=="image/gif"||dreg.CreaTyp=="image/png"){im_c_cont='<a href="'+dreg.ClickThro+'" target="_blank"><img src="'+dreg.ResCont+'" width="'+dreg.Width+'" height="'+dreg.Height+'" alt="'+dreg.AltText+'" border="0"></a>'
}if(dreg.CreaTyp=="application/x-shockwave-flash"){im_c_cont='<object id="adcompanionobject" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+dreg.Width+'" height="'+dreg.Height+'" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab"><param name="movie" value="'+dreg.ResCont+'"><param name="wmode" value="opaque"><param name="quality" value="high"><param name="SCALE" value="exactscale"><param name="allowScriptAccess" value="always"><param name="menu" value="false"><param name="flashvars" value="'+dreg.AdParam+'"><embed src="'+dreg.ResCont+'" quality="high" width="'+dreg.Width+'" height="'+dreg.Height+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" wmode="opaque" play="true" loop="true" allowscriptaccess="always" scale="exactscale" menu="false" name="adcompanionobject" flashvars="'+dreg.AdParam+'"></embed></object>'
}break;case"Iframe":im_c_cont='<iframe src="'+dreg.ResCont+'" width="'+dreg.Width+'" height="'+dreg.Height+'" scrolling="no" marginheight="0" marginwidth="0" frameborder="0"></iframe>';
break;case"HTML":var im_regexp_check=/script/i;if(im_regexp_check.test(dreg.ResCont)){im_c_cont='<div style="display:none;">Fehlerhaftes CompanionAd, JS gefunden</div>'
}else{im_c_cont=dreg.ResCont}break;default:im_c_cont='<div style="display:none;">Fehlerhaftes CompanionAd, CreaTyp Unbekannt</div>';
break}if(TgEI(dreg.DivId)&&dreg.DivStatus=="avaible"){TgEI(dreg.DivId).innerHTML=im_c_cont;
dreg.AdStatus="processed";dreg.DivStatus="blocked"}else{dreg.AdStatus="error"}}else{setTimeout('im_VideoAd.buildCompAd("'+displayreg+'")',1000);
return}};im_VideoAd={companion_bottom:{AdStatus:"empty",DivId:"toi_companion_light",DivStatus:"avaible",Width:"",Height:"",ResTyp:"",ResCont:"",CreaTyp:"",AltText:"",ClickThro:"",AdParam:""},companion_top:{AdStatus:"empty",DivId:"toi_companion",DivStatus:"avaible",Width:"",Height:"",ResTyp:"",ResCont:"",CreaTyp:"",AltText:"",ClickThro:"",AdParam:""},companion_left:{AdStatus:"empty",DivId:"",DivStatus:"blocked",Width:"",Height:"",ResTyp:"",ResCont:"",CreaTyp:"",AltText:"",ClickThro:"",AdParam:""},companion_right:{AdStatus:"empty",DivId:"",DivStatus:"blocked",Width:"",Height:"",ResTyp:"",ResCont:"",CreaTyp:"",AltText:"",ClickThro:"",AdParam:""},buildCompAd:ConstructAd};
function im_companionad_call(DispReg,Width,Height,ResTyp,ResCont,CreaTyp,AltText,ClickThro,AdParam){for(var key in im_VideoAd){var obj=im_VideoAd[key];
if(key==DispReg){obj.AdStatus="active";obj.Width=Width;obj.Height=Height;obj.ResTyp=ResTyp;
obj.ResCont=ResCont;obj.CreaTyp=CreaTyp;obj.AltText=AltText;obj.ClickThro=ClickThro;
obj.AdParam=AdParam;im_VideoAd.buildCompAd(key)}}}function addEvent(obj,evType,fn){if(obj.addEventListener){obj.addEventListener(evType,fn,false);
return true}else{if(obj.attachEvent){var r=obj.attachEvent("on"+evType,fn);return r
}else{return false}}}addEvent(window,"load",im_sload);var Trefisgoogle="";if(D.referrer.indexOf("www.google")>-1){var Trefisgoogle="Google"
}function TfcC(u,s,f,i,a){if(u.substr(0,7).match(/http\:\/\//)){var ud=u.substr(7);
var urd=ud.substr(ud.indexOf("/"));ud=ud.substr(0,ud.indexOf("/"));var ld=location.href.substr(7);
ld=ld.substr(0,ld.indexOf("/"));if(!ud.match(ld)){u="http://"+ld+urd}}var n="TfcC",v=TgC(n),c,si=0,r=new RegExp(" "+i+",([0-9]*)");
if(v&&v.match(r)){c=parseInt(RegExp.$1);if(c>=(s*f)||c<0||isNaN(c)){c=0}si=parseInt(c/f);
v=v.replace(r," "+i+","+(c+1))}else{if(!v){v=" "}v+=i+",1 "}T$.get(u.replace("/si_0/","/si_"+si+"/"),null,function(d){T$("#Tfc_"+i).replaceWith(d.replace("Tfqtcadph",a))
});TsC(n,v,0,"/")}var TadCB={err:["ContentBar-Fehler: "],ERR:["mehrere ContentBars aktiv","URL","Stelle","Breite","Höhe","Fixierung","Positionierung","Zentrierung"],Err:"",akt:-1,bar:-1,BAR:[-1,0,1,2,3],Bar:-1,wid:-1,WID:[1,2,3,4,12,23,34],Wid:-1,hei:-1,HEI:[45,150,250],fix:-1,FIX:[-1,0,3,4],pos:-1,POS:[-1,0],znt:-1,ZNT:[-1,0,1],Znt:-1,url:"",Url:"",Ini:-1,ini:function(){with(TadCB){if(Ini==1){Err=ERR[0];
if(T.PRE){alert(err+Err)}return}++akt;if(chk(url,0,1)||chk(bar,BAR,2)||chk(wid,WID,3)||chk(hei,HEI,4)||chk(fix,FIX,5)||chk(pos,POS,6)||chk(znt,ZNT,7)){return
}B.className+=" Tadcb"+hei;if(fix!=-1){Tliq.setFix(fix)}if(pos!=-1){TsetContPos(pos)
}Bar=bar;Wid=wid;Znt=znt;Url=url;Ini=1}},chk:function(x,X,r){with(TadCB){if(X){if((","+X+",").match(","+x+",")){return 0
}}else{if(x){return 0}}Err=ERR[r]+" falsch";if(T.PRE){alert(err+Err)}bar=-2;return 1
}},run:function(){with(TadCB){if(++akt==Bar){var d=TgDOM_0(1),w=""+Wid,z=Znt>0;if(z){w=w.substr(0,1)
}d.className=d.className.replace("Tadcb0","Tadcb1 "+(w>9?"Tliqw":"Tww")+w+(z?" Tadcbz":""));
d.id="Tadspacecbar";D.write('<script type="text/javascript" src="'+Url+'"><\/script>')
}}},lg0:function(){TgEI("Tadspacecbar").className+=" Tadcblg0"}};var TadMR={ERR:"MediumRectangle-Fehler",Err:"",err:function(){with(TadMR){Err=ERR;
if(T.PRE){alert(Err)}}},ini:function(x){var p=TgDOM_0(1),c;if(x!=0&&x!=1&&x!=2){this.err();
return}while(p.className!="Tadspacemrec"){p=TgEpN(p);if(p.tagName=="BODY"){this.err();
return}}do{p=TgEpN(p);if(p.tagName=="BODY"){this.err();return}}while(!p.className.match("Tts"));
c=p.className.replace(/\bTh[h|p].+?\b[\+]*/g,"");p.className=(c+" Thhadmr"+x).replace(/\s+/g," ")
}};var Ttcrandom="";function Tgtc(u,Tctts,id,ad){var n="rsi_segs",z=TgC(n),li=0,i,zz,s,tr="|";
if(!z){z="";tr=""}zz=Math.floor(Math.random()*20);(zz<10)?s="0":s="";z+=tr+"randomized-"+s+zz;
z=z.split("|");for(i=0;i<z.length;i++){if(Tctts.indexOf(z[i])>-1){ti=(Tctts.lastIndexOf(":",Tctts.indexOf(z[i]))-1);
tii=Tctts.substring((ti-1),(ti+1));li=(tii-1);break}}u=u.replace("/si_0/","/si_"+li+"/");
T$.get(u,function(d){T$("#Ttc_"+id).replaceWith(d.replace("Tfqtcadph",ad))})}function stgAutoRot(Tid,rotTime){T$(Tid+" div.Tstgr").width(T$(Tid+" div.Tstgwnavc").outerWidth());
T$(Tid+" li.Tbla").attr("id",function(ary){return"Trtb-"+ary});T$(Tid+" div.Tstgwnav").attr("id",function(ary){return"Tstgn-"+ary
});function fadeInOut(k,alteid){T$("#Trtb-"+alteid).addClass("mittlereebene");T$("#Trtb-"+alteid).removeClass("obersteebene");
T$("#Trtb-"+k).css({opacity:0});T$("#Trtb-"+k).addClass("obersteebene");T$("#Trtb-"+k).animate({opacity:1},1300,function(){T$("#Trtb-"+alteid).removeClass("mittlereebene")
});T$(Tid+" div.Tstgc").removeClass("Tstgzi")}Tstgaktp=0;T$("#Tstgn-0").addClass("Tstgnavakt");
T$(".Tstgwnav").click(function(){var TstgaktpNew=parseInt(T$(this).attr("id").substr(6));
T$("div.Tstgwnav").removeClass("Tstgnavakt");fadeInOut(TstgaktpNew,Tstgaktp);Tstgaktp=TstgaktpNew;
T$("#Tstgn-"+TstgaktpNew).addClass("Tstgnavakt")});var aktiv=window.setInterval("diashow2()",rotTime);
T$(Tid).mouseover(function(){window.clearInterval(aktiv)});T$(Tid).bind("mouseout",function(){aktiv=window.setInterval("diashow2()",rotTime)
})}function diashow2(){i=Tstgaktp+1;if(i>=T$(".Tstgwnav").length){i=0}T$("#Tstgn-"+i).click()
}function TmselToLb(u){var si=0;T$("input.Tchkb.Tmse1icheckbox1:checked").each(function(index){si+=Math.pow(2,(T$(this).val()-1))
});ToLb(u.replace(/\/si_.*\//,"/si_"+si+"/"),"Video","Tlbgen",null,null,30,30,1,0)
}(function(T$){T$.fn.TflexTable=function(option){var para=jQuery.extend({si:0},option);
T$(this).each(function(){T$(this).removeClass("TflexTable");var f=T$(this).find(".HD td:first-child");
f.width(f.width());if(para.si>0){var click=0;for(var i=T$(".SP").size();i>0;i--){if((para.si-Math.pow(2,(i-1)))>=0){para.si-=Math.pow(2,(i-1));
click++}else{T$(this).find(".SP"+i).hide();T$(this).find(".IN"+i).css({display:"none"})
}}}else{var click=4}T$(this).find(".SP").click(function(){cClass=T$(this).attr("class").replace(/.*(\d+).*/,".IN$1");
if(click>1){T$(this).fadeOut(400);T$(cClass).fadeOut(400,function(){T$(this).css({display:"none"});
TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))});click--}});T$(this).find(".HD").click(function(){cClass="."+T$(this).next().attr("class");
if(T$(this).hasClass("H")){T$(this).nextAll(cClass).fadeIn(400,function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
})}else{T$(this).nextAll(cClass).fadeOut(400,function(){TLbAdjVBorders(T$(this).closest(".Tlbco").attr("id"))
})}T$(this).toggleClass("H")});T$(this).find(".HD.H").each(function(){cClass="."+T$(this).next().attr("class");
T$(this).nextAll().find(cClass).css({display:"none"})});TLbAdjVBorders(T$(".Tlbco").attr("id"))
})}})(T$);var TgfbC={init:function(){var n="fbCookie",a=TgC(n),ckdmn=typeof T.DMN!="undefined"?T.DMN.substring(1):"t-online.de";
if(a){T$(".Tfb_aktion").each(function(i,e){TgfbC.write(i,e)})}else{T$(".Tfb_aktion").html('<a href="javascript:;" onClick="TgfbC.create(\'fbCookie\');" class="like" title="Durch Klick auf den \'Gef&auml;llt mir\'-Button akzeptieren Sie die Datenschutzerkl&auml;rung und senden Daten an Facebook."></a><a class="datenschutz" onClick="zeigeDatenschutz(); return false;" href="javascript:;" target="_blank" title="Datenschutzerkl&auml;rung im neuen Fenster &ouml;ffnen.">Datenschutzerkl&auml;rung &ouml;ffnen</a>')
}},create:function(n,ckdmn){TsC(n,1,2592000,"/",ckdmn);TgfbC.init()},erase:function(n,ckdmn){TdC(n,"/",ckdmn);
TgfbC.init()},write:function(i,e){T$(e).html('<iframe src="http://www.facebook.com/plugins/like.php?href='+escape(location.href)+"&amp;send=false&amp;layout="+((i<1)?"button_count":"standard")+'&amp;width=425&amp;show_faces=false&amp;action=recommend&amp;colorscheme=light&amp;font=arial&amp;height=21" scrolling="no" frameborder="0" style="border:none; overflow:hidden" allowTransparency="true"></iframe><a class="datenschutz" onClick="zeigeDatenschutz(); return false;" href="javascript:;" target="_blank" title="Datenschutzerkl&auml;rung im neuen Fenster &ouml;ffnen.">Datenschutzerkl&auml;rung &ouml;ffnen</a><span>|</span><a class="einwilligung" href="javascript:;" onclick="TgfbC.erase(\'fbCookie\');" title="Einwilligung widerrufen.">Einwilligung widerrufen</a>')
}};function zeigeDatenschutz(){fenster=window.open("http://www.telekom.com/fb-static/datenschutz.html","Datenschutz","width=600,height=400,status=yes,scrollbars=yes,resizable=yes");
fenster.focus()}function TweTar_(){var f=0,d={},c=1,e="",prot=L.protocol=="https:"?"https":"http";
this.gData=function(a,b){T$.ajax({type:"GET",dataType:"jsonp",jsonpCallback:"Wettertargeting",cache:!0,data:"",url:prot+"://wiga.t-online.de/wetter/wettertargetingIM/getweatherbox.php?getWeatherdata="+c+a+"&jsonp_callback=?",success:function(a){b(a)
}})};this.rData=function(){var a=TgC("wetterim"),b=TgC("wetterimuni");""!=b&&null!=b?(f=1,(""==a||null==a)&&1==c&&this.gData("&uni="+b,this.wData)):this.gData("",this.wData)
};this.wData=function(a){var b="";a.WeatherData&&1==c&&(b=a.WeatherData,b="weatherdata:tmax:"+b.TemperatureMax+":tmin:"+b.TemperatureMin+":temp:"+b.Temperature+":symb:"+b.Symbol+":rain:"+b.Rain+":wstre:"+b.WindStrength+":wspmax:"+b.WindSpeedMax+":rainProb:"+b.RainProbability+":location:uni:"+a.Location.uni+":zip:"+a.Location.zip+":city:"+a.Location.city,TsC("wetterim",b,3600,"/",e,!1,!0));
0==f&&TsC("wetterimuni",a.Location.uni,2678400,"/",e,!1,!0)};this.gDL=function(){if(location.search){var a=location.search.substr(1).split("&");
for(i=0;i<a.length;i++){var b=a[i].split("=");d[b[0]]=b[1]}}d.getWeatherdata&&(c=d.getWeatherdata)
};this.gHost=function(){if(location.host){var a=location.host.split(".");e=null==a[a.length-1].match(/[0-9]/g)?a[a.length-2]+"."+a[a.length-1]:location.host
}};this.gHost();this.gDL();this.rData()}var TweTar=new TweTar_;function TcheckVxEnergie(obj,url){var t=obj.vxcp_TotalUsage,tv=t.value,p=obj.vxcp_PostCode,pv=p.value,r=1;
if(isNaN(tv)){alert("Verbrauch muss eine Zahl sein!");t.focus();r=0}if(tv<1||!tv){alert("Verbrauch in Kilowattstunden pro Jahr eingeben!");
t.focus();r=0}if(url&&tv>99999){obj.phpurl.value=url}if(isNaN(pv)||pv.length!=5){alert("Bitte eine fünfstellige Postleitzahl eingeben!");
p.focus();r=0}return r?true:false}var Tto_homeF=0;function Tto_homeIni(){var c=TgC("rsi_segs")||false;
if((T.ART==1||T.PA.split("/").length>3)&&N.cookieEnabled&&TgC("Thp")===null&&(TisFF||TisIE)&&D.referrer.length>0&&D.referrer.split("/")[2].indexOf("t-online.de")==-1&&L.host.indexOf("t-online")>-1&&L.host.indexOf("augenblicke")!=0&&L.host.indexOf("kids.t-online")!=0&&c&&c.indexOf("B10051")==-1){Tinc("http://stats.t-online.de/t-online-als-startseite/id_60088898/tid_css/index_id60088898.css");
Tto_homeF=1;Tinc("http://stats.t-online.de/t-online-als-startseite-run-js/id_60250896/tid_js/index_id60250896.js")
}}function Tartrefresh(e){T$(e).addClass("Tload");T$(".Tart").css("opacity","0.5");
T$.get(location.href,function(data){var ArtData=T$(".Tart",data).html();T$(".Tart").html(ArtData);
T$(".Tart").css("opacity","1");TgfbC.init()})}var Tmnstk="TMeineNewsKeys";var Tmnstkf="TMeineNewsFirst";
var Tmnstka=new Array();var TnumArts=0;var Tthmcnt=0;var Tmenejson=new Array();function TLoadKeys(){if(TgWS(Tmnstk)){Tmnstka=TgWS(Tmnstk).split(":")
}else{Tmnstka.splice(0)}}function TaddKey(k){if(Tmnstka){for(i=0;i<Tmnstka.length;
i++){if(k==Tmnstka[i]){return""}}if(Tmnstka.length>19){return"Sie verfolgen bereits die max. Anzahl von 20 Themen!<br />"
}}Tmnstka.push(k);return""}function TremoveKey(k){for(i=0;i<Tmnstka.length;i++){if(k==Tmnstka[i]){Tmnstka.splice(i,1);
return true}}}function TisKey(k){if(!Tmnstka||!Tmnstka.length){return false}for(i=0;
i<Tmnstka.length;i++){if(k==Tmnstka[i]){return true}}return false}function TlbCl(){T$(".Tmeneselb,#Tlbol").fadeOut("fast")
}function TlbOp(){T$(".Tmenethm,#Tlbol").fadeIn("fast")}function TlbOpDel(){T$(".Tmenedelb,#Tlbol").fadeIn("fast")
}function TinitMeNe(){TnumArts=0;TLoadKeys();T$("body").append('<div id="Tlbol"></div><div class="Tmeneselb Tmenethm"><h1>Themenauswahl</h1><p class="errFld"></p><p>Wählen Sie die Themen aus, die Sie weiter verfolgen wollen.</p><div class="Tlbclb"></div><form id="Tmeneselform"></form></div>');
var b=T$("body"),w=T$(window);T$("#Tlbol").css({width:b.width(),height:b.height(),opacity:0.5,display:"none"});
T$(".Tmenearna a").each(function(){var t=T$(this).text();var c="";if(TisKey(t)){c='checked="checked" '
}T$(".Tmeneselb form").append('<label><input type="checkbox" name="tagsel'+t+'" value="'+t+'"'+c+" /> "+t+"</label>")
});T$(".Tmeneselb form").append('<span class="Tbutbs"><b></b><i></i><input type="button" value="Speichern" /></span>');
T$(".Tmenethm").css({left:(w.width()-T$(".Tmeneselb").width())/2,top:(w.height()-T$(".Tmeneselb").height())/2}).hide();
T$("#Tlbol,.Tlbclb").click(function(){TlbCl()});T$(".Tmeneselb .Tbutbs").click(function(){var err="";
T$(".Tmeneselb label input").each(function(){if(T$(this).prop("checked")){err=TaddKey(T$(this).val())
}if(err!=""){T$(this).removeAttr("checked")}});if(err!=""){T$(".errFld").append(err).show()
}else{TsWS(Tmnstk,Tmnstka.join(":"));TlbCl()}})}function TAktMeNeOvw(i){}function TinitMeNeOvw(){TLoadKeys();
T$("body").append('<div id="Tlbol"></div><div class="Tmeneselb Tmenethmedt"><h1>Meine News bearbeiten</h1><p class="errFld"></p><p>Wählen Sie die Themen aus, die Sie aus "Meine News" löschen wollen.</p><div class="Tlbclb"></div><form id="Tmeneselform"></form></div>');
var b=T$("body"),w=T$(window);T$("#Tlbol").css({width:b.width(),height:b.height(),opacity:0.5,display:"none"});
for(var i=0;i<Tmnstka.length;i++){var fname="json/"+Tmnstka[i].toLowerCase().replace(" ","-").replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")+".json";
T$.get(fname,function(data){num=parseResponse(data);T$(".Tmeneovwcnt").append('<a href="javascript:;" rel="'+Tmnstka[Tthmcnt-1]+'" class="Tmeneovwlnk'+(Tthmcnt==1?" Tmeneakt":"")+'">'+Tmnstka[Tthmcnt-1]+" ("+num+")</a>\n");
if(Tthmcnt==Tmnstka.length){T$(".Tmeneovwcnt .Tmeneovwlnk").click(function(){TAktMeNeOvw(T$(this).index());
T$(".Tmeneovwcnt .Tmeneakt").removeClass("Tmeneakt");T$(this).addClass("Tmeneakt")
})}},"json");var t=Tmnstka[i];T$(".Tmeneselb form").append('<label><input type="checkbox" name="tagsel'+t+'" value="'+t+'" /> '+t+"</label>")
}T$(".Tmeneselb").append('<span class="Tbutbs"><b></b><i></i><input type="button" value="LÃ¶schen" /></span>');
T$(".Tmenethmedt").css({left:(w.width()-T$(".Tmeneselb").width())/2,top:(w.height()-T$(".Tmeneselb").height())/2}).hide();
T$("#Tlbol,.Tlbclb").click(function(){TlbCl()});T$(".Tmeneselb .Tbutbs").click(function(){T$("#Tmeneselform input").each(function(j){if(T$(this).prop("checked")){TremoveKey(T$(this).val());
T$(".Tmeneovwcnt a.Tmeneovwlnk:eq("+j+")").hide()}});TsWS(Tmnstk,Tmnstka.join(":"));
TlbCl()});T$(".Tmeneovw .Tbutbs").click(function(){T$(".Tmenethmedt,#Tlbol").fadeIn("fast")
})}function parseResponse(d){Tmenejson.push(d);for(var i=0;i<d.rss.channel.item.length;
i++){var li=d.rss.channel.item[i].link;var id=li.substr(li.indexOf("id_")+3);id=id.substr(0,id.indexOf("/"));
TnumArts++}Tthmcnt++;return d.rss.channel.item.length}T$(document).ready(function(){if(T$(".Tmenearna").length>0){TinitMeNe();
T$(".Tmenearna").click(function(){TlbOp()})}T$(".Tmenedel").click(function(){TdWS(Tmnstk);
TdWS(Tmnstkf);alert("Entfernt!")});if(T$(".Tmenenav").length>0){for(var i=0;i<Tmnstka.length;
i++){var fname="json/"+Tmnstka[i].toLowerCase().replace(" ","-").replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")+".json";
console.log(fname);T$.get(fname,function(data){parseResponse(data);T$(".Tmenenav a span").text("("+TnumArts+")")
},"json")}T$(".Tmenenav").click(function(e){if(TgWS(Tmnstkf)){return true}else{var b=T$("body"),w=T$(window);
b.append('<div class="Tmeneselb Tmenecnf"><h1>Meine News</h1><p class="errFld"></p><p>Hier sehen Sie die neuesten Artikel zu den von Ihnen gespeicherten Themen. Sie können mit dem Button "Meine News Bearbeiten" auch bestimmte Themen wieder entfernen oder als verwandte Themen vorgeschlagene Themen hinzufügen. Maximal sind 20 Themen möglich.</p><p>Eine Anmeldung ist für diesen Service nicht erforderlich, allerdings muss Ihr Browser Cookies erlauben.</p><p><a class="Tmenelnk" href="'+T$(this).find("a").prop("href")+'">ohne Login weiter</a></p><div class="Tlbclb"></div></div>');
T$(".Tmeneselb").css({left:(w.width()-T$(".Tmeneselb").width())/2,top:(w.height()-T$(".Tmeneselb").height())/2}).hide();
T$("#Tlbol").fadeIn("fast");T$(".Tmenecnf").fadeIn("fast");T$("#Tlbol,.Tlbclb").click(function(){TlbCl()
});TsWS(Tmnstkf,"true");return false}})}if(T$(".Tmeneovw").length>0){TinitMeNeOvw()
}});Tready(function(){T$("#Tmainbox .Tmm a, #Tmainbox .Tmm area").each(function(){if(T$(this).attr("href")&&T$(this).attr("href").indexOf("count.shopping")>-1){T$(this).click(function(){var t=new Date().getTime();
var img=new Image();img.src="http://pix04.revsci.net/J11257/b3/0/3/noscript.gif?D=DM_LOC%3Dhttp%253A%252F%252Fwww.t-online.de%252Fallgemein%252Fclick%252Fgruppe-a%252F%26DM_EOM%3D1&C=J11257&L=0&ts="+t
})}})});function TABTest(urlArr){var variante,abc="ABtest";if(!TgC(abc)){variante=Math.floor(Math.random()*urlArr.length);
TsC(abc,variante,86400,"/")}else{variante=TgC(abc)}gurl=urlArr[variante];T$.ajax({url:gurl,async:false,timeout:1000,success:function(result){D.write(result)
},error:function(){variante="_Fehler"}});xt_multc+="&x19=Variante"+variante}var jsonBase="http://ariadne.esemos.de/portal_suggestion/ariadne/suggestion",sugg_act=0,suggid="",actq="",inp_id="";
T$(function(){T$("#Tsearch2").submit(function(){T$("#Tscini").blur();ThideIt()})});
function TcheckTaste(obj,key){var $as=T$("#Tausugg");if(T$(obj).attr("id").length>0){inp_id=T$(obj).attr("id")
}if($as.length>0){if(key==40||key==38){Ttaste(key,inp_id)}else{if(key!=37&&key!=39){actq=obj.value;
T$(obj).parent().parent().find("input[name=sr]").val("ptoweb");if(actq==""){ThideIt()
}else{makeJsonp(obj)}}}}}function suggover(num){if(document.getElementById("suggest_"+(sugg_act))){document.getElementById("suggest_"+sugg_act).className="passugg"
}document.getElementById("suggest_"+num).className="actsugg";sugg_act=num}function Ttaste(key){if(key==40&&document.getElementById("suggest_"+(sugg_act+1))){if(document.getElementById("suggest_"+(sugg_act))){document.getElementById("suggest_"+(sugg_act)).className="passugg"
}document.getElementById("suggest_"+(++sugg_act)).className="actsugg";var sq=document.getElementById("suggest_"+(sugg_act)).getAttribute("alt");
sq=str_replace("</b>","",sq);sq=str_replace("<b>","",sq);sq=str_replace("</B>","",sq);
sq=str_replace("<B>","",sq);document.getElementById(inp_id).value=sq}else{if(key==38&&document.getElementById("suggest_"+(sugg_act-1))){if(document.getElementById("suggest_"+(sugg_act))){document.getElementById("suggest_"+(sugg_act)).className="passugg"
}document.getElementById("suggest_"+(--sugg_act)).className="actsugg";var sq=document.getElementById("suggest_"+(sugg_act)).getAttribute("alt");
sq=str_replace("</b>","",sq);sq=str_replace("<b>","",sq);sq=str_replace("</B>","",sq);
sq=str_replace("<B>","",sq);document.getElementById(inp_id).value=sq}else{if(key==38&&sugg_act==1){if(document.getElementById("suggest_"+(sugg_act))){document.getElementById("suggest_"+(sugg_act)).className="passugg"
}document.getElementById(inp_id).value=actq;sugg_act=0}}}T$("#"+inp_id).parent().parent().find("input[name=sr]").val(sugg_act>0?"pto_sugg":"ptoweb")
}function makeJsonp(obj){var q=obj.value;if(q!=""&&q!=" "){var jpreq=document.createElement("script");
var jptarget=document.createAttribute("src");q=str_replace("&","%26",q);var now=Math.round(new Date().getTime()/1000);
var jsonpath=jsonBase+"?q="+q+"&ts="+now+"&callback=viewSugg&context=start";jptarget.nodeValue=jsonpath;
jpreq.setAttributeNode(jptarget);document.getElementsByTagName("head")[0].appendChild(jpreq)
}T$(obj).parent().parent().find("input[name=sr]").val("ptoweb")}function viewSugg(res){var $as=T$("#Tausugg");
var sugglabel="";var b=res.suggestions.Suggests;if(!b){$as.html("").hide()}else{var suggests="";
var anz=(b)?b.length:0;var params="sr=pto_sugg";for(var i=0;i<anz&&i<100;i++){var sugg_value=b[i].suggest[0],sugg_value_short=sugg_value,sugg_value_o=b[i].suggest[2],sugg_value_url=encodeURIComponent(sugg_value_o),sugg_value_url=sugg_value_url.replace(/%20/g,"+");
burl="http://suche.t-online.de/fast-cgi/tsc?"+params+"&q="+sugg_value_url;if(sugg_value_o.length>65){while(sugg_value_short.indexOf(" ")>0&&sugg_value_short.length>65){sugg_value_short=sugg_value_short.substring(0,sugg_value_short.lastIndexOf(" "))
}if(sugg_value_short.length<20){sugg_value_short=sugg_value.substring(0,65)}sugg_value_short+="..."
}sugg_value=HTMLEncode(sugg_value);suggests+="<a href='"+burl+"' id='suggest_"+(i+1)+"' onmouseover='suggover("+(i+1)+")' class='passugg' target='_blank' alt='"+sugg_value_o+"'>"+sugg_value_short+"</a> "
}suggests+="<span id='sugglabel' class='sugglabel'>"+sugglabel+"</span>";$as.html("");
$as.css("width",(document.getElementById(inp_id).offsetWidth-1)+"px");$as.css("left",document.getElementById(inp_id).offsetLeft+"px");
$as.css("top",(document.getElementById(inp_id).offsetTop+document.getElementById(inp_id).offsetHeight-1)+"px");
$as.html(suggests).show();T$("body, #Tausugg a").click(function(){ThideIt()})}}function str_replace(search,replace,subject){var result="",oldi=0;
for(i=subject.indexOf(search);i>-1;i=subject.indexOf(search,i)){result+=subject.substring(oldi,i);
result+=replace;i+=search.length;oldi=i}return result+subject.substring(oldi,subject.length)
}function HTMLEncode(str){var st=str.split(""),i=st.length,re=[];while(--i){var c=st[i].charCodeAt();
if(c<65||c>127||(c>90&&c<97)){re.push("&#"+c+";")}else{re.push(st[i])}}return re.reverse().join("")
}function ThideIt(){T$("#Tausugg").empty().hide();sugg_act=0}function TABTest_AS(){};