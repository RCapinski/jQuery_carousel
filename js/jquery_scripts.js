$(function(){
	var carouselList = $("#carousel .slides-list");
	var i = 0;
	var intervalId = setInterval(changeSlideRight, 1000);
	
	function changeSlideRight () {
		var $first = $('#carousel .slides-list li:first');
		$first.animate({ 'margin-left': '-400px' }, 300, function() {
			$first.remove().css({ 'margin-left': '0px' });
			$('#carousel .slides-list li:last').after($first);
		});
		if (i === 3) {
			clearInterval(intervalId);
			intervalId = setInterval(changeSlideLeft, 1000);
			return
		}
		i++;
	}
	
	function changeSlideLeft () {
		var $last = $('#carousel .slides-list li:last');
		$last.remove().css({ 'margin-left': '-400px' });
		$('#carousel .slides-list li:first').before($last);
		$last.animate({ 'margin-left': '0px' }, 300);
    if (i === 0) {
			clearInterval(intervalId);
			intervalId = setInterval(changeSlideRight, 1000);
			return
		}
		i--;
	}
	  
	$('#move-left').on('click', function(){
		var $last = $('#carousel .slides-list li:last');
		$last.remove().css({ 'margin-left': '-400px' });
		$('#carousel .slides-list li:first').before($last);
		$last.animate({ 'margin-left': '0px' }, 100);
	});

	$('#move-right').on('click', function(){
		var $first = $('#carousel .slides-list li:first');
		$first.animate({ 'margin-left': '-400px' }, 100, function() {
			$first.remove().css({ 'margin-left': '0px' });
			$('#carousel .slides-list li:last').after($first);
		});
	});
});
