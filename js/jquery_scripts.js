$(function(){
	var carouselList = $("#carousel .slides-list");
	var i = 0;
	var slideChangeInterval = setInterval(changeSlideRight, 1000);
	var carouselCondition = document.getElementsByClassName('slide-instance').length;
	
	console.log(carouselCondition);
	
	function changeSlideRight () {
		var $first = $('#carousel .slides-list li:first');
		$first.animate({ 'margin-left': '-400px' }, 300, function() {
			$first.remove().css({ 'margin-left': '0' });
			$('#carousel .slides-list li:last').after($first);
		});
		if (i === (carouselCondition - 2)) {
			clearInterval(slideChangeInterval);
			slideChangeInterval = setInterval(changeSlideLeft, 1000);
			return;
		}
		i++;
	}
	
	function changeSlideLeft () {
		var $last = $('#carousel .slides-list li:last');
		$last.remove().css({ 'margin-left': '-400px' });
		$('#carousel .slides-list li:first').before($last);
		$last.animate({ 'margin-left': '0' }, 300);
    if (i === 0) {
			clearInterval(slideChangeInterval);
			slideChangeInterval = setInterval(changeSlideRight, 1000);
			return;
		}
		i--;
	}
	  
	$('#move-left').on('click', function(){
		var $last = $('#carousel .slides-list li:last');
		$last.remove().css({ 'margin-left': '-400px' });
		$('#carousel .slides-list li:first').before($last);
		$last.animate({ 'margin-left': '0' }, 100);
	});

	$('#move-right').on('click', function(){
		var $first = $('#carousel .slides-list li:first');
		$first.animate({ 'margin-left': '-400px' }, 100, function() {
			$first.remove().css({ 'margin-left': '0' });
			$('#carousel .slides-list li:last').after($first);
		});
	});
});
