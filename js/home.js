+ function ($) {
    var index = 0;
    $('.switch').hover(function () {
        $(this).addClass('on');
        $('.cont', this).stop().slideDown();
    }, function () {
        $(this).removeClass('on');
        $('.cont', this).stop().slideUp();
    });
    
    $('.switch li').on('click', function () {
        $(this).parents('.cont').slideUp();
        $(this).parents('.switch').find('span').html($(this).html());
    });


    $('.menu li').hover(function () {
        index = $(this).index();
        $(this).addClass('on').siblings().removeClass('on').stop();
        $(this).parents('.menu').find('.snav').stop().slideDown();
    });

    $('.snav').hover(function () {}, function () {
        $(this).stop().slideUp("fast", function () {
            $(this).parents('.menu').find('li').eq(index).removeClass('on');
        });
    });
    
    $('.s5').hover(function () {
        $('.wx',this).stop().fadeIn();
    }, function () {
       $('.wx',this).stop().fadeOut();
    });

    var tabfix = false
    var tabfix_t = false
    $(window).scroll(function () {
        if ($(document).scrollTop() > 82) {
            tabfix_t = true
        } else {
            tabfix_t = false
        };
        if (tabfix_t !== tabfix) {
            if (tabfix_t == true) {
                $(".menu").addClass("menu_fix")
                tabfix = true;
            } else {
                $(".menu").removeClass("menu_fix")
                tabfix = false;
            };
        };
    });


}(jQuery);
