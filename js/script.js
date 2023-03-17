// JavaScript Document


var headNav = $(".global-nav");
$(window).on('load scroll', function () {
  if ($(this).scrollTop() > 200 && headNav.hasClass('is-fixed') == false) {
    headNav.css("display", "block");
    headNav.css({ "top": '-72px' });
    headNav.addClass('is-fixed');
    headNav.animate({ "top": 0 }, 600);
  }
  else if ($(this).scrollTop() < 200 && headNav.hasClass('is-fixed') == true) {
    headNav.removeClass('is-fixed');
    headNav.animate({ "top": "-72px" }, 600);
    headNav.css("display", "none");
  }
});


$('.fade-right').on('inview', function () {
  $(this).addClass('fade-in');
});

$('.fade-left').on('inview', function () {
  $(this).addClass('fade-in');
});

$('.fade').on('inview', function () {
  $(this).addClass('fade-in2');
});


$('.button').on('click', function () {
  $('.popup').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup').fadeOut();
});


$('.button2').on('click', function () {
  $('.popup2').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup2').fadeOut();
});

$('.button3').on('click', function () {
  $('.popup3').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup3').fadeOut();
});

$('.button4').on('click', function () {
  $('.popup4').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup4').fadeOut();
});

$('.button5').on('click', function () {
  $('.popup5').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup5').fadeOut();
});

$('.button6').on('click', function () {
  $('.popup6').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup6').fadeOut();
});

$('.button7').on('click', function () {
  $('.popup7').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup7').fadeOut();
});

$('.button8').on('click', function () {
  $('.popup8').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup8').fadeOut();
});

$('.button9').on('click', function () {
  $('.popup9').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup9').fadeOut();
});

$('.button10').on('click', function () {
  $('.popup10').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup10').fadeOut();
});

$('.button11').on('click', function () {
  $('.popup11').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup11').fadeOut();
});

$('.button12').on('click', function () {
  $('.popup12').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup12').fadeOut();
});

$('.button13').on('click', function () {
  $('.popup13').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup13').fadeOut();
});

$('.button14').on('click', function () {
  $('.popup14').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup14').fadeOut();
});

$('.button15').on('click', function () {
  $('.popup15').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup15').fadeOut();
});

$('.button16').on('click', function () {
  $('.popup16').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup16').fadeOut();
});

$('.button17').on('click', function () {
  $('.popup17').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup17').fadeOut();
});

$('.button18').on('click', function () {
  $('.popup18').addClass('show').fadeIn();
});

$('.close').on('click', function () {
  $('.popup18').fadeOut();
});









