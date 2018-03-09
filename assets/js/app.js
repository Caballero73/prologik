// IR ARRIBA
// ======================
$('.ir-arriba').click(function(){
	$('body, html').animate({
		scrollTop: '0px'
	}, 1200);
})

$(window).scroll(function(){
	if( $(this).scrollTop() > 0 ){
		$('.ir-arriba').slideDown(200);
	} else {
		$('.ir-arriba').slideUp(200);
	}
});

var mywindow = $(window);
var position = mywindow.scrollTop();
var up = false;
var newscroll;
mywindow.scroll(function () {
  newscroll = mywindow.scrollTop();
  if (newscroll > position && !up) {
    $('#bottom_nav').css('bottom', -($('#bottom_nav').height() + 50) + 'px')
    up = !up;
  } else if(newscroll < position && up) {
    $('#bottom_nav').css('bottom', '0')
    up = !up;
  }
  position = newscroll;
});
