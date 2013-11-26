function getEgmVersion() {
	return "";
}

function showFixturesMatchDate(paramName, url, thisElem) {
	var matchDateInput = jQuery(thisElem).parent().find("input.egmDatePicker");
	if (!matchDateInput.length == 1)
		return;
	else
		matchDate = matchDateInput.val();

	if (matchDate.length != 10) {
		alert("Bitte geben Sie das Datum in der Form DD.MM.YYYY an, z.B. 24.12.2010!");
		return;
	}
	if (!/^\d{2}\.\d{2}\.\d{4}$/.test(matchDate)) {
		alert("Bitte geben Sie das Datum in der Form DD.MM.YYYY an, z.B. 24.12.2010!");
		return;
	}
	var tokens = matchDate.split(".");
	matchDate = tokens[2] + "-" + tokens[1] + "-" + tokens[0];

	var regex = new RegExp("/" + paramName + "/\\d{4}-\\d{2}-\\d{2}");
	url = url.replace(regex, "/" + paramName + "/" + matchDate);

	top.location.assign(url);
}

function getChangeModeLink(suffix, target) {

	var docHref = top.location.href;
	if (docHref.endsWith('#tos'))
		docHref = docHref.substring(0, docHref.length - 4);

	if (docHref.endsWith('/') && suffix.startsWith('/'))
		suffix = suffix.substring(1);
	if (!docHref.endsWith('/') && !suffix.startsWith('/'))
		suffix = '/' + suffix;

	if (typeof (target) == 'undefined' || target == '') {
		top.location.assign(docHref + suffix);
	} else {
		var win = window.open(docHref + suffix, target);
		win.focus();
	}
}

function showWidgetPanel(panel, href, clickInfo) {
	egm_click(this, clickInfo, 'A');

	new Ajax.Request(href, {
		requestHeaders : {
			'Accept' : 'text/html'
		},
		asynchronous : true,
		method : 'get',
		onSuccess : function(t) {
			if (t.responseText != '') {
				$(panel).innerHTML = t.responseText;
			} else {
				t.responseText = 'n/a';
			}
		}
	});
}

function showCreateWidgetPanel(panel, checkbox, href) {
	if (validateCreateWidget()) {
		new Ajax.Request(href, {
			requestHeaders : {
				'Accept' : 'text/html'
			},
			parameters : $('egmCreateWidgetForm').serialize(true),
			asynchronous : true,
			method : 'post',
			onSuccess : function(t) {
				if (t.responseText != '') {
					$(panel).innerHTML = t.responseText;
				} else {
					t.responseText = 'n/a';
				}
			}
		});
	}
}

function initJQuery() {
	try {
		initTooltips();
	} catch (e) {
		console.log(e);
	}

	try {
		initInputLabels();
	} catch (e) {
		console.log(e);
	}

	try {
		initMultiselects();
	} catch (e) {
		console.log(e);
	}

	try {
		initAutoCompletes();
	} catch (e) {
		console.log(e);
	}

	try {
		initZipCodeInputs();
	} catch (e) {
		console.log(e);
	}
}

function initMultiselects() {
	var elems = jQuery('select.egmMultiselect');
	elems.each(function() {
		var elem = jQuery(this);
		var options = {};

		options.checkAllText = elem.attr('egmCheckAllText') ? elem
				.attr('egmCheckAllText') : "Alle auswählen";
		options.uncheckAllText = elem.attr('egmUncheckAllText') ? elem
				.attr('egmUncheckAllText') : "Alle abwählen";
		options.noneSelectedText = elem.attr('egmNoneSelectedText') ? elem
				.attr('egmNoneSelectedText') : "Auswählen";
		options.selectedText = elem.attr('egmSelectedText') ? elem
				.attr('egmSelectedText') : "# ausgewählt";

		if (elem.attr('egmMultiselectHeader') == 'true')
			options.header = true;
		else
			options.header = false;

		if (elem.attr('multiple') == 'multiple')
			options.multiple = true;
		else
			options.multiple = false;

		var selectedList = elem.attr('egmMultiselectListSize');
		if (selectedList)
			options.selectedList = parseInt(selectedList);
		else
			options.selectedList = 1;

		elem.multiselect(options);
	});
}

