//CAROUSEL

$(document).ready(function(){
  $('.carousel_inner').slick({
    adaptiveHeight: true,
    speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/right.svg"></button>',
  });
});

// HAMBURGER MENU
window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.main_top_menu'),
  menuItem = document.querySelectorAll('.main_top_menu_item'),
  hamburger = document.querySelector('.main_top_hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('main_top_hamburger_active');
      menu.classList.toggle('main_top_menu_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('main_top_hamburger_active');
          menu.classList.toggle('main_top_menu_active');
      })
  })
})

// PAGEUP

$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
  } else {
      $('.pageup').fadeOut();
  }
});

$("a[href=#up]").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});

// MODAL

$('[data-modal=consultation]').on('click', function() {
  $('.overlay, #consultation').fadeIn('slow');
});
$('[data-modal=modal__sea]').on('click', function() {
  $('.overlay, #modal__sea').fadeIn('slow');
});
$('[data-modal=modal__train]').on('click', function() {
  $('.overlay, #modal__train').fadeIn('slow');
});
$('[data-modal=modal__auto]').on('click', function() {
  $('.overlay, #modal__auto').fadeIn('slow');
});
$('[data-modal=modal__air]').on('click', function() {
  $('.overlay, #modal__air').fadeIn('slow');
});
$('.modal__close').on('click', function() {
  $('.overlay, #consultation, #thanks, #modal__sea, #modal__train, #modal__auto, #modal__air').fadeOut('slow');
});

$('form').submit(function(e) {
  e.preventDefault();
  $.ajax({
      type: "POST",
      url: "mailer/smart.php",
      data: $(this).serialize()
  }).done(function() {
      $(this).find("input").val("");
      $('#consultation').fadeOut();
      $('.overlay, #thanks').fadeIn('slow');

      $('form').trigger('reset');
  });
  return false;
})

$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

//ANIMATIONS
new WOW().init();