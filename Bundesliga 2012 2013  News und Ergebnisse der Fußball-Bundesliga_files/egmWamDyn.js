// module prefix: egm
// widget prefix: Wam
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Globals
var egmImagesUrl = 'http://ergebnisdienst.fussball.de/static/egm//images/wam';
var egmAjaxUrl = 'http://ergebnisdienst.fussball.de/';
var egmLinkUrl = 'http://ergebnisdienst.fussball.de/begegnungen';
var egmCookieDomain = '.fussball.de';
var language = document.getElementsByTagName("html")[0].getAttribute("lang");

var egm = new Object;
egm['JSON'] = new Object;
egm['mandantPrefix'] = '';

var egmWamselect = new Object;
egmWamselect['egmWamMandantID'] = '';
egmWamselect['egmWamSaison'] = '';
egmWamselect['egmWamCompetitionTypeID'] = '';
egmWamselect['egmWamMannschaftsartID'] = '';
egmWamselect['egmWamSpielklasseID'] = '';
egmWamselect['egmWamGebietID'] = '';
egmWamselect['egmWamWettbewerbID'] = '';

var egmWamcookie = new Object;
egmWamcookie['MandantID'] = '';
egmWamcookie['Saison'] = '';
egmWamcookie['CompetitionTypeID'] = '';
egmWamcookie['MannschaftsartID'] = '';
egmWamcookie['SpielklasseID'] = '';
egmWamcookie['GebietID'] = '';
egmWamcookie['WettbewerbID'] = '';

