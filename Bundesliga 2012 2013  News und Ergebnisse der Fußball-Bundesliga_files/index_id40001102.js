function xtSh(str1,str2,nt,ntg,idp){var xt_imgc=new Image(),lim=1500,mh="&mh="+nt+"-"+ntg+"-"+idp;
if(str2.length>lim){var reg=new RegExp("[,]","gi"),tab=str2.substring(0,str2.length-1).split(reg),hit="",l=tab[0].length,i=0;
while((l<lim)&&(i<tab.length)){hit+=tab[i]+",";if(i<tab.length-1){l+=(tab[i+1].length)+1
}i+=1}ntg=(ntg==1)?Math.ceil(str2.length/lim):ntg;mh="&mh="+nt+"-"+ntg+"-"+idp;xt_imgc.src=str1+"&idp="+idp+mh+hit;
str2="&ati=";for(var j=i;j<tab.length;j++){str2+=tab[j]+","}xtSh(str1,str2,nt+1,ntg,idp)
}else{if(str2.length>5){xt_imgc.src=(nt==1)?str1+"&idp="+idp+str2:str1+"&idp="+idp+mh+str2
}}};