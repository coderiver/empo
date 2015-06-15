head.ready(function() {

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

	$('.submenu a').on('click', function() {
		$('.submenu a').removeClass('is-active');
		$(this).addClass('is-active');

		var index = $(this).parent().position().top;
		
		$('.js-submenu-line').css({
			'top': index 
		})

	})

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
		$('body').mCustomScrollbar({
			theme:"dark-2",
			scrollInertia: false,
			mouseWheel:{ scrollAmount: 120 }
		});
		            
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
	});

});