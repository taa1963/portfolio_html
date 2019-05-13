var  VarFund,zemv,zenzemv,zena_smetu, VarMail;

VarFund=1;
zemv=0;
zenzemv=0;
zena_smetu=0;
VarMail=0;

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

                var landlf=(2*l1+2*s1)*0.75;
                $('#landlf').text(landlf);
                document.getElementById('landlf').value = landlf;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;

                var landlf=0;
                $('#landlf').text(landlf);
                document.getElementById('landlf').value = landlf;
        }

        if ((document.getElementById("landlf").value > 0) && (document.getElementById("breadthf").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_lenta').show();

            smeta();
        }



        if (((document.getElementById("landlf").value == 0)|| (document.getElementById("breadthf").value == 0)) && (VarMail==2)) {

                var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_lenta').hide();

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
            var landlf=(2*l1+2*s1)*0.75;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;

        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
            var landlf=0;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;
        }
        if ((document.getElementById("landlf").value > 0) && (document.getElementById("breadthf").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_lenta').show();

            smeta();
        }



        if (((document.getElementById("landlf").value == 0)|| (document.getElementById("breadthf").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_lenta').hide();

        }
    });

//========== Отображение основы или ленты при измение  Ширины  =======================================//

    $('.breadthf').bind('change keyup',function() {

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
            var landlf=(2*l1+2*s1)*0.75;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;
        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
            var landlf=0;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;
        }
        if ((document.getElementById("landlf").value > 0) && (document.getElementById("breadthf").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_lenta').show();

            smeta();
        }



        if (((document.getElementById("landlf").value == 0)|| (document.getElementById("breadthf").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_lenta').hide();

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
            var landlf=(2*l1+2*s1)*0.75;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;
        }
        else{
            var block = $(this).parents('.content');
            block.find('.basic1').show();
            block.find('.basic2').hide();
            var perim=0;
            $('#perim').text(perim);
            document.getElementById('perimeterlf').value = perim;
            var landlf=0;
            $('#landlf').text(landlf);
            document.getElementById('landlf').value = landlf;
        }
        if ((document.getElementById("landlf").value > 0) && (document.getElementById("breadthf").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_lenta').show();

            smeta();
        }



        if (((document.getElementById("landlf").value == 0)|| (document.getElementById("breadthf").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_lenta').hide();

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
        if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0) &&VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plita').show();
            smeta();
        }

        if ((document.getElementById("landpli").value == 0)|| (document.getElementById("breadthpli").value == 0) &&VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plita').hide();
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
        if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0) &&VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plita').show();
            smeta();
        }

        if ((document.getElementById("landpli").value == 0)|| (document.getElementById("breadthpli").value == 0) &&VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plita').hide();
        }
    });


    //========== Отображение границ ширины на картинке при фокусе на блоке Ширина  =======================================//

      $('.breadthpli').bind('change keyup',function() {
          if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
              var block = $(this).parents('.content');
              block.find('.basic2pl').show();

           // if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0))  {
           //  var block = $(this).parents('.content');
           //  block.find('.basic2pl').show();
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
          if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0) &&VarMail==2) {
              var block = $(this).parents('.content');
              block.find('.Zena_err').hide();
              block.find('.zakas_smeta_plita').show();
              smeta();
          }

          if ((document.getElementById("landpli").value == 0)|| (document.getElementById("breadthpli").value == 0) &&VarMail==2) {
              var block = $(this).parents('.content');
              block.find('.Zena_err').show();
              block.find('.zakas_smeta_plita').hide();
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
          if ((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0) &&VarMail==2) {
              var block = $(this).parents('.content');
              block.find('.Zena_err').hide();
              block.find('.zakas_smeta_plita').show();
              smeta();
          }

          if ((document.getElementById("landpli").value == 0)|| (document.getElementById("breadthpli").value == 0) &&VarMail==2) {
              var block = $(this).parents('.content');
              block.find('.Zena_err').show();
              block.find('.zakas_smeta_plita').hide();
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
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitanr').show();

            smeta();
        }



        if (((document.getElementById("landplfnr").value == 0)|| (document.getElementById("breadthplfnr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitanr').hide();

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
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitanr').show();

            smeta();
        }



        if (((document.getElementById("landplfnr").value == 0)|| (document.getElementById("breadthplfnr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitanr').hide();

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
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitanr').show();

            smeta();
        }



        if (((document.getElementById("landplfnr").value == 0)|| (document.getElementById("breadthplfnr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitanr').hide();

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
        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitanr').show();

            smeta();
        }



        if (((document.getElementById("landplfnr").value == 0)|| (document.getElementById("breadthplfnr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitanr').hide();

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
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitavr').show();

            smeta();
        }



        if (((document.getElementById("landplfvr").value == 0)|| (document.getElementById("breadthplfvr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitavr').hide();

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
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitavr').show();

            smeta();
        }



        if (((document.getElementById("landplfvr").value == 0)|| (document.getElementById("breadthplfvr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitavr').hide();

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
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitavr').show();

            smeta();
        }



        if (((document.getElementById("landplfvr").value == 0)|| (document.getElementById("breadthplfvr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitavr').hide();

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
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitavr').show();

            smeta();
        }



        if (((document.getElementById("landplfvr").value == 0)|| (document.getElementById("breadthplfvr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitavr').hide();

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

            var langrebpluhp = perimn;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;



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
            var langrebpluhp = 0;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;

        }
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitauhp').show();

            smeta();
        }



        if (((document.getElementById("landuhp").value == 0)|| (document.getElementById("breadthuhp").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitauhp').hide();

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
            var langrebpluhp = perimn;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;


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
            var langrebpluhp = 0;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;

        }
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitauhp').show();

            smeta();
        }



        if (((document.getElementById("landuhp").value == 0)|| (document.getElementById("breadthuhp").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitauhp').hide();

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
            var langrebpluhp = perimn;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;


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
            var langrebpluhp = 0;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;

        }
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitauhp').show();

            smeta();
        }



        if (((document.getElementById("landuhp").value == 0)|| (document.getElementById("breadthuhp").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitauhp').hide();

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
            var langrebpluhp = perimn;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;


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
            var langrebpluhp = 0;
            $('#langrebpluhp').text(langrebpluhp);
            document.getElementById('langrebpluhp').value = langrebpluhp;

        }
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitauhp').show();

            smeta();
        }



        if (((document.getElementById("landuhp").value == 0)|| (document.getElementById("breadthuhp").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitauhp').hide();

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
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitazok').show();

            smeta();
        }

        if (((document.getElementById("landzok").value == 0)|| (document.getElementById("breadthzok").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitazok').hide();

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
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitazok').show();

            smeta();
        }

        if (((document.getElementById("landzok").value == 0)|| (document.getElementById("breadthzok").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitazok').hide();

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
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitazok').show();

            smeta();
        }

        if (((document.getElementById("landzok").value == 0)|| (document.getElementById("breadthzok").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitazok').hide();

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
        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitazok').show();

            smeta();
        }



        if (((document.getElementById("landzok").value == 0)|| (document.getElementById("breadthzok").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitazok').hide();

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




    $('.submit').click(function () {
        smeta();

    });
    //
    // $('#test').click(function () {
    //     smeta();
    //
    // });




//========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ   =================//

    $('#zakas_menu1').click(function () {
        VarFund=1;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_plita').hide();
        block.find('.zakas_smeta_plitanr').hide();
        block.find('.zakas_smeta_plitavr').hide();
        block.find('.zakas_smeta_plitauhp').hide();
        block.find('.zakas_smeta_plitazok').hide();
        if ((document.getElementById("landlf").value > 0) && (document.getElementById("breadthf").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_lenta').show();

            smeta();
        }



        if (((document.getElementById("landlf").value == 0)|| (document.getElementById("breadthf").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_lenta').hide();

        }

    });

    $('#zakas_menu2').click(function () {
        VarFund=2;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_lenta').hide();
        block.find('.zakas_smeta_plitanr').hide();
        block.find('.zakas_smeta_plitavr').hide();
        block.find('.zakas_smeta_plitauhp').hide();
        block.find('.zakas_smeta_plitazok').hide();


        if (((document.getElementById("landpli").value > 0) && (document.getElementById("breadthpli").value > 0)) && (VarMail==2)) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plita').show();

            smeta();
        }



        if (((document.getElementById("landpli").value == 0)|| (document.getElementById("breadthpli").value == 0)) && (VarMail==2)) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plita').hide();

        }

       });

    $('#zakas_menu3').click(function () {
        VarFund=3;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_plita').hide();
        block.find('.zakas_smeta_lenta').hide();
        block.find('.zakas_smeta_plitavr').hide();
        block.find('.zakas_smeta_plitauhp').hide();
        block.find('.zakas_smeta_plitazok').hide();

        if ((document.getElementById("landplfnr").value > 0) && (document.getElementById("breadthplfnr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitanr').show();

            smeta();
        }



        if (((document.getElementById("landplfnr").value == 0)|| (document.getElementById("breadthplfnr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitanr').hide();

        }
    });

    $('#zakas_menu4').click(function () {
        VarFund=4;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_plita').hide();
        block.find('.zakas_smeta_lenta').hide();
        block.find('.zakas_smeta_plitanr').hide();
        block.find('.zakas_smeta_plitauhp').hide();
        block.find('.zakas_smeta_plitazok').hide();
        if ((document.getElementById("landplfvr").value > 0) && (document.getElementById("breadthplfvr").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitavr').show();

            smeta();
        }



        if (((document.getElementById("landplfvr").value == 0)|| (document.getElementById("breadthplfvr").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitavr').hide();

        }
    });

    $('#zakas_menu5').click(function () {
        VarFund=5;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_plita').hide();
        block.find('.zakas_smeta_lenta').hide();
        block.find('.zakas_smeta_plitanr').hide();
        block.find('.zakas_smeta_plitavr').hide();
        block.find('.zakas_smeta_plitazok').hide();
        if ((document.getElementById("landuhp").value > 0) && (document.getElementById("breadthuhp").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitauhp').show();

            smeta();
        }



        if (((document.getElementById("landuhp").value == 0)|| (document.getElementById("breadthuhp").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitauhp').hide();

        }

    });

    $('#zakas_menu6').click(function () {
        VarFund=6;
        var block = $(this).parents('.content');
        block.find('.zakas_smeta_plita').hide();
        block.find('.zakas_smeta_lenta').hide();
        block.find('.zakas_smeta_plitanr').hide();
        block.find('.zakas_smeta_plitavr').hide();
        block.find('.zakas_smeta_plitauhp').hide();

        if ((document.getElementById("landzok").value > 0) && (document.getElementById("breadthzok").value > 0) && VarMail==2) {
            var block = $(this).parents('.content');
            block.find('.Zena_err').hide();
            block.find('.zakas_smeta_plitazok').show();

            smeta();
        }



        if (((document.getElementById("landzok").value == 0)|| (document.getElementById("breadthzok").value == 0)) && (VarMail==2)) {

            var block = $(this).parents('.content');
            block.find('.Zena_err').show();
            block.find('.zakas_smeta_plitazok').hide();

        }
    });





    $('#sm2').click(function () {

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

        block.find('.zena').show();

        smeta();


    });

    $('#test').click(function () {
        VarMail=2;

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
        block.find('.zena').show();


    });





});




function smeta() {
    zena_smetu=0;
    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ЛЕНТЫ  =================//

    if (VarFund==1) {

        var landlfsm = document.getElementById('landlf').value;
        landlfsm = +landlfsm;
        $('#landlfsm').text(landlfsm);

        var hplsm = document.getElementById('elevationf').value;
        hplsm = +hplsm;
        $('#hplsm').text(hplsm);

        var breadthlfsm = document.getElementById('breadthlf').value;
        breadthlfsm = +breadthlfsm;
        $('#breadthlfsm').text(breadthlfsm);

        var hsheblpsm = 0.2;
        hsheblpsm = +hsheblpsm;
        $('#hsheblpsm').text(hsheblpsm);

        var hgruntsm = 300;
        hgruntsm = +hgruntsm;
        $('#hgruntsm').text(hgruntsm);


        var lplsm=document.getElementById("landf").value;
        lplsm=+lplsm;
        var shplsm= document.getElementById("breadthf").value;
        shplsm=+shplsm;

        var splsm =shplsm*lplsm ;
        splsm = +splsm;
        $('#splsm').text(splsm);


        var perimplsm = document.getElementById('perimeterlf').value;
        perimplsm = +perimplsm;
        $('#perimplsm').text(perimplsm);


        var hfundaentsm = hgruntsm/1000;
        $('#hfundaentsm').text(hfundaentsm);


        // <input type="number" class="distancelplf" id="distancelplf" value="25" min="0" max="200" step="1">
        var lkadplsm = document.getElementById('distancelplf').value;
        lkadplsm = +lkadplsm;
        $('#lkadplsm').text(lkadplsm);



//==================================1 blokc =================
        // Земляные работы
        var zemvsm = (splsm + perimplsm)*hgruntsm*0.001+ landlfsm*(breadthlfsm+0.6)*hsheblpsm;
        zemvsm = zemvsm.toFixed(2);
        $('#zemvsm').text(zemvsm);
        var zenzemvsm = zemvsm * 300;
        zenzemvsm = Math.round(zenzemvsm);
        $('#zenzemvsm').text(zenzemvsm);


        // Устройство  разделительного слоя из геотекстиля
        var kgeotekscm = landlfsm*(breadthlfsm +2*hsheblpsm+1);
        kgeotekscm = kgeotekscm.toFixed(2);
        $('#kgeotekscm').text(kgeotekscm);
        var zkgeotekscm = kgeotekscm * 20;
        zkgeotekscm = Math.round(zkgeotekscm);
        $('#zkgeotekscm').text(zkgeotekscm);


        // Устройство щебеночной подушки с послойной трамбовкой виброплитой

        var sshebsm =landlfsm*(breadthlfsm +0.6)*hsheblpsm*1.28;
        sshebsm = Math.ceil((sshebsm) * 10) / 10;
        sshebsm = sshebsm.toFixed(2);
        $('#sshebsm').text(sshebsm);
        var zsshebsm = sshebsm * 400;
        zsshebsm = Math.round(zsshebsm);
        $('#zsshebsm').text(zsshebsm);

        // Укладка гидроизоляционной мембраны Planter
        var kgidroisol =landlfsm*(breadthlfsm +0.2);
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kgidroisol = kgidroisol.toFixed(2);
        $('#kgidroisol').text(kgidroisol);
        var zkgidroisol = kgidroisol * 30;
        zkgidroisol = Math.round(zkgidroisol);
        $('#zkgidroisol').text(zkgidroisol);

        //Изготовление и установка арматурных каркасов, монтаж арматурной сетки (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrfrk38_1 =(hplsm/0.2);
        karmrfrk38_1 = Math.ceil((karmrfrk38_1) * 10) / 10;

        var karmrfrk38_2 =(breadthlfsm/0.2);
        var karmrfrk38_2r = Math.ceil(karmrfrk38_2);

        var karmrfrk38=(karmrfrk38_2r*karmrfrk38_1)*landlfsm*0.9*0.001*1.07;

        var karmrfrk39 =(landlfsm/0.3)*(hplsm+breadthlfsm)*2*0.4*0.001;


        var karmrfrk24=karmrfrk38+karmrfrk39;
        // alert(karmrfrk24);
        // alert(karmrfrk389);

        karmrfrk24r = karmrfrk24.toFixed(1);
        $('#karmrfrk24r').text(karmrfrk24r);
        var zkarmrfrk24 = karmrfrk24 *17300;
        zkarmrfrk24 = Math.round(zkarmrfrk24);
        $('#zkarmrfrk24').text(zkarmrfrk24);


        //Монтаж и демонтаж опалубки
        var kmontagopalsm =  landlfsm*hplsm*2;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kmontagopalsm = kmontagopalsm.toFixed(2);
        $('#kmontagopalsm').text(kmontagopalsm);
        var zkmontagopalsm = kmontagopalsm * 450;
        zkmontagopalsm = Math.round(zkmontagopalsm);
        $('#zkmontagopalsm').text(zkmontagopalsm);

        //Укладка бетона с вибрированием

        var kukbeton =  landlfsm*hplsm*breadthlfsm*1.05/0.25;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kukbeton = Math.round(kukbeton);
        var kukbetonr=kukbeton*0.25;
        //kukbeton = kmontagopalsm.toFixed(2);
        $('#kukbetonr').text(kukbetonr);
        var zkukbetonr = kukbetonr * 1500;
        zkukbetonr = Math.round(zkukbetonr);
        $('#zkukbetonr').text(zkukbetonr);

        //Засыпка наружных пазух песком

        var kzacup =perimplsm*hfundaentsm*1.28;
        var kzacupr = Math.ceil(kzacup);
        // alert(kzacupr);
        kzacupr=kzacupr*1.2;
        kzacupr = kzacupr.toFixed(2);
        $('#kzacupr').text(kzacupr);
        var zkzacupr = kzacupr * 400;
        zkzacupr = Math.round(zkzacupr);
        $('#zkzacupr').text(zkzacupr);

        //====  Итого: 1 etap =======

        var zitog1sm= zkzacupr+zkukbetonr+zkmontagopalsm+zkarmrfrk24+zkgidroisol+zsshebsm+zkgeotekscm+zenzemvsm+6500;
        zitog1sm = Math.round(zitog1sm);
        $('#zitog1sm').text(zitog1sm);

        //======== 2 bloks =======

        //Геотекстиль Мегаизол Гео про 200
        var kgeomag =kgeotekscm*1.1*1.2;
        //var kzacupr = Math.ceil(kzacup);
        // alert(kzacupr);
        //kzacupr=kzacupr*1.2;
        kgeomag =  kgeomag.toFixed(2);
        $('#kgeomag').text( kgeomag);
        var zkgeomag = kgeomag * 30;
        zkgeomag = Math.round(zkgeomag);
        $('#zkgeomag').text(zkgeomag);

        //Песок строительный (средней крупности или крупный) (Кратно 10 м3) с учетом доставки
        var kpesoksm =(Math.round(kzacupr/10))*10;
        //var kzacupr = Math.ceil(kzacup);

        kpesoksm =  kpesoksm.toFixed(2);
        $('#kpesoksm').text(kpesoksm);
        var zkpesoksm = kpesoksm *600;
        zkpesoksm = Math.round(zkpesoksm);
        $('#zkpesoksm').text(zkpesoksm);

        //Щебень гранитный фр. 20-40 мм. (Кратно 10 м3) с учетом доставки
        var kshebensm =(Math.round(sshebsm/10))*10;
        //var kzacupr = Math.ceil(kzacup);

        kshebensm =  kshebensm.toFixed(2);
        $('#kshebensm').text(kshebensm);
        var zkshebensm = kshebensm *1400;
        zkshebensm = Math.round(zkshebensm);
        $('#zkshebensm').text(zkshebensm);

        // Геомембрана Planter
        var kgeomemsm =landlfsm*(breadthlfsm+0.2)*1.1;
        kgeomemsm =  kgeomemsm.toFixed(2);
        $('#kgeomemsm').text(kgeomemsm);
        var zkgeomemsm = kgeomemsm *110;
        zkgeomemsm = Math.round(zkgeomemsm);
        $('#zkgeomemsm').text(zkgeomemsm);

        //Доска 40*150*6000 для раскрепления инвентарных щитов
        var kdoska40 =landlfsm*0.04*0.15*6*0.7+0.25;

        kdoska40r =  kdoska40.toFixed(1);
        $('#kdoska40r').text(kdoska40r);
        var zkdoska40 = kdoska40 *12500;
        zkdoska40 = Math.round(zkdoska40);
        $('#zkdoska40').text(zkdoska40);

        //Опалубка инвентарная из ламинированной фанеры на деревянном каркасе (амортизация)

        var kopalsm =kmontagopalsm*1.05;

        kopalsm =  kopalsm.toFixed(1);
        $('#kopalsm').text(kopalsm);
        var zkopalsm = kopalsm *260;
        zkopalsm = Math.round(zkopalsm);
        $('#zkopalsm').text(zkopalsm);

        //Фанера 18 мм (на подрезку)
        var kfanera18 =kopalsm*0.1;
        kfanera18 =  kfanera18.toFixed(2);
        $('#kfanera18').text(kfanera18);
        var zkfanera18 = kfanera18 *900;
        zkfanera18 = Math.round(zkfanera18);
        $('#zkfanera18').text(zkfanera18);


        //Фиксатор для арматуры вертикальной
        var kfiksator =landlfsm*5;
        kfiksator =  kfiksator.toFixed(1);
        $('#kfiksator').text(kfiksator);
        var zkfiksator = kfiksator *5;
        zkfiksator = Math.round(zkfiksator);
        $('#zkfiksator').text(zkfiksator);

        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karm12 =karmrfrk38;
        // alert(karmrfrk38);
        var karm12r =  karm12.toFixed(2);
        $('#karm12r').text(karm12r);
        var zkarm12 = karm12 *41000;
        zkarm12 = Math.round(zkarm12);
        $('#zkarm12').text(zkarm12);

        // Арматура d8 А500 на хомуты (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karm8 =karmrfrk39;
        //alert(karmrfrk39);
        var karm8r =  karm8.toFixed(2);
        $('#karm8r').text(karm8r);
        var zkarm8 = karm8 *41000;
        zkarm8 = Math.round(zkarm8);
        $('#zkarm8').text(zkarm8);

        //Проволока вязальная
        var kprovsm =karm12*12;
        //alert(kprovsm);
        //(Math.round(sshebsm/10))*10;
        var kprovsmr = (Math.ceil(kprovsm));
        $('#kprovsmr').text(kprovsmr);
        var zkprovsm = kprovsmr *100;
        zkprovsm = Math.round(zkprovsm);
        $('#zkprovsm').text(zkprovsm);

        //Бетон B22,5 М300 П4 (С учетом доставки из СПб)
        var kbetonb22 =kukbeton*0.25;

        //alert(kprovsm);

        var kbetonb22r = kbetonb22.toFixed(2);
        //var karm12r =  karm12.toFixed(2);
        $('#kbetonb22r').text(kbetonb22r);

        if (lkadplsm <= 30) {
            lbeton22 = 4100;
        }
        if (lkadplsm > 30) {
            lbeton22 = (lkadplsm - 30) * 15 + 4100;
        }
        var lbeton22 =  Math.round(lbeton22);
        $('#lbeton22').text(lbeton22);


        var zlbeton22 = lbeton22*kbetonb22;
        zlbeton22 = Math.round(zlbeton22);
        $('#zlbeton22').text(zlbeton22);

        //======Itog 2 blok------

        var zitog2sm=zlbeton22+zkprovsm+zkarm8+zkarm12+zkfiksator+zkfanera18+zkopalsm+zkdoska40
            +zkgeomemsm+zkshebensm+zkpesoksm+zkgeomag;
        zitog2sm = Math.round(zitog2sm);
        $('#zitog2sm').text(zitog2sm);

        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором

        if (lkadplsm <= 30) {
            larmDostavsm = 9000;
        }
        if (lkadplsm > 30) {
            larmDostavsm = (lkad - 30) * 35 + 9000;
        }
        larmDostavsm = Math.round(larmDostavsm);
        $('#larmDostavsm').text(larmDostavsm);

        var zlarmDostavsm = larmDostavsm * 1;
        zlarmDostavsm = Math.round(zlarmDostavsm);
        $('#zlarmDostavsm').text(zlarmDostavsm);


        // Доставка и вывоз опалубки
        if (lkadplsm <= 30) {
            larmDostavOpalsm = 5000;
        }
        if (lkadplsm > 30) {
            larmDostavOpalsm = (lkad - 30) * 35 + 5000;
        }
        larmDostavOpalsm = Math.round(larmDostavOpalsm);
        $('#larmDostavOpalsm').text(larmDostavOpalsm);

        var zlarmDostavOpalsm = larmDostavOpalsm * 1;
        zlarmDostavOpalsm = Math.round(zlarmDostavOpalsm);
        $('#zlarmDostavOpalsm').text(zlarmDostavOpalsm);

        // Доставка остальных материалов
        if (lkadplsm <= 30) {
            larmDostavMatersm = 4200;
        }
        if (lkadplsm > 30) {
            larmDostavMatersm = (lkad - 30) * 35 + 4200;
        }
        larmDostavMatersm = Math.round(larmDostavMatersm);
        $('#larmDostavMatersm').text(larmDostavMatersm);

        var zlarmDostavMatersm = larmDostavMatersm * 1;
        zlarmDostavMatersm = Math.round(zlarmDostavMatersm);
        $('#zlarmDostavMatersm').text(zlarmDostavMatersm);

        // ==========ITOG DOSTAV============

        var zdostavmatsm = zlarmDostavMatersm + zlarmDostavsm + zlarmDostavOpalsm + 2400;
        zdostavmatsm = Math.round(zdostavmatsm);
        $('#zdostavmatsm').text(zdostavmatsm);

        // // =====Итого за материалы:
        var zdostavmatitogosm = zitog2sm + zdostavmatsm;
        zdostavmatitogosm = Math.round(zdostavmatitogosm);
        $('#zdostavmatitogosm').text(zdostavmatitogosm);




        //====== 4 blok=========
        // ======= Доп. Работы===========
        //  ===============Планировка выбранного грунта============
        var kgruntsm = 0;
        kgruntsm = Math.round(kgruntsm);
        $('#kgruntsm').text(kgruntsm);

        var zkgruntsm = kgruntsm * 150;
        zkgruntsm = Math.round(zkgruntsm);
        $('#zkgruntsm').text(zkgruntsm);

        // =============Устройство закладной гильзы вода===========
        var kzakladsm = 5;
        kzakladsm = Math.round(kzakladsm);
        $('#kzakladsm').text(kzakladsm);

        var zkzakladsm = kzakladsm * 1200;
        zkzakladsm = Math.round(zkzakladsm);
        $('#zkzakladsm').text(zkzakladsm);

        // =============Устройство закладной гильзы электро===========
        var kzakladelsm = 10;
        kzakladelsm = Math.round(kzakladelsm);
        $('#kzakladelsm').text(kzakladelsm);

        var zkzakladelsm = kzakladelsm * 200;
        zkzakladelsm = Math.round(zkzakladelsm);
        $('#zkzakladelsm').text(zkzakladelsm);

        // ====================Разводка канализации под домом============
        var kzakladkanalsm = 5;
        kzakladkanalsm = Math.round(kzakladkanalsm);
        $('#kzakladkanalsm').text(kzakladkanalsm);

        var zkzakladkanalsm = kzakladkanalsm * 1000;
        zkzakladkanalsm = Math.round(zkzakladkanalsm);
        $('#zkzakladkanalsm').text(zkzakladkanalsm);

        //Устройство дренажа фундамента с учетом установки дренажных колодцев d340


        var kdrenagsm = perimplsm+8;
        kdrenagsm = Math.round(kdrenagsm);
        $('#kdrenagsm').text(kdrenagsm);

        var kdrenagsm_1 = kdrenagsm*(700+72+216+80);
        kdrenagsm_1 = Math.round(kdrenagsm_1);

        var kdrenagsm_2 = kdrenagsm/15;
        var kdrenagsm_2r =Math.ceil(kdrenagsm_2);

        var kdrenagsm_2r2=kdrenagsm_2r*6100;
        var kdrenagsm_2r21 =(Math.round(kdrenagsm_2r2/10))*10;

        var kdrenagsm_2ksm=(kdrenagsm_2r21+kdrenagsm_1)/kdrenagsm;

        var kdrenagsm_2ksm1 =Math.ceil(kdrenagsm_2ksm);
        $('#kdrenagsm_2ksm1').text(kdrenagsm_2ksm1);


        var zkdrenagsm_2ksm = kdrenagsm_2ksm1 * kdrenagsm;
        zkdrenagsm_2ksm= Math.round(zkdrenagsm_2ksm);
        $('#zkdrenagsm_2ksm').text(zkdrenagsm_2ksm);


        // Вывоз мусора после завершения работ на объекте
        var kmusorsm = 1;
        kmusorsm = Math.round(kmusorsm);
        $('#kmusorsm').text(kmusorsm);

        var zkmusorsm = kmusorsm * 5000;
        zkmusorsm = Math.round(zkmusorsm);
        $('#zkmusorsm').text(zkmusorsm);


        // =============Itig Dop R=============
        var zitogdopsm = zkmusorsm + zkzakladkanalsm + zkzakladelsm + zkzakladsm + kgruntsm+zkdrenagsm_2ksm;
        zitogdopsm = Math.round(zitogdopsm);
        $('#zitogdopsm').text(zitogdopsm);

        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============

        if (lkadplsm <= 30) {
            var  kzbetsm = 14400;
        }
        if (lkadplsm > 30) {
            kzbetsm = (lkadplsm - 30) * 155 + 14400;
        }
        kzbetsm = Math.round( kzbetsm);
        $('#kzbetsm').text( kzbetsm);

        var zbetonsm =kzbetsm;
        zbetonsm = Math.round(zbetonsm);
        $('#zbetonsm').text(zbetonsm);

        // Обеспечение строительным вагончиком,
        var kvagonsm = 1;
        kvagonsm = Math.round(kvagonsm);
        $('#kvagonsm').text(kvagonsm);

        var zkvagonsm = kvagonsm * 20000;
        zkvagonsm = Math.round(zkvagonsm);
        $('#zkvagonsm').text(zkvagonsm);

        // Обеспечение биотуалетом
        var kbiotualsm = 1;
        kbiotualsm = Math.round(kbiotualsm);
        $('#kbiotualsm').text(kbiotualsm);

        var zkbiotualsm = kbiotualsm * 5000;
        zkbiotualsm = Math.round(zkbiotualsm);
        $('#zkbiotualsm').text(zkbiotualsm);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktrosm = 0;
        kelktrosm = Math.round(kelktrosm);
        $('#kelktrosm').text(kelktrosm);

        var zkelktrosm = kelktrosm * 0;
        zkelktrosm = Math.round(zkelktrosm);
        $('#zkelktrosm').text(zkelktrosm);

        // Обеспечение водой:
        var kvatersm = 0;
        kvatersm = Math.round(kvatersm);
        $('#kvatersm').text(kvatersm);

        var zkvatersm = kvatersm * 0;
        zkvatersm = Math.round(zkvatersm);
        $('#zkvatersm').text(zkvatersm);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpezsm = zkvatersm + zkelktrosm + zkbiotualsm + zkvagonsm + zbetonsm;
        zitogcpezsm = Math.round(zitogcpezsm);
        $('#zitogcpezsm').text(zitogcpezsm);

        // ===========Итого за работы и материалы:========
        var zitogo5sm = zitogcpezsm + zitogdopsm + zdostavmatitogosm + zitog1sm;
        zzitogo5sm = Math.round(zitogo5sm);
        $('#zitogo5sm').text(zitogo5sm);

        // Накладные расходы 2%:
        var zitogSMplpr = zitogo5sm * 0.02;
        zitogSMplpr = Math.round(zitogSMplpr);
        $('#zitogSMplpr').text(zitogSMplpr);

        // ИТОГО ПО СМЕТЕ:

        var zitogSMpl = zitogo5sm + zitogSMplpr;
        // zitogM1
        zitogSMpl = Math.round(zitogSMpl);
        $('#zitogSMpl').text(zitogSMpl);

        zena_smetu = zitogSMpl;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);

        //==== itog 1 etap======

        var zitog1etapsm=zdostavmatitogosm-zlbeton22;

        zitog1etapsm = (Math.ceil(zitog1etapsm/1000))*1000;
        $('#zitog1etapsm').text(zitog1etapsm);


        //==== itog 2 etap======

        var zitog2etapsm=zbetonsm+zlbeton22;

        zitog2etapsm = (Math.ceil(zitog2etapsm/1000))*1000;
        $('#zitog2etapsm').text(zitog2etapsm);

        //==== itog 2 etap======

        var zitog3etapsm=zitogSMpl-zitog1etapsm-zitog2etapsm;

        zitog3etapsm = Math.round(zitog3etapsm);
        $('#zitog3etapsm').text(zitog3etapsm);

    }









    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ  =================//

    if (VarFund==2) {
        // var KpsKadstr = document.getElementById("dist_sp").value;
        var lpl = document.getElementById('landpli').value;
        lpl = +lpl;
        $('#lpl').text(lpl);

        var dpl = document.getElementById('breadthpli').value;
        dpl = +dpl;
        $('#dpl').text(dpl);

        var hpl = document.getElementById('elevationpl').value;
        hpl = +hpl;
        $('#hpl').text(hpl);


        var hplr = hpl * 1000;
        $('#hplr').text(hplr);


        var spl = document.getElementById('areapplf').value;
        spl = +spl;
        $('#spl').text(spl);


        var perimpl = document.getElementById('perimplf').value;
        perimpl = +perimpl;
        $('#perimpl').text(perimpl);

        var hpesok = document.getElementById('pesokplf').value;
        hpesok = +hpesok;
        $('#hpesok').text(hpesok);

        var hpesokr = hpesok * 1000;
        $('#hpesokr').text(hpesokr);

        var hsheben = document.getElementById('shebenplf').value;
        hsheben = +hsheben;
        $('#hsheben').text(hsheben);

        var hshebenr = hsheben * 1000;
        $('#hshebenr').text(hshebenr);

        var hgrunt = hshebenr + hpesokr;
        $('#hgrunt').text(hgrunt);

        var lkad = document.getElementById('distancelentf').value;
        lkad = +lkad;
        $('#lkad').text(lkad);


        // Земляные работы
        zemv = (spl + perimpl) * (hpesok + hsheben);
        zemv = zemv.toFixed(2);
        $('#zemv').text(zemv);
        zenzemv = zemv * 300;
        zenzemv = Math.round(zenzemv);
        $('#zenzemv').text(zenzemv);

        // Устройство  разделительного слоя из геотекстиля
        var sgeoteks = (spl + perimpl);
        sgeoteks = sgeoteks.toFixed(2);
        $('#sgeoteks').text(sgeoteks);
        var zsgeoteks = (spl + perimpl) * 20;
        zsgeoteks = Math.round(zsgeoteks);
        $('#zsgeoteks').text(zsgeoteks);

        // Устройство песчаной подушки с послойной трамбовкой виброплитой
        var spesok = (spl * hpesok + perimpl * hpesok) * 1.28 * 1.2;
        spesok = Math.ceil((spesok) * 10) / 10;
        spesok = spesok.toFixed(2);
        $('#spesok').text(spesok);
        var zpesok = spesok * 400;
        zpesok = Math.round(zpesok);
        $('#zpesok').text(zpesok);

        // Устройство щебеночной подушки с послойной трамбовкой виброплитой

        var ssheb = (spl * hsheben + perimpl * hsheben) * 1.28;
        ssheb = Math.ceil((ssheb) * 10) / 10;
        ssheb = ssheb.toFixed(2);
        $('#ssheb').text(ssheb);
        var zssheb = ssheb * 400;
        zssheb = Math.round(zssheb);
        $('#zssheb').text(zssheb);

        // Укладка гидроизоляционной мембраны Planter
        var sgidro = (spl + perimpl * 0.3);
        sgidro = sgidro.toFixed(2);
        $('#sgidro').text(sgidro);
        var zsgidro = sgidro * 30;
        zsgidro = Math.round(zsgidro);
        $('#zsgidro').text(zsgidro);

        // Монтаж, демонтаж опалубки
        var sopal = perimpl;
        sopal = sopal.toFixed(2);
        $('#sopal').text(sopal);
        var zsopal = sopal * 450;
        zsopal = Math.round(zsopal);
        $('#zsopal').text(zsopal);

        // Изготовление и установка арматурных каркасов
        var varm1 = spl * 21 * 0.888 * 1.1 * 0.001 + perimpl / 0.2 * 1.5 * 0.91 * 1.1 * 0.001;


        var varm2 = (spl + perimpl / 2) * 0.45 * 1.2 * 0.001 + (perimpl * 1.5 * 0.395 / 1000) + perimpl / 1.5 * 0.5 * 1.1 * 0.001;

        var varm = varm2 + varm1;
        varm = varm.toFixed(2);
        $('#varm').text(varm);

        var varm3 = varm2 + varm1;
        var zvarm = varm3 * 17300;
        zvarm = Math.round(zvarm);
        $('#zvarm').text(zvarm);

        // Укладка бетона с вибрированием
        var ubet1 = (spl * hpl * 1.05 / 0.25);
        // var ubet=Math.floor(ubet1);
        var ubet = Math.ceil(ubet1);
        ubet = ubet * 0.25;
        // ubet=ubet.toFixed(2);
        $('#ubet').text(ubet);
        var zubet = ubet * 1500;
        zubet = Math.round(zubet);
        $('#zubet').text(zubet);

        // Итого:
        zenzemv = +zenzemv;
        zsgeoteks = +zsgeoteks;
        zpesok = +zpesok;
        zssheb = +zssheb;
        zsgidro = +zsgidro;
        zsopal = +zsopal;
        zubet = +zubet;
        zvarm = +zvarm;

        var zitog1 = zenzemv + zsgeoteks + zpesok + zssheb + zsgidro + zsopal + zubet + zvarm + 6500;
        var zitog1_1 = zitog1;
        zitog1 = Math.round(zitog1);
        $('#zitog1').text(zitog1);
        zitog1_1 = Math.round(zitog1_1);
        $('#zitog1_1').text(zitog1_1);

        // Материалы

        // Геотекстиль Мегаизол Гео про 200
        sgeoteks = +sgeoteks;
        var geotekst200 = sgeoteks * 1.1 * 1.2;
        geotekst200 = geotekst200.toFixed(2);
        $('#geotekst200').text(geotekst200);
        var zgeotekst200 = geotekst200 * 30;
        zgeotekst200 = Math.round(zgeotekst200);
        $('#zgeotekst200').text(zgeotekst200);

        // Песок строительный (средней крупности или крупный) (Кратно 10 м3) с учетом доставки

        spesok = +spesok;
        spesokd = spesok / 10;
        spesokd = Math.ceil(spesokd) * 10;
        $('#spesokd').text(spesokd);
        var zspesokd = spesokd * 600;
        zspesokd = Math.round(zspesokd);
        $('#zspesokd').text(zspesokd);

        // Щебень гранитный фр. 20-40 мм. (Кратно 10 м3) с учетом доставки
        ssheb = +ssheb;
        sshebd = ssheb / 10;
        sshebd = Math.ceil(sshebd) * 10;
        $('#sshebd').text(sshebd);
        var zsshebd = sshebd * 1400;
        zsshebd = Math.round(zsshebd);
        $('#zsshebd').text(zsshebd);

        // Геомембрана Planter

        sgidro = +sgidro;
        var sgidrod = sgidro * 1.1;
        // sgidrod=Math.ceil(sshebd)*10;
        sgidrod = sgidrod.toFixed(2);
        $('#sgidrod').text(sgidrod);
        var zsgidrod = sgidrod * 110;
        zsgidrod = Math.round(zsgidrod);
        $('#zsgidrod').text(zsgidrod);

        // Опалубка инвентарная из ламинированной фанеры на деревянном каркасе
        spl = +spl;
        sopalub = spl * 115;
        // sgidrod=Math.ceil(sshebd)*10;
        $('#sopalub').text(sopalub);
        var zsopalub = sopalub * 1;
        zsopalub = Math.round(zsopalub);
        $('#zsopalub').text(zsopalub);

        // Доска 40*150*6000 для раскрепления инвентарных щитов
        sdosk = (hpl * 1000 / 150) * (perimpl * 0.009) + perimpl * 0.0125;
        sdosk = sdosk * 0.5 + 0.25;
        sdosk = sdosk * 100;
        sdosk = Math.ceil(sdosk) / 100;
        // sgidrod=Math.ceil(sshebd)*10;
        $('#sdosk').text(sdosk);
        var zsdosk = sdosk * 12500;
        zsdosk = zsdosk - 12500 * 0.00296;
        zsdosk = Math.round(zsdosk);
        $('#zsdosk').text(zsdosk);

        // Подставки под арматуру (стульчики)

        var sarmat = spl * 4;
        $('#sarmat').text(sarmat);
        var zsarmat = sarmat * 5;
        zsarmat = Math.round(zsarmat);
        $('#zsarmat').text(zsarmat);


        // Арматура d12 А500
        var sarmatd12 = varm1;
        sarmatd12 = sarmatd12.toFixed(2);

        $('#sarmatd12').text(sarmatd12);
        var zsarmatd12 = varm1 * 41000;
        zsarmatd12 = Math.round(zsarmatd12);
        $('#zsarmatd12').text(zsarmatd12);

        // Арматура d8 А500
        var sarmatd8 = varm2;
        sarmatd8 = sarmatd8.toFixed(2);

        $('#sarmatd8').text(sarmatd8);
        var zsarmatd8 = varm2 * 41000;
        zsarmatd8 = Math.round(zsarmatd8);
        $('#zsarmatd8').text(zsarmatd8);

        // Проволока вязальная
        var sprovol = varm * 9;
        sprovol = sprovol * 10;
        sprovol = Math.ceil(sprovol) / 10;
        sprovol = sprovol.toFixed(2);

        $('#sprovol').text(sprovol);
        var zsprovol = sprovol * 100;
        zsprovol = Math.round(zsprovol);
        $('#zsprovol').text(zsprovol);

        // Бетон B22,5 М300 П4
        ubet = +ubet;
        var ubetm300 = ubet;
        $('#ubetm300').text(ubetm300);
        if (lkad <= 30) {
            lkadr = 4100;
        }
        if (lkad > 30) {
            lkadr = (lkad - 30) * 15 + 4100;
        }
        lkadr = Math.round(lkadr);
        $('#lkadr').text(lkadr);

        var zubetm300 = ubetm300 * lkadr;
        zubetm300 = Math.round(zubetm300);
        $('#zubetm300').text(zubetm300);

        // ===========Itog Mat_1============
        zubetm300 = +zubetm300;

        zsprovol = +zsprovol;
        zsarmatd8 = +zsarmatd8;
        zsarmatd12 = +zsarmatd12;
        zsdosk = +zsdosk;
        zsopalub = +zsopalub;
        zsgidrod = +zsgidrod;
        zsshebd = +zsshebd;
        zspesokd = +zspesokd;
        zgeotekst200 = +zgeotekst200;
        zsarmat = +zsarmat;

        var zitogM1 = zsarmat + zubetm300 + zsprovol + zsarmatd8 + zsarmatd12 + zsdosk + zsopalub + zsgidrod + zsshebd + zspesokd + zgeotekst200;
        zitogM1 = Math.round(zitogM1);
        $('#zitogM1').text(zitogM1);

        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором

        if (lkad <= 30) {
            larmDostav = 9000;
        }
        if (lkad > 30) {
            larmDostav = (lkad - 30) * 35 + 9000;
        }
        larmDostav = Math.round(larmDostav);
        $('#larmDostav').text(larmDostav);

        var zlarmDostav = larmDostav * 1;
        zlarmDostav = Math.round(zlarmDostav);
        $('#zlarmDostav').text(zlarmDostav);


        // Доставка и вывоз опалубки
        if (lkad <= 30) {
            larmDostavOpal = 5000;
        }
        if (lkad > 30) {
            larmDostavOpal = (lkad - 30) * 35 + 5000;
        }
        larmDostavOpal = Math.round(larmDostavOpal);
        $('#larmDostavOpal').text(larmDostavOpal);

        var zlarmDostavOpal = larmDostavOpal * 1;
        zlarmDostavOpal = Math.round(zlarmDostavOpal);
        $('#zlarmDostavOpal').text(zlarmDostavOpal);

        // Доставка остальных материалов
        if (lkad <= 30) {
            larmDostavMater = 4200;
        }
        if (lkad > 30) {
            larmDostavMater = (lkad - 30) * 35 + 4200;
        }
        larmDostavMater = Math.round(larmDostavMater);
        $('#larmDostavMater').text(larmDostavMater);

        var zlarmDostavMater = larmDostavMater * 1;
        zlarmDostavMater = Math.round(zlarmDostavMater);
        $('#zlarmDostavMater').text(zlarmDostavMater);

        // ==========ITOG DOSTAV============
        zlarmDostavMater = +zlarmDostavMater;
        zlarmDostav = +zlarmDostav;
        zlarmDostavOpal = +zlarmDostavOpal;
        var zdostavmat = zlarmDostavMater + zlarmDostav + zlarmDostavOpal + 2400;
        zdostavmat = Math.round(zdostavmat);
        $('#zdostavmat').text(zdostavmat);

        // =====Итого за материалы:
        var zdostavmatitogo = zdostavmat + zitogM1;
        zdostavmatitogo = Math.round(zdostavmatitogo);
        $('#zdostavmatitogo').text(zdostavmatitogo);


        // ======= Доп. Работы===========
        //  ===============Планировка выбранного грунта============
        var kgrunt = 0;
        kgrunt = Math.round(kgrunt);
        $('#kgrunt').text(kgrunt);

        var zkgrunt = kgrunt * 150;
        zkgrunt = Math.round(zkgrunt);
        $('#zkgrunt').text(zkgrunt);

        // =============Устройство закладной гильзы вода===========
        var kzaklad = 5;
        kzaklad = Math.round(kzaklad);
        $('#kzaklad').text(kzaklad);

        var zkzaklad = kzaklad * 1200;
        zkzaklad = Math.round(zkzaklad);
        $('#zkzaklad').text(zkzaklad);

        // =============Устройство закладной гильзы электро===========
        var kzakladel = 10;
        kzakladel = Math.round(kzakladel);
        $('#kzakladel').text(kzakladel);

        var zkzakladel = kzakladel * 200;
        zkzakladel = Math.round(zkzakladel);
        $('#zkzakladel').text(zkzakladel);

        // ====================Разводка канализации под домом============
        var kzakladkanal = 5;
        kzakladkanal = Math.round(kzakladkanal);
        $('#kzakladkanal').text(kzakladkanal);

        var zkzakladkanal = kzakladkanal * 1000;
        zkzakladkanal = Math.round(zkzakladkanal);
        $('#zkzakladkanal').text(zkzakladkanal);

        // Вывоз мусора после завершения работ на объекте
        var kmusor = 1;
        kmusor = Math.round(kmusor);
        $('#kmusor').text(kmusor);

        var zkmusor = kmusor * 5000;
        zkmusor = Math.round(zkmusor);
        $('#zkmusor').text(zkmusor);


        // =============Itig Dop R=============
        var zitogdop = zkmusor + zkzakladkanal + zkzakladel + zkzaklad + kgrunt;
        zitogdop = Math.round(zitogdop);
        $('#zitogdop').text(zitogdop);

        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============
        var kbenso = ubetm300 / 80;
        kbenso = Math.round(kbenso);
        $('#kbenso').text(kbenso);

        if (lkad <= 30) {
            kzbet = 14400;
        }
        if (lkad > 30) {
            kzbet = (lkad - 30) * 155 + 14400;
        }
        kzbet = Math.round(kzbet);
        $('#kzbet').text(kzbet);

        var zbeton = kzbet * kbenso;
        zbeton = Math.round(zbeton);
        $('#zbeton').text(zbeton);

        // Обеспечение строительным вагончиком,
        var kvagon = 1;
        kvagon = Math.round(kvagon);
        $('#kvagon').text(kvagon);

        var zkvagon = kvagon * 20000;
        zkvagon = Math.round(zkvagon);
        $('#zkvagon').text(zkvagon);

        // Обеспечение биотуалетом
        var kbiotual = 1;
        kbiotual = Math.round(kbiotual);
        $('#kbiotual').text(kbiotual);

        var zkbiotual = kbiotual * 5000;
        zkbiotual = Math.round(zkbiotual);
        $('#zkbiotual').text(zkbiotual);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktro = 0;
        kelktro = Math.round(kelktro);
        $('#kelktro').text(kelktro);

        var zkelktro = kelktro * 0;
        zkelktro = Math.round(zkelktro);
        $('#zkelktro').text(zkelktro);

        // Обеспечение водой:
        var kvater = 0;
        kvater = Math.round(kvater);
        $('#kvater').text(kvater);

        var zkvater = kvater * 0;
        zkvater = Math.round(zkvater);
        $('#zkvater').text(zkvater);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpez = zkvater + zkelktro + zkbiotual + zkvagon + zbeton;
        zitogcpez = Math.round(zitogcpez);
        $('#zitogcpez').text(zitogcpez);

        // ===========Итого за работы и материалы:========
        var zitogcpezMat = zitogcpez + zitogdop + zdostavmatitogo + zitog1_1;
        // zitogM1

        zitogcpezMat = Math.round(zitogcpezMat);
        $('#zitogcpezMat').text(zitogcpezMat);

        // Накладные расходы 2%:
        var zitogSMpr = zitogcpezMat * 0.02;
        // zitogM1
        zitogSMpr = Math.round(zitogSMpr);
        $('#zitogSMpr').text(zitogSMpr);

        // ИТОГО ПО СМЕТЕ:

        var zitogSM = zitogcpezMat + zitogSMpr;
        // zitogM1
        zitogSM = Math.round(zitogSM);
        $('#zitogSM').text(zitogSM);

        var zena_smetu = zitogSM;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);


        // ИТОГО ПО СМЕТЕ 1 etap:
        var zitogSM1 = (zitogdop / 2) + zitogM1 - zubetm300;
        zitogSM1 = zitogSM1 / 1000;
        zitogSM1 = Math.ceil(zitogSM1) * 1000;

        zitogSM1 = Math.round(zitogSM1);
        $('#zitogSM1').text(zitogSM1);

        // ИТОГО ПО СМЕТЕ 2 etap:
        var zitogSM2 = zubetm300 + zbeton;

        zitogSM2 = zitogSM2 / 1000;
        zitogSM2 = Math.ceil(zitogSM2) * 1000;

        zitogSM2 = Math.round(zitogSM2);
        $('#zitogSM2').text(zitogSM2);

        // ИТОГО ПО СМЕТЕ 3 etap:
        var zitogSM3 = zitogSM - zitogSM2 - zitogSM1
        zitogSM3 = Math.round(zitogSM3);
        $('#zitogSM3').text(zitogSM3);

    }

    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ NR  =================//

    if (VarFund==3){
        //Длина
        var landnr = document.getElementById('landplfnr').value;
        landnr = +landnr;
        $('#llandnr').text(landnr);

        //Ширина
        var breadtnr = document.getElementById('breadthplfnr').value;
        breadtnr = +breadtnr;
        $('#breadtnr').text(breadtnr);

        //Высота плиты
        var hplnr = (document.getElementById('elevationplnr').value)*1000;
        hplnr = +hplnr;
        $('#hplnr').text(hplnr);

        //Площадь плиты
        var splnr = document.getElementById('areapplfnr').value;
        splnr = +splnr;
        $('#splnr').text(splnr);

        //Периметр фундамента
        var perimetrnr = document.getElementById('perimplfnr').value;
        perimetrnr = +perimetrnr;
        $('#perimetrnr').text(perimetrnr);

        //Толщина песчаной подушки
        var hpesoknr = (document.getElementById('pesokplfnr').value)*1000;
        hpesoknr = +hpesoknr;
        $('#hpesoknr').text(hpesoknr);

        //Толщина щебёночной подушки
        var hsheblpnr = (document.getElementById('pesokplfnr').value)*1000;
        hsheblpnr = +hsheblpnr;
        $('#hsheblpnr').text(hsheblpnr);

        //Толщина выбираемого слоя грунта
        var hgruntnr=hsheblpnr+hpesoknr;
        hgruntnr = +hgruntnr;
        $('#hgruntnr').text(hgruntnr);

        //Общая длина ростверка
        var lrosrvernr= document.getElementById('langplnr').value;
        lrosrvernr = +lrosrvernr;
        $('#lrosrvernr').text(lrosrvernr);

        //Высота ростверка
        var hrosrvernr= (document.getElementById('hplplnr').value)*1000;
        hrosrvernr = +hrosrvernr;
        $('#hrosrvernr').text(hrosrvernr);

        //Ширина ростверка
        //<input type="number" class="shebenplf" id="shplplnr" value="0.4" min="0" max="200" step="0.1">
        var shrosrvernr= (document.getElementById('shplplnr').value)*1000;
        shrosrvernr = +shrosrvernr;
        $('#shrosrvernr').text(shrosrvernr);

        //Растояние от КАД
        var lkadnr = document.getElementById('distancelentfnr').value;
        lkadnr = +lkadnr;
        $('#lkadnr').text(lkadnr);



//==================================1 blokc =================


        // Вынос осей, разбивка участка
        var kosnr = splnr;
        kosnr = kosnr.toFixed(0);
        $('#kosnr').text(kosnr);
        var zkosnr = kosnr * 40;
        zkosnr = Math.round(zkosnr);
        $('#zkosnr').text(zkosnr);

        // Земляные работы
        var kzemvnr = (splnr+perimetrnr)*hgruntnr*0.001;
        kzemvnr = kzemvnr.toFixed(2);
        $('#kzemvnr').text(kzemvnr);
        var zemvnr = kzemvnr * 300;
        zemvnr = Math.round(zemvnr);
        $('#zemvnr').text(zemvnr);


        // Устройство  разделительного слоя из геотекстиля
        var kgeoteksrn =splnr+perimetrnr ;
        kgeoteksrn = kgeoteksrn.toFixed(2);
        $('#kgeoteksrn').text(kgeoteksrn);
        var zkgeoteksrn = kgeoteksrn * 20;
        zkgeoteksrn = Math.round(zkgeoteksrn);
        $('#zkgeoteksrn').text(zkgeoteksrn);

        //Устройство песчаной подушки с послойной трамбовкой виброплитой
        var kpesoknr =(splnr*hpesoknr*0.001+perimetrnr*hpesoknr*0.001)*1.28*1.2;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kpesoknr = Math.round(kpesoknr);
        kpesoknr = kpesoknr.toFixed(2);
        $('#kpesoknr').text(kpesoknr);
        var zkpesoknr = kpesoknr * 400;
        zkpesoknr = Math.round(zkpesoknr);
        $('#zkpesoknr').text(zkpesoknr);

        // Устройство щебеночной подушки с послойной трамбовкой виброплитой
        var kshebennr =(splnr*hsheblpnr*0.001+perimetrnr*hsheblpnr*0.001)*1.28;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kshebennr = Math.round(kshebennr);
        kshebennr = kshebennr.toFixed(2);
        $('#kshebennr').text(kshebennr);
        var zkshebennr = kshebennr * 400;
        zkshebennr = Math.round(zkshebennr);
        $('#zkshebennr').text(zkshebennr);

        // Укладка гидроизоляционной мембраны Planter
        var kgidroisolnr =splnr+perimetrnr*0.3;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kgidroisolnr = kgidroisolnr.toFixed(2);
        $('#kgidroisolnr').text(kgidroisolnr);
        var zkgidroisolnr = kgidroisolnr * 30;
        zkgidroisolnr = Math.round(zkgidroisolnr);
        $('#zkgidroisolnr').text(zkgidroisolnr);

        //Монтаж и демонтаж опалубки
        var kmontagopalnr = perimetrnr;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kmontagopalnr = kmontagopalnr.toFixed(2);
        $('#kmontagopalnr').text(kmontagopalnr);
        var zkmontagopalnr = kmontagopalnr * 450;
        zkmontagopalnr = Math.round(zkmontagopalnr);
        $('#zkmontagopalnr').text(zkmontagopalnr);

        //Изготовление и установка арматурных каркасов, монтаж арматурной сетки (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrnr43 =(splnr*21*0.888*0.001*1.1+perimetrnr/0.2*1.5*1.1*0.91*0.001);
        //karmrnr43 = karmrnr43.toFixed(2);
        karmrnr43=+karmrnr43;

        var karmrnr44 =(splnr+perimetrnr/2)*0.45*1.2*0.001+perimetrnr/1.5*0.5*1.1*0.001;
        //karmrnr44 = karmrnr44.toFixed(2);
        //alert(karmrnr44);
        karmrnr44=+karmrnr44;

        var karmrnr26nr=karmrnr44+karmrnr43;

        karmrnr26nrsm = karmrnr26nr.toFixed(2);
        $('#karmrnr26nrsm').text(karmrnr26nrsm);
        var zkarmrnr26nr = karmrnr26nr *17300;
        zkarmrnr26nr = Math.round(zkarmrnr26nr);
        $('#zkarmrnr26nr').text(zkarmrnr26nr);




        //Укладка бетона с вибрированием

        var kukbetonnr = splnr*hplnr*0.001*1.05;
        kukbetonnr = kukbetonnr.toFixed(2);
        $('#kukbetonnr').text(kukbetonnr);
        var zkukbetonr25 = kukbetonnr * 1500;
        zkukbetonr25 = Math.round(zkukbetonr25);
        $('#zkukbetonr25').text(zkukbetonr25);

        //=======ITOG 1 block =====
        var zitog1nr=zkukbetonr25+zkarmrnr26nr+zkmontagopalnr+zkgidroisolnr+zkshebennr+zkpesoknr
            +zkgeoteksrn+zemvnr+zkosnr;
        zitog1nr = Math.round(zitog1nr);
        $('#zitog1nr').text(zitog1nr);

        ///======Ростверк: ============


        //Монтаж опалубки
        var kopalnr = hrosrvernr*lrosrvernr*2*0.001;
        //shrosrvernr
        kopalnr = kopalnr.toFixed(2);
        $('#kopalnr').text(kopalnr);
        var zkopalnr = kopalnr * 500;
        zkopalnr = Math.round(zkopalnr);
        $('#zkopalnr').text(zkopalnr);

        //Изготовление и установка арматурных каркасов ростверка, (Соединение стержней арматуры выполняется с использованием вязальной проволоки)

        var karmnr51_1=(shrosrvernr*0.001)/0.2;
        //karmnr51_1 = Math.ceil((karmnr51_1) * 10) / 10;
        //alert(karmnr51_1);
        var karmnr51_2=(hrosrvernr*0.001)/0.2;
        //karmnr51_2 = Math.ceil((karmnr51_2) * 10) / 10;
        //alert(karmnr51_2);

        var karmnr51=karmnr51_1*karmnr51_2*lrosrvernr*0.001*0.888*1.3;
        //alert(karmnr51);

        var karmnr52=(lrosrvernr/0.3)*0.395*0.001*1.1;

        var karmnr31 = karmnr51+karmnr52;
        //shrosrvernr
        karmnr31r =karmnr31.toFixed(2);
        $('#karmnr31r').text(karmnr31r);
        var zkarmnr31 = karmnr31 * 17300;
        zkarmnr31 = Math.round(zkarmnr31);
        $('#zkarmnr31').text(zkarmnr31);


        //Укладка бетона с вибрированием
        var kbetonrosnrr =(shrosrvernr*hrosrvernr*lrosrvernr*1.05*0.001*0.001)/0.25;
        //alert(kbetonrosnrr);

        var kbetonrosnr=(Math.ceil((kbetonrosnrr)))*0.25;
        //alert(kbetonrosnr);
        //var kbetonrosnr=kbetonrosnrr*0.25;
        //shrosrvernr
        kbetonrosnr = kbetonrosnr.toFixed(2);
        $('#kbetonrosnr').text(kbetonrosnr);
        var zkbetonrosnr = kbetonrosnr * 2000;
        zkbetonrosnr = Math.round(zkbetonrosnr);
        $('#zkbetonrosnr').text(zkbetonrosnr);


        //=======ITOG 2 block =====
        var zitog2nr= zkbetonrosnr+ zkarmnr31+ zkopalnr ;
        zitog2nr = Math.round(zitog2nr);
        $('#zitog2nr').text(zitog2nr);

        //=======ITOG 1_2 block =====
        var zitog1_2nr= zitog2nr+ zitog1nr;
        zitog1_2nr = Math.round(zitog1_2nr);
        $('#zitog1_2nr').text(zitog1_2nr);






        //======== 2 bloks =======

        // ======Плита:=========

        //Геотекстиль Мегаизол Гео про 200
        var kgeomagnr =kgeoteksrn*1.1*1.2;
        //var kzacupr = Math.ceil(kzacup);
        // alert(kzacupr);
        //kzacupr=kzacupr*1.2;
        kgeomagnr =  kgeomagnr.toFixed(2);
        $('#kgeomagnr').text(kgeomagnr);
        var zkgeomagnr = kgeomagnr * 30;
        zkgeomagnr = Math.round(zkgeomagnr);
        $('#zkgeomagnr').text(zkgeomagnr);

        //Песок строительный (средней крупности или крупный) (Кратно 10 м3) с учетом доставки
        var kpesokplnr =(Math.round(kpesoknr/10))*10;
        //var kzacupr = Math.ceil(kzacup);

        kpesokplnr =  kpesokplnr.toFixed(2);
        $('#kpesokplnr').text(kpesokplnr);
        var zkpesokplnr = kpesokplnr *600;
        zkpesokplnr = Math.round(zkpesokplnr);
        $('#zkpesokplnr').text(zkpesokplnr);

        //Щебень гранитный фр. 20-40 мм. (Кратно 10 м3) с учетом доставки
        var kshebenplnr =(Math.ceil(kshebennr/10))*10;
        //alert(kshebennr);
        //var kzacupr = Math.ceil(kzacup);
        kshebenplnr =  kshebenplnr.toFixed(2);
        $('#kshebenplnr').text(kshebenplnr);
        var zkshebenplnr = kshebenplnr *1400;
        zkshebenplnr = Math.round(zkshebenplnr);
        $('#zkshebenplnr').text(zkshebenplnr);

        // Геомембрана Planter
        var kgidroisolnr40 =kgidroisolnr*1.1;
        kgidroisolnr40 =  kgidroisolnr40.toFixed(2);
        $('#kgidroisolnr40').text(kgidroisolnr40);
        var zkgidroisolnr40 = kgidroisolnr40 *110;
        zkgidroisolnr40 = Math.round(zkgidroisolnr40);
        $('#zkgidroisolnr40').text(zkgidroisolnr40);

        //Подставки под арматуру (стульчики)
        var kpodstulnr =splnr*4;
        kpodstulnr =  kpodstulnr.toFixed(0);
        $('#kpodstulnr').text(kpodstulnr);
        var zkpodstulnr = kpodstulnr *5;
        zkpodstulnr = Math.round(zkpodstulnr);
        $('#zkpodstulnr').text(zkpodstulnr);


        //Опалубка инвентарная из ламинированной фанеры на деревянном каркасе (амортизация)
        var kopalnr42 =splnr*115;
        kopalnr42 =  kopalnr42.toFixed(1);
        $('#kopalnr42').text(kopalnr42);
        var zkopalnr42 = kopalnr42;
        zkopalnr42 = Math.round(zkopalnr42);
        $('#zkopalnr42').text(zkopalnr42);



        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karm12nr =karmrnr43;
        // alert(karmrfrk38);
        var karm12nrr =  karm12nr.toFixed(2);
        $('#karm12nrr').text(karm12nrr);
        var zkarm12nr = karm12nr *41000;
        zkarm12nr = Math.round(zkarm12nr);
        $('#zkarm12nr').text(zkarm12nr);

        // Арматура d8 А500 на хомуты (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karm8nr =karmrnr44;
        //alert(karmrfrk39);
        var karm8nrr =  karm8nr.toFixed(2);
        $('#karm8nrr').text(karm8nrr);
        var zkarm8nr = karm8nr *41000;
        zkarm8nr = Math.round(zkarm8nr);
        $('#zkarm8nr').text(zkarm8nr);

        //Проволока вязальная
        var kprovnr =karmrnr26nrsm*9;
        //alert(kprovsm);
        //(Math.round(sshebsm/10))*10;
        //var kprovsmr = (Math.ceil(kprovsm));
        kprovnr =  kprovnr.toFixed(2);
        $('#kprovnr').text(kprovnr);
        var zkprovnr = kprovnr *100;
        zkprovnr = Math.round(zkprovnr);
        $('#zkprovnr').text(zkprovnr);

        //Бетон B22,5 М300 П4 (С учетом доставки из СПб)
        kukbetonnr=+kukbetonnr;
        var kbetonb22nr =kukbetonnr;

        kbetonb22nr = kbetonb22nr.toFixed(2);
        //var karm12r =  karm12.toFixed(2);
        $('#kbetonb22nr').text(kbetonb22nr);
        //<span id="lkadnr">25</span>
        if (lkadnr <= 30) {
            var lbeton22nr = 4100;
        }
        if (lkadnr > 30) {
            lbeton22nr = (lkadnr - 30) * 15 + 4100;
        }
        lbeton22nr =  Math.round(lbeton22nr);
        $('#lbeton22nr').text(lbeton22nr);


        var zlbeton22nr = lbeton22nr*kbetonb22nr;
        zlbeton22nr = Math.round(zlbeton22nr);
        $('#zlbeton22nr').text(zlbeton22nr);

        //======Itog 3_1 blok------

        var zitog3_1nr=zlbeton22nr+zkprovnr+ zkarm8nr+zkarm12nr+zkopalnr42+zkpodstulnr
            +zkgidroisolnr40+zkshebenplnr+zkpesokplnr+zkgeomagnr;
        zitog3_1nr = Math.round(zitog3_1nr);
        $('#zitog3_1nr').text(zitog3_1nr);


        // ======Материалы ростверк:=========

        //Опалубка инвентарная из ламинированной фанеры
        //<span id="hrosrvernr">200</span>
        //<span id="perimetrnr">40</span>
        //<span id="lrosrvernr">60</span>
        if (hrosrvernr < 301) {
            var kopalrosvnr = perimetrnr*0.6;
        }
        if (hrosrvernr >= 301) {
            kopalrosvnr = (lrosrvernr*2*0.6);
        }
        kopalrosvnr =  kopalrosvnr.toFixed(1);
        $('#kopalrosvnr').text(kopalrosvnr);
        //=========
        if (hrosrvernr <= 700) {
            var kopalrosvnr2 = 260;
        }
        if (hrosrvernr >700) {
            kopalrosvnr2 = 580;
        }
        kopalrosvnr2 =  kopalrosvnr2.toFixed(1);
        $('#kopalrosvnr2').text(kopalrosvnr2);


        var zkopalrosvnr = kopalrosvnr2 *kopalrosvnr;
        zkopalrosvnr = Math.round(zkopalrosvnr);
        $('#zkopalrosvnr').text(zkopalrosvnr);

        //Доска 40*100(200)*6000 для раскрепления инвентарных щитов, внутренней опалубки ростверка
        if (hrosrvernr < 301) {
            var kdoska40nr =(lrosrvernr*hrosrvernr*0.001*2-perimetrnr*hrosrvernr*0.001+perimetrnr*0.1)*0.04*1.1;
        }
        if (hrosrvernr >= 301) {
            kdoska40nr = (lrosrvernr*0.2*0.04);
        }
        kdoska40nr =  kdoska40nr.toFixed(2);
        $('#kdoska40nr').text(kdoska40nr);

        var zkdoska40nr = kdoska40nr *12500;
        zkdoska40nr = Math.round(zkdoska40nr);
        $('#zkdoska40nr').text(zkdoska40nr);

        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmnr51nr=karmnr51;
        var karmnr51nrsm=  karmnr51nr.toFixed(2);
        $('#karmnr51nrsm').text(karmnr51nrsm);

        var zkarmnr51nr = karmnr51nr *41000;
        zkarmnr51nr = Math.round(zkarmnr51nr);
        $('#zkarmnr51nr').text(zkarmnr51nr);

        //Арматура d8 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karmnr52nr=karmnr52;
        var karmnr52nrsm=  karmnr52nr.toFixed(2);
        $('#karmnr52nrsm').text(karmnr52nrsm);

        var zkarmnr52nr = karmnr52nr *41000;
        zkarmnr52nr = Math.round(zkarmnr52nr);
        $('#zkarmnr52nr').text(zkarmnr52nr);

        //Проволока вязальная
        karmnr52nr=+karmnr52nr;
        karmnr51nr=+karmnr51nr;
        var kprovrosnrsm =(karmnr52nr+karmnr51nr)*9;
        kprovrosnrsm =  kprovrosnrsm.toFixed(2);
        $('#kprovrosnrsm').text(kprovrosnrsm);
        var zkprovrosnr = kprovrosnrsm *100;
        zkprovrosnr = Math.round(zkprovrosnr);
        $('#zkprovrosnr').text(zkprovrosnr)

        //Бетон для ростверка B22,5 М300 П4
        kbetonrosnr=+kbetonrosnr;
        var kbetonrosnr54 =kbetonrosnr;
        kbetonrosnr54 =  kbetonrosnr54.toFixed(2);
        $('#kbetonrosnr54').text(kbetonrosnr54);
        var zkbetonrosnr54 = kbetonrosnr54 *4100;
        zkbetonrosnr54 = Math.round(zkbetonrosnr54);
        $('#zkbetonrosnr54').text(zkbetonrosnr54)

//======Itog 3_2 blok------

        var zitog3_2nr=zkbetonrosnr54+zkprovrosnr+zkarmnr52nr+ zkarmnr51nr+zkdoska40nr+zkopalrosvnr  ;
        zitog3_2nr = Math.round(zitog3_2nr);
        $('#zitog3_2nr').text(zitog3_2nr);





        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором

        if (lkadnr <= 30) {
            var larmDostavnr = 9000;
        }
        if (lkadnr > 30) {
            larmDostavnr = (lkadnr - 30) * 35 + 9000;
        }
        larmDostavnr = Math.round(larmDostavnr);
        $('#larmDostavnr').text(larmDostavnr);

        var zlarmDostavnr = larmDostavnr;
        zlarmDostavnr = Math.round(zlarmDostavnr);
        $('#zlarmDostavnr').text(zlarmDostavnr);


        // Доставка и вывоз опалубки
        if (lkadnr <= 30) {
            var larmDostavOpalnr = 5000;
        }
        if (lkadnr > 30) {
            larmDostavOpalnr = (lkadnr - 30) * 35 + 5000;
        }
        larmDostavOpalnr = Math.round(larmDostavOpalnr);
        $('#larmDostavOpalnr').text(larmDostavOpalnr);

        var zlarmDostavOpalnr = larmDostavOpalnr * 1;
        zlarmDostavOpalnr = Math.round(zlarmDostavOpalnr);
        $('#zlarmDostavOpalnr').text(zlarmDostavOpalnr);

        // Доставка остальных материалов
        if (lkadnr <= 30) {
            var larmDostavMaternr = 4200;
        }
        if (lkadnr > 30) {
            larmDostavMaternr = (lkadnr - 30) * 35 + 4200;
        }
        larmDostavMaternr = Math.round(larmDostavMaternr);
        $('#larmDostavMaternr').text(larmDostavMaternr);

        var zlarmDostavMaternr = larmDostavMaternr * 1;
        zlarmDostavMaternr = Math.round(zlarmDostavMaternr);
        $('#zlarmDostavMaternr').text(zlarmDostavMaternr);

        // ==========ITOG DOSTAV============

        var zdostavmatnr = zlarmDostavMaternr + zlarmDostavnr + zlarmDostavOpalnr + 2400;
        zdostavmatnr = Math.round(zdostavmatnr);
        $('#zdostavmatnr').text(zdostavmatnr);

        // // // =====Итого:
        // var zdostavmatitogosm = zitog2sm + zdostavmatsm;
        // zdostavmatitogosm = Math.round(zdostavmatitogosm);
        // $('#zdostavmatitogosm').text(zdostavmatitogosm);

        // // =====Итого за материалы:
        zdostavmatitogosm=+zdostavmatitogosm;
        var zitog3_dnr = zdostavmatnr+zitog3_2nr+zitog3_1nr;
        zitog3_dnr = Math.round(zitog3_dnr);
        $('#zitog3_dnr').text(zitog3_dnr);




        //====== 4 blok=========
        // ======= Доп. Работы===========
        //  ===============Планировка выбранного грунта============
        var kgruntnr = 0;
        kgruntnr = Math.round(kgruntnr);
        $('#kgruntnr').text(kgruntnr);

        var zkgruntnr = kgruntnr * 150;
        zkgruntnr = Math.round(zkgruntnr);
        $('#zkgruntnr').text(zkgruntnr);

        // =============Устройство закладной гильзы вода===========
        var kzakladnr = 5;
        kzakladnr = Math.round(kzakladnr);
        $('#kzakladnr').text(kzakladnr);

        var zkzakladnr = kzakladnr * 1200;
        zkzakladnr = Math.round(zkzakladnr);
        $('#zkzakladnr').text(zkzakladnr);

        // =============Устройство закладной гильзы электро===========
        var kzakladelnr = 10;
        kzakladelnr = Math.round(kzakladelnr);
        $('#kzakladelnr').text(kzakladelnr);

        var zkzakladelnr = kzakladelnr * 200;
        zkzakladelnr = Math.round(zkzakladelnr);
        $('#zkzakladelnr').text(zkzakladelnr);

        // ====================Разводка канализации под домом============
        var kzakladkanalnr = 5;
        kzakladkanalnr = Math.round(kzakladkanalnr);
        $('#kzakladkanalnr').text(kzakladkanalnr);

        var zkzakladkanalnr = kzakladkanalnr * 1000;
        zkzakladkanalnr = Math.round(zkzakladkanalnr);
        $('#zkzakladkanalnr').text(zkzakladkanalnr);

        //Устройство дренажа фундамента с учетом установки дренажных колодцев d340


        var kdrenagnr = perimetrnr+8;
        kdrenagnr = Math.round(kdrenagnr);
        $('#kdrenagnr').text(kdrenagnr);

        var kdrenagnr_1 = kdrenagnr*(700+72+216+80);
        kdrenagnr_1 = Math.round(kdrenagnr_1);

        var kdrenagnr_2 = kdrenagnr/15;
        var kdrenagnr_2r =Math.ceil(kdrenagnr_2);

        var kdrenagnr_2r2=kdrenagnr_2r*6100;
        var kdrenagnr_2r21 =(Math.round(kdrenagnr_2r2/10))*10;

        var kdrenagsm_2knr=(kdrenagnr_2r21+kdrenagnr_1)/kdrenagnr;

        var kdrenagsm_2knr1 =Math.ceil(kdrenagsm_2knr);
        $('#kdrenagsm_2knr1').text(kdrenagsm_2knr1);


        var zkdrenagsm_2knr = kdrenagsm_2knr1 * kdrenagnr;
        zkdrenagsm_2knr= Math.round(zkdrenagsm_2knr);
        $('#zkdrenagsm_2knr').text(zkdrenagsm_2knr);


        // Вывоз мусора после завершения работ на объекте
        var kmusornr = 1;
        kmusornr = Math.round(kmusornr);
        $('#kmusornr').text(kmusornr);

        var zkmusornr = kmusornr * 5000;
        zkmusornr = Math.round(zkmusornr);
        $('#zkmusornr').text(zkmusornr);


        // =============Itig Dop R=============
        var zitogdopnr = zkmusornr + zkzakladkanalnr + zkzakladelnr + zkzakladnr + kgruntnr+zkdrenagsm_2knr;
        zitogdopnr = Math.round(zitogdopnr);
        $('#zitogdopnr').text(zitogdopnr);

        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============

        if (lkadnr <= 30) {
            var  kzbetnr = 14400;
        }
        if (lkadnr > 30) {
            kzbetnr = (lkadnr - 30) * 155 + 14400;
        }
        kzbetnr = Math.round( kzbetnr);
        $('#kzbetnr').text( kzbetnr);

        var zbetonnr =kzbetnr;
        zbetonnr = Math.round(zbetonnr);
        $('#zbetonnr').text(zbetonnr);

        // Обеспечение строительным вагончиком,
        var kvagonnr = 1;
        kvagonnr = Math.round(kvagonnr);
        $('#kvagonnr').text(kvagonnr);

        var zkvagonnr = kvagonnr * 20000;
        zkvagonnr = Math.round(zkvagonnr);
        $('#zkvagonnr').text(zkvagonnr);

        // Обеспечение биотуалетом
        var kbiotualnr = 1;
        kbiotualnr = Math.round(kbiotualnr);
        $('#kbiotualnr').text(kbiotualnr);

        var zkbiotualnr = kbiotualnr * 5000;
        zkbiotualnr = Math.round(zkbiotualnr);
        $('#zkbiotualnr').text(zkbiotualnr);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktronr = 0;
        kelktronr = Math.round(kelktronr);
        $('#kelktronr').text(kelktronr);

        var zkelktronr = kelktronr * 0;
        zkelktronr = Math.round(zkelktronr);
        $('#zkelktronr').text(zkelktronr);

        // Обеспечение водой:
        var kvaternr = 0;
        kvaternr = Math.round(kvaternr);
        $('#kvaternr').text(kvaternr);

        var zkvaternr = kvaternr * 0;
        zkvaternr = Math.round(zkvaternr);
        $('#zkvaternr').text(zkvaternr);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpeznr = zkvaternr + zkelktronr + zkbiotualnr + zkvagonnr + zbetonnr;
        zitogcpezsm = Math.round(zitogcpezsm);
        $('#zitogcpeznr').text(zitogcpeznr);

        // ===========Итого за работы и материалы:========
        var zitogo5nr = zitogcpeznr + zitogdopnr + zitog3_dnr + zitog1_2nr;
        zzitogo5nr = Math.round(zitogo5nr);
        $('#zitogo5nr').text(zitogo5nr);

        // Накладные расходы 2%:
        var zitogSMplnr = zitogo5nr * 0.02;
        zitogSMplnr = Math.round(zitogSMplnr);
        $('#zitogSMplnr').text(zitogSMplnr);

        // ИТОГО ПО СМЕТЕ:

        var zitogSMnr = zitogo5nr + zitogSMplnr;
        // zitogM1
        zitogSMnr = Math.round(zitogSMnr);
        $('#zitogSMnr').text(zitogSMnr);

        zena_smetu = zitogSMnr;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);

        //==== itog 1 etap======

        var zitog1etapnr=zitogdopnr/2+zitog3_dnr-zkbetonrosnr54-zlbeton22nr;
        zitog1etapnr = (Math.ceil(zitog1etapnr/1000))*1000;
        $('#zitog1etapnr').text(zitog1etapnr);


        //==== itog 2 etap======

        var zitog2etapnr=zkbetonrosnr54+zlbeton22nr+zbetonnr;

        zitog2etapnr = (Math.ceil(zitog2etapnr/1000))*1000;
        $('#zitog2etapnr').text(zitog2etapnr);

        //==== itog 2 etap======

        var zitog3etapnr=zitogSMnr-zitog1etapnr-zitog2etapnr;

        zitog3etapnr = Math.round(zitog3etapnr);
        $('#zitog3etapnr').text(zitog3etapnr);




    }


//========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ VR  =================//
    if (VarFund==4){

        //Длина
        var landvr = document.getElementById('landplfvr').value;
        landvr = +landvr;
        $('#llandvr').text(landvr);

        //Ширина
        var breadtvr = document.getElementById('breadthplfvr').value;
        breadtvr = +breadtvr;
        $('#breadtvr').text(breadtvr);

        //Высота плиты
        var hplvr = (document.getElementById('elevationplvr').value)*1000;
        hplvr = +hplvr;
        $('#hplvr').text(hplvr);

        //Площадь плиты
        var splvr = document.getElementById('areapplfvr').value;
        splvr = +splvr;
        $('#splvr').text(splvr);

        //Периметр фундамента
        var perimetrvr = document.getElementById('perimplfvr').value;
        perimetrvr = +perimetrvr;
        $('#perimetrvr').text(perimetrvr);

        //Толщина песчаной подушки
        var hpesokvr = (document.getElementById('pesokplfvr').value)*1000;
        hpesokvr = +hpesokvr;
        $('#hpesokvr').text(hpesokvr);

        //Толщина щебёночной подушки
        var hsheblpvr = (document.getElementById('pesokplfvr').value)*1000;
        hsheblpvr = +hsheblpvr;
        $('#hsheblpvr').text(hsheblpvr);

        //Толщина выбираемого слоя грунта
        var hgruntvr=hsheblpvr+hpesokvr;
        hgruntvr = +hgruntvr;
        $('#hgruntvr').text(hgruntvr);

        //Общая длина ростверка
        var lrosrvervr= document.getElementById('langplvr').value;
        lrosrvervr = +lrosrvervr;
        $('#lrosrvervr').text(lrosrvervr);

        //Высота ростверка
        var hrosrvervr= (document.getElementById('hplplvr').value)*1000;
        hrosrvervr = +hrosrvervr;
        $('#hrosrvervr').text(hrosrvervr);

        //Ширина ростверка
        //<input type="number" class="shebenplf" id="shplplnr" value="0.4" min="0" max="200" step="0.1">
        var shrosrvervr= (document.getElementById('shplplvr').value)*1000;
        shrosrvervr = +shrosrvervr;
        $('#shrosrvervr').text(shrosrvervr);

        //Растояние от КАД
        var lkadvr = document.getElementById('distancelentfvr').value;
        lkadvr = +lkadvr;
        $('#lkadvr').text(lkadvr);



//==================================1 blokc =================


        // Вынос осей, разбивка участка
        var kosvr = splvr;
        kosvr = kosvr.toFixed(0);
        $('#kosvr').text(kosvr);
        var zkosvr = kosvr * 40;
        zkosvr = Math.round(zkosvr);
        $('#zkoszvr').text(zkosvr);

        // Земляные работы
        var kzemvvr = (splvr+perimetrvr)*hgruntvr*0.001;
        kzemvvr = kzemvvr.toFixed(2);
        $('#kzemvvr').text(kzemvvr);
        var zemvvr = kzemvvr * 300;
        zemvvr = Math.round(zemvvr);
        $('#zemvvr').text(zemvvr);


        // Устройство  разделительного слоя из геотекстиля
        var kgeoteksvr =splvr+perimetrvr ;
        kgeoteksvr = kgeoteksvr.toFixed(2);
        $('#kgeoteksvr').text(kgeoteksvr);
        var zkgeoteksvr = kgeoteksvr * 20;
        zkgeoteksvr = Math.round(zkgeoteksvr);
        $('#zkgeoteksvr').text(zkgeoteksvr);

        //Устройство песчаной подушки с послойной трамбовкой виброплитой
        var kpesokvr =(splvr*hpesokvr*0.001+perimetrvr*hpesokvr*0.001)*1.28*1.2;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kpesokvr = Math.round(kpesokvr);
        kpesokvr = kpesokvr.toFixed(2);
        $('#kpesokvr').text(kpesokvr);
        var zkpesokvr = kpesokvr * 400;
        zkpesokvr = Math.round(zkpesokvr);
        $('#zkpesokvr').text(zkpesokvr);

        // Устройство щебеночной подушки с послойной трамбовкой виброплитой
        var kshebenvr =(splvr*hsheblpvr*0.001+perimetrvr*hsheblpvr*0.001)*1.28;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kshebenvr = Math.round(kshebenvr);
        kshebenvr = kshebenvr.toFixed(2);
        $('#kshebenvr').text(kshebenvr);
        var zkshebenvr = kshebenvr * 400;
        zkshebenvr = Math.round(zkshebenvr);
        $('#zkshebenvr').text(zkshebenvr);

        // Укладка гидроизоляционной мембраны Planter
        var kgidroisolvr =splvr+perimetrvr*0.3;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kgidroisolvr = kgidroisolvr.toFixed(2);
        $('#kgidroisolvr').text(kgidroisolvr);
        var zkgidroisolvr = kgidroisolvr * 30;
        zkgidroisolvr = Math.round(zkgidroisolvr);
        $('#zkgidroisolvr').text(zkgidroisolvr);

        //Монтаж и демонтаж опалубки
        var kmontagopalvr = perimetrvr;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kmontagopalvr = kmontagopalvr.toFixed(2);
        $('#kmontagopalvr').text(kmontagopalvr);
        var zkmontagopalvr = kmontagopalvr * 450;
        zkmontagopalvr = Math.round(zkmontagopalvr);
        $('#zkmontagopalvr').text(zkmontagopalvr);

        //Изготовление и установка арматурных каркасов, монтаж арматурной сетки (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrvr43 =(splvr*21*0.888*0.001*1.1+perimetrvr/0.2*1.5*1.1*0.91*0.001);
        //karmrnr43 = karmrnr43.toFixed(2);
        karmrvr43=+karmrvr43;

        var karmrvr44 =(splvr+perimetrvr/2)*0.45*1.2*0.001+perimetrvr/1.5*0.5*1.1*0.001;
        //karmrnr44 = karmrnr44.toFixed(2);
        //alert(karmrnr44);
        karmrvr44=+karmrvr44;

        var karmrnr26vr=karmrvr44+karmrvr43;

        var karmrnr26vrsm = karmrnr26vr.toFixed(2);
        $('#karmrnr26vrsm').text(karmrnr26vrsm);
        var zkarmrnr26vr = karmrnr26vr *17300;
        zkarmrnr26vr = Math.round(zkarmrnr26vr);
        $('#zkarmrnr26vr').text(zkarmrnr26vr);




        //Укладка бетона с вибрированием

        var kukbetonvr = splvr*hplvr*0.001*1.05;
        kukbetonvr = kukbetonvr.toFixed(2);
        $('#kukbetonvr').text(kukbetonvr);
        var zkukbetovr25 = kukbetonvr * 1500;
        zkukbetovr25 = Math.round(zkukbetovr25);
        $('#zkukbetovr25').text(zkukbetovr25);

        //=======ITOG 1 block =====
        var zitog1vr=zkukbetovr25+zkarmrnr26vr+zkmontagopalvr+zkgidroisolvr+zkshebenvr+zkpesokvr
            +zkgeoteksvr+zemvvr+zkosvr;
        zitog1vr = Math.round(zitog1vr);
        $('#zitog1vr').text(zitog1vr);

        ///======Ростверк: ============


        //Монтаж опалубки
        var kopalvr = hrosrvervr*lrosrvervr*2*0.001;
        //shrosrvernr
        kopalvr = kopalvr.toFixed(2);
        $('#kopalvr').text(kopalvr);
        var zkopalvr = kopalvr * 500;
        zkopalvr = Math.round(zkopalvr);
        $('#zkopalvr').text(zkopalvr);

        //Изготовление и установка арматурных каркасов ростверка, (Соединение стержней арматуры выполняется с использованием вязальной проволоки)

        var karmvr51_1=(shrosrvervr*0.001)/0.2;
        //karmnr51_1 = Math.ceil((karmnr51_1) * 10) / 10;
        //alert(karmnr51_1);
        var karmvr51_2=(hrosrvervr*0.001)/0.2;
        //karmnr51_2 = Math.ceil((karmnr51_2) * 10) / 10;
        //alert(karmnr51_2);

        var karmvr51=karmvr51_1*karmvr51_2*lrosrvervr*0.001*0.888*1.3;
        //alert(karmnr51);

        var karmvr52=(lrosrvervr/0.3)*0.395*0.001*1.1;

        var karmvr31 = karmvr51+karmvr52;
        //shrosrvernr
        karmvr31r =karmvr31.toFixed(2);
        $('#karmvr31r').text(karmvr31r);
        var zkarmvr31 = karmvr31 * 17300;
        zkarmvr31 = Math.round(zkarmvr31);
        $('#zkarmvr31').text(zkarmvr31);


        //Укладка бетона с вибрированием
        var kbetonrosvrr =(shrosrvervr*hrosrvervr*lrosrvervr*1.05*0.001*0.001)/0.25;
        //alert(kbetonrosnrr);

        var kbetonrosvr=(Math.ceil((kbetonrosvrr)))*0.25;
        //alert(kbetonrosnr);
        //var kbetonrosnr=kbetonrosnrr*0.25;
        //shrosrvernr
        kbetonrosvr = kbetonrosvr.toFixed(2);
        $('#kbetonrosvr').text(kbetonrosvr);
        var zkbetonrosvr = kbetonrosvr * 2000;
        zkbetonrosvr = Math.round(zkbetonrosvr);
        $('#zkbetonrosvr').text(zkbetonrosvr);


        //=======ITOG 2 block =====
        var zitog2vr= zkbetonrosvr+ zkarmvr31+ zkopalvr ;
        zitog2vr = Math.round(zitog2vr);
        $('#zitog2vr').text(zitog2vr);

        //=======ITOG 1_2 block =====
        var zitog1_2vr= zitog2vr+ zitog1vr;
        zitog1_2vr = Math.round(zitog1_2vr);
        $('#zitog1_2vr').text(zitog1_2vr);






        //======== 2 bloks =======

        // ======Плита:=========

        //Геотекстиль Мегаизол Гео про 200
        var kgeomagvr =kgeoteksvr*1.1*1.2;
        //var kzacupr = Math.ceil(kzacup);
        // alert(kzacupr);
        //kzacupr=kzacupr*1.2;
        kgeomagvr =  kgeomagvr.toFixed(2);
        $('#kgeomagvr').text(kgeomagvr);
        var zkgeomagvr = kgeomagvr * 30;
        zkgeomagvr = Math.round(zkgeomagvr);
        $('#zkgeomagvr').text(zkgeomagvr);

        //Песок строительный (средней крупности или крупный) (Кратно 10 м3) с учетом доставки
        var kpesokplvr =(Math.round(kpesokvr/10))*10;
        //var kzacupr = Math.ceil(kzacup);

        kpesokplvr =  kpesokplvr.toFixed(2);
        $('#kpesokplvr').text(kpesokplvr);
        var zkpesokplvr = kpesokplvr *600;
        zkpesokplvr = Math.round(zkpesokplvr);
        $('#zkpesokplvr').text(zkpesokplvr);

        //Щебень гранитный фр. 20-40 мм. (Кратно 10 м3) с учетом доставки
        var kshebenplvr =(Math.ceil(kshebenvr/10))*10;
        //alert(kshebennr);
        //var kzacupr = Math.ceil(kzacup);
        kshebenplvr =  kshebenplvr.toFixed(2);
        $('#kshebenplvr').text(kshebenplvr);
        var zkshebenplvr = kshebenplvr *1400;
        zkshebenplvr = Math.round(zkshebenplvr);
        $('#zkshebenplvr').text(zkshebenplvr);

        // Геомембрана Planter
        var kgidroisolv40 =kgidroisolvr*1.1;
        kgidroisolv40 =  kgidroisolv40.toFixed(2);
        $('#kgidroisolv40').text(kgidroisolv40);
        var zkgidroisolvr40 = kgidroisolv40 *110;
        zkgidroisolvr40 = Math.round(zkgidroisolvr40);
        $('#zkgidroisolvr40').text(zkgidroisolvr40);

        //Подставки под арматуру (стульчики)
        var kpodstulvr =splvr*4;
        kpodstulvr =  kpodstulvr.toFixed(0);
        $('#kpodstulvr').text(kpodstulvr);
        var zkpodstulvr = kpodstulvr *5;
        zkpodstulvr = Math.round(zkpodstulvr);
        $('#zkpodstulvr').text(zkpodstulvr);


        //Опалубка инвентарная из ламинированной фанеры на деревянном каркасе (амортизация)
        var kopalvr42 =splvr*115;
        kopalvr42 =  kopalvr42.toFixed(1);
        $('#kopalvr42').text(kopalvr42);
        var zkopalvr42 = kopalvr42;
        zkopalvr42 = Math.round(zkopalvr42);
        $('#zkopalvr42').text(zkopalvr42);



        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karm12vr =karmrvr43;
        // alert(karmrfrk38);
        var karm12vrr =  karm12vr.toFixed(2);
        $('#karm12vrr').text(karm12vrr);
        var zkarm12vr = karm12vr *41000;
        zkarm12vr = Math.round(zkarm12vr);
        $('#zkarm12vr').text(zkarm12vr);

        // Арматура d8 А500 на хомуты (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karm8vr =karmrvr44;
        //alert(karmrfrk39);
        var karm8vrr =  karm8vr.toFixed(2);
        $('#karm8vrr').text(karm8vrr);
        var zkarm8vr = karm8vr *41000;
        zkarm8vr = Math.round(zkarm8vr);
        $('#zkarm8vr').text(zkarm8vr);

        //Проволока вязальная
        var kprovvr =karmrnr26vrsm*9;
        //alert(kprovsm);
        //(Math.round(sshebsm/10))*10;
        //var kprovsmr = (Math.ceil(kprovsm));
        kprovvr =  kprovvr.toFixed(2);
        $('#kprovvr').text(kprovvr);
        var zkprovvr = kprovvr *100;
        zkprovvr = Math.round(zkprovvr);
        $('#zkprovvr').text(zkprovvr);

        //Бетон B22,5 М300 П4 (С учетом доставки из СПб)
        kukbetonvr=+kukbetonvr;
        var kbetonb22vr =kukbetonvr;

        kbetonb22vr = kbetonb22vr.toFixed(2);
        //var karm12r =  karm12.toFixed(2);
        $('#kbetonb22vr').text(kbetonb22vr);
        //<span id="lkadnr">25</span>
        if (lkadvr <= 30) {
            var lbeton22vr = 4100;
        }
        if (lkadvr > 30) {
            lbeton22vr = (lkadvr - 30) * 15 + 4100;
        }
        lbeton22vr =  Math.round(lbeton22vr);
        $('#lbeton22vr').text(lbeton22vr);


        var zlbeton22vr = lbeton22vr*kbetonb22vr;
        zlbeton22vr = Math.round(zlbeton22vr);
        $('#zlbeton22vr').text(zlbeton22vr);

        //======Itog 3_1 blok------

        var zitog3_1vr=zlbeton22vr+zkprovvr+ zkarm8vr+zkarm12vr+zkopalvr42+zkpodstulvr
            +zkgidroisolvr40+zkshebenplvr+zkpesokplvr+zkgeomagvr;
        zitog3_1vr = Math.round(zitog3_1vr);
        $('#zitog3_1vr').text(zitog3_1vr);


        // ======Материалы ростверк:=========

        //Опалубка инвентарная из ламинированной фанеры
        //<span id="hrosrvernr">200</span>
        //<span id="perimetrnr">40</span>
        //<span id="lrosrvernr">60</span>
        if (hrosrvervr < 301) {
            var kopalrosvvr = perimetrvr*0.6;
        }
        if (hrosrvervr >= 301) {
            kopalrosvvr = (lrosrvervr*2*0.6);
        }
        kopalrosvvr= kopalrosvvr.toFixed(1);
        $('#kopalrosvvr').text(kopalrosvvr);
        //=========
        if (hrosrvervr <= 700) {
            var kopalrosvvr2 = 260;
        }
        if (hrosrvervr >700) {
            kopalrosvvr2 = 580;
        }
        kopalrosvvr2 =  kopalrosvvr2.toFixed(1);
        $('#kopalrosvvr2').text(kopalrosvvr2);


        var zkopalrosvvr = kopalrosvvr2 *kopalrosvvr;
        zkopalrosvvr = Math.round(zkopalrosvvr);
        $('#zkopalrosvvr').text(zkopalrosvvr);

        //Доска 40*100(200)*6000 для раскрепления инвентарных щитов, внутренней опалубки ростверка
        if (hrosrvervr < 301) {
            var kdoska40vr =(lrosrvervr*hrosrvervr*0.001*2-perimetrvr*hrosrvervr*0.001+perimetrvr*0.1)*0.04*1.1;
        }
        if (hrosrvervr >= 301) {
            kdoska40vr = (lrosrvervr*0.2*0.04);
        }
        kdoska40vr =  kdoska40vr.toFixed(2);
        $('#kdoska40vr').text(kdoska40vr);

        var zkdoska40vr = kdoska40vr *12500;
        zkdoska40vr = Math.round(zkdoska40vr);
        $('#zkdoska40vr').text(zkdoska40vr);

        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmnr51vr=karmvr51;
        var karmnr51vrsm=  karmnr51vr.toFixed(2);
        $('#karmnr51vrsm').text(karmnr51vrsm);

        var zkarmnr51vr = karmnr51vr *41000;
        zkarmnr51vr = Math.round(zkarmnr51vr);
        $('#zkarmnr51vr').text(zkarmnr51vr);

        //Арматура d8 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karmnr52vr=karmvr52;
        var karmnr52vrsm=  karmnr52vr.toFixed(2);
        $('#karmnr52vrsm').text(karmnr52vrsm);

        var zkarmnr52vr = karmnr52vr *41000;
        zkarmnr52vr = Math.round(zkarmnr52vr);
        $('#zkarmnr52vr').text(zkarmnr52vr);

        //Проволока вязальная
        karmnr52vr=+karmnr52vr;
        karmnr51vr=+karmnr51vr;
        var kprovrosvrsm =(karmnr52vr+karmnr51vr)*9;
        kprovrosvrsm =  kprovrosvrsm.toFixed(2);
        $('#kprovrosvrsm').text(kprovrosvrsm);
        var zkprovrosvr = kprovrosvrsm *100;
        zkprovrosvr = Math.round(zkprovrosvr);
        $('#zkprovrosvr').text(zkprovrosvr);

        //Бетон для ростверка B22,5 М300 П4
        kbetonrosvr=+kbetonrosvr;
        var kbetonrosvr54 =kbetonrosvr;
        kbetonrosvr54 =  kbetonrosvr54.toFixed(2);
        $('#kbetonrosvr54').text(kbetonrosvr54);
        var zkbetonrosvr54 = kbetonrosvr54 *4100;
        zkbetonrosvr54 = Math.round(zkbetonrosvr54);
        $('#zkbetonrosvr54').text(zkbetonrosvr54);

//======Itog 3_2 blok------

        var zitog3_2vr=zkbetonrosvr54+zkprovrosvr+zkarmnr52vr+ zkarmnr51vr+zkdoska40vr+zkopalrosvvr  ;
        zitog3_2vr = Math.round(zitog3_2vr);
        $('#zitog3_2vr').text(zitog3_2vr);





        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором

        if (lkadvr <= 30) {
            var larmDostavvr = 9000;
        }
        if (lkadvr > 30) {
            larmDostavvr = (lkadvr - 30) * 35 + 9000;
        }
        larmDostavvr = Math.round(larmDostavvr);
        $('#larmDostavvr').text(larmDostavvr);

        var zlarmDostavvr = larmDostavvr;
        zlarmDostavvr = Math.round(zlarmDostavvr);
        $('#zlarmDostavvr').text(zlarmDostavvr);


        // Доставка и вывоз опалубки
        if (lkadvr <= 30) {
            var larmDostavOpalvr = 5000;
        }
        if (lkadvr > 30) {
            larmDostavOpalvr = (lkadvr - 30) * 35 + 5000;
        }
        larmDostavOpalvr = Math.round(larmDostavOpalvr);
        $('#larmDostavOpalvr').text(larmDostavOpalvr);

        var zlarmDostavOpalvr = larmDostavOpalvr * 1;
        zlarmDostavOpalvr = Math.round(zlarmDostavOpalvr);
        $('#zlarmDostavOpalvr').text(zlarmDostavOpalvr);

        // Доставка остальных материалов
        if (lkadvr <= 30) {
            var larmDostavMatervr = 4200;
        }
        if (lkadvr > 30) {
            larmDostavMatervr = (lkadvr - 30) * 35 + 4200;
        }
        larmDostavMatervr = Math.round(larmDostavMatervr);
        $('#larmDostavMatervr').text(larmDostavMatervr);

        var zlarmDostavMatervr = larmDostavMatervr * 1;
        zlarmDostavMatervr = Math.round(zlarmDostavMatervr);
        $('#zlarmDostavMatervr').text(zlarmDostavMatervr);

        // ==========ITOG DOSTAV============

        var zdostavmatvr = zlarmDostavMatervr + zlarmDostavvr + zlarmDostavOpalvr + 2400;
        zdostavmatvr = Math.round(zdostavmatvr);
        $('#zdostavmatvr').text(zdostavmatvr);

        // // // =====Итого:
        // var zdostavmatitogosm = zitog2sm + zdostavmatsm;
        // zdostavmatitogosm = Math.round(zdostavmatitogosm);
        // $('#zdostavmatitogosm').text(zdostavmatitogosm);

        // // =====Итого за материалы:
        //zdostavmatitogosm=+zdostavmatitogosm;
        var zitog3_dvr = zdostavmatvr+zitog3_2vr+zitog3_1vr;
        zitog3_dvr = Math.round(zitog3_dvr);
        $('#zitog3_dvr').text(zitog3_dvr);




        //====== 4 blok=========
        // ======= Доп. Работы===========
        //  ===============Планировка выбранного грунта============
        var kgruntvr = 0;
        kgruntvr = Math.round(kgruntvr);
        $('#kgruntvr').text(kgruntvr);

        var zkgruntvr = kgruntvr * 150;
        zkgruntvr = Math.round(zkgruntvr);
        $('#zkgruntvr').text(zkgruntvr);

        // =============Устройство закладной гильзы вода===========
        var kzakladvr = 5;
        kzakladvr = Math.round(kzakladvr);
        $('#kzakladvr').text(kzakladvr);

        var zkzakladvr = kzakladvr * 1200;
        zkzakladvr = Math.round(zkzakladvr);
        $('#zkzakladvr').text(zkzakladvr);

        // =============Устройство закладной гильзы электро===========
        var kzakladelvr = 10;
        kzakladelvr = Math.round(kzakladelvr);
        $('#kzakladelvr').text(kzakladelvr);

        var zkzakladelvr = kzakladelvr * 200;
        zkzakladelvr = Math.round(zkzakladelvr);
        $('#zkzakladelvr').text(zkzakladelvr);

        // ====================Разводка канализации под домом============
        var kzakladkanalvr = 5;
        kzakladkanalvr = Math.round(kzakladkanalvr);
        $('#kzakladkanalvr').text(kzakladkanalvr);

        var zkzakladkanalvr = kzakladkanalvr * 1000;
        zkzakladkanalvr = Math.round(zkzakladkanalvr);
        $('#zkzakladkanalvr').text(zkzakladkanalvr);

        //Устройство дренажа фундамента с учетом установки дренажных колодцев d340


        var kdrenagvr = perimetrvr+8;
        kdrenagvr = Math.round(kdrenagvr);
        $('#kdrenagvr').text(kdrenagvr);

        var kdrenagvr_1 = kdrenagvr*(700+72+216+80);
        kdrenagvr_1 = Math.round(kdrenagvr_1);

        var kdrenagvr_2 = kdrenagvr/15;
        var kdrenagvr_2r =Math.ceil(kdrenagvr_2);

        var kdrenagvr_2r2=kdrenagvr_2r*6100;
        var kdrenagvr_2r21 =(Math.round(kdrenagvr_2r2/10))*10;

        var kdrenagsm_2kvr=(kdrenagvr_2r21+kdrenagvr_1)/kdrenagvr;

        var kdrenagsm_2kvr1 =Math.ceil(kdrenagsm_2kvr);
        $('#kdrenagsm_2kvr1').text(kdrenagsm_2kvr1);


        var zkdrenagsm_2kvr = kdrenagsm_2kvr1 * kdrenagvr;
        zkdrenagsm_2kvr= Math.round(zkdrenagsm_2kvr);
        $('#zkdrenagsm_2kvr').text(zkdrenagsm_2kvr);


        // Вывоз мусора после завершения работ на объекте
        var kmusorvr = 1;
        kmusorvr = Math.round(kmusorvr);
        $('#kmusorvr').text(kmusorvr);

        var zkmusorvr = kmusorvr * 5000;
        zkmusorvr = Math.round(zkmusorvr);
        $('#zkmusorvr').text(zkmusorvr);


        // =============Itig Dop R=============
        var zitogdopvr = zkmusorvr + zkzakladkanalvr + zkzakladelvr + zkzakladvr + kgruntvr+zkdrenagsm_2kvr;
        zitogdopvr = Math.round(zitogdopvr);
        $('#zitogdopvr').text(zitogdopvr);

        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============

        if (lkadvr <= 30) {
            var  kzbetvr = 14400;
        }
        if (lkadvr > 30) {
            kzbetvr = (lkadvr - 30) * 155 + 14400;
        }
        kzbetvr = Math.round( kzbetvr);
        $('#kzbetvr').text( kzbetvr);

        var zbetonvr =kzbetvr;
        zbetonvr = Math.round(zbetonvr);
        $('#zbetonvr').text(zbetonvr);

        // Обеспечение строительным вагончиком,
        var kvagonvr = 1;
        kvagonvr = Math.round(kvagonvr);
        $('#kvagonvr').text(kvagonvr);

        var zkvagonvr = kvagonvr * 20000;
        zkvagonvr = Math.round(zkvagonvr);
        $('#zkvagonvr').text(zkvagonvr);

        // Обеспечение биотуалетом
        var kbiotualvr = 1;
        kbiotualvr = Math.round(kbiotualvr);
        $('#kbiotualvr').text(kbiotualvr);

        var zkbiotualvr = kbiotualvr * 5000;
        zkbiotualvr = Math.round(zkbiotualvr);
        $('#zkbiotualvr').text(zkbiotualvr);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktrovr = 0;
        kelktrovr = Math.round(kelktrovr);
        $('#kelktrovr').text(kelktrovr);

        var zkelktrovr = kelktrovr * 0;
        zkelktrovr = Math.round(zkelktrovr);
        $('#zkelktrovr').text(zkelktrovr);

        // Обеспечение водой:
        var kvatervr = 0;
        kvatervr = Math.round(kvatervr);
        $('#kvatervr').text(kvatervr);

        var zkvatervr = kvatervr * 0;
        zkvatervr = Math.round(zkvatervr);
        $('#zkvatervr').text(zkvatervr);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpezvr = zkvatervr + zkelktrovr + zkbiotualvr + zkvagonvr + zbetonvr;
        zitogcpezvr = Math.round(zitogcpezvr);
        $('#zitogcpezvr').text(zitogcpezvr);

        // ===========Итого за работы и материалы:========
        var zitogo5vr = zitogcpezvr + zitogdopvr + zitog3_dvr + zitog1_2vr;
        zzitogo5vr = Math.round(zitogo5vr);
        $('#zitogo5vr').text(zitogo5vr);

        // Накладные расходы 2%:
        var zitogSMplvr = zitogo5vr * 0.02;
        zitogSMplvr = Math.round(zitogSMplvr);
        $('#zitogSMplvr').text(zitogSMplvr);

        // ИТОГО ПО СМЕТЕ:

        var zitogSMvr = zitogo5vr + zitogSMplvr;
        // zitogM1
        zitogSMvr = Math.round(zitogSMvr);
        $('#zitogSMvr').text(zitogSMvr);

        zena_smetu = zitogSMvr;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);

        //==== itog 1 etap======

        var zitog1etapvr=zitogdopvr/2+zitog3_dvr-zkbetonrosvr54-zlbeton22vr;
        zitog1etapvr = (Math.ceil(zitog1etapvr/1000))*1000;
        $('#zitog1etapvr').text(zitog1etapvr);


        //==== itog 2 etap======

        var zitog2etapvr=zkbetonrosvr54+zlbeton22vr+zbetonvr;

        zitog2etapvr = (Math.ceil(zitog2etapvr/1000))*1000;
        $('#zitog2etapvr').text(zitog2etapvr);

        //==== itog 2 etap======

        var zitog3etapvr=zitogSMvr-zitog1etapvr-zitog2etapvr;

        zitog3etapvr = Math.round(zitog3etapvr);
        $('#zitog3etapvr').text(zitog3etapvr);



    }


//========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ПЛИТЫ UHP  =================//
    if (VarFund==5) {
        var lpluhp = document.getElementById('landuhp').value;
        lpluhp = +lpluhp;
        $('#lpluhp').text(lpluhp);

        var dpluhp = document.getElementById('breadthuhp').value;
        dpluhp = +dpluhp;
        $('#dpluhp').text(dpluhp);


        var hpluhp = document.getElementById('hpluhp').value;
        hpluhp = +hpluhp;
        $('#hpluhp').text(hpluhp);

        var hpluhpr = hpluhp * 1000;
        $('#hpluhpr').text(hpluhpr);


        var langrebuhp = document.getElementById('langrebpluhp').value;
        langrebuhp = +langrebuhp;
        $('#langrebuhp').text(langrebuhp);

        // Высота несущих ребер

        var hrebuhp = 300;
        hrebuhp = +hrebuhp;
        $('#hrebuhp').text(hrebuhp);


        var perimpluhp = document.getElementById('perimuhp').value;
        perimpluhp = +perimpluhp;
        $('#perimpluhp').text(perimpluhp);


        var areapluhp = document.getElementById('areauhp').value;
        areapluhp = +areapluhp;
        $('#areapluhp').text(areapluhp);

        var areapluhpteplo = areapluhp * 0.8;
        areapluhpteplo = +areapluhpteplo;
        $('#areapluhpteplo').text(areapluhpteplo);


        var pesokpluhp = document.getElementById('pesokuhp').value;
        pesokpluhp = +pesokpluhp;
        $('#pesokpluhp').text(pesokpluhp);

        var hgruntuhp = pesokpluhp;
        hgruntuhp = +hgruntuhp;
        $('#hgruntuhp').text(hgruntuhp);


        var distancepluhp = document.getElementById('distanceuhdp').value;
        distancepluhp = +distancepluhp;
        $('#distancepluhp').text(distancepluhp);
        //=======================================1Blok===========
        // Земляные работы
        var zemvuhp = (areapluhp + perimpluhp) * (pesokpluhp);
        zemvuhp = zemvuhp.toFixed(2);
        $('#zemvuhp').text(zemvuhp);
        zenzemvuhp = zemvuhp * 300;
        zenzemvuhp = Math.round(zenzemvuhp);
        $('#zenzemvuhp').text(zenzemvuhp);

        // Ручная подчистка грунта (дна траншей)

        var kzemvuhp = areapluhpteplo * 1.1;
        kzemvuhp = kzemvuhp.toFixed(1);
        $('#kzemvuhp').text(kzemvuhp);
        var zkzemvuhp = zemvuhp * 400 / 10;
        zkzemvuhp = Math.round(zkzemvuhp);
        $('#zkzemvuhp').text(zkzemvuhp);

        // Устройство  разделительного слоя из геотекстиля
        var kgeoteks = areapluhp * 1.1;
        kgeoteks = kgeoteks.toFixed(1);
        $('#kgeoteks').text(kgeoteks);
        var zkgeoteks = kgeoteks * 20;
        zkgeoteks = Math.round(zkgeoteks);
        $('#zkgeoteks').text(zkgeoteks);

        // Устройство дренажа фундамента с учетом установки дренажных колодцев d340 мм и устройством сбросной трассы 10 м.п.
        var kdrenag = perimpluhp + 8;
        kdrenag = kdrenag.toFixed(1);
        $('#kdrenag').text(kdrenag);
        var zkdrenag = kdrenag * 1484;
        zkdrenag = Math.round(zkdrenag);
        $('#zkdrenag').text(zkdrenag);

        // Устройство песчаной подушки с послойной трамбовкой виброплитой
        var kpesokpod = areapluhp * pesokpluhp * 1.28 + (perimpluhp + 6) * 1.5 * pesokpluhp * 1.28;
        kpesokpod = kpesokpod.toFixed(1);
        // zitogSM1 = zitogSM1 / 1000;
        kpesokpod = Math.ceil(kpesokpod);
        $('#kpesokpod').text(kpesokpod);
        var zkpesokpod = kpesokpod * 400;
        zkpesokpod = Math.round(zkpesokpod);
        $('#zkpesokpod').text(zkpesokpod);

        // Устройство вводов и выводов: водопровода, электричества.

        var kvvodavater = 2;
        kvvodavater = Math.round(kvvodavater);
        $('#kvvodavater').text(kvvodavater);
        var zkvvodavater = kvvodavater * 2200;
        zkvvodavater = Math.round(zkvvodavater);
        $('#zkvvodavater').text(zkvvodavater);

        // Разводка канализации под домом
        var kkanal = (areapluhp * 0.12 );
        kkanal = kkanal.toFixed(2);
        $('#kkanal').text(kkanal);
        zkkanal = kkanal * 600;
        zkkanal = Math.round(zkkanal);
        $('#zkkanal').text(zkkanal);

        // Монтаж ЭППС и ПСБ (все слои)
        var kmontag = areapluhp;
        kmontag = Math.round(kmontag);
        $('#kmontag').text(kmontag);

        var zkmontag = kmontag * 380;
        zkmontag = Math.round(zkmontag);
        $('#zkmontag').text(zkmontag);

        // Монтаж опалубки
        var kmontagopal = perimpluhp;
        kmontagopal = Math.round(kmontagopal);
        $('#kmontagopal').text(kmontagopal);

        var zkmontagopal = kmontagopal * 450;
        zkmontagopal = Math.round(zkmontagopal);
        $('#zkmontagopal').text(zkmontagopal);

        // Изготовление и установка арматурных каркасов, монтаж арматурной сетки
        var karmkark58 = langrebuhp * 6 * 1.2 * 0.888 * 0.001;
        // karmkark58 = karmkark58.toFixed(2);
        // $('#karmkark58').text(karmkark58);

        var karmkark59 = ( (langrebuhp / 0.3) * 1.5 + areapluhp * 14) * 0.395 * 0.001;
        // karmkark59 = karmkark59.toFixed(2);
        // $('#karmkark59').text(karmkark59);

        karmkark58 = +karmkark58;
        karmkark59 = +karmkark59;

        var karmkark11r = karmkark58 + karmkark59;
        karmkark11 = karmkark11r.toFixed(1);
        $('#karmkark11').text(karmkark11);

        var zkarmkark11 = karmkark11r * 17300;
        zkarmkark11 = Math.round(zkarmkark11);
        $('#zkarmkark11').text(zkarmkark11);

        // Монтаж теплого пола с заполнением системы антифризом и опресовкой.

        var kpolteplo = areapluhpteplo;
        kpolteplo = Math.round(kpolteplo);
        $('#kpolteplo').text(kpolteplo);

        var zkpolteplo = kpolteplo * 500;
        zkpolteplo = Math.round(zkpolteplo);
        $('#zkpolteplo').text(zkpolteplo);

        // Укладка бетона с вибрированием
        var kbeton61 = areapluhp * 0.1 + 0.4 * hrebuhp * langrebuhp * 0.001 * 1.05;

        var kbeton13r = kbeton61;

        // var kbeton13 = kbeton13r*10;
        // kbeton13 = Math.ceil(kbeton13)/10;
        var kbeton13 = kbeton13r;
        kbeton13 = Math.ceil(kbeton13);
        $('#kbeton13').text(kbeton13);

        var zkbeton13 = kbeton13 * 1500;
        zkbeton13 = Math.round(zkbeton13);
        $('#zkbeton13').text(zkbeton13);

        // Устройство утепленной отмоски шириной 800 мм толщиной 50-100 мм (переменная)
        var kotmost = (perimpluhp + 4) * 0.8;
        kotmost = kotmost.toFixed(1);
        $('#kotmost').text(kotmost);
        var zkotmost = kotmost * 850;
        zkotmost = Math.round(zkotmost);
        $('#zkotmost').text(zkotmost);

        // Затирка поверхности плиты затирочными машинами

        var kzatir = areapluhp;
        kzatir = kzatir.toFixed(1);
        $('#kzatir').text(kzatir);
        var zkzatir = kzatir * 60;
        zkzatir = Math.round(zkzatir);
        $('#zkzatir').text(zkzatir);

        //======================Итого: 1 blok==================


        var zitog1uhp = zkzatir + zkotmost + zkbeton13 + zkpolteplo + zkarmkark11 + zkmontagopal + zkmontag + zkkanal +
            zkvvodavater + zkpesokpod + zkdrenag + zkgeoteks
            + zenzemvuhp + zkzemvuhp + 6500;

        zitog1uhp = Math.round(zitog1uhp);
        $('#zitog1uhp').text(zitog1uhp);

        //============= 2 BLOK===========
        //     Геотекстиль Мегаизол Гео про 200

        var kgeo200 = kgeoteks * 1.2;
        kgeo200 = kgeo200.toFixed(1);
        $('#kgeo200').text(kgeo200);
        var zkgeo200 = kgeo200 * 30;
        zkgeo200 = Math.round(zkgeo200);
        $('#zkgeo200').text(zkgeo200);

        // Песок строительный (средней крупности или крупный) (Кратно 10 м3)  с учетом доставки
        var kpesokm = kpesokpod;
        kpesokm = kpesokm / 10;
        var kpesokmr = Math.ceil(kpesokm) * 10;
        kpesokmr = kpesokmr.toFixed(1);
        $('#kpesokmr').text(kpesokmr);
        var zkpesokmr = kpesokmr * 600;
        zkpesokmr = Math.round(zkpesokmr);
        $('#zkpesokmr').text(zkpesokmr);

        // Щебень гранитный 20-40  для дренажа (Кратно 10 м3)  с учетом доставки
        var khebemuhp = kdrenag * 0.4 * 0.5;
        khebemuhp = khebemuhp / 10;
        var khebemuhpr = Math.ceil(khebemuhp) * 10;
        khebemuhpr = khebemuhpr.toFixed(1);
        $('#khebemuhpr').text(khebemuhpr);
        var zkhebemuhpr = khebemuhpr * 1400;
        zkhebemuhpr = Math.round(zkhebemuhpr);
        $('#zkhebemuhpr').text(zkhebemuhpr);

        //Труба DKC (для закладных водопровода и электричества)
        var kdksuhp = kvvodavater * 15;
        kdksuhp = kdksuhp.toFixed(1);
        $('#kdksuhp').text(kdksuhp);
        var zkdksuhp = kdksuhp * 100;
        zkdksuhp = Math.round(zkdksuhp);
        $('#zkdksuhp').text(zkdksuhp);

        // Канализационные трубы и фитинги
        var kkanaluhp = 1;
        kkanaluhp = kkanaluhp.toFixed(1);
        $('#kkanaluhp').text(kkanaluhp);
        var zkkanaluhp = kkanaluhp * 16000;
        zkkanaluhp = Math.round(zkkanaluhp);
        $('#zkkanaluhp').text(zkkanaluhp);

        // Дренажный колодец
        var kdrenagk = 4;
        kdrenagk = kdrenagk.toFixed(1);
        $('#kdrenagk').text(kdrenagk);
        var zkdrenagk = kdrenagk * 3000;
        zkdrenagk = Math.round(zkdrenagk);
        $('#zkdrenagk').text(zkdrenagk);

        // Люк полипропиленовый
        kdrenagk = +kdrenagk;
        var kluk = kdrenagk;
        kluk = kluk.toFixed(1);
        $('#kluk').text(kluk);
        var zkluk = kluk * 1200;
        zkluk = Math.round(zkluk);
        $('#zkluk').text(zkluk);

        // Труба дренажная в геотекстиле (бухта)
        kdrenag = +kdrenag;
        var ktrubadrenag = kdrenag;
        ktrubadrenag = ktrubadrenag.toFixed(1);
        $('#ktrubadrenag').text(ktrubadrenag);
        var zktrubadrenag = ktrubadrenag * 60;
        zktrubadrenag = Math.round(zktrubadrenag);
        $('#zktrubadrenag').text(zktrubadrenag);

        //Эппс Технониколь XPS CARBON PROF 400 580х1180 толщиной 100 мм под всей площадью плиты

        var ktexno400 = areapluhp + perimpluhp * 0.2;
        // ktexno400 = ktexno400/10;
        var ktexno400r = Math.ceil(ktexno400);
        ktexno400r = ktexno400r.toFixed(1);
        $('#ktexno400r').text(ktexno400r);
        var zktexno400r = ktexno400r * 550;
        zktexno400r = Math.round(zktexno400r);
        $('#zktexno400r').text(zktexno400r);

        //ПСБ С-35 толщиной 100 мм
        var kpcb35 = (areapluhp - langrebuhp * 0.3) * hrebuhp * 0.001 * 1.05
        //kpcb35 = kpcb35/10;
        var kpcb35r = Math.ceil(kpcb35);
        kpcb35r = kpcb35r.toFixed(1);
        $('#kpcb35r').text(kpcb35r);
        var zkpcb35 = kpcb35r * 3400;
        zkpcb35 = Math.round(zkpcb35);
        $('#zkpcb35').text(zkpcb35);

        //Пеноплэкс Комфорт толщиной 100 мм (для утепления отмостки и торца плиты)
        var kpeno100 = (hrebuhp * perimpluhp * 0.001) + (perimpluhp + 4);
        //kpcb35 = kpcb35/10;
        kpeno100 = Math.ceil(kpeno100);
        kpeno100 = kpeno100.toFixed(1);
        $('#kpeno100').text(kpeno100);
        var zkpeno100 = kpeno100 * 565;
        zkpeno100 = Math.round(zkpeno100);
        $('#zkpeno100').text(zkpeno100);

        //Пленка техническая (рукав-1,5м) 200мк
        var kplenka200 = (areapluhp * 1.1);
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kplenka200 = kplenka200.toFixed(1);
        $('#kplenka200').text(kplenka200);
        var zkplenka200 = kplenka200 * 45;
        zkplenka200 = Math.round(zkplenka200);
        $('#zkplenka200').text(zkplenka200);

        // Пена монтажная
        var kpenamontag = 8;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kpenamontag = kpenamontag.toFixed(1);
        $('#kpenamontag').text(kpenamontag);
        var zkpenamontag = kpenamontag * 400;
        zkpenamontag = Math.round(zkpenamontag);
        $('#zkpenamontag').text(zkpenamontag);

        //Труба Uponor Wirsbo pe PE-Xa Q&E 20x2,0 мм
        var kuponor = (areapluhpteplo / 0.25) * 1.1;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kuponor = kuponor.toFixed(1);
        $('#kuponor').text(kuponor);
        var zkuponor = kuponor * 110;
        zkuponor = Math.round(zkuponor);
        $('#zkuponor').text(zkuponor);

        // Уголок для труб
        var kugol = 14;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kugol = kugol.toFixed(1);
        $('#kugol').text(kugol);
        var zkugol = kugol * 167;
        zkugol = Math.round(zkugol);
        $('#zkugol').text(zkugol);

        //Пластиковые стяжки для крепления труб тёплого пола
        var kstug = kuponor * 2;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kstug = kstug.toFixed(1);
        $('#kstug').text(kstug);
        var zkstug = kstug * 4;
        zkstug = Math.round(zkstug);
        $('#zkstug').text(zkstug);

        //Энергофлекс
        var kenergo = 30;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kenergo = kenergo.toFixed(1);
        $('#kenergo').text(kenergo);
        var zkenergo = kenergo * 30;
        zkenergo = Math.round(zkenergo);
        $('#zkenergo').text(zkenergo);

        //Доска 40*150*6000
        var kdoska = perimpluhp * 0.021 + 0.25;
        var kdoskar = kdoska;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kdoskar = kdoskar.toFixed(1);
        $('#kdoskar').text(kdoskar);
        var zkdoska = kdoska * 12500;
        zkdoska = Math.round(zkdoska);
        $('#zkdoska').text(zkdoska);

        //Фитинги (евроконус)
        var kkonus = 14;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kkonus = kkonus.toFixed(1);
        $('#kkonus').text(kkonus);
        var zkkonus = kkonus * 350;
        zkkonus = Math.round(zkkonus);
        $('#zkkonus').text(zkkonus);

        //Коллекторная группа с расходомерами (для теплого пола)
        var kkolektor = 1;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kkolektor = kkolektor.toFixed(1);
        $('#kkolektor').text(kkolektor);
        var zkkolektor = kkolektor * 18000;
        zkkolektor = Math.round(zkkolektor);
        $('#zkkolektor').text(zkkolektor);

        //Кран шаровой 25 мм (на коллектор)
        var kkran = 2;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kkran = kkran.toFixed(1);
        $('#kkran').text(kkran);
        var zkkran = kkran * 700;
        zkkran = Math.round(zkkran);
        $('#zkkran').text(zkkran);

        //Антифриз Диксис
        var kantifriz = kuponor * 0.2011;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kantifriz = kantifriz.toFixed(1);
        $('#kantifriz').text(kantifriz);
        var zkantifriz = kantifriz * 110;
        zkantifriz = Math.round(zkantifriz);
        $('#zkantifriz').text(zkantifriz);

        // Подставки под арматуру (стульчики)
        var kstul = areapluhp * 9;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        kstul = kstul.toFixed(1);
        $('#kstul').text(kstul);
        var zkstul = kstul * 5;
        zkstul = Math.round(zkstul);
        $('#zkstul').text(zkstul);

        //Арматура на ребра d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmd12 = karmkark58;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        var karmd12r=karmd12;
        karmd12r = karmd12r.toFixed(2);
        $('#karmd12r').text(karmd12r);

        var zkarmd12 = karmd12 * 41000;
        zkarmd12 = Math.round(zkarmd12);
        $('#zkarmd12').text(zkarmd12);

        //Арматура  на сетку (150х150мм) и хомуты d8 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmd8 = karmkark59;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        karmd8r = karmd8.toFixed(2);
        $('#karmd8r').text(karmd8r);
        var zkarmd8 = karmd8 * 41000;
        zkarmd8 = Math.round(zkarmd8);
        $('#zkarmd8').text(zkarmd8);

        //Проволока вязальная
        karmd8 = +karmd8;
        karmd12 = +karmd12;
        var kprov = (karmd8 + karmd12) * 9;
        //kpcb35 = kpcb35/10;
        //var kpeno100 = Math.ceil(kpeno100);
        var kprovr = Math.round(kprov);

        $('#kprovr').text(kprovr);
        var zkprov = kprovr * 100;
        zkprov = Math.round(zkprov);
        $('#zkprov').text(zkprov);

        // Бетон для плиты B22,5 М300 П4 (С учетом доставки из СПб)
        var kb22 = (areapluhp * 0.1) + (langrebuhp * hrebuhp * 0.4 * 0.001) * 1.05;
        kb22 = Math.ceil(kb22);
        $('#kb22').text(kb22);
        var zkb22 = kb22 * 4100;
        zkb22 = Math.round(zkb22);
        $('#zkb22').text(zkb22);

        //Сетка металлическая для армирования отмоски Вр 100х100
        kotmost = +kotmost;
        var kseti = kotmost * 1.1;
        var ksetir = kseti.toFixed(1);

        $('#ksetir').text(ksetir);
        var zkseti = kseti * 100;
        zkseti = Math.round(zkseti);
        $('#zkseti').text(zkseti);

        //Бетон для отмостки B22,5 М300 П4 (С учетом доставки из СПб)
        kotmost = +kotmost;
        var kbetootm = kotmost * 0.075 * 1.05;
        var kbetootmr = kbetootm.toFixed(1);

        $('#kbetootmr').text(kbetootmr);

        var zkbetootmr = kbetootm * 4100;
        zkbetootmr = Math.round(zkbetootmr);
        $('#zkbetootmr').text(zkbetootmr);

        //======ITOG 2 BLOK ====
        var zitog2uhp = zkgeo200 + zkpesokmr + zkhebemuhpr + zkdksuhp + zkkanaluhp + zkdrenagk + zkluk + zktrubadrenag + zktexno400r
            + zkpcb35 + zkpeno100 + zkplenka200 + zkpenamontag + zkuponor + zkugol + zkstug + zkenergo + zkdoska + zkkonus + zkkolektor
            + zkkran + zkantifriz + zkstul + zkarmd12 + zkarmd8 + zkprov + zkb22 + zkseti + zkbetootmr;
        zitog2uhp = Math.round(zitog2uhp);
        $('#zitog2uhp').text(zitog2uhp);


        //===========Доставки=====================================



        //Доставка эппс, пиломатериала, комплектующих для теплого пола, комплектующих для дренажа и канализации
        if (distancepluhp <= 30) {
            var kdostpilouhp = 9000;
        }
        if (distancepluhp > 30) {
            kdostpilouhp = (distancepluhp - 30) * 35 + 9000;
        }
        kdostpilouhp = Math.round(kdostpilouhp);
        $('#kdostpilouhp').text(kdostpilouhp);

        var zkdostpilouhp =kdostpilouhp;
        zkdostpilouhp = Math.round(zkdostpilouhp);
        $('#zkdostpilouhp').text(zkdostpilouhp);

        // Доставка арматуры
        if (distancepluhp <= 30) {
            var kdostarmuhp = 9000;
        }
        if (distancepluhp > 30) {
            kdostarmuhp = (distancepluhp - 30) * 35 + 9000;
        }
        kdostarmuhp = Math.round(kdostarmuhp);
        $('#kdostarmuhp').text(kdostarmuhp);

        var zkdostarmuhp =kdostarmuhp;
        zkdostarmuhp = Math.round(zkdostarmuhp);
        $('#zkdostarmuhp').text(zkdostarmuhp);


        // Доставка остальных материалов
        if (distancepluhp <= 30) {
            var kdostamateruhp = 4200;
        }
        if (distancepluhp > 30) {
            kdostamateruhp = (distancepluhp - 30) * 35 + 4200;
        }
        kdostamateruhp = Math.round(kdostamateruhp);
        $('#kdostamateruhp').text(kdostamateruhp);

        var zkdostamateruhp =kdostamateruhp;
        zkdostamateruhp = Math.round(zkdostamateruhp);
        $('#zkdostamateruhp').text(zkdostamateruhp);

        //Доставка и вывоз инструмента на прицепе

        var kdostainstruhp = 2400;

        kdostainstruhp = Math.round(kdostainstruhp);
        $('#kdostainstruhp').text(kdostainstruhp);

        var zkdostainstruhp =kdostainstruhp;
        zkdostainstruhp = Math.round(zkdostainstruhp);
        $('#zkdostainstruhp').text(zkdostainstruhp);


        // Вывоз мусора после завершения работ на объекте

        var kmusoruhp = areapluhp/100;

        kmusoruhp = Math.round(kmusoruhp);
        var kmusoruhpr=kmusoruhp*5000;

        kmusoruhpr=Math.round(kmusoruhpr);

        $('#kmusoruhpr').text(kmusoruhpr);

        var zkmusoruhp =kmusoruhpr;
        zkmusoruhp = Math.round(zkmusoruhp);
        $('#zkmusoruhp').text(zkmusoruhp);


        //======= Итого:Доставки
        var zitog3uhp =zkmusoruhp+zkdostainstruhp+zkdostamateruhp+zkdostarmuhp+zkdostpilouhp;

        zitog3uhp = Math.round(zitog3uhp);
        $('#zitog3uhp').text(zitog3uhp);





        //========= Спецтехника и оборудование========
        // Бетононасос
        if (distancepluhp <= 30) {
            var kzbetuhp = 14400;
        }
        if (distancepluhp > 30) {
            kzbetuhp = (distancepluhp - 30) * 155 + 14400;
        }
        kzbetuhp = Math.round(kzbetuhp);
        $('#kzbetuhp').text(kzbetuhp);

        var zkzbetuhp =kzbetuhp * 1;
        zkzbetuhp = Math.round(zkzbetuhp);
        $('#zkzbetuhp').text(zkzbetuhp);

        //Аренда и доставка затирочных машин для заглаживания бетона
        var kzatiruhp = 9000;
        kzatiruhp = Math.round(kzatiruhp);
        $('#kzatiruhp').text(kzatiruhp);

        var zkzatiruhp =kzatiruhp;
        zkzatiruhp = Math.round(zkzatiruhp);
        $('#zkzatiruhp').text(zkzatiruhp);

        //Обеспечение строительным вагончиком, оборудованным для постоянного проживания бригады на объекте (Учитываются затраты на завоз и вывоз бытовки манипулятором)
        var kvagonuhp = 20000;
        kvagonuhp = Math.round(kvagonuhp);
        $('#kvagonuhp').text(kvagonuhp);

        var zkvagonuhp =kvagonuhp;
        zkvagonuhp = Math.round(zkvagonuhp);
        $('#zkvagonuhp').text(zkvagonuhp);

        //Обеспечение биотуалетом
        var ktualetuhp = 5000;
        ktualetuhp = Math.round(ktualetuhp);
        $('#ktualetuhp').text(ktualetuhp);

        var zktualetuhp =ktualetuhp;
        zktualetuhp = Math.round(zktualetuhp);
        $('#zktualetuhp').text(zktualetuhp);

        //Обеспечение электричеством: предоставляет Заказчик - (При необходимости электрогенератор и топливо будет стоить 1500 рублей за смену)
        var krlrktrouhp = 0;
        krlrktrouhp = Math.round(krlrktrouhp);
        $('#krlrktrouhp').text(krlrktrouhp);

        var zkrlrktrouhp =krlrktrouhp;
        zkrlrktrouhp = Math.round(zkrlrktrouhp);
        $('#zkrlrktrouhp').text(zkrlrktrouhp);

        //Обеспечение водой: Воду предоставляет Заказчик

        var kvateruhp = 0;
        kvateruhp = Math.round(kvateruhp);
        $('#kvateruhp').text(kvateruhp);

        var zkvateruhp =kvateruhp;
        zkvateruhp = Math.round(zkvateruhp);
        $('#zkvateruhp').text(zkvateruhp);

        // =======Итого за спецтехнику и доп. оборудование:========
        var zitogo4uhp = zkvateruhp+zkrlrktrouhp+zktualetuhp+zkvagonuhp+zkzbetuhp+zkzatiruhp;
        zitogo4uhp = Math.round(zitogo4uhp);
        $('#zitogo4uhp').text(zitogo4uhp);

        // ====== Итого за работы и материалы:=======

        var zitogo5uhp =zitogo4uhp+zitog3uhp+zitog2uhp+zitog1uhp ;
        zitogo5uhp = Math.round(zitogo5uhp);
        $('#zitogo5uhp').text(zitogo5uhp);

        // =======Накладные расходы 2%:=========

        var zitogo6uhp =zitogo5uhp*0.02 ;
        zitogo6uhp = Math.round(zitogo6uhp);
        $('#zitogo6uhp').text(zitogo6uhp);

        //======  ИТОГО ПО СМЕТЕ:
        var zitosmetauhp =zitogo5uhp+zitogo6uhp ;
        zitosmetauhp = Math.round(zitosmetauhp);
        $('#zitosmetauhp').text(zitosmetauhp);

        var zena_smetu = zitosmetauhp;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);


        // =====1 этап: Материалы на устройство фундамента,
        var zitog1etap =(zitog2uhp+zitog3uhp-zkb22)/1000;
        zitog1etap = Math.round(zitog1etap)*1000;
        $('#zitog1etap').text(zitog1etap);

        //=== 2 этап: Стоимость бетона + бетононасос: оплачиваются по факту окончания работ по опалубке

        var zitog2etap =(zkb22+zkzbetuhp)/1000;
        zitog2etap = Math.round(zitog2etap)*1000;
        $('#zitog2etap').text(zitog2etap);

        //=== 3 этап:
        var zitog3etap =(zitosmetauhp-zitog1etap-zitog2etap);
        zitog3etap = Math.round(zitog3etap);
        $('#zitog3etap').text(zitog3etap);


    }



    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ ДЛЯ ZOK  =================//
    if (VarFund==6){

        // Площадь фундаментной плиты
        var area_zok = document.getElementById('areazok').value;
        area_zok = +area_zok;
        $('#area_zok').text(area_zok);

        //Периметр фундаментной плиты
        var perimetrzok = document.getElementById('perimpzok').value;
        perimetrzok = +perimetrzok;
        $('#perimetrzok').text(perimetrzok);


        //Толщина фундаментной плиты
        var hplzok = document.getElementById('elevationzok').value*1000;
        hplzok = +hplzok;
        $('#hplzok').text(hplzok);

        //<input type="number" class="pesokzok" id="pesokzok" value="0.3" min="0" max="200" step="0.1">
        //Толщина песчаной подушки
        var hpesokzok = (document.getElementById('pesokzok').value)*1000;
        hpesokzok = +hpesokzok;
        $('#hpesokzok').text(hpesokzok);

        //<input type="number" class="shebenzok" id="shebenzok" value="0.3" min="0" max="200" step="0.1">
        //Толщина щебёночной подушки
        var hsheblpzok = (document.getElementById('shebenzok').value)*1000;
        hsheblpzok = +hsheblpzok;
        $('#hsheblpzok').text(hsheblpzok);

        //Средняя глубина заложения фундамента
        var hfundamentzok = 1500;
        hfundamentzok = +hfundamentzok;
        $('#hfundamentzok').text(hfundamentzok);


        //Длинна стен
        var lstenzok = document.getElementById('perimpzok').value;
        lstenzok = +lstenzok;
        $('#lstenzok').text(lstenzok);


        //Высота этажа
        var h_etagzok = 2.8;
        h_etagzok = +h_etagzok;
        $('#h_etagzok').text(h_etagzok);

        //Толщина стен
        var tstenokzok = 200;
        tstenokzok = +tstenokzok;
        $('#tstenokzok').text(tstenokzok);

        //Площадь проемов в стенах
        var sproemzok = 2.1;
        sproemzok = +sproemzok;
        $('#sproemzok').text(sproemzok);

        //Площадь плиты перекрытия
        var splperekzok = document.getElementById('areazok').value;
        splperekzok = +splperekzok;
        $('#splperekzok').text(splperekzok);

        //Периметр плиты перекрытия
        var perimperekzok = (document.getElementById('perimpzok').value);
        perimperekzok = +perimperekzok;
        $('#perimperekzok').text(perimperekzok);

        //Толщина плиты перекрытия
        var hplperekzok = (document.getElementById('elevationzok').value)*1000;
        hplperekzok = +hplperekzok;
        $('#hplperekzok').text(hplperekzok);


        //<input type="number" class="distancelentfzok" id="distancelentfzok" value="25" min="0" max="200" step="1">
        //Растояние от КАД
        var lkadzok = document.getElementById('distancelentfzok').value;
        lkadzok = +lkadzok;
        $('#lkadzok').text(lkadzok);



//==================================1 blokc =================


        // Вынос осей, разбивка участка
        var koszok = 1;
        koszok = koszok.toFixed(0);
        $('#koszok').text(koszok);
        var zkoszok = koszok * 8500;
        zkoszok = Math.round(zkoszok);
        $('#zkoszok').text(zkoszok);

        // Земляные работы
        var kzemvzok = (area_zok+perimetrzok)*(hfundamentzok+hpesokzok+hsheblpzok)*0.001;
        kzemvzok = kzemvzok.toFixed(2);
        $('#kzemvzok').text(kzemvzok);
        var zemvzok = kzemvzok * 200;
        zemvzok = Math.round(zemvzok);
        $('#zemvzok').text(zemvzok);


        // Устройство  разделительного слоя из геотекстиля
        var kgeotekszok =1.05*(area_zok+perimetrzok+perimetrzok*hfundamentzok*0.001) ;
        kgeotekszok = kgeotekszok.toFixed(2);
        $('#kgeotekszok').text(kgeotekszok);
        var zkgeotekszok = kgeotekszok * 20;
        zkgeotekszok = Math.round(zkgeotekszok);
        $('#zkgeotekszok').text(zkgeotekszok);

        //Устройство песчаной подушки с послойной трамбовкой виброплитой
        var kpesokzok =(area_zok*hpesokzok*0.001+perimetrzok*hpesokzok*0.001)*1.28;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kpesokzok = Math.round(kpesokzok);
        kpesokzok = kpesokzok.toFixed(2);
        $('#kpesokzok').text(kpesokzok);
        var zkpesokzok = kpesokzok * 400;
        zkpesokzok = Math.round(zkpesokzok);
        $('#zkpesokzok').text(zkpesokzok);

        // Устройство щебеночной подушки с послойной трамбовкой виброплитой
        var kshebenzok =(area_zok*hsheblpzok*0.001+perimetrzok*hsheblpzok*0.001)*1.28;
        //kpesoknr = Math.round((kpesoknr) * 10) / 10;
        kshebenzok = Math.round(kshebenzok);
        kshebenzok = kshebenzok.toFixed(2);
        $('#kshebenzok').text(kshebenzok);
        var zkshebenzok = kshebenzok * 400;
        zkshebenzok = Math.round(zkshebenzok);
        $('#zkshebenzok').text(zkshebenzok);


        //=======ITOG 1 block =====
        var zitog1zok=zkshebenzok+zkpesokzok+zkgeotekszok+zemvzok+zkoszok;
        zitog1zok = Math.round(zitog1zok);
        $('#zitog1zok').text(zitog1zok);



        //===== 2 blok Фундаментная плита ======


        //Монтаж и демонтаж опалубки
        var kmontagopalzok = perimetrzok*2;
        // sshebsm = Math.ceil((sshebsm) * 10) / 10;
        kmontagopalzok = kmontagopalzok.toFixed(2);
        $('#kmontagopalzok').text(kmontagopalzok);
        var zkmontagopalzok = kmontagopalzok * 450;
        zkmontagopalzok = Math.round(zkmontagopalzok);
        $('#zkmontagopalzok').text(zkmontagopalzok);


        //Изготовление и установка арматурных каркасов, монтаж арматурной сетки (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrzok58 =(area_zok*21*0.888*0.001*1.1);
        //karmrnr43 = karmrnr43.toFixed(2);
        karmrzok58=+karmrzok58;

        var karmrzok59 =(area_zok+perimetrzok/2)*0.45*1.2*0.001;
        //karmrnr44 = karmrnr44.toFixed(2);
        //alert(karmrnr44);
        karmrzok59=+karmrzok59;

        var karmrnr26zok=karmrzok59+karmrzok58;

        var karmrnr26zoksm = karmrnr26zok.toFixed(2);
        $('#karmrnr26zoksm').text(karmrnr26zoksm);
        var zkarmrnr26zok = karmrnr26zok *17300;
        zkarmrnr26zok = Math.round(zkarmrnr26zok);
        $('#zkarmrnr26zok').text(zkarmrnr26zok);

        //Укладка бетона с вибрированием
        var kukbetonzok = (area_zok*hplzok*0.001*1.05)/0.25;
        kukbetonzok=(Math.round(kukbetonzok))*0.25;
        kukbetonzok = kukbetonzok.toFixed(2);
        $('#kukbetonzok').text(kukbetonzok);
        var zkukbetozok25 = kukbetonzok * 1500;
        zkukbetozok25 = Math.round(zkukbetozok25);
        $('#zkukbetozok25').text(zkukbetozok25);

//=======ITOG 2 block =====
        var zitog2zok= zkukbetozok25+ zkarmrnr26zok+zkmontagopalzok ;
        zitog2zok = Math.round(zitog2zok);
        $('#zitog2zok').text(zitog2zok);



        //====== Стены цоколя:=======
        var koszok37 = area_zok;
        koszok37 = koszok37.toFixed(0);
        $('#koszok37').text(koszok37);
        var zkoszok37 = koszok37 * 40;
        zkoszok37 = Math.round(zkoszok37);
        $('#zkoszok37').text(zkoszok37);

        //Изготовление и установка арматурных каркасов, монтаж арматурной сетки (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrzok64 =(lstenzok*h_etagzok-sproemzok)*21*0.001*1.1;
        //karmrnr43 = karmrnr43.toFixed(2);
        karmrzok64=+karmrzok64;
        var karmrnr38zok=karmrzok64;
        var kkarmrnr38zoksm = karmrnr38zok.toFixed(2);
        $('#karmrnr38zoksm').text(karmrnr26zoksm);
        var zkarmrnr38zok = karmrnr38zok *21000;
        zkarmrnr38zok = Math.round(zkarmrnr38zok);
        $('#zkarmrnr38zok').text(zkarmrnr38zok);

        //Монтаж опалубки
        var kopalzok = lstenzok*2*h_etagzok-sproemzok;
        //shrosrvernr
        kopalzok = kopalzok.toFixed(2);
        $('#kopalzok').text(kopalzok);
        var zkopalzok = kopalzok * 645;
        zkopalzok = Math.round(zkopalzok);
        $('#zkopalzok').text(zkopalzok);


        //Укладка бетона с вибрированием
        var kukbetonzok40 = ((lstenzok*h_etagzok-sproemzok)*tstenokzok*0.001*1.05)/0.25;
        kukbetonzok40=(Math.ceil(kukbetonzok40))*0.25;
        kukbetonzok40 = kukbetonzok40.toFixed(2);
        $('#kukbetonzok40').text(kukbetonzok40);
        var zkukbetozok40 = kukbetonzok40 * 1500;
        zkukbetozok40 = Math.round(zkukbetozok40);
        $('#zkukbetozok40').text(zkukbetozok40);

//=======ITOG 3 block =====
        var zitog3zok= zkukbetozok40+zkopalzok+zkarmrnr38zok+zkoszok37;

        zitog3zok = Math.round(zitog3zok);
        $('#zitog3zok').text(zitog3zok);



        //=========Плита перекрытия:===========
        //Монтаж, демонтаж опалубки на горизонтальную часть перекрытия

        var kopalzok43 = splperekzok;
        //shrosrvernr
        kopalzok43 = kopalzok43.toFixed(2);
        $('#kopalzok43').text(kopalzok43);
        var zkopalzok43 = kopalzok43 * 600;
        zkopalzok43 = Math.round(zkopalzok43);
        $('#zkopalzok43').text(zkopalzok43);

        //Монтаж, демонтаж опалубки на верикальное ребро перекрытия
        //<span id="perimperekzok">40</span>
        var kopalzok44 = perimperekzok;
        //shrosrvernr
        kopalzok44 = kopalzok44.toFixed(2);
        $('#kopalzok44').text(kopalzok44);
        var zkopalzok44 = kopalzok44 * 450;
        zkopalzok44 = Math.round(zkopalzok44);
        $('#zkopalzok44').text(zkopalzok44);

        //Изготовление и установка арматурных каркасов (Соединение стержней арматуры выполняется с использованием вязальной проволоки)
        var karmrzok71 =splperekzok*21*0.888*0.001*1.1;
        karmrzok71=+karmrzok71;

        var karmrzok72 =(splperekzok+perimperekzok/2)*0.45*1.2*0.001;
        karmrzok72=+karmrzok72;

        var karmrnr45=karmrzok71+karmrzok72;
        var karmrnr45sm = karmrnr45.toFixed(2);
        $('#karmrnr45sm').text(karmrnr45sm);
        var zkarmrnr45 = karmrnr45 *17300;
        zkarmrnr45 = Math.round(zkarmrnr45);
        $('#zkarmrnr45').text(zkarmrnr45);

        //Укладка бетона с вибрированием
        var kukbetonvr46 = (splperekzok*hplperekzok*0.001*1.05)/0.25;
        kukbetonvr46=(Math.ceil(kukbetonvr46))*0.25;
        kukbetonvr46 = kukbetonvr46.toFixed(2);
        $('#kukbetonvr46').text(kukbetonvr46);
        var zkukbetonvr46 = kukbetonvr46 * 1500;
        zkukbetonvr46 = Math.round(zkukbetonvr46);
        $('#zkukbetonvr46').text(zkukbetonvr46);


        //=======ITOG 4 block =====
        var zitog4zok=zkukbetonvr46+zkarmrnr45+zkopalzok44+zkopalzok43 ;
        zitog4zok = Math.round(zitog4zok);
        $('#zitog4zok').text(zitog4zok);

        //=======ITOG 4 block =====
        var zitog5zok=zitog1zok+zitog2zok+zitog3zok+zitog4zok ;
        zitog5zok = Math.round(zitog5zok);
        $('#zitog5zok').text(zitog5zok);




        //====Земляные работы:==========
        //Геотекстиль Мегаизол Гео про 200
        var kzem51zok =kgeotekszok*1.1;
        kzem51zok =  kzem51zok.toFixed(2);
        $('#kzem51zok').text(kzem51zok);
        var zkzem51zok = kzem51zok * 30;
        zkzem51zok = Math.round(zkzem51zok);
        $('#zkzem51zok').text(zkzem51zok);

        //Песок строительный (средней крупности или крупный) (Кратно 10 м3)  с учетом доставки
        var kpesok52zok =Math.ceil(kpesokzok/10);
        kpesok52zok=kpesok52zok*10;

        kpesok52zok =  kpesok52zok.toFixed(2);
        $('#kpesok52zok').text(kpesok52zok);
        var zkpesok52zok = kpesok52zok * 600;
        zkpesok52zok = Math.round(zkpesok52zok);
        $('#zkpesok52zok').text(zkpesok52zok);

        //Щебень гранитный фр. 20-40 мм. (Кратно 10 м3)  с учетом доставки
        var ksheben532zok =Math.ceil(kshebenzok/10);
        ksheben532zok=ksheben532zok*10;

        ksheben532zok =  ksheben532zok.toFixed(2);
        $('#ksheben532zok').text(ksheben532zok);
        var zksheben532zok = ksheben532zok *1400;
        zksheben532zok = Math.round(zksheben532zok);
        $('#zksheben532zok').text(zksheben532zok);



        //=======ITOG 6 block =====
        var zitog6zok= zksheben532zok+zkpesok52zok+zkzem51zok ;
        zitog6zok = Math.round(zitog6zok);
        $('#zitog6zok').text(zitog6zok);


        //======== 7 bloks =======

        // ======Фундаментная плита:=========

        //Доска 40*150*6000 для раскрепления
        var kdoska56zok = (Math.round(hplzok/150))*perimetrzok*0.009+perimetrzok*0.0125;

        kdoska56zok =  kdoska56zok.toFixed(2);
        $('#kdoska56zok').text(kdoska56zok);
        var zkdoska56zok = kdoska56zok *12500;
        zkdoska56zok = Math.round(zkdoska56zok);
        $('#zkdoska56zok').text(zkdoska56zok);

        //Подставки под арматуру (стульчики)
        var kstul57zok =area_zok*4;
        kstul57zok =  kstul57zok.toFixed(2);
        $('#kstul57zok').text(kstul57zok);
        var zkstul57zok = kstul57zok *5;
        zkstul57zok = Math.round(zkstul57zok);
        $('#zkstul57zok').text(zkstul57zok);

        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        karmrzok58 =+karmrzok58;
        karmrzok58sm =  karmrzok58.toFixed(2);
        $('#karmrzok58sm').text(karmrzok58sm);
        var zkarmrzok58 = karmrzok58 *41000;
        zkarmrzok58 = Math.round(zkarmrzok58);
        $('#zkarmrzok58').text(zkarmrzok58);

        //Арматура d8 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        karmrzok59 =+karmrzok59;
        karmrzok59sm =  karmrzok59.toFixed(2);
        $('#karmrzok59sm').text(karmrzok59sm);
        var zkarmrzok59 = karmrzok59 *41000;
        zkarmrzok59 = Math.round(zkarmrzok59);
        $('#zkarmrzok59').text(zkarmrzok59);

        //Проволока вязальная
        var kprov60zok =karmrnr26zok*9;
        //alert(karmrnr26zoksm);
        kprov60zoksm =  kprov60zok.toFixed(2);
        $('#kprov60zoksm').text(kprov60zoksm);
        var zkprov60zok = kprov60zok *100;
        zkprov60zok = Math.round(zkprov60zok);
        $('#zkprov60zok').text(zkprov60zok);

        //Бетон для плиты B22,5 М300 П4 (С учетом доставки из СПб)
        kukbetonzok=+kukbetonzok;
        var kbeton61zok =kukbetonzok;
        //alert(karmrnr26zoksm);
        kbeton61zok =  kbeton61zok.toFixed(2);
        $('#kbeton61zok').text(kbeton61zok);
        var zkbeton61zok = kbeton61zok *4100;
        zkbeton61zok = Math.round(zkbeton61zok);
        $('#zkbeton61zok').text(zkbeton61zok);

        //=======ITOG 7 block =====
        var zitog7zok=zkbeton61zok+zkprov60zok+ zkarmrzok59+zkarmrzok58+zkstul57zok+zkdoska56zok;
        zitog7zok = Math.round(zitog7zok);
        $('#zitog7zok').text(zitog7zok);



        //=======8 block =====

        //Стены цоколя::
        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmat64zok =(lstenzok*h_etagzok-sproemzok)*21*0.001*1.1;
        var karmat64zoksm =  karmat64zok.toFixed(2);
        $('#karmat64zoksm').text(karmat64zoksm);
        var zkarmat64zok = karmat64zok *41000;
        zkarmat64zok = Math.round(zkarmat64zok);
        $('#zkarmat64zok').text(zkarmat64zok);


        //Проволока вязальная
        var kprov65zok =karmat64zok*9;
        kprov65zok =  kprov65zok.toFixed(2);
        $('#kprov65zok').text(kprov65zok);
        var zkprov65zok = kprov65zok *100;
        zkprov65zok = Math.round(zkprov65zok);
        $('#zkprov65zok').text(zkprov65zok);

        //Фиксатор для арматуры вертикальной
        var kfiksator66zok =lstenzok*h_etagzok*10;

        kfiksator66zok=  kfiksator66zok.toFixed(0);
        $('#kfiksator66zok').text(kfiksator66zok);
        var zkfiksator66zok = kfiksator66zok*4;
        zkfiksator66zok = Math.round(zkfiksator66zok);
        $('#zkfiksator66zok').text(zkfiksator66zok);

        //Опалубка инвентарная (аренда)
        //<span id="kopalzok">221.90</span>
        kopalzok=+kopalzok;
        var kopal67zok =kopalzok;
        kopal67zok =  kopal67zok.toFixed(2);
        $('#kopal67zok').text(kopal67zok);
        var zkopal67zok = kopal67zok *330;
        zkopal67zok = Math.round(zkopal67zok);
        $('#zkopal67zok').text(zkopal67zok);

        //Бетон для стен цоколя B22,5 М300 П4 (С учетом доставки из СПб)
        //<span id="kukbetonzok40">23.25</span>
        kukbetonzok40=+kukbetonzok40;
        var kbeton68zok =kukbetonzok40;
        kbeton68zok =  kbeton68zok.toFixed(2);
        $('#kbeton68zok').text(kbeton68zok);
        var zkbeton68zok = kbeton68zok *4100;
        zkbeton68zok = Math.round(zkbeton68zok);
        $('#zkbeton68zok').text(zkbeton68zok);


        //=======ITOG 8 block =====
        var zitog8zok=zkbeton68zok+zkopal67zok+ zkfiksator66zok+zkprov65zok+zkarmat64zok;
        zitog8zok = Math.round(zitog8zok);
        $('#zitog8zok').text(zitog8zok);

        //=======9 block =====

        //Плита перекрытия:
        //Арматура d12 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)

        var karmat71zok =splperekzok*21*0.888*0.001*1.1;
        var karmat71zoksm =  karmat71zok.toFixed(2);
        $('#karmat71zoksm').text(karmat71zoksm);
        var zkarmat71zok = karmat71zok *41000;
        zkarmat71zok = Math.round(zkarmat71zok);
        $('#zkarmat71zok').text(zkarmat71zok);

        // Арматура d8 А500 (Количество арматуры указано предварительно согласно типовым решениям и будет скорректированно после разработки проекта)
        var karmat72zok =(splperekzok+perimperekzok/2)*0.45*1.2*0.001;
        karmat72zoksm =  karmat72zok.toFixed(2);
        $('#karmat72zoksm').text(karmat72zoksm);
        var zkarmat72zok = karmat72zok *41000;
        zkarmat72zok = Math.round(zkarmat72zok);
        $('#zkarmat72zok').text(zkarmat72zok);

        //Проволока вязальная
        karmrnr45=+karmrnr45;
        var kprov73zok =karmrnr45*9;
        kprov73zok =  kprov73zok.toFixed(2);
        $('#kprov73zok').text(kprov73zok);
        var zkprov73zok = kprov73zok *100;
        zkprov73zok = Math.round(zkprov73zok);
        $('#zkprov73zok').text(zkprov73zok);

        //Фиксаторы
        //<span id="splperekzok">100</span>
        splperekzok=+splperekzok;
        var kfiksator74zok =splperekzok*5;
        kfiksator74zok =  kfiksator74zok.toFixed(2);
        $('#kfiksator74zok').text(kfiksator74zok);
        var zkfiksator74zok = kfiksator74zok *5;
        zkfiksator74zok = Math.round(zkfiksator74zok);
        $('#zkfiksator74zok').text(zkfiksator74zok);

        //Опалубка инвентарная (аренда)
        //<span id="kopalzok43">100.00</span>
        kopalzok43=+kopalzok43;
        var kopal75zok =kopalzok43;
        kopal75zok =  kopal75zok.toFixed(2);
        $('#kopal75zok').text(kopal75zok);
        var zkopal75zok = kopal75zok *480;
        zkopal75zok = Math.round(zkopal75zok);
        $('#zkopal75zok').text(zkopal75zok);

        //Фанера нешлифованная ФСФ 2440х1220х18 мм на подрезку
        splperekzok=+splperekzok;
        var kfaner76zok =splperekzok*0.25;
        kfaner76zok =  kfaner76zok.toFixed(2);
        $('#kfaner76zok').text(kfaner76zok);
        var zkfaner76zok = kfaner76zok *900;
        zkfaner76zok = Math.round(zkfaner76zok);
        $('#zkfaner76zok').text(zkfaner76zok);

        //Бетон для перекрытия B22,5 М300 П4 (С учетом доставки из СПб)
        //<span id="kukbetonvr46">31.50</span>
        kukbetonvr46=+kukbetonvr46;
        var kbeton77zok =kukbetonvr46;
        kbeton77zok =  kbeton77zok.toFixed(2);
        $('#kbeton77zok').text(kbeton77zok);
        var zkbeton77zok = kbeton77zok *4100;
        zkbeton77zok = Math.round(zkbeton77zok);
        $('#zkbeton77zok').text(zkbeton77zok);



        //=======ITOG 9 block =====
        var zitog9zok=zkbeton77zok+zkfaner76zok+zkopal75zok+zkfiksator74zok+zkprov73zok
            +zkarmat72zok+zkarmat71zok ;
        zitog9zok = Math.round(zitog9zok);
        $('#zitog9zok').text(zitog9zok);


        // =========Доставка:====================
        // Доставка арматуры шаландой/манипулятором
        //<span id="lkadzok">25</span>
        if (lkadzok <= 30) {
            var larmDostavzok = 9000;
        }
        if (lkadzok > 30) {
            larmDostavzok = (lkadzok - 30) * 35 + 9000;
        }
        larmDostavzok = Math.round(larmDostavzok);
        $('#larmDostavzok').text(larmDostavzok);

        var zlarmDostavzok = larmDostavzok;
        zlarmDostavzok = Math.round(zlarmDostavzok);
        $('#zlarmDostavzok').text(zlarmDostavzok);


        // Доставка и вывоз опалубки
        if (lkadzok <= 30) {
            var larmDostavOpalzok = 9000;
        }
        if (lkadzok > 30) {
            larmDostavOpalzok = (lkadzok - 30) * 35 + 9000;
        }
        larmDostavOpalzok = Math.round(larmDostavOpalzok);
        $('#larmDostavOpalzok').text(larmDostavOpalzok);

        var zlarmDostavOpalzok = larmDostavOpalzok * 1;
        zlarmDostavOpalzok = Math.round(zlarmDostavOpalzok);
        $('#zlarmDostavOpalzok').text(zlarmDostavOpalzok);

        // Доставка остальных материалов
        if (lkadzok <= 30) {
            var larmDostavMaterzok = 4200;
        }
        if (lkadzok > 30) {
            larmDostavMaterzok = (lkadzok - 30) * 35 + 4200;
        }
        larmDostavMaterzok = Math.round(larmDostavMaterzok);
        $('#larmDostavMaterzok').text(larmDostavMaterzok);

        var zlarmDostavMaterzok = larmDostavMaterzok*2;
        zlarmDostavMaterzok = Math.round(zlarmDostavMaterzok);
        $('#zlarmDostavMaterzok').text(zlarmDostavMaterzok);

        // ==========ITOG DOSTAV============

        var zitog10zok = zlarmDostavMaterzok + zlarmDostavzok + zlarmDostavOpalzok + 2400;
        zitog10zok = Math.round(zitog10zok);
        $('#zitog10zok').text(zitog10zok);


        // // =====Итого за материалы:
        //zdostavmatitogosm=+zdostavmatitogosm;
        var zitog11zok = zitog6zok+zitog7zok+zitog8zok+zitog9zok+zitog10zok;
        zitog11zok = Math.round(zitog11zok);
        $('#zitog11zok').text(zitog11zok);




        //====== 4 blok=========
        // ======= Доп. Работы===========
        //  ===============Планировка выбранного грунта============
        var kgruntzok = 0;
        kgruntzok = Math.round(kgruntzok);
        $('#kgruntzok').text(kgruntzok);

        var zkgruntzok = kgruntzok * 150;
        zkgruntzok = Math.round(zkgruntzok);
        $('#zkgruntzok').text(zkgruntzok);

        //Обратная засыпка пазух фундамента песком (Кратно 10 м3)



        var kpasuh88zok =((((area_zok+perimperekzok)*(hpesokzok+hsheblpzok+hfundamentzok)*0.001
            -(area_zok-perimperekzok*0.2)*hfundamentzok*0.001))*1.28)/10;
        kpasuh88zok=(Math.ceil(kpasuh88zok))*10;
        kpasuh88zok =  kpasuh88zok.toFixed(2);
        $('#kpasuh88zok').text(kpasuh88zok);
        var zkpasuh88zok = kpasuh88zok *1000;
        zkpasuh88zok = Math.round(zkpasuh88zok);
        $('#zkpasuh88zok').text(zkpasuh88zok);


        // =============Устройство закладной гильзы вода===========
        var kzakladzok = 5;
        kzakladzok = Math.round(kzakladzok);
        $('#kzakladzok').text(kzakladzok);

        var zkzakladzok = kzakladzok * 1200;
        zkzakladzok = Math.round(zkzakladzok);
        $('#zkzakladzok').text(zkzakladzok);

        // =============Устройство закладной гильзы электро===========
        var kzakladelzok = 10;
        kzakladelzok = Math.round(kzakladelzok);
        $('#kzakladelzok').text(kzakladelzok);

        var zkzakladelzok = kzakladelzok * 200;
        zkzakladelzok = Math.round(zkzakladelzok);
        $('#zkzakladelzok').text(zkzakladelzok);

        // ====================Разводка канализации под домом============
        var kzakladkanalzok = 5;
        kzakladkanalzok = Math.round(kzakladkanalzok);
        $('#kzakladkanalzok').text(kzakladkanalzok);

        var zkzakladkanalzok = kzakladkanalzok * 1000;
        zkzakladkanalzok = Math.round(zkzakladkanalzok);
        $('#zkzakladkanalzok').text(zkzakladkanalzok);

        //Устройство бетонной подготовки 100мм, B7,5
        var kbeton92zok = area_zok+perimperekzok*0.1;
        kbeton92zok =  kbeton92zok.toFixed(2);
        $('#kbeton92zok').text(kbeton92zok);
        var zkbeton92zok = kbeton92zok * 520;
        zkbeton92zok = Math.round(zkbeton92zok);
        $('#zkbeton92zok').text(zkbeton92zok);

        //Устройство бетонной подготовки 100мм, B7,5
        var kbeton93zok = area_zok+perimperekzok*0.1;
        kbeton93zok =  kbeton93zok.toFixed(2);
        $('#kbeton93zok').text(kbeton93zok);
        var zkbeton93zok = kbeton93zok * 510;
        zkbeton93zok = Math.round(zkbeton93zok);
        $('#zkbeton93zok').text(zkbeton93zok);

        //Гидроизоляция цокольной части оклеечная Техноэласт 1 слой
        var kgidro94zok =perimperekzok*(h_etagzok+hplzok*0.001+hplperekzok*0.001);
        kgidro94zok =  kgidro94zok.toFixed(2);
        $('#kgidro94zok').text(kgidro94zok);
        var zkgidro94zok = kgidro94zok * 630;
        zkgidro94zok = Math.round(zkgidro94zok);
        $('#zkgidro94zok').text(zkgidro94zok);

        //Гидроизоляция цокольной части оклеечная Техноэласт 1 слой
        var kgidro95zok =perimperekzok*(h_etagzok+hplzok*0.001+hplperekzok*0.001);
        kgidro95zok =  kgidro95zok.toFixed(2);
        $('#kgidro95zok').text(kgidro95zok);
        var zkgidro95zok = kgidro95zok * 885;
        zkgidro95zok = Math.round(zkgidro95zok);
        $('#zkgidro95zok').text(zkgidro95zok);

        //Устройство гидрошпонки Аквастоп тип ХВН-120 с 2-мя набухающими резиновыми шнурами
        var kgidro96zok =perimperekzok;
        kgidro96zok =  kgidro96zok.toFixed(2);
        $('#kgidro96zok').text(kgidro96zok);
        var zkgidro96zok = kgidro96zok * 800;
        zkgidro96zok = Math.round(zkgidro96zok);
        $('#zkgidro96zok').text(zkgidro96zok);

        //Вывоз мусора после завершения работ на объекте
        var kmusor97zok =area_zok/100;
        kmusor97zok=Math.floor(kmusor97zok);
        kmusor97zok=kmusor97zok*10000;
        kmusor97zok =  kmusor97zok.toFixed(2);
        $('#kmusor97zok').text(kmusor97zok);
        var zkmusor97zok = kmusor97zok * 1;
        zkmusor97zok = Math.round(zkmusor97zok);
        $('#zkmusor97zok').text(zkmusor97zok);


        //Итого доп. работы:
        var zitog12zok = zkmusor97zok+zkgidro96zok+zkgidro95zok+zkgidro94zok+zkbeton93zok
            +zkbeton92zok+zkzakladkanalzok+zkzakladelzok+zkpasuh88zok+zkgruntzok+zkzakladzok;
        //<span id="zkzakladzok">6000</span>
        zitog12zok = Math.round(zitog12zok);
        $('#zitog12zok').text(zitog12zok);





        // =============Спецтехника и доп. оборудование:====================
        // ============Бетононасос==============

        if (lkadzok <= 30) {
            var  kzbetzok = 14400;
        }
        if (lkadzok > 30) {
            kzbetzok = (lkadzok - 30) * 155 + 14400;
        }
        kzbetzok = Math.round( kzbetzok);
        $('#kzbetzok').text( kzbetzok);

        var zbetonzok =kzbetzok*3;
        zbetonzok = Math.round(zbetonzok);
        $('#zbetonzok').text(zbetonzok);

        // Обеспечение строительным вагончиком,
        var kvagonzok = 1;
        kvagonzok = Math.round(kvagonzok);
        $('#kvagonzok').text(kvagonzok);

        var zkvagonzok = kvagonzok * 20000;
        zkvagonzok = Math.round(zkvagonzok);
        $('#zkvagonzok').text(zkvagonzok);

        // Обеспечение биотуалетом
        var kbiotualzok = 1;
        kbiotualzok = Math.round(kbiotualzok);
        $('#kbiotualzok').text(kbiotualzok);

        var zkbiotualzok = kbiotualzok * 5000;
        zkbiotualzok = Math.round(zkbiotualzok);
        $('#zkbiotualzok').text(zkbiotualzok);


        // Обеспечение электричеством: предоставляет Заказчик
        var kelktrozok = 0;
        kelktrozok = Math.round(kelktrozok);
        $('#kelktrozok').text(kelktrozok);

        var zkelktrozok = kelktrozok * 0;
        zkelktrozok = Math.round(zkelktrozok);
        $('#zkelktrozok').text(zkelktrozok);

        // Обеспечение водой:
        var kvaterzok = 0;
        kvaterzok = Math.round(kvaterzok);
        $('#kvaterzok').text(kvaterzok);

        var zkvaterzok = kvaterzok * 0;
        zkvaterzok= Math.round(zkvaterzok);
        $('#zkvaterzok').text(zkvaterzok);

        // ===========Итого за спецтехнику и доп. оборудование:
        var zitogcpezzok = zkvaterzok + zkelktrozok + zkbiotualzok + zkvagonzok + zbetonzok+24000;
        zitogcpezzok = Math.round(zitogcpezzok);
        $('#zitogcpezzok').text(zitogcpezzok);

        // ===========Итого за работы и материалы:========
        var zitogo_matzok =zitogcpezzok+zitog12zok+zitog11zok+zitog5zok;
        zitogo_matzok = Math.round(zitogo_matzok);
        $('#zitogo_matzok').text(zitogo_matzok);

        // Накладные расходы 2%:
        var zitogSMplzok = zitogo_matzok * 0.02;
        zitogSMplzok = Math.round(zitogSMplzok);
        $('#zitogSMplzok').text(zitogSMplzok);

        // ИТОГО ПО СМЕТЕ:

        var zitogSMzok = zitogo_matzok + zitogSMplzok;
        // zitogM1
        zitogSMzok = Math.round(zitogSMzok);
        $('#zitogSMzok').text(zitogSMzok);

        zena_smetu = zitogSMzok;
        zena_smetu = Math.round(zena_smetu);
        $('#zena_smetu').text(zena_smetu);

        //==== itog 1 etap======
        //<span id="zkarmat64zok">104086</span>
        //<span id="zkarmat71zok">84102</span>
        var zitog1etapzok=zitog6zok+zitog7zok+ zkarmat64zok+zkarmat71zok+zitog10zok+zitog12zok/2;
        zitog1etapzok = (Math.ceil(zitog1etapzok/1000))*1000;
        $('#zitog1etapzok').text(zitog1etapzok);


        //==== itog 2 etap======
        // <span id="zitogcpezzok">92200</span>
        var zitog2etapzok=zitog8zok-zkarmat64zok+zitog9zok-zkarmat71zok+zitogcpezzok+zitog1zok+zitog2zok ;



        zitog2etapzok = (Math.ceil(zitog2etapzok/1000))*1000;
        $('#zitog2etapzok').text(zitog2etapzok);

        //==== itog 2 etap======

        var zitog3etapzok=zitogSMzok-zitog1etapzok-zitog2etapzok;

        zitog3etapzok = Math.round(zitog3etapzok);
        $('#zitog3etapzok').text(zitog3etapzok);





    }








    //========== END SMETA  =================//
}


