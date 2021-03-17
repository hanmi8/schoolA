$(function(){
    $('a').click(function(e){
        if($(e.target).attr('href') === '#'){
            e.preventDefault()
        }
    })
    $('.container').css('min-height', $(window).height() - $('.topWrap').outerHeight() - $('.footer').outerHeight());

    if($(window).width() > 768){
        $('.gnb ul li a').click(function(){
            $('.topWrap').find('.sitemap').slideDown(200);
        })

        $(document).on('click',function(e){
            if(!$(e.target).hasClass('gnb') &&
                !$(e.target).parents().hasClass('gnb') &&
                !$(e.target).hasClass('sitemap') &&
                !$(e.target).parents().hasClass('sitemap')){
                $('.topWrap').find('.sitemap').slideUp(200);
            }
        })
    }else{
        $('.topWrap').append('<div class="gnbCall"><i class="fa fa-bars"></i></div>');
        $('.gnbCall').click(function(){
            $('.topWrap').find('.sitemap').addClass('on');
            $('.topWrap').find('.util').addClass('on');
            $('body').css('overflow','hidden');
        })

        $(document).on('click', function(e) {
            if (!$(e.target).hasClass('sitemap') && !$(e.target).parents().hasClass('sitemap') &&
                !$(e.target).hasClass('gnbCall') && !$(e.target).parents().hasClass('gnbCall')
            ) {
                $('.sitemap').removeClass('on');
            }
            if (!$(e.target).hasClass('sitemap') && !$(e.target).parents().hasClass('sitemap') &&
                !$(e.target).hasClass('gnbCall') && !$(e.target).parents().hasClass('gnbCall') &&
                !$(e.target).hasClass('util') && !$(e.target).parents().hasClass('util')
            ) {
                $('.util').removeClass('on');
            }
        });
        $('.topWrap').find('.sitemap').css('height', $(window).height() - 110)
    }
    $('.gnb').find('a').click(function(e){
        e.preventDefault();
        $('.sitemap').slideDown(200);
    })
    $('.sitemapClose').click(function(){
        $('.topWrap').find('.sitemap').slideUp(200);
    })

    $('.tabs').find('a').click(function(e){
        e.preventDefault();
        $(this).parent('li').siblings().removeClass('on');
        $(this).parent('li').addClass('on');
        $('.tab-contents').removeClass('on');
        var tabID = $(this).attr('href');
        // console.log(tabID);
        $(tabID).addClass('on');
    });

    // $(window).on("wheel", function (e){
    //     var windowScrollTop = $(window).scrollTop()
    //     if (e.originalEvent.deltaY < 0) {
    //         console.log('scroll up')
    //         console.log($(window).scrollTop());
    //         if(windowScrollTop > 500) {
    //             console.log()
    //         }
    //     }else {
    //         console.log('scroll down')
    //         console.log($(window).scrollTop());
    //     }
    // });

    $('.dropdown').children('strong').click(function(){
        $(this).parent('.dropdown').siblings('.dropdown').children('.dropdown-menu').slideUp(200);
        $(this).parent().children('.dropdown-menu').slideToggle(200);
    });
    $(document).on('click', function(e){
        if(!$(e.target).hasClass('dropdown') && !$(e.target).parents().hasClass('dropdown')) {
            $('.dropdown-menu').slideUp(200);
        }

    })

    $('.faq').children('li').click(function(){
        $(this).find('i.angle').toggleClass('fa-angle-down fa-angle-up');
        $(this).children('.answer').slideToggle(200);
    })

    $('body').append('<div class="toTop"><i class="fas fa-chevron-up"></i><span>TOP</span></div>');
    $('.toTop').click(function(){
        $('html, body').animate({scrollTop:0},400);
        return false;
    });
    $(window).scroll(function () {
        console.log('scrollTop : ' + $(window).scrollTop())
        if ($(this).scrollTop() > 50) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
        if($(this).scrollTop() > 333){
            $('.indicator').children('a').css('color', '#000');
        }else{
            $('.indicator').children('a').css('color', '');
        }

        $('.mapFindWrap').find('li').each( function(i){
            var bottom_of_element = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_element ){
                $(this).delay(i*500).animate({'top':'0','opacity':'1'}, 300)
            }

        });
    });

    $('.modalCall').click(function(){
        var modalID = $(this).attr('name');
        $('body').css('overflow', 'hidden');
        $('#' + modalID).show();
        // if($(window).height() < 768) {
        // }
        $('#' + modalID + ' .modal-body').css('max-height',
            $(window).height()
            - $('#' + modalID + ' .modal-header').outerHeight()
            // - $('#' + modalID + ' .modal-footer').outerHeight()
            - 200);
    })
    $('.modal-close').click(function(){
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })

    $('.mapList').find('a').mouseenter(function(){
        var badgeId = $(this).attr('name');
        $('#' + badgeId).css('background', '#000');
        $('.'+ badgeId).show();
    })
    $('.mapList').find('a').mouseleave(function(){
        $('.elementPosition').children('li').css('background', '')
        $('.schoolInfoSummary').hide();
    })

    $('.indicator').children('a').click(function(){
        if($(this).attr('href') === '#search'){
            $('html, body').animate({scrollTop:0},400);
        }else if($(this).attr('href') === '#board'){
            $('html, body').animate({scrollTop:720},400);
        }else if($(this).attr('href') === '#map'){
            $('html, body').animate({scrollTop:1670},400);
        }else if($(this).attr('href') === '#bell'){
            $('html, body').animate({scrollTop:2596},400);
        }else if($(this).attr('href') === '#sitemap'){
            $('html, body').animate({scrollTop:3458},400);
        }
    })

})
