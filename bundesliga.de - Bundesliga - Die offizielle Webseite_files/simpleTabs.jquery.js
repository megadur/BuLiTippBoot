(function($){
	$.fn.simpleTabs = function(option){
		
		// This part will be overwritten by the Module
		var param = jQuery.extend({
			fadeSpeed: "medium", // @param : low, medium, fast
			defautContent: 1, // @param : number ( simpleTabs-nav-number)
			autoNav: "false", // @param : true or false
			closeTabs : "false" // @param : true or false;
		}, option);
		
		$(this).each(function() {	
			// Initialisation
			var $this = this;
			var $thisId = "#"+this.id;
			var nbTab = $($thisId+" > div").size();
			autoNav();
			showCloseTabs();
			hideAll();
			changeContent(param.defautContent);
			
			// Functions
			function hideAll(){
				// hide all the content
				$($thisId+" .simpleTabs-content").hide();
			}
			function changeContent(indice){
				// Change Content and set the actif li element
				hideAll();
				$($thisId+" .simpleTabs-nav li").removeClass("actif");
				$($thisId+" #simpleTabs-nav-"+indice).addClass("actif");
				$($thisId+" #simpleTabs-content-"+indice).fadeIn(param.fadeSpeed);				
				if($thisId == "#simpleTabs-300") {
				  if (indice == 3001) {
				    $("#box_links_liga").show();
    	      $("#box_links_liga2").hide();    
				  }
				  if (indice == 3002) {
				    $("#box_links_liga").hide();
    	      $("#box_links_liga2").show();    
				  }
				}
				showCloseTabs();
			}
			function autoNav(){
				// Make Auto Navigation
				if(param.autoNav == "true"){
					var listeNav = '';
					for(i=1; i!=nbTab; i++){
						listeNav = listeNav+'<li id="simpleTabs-nav-'+i+'">'+i+'</li>';
					}
					$($thisId+" .simpleTabs-nav").append('<ul>'+listeNav+'</ul>');
				}
			}
			function showCloseTabs(){
				// Show the ClosTab Buttons
				if(param.closeTabs == "true"){
					if($($thisId+" .simpleTabs-nav li.close").size() == 0){
						$($thisId+" .simpleTabs-nav ul").append("<li title=\"Fermer tous les onglets\" class=\"close\">x</li>");
					}
				}
			}
			
			// Execute
			$($thisId+" .simpleTabs-nav li").click(function(){
				var numContent = this.id.substr(15,this.id.length);
				changeContent(numContent);
			});
			
			// Test function closeTabs
			$($thisId+" .simpleTabs-nav li.close").click(function(){
				hideAll();
				$($thisId+" .simpleTabs-nav li").removeClass("actif");
				$($thisId+" .simpleTabs-nav li.close").remove();
			});
		});
	}
})(jQuery);




/*
 *OLD TABS DELETE AFTER LIVE
	
	var klickerL;
	var klickerR;
  
function OnNavL(containerID) {
	if (!klickerL) {
		document.getElementById("links").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links_hl.gif)'; 
 		if (klickerR) { document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_beide_hl.gif)';  }
 		else { document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)'; }
 		document.getElementById("simpleTabs-nav-4").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
	}
}
function OffNavL() {
	if (!klickerL) {
		document.getElementById("links").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links.gif)'; 
 		document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_rechts_hl.gif)'; 
 		document.getElementById("simpleTabs-nav-4").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 	
	}
}
function OnNavR() {
	if (!klickerR) {
		document.getElementById("rechts").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts_hl.gif)'; 
 		if (klickerL) { document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_beide_hl.gif)'; } 
 		document.getElementById("simpleTabs-nav-5").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
	}
}
function OffNavR() {
	if (!klickerR) {
 		document.getElementById("rechts").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts.gif)'; 
 		document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)'; 
 		document.getElementById("simpleTabs-nav-5").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 
 	}
}
function OnL() {
 	klickerL = true; 
 	klickerR = false;
 	document.getElementById("links").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links_hl.gif)'; 
 	document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)';
 	document.getElementById("simpleTabs-nav-4").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
 	document.getElementById("rechts").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts.gif)'; 
 	document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)'; 
 	document.getElementById("simpleTabs-nav-5").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 
}
function OnR() {
 	klickerL = false;
 	klickerR = true;
 	document.getElementById("rechts").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts_hl.gif)'; 
 	document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_beide_hl.gif)';
 	document.getElementById("simpleTabs-nav-5").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
 	document.getElementById("links").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links.gif)'; 
 	document.getElementById("mitte").style.backgroundImage ='url(/pics/cardbox/reiter_rechts_hl.gif)'; 
 	document.getElementById("simpleTabs-nav-4").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 	
}
*/


/**
  DELETE AFTER LIVE
  THIS IS THE OLD TAB FOR SPIELTAGSVORSCHAU
  -----------------------------------------------

 * Changes MS 15.09.2009
 * added possibility to have more than one tab element
 */  
 
/**
 * Activates a tab according to the selected side and prefix
 *
 * @param side the side to activate
 * @param prefix the tab element to activate
 */
 
/*
function activateSimpleTab(side, prefix) {
  if (side == "left") {
    document.getElementById(prefix + "-left").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links_hl.gif)'; 
    document.getElementById(prefix + "-center").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)';
    document.getElementById(prefix + "-tableft").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
    document.getElementById(prefix + "-right").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts.gif)'; 
    document.getElementById(prefix + "-center").style.backgroundImage ='url(/pics/cardbox/reiter_links_hl.gif)'; 
    document.getElementById(prefix + "-tabright").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 
		$('#' + prefix + "-leftContent").fadeIn("medium");
		$('#' + prefix + "-rightContent").hide();
  } else {
    document.getElementById(prefix + "-right").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_rechts_hl.gif)'; 
    document.getElementById(prefix + "-center").style.backgroundImage ='url(/pics/cardbox/reiter_beide_hl.gif)';
    document.getElementById(prefix + "-tabright").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_hl.gif)'; 	
    document.getElementById(prefix + "-left").style.backgroundImage ='url(/pics/cardbox/reiter_ecke_links.gif)'; 
    document.getElementById(prefix + "-center").style.backgroundImage ='url(/pics/cardbox/reiter_rechts_hl.gif)'; 
    document.getElementById(prefix + "-tableft").style.backgroundImage ='url(/pics/cardbox/reiter_mitte_no_hl.gif)'; 
		$('#' + prefix + "-rightContent").fadeIn("medium");
		$('#' + prefix + "-leftContent").hide();
  }
}

/**
 * Shows a hover image on the rolled over tab
 *
 * @param side the rolled over side
 * @param prefix the tab element to roll over
 */
 /*
function rollOverSimpleTab(side, prefix) {
}
*/

/**
 * Disables the rollover state, if the tab is
 * inactive
 *
 * @param side the rolled over side
 * @param prefix the tab element to roll over
 */
 /*
function rollOutSimpleTab(side, prefix) {
}*/
