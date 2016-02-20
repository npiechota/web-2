$(document).ready(function(){

	var navOpen = $('.top-navigation');
	var navOpenWrap = $('.main-wrapper');
	var navOpenBody = $('body');
	$('.burger').on('click', function(){
		navOpen.toggleClass('menu-show');
		navOpenWrap.toggleClass('menu-show');
		navOpenBody.toggleClass('menu-show');
	});

	$('.video-show , .close-video-show').on('click', function(e){
		e.preventDefault();
		$('.video-page').toggleClass('visibility-show');
	});

	$('.video-show').on('click', function(e) {
		$('#my-video')[0].src += "&autoplay=1";
		e.preventDefault();
	});

});