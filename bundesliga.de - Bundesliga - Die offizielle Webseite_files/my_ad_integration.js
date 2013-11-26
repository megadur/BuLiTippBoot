/*
	$Revision: 1.10 $Date: 2013/03/13 08:16:47 $
	SevenOne Media Ad Integration for www.bundesliga.de
*/

window.myAd = {
	revision: '$Revision: 1.10 $Date: 2013/03/13 08:16:47 $',
	soi_site_script:  'bundesliga.js',

	container_prefix: 'ad-',

	loaded:     {},
	delivered:  {},
	finished:   {},
	messages:   [],

	ready_for_video_ads: '',
	
	loadScript: function(which) {
			if (!window.SOI_WERBUNG) return;
			if (this.loaded[which]) return;
			
			var src = '';
			switch (which) {
				case 'global':
					src = '/globalV6.js';
					break;
				case 'site':
					if (this.soi_site_script) src = '/Sites/' + this.soi_site_script;
					break;
			}
			if (!src) return;
			var server = 'http://ad.71i.de/global_js';

			this.loaded[which] = true;
			document.write('<script src="' + server + src + '" type="text/javascript"><\/script>');
		},
	insertAd: function(ad_id) {
			if (!window.SOI_WERBUNG) return;
			if (!window.SoiAd) return;
			if (this.delivered[ad_id]) return;

			var go = false;
			switch (ad_id) {
				case 'popup1':
					go = window.SOI_PU1;
					// adjust for possible misconfiguration, or inflow case
					if (window.SOI_BB && !document.getElementById(this.container_prefix + 'fullbanner2-billboard'))
						window.SOI_BB = false;
					break;
				case 'fullbanner2':
					go = window.SOI_FB2;
					break;
				case 'skyscraper1':
					go = window.SOI_SC1;
					break;
				case 'rectangle1':
					go = window.SOI_RT1;
					break;
				case 'ateaser':
					go = window.SOI_TSA;
					break;
				case 'promo1':
					go = window.SOI_PB1;
					break;
				case 'performance1':
					go = window.SOI_PF1;
					break;
				case 'performance2':
					go = window.SOI_PF2;
					break;
				case 'performance3':
					go = window.SOI_PF3;
					break;
				case 'performance4':
					go = window.SOI_PF4;
					break;
			}
			if (!go) return;
			// misconfiguration: target container is missing
			if (!document.getElementById(this.container_prefix + ad_id))
				return;
			
			this.delivered[ad_id] = true;
			if (!this.ready_for_video_ads) {
				switch (ad_id) {
					case 'skyscraper1':
						this.ready_for_video_ads = ad_id;
						break;
					default:
						// in case of skyscraper1 missing
						var that = this;
						setTimeout(function() {if (!that.ready_for_video_ads) that.ready_for_video_ads = ad_id;}, 3000);
						break;
				}
			}
			SoiAd.write(ad_id);
		},
	finishAd: function(ad_id, mode) {
			if (!this.delivered[ad_id] || this.finished[ad_id]) return;
			this.finished[ad_id] = true;
			switch (mode) {
				case 'move':
					this.moveAd(ad_id);
					break;
			}

			this.adjustLayoutForAd(ad_id, mode);
		},
	moveAd: function(ad_id) {
			if (!window.SOI_WERBUNG) return;
			if (!window.SoiAd) return;
			
			SoiAd.moveAd(ad_id, this.container_prefix + ad_id + '-postponed', this.container_prefix + ad_id);
		},
	adjustLayoutForAd: function(ad_id, mode) {
			var container = document.getElementById(this.container_prefix + ad_id);
			if (!container) return;

			var exists = window.SoiAd ? SoiAd.exists(ad_id) : false;

			if (exists) {
				if (ad_id != 'fullbanner2' || !SoiAd.isBillboard(ad_id)) SoiAd.removeStyleAttribute(container);

				if (SoiAd.isBlockpixel(ad_id))
					container.style.display = 'none';
			}

			if (ad_id == 'popup1') {
				// Nothing to be done
			}
			else {
				var width  = 0;
				var height = 0;

				if (exists) {
					width  = SoiAd.getWidth(ad_id);
					height = SoiAd.getHeight(ad_id);
				}

				if (ad_id == 'fullbanner2') {
					if (exists) {
						var is_powerbanner = SoiAd.isPowerbanner(ad_id);
						var is_pushdown    = SoiAd.isPushdown(ad_id);
						var is_wallpaper   = SoiAd.isWallpaper(ad_id);
						var is_fireplace   = SoiAd.isFireplace(ad_id);
						var is_billboard   = SoiAd.isBillboard(ad_id);
						
						container.style.width = width + 'px';

						if (is_pushdown || is_powerbanner) {
							SoiAd.setAutoHeight(ad_id, this.container_prefix + ad_id);
						}
						else if (is_wallpaper || is_fireplace) {
							container.style.height = Math.max(height, 90) + 'px';
						}
						else if (is_billboard) {
							container.style.backgroundImage = 'none';
							container.style.display = 'none';
							var special_id = this.container_prefix + ad_id + '-billboard';
							var special_container = document.getElementById(special_id);
							if (special_container) {
								SoiAd.removeStyleAttribute(special_container);
								var max_width = parseInt(SoiQuery.getCurrentStyle(special_id + '-outer', 'width')) || 948;
								var delta = Math.max(parseInt((width - max_width) / 2), 0);
								if (delta) {
									// Wider than content - centrify via negative margin-left
									special_container.style.marginLeft = (-1 * delta) + 'px';
									SoiUtils.addStyleElement('#ad-skyscraper1-outer {margin-left:' + delta + 'px;}');
								}
								else {
									// Not wider than content - centrify via auto margin
									special_container.style.width = width + 'px';
								}
							}
						}
					}
					else {
						// if (!window.SOI_VP || window.SOI_AUTOPLAY == 'off') container.style.display = 'none';
					}
				}
				else if (ad_id == 'rectangle1') {
					if (exists) {
						var outer = document.getElementById(this.container_prefix + ad_id + '-outer');
						SoiAd.removeStyleAttribute(outer);
					}
				}
				else if (ad_id == 'skyscraper1') {
					if (exists) {
						if (width && width > 160) {
							container.style.width = width + 'px';
						}
					}
				}
				else if (ad_id == 'promo1') {
					if (exists) {
						if (SoiAd.isType('promo1', 'docked')) {
							container.style.marginTop = '-12px';
						}
					}
				}
				else if (ad_id == 'ateaser') {
					// Nothing to be done
				}
				else if (ad_id == 'performance1') {
					if (exists) {
						var main_teaser = document.getElementById('content_ng_flash');
						if (main_teaser) {
							var outer = document.getElementById(this.container_prefix + ad_id + '-outer');
							if (outer) {
								outer.style.top = '365px'; // 352 + 13
								outer.style.height = '0px';
								outer.style.paddingBottom = '0px';

								var spacer_left = document.getElementById(this.container_prefix + ad_id + '-spacer-left');
								var spacer_right = document.getElementById(this.container_prefix + ad_id + '-spacer-right');

								if (spacer_left && spacer_right) {
									spacer_left.style.display = 'block';
									spacer_right.style.display = 'block';
								}
								else {
									main_teaser.style.paddingBottom = '119px'; // 12 + 95 + 12

									var box_ng_small_banner = document.getElementById('box_ng_small_banner'); // right column 308x258
									if (box_ng_small_banner) box_ng_small_banner.style.marginBottom = '107px';

									var box_ng_spezial = document.getElementById('box_ng_spezial'); // right column 308x353
									if (box_ng_spezial)  box_ng_spezial.style.paddingBottom = '119px';

									var livebox = document.getElementById('livebox'); // right column
									if (livebox) livebox.style.paddingBottom = '120px';
								}
							}
						}
					}
				}
				else if (ad_id == 'performance2') {
					// Nothing to be done
				}
				else if (ad_id == 'performance3') {
					// Nothing to be done
				}
				else if (ad_id == 'performance4') {
					// Nothing to be done
				}
			}
		},
	clearAd: function(ad_id) {
			var container = document.getElementById(this.container_prefix + ad_id);
			if (!container) return;
			container.innerHTML = '';
			container.style.display = 'none';
		},
	clearAds: function() {
			for (var k in this.delivered) {
				this.clearAd(k);
			}
		},
	separatorRequest: function(ad_id, condition) {
			if (window.SOI_SUBSITE != 'liveticker' || ad_id != 'performance4') return '';
			var key = 'bukw';
			var ad_request = '';
			try {
				// DFPOrd and SOI_KEYVALUE race conditions are impossible for popup1 and fullbanner2,
				// and very unlikely (and acceptable) for ateaser
				if (condition) {
					if (!window.SOI_KEYVALUE) window.SOI_KEYVALUE = {};
					window.SOI_KEYVALUE[key] = condition;
				}
				var saved_ord = window.DFPOrd;
				window.DFPOrd = Math.floor(Math.random()*10000000000);
				ad_request = window.soi_Tagwriter(ad_id);
				window.DFPOrd = saved_ord;
				if (condition) delete window.SOI_KEYVALUE[key];
			}
			catch(e) {
				alert(e.message)
			}
			return ad_request;
		},
	videoAdRequest: function(ad_id, data) {
			if (!window.SOI_WERBUNG) return '';

			var saved = {};
			if (!window.SOI_VP
				&& window.DFPSite != 'DE_BUNDESLIGA.partner'
				&& window.SOI_AUTOPLAY == 'off'
				&& window.SOI_CONTENT != 'video') {
				// on-the-fly adjustment for interactive players
				saved = {
							DFPSite:      window.DFPSite,
							DFPZone:      window.DFPZone,
							SOI_CONTENT:  window.SOI_CONTENT,
							SOI_VP:       window.SOI_VP,
							SOI_VA1:      window.SOI_VA1,
							SOI_VA2:      window.SOI_VA2,
							SOI_VA3:      window.SOI_VA3,
							SOI_AUTOPLAY: window.SOI_AUTOPLAY
						};
					if (window.DFPSite != 'showroom' && !window.DFPSite.match(/\.video$/)) {
						window.DFPSite = 'DE_BUNDESLIGA.video';
						window.DFPZone = window.SOI_SUB6SITE == 'spielberichte' ? 'spielberichte' : 'artikel';
					}
					window.SOI_CONTENT  = 'video';
					window.SOI_VP       = true;
					window.SOI_VA1      = true;
					window.SOI_VA2      = true;
					window.SOI_VA3      = true;
					window.SOI_AUTOPLAY = 'off';
			}

			if (!window.SOI_VP) return '';
			var lookup = {
					preroll:  window.SOI_VA1,
					postroll: window.SOI_VA2,
					midroll:  window.SOI_VA3,
					overlay:  window.SOI_VA4,
					sponsor:  window.SOI_VA5
				};
			var type = String(ad_id).replace(/[0-9]+[a-z]?$/, '');
			if (!lookup[type]) return '';

			// Re-initialize in case of repeated video view
			if (this.seen && ad_id.match(/^preroll1a?$/)) {
				if (window.SoiInitDFPVars) window.SoiInitDFPVars();
				// only for autoplay videos (page jumping issue)
				if (window.SOI_AUTOPLAY != 'off') this.clearAds();
				this.cleared_display_ads = false; // clear must happen again in first midroll block
				window.SOI_AUTOPLAY = 'off'; // Not earlier
			}

			this.seen = true;

			// Exclusiveness of midroll ads
			// only for autoplay videos (page jumping issue)
			if (window.SOI_AUTOPLAY != 'off' && !this.cleared_display_ads && ad_id.match(/^(presplit|midroll|postsplit)/)) {
				this.clearAds();
				this.cleared_display_ads = true; // only required on first midroll block
			}

			var ad_request = '';
			try {
				ad_request = window.soi_VideoAdRequest(ad_id, data);
			}
			catch(e) {}

			// Reset global variables
			for (var k in saved) {
				window[k] = saved[k];
			}

			return ad_request || '';
		}
};
