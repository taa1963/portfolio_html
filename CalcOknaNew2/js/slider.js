jQuery(document).ready(function(){
	function htmSlider(){

		/* первый слайдер */		
		var slideWrap = jQuery('.slide-wrap');		
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');
				
		var slideWidth = jQuery('.slide-item').outerWidth();
		
		
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		
		nextLink.click(function(){           
			if(!slideWrap.is(':animated')) {
               
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		
		prevLink.click(function(){
			if(!slideWrap.is(':animated')) {
              
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});

        /* второй слайдер */		
		var slideWrap2 = jQuery('.slide-wrap2');		
		var nextLink2 = jQuery('.next-slide2');
		var prevLink2 = jQuery('.prev-slide2');
				
		var slideWidth = jQuery('.slide-item2').outerWidth();
		
		
		var newLeftPos = slideWrap2.position().left - slideWidth;
		
		
		$('#prev2').on("click",function(){
          
			if(!slideWrap2.is(':animated')) {
	
				slideWrap2.animate({left: newLeftPos}, 500, function(){
					slideWrap2
						.find('.slide-item2:first')
						.appendTo(slideWrap2)
						.parent()
						.css({'left': 0});
				});

			}
		});

		
		$('#next2').on("click",function(){
          
			if(!slideWrap2.is(':animated')) {
			
				slideWrap2
					.css({'left': newLeftPos})
					.find('.slide-item2:last')
					.prependTo(slideWrap2)
					.parent()
					.animate({left: 0}, 500);

			}
		});








		
	
		
	}

	/* èíèöèëèçèðóåì ôóíêöèþ ñëàéäåðà */
	htmSlider();
	});