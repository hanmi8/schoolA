$(function(){
    $('.container').css('min-height', $(window).height() - $('.topWrap').outerHeight() - $('.footer').outerHeight());

    $('.hamburger').click(function(){
        console.log('click')
        $(this).toggleClass('on');
        $('.sitemap').slideToggle(200);
    })
})
