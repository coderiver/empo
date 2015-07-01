head.ready(function() {

	// img modal
	if ($('.image').length) {
		var elements = document.querySelectorAll( '.image' );
		Intense( elements );
	};	

	// hint

	$('.js-hint-btn').on('click', function() {
		if ($(this).hasClass('is-open')) {
			$(this).parents('.item').find('.js-hint').slideUp();
			$(this).text('View full biography').removeClass('is-open');
		}
		else {
			$(this).parents('.item').find('.js-hint').slideDown();
			$(this).text('Hide full biography').addClass('is-open');
		}
		return false;
	})

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
				innerState.text('+');
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
	

	// mCustomScrollbar

	$(window).load(function(){
		$('.js-hor-scroll').each(function() {
			$(this).mCustomScrollbar({
				axis: 'x',
				advanced:{ autoExpandHorizontalScroll:true
				},
				mouseWheel:{ preventDefault: true },
				callbacks: {
					onInit: function(){
						$('body').addClass('scroll-inited');
					}
				}
			});
		});
		
		function bodyScrollInit() {
			$('.desktop .body-scroll').mCustomScrollbar({
				theme:"dark-2",
				callbacks:{
					onInit: function() {
						$('.body-scroll').addClass('scroll-inited');
						if ($('.js-section').length) {
		    				$('.js-section').each(function() {
		    					var top = $(this).offset().top;
		    					$(this).attr('data-top', top);
		    	            });

		    			};
					},
				    whileScrolling: function(){
				    	var scroll = this.mcs.top;
				    	scrollPlus = scroll*-1;

				    	if (scrollPlus >= 600 && $('.js-fixed-share').length) {
				    		$('.js-fixed-share').addClass('is-fixed');
				    		console.log('start fixing');
				    	}
				    	else {
				    		$('.js-fixed-share').removeClass('is-fixed');
				    	};

				    	$('.js-section').each(function() {
	            			var currTop = $(this).data('top');
	            			var id = $(this).attr('id');
	            			if (scrollPlus >= (currTop - 1)) {
	            				$('.submenu a').removeClass('is-active');
	            				$('[href="#'+id+'"]').addClass('is-active');
	            			};
	                    });
				    }
				}
			});
		}
		if ($(window).width() > 1024) {
			bodyScrollInit();
		};
		            
	});

	function horScrMrg(){
		var viewportWidth = $(window).width(),
			pl = (viewportWidth - 56)/4;
		var minusPl = '-' + pl + 'px',
			schoolPl = (pl - 120) + 'px',
			eventPl = (pl + 31) + 'px';
		
		
		$('.js-hor-scroll').css('margin-left', minusPl);
		$('.school:first-child').css('margin-left', schoolPl);
		$('.event:first-child').css('margin-left', eventPl);
	}
	if ($('.js-hor-scroll').length) {
		horScrMrg();
	};
	

	
	$('.submenu a').on('click', function() {
		$('.submenu a').removeClass('is-active');
		$(this).addClass('is-active');

		// var index = $(this).parent().position().top;
		
		// $('.js-submenu-line').css({
		// 	'top': index 
		// });

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
	    	$('.breadcrumbs').css({
	    		left: -scroll_left + 83
	    	});
	    }
	    else {
	    	$(".header").css({
	    	    left: 0
	    	});
	    	$('.breadcrumbs').css({
	    		left: 83
	    	});
	    }
	}
	scrollFixedElements();

	// window resize event
	$(window).resize(function(){
	    if ($(window).width() <= 1024) {
	    	$('.body-scroll').mCustomScrollbar("destroy");
	    }
	    if ($('.js-hor-scroll').length) {
	    	horScrMrg();
	    };
	});
	// window scroll  event
	$(window).scroll(function(){
	    scrollFixedElements();
	});

});