var Mob,TupeSVspan,ColorSVspan, Nok, ZVspan,Rok,Hs,Ls,ZsetkaVuv,colorvsp, priceV;

Mob=1;
TupeSVspan='';
ColorSVspan='';
colorvsp='Белый';
ZVspan='';
Nok=0;
Rok='';
Hs=0;
Ls=0;
ZsetkaVuv=0;
priceV=0;
$(document).ready(function() {

    $("#teldev").mask("+7(999)999-99-99");
    $("#tel2_dev").mask("+7(999)999-99-99");
    $("#tel").mask("+7(999)999-99-99");
    $("#tel2").mask("+7(999)999-99-99");





    $('#ralc').on('input', function() {
        $(this).val($(this).val().replace(/\,/g));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });


    //====Открытие закрытие блоков в обычной верстке=====//
    $('#but_block1').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').show();
    });

    $('#but_block2_1').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').show();
        block.find('.call_titel').show();
        block.find('.call_block2').hide();
    });

    $('#but_block2_2').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').show();
    });



    $('#but_zakaz').click(function () {
        Hs=document.getElementById('Hokn').value;
        Ls=document.getElementById('Lokn').value;
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').show();
        Mob=1;
        Nok=Nok+1;
        var NN=Nok+1;
        $('#number').text(NN);
        zena();
    });


    $('#spez_zamer_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_samer1').show();
    });
    //spez_zamer_dev

    $('#but_block_nes1').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').show();
        block.find('.call_titel').show();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
    });

    $('#but_block_nes2').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').show();
        block.find('.call_block4').hide();
    });

    $('#but_block_setka1').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').show();
    });

    $('#but_block_setka2').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block4').show();
    });





    $('#but_block_zamer1dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').show();
    });

    $('#but_block4_2dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').show();
    });

    $('#but_block5_1_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').show();
        block.find('.call_block_sam_dev').hide();
    });

    $('#but_block5_2_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').hide();
        block.find('.call_block_itog_dev').show();

    });

    $('#but_block6_1_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').show();
        block.find('.call_block_itog_dev').hide();

    });

    // $('#but_block6_2_dev').click(function () {
    //     //var block = $(this).parents('.container');
    //     //block.find('.call_block1').hide();
    //     //block.find('.call_titel').hide();
    //     //block.find('.call_block2').hide();
    //     //block.find('.call_block3').hide();
    //     //block.find('.call_block_nes').hide();
    //     //block.find('.call_block_setka').hide();
    //     //block.find('.call_block_samer1').hide();
    //     //block.find('.call_block_samer2').hide();
    //     //block.find('.call_block4').hide();
    //     //block.find('.call_block_sam_dev').hide();
    //     //block.find('.call_block_itog_dev').hide();
    //     //block.find('.call_block_QR_dev').show();
    //
    //     sendAjaxForm('result_form', 'form2', 'send2.php');
    //     return false;
    //
    //
    //     //function sendAjaxForm(result_form, ajax_form, url) {
    //     //    $.ajax({
    //     //        url: url,
    //     //
    //     //        type:     "post", //метод отправки
    //     //        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    //     //        //dataType: "text", //формат данных
    //     //        dataType: "json", //формат данных
    //     //        success: function(response) { //Данные отправлены успешно
    //     //            //console.log(response);
    //     //            // отправляем данные в ГТМ
    //     //            dataLayer.push({'event':'formSendCalk'});
    //     //            if (response.status !== 'ok') {
    //     //                alert('Somthing went wrong');
    //     //                return;
    //     //            }
    //     //
    //     //
    //     //          //  });
    //     //
    //     //
    //     //
    //     //
    //     //        },
    //     //        error: function(response) { // Данные не отправлены
    //     //            $('#result_form').html('Ошибка. Данные не отправлены.');
    //     //
    //     //            $('#post_form_err').show();
    //     //        }
    //     //    });
    //     //};
    //
    // });
    // function sendAjaxForm(result_form, ajax_form, url) {
    //     $.ajax({
    //         url: url,
    //
    //         type:     "post", //метод отправки
    //         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    //         //dataType: "text", //формат данных
    //         dataType: "json", //формат данных
    //         success: function(response) { //Данные отправлены успешно
    //             //console.log(response);
    //             // отправляем данные в ГТМ
    //             dataLayer.push({'event':'formSendCalk'});
    //             if (response.status !== 'ok') {
    //                 alert('Somthing went wrong');
    //                 return;
    //             }
    //             var block = $(this).parents('.container');
    //             block.find('.call_block1').hide();
    //             block.find('.call_titel').hide();
    //             block.find('.call_block2').hide();
    //             block.find('.call_block3').hide();
    //             block.find('.call_block_nes').hide();
    //             block.find('.call_block_setka').hide();
    //             block.find('.call_block_samer1').hide();
    //             block.find('.call_block_samer2').hide();
    //             block.find('.call_block4').hide();
    //             block.find('.call_block_sam_dev').hide();
    //             block.find('.call_block_itog_dev').hide();
    //             block.find('.call_block_QR_dev').show();
    //
    //         },
    //         error: function(response) { // Данные не отправлены
    //             $('#result_form').html('Ошибка. Данные не отправлены.');
    //
    //             $('#post_form_err').show();
    //         }
    //     });
    // }

    $('#but_block4_1_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').hide();
        block.find('.call_block_MAP_dev').show();
    });

    $('#but_block8_2_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').show();
        block.find('.call_block_sam_dev').hide();
        block.find('.call_block_itog_dev').hide();
        block.find('.call_block_QR_dev').hide();
        block.find('.call_block_MAP_dev').hide();

    });

    $('#but_block8_1_dev').click(function () {
        var itogzena_dev=ZsetkaVuv*1+priceV*1;
       // alert(ZsetkaVuv);
       // alert(priceV),
        itogzena_dev=itogzena_dev.toFixed(2);
        var itogzena_devv=itogzena_dev +' '+'руб' ;

        $('#itogzena_dev').text(itogzena_devv);
         //   $('#itogzena_dev').text(itogzena_dev);
        $('#itogzena_mail').text(itogzena_dev);

        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').hide();
        block.find('.call_block_itog_dev').show();
        block.find('.call_block_QR_dev').hide();
        block.find('.call_block_MAP_dev').hide();
       //  var itogzena_dev=ZsetkaVuv*1+priceV*1;
       // alert(ZsetkaVuv);
       // alert(priceV),
       //  $('#itogzena_dev').text(itogzena_dev);
       //  $('#itogzena_mail').text(itogzena_dev);

    });


    $('#radio-21').click(function () {
        if (document.getElementById('radio-21').checked){
            $('.block2_color').css('background-color', '#ffffff');
            $('.block2_color').removeClass('block2_color_active');
            colorvsp='Белый';
        }
    });

    $('#radio-31').click(function () {
        $('.block2_color').addClass('block2_color_active');
        color()
    });


    $('#ralc').keyup(function(e){
         color()

    });


    function color(){
        var colorv=document.getElementById('ralc').value;
        if (document.getElementById('radio-31').checked){
            colorv=+colorv;
             switch (colorv) {
                case 1000:
                    $('.block2_color').css('background-color', '#CCC58F');
                    colorvsp='Зелёно-бежевый (1000)';
                    break;
                case 1001:
                    $('.block2_color').css('background-color', '#D1BC8A');
                    colorvsp='Бежевый (1001)';
                    break;
                case 1002:
                    $('.block2_color').css('background-color', '#D2B773');
                    colorvsp='Песочно-жёлтый (1002)';
                    break;
                case 1003:
                    $('.block2_color').css('background-color', '#F7BA0B');
                    colorvsp='Сигнальный жёлтый (1003)';
                    break;
                case 1004:
                    $('.block2_color').css('background-color', '#E2B007');
                    colorvsp='Жёлто-золотой (1004)';
                    break;
                case 1005:
                    $('.block2_color').css('background-color', '#C89F04');
                    colorvsp='Медово-жёлтый (1005)';
                    break;
                case 1006:
                    $('.block2_color').css('background-color', '#E1A100');
                    colorvsp='Кукурузно-жёлтый (1006)';
                    break;
                case 1007:
                    $('.block2_color').css('background-color', '#E79C00');
                    colorvsp='Нарциссово-жёлтый (1007)';
                    break;
                case 1011:
                    $('.block2_color').css('background-color', '#AF8A54');
                    colorvsp='Коричнево-бежевый (1011)';
                    break;
                case 1012:
                    $('.block2_color').css('background-color', '#D9C022');
                    colorvsp='Лимонно-жёлтый (1012)';
                    break;
                case 1013:
                    $('.block2_color').css('background-color', '#E9E5CE');
                    colorvsp='Жемчужно-белый (1012)';
                    break;
                case 1014:
                    $('.block2_color').css('background-color', '#DED09F');
                    colorvsp='Слоновая кость (1014) ';
                    break;
                case 1015:
                    $('.block2_color').css('background-color', '#EADEBD');
                    colorvsp='Светлая слоновая кость (1015)';
                    break;
                case 1016:
                    $('.block2_color').css('background-color', '#EAF044');
                    colorvsp='Жёлтая сера (1016)';
                    break;
                case 1017:
                    $('.block2_color').css('background-color', '#F4B752');
                    colorvsp='Шафраново-жёлтый (1017)';
                    break;
                case 1018:
                    $('.block2_color').css('background-color', '#F3E03B');
                    colorvsp='Цинково-жёлтый (1018)';
                    break;

                 case 1019:
                     $('.block2_color').css('background-color', '#A4957D');
                     colorvsp='Серо-бежевый (1019)';
                     break;

                 case 1020:
                     $('.block2_color').css('background-color', '#9A9464');
                     colorvsp='Оливково-жёлтый (1020)';
                     break;

                 case 1021:
                 $('.block2_color').css('background-color', '#EEC900');
                 colorvsp='Рапсово-жёлтый (1021)';
                 break;

                 case 1023:
                     $('.block2_color').css('background-color', '#F0CA00');
                     colorvsp='Транспортно-жёлтый (1023)';
                     break;
                 case 1024:
                     $('.block2_color').css('background-color', '#B89C50');
                     colorvsp='Охра жёлтая (1024)';
                     break;

                 case 1026:
                     $('.block2_color').css('background-color', '#F5FF00');
                     colorvsp='Люминесцентный жёлтый (1026)';
                     break;

                 case 1027:
                     $('.block2_color').css('background-color', '#A38C15');
                     colorvsp='Карри жёлтый (1027)';
                     break;
                 case 1028:
                     $('.block2_color').css('background-color', '#FFAB00');
                     colorvsp='Дынно-жёлтый (1028)';
                     break;

                 case 1032:
                     $('.block2_color').css('background-color', '#DDB20F');
                     colorvsp='Жёлтый ракитник (1032)';
                     break;
                 case 1033:
                     $('.block2_color').css('background-color', '#FAAB21');
                     colorvsp='Георгиново-жёлтый (1033)';
                     break;
                 case 1034:
                     $('.block2_color').css('background-color', '#EDAB56');
                     colorvsp='Пастельно-жёлтый (1034)';
                     break;
                 case 1035:
                     $('.block2_color').css('background-color', '#A29985');
                     colorvsp='Перламутрово-бежевый (1035)';
                     break;

                 case 1036:
                     $('.block2_color').css('background-color', '#927549');
                     colorvsp='Перламутрово-золотой (1036)';
                     break;
                 case 1037:
                     $('.block2_color').css('background-color', '#EEA205');
                     colorvsp='Солнечно-жёлтый (1037)';
                     break;
                 case 2000:
                 $('.block2_color').css('background-color', '#DD7907');
                 colorvsp='Жёлто-оранжевый (2000)';
                 break;

                 case 2001:
                     $('.block2_color').css('background-color', '#BE4E24');
                     colorvsp='Красно-оранжевый (2001)';
                     break;
                 case 2002:
                     $('.block2_color').css('background-color', '#C63927');
                     colorvsp='Алый (2002)';
                     break;
                 case 2003:
                     $('.block2_color').css('background-color', '#FA842B');
                     colorvsp='Пастельно-оранжевый (2003)';
                     break;

                 case 2004:
                     $('.block2_color').css('background-color', '#E75B12');
                     colorvsp='Оранжевый (2004)';
                     break;
                 case 2005:
                 $('.block2_color').css('background-color', '#FF2300');
                 colorvsp='Люминесцентный оранжевый (2005)';
                 break;

                 case 2007:
                     $('.block2_color').css('background-color', '#FFA421');
                     colorvsp='Люминесцентный ярко-оранжевый (2007)';
                     break;
                 case 2008:
                     $('.block2_color').css('background-color', '#F3752C');
                     colorvsp='Ярко-красно-оранжевый (2008)';
                     break;
                 case 2009:
                     $('.block2_color').css('background-color', '#E15501');
                     colorvsp='Транспортный оранжевый (2009)';
                     break;
                 case 2010:
                     $('.block2_color').css('background-color', '#D4652F');
                     colorvsp='Сигнальный оранжевый (2010)';
                     break;
                 case 2011:
                     $('.block2_color').css('background-color', '#EC7C25');
                     colorvsp='Насыщенный оранжевый (2011)';
                     break;
                 case 2012:
                     $('.block2_color').css('background-color', '#DB6A50');
                     colorvsp='Лососёво-оранжевый (2012)';
                     break;
                 case 2013:
                     $('.block2_color').css('background-color', '#954527');
                     colorvsp='Перламутрово-оранжевый (2013)';
                     break;
                 case 3000:
                     $('.block2_color').css('background-color', '#AB2524');
                     colorvsp='Огненно-красный (3000)';
                     break;
                 case 3001:
                     $('.block2_color').css('background-color', '#A02128');
                     colorvsp='Сигнальный красный (3001)';
                     break;
                 case 3002:
                     $('.block2_color').css('background-color', '#A1232B');
                     colorvsp='Карминно-красный (3002)';
                     break;
                 case 3003:
                     $('.block2_color').css('background-color', '#8D1D2C');
                     colorvsp='Рубиново-красный (3003)';
                     break;
                 case 3004:
                     $('.block2_color').css('background-color', '#701F29');
                     colorvsp='Пурпурно-красный (3004)';
                     break;
                 case 3005:
                     $('.block2_color').css('background-color', '#701F29');
                     colorvsp='Винно-красный (3005)';
                     break;
                 case 3007:
                     $('.block2_color').css('background-color', '#402225');
                     colorvsp='Чёрно-красный (3007)';
                     break;
                 case 3009:
                     $('.block2_color').css('background-color', '#703731');
                     colorvsp='Рубиново-красный (3009)';
                     break;
                 case 3011:
                     $('.block2_color').css('background-color', '#7E292C');
                     colorvsp='Коричнево-красный (3011)';
                     break;
                 case 3012:
                     $('.block2_color').css('background-color', '#CB8D73');
                     colorvsp='Бежево-красный (3012)';
                     break;
                 case 3013:
                     $('.block2_color').css('background-color', '#9C322E');
                     colorvsp='Томатно-красный (3013)';
                     break;
                 case 3014:
                     $('.block2_color').css('background-color', '#D47479');
                     colorvsp='Розовый антик (3014)';
                     break;
                 case 3015:
                     $('.block2_color').css('background-color', '#E1A6AD');
                     colorvsp='Светло-розовый (3015)';
                     break;

                 case 3016:
                     $('.block2_color').css('background-color', '#AC4034');
                     colorvsp='Кораллово-красный (3016)';
                     break;
                 case 3017:
                     $('.block2_color').css('background-color', '#D3545F');
                     colorvsp='Розовый (3017)';
                     break;
                 case 3018:
                     $('.block2_color').css('background-color', '#D14152');
                     colorvsp='Клубнично-красный (3018)';
                     break;
                 case 3020:
                     $('.block2_color').css('background-color', '#C1121C');
                     colorvsp='Транспортный красный (3020)';
                     break;
                 case 3022:
                     $('.block2_color').css('background-color', '#D56D56');
                     colorvsp='Лососёво-красный (3022)';
                     break;
                 case 3024:
                 $('.block2_color').css('background-color', '#F70000');
                 colorvsp='Люминесцентный красный (3024)';
                 break;
                 case 3027:
                     $('.block2_color').css('background-color', '#B42041');
                     colorvsp='Малиново-красный (3027)';
                     break;

                 case 3028:
                     $('.block2_color').css('background-color', '#CB3334');
                     colorvsp='Красный (3028)';
                     break;
                 case 3031:
                     $('.block2_color').css('background-color', '#AC323B');
                     colorvsp='Ориент красный (3031)';
                     break;
                 case 3032:
                     $('.block2_color').css('background-color', '#711521');
                     colorvsp='Перламутрово-рубиновый (3032)';
                     break;
                 case 3033:
                     $('.block2_color').css('background-color', '#B24C43');
                     colorvsp='Перламутрово-розовый (3033)';
                     break;
                 case 4001:
                     $('.block2_color').css('background-color', '#8A5A83');
                     colorvsp='Красно-сиреневый (4001)';
                     break;
                 case 4002:
                     $('.block2_color').css('background-color', '#933D50');
                     colorvsp='Красно-фиолетовый (4002)';
                     break;
                 case 4003:
                     $('.block2_color').css('background-color', '#D15B8F');
                     colorvsp='Вересково-фиолетовый (4003)';
                     break;
                 case 4004:
                     $('.block2_color').css('background-color', '#691639');
                     colorvsp='Бордово-фиолетовый (4004)';
                     break;
                 case 4005:
                     $('.block2_color').css('background-color', '#83639D');
                     colorvsp='Сине-сиреневый (4005)';
                     break;
                 case 4006:
                     $('.block2_color').css('background-color', '#992572');
                     colorvsp='Транспортный пурпурный (4006)';
                     break;
                 case 4007:
                     $('.block2_color').css('background-color', '#4A203B');
                     colorvsp='Пурпурно-фиолетовый (4007)';
                     break;
                 case 4008:
                     $('.block2_color').css('background-color', '#904684');
                     colorvsp='Сигнальный фиолетовый (4008)';
                     break;
                 case 4009:
                     $('.block2_color').css('background-color', '#A38995');
                     colorvsp='Пастельно-фиолетовый (4009)';
                     break;
                 case 4010:
                     $('.block2_color').css('background-color', '#C63678');
                     colorvsp='Телемагента (4010)';
                     break;
                 case 4011:
                     $('.block2_color').css('background-color', '#8773A1');
                     colorvsp='Перламутрово-фиолетовый (4011)';
                     break;
                 case 4012:
                     $('.block2_color').css('background-color', '#6B6880');
                     colorvsp='Перламутрово-ежевичный (4012)';
                     break;
                 case 5000:
                     $('.block2_color').css('background-color', '#384C70');
                     colorvsp='Фиолетово-синий (5000)';
                     break;
                 case 5001:
                 $('.block2_color').css('background-color', '#1F4764');
                 colorvsp='Зелёно-синий (5001)';
                 break;
                 case 5002:
                     $('.block2_color').css('background-color', '#2B2C7C');
                     colorvsp='Ультрамариново-синий (5002)';
                     break;
                 case 5003:
                     $('.block2_color').css('background-color', '#2A3756');
                     colorvsp='Сапфирово-синий (5003)';
                     break;
                 case 5004:
                     $('.block2_color').css('background-color', '#1D1F2A');
                     colorvsp='Чёрно-синий (5004)';
                     break;
                 case 5005:
                     $('.block2_color').css('background-color', '#154889');
                     colorvsp='Сигнальный синий (5005)';
                     break;
                 case 5007:
                     $('.block2_color').css('background-color', '#41678D');
                     colorvsp='Бриллиантово-синий (5007)';
                     break;
                 case 5008:
                     $('.block2_color').css('background-color', '#313C48');
                     colorvsp='Серо-синий (5008)';
                     break;
                 case 5009:
                     $('.block2_color').css('background-color', '#2E5978');
                     colorvsp='Лазурно-синий (5009)';
                     break;
                 case 5010:
                     $('.block2_color').css('background-color', '#13447C');
                     colorvsp='Горечавково-синий (5010)';
                     break;
                 case 5011:
                     $('.block2_color').css('background-color', '#232C3F');
                     colorvsp='Стально-синий (5011)';
                     break;
                 case 5012:
                     $('.block2_color').css('background-color', '#3481B8');
                     colorvsp='Голубой (5012)';
                     break;
                 case 5013:
                     $('.block2_color').css('background-color', '#232D53');
                     colorvsp='Лазурно-синий (5013)';
                     break;
                 case 5014:
                     $('.block2_color').css('background-color', '#6C7C98');
                     colorvsp='Голубино-синий (5014)';
                     break;
                 case 5015:
                     $('.block2_color').css('background-color', '#2874B2');
                     colorvsp='Небесно-синий (5015)';
                     break;
                 case 5017:
                     $('.block2_color').css('background-color', '#0E518D');
                     colorvsp='Транспортный синий (5017)';
                     break;
                 case 5018:
                     $('.block2_color').css('background-color', '#21888F');
                     colorvsp='Бирюзово-синий (5018)';
                     break;
                 case 5019:
                     $('.block2_color').css('background-color', '#1A5784');
                     colorvsp='Капри синий (5019)';
                     break;
                 case 5020:
                     $('.block2_color').css('background-color', '#0B4151');
                     colorvsp='Океанская синь (5020)';
                     break;
                 case 5021:
                     $('.block2_color').css('background-color', '#07737A');
                     colorvsp='Водная синь (5021)';
                     break;
                 case 5022:
                     $('.block2_color').css('background-color', '#2F2A5A');
                     colorvsp='Ночной синий (5022)';
                     break;
                 case 5023:
                     $('.block2_color').css('background-color', '#4D668E');
                     colorvsp='Отдалённо-синий (5023)';
                     break;
                 case 5024:
                     $('.block2_color').css('background-color', '#6A93B0');
                     colorvsp='Пастельно-синий (5024)';
                     break;
                 case 5025:
                     $('.block2_color').css('background-color', '#07737A');
                     colorvsp='Перламутровый горечавково-синий (5025)';
                     break;
                 case 5026:
                     $('.block2_color').css('background-color', '#102C54');
                     colorvsp='Ночной синий (5026)';
                     break;
                 case 6000:
                     $('.block2_color').css('background-color', '#327662');
                     colorvsp='Патиново-зелёный (6000)';
                     break;
                 case 6001:
                     $('.block2_color').css('background-color', '#28713E');
                     colorvsp='Изумрудно-зелёный (6001)';
                     break;
                 case 6002:
                     $('.block2_color').css('background-color', '#276235');
                     colorvsp='Лиственно-зелёный (6002)';
                     break;
                 case 6003:
                     $('.block2_color').css('background-color', '#4B573E');
                     colorvsp='Оливково-зелёный (6003)';
                     break;
                 case 6004:
                     $('.block2_color').css('background-color', '#0E4243');
                     colorvsp='Сине-зелёный (6004)';
                     break;
                 case 6005:
                     $('.block2_color').css('background-color', '#0F4336');
                     colorvsp='Зелёный мох (6005)';
                     break;
                 case 6006:
                     $('.block2_color').css('background-color', '#40433B');
                     colorvsp='Серо-оливковый (6006)';
                     break;
                 case 6007:
                     $('.block2_color').css('background-color', '#283424');
                     colorvsp='Бутылочно-зелёный (6007)';
                     break;
                 case 6008:
                     $('.block2_color').css('background-color', '#35382E');
                     colorvsp='Коричнево-зелёный (6008)';
                     break;
                 case 6009:
                     $('.block2_color').css('background-color', '#26392F');
                     colorvsp='Пихтовый зелёный (6009)';
                     break;
                 case 6010:
                     $('.block2_color').css('background-color', '#3E753B');
                     colorvsp='Травяной зелёный (6010)';
                     break;
                 case 6011:
                     $('.block2_color').css('background-color', '#66825B');
                     colorvsp='Резедово-зелёный (6011)';
                     break;
                 case 6012:
                     $('.block2_color').css('background-color', '#31403D');
                     colorvsp='Чёрно-зелёный (6012)';
                     break;
                 case 6013:
                     $('.block2_color').css('background-color', '#797C5A');
                     colorvsp='Тростниково-зелёный (6013)';
                     break;
                 case 6014:
                     $('.block2_color').css('background-color', '#444337');
                     colorvsp='Жёлто-оливковый (6014)';
                     break;
                 case 6015:
                     $('.block2_color').css('background-color', '#3D403A');
                     colorvsp='Чёрно-оливковый (6015)';
                     break;
                 case 6016:
                 $('.block2_color').css('background-color', '#026A52');
                 colorvsp='Бирюзово-зелёный (6016)';
                 break;
                 case 6017:
                     $('.block2_color').css('background-color', '#468641');
                     colorvsp='Тростниково-зелёный (6017)';
                     break;
                 case 6018:
                     $('.block2_color').css('background-color', '#48A43F');
                     colorvsp='Желто-зелёный (6018)';
                     break;
                 case 6019:
                     $('.block2_color').css('background-color', '#B7D9B1');
                     colorvsp='Бело-зелёный (6019)';
                     break;
                 case 6020:
                     $('.block2_color').css('background-color', '#354733');
                     colorvsp='Хромовый зелёный (6020)';
                     break;
                 case 6021:
                     $('.block2_color').css('background-color', '#86A47C');
                     colorvsp='Бледно-зелёный (6021)';
                     break;
                 case 6022:
                     $('.block2_color').css('background-color', '#3E3C32');
                     colorvsp='Коричнево-оливковый (6022)';
                     break;
                 case 6024:
                     $('.block2_color').css('background-color', '#008754');
                     colorvsp='Транспортный зелёный (6024)';
                     break;
                 case 6025:
                     $('.block2_color').css('background-color', '#53753C');
                     colorvsp='Папоротниково-зелёный (6025)';
                     break;
                 case 6026:
                     $('.block2_color').css('background-color', '#005D52');
                     colorvsp='Опаловый зелёный (6026)';
                     break;
                 case 6027:
                     $('.block2_color').css('background-color', '#81C0BB');
                     colorvsp='Светло-зелёный (6027)';
                     break;
                 case 6028:
                     $('.block2_color').css('background-color', '#2D5546');
                     colorvsp='Сосновый зелёный (6028)';
                     break;
                 case 6029:
                     $('.block2_color').css('background-color', '#007243');
                     colorvsp='Мятно-зелёный (6029)';
                     break;
                 case 6032:
                     $('.block2_color').css('background-color', '#0F8558');
                     colorvsp='Сигнальный зелёный (6032)';
                     break;
                 case 6033:
                     $('.block2_color').css('background-color', '#478A84');
                     colorvsp='Мятно-бирюзовый (6033)';
                     break;
                 case 6034:
                     $('.block2_color').css('background-color', '#7FB0B2');
                     colorvsp='Пастельно-бирюзовый (6034)';
                     break;
                 case 6035:
                     $('.block2_color').css('background-color', '#1B542C');
                     colorvsp='Перламутрово-зелёный (6035)';
                     break;
                 case 6036:
                     $('.block2_color').css('background-color', '#005D4C');
                     colorvsp='Перламутровый опаловый зелёный (6036)';
                     break;
                 case 6037:
                     $('.block2_color').css('background-color', '#008F39');
                     colorvsp='Зелёный (6037)';
                     break;
                 case 6038:
                     $('.block2_color').css('background-color', '#00BB2E');
                     colorvsp='Люминесцентный зелёный (6038)';
                     break;
                 case 7000:
                     $('.block2_color').css('background-color', '#7E8B92');
                     colorvsp='Серая белка (7000)';
                     break;
                 case 7001:
                     $('.block2_color').css('background-color', '#8F999F');
                     colorvsp='Серебристо-серый (7001)';
                     break;
                 case 7002:
                     $('.block2_color').css('background-color', '#008F39');
                     colorvsp='Оливково-серый (7002)';
                     break;
                 case 7003:
                     $('.block2_color').css('background-color', '#7A7B6D');
                     colorvsp='Серый мох (7003)';
                     break;
                 case 7004:
                     $('.block2_color').css('background-color', '#9EA0A1');
                     colorvsp='Сигнальный серый (7004)';
                     break;
                 case 7005:
                     $('.block2_color').css('background-color', '#6B716F');
                     colorvsp='Мышино-серый (7005)';
                     break;
                 case 7006:
                     $('.block2_color').css('background-color', '#756F61');
                     colorvsp='Бежево-серый (7006)';
                     break;
                 case 7008:
                     $('.block2_color').css('background-color', '#746643');
                     colorvsp='Серое хаки (7008)';
                     break;
                 case 7009:
                     $('.block2_color').css('background-color', '#5B6259');
                     colorvsp='Зелёно-серый (7009)';
                     break;
                 case 7010:
                     $('.block2_color').css('background-color', '#575D57');
                     colorvsp='Брезентово-серый (7010)';
                     break;
                 case 7011:
                     $('.block2_color').css('background-color', '#555D61');
                     colorvsp='Железно-серый (7011)';
                     break;
                 case 7012:
                     $('.block2_color').css('background-color', '#596163');
                     colorvsp='Базальтово-серый (7012)';
                     break;
                 case 7013:
                     $('.block2_color').css('background-color', '#555548');
                     colorvsp='Коричнево-серый (7013)';
                     break;
                 case 7015:
                     $('.block2_color').css('background-color', '#51565C');
                     colorvsp='Сланцево-серый (7015)';
                     break;
                 case 7016:
                 $('.block2_color').css('background-color', '#373F43');
                 colorvsp='Антрацитово-серый (7016)';
                 break;
                 case 7021:
                     $('.block2_color').css('background-color', '#2E3234');
                     colorvsp='Чёрно-серый (7021)';
                     break;
                 case 7022:
                     $('.block2_color').css('background-color', '#4B4D46');
                     colorvsp='Серая умбра (7022)';
                     break;
                 case 7023:
                     $('.block2_color').css('background-color', '#818479');
                     colorvsp='Серый бетон (7023)';
                     break;
                 case 7024:
                     $('.block2_color').css('background-color', '#474A50');
                     colorvsp='Графитовый серый (7024)';
                     break;
                 case 7026:
                     $('.block2_color').css('background-color', '#374447');
                     colorvsp='Гранитовый серый (7026)';
                     break;
                 case 7030:
                     $('.block2_color').css('background-color', '#939388');
                     colorvsp='Каменно-серый (7030)';
                     break;
                 case 7031:
                     $('.block2_color').css('background-color', '#5D6970');
                     colorvsp='Сине-серый (7031)';
                     break;
                 case 7032:
                     $('.block2_color').css('background-color', '#B9B9A8');
                     colorvsp='Галечный серый (7032)';
                     break;
                 case 7033:
                     $('.block2_color').css('background-color', '#818979');
                     colorvsp='Цементно-серый (7033)';
                     break;
                 case 7034:
                     $('.block2_color').css('background-color', '#939176');
                     colorvsp='Жёлто-серый (7034)';
                     break;
                 case 7035:
                 $('.block2_color').css('background-color', '#CBD0CC');
                 colorvsp='Светло-серый (7035)';
                 break;
                 case 7036:
                     $('.block2_color').css('background-color', '#9A9697');
                     colorvsp='Платиново-серый (7036)';
                     break;
                 case 7037:
                     $('.block2_color').css('background-color', '#7C7F7E');
                     colorvsp='Пыльно-серый (7037)';
                     break;
                 case 7038:
                     $('.block2_color').css('background-color', '#B4B8B0');
                     colorvsp='Агатовый серый (7038)';
                     break;
                 case 7039:
                     $('.block2_color').css('background-color', '#6B695F');
                     colorvsp='Кварцевый серый (7039)';
                     break;
                 case 7040:
                     $('.block2_color').css('background-color', '#9DA3A6');
                     colorvsp='Серое окно (7040)';
                     break;
                 case 7042:
                     $('.block2_color').css('background-color', '#8F9695');
                     colorvsp='Транспортный серый A (7042)';
                     break;
                 case 7043:
                     $('.block2_color').css('background-color', '#4E5451');
                     colorvsp='Транспортный серый B (7043)';
                     break;
                 case 7044:
                     $('.block2_color').css('background-color', '#BDBDB2');
                     colorvsp='Серый шёлк (7044)';
                     break;
                 case 7045:
                     $('.block2_color').css('background-color', '#91969A');
                     colorvsp='Телегрей 1 (7045)';
                     break;
                 case 7046:
                     $('.block2_color').css('background-color', '#82898E');
                     colorvsp='Телегрей 2 (7046)';
                     break;
                 case 7047:
                     $('.block2_color').css('background-color', '#CFD0CF');
                     colorvsp='Телегрей 4 (7047)';
                     break;
                 case 7048:
                     $('.block2_color').css('background-color', '#888175');
                     colorvsp='Перламутровый мышино-серый (7048)';
                     break;
                 case 8000:
                 $('.block2_color').css('background-color', '#887142');
                 colorvsp='Зелёно-коричневый (8000)';
                 break;

                 case 8001:
                     $('.block2_color').css('background-color', '#9C6B30');
                     colorvsp='Охра коричневая (8001)';
                     break;
                 case 8002:
                     $('.block2_color').css('background-color', '#7B5141');
                     colorvsp='Сигнальный коричневый (8002)';
                     break;
                 case 8003:
                 $('.block2_color').css('background-color', '#80542F');
                 colorvsp='Глиняный коричневый (8003)';
                 break;
                 case 8004:
                     $('.block2_color').css('background-color', '#8F4E35');
                     colorvsp='Медно-коричневый (8004)';
                     break;
                 case 8007:
                     $('.block2_color').css('background-color', '#6F4A2F');
                     colorvsp='Олень коричневый (8007)';
                     break;
                 case 8008:
                     $('.block2_color').css('background-color', '#6F4F28');
                     colorvsp='Оливково-коричневый (8008)';
                     break;
                 case 8011:
                     $('.block2_color').css('background-color', '#5A3A29');
                     colorvsp='Орехово-коричневый (8011)';
                     break;
                 case 8012:
                     $('.block2_color').css('background-color', '#673831');
                     colorvsp='Красно-коричневый (8012)';
                     break;
                 case 8014:
                     $('.block2_color').css('background-color', '#49392D');
                     colorvsp='Сепия коричневый (8014)';
                     break;
                 case 8015:
                     $('.block2_color').css('background-color', '#633A34');
                     colorvsp='Каштаново-коричневый (8015)';
                     break;
                 case 8016:
                     $('.block2_color').css('background-color', '#4C2F26');
                     colorvsp='Махагон коричневый (8016)';
                     break;
                 case 8017:
                     $('.block2_color').css('background-color', '#44322D');
                     colorvsp='Шоколадно-коричневый (8017)';
                     break;
                 case 8019:
                     $('.block2_color').css('background-color', '#3F3A3A');
                     colorvsp='Серо-коричневый (8019)';
                     break;
                 case 8022:
                     $('.block2_color').css('background-color', '#211F20');
                     colorvsp='Чёрно-коричневый (8022)';
                     break;
                 case 8023:
                     $('.block2_color').css('background-color', '#A65E2F');
                     colorvsp='Оранжево-коричневый (8023)';
                     break;
                 case 8024:
                     $('.block2_color').css('background-color', '#79553C');
                     colorvsp='Шоколадно-коричневый (8024)';
                     break;
                 case 8025:
                     $('.block2_color').css('background-color', '#755C49');
                     colorvsp='Бледно-коричневый (8025)';
                     break;
                 case 8028:
                     $('.block2_color').css('background-color', '#4E3B2B');
                     colorvsp='Терракотовый (8028)';
                     break;
                 case 8029:
                     $('.block2_color').css('background-color', '#773C27');
                     colorvsp='Перламутровый медный (8029)';
                     break;
                 case 9001:
                     $('.block2_color').css('background-color', '#EFEBDC');
                     colorvsp='Кремово-белый (9001)';
                     break;
                 case 9002:
                     $('.block2_color').css('background-color', '#DDDED4');
                     colorvsp='Светло-серый (9002)';
                     break;
                 case 9003:
                     $('.block2_color').css('background-color', '#F4F8F4');
                     colorvsp='Сигнальный белый (9003)';
                     break;
                 case 9004:
                 $('.block2_color').css('background-color', '#2E3032');
                 colorvsp='Сигнальный чёрный (9004)';
                 break;
                 case 9005:
                     $('.block2_color').css('background-color', '#0A0A0D');
                     colorvsp='Чёрный янтарь (9005)';
                     break;
                 case 9006:
                     $('.block2_color').css('background-color', '#A5A8A6');
                     colorvsp='Бело-алюминиевый (9006)';
                     break;
                 case 9007:
                     $('.block2_color').css('background-color', '#8F8F8C');
                     colorvsp='Тёмно-алюминиевый (9007)';
                     break;
                 case 9010:
                     $('.block2_color').css('background-color', '#F7F9EF');
                     colorvsp='Белый (9010)';
                     break;
                 case 9011:
                     $('.block2_color').css('background-color', '#292C2F');
                     colorvsp='Графитно-чёрный (9011)';
                     break;
                 case 9016:
                     $('.block2_color').css('background-color', '#F7FBF5');
                     colorvsp='Транспортный белый (9016)';
                     break;
                 case 9017:
                     $('.block2_color').css('background-color', '#2A2D2F');
                     colorvsp='Транспортный чёрныйй (9017)';
                     break;
                 case 9018:
                     $('.block2_color').css('background-color', '#CFD3CD');
                     colorvsp='Папирусно-белый (9018)';
                     break;
                 case 9022:
                     $('.block2_color').css('background-color', '#9C9C9C');
                     colorvsp='Перламутровый светло-серый (9022)';
                     break;
                 case 9023:
                     $('.block2_color').css('background-color', '#7E8182');
                     colorvsp='Перламутровый тёмно-серый (9023)';
                     break;

                 default:
                    $('.block2_color').css('background-color', '#ffffff');
                    colorvsp='Белый';

            }

        }
    }








    $("#raldev").click(function (){
        var block = $(this).parents('.container');
        block.find('.call_block2').hide();
        block.find('.call_blockRAL_dev').show();
    });



    $(".colorral").click(function (){
        var colorvr=0;
        colorvr = $(this).attr('id');

       var colorid = $(this).attr('data-index');
       var colorzv = $(this).attr('data-color');
        var colorzv1 = $(this).attr('data-colorv');
        $('.block2_color').css({'background-color':colorzv});
        colorvsp=colorzv1;

        document.getElementById('ralc').value=colorid;

        var block = $(this).parents('.container');
        block.find('.call_block2').show();
        block.find('.call_blockRAL_dev').hide();

    });

    $('#but_RALd').click(function () {

        var block = $(this).parents('.container');
        block.find('.call_block2').show();
        block.find('.call_blockRAL_dev').hide();

        $('.block2_color').css('background-color', '#ffffff');
        colorvsp='Белый';

    });



    //====Открытие закрытие блоков в мобильной верстке=====//
    $('#but_block1m').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block2_mob').show();
        block.find('.call_block3_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();

    });

    $('#but_block2_1m').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').show();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block2_2m').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').show();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block3_1m').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block2_mob').show();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#radio-21m').click(function () {
        if (document.getElementById('radio-21m').checked){
            $('.block2_colorm').css('background-color', '#ffffff');
            $('.block2_colorm').removeClass('block2_colorm_active');
            $('.call_block2_1_richtm').removeClass('block2_colorm_active');
            colorvsp='Белый';
        }
    });

    $('#radio-31m').click(function () {
        $('.block2_colorm').addClass('block2_colorm_active');
        $('.call_block2_1_richtm').addClass('block2_colorm_active');

        color_mob()
    });


    $('#ralcm').keyup(function(e){
        color_mob()

    });


    function color_mob(){
        var colorv=document.getElementById('ralcm').value;
        if (document.getElementById('radio-31m').checked){
            colorv=+colorv;
            switch (colorv) {
                case 1000:
                    $('.block2_colorm').css('background-color', '#CCC58F');
                    colorvsp='Зелёно-бежевый (1000)';
                    break;
                case 1001:
                    $('.block2_colorm').css('background-color', '#D1BC8A');
                    colorvsp='Бежевый (1001)';
                    break;
                case 1002:
                    $('.block2_colorm').css('background-color', '#D2B773');
                    colorvsp='Песочно-жёлтый (1002)';
                    break;
                case 1003:
                    $('.block2_colorm').css('background-color', '#F7BA0B');
                    colorvsp='Сигнальный жёлтый (1003)';
                    break;
                case 1004:
                    $('.block2_colorm').css('background-color', '#E2B007');
                    colorvsp='Жёлто-золотой (1004)';
                    break;
                case 1005:
                    $('.block2_colorm').css('background-color', '#C89F04');
                    colorvsp='Медово-жёлтый (1005)';
                    break;
                case 1006:
                    $('.block2_colorm').css('background-color', '#E1A100');
                    colorvsp='Кукурузно-жёлтый (1006)';
                    break;
                case 1007:
                    $('.block2_colorm').css('background-color', '#E79C00');
                    colorvsp='Нарциссово-жёлтый (1007)';
                    break;
                case 1011:
                    $('.block2_colorm').css('background-color', '#AF8A54');
                    colorvsp='Коричнево-бежевый (1011)';
                    break;
                case 1012:
                    $('.block2_colorm').css('background-color', '#D9C022');
                    colorvsp='Лимонно-жёлтый (1012)';
                    break;
                case 1013:
                    $('.block2_colorm').css('background-color', '#E9E5CE');
                    colorvsp='Жемчужно-белый (1012)';
                    break;
                case 1014:
                    $('.block2_colorm').css('background-color', '#DED09F');
                    colorvsp='Слоновая кость (1014) ';
                    break;
                case 1015:
                    $('.block2_colorm').css('background-color', '#EADEBD');
                    colorvsp='Светлая слоновая кость (1015)';
                    break;
                case 1016:
                    $('.block2_colorm').css('background-color', '#EAF044');
                    colorvsp='Жёлтая сера (1016)';
                    break;
                case 1017:
                    $('.block2_colorm').css('background-color', '#F4B752');
                    colorvsp='Шафраново-жёлтый (1017)';
                    break;
                case 1018:
                    $('.block2_colorm').css('background-color', '#F3E03B');
                    colorvsp='Цинково-жёлтый (1018)';
                    break;

                case 1019:
                    $('.block2_colorm').css('background-color', '#A4957D');
                    colorvsp='Серо-бежевый (1019)';
                    break;

                case 1020:
                    $('.block2_colorm').css('background-color', '#9A9464');
                    colorvsp='Оливково-жёлтый (1020)';
                    break;

                case 1021:
                    $('.block2_colorm').css('background-color', '#EEC900');
                    colorvsp='Рапсово-жёлтый (1021)';
                    break;

                case 1023:
                    $('.block2_colorm').css('background-color', '#F0CA00');
                    colorvsp='Транспортно-жёлтый (1023)';
                    break;
                case 1024:
                    $('.block2_colorm').css('background-color', '#B89C50');
                    colorvsp='Охра жёлтая (1024)';
                    break;

                case 1026:
                    $('.block2_colorm').css('background-color', '#F5FF00');
                    colorvsp='Люминесцентный жёлтый (1026)';
                    break;

                case 1027:
                    $('.block2_colorm').css('background-color', '#A38C15');
                    colorvsp='Карри жёлтый (1027)';
                    break;
                case 1028:
                    $('.block2_colorm').css('background-color', '#FFAB00');
                    colorvsp='Дынно-жёлтый (1028)';
                    break;

                case 1032:
                    $('.block2_colorm').css('background-color', '#DDB20F');
                    colorvsp='Жёлтый ракитник (1032)';
                    break;
                case 1033:
                    $('.block2_colorm').css('background-color', '#FAAB21');
                    colorvsp='Георгиново-жёлтый (1033)';
                    break;
                case 1034:
                    $('.block2_colorm').css('background-color', '#EDAB56');
                    colorvsp='Пастельно-жёлтый (1034)';
                    break;
                case 1035:
                    $('.block2_colorm').css('background-color', '#A29985');
                    colorvsp='Перламутрово-бежевый (1035)';
                    break;

                case 1036:
                    $('.block2_colorm').css('background-color', '#927549');
                    colorvsp='Перламутрово-золотой (1036)';
                    break;
                case 1037:
                    $('.block2_colorm').css('background-color', '#EEA205');
                    colorvsp='Солнечно-жёлтый (1037)';
                    break;
                case 2000:
                    $('.block2_colorm').css('background-color', '#DD7907');
                    colorvsp='Жёлто-оранжевый (2000)';
                    break;

                case 2001:
                    $('.block2_colorm').css('background-color', '#BE4E24');
                    colorvsp='Красно-оранжевый (2001)';
                    break;
                case 2002:
                    $('.block2_colorm').css('background-color', '#C63927');
                    colorvsp='Алый (2002)';
                    break;
                case 2003:
                    $('.block2_colorm').css('background-color', '#FA842B');
                    colorvsp='Пастельно-оранжевый (2003)';
                    break;

                case 2004:
                    $('.block2_colorm').css('background-color', '#E75B12');
                    colorvsp='Оранжевый (2004)';
                    break;
                case 2005:
                    $('.block2_colorm').css('background-color', '#FF2300');
                    colorvsp='Люминесцентный оранжевый (2005)';
                    break;

                case 2007:
                    $('.block2_colorm').css('background-color', '#FFA421');
                    colorvsp='Люминесцентный ярко-оранжевый (2007)';
                    break;
                case 2008:
                    $('.block2_colorm').css('background-color', '#F3752C');
                    colorvsp='Ярко-красно-оранжевый (2008)';
                    break;
                case 2009:
                    $('.block2_colorm').css('background-color', '#E15501');
                    colorvsp='Транспортный оранжевый (2009)';
                    break;
                case 2010:
                    $('.block2_colorm').css('background-color', '#D4652F');
                    colorvsp='Сигнальный оранжевый (2010)';
                    break;
                case 2011:
                    $('.block2_colorm').css('background-color', '#EC7C25');
                    colorvsp='Насыщенный оранжевый (2011)';
                    break;
                case 2012:
                    $('.block2_colorm').css('background-color', '#DB6A50');
                    colorvsp='Лососёво-оранжевый (2012)';
                    break;
                case 2013:
                    $('.block2_colorm').css('background-color', '#954527');
                    colorvsp='Перламутрово-оранжевый (2013)';
                    break;
                case 3000:
                    $('.block2_colorm').css('background-color', '#AB2524');
                    colorvsp='Огненно-красный (3000)';
                    break;
                case 3001:
                    $('.block2_colorm').css('background-color', '#A02128');
                    colorvsp='Сигнальный красный (3001)';
                    break;
                case 3002:
                    $('.block2_colorm').css('background-color', '#A1232B');
                    colorvsp='Карминно-красный (3002)';
                    break;
                case 3003:
                    $('.block2_colorm').css('background-color', '#8D1D2C');
                    colorvsp='Рубиново-красный (3003)';
                    break;
                case 3004:
                    $('.block2_colorm').css('background-color', '#701F29');
                    colorvsp='Пурпурно-красный (3004)';
                    break;
                case 3005:
                    $('.block2_colorm').css('background-color', '#701F29');
                    colorvsp='Винно-красный (3005)';
                    break;
                case 3007:
                    $('.block2_colorm').css('background-color', '#402225');
                    colorvsp='Чёрно-красный (3007)';
                    break;
                case 3009:
                    $('.block2_colorm').css('background-color', '#703731');
                    colorvsp='Рубиново-красный (3009)';
                    break;
                case 3011:
                    $('.block2_colorm').css('background-color', '#7E292C');
                    colorvsp='Коричнево-красный (3011)';
                    break;
                case 3012:
                    $('.block2_colorm').css('background-color', '#CB8D73');
                    colorvsp='Бежево-красный (3012)';
                    break;
                case 3013:
                    $('.block2_colorm').css('background-color', '#9C322E');
                    colorvsp='Томатно-красный (3013)';
                    break;
                case 3014:
                    $('.block2_colorm').css('background-color', '#D47479');
                    colorvsp='Розовый антик (3014)';
                    break;
                case 3015:
                    $('.block2_colorm').css('background-color', '#E1A6AD');
                    colorvsp='Светло-розовый (3015)';
                    break;

                case 3016:
                    $('.block2_colorm').css('background-color', '#AC4034');
                    colorvsp='Кораллово-красный (3016)';
                    break;
                case 3017:
                    $('.block2_colorm').css('background-color', '#D3545F');
                    colorvsp='Розовый (3017)';
                    break;
                case 3018:
                    $('.block2_colorm').css('background-color', '#D14152');
                    colorvsp='Клубнично-красный (3018)';
                    break;
                case 3020:
                    $('.block2_colorm').css('background-color', '#C1121C');
                    colorvsp='Транспортный красный (3020)';
                    break;
                case 3022:
                    $('.block2_colorm').css('background-color', '#D56D56');
                    colorvsp='Лососёво-красный (3022)';
                    break;
                case 3024:
                    $('.block2_colorm').css('background-color', '#F70000');
                    colorvsp='Люминесцентный красный (3024)';
                    break;
                case 3027:
                    $('.block2_colorm').css('background-color', '#B42041');
                    colorvsp='Малиново-красный (3027)';
                    break;

                case 3028:
                    $('.block2_colorm').css('background-color', '#CB3334');
                    colorvsp='Красный (3028)';
                    break;
                case 3031:
                    $('.block2_colorm').css('background-color', '#AC323B');
                    colorvsp='Ориент красный (3031)';
                    break;
                case 3032:
                    $('.block2_colorm').css('background-color', '#711521');
                    colorvsp='Перламутрово-рубиновый (3032)';
                    break;
                case 3033:
                    $('.block2_colorm').css('background-color', '#B24C43');
                    colorvsp='Перламутрово-розовый (3033)';
                    break;
                case 4001:
                    $('.block2_colorm').css('background-color', '#8A5A83');
                    colorvsp='Красно-сиреневый (4001)';
                    break;
                case 4002:
                    $('.block2_colorm').css('background-color', '#933D50');
                    colorvsp='Красно-фиолетовый (4002)';
                    break;
                case 4003:
                    $('.block2_colorm').css('background-color', '#D15B8F');
                    colorvsp='Вересково-фиолетовый (4003)';
                    break;
                case 4004:
                    $('.block2_colorm').css('background-color', '#691639');
                    colorvsp='Бордово-фиолетовый (4004)';
                    break;
                case 4005:
                    $('.block2_colorm').css('background-color', '#83639D');
                    colorvsp='Сине-сиреневый (4005)';
                    break;
                case 4006:
                    $('.block2_colorm').css('background-color', '#992572');
                    colorvsp='Транспортный пурпурный (4006)';
                    break;
                case 4007:
                    $('.block2_colorm').css('background-color', '#4A203B');
                    colorvsp='Пурпурно-фиолетовый (4007)';
                    break;
                case 4008:
                    $('.block2_colorm').css('background-color', '#904684');
                    colorvsp='Сигнальный фиолетовый (4008)';
                    break;
                case 4009:
                    $('.block2_colorm').css('background-color', '#A38995');
                    colorvsp='Пастельно-фиолетовый (4009)';
                    break;
                case 4010:
                    $('.block2_colorm').css('background-color', '#C63678');
                    colorvsp='Телемагента (4010)';
                    break;
                case 4011:
                    $('.block2_colorm').css('background-color', '#8773A1');
                    colorvsp='Перламутрово-фиолетовый (4011)';
                    break;
                case 4012:
                    $('.block2_colorm').css('background-color', '#6B6880');
                    colorvsp='Перламутрово-ежевичный (4012)';
                    break;
                case 5000:
                    $('.block2_colorm').css('background-color', '#384C70');
                    colorvsp='Фиолетово-синий (5000)';
                    break;
                case 5001:
                    $('.block2_colorm').css('background-color', '#1F4764');
                    colorvsp='Зелёно-синий (5001)';
                    break;
                case 5002:
                    $('.block2_colorm').css('background-color', '#2B2C7C');
                    colorvsp='Ультрамариново-синий (5002)';
                    break;
                case 5003:
                    $('.block2_colorm').css('background-color', '#2A3756');
                    colorvsp='Сапфирово-синий (5003)';
                    break;
                case 5004:
                    $('.block2_colorm').css('background-color', '#1D1F2A');
                    colorvsp='Чёрно-синий (5004)';
                    break;
                case 5005:
                    $('.block2_colorm').css('background-color', '#154889');
                    colorvsp='Сигнальный синий (5005)';
                    break;
                case 5007:
                    $('.block2_colorm').css('background-color', '#41678D');
                    colorvsp='Бриллиантово-синий (5007)';
                    break;
                case 5008:
                    $('.block2_colorm').css('background-color', '#313C48');
                    colorvsp='Серо-синий (5008)';
                    break;
                case 5009:
                    $('.block2_colorm').css('background-color', '#2E5978');
                    colorvsp='Лазурно-синий (5009)';
                    break;
                case 5010:
                    $('.block2_colorm').css('background-color', '#13447C');
                    colorvsp='Горечавково-синий (5010)';
                    break;
                case 5011:
                    $('.block2_colorm').css('background-color', '#232C3F');
                    colorvsp='Стально-синий (5011)';
                    break;
                case 5012:
                    $('.block2_colorm').css('background-color', '#3481B8');
                    colorvsp='Голубой (5012)';
                    break;
                case 5013:
                    $('.block2_colorm').css('background-color', '#232D53');
                    colorvsp='Лазурно-синий (5013)';
                    break;
                case 5014:
                    $('.block2_colorm').css('background-color', '#6C7C98');
                    colorvsp='Голубино-синий (5014)';
                    break;
                case 5015:
                    $('.block2_colorm').css('background-color', '#2874B2');
                    colorvsp='Небесно-синий (5015)';
                    break;
                case 5017:
                    $('.block2_colorm').css('background-color', '#0E518D');
                    colorvsp='Транспортный синий (5017)';
                    break;
                case 5018:
                    $('.block2_colorm').css('background-color', '#21888F');
                    colorvsp='Бирюзово-синий (5018)';
                    break;
                case 5019:
                    $('.block2_colorm').css('background-color', '#1A5784');
                    colorvsp='Капри синий (5019)';
                    break;
                case 5020:
                    $('.block2_colorm').css('background-color', '#0B4151');
                    colorvsp='Океанская синь (5020)';
                    break;
                case 5021:
                    $('.block2_colorm').css('background-color', '#07737A');
                    colorvsp='Водная синь (5021)';
                    break;
                case 5022:
                    $('.block2_colorm').css('background-color', '#2F2A5A');
                    colorvsp='Ночной синий (5022)';
                    break;
                case 5023:
                    $('.block2_colorm').css('background-color', '#4D668E');
                    colorvsp='Отдалённо-синий (5023)';
                    break;
                case 5024:
                    $('.block2_colorm').css('background-color', '#6A93B0');
                    colorvsp='Пастельно-синий (5024)';
                    break;
                case 5025:
                    $('.block2_colorm').css('background-color', '#07737A');
                    colorvsp='Перламутровый горечавково-синий (5025)';
                    break;
                case 5026:
                    $('.block2_colorm').css('background-color', '#102C54');
                    colorvsp='Ночной синий (5026)';
                    break;
                case 6000:
                    $('.block2_colorm').css('background-color', '#327662');
                    colorvsp='Патиново-зелёный (6000)';
                    break;
                case 6001:
                    $('.block2_colorm').css('background-color', '#28713E');
                    colorvsp='Изумрудно-зелёный (6001)';
                    break;
                case 6002:
                    $('.block2_colorm').css('background-color', '#276235');
                    colorvsp='Лиственно-зелёный (6002)';
                    break;
                case 6003:
                    $('.block2_colorm').css('background-color', '#4B573E');
                    colorvsp='Оливково-зелёный (6003)';
                    break;
                case 6004:
                    $('.block2_colorm').css('background-color', '#0E4243');
                    colorvsp='Сине-зелёный (6004)';
                    break;
                case 6005:
                    $('.block2_colorm').css('background-color', '#0F4336');
                    colorvsp='Зелёный мох (6005)';
                    break;
                case 6006:
                    $('.block2_colorm').css('background-color', '#40433B');
                    colorvsp='Серо-оливковый (6006)';
                    break;
                case 6007:
                    $('.block2_colorm').css('background-color', '#283424');
                    colorvsp='Бутылочно-зелёный (6007)';
                    break;
                case 6008:
                    $('.block2_colorm').css('background-color', '#35382E');
                    colorvsp='Коричнево-зелёный (6008)';
                    break;
                case 6009:
                    $('.block2_colorm').css('background-color', '#26392F');
                    colorvsp='Пихтовый зелёный (6009)';
                    break;
                case 6010:
                    $('.block2_colorm').css('background-color', '#3E753B');
                    colorvsp='Травяной зелёный (6010)';
                    break;
                case 6011:
                    $('.block2_colorm').css('background-color', '#66825B');
                    colorvsp='Резедово-зелёный (6011)';
                    break;
                case 6012:
                    $('.block2_colorm').css('background-color', '#31403D');
                    colorvsp='Чёрно-зелёный (6012)';
                    break;
                case 6013:
                    $('.block2_colorm').css('background-color', '#797C5A');
                    colorvsp='Тростниково-зелёный (6013)';
                    break;
                case 6014:
                    $('.block2_colorm').css('background-color', '#444337');
                    colorvsp='Жёлто-оливковый (6014)';
                    break;
                case 6015:
                    $('.block2_colorm').css('background-color', '#3D403A');
                    colorvsp='Чёрно-оливковый (6015)';
                    break;
                case 6016:
                    $('.block2_colorm').css('background-color', '#026A52');
                    colorvsp='Бирюзово-зелёный (6016)';
                    break;
                case 6017:
                    $('.block2_colorm').css('background-color', '#468641');
                    colorvsp='Тростниково-зелёный (6017)';
                    break;
                case 6018:
                    $('.block2_colorm').css('background-color', '#48A43F');
                    colorvsp='Желто-зелёный (6018)';
                    break;
                case 6019:
                    $('.block2_colorm').css('background-color', '#B7D9B1');
                    colorvsp='Бело-зелёный (6019)';
                    break;
                case 6020:
                    $('.block2_colorm').css('background-color', '#354733');
                    colorvsp='Хромовый зелёный (6020)';
                    break;
                case 6021:
                    $('.block2_colorm').css('background-color', '#86A47C');
                    colorvsp='Бледно-зелёный (6021)';
                    break;
                case 6022:
                    $('.block2_colorm').css('background-color', '#3E3C32');
                    colorvsp='Коричнево-оливковый (6022)';
                    break;
                case 6024:
                    $('.block2_colorm').css('background-color', '#008754');
                    colorvsp='Транспортный зелёный (6024)';
                    break;
                case 6025:
                    $('.block2_colorm').css('background-color', '#53753C');
                    colorvsp='Папоротниково-зелёный (6025)';
                    break;
                case 6026:
                    $('.block2_colorm').css('background-color', '#005D52');
                    colorvsp='Опаловый зелёный (6026)';
                    break;
                case 6027:
                    $('.block2_colorm').css('background-color', '#81C0BB');
                    colorvsp='Светло-зелёный (6027)';
                    break;
                case 6028:
                    $('.block2_colorm').css('background-color', '#2D5546');
                    colorvsp='Сосновый зелёный (6028)';
                    break;
                case 6029:
                    $('.block2_colorm').css('background-color', '#007243');
                    colorvsp='Мятно-зелёный (6029)';
                    break;
                case 6032:
                    $('.block2_colorm').css('background-color', '#0F8558');
                    colorvsp='Сигнальный зелёный (6032)';
                    break;
                case 6033:
                    $('.block2_colorm').css('background-color', '#478A84');
                    colorvsp='Мятно-бирюзовый (6033)';
                    break;
                case 6034:
                    $('.block2_colorm').css('background-color', '#7FB0B2');
                    colorvsp='Пастельно-бирюзовый (6034)';
                    break;
                case 6035:
                    $('.block2_colorm').css('background-color', '#1B542C');
                    colorvsp='Перламутрово-зелёный (6035)';
                    break;
                case 6036:
                    $('.block2_colorm').css('background-color', '#005D4C');
                    colorvsp='Перламутровый опаловый зелёный (6036)';
                    break;
                case 6037:
                    $('.block2_colorm').css('background-color', '#008F39');
                    colorvsp='Зелёный (6037)';
                    break;
                case 6038:
                    $('.block2_colorm').css('background-color', '#00BB2E');
                    colorvsp='Люминесцентный зелёный (6038)';
                    break;
                case 7000:
                    $('.block2_colorm').css('background-color', '#7E8B92');
                    colorvsp='Серая белка (7000)';
                    break;
                case 7001:
                    $('.block2_colorm').css('background-color', '#8F999F');
                    colorvsp='Серебристо-серый (7001)';
                    break;
                case 7002:
                    $('.block2_colorm').css('background-color', '#008F39');
                    colorvsp='Оливково-серый (7002)';
                    break;
                case 7003:
                    $('.block2_colorm').css('background-color', '#7A7B6D');
                    colorvsp='Серый мох (7003)';
                    break;
                case 7004:
                    $('.block2_colorm').css('background-color', '#9EA0A1');
                    colorvsp='Сигнальный серый (7004)';
                    break;
                case 7005:
                    $('.block2_colorm').css('background-color', '#6B716F');
                    colorvsp='Мышино-серый (7005)';
                    break;
                case 7006:
                    $('.block2_colorm').css('background-color', '#756F61');
                    colorvsp='Бежево-серый (7006)';
                    break;
                case 7008:
                    $('.block2_colorm').css('background-color', '#746643');
                    colorvsp='Серое хаки (7008)';
                    break;
                case 7009:
                    $('.block2_colorm').css('background-color', '#5B6259');
                    colorvsp='Зелёно-серый (7009)';
                    break;
                case 7010:
                    $('.block2_colorm').css('background-color', '#575D57');
                    colorvsp='Брезентово-серый (7010)';
                    break;
                case 7011:
                    $('.block2_colorm').css('background-color', '#555D61');
                    colorvsp='Железно-серый (7011)';
                    break;
                case 7012:
                    $('.block2_colorm').css('background-color', '#596163');
                    colorvsp='Базальтово-серый (7012)';
                    break;
                case 7013:
                    $('.block2_colorm').css('background-color', '#555548');
                    colorvsp='Коричнево-серый (7013)';
                    break;
                case 7015:
                    $('.block2_colorm').css('background-color', '#51565C');
                    colorvsp='Сланцево-серый (7015)';
                    break;
                case 7016:
                    $('.block2_colorm').css('background-color', '#373F43');
                    colorvsp='Антрацитово-серый (7016)';
                    break;
                case 7021:
                    $('.block2_colorm').css('background-color', '#2E3234');
                    colorvsp='Чёрно-серый (7021)';
                    break;
                case 7022:
                    $('.block2_colorm').css('background-color', '#4B4D46');
                    colorvsp='Серая умбра (7022)';
                    break;
                case 7023:
                    $('.block2_colorm').css('background-color', '#818479');
                    colorvsp='Серый бетон (7023)';
                    break;
                case 7024:
                    $('.block2_colorm').css('background-color', '#474A50');
                    colorvsp='Графитовый серый (7024)';
                    break;
                case 7026:
                    $('.block2_colorm').css('background-color', '#374447');
                    colorvsp='Гранитовый серый (7026)';
                    break;
                case 7030:
                    $('.block2_colorm').css('background-color', '#939388');
                    colorvsp='Каменно-серый (7030)';
                    break;
                case 7031:
                    $('.block2_colorm').css('background-color', '#5D6970');
                    colorvsp='Сине-серый (7031)';
                    break;
                case 7032:
                    $('.block2_colorm').css('background-color', '#B9B9A8');
                    colorvsp='Галечный серый (7032)';
                    break;
                case 7033:
                    $('.block2_colorm').css('background-color', '#818979');
                    colorvsp='Цементно-серый (7033)';
                    break;
                case 7034:
                    $('.block2_colorm').css('background-color', '#939176');
                    colorvsp='Жёлто-серый (7034)';
                    break;
                case 7035:
                    $('.block2_colorm').css('background-color', '#CBD0CC');
                    colorvsp='Светло-серый (7035)';
                    break;
                case 7036:
                    $('.block2_colorm').css('background-color', '#9A9697');
                    colorvsp='Платиново-серый (7036)';
                    break;
                case 7037:
                    $('.block2_colorm').css('background-color', '#7C7F7E');
                    colorvsp='Пыльно-серый (7037)';
                    break;
                case 7038:
                    $('.block2_colorm').css('background-color', '#B4B8B0');
                    colorvsp='Агатовый серый (7038)';
                    break;
                case 7039:
                    $('.block2_colorm').css('background-color', '#6B695F');
                    colorvsp='Кварцевый серый (7039)';
                    break;
                case 7040:
                    $('.block2_colorm').css('background-color', '#9DA3A6');
                    colorvsp='Серое окно (7040)';
                    break;
                case 7042:
                    $('.block2_colorm').css('background-color', '#8F9695');
                    colorvsp='Транспортный серый A (7042)';
                    break;
                case 7043:
                    $('.block2_colorm').css('background-color', '#4E5451');
                    colorvsp='Транспортный серый B (7043)';
                    break;
                case 7044:
                    $('.block2_colorm').css('background-color', '#BDBDB2');
                    colorvsp='Серый шёлк (7044)';
                    break;
                case 7045:
                    $('.block2_colorm').css('background-color', '#91969A');
                    colorvsp='Телегрей 1 (7045)';
                    break;
                case 7046:
                    $('.block2_colorm').css('background-color', '#82898E');
                    colorvsp='Телегрей 2 (7046)';
                    break;
                case 7047:
                    $('.block2_colorm').css('background-color', '#CFD0CF');
                    colorvsp='Телегрей 4 (7047)';
                    break;
                case 7048:
                    $('.block2_colorm').css('background-color', '#888175');
                    colorvsp='Перламутровый мышино-серый (7048)';
                    break;
                case 8000:
                    $('.block2_colorm').css('background-color', '#887142');
                    colorvsp='Зелёно-коричневый (8000)';
                    break;

                case 8001:
                    $('.block2_colorm').css('background-color', '#9C6B30');
                    colorvsp='Охра коричневая (8001)';
                    break;
                case 8002:
                    $('.block2_colorm').css('background-color', '#7B5141');
                    colorvsp='Сигнальный коричневый (8002)';
                    break;
                case 8003:
                    $('.block2_colorm').css('background-color', '#80542F');
                    colorvsp='Глиняный коричневый (8003)';
                    break;
                case 8004:
                    $('.block2_colorm').css('background-color', '#8F4E35');
                    colorvsp='Медно-коричневый (8004)';
                    break;
                case 8007:
                    $('.block2_colorm').css('background-color', '#6F4A2F');
                    colorvsp='Олень коричневый (8007)';
                    break;
                case 8008:
                    $('.block2_colorm').css('background-color', '#6F4F28');
                    colorvsp='Оливково-коричневый (8008)';
                    break;
                case 8011:
                    $('.block2_colorm').css('background-color', '#5A3A29');
                    colorvsp='Орехово-коричневый (8011)';
                    break;
                case 8012:
                    $('.block2_colorm').css('background-color', '#673831');
                    colorvsp='Красно-коричневый (8012)';
                    break;
                case 8014:
                    $('.block2_colorm').css('background-color', '#49392D');
                    colorvsp='Сепия коричневый (8014)';
                    break;
                case 8015:
                    $('.block2_colorm').css('background-color', '#633A34');
                    colorvsp='Каштаново-коричневый (8015)';
                    break;
                case 8016:
                    $('.block2_colorm').css('background-color', '#4C2F26');
                    colorvsp='Махагон коричневый (8016)';
                    break;
                case 8017:
                    $('.block2_colorm').css('background-color', '#44322D');
                    colorvsp='Шоколадно-коричневый (8017)';
                    break;
                case 8019:
                    $('.block2_colorm').css('background-color', '#3F3A3A');
                    colorvsp='Серо-коричневый (8019)';
                    break;
                case 8022:
                    $('.block2_colorm').css('background-color', '#211F20');
                    colorvsp='Чёрно-коричневый (8022)';
                    break;
                case 8023:
                    $('.block2_colorm').css('background-color', '#A65E2F');
                    colorvsp='Оранжево-коричневый (8023)';
                    break;
                case 8024:
                    $('.block2_colorm').css('background-color', '#79553C');
                    colorvsp='Шоколадно-коричневый (8024)';
                    break;
                case 8025:
                    $('.block2_colorm').css('background-color', '#755C49');
                    colorvsp='Бледно-коричневый (8025)';
                    break;
                case 8028:
                    $('.block2_colorm').css('background-color', '#4E3B2B');
                    colorvsp='Терракотовый (8028)';
                    break;
                case 8029:
                    $('.block2_colorm').css('background-color', '#773C27');
                    colorvsp='Перламутровый медный (8029)';
                    break;
                case 9001:
                    $('.block2_colorm').css('background-color', '#EFEBDC');
                    colorvsp='Кремово-белый (9001)';
                    break;
                case 9002:
                    $('.block2_colorm').css('background-color', '#DDDED4');
                    colorvsp='Светло-серый (9002)';
                    break;
                case 9003:
                    $('.block2_colorm').css('background-color', '#F4F8F4');
                    colorvsp='Сигнальный белый (9003)';
                    break;
                case 9004:
                    $('.block2_colorm').css('background-color', '#2E3032');
                    colorvsp='Сигнальный чёрный (9004)';
                    break;
                case 9005:
                    $('.block2_colorm').css('background-color', '#0A0A0D');
                    colorvsp='Чёрный янтарь (9005)';
                    break;
                case 9006:
                    $('.block2_colorm').css('background-color', '#A5A8A6');
                    colorvsp='Бело-алюминиевый (9006)';
                    break;
                case 9007:
                    $('.block2_colorm').css('background-color', '#8F8F8C');
                    colorvsp='Тёмно-алюминиевый (9007)';
                    break;
                case 9010:
                    $('.block2_colorm').css('background-color', '#F7F9EF');
                    colorvsp='Белый (9010)';
                    break;
                case 9011:
                    $('.block2_colorm').css('background-color', '#292C2F');
                    colorvsp='Графитно-чёрный (9011)';
                    break;
                case 9016:
                    $('.block2_colorm').css('background-color', '#F7FBF5');
                    colorvsp='Транспортный белый (9016)';
                    break;
                case 9017:
                    $('.block2_colorm').css('background-color', '#2A2D2F');
                    colorvsp='Транспортный чёрныйй (9017)';
                    break;
                case 9018:
                    $('.block2_colorm').css('background-color', '#CFD3CD');
                    colorvsp='Папирусно-белый (9018)';
                    break;
                case 9022:
                    $('.block2_colorm').css('background-color', '#9C9C9C');
                    colorvsp='Перламутровый светло-серый (9022)';
                    break;
                case 9023:
                    $('.block2_colorm').css('background-color', '#7E8182');
                    colorvsp='Перламутровый тёмно-серый (9023)';
                    break;

                default:
                    $('.block2_colorm').css('background-color', '#ffffff');
                    colorvsp='Белый';


            }

        }
    }



