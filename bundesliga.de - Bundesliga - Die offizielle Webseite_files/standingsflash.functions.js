var latestEventKey1BL = 34;
var latestEventKey2BL = 34;
var urlParam=[];
var _DEV_TEST = 1;

var standingData = {
	teamname: null,
	teamkey: null,
	eventsplayed: null,
	pointsscoredfor: null,
	pointsscoredagainst: null,
	standingpoints: null,
	rankvalue: null,
	trend: null
}

function clickTab(){
	var tabContainers = $('div.wwe-tabs-content > div');
	$('ul.wwe-tabs a').unbind('click');
	$('ul.wwe-tabs a').click(function () {
		tabContainers.hide().filter(this.hash).show();
		$('ul.wwe-tabs li').removeClass('wwe-tab-active');
		$(this).parents('li').addClass('wwe-tab-active');
		return false;
	});
	$('#1-bundesliga-tab').click();
}

function wwe_run_standingsflash(){
	
	// Ajax activity indicator bound to ajax start/stop document events
	$(document).ajaxStart(function(){
	  $('#ajaxBusy').show();
	}).ajaxStop(function(){
	  $('#ajaxBusy').hide();
	});

	// Setup the ajax indicator
	/* $('.wwe-tabs-content-container').append('<div id="ajaxBusy"><div class="wwe-preloader-content"></div></div>');*/


	
	latestEventKey1BL = Number(liga_spieltag);
	latestEventKey2BL = Number(liga2_spieltag);
	
	
	flash_init();
	clickTab();
	
	/*
	urlParam = $(document).getUrlParam(true);
	if (urlParam('round') != null){
		eventKey = urlParam('round');
		$('ul.wwe-round-selection li.has-data').filter(':eq(' + (eventKey - 1) + ')').click();
	} else {
		$('ul.wwe-round-selection li.has-data').filter(':last').click();
	}
	*/

	$('.wwe-preloader').fadeOut().queue(function() {
		$('.wwe-content-loaded').slideDown('slow');
	});;

}
	
function flash_init(){
	standingDataArray1BL = [];
	standingDataArray2BL = [];
	var infoText = [];
	var xml1blNotExists=false;
	var xml2blNotExists=false;

	if (arguments.length==0 || arguments[0]=='1BLlatest') {
	$.ajax({
		type: "GET",
		//url: xml_hostURL + "51/" + xml_path_seasonKey + "/post_standing/post_standing_"+ latestEventKey1BL +".xml" + getRandomParam(), // 2011
		url: xml_hostURL + "51/" + saison + "/post_standing/post_standing_"+ latestEventKey1BL +".xml" + getRandomParam(), // 2012
		dataType: "xml",
		async:false,
		success: function(xml) {
				if($(xml).find('team').length>0) {
					fillDataArrays(xml, standingDataArray1BL, 'events-all', latestEventKey1BL);
					infoText = getTableFooterText(xml);
					fillTable(standingDataArray1BL, 'events-all', 'wwe-standings-1-bundesliga',infoText, 'wwe-standings-1bl',latestEventKey1BL);
				} else {
					xml1blNotExists = true;
				}
		},
		error: function () {
			xml1blNotExists = true;
		}
	});
	}
	
	if (arguments.length==0 || arguments[0]=='2BLlatest') {
	$.ajax({
		type: "GET",
		//url: xml_hostURL + "52/" + xml_path_seasonKey + "/post_standing/post_standing_"+ latestEventKey2BL +".xml" + getRandomParam(), //2011
		url: xml_hostURL + "52/" + saison + "/post_standing/post_standing_"+ latestEventKey2BL +".xml" + getRandomParam(), //2012
		dataType: "xml",
		async:false,
		success: function(xml) {
		
				if($(xml).find('team').length>0) {
					fillDataArrays(xml, standingDataArray2BL, 'events-all', latestEventKey2BL);
					infoText = getTableFooterText(xml);
					fillTable(standingDataArray2BL, 'events-all', 'wwe-standings-2-bundesliga',infoText,'wwe-standings-2bl',latestEventKey2BL);
				} else {
					xml2blNotExists = true;
				}
				
		},
		error: function () {
			xml2blNotExists = true;
		}
	});
	}
	
	if(xml1blNotExists && latestEventKey1BL > 0){
		latestEventKey1BL--;
		flash_init('1BLlatest');
	}
	if(xml2blNotExists && latestEventKey2BL > 0){
		latestEventKey2BL--;
		flash_init('2BLlatest');
	}
	
}
	

