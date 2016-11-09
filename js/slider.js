var i=0;

slide_scroll_hide();

$("body").on('click', '#nextSlide', function() {
  i++;
  if(i == $('.slide').length) {
    $('.slide.active').removeClass('active');
    $($('.slide')[0]).addClass('active');
    i=0;
  } else {
    $('.slide.active').addClass('out');
    $('.slide.active').next('.slide').addClass('active');
    $('.slide.active.out').removeClass('active').removeClass('out');
  }
  slide_scroll_hide();
  return false;
});

function slide_scroll_hide() {
    //needed for scrollable div
    $('.visible').removeClass('visible');
    $('.invisible').removeClass('invisible');
    $('.slide').addClass('invisible');
    $('.slide.active').addClass('visible').removeClass('invisible');
}
