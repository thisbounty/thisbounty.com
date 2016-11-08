var i=0;

slide_scroll_hide();

$("body").on('click', '#nextSlide', function() {
  i++;
  if(i == $('.slide').length) {
    $('.slide.active').removeClass('active').removeClass('out');
    $($('.slide')[0]).addClass('active');
    slide_scroll_hide();
    i=0;
  }
  else{
    $('.slide.active').addClass('out').next('.slide').addClass('active');
    slide_scroll_hide();
  }
  return false;
});

function slide_scroll_hide() {
    //needed for scrollable div
    $('.visible').removeClass('visible');
    $('.invisible').removeClass('invisible');
    $('.slide').addClass('invisible');
    $('.slide.active').addClass('visible').removeClass('invisible');

}
