<!--
sfHover = function() {
    var sfEls = document.getElementById("nav").getElementsByTagName("LI");
    for (var i=0; i<sfEls.length; i++) {
        sfEls[i].onmouseover=function() {
            this.className += " sfhover";
        }
        sfEls[i].onmouseout=function() {
            this.className = this.className.replace(new RegExp("\\s?sfhover\\b"), "");
        }
    }
}
if (window.attachEvent) window.attachEvent("onload", sfHover);
//-->

/*function showNavBlock(blockNr) {
  document.getElementById('navbox'+blockNr).style.display = "block";
  //if (blockNr == 1) { document.getElementById('navbox'+blockNr).style.marginLeft = "2px"; }   // Home Block
  if (blockNr == 2) { document.getElementById('navbox'+blockNr).style.marginLeft = "53px"; }    // Bundesliga Block
  if (blockNr == 3) { document.getElementById('navbox'+blockNr).style.marginLeft = "143px"; }   // 2.Bundesliga Block
  if (blockNr == 4) { document.getElementById('navbox'+blockNr).style.marginLeft = "249px"; }   // Wettbewerbe Block
  if (blockNr == 5) { document.getElementById('navbox'+blockNr).style.marginLeft = "355px"; }   // Statistik Block
  if (blockNr == 6) { document.getElementById('navbox'+blockNr).style.marginLeft = "431px"; }   // Historie Block
  if (blockNr == 7) { document.getElementById('navbox'+blockNr).style.marginLeft = "501px"; }   // Fanzone Block
  if (blockNr == 8) { document.getElementById('navbox'+blockNr).style.marginLeft = "572px"; }   // DFL Block
  if (blockNr == 9) { document.getElementById('navbox'+blockNr).style.marginLeft = "610px"; }   // Partner Block
  if (blockNr == 10) { document.getElementById('navbox'+blockNr).style.marginLeft = "730px"; }  // News Block
  if (blockNr == 11) { document.getElementById('navbox'+blockNr).style.marginLeft = "780px"; }  // Videos Block
}

function hideNavBlocks() {
  for (i=2; i<12; i++) {
    document.getElementById('navbox'+i).style.display = "none";
  }
}*/