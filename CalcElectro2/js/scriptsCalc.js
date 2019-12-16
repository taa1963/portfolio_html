
$(document).ready(function() {

    //===== Вычитка списка  регионов при открытие сайта   =====//

    function load1(){

        for (var i = 0; i < regions.length; i++)  {

            $('<option value="' + i + '">' + regions[i].name + '</option>').appendTo('#region');

        }
    };

    load1();


    //===== Открытие  и закрытие блоков при выборе региона   =====//

    $('#region').click(function (){

        var rigionv=document.getElementById('region').value;
        if (rigionv>=0){
            var block = $(this).parents('.calc_form');
            block.find('.compani').show();
            block.find('.tarif').show();
            compani();
            tarif();

        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.compani').hide();
            block.find('.tarif').hide();
            block.find('.power').hide();
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
        }
    });

//===== Открытие и закрытие блоков выборе при сетевой компании   =====//
    $('#companis').click(function (){
       var companisnv=$("#companis option:selected").text();

        if (companisnv=="Выберите субьект"){
            var block = $(this).parents('.calc_form');
            block.find('.tarif').hide();
            block.find('.power').hide();
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.tarif').show();
            tarif();
        }
    });


//===== Формирование списка сетевых компаний после выбора региона   =====//
   function compani(){

       $('#companis').find('option').remove(); //удаление старых данных
       var rigionv=document.getElementById('region').value;

       for (var i = 0; i < regions[rigionv].companies.length; i++)  {

           $('<option value="' + i + '">' + regions[rigionv].companies[i].namek + '</option>').appendTo('#companis');
       }
    };

//===== Формирование списка тарифных после выбора сетевой компании  =====//
    function tarif(){

        $('#tarifs').find('option').remove(); //удаление старых данных
        var rigionv=document.getElementById('region').value;
        for (var i = 0; i < regions[rigionv].tariff_zones.length; i++)  {

            $('<option value="' + i + '">' + regions[rigionv].tariff_zones[i].namez + '</option>').appendTo('#tarifs');
        }
    };

//===== Открытие и закрытие блоков при выборе тарифной зоны   =====//
    $('#tarifs').click(function (){
        var tarifsnv=$("#tarifs option:selected").text();

        if (tarifsnv=="Выберите тарифную зону"){
            var block = $(this).parents('.calc_form');
            block.find('.power').hide();
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();


      }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.power').show();
            // tarif();
        }

        var zonev=$("#tarifs option:selected").text();

        //===== заполнение текста после выбора тарифной зоны   =====//
        if (zonev=="вне зависимости от местности"){
            var zonev ="вне зависимости от местности";
        }

        if (zonev=="Вне города"){
            var zonev ="На территориях, не относящихся к городским населенным пунктам";
        }

        if (zonev=="Город"){
            var zonev ="На территории городских населенных пунктов";
        }

        if (zonev=="Сельская местность"){
            var zonev ="Территории, не относящиеся к территориям городских населенных пунктов";
        }




        $('#power_zone').text(zonev);


    });

    //===== закрываем ввод в поле мощность цифр и отрицательных значений   =====//
    var flag = true;
    $('#powers').keypress(function(e) {

        if ((event.keyCode != 44 || !flag) && (event.keyCode < 48 || event.keyCode > 57)) {
            event.returnValue = false;
        }
        if(event.keyCode == 44) flag = false;
        // this.value = this.value.replace(/[^\d\.]/g, "");
        // if(this.value.match(/\./g).length > 1) {
        //     this.value = this.value.substr(0, this.value.lastIndexOf("."));
        // }

        // if (e.which != 8 && e.which != 0 ) {
        //     return false;
        // }
        //return !(/^[А-Яа-яA-Za-z ]$/.test(e.key));  // IE > 9
    });
        //if (( e.which==8 ||e.which==44 ||e.which==45 || e.which > 57 )) return false;

        // ======Только одна точка или одна запятая=====

    $('#powers').keypress(function(e) {
        if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
            return !(/[.,]/.test(e.key));
         }
    });
        // ======Ограничить ввод двумя знаками после запятой=====

    // $('#powers').keypress(function(e) {
    //
    //     if (e.value.indexOf(".") != '-1') {
    //         e.value=e.value.substring(0, e.value.indexOf(".") + 3);
    //     }
    //
    // });


    //===== Открытие и закрытие блоков после введение мощности   =====//

    $('#powers').click(function (){

        var powersv = document.getElementById('powers').value;
         // alert(powersv);

        if (powersv==''){
            var block = $(this).parents('.calc_form');
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.potential').show();
            block.find('.reliability').hide();
            block.find('.payment').hide();
        }
    });

    $('#powers').bind('change keyup',function (){

        var powersv = document.getElementById('powers').value;
        // alert(powersv);

        if (powersv==''){
            var block = $(this).parents('.calc_form');
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.potential').show();
            block.find('.reliability').hide();
            block.find('.payment').hide();
        }
    });



    //===== Открытие и закрытие блоков после выбора уровня напряжения   =====//


    $('#potentials').click(function (){

        var potentialsv = document.getElementById('potentials').value;
        // alert(powersv);

        if (potentialsv>=0){
            var block = $(this).parents('.calc_form');
            block.find('.reliability').show();
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
        }
    });

    //===== Открытие и закрытие блоков после выбора категории нажежности   =====//


    $('#reliabilitys').click(function (){

        var reliabilitysv = document.getElementById('reliabilitys').value;
        // alert(powersv);

        if (reliabilitysv>=0){
            var block = $(this).parents('.calc_form');
            block.find('.payment').show();
        }
        else{
            var block = $(this).parents('.calc_form');
           block.find('.payment').hide();
            block.find('.building').hide();
        }
    });


    //===== Открытие и закрытие блоков после выбора способа расчета   =====//


    $('#payments').click(function (){

        var paymentsv = document.getElementById('payments').value;
        // alert(powersv);

        if (paymentsv>=0){
            var block = $(this).parents('.calc_form');
            block.find('.building').show();
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.building').hide();

        }
    });

