$(document).ready(function(){	

	$('.blue').click(talkToUser);

	function talkToUser(){
		event.preventDefault();
		alert("Not Implemented!");
		$('header').css("background-color","orange");
	}

	$(".readmore").click(showMore);

	function showMore(){
		event.preventDefault();
		$(".readmore").toggle();
		$("#show-this-on-click").slideDown(200);
		$(".readless").toggle();
	}

	$(".readless").click(showLess);

	function showLess(){
		event.preventDefault();
		$(".readless").toggle();
		$("#show-this-on-click").slideUp(200);
		$(".readmore").toggle();
	}
});