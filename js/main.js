"use strict";


$(document).ready(function(){
	/*Start settings for sliders*/

	/*Start settings for slider in the section Why_us*/

	$('.why_us-slider').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 2,
	    arrows: true,
	    prevArrow: '<i class="fa why_us-slider-arrows arrow-left fa-chevron-left"></i>',
	    nextArrow: '<i class="fa why_us-slider-arrows arrow-right fa-chevron-right"></i>',
	    dots: false,
	    responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  	]
	});

	/*Start settings for slider in the section Why_us*/

	/*Finish settings for sliders*/
	
	/*Start block mobile_menu*/

	var $nav = $('a.main-nav-bar');
	$nav.click(function() {
		$('.overlay-nav').show('slow');
	})
	$('.close-nav').click(function() {
		$('.overlay-nav').hide('slow');
	})

	/*Finish block mobile_menu*/

	/*Start settings for hover effect in the Main section*/

	$(".button").hover(function() {
		$(this).find("p")
		.stop(true)
		.queue('fx', 
          function(){
            $(this)
             .slideToggle({
				duration: 600,
		 	})
             .dequeue('fx');
        });
	});

	/*Finish settings for hover effect in the Main section*/

	/* Start settings for select*/

	(function() {
		[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
			new SelectFx(el);
		} );
	})();

	/* Finish settings for select*/

});