//===== Открытие блока цен и вычисление цен при выборе необходимости строительства   =====//
    $('#building2').click(function (){
        itog=1;
       var block = $(this).parents('.calc_form');
            block.find('.itog').show();
        zena();
    });

    $('#building1').click(function (){
        itog=1;
        var block = $(this).parents('.calc_form');
        block.find('.itog').show();
        zena();
    });



    function zena() {
       var  Zorg_ndc=0;
       var Zorgndc=0;
       var Zorg_itog=0;
        //===== Вычитка введенной мощности   =====//
        var powerK = document.getElementById('powers').value;

        var Ni=powerK;
        Ni=+Ni;

        //===== Вычитка коэфффицента надежности   =====//
        var Knad = document.getElementById('reliabilitys').value;

        //===== Вычитка уровня напряжения   =====//
        var Un = document.getElementById('potentials').value;

        //===== Вычитка способа расчета   =====//
        var Sr = document.getElementById('payments').value;

        // alert(Ni);
        // alert(Knad);
        // alert(Sr);




        //==== Мощность меньше 15   =====//
        if ( (Ni>=0) && (Ni<=15) ){
                // alert(11);
            if ((Knad>0)|| (Knad<2)){
                // alert(21);
               if(Sr==0){
                   // alert(31);
                   Zorg_ndc=15415.33*Ni;
               }
               else
               {
                   Zorg_ndc=15415.33;
               }


            }


            else
                {

                    Zorg_ndc=550;

                }

        }


        //===== Мощность больше 15    =====//
        if ( (Ni>15) && (Ni<=150) ){

        }


        //===== Мощность больше 150    =====//
        if ( (Ni>150)  ){

        }


        $('#Zorg_ndc').text(Zorg_ndc);

        Zorgndc=Zorg_ndc*0.2;
        $('#Zorgndc').text(Zorgndc);

        Zorg_itog=Zorg_ndc+Zorgndc;
        $('#Zorg_itog').text(Zorg_itog);



    }



});