function initAutoCompletes() {
	var minLength = 2;
	var maxLength = 4;
	var cache = {};
	var elems = jQuery('input.egmInputTypeAhead');
	elems
			.each(function() {
				var elem = jQuery(this);
				var url = elem.attr('egmUrl');
				var param1 = elem.attr('egmParam1');
				var regex = new RegExp("/" + param1 + "/.*?(/|$)");
				elem
						.autocomplete({
							cacheLength : 1,
							source : function(request, response) {
								if (request.term in cache) {
									var responseData = cache[request.term];
									if (responseData) {
										response(jQuery
												.map(
														responseData,
														function(item) {
															return createPostalCodeItem(item);
														}));
									}
									return;
								}
								if (request.term.length < minLength
										|| request.term.length > maxLength) {
									if (request.term.length == maxLength + 1) {
										jQuery(".ui-menu-item").hide();
										jQuery(".ui-autocomplete ").filter(
												".ui-front").css('display',
												'none');
									}
									return;
								}
								jQuery
										.ajax({
											url : url.replace(regex, "/"
													+ param1 + "/"
													+ request.term + "/"),
											dataType : "json",
											beforeSend : function(jqXHR,
													setting) {
												elem
														.addClass('egm-autocomplete-loading');
											},
											complete : function(jqXHR,
													textStatus) {
												elem
														.removeClass('egm-autocomplete-loading');
											},
											success : function(data) {
												if (!data) {
													cache[request.term] = undefined;
													return;
												}
												if (!data.data) {
													cache[request.term] = undefined;
													return;
												}
												if (!data.data.length) {
													cache[request.term] = undefined;
													return;
												}
												if (!data.data[0]['list']) {
													cache[request.term] = undefined;
													return;
												}
												if (!data.data[0]['list'].length) {
													cache[request.term] = undefined;
													return;
												}
												if (!data.data[0]['list'][0]['de.dfbmedien.portal.service.vo.PostalCodeInfo']) {
													cache[request.term] = undefined;
													return;
												}
												var responseData = data.data[0]['list'][0]['de.dfbmedien.portal.service.vo.PostalCodeInfo'];
												if (!responseData) {
													cache[request.term] = undefined;
													return;
												}
												if (responseData
														&& Object.prototype.toString
																.call(responseData) != "[object Array]")
													responseData = [ responseData ];
												if (!responseData.length) {
													cache[request.term] = undefined;
													return;
												}
												cache[request.term] = responseData;
												response(jQuery
														.map(
																responseData,
																function(item) {
																	return createPostalCodeItem(item);
																}));
											},
											minLength : minLength,
											select : function(event, ui) {
												log(ui.item ? "Selected: "
														+ ui.item.label
														: "Nothing selected, input was "
																+ this.value);
											},
											open : function() {
												jQuery(this)
														.removeClass(
																"ui-corner-all")
														.addClass(
																"ui-corner-top");
											},
											close : function() {
												jQuery(this)
														.removeClass(
																"ui-corner-top")
														.addClass(
																"ui-corner-all");
											}
										});
							}
						});
			});
}

function createPostalCodeItem(item) {
	var postalCode = item.postalCode;
	var city = item.city;
	var district = item.district;

	var label = postalCode;
	if (city) {
		label += ' ' + city;
	}
	if (district) {
		label += ' (' + district + ')';
	}
	return {
		label : label,
		value : postalCode
	}

}

function initZipCodeInputs() {
	var elems = jQuery('input.egmZipCodeInput');
	elems.keyup(function(e) {
		/* allow delete, backspace and arrows */
		var key = e.charCode || e.keyCode || 0;
		if (key == 8 || key == 46 || (key >= 35 && key <= 40)) {
			return;
		}
		/* check format */
		var val = jQuery(this).val();
		var regex = decodeURIComponent(jQuery(this).attr('egmRegEx'));
		if (!new RegExp(regex).test(val))
			jQuery(this).val(val.substring(0, val.length - 1));
	});
}

function initMatchInfoIcons() {
	var links = jQuery("a.egmMatchMediaLink");
	var subset = [];
	var hash = {};
	var ids = "";
	var idArray = [];
	var idCounter = 0;
	for ( var i = 0; i < links.length; i++) {
		var link = links[i];
		var tokens = link.id.match(/egmLink_M._(.*)/); // idPrefix
		var id = tokens[1];
		if (!hash.hasOwnProperty(id)) {
			hash[id] = '';
			ids += id + ",";
			idCounter++;
		}
		if (idCounter >= 200 || i == links.length - 1) {
			idArray.push(ids);
			var ids = "";
			idCounter = 0;
		}
	}
	initMatchInfoIconsSubset(idArray, 0)
}

function initMatchInfoIconsSubset(idArray, idIndex) {
	if (idIndex >= idArray.length) {
		return;
	}

	var url = "http://community.fussball.de/extern/ed/index.js?BEGID="
			+ idArray[idIndex];
	jQuery.getScript(url, function() {
		if (typeof fbcom_beg != 'undefined')
			for ( var i = 0; i < fbcom_beg.length; i++) {
				var value = fbcom_beg[i];
				var imgMatchReport = '';
				var imgMatchFootage = '';
				var ICON_MATCH_REPORT = 'spielbericht';
				var ICON_MATCH_FOOTAGE = 'Media-Icon';
				if ((value["INUM"] > 0 || value["VNUM"] > 0)
						&& (value["BNUM"] > 0)) {
					// Spiefinfo + Spielverlauf + Media
					var imgMatchReport = ICON_MATCH_REPORT;
					var imgMatchFootage = ICON_MATCH_FOOTAGE;
				} else if ((value["INUM"] > 0 || value["VNUM"] > 0)
						&& (value["BNUM"] == 0)) {
					// Spiefinfo + Media
					var imgMatchFootage = ICON_MATCH_FOOTAGE;
				} else if ((value["INUM"] == 0 && value["VNUM"] == 0)
						&& (value["BNUM"] > 0)) {
					// Spiefinfo + Spielverlauf
					var imgMatchReport = ICON_MATCH_REPORT;
				} else {
					// I-Icon (Spielinfo) is always green => do not modify
				}

				if (imgMatchReport) {
					var imgId = "egmImg_MR_" + value["BGID"];
					replaceMatchInfoIcon(imgId, imgMatchReport);
				}
				if (imgMatchFootage) {
					var imgId = "egmImg_MF_" + value["BGID"];
					replaceMatchInfoIcon(imgId, imgMatchFootage);
				}
			}
		fbcom_beg = undefined;
		initMatchInfoIconsSubset(idArray, ++idIndex);
	});
}