// ------------------------------------------------------------------------------------------------------------------------------------------------
egm.Wam = function(egmRef, preSelect) {
	if (typeof (preSelect) == 'undefined' || preSelect == '') {
		var preSelect = new Object;
	}

	// ma kuckn ob wir nen Cookie haben
	egm.WamgetCookie();

	if (typeof (preSelect['MandantID']) == 'undefined') {
		preSelect['MandantID'] = egmWamcookie['MandantID'];
	}
	if (typeof (preSelect['Saison']) == 'undefined') {
		preSelect['Saison'] = egmWamcookie['Saison'];
	}
	if (typeof (preSelect['CompetitionTypeID']) == 'undefined') {
		preSelect['CompetitionTypeID'] = egmWamcookie['CompetitionTypeID'];
	}
	if (typeof (preSelect['MannschaftsartID']) == 'undefined') {
		preSelect['MannschaftsartID'] = egmWamcookie['MannschaftsartID'];
	}
	if (typeof (preSelect['SpielklasseID']) == 'undefined') {
		preSelect['SpielklasseID'] = egmWamcookie['SpielklasseID'];
	}
	if (typeof (preSelect['GebietID']) == 'undefined') {
		preSelect['GebietID'] = egmWamcookie['GebietID'];
	}
	if (typeof (preSelect['WettbewerbID']) == 'undefined') {
		preSelect['WettbewerbID'] = egmWamcookie['WettbewerbID'];
	}

	// wg. der alten Version
	if (preSelect['MandantID']) {
		preSelect['MandantID'] = preSelect['MandantID'].replace(/MD/, '');
	}

	if (preSelect['MandantID'] == '') {
		preSelect['Saison'] = '';
		preSelect['MannschaftsartID'] = '';
		preSelect['SpielklasseID'] = '';
		preSelect['GebietID'] = '';
		preSelect['WettbewerbID'] = '';
	}
	if (preSelect['Saison'] == '') {
		preSelect['CompetitionTypeID'] = '';
		preSelect['MannschaftsartID'] = '';
		preSelect['SpielklasseID'] = '';
		preSelect['GebietID'] = '';
		preSelect['WettbewerbID'] = '';
	}
	if (preSelect['CompetitionTypeID'] == '') {
		preSelect['SpielklasseID'] = '';
		preSelect['GebietID'] = '';
		preSelect['WettbewerbID'] = '';
	}
	if (preSelect['MannschaftsartID'] == '') {
		preSelect['SpielklasseID'] = '';
		preSelect['GebietID'] = '';
		preSelect['WettbewerbID'] = '';
	}
	if (preSelect['SpielklasseID'] == '') {
		preSelect['GebietID'] = '';
		preSelect['WettbewerbID'] = '';
	}
	if (preSelect['GebietID'] == '') {
		preSelect['WettbewerbID'] = '';
	}

	// console.dir(preSelect);

	// Default-Auswahl zuruecksetzen, falls Vorauswahl vorhanden
	if (egmWamselect['egmWamMandantID'] == '89'
			&& egmWamselect['egmWamSaison'] == ''
			&& (egmWamcookie['MandantID'] != undefined && egmWamcookie['MandantID'] != '')) {
		egmWamselect['egmWamMandantID'] = '';
	}

	egmWamselect['egmWamMandantID'] = ((egmWamselect['egmWamMandantID'] == '' || egmWamselect['egmWamMandantID'] == 'undefined') ? preSelect['MandantID']
			: egmWamselect['egmWamMandantID']);
	egmWamselect['egmWamSaison'] = ((egmWamselect['egmWamSaison'] == '' || egmWamselect['egmWamSaison'] == 'undefined') ? preSelect['Saison']
			: egmWamselect['egmWamSaison']);
	egmWamselect['egmWamCompetitionTypeID'] = ((egmWamselect['egmWamCompetitionTypeID'] == '' || egmWamselect['egmWamCompetitionTypeID'] == 'undefined') ? preSelect['CompetitionTypeID']
			: egmWamselect['egmWamCompetitionTypeID']);
	egmWamselect['egmWamMannschaftsartID'] = ((egmWamselect['egmWamMannschaftsartID'] == '' || egmWamselect['egmWamMannschaftsartID'] == 'undefined') ? preSelect['MannschaftsartID']
			: egmWamselect['egmWamMannschaftsartID']);
	egmWamselect['egmWamSpielklasseID'] = ((egmWamselect['egmWamSpielklasseID'] == '' || egmWamselect['egmWamSpielklasseID'] == 'undefined') ? preSelect['SpielklasseID']
			: egmWamselect['egmWamSpielklasseID']);
	egmWamselect['egmWamGebietID'] = ((egmWamselect['egmWamGebietID'] == '' || egmWamselect['egmWamGebietID'] == 'undefined') ? preSelect['GebietID']
			: egmWamselect['egmWamGebietID']);
	egmWamselect['egmWamWettbewerbID'] = ((egmWamselect['egmWamWettbewerbID'] == '' || egmWamselect['egmWamWettbewerbID'] == 'undefined') ? preSelect['WettbewerbID']
			: egmWamselect['egmWamWettbewerbID']);

	// console.dir(egmWamselect);

	if ($(egmRef)) {
		// egm.WamI18nJSON(egmRef);

		var initHTML = '';

		// --- Variante mit AdSpacerTop
		// initHTML += '<div class="egmWamAdSpacerTop"><a
		// href="http://im.banner.t-online.de/adlink/3.0/784/2188298/0/170/ADTECH"
		// target="_blank"><img
		// src="http://im.banner.t-online.de/adserv/3.0/784/2188298/0/170/ADTECH"
		// border="0" height="103" width="302" alt="Hier klicken!"></a></div>
		// -------------------------------

		initHTML += '<div class="egmWamHL"><h2>ALLE WETTBEWERBE IM &Uuml;BERBLICK</h2></div><form action="#">';

		initHTML += '<div class="egmWamTabs">';
		initHTML += '</div>';

		initHTML += '<div class="egmWamAuswahl"><span>1.</span>';
		initHTML += '<div id="egmWamMandantID_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Landesverband</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>2.</span>';
		initHTML += '<div id="egmWamSaison_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Spieljahr</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>3.</span>';
		initHTML += '<div id="egmWamCompetitionTypeID_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Typ</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>4.</span>';
		initHTML += '<div id="egmWamMannschaftsartID_'
				+ egmRef
				+ '"><span class="egmWamAuswahl">-- Mannschaftsart</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>5.</span>';
		initHTML += '<div id="egmWamSpielklasseID_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Spielklasse</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>6.</span>';
		initHTML += '<div id="egmWamGebietID_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Gebiet</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl"><span>7.</span>';
		initHTML += '<div id="egmWamWettbewerbID_' + egmRef
				+ '"><span class="egmWamAuswahl">-- Wettbewerb</span></div>';
		initHTML += '<br style="clear:both;"/></div>';

		initHTML += '<div class="egmWamAuswahl" id="egmWamAuswahlSubmit">';
		initHTML += '<label><input type="checkbox" value="1" name="egmAuswahlMerkenCK" id="egmAuswahlMerkenCK_'
				+ egmRef
				+ '"  onclick="egm.Wamremember(\''
				+ egmRef
				+ '\');"/> Auswahl merken</label>';
		initHTML += '<button type="button" alt="Anzeigen" id="egmAuswahl_'
				+ egmRef
				+ '" onclick="egm_click(this,\'WAM::anzeigen\',\'A\');  egm.Wamauswahl(\''
				+ egmRef + '\');">anzeigen</button>';
		initHTML += '<br style="clear:both;"/>';

		// --- Variante mit AdSpacerBottom
		// alt
		initHTML += '</div><div class="egmWamAdSpacerBottom"><IFRAME WIDTH="300" HEIGHT="76" SCROLLING="No" FRAMEBORDER="0" MARGINHEIGHT="0" MARGINWIDTH="7" ';
		initHTML += 'SRC="http://im.banner.t-online.de/adiframe/3.0/784/4525518/0/5730/ADTECH;target=_blank"></IFRAME></div><br style="clear:both;"/>';

		// -------------------------------

		// --- Variante ohne AdSpacerBottom
		// initHTML += '</div><br style="clear:both;"/>';
		// -------------------------------

		// Generischer Abschluss, unabhaengig von gewaehlter Variante
		initHTML += '</form><br style="clear:both;"/>';

		$(egmRef).innerHTML = initHTML;

		egm.Wamupdate(egmRef, 'egmWamMandantID');
	}
}