$("#ral").click(function (){
	var block = $(this).parents('.container_mob');
        block.find('.call_block2_mob').hide();
	  block.find('.call_blockRAL_mob').show();
});



$(".colorralm").click(function (){

    var colorvr=0;
    colorvr = $(this).attr('id');

    var colorid = $(this).attr('data-index');
    var colorzv = $(this).attr('data-color');
    var colorzv1 = $(this).attr('data-colorv');
    $('.block2_colorm').css({'background-color':colorzv});
    colorvsp=colorzv1;

    document.getElementById('ralcm').value=colorid;

		 var block = $(this).parents('.container_mob');
        block.find('.call_block2_mob').show();
		 block.find('.call_blockRAL_mob').hide();

	    });
    $('#but_RAL').click(function () {

        var block = $(this).parents('.container_mob');
        block.find('.call_block2_mob').show();
        block.find('.call_blockRAL_mob').hide();

        $('.block2_colorm').css('background-color', '#ffffff');
        colorvsp='Белый';

    });


    $('#but_zakazm').click(function () {

        Hs=document.getElementById('Hoknm').value;
        Ls=document.getElementById('Loknm').value;

        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_nes_mob').show();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
        Mob=2;
        Nok=Nok+1;
        var NN=Nok+1;
        $('#numberm').text(NN);
        zena();
    });

    $('#but_block_nes1_mob').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').show();
        block.find('.call_block1_mob_titel').show();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();

        //Здесь сохранение переметров 1 сетки
    });

    $('#but_block_nes2_mob').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').show();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block_setka2_mob').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').show();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });


    $('#but_block_setka1_mob').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').show();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block_zamer1').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').show();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block4_1').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').show();
    });

    $('#but_block4_2').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').show();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();

    });





    $('#but_block5_1').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').show();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block5_2').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').show();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });
  //  $('#but_block6_2').click(function () {
        //var block = $(this).parents('.container_mob');
        //block.find('.call_block1_mob').hide();
        //block.find('.call_block1_mob_titel').hide();
        //block.find('.call_block2_mob').hide();
        //block.find('.call_block3_mob').hide();
        //block.find('.call_block_nes_mob').hide();
        //block.find('.call_block_setka_mob').hide();
        //block.find('.call_block_samer1_mob').hide();
        //block.find('.call_block_samer2_mob').hide();
        //block.find('.call_block4_mob').hide();
        //block.find('.call_block_sam_mob').hide();
        //block.find('.call_block_itog_mob').hide();
        //block.find('.call_block_QR_mob').show();
        //block.find('.call_block_MAP_mob').hide();

        // sendAjaxForm('result_form', 'form2m', 'send2.php');
        // return false;












        //function sendAjaxForm(result_form, ajax_form, url) {
        //    $.ajax({
        //        url: url,
        //
        //        type:     "post", //метод отправки
        //        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        //        //dataType: "text", //формат данных
        //        dataType: "json", //формат данных
        //        success: function(response) { //Данные отправлены успешно
        //            //console.log(response);
        //            // отправляем данные в ГТМ
        //            dataLayer.push({'event':'formSendCalk'});
        //            if (response.status !== 'ok') {
        //                alert('Somthing went wrong');
        //                return;
        //            }
        //
        //        },
        //        error: function(response) { // Данные не отправлены
        //            $('#result_form').html('Ошибка. Данные не отправлены.');
        //
        //            $('#post_form_err').show();
        //        }
        //    });
        //};


        //var block = $(this).parents('.container_mob');
        //block.find('.call_block1_mob').hide();
        //block.find('.call_block1_mob_titel').hide();
        //block.find('.call_block2_mob').hide();
        //block.find('.call_block3_mob').hide();
        //block.find('.call_block_nes_mob').hide();
        //block.find('.call_block_setka_mob').hide();
        //block.find('.call_block_samer1_mob').hide();
        //block.find('.call_block_samer2_mob').hide();
        //block.find('.call_block4_mob').hide();
        //block.find('.call_block_sam_mob').hide();
        //block.find('.call_block_itog_mob').hide();
        //block.find('.call_block_QR_mob').show();
        //block.find('.call_block_MAP_mob').hide();
   // });

    // function sendAjaxForm(result_form, ajax_form, url) {
    //     $.ajax({
    //         url: url,
    //
    //         type:     "post", //метод отправки
    //         data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
    //         //dataType: "text", //формат данных
    //         dataType: "json", //формат данных
    //         success: function(response) { //Данные отправлены успешно
    //             //console.log(response);
    //             // отправляем данные в ГТМ
    //             dataLayer.push({'event':'formSendCalk'});
    //             if (response.status !== 'ok') {
    //                 alert('Somthing went wrong');
    //                 return;
    //             }
    //             var block = $(this).parents('.container_mob');
    //             block.find('.call_block1_mob').hide();
    //             block.find('.call_block1_mob_titel').hide();
    //             block.find('.call_block2_mob').hide();
    //             block.find('.call_block3_mob').hide();
    //             block.find('.call_block_nes_mob').hide();
    //             block.find('.call_block_setka_mob').hide();
    //             block.find('.call_block_samer1_mob').hide();
    //             block.find('.call_block_samer2_mob').hide();
    //             block.find('.call_block4_mob').hide();
    //             block.find('.call_block_sam_mob').hide();
    //             block.find('.call_block_itog_mob').hide();
    //             block.find('.call_block_QR_mob').show();
    //             block.find('.call_block_MAP_mob').hide();
    //
    //         },
    //         error: function(response) { // Данные не отправлены
    //             $('#result_form').html('Ошибка. Данные не отправлены.');
    //
    //             $('#post_form_err').show();
    //         }
    //     });
    // }


    $('#but_block6_1').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').show();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
    });

    $('#but_block8_1').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').show();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();
        var itogzena_dev=ZsetkaVuv*1+priceV*1;
        //alert(ZsetkaVuv)
        //alert(priceV)
        itogzena_dev=itogzena_dev.toFixed(2);
        var itogzena_devv=itogzena_dev+' '+'руб';

        $('#itogzena').text(itogzena_devv);
        $('#itogzena_mail').text(itogzena_dev);

    });
    $('#but_block8_2').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').show();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();

    });

    $('#spez_zamer_mob').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').show();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').hide();
        block.find('.call_block_MAP_mob').hide();

    });



    //=================================================//
    $("#adres2_dev").on('change',function () {

        var chd=document.getElementById('radio-map1_dev');

        if (chd.checked) {

             ymaps.ready(function () {
                var pointA = "Астрахань, 1й проезд Рождественского, 1А"; //Откуда считаем
               //var pointB = "улица Михаила Луконина, 10к1"; //Куда считаем
                var pointB = document.getElementById('adres2_dev').value; //Куда считаем

                var cit=pointB.includes('Астрахань');

                if (cit==false){

                    pointB='Астрахань,'+pointB;
                }

               // улица Михаила Луконина, 10к1

                ymaps.route([pointA, pointB]).then(
                    function (route) {

                        var distance = route.getHumanLength(); //Получаем расстояние
                       var Lvv = distance.split('&')[0];

                        priceV=Lvv*1*40.726;
                        $("#dostavka_dev").text(priceV);
                        var itogzena_dev=ZsetkaVuv*1+priceV*1;

                        itogzena_dev=itogzena_dev.toFixed(2);

                        var itogzena_devv=itogzena_dev +' '+'руб' ;

                        $('#itogzena_dev').text(itogzena_devv);
                        $('#itogzena_mail').text(itogzena_dev);
                        //  var length2 = route.getActiveRoute().properties.get("distance");
                      //  alert(length2.value);
                        //   map.geoObjects.add(route); //Рисуем маршрут на карте
                    });
            });

        }





    });

    //=================================================//

    $("#adres2").on('change',function () {

        var chd=document.getElementById('radio-map1');

        if (chd.checked) {


            ymaps.ready(function () {
                var pointA = "Астрахань, 1й проезд Рождественского, 1А"; //Откуда считаем
               var pointB = document.getElementById('adres2').value; //Куда считаем

                var cit=pointB.includes('Астрахань');
               if (cit==false){
                    pointB='Астрахань,'+pointB;
                }

                // улица Михаила Луконина, 10к1

                ymaps.route([pointA, pointB]).then(
                    function (route) {

                        var distance = route.getHumanLength(); //Получаем расстояние

                        var Lvv = distance.split('&')[0];

                        priceV=Lvv*1*40.726;
                        $("#dostavka").text(priceV);
                        var itogzena=ZsetkaVuv*1+priceV*1;

                        itogzena=itogzena.toFixed(2);
                        var itogzenav=itogzena+' ' +'руб';

                            $('#itogzena').text(itogzenav);
                        $('#itogzena_mailm').text(itogzena);

                        //  var length2 = route.getActiveRoute().properties.get("distance");
                        //  alert(length2.value);
                        //   map.geoObjects.add(route); //Рисуем маршрут на карте
                    });
            });

        }

    });

    //=================================================//
    function zena() {


        //=== верстка для обычных экранов====//
        if (Mob==1){
          //=== Определяем тип сетки====//
            var TupeSV='';

            var TupeS=document.getElementsByName('radio');
            var TupeSN=document.getElementsByName('radio').length;
             for (var i = 0; i < TupeSN; i++){
                if (TupeS[i].checked) {
                    TupeSV = TupeS[i].value;
                }
            }

            TupeSVspan=TupeSVspan+TupeSV+',   ';
             //=======Вывод на форму итогов===========//
             $('#typepol_dev').text(TupeSVspan);
            $('#typepol_mail').text(TupeSVspan);

            //=== Определяем цвет сетки====//
            var ColorSV='';

            var ColorS=document.getElementsByName('radio_color');
            var ColorSN=document.getElementsByName('radio_color').length;
            for (var i = 0; i < ColorSN; i++){
                if (ColorS[i].checked) {
                    ColorSV = ColorS[i].value;
                }
            }

            //ColorSVspan=ColorSVspan+ColorSV+',   ';
            ColorSVspan=ColorSVspan+colorvsp+',   ';

           // colorvsp

            //=======Вывод на форму итогов===========//
            $('#colorpol_dev').text(ColorSVspan);
            $('#colorpol_mail').text(ColorSVspan);

        //=== Определяем необходимость крепежа====//
            var ZSV='';
            var ZS=document.getElementById('box1');
            if (ZS.checked) {
                ZSV = ZS.value;
            }
            else{
                ZSV ='Нет';
            }
            ZVspan=ZVspan+ ZSV+',   ';

        //=======Вывод на форму итогов===========//
        $('#devpol_dev').text(ZVspan);
        $('#devpol_mail').text(ZVspan);

       //=======Вывод на форму итогов===========//
        $('#num_dev').text(Nok);
        $('#num_mail').text(Nok);


          ///var Hs=document.getElementById('Hoknm').value;
          //var Ls=document.getElementById('Loknm').value;

        Rok=Rok+Hs+'мм'+' x '+Ls+'мм'+',   ';
       //=======Вывод на форму итогов===========//
        $('#rasmer_dev').text(Rok);
        $('#rasmer_mail').text(Rok);



        var Pokna=(Hs*2+Ls*2)/1000;
        var Sokna=(Hs/1000)*(Ls/1000);

      //===Натяжной шнур МС-БАЗА d=4,8 мм, ребристый =====///
        var Nsnur=Pokna* 1.05;
        Nsnur=Nsnur.toFixed(2);
        var Zsnur=Pokna*(31.6/4.35);
        Zsnur=Zsnur.toFixed(2);

        //===Профиль МС поперечный 8х20, бел./6,0м/RAL9016 ===//

         var Npr820=1.05*Ls/1000;
         var Zpr820=(90.94/1.05)*(Ls/1000+0.15);
        Zpr820=Zpr820.toFixed(2);


      //===Профиль МС СТАН 10х25 бел.основной белый  ===//

        var N1025=Pokna*1.1;
        N1025=N1025.toFixed(2);
        var Z1025=(262.36/4.14)*Pokna;
        Z1025=Z1025.toFixed(2);

       //=====Сетка ПВХ серая 1,6х30м======//
        var Ssetka=Sokna*1.5;
        var Zsetka;

        if(TupeSV=='Стандарт'){
            Zsetka=(117/1.5)*Ssetka;
         }
        if(TupeSV=='Антимошка'){
            Zsetka=(1172.57/1.5)*Ssetka;
         }
        if(TupeSV=='Антикошка'){
            Zsetka=(1118.25/1.5)*Ssetka;
         }
        Zsetka=Zsetka.toFixed(2);

        //=======Изготовление москитной сетки ====//
          var  Zisg=91.71;

        //======Шуруп с буром по металлу с потайной головкой 3,9х16======//
        var  Zshurup=17.2;
        ///======Крепёж поперечный МС-СТАН (под заклепку) ======//
          var  Zkrep=13.13;
        //======Заклепка (3,2х6)======//
          var  Zzakp=9.87;
        //=====Ручка Bauset для МС (2 винта креп на попереч),бел. ===//
           var  Zruzka=30.63;
        //=====Уголок Bauset для профиля МС, бел.. ===//
            var  Zygol=35.01;
        //=====Комплект белых метал. кронштейнов для крепежа МС ===//
            var  Zkompl=41.57;
        ///=======Расчет цены======///
        var Z1=Zsnur*1+Zpr820*1+Z1025*1+Zisg*1+Zshurup*1+Zkrep*1+Zzakp*1+Zruzka*1+Zygol*1+Zkompl*1;
        Z1=Z1.toFixed(2);
        if (Z1<630){
            Z1=630
        }

        var ZsetkaV=Z1*1+Zsetka*1;
        ZsetkaV=ZsetkaV.toFixed(2);
           // console.log(ZsetkaV);

        ZsetkaVuv= ZsetkaVuv*1+ZsetkaV*1;
           // console.log(ZsetkaVuv);
        ZsetkaVuv=ZsetkaVuv.toFixed(2);

        $('#zena_dev').text(ZsetkaVuv);
            $('#zena_mail').text(ZsetkaVuv);

            $("#dostavka_dev").text(priceV);
            $("#dostavka_mail").text(priceV);

            ///var itogzena_devm=ZsetkaVuv*1+priceV*1;
             //   $('#itogzena_dev').text(itogzena_devm);
            //$('#itogzena_mail').text(itogzena_devm);

     }


        //=== верстка для мобильных  экранов====//
        if (Mob==2){
             //=== Определяем тип сетки====//
            var TupeSV='';

            var TupeS=document.getElementsByName('radio_mob');
            var TupeSN=document.getElementsByName('radio_mob').length;
            for (var i = 0; i < TupeSN; i++){
                if (TupeS[i].checked) {
                    TupeSV = TupeS[i].value;
                }
            }

            TupeSVspan=TupeSVspan+TupeSV+',   ';

            //=======Вывод на форму итогов===========//
            $('#typepol').text(TupeSVspan);
            $('#typepol_mailm').text(TupeSVspan);

            //=== Определяем цвет сетки====//
            var ColorSV='';

            var ColorS=document.getElementsByName('radio_color_mob');
            var ColorSN=document.getElementsByName('radio_color_mob').length;
             for (var i = 0; i < ColorSN; i++){
                if (ColorS[i].checked) {
                    ColorSV = ColorS[i].value;
                }
            }

            //ColorSVspan=ColorSVspan+ColorSV+',   ';
            ColorSVspan=ColorSVspan+colorvsp+',   ';
            //=======Вывод на форму итогов===========//
            $('#colorpol').text(ColorSVspan);
            $('#colorpol_mailm').text(ColorSVspan);

            //=== Определяем необходимость крепежа====//
            var ZSV='';
            var ZS=document.getElementById('box1m');
            if (ZS.checked) {
                ZSV = ZS.value;
            }
            else{
                ZSV ='Нет';
            }
            ZVspan=ZVspan+ ZSV+',   ';
            //}
            //=======Вывод на форму итогов===========//
            $('#devpol').text(ZVspan);
            $('#devpol_mailm').text(ZVspan);
            //=======Вывод на форму итогов===========//
            $('#num_dev').text(Nok);
            $('#num_mailm').text(Nok);

            /*var Hs=document.getElementById('Hoknm').value;
             var Ls=document.getElementById('Loknm').value;
             */
            Rok=Rok+Hs+'мм'+' x '+Ls+'мм'+',   ';
            //=======Вывод на форму итогов===========//
            $('#rasmer').text(Rok);
            var Pokna=(Hs*2+Ls*2)/1000;
            var Sokna=(Hs/1000)*(Ls/1000);

            //===Натяжной шнур МС-БАЗА d=4,8 мм, ребристый =====///
            var Nsnur=Pokna* 1.05;
            Nsnur=Nsnur.toFixed(2);
            var Zsnur=Pokna*(31.6/4.35);
            Zsnur=Zsnur.toFixed(2);

            //===Профиль МС поперечный 8х20, бел./6,0м/RAL9016 ===//

            var Npr820=1.05*Ls/1000;
            var Zpr820=(90.94/1.05)*(Ls/1000+0.15);
            Zpr820=Zpr820.toFixed(2);


            //===Профиль МС СТАН 10х25 бел.основной белый  ===//

            var N1025=Pokna*1.1;
            N1025=N1025.toFixed(2);
            var Z1025=(262.36/4.14)*Pokna;
            Z1025=Z1025.toFixed(2);

            //=====Сетка ПВХ серая 1,6х30м======//
            var Ssetka=Sokna*1.5;
            var Zsetka;

            if(TupeSV=='Стандарт'){
                Zsetka=(117/1.5)*Ssetka;
            }
            if(TupeSV=='Антимошка'){
                Zsetka=(1172.57/1.5)*Ssetka;
            }
            if(TupeSV=='Антикошка'){
                Zsetka=(1118.25/1.5)*Ssetka;
            }
            Zsetka=Zsetka.toFixed(2);

            //=======Изготовление москитной сетки ====//
            var  Zisg=91.71;

            //======Шуруп с буром по металлу с потайной головкой 3,9х16======//

            var  Zshurup=17.2;

            ///======Крепёж поперечный МС-СТАН (под заклепку) ======//
            var  Zkrep=13.13;

            //======Заклепка (3,2х6)======//
            var  Zzakp=9.87;

            //=====Ручка Bauset для МС (2 винта креп на попереч),бел. ===//
            var  Zruzka=30.63;

            //=====Уголок Bauset для профиля МС, бел.. ===//
            var  Zygol=35.01;

            //=====Комплект белых метал. кронштейнов для крепежа МС ===//
            var  Zkompl=41.57;

            ///=======Расчет цены======///
            var Z1=Zsnur*1+Zpr820*1+Z1025*1+Zisg*1+Zshurup*1+Zkrep*1+Zzakp*1+Zruzka*1+Zygol*1+Zkompl*1;
            Z1=Z1.toFixed(2);
            if (Z1<630){
                Z1=630
            }

            var ZsetkaV=Z1*1+Zsetka*1;
            ZsetkaV=ZsetkaV.toFixed(2)
            ZsetkaVuv= ZsetkaVuv*1+ZsetkaV*1;
            ZsetkaVuv=ZsetkaVuv.toFixed(2);
            $('#zena').text(ZsetkaVuv);
            $('#zena_mailm').text(ZsetkaVuv);

            //$("#dostavka").text(priceV);
            var itogzena_devm=ZsetkaVuv*1+priceV*1;

            itogzena_devm=itogzena_devm.toFixed(2);
            var itogzena_devmv=itogzena_devm+' '+'руб';

            $('#itogzena').text(itogzena_devmv);
            $('#itogzena_mailm').text(itogzena_devm);

        }

    };
});














