/* ==============================================
========== Navigation Scroll Effect =============
=============================================== */


$(document).ready(function () {
	'use strict';

    var menu = $('#navigation');
	        var y = $(this).scrollTop();

        if (y >=-100) {
            menu.removeClass('not-visible-nav').addClass('visible-nav');
		}

});

/* ==============================================
Mobile Menu Button
=============================================== */	

$('.mini-nav-button').click(function() {
    $(".nav-menu").slideToggle("9000");
 });

$('.nav a').click(function () {
	if ($(window).width() < 970) {
    	$(".nav-menu").slideToggle("2000")}
	
});