egm.WamrememberShow = function(egmRef) {
	$('egmAuswahlMerkenCK_' + egmRef).checked = false;

	if ((typeof ($('egmWamMandantID_S_' + egmRef).value) != 'undefined')
			&& ($('egmWamSaison_S_' + egmRef))
			&& ($('egmWamCompetitionTypeID_S_' + egmRef))
			&& ($('egmWamMannschaftsartID_S_' + egmRef))
			&& ($('egmWamSpielklasseID_S_' + egmRef))
			&& ($('egmWamGebietID_S_' + egmRef))
			&& ($('egmWamWettbewerbID_S_' + egmRef))) {
		if (egmWamcookie['MandantID'] == $('egmWamMandantID_S_' + egmRef).value
				&& egmWamcookie['Saison'] == $('egmWamSaison_S_' + egmRef).value
				&& egmWamcookie['CompetitionTypeID'] == $('egmWamCompetitionTypeID_S_'
						+ egmRef).value
				&& egmWamcookie['MannschaftsartID'] == $('egmWamMannschaftsartID_S_'
						+ egmRef).value
				&& egmWamcookie['SpielklasseID'] == $('egmWamSpielklasseID_S_'
						+ egmRef).value
				&& egmWamcookie['GebietID'] == $('egmWamGebietID_S_' + egmRef).value
				&& egmWamcookie['WettbewerbID'] == $('egmWamWettbewerbID_S_'
						+ egmRef).value) {
			$('egmAuswahlMerkenCK_' + egmRef).checked = true;
		}
	}
}

