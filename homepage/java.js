$(document).ready(function() {
	$('.menu_button').click(function(event){
		$('.menu_button, .dropdown, .menu_text, .dropdown2').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.opisanie, .op1, .op2').click(function(event){
		$('.opisanie, .op1, .op2, .dropmenu1').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.opisanie2, .op3, .op4').click(function(event){
		$('.opisanie2, .op3, .op4, .dropmenu2').toggleClass('active');
	});
});

$(document).ready(function() {
	$('.afi1_button, .afi2_button, .afi3_button, .afi4_button').click(function(event){
		$('.float_menu, .float_menu_block').toggleClass('active');
	});
});
$(document).ready(function() {
	$('.float_menu').click(function(event){
		$('.float_menu, .float_menu_block').removeClass('active');
	});
});
$(document).ready(function() {
	$('.no').click(function(event){
		$('.float_menu, .float_menu_block').removeClass('active');
	});
});

$(document).ready(function() {
	$('.navi1').click(function(event){
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active2');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active3');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active4');
		$('.navi1, .navi2, .navi3, .navi4').toggleClass('active1');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').toggleClass('play1');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play2');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play3');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play4');
	});
});
$(document).ready(function() {
	$('.navi2').click(function(event){
		$('.navi1, .navi2, .navi3, .navi4').toggleClass('active2');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active1');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active3');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active4');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').toggleClass('play2');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play1');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play3');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play4');
	});
});
$(document).ready(function() {
	$('.navi3').click(function(event){
		$('.navi1, .navi2, .navi3, .navi4').toggleClass('active3');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active2');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active1');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active4');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').toggleClass('play3');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play2');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play1');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play4');
	});
});
$(document).ready(function() {
	$('.navi4').click(function(event){
		$('.navi1, .navi2, .navi3, .navi4').toggleClass('active4');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active2');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active3');
		$('.navi1, .navi2, .navi3, .navi4').removeClass('active1');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').toggleClass('play4');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play2');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play3');
		$('.gallery_img1, .gallery_img2, .gallery_img3, .gallery_img4, .gallery_img5, .gallery_img6, .gallery_img7, .gallery_img8, .gallery_img9, .gallery_img10, .gallery_img11, .gallery_img14').removeClass('play1');
	});
});





document.addEventListener('DOMContentLoaded', () => {
	const text_zavod = document.querySelector('.text_zavod');
	const header  = document.querySelector('.dropdown');
	const scrollItems = document.querySelectorAll('.scroll-item');



	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /1.2) + window.scrollY;
		scrollItems.forEach (el => {
			let  scrollOffset = el.offsetTop + (el.offsetHeight / 4) ;
			if (windowCenter >= scrollOffset) {
				el.classList.add('on');
			} else  {el.classList.remove('on');}
			
		});
	};


	const headerFixed = () => {
		let scrollTop = window.scrollY
		let text_zavodCenter = text_zavod.offsetHeight / 2;
		


		if (scrollTop >= text_zavodCenter) {
			header.classList.add('fixed')
		} else {
			header.classList.remove('fixed')
		}
	};

	headerFixed();
	scrollAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
	});
});




document.addEventListener('DOMContentLoaded', () => {
	const text_zavod = document.querySelector('.text_zavod');
	const header  = document.querySelector('.dropdown');
	const scrollItems = document.querySelectorAll('.scroll-block');



	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight /1.2) + window.scrollY;
		scrollItems.forEach (el => {
			let  scrollOffset = el.offsetTop + (el.offsetHeight / 4) ;
			if (windowCenter >= scrollOffset) {
				el.classList.add('play');
			} else  {el.classList.remove('play');}
			
		});
	};


	const headerFixed = () => {
		let scrollTop = window.scrollY
		let text_zavodCenter = text_zavod.offsetHeight / 2;
		


		if (scrollTop >= text_zavodCenter) {
			header.classList.add('fixed')
		} else {
			header.classList.remove('fixed')
		}
	};

	headerFixed();
	scrollAnimation();
	window.addEventListener('scroll', () => {
		headerFixed();
		scrollAnimation();
	});
});

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() >= 10) {
 
$('.up_button').fadeIn();
 
} else {
 
$('.up_button').fadeOut();
 
}
 
});
 
$('.up_button').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});