function fillDataArrays(DataXml, ArrayToPush, alignmentScope, key){
	$(DataXml).find('team').each(function(){
		standingData = [];
		standingData.teamID 				    = $(this).find('team-metadata').attr('id');
		standingData.teamname 				= $(this).find('team-metadata name').attr('imp:dfl-nickname');
		standingData.teamkey 				= $(this).find('team-metadata').attr('team-key');
		
		var outcomeTotals 					= $(this).find('team-stats outcome-totals[alignment-scope=' + alignmentScope + ']');
		standingData.wins 					= $(outcomeTotals).attr('wins');
		standingData.ties 					= $(outcomeTotals).attr('ties');
		standingData.losses 				= $(outcomeTotals).attr('losses');
		standingData.eventsplayed 			= (parseInt(standingData.wins) + parseInt(standingData.ties) + parseInt(standingData.losses));
		
		standingData.pointsscoredfor 		= $(outcomeTotals).attr('points-scored-for');
		standingData.pointsscoredagainst 	= $(outcomeTotals).attr('points-scored-against');
		standingData.standingpoints 		= $(outcomeTotals).attr('standing-points');
		standingData.rankvalue 				= parseInt($(this).find('team-stats rank[alignment-scope=' + alignmentScope + ']').attr('value'));
		standingData.trend					= parseInt($(this).find('team-stats rank[alignment-scope=' + alignmentScope + ']').attr('imp:trend'));
		
		if(key == 0){
			standingData.rankvalue = 0;
			_DEV_TEST = 0;
		}
		
		ArrayToPush.push(standingData);

	});
	
	ArrayToPush.sort(function(a, b) {
		return (a.rankvalue - b.rankvalue)
	});
}

function getTableFooterText(DataXml){
	var infoText=[];
	var stars = '';
	$(DataXml).find('article').each(function(iArticle,eArticle){
		if(typeof infoText['info'] == 'undefined' ) infoText['info']='';
		var tKey = $(eArticle).attr('imp:team-idref');
		if(typeof infoText[tKey] == 'undefined' ) {
			stars = stars + '*';
			infoText[tKey]=1;
		}
		if(infoText['info']> '' ) {
			infoText['info'] =  infoText['info'] + '<br>'; 
		}
		infoText['info'] = infoText['info'] +  stars  + $(eArticle).text();
			
			
	});
	if(stars>'') {
		return infoText;
	}
	return false;
}

function fillTable(standingDataArray, alignmentScope, tableId, infoText, liga, matchday){
	
	var prevRank = "";
	var rankClass = "";
	var starCounter = 0;
	var stars = '';
	$('#' + tableId + ' tbody').html('');

	$(standingDataArray).each(function(){
		
		if(this.rankvalue != prevRank) {
			prevRank = this.rankvalue;
			rankClass = "";
		} else {
			rankClass = 'class="hideRank"';
		}
		stars = '';
		
		
		if(infoText && typeof infoText[this.teamID] != 'undefined'){
			starCounter = starCounter + 1;
			for (i = 1;i<=starCounter;i++){
				stars = stars + '*';
			}
			// todo mach sternchen
		}
		
		
		$('<tr>'+ 
			'<td class="' + (((this.rankvalue <= 6 && liga=='wwe-standings-1bl') || (this.rankvalue < 6 && liga=='wwe-standings-1bl') || this.rankvalue > 15 || (this.rankvalue < 4 && liga=='wwe-standings-2bl'))?((liga=='wwe-standings-1bl' && this.rankvalue == 3)?'wwe-2rank-small':'wwe-' + this.rankvalue +'rank-small'):'wwe-rank-small') + '"><span '+ rankClass +'>' + ((this.rankvalue)? this.rankvalue :'') + '</span></td>' +
			'<td><div class="wwe-team-logos-20x20 wwe-team-logo-20x20-'+this.teamkey+'">&nbsp;</div></td>'+
			'<td class="wwe-align-left">'+ this.teamname + stars + '</td>' +
			'<td>'+ this.eventsplayed + '</td>' +
			'<td>'+ (((this.pointsscoredfor - this.pointsscoredagainst) > 0)?'+':'') + (this.pointsscoredfor - this.pointsscoredagainst) + '</td>' +
			'<td>'+ this.standingpoints + '</td>'+ 
			'<td title="'+this.trend+'">'+((this.trend < 0)? '<div class="wwe-icon-20x20 wwe-icon-20x20-trend-negative"></div>' :((this.trend > 0)? '<div class="wwe-icon-20x20 wwe-icon-20x20-trend-positive"></div>' :'<div class="wwe-tendency">�</div>')) +'</td>' +
		'</tr>').appendTo('table#' + tableId + ' tbody');
	});
	
	if(infoText) {
		$('<p class="infoLabel">' + infoText['info'] + '</p>').appendTo('div#' + liga);
	}
}