egm.Wamremember = function(egmRef) {
	var tmp = new Date;
	var Wamexpires = new Date(Number(tmp.getTime()) + 5184000000); // 60 Tage

	if (egmWamcookie['MandantID'] == $('egmWamMandantID_S_' + egmRef).value
			&& egmWamcookie['Saison'] == $('egmWamSaison_S_' + egmRef).value
			&& egmWamcookie['MannschaftsartID'] == $('egmWamMannschaftsartID_S_'
					+ egmRef).value
			&& egmWamcookie['SpielklasseID'] == $('egmWamSpielklasseID_S_'
					+ egmRef).value
			&& egmWamcookie['GebietID'] == $('egmWamGebietID_S_' + egmRef).value
			&& egmWamcookie['WettbewerbID'] == $('egmWamWettbewerbID_S_'
					+ egmRef).value) {
		document.cookie = 'FBED_Wamremember=; expires='
				+ Wamexpires.toGMTString() + '; path=/; domain='
				+ egmCookieDomain + ';';

		egmWamcookie['MandantID'] = '';
		egmWamcookie['Saison'] = '';
		egmWamcookie['CompetitionTypeID'] = '';
		egmWamcookie['MannschaftsartID'] = '';
		egmWamcookie['SpielklasseID'] = '';
		egmWamcookie['GebietID'] = '';
		egmWamcookie['WettbewerbID'] = '';

		if ($('egmAuswahlMerkenCK_' + egmRef)) {
			$('egmAuswahlMerkenCK_' + egmRef).checked = false;
		}
	} else if ($('egmWamMandantID_S_' + egmRef).value != ''
			&& $('egmWamSaison_S_' + egmRef).value != ''
			&& $('egmWamCompetitionTypeID_S_' + egmRef).value != ''
			&& $('egmWamMannschaftsartID_S_' + egmRef).value != ''
			&& $('egmWamSpielklasseID_S_' + egmRef).value != ''
			&& $('egmWamGebietID_S_' + egmRef).value != ''
			&& $('egmWamWettbewerbID_S_' + egmRef).value != '') {
		egmWamcookie['MandantID'] = $('egmWamMandantID_S_' + egmRef).value;
		egmWamcookie['Saison'] = $('egmWamSaison_S_' + egmRef).value;
		egmWamcookie['CompetitionTypeID'] = $('egmWamCompetitionTypeID_S_'
				+ egmRef).value;
		egmWamcookie['MannschaftsartID'] = $('egmWamMannschaftsartID_S_'
				+ egmRef).value;
		egmWamcookie['SpielklasseID'] = $('egmWamSpielklasseID_S_' + egmRef).value;
		egmWamcookie['GebietID'] = $('egmWamGebietID_S_' + egmRef).value;
		egmWamcookie['WettbewerbID'] = $('egmWamWettbewerbID_S_' + egmRef).value;

		document.cookie = 'FBED_Wamremember='
				+ escape(egmWamcookie['MandantID'] + ';'
						+ egmWamcookie['Saison'] + ';'
						+ egmWamcookie['CompetitionTypeID'] + ';'
						+ egmWamcookie['MannschaftsartID'] + ';'
						+ egmWamcookie['SpielklasseID'] + ';'
						+ egmWamcookie['GebietID'] + ';'
						+ egmWamcookie['WettbewerbID']) + '; expires='
				+ Wamexpires.toGMTString() + '; path=/; domain='
				+ egmCookieDomain + ';';

		if ($('egmAuswahlMerkenCK_' + egmRef)) {
			$('egmAuswahlMerkenCK_' + egmRef).checked = true;
		}
	} else {
		if ($('egmAuswahlMerkenCK_' + egmRef)) {
			$('egmAuswahlMerkenCK_' + egmRef).checked = false;
		}
		alert('Bitte erst Auswahl treffen.');
	}
}

egm.WamgetCookie = function() {
	var dc = document.cookie;

	var prefix = 'FBED_Wamremember=';

	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) {
			return null;
		}
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1) {
		end = dc.length;
	}

	egmWamcookie['MandantID'] = '';
	egmWamcookie['Saison'] = '';
	egmWamcookie['CompetitionTypeID'] = '';
	egmWamcookie['MannschaftsartID'] = '';
	egmWamcookie['SpielklasseID'] = '';
	egmWamcookie['GebietID'] = '';
	egmWamcookie['WettbewerbID'] = '';

	if (unescape(dc.substring(begin + prefix.length, end)) != '') {
		var tmp = unescape(dc.substring(begin + prefix.length, end)).split(';');
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['MandantID'] = tmp[0];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['Saison'] = tmp[1];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['CompetitionTypeID'] = tmp[2];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['MannschaftsartID'] = tmp[3];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['SpielklasseID'] = tmp[4];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['GebietID'] = tmp[5];
		}
		if (typeof (tmp[0]) != 'undefined') {
			egmWamcookie['WettbewerbID'] = tmp[6];
		}
	}
}

egm.Wamauswahl = function(egmRef) {
	if ($('egmWamMandantID_S_' + egmRef) && $('egmWamSaison_S_' + egmRef)
			&& $('egmWamWettbewerbID_S_' + egmRef)) {
		if ($('egmWamMandantID_S_' + egmRef).value
				&& $('egmWamSaison_S_' + egmRef).value
				&& $('egmWamWettbewerbID_S_' + egmRef).value) {
			var competition = $('egmWamWettbewerbID_S_' + egmRef).options[$('egmWamWettbewerbID_S_'
					+ egmRef).selectedIndex].text;
			var area = $('egmWamGebietID_S_' + egmRef).options[$('egmWamGebietID_S_'
					+ egmRef).selectedIndex].text;
			var league = $('egmWamSpielklasseID_S_' + egmRef).options[$('egmWamSpielklasseID_S_'
					+ egmRef).selectedIndex].text;
			var teamType = $('egmWamMannschaftsartID_S_' + egmRef).options[$('egmWamMannschaftsartID_S_'
					+ egmRef).selectedIndex].text;
			var season = $('egmWamSaison_S_' + egmRef).options[$('egmWamSaison_S_'
					+ egmRef).selectedIndex].text;
			var tenant = $('egmWamMandantID_S_' + egmRef).options[$('egmWamMandantID_S_'
					+ egmRef).selectedIndex].text
			var seo = '/' + egm.escapeSeo(egmRef, competition) + '/'
					+ egm.escapeSeo(egmRef, area) + '/'
					+ egm.escapeSeo(egmRef, league) + '/'
					+ egm.escapeSeo(egmRef, teamType) + '/'
					+ egm.escapeSeo(egmRef, season) + '/' + tenant;
			top.location.assign(egmLinkUrl + seo + '/-/mandant/'
					+ $('egmWamMandantID_S_' + egmRef).value + '/saison/'
					+ $('egmWamSaison_S_' + egmRef).value + '/competitionType/'
					+ $('egmWamCompetitionTypeID_S_' + egmRef).value
					+ '/staffel/' + $('egmWamWettbewerbID_S_' + egmRef).value);
		} else {
			alert('Bitte erst Auswahl treffen.');
		}
	} else {
		alert('Bitte erst Auswahl treffen.');
	}
}

