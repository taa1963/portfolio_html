jQuery(document).ready(function(){
	function htmSlider() {
		/* ������� ��������� ���������� */

		/* ������� �������� */
		var slideWrap = jQuery('.slide-wrap');
		/* ������ �� ���������� ���������� ����� */
		var nextLink = jQuery('.next-slide');
		var prevLink = jQuery('.prev-slide');

		var playLink = jQuery('.auto');

		var is_animate = true;

		/* ������ ������ � ��������� */
		var slideWidth = jQuery('.slide-item').outerWidth();

		/* �������� �������� */
		var newLeftPos = slideWrap.position().left - slideWidth;

		/* ���� �� ������ �� ��������� ����� */
		nextLink.click(function () {
			if (!slideWrap.is(':animated')) {

				slideWrap.animate({left: newLeftPos}, 500, function () {
					slideWrap
						.find('.slide-item:first')
						.appendTo(slideWrap)
						.parent()
						.css({'left': 0});
				});

			}
		});

		/* ���� �� ������ �� ����������� ����� */
		prevLink.click(function () {
			if (!slideWrap.is(':animated')) {

				slideWrap
					.css({'left': newLeftPos})
					.find('.slide-item:last')
					.prependTo(slideWrap)
					.parent()
					.animate({left: 0}, 500);

			}
		});


		/* ������� �������������� ��������� �������� */
		/*function autoplay(){
		 if(!is_animate) {
			 is_animate = true;
			 slideWrap.animate({left: newLeftPos}, 500, function () {
				 slideWrap
					 .find('.slide-item:first')
					 .appendTo(slideWrap)
					 .parent()
					 .css({'left': 0});
				 is_animate = false;
			 }
		 }

		 });*/


		 /*function autoplay  () {
			 if (!slideWrap.is(':animated')) {

				 slideWrap
					 .css({'left': newLeftPos})
					 .find('.slide-item:last')
					 .prependTo(slideWrap)
					 .parent()
					 .animate({left: 0}, 500);
			 }


		});*/



/*
		function autoplay() {

			var timerId = setInterval(function () {

		/!* alert(eee);*!/
				if (!slideWrap.is(':animated')) {

					slideWrap
						.css({'left': newLeftPos})
						.find('.slide-item:last')
						.prependTo(slideWrap)
						.parent()
						.animate({left: 0}, 500);

				}

		/!* slideWrap
		 .css({'left': newLeftPos})
		 .find('.slide-item:last')
		 .prependTo(slideWrap)
		 .parent()
		 .animate({left: 0}, 500);*!/


		 }, 500);
			alert(eee);

		 };*/


		/*	is_animate = true;
		 slideWrap.animate({left: newLeftPos}, 2000, function () {

		 slideWrap
		 .find('.slide-item:first')
		 .appendTo(slideWrap)
		 .parent()
		 .css({'left': 0});
		 is_animate = false;
		 })*/

		/* };*/


		/*function autoplay(){
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

		 ����� �� ������� �����/�����
		 playLink.click(function(){

		 if(playLink.hasClass('play')){
		 playLink.removeClass('play').addClass('pause');
		 jQuery('.navy').addClass('disable');
		 timer = setInterval(autoplay, 1000);
		 }


		 });

		 }*/
	}

	/* ������������� ������� �������� */
	htmSlider();
	/*autoplay();*/
	/*var timerId = setInterval(function() {
		alert(eee) ;
	}, 2000);*/


});