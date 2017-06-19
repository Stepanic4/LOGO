
$(document).ready(function() {

	$('.tabs-controls li').click(function() {

		if (!$(this).hasClass('active')) {

			var currentIndex = $(this).index();

			$(this).siblings().removeClass('active');
			$(this).addClass('active');

			$(this).parent().siblings('.tabs-items').find('li').slideUp(0);
			$(this).parent().siblings('.tabs-items').find('li').eq(currentIndex).slideDown(0);

		}

	});

});


$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	e.preventDefault();

	var target = this.hash,
	$target = $(target);

	$('html, body').stop().animate({
		'scrollTop': $target.offset().top
	}, 700, 'swing', function () {
		window.location.hash = target;
	});
});


