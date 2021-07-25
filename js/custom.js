$(function(){
// back-to-top
$('.back-to-top').click(function(){
    $('html,body').animate({scrollTop:0}, 1000);
});

$(window).scroll(function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 200){
        $('.back-to-top').fadeIn(500);
    }
    else {
        $('.back-to-top').fadeOut(500);
    }
    if(scrolling > 150) {
        $('.nav').addClass('addnav');
    }
    else {
        $('.nav').removeClass('addnav');
    }

});

$(window).on('load',function(){
    $('.preloader').delay(1000).fadeOut(500)
});

// counter part
$('.counter').counterUp({
    delay: 10,
    time: 3500
});



});