+ function ($) {
    var index = 0;
    var cxSlideApi;

    $('#cxslide_x').cxSlide({
        auto: true,
        plus: true,
        minus: true
    }, function (api) {
        cxSlideApi = api;
    });

    $('.stop').click(function () {
        cxSlideApi.stop();
    });
    $('.minus,.plus').click(function () {
        cxSlideApi.play();
    });


    $('.switch').hover(function () {
        $(this).addClass('on');
        $('.cont', this).stop().slideDown();
    }, function () {
        $(this).removeClass('on');
        $('.cont', this).stop().slideUp();
    });

    $('.switch li').on('click', function () {
        $(this).parents('.cont').slideUp();
        $(this).parents('.switch').removeClass('on');
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
        $('.wx', this).stop().fadeIn();
    }, function () {
        $('.wx', this).stop().fadeOut();
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

    $('.hamburger').click(function () {
        var self = this;
        if ($(self).hasClass('is-active')) {
            $(self).removeClass('is-active');
            $(self).parents('.smenu').find('.sm-cont').stop().slideUp(function () {
                $(self).parents('.smenu').removeClass('active');
            });
        } else {
            $(self).addClass('is-active');
            $(self).parents('.smenu').addClass('active');
            $(self).parents('.smenu').find('.sm-cont').stop().slideDown();
        }
    });

    $('.sm-box li').click(function () {
        if (!$(this).hasClass('active')) {
            $('.smnav', this).stop().slideDown();
            $(this).siblings('li').find('.smnav').stop().slideUp();
            $(this).addClass('active').siblings().removeClass('active');
        }
    });
    
     $('.tabs li').click(function () {
         var i = $(this).index();
         if(!$(this).hasClass('active')){
             $(this).addClass('active').siblings().removeClass('active');
             $('.tb-cont list').eq(i).show().siblings().hide();
         }
     });
//
//    $('.tool a').on('mousedown', function (e) {
//        console.log(e);
//        var sx = e.pageX;
//        $(this).on('mousemove', function (e) {
//            if (Math.abs(e.pageX - sx) < 15) {
//                $(this).css("transform", "translateX(" + (e.pageX - sx) + "px)");
//            }
//        });
//        $(this).on('mouseup', function (e) {
//            $(this).css("transform", "translateX(0px)");
//        });
//    })
}(jQuery);
