
$(document).ready(function() {

    //===== Вычитка списка  регионов при открытие сайта   =====//

    // function load1(){
    //
    //     for (var i = 0; i < regions.length; i++)  {
    //
    //         $('<option value="' + i + '">' + regions[i].name + '</option>').appendTo('#region');
    //
    //     }
    // };
    //
    // load1();


    //===== Открытие  и закрытие блоков при выборе региона   =====//

    // $('#region').click(function (){
    //
    //     var rigionv=document.getElementById('region').value;
    //     if (rigionv>=0){
    //         var block = $(this).parents('.calc_form');
    //         block.find('.compani').show();
    //         block.find('.tarif').show();
    //         compani();
    //         tarif();
    //
    //     }
    //     else{
    //         var block = $(this).parents('.calc_form');
    //         block.find('.compani').hide();
    //         block.find('.tarif').hide();
    //         block.find('.power').hide();
    //         block.find('.potential').hide();
    //         block.find('.reliability').hide();
    //         block.find('.payment').hide();
    //         block.find('.building').hide();
    //     }
    // });

//===== Открытие и закрытие блоков выборе при сетевой компании   =====//
//     $('#companis').click(function (){
//        var companisnv=$("#companis option:selected").text();
//
//         if (companisnv=="Выберите субьект"){
//             var block = $(this).parents('.calc_form');
//             block.find('.tarif').hide();
//             block.find('.power').hide();
//             block.find('.potential').hide();
//             block.find('.reliability').hide();
//             block.find('.payment').hide();
//             block.find('.building').hide();
//         }
//         else{
//             var block = $(this).parents('.calc_form');
//             block.find('.tarif').show();
//             tarif();
//         }
//     });


//===== Формирование списка сетевых компаний после выбора региона   =====//
//    function compani(){
//
//        $('#companis').find('option').remove(); //удаление старых данных
//        var rigionv=document.getElementById('region').value;
//
//        for (var i = 0; i < regions[rigionv].companies.length; i++)  {
//
//            $('<option value="' + i + '">' + regions[rigionv].companies[i].namek + '</option>').appendTo('#companis');
//        }
//     };

//===== Формирование списка тарифных после выбора сетевой компании  =====//
//     function tarif(){
//
//         $('#tarifs').find('option').remove(); //удаление старых данных
//         var rigionv=document.getElementById('region').value;
//         for (var i = 0; i < regions[rigionv].tariff_zones.length; i++)  {
//
//             $('<option value="' + i + '">' + regions[rigionv].tariff_zones[i].namez + '</option>').appendTo('#tarifs');
//         }
//     };




//===== Открытие и закрытие блоков при выборе тарифной зоны   =====//
//     $('#tarifs').click(function (){
//         var tarifsnv=$("#tarifs option:selected").text();
//
//         if (tarifsnv=="Выберите тарифную зону"){
//             var block = $(this).parents('.calc_form');
//             block.find('.power').hide();
//             block.find('.potential').hide();
//             block.find('.reliability').hide();
//             block.find('.payment').hide();
//             block.find('.building').hide();
//
//
//       }
//         else{
//             var block = $(this).parents('.calc_form');
//             block.find('.power').show();
//             // tarif();
//         }
//
//         var zonev=$("#tarifs option:selected").text();
//
//         //===== заполнение текста после выбора тарифной зоны   =====//
//         if (zonev=="вне зависимости от местности"){
//             var zonev ="вне зависимости от местности";
//         }
//
//         if (zonev=="Вне города"){
//             var zonev ="На территориях, не относящихся к городским населенным пунктам";
//         }
//
//         if (zonev=="Город"){
//             var zonev ="На территории городских населенных пунктов";
//         }
//
//         if (zonev=="Сельская местность"){
//             var zonev ="Территории, не относящиеся к территориям городских населенных пунктов";
//         }
//
//
//
//
//         $('#power_zone').text(zonev);
//
//
//     });

    //===== закрываем ввод в поле мощность цифр и отрицательных значений   =====//
    var flag = true;
    $('#powers').keypress(function(e) {

        if ((event.keyCode != 44 || !flag) && (event.keyCode < 48 || event.keyCode > 57)) {
            event.returnValue = false;
        }
        if(event.keyCode == 44) flag = true;

    });


        // ======Только одна точка или одна запятая=====

    $('#powers').keypress(function(e) {
        if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
            return !(/[.,]/.test(e.key));
         }
        var powersvv = document.getElementById('powers').value;
        powersvv=+powersvv;
        if (powersvv>=999){
            powersvv=999;
            document.getElementById('powers').value=powersvv;
        }


    });



    //===== Открытие и закрытие блоков после введение мощности   =====//

    $('#powers').click(function (){

        var powersv = document.getElementById('powers').value;
        if (powersv==''){
            var block = $(this).parents('.calc_form');
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();

        }
        else{

            if (itog==1){
                zena();
            }

           else {

            var block = $(this).parents('.calc_form');
            block.find('.potential').show();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
           block.find('.itog').hide();
        }


        }
    });

    $('#powers').bind('change keyup',function (){
        var powersvv = document.getElementById('powers').value;
        powersvv=+powersvv;
        if (powersvv>=999){
            powersvv=999;
            document.getElementById('powers').value=powersvv;
        }

        var powersv = document.getElementById('powers').value;
        if (powersv==''){
            var block = $(this).parents('.calc_form');
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();

        }
        else{

            if (itog==1){
                zena();
            }

            else {

                var block = $(this).parents('.calc_form');
                block.find('.potential').show();
                block.find('.reliability').hide();
                block.find('.payment').hide();
                block.find('.building').hide();
                block.find('.itog').hide();
            }


        }
    });



    //===== Открытие и закрытие блоков после выбора уровня напряжения   =====//


    $('#potentials').click(function (){

        var potentialsv = document.getElementById('potentials').value;
        // alert(powersv);

        if (potentialsv>=0){

            if(itog==1){
                zena();
            }
            else{
            var block = $(this).parents('.calc_form');
            block.find('.reliability').show();
          }
        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();

        }
    });

    //===== Открытие и закрытие блоков после выбора категории нажежности   =====//


    $('#reliabilitys').click(function (){

        var reliabilitysv = document.getElementById('reliabilitys').value;
        // alert(powersv);

        if (reliabilitysv>=0){

            if(itog==1){
                zena();
            }
            else{
                var block = $(this).parents('.calc_form');
                block.find('.payment').show();
            }

        }
        else{
            var block = $(this).parents('.calc_form');
           block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();
        }
    });


    //===== Открытие и закрытие блоков после выбора способа расчета   =====//


    $('#payments').click(function (){

        var paymentsv = document.getElementById('payments').value;
        // alert(powersv);

        if (paymentsv>=0){
            if(itog==1){
                zena();
            }
            else{
                var block = $(this).parents('.calc_form');
                block.find('.building').show();
            }

        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.building').hide();
            block.find('.itog').hide();

        }
    });

//===== Открытие блока цен и вычисление цен при выборе необходимости строительства   =====//
    $('#building2').click(function (){
        itog=1;
       var block = $(this).parents('.calc_form');
            block.find('.itog').show();
        zena();
        StrN=0;
    });

    $('#building1').click(function (){
        itog=1;
        var block = $(this).parents('.calc_form');
        block.find('.itog').show();
        zena();
        StrN=1;
    });



    function zena() {
        Zorg=0;
       Zorg_ndc=0;
        Zorgndc=0;
        Zorg_itog=0;
        //===== Вычитка введенной мощности   =====//
        var Ni = document.getElementById('powers').value;

        Ni=+Ni;


        //===== Вычитка уровня напряжения   =====//
        var Un = document.getElementById('potentials').value;

        //===== Вычитка коэфффицента надежности   =====//
        var Knad = document.getElementById('reliabilitys').value;

        //===== Вычитка способа расчета   =====//
        var Sr = document.getElementById('payments').value;


        //===== определение  Необходимо cтроительство 1- Необходимо  =====//
        var Str1=$("#building1").prop("checked");

        if (Str1==true){
            StrN=1;
        }
        else{
            StrN=0;
        }





        //==== Мощность меньше 15   =====//
        if ( (Ni>=0) && (Ni<=15) ){

            if (Knad==2){
                Zorg=Ptp;
            }

            if ((Knad==0)|| (Knad==1)) {
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }
            }

            if ((Knad>0)|| (Knad<2)) {
                if (Sr == 1) {
                    Zorg = C1;
                }
            }
        }


        //===== Мощность больше 15    =====//
        if ( (Ni>15) && (Ni<=150) ){
            if (Sr == 1) {
                Zorg = C1;
            }
            if (Sr == 0) {
                Zorg = C1maxN * Ni;
            }



        }


        //===== Мощность больше 150    =====//
        if ( (Ni>150)  ){
            // alert(155);

            //Строительство не нужно//
            if (StrN==0){
                if (Sr == 1) {
                    Zorg = C1;
                }
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }
                var block = $(this).parents('.calc_form');
                block.find('.calc_bild').hide();



            }

            //Строительство  нужно//
            if (StrN==1){
                 alert("Yes");
                var block = $(this).parents('.calc_form');
                block.find('.calc_bild').show();





            }




        }


        //===============
 //Стоимость организационных мероприятий, не включающих в себя расходы на строительство объектов электросетевого хозяйства//
        //=====Цена с НДС =====//
        Zorg_itog=Zorg;
        var Zorg_itogR=Zorg_itog;
        Zorg_itog=Zorg_itog.toFixed(2);
        Zorg_itog=new Intl.NumberFormat('ru-RU').format(Zorg_itog);
        $('#Zorg_itog').text(Zorg_itog);

      //=====Цена   НДС =====//
        Zorgndc= (Zorg/120)*20;
        Zorgndc=Zorgndc.toFixed(2);
        Zorgndc=new Intl.NumberFormat('ru-RU').format(Zorgndc);
        $('#Zorgndc').text(Zorgndc);


       //====Цена  без   НДС
        Zorg_ndc=(Zorg/120)*100;
        Zorg_ndc=Zorg_ndc.toFixed(2);
        Zorg_ndc=new Intl.NumberFormat('ru-RU').format(Zorg_ndc);
        $('#Zorg_ndc').text(Zorg_ndc);


        //Стоимость мероприятий, связанных со строительством "последней мили"//
        //=====Цена с НДС =====//

        Zmerop_itog=+Zmerop_itog;
        var Zmerop_itogR=Zmerop_itog;
        Zmerop_itog=Zmerop_itog.toFixed(2);
        Zmerop_itog=new Intl.NumberFormat('ru-RU').format(Zmerop_itog);
        $('#Zmerop_itog').text(Zmerop_itog);

        //=====Цена   НДС =====//
        Zmeropnds= (Zmerop_itog/120)*20;
        Zmeropnds=Zmeropnds.toFixed(2);
        Zmeropnds=new Intl.NumberFormat('ru-RU').format(Zmeropnds);
        $('#Zmeropnds').text(Zmeropnds);

        //====Цена  без   НДС
        Zmerop_nds=(Zmerop_itog/120)*100;
        Zmerop_nds=Zmerop_nds.toFixed(2);
        Zmerop_nds=new Intl.NumberFormat('ru-RU').format(Zmerop_nds);
        $('#Zmerop_nds').text(Zmerop_nds);


