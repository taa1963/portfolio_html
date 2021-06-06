var Mob,TupeSVspan,ColorSVspan, Nok, ZVspan,Rok,Hs,Ls,ZsetkaVuv;

Mob=1;
TupeSVspan='';
ColorSVspan='';
ZVspan='';
Nok=0;
Rok='';
Hs=0;
Ls=0;
ZsetkaVuv=0;
$(document).ready(function() {

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

    //function sizeHm() {
    //    var  Hokna;
    //
    //    Hokna = document.getElementById('Hoknm').value;
    //    $('#Hoknam').text(Hokna);
    //    Hs=Hokna;
    //    alert(Hs)
    //}
    //
    //window.sizeHm=sizeHm;

    $('#but_zakaz').click(function () {
        Hs=document.getElementById('Hokn').value;
        //alert(Hs)
        Ls=document.getElementById('Lokn').value;
        //alert(Ls)

        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').show();
        // Hs=document.getElementById('Hoknm').value;
        //alert(Hs)
        // Ls=document.getElementById('Loknm').value;
        //alert(Ls)

        Mob=1;
        Nok=Nok+1;


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

    $('#but_zakazm').click(function () {
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

    function zena() {


        //=== верстка для обычных экранов====//
        if (Mob==1){


            //=== Определяем тип сетки====//
            var TupeSV='';

            var TupeS=document.getElementsByName('radio');
            var TupeSN=document.getElementsByName('radio').length;
            //alert(TupeSN)
            for (var i = 0; i < TupeSN; i++){
                if (TupeS[i].checked) {
                    TupeSV = TupeS[i].value;
                }
            }

            TupeSVspan=TupeSVspan+TupeSV+',   ';
            //alert(TupeSN)
           // alert(TupeSVspan);
            //=======Вывод на форму итогов===========//
             $('#typepol_dev').text(TupeSVspan);

            //=== Определяем цвет сетки====//
            var ColorSV='';

            var ColorS=document.getElementsByName('radio_color');
            var ColorSN=document.getElementsByName('radio_color').length;
            //alert(TupeSN)
            for (var i = 0; i < ColorSN; i++){
                if (ColorS[i].checked) {
                    ColorSV = ColorS[i].value;
                }
            }

            ColorSVspan=ColorSVspan+ColorSV+',   ';
            //=======Вывод на форму итогов===========//
            $('#colorpol_dev').text(ColorSVspan);
            //alert(TupeSN)
           // alert(ColorSVspan);


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
           }
        //=======Вывод на форму итогов===========//
        $('#devpol_dev').text(ZVspan);
       //=======Вывод на форму итогов===========//
        $('#num_dev').text(Nok);

          /*var Hs=document.getElementById('Hoknm').value;
          var Ls=document.getElementById('Loknm').value;
*/
        Rok=Rok+Hs+'мм'+' x '+Ls+'мм'+',   ';
       //=======Вывод на форму итогов===========//
        $('#rasmer_dev').text(Rok);


        var Pokna=(Hs*2+Ls*2)/1000;
        var Sokna=(Hs/1000)*(Ls/1000);


       // console.log("p="+Pokna)
       // console.log("S="+Sokna)


      //===Натяжной шнур МС-БАЗА d=4,8 мм, ребристый =====///
        var Nsnur=Pokna* 1.05;
        Nsnur=Nsnur.toFixed(2);
        //console.log("N="+Nsnur)


        var Zsnur=Pokna*(31.6/4.35);
        Zsnur=Zsnur.toFixed(2);

        //===Профиль МС поперечный 8х20, бел./6,0м/RAL9016 ===//

         var Npr820=1.05*Ls/1000;
        //console.log("L="+Ls)
        //console.log("H="+Hs)
        //   console.log("N="+Npr820)

        var Zpr820=(90.94/1.05)*(Ls/1000+0.15);
        Zpr820=Zpr820.toFixed(2);
        //console.log("Z="+Zpr820)

      //===Профиль МС СТАН 10х25 бел.основной белый  ===//

        var N1025=Pokna*1.1;
        N1025=N1025.toFixed(2);
       // console.log("N="+N1025)

        var Z1025=(262.36/4.14)*Pokna;
        Z1025=Z1025.toFixed(2);
       // console.log("Z="+Z1025)



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
       // console.log(Z1);
        if (Z1<630){
            Z1=630
        }

        var ZsetkaV=Z1*1+Zsetka*1;
        ZsetkaV=ZsetkaV.toFixed(2)
       // console.log(Zsetka);
       // console.log(ZsetkaV);

        ZsetkaVuv= ZsetkaVuv+ZsetkaV*1;
        ZsetkaVuv=ZsetkaVuv.toFixed(2);
        $('#zena_dev').text(ZsetkaVuv);

    };




});














