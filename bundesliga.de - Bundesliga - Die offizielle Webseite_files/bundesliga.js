// Identifier
// http://www.bundesliga.de
window.SOI_IDENTIFIER = 'bundesliga';

// FIXME: remove
window.SOI_RELAUNCH = window.myAd && myAd.getClientWidth ? true : false;

// DFPSite, DFPZone
window.DFPSite   = 'DE_BUNDESLIGA';
window.DFPSiteRP = 'RP_BUNDESLIGA';
window.DFPZone = 'other';

if (!window.SOI_KEYVALUE) window.SOI_KEYVALUE = {};

switch (window.SOI_SUBSITE) {
	case 'home':
	case 'dfl':
	case 'historie':
	case 'statistik':
	case 'bilder':
	case 'adventskalender':
		window.DFPZone = window.SOI_SUBSITE;
		break;
	case 'video':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		break;
	case 'liga':
	case 'liga2':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
			case 'clubs':
				window.DFPZone = window.SOI_SUB2SITE;
				if (window.SOI_SUB3SITE) {
					window.SOI_KEYVALUE.bucl = window.SOI_SUB3SITE;
				}
				break;
		}
		break;
	case 'wettbewerbe':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
			case 'championsleague':
			case 'europaleague':
			case 'dfppokal':
			case 'international':
			case 'em':
			case 'supercup':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'tippspiel':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'liveticker':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
			case 'liga':
			case 'liga2':
			case 'championsleague':
			case 'europaleague':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'partner':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'sky':
			case 'adidas':
			case 'krombacher':
			case 'grundig':
			case 'topps':
			case 'easports':
			case 'hermes':
			case 'fantraum':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'fanzone':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
			case 'tordesspieltags':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'manager':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'home':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
	case 'news':
		window.DFPSite += '.' + window.SOI_SUBSITE;
		switch (window.SOI_SUB2SITE) {
			case 'audio':
				window.DFPZone = window.SOI_SUB2SITE;
				break;
		}
		break;
}

if (!window.DFPZone) window.DFPZone = 'other';

// Rogator
// Deactivated because of peaks
window.SOI_ROGATOR = false;

// AdAudience
window.SOI_ADA = 'bundesliga_1294819';

// Nuggad
window.SOI_NUGGSID = 2029263140;

// AdProbe
window.SOI_AP = {
	adaudience: { // RoP
		disabled: window.SOI_SUBSITE == 'partner' ? true : false,
		units: {
				pu1pl:    12467,
				pu1pu:    13604,
				pu1br:    12468,
				pu1fa:    13631,
				fb2:      12464,
				fb2low:   12536,
				fb2exp:   12956,
				fb2bb:    12955,
				fb2pl:    13603,
				fb2wp:    12466,
				fb2wpexp: 12959,
				rt1:      12463,
				rt1low:   12537,
				rt1pl:    13602,
				rt1hp:    12470,
				rt1hppl:  12958,
				sc1:      12465,
				sc1low:   12538,
				sc1pl:    12469,
				sc1exp:   12954,
				ma1:      12471 // ma1, ts1
			},
		ids: {
				pub_id:  1616,
				site_id: 6498,
				cu_id:   12463
			}
	},
	procter: {
		disabled: window.SOI_SUBSITE == 'partner' ? true : false,
		units: {
				nn1: 13191 // global unit
			},
		ids: {
				pub_id:  1538,
				site_id: 6661,
				cu_id:   13146
			},
		unit: 'cZ9G5X' // global unit new
	}
};

// YieldProbe
window.SOI_YP = {
	disabled: window.SOI_SUBSITE == 'partner' ? true : false,
	units: {
		fb2: 8094,
		sc1: 8098,
		rt1: 8096,
		nn1: 24800
	},
	formats: {
		pu1pl:    104,
		pu1br:    105,
		pu1fa:    115,
		fb2exp:   112,
		fb2bb:    109,
		fb2wp:    101, // bgcolor 102, bgcolor clickable 103
		fb2wpexp: 110,
		rt1exp:   116,
		rt1hp:    107,
		rt1hppl:  113,
		sc1pl:    106,
		sc1exp:   111,
		ma1:      108 // ma1, ts1
	}
};

// Exclusion
window.SOI_EXCL = 'adi,bet,dat,eas,gru,kro,sky,top,her';
if (window.SOI_SUBSITE == 'liga') window.SOI_EXCL += ',fia';

if (window.SOI_RELAUNCH) {
	// wallpaper and fireplace
	window.SOI_WP_LEFT     =    8;
	window.SOI_WP_TOP      =    0;
	window.SOI_FP_DISTANCE =  968; // fb2 = 1258
	window.SOI_FP_LEFT     =    8;
	window.SOI_FP_TOP      =    0;
}
else {
	// wallpaper and fireplace
	window.SOI_WP_LEFT     =    8;
	window.SOI_WP_TOP      =    0;
	window.SOI_FP_DISTANCE =  980; // fb2 = 1270
	window.SOI_FP_LEFT     =    4;
	window.SOI_FP_TOP      =    0;
}

// old wallpaper - remove eventually
window.SOI_FB_POS_LEFT = window.SOI_WP_LEFT;
window.SOI_FB_POS_TOP  = window.SOI_WP_TOP;