function replaceMatchInfoIcon(imgId, imgName) {
	var imgElem = document.getElementById(imgId);
	if (imgElem) {
		var imgUrl = imgElem.src;
		var tokens = imgUrl.match(/.*\/(.*)\.png/);
		var imgFile = tokens[tokens.length - 1];
		var regex = new RegExp(imgFile);
		imgUrl = imgUrl.replace(regex, imgName);
		imgElem.src = imgUrl;
	}
}

function initTooltips() {
	jQuery("div.egmTooltip").parent().tooltip({
		items : jQuery("div.egmTooltip").parent(),
		content : function() {
			return jQuery(this).children("div.egmTooltip").html();
		}
	});
}

function initTooltipsForChartAxis() {

	// var x = jQuery("div.jqplot-xaxis");
	// x.html("<div style='display: none;' class='egmTooltip'><div
	// style='padding: 5px;'>Spieltag</div></div>" + x.html());
	//
	//
	// x = jQuery("div.jqplot-yaxis");
	// x.html("<div style='display: none;' class='egmTooltip'><div
	// style='padding: 5px;'>Tabellenplatz</div></div>" + x.html());

	var x = jQuery("div.jqplot-xaxis");
	x.attr('title', 'Spieltag');
	x.tooltip({
		position : {
			my : "center top-45",
			at : "center"
		},
		tooltipClass : "egmJqplotAxisTooltip"
	});

	x = jQuery("div.jqplot-yaxis");
	x.attr('title', 'Tabellenplatz');
	x.tooltip({
		position : {
			my : "right-20 center",
			at : "center"
		},
		tooltipClass : "egmJqplotAxisTooltip"
	});

}

function toogleDisplay(id) {
	var element = document.getElementById(id);
	if (element.style.display == 'none') {
		element.style.display = 'block';
	} else {
		element.style.display = 'none';
	}
}

function toogleClassName(id, classNameA, classNameB) {
	var element = document.getElementById(id);
	if (element.className == classNameA) {
		element.className = classNameB;
	} else {
		element.className = classNameA;
	}
}

function toogleIcon(id) {
	var element = jQuery(document.getElementById(id));
	var imgs = element.children().children();
	if (imgs.attr('src') == imgs.attr('coll')) {
		imgs.attr('src', imgs.attr('ext'));
	} else {
		imgs.attr('src', imgs.attr('coll'));
	}
}

