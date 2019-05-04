var  VarFund,zemv,zenzemv;

VarFund=1;
zemv=0;
zenzemv=0;

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



// ======================== Блок ЛЕНТА ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landf').bind('change keyup',function() {
            if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
                block.find('.basic2').show();

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
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
        }
    });

    $('.landf').click(function() {
        if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2').show();

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
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
        }
    });

//========== Отображение основы или ленты при измение  Ширины  =======================================//

    $('.breadthf').bind(function() {

        if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2').show();
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
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
        }
    });

    $('.breadthf').click('change keyup',function() {

        if ((document.getElementById("landf").value > 0) && (document.getElementById("breadthf").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2').show();
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
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
        }
    });

    //========== Отображение дренажа на картинке при клике  на блоке дренаж  =======================================//

    $('.drenagf').click(function () {

        var chkBox = document.getElementById('drenagf');
        if (chkBox.checked){
        var block = $(this).parents('.content');
        block.find('.param_01l').show();
    }
       else
        {
            var block = $(this).parents('.content');
            block.find('.param_01l').hide();
        }
    });

    //========== Отображение гидроизоляции на картинке при клике  на блоке гидроизоляция  =======================================//

    $('.gidrof').click(function () {

        var chkBox = document.getElementById('gidrof');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02l').hide();
        }
    });


    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepf').click(function () {

        var chkBox = document.getElementById('utepf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03l').hide();
        }
    });

    //========== Отображение отмостки на картинке при клике  на блоке отмостки  =======================================//

    $('.otmosf').click(function () {

        var chkBox = document.getElementById('otmosf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_04l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_04l').hide();
        }
    });


    //========== Отображение канализации и водоснабжения  =======================================//

    $('.vaterf').click(function () {

        var chkBox = document.getElementById('vaterf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05l').hide();
        }
    });

    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektrof').click(function () {

        var chkBox = document.getElementById('elektrof');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06l').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendaf').click(function () {

        var chkBox = document.getElementById('arendaf');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_07l').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_07l').hide();
        }
    });



    // ======================== Блок ПЛИТА  ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landpli').bind('change keyup',function() {
            if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pl').show();
             //===расчет периметра плиты=====//
            var l1 = document.getElementById('landpli').value;
            var s1 = document.getElementById('breadthpli').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perim=2*l1+2*s1;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
            var plpl=l1*s1;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
        }
        else{
                var block = $(this).parents('.content');
                block.find('.basic1pl').show();
                block.find('.basic2pl').hide();
            var plpl=0;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
        }
    });

    $('.landpli').click(function() {
        if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pl').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landpli').value;
            var s1 = document.getElementById('breadthpli').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perim=2*l1+2*s1;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
            var plpl=l1*s1;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pl').show();
            block.find('.basic2pl').hide();
            var plpl=0;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
        }
    });


    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

      $('.breadthpli').bind('change keyup',function() {
           if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pl').show();
               //===расчет периметра плиты=====//
            var l1 = document.getElementById('landpli').value;
            var s1 = document.getElementById('breadthpli').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perim=2*l1+2*s1;
            s1=+s1;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
            var plpl=l1*s1;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pl').show();
            block.find('.basic2pl').hide();
            var plpl=0;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
        }
    });

      $('.breadthpli').click(function() {
        if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pl').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landpli').value;
            var s1 = document.getElementById('breadthpli').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perim=2*l1+2*s1;
            s1=+s1;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
            var plpl=l1*s1;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pl').show();
            block.find('.basic2pl').hide();
            var plpl=0;
            $('#plpl').text(plpl);
            document.getElementById('areapplf').value = plpl;
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimplf').value = perim;
        }
    });



    //========== Отображение Основания на картинке при клике  на блоке Онование  =======================================//

    $('.osnovpl').click(function () {

        var chkBox = document.getElementById('osnovpl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_01pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_01pl').hide();
        }
    });

    //========== Отображение Дренажа на картинке при клике  на блоке Дренаж  =======================================//

    $('.drenagpl').click(function () {

        var chkBox = document.getElementById('drenagpl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02pl').hide();
        }
    });

    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

      $('.gidropl').click(function () {

        var chkBox = document.getElementById('gidropl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03pl').hide();
        }
    });

    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.uteppl').click(function () {

        var chkBox = document.getElementById('uteppl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_04pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_04pl').hide();
        }
    });

    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    // $('.gidrozpl').click(function () {
    //
    //     var chkBox = document.getElementById('gidrozpl');
    //     if (chkBox.checked){
    //         var block = $(this).parents('.content');
    //         block.find('.param_05pl').show();
    //     }
    //     else
    //     {
    //         var block = $(this).parents('.content');
    //         block.find('.param_05pl').hide();
    //     }
    // });


    //========== Отображение Цоколя на картинке при клике  на блоке Цоколь  =======================================//

    $('.teplopl').click(function () {

        var chkBox = document.getElementById('teplopl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05pl').hide();
        }
    });

    //========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//

    $('.otmospl').click(function () {

        var chkBox = document.getElementById('otmospl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06pl').hide();
        }
    });

    //========== Отображение канализации на картинке при клике  на блоке канализация  =======================================//

    $('.kanalpl').click(function () {

        var chkBox = document.getElementById('kanalpl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_07pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_07pl').hide();
        }
    });




    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektropl').click(function () {

        var chkBox = document.getElementById('elektropl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_08pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_08pl').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendapl').click(function () {

        var chkBox = document.getElementById('arendapl');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_09pl').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_09pl').hide();
        }
    });


    // ======================== Блок ПЛИТА нижним росвером ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landplfnr').bind('change keyup',function() {
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pln').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfnr').value;
            var s1 = document.getElementById('breadthplfnr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimplfnr').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areapplfnr').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pln').show();
            block.find('.basic2pln').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;

        }
    });

    $('.landplfnr').click(function() {
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pln').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfnr').value;
            var s1 = document.getElementById('breadthplfnr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimplfnr').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areapplfnr').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pln').show();
            block.find('.basic2pln').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;

        }
    });




    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

    $('.breadthplfnr').bind('change keyup',function() {
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pln').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfnr').value;
            var s1 = document.getElementById('breadthplfnr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perimn=2*l1+2*s1;
            s1=+s1;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;
            var plpln=l1*s1;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pln').show();
            block.find('.basic2pln').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;

        }
    });

    $('.breadthplfnr').click (function() {
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2pln').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfnr').value;
            var s1 = document.getElementById('breadthplfnr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perimn=2*l1+2*s1;
            s1=+s1;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;
            var plpln=l1*s1;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1pln').show();
            block.find('.basic2pln').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfnr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfnr').value = perimn;

        }
    });



    //========== Отображение Основания на картинке при клике  на блоке Онование  =======================================//

    // $('.osnovpl').click(function () {
    //
    //     var chkBox = document.getElementById('osnovpl');
    //     if (chkBox.checked){
    //         var block = $(this).parents('.content');
    //         block.find('.param_01pl').show();
    //     }
    //     else
    //     {
    //         var block = $(this).parents('.content');
    //         block.find('.param_01pl').hide();
    //     }
    // });

    //========== Отображение Дренажа на картинке при клике  на блоке Дренаж  =======================================//

    $('.drenagplnr').click(function () {

        var chkBox = document.getElementById('drenagplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_01plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_01plnr').hide();
        }
    });

    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    $('.gidroplnr').click(function () {

        var chkBox = document.getElementById('gidroplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02plnr').hide();
        }
    });

    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepplnr').click(function () {

        var chkBox = document.getElementById('utepplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03plnr').hide();
        }
    });


    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepplpodnr').click(function () {

        var chkBox = document.getElementById('utepplpodnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_04plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_04plnr').hide();
        }
    });

