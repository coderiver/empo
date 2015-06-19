head.ready(function() {

	// js-fixed-share

	function fixedShare() {
		var scroll = $('.body').scrollTop();
		console.log(scroll);	
	}
	if ($('.js-fixed-share').length) {
		fixedShare();
	};

	// slider slider

	$('.js-slick').on('init', function(event, slick){
		$('.slick-slide.slick-active').addClass('is-animated');
	});
	$('.js-slick').slick({
		infinite: false,
		slideToShow: 1
	});
	$('.js-slick .slick-list').append('<div class="slider__prev"></div>');
	$('.js-slick .slick-list').append('<div class="slider__next"></div>');
	$('.slider__prev').on('click', function() {
		$('.js-slick').slick('slickPrev');
	});
	$('.slider__next').on('click', function() {
		$('.js-slick').slick('slickNext');
	});

	// input animation

	$('.js-input').on('change', function() {
		if ($(this).val().length) {
			$(this).addClass('filled');
		}
		else {
			$(this).removeClass('filled');
		}
	}) 

	// module accordeon

	function accordeon() {
		var item = $('.js-module'),
			btn = item.find('.module__title'),
			content = item.find('.module__details'),
			state = item.find('.module__state');

		btn.on('click', function() {
			var block = $(this).parents('.js-module'),
				inner = block.find('.module__details'),
				innerState = block.find('.module__state');

			if (block.hasClass('is-active')) {
				block.removeClass('is-active');
				inner.slideUp();
				innerState.text('-');
			}
			else {
				item.removeClass('is-active');
				content.slideUp();
				state.text('+');

				block.addClass('is-active');
				inner.slideDown();
				innerState.text('-');
			}
		})	
	}
	accordeon();
	

	// subnav line animation

	// mCustomScrollbar
	$(window).load(function(){
		$('.js-hor-scroll').each(function() {
			$(this).mCustomScrollbar({
				axis: 'x',
				advanced:{ autoExpandHorizontalScroll:true
				},
				mouseWheel:{ preventDefault: true }
			});
		});
		$('.body-scroll').mCustomScrollbar({
			theme:"dark-2",
			callbacks:{
			    whileScrolling: function(){
			    	var scroll = $(this).find('#mCSB_1_container').css('top');
			    	scroll = parseInt(scroll);
			    	scroll = scroll*-1;
			    	console.log(scroll);
			    	if (scroll >= 600 && $('.js-fixed-share').length) {
			    		$('.js-fixed-share').addClass('is-fixed');
			    	}
			    	else {
			    		$('.js-fixed-share').removeClass('is-fixed');
			    	}
			    }
			}
		});
		            
	});

	$('.submenu a').on('click', function() {
		$('.submenu a').removeClass('is-active');
		$(this).addClass('is-active');

		var index = $(this).parent().position().top;
		
		$('.js-submenu-line').css({
			'top': index 
		});

		var link = $(this).attr('href');

		$('.body-scroll').mCustomScrollbar("scrollTo", ''+link+'',{
    		scrollInertia:500
		});
	  	
	  	return false;

	});

	// scrolling fixed elements
	function scrollFixedElements() {
	    var scroll_left = $(this).scrollLeft();
	    if (scroll_left > 0) {
	    	$(".header").css({
	    	    left: -scroll_left
	    	});
	    	$('.logo').css({
	    		left: -scroll_left + 56
	    	});
	    }
	    else {
	    	$(".header").css({
	    	    left: 0
	    	});
	    	$('.logo').css({
	    		left: 56
	    	});
	    }
	}
	scrollFixedElements();

	// window resize event
	$(window).resize(function(){
	    
	});
	// window scroll  event
	$(window).scroll(function(){
	    scrollFixedElements();
	    if ($('.js-fixed-share').length) {
	    	fixedShare();
	    };
	});

});