var egmDatePickerFormat = "dd.mm.yy";
function initDatePickers() {
	jQuery.datepicker.regional['de'] = {
		clearText : 'löschen',
		clearStatus : 'aktuelles Datum löschen',
		closeText : 'schließen',
		closeStatus : 'ohne Änderungen schließen',
		prevText : 'zurück',
		prevStatus : 'letzten Monat zeigen',
		nextText : 'vor',
		nextStatus : 'nächsten Monat zeigen',
		currentText : 'heute',
		currentStatus : '',
		monthNames : [ 'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
				'Juli', 'August', 'September', 'Oktober', 'November',
				'Dezember' ],
		monthNamesShort : [ 'Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul',
				'Aug', 'Sep', 'Okt', 'Nov', 'Dez' ],
		monthStatus : 'anderen Monat anzeigen',
		yearStatus : 'anderes Jahr anzeigen',
		weekHeader : 'Wo',
		weekStatus : 'Woche des Monats',
		dayNames : [ 'Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag',
				'Freitag', 'Samstag' ],
		dayNamesShort : [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
		dayNamesMin : [ 'So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa' ],
		dayStatus : 'Setze DD als ersten Wochentag',
		dateStatus : 'Wähle D, M d',
		dateFormat : 'dd.mm.yy',
		firstDay : 1,
		initStatus : 'Wähle ein Datum',
		isRTL : false
	};
	jQuery.datepicker.setDefaults(jQuery.datepicker.regional['de']);

	var datePickerElem = jQuery("input.egmDatePicker");
	if (datePickerElem.length > 0
			&& (typeof datePickerElem.attr('class') == 'undefined' || datePickerElem
					.attr('class').search('hasDatePicker') < 0))
		datePickerElem
				.datepicker({
					dateFormat : egmDatePickerFormat,

					// -- RTL --
					// isRTL : true

					// -- Icon --
					showOn : "button",
					buttonImage : "http://ergebnisdienst.fussball.de/static/egm//images/kalender.png",
					buttonImageOnly : true,
					buttonText : ""
				});
}

function initInputLabels() {
	jQuery(":input[egmTitle]").each(function() {
		var jQuerythis = jQuery(this);
		if (jQuerythis.val() === "") {
			jQuerythis.val(jQuerythis.attr("egmTitle"));
		}
		jQuerythis.focus(function() {
			if (jQuerythis.val() === jQuerythis.attr("egmTitle")) {
				jQuerythis.val("");
			}
		});
		jQuerythis.blur(function() {
			if (jQuerythis.val() === "") {
				jQuerythis.val(jQuerythis.attr("egmTitle"));
			}
		});
	});
}

function adjustRowHeightTCC() {

	var tab1 = document.getElementById("egmTCC1");
	var tab2 = document.getElementById("egmTCC2");
	var tab3 = document.getElementById("egmTCC3");

	for ( var i = 1; i < tab1.rows.length; i++) {
		var height1 = jQuery(tab1.rows[i]).height();
		var height2 = jQuery(tab2.rows[i]).height();
		var height3 = jQuery(tab3.rows[i]).height();

		var maxHeight = Math.max(height1, height2, height3);

		jQuery(tab1.rows[i]).height(maxHeight);
		jQuery(tab2.rows[i]).height(maxHeight);
		jQuery(tab3.rows[i]).height(maxHeight);
	}

}

function switchRoutingLocations(thisElem) {
	var td = jQuery(thisElem).parent();
	var inputs = td.children("input");
	inputStart = jQuery(inputs[0]);
	inputEnd = jQuery(inputs[1]);

	if (inputStart.val() === inputStart.attr("egmTitle")) {
		return;
	}
	if (inputEnd.val() === inputEnd.attr("egmTitle")) {
		return;
	}
	var tmp = inputStart.val();
	inputStart.val(inputEnd.val());
	inputEnd.val(tmp);
}

function showMatchInfoRouting(thisElem) {
	var td = jQuery(thisElem).parent();
	var inputs = td.children("input");
	inputStart = jQuery(inputs[0]);
	inputEnd = jQuery(inputs[1]);

	var startLoc = ' ';
	var endLoc = ' ';
	if (inputStart.val() !== inputStart.attr("egmTitle")) {
		startLoc = inputStart.val();
	}
	if (inputEnd.val() !== inputEnd.attr("egmTitle")) {
		endLoc = inputEnd.val();
	}

	var url = 'http://suche.t-online.de/to/maps/web?mode=rt';
	if (startLoc) {
		url = url + '&from=' + encodeURI(startLoc);
	}
	if (endLoc) {
		url = url + '&to=' + encodeURI(endLoc);
	}

	var win = window.open(url);
	win.focus();
}

function printClubForm(formId, printUrl) {
	var form = jQuery('form#' + formId);
	var win = window.open(printUrl + "?" + form.serialize(), 'print');
	win.focus();
}

function submitClubForm(formId, mainDivId) {
	var form = jQuery('form#' + formId);
	jQuery.ajax({
		type : form.attr('method'),
		url : form.attr('action'),
		data : form.serialize(),
		dataType : "script",
		success : function(data) {
			var content = mainContent.replace(/&quot;/g, '"');
			content = content.replace(/%0A/g, "\n");
			jQuery('div#' + mainDivId).replaceWith(content);
		},
		error : function(xhr, textStatus, errorThrown) {
			jQuery('div#' + mainDivId).html(
					"Fehler beim Übertragen der Daten an den Server!");
		}
	});
}

function emailPopupDisplay(captchaId) {

	fetchCaptcha(captchaId);

	var browserWidth = window.innerWidth;
	var browserHeight = window.innerHeight;
	// set position of popup
	var lLeft = ((jQuery(window).width()) / 2) - 185;
	jQuery("#FSPHP_lightbox_email").css("left", lLeft);

	var lTop = ((jQuery(window).height()) / 2) - 218;

	jQuery("#FSPHP_lightbox_email").css("top", lTop);

	// make the popup visible
	jQuery('#FSPHP_lightbox_email').css('display', 'block');
	jQuery('#FSPHP_lightbox_background').css('display', 'block');
	jQuery('#FSPHP_lightbox_background').css('opacity', '0.7');
	jQuery('#FSPHP_lightbox_background').css('height',
			document.documentElement.scrollHeight);
	jQuery('#FSPHP_lightbox_background').css('filter', 'alpha(opacity=70)');
}

function emailPopupHide() {
	jQuery('#FSPHP_lightbox_email').css('display', 'none');
	jQuery('#FSPHP_lightbox_background').css('display', 'none');
}

function validateEmail(email) {
	var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
	if (reg.test(email) == false) {
		return false;
	} else {
		return true;
	}

}

function mailMsgTextCounter(elemId) {
	elem = jQuery('#' + elemId);
	maxlimit = 1200;
	if (elem.val().length > maxlimit) {
		elem.val(elem.val().substr(0, maxlimit));
	}
}

function fetchCaptcha(captchaId) {

	var url = "http://ergebnisdienst.fussball.de/export.media/-/action/getCaptchaImage";

	jQuery
			.getScript(
					url,
					function(data, textStatus, jqxhr) {
						var str = "<img src=\"" + decodeURIComponent(imgSrc)
								+ "\">";
						str = str + "\n";
						str = str
								+ "<input id=\"encryptedCaptchaCode\" type=\"hidden\" name=\"ecc\" value=\""
								+ decodeURIComponent(ecc) + "\"/>"
						jQuery('div#' + captchaId).html(str);
						// TODO remove this lines
						// jQuery('#FSPHP_securityCodeInput').val(decodeURIComponent(captchaCode));
					});

}

function sendEmailToClub(clubId, captchaDivId) {

	if (validateClubMailForm()) {

		name = encodeURIComponent(jQuery('#FSPHP_name').val());
		mail = encodeURIComponent(jQuery('#FSPHP_email').val());
		subject = encodeURIComponent(jQuery('#FSPHP_subject').val());
		msg = encodeURIComponent(jQuery('#FSPHP_message').val());
		pcc = encodeURIComponent(jQuery('#FSPHP_securityCodeInput').val());
		ecc = encodeURIComponent(jQuery('#encryptedCaptchaCode').val());

		// q =
		// "id/"+clubId+"/sender/"+name+"/address/"+mail+"/subject/"+subject+"/content/"+msg+"/captcha-code/"+pcc+"/captcha-digest/"+ecc;
		q = "id=" + clubId + "&sender=" + name + "&address=" + mail
				+ "&subject=" + subject + "&content=" + msg + "&captcha-code="
				+ pcc + "&captcha-digest=" + ecc;
		jQuery.ajax({
			type : "GET",
			url : "http://ergebnisdienst.fussball.de/export.mail/-/action/sendMailToClubManager/",
			data : q,
			dataType : "script",
			success : function(data) {

				jQuery('#FSPHP_name').removeClass('egmInvalidInputData');
				jQuery('#FSPHP_email').removeClass('egmInvalidInputData');
				jQuery('#FSPHP_subject').removeClass('egmInvalidInputData');
				jQuery('#FSPHP_message').removeClass('egmInvalidInputData');
				jQuery('#FSPHP_securityCodeInput').removeClass(
						'egmInvalidInputData');

				var err = 0;
				if (sendMailReturnVal['sender'] != '') {
					jQuery('#FSPHP_name').addClass('egmInvalidInputData');
					err = err + 1;
				}
				if (sendMailReturnVal['address'] != '') {
					jQuery('#FSPHP_email').addClass('egmInvalidInputData');
					err = err + 1;
				}
				if (sendMailReturnVal['subject'] != '') {
					jQuery('#FSPHP_subject').addClass('egmInvalidInputData');
					err = err + 1;
				}
				if (sendMailReturnVal['content'] != '') {
					jQuery('#FSPHP_message').addClass('egmInvalidInputData');
					err = err + 1;
				}
				if (sendMailReturnVal['captcha-code'] != '') {
					jQuery('#FSPHP_securityCodeInput').addClass(
							'egmInvalidInputData');
					err = err + 1;
					fetchCaptcha(captchaDivId);
				}
				if (sendMailReturnVal['serviceResponse'] != '') {
					alert(sendMailReturnVal['serviceResponse']);
					err = err + 1;
				}
				if (sendMailReturnVal['id'] != '') {
					alert(sendMailReturnVal['id']);
					err = err + 1;
				}
				if (err == 0) {
					fetchCaptcha(captchaDivId);
					jQuery('#FSPHP_name').val('');
					jQuery('#FSPHP_email').val('');
					jQuery('#FSPHP_subject').val('');
					jQuery('#FSPHP_message').val('');
					jQuery('#FSPHP_securityCodeInput').val('');
					emailPopupHide();
					alert("Die E-Mail wurde an der Verein versendet.");
				}
			},
			error : function(xhr, textStatus, errorThrown) {
				alert("xhr:" + xhr + ", textStatus:" + textStatus
						+ ", errorThrown:" + errorThrown + "\n" + "q:" + q);
			}
		});
	}
}

function validateClubMailForm() {

	var error = 0;

	// Name
	if (jQuery('#FSPHP_name').val() == '') {
		jQuery('#FSPHP_name').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#FSPHP_name').removeClass('egmInvalidInputData');
	}
	// Email
	if ((validateEmail(jQuery('#FSPHP_email').val())) === false) {
		jQuery('#FSPHP_email').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#FSPHP_email').removeClass('egmInvalidInputData');
	}
	// Subject
	if (jQuery('#FSPHP_subject').val() == '') {
		jQuery('#FSPHP_subject').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#FSPHP_subject').removeClass('egmInvalidInputData');
	}
	// Message
	if (jQuery('#FSPHP_message').val() == '') {
		jQuery('#FSPHP_message').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#FSPHP_message').removeClass('egmInvalidInputData');
	}
	// Captcha
	if (jQuery('#FSPHP_securityCodeInput').val() == '') {
		jQuery('#FSPHP_securityCodeInput').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#FSPHP_securityCodeInput').removeClass('egmInvalidInputData');
	}

	if (error > 0) {
		return false;
	} else {
		return true;
	}
}

function validateCreateWidget() {
	var error = 0;

	var val = jQuery('#egmCreateWidgetWebsite').val();
	if (val != null
			&& !/^http\:\/\/[a-zA-ZäÄöÖüÜß0-9\-\.]+\.[a-zA-Z]{2,4}(\/\S*)?(:[0-9]+)?$/
					.test(val)) {
		jQuery('#egmCreateWidgetWebsite').addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#egmCreateWidgetWebsite').removeClass('egmInvalidInputData');
	}

	if (!jQuery('#egmAgreed').attr('checked')) {
		jQuery('#egmAgreed').parent().parent().addClass('egmInvalidInputData');
		error = error + 1;
	} else {
		jQuery('#egmAgreed').removeClass('egmInvalidInputData');
	}

	if (error > 0) {
		return false;
	} else {
		return true;
	}
}

function sendMailToDivisionManager(compUnitId, captchaDivId) {

	var error = 0;

	var firstName = validateAndGetValueFromInput("egmWrongResultFirstName");
	if (firstName == '') {
		error = error + 1;
	}
	var lastName = validateAndGetValueFromInput("egmWrongResultLastName");
	if (lastName == '') {
		error = error + 1;
	}
	var address = validateAndGetValueFromInput("egmWrongResultMail");
	if (address == '') {
		error = error + 1;
	} else {
		if (validateEmail(address) === false) {
			jQuery('#egmWrongResultMail').addClass('egmInvalidInputData');
			error = error + 1;
		} else {
			jQuery('#egmWrongResultMail').removeClass('egmInvalidInputData');
		}
	}
	var subject = validateAndGetValueFromInput("egmWrongResultSubject");
	if (subject == '') {
		error = error + 1;
	}
	var msg = validateAndGetValueFromInput("egmWrongResultMessage");
	if (msg == '') {
		error = error + 1;
	}
	var pcc = validateAndGetValueFromInput("egmWrongResultCaptchaCode");
	if (pcc == '') {
		error = error + 1;
	}

	var ecc = jQuery('#encryptedCaptchaCode').val();

	if (error > 0) {
		return;
	}

	var name = encodeURIComponent(firstName + " " + lastName);
	address = encodeURIComponent(address);
	subject = encodeURIComponent(subject);
	msg = encodeURIComponent(msg);
	pcc = encodeURIComponent(pcc);
	ecc = encodeURIComponent(ecc);

	q = "staffel=" + compUnitId + "&sender=" + name + "&address=" + address
			+ "&subject=" + subject + "&content=" + msg + "&captcha-code="
			+ pcc + "&captcha-digest=" + ecc;
	jQuery
			.ajax({
				type : "GET",
				url : "http://ergebnisdienst.fussball.de/export.mail/-/action/sendMailToDivisionManager/",
				data : q,
				dataType : "script",
				success : function(data) {

					jQuery('#egmWrongResultFirstName').removeClass(
							'egmInvalidInputData');
					jQuery('#egmWrongResultLastName').removeClass(
							'egmInvalidInputData');
					jQuery('#egmWrongResultMail').removeClass(
							'egmInvalidInputData');
					jQuery('#egmWrongResultSubject').removeClass(
							'egmInvalidInputData');
					jQuery('#egmWrongResultMessage').removeClass(
							'egmInvalidInputData');
					jQuery('#egmWrongResultCaptchaCode').removeClass(
							'egmInvalidInputData');

					var err = 0;
					if (sendMailReturnVal['sender'] != '') {
						jQuery('#egmWrongResultFirstName').addClass(
								'egmInvalidInputData');
						jQuery('#egmWrongResultLastName').addClass(
								'egmInvalidInputData');
						err = err + 1;
					}
					if (sendMailReturnVal['address'] != '') {
						jQuery('#egmWrongResultMail').addClass(
								'egmInvalidInputData');
						err = err + 1;
					}
					if (sendMailReturnVal['subject'] != '') {
						jQuery('#egmWrongResultSubject').addClass(
								'egmInvalidInputData');
						err = err + 1;
					}
					if (sendMailReturnVal['content'] != '') {
						jQuery('#egmWrongResultMessage').addClass(
								'egmInvalidInputData');
						err = err + 1;
					}
					if (sendMailReturnVal['captcha-code'] != '') {
						jQuery('#egmWrongResultCaptchaCode').addClass(
								'egmInvalidInputData');
						err = err + 1;
						fetchCaptcha(captchaDivId);
					}
					if (sendMailReturnVal['serviceResponse'] != '') {
						alert(sendMailReturnVal['serviceResponse']);
						err = err + 1;
					}
					if (sendMailReturnVal['staffel'] != '') {
						alert(sendMailReturnVal['staffel']);
						err = err + 1;
					}
					if (err == 0) {
						fetchCaptcha(captchaDivId);
						resetDefaultValue('egmWrongResultFirstName');
						resetDefaultValue('egmWrongResultLastName');
						resetDefaultValue('egmWrongResultMail');
						resetDefaultValue('egmWrongResultSubject');
						resetDefaultValue('egmWrongResultMessage');
						resetDefaultValue('egmWrongResultCaptchaCode');
						alert("Vielen Dank für Deinen Hinweis.\nDie E-Mail wurde an den zuständigen Staffelleiter versendet.");
					}
				},
				error : function(xhr, textStatus, errorThrown) {
					alert("xhr:" + xhr + ", textStatus:" + textStatus
							+ ", errorThrown:" + errorThrown + "\n" + "q:" + q);
				}
			});

}

function resetDefaultValue(elemId) {
	var elem = jQuery('#' + elemId);
	elem.val(elem.attr("egmTitle"));
}

function validateAndGetValueFromInput(elemId) {
	var elem = jQuery('#' + elemId);
	if (elem.val() == elem.attr("egmTitle")) {
		elem.addClass('egmInvalidInputData');
		return "";
	} else {
		elem.removeClass('egmInvalidInputData');
		return elem.val();
	}
}

function showLogin(loginWidgetName) {
	/* Bug in FF/Win? => reload lightBox for showLoginNow() */
	if (typeof ww_LightBox != 'undefined') {
		ww_extclass_lo.login_show(loginWidgetName);
	} else {
		jQuery.ajax({
			async : false,
			type : 'GET',
			url : 'http://img.fussball.de/script/extern/ext_lightbox.js',
			data : null,
			success : function() {
				ww_extclass_lo.login_show(loginWidgetName);
			},
			dataType : 'script',
			error : function(xhr, textStatus, errorThrown) {
			}
		});
	}
}

function checkStatsFormByElem(selectElem) {
	var select = jQuery(selectElem);
	checkStatsForm(select);
}

function checkStatsFormById(selectId) {
	var select = jQuery('select#' + selectId);
	checkStatsForm(select);
}

function checkStatsForm(statsTypeSelect) {
	if (typeof statsTypeSelect.val() != 'undefined') {
		var statsForm = statsTypeSelect.parent().parent().parent();
		var type = statsForm.find('input[name="egmTimePeriodType"]:checked')
				.attr('egmType');

		checkStatsPeriod(statsForm, type);
		checkStatsType(statsForm, type);
		checkStatsLinks(statsForm);
		removeDoubleOptions(statsForm);
	}
}

function checkStatsLinks(statsForm) {
	var statsTypeSelect = statsForm.find("select.egmStatsType");
	var html = 'Statistiken: ';
	html += createStatsLink(statsTypeSelect.children().first(), statsTypeSelect);
	statsTypeSelect.children().not(':first').each(function() {
		html += ' | ';
		html += createStatsLink(jQuery(this), statsTypeSelect);
		html = html.replace('\n', '');
	});
	var statsControl = statsForm.parent().siblings().find(
			'td.egmStatsTypeControl');
	statsControl.html(html);
}

function createStatsLink(option, statsTypeSelect) {
	var linkText = option.html();
	var setVars = 'var statsForm = jQuery(this).parent().parent().parent().parent().parent().find(\'table.egmSnippetControlAmateurStats\');';
	setVars += 'var statsTypeSelect = statsForm.find(\'select.egmStatsType\');';
	var selectStats = 'statsTypeSelect.val(\'' + option.attr('value') + '\');';
	var submitStatsForm = 'statsForm.find(\'button.egmClubStatsShow\').trigger(\'click\');';
	var cssClass = 'egmStatsTypeLink';
	if (option.attr('value') == statsTypeSelect.val())
		cssClass += ' egmUnderlined';
	return '<a href="#" onclick="' + setVars + selectStats + submitStatsForm
			+ '" class="' + cssClass + '">' + linkText +'</a>';
}

function removeDoubleOptions(statsForm) {
	var select = statsForm.find("select.egmTimePeriod");
	var childs = select.children();
	for ( var i = 0; i < childs.length; i++) {
		var option1 = jQuery(childs[i]);
		for ( var j = 0; j < i; j++) {
			var option2 = jQuery(childs[j]);
			if (option1.val() === option2.val()) {
				option2.remove();
			}
		}
	}
}

function checkStatsPeriod(statsForm, type) {
	var select = statsForm.find("select.egmTimePeriod");
	var selectAll = statsForm.find("select.egmTimePeriodHidden");
	checkStatsSelect(statsForm, select, selectAll, type);
}

function checkStatsType(statsForm, type) {
	var select = statsForm.find("select.egmStatsType");
	var selectAll = statsForm.find("select.egmStatsTypeHidden");
	checkStatsSelect(statsForm, select, selectAll, type);
}

function checkStatsSelect(statsForm, select, selectAll, type) {
	if (select.length) {
		selectAll.children().each(function() {
			var option = jQuery(this);
			if (!type || option.attr('egmType') == type) {
				var disabled = option.attr('disabled') == 'disabled';
				var selected = option.attr('selected') == 'selected';
				if (disabled && selected) {
					// unselect disabled options once shown
					option.attr('selected', false);
				}
				if (!disabled || selected) {
					showStatsOption(option, select);
				} else {
					hideStatsOption(option, select);
				}
			} else {
				hideStatsOption(option, select);
			}
		});

		var optionDefault = selectAll.find('option[egmType=empty]');
		if (optionDefault) {
			if (type == 'empty') {
				// hide all time period values if no statistics type was
				// selected
				select.children().remove();
				showStatsOption(optionDefault, select);
			} else {
				hideStatsOption(optionDefault, select);
			}
		}
	}
}
function showStatsOption(option, select) {
	if (!select.find('[value="' + option.val() + '"]').length)
		select.append(option.clone());
}

function hideStatsOption(option, select) {
	select.find('[value="' + option.val() + '"]').remove();
}

function submitAmateurStats(buttonElem, url, param1, param2, param3, param4) {
	var button = jQuery(buttonElem);

	var td = button.parent().parent().find("td.egmSnippetControlFirst");
	var val1 = td.find("select.egmTimePeriod").val();
	var val2 = td.find("select.egmAssociation").val();
	var val3 = td.find("select.egmTeamType").val();
	var val4 = td.find("select.egmStatsType").val();

	var regex;
	if (typeof val1 != 'undefined') {
		regex = new RegExp("/" + param1 + "/.*?(/|$)");
		if (val1 != null)
			url = url.replace(regex, "/" + param1 + "/" + val1 + "/");
		else {
			url = url.replace(regex, "");
			regex = new RegExp("/-([^/])");
			url = url.replace(regex, "/-/$1");
		}
	}
	if (typeof val2 != 'undefined') {
		regex = new RegExp("/" + param2 + "/.*?(/|$)");
		if (val2 != null)
			url = url.replace(regex, "/" + param2 + "/" + val2 + "/");
		else
			url = url.replace(regex, "");
	}
	if (typeof val3 != 'undefined') {
		regex = new RegExp("/" + param3 + "/.*?(/|$)");
		if (val3 != null)
			url = url.replace(regex, "/" + param3 + "/" + val3 + "/");
		else
			url = url.replace(regex, "");
	}
	if (typeof val4 != 'undefined') {
		regex = new RegExp("/" + param4 + "/.*?(/|$)");
		if (val4 != null)
			url = url.replace(regex, "/" + param4 + "/" + val4 + "/");
		else
			url = url.replace(regex, "");
	}

	top.location.assign(url);
}

function submitMatchCalendar(buttonElem, url, param1, param2, param3, param4) {
	var button = jQuery(buttonElem);

	var td = button.parent().parent().parent().parent();
	var val1 = td.find("input.egmDatePicker").val();
	var val2 = td.find("input.egmMatchCalendarZipCode").val();
	var val3 = td.find("select.egmTeamTypeMC").val();
	var val4 = td.find("select.egmCompetitionTypeMatchCal").val();

	var regex;
	if (typeof val1 != 'undefined') {
		var val1Date = jQuery.datepicker.parseDate(egmDatePickerFormat, val1);
		val1 = jQuery.datepicker.formatDate("yy-mm-dd", val1Date);
		regex = new RegExp("/" + param1 + "/.*?(/|$)");
		url = url.replace(regex, "/" + param1 + "/" + val1 + "/");
	}
	if (typeof val2 != 'undefined') {
		regex = new RegExp("/" + param2 + "/.*?(/|$)");
		url = url.replace(regex, "/" + param2 + "/" + val2 + "/");
	}
	if (typeof val3 != 'undefined') {
		regex = new RegExp("/" + param3 + "/.*?(/|$)");
		if (val3 != null)
			url = url.replace(regex, "/" + param3 + "/" + val3 + "/");
	}
	if (typeof val4 != 'undefined') {
		regex = new RegExp("/" + param4 + "/.*?(/|$)");
		url = url.replace(regex, "/" + param4 + "/" + val4 + "/");
	}

	top.location.assign(url);
}

function increaseMatchCalDate(imgElem) {
	var img = jQuery(imgElem);
	var td = img.parent().parent().parent().parent().parent().parent();
	var dateElem = td.find("input.egmDatePicker");

	var dateText = dateElem.val();
	var date = jQuery.datepicker.parseDate(egmDatePickerFormat, dateText);
	date.setDate(date.getDate() + 1);
	dateElem.val(jQuery.datepicker.formatDate(egmDatePickerFormat, date));
}

function decreaseMatchCalDate(imgElem) {
	var img = jQuery(imgElem);
	var td = img.parent().parent().parent().parent().parent().parent();
	var dateElem = td.find("input.egmDatePicker");

	var dateText = dateElem.val();
	var date = jQuery.datepicker.parseDate(egmDatePickerFormat, dateText);
	date.setDate(date.getDate() - 1);
	dateElem.val(jQuery.datepicker.formatDate(egmDatePickerFormat, date));
}

function egm_click(obj, page, x1) {
	xt_med_fde_widget('C', 13, page, x1);
}

function xt_med_fde_widget(type, section, page, x1, x2, x3, x4, x5) {
	xt_img = new Image();
	xtdate = new Date();
	xts = screen;
	xt_ajout = (type == 'F') ? '' : (type == 'M') ? '&a=' + x1 + '&m1=' + x2
			+ '&m2=' + x3 + '&m3=' + x4 + '&m4=' + x5 : '&clic=' + x1;
	Xt_im = 'http://logc206.xiti.com/hit.xiti?s=453051&s2=' + section;
	Xt_im += '&p=' + page + xt_ajout + '&hl=' + xtdate.getHours() + 'x'
			+ xtdate.getMinutes() + 'x' + xtdate.getSeconds();
	if (parseFloat(navigator.appVersion) >= 4) {
		Xt_im += '&r=' + xts.width + 'x' + xts.height + 'x' + xts.pixelDepth
				+ 'x' + xts.colorDepth;
	}
	xt_img.src = Xt_im;
	if ((x2 != null) && (x2 != undefined) && (type == 'C')) {
		if ((x3 == '') || (x3 == null)) {
			document.location = x2
		} else {
			xfen = window.open(x2, 'xfen', '');
			xfen.focus();
		}
	} else {
		return;
	}
}

function windowOpen(url, target, params) {
	if ((params != null) && (params != undefined)) {
		window.open(url, target, params).focus();
	} else {
		window.open(url, target).focus();
	}
}
