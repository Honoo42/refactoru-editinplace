$(document).on('ready', function() {
	var shift = function(){
		$('p').css('background-color','red');
	};
	$('p').on('mouseover',shift);
  
});