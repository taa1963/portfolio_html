// Empty JS for your own code to be here

$(function() {
    $('.button_hide').click(function(){
        var block = $(this).parents('.slide_one_text1');
        block.find('.slide_one_text_inc').show();
        block.find('.slide_one_text_full').hide();
    });


    $('.button_show').click(function(){
        var block = $(this).parents('.slide_one_text1');
        block.find('.slide_one_text_inc').hide();
        block.find('.slide_one_text_full').show();
    });


});