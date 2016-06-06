$(function() {
    $('.zakas').click(function(){
        var block = $(this).parents('.popup_success4');
        block.find('.zakas2').show();
        block.find('.zakas1').hide();
    });

    $('.anketa').click(function(){
        var block = $(this).parents('.popup_success4');
        block.find('.zakas3').show();
        block.find('.zakas2').hide();
    });

    $('.note5_left_cl').click(function(){
        var block = $(this).parents('.note5_left');
        block.find('.note5_foto_left').show();
    });

    $('.note5_richt_cl').click(function(){
        var block = $(this).parents('.note5_richt');
        block.find('.note5_foto_richt').show();
    });

    $('.submit').click(function(){
        var block = $(this).parents('.popup_success2');
        block.find('.regulations2').show();
        block.find('.regulations1').hide();
    });



   });// Empty JS for your own code to be here