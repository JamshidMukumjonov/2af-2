$(document).ready(function(){
	  $("#go__top").on('click', function(event) {
	    if (this.hash !== "") {
	      event.preventDefault();
	      var hash = this.hash;
	      $('html, body').animate({
	        scrollTop: $(hash).offset().top
	      }, 7500, function(){
	        window.location.hash = hash;
	      });
	    }
	  });
	});