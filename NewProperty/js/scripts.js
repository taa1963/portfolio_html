$(function() {

    $('.header_richt_icon3').click(function(){
        var block = $(this).parents('.header_richt_menu');
        block.find('.header_menu').show();
    });

    $('.header_menu_close').click(function(){
        var block = $(this).parents('.header_richt_menu');
        block.find('.header_menu').hide();
    });

    $('.nav_op').click(function(){
        var block = $(this).parents('.nav');
        block.find('.nav2').show();
    });



    $('.close').click(function(){
        $('iframe').attr('src', $('iframe').attr('src'));
        $(parentWindow).remove();
    });

});