//========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//

    $('.otmosplnr').click(function () {

        var chkBox = document.getElementById('otmosplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05plnr').hide();
        }
    });


    //========== Отображение канализации на картинке при клике  на блоке канализация  =======================================//

    $('.kanalplnr').click(function () {

        var chkBox = document.getElementById('kanalplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06plnr').hide();
        }
    });




    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektroplnr').click(function () {

        var chkBox = document.getElementById('elektroplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_07plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_07plnr').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendaplnr').click(function () {

        var chkBox = document.getElementById('arendaplnr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_08plnr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_08plnr').hide();
        }
    });


    // ======================== Блок ПЛИТА верхним росвером ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landplfvr').bind('change keyup',function() {
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2plvr').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfvr').value;
            var s1 = document.getElementById('breadthplfvr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimplfvr').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areapplfvr').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1plvr').show();
            block.find('.basic2plvr').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;

        }
    });

    $('.landplfvr').click(function() {
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2plvr').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfvr').value;
            var s1 = document.getElementById('breadthplfvr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimplfvr').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areapplfvr').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1plvr').show();
            block.find('.basic2plvr').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;

        }
    });




    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

    $('.breadthplfvr').bind('change keyup',function() {
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2plvr').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfvr').value;
            var s1 = document.getElementById('breadthplfvr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perimn=2*l1+2*s1;
            s1=+s1;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;
            var plpln=l1*s1;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1plvr').show();
            block.find('.basic2plvr').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;

        }
    });

    $('.breadthplfvr').click (function() {
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2plvr').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landplfvr').value;
            var s1 = document.getElementById('breadthplfvr').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            var perimn=2*l1+2*s1;
            s1=+s1;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;
            var plpln=l1*s1;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1plvr').show();
            block.find('.basic2plvr').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areapplfvr').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimplfvr').value = perimn;

        }
    });



    //========== Отображение Основания на картинке при клике  на блоке Онование  =======================================//

    $('.osnovplvr').click(function () {

        var chkBox = document.getElementById('osnovplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_01plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_01plvr').hide();
        }
    });

    //========== Отображение Дренажа на картинке при клике  на блоке Дренаж  =======================================//

    $('.drenagplvr').click(function () {

        var chkBox = document.getElementById('drenagplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02plvr').hide();
        }
    });

    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    $('.gidropodvr').click(function () {

        var chkBox = document.getElementById('gidropodvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03plvr').hide();
        }
    });

    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepplvr').click(function () {

        var chkBox = document.getElementById('utepplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_04plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_04plvr').hide();
        }
    });


    //========== Отображение гидроизоляция бок на картинке при клике  на блоке гидроизоляция бок  =======================================//

    $('.gidrobokvr').click(function () {

        var chkBox = document.getElementById('gidrobokvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05plvr').hide();
        }
    });


    //========== Отображение утепление на картинке при клике  на блоке утепление  =======================================//

    $('.utepbokvr').click(function () {

        var chkBox = document.getElementById('utepbokvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06plvr').hide();
        }
    });

