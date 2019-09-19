// preloader
$(window).on('load', function () {
	var $preloader = $('.preloader');
	$preloader.delay(0).fadeOut('slow');
});

$(document).ready(function(){
	// clone portfolio
	$('.portfolio .portfolio__slider-text, .film_page .portfolio__slider-text').each(function() {
		$(this).clone().addClass('text_visible').appendTo($(this).parent().parent());
	});
	$('.portfolio .portfolio__slider-list, .film_page .portfolio__slider-list').each(function() {
		$(this).clone().addClass('list_visible').appendTo($(this).parent().parent());
	});


	// menu responsive
	$('.header__toggle').click(function(){
		$(this).toggleClass('header__toggle_active');
		$('body').toggleClass('body_hidden');
		$('.header__nav').toggleClass('header__nav_visible');
		nav__header__item_visible();
	});


	// slick
	$('.portfolio__section-slider').slick({
		speed: 600,
	    focusOnSelect: true,
	    infinite: true,
		dots: true,
		centerMode: true,
		centerPadding: '0',
		appendDots: $('.portfolio__section-nav .slider-control__dots'),
		prevArrow: $('.portfolio__section-nav .slider-control__arrow_prev'),
		nextArrow: $('.portfolio__section-nav .slider-control__arrow_next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					fade: true
				}
			}
		]
	});


	$('.portfolio__page-slider').slick({
		adaptiveHeight: true,
		speed: 600,
	    focusOnSelect: true,
	    infinite: true,
		dots: true,
		centerMode: true,
		centerPadding: '0',
		appendDots: $('.portfolio__section-nav .slider-control__dots'),
		prevArrow: $('.portfolio__section-nav .slider-control__arrow_prev'),
		nextArrow: $('.portfolio__section-nav .slider-control__arrow_next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: true
				}
			},
			{
				breakpoint: 768,
				settings: {
					fade: true
				}
			}
		]
	});

	$('.awards__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		speed: 600,
	    infinite: true,
		dots: true,
		appendDots: $('.awards__slider-control .slider-control__dots'),
		prevArrow: $('.awards__slider-control .slider-control__arrow_prev'),
		nextArrow: $('.awards__slider-control .slider-control__arrow_next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: true,
					slidesToShow: 1,
					adaptiveHeight: true
				}
			}
		]
	});

	$('.press__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		speed: 600,
	    infinite: true,
		dots: true,
		adaptiveHeight: true,
		appendDots: $('.press__slider-control .slider-control__dots'),
		prevArrow: $('.press__slider-control .slider-control__arrow_prev'),
		nextArrow: $('.press__slider-control .slider-control__arrow_next'),
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: true
				}
			}
		]
	});

	$('.press__video-slider').slick({
		speed: 600,
	    focusOnSelect: true,
	    infinite: true,
		dots: true,
		appendDots: $('.press__video-nav .slider-control__dots'),
		prevArrow: $('.press__video-nav .slider-control__arrow_prev'),
		nextArrow: $('.press__video-nav .slider-control__arrow_next'),
		adaptiveHeight: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					fade: true
				}
			}
		]
	});


	// video showreel
	$('.js-video-button').modalVideo({
		youtube:{
			autoplay: true
		}
	});


	// padding for .about__content
	padding_left();
	padding_right();
	margin_left();
	margin_right();
	$(window).resize(function(){
		padding_left();
		padding_right();
		margin_left();
		margin_right();
	});

	// JS video

	$('.js-video__btn').click(function(){
		$(this).hide();
		$(this).siblings('div').find('iframe')[0].src += '?rel=0&autoplay=1';
	});
  
	// fancybox zoom
	$(function(){
		$('[data-fancybox]').fancybox();
	});
});


function nav__header__item_visible() {
	$('.nav__item').each(function(index){
		var self = this
		setTimeout(function () {
			$(self).toggleClass('nav__item_visible');
		}, index*200);
	});
};


// padding LEFT
function padding_left() {
	var site_width = $('.site__wrap').width();
	var c_width = $('.spacer__wrap-line').width();
	var c_width_2 = (site_width - c_width)/2;
	$('.js-space_padding_left').css('padding-left', c_width_2 + 15);
};

// padding RIGHT
function padding_right() {
	var site_width = $('.site__wrap').width();
	var c_width = $('.spacer__wrap-line').width();
	var c_width_2 = (site_width - c_width)/2;
	$('.js-space_padding_right').css('padding-right', c_width_2 + 15);
};

// margin LEFT
function margin_left() {
	var site_width = $('.site__wrap').width();
	var c_width = $('.spacer__wrap-line').width();
	var c_width_2 = (site_width - c_width)/2;
	var c_width_3 = c_width_2 + 15;
	var c_width_4 = -c_width_3;
	$('.js-space_margin_left').css('margin-left', c_width_4);
};

// margin RIGHT
function margin_right() {
	var site_width = $('.site__wrap').width();
	var c_width = $('.spacer__wrap-line').width();
	var c_width_2 = (site_width - c_width)/2;
	var c_width_3 = c_width_2 + 15;
	var c_width_4 = -c_width_3;
	$('.js-space_margin_right').css('margin-right', c_width_4);
};

// margin RIGHT
function margin_right() {
	var site_width = $('.site__wrap').width();
	var c_width = $('.spacer__wrap-line').width();
	var c_width_2 = (site_width - c_width)/2;
	var c_width_3 = c_width_2 + 15;
	var c_width_4 = -c_width_3;
	$('.js-space_margin_right').css('margin-right', c_width_4);
};


$('.main__scroll-link').on('click', function (event){
	event.preventDefault();
	var id = $(this).attr('href'),
	top_1 = $(id).offset().top,
	new__top_1 = top_1 + 8;
	$('body, html').animate({scrollTop: new__top_1}, 650);
});