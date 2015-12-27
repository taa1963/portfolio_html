/*
 * --------------------------------------------------------------------
 * Simple Scroller
 * by Siddharth S, www.ssiddharth.com, hello@ssiddharth.com
 * Version: 1.0, 05.10.2009 	
 * --------------------------------------------------------------------
 */

$(document).ready(function() 
{	 
	var index = 0;
	var thumbs = $("#thumbs img");
	var images = $("#gallery img");
	var imgHeight = $(thumbs).attr("height");
	//$(thumbs).slice(0,3).clone().appendTo("#thumbs");
	for (i=0; i<thumbs.length; i++) {
		$(thumbs[i]).data("thumb", i);
		$(thumbs[i]).click(function(e) {
			e.preventDefault();
			index = $(this).data('thumb');
			timeout();
			show(index);
		});
		$(images[i]).addClass("image-"+i);
	}
	
	$("#next").click(function(e) {
		e.preventDefault();
		timeout();
		sift();
	});

	var timer = null;
	function timeout() {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(function () {
			sift();
			timeout();
		}, 8000);
	};
	timeout();


	show(index);

	function sift()
	{
		if (index<(thumbs.length-1)){index+=1 ; }
		else {index=0}
		show (index);
	}
	
	function show(num)
	{
		$(images).fadeOut(400);
		$(".image-"+num).stop().fadeIn(400);
		var scrollPos = (num+1)*imgHeight;
		$("#thumbs").stop().animate({scrollTop: scrollPos}, 400);
	}
});