//========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//

    $('.otmosplvr').click(function () {

        var chkBox = document.getElementById('otmosplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_07plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_07plvr').hide();
        }
    });

    //========== Отображение канализации на картинке при клике  на блоке канализация  =======================================//

    $('.kanalplvr').click(function () {

        var chkBox = document.getElementById('kanalplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_08plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_08plvr').hide();
        }
    });

    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektroplvr').click(function () {

        var chkBox = document.getElementById('elektroplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_09plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_09plvr').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendaplvr').click(function () {

        var chkBox = document.getElementById('arendaplvr');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_10plvr').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_10plvr').hide();
        }
    });



    // ======================== Блок ПЛИТА UHD ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landuhp').bind('change keyup',function() {
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2uhp').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landuhp').value;
            var s1 = document.getElementById('breadthuhp').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimuhp').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areauhp').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1uhp').show();
            block.find('.basic2uhp').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areauhp').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimuhp').value = perimn;

        }
    });

    $('.landuhp').click(function() {
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2uhp').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landuhp').value;
            var s1 = document.getElementById('breadthuhp').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimuhp').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areauhp').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1uhp').show();
            block.find('.basic2uhp').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areauhp').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimuhp').value = perimn;

        }
    });

    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

    $('.breadthuhp').bind('change keyup',function() {
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2uhp').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landuhp').value;
            var s1 = document.getElementById('breadthuhp').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimuhp').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areauhp').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1uhp').show();
            block.find('.basic2uhp').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areauhp').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimuhp').value = perimn;

        }
    });

    $('.breadthuhp').click(function() {
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2uhp').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landuhp').value;
            var s1 = document.getElementById('breadthuhp').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimuhp').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areauhp').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1uhp').show();
            block.find('.basic2uhp').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areauhp').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimuhp').value = perimn;

        }
    });


    //========== Отображение Дренажа на картинке при клике  на блоке Дренаж  =======================================//

    $('.drenaguhp').click(function () {

        var chkBox = document.getElementById('drenaguhp');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_01uhp').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_01uhp').hide();
        }
    });

    //========== Отображение канализации на картинке при клике  на блоке канализация  =======================================//

    $('.kanaluhp').click(function () {

        var chkBox = document.getElementById('kanaluhp');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02uhp').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02uhp').hide();
        }
    });

//========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//

    $('.otmosuhp').click(function () {

        var chkBox = document.getElementById('otmosuhp');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03uhp').show();
            block.find('.param_04uhp').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03uhp').hide();
            block.find('.param_04uhp').hide();
        }
    });

    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektrouhp').click(function () {

        var chkBox = document.getElementById('elektrouhp');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05uhp').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05uhp').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendauhp').click(function () {

        var chkBox = document.getElementById('arendauhp');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06uhp').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06uhp').hide();
        }
    });



    // ======================== Блок ZOK ==============
//========== Отображение основы или ленты  при изменение  Длины  =======================================//



    $('.landzok').bind('change keyup',function() {
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2zok').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landzok').value;
            var s1 = document.getElementById('breadthzok').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimzok').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areazok').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1zok').show();
            block.find('.basic2zok').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areazok').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimpzok').value = perimn;

        }
    });

    $('.landzok').click(function() {
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2zok').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landzok').value;
            var s1 = document.getElementById('breadthzok').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perimn').text(perimn);
            document.getElementById('perimzok').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areazok').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1zok').show();
            block.find('.basic2zok').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areazok').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimpzok').value = perimn;

        }
    });


    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

    $('.breadthzok').bind('change keyup',function() {
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2zok').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landzok').value;
            var s1 = document.getElementById('breadthzok').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perimn').text(perimn);
            document.getElementById('perimpzok').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areazok').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1zok').show();
            block.find('.basic2zok').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areazok').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimpzok').value = perimn;

        }
    });

    $('.breadthzok').click(function() {
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0))  {
            var block = $(this).parents('.content');
            block.find('.basic2zok').show();
            //===расчет периметра плиты=====//
            var l1 = document.getElementById('landzok').value;
            var s1 = document.getElementById('breadthzok').value;
            $('#l1').text(l1);
            l1=+l1;
            $('#s1').text(s1);
            s1=+s1
            var perimn=2*l1+2*s1;
            $('#perim').text(perimn);
            document.getElementById('perimpzok').value = perimn;
            var plpln=l1*s1;
            $('#plpl').text(plpln);
            document.getElementById('areazok').value = plpln;


        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1zok').show();
            block.find('.basic2zok').hide();
            var plpln=0;
            $('#plpln').text(plpln);
            document.getElementById('areazok').value = plpln;
            var perimn=0;
            $('#perimn').text(perimn);
            document.getElementById('perimpzok').value = perimn;

        }
    });



