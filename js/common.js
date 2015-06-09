head.ready(function() {

	// mCustomScrollbar

	//$.mCustomScrollbar.defaults.scrollButtons.enable = false;
	$('.schools__list').mCustomScrollbar({
		axis: 'x',
		advanced:{ autoExpandHorizontalScroll:true,
		 scrollEasing: "linear"
		},
		mouseWheel:{ preventDefault: true },
		autoHideScrollbar: true
	});
	

	// horizontal sliders on main page
	function horSliderWidth() {
		var ww = $('.out').width(),
			w = 1366,
			width = 972;

			margin = (ww - w)/2;
			countWidth = width + margin +35;
			console.log(ww, width, countWidth);
			
			$('.js-hor-scroll').css({
				width: countWidth 
			});
	}
	horSliderWidth();

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
	    horSliderWidth();
	});
	// window scroll  event
	$(window).scroll(function(){
	    scrollFixedElements();
	});

});