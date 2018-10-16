+ function ($) {
    $('.switch').hover(function () {
        $(this).addClass('on');
        $('.cont',this).stop().slideDown();
    }, function () {
        $(this).removeClass('on');
        $('.cont',this).stop().slideUp();
    })
    $('.switch li').on('click',function(){
        $(this).parents('.cont').slideUp();
        $(this).parents('.switch').find('span').html($(this).html());
    })
}(jQuery);
