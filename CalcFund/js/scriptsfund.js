var  VarFund;

VarFund=1;

$(document).ready(function() {

//========== Клик на пункте Лента=======//

    $('#zakas_menu1').click(function () {
        $("#zakas_menu1").addClass("menuclik");
        $("#zakas_menu2").removeClass("menuclik");
        $("#zakas_menu3").removeClass("menuclik");
        $("#zakas_menu4").removeClass("menuclik");
        $("#zakas_menu5").removeClass("menuclik");
        $("#zakas_menu6").removeClass("menuclik");
        VarFund=1;
        //========== скрытие  блоков=======//
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_pl').hide();
        block.find('.zakas_proportions_plnr').hide();
        block.find('.zakas_proportions_plvr').hide();
        block.find('.zakas_proportions_pluhp').hide();
        block.find('.zakas_proportions_plzok').hide();
        block.find('.zakas_services_plita').hide();
        block.find('.zakas_services_plitanr').hide();
        block.find('.zakas_services_plitavr').hide();
        block.find('.zakas_services_uhd').hide();
        block.find('.zakas_services_zok').hide();
        block.find('.zakas_img_plita').hide();
        block.find('.zakas_img_plitanr').hide();
        block.find('.zakas_img_plitavr').hide();
        block.find('.zakas_img_uhd').hide();
        block.find('.zakas_img_zok').hide();



        //==========  открытие блоков=======//
        block.find('.zakas_proportions_len').show();
        block.find('.zakas_services_lenta').show();
        block.find('.zakas_img_lenta').show();


    });



    //========== Клик на пункте Плита=======//

    $('#zakas_menu2').click(function () {

        //========== фокус на пункт меню=======//
        $("#zakas_menu2").addClass("menuclik");
        $("#zakas_menu1").removeClass("menuclik");
        $("#zakas_menu3").removeClass("menuclik");
        $("#zakas_menu4").removeClass("menuclik");
        $("#zakas_menu5").removeClass("menuclik");
        $("#zakas_menu6").removeClass("menuclik");
        VarFund=2;
        //========== открытие блоков плиты=======//
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_pl').show();
        block.find('.zakas_services_plita').show();
        block.find('.zakas_img_plita').show();


        //========== закрытие  блоков ленты и др=======//
        block.find('.zakas_proportions_len').hide();
        block.find('.zakas_proportions_plnr').hide();
        block.find('.zakas_proportions_plvr').hide();
        block.find('.zakas_proportions_pluhp').hide();
        block.find('.zakas_proportions_plzok').hide();
        block.find('.zakas_services_lenta').hide();
        block.find('.zakas_services_plitanr').hide();
        block.find('.zakas_services_plitavr').hide();
        block.find('.zakas_services_uhd').hide();
        block.find('.zakas_services_zok').hide();
        block.find('.zakas_img_plitanr').hide();
        block.find('.zakas_img_plitavr').hide();
        block.find('.zakas_img_uhd').hide();
        block.find('.zakas_img_zok').hide();
        block.find('.zakas_img_lenta').hide();

    });



    //========== Клик на пункте Плита с нижним ростверком=======//

    $('#zakas_menu3').click(function () {
        $("#zakas_menu3").addClass("menuclik");
        $("#zakas_menu1").removeClass("menuclik");
        $("#zakas_menu2").removeClass("menuclik");
        $("#zakas_menu4").removeClass("menuclik");
        $("#zakas_menu5").removeClass("menuclik");
        $("#zakas_menu6").removeClass("menuclik");
        VarFund=3;
        //========== открытие блоков плиты=======//
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_plnr').show();
        block.find('.zakas_services_plitanr').show();
        block.find('.zakas_img_plitanr').show();


        //========== закрытие  блоков ленты и др=======//
        block.find('.zakas_proportions_len').hide();
        block.find('.zakas_proportions_pl').hide();
        block.find('.zakas_proportions_plvr').hide();
        block.find('.zakas_proportions_pluhp').hide();
        block.find('.zakas_proportions_plzok').hide();
        block.find('.zakas_services_lenta').hide();
        block.find('.zakas_services_plita').hide();
        block.find('.zakas_services_plitavr').hide();
        block.find('.zakas_services_uhd').hide();
        block.find('.zakas_services_zok').hide();
        block.find('.zakas_img_plitavr').hide();
        block.find('.zakas_img_uhd').hide();
        block.find('.zakas_img_zok').hide();
        block.find('.zakas_img_lenta').hide();
        block.find('.zakas_img_plita').hide();



    });

    //========== Клик на пункте Плита с верхним ростверком=======//

    $('#zakas_menu4').click(function () {
        $("#zakas_menu4").addClass("menuclik");
        $("#zakas_menu1").removeClass("menuclik");
        $("#zakas_menu2").removeClass("menuclik");
        $("#zakas_menu3").removeClass("menuclik");
        $("#zakas_menu5").removeClass("menuclik");
        $("#zakas_menu6").removeClass("menuclik");
        VarFund=6;

        //========== скрытие  блоков=======//
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_pl').hide();
        block.find('.zakas_proportions_plnr').hide();
        block.find('.zakas_proportions_len').hide();
        block.find('.zakas_proportions_pluhp').hide();
        block.find('.zakas_proportions_plzok').hide();
        block.find('.zakas_services_lenta').hide();
        block.find('.zakas_services_plita').hide();
        block.find('.zakas_services_plitanr').hide();
        block.find('.zakas_services_uhd').hide();
        block.find('.zakas_services_zok').hide();
        block.find('.zakas_img_plitanr').hide();
        block.find('.zakas_img_uhd').hide();
        block.find('.zakas_img_zok').hide();
        block.find('.zakas_img_lenta').hide();
        block.find('.zakas_img_plita').hide();


        //==========  открытие блоков=======//

        block.find('.zakas_proportions_plvr').show();
        block.find('.zakas_services_plitavr').show();
        block.find('.zakas_img_plitavr').show();

    });

    //========== Клик на пункте УШП=======//

    $('#zakas_menu5').click(function () {
        $("#zakas_menu5").addClass("menuclik");
        $("#zakas_menu1").removeClass("menuclik");
        $("#zakas_menu2").removeClass("menuclik");
        $("#zakas_menu3").removeClass("menuclik");
        $("#zakas_menu4").removeClass("menuclik");
        $("#zakas_menu6").removeClass("menuclik");
        VarFund=5;
        //========== скрытие  блоков=======//
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_pl').hide();
        block.find('.zakas_proportions_plnr').hide();
        block.find('.zakas_proportions_len').hide();
        block.find('.zakas_proportions_plvr').hide();
        block.find('.zakas_proportions_plzok').hide();
        block.find('.zakas_services_lenta').hide();
        block.find('.zakas_services_plita').hide();
        block.find('.zakas_services_plitanr').hide();
        block.find('.zakas_services_plitavr').hide();
        block.find('.zakas_services_zok').hide();
        block.find('.zakas_img_plitanr').hide();
        block.find('.zakas_img_plitavr').hide();
        block.find('.zakas_img_zok').hide();
        block.find('.zakas_img_lenta').hide();
        block.find('.zakas_img_plita').hide();

        //==========  открытие блоков=======//
        block.find('.zakas_proportions_pluhp').show();
        block.find('.zakas_services_uhd').show();
        block.find('.zakas_img_uhd').show();



    });

    //========== Клик на пункте Цокольный=======//

    $('#zakas_menu6').click(function () {
        $("#zakas_menu6").addClass("menuclik");
        $("#zakas_menu1").removeClass("menuclik");
        $("#zakas_menu2").removeClass("menuclik");
        $("#zakas_menu3").removeClass("menuclik");
        $("#zakas_menu4").removeClass("menuclik");
        $("#zakas_menu5").removeClass("menuclik");
        VarFund=6;
        var block = $(this).parents('.content');
        block.find('.zakas_proportions_pl').hide();
        block.find('.zakas_proportions_plnr').hide();
        block.find('.zakas_proportions_len').hide();
        block.find('.zakas_proportions_plvr').hide();
        block.find('.zakas_proportions_pluhp').hide();
        block.find('.zakas_services_lenta').hide();
        block.find('.zakas_services_plita').hide();
        block.find('.zakas_services_plitanr').hide();
        block.find('.zakas_services_plitavr').hide();
        block.find('.zakas_services_uhd').hide();
        block.find('.zakas_img_plitanr').hide();
        block.find('.zakas_img_plitavr').hide();
        block.find('.zakas_img_uhd').hide();
        block.find('.zakas_img_lenta').hide();
        block.find('.zakas_img_plita').hide();



        //==========  открытие блоков=======//
        block.find('.zakas_proportions_plzok').show();
        block.find('.zakas_services_zok').show();
        block.find('.zakas_img_zok').show();

    });




//========== Отображение границ длины на картинке при фокусе на блоке Длина  =======================================//

    $('.landf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_01').show();
    });

    $('.landf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_01').hide();
        if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2').show();
            block.find('.basic1').hide();

            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landf').value;
            var s1 = document.getElementById('breadthf').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perim=2*l1+2*s1;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;

        }
        else{
            block.find('.basic1').show();
            block.find('.basic2').hide();
        }
    });


    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

    $('.breadthf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_02').show();
    });

    $('.breadthf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_02').hide();
        if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2').show();
            block.find('.basic1').hide();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landf').value;
            var s1 = document.getElementById('breadthf').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perim=2*l1+2*s1;
            s1=+s1;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
        }
        else{
            block.find('.basic1').show();
            block.find('.basic2').hide();
        }
    });



    //========== Отображение границ высоты на картинке при фокусе на блоке Высота ленты  =======================================//

    $('.elevationf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_03').show();
    });

    $('.elevationf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_03').hide();

    });

