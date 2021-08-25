
$(document).ready(function() {
    document.getElementById('res_brocer').value=Zbroker;
    document.getElementById('res_remont').value=0;

    $("#phone").mask("+380(99)999-99-99");

    $('.popup-fade2').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }

    });



    //===== первоначальное заполнение поля Штат аукциона и смена выпадающего списка при смене Аукциона   =======//
    function selectadd(){

        $('#stat').find('option').remove();

        var typeauction=document.getElementById('type_auction').value;
        if (typeauction=='copart'){
            var opt12=document.getElementById('stat');
            for (var i = 0; i < copart.length; i++)  {
                $('<option value='+copart[i].val+' '+'data-port='+copart[i].port+ ' data-zkoss= '+copart[i].zkoss+ ' data-zpicap='+copart[i].zpicap+ ' data-zlogic='+ copart[i].zlogic+ ' >' + copart[i].name + '</option>').appendTo(opt12);
            }

        }
        if (typeauction=='iaai'){
            var opt12=document.getElementById('stat');
            for (var i = 0; i < iaai.length; i++)  {
                $('<option value='+iaai[i].val+' data-port='+iaai[i].port+ ' data-zkoss= '+iaai[i].zkoss+ ' data-zpicap='+iaai[i].zpicap+ ' data-zlogic='+ iaai[i].zlogic+ ' >' + iaai[i].name + '</option>').appendTo(opt12);
            }

        }

        var port1=document.getElementById('stat').value;
        document.getElementById('res_port1').value=port1;

        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
                     }
        else{
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');

        }

        document.getElementById('res_port2').value=zmore;


        var potrimport=$("#stat option:selected").attr('data-port');

        $('#import').find('option').remove();
        var opt11=document.getElementById('import');
        $('<option value='+potrimport+'  >' + potrimport + '</option>').appendTo(opt11);
        document.getElementById('import2').value='Houston';


        var zlogict=0;
        var logict=document.getElementById('logict').value;

        var logict=document.getElementById('logict').value;

        if (logict==0){
            zlogict=0;


        }
        else{
            zlogict=document.getElementById('logict').value;
        }
        document.getElementById('res_logis').value=zlogict;
        //document.getElementById('res_logis').value=zlogict;



       // document.getElementById('res_remont').value=Zremont;



    };

    selectadd();

    //===== Расчет Аукционного сбора   =======//
    function tsbor(){
        var typeauction=document.getElementById('type_auction').value;

        var prise1=document.getElementById('lot_price').value;
        var Zsbor=0;

        if (typeauction=='copart'){
            if(prise1<100){
                Zsbor=1;
            }
            if((prise1>=100)&&(prise1<200)){
                Zsbor=25;
            }
            if((prise1>=200)&&(prise1<300)){
                Zsbor=50;
            }
            if((prise1>=300)&&(prise1<350)){
                Zsbor=75;
            }
            if((prise1>=350)&&(prise1<400)){
                Zsbor=75;
            }
            if((prise1>=400)&&(prise1<500)){
                Zsbor=110;
            }
            if((prise1>=500)&&(prise1<550)){
                Zsbor=125;
            }
            if((prise1>=550)&&(prise1<600)){
                Zsbor=130;
            }

            if((prise1>=600)&&(prise1<700)){
                Zsbor=140;
            }
            if((prise1>=700)&&(prise1<800)){
                Zsbor=155;
            }
            if((prise1>=800)&&(prise1<900)){
                Zsbor=170;
            }
            if((prise1>=900)&&(prise1<1000)){
                Zsbor=185;
            }
            if((prise1>=1000)&&(prise1<1200)){
                Zsbor=200;
            }
            if((prise1>=1200)&&(prise1<1300)){
                Zsbor=225;
            }
            if((prise1>=1300)&&(prise1<1400)){
                Zsbor=225;
            }
            if((prise1>=1400)&&(prise1<1600)){
                Zsbor=250;
            }
            if((prise1>=1600)&&(prise1<1800)){
                Zsbor=275;
            }
            if((prise1>=1800)&&(prise1<2000)){
                Zsbor=300;
            }
            if((prise1>=2000)&&(prise1<2500)){
                Zsbor=325;
            }
            if((prise1>=2500)&&(prise1<3000)){
                Zsbor=350;
            }
            if((prise1>=3000)&&(prise1<5000)){
                Zsbor=400;
            }
            if((prise1>=5000)&&(prise1<7000)){
                Zsbor=425;
            }
            if((prise1>=7000)&&(prise1<10000)){
                Zsbor=450;
            }
            if((prise1>=10000)&&(prise1<15000)){
                Zsbor=500;
            }
            if((prise1>=15000)&&(prise1<20000)){
                Zsbor=550;
            }
            if((prise1>=20000)&&(prise1<25000)){
                Zsbor=600;
            }
            if((prise1>=25000)&&(prise1<30000)){
                Zsbor=650;
            }
            if((prise1>=30000)&&(prise1<35000)){
                Zsbor=700;
            }
            if(prise1>=35000){
                Zsbor=(prise1/100)*2;
            }
            Zsbor=Zsbor+99+59;
        }

        if (typeauction=='iaai'){

            if(prise1<100){
                Zsbor=1;
            }
            if((prise1>=100)&&(prise1<200)){
                Zsbor=40;
            }
            if((prise1>=200)&&(prise1<300)){
                Zsbor=60;
            }
            if((prise1>=300)&&(prise1<350)){
                Zsbor=75;
            }
            if((prise1>=350)&&(prise1<400)){
                Zsbor=90;
            }
            if((prise1>=400)&&(prise1<500)){
                Zsbor=100;
            }
            if((prise1>=500)&&(prise1<600)){
                Zsbor=130;
            }
            if((prise1>=600)&&(prise1<700)){
                Zsbor=145;
            }
            if((prise1>=700)&&(prise1<800)){
                Zsbor=160;
            }
            if((prise1>=800)&&(prise1<900)){
                Zsbor=175;
            }
            if((prise1>=900)&&(prise1<1000)){
                Zsbor=190;
            }
            if((prise1>=1000)&&(prise1<1100)){
                Zsbor=205;
            }
            if((prise1>=1100)&&(prise1<1200)){
                Zsbor=220;
            }
            if((prise1>=1200)&&(prise1<1300)){
                Zsbor=230;
            }
            if((prise1>=1300)&&(prise1<1400)){
                Zsbor=240;
            }
            if((prise1>=1400)&&(prise1<1500)){
                Zsbor=255;
            }
            if((prise1>=1500)&&(prise1<1600)){
                Zsbor=270;
            }
            if((prise1>=1600)&&(prise1<1700)){
                Zsbor=290;
            }
            if((prise1>=1700)&&(prise1<1800)){
                Zsbor=300;
            }
            if((prise1>=1800)&&(prise1<2000)){
                Zsbor=310;
            }
            if((prise1>=2000)&&(prise1<2200)){
                Zsbor=325;
            }
            if((prise1>=2200)&&(prise1<2400)){
                Zsbor=330;
            }
            if((prise1>=2400)&&(prise1<2500)){
                Zsbor=345;
            }
            if((prise1>=2500)&&(prise1<2600)){
                Zsbor=360;
            }
            if((prise1>=2600)&&(prise1<3000)){
                Zsbor=385;
            }

            if((prise1>=3000)&&(prise1<3500)){
                Zsbor=400;
            }
            if((prise1>=3500)&&(prise1<4000)){
                Zsbor=450;
            }
            if((prise1>=4000)&&(prise1<4500)){
                Zsbor=475;
            }
            if((prise1>=4500)&&(prise1<5000)){
                Zsbor=500;
            }
            if((prise1>=5000)&&(prise1<6000)){
                Zsbor=520;
            }
            if((prise1>=6000)&&(prise1<7500)){
                Zsbor=550;
            }

            if((prise1>=7500)&&(prise1<20000)){
                Zsbor=500+(prise1/100);
            }

            if(prise1>20000){
                Zsbor=4*(prise1/100);
            }

            var Zproksi=0;
            if((prise1>=0)&&(prise1<100)){
                Zproksi=0;
            }
            if((prise1>=100)&&(prise1<500)){
                Zproksi=39;
            }
            if((prise1>=500)&&(prise1<1000)){
                Zproksi=49;
            }
            if((prise1>=1000)&&(prise1<1500)){
                Zproksi=69;
            }
            if((prise1>=1500)&&(prise1<2000)){
                Zproksi=79;
            }
            if((prise1>=2000)&&(prise1<4000)){
                Zproksi=89;
            }
            if((prise1>=4000)&&(prise1<6000)){
                Zproksi=99;
            }
            if((prise1>=6000)&&(prise1<8000)){
                Zproksi=119;
            }
            if(prise1>=8000){
                Zproksi=129;
            }

            Zsbor=Zsbor+Zproksi+59;

            // Zsbor=Zsbor+89+59;


        }
        Zsbor=Math.ceil(Zsbor);
        document.getElementById('res_auction').value=Zsbor;

    }


    //===== Расчет Страховка от полной гибели**   =======//
    function strax(){
       // alert(22222)
        if ( $('#strah').is(':checked') ) {
            var v1=document.getElementById('res_lot').value;
            var v2=document.getElementById('res_auction').value;
            //var v3=document.getElementById('res_port1').value;
            var Zstr=(v1*1+v2*1)*0.0135;
            Zstr=Math.ceil(Zstr);
         //   alert(42222)

            document.getElementById('res_strah').value=Zstr;
        } else {
            document.getElementById('res_strah').value=0;
          //  alert(042222)
        }

    };


    //===== Расчет Страховка авто от повреждений   =======//
    function strax2(){
         if ( $('#strah2').is(':checked') ) {
            var v1=document.getElementById('res_lot').value;
            var v2=document.getElementById('res_auction').value;
          //  var v3=document.getElementById('res_port1').value;
            var Zstr=(v1*1+v2*1)*0.015;
            Zstr=Math.floor(Zstr);
            document.getElementById('res_strah2').value=Zstr;
        } else {
            document.getElementById('res_strah2').value=0;
        }

    };

    //===== Расчет Tаможенных платежей   =======//
    function tamosh(){


     //===== Расчет Пошлина   =======//
            var v1=document.getElementById('res_lot').value;
            var v2=document.getElementById('res_auction').value;
            var v3=document.getElementById('res_ekcport').value;
            var v4=document.getElementById('res_port2').value;

            var Zposhlina=(v1*1+v2*1+v3*1+v4*1)*0.1;
        //Zposhlina=Math.floor(Zposhlina);
       // alert(Zposhlina);
      //  $('#poshlina').text(Zposhlina);

        //===== Расчет Акцизный сбор   =======//
        var Zakz=0;
        var tupedva=document.getElementById('tupedv').value;

        var Vdva=document.getElementById('Vdv').value;

        var jar1a=document.getElementById('jar1').value;

        var currentTime = new Date();
        var yeart = currentTime.getFullYear();

      //  alert(yeart);
        var t=yeart-jar1a;

        if (t==0){
            t=1;
        }
        if (t>=15){
            t=15;
        }
        if ((tupedva==1) ||(tupedva==3)){
            Zakz=50*t*(Vdva/1000);
            if(Zakz<1){Zakz=1}

                }
        if (tupedva==2) {
            Zakz=75*t*(Vdva/1000);
            if(Zakz<1){Zakz=1}
        }
        if (tupedva==4) {
            Zakz=(Vdva)*1.2;
            Zposhlina=0;
          //  alert(Zakz)
        }

        //===== Расчет НДС   =======//
         var NDS=0;

        NDS=0.2*(v1*1+v2*1+v3*1+v4*1+Zakz+Zposhlina);
        if (tupedva==4) {
            NDS=0;
        }



        Zposhlina=Math.ceil(Zposhlina);
        Zakz=Math.ceil(Zakz);
        NDS=Math.ceil(NDS);

        var ZTitog=Zposhlina+Zakz+NDS;

        $('#poshlina').text(Zposhlina);
        $('#akzis').text(Zakz);
        $('#nds').text(NDS);
        $('#ZTitog').text(ZTitog);
        if ( $('#tamog').is(':checked') ) {

            document.getElementById('res_tamog').value=ZTitog;
        } else {
            document.getElementById('res_tamog').value=0;
        }
       // document.getElementById('res_tamog').value=ZTitog;
        Zena();
    };


    //===== Расчет Итговой цены   =======//
    function Zena(){
        var Zinog=0;

        var z1=document.getElementById('res_lot').value;
        var z2=document.getElementById('res_auction').value;
        var z3=document.getElementById('res_ekcport').value;
        var z4=document.getElementById('res_port1').value;
        var z5=document.getElementById('res_port2').value;
        var z6=document.getElementById('res_ukr').value;
        var z7=document.getElementById('res_strah').value;
        var z8=document.getElementById('res_strah2').value;
        var z9=document.getElementById('res_brocer').value;
        var z10=document.getElementById('res_remont').value;
        var z11=document.getElementById('res_tamog').value;
        var z12=document.getElementById('res_logis').value;
        Zinog=z1*1+z2*1+z3*1+z4*1+z5*1+z6*1+z7*1+z8*1+z9*1+z10*1+z11*1+z12*1;



        Zinog=Math.floor(Zinog);
        document.getElementById('res_itog').value=Zinog;

    };

