(function() {

    $('.form_order_bloc1 button').click(function() {
        return $('.form_order_bloc1 span').length;
        var n;
        var min_random = 1;
        var max_random = 9;

        max_random++;

        var range = max_random - min_random;
        var n=Math.floor(Math.random()*range) + min_random;

        return n;
        n='22222222';
        $('#n').text(n);

    });

    $('.form_order_bloc1 span').click(function() {








    });

    $('.form_order_bloc1 h2').click(function() {
               n=333333333;

    });




});
