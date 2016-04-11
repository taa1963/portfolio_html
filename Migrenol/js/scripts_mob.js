$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide1_text');
        block.find('.slide_text_inc').show();
        block.find('.slide_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide1_text');
        block.find('.slide_text_inc').hide();
        block.find('.slide_text_full').show();
    });
});

$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide2_text');
        block.find('.slide2_text_inc').show();
        block.find('.slide2_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide2_text');
        block.find('.slide2_text_inc').hide();
        block.find('.slide2_text_full').show();
    });
});

$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide3_text');
        block.find('.slide3_text_inc').show();
        block.find('.slide3_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide3_text');
        block.find('.slide3_text_inc').hide();
        block.find('.slide3_text_full').show();
    });
});

$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide4_text');
        block.find('.slide4_text_inc').show();
        block.find('.slide4_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide4_text');
        block.find('.slide4_text_inc').hide();
        block.find('.slide4_text_full').show();
    });
});


