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

    //$(".ymaps-2-1-78-route-panel-input__input:eq(0)").css("color", "red");
    //$(".ymaps-2-1-78-route-panel-input__input").css("color", "red");
    //var topar=document.getElementsByClassName('ymaps-2-1-78-route-panel-input__icon_last');
    //
    //$(".ymaps-2-1-78-route-panel-input__icon_last").css("color", "red");
    //routePanelControl.routePanel.state.get('to').css("color", "red");

    //var ww5=$('.ymaps-2-1-78-route-panel-input__input');
    //var N=ww5.length;
    //console.log(N)
    //for(var i=0; i < ww5.length; i++){
    //    var row = ww5[i];
    //    //additionally, you can use it again in a jquery selector
    //    $(row).css("color", "red");
    //    //alert('red')
    //}


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

    $('#but_block6_2_dev').click(function () {
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
        block.find('.call_block_itog_dev').hide();
        block.find('.call_block_QR_dev').show();

        sendAjaxForm('result_form', 'form2', '../send2.php');
        return false;


        function sendAjaxForm(result_form, ajax_form, url) {
            $.ajax({
                url: url,

                type:     "post", //метод отправки
                data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
                //dataType: "text", //формат данных
                dataType: "json", //формат данных
                success: function(response) { //Данные отправлены успешно
                    //console.log(response);
                    // отправляем данные в ГТМ
                    dataLayer.push({'event':'formSendCalk'});
                    if (response.status !== 'ok') {
                        alert('Somthing went wrong');
                        return;
                    }


                  //  });




                },
                error: function(response) { // Данные не отправлены
                    $('#result_form').html('Ошибка. Данные не отправлены.');

                    $('#post_form_err').show();
                }
            });
        };

    });

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
        var str = colorvr.slice(6,10);
        colorvr=+str;

        switch (colorvr) {
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
                colorvsp='Жемчужно-белый (1013)';
                break;
            case 1014:
                $('.block2_color').css('background-color', '#DED09F');
                colorvsp='Слоновая кость (1014)';
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


            default:
                $('.block2_color').css('background-color', '#ffffff');
                colorvsp='Белый';

        }


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
            colorvsp='Белый';
        }
    });

    $('#radio-31m').click(function () {
        $('.block2_colorm').addClass('block2_colorm_active');

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
                    colorvsp='Жемчужно-белый (1013)';
                    break;
                case 1014:
                    $('.block2_colorm').css('background-color', '#DED09F');
                    colorvsp='Слоновая кость (1014)';
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
    var str = colorvr.slice(5,9);
    colorvr=+str;

    switch (colorvr) {
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
            colorvsp='Жемчужно-белый (1013)';
            break;
        case 1014:
            $('.block2_colorm').css('background-color', '#DED09F');
            colorvsp='Слоновая кость (1014)';
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


        default:
            $('.block2_colorm').css('background-color', '#ffffff');
            colorvsp='Белый';

    }
		 
		 
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
    $('#but_block6_2').click(function () {
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
        block.find('.call_block_QR_mob').show();
        block.find('.call_block_MAP_mob').hide();

        sendAjaxForm('result_form', 'form2', 'send2.php');
        return false;


        function sendAjaxForm(result_form, ajax_form, url) {
            $.ajax({
                url: url,

                type:     "post", //метод отправки
                data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
                //dataType: "text", //формат данных
                dataType: "json", //формат данных
                success: function(response) { //Данные отправлены успешно
                    //console.log(response);
                    // отправляем данные в ГТМ
                    dataLayer.push({'event':'formSendCalk'});
                    if (response.status !== 'ok') {
                        alert('Somthing went wrong');
                        return;
                    }


                    //  });




                },
                error: function(response) { // Данные не отправлены
                    $('#result_form').html('Ошибка. Данные не отправлены.');

                    $('#post_form_err').show();
                }
            });
        };


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
        block.find('.call_block_QR_mob').show();
        block.find('.call_block_MAP_mob').hide();
    });

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