//Ориентировочная стоимость технологического присоединения//
        //=====Цена с НДС =====//
        Zorg_itogR=+Zorg_itogR;
        // alert(Zorg_itogR);
        Zmerop_itogR=+Zmerop_itogR;
        // alert(Zmerop_itogR);

        Ztexn_itog=Zorg_itogR+Zmerop_itogR;
        var Ztexn_itogR=Ztexn_itog;
        // alert(Ztexn_itog);

        Ztexn_itog=Ztexn_itog.toFixed(2);
        Ztexn_itog=new Intl.NumberFormat('ru-RU').format(Ztexn_itog);
        $('#Ztexn_itog').text(Ztexn_itog);

        //=====Цена   НДС =====//
        Ztexnnds= (Ztexn_itogR/120)*20;
        Ztexnnds=Ztexnnds.toFixed(2);
        Ztexnnds=new Intl.NumberFormat('ru-RU').format(Ztexnnds);
        $('#Ztexnnds').text(Ztexnnds);

        //====Цена  без   НДС
        Ztexn_nds=(Ztexn_itogR/120)*100;
        Ztexn_nds=Ztexn_nds.toFixed(2);
        Ztexn_nds=new Intl.NumberFormat('ru-RU').format(Ztexn_nds);
        $('#Ztexn_nds').text(Ztexn_nds);


    }

});




