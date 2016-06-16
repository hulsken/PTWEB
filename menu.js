$( document ).ready(function() {
  var secondaryNav = $('.header-nav'),
  	secondaryNavTopPosition = secondaryNav.offset().top;

  $(window).on('scroll', function(){

  	if($(window).scrollTop() > secondaryNavTopPosition ) {
  		secondaryNav.addClass('fixed');
  	} else {
  		secondaryNav.removeClass('fixed');
  	}
  });
});