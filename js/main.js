$(document).ready(function(){
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
	      breakpoint: 1020,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
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
});

/*select*/

(function() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})();