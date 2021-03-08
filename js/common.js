$(function(){
    $('.container').css('min-height', $(window).height() - $('.topWrap').outerHeight() - $('.footer').outerHeight());

    $('.sitemapClose').click(function(){
       $('.sitemap').hide();
    })
})
