$(function() {
    function checkboxCalculate() {
        return $('.form_order input:checked').length;
    }

    function displayCount() {
        var count = checkboxCalculate();




        if (count > 0) {

            $('.form_order_bloc1').show();

        } else {
            $('.form_order_bloc1').hide();

        }


        $('#count').text(count);
    }



      $('.form_order input[type=checkbox]').change(function () {
        displayCount();
    });

    $('.form_order .popup_1 h3').click(function() {

        var block = $(this).parents('.popup_1');
        var input = block.find('input[type=checkbox]');
        input.prop('checked', !input.prop("checked"));
        displayCount();
    });

    displayCount();

    $('.form_order .popup_2 h3').click(function() {

        var block = $(this).parents('.popup_2');
        var input = block.find('input[type=checkbox]');
        input.prop('checked', !input.prop("checked"));
        displayCount();
    });

    displayCount();

    $('.form_order .popup_1 b span').click(function() {

        var block = $(this).parents('.popup_1');
        var input = block.find('input[type=checkbox]');
        input.prop('checked', !input.prop("checked"));
        displayCount();
    });

    displayCount();

    $('.form_order .popup_2 b span').click(function() {

        var block = $(this).parents('.popup_2');
        var input = block.find('input[type=checkbox]');
        input.prop('checked', !input.prop("checked"));
        displayCount();
    });

    displayCount();

    //показываем popup по hash-у
    if (window.location.hash == '#success') {
        $('#popup_success').show();
    }

});