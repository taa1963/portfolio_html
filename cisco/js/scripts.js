$(function() {
    $('.button_add').click(function(){
        var block = $(this).parents('.partner');
        block.find('.form_add').show();

    });


    $('.button_gen').click(function() {
        var block = $(this).parents('.form_add');

        var num = 22222222222;
        var min_random = 1;
        var max_random = 9999999999;

        max_random++;

        var range = max_random - min_random;
        var num=Math.floor(Math.random()*range) + min_random;
        var num1= "http://192.168.99.100:8080/index.php&ref-"+num;

         $('#num1').text(num1);
        block.find('.add_ref').show();
    });


    $('.button_clos').click(function(){
        var block = $(this).parents('.partner');
        block.find('.form_add').hide();

    });



});