//========== Отображение Основания на картинке при клике  на блоке Онование  =======================================//

    $('.osnovzok').click(function () {

        var chkBox = document.getElementById('osnovzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_01zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_01zok').hide();
        }
    });

    //========== Отображение Дренажа на картинке при клике  на блоке Дренаж  =======================================//

    $('.drenagzok').click(function () {

        var chkBox = document.getElementById('drenagzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_02zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_02zok').hide();
        }
    });

    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    $('.gidropodzok').click(function () {

        var chkBox = document.getElementById('gidropodzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_03zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_03zok').hide();
        }
    });


    //========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    $('.utepzok').click(function () {

        var chkBox = document.getElementById('utepzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_04zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_04zok').hide();
        }
    });

    /========== Отображение Гидроизоляции на картинке при клике  на блоке Гидроизоляция  =======================================//

    $('.utepzokzok').click(function () {

        var chkBox = document.getElementById('utepzokzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_05zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_05zok').hide();
        }
    });

    /========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//

    $('.otmoszok').click(function () {

        var chkBox = document.getElementById('otmoszok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_06zok').show();

        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_06zok').hide();

        }
    });

    //========== Отображение канализации на картинке при клике  на блоке канализация  =======================================//

    $('.kanalzok').click(function () {

        var chkBox = document.getElementById('kanalzok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_07zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_07zok').hide();
        }
    });

//========== Отображение Отмостки на картинке при клике  на блоке Отмостки  =======================================//


    //========== Отображение электричества на картинке при клике  на блоке электричества  =======================================//

    $('.elektrozok').click(function () {

        var chkBox = document.getElementById('elektrozok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_08zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_08zok').hide();
        }
    });

    //========== Отображение вагончиком на картинке при клике  на блоке вагончик  =======================================//

    $('.arendazok').click(function () {

        var chkBox = document.getElementById('arendazok');
        if (chkBox.checked){
            var block = $(this).parents('.content');
            block.find('.param_09zok').show();
        }
        else
        {
            var block = $(this).parents('.content');
            block.find('.param_09zok').hide();
        }
    });




    // $('.submit').click(function () {
    //     smeta();
    //
    // });
    //
    // $('#test').click(function () {
    //     smeta();
    //
    // });




