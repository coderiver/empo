head.ready(function() {

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