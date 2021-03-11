$(function(){
    $('a').click(function(e){
        if($(e.target).attr('href') === '#'){
            e.preventDefault()
        }
    })
    $('.container').css('min-height', $(window).height() - $('.topWrap').outerHeight() - $('.footer').outerHeight());

    $('.gnb ul li a').click(function(){
        $('.topWrap').find('.sitemap').slideDown(200);
    })
    $(document).on('click',function(e){
        // console.log($(e.target).attr('class'));
    })
    $('.gnb').find('a').click(function(e){
        e.preventDefault();
        $('.sitemap').slideDown(200);
    })
    $('.sitemapClose').click(function(){
        $('.topWrap').find('.sitemap').slideUp(200);
    })
    $(document).on('click',function(e){
        if(!$(e.target).hasClass('gnb') &&
            !$(e.target).parents().hasClass('gnb') &&
            !$(e.target).hasClass('sitemap') &&
            !$(e.target).parents().hasClass('sitemap')){
            $('.topWrap').find('.sitemap').slideUp(200);
        }
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
        // console.log($(e.target).attr('class'));
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
        if ($(this).scrollTop() > 50) {
            $('.toTop').fadeIn();
        } else {
            $('.toTop').fadeOut();
        }
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
        console.log($('#' + modalID + ' .modal-body').height())
    })
    $('.modal-close').click(function(){
        $('body').css('overflow', '');
        $(this).parents('.modal').hide();
    })

    $('.mapList').find('a').mouseenter(function(){
        var badgeId = $(this).attr('name');
        console.log(badgeId)
        $(badgeId).css('background', '#000');
    })
    $('.mapList').find('a').mouseleave(function(){
        $('.elementPosition').children('li').css('background', '')
    })

})
