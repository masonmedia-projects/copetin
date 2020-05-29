// Official Website of Copetín Restaurant & Bar
// Design & Development by Mason Media
// andrewmasonmedia.com
// Copyright Copetín 2017


// Collapse mobile menu after clicking

    $('.navbar-collapse a:not(.dropdown-toggle)').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

//Change navbar color on scroll

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

  
// Smooth scroll

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, .btn, #myCarousel a, footer a[href='#myPage']").on('click', function(event) {

   // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
      });
    } // End if
  });
});


//Scroll to top button 


$(document).ready(function(){
	
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 100) {
			$('.scrollToTop').fadeIn();
		} else {
			$('.scrollToTop').fadeOut();
		}
	});
	
	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});
	
});




//carousel fade js
$('.carousel').carousel({
		interval: 3000
	})