egm.escapeSeo = function(egmRef, path) {
	var sb = '';
	var oldC = '@';
	for ( var i = 0; i < path.length; i++) {
		var c = path.charAt(i);
		switch (c) {
		case 'ä':
		case 'Ä':
			sb = sb + "ae";
			break;
		case 'ö':
		case 'Ö':
			sb = sb + "oe";
			break;
		case 'ü':
		case 'Ü':
			sb = sb + "ue";
			break;
		case 'ß':
			sb = sb + "ss";
			break;
		case ' ':
		case '/':
			if (oldC != '-') {
				oldC = '-';
				sb = sb + oldC;
			}
			break;
		case '.':
		case '(':
		case ')':
			break;
		default:
			sb = sb + c.toLowerCase();
			oldC = c;
		}
	}
	return sb.toString();
}

egm.XTparams = function(egmRef) {
	var params = 'Wettbewerbs-Selektor';
	params += '&x2=' + $('egmWamMandantID_S_' + egmRef).value;
	params += '&x3=' + $('egmWamMannschaftsartID_S_' + egmRef).value;
	params += '&x4='
			+ $('egmWamGebietID_S_' + egmRef).options[$('egmWamGebietID_S_'
					+ egmRef).selectedIndex].text.replace(
					/[^a-zA-Z0-9\._\/\-]/g, '');
	params += '&x5='
			+ $('egmWamWettbewerbID_S_' + egmRef).options[$('egmWamWettbewerbID_S_'
					+ egmRef).selectedIndex].text.replace(
					/[^a-zA-Z0-9\._\/\-]/g, '');

	// console.dir($('egmWamGebietID_S_' + egmRef));
	// console.log("xt_click(this, 'C', '13', '" + params + "', 'A');");

	return params;
}

egm.Wamdeactivate = function(egmRef, mode, unavail) {
	if ($(mode + '_' + egmRef)) {
		if (mode == 'egmWamSaison') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">-- Spieljahr</span>';
		} else if (mode == 'egmWamCompetitionTypeID') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">-- Typ</span>';
		} else if (mode == 'egmWamMannschaftsartID') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">'
					+ (unavail == 1 ? 'keine freigegebenen Mannschaftsarten'
							: '-- Mannschaftsart') + '</span>';
		} else if (mode == 'egmWamSpielklasseID') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">'
					+ (unavail == 1 ? 'keine freigegebenen Spielklassen'
							: '-- Spielklasse') + '</span>';
		} else if (mode == 'egmWamGebietID') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">'
					+ (unavail == 1 ? 'keine freigegebenen Gebiete'
							: '-- Gebiet') + '</span>';
		} else if (mode == 'egmWamWettbewerbID') {
			$(mode + '_' + egmRef).innerHTML = '<span class="egmWamAuswahl">'
					+ (unavail == 1 ? 'keine freigegebenen Wettbewerbe'
							: '-- Wettbewerb') + '</span>';
		}
	}
}

