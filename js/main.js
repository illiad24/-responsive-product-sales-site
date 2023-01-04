(function() {
	const menu = document.querySelector('.header__menu')
	const burger = document.querySelector('.burger')
	const menuCloseItem = document.querySelector('.header__nav-close')
	burger.addEventListener('click', () =>{
		menu.classList.add('header__menu_active')
	});
	menuCloseItem.addEventListener('click', () =>{
		menu.classList.remove('header__menu_active')
	})
}())

$(document).ready(function(){
	$('.slider').slick({
		arrows:false,
		touchThreshold:10,
		dots: true,
		centerMode: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1
	});
});


$('.slider').slick({
  slidesToShow: 3,
  dots:true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
      	dots: true,
        arrows: false,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
      	dots: true,
        arrows: false,
        slidesToShow: 1
      }
    }
  ]
});

