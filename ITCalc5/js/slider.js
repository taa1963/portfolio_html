jQuery(document).ready(function(){
	function htmSlider(){
		/* ������� ��������� ���������� */

		/* ������� �������� */
		var slideWrap = jQuery('.slide-wrap');
		/* ������ �� ���������� ���������� ����� */
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');

		var playLink = jQuery('.auto');
        // is_animate = true;
		
		var is_animate = false;
        // play();
        timer = setInterval(autoplay, 2000);
        autoplay();

         // var autoplay= true;
		
		/* ������ ������ � ��������� */
		var slideWidth = jQuery('.slide-item').outerWidth();
		
		/* �������� �������� */
		var newLeftPos = slideWrap.position().left - slideWidth;
		
		/* ���� �� ������ �� ��������� ����� */
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

		/* ���� �� ������ �� ����������� ����� */
		prevLink.click(function (){
			if(!slideWrap.is(':animated')) {
			
				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});
		
		
		/* ������� �������������� ��������� �������� */
		function autoplay(){
			if(!is_animate){
				is_animate = true;
				slideWrap.animate({left: newLeftPos}, 500, function(){
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
					is_animate = false;
				});
			}
		}
		
		/* ����� �� ������� �����/����� */
		playLink.click(function(){
			if(playLink.hasClass('play')){
				playLink.removeClass('play').addClass('pause');
				jQuery('.navy').addClass('disable');
				timer = setInterval(autoplay, 2000);
			} else {
				//playLink.removeClass('pause').addClass('play');
                playLink.removeClass('pause');

                playLink.removeClass('pause');
                playLink.removeClass('auto');
                document.getElementById("next-slide").style.display="block";

               // playLink.addClass('next-slide');


            //.addClass('next-slide')


                //result_block.find('.next-slide').show();

            //.next-slide.show();
				jQuery('.navy').removeClass('disable');
				clearInterval(timer);
			}
		});

	}

	/* ������������� ������� �������� */
	htmSlider();
});