egm.Wamupdate = function(egmRef, mode) {
	if (mode == 'egmWamMandantID') {
		egm.Wamdeactivate(egmRef, 'egmWamSaison');
		egm.Wamdeactivate(egmRef, 'egmWamCompetitionTypeID');
		egm.Wamdeactivate(egmRef, 'egmWamMannschaftsartID');
		egm.Wamdeactivate(egmRef, 'egmWamSpielklasseID');
		egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		egm.WamupdateJSON('wam_basis', egmRef, mode);
	} else if (mode == 'egmWamSaison') {
		egm.Wamdeactivate(egmRef, 'egmWamCompetitionTypeID');
		egm.Wamdeactivate(egmRef, 'egmWamMannschaftsartID');
		egm.Wamdeactivate(egmRef, 'egmWamSpielklasseID');
		egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		if ($('egmWamMandantID_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_basis', egmRef, mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamSaison');
		}
	} else if (mode == 'egmWamCompetitionTypeID') {
		egm.Wamdeactivate(egmRef, 'egmWamMannschaftsartID');
		egm.Wamdeactivate(egmRef, 'egmWamSpielklasseID');
		egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		if ($('egmWamSaison_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_basis', egmRef, mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamCompetitionTypeID');
		}
	} else if (mode == 'egmWamMannschaftsartID') {
		egm.Wamdeactivate(egmRef, 'egmWamSpielklasseID');
		egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		if ($('egmWamCompetitionTypeID_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_arten_'
					+ $('egmWamMandantID_S_' + egmRef).value + '_'
					+ $('egmWamSaison_S_' + egmRef).value + '_'
					+ $('egmWamCompetitionTypeID_S_' + egmRef).value, egmRef,
					mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamMannschaftsartID');
		}
	} else if (mode == 'egmWamSpielklasseID') {
		egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		if ($('egmWamMannschaftsartID_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_arten_'
					+ $('egmWamMandantID_S_' + egmRef).value + '_'
					+ $('egmWamSaison_S_' + egmRef).value + '_'
					+ $('egmWamCompetitionTypeID_S_' + egmRef).value, egmRef,
					mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamSpielklasseID');
		}
	} else if (mode == 'egmWamGebietID') {
		egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		if ($('egmWamSpielklasseID_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_arten_'
					+ $('egmWamMandantID_S_' + egmRef).value + '_'
					+ $('egmWamSaison_S_' + egmRef).value + '_'
					+ $('egmWamCompetitionTypeID_S_' + egmRef).value, egmRef,
					mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamGebietID');
		}
	} else {
		if ($('egmWamGebietID_S_' + egmRef).value != '') {
			egm.WamupdateJSON('wam_wettbewerbe_'
					+ $('egmWamMandantID_S_' + egmRef).value + '_'
					+ $('egmWamSaison_S_' + egmRef).value + '_'
					+ $('egmWamCompetitionTypeID_S_' + egmRef).value + '_'
					+ $('egmWamMannschaftsartID_S_' + egmRef).value, egmRef,
					mode);
		} else {
			egm.Wamdeactivate(egmRef, 'egmWamWettbewerbID');
		}
	}
}

egm.WamI18n = function(i18nRef) {
	if (egm['JSON']['wam_i18n' + language][i18nRef] == 'undefined') {
		return '!de:' + i18nRef;
	} else {
		return egm['JSON']['wam_i18n' + language][i18nRef];
	}
}

egm.WamI18nJSON = function(egmRef) {
	var type = 'wam_i18n';
	if (typeof (egm['JSON'][type + language]) == 'undefined') {
		new Ajax.Request(egmAjaxUrl + type + '.json', {
			requestHeaders : {
				'Accept' : 'application/json'
			},
			asynchronous : false,
			method : 'get',
			onSuccess : function(t) {
				if (t.responseText != '') {
					egm['JSON'][type + language] = t.responseText.evalJSON();
				} else {
					// console.log('nicht verfuegbar.... oder so');
				}
			}
		});
	}
}

egm.WamupdateJSON = function(type, egmRef, mode) {
	if (typeof (egm['JSON'][type]) == 'undefined') {
		jQuery.ajax({
			type : "GET",
			url : egmAjaxUrl + type + '.json?dyn=true',
			cache: true,
			dataType : "script",
			success : function(data) {
				if (typeof egmWamData != 'undefined') {
					egmWamData = egmWamData.replace(/&lsquo;/g, "'");
					egm['JSON'][type] = egmWamData.evalJSON();
					egm.WamupdateSELECT(type, egmRef, mode);
				}
			}
		});
	} else {
		egm.WamupdateSELECT(type, egmRef, mode);
	}
}

egm.WamupdateSELECT = function(type, egmRef, mode) {
	var tmp = '';
	var i = 0;
	var data;

	var thisSaison = '';
	if ($('egmWamSaison_S_' + egmRef)) {
		thisSaison = $('egmWamSaison_S_' + egmRef).value;
	}

	var thisCompetitionType = '';
	if ($('egmWamCompetitionTypeID_S_' + egmRef)) {
		thisCompetitionType = $('egmWamCompetitionTypeID_S_' + egmRef).value;
	}

	var thisMannschaftsart = '';
	if ($('egmWamMannschaftsartID_S_' + egmRef)) {
		thisMannschaftsart = $('egmWamMannschaftsartID_S_' + egmRef).value;
	}

	var thisSpielklasse = '';
	if ($('egmWamSpielklasseID_S_' + egmRef)) {
		thisSpielklasse = $('egmWamSpielklasseID_S_' + egmRef).value;
	}

	var thisGebiet = '';
	if ($('egmWamGebietID_S_' + egmRef)) {
		thisGebiet = $('egmWamGebietID_S_' + egmRef).value;
	}

	if (mode == 'egmWamMandantID') {

		tmp = '<select name="wam" id="egmWamMandantID_S_' + egmRef
				+ '" size="1" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamSaison\')">';
		tmp += '<option value="">-- Landesverband wählen</option>';
		for ( var mandantKey in egm['JSON'][type]['Mandanten']) {
			var mandant = mandantKey.match(/^_.*/) ? mandantKey.substring(1)
					: mandantKey;
			if (mandant.match(/^m/)) {
				egm['mandantPrefix'] = 'm';
				mandant = mandant.replace(/^m/, '');
			}
			tmp += '<option value="' + mandant + '"';
			if (mandant == egmWamselect['egmWamMandantID']) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamMandantID'] = ''; // reset
			}
			tmp += '>'
					+ egm['JSON'][type]['Mandanten'][egm['mandantPrefix']
							+ mandantKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamMandantID_' + egmRef).innerHTML = tmp;
		if ($('egmWamMandantID_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamSaison');
		}

	} else if (mode == 'egmWamSaison') {

		if ((typeof (egmWamselect['egmWamSaison']) == 'undefined' || egmWamselect['egmWamSaison'] == '')
				&& thisSaison == '') {
			egmWamselect['egmWamSaison'] = egm['JSON'][type]['currentSaison'];
		}

		var selectDone = 0;
		tmp = '<select name="wam" size="1" id="egmWamSaison_S_' + egmRef
				+ '" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamSaison\')">';
		tmp += '<option value="">-- Spieljahr wählen</option>';
		for ( var saisonKey in egm['JSON'][type]['Saisons']) {
			var saison = saisonKey.match(/^_.*/) ? saisonKey.substring(1)
					: saisonKey;
			tmp += '<option value="' + saison + '"';
			if (saison == thisSaison
					|| saison == egmWamselect['egmWamSaison']
					|| (selectDone == 0 && thisSaison == ''
							&& saison == egm['JSON'][type]['currentSaison'] && egmWamselect['egmWamSaison'] == '')) {
				selectDone++;
				tmp += ' selected="selected"';
				egmWamselect['egmWamSaison'] = ''; // reset
			}
			tmp += '>Spieljahr ' + egm['JSON'][type]['Saisons'][saisonKey]
					+ '</option>';
		}
		tmp += '</select>';
		$('egmWamSaison_' + egmRef).innerHTML = tmp;
		if ($('egmWamSaison_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamCompetitionTypeID');
		}

	} else if (mode == 'egmWamCompetitionTypeID') {

		if ((typeof (egmWamselect['egmWamCompetitionTypeID']) == 'undefined' || egmWamselect['egmWamCompetitionTypeID'] == '')
				&& thisCompetitionType == '') {
			egmWamselect['egmWamCompetitionTypeID'] = egm['JSON'][type]['defaultCompetitionType'];
		}

		data = egm['JSON'][type]['CompetitionTypes'];
		i = 0;
		for (tmp in data) {
			i++;
		}

		tmp = '<select name="wam" size="1" id="egmWamCompetitionTypeID_S_'
				+ egmRef + '" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamMannschaftsartID\')">';
		tmp += '<option value="">-- Typ wählen</option>';
		for ( var competitionTypeKey in data) {
			var competitionType = competitionTypeKey.match(/^_.*/) ? competitionTypeKey
					.substring(1)
					: competitionTypeKey;
			tmp += '<option value="' + competitionType + '"';
			if (competitionType == thisCompetitionType
					|| competitionType == egmWamselect['egmWamCompetitionTypeID']
					|| i == 1) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamCompetitionTypeID'] = ''; // reset
			}
			tmp += '>' + data[competitionTypeKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamCompetitionTypeID_' + egmRef).innerHTML = tmp;
		if ($('egmWamCompetitionTypeID_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamMannschaftsartID');
		}
	} else if (mode == 'egmWamMannschaftsartID') {
		data = egm['JSON'][type]['Mannschaftsart'];
		i = 0;
		for (tmp in data) {
			i++;
		}

		tmp = '<select name="wam" size="1" id="egmWamMannschaftsartID_S_'
				+ egmRef + '" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamSpielklasseID\')">';
		tmp += '<option value="">-- Mannschaftsart wählen</option>';
		for ( var mannschaftsartKey in data) {
			var mannschaftsart = mannschaftsartKey.match(/^_.*/) ? mannschaftsartKey
					.substring(1)
					: mannschaftsartKey;
			tmp += '<option value="' + mannschaftsart + '"';
			if (mannschaftsart == thisMannschaftsart
					|| mannschaftsart == egmWamselect['egmWamMannschaftsartID']
					|| i == 1) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamMannschaftsartID'] = ''; // reset
			}
			tmp += '>' + data[mannschaftsartKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamMannschaftsartID_' + egmRef).innerHTML = tmp;
		if ($('egmWamMannschaftsartID_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamSpielklasseID');
		}

	} else if (mode == 'egmWamSpielklasseID') {

		data = egm['JSON'][type]['Spielklasse'][thisMannschaftsart];
		i = 0;
		for (tmp in data) {
			i++;
		}

		tmp = '<select name="wam" size="1" id="egmWamSpielklasseID_S_' + egmRef
				+ '" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamGebietID\')">';
		tmp += '<option value="">-- Spielklasse wählen</option>';
		for ( var spielklasseKey in data) {
			var spielklasse = spielklasseKey.match(/^_.*/) ? spielklasseKey
					.substring(1) : spielklasseKey;
			tmp += '<option value="' + spielklasse + '"';
			if (spielklasse == thisSpielklasse
					|| spielklasse == egmWamselect['egmWamSpielklasseID']
					|| i == 1) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamSpielklasseID'] = ''; // reset
			}
			tmp += '>' + data[spielklasseKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamSpielklasseID_' + egmRef).innerHTML = tmp;
		if ($('egmWamSpielklasseID_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamGebietID');
		}

	} else if (mode == 'egmWamGebietID') {

		data = egm['JSON'][type]['Gebiet'][thisMannschaftsart][thisSpielklasse];
		i = 0;
		for (tmp in data) {
			i++;
		}

		tmp = '<select name="wam" size="1" id="egmWamGebietID_S_' + egmRef
				+ '" onchange="egm.Wamupdate(\'' + egmRef
				+ '\', \'egmWamWettbewerbID\')">';
		tmp += '<option value="">-- Gebiet wählen</option>';
		for ( var gebietKey in data) {
			var gebiet = gebietKey.match(/^_.*/) ? gebietKey.substring(1)
					: gebietKey;
			tmp += '<option value="' + gebiet + '"';
			if (gebiet == thisGebiet
					|| gebiet == egmWamselect['egmWamGebietID'] || i == 1) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamGebietID'] = ''; // reset
			}
			tmp += '>' + data[gebietKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamGebietID_' + egmRef).innerHTML = tmp;
		if ($('egmWamGebietID_S_' + egmRef).value != '') {
			egm.Wamupdate(egmRef, 'egmWamWettbewerbID');
		}

	} else {

		data = egm['JSON'][type][thisSpielklasse][thisGebiet];
		i = 0;
		for (tmp in data) {
			i++;
		}

		tmp = '<select name="wam" size="1" id="egmWamWettbewerbID_S_' + egmRef
				+ '" onchange="egm.WamrememberShow(\'' + egmRef + '\');">';
		tmp += '<option value="">-- Wettbewerb wählen</option>';
		for ( var wettbewerbKey in data) {
			var wettbewerb = wettbewerbKey.match(/^_.*/) ? wettbewerbKey
					.substring(1) : wettbewerbKey;
			tmp += '<option value="' + wettbewerb + '"';
			if (wettbewerb == egmWamselect['egmWamWettbewerbID'] || i == 1) {
				tmp += ' selected="selected"';
				egmWamselect['egmWamWettbewerbID'] = ''; // reset
			}
			tmp += '>' + data[wettbewerbKey] + '</option>';
		}
		tmp += '</select>';
		$('egmWamWettbewerbID_' + egmRef).innerHTML = tmp;

	}

	egm.WamrememberShow(egmRef);
}
