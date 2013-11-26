/*
 * Adtech AdVisibility JS Library v_2_2_0 Copyright 2013 AOL Advertising.
 */
var AdtechAdVisibility=AdtechAdVisibility||{};AdtechAdVisibility.EventDispatcher=function(){this.eventTypes={}};AdtechAdVisibility.EventDispatcher.prototype.addEventListener=function(d,c,b){var a,f,e;if((typeof d!=="string")||(typeof c!=="function")){return false}if(this.eventTypes[d]===undefined){this.eventTypes[d]=[]}f=this.eventTypes[d].length;for(a=0;a<f;a++){e=this.eventTypes[d][a];if(e.handler===c&&e.context===b){return false}}this.eventTypes[d].push({context:b,handler:c});return true};AdtechAdVisibility.EventDispatcher.prototype.removeEventListener=function(d,c,b){var a,e,f;if(this.eventTypes[d]===undefined){return false}f=this.eventTypes[d].length;for(a=0;a<f;a++){e=this.eventTypes[d][a];if(e.handler===c&&e.context===b){this.eventTypes[d].splice(a,1);return true}}return false};AdtechAdVisibility.EventDispatcher.prototype.dispatchEvent=function(d){var b,a,c;if(typeof d==="string"){d=new AdtechAdVisibility.AdVisibilityEvent(d)}if((typeof d.type==="string")&&(this.eventTypes[d.type]!==undefined)){if(d.target===undefined||d.target===null){d.target=this}d.currentTarget=this;b=this.eventTypes[d.type].slice(0);for(a=0;a<b.length;a++){c=b[a];if(c.context!==undefined){c.handler.call(c.context,d)}else{c.handler(d)}}}};AdtechAdVisibility.AdVisibilityEvent=function(a){this.type=a;this.target=null;this.currentTarget=null};AdtechAdVisibility.AdVisibilityEvent.prototype.property=function(a,b){if(a!=="type"&&a!=="target"&&a!=="currentTarget"){this[a]=b}return this};AdtechAdVisibility.AdVisibilityEvent.PAGE_SCROLL="pageScroll";AdtechAdVisibility.AdVisibilityEvent.PAGE_RESIZE="pageResize";AdtechAdVisibility.AdVisibilityEvent.PAGE_LOAD="pageLoad";AdtechAdVisibility.AdVisibilityEvent.BANNER_REGISTER="bannerRegister";AdtechAdVisibility.AdVisibilityEvent.IN_VIEWPORT="inViewport";AdtechAdVisibility.AdVisibilityEvent.OUT_VIEWPORT="outViewport";AdtechAdVisibility.AdVisibilityEvent.TIMERS_FLUSHED="timersFlushed";AdtechAdVisibility.AdVisibilityEvent.BLUR="blur";AdtechAdVisibility.AdVisibilityEvent.FOCUS="focus";AdtechAdVisibility.AdVisibilityEvent.VISIBLE_IMPRESSION="visibleImpression";AdtechAdVisibility.AdVisibilityEvent.CUSTOM_VISIBLE_IMPRESSION="customVisibleImpression";AdtechAdVisibility.AdVisibilityEvent.ERROR="error";AdtechAdVisibility.Utils=function(){};AdtechAdVisibility.Utils.registerNativeEventHandler=function(c,b,a){if(typeof c.addEventListener==="function"){c.addEventListener(b,a,false)}else{c.attachEvent("on"+b,a)}};AdtechAdVisibility.Utils.deregisterNativeEventHandler=function(c,b,a){if(typeof c.removeEventListener==="function"){c.removeEventListener(b,a,false)}else{c.detachEvent("on"+b,a)}};AdtechAdVisibility.Utils.createClosure=function(d,c){var a,b;a=[].slice.call(arguments,2);b=function(){var e,f,g;e=arguments.callee;f=[].slice.call(arguments);g=e.extraArgs.concat(f,[e]);return e.handler.apply(e.target,g)};b.extraArgs=a;b.target=d;b.handler=c;return b};AdtechAdVisibility.Utils.extend=function(c,a){var b=function(){};b.prototype=a.prototype;c.prototype=new b();c.prototype.constructor=c;c.supa=a.prototype;a.prototype.constructor=a};AdtechAdVisibility.AdVisibilityUtils=function(){};AdtechAdVisibility.AdVisibilityUtils.getPageOffsets=function(b){var c=b?top.document:document;var a=c.pageXOffset||c.documentElement.scrollLeft||c.body.scrollLeft;var d=c.pageYOffset||c.documentElement.scrollTop||c.body.scrollTop;return{x:a,y:d}};AdtechAdVisibility.AdVisibilityUtils.getViewportDims=function(c){var f=c?top.document:document;var b=f.documentElement.clientWidth;var e=f.compatMode==="CSS1Compat"&&b||f.body.clientWidth||b;var d=f.documentElement.clientHeight;var a=f.compatMode==="CSS1Compat"&&d||f.body.clientHeight||d;return{w:e,h:a}};AdtechAdVisibility.AdVisibilityUtils.calculateAbsolutePosition=function(b){var c=0;var a=0;while(b){c+=b.offsetTop;a+=b.offsetLeft;b=b.offsetParent}return{x:a,y:c}};AdtechAdVisibility.AdVisibilityUtils.dispatchElementFocusEvent=function(b,a){if(a&&!b.windowInFocus){b.windowInFocus=true;b.dispatchEvent(AdtechAdVisibility.AdVisibilityEvent.FOCUS)}else{if(!a&&b.windowInFocus){b.windowInFocus=false;b.dispatchEvent(AdtechAdVisibility.AdVisibilityEvent.BLUR)}}};AdtechAdVisibility.AdVisibilityUtils.dispatchErrorEvent=function(b,a){b.error=a;b.dispatchEvent(AdtechAdVisibility.AdVisibilityEvent.ERROR)};AdtechAdVisibility.AdVisibilityUtils.isInIframe=function(){return(self!=top)};AdtechAdVisibility.AdVisibilityUtils.isInNestedIframe=function(){if(!this.isInIframe()){return false}return(parent!=top)};AdtechAdVisibility.AdVisibilityUtils.isInFriendlyIframe=function(d){var b=false;var f=false;try{var c=parent.document;if(c){f=true}}catch(g){}if(f){var a=this.getTargetParentIframeEle(parent);b=((a.style.display==="none")||(a.getAttribute("display")==="none")||(a.style.width===0&&a.getAttribute("width")==="null"&&a.style.height===0&&a.getAttribute("height")==="null")||(a.getAttribute("width")===0&&a.getAttribute("height")===0)||(a.style.width===d.width&&a.style.height===d.height))||(this.isComparable(a.getAttribute("width"),d.width,3)&&this.isComparable(a.getAttribute("height"),d.height,3))}return b};AdtechAdVisibility.AdVisibilityUtils.isComparable=function(e,c,b){var d=(e>c)?e:c;var f=(e>c)?c:e;var a=100-((f/d)*100);return a<=b};AdtechAdVisibility.AdVisibilityUtils.getTargetParentIframeEle=function(d){var a,c,b=d.document.getElementsByTagName("iframe");for(a=0;a<b.length;a++){c=b[a];if(d==parent&&c.contentWindow==self||d==parent.parent&&c.contentWindow==self.parent||d==parent.parent.parent&&c.contentWindow==self.parent.parent){return c}}};AdtechAdVisibility.BeaconMeasurementStrategy=function(c,b,a){this.bannerConfig=c;this.renderingInFiF=b;this.beaconDiv=document.getElementById(this.bannerConfig.bannerDivContainerId);this.globalEventBus=a;this.eventClass=AdtechAdVisibility.AdVisibilityEvent;this.geometry=null;this.absLeft=0;this.absTop=0;this.extractBeaconFromFiF();this.buildGeometry()};AdtechAdVisibility.BeaconMeasurementStrategy.prototype.extractBeaconFromFiF=function(){if(this.renderingInFiF){this.containingIFrame=AdtechAdVisibility.AdVisibilityUtils.getTargetParentIframeEle(top);this.containingIFrame.parentNode.insertBefore(this.beaconDiv,this.containingIFrame)}switch(this.bannerConfig.beaconPosition){case"absolute":this.beaconDiv.style.position="absolute";this.beaconDiv.style.top=0;this.beaconDiv.style.left=0;break}};AdtechAdVisibility.BeaconMeasurementStrategy.prototype.buildGeometry=function(){var a,b=true;if(this.bannerConfig.geometry&&this.bannerConfig.geometry instanceof Array){for(a=0;a<this.bannerConfig.geometry.lenght;a++){if(this.bannerConfig.geometry[a].offset===undefined||isNaN(this.bannerConfig.geometry[a].offset.x)||isNaN(this.bannerConfig.geometry[a].offset.y)||this.bannerConfig.geometry[a].size===undefined||isNaN(this.bannerConfig.geometry[a].size.x)||this.bannerConfig.geometry[a].size.x<0||isNaN(this.bannerConfig.geometry[a].size.y)||this.bannerConfig.geometry[a].size.y<0){b=false}}}else{b=false}if(b){this.geometry=this.bannerConfig.geometry}else{this.geometry=[{offset:{x:0,y:0},size:{x:this.bannerConfig.width,y:this.bannerConfig.height}}]}};AdtechAdVisibility.BeaconMeasurementStrategy.prototype.calculateAbsolutePosition=function(){var a=AdtechAdVisibility.AdVisibilityUtils.calculateAbsolutePosition(this.beaconDiv);this.absLeft=a.x;this.absTop=a.y;if(this.bannerConfig.offset){this.absLeft+=this.bannerConfig.offset.x||0;this.absTop+=this.bannerConfig.offset.y||0}};AdtechAdVisibility.BeaconMeasurementStrategy.prototype.getMeasure=function(){var a=0,f=0,e,d,b,g,c;d=AdtechAdVisibility.AdVisibilityUtils.getPageOffsets(this.renderingInFiF);b=AdtechAdVisibility.AdVisibilityUtils.getViewportDims(this.renderingInFiF);this.calculateAbsolutePosition();for(e=0;e<this.geometry.length;e+=1){f+=this.geometry[e].size.x*this.geometry[e].size.y;g=this.getClipSize(d.x,b.w,this.geometry[e].offset.x+this.absLeft,this.geometry[e].size.x);c=this.getClipSize(d.y,b.h,this.geometry[e].offset.y+this.absTop,this.geometry[e].size.y);a+=g*c}return{visibleArea:a,totalArea:f}};AdtechAdVisibility.BeaconMeasurementStrategy.prototype.getClipSize=function(g,f,e,d){var a,c,b;a=Math.max(g,e);c=Math.min(g+f,e+d);b=c-a;if(b<0){b=0}return b};AdtechAdVisibility.BannerTimingInfo=function(a,c,b){this.viewTimeThreshold=a;this.viewTime=0;this.eventSent=false;this.eventToSend=c;this.viewTimerIsRunning=false;this.viewIntervalId=0;this.checkAreaVisibilityTimerData={};this.maxViewAreaPercent=0;this.btiType=b};AdtechAdVisibility.VISIBLE_IMPRESSION_TIME_MSEC=1000;AdtechAdVisibility.AREA_TIMER_DURATION_MSEC=1000;AdtechAdVisibility.DWELL_MIN_VIEWABLE_RATIO=0.5;AdtechAdVisibility.AREA_VIEW_PERCENT_STEP=10;AdtechAdVisibility.VISIBILITY_TIMER_RESOLUTION_MSEC=1000;AdtechAdVisibility.Banner=function(b,a,c){AdtechAdVisibility.Banner.supa.constructor.call(this);this.measurementStrategy;this.bannerConfig=b;this.renderingInFiF=a;this.globalEventBus=c;this.eventClass=AdtechAdVisibility.AdVisibilityEvent;this.standardTimingInfo={};this.customTimingInfo={};this.visibleinViewport=false;this.isCustomSettings=false;this.customVisibleTimeMsec=AdtechAdVisibility.VISIBLE_IMPRESSION_TIME_MSEC;this.customVisibleRatio=AdtechAdVisibility.DWELL_MIN_VIEWABLE_RATIO;this.isMaxAreaMeasurementEnabled=true;this.isRichMediaEventsEnabled=true;this.timersFlushed=false;this.windowInFocus=this.globalEventBus.windowInFocus;this.init()};AdtechAdVisibility.Utils.extend(AdtechAdVisibility.Banner,AdtechAdVisibility.EventDispatcher);AdtechAdVisibility.Banner.prototype.init=function(){if(!isNaN(this.bannerConfig.customVisibleTimeMsec)&&this.bannerConfig.customVisibleTimeMsec>0){this.customVisibleTimeMsec=this.bannerConfig.customVisibleTimeMsec}if(!isNaN(this.bannerConfig.customVisiblePercentage)&&this.bannerConfig.customVisiblePercentage>0){this.customVisibleRatio=this.bannerConfig.customVisiblePercentage/100}this.isCustomSettings=this.customVisibleTimeMsec!==AdtechAdVisibility.VISIBLE_IMPRESSION_TIME_MSEC||!AdtechAdVisibility.AdVisibilityUtils.isComparable(this.customVisibleRatio,AdtechAdVisibility.DWELL_MIN_VIEWABLE_RATIO,0.0001);this.isMaxAreaMeasurementEnabled=(!this.bannerConfig.isAdvisGoal)||(this.bannerConfig.isSelectedBySampling);this.isRichMediaEventsEnabled=this.isMaxAreaMeasurementEnabled;this.initMeasurementStrategy();this.addEventListeners();this.setupBannerTimingInfo()};AdtechAdVisibility.Banner.prototype.initMeasurementStrategy=function(){this.measurementStrategy=new AdtechAdVisibility.BeaconMeasurementStrategy(this.bannerConfig,this.renderingInFiF,this.globalEventBus)};AdtechAdVisibility.Banner.prototype.addEventListeners=function(){this.globalEventBus.addEventListener(this.eventClass.TIMERS_FLUSHED,this.timersFlushedHandler,this);this.globalEventBus.addEventListener(this.eventClass.BLUR,this.windowFocusEventHandler,this);this.globalEventBus.addEventListener(this.eventClass.FOCUS,this.windowFocusEventHandler,this);this.globalEventBus.addEventListener(this.eventClass.PAGE_RESIZE,this.resizeHandler,this);this.globalEventBus.addEventListener(this.eventClass.PAGE_SCROLL,this.scrollHandler,this);this.globalEventBus.addEventListener(this.eventClass.PAGE_LOAD,this.pageLoadHandler,this);this.globalEventBus.addEventListener(this.eventClass.BANNER_REGISTER,this.bannerRegisterHandler,this)};AdtechAdVisibility.Banner.prototype.removeEventListeners=function(){this.globalEventBus.removeEventListener(this.eventClass.TIMERS_FLUSHED,this.timersFlushedHandler,this);this.globalEventBus.removeEventListener(this.eventClass.BLUR,this.windowFocusEventHandler,this);this.globalEventBus.removeEventListener(this.eventClass.FOCUS,this.windowFocusEventHandler,this);this.globalEventBus.removeEventListener(this.eventClass.PAGE_RESIZE,this.resizeHandler,this);this.globalEventBus.removeEventListener(this.eventClass.PAGE_SCROLL,this.scrollHandler,this);this.globalEventBus.removeEventListener(this.eventClass.PAGE_LOAD,this.pageLoadHandler,this);this.globalEventBus.removeEventListener(this.eventClass.BANNER_REGISTER,this.bannerRegisterHandler,this)};AdtechAdVisibility.Banner.prototype.setupBannerTimingInfo=function(){var c,b,a;b=new AdtechAdVisibility.AdVisibilityEvent(this.eventClass.VISIBLE_IMPRESSION);a=new AdtechAdVisibility.AdVisibilityEvent(this.eventClass.CUSTOM_VISIBLE_IMPRESSION);b.property("bannerConfig",this.bannerConfig);a.property("bannerConfig",this.bannerConfig);this.standardTimingInfo=new AdtechAdVisibility.BannerTimingInfo(AdtechAdVisibility.VISIBLE_IMPRESSION_TIME_MSEC,b,"standard");this.customTimingInfo=new AdtechAdVisibility.BannerTimingInfo(this.customVisibleTimeMsec,a,"custom");for(c=0;c<=100;c=c+AdtechAdVisibility.AREA_VIEW_PERCENT_STEP){this.standardTimingInfo.checkAreaVisibilityTimerData[c]={};this.standardTimingInfo.checkAreaVisibilityTimerData[c].isRunning=false;this.standardTimingInfo.checkAreaVisibilityTimerData[c].intervalId=0;this.customTimingInfo.checkAreaVisibilityTimerData[c]={};this.customTimingInfo.checkAreaVisibilityTimerData[c].isRunning=false;this.customTimingInfo.checkAreaVisibilityTimerData[c].timerId=0}};AdtechAdVisibility.Banner.prototype.checkVisible=function(d){var c,a,b;c=this.measurementStrategy.getMeasure();a=c.visibleArea/c.totalArea;b=Math.round(a*100);this.currentViewAreaPercent=Math.ceil(b/AdtechAdVisibility.AREA_VIEW_PERCENT_STEP)*AdtechAdVisibility.AREA_VIEW_PERCENT_STEP;this.visibleinViewport=a>=AdtechAdVisibility.DWELL_MIN_VIEWABLE_RATIO;if(this.visibleinViewport&&this.windowInFocus){this.startViewTimer(this.standardTimingInfo)}else{this.stopViewTimer(this.standardTimingInfo)}if(this.isMaxAreaMeasurementEnabled){if((this.currentViewAreaPercent>this.standardTimingInfo.maxViewAreaPercent)&&this.windowInFocus){this.startAreaViewTimer(this.currentViewAreaPercent,this.standardTimingInfo,AdtechAdVisibility.AREA_TIMER_DURATION_MSEC)}else{this.stopAreaViewTimer(this.currentViewAreaPercent,this.standardTimingInfo)}}if(this.isCustomSettings){if(a>=this.customVisibleRatio&&this.windowInFocus){this.startViewTimer(this.customTimingInfo)}else{this.stopViewTimer(this.customTimingInfo)}if(this.isMaxAreaMeasurementEnabled){if((this.currentViewAreaPercent>this.customTimingInfo.maxViewAreaPercent)&&this.windowInFocus){this.startAreaViewTimer(this.currentViewAreaPercent,this.customTimingInfo,this.customVisibleTimeMsec)}else{this.stopAreaViewTimer(this.currentViewAreaPercent,this.customTimingInfo)}}}};AdtechAdVisibility.Banner.prototype.startViewTimer=function(a){if(a.viewTimerIsRunning||this.timersFlushed){return}a.viewIntervalId=setInterval(AdtechAdVisibility.Utils.createClosure(this,this.viewTimerHandler,a),AdtechAdVisibility.VISIBILITY_TIMER_RESOLUTION_MSEC);a.viewTimerIsRunning=true};AdtechAdVisibility.Banner.prototype.viewTimerHandler=function(a){if(a.viewTimerIsRunning){a.viewTime=a.viewTime+AdtechAdVisibility.VISIBILITY_TIMER_RESOLUTION_MSEC;if(a.viewTime>=a.viewTimeThreshold&&!a.eventSent){this.dispatchEvent(a.eventToSend);a.eventSent=true}}};AdtechAdVisibility.Banner.prototype.stopViewTimer=function(a){if(a.viewTimerIsRunning){clearInterval(a.viewIntervalId);a.viewTimerIsRunning=false}};AdtechAdVisibility.Banner.prototype.startAreaViewTimer=function(c,a,b){if(a.checkAreaVisibilityTimerData[c].isRunning===true||this.timersFlushed){return}a.checkAreaVisibilityTimerData[c].isRunning=true;a.checkAreaVisibilityTimerData[c].timerId=setTimeout(AdtechAdVisibility.Utils.createClosure(this,this.checkViewPercentage,c,a),b)};AdtechAdVisibility.Banner.prototype.checkViewPercentage=function(b,a){this.stopAreaViewTimer(b,a);if(this.currentViewAreaPercent>a.maxViewAreaPercent&&this.windowInFocus){a.maxViewAreaPercent=Math.min(b,this.currentViewAreaPercent)}};AdtechAdVisibility.Banner.prototype.stopAreaViewTimer=function(b,a){if(a.checkAreaVisibilityTimerData[b].isRunning){clearTimeout(a.checkAreaVisibilityTimerData[b].timerId);a.checkAreaVisibilityTimerData[b].isRunning=false;a.checkAreaVisibilityTimerData[b].timerId=0}};AdtechAdVisibility.Banner.prototype.containerViewHandler=function(a){this.checkVisible()};AdtechAdVisibility.Banner.prototype.windowFocusEventHandler=function(a){this.windowInFocus=a.target.windowInFocus;this.checkVisible()};AdtechAdVisibility.Banner.prototype.resizeHandler=function(a){this.checkVisible()};AdtechAdVisibility.Banner.prototype.pageLoadHandler=function(a){this.checkVisible()};AdtechAdVisibility.Banner.prototype.scrollHandler=function(a){this.checkVisible()};AdtechAdVisibility.Banner.prototype.bannerRegisterHandler=function(a){this.checkVisible()};AdtechAdVisibility.Banner.prototype.timersFlushedHandler=function(a){this.stopViewTimer(this.standardTimingInfo);if(this.isCustomSettings){this.stopViewTimer(this.customTimingInfo)}this.timersFlushed=true;this.removeEventListeners()};AdtechAdVisibility.Banner.prototype.getMaxViewAreaPercent=function(){return this.standardTimingInfo.maxViewAreaPercent};AdtechAdVisibility.Banner.prototype.getCustomMaxViewAreaPercent=function(){return this.customTimingInfo.maxViewAreaPercent};AdtechAdVisibility.Banner.prototype.getViewTimeMsec=function(){return this.standardTimingInfo.viewTime};AdtechAdVisibility.Banner.prototype.getCustomViewTimeMsec=function(){return this.customTimingInfo.viewTime};AdtechAdVisibility.Banner.prototype.getBannerConfig=function(){return this.bannerConfig};AdtechAdVisibility.Banner.prototype.isCustomVisibleImpressions=function(){return this.isCustomSettings};AdtechAdVisibility.Banner.prototype.isRichMediaEvents=function(){return this.isRichMediaEventsEnabled};AdtechAdVisibility.Banner.prototype.isViewEvents=function(){return this.bannerConfig.isAdvisGoal};AdtechAdVisibility.RichMediaEventType=function(){};AdtechAdVisibility.RichMediaEventType.VIEWTIME="999";AdtechAdVisibility.RichMediaEventType.TOTALTIME="998";AdtechAdVisibility.RichMediaEventType.VISIBLE_IMP="997";AdtechAdVisibility.RichMediaEventType.CUSTOM_VISIBLE_IMP="995";AdtechAdVisibility.RichMediaEventType.CUSTOM_VIEWTIME="994";AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_IFRAME_NON_FRIENDLY="979";AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_IFRAME_NESTED="978";AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_SIZE_NOT_SET="969";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_0="949";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_10="950";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_20="951";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_30="952";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_40="953";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_50="954";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_60="955";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_70="956";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_80="957";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_90="958";AdtechAdVisibility.RichMediaEventType.AREA_PERCENT_100="959";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_0="929";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_10="930";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_20="931";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_30="932";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_40="933";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_50="934";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_60="935";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_70="936";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_80="937";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_90="938";AdtechAdVisibility.RichMediaEventType.CUSTOM_AREA_PERCENT_100="939";AdtechAdVisibility.RichMediaEventType.getAreaPercentId=function(a,b){if(b===true){switch(a){case 0:return this.CUSTOM_AREA_PERCENT_0;case 10:return this.CUSTOM_AREA_PERCENT_10;case 20:return this.CUSTOM_AREA_PERCENT_20;case 30:return this.CUSTOM_AREA_PERCENT_30;case 40:return this.CUSTOM_AREA_PERCENT_40;case 50:return this.CUSTOM_AREA_PERCENT_50;case 60:return this.CUSTOM_AREA_PERCENT_60;case 70:return this.CUSTOM_AREA_PERCENT_70;case 80:return this.CUSTOM_AREA_PERCENT_80;case 90:return this.CUSTOM_AREA_PERCENT_90;case 100:return this.CUSTOM_AREA_PERCENT_100;default:return this.CUSTOM_AREA_PERCENT_0}}switch(a){case 0:return this.AREA_PERCENT_0;case 10:return this.AREA_PERCENT_10;case 20:return this.AREA_PERCENT_20;case 30:return this.AREA_PERCENT_30;case 40:return this.AREA_PERCENT_40;case 50:return this.AREA_PERCENT_50;case 60:return this.AREA_PERCENT_60;case 70:return this.AREA_PERCENT_70;case 80:return this.AREA_PERCENT_80;case 90:return this.AREA_PERCENT_90;case 100:return this.AREA_PERCENT_100;default:return this.AREA_PERCENT_0}};AdtechAdVisibility.AdVisibilityManager=function(){this.flushTimerTimeout=0;this.elapsedTimeToFlush=0;this.flushTimerIsRunning=false;this.timersFlushed=false;this.banners={};this.bannerConfigs={};this.trackings={};this.trackings_2={};this.trackings_view_events={};this.pageTimerIntervalId=0;this.pageTime=0;this.pageTimerIsRunning=false;this.timersFlushed=false;this.renderingInFiF=false;this.windowInFocus=true;this.eventHandlersAdded=false;this.globalEventBus=new AdtechAdVisibility.EventDispatcher();this.init()};AdtechAdVisibility.AdVisibilityManager.TIME_TO_FLUSH=300000;AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE=1;AdtechAdVisibility.AdVisibilityManager.prototype.init=function(){this.startPageTimer();this.startFlushTimer();this.globalEventBus.addEventListener(AdtechAdVisibility.AdVisibilityEvent.ERROR,this.errorHandler,this)};AdtechAdVisibility.AdVisibilityManager.prototype.registerBanner=function(a){this.addTracking(a);if(this.isIndeterminableImpression(a)){return}this.renderingInFiF=(AdtechAdVisibility.AdVisibilityUtils.isInIframe()&&AdtechAdVisibility.AdVisibilityUtils.isInFriendlyIframe(a));this.addNativeEventHandlers();if(this.renderingInFiF&&document.readyState!="complete"){this.bannerConfigs[a.placementId]=a;AdtechAdVisibility.Utils.registerNativeEventHandler(window,"load",AdtechAdVisibility.Utils.createClosure(this,this.iFrameOnLoadHandler))}else{this.initBanner(a);setTimeout(AdtechAdVisibility.Utils.createClosure(this,this.registrationCompleteHandler,a.placementId),200)}};AdtechAdVisibility.AdVisibilityManager.prototype.isIndeterminableImpression=function(a){if(isNaN(a.width)||isNaN(a.height)||a.width==0||a.height==0){this.sendIndeterminableImpression(a,AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_SIZE_NOT_SET);return true}if(AdtechAdVisibility.AdVisibilityUtils.isInNestedIframe()){this.sendIndeterminableImpression(a,AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_IFRAME_NESTED);return true}if((AdtechAdVisibility.AdVisibilityUtils.isInIframe()&&!AdtechAdVisibility.AdVisibilityUtils.isInFriendlyIframe(a))){this.sendIndeterminableImpression(a,AdtechAdVisibility.RichMediaEventType.INDETERMINABLE_IFRAME_NON_FRIENDLY);return true}return false};AdtechAdVisibility.AdVisibilityManager.prototype.initBanner=function(b){var a=new AdtechAdVisibility.Banner(b,this.renderingInFiF,this.globalEventBus);a.addEventListener(AdtechAdVisibility.AdVisibilityEvent.VISIBLE_IMPRESSION,this.visibleImpressionHandler,this);a.addEventListener(AdtechAdVisibility.AdVisibilityEvent.CUSTOM_VISIBLE_IMPRESSION,this.customVisibleImpressionHandler,this);this.banners[b.placementId]=a};AdtechAdVisibility.AdVisibilityManager.prototype.initBannerDelayed=function(){for(var a in this.bannerConfigs){this.initBanner(this.bannerConfigs[a]);setTimeout(AdtechAdVisibility.Utils.createClosure(this,this.registrationCompleteHandler,this.bannerConfigs[a].placementId),200)}};AdtechAdVisibility.AdVisibilityManager.prototype.addTracking=function(a){this.trackings[a.placementId]=this.createTrackingPixel();this.trackings_2[a.placementId]=this.createTrackingPixel();if(a.isAdvisGoal){this.trackings_view_events[a.placementId]=this.createTrackingPixel()}};AdtechAdVisibility.AdVisibilityManager.prototype.createTrackingPixel=function(){var a=new Image();return a};AdtechAdVisibility.AdVisibilityManager.prototype.addNativeEventHandlers=function(){if(!this.eventHandlersAdded){this.eventHandlersAdded=true;var a=this.renderingInFiF?top:window;AdtechAdVisibility.Utils.registerNativeEventHandler(a,"scroll",AdtechAdVisibility.Utils.createClosure(this,this.scrollHandler));AdtechAdVisibility.Utils.registerNativeEventHandler(a,"resize",AdtechAdVisibility.Utils.createClosure(this,this.resizeHandler));AdtechAdVisibility.Utils.registerNativeEventHandler(a,"load",AdtechAdVisibility.Utils.createClosure(this,this.onLoadHandler));AdtechAdVisibility.Utils.registerNativeEventHandler(a,"focus",AdtechAdVisibility.Utils.createClosure(this,this.onFocusHandler));AdtechAdVisibility.Utils.registerNativeEventHandler(a,"blur",AdtechAdVisibility.Utils.createClosure(this,this.onBlurHandler));AdtechAdVisibility.Utils.registerNativeEventHandler(a.self,"beforeunload",AdtechAdVisibility.Utils.createClosure(this,this.flushTimers));(a.document.hasFocus&&!a.document.hasFocus())?this.onBlurHandler():this.onFocusHandler()}};AdtechAdVisibility.AdVisibilityManager.prototype.removeNativeEventHandlers=function(){var a=this.renderingInFiF?top:window;AdtechAdVisibility.Utils.deregisterNativeEventHandler(a,"scroll",AdtechAdVisibility.Utils.createClosure(this,this.scrollHandler));AdtechAdVisibility.Utils.deregisterNativeEventHandler(a,"resize",AdtechAdVisibility.Utils.createClosure(this,this.resizeHandler));AdtechAdVisibility.Utils.deregisterNativeEventHandler(a,"load",AdtechAdVisibility.Utils.createClosure(this,this.onLoadHandler));AdtechAdVisibility.Utils.deregisterNativeEventHandler(a,"focus",AdtechAdVisibility.Utils.createClosure(this,this.onFocusHandler));AdtechAdVisibility.Utils.deregisterNativeEventHandler(a,"blur",AdtechAdVisibility.Utils.createClosure(this,this.onBlurHandler));AdtechAdVisibility.Utils.deregisterNativeEventHandler(a.self,"beforeunload",AdtechAdVisibility.Utils.createClosure(this,this.flushTimers))};AdtechAdVisibility.AdVisibilityManager.prototype.startPageTimer=function(){if(this.pageTimerIsRunning||this.timersFlushed){return}this.pageTimerIntervalId=setInterval(AdtechAdVisibility.Utils.createClosure(this,this.pageTimerHandler),1000);this.pageTimerIsRunning=true};AdtechAdVisibility.AdVisibilityManager.prototype.stopPageTimer=function(){if(this.pageTimerIsRunning){clearInterval(this.pageTimerIntervalId);this.pageTimerIsRunning=false}};AdtechAdVisibility.AdVisibilityManager.prototype.startFlushTimer=function(){var a=500;if(this.flushTimerIsRunning){return}this.flushTimerIsRunning=true;this.flushTimerTimeout=setTimeout(AdtechAdVisibility.Utils.createClosure(this,this.flushTimers),(AdtechAdVisibility.AdVisibilityManager.TIME_TO_FLUSH+a))};AdtechAdVisibility.AdVisibilityManager.prototype.stopFlushTimer=function(){if(this.flushTimerIsRunning){clearTimeout(this.flushTimerTimeout);this.flushTimerIsRunning=false}};AdtechAdVisibility.AdVisibilityManager.prototype.flushTimers=function(){if(!this.timersFlushed){this.timersFlushed=true;this.stopFlushTimer();this.stopPageTimer();this.dispatchFlushTimerEvent();this.sendRemainingValuesForAllBanners();this.removeNativeEventHandlers()}};AdtechAdVisibility.AdVisibilityManager.prototype.dispatchFlushTimerEvent=function(){this.globalEventBus.dispatchEvent(AdtechAdVisibility.AdVisibilityEvent.TIMERS_FLUSHED)};AdtechAdVisibility.AdVisibilityManager.prototype.sendRemainingValuesForAllBanners=function(){for(var b in this.banners){var a=this.banners[b];if(a.isRichMediaEvents()){this.sendRemainingValues(a)}}};AdtechAdVisibility.AdVisibilityManager.prototype.sendRemainingValues=function(b){var e,g,d,h,a,f,c;e=b.getBannerConfig();h=Math.round(b.getViewTimeMsec()/1000);a=b.getMaxViewAreaPercent();g=AdtechAdVisibility.RichMediaEventType.VIEWTIME+","+AdtechAdVisibility.RichMediaEventType.TOTALTIME+","+AdtechAdVisibility.RichMediaEventType.getAreaPercentId(a);d=h+","+this.pageTime+","+AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE;if(b.isCustomVisibleImpressions()){f=Math.round(b.getCustomViewTimeMsec()/1000);c=b.getCustomMaxViewAreaPercent();g+=","+AdtechAdVisibility.RichMediaEventType.CUSTOM_VIEWTIME+","+AdtechAdVisibility.RichMediaEventType.getAreaPercentId(c,true);d+=","+f+","+AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE}this.sendRequest(e,g,d)};AdtechAdVisibility.AdVisibilityManager.prototype.sendVisibleImpression=function(b){var c=AdtechAdVisibility.RichMediaEventType.VISIBLE_IMP;var a=AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE;this.sendRequest(b,c,a)};AdtechAdVisibility.AdVisibilityManager.prototype.sendCustomVisibleImpression=function(b){var c=AdtechAdVisibility.RichMediaEventType.CUSTOM_VISIBLE_IMP;var a=AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE;this.sendRequest(b,c,a)};AdtechAdVisibility.AdVisibilityManager.prototype.sendViewCountEvent=function(a){this.trackings_view_events[a.placementId].src=a.viewEventURL};AdtechAdVisibility.AdVisibilityManager.prototype.sendIndeterminableImpression=function(b,d){var c=d;var a=AdtechAdVisibility.AdVisibilityManager.DEFAULT_EVENT_VALUE;this.sendRequest(b,c,a)};AdtechAdVisibility.AdVisibilityManager.prototype.sendRequest=function(c,d,a){if(c.adserver!=""){var b=this.buildBaseUrl(c.adserver,"custrmevent/3.0",c)+"EventIds="+d+";EventVals="+a;this.trackings[c.placementId].src=b}if(c.advisServer!=""){var b=this.buildBaseUrl(c.advisServer,"advis/3",c)+"EventIds="+d+";EventVals="+a+";CampaignNetworkId="+c.campaignNetworkId+";CampaignSubNetworkId="+c.campaignSubNetworkId+";AssetId="+c.bannerUid;this.trackings_2[c.placementId].src=b}};AdtechAdVisibility.AdVisibilityManager.prototype.buildBaseUrl=function(c,f,a){var i=a.adProtocol;var l=a.mainNetworkId;var h=a.subNetworkId;var g=a.placementId;var b=a.pageId;var e=a.sizeId;var k=a.adId;var d=a.creativeId;var m=a.bannerId;var j=i+"://"+c+"/"+f+"/"+l+"."+h+"/"+g+"/"+b+"/"+e+"/AdId="+k+";CreativeId="+d+";BnId="+m+";";return j};AdtechAdVisibility.AdVisibilityManager.prototype.dispatchViewPortEvent=function(a){offsets=AdtechAdVisibility.AdVisibilityUtils.getPageOffsets(this.renderingInFiF);dims=AdtechAdVisibility.AdVisibilityUtils.getViewportDims(this.renderingInFiF);this.globalEventBus.dispatchEvent(new AdtechAdVisibility.AdVisibilityEvent(a).property("offsetX",offsets.x).property("offsetY",offsets.y).property("width",dims.w).property("height",dims.h))};AdtechAdVisibility.AdVisibilityManager.prototype.errorHandler=function(b){var a=b.target.error};AdtechAdVisibility.AdVisibilityManager.prototype.visibleImpressionHandler=function(c){var b=c.bannerConfig,a=this.banners[b.placementId];a.removeEventListener(AdtechAdVisibility.AdVisibilityEvent.VISIBLE_IMPRESSION,this.visibleImpressionHandler,this);if(a.isRichMediaEvents()){this.sendVisibleImpression(b)}if(a.isViewEvents()&&!b.isAdvisGoalCustomSettings){this.sendViewCountEvent(b)}};AdtechAdVisibility.AdVisibilityManager.prototype.customVisibleImpressionHandler=function(c){var b=c.bannerConfig,a=this.banners[b.placementId];a.removeEventListener(AdtechAdVisibility.AdVisibilityEvent.CUSTOM_VISIBLE_IMPRESSION,this.visibleImpressionHandler,this);if(a.isRichMediaEvents()){this.sendCustomVisibleImpression(b)}if(a.isViewEvents()&&b.isAdvisGoalCustomSettings){this.sendViewCountEvent(b)}};AdtechAdVisibility.AdVisibilityManager.prototype.registrationCompleteHandler=function(a){this.dispatchViewPortEvent(AdtechAdVisibility.AdVisibilityEvent.BANNER_REGISTER)};AdtechAdVisibility.AdVisibilityManager.prototype.pageTimerHandler=function(){if(this.pageTimerIsRunning&&this.windowInFocus){this.pageTime=this.pageTime+1}};AdtechAdVisibility.AdVisibilityManager.prototype.scrollHandler=function(){this.dispatchViewPortEvent(AdtechAdVisibility.AdVisibilityEvent.PAGE_SCROLL)};AdtechAdVisibility.AdVisibilityManager.prototype.resizeHandler=function(){this.dispatchViewPortEvent(AdtechAdVisibility.AdVisibilityEvent.PAGE_RESIZE)};AdtechAdVisibility.AdVisibilityManager.prototype.onLoadHandler=function(){this.dispatchViewPortEvent(AdtechAdVisibility.AdVisibilityEvent.PAGE_LOAD)};AdtechAdVisibility.AdVisibilityManager.prototype.iFrameOnLoadHandler=function(){setTimeout(AdtechAdVisibility.Utils.createClosure(this,this.initBannerDelayed),200)};AdtechAdVisibility.AdVisibilityManager.prototype.onBlurHandler=function(){this.windowInFocus=false;AdtechAdVisibility.AdVisibilityUtils.dispatchElementFocusEvent(this.globalEventBus,this.windowInFocus)};AdtechAdVisibility.AdVisibilityManager.prototype.onFocusHandler=function(){this.windowInFocus=true;AdtechAdVisibility.AdVisibilityUtils.dispatchElementFocusEvent(this.globalEventBus,this.windowInFocus);this.dispatchViewPortEvent(AdtechAdVisibility.AdVisibilityEvent.PAGE_LOAD)};var adtechAdVisibilityManager=new AdtechAdVisibility.AdVisibilityManager();