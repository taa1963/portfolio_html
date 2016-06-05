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


   });// Empty JS for your own code to be here