//===== В поле Год выпуска выбор   =======//
    $('#jar1').on('change', function () {
        tamosh();
    });
//===== В поле Тип двигателя выбор   =======//
    $('#tupedv').on('change', function () {
        tamosh();
    });
    //===== В поле Щбъем двигателя изменения   =======//
    $("#Vdv").on("change keyup paste click", function(){
        tamosh();
    });



    //===== В поле Стоимость лота только цифры   =======//
    $('#lot_price').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }

        var prise1=document.getElementById('lot_price').value;
        document.getElementById('res_lot').value=prise1;
    });

//===== В поле Объем двигателя только цифры   =======//
    $('#Vdv').keypress(function (e) {
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }


    });


    //===== В поле Стоимость лота изменение значения   =======//
    $("#lot_price").on("change keyup paste click", function(){
        var prise1=document.getElementById('lot_price').value;
        document.getElementById('res_lot').value=prise1;
        tsbor();
        strax();
        strax2();
        tamosh();
        Zena();
    });


    //===== В поле Тип аукциона изменение значения   =======//
    $('#type_auction').on('change', function () {

        tsbor();
        selectadd();
        strax();
        strax2();
        tamosh();
        Zena();

    });

    //===== В поле Штат аукциона изменение значения   =======//
    $('#stat').on('change', function () {

        var port1=document.getElementById('stat').value;
        document.getElementById('res_port1').value=port1;

        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
        }
        else{
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');

        }

        document.getElementById('res_port2').value=zmore;


        var potrimport=$("#stat option:selected").attr('data-port');
        var PImport='';
        if (potrimport=='QC'){
            PImport='Montreal';
        }
        if (potrimport=='ON'){
            PImport='Toronto';
        }
        if (potrimport=='CA'){
            PImport='Los Angeles';
        }
        if (potrimport=='WA'){
            PImport='Los Angeles';
        }
        if (potrimport=='NJ'){
            PImport='New Jersey';
        }
        if (potrimport=='TX'){
            PImport='Houston';
        }
        if (potrimport=='FL'){
            PImport='Miami';
        }
        if (potrimport=='GA'){
            PImport='Savannah';
        }

        $('#import').find('option').remove();
        var opt11=document.getElementById('import');
        $('<option value='+potrimport+'  >' + potrimport + '</option>').appendTo(opt11);
        document.getElementById('import2').value=PImport;

        Zena();

    });

    //===== В поле Тип авто изменение значения   =======//
    $('#type_avto').on('change', function () {
        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
        }
        else{
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');

        }

        document.getElementById('res_port2').value=zmore;
        tamosh();
        Zena();

    });

    //===== В поле Услуги InterLogistic  изменение значения   =======//
    $('#logict').on('change', function () {
            var zlogict=0;
        var zukr=0;
         var logict=document.getElementById('logict').value;

        if (logict==0){
            zlogict=0;


        }
        else{
            zlogict=document.getElementById('logict').value;
        }
        document.getElementById('res_logis').value=zlogict;

        var logict2=document.getElementById('logict').value;

        if (logict2>0){
            $('.mystate').addClass('myactive');

            $('#state').find('option').remove();
            var opt10=document.getElementById('state');

            for (var i = 0; i < state.length; i++)  {
                $('<option value='+state[i].val+'>' + state[i].name + '</option>').appendTo(opt10);
            }




        }
        else{
            $('.mystate').removeClass('myactive');
            document.getElementById('res_ukr').value=zukr;
        }

        if (logict2==750){
        document.getElementById('res_remont').value=Zremont;
        }
        else {
            document.getElementById('res_remont').value=0;
        }





        Zena();
     });

    //===== В поле Услуги InterLogistic выбор своего города  изменение значения   =======//

    $('#state').on('change', function () {

        var stste2=document.getElementById('state').value;
         document.getElementById('res_ukr').value=stste2;
        Zena();

    });


    //===== В поле "Страховка от полной гибели**"  изменение значения   =======//

    $('#strahv').on('click', function () {
          strax();
        Zena();
    });

    //===== В поле "Страховка авто от повреждений"  изменение значения   =======//

    $('#strahv2').on('click', function () {
        strax2();
        Zena();
    });


    //===== В поле "Услуги брокера и экспедитора"  изменение значения   =======//

    //$('#brocerv').on('click', function () {
    //
    //    if ( $('#brocer').is(':checked') ) {
    //
    //        document.getElementById('res_brocer').value=Zbroker;
    //    } else {
    //        document.getElementById('res_brocer').value=0;
    //    }
    //    Zena();
    //
    //
    //});

    //===== В поле "Сопровождение по ремонту и закупка зап.частей"  изменение значения   =======//

    //$('#remontv').on('click', function () {
    //
    //    if ( $('#remont').is(':checked') ) {
    //
    //        document.getElementById('res_remont').value=Zremont;
    //    } else {
    //        document.getElementById('res_remont').value=0;
    //    }
    //    Zena();
    //
    //});


    //===== В поле "Таможенный платеж"  изменение значения   =======//

    $('#tamogv').on('click', function () {

        if ( $('#tamog').is(':checked') ) {

            $('.calculator_block_left3_TZ').addClass('calculator_active');
            tamosh();

          //  Popup1();
        } else {
            document.getElementById('res_tamog').value=0;
            $('.calculator_block_left3_TZ').removeClass('calculator_active');
        }
        Zena();

    });

    Zena();




    $('#btn-calc').click(function () {

        $('.popup-fade2').fadeIn();
         return false;

    });





});



