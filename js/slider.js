var i=0;
$("body").on('click', '#nextSlide', function() {
  i++;
  if(i == $('.slide').length) {
    $('.slide.active').removeClass('active out');
    $($('.slide')[0]).addClass('active');
    i=0;
  }
  else{
    $('.slide.active').addClass('out').next('.slide').addClass('active');
  }
});
