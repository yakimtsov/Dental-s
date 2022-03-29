$('.splide__list').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 2,
    adaptiveHeight: true,
  });
  $('.reviews-sliders').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    adaptiveHeight: true,
  });
  $('#reviews').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.reviews').offset().top}, 1000)
    $('body input:checkbox').prop('checked', false);
})
$('#location').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop: $('.contacts').offset().top}, 1000)
    $('body input:checkbox').prop('checked', false);
})