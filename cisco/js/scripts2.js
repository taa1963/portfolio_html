$(function() {
    $('.button').click(function(){
        var block = $(this).parents('.form_order_bloc1');
        return $('.form_order_bloc1 span').length;
        var n= 555555;
        var min_random = 1;
        var max_random = 9;

        max_random++;

        var range = max_random - min_random;
        var n=Math.floor(Math.random()*range) + min_random;

        return n;
        n='22222222';
        $('#n').text(n);

        block.find('.form_bloc2').hide();
    });


});


