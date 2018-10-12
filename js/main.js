"use strict";

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
});

/*Start block mobile_menu*/

$(document).ready(function() {
	var $nav = $('a.main-nav-bar');
	$nav.click(function() {
		$('.overlay-nav').show('slow');
	})
	$('.close-nav').click(function() {
		$('.overlay-nav').hide('slow');
	})

});

jQuery(document).ready(function(){

	$(".button").hover(function() {
		$(this).find("p").slideToggle(600);
	});

	// $('.contact-form button').on('click', function(){
	// 	var email = $('.contact-form input[name="email"]').val();
	// 	var subject = $('.contact-form input[name="subject"]').val();

	// 	email = email.toLowerCase();                            
 //        var regMail=/^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

 //        if (!regMail.test(email) || email=='' ){
	// 			$('.contact-form input[name="email"]').addClass('error');
 //    		return false;
 //    	}
 //    	if (subject.length < 4){
	// 			$('.contact-form input[name="subject"]').addClass('error');
 //    		return false;
	// 		}

	// 		$('#contact_1').on('submit', function(e){
	// 			e.preventDefault();
	// 		})
		
	// 		formemail = $('.contact-form input[name="email"]').val();
	// 		formsubject = $('.contact-form input[name="subject"]').val();
	// 		formmessage = $('.contact-form textarea[name="message"]').val();

 //    	$('.contact-form input[name="email"]').val('');
 //    	$('.contact-form input[name="subject"]').val('');
	// 		$('.contact-form textarea[name="message"]').val('');
			
	// 		$.ajax({
	// 			method:"post",
	// 			url:"/sender.php",
	// 			data:{
	// 				email: formemail,
	// 				subject: formsubject,
	// 				message: formmessage
	// 			},
	// 			success: function(r){
	// 				console.log(r);
	// 			}
	// 		});
	// });
	// var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
	// if(pattern.test($(this).val())){
	// 	$('#valid').text('Верно');
	// } else {
	// 	$('#valid').text('Не верно');
	// }

});	
/*Finish block mobile_menu*/


/*select*/

(function() {
	[].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {	
		new SelectFx(el);
	} );
})();