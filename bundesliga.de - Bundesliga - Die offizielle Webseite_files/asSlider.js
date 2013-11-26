/*
 *	Beispiel: $("#imageSlider").asSlider();
 * 	<div id="imageSlider">
 *		<ul>
 *			<li><img src="images/01.jpg" alt="" /></li>
 *			<li><img src="images/02.jpg" alt="" /></li>
 *		</ul>
 *	</div>
 *
 */

function setXTClick(direction) {
  if (direction == "left") {
    picCount--;
    if (picCount < 1) picCount = 1;
  }
  if (direction == "right") {
    picCount++;
  }
  xt_click(this, 'F' , level2id, xtpageCardbox+'_Bild'+picCount);
  
  //update the IVW Pixel too
  //at the same time we set the ATI Hit
  ivw_get();
}


(function($) {
	$.fn.asSlider = function(options){
		// default configuration properties
		var defaults = {
			prevId: 		'prevBtn',
			prevText: 	'Previous',
			nextId: 		'nextBtn',
			nextText: 	'Next',
			controls:	  true,
			before:	    '<p id="controls">',
			after:	    '</p>',
			fade:	      true,
			firstId: 		'firstBtn',
			firstText: 	'First',
			firstShow:	false,
			lastId: 		'lastBtn',
			lastText: 	'Last',
			lastShow:		false,
			vertical:		false,
			speed: 			800,
			auto:			  false,
			pause:			2000,
			continuous:	false
		};

		var options = $.extend(defaults, options);

		this.each(function() {
			var obj = $(this);
			var s = $("li", obj).length;
			var w = $("li", obj).width();
			var h = $("li", obj).height();
			obj.width(w);
			obj.height(h);
			obj.css("overflow","hidden");
			var ts = s-1;
			var t = 0;
			$("ul", obj).css('width',s*w);
			if(!options.vertical) $("li", obj).css('float','left');

			if(options.controls){
				var html = options.before;
				if(options.firstShow) html += '<span id="'+ options.firstId +'"><a href=\"javascript:setXTClick(\'left\');\"></a></span>';
				html += ' <span id="'+ options.prevId +'"><a href=\"javascript:setXTClick(\'left\');\"></a></span>';
				html += ' <span id="'+ options.nextId +'"><a href=\"javascript:setXTClick(\'right\');\"></a></span>';
				if(options.lastShow) html += ' <span id="'+ options.lastId +'"><a href=\"javascript:setXTClick(\'right\');\"></a></span>';
				html += options.after;
				$(obj).after(html);
			};

			$("a","#"+options.nextId).click(function(){ animate("next",true); });
			$("a","#"+options.prevId).click(function(){ animate("prev",true);	});
			$("a","#"+options.firstId).click(function(){ animate("first",true);	});
			$("a","#"+options.lastId).click(function(){	animate("last",true);	});

			function animate(dir,clicked){
				var ot = t;
				switch(dir){
					case "next":
						t = (ot>=ts) ? (options.continuous ? 0 : ts) : t+1;
						break;
					case "prev":
						t = (t<=0) ? (options.continuous ? ts : 0) : t-1;
						break;
					case "first":
						t = 0;
						break;
					case "last":
						t = ts;
						break;
					default:
						break;
				};

				var diff = Math.abs(ot-t);
				var speed = diff*options.speed;
				if(!options.vertical) {
					p = (t*w*-1);
					$("ul",obj).animate(
						{ marginLeft: p },
						speed
					);
				} else {
					p = (t*h*-1);
					$("ul",obj).animate(
						{ marginTop: p },
						speed
					);
				};

				if(!options.continuous && options.fade){
					if(t==ts){
						$("a","#"+options.nextId).hide();
						$("a","#"+options.lastId).hide();
					} else {
						$("a","#"+options.nextId).show();
						$("a","#"+options.lastId).show();
					};
					if(t==0){
						$("a","#"+options.prevId).hide();
						$("a","#"+options.firstId).hide();
					} else {
						$("a","#"+options.prevId).show();
						$("a","#"+options.firstId).show();
					};
				};

				if(clicked) clearTimeout(timeout);
				if(options.auto && dir=="next" && !clicked){;
					timeout = setTimeout(function(){
						animate("next",false);
					},diff*options.speed+options.pause);
				};

			};
			// init
			var timeout;
			if(options.auto){;
				timeout = setTimeout(function(){
					animate("next",false);
				},options.pause);
			};

			if(!options.continuous && options.fade){
				$("a","#"+options.prevId).hide();
				$("a","#"+options.firstId).hide();
			};

		});

	};

})(jQuery);



