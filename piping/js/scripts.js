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

        var disk;
        if (count > 0) {disk = 'диск'
            $('#disk').text(disk);
        }

            if (count > 1) {
                disk = 'диска'
                $('#disk').text(disk);

            }
        if (count > 4) {
            disk = 'дисков'
            $('#disk').text(disk);

        }


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



    if (window.location.hash == '#success') {
        $('#popup_success').show();
    }

    if (window.location.hash == '#success2') {
        $('#popup_success2').show();
    }

    $(document).ready(function(){
       $("#buy_button").on("click","a", function (event) {
         //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
         //забираем идентификатор бока с атрибута href
         var id  = $(this).attr('href'),
         //узнаем высоту от начала страницы до блока на который ссылается якорь
          top = $(id).offset().top;
           //анимируем переход на расстояние - top за 1500 мс
          $('body,html').animate({scrollTop: top}, 1500);

        });

    });

    $(document).ready(function(){
        $("#header_block_button").on("click","a", function (event) {
            //отменяем стандартную обработку нажатия по ссылке
            event.preventDefault();
            //забираем идентификатор бока с атрибута href
            var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                top = $(id).offset().top;
            //анимируем переход на расстояние - top за 1500 мс
            $('body,html').animate({scrollTop: top}, 3500);

        });

    });







});