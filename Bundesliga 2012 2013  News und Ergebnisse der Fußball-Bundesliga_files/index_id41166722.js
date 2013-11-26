(function(T$){T$.fn.Ttabs=function(option){var para=jQuery.extend({fadeSpeed:"medium",defautContent:0,rotTime:0,stg:"false",lockHeight:1,tabAlign:"right"},option);
var ct=0;T$(this).each(function(){uid=Math.round(Math.random()*10000);T$(this).attr("id",uid);
var $thisId="#"+uid;var nbTab=(T$($thisId+" > div").size())-1;var l=0;ct++;var rotSt;
setContent(uid,T$($thisId).find(".Ttab"));buildNav(uid,$thisId,T$(this));hideAll();
initStg(uid);changeContent(para.defautContent,$thisId,uid);if(para.rotTime!=0){setTimeout(function(){rotEngine(para.defautContent,$thisId,uid)
},para.rotTime)}function setContent(uid,aktOb){aktOb.attr("id",function(arr){return uid+"-"+arr
})}function hideAll(){T$($thisId+" .Ttab").hide()}function initStg(uid){if(para.stg=="true"){T$(".Tmst4").attr("id","Tstg"+uid);
T$("#Tstg"+uid+" .Tbl").attr("id",function(ary){return"Trtbz-"+ary});T$("#Tstg"+uid+" .Tbl").css("display","none");
T$("#Tstg"+uid+" #Trtbz-"+para.defautContent).css("display","block")}}function chngBackg(hovId,$thisId){if(para.stg=="true"){T$("#Tstg"+$thisId.substr(1)+" .Tbl").css("display","none");
T$("#Tstg"+$thisId.substr(1)+" #Trtbz-"+hovId).css("display","block")}}function rotEngine(indi,$thisId,uid){if(indi<T$($thisId+" .Ttabs-nav li:not(.aa,.zz)").size()-1){indi++
}else{indi=0}changeContent(indi,$thisId,uid);rotSt=setTimeout(function(){rotEngine(indi,$thisId,uid)
},para.rotTime);T$("#Tstg"+$thisId.substr(1)).hover(function(){clearTimeout(rotSt)
},function(){clearTimeout(rotSt);rotSt=setTimeout(function(){rotEngine(indi,$thisId,uid)
},para.rotTime)});T$($thisId).hover(function(){clearTimeout(rotSt)},function(){clearTimeout(rotSt);
rotSt=setTimeout(function(){rotEngine(indi,$thisId,uid)},para.rotTime)})}function changeContent(indice,$thisId,uid){hideAll();
T$($thisId+" .Ttabs-nav li").removeClass("act");T$($thisId+" "+$thisId+"-nav-"+indice).addClass("act");
if(indice==0){T$($thisId+" "+$thisId+"-nav-"+indice).prev().addClass("navl")}else{T$($thisId+" .Ttabs-nav li:first").removeClass("navl")
}if((T$($thisId+" .Ttabs-nav li").size()-3)==indice){T$($thisId+" "+$thisId+"-nav-"+indice).next().addClass("navr")
}else{T$($thisId+" .Ttabs-nav li:last").removeClass("navr")}T$($thisId+" "+$thisId+"-"+indice).show();
chngBackg(indice,$thisId)}function buildNav(uid,$thisId,self){var listeNav="";var countW=0;
var curW=0;var curTab=0;var negT=false;for(i=0;i<nbTab;i++){var iHtml=T$($thisId+" #"+uid+"-"+i+" p:first").html();
T$($thisId+" #"+uid+"-"+i+" p:first").html(iHtml.substring(iHtml.indexOf("<"),iHtml.length));
T$($thisId+" #"+uid+"-"+i+" p:first a:first").html(iHtml.substring(0,iHtml.indexOf("&nbsp;<")));
var iText=T$($thisId+" #"+uid+"-"+i+" h3:first").text();T$($thisId+" #"+uid+"-"+i+" h3:first").html(iText);
listeNav=listeNav+'<li id="'+uid+"-nav-"+i+'">'+iText+"</li>";if(T$($thisId+" .Ttabs-nav li").eq(i+1).hasClass("act")){curTab=i
}}T$($thisId).width(T$($thisId+"-"+curTab+" > div:first").width());self.find(".Ttabs-nav").children().remove();
if(para.lockHeight==1){T$($thisId).height(T$($thisId+"-"+curTab+" > div:first").height())
}T$($thisId).css("position","relative");curW=T$($thisId+"-"+curTab+" > div:first").width();
T$($thisId+" .Ttabs-nav").append("<ul>"+listeNav+"</ul>");T$($thisId+" .Ttabs-nav").width(T$($thisId+"-"+curTab+" > div:first").width());
var newHtmlSt="<li class='aa'> </li>";var newHtmlEn="<li class='zz'> </li>";T$($thisId+" .Ttabs-nav ul").prepend(newHtmlSt);
T$($thisId+" .Ttabs-nav ul").append(newHtmlEn);for(r=0;r<nbTab;r++){countW=countW+(T$($thisId+"-nav-"+r).outerWidth(true))
}if(para.tabAlign=="justify"){countW=countW-22;var rest=(curW-countW)%nbTab;tabW=Math.floor((curW-countW)/nbTab);
if((curW-countW)<0){negT=true;rest*=-1;tabW=Math.floor(((curW-countW)*-1)/nbTab)}for(r=0;
r<nbTab;r++){T$($thisId+"-nav-"+para.defautContent).addClass("act");if(!negT&&T$($thisId+"-nav-"+r).hasClass("act")){T$($thisId+"-nav-"+r).width(T$($thisId+"-nav-"+r).width()+rest);
rest=0}else{if(rest>0){tabA=Math.floor(rest/nbTab);var restA=rest%nbTab;T$($thisId+"-nav-"+r).width(T$($thisId+"-nav-"+r).width()-tabA);
rest++}}if(negT){T$($thisId+"-nav-"+r).width(T$($thisId+"-nav-"+r).width()-tabW)}else{T$($thisId+"-nav-"+r).width(T$($thisId+"-nav-"+r).width()+tabW)
}}T$($thisId+" .Ttabs-nav li:last").prev().width(T$($thisId+" .Ttabs-nav li:last").prev().width()-10);
T$($thisId+" .Ttabs-nav li:first").next().width(T$($thisId+" .Ttabs-nav li:first").next().width()-10);
T$($thisId+" .Ttabs-nav li:last").prev().css({"border-right":"0","padding-right":"0"});
T$($thisId+" .Ttabs-nav li:first").next().css({"padding-left":"0"})}else{if(para.tabAlign=="right"){T$($thisId+" .Ttabs-nav li:first").width(curW-countW);
T$($thisId+" .Ttabs-nav li:first").css({background:"none repeat scroll 0 0 transparent",margin:"0"})
}}}T$($thisId+" .Ttabs-nav li:not(.aa,.zz)").click(function(){if(T$(this).attr("id").length>T$(this).closest("ul").find("li:eq(1)").attr("id").length){var numContent=this.id.substr(this.id.length-2,this.id.length)
}else{var numContent=this.id.substr(this.id.length-1,this.id.length)}changeContent(numContent,$thisId,uid)
})})}})(jQuery);var Tcfpos=new Array(new Array(84,51,110,71,2),new Array(140,39,148,95,3),new Array(213,28,182,117,4),new Array(322,39,148,95,3),new Array(416,51,110,71,2));
var Tcf2pos=new Array(new Array(84,51,99,71,2),new Array(140,39,132,95,3),new Array(213,20,182,131,4),new Array(322,39,132,95,3),new Array(416,51,99,71,2));
var Tcf3pos=new Array(new Array(63,39,218,95,3),new Array(156,20,300,131,4),new Array(330,39,218,95,3));
var Tcf4pos=new Array();var aktstart=new Array(0,0,0,new Array());var numcovers=new Array(0,0,0,new Array());
var Tcoflisscroll=new Array(0,0,0,0);var coflflag=new Array();var TcoflTimer=new Array();
T$(document).ready(function(){T$(".Tcofl a > div").each(function(i){if(i>=aktstart[0]&&i<aktstart[0]+5){T$(this).css({position:"absolute",left:Tcfpos[i][0],top:Tcfpos[i][1],width:Tcfpos[i][2],height:Tcfpos[i][3],"z-index":Tcfpos[i][4]});
T$(this).find("div > p").css({"font-size":(Tcfpos[i-aktstart[0]][3]/117*12)+"px"})
}T$(this).removeClass();if(i<aktstart[0]||i>aktstart[0]+4){T$(this).addClass("Tcoflpi");
T$(this).css({left:Tcfpos[4][0],top:Tcfpos[4][1],width:Tcfpos[4][2],height:Tcfpos[4][3],"z-index":0})
}numcovers[0]++});T$(".Tcofl2 .Tcofl2ll").each(function(i){if(i>=aktstart[1]&&i<aktstart[1]+5){T$(this).css({left:Tcf2pos[i][0],top:Tcf2pos[i][1],width:Tcf2pos[i][2],height:Tcf2pos[i][3],"z-index":Tcf2pos[i][4]});
T$(this).find("div > p").css({"font-size":(Tcf2pos[i-aktstart[1]][3]/131*12)+"px"});
T$(this).find("a").css({"font-size":(Tcf2pos[i-aktstart[1]][3]/131*11)+"px"});T$(this).find("ul").css({"line-height":(Tcf2pos[i-aktstart[1]][3]/131*15)+"px",padding:(Tcf2pos[i-aktstart[1]][3]/131*6)+"px "+(Tcf2pos[i-aktstart[1]][2]/182*13)+"px"})
}if(i<aktstart[1]||i>aktstart[1]+4){T$(this).addClass("Tcoflpi");T$(this).css({left:Tcf2pos[4][0],top:Tcf2pos[4][1],width:Tcf2pos[4][2],height:Tcf2pos[4][3],"z-index":0})
}numcovers[1]++});T$(".Tcofl3 .Tcofl3ll").each(function(i){if(i>=aktstart[2]&&i<aktstart[2]+3){T$(this).css({left:Tcf3pos[i][0],top:Tcf3pos[i][1],width:Tcf3pos[i][2],height:Tcf3pos[i][3],"z-index":Tcf3pos[i][4]});
T$(this).find("div > p").css({"font-size":(Tcf3pos[i-aktstart[2]][3]/131*12)+"px"});
T$(this).find("a").css({"font-size":(Tcf3pos[i-aktstart[2]][3]/131*11)+"px"});T$(this).find("ul").css({"line-height":(Tcf3pos[i-aktstart[2]][3]/131*15)+"px",padding:(Tcf3pos[i-aktstart[2]][3]/131*6)+"px "+(Tcf3pos[i-aktstart[2]][3]/300*13)+"px"})
}if(i<aktstart[2]||i>aktstart[2]+2){T$(this).addClass("Tcoflpi");T$(this).css({left:Tcf3pos[2][0],top:Tcf3pos[2][1],width:Tcf3pos[2][2],height:Tcf3pos[2][3],"z-index":0})
}numcovers[2]++});T$(".Tcofl4i, .Tcofl5i, .Tcofl6i").each(function(i){Tcf4pos.push(new Array(T$(this).find("li").outerWidth(true),(T$(this).parent().outerWidth(true)/(T$(this).find("li").outerWidth(true)+T$(this).position().left)),T$(this).position().left));
numcovers[3].push(T$(this).find("li").length);aktstart[3].push(0);T$(this).css({width:(numcovers[3][i]*Tcf4pos[i][0])});
if(T$(this).hasClass("Tcofl6i")){coflflag[i]=1;TcoflTimer[i]=window.setInterval("Tcofl6AutoScroll("+i+")",3000);
T$(this).parent().mouseover(function(){window.clearInterval(TcoflTimer[i])});T$(this).parent().mouseout(function(){TcoflTimer[i]=window.setInterval("Tcofl6AutoScroll("+i+")",3000)
})}});T$(".Tcofl .Tcfarrl").click(function(){if(Tcoflisscroll[0]==1||aktstart[0]<-1){return 0
}aktstart[0]--;if(aktstart[0]==-2){T$(this).addClass("Tcfarrld")}T$(".Tcofl .Tcfarrr").removeClass("Tcfarrrd");
TcoflScroll()});T$(".Tcofl .Tcfarrr").click(function(){if(Tcoflisscroll[0]==1||aktstart[0]+4>numcovers[0]){return 0
}aktstart[0]++;if(aktstart[0]+3==numcovers[0]){T$(this).addClass("Tcfarrrd")}T$(".Tcofl .Tcfarrl").removeClass("Tcfarrld");
TcoflScroll()});T$(".Tcofl2 .Tcfarrl").click(function(){if(Tcoflisscroll[1]==1||aktstart[1]<-1){return 0
}aktstart[1]--;if(aktstart[1]==-2){T$(this).addClass("Tcfarrld")}T$(".Tcofl2 .Tcfarrr").removeClass("Tcfarrrd");
Tcofl2Scroll()});T$(".Tcofl2 .Tcfarrr").click(function(){if(Tcoflisscroll[1]==1||aktstart[1]+4>numcovers[1]){return 0
}aktstart[1]++;if(aktstart[1]+3==numcovers[1]){T$(this).addClass("Tcfarrrd")}T$(".Tcofl2 .Tcfarrl").removeClass("Tcfarrld");
Tcofl2Scroll()});T$(".Tcofl3 .Tcfarrl").click(function(){if(Tcoflisscroll[2]==1||aktstart[2]<0){return 0
}aktstart[2]--;if(aktstart[2]==-1){T$(this).addClass("Tcfarrld")}T$(".Tcofl3 .Tcfarrr").removeClass("Tcfarrrd");
Tcofl3Scroll()});T$(".Tcofl3 .Tcfarrr").click(function(){if(Tcoflisscroll[2]==1||aktstart[2]+3>numcovers[2]){return 0
}aktstart[2]++;if(aktstart[2]+2==numcovers[2]){T$(this).addClass("Tcfarrrd")}T$(".Tcofl3 .Tcfarrl").removeClass("Tcfarrld");
Tcofl3Scroll()});T$(".Tcofl4 .Tcfarrl, .Tcofl5 .Tcfarrl, .Tcofl6 .Tcfarrl").each(function(i){T$(this).click(function(){if(aktstart[3][i]==0){return 0
}aktstart[3][i]--;if(aktstart[3][i]==0){T$(this).addClass("Tcfarrld")}T$(".Tcofl4 .Tcfarrr, .Tcofl5 .Tcfarrr, .Tcofl6 .Tcfarrr").eq(i).removeClass("Tcfarrrd");
Tcofl4Scroll(i)})});T$(".Tcofl4 .Tcfarrr, .Tcofl5 .Tcfarrr, .Tcofl6 .Tcfarrr").each(function(i){T$(this).click(function(){if(aktstart[3][i]+Tcf4pos[i][1]>=numcovers[3][i]){return false
}aktstart[3][i]++;if(aktstart[3][i]+Tcf4pos[i][1]==numcovers[3][i]){T$(this).addClass("Tcfarrrd")
}T$(".Tcofl4 .Tcfarrl, .Tcofl5 .Tcfarrl, .Tcofl6 .Tcfarrl").eq(i).removeClass("Tcfarrld");
Tcofl4Scroll(i)})})});function Tcofl6AutoScroll(cofl){if(coflflag[cofl]==1){T$(".Tcofl4 .Tcfarrr, .Tcofl5 .Tcfarrr, .Tcofl6 .Tcfarrr").eq(cofl).click()
}else{T$(".Tcofl4 .Tcfarrl, .Tcofl5 .Tcfarrl, .Tcofl6 .Tcfarrl").eq(cofl).click()
}if(aktstart[3][cofl]==0||aktstart[3][cofl]==numcovers[3][cofl]-1){coflflag[cofl]=-coflflag[cofl]
}}function Tcofl4Scroll(act){T$(".Tcofl4i, .Tcofl5i, .Tcofl6i").each(function(i){if(i==act){T$(this).animate({left:Tcf4pos[i][2]-aktstart[3][i]*Tcf4pos[i][0]},"normal","linear",function(){T$(this).show()
})}})}function TcoflScroll(){var vf=1;Tcoflisscroll[0]=1;T$(".Tcofl a > div").each(function(i){if(i>=aktstart[0]&&i<aktstart[0]+5){T$(this).animate({left:Tcfpos[i-aktstart[0]][0],top:Tcfpos[i-aktstart[0]][1],width:Tcfpos[i-aktstart[0]][2],height:Tcfpos[i-aktstart[0]][3]},"normal","linear",function(){T$(this).css({zIndex:Tcfpos[i-aktstart[0]][4]});
if(i==aktstart[0]+2){Tcoflisscroll[0]=0}});vf=Tcfpos[i-aktstart[0]][3]/117;T$(this).find("div > p").animate({fontSize:(vf*12)+"px"},"normal","linear",function(){})
}else{T$(this).hide("fast",function(){T$(this).css("z-index","0")})}})}function Tcofl2Scroll(){var vf=1;
Tcoflisscroll[1]=1;T$(".Tcofl2 .Tcofl2ll").each(function(i){if(i>=aktstart[1]&&i<aktstart[1]+5){T$(this).animate({left:Tcf2pos[i-aktstart[1]][0],top:Tcf2pos[i-aktstart[1]][1],width:Tcf2pos[i-aktstart[1]][2],height:Tcf2pos[i-aktstart[1]][3]},"normal","linear",function(){T$(this).css({zIndex:Tcf2pos[i-aktstart[1]][4]});
if(i==aktstart[1]+2){Tcoflisscroll[1]=0}});vf=Tcf2pos[i-aktstart[1]][3]/131;T$(this).find("div > p").animate({fontSize:(vf*12)+"px"},"normal","linear",function(){});
T$(this).find("a").animate({fontSize:(vf*11)+"px"},"normal","linear",function(){});
T$(this).find("ul").animate({lineHeight:(vf*14)+"px",paddingTop:(vf*6)+"px",paddingLeft:(Tcf2pos[i-aktstart[1]][2]/182*13)+"px"},"normal","linear",function(){})
}else{T$(this).hide("fast",function(){T$(this).css("z-index","0")})}})}function Tcofl3Scroll(){var vf=1;
Tcoflisscroll[2]=1;T$(".Tcofl3 .Tcofl3ll").each(function(i){if(i>=aktstart[2]&&i<aktstart[2]+3){T$(this).animate({left:Tcf3pos[i-aktstart[2]][0],top:Tcf3pos[i-aktstart[2]][1],width:Tcf3pos[i-aktstart[2]][2],height:Tcf3pos[i-aktstart[2]][3]},"normal","linear",function(){T$(this).css({zIndex:Tcf3pos[i-aktstart[2]][4]});
if(i==aktstart[2]+1){Tcoflisscroll[2]=0}});vf=Tcf3pos[i-aktstart[2]][3]/131;T$(this).find("div > p").animate({fontSize:(vf*12)+"px"},"normal","linear",function(){});
T$(this).find("a").animate({fontSize:(vf*11)+"px"},"normal","linear",function(){});
T$(this).find("ul").animate({lineHeight:(vf*14)+"px",paddingTop:(vf*6)+"px",paddingLeft:(Tcf3pos[i-aktstart[2]][2]/300*13)+"px"},"normal","linear",function(){})
}else{T$(this).hide("fast",function(){T$(this).css("z-index","0")})}})}function TMaskIlChars(s,t){var ts="";
for(i=0;i<s.length;i++){var iv=0;for(j=0;j<t.length;j++){if(t.charAt(j)==s.charAt(i)){iv++;
j=t.length}}if(iv>0){ts+=s.charAt(i)}else{ts+="+"}}return ts}function TRepWeSu(o){var t1=o.action;
var p=t1.substr(0,t1.lastIndexOf("/"));var q=t1.substr(t1.lastIndexOf("/"));var t2="/pattern_"+TMaskIlChars(o.elements.searchPattern.value,"abcdefghijklmnopqrstuvwxyzäöüßABCDEFGHIJKLMNOPQRSTUVWXYZÄÖÜ +-_0123456789");
o.action=p+t2+q;window.location.href=o.action;return false}function TBrNews(u){function TgetPWidth(x){var w=0;
x.find("li").each(function(){w+=T$(this).width()});return w}T$(u).each(function(){p=T$(this);
while(TgetPWidth(p)<951){p.append(p.html())}T$(".Tbrnws ul").webTicker({travelocity:0.03,direction:1})
});return true}
/*!
* webTicker 1.3
* Examples and documentation at:
* http://jonmifsud.com
* 2011 Jonathan Mifsud
* Version: 1.2 (26-JUNE-2011)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* Requires:
* jQuery v1.4.2 or later
*
*/
(function(b){var c=new Array();
var a={init:function(d){d=jQuery.extend({travelocity:0.05,direction:1,moving:true},d);
c[jQuery(this).attr("id")]=d;return this.each(function(){var e=jQuery(this);e.addClass("newsticker");
var g=0;var j=e.wrap("<div class='mask'></div>");j.after("<span class='tickeroverlay-left'>&nbsp;</span><span class='tickeroverlay-right'>&nbsp;</span>");
var f=e.parent().wrap("<div class='tickercontainer'></div>");e.find("li").each(function(m){g+=jQuery(this,m).outerWidth(true)
});e.width(g+200);function i(n,m){if(d.direction==1){e.animate({left:"-="+n},m,"linear",function(){e.children().last().after(e.children().first());
var q=e.children().first();var p=q.outerWidth(true);var o=p/d.travelocity;e.css("left","0");
i(p,o)})}else{e.animate({right:"-="+n},m,"linear",function(){e.children().last().after(e.children().first());
var q=e.children().first();var p=q.outerWidth(true);var o=p/d.travelocity;e.css("right","0");
i(p,o)})}}var k=e.children().first();var l=k.outerWidth(true);var h=l/d.travelocity;
i(l,h);e.hover(function(){jQuery(this).stop()},function(){if(c[jQuery(this).attr("id")].moving){var q=jQuery(this).offset();
var p=e.children().first();var n=p.outerWidth(true);var m;if(d.direction==1){m=parseInt(jQuery(this).css("left").replace("px",""))+n
}else{m=parseInt(jQuery(this).css("right").replace("px",""))+n}var o=m/d.travelocity;
i(m,o)}})})},stop:function(){if(c[jQuery(this).attr("id")].moving){c[jQuery(this).attr("id")].moving=false;
return this.each(function(){jQuery(this).stop()})}},cont:function(){if(!(c[jQuery(this).attr("id")].moving)){c[jQuery(this).attr("id")].moving=true;
var d=c[jQuery(this).attr("id")];return this.each(function(){var e=jQuery(this);function i(m,l){if(d.direction==1){e.animate({left:"-="+m},l,"linear",function(){e.children().last().after(e.children().first());
var p=e.children().first();var o=p.outerWidth(true);var n=o/d.travelocity;e.css("left","0");
i(o,n)})}else{e.animate({right:"-="+m},l,"linear",function(){e.children().last().after(e.children().first());
var p=e.children().first();var o=p.outerWidth(true);var n=o/d.travelocity;e.css("right","0");
i(o,n)})}}var k=jQuery(this).offset();var j=e.children().first();var g=j.outerWidth(true);
var f;if(d.direction==1){f=parseInt(jQuery(this).css("left").replace("px",""))+g}else{f=parseInt(jQuery(this).css("right").replace("px",""))+g
}var h=f/d.travelocity;i(f,h)})}}};b.fn.webTicker=function(d){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))
}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{b.error("Method "+d+" does not exist on jQuery.webTicker")
}}}})(jQuery);