//========== Отображение границ ширины на картинке при фокусе на блоке ширина ленты  =======================================//

    $('.breadthlf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_04').show();
    });

    $('.breadthlf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_04').hide();

    });


    //========== Отображение границ длнны ленты на картинке при фокусе на блоке длина  ленты  =======================================//

    $('.landlf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_05').show();
    });

    $('.landlf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_05').hide();

    });

    //========== Отображение периметра плиты на картинке при фокусе на блоке периметр  =======================================//

    $('.perimeterlf').focus(function () {
        var block = $(this).parents('.content');
        block.find('.param_06').show();
    });

    $('.perimeterlf').focusout(function () {
        var block = $(this).parents('.content');
        block.find('.param_06').hide();

    });

    //========== Отображение дренажа на картинке при клике  на блоке дренаж  =======================================//

    $('.drenagf').click(function () {

        var chkBox = document.getElementById('drenagf');
        if (chkBox.checked){
        var block = $(this).parents('.content');
        block.find('.extra_01').show();
    }
       else
        {
            var block = $(this).parents('.content');
            block.find('.extra_01').hide();
        }
    });

    //========== Отображение гидроизоляции на картинке при клике  на блоке гидроизоляция  =======================================//

    $('.gidrof').click(function () {

        var chkBox = document.getElementById('gidrof');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.extra_02').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.extra_02').hide();
        }
    });


    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepf').click(function () {

        var chkBox = document.getElementById('utepf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.extra_03').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.extra_03').hide();
        }
    });

    //========== Отображение отмостки на картинке при клике  на блоке отмостки  =======================================//

    $('.otmosf').click(function () {

        var chkBox = document.getElementById('otmosf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.extra_04').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.extra_04').hide();
        }
    });


    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektrof').click(function () {

        var chkBox = document.getElementById('elektrof');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.extra_07').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.extra_07').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendaf').click(function () {

        var chkBox = document.getElementById('arendaf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.extra_08').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.extra_08').hide();
        }
    });




});