//========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ   =================//

    $('#zakas_menu1').click(function () {
        VarFund=1;
    });

    $('#zakas_menu2').click(function () {
        VarFund=2;
       });

    $('#zakas_menu3').click(function () {
        VarFund=3;
    });

    $('#zakas_menu4').click(function () {
        VarFund=4;
    });

    $('#zakas_menu5').click(function () {
        VarFund=5;
    });

    $('#zakas_menu6').click(function () {
        VarFund=6;
    });


    // $('.submit').click(function () {
    //     if (VarFund==1) {
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_lenta').show();
    //         block.find('.zakas_smeta_plita').hide();
    //         block.find('.zakas_smeta_plitanr').hide();
    //         block.find('.zakas_smeta_plitavr').hide();
    //         block.find('.zakas_smeta_plitauhp').hide();
    //         block.find('.zakas_smeta_plitazok').hide();
    //
    //     }
    //
    //
    //     if (VarFund==2){
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_plita').show();
    //         block.find('.zakas_smeta_lenta').hide();
    //         block.find('.zakas_smeta_plitanr').hide();
    //         block.find('.zakas_smeta_plitavr').hide();
    //         block.find('.zakas_smeta_plitauhp').hide();
    //         block.find('.zakas_smeta_plitazok').hide();
    //
    //     }
    //
    //     if (VarFund==3){
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_plita').hide();
    //         block.find('.zakas_smeta_lenta').hide();
    //         block.find('.zakas_smeta_plitanr').show();
    //         block.find('.zakas_smeta_plitavr').hide();
    //         block.find('.zakas_smeta_plitauhp').hide();
    //         block.find('.zakas_smeta_plitazok').hide();
    //     }
    //
    //     if (VarFund==4){
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_plita').hide();
    //         block.find('.zakas_smeta_lenta').hide();
    //         block.find('.zakas_smeta_plitanr').hide();
    //         block.find('.zakas_smeta_plitavr').show();
    //         block.find('.zakas_smeta_plitauhp').hide();
    //         block.find('.zakas_smeta_plitazok').hide();
    //
    //     }
    //
    //     if (VarFund==5){
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_plita').hide();
    //         block.find('.zakas_smeta_lenta').hide();
    //         block.find('.zakas_smeta_plitanr').hide();
    //         block.find('.zakas_smeta_plitavr').hide();
    //         block.find('.zakas_smeta_plitauhp').show();
    //         block.find('.zakas_smeta_plitazok').hide();
    //
    //     }
    //
    //     if (VarFund==6){
    //         var block = $(this).parents('.content');
    //         block.find('.zakas_smeta_plita').hide();
    //         block.find('.zakas_smeta_lenta').hide();
    //         block.find('.zakas_smeta_plitanr').hide();
    //         block.find('.zakas_smeta_plitavr').hide();
    //         block.find('.zakas_smeta_plitauhp').hide();
    //         block.find('.zakas_smeta_plitazok').show();
    //
    //     }
    //
    //
    //
    //
    //
    //     smeta();
    //
    // });


    $('#sm1').click(function () {

        if (VarFund==1) {
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_lenta').show();
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }


        if (VarFund==2){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').show();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==3){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').show();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();
        }

        if (VarFund==4){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').show();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==5){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').show();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==6){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').show();

        }



        smeta();

    });

    $('#test').click(function () {

        if (VarFund==1) {
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_lenta').show();
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }


        if (VarFund==2){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').show();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==3){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').show();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();
        }

        if (VarFund==4){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').show();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==5){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').show();
            block.find('.zakas_smeta_plitazok').hide();

        }

        if (VarFund==6){
            var block = $(this).parents('.content');
            block.find('.zakas_smeta_plita').hide();
            block.find('.zakas_smeta_lenta').hide();
            block.find('.zakas_smeta_plitanr').hide();
            block.find('.zakas_smeta_plitavr').hide();
            block.find('.zakas_smeta_plitauhp').hide();
            block.find('.zakas_smeta_plitazok').show();

        }



        smeta();

    });




    function smeta() {
    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ЛЕНТЫ  =================//


    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ  =================//

     if (VarFund==2){
         // var KpsKadstr = document.getElementById("dist_sp").value;
         var lpl = document.getElementById('landpli').value;
         lpl=+lpl;
         $('#lpl').text(lpl);

         var dpl = document.getElementById('breadthpli').value;
         dpl=+dpl;
         $('#dpl').text(dpl);

         var hpl = document.getElementById('elevationpl').value;
         hpl=+hpl;
         $('#hpl').text(hpl);


         var hplr=hpl*1000;
         $('#hplr').text(hplr);


         var spl = document.getElementById('areapplf').value;
         spl=+spl;
         $('#spl').text(spl);


         var perimpl = document.getElementById('perimplf').value;
         perimpl=+perimpl;
         $('#perimpl').text(perimpl);

         var hpesok = document.getElementById('pesokplf').value;
         hpesok=+hpesok;
         $('#hpesok').text(hpesok);

         var hpesokr=hpesok*1000;
         $('#hpesokr').text(hpesokr);

         var hsheben = document.getElementById('shebenplf').value;
         hsheben=+hsheben;
         $('#hsheben').text(hsheben);

         var hshebenr=hsheben*1000;
         $('#hshebenr').text(hshebenr);

         var hgrunt=hshebenr+hpesokr;
         $('#hgrunt').text(hgrunt);

         var lkad = document.getElementById('distancelentf').value;
         lkad=+lkad;
         $('#lkad').text(lkad);
         // Земляные работы
         zemv=(spl+perimpl)*(hpesok+hsheben);
         zemv=zemv.toFixed(2);
         $('#zemv').text(zemv);
         zenzemv=zemv*300;
         zenzemv=Math.round(zenzemv);
         $('#zenzemv').text(zenzemv);

         // Устройство  разделительного слоя из геотекстиля
         var sgeoteks=(spl+perimpl);
         sgeoteks=sgeoteks.toFixed(2);
         $('#sgeoteks').text(sgeoteks);
         var zsgeoteks=(spl+perimpl)*20;
         zsgeoteks=Math.round(zsgeoteks);
         $('#zsgeoteks').text(zsgeoteks);

         // Устройство песчаной подушки с послойной трамбовкой виброплитой
         var spesok=(spl*hpesok+perimpl*hpesok)*1.28*1.2;
         spesok=Math.ceil((spesok)*10)/10;
         spesok=spesok.toFixed(2);
         $('#spesok').text(spesok);
         var zpesok=spesok*400;
         zpesok=Math.round(zpesok);
         $('#zpesok').text(zpesok);

         // Устройство щебеночной подушки с послойной трамбовкой виброплитой

         var ssheb=(spl*hsheben+perimpl*hsheben)*1.28;
         ssheb=Math.ceil((ssheb)*10)/10;
         ssheb=ssheb.toFixed(2);
         $('#ssheb').text(ssheb);
         var zssheb=ssheb*400;
         zssheb=Math.round(zssheb);
         $('#zssheb').text(zssheb);

         // Укладка гидроизоляционной мембраны Planter
         var sgidro=(spl+perimpl*0.3);
         sgidro=sgidro.toFixed(2);
         $('#sgidro').text(sgidro);
         var zsgidro=sgidro*30;
         zsgidro=Math.round(zsgidro);
         $('#zsgidro').text(zsgidro);

         // Монтаж, демонтаж опалубки
         var sopal=perimpl;
         sopal=sopal.toFixed(2);
         $('#sopal').text(sopal);
         var zsopal=sopal*450;
         zsopal=Math.round(zsopal);
         $('#zsopal').text(zsopal);

         // Изготовление и установка арматурных каркасов
         var varm1=spl*21*0.888*1.1*0.001+perimpl/0.2*1.5*0.91*1.1*0.001;


         var varm2=(spl+perimpl/2)*0.45*1.2*0.001+(perimpl*1.5*0.395/1000)+perimpl/1.5*0.5*1.1*0.001;

         var varm=varm2+varm1;
         varm=varm.toFixed(2);
         $('#varm').text(varm);

         var varm3=varm2+varm1;
         var zvarm=varm3*17300;
         zvarm=Math.round(zvarm);
         $('#zvarm').text(zvarm);

         // Укладка бетона с вибрированием
         var ubet1=(spl*hpl*1.05/0.25);
         // var ubet=Math.floor(ubet1);
         var ubet=Math.ceil(ubet1);
         ubet=ubet*0.25;
         // ubet=ubet.toFixed(2);
         $('#ubet').text(ubet);
         var zubet=ubet*1500;
         zubet=Math.round(zubet);
         $('#zubet').text(zubet);
     }
        // Итого:
        zenzemv=+zenzemv;
        zsgeoteks=+zsgeoteks;
        zpesok=+zpesok;
        zssheb=+zssheb;
        zsgidro=+zsgidro;
        zsopal=+zsopal;
        zubet=+zubet;
        zvarm=+zvarm;

        var zitog1=zenzemv+zsgeoteks+zpesok+zssheb+zsgidro+zsopal+zubet+zvarm+6500;
        var zitog1_1=zitog1;
        zitog1=Math.round(zitog1);
        $('#zitog1').text(zitog1);
        zitog1_1=Math.round(zitog1_1);
        $('#zitog1_1').text(zitog1_1);

        // Материалы

        // Геотекстиль Мегаизол Гео про 200
        sgeoteks=+sgeoteks;
        var geotekst200=sgeoteks*1.1*1.2;
        geotekst200=geotekst200.toFixed(2);
        $('#geotekst200').text(geotekst200);
        var zgeotekst200=geotekst200*30;
        zgeotekst200=Math.round(zgeotekst200);
        $('#zgeotekst200').text(zgeotekst200);

        // Песок строительный (средней крупности или крупный) (Кратно 10 м3) с учетом доставки

        spesok=+spesok;
        spesokd=spesok/10;
        spesokd=Math.ceil(spesokd)*10;
        $('#spesokd').text(spesokd);
        var zspesokd=spesokd*600;
        zspesokd=Math.round(zspesokd);
        $('#zspesokd').text(zspesokd);

        // Щебень гранитный фр. 20-40 мм. (Кратно 10 м3) с учетом доставки
        ssheb=+ssheb;
        sshebd=ssheb/10;
        sshebd=Math.ceil(sshebd)*10;
        $('#sshebd').text(sshebd);
        var zsshebd=sshebd*1400;
        zsshebd=Math.round(zsshebd);
        $('#zsshebd').text(zsshebd);

        // Геомембрана Planter

        sgidro=+sgidro;
        sgidrod=sgidro*1.1;
        // sgidrod=Math.ceil(sshebd)*10;
        $('#sgidrod').text(sgidrod);
        var zsgidrod=sgidrod*110;
        zsgidrod=Math.round(zsgidrod);
        $('#zsgidrod').text(zsgidrod);

        // Опалубка инвентарная из ламинированной фанеры на деревянном каркасе
        spl=+spl;
        sopalub=spl*115;
        // sgidrod=Math.ceil(sshebd)*10;
        $('#sopalub').text(sopalub);
        var zsopalub=sopalub*1;
        zsopalub=Math.round(zsopalub);
        $('#zsopalub').text(zsopalub);

        // Доска 40*150*6000 для раскрепления инвентарных щитов
        sdosk=(hpl*1000/150)*(perimpl*0.009)+perimpl*0.0125;
        sdosk=sdosk*0.5+0.25;
        sdosk=sdosk*100;
        sdosk=Math.ceil(sdosk)/100;
         // sgidrod=Math.ceil(sshebd)*10;
        $('#sdosk').text(sdosk);
        var zsdosk=sdosk*12500;
        zsdosk=zsdosk-12500*0.00296;
        zsdosk=Math.round(zsdosk);
        $('#zsdosk').text(zsdosk);

        // Подставки под арматуру (стульчики)

        var sarmat=spl*4;
        $('#sarmat').text(sarmat);
        var zsarmat=sarmat*5;
        zsarmat=Math.round(zsarmat);
        $('#zsarmat').text(zsarmat);


        // Арматура d12 А500
        var sarmatd12=varm1;
        sarmatd12=sarmatd12.toFixed(2);

        $('#sarmatd12').text(sarmatd12);
        var zsarmatd12=varm1*41000;
        zsarmatd12=Math.round(zsarmatd12);
        $('#zsarmatd12').text(zsarmatd12);

        // Арматура d8 А500
        var sarmatd8=varm2;
        sarmatd8=sarmatd8.toFixed(2);

        $('#sarmatd8').text(sarmatd8);
        var zsarmatd8=varm2*41000;
        zsarmatd8=Math.round(zsarmatd8);
        $('#zsarmatd8').text(zsarmatd8);

        // Проволока вязальная
        var sprovol=varm*9;
        sprovol=sprovol*10;
        sprovol=Math.ceil(sprovol)/10;
        sprovol=sprovol.toFixed(2);

        $('#sprovol').text(sprovol);
        var zsprovol=sprovol*100;
        zsprovol=Math.round(zsprovol);
        $('#zsprovol').text(zsprovol);

        // Бетон B22,5 М300 П4
        ubet=+ubet;
        var ubetm300=ubet;
        $('#ubetm300').text(ubetm300);
        if (lkad<=30){
            lkadr=4100;
        }
        if (lkad>30){
            lkadr=(lkad-30)*15+4100;
        }
        lkadr=Math.round(lkadr);
        $('#lkadr').text(lkadr);

        var zubetm300=ubetm300*lkadr;
        zubetm300=Math.round(zubetm300);
        $('#zubetm300').text(zubetm300);

        // ===========Itog Mat_1============
        zubetm300=+zubetm300;

        zsprovol=+zsprovol;
        zsarmatd8=+zsarmatd8;
        zsarmatd12=+zsarmatd12;
        zsdosk=+zsdosk;
        zsopalub=+zsopalub;
        zsgidrod=+zsgidrod;
        zsshebd=+zsshebd;
        zspesokd=+zspesokd;
        zgeotekst200=+zgeotekst200;
        zsarmat=+zsarmat;

        var zitogM1=zsarmat+zubetm300+zsprovol+zsarmatd8+zsarmatd12+zsdosk+zsopalub+zsgidrod+zsshebd+zspesokd+zgeotekst200;
        zitogM1=Math.round(zitogM1);
        $('#zitogM1').text(zitogM1);

        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором

        if (lkad<=30){
            larmDostav=9000;
        }
        if (lkad>30){
            larmDostav=(lkad-30)*35+9000;
        }
        larmDostav=Math.round(larmDostav);
        $('#larmDostav').text(larmDostav);

        var zlarmDostav=larmDostav*1;
        zlarmDostav=Math.round(zlarmDostav);
        $('#zlarmDostav').text(zlarmDostav);


        // Доставка и вывоз опалубки
        if (lkad<=30){
            larmDostavOpal=5000;
        }
        if (lkad>30){
            larmDostavOpal=(lkad-30)*35+5000;
        }
        larmDostavOpal=Math.round(larmDostavOpal);
        $('#larmDostavOpal').text(larmDostavOpal);

        var zlarmDostavOpal=larmDostavOpal*1;
        zlarmDostavOpal=Math.round(zlarmDostavOpal);
        $('#zlarmDostavOpal').text(zlarmDostavOpal);

        // Доставка остальных материалов
        if (lkad<=30){
            larmDostavMater=4200;
        }
        if (lkad>30){
            larmDostavMater=(lkad-30)*35+4200;
        }
        larmDostavMater=Math.round(larmDostavMater);
        $('#larmDostavMater').text(larmDostavMater);

        var zlarmDostavMater=larmDostavMater*1;
        zlarmDostavMater=Math.round(zlarmDostavMater);
        $('#zlarmDostavMater').text(zlarmDostavMater);

        // ==========ITOG DOSTAV============
        zlarmDostavMater=+zlarmDostavMater;
        zlarmDostav=+zlarmDostav;
        zlarmDostavOpal=+zlarmDostavOpal;
        var zdostavmat=zlarmDostavMater+zlarmDostav+zlarmDostavOpal+2400;
        zdostavmat=Math.round(zdostavmat);
        $('#zdostavmat').text(zdostavmat);

        // =====Итого за материалы:
        var zdostavmatitogo=zdostavmat+zitogM1;
        zdostavmatitogo=Math.round(zdostavmatitogo);
        $('#zdostavmatitogo').text(zdostavmatitogo);


       // ======= Доп. Работы===========
       //  ===============Планировка выбранного грунта============
        var kgrunt=0;
        kgrunt=Math.round(kgrunt);
        $('#kgrunt').text(kgrunt);

        var zkgrunt=kgrunt*150;
        zkgrunt=Math.round(zkgrunt);
        $('#zkgrunt').text(zkgrunt);

        // =============Устройство закладной гильзы вода===========
        var kzaklad=5;
        kzaklad=Math.round(kzaklad);
        $('#kzaklad').text(kzaklad);

        var zkzaklad=kzaklad*1200;
        zkzaklad=Math.round(zkzaklad);
        $('#zkzaklad').text(zkzaklad);

        // =============Устройство закладной гильзы электро===========
        var kzakladel=10;
        kzakladel=Math.round(kzakladel);
        $('#kzakladel').text(kzakladel);

        var zkzakladel=kzakladel*200;
        zkzakladel=Math.round(zkzakladel);
        $('#zkzakladel').text(zkzakladel);

        // ====================Разводка канализации под домом============
        var kzakladkanal=5;
        kzakladkanal=Math.round(kzakladkanal);
        $('#kzakladkanal').text(kzakladkanal);

        var zkzakladkanal=kzakladkanal*1000;
        zkzakladkanal=Math.round(zkzakladkanal);
        $('#zkzakladkanal').text(zkzakladkanal);

        // Вывоз мусора после завершения работ на объекте
        var kmusor=1;
        kmusor=Math.round(kmusor);
        $('#kmusor').text(kmusor);

        var zkmusor=kmusor*5000;
        zkmusor=Math.round(zkmusor);
        $('#zkmusor').text(zkmusor);


        // =============Itig Dop R=============
        var zitogdop=zkmusor+zkzakladkanal+zkzakladel+zkzaklad+kgrunt;
        zitogdop=Math.round(zitogdop);
        $('#zitogdop').text(zitogdop);

        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============
        var kbenso=ubetm300/80;
        kbenso=Math.round(kbenso);
        $('#kbenso').text(kbenso);

        if (lkad<=30){
            kzbet=14400;
        }
        if (lkad>30){
            kzbet=(lkad-30)*155+14400;
        }
        kzbet=Math.round(kzbet);
        $('#kzbet').text(kzbet);

        var zbeton=kzbet*kbenso;
        zbeton=Math.round(zbeton);
        $('#zbeton').text(zbeton);

        // Обеспечение строительным вагончиком,
        var kvagon=1;
        kvagon=Math.round(kvagon);
        $('#kvagon').text(kvagon);

        var zkvagon=kvagon*20000;
        zkvagon=Math.round(zkvagon);
        $('#zkvagon').text(zkvagon);

        // Обеспечение биотуалетом
        var kbiotual=1;
        kbiotual=Math.round(kbiotual);
        $('#kvagon').text(kvagon);

        var zkbiotual=kbiotual*5000;
        zkbiotual=Math.round(zkbiotual);
        $('#zkbiotual').text(zkbiotual);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktro=0;
        kelktro=Math.round(kelktro);
        $('#kelktro').text(kelktro);

        var zkelktro=kelktro*0;
        zkelktro=Math.round(zkelktro);
        $('#zkelktro').text(zkelktro);

        // Обеспечение водой:
        var kvater=0;
        kvater=Math.round(kvater);
        $('#kvater').text(kvater);

        var zkvater=kvater*0;
        zkvater=Math.round(zkvater);
        $('#zkvater').text(zkvater);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpez=zkvater+zkelktro+zkbiotual+zkvagon+zbeton;
        zitogcpez=Math.round(zitogcpez);
        $('#zitogcpez').text(zitogcpez);

        // ===========Итого за работы и материалы:========
        var zitogcpezMat=zitogcpez+zitogdop+zdostavmatitogo+zitog1_1;
        // zitogM1

        zitogcpezMat=Math.round(zitogcpezMat);
        $('#zitogcpezMat').text(zitogcpezMat);

        // Накладные расходы 2%:
        var zitogSMpr=zitogcpezMat*0.02;
        // zitogM1
        zitogSMpr=Math.round(zitogSMpr);
        $('#zitogSMpr').text(zitogSMpr);

        // ИТОГО ПО СМЕТЕ:

        var zitogSM=zitogcpezMat+zitogSMpr;
        // zitogM1
        zitogSM=Math.round(zitogSM);
        $('#zitogSM').text(zitogSM);



      // ИТОГО ПО СМЕТЕ 1 etap:
        var zitogSM1=(zitogdop/2)+zitogM1-zubetm300;
        zitogSM1=zitogSM1/1000;
        zitogSM1=Math.ceil(zitogSM1)*1000;

        zitogSM1=Math.round(zitogSM1);
        $('#zitogSM1').text(zitogSM1);

        // ИТОГО ПО СМЕТЕ 2 etap:
        var zitogSM2=zubetm300+zbeton;

        zitogSM2=zitogSM2/1000;
        zitogSM2=Math.ceil(zitogSM2)*1000;

        zitogSM2=Math.round(zitogSM2);
        $('#zitogSM2').text(zitogSM2);

        // ИТОГО ПО СМЕТЕ 3 etap:
        var zitogSM3=zitogSM-zitogSM2-zitogSM1
        zitogSM3=Math.round(zitogSM3);
        $('#zitogSM3').text(zitogSM3);



        //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ NR  =================//

    if (VarFund==3){

    }


        //========== END SMETA  =================//
    }




});
