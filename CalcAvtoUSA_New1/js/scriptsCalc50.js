var Zbroker2, Zremont2,Zsbor,Zproksi;
//Zproksi=0;

$(document).ready(function() {
    function Brok(){
        //alert(23)
      //  console.log('============');
      //  console.log(Zbroker2);
        document.getElementById('res_brocer').value=Zbroker2;

        // Первоначальное заполнение " Сопровождение по ремонту и закупка зап.частей";
        document.getElementById('res_remont').value=0;
    }


    BrokMore();

    function BrokMore() {

        // Первоначальное заполнение " Услуги брокера и экспедитора. Вычитываем значение из файла price_copart.xlsx
        // Данные (цена) для поля Услуги брокера хранятся в ячейке H25;


        var typavto = document.getElementById('type_avto').value;


        var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/price_copart.xlsx";
        // alert(url);
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";

        oReq.onload = function (e) {
            var arraybuffer = oReq.response;

            var data = new Uint8Array(arraybuffer);

            var arr = new Array();
            for (var i = 0; i != data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);

            }

            var bstr = arr.join("");

            var cfb = XLSX.read(bstr, {type: 'binary'});


            //=======================================//
            var workbook = XLSX.read(bstr, {type: "binary"});
            var first_sheet_name = workbook.SheetNames[0];

            var worksheet = workbook.Sheets[first_sheet_name];


            var address_of_cell = 'H25';
            var desired_cell = worksheet[address_of_cell];
            var desired_value = desired_cell.v;
            Zbroker2 = desired_value;
            Zbroker2 = Zbroker2 * 1;
           // console.log(Zbroker2);
            // alert(Zbroker2);

            var address_of_cell2 = 'H26';
            var desired_cell2 = worksheet[address_of_cell2];
            Zremont2 = desired_cell2.v;
            Zremont2 = Zremont2 * 1;
           // console.log(Zremont2);

            if (typavto=='pickup'){
                Zbroker2=Zbroker2+200;
              //  console.log('1'+Zbroker2);
                Brok();
            }
            else{
                Zbroker2=Zbroker2*1;
              //  console.log('2'+Zbroker2);
                Brok();
            }


        };

        oReq.send();

        // if (typavto=='pickup'){
        //     Zbroker2=Zbroker2+200;
        //     console.log('1'+Zremont2);
        //     Brok();
        // }
        // else{
        //     Zbroker2=Zbroker2*1;
        //     console.log('2'+Zremont2);
        //     Brok();
        // }




    }




   // var typavto = document.getElementById('type_avto').value;


    // if (typavto=='pickup'){
    //     Zbroker2=Zbroker2+200;
    //     Brok();
    // }
    // else{
    //     Zbroker2=Zbroker2*1;
    //     Brok();
    // }
    //console.log('============');
    //console.log(Zbroker2);
    //console.log(Zremont2);
    //console.log('============');

    // function Brok(){
    //     alert(1)
    //     console.log('============');
    //     console.log(Zbroker2);
    //     document.getElementById('res_brocer').value=Zbroker2;
    //
    //     // Первоначальное заполнение " Сопровождение по ремонту и закупка зап.частей";
    //     document.getElementById('res_remont').value=0;
    // }

    //========================
   // document.getElementById('res_brocer').value=700;

    // Первоначальное заполнение " Сопровождение по ремонту и закупка зап.частей";
  //  document.getElementById('res_remont').value=0;

    // Задаем маску телефона для формы заказа авто;
    $("#phone").mask("+380(99)999-99-99");

    // Закрываем форму заказа авто при клике на любом месте кроме формы;
    $('.popup-fade2').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }

    });



    function Port() {
        //alert(26);
        //==Заполнение  поля "Доставка в порт (суша, по США)"
        var port1=document.getElementById('stat').value;
       // console.log('=======');
        //console.log(port1);
        document.getElementById('res_port1').value=port1;
        var typavto=document.getElementById('type_avto').value;
        if (typavto=='pickup'){
            port1=port1*1.5;
        }
        //==Заполнение  поля "Международная доставка (море)"
        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
        }
        if (type_avto=='pickup'){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');
            zmore=zmore*2;

        }
        if((type_avto=='passenger')||(type_avto=='motorcycle')){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');
        }
       // console.log(zmore)
        document.getElementById('res_port2').value=zmore;

        //==Заполнение  поля   "Из порта в США "
        var potrimport=$("#stat option:selected").attr('data-port');

        $('#import').find('option').remove();
        var opt11=document.getElementById('import');
        $('<option value='+potrimport+'  >' + potrimport + '</option>').appendTo(opt11);
        document.getElementById('import2').value='Houston';

        //==Заполнение  поля   "Комиссия My America"
        var zlogict=0;
        var logict=document.getElementById('logict').value;


        if (logict==0){
            zlogict=0;
        }
        else{
            zlogict=document.getElementById('logict').value;
        }
        document.getElementById('res_logis').value=zlogict;



    };




    //==Функция заполнение поля Штат аукциона и смена выпадающего списка при смене Аукциона и при открытие сайта   =======//
    function selectadd(){

        $('#stat').find('option').remove();//Удаляем предыдущие данные

        var typeauction=document.getElementById('type_auction').value;
        //==Заполнение  выпадающего списка Штат аукциона для аукциона СОРАRT


        if (typeauction=='copart'){

            var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/price_copart.xlsx";

            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.responseType = "arraybuffer";
            oReq.onload = function(e) {
                var arraybuffer = oReq.response;
                var data = new Uint8Array(arraybuffer);

                var arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                var bstr = arr.join("");
                var cfb = XLSX.read(bstr, { type: 'binary' });

                var workbook = XLSX.read(bstr, {type:"binary"});

                var first_sheet_name = workbook.SheetNames[0];

                var worksheet = workbook.Sheets[first_sheet_name];

               // var typearbd=$("#typearb option:selected").html();

                var nameauction = [];
                var valauc = [];
                var portau = [];
                var Zkross = [];
                var Zpikap = [];
                var Zlogic= [];


                for (var i = 2; i != 300; i++)  {
                    var address_of_cell = 'A' +i;
                    var desired_cell = worksheet[address_of_cell];

                    if (typeof(desired_cell) !== 'undefined') {
                       // var TR = desired_cell.v;
                        var address_of_cell2 = 'A' +i;
                        var desired_cell2 = worksheet[address_of_cell2];
                        var Name = desired_cell2.v;
                      //  console.log(Name);

                        nameauction.push(Name);

                       // if (typearbd==TR){

                            var address_of_cell3 = 'C' +i;
                            var desired_cell3 = worksheet[address_of_cell3];
                            var Va = desired_cell3.v;

                            valauc.push(Va);
                        //console.log(Va);


                            var address_of_cell4 = 'B' +i;
                            var desired_cell4 = worksheet[address_of_cell4];
                            var Pau = desired_cell4.v;
                            portau.push(Pau);

                            if (Pau=='QC'){
                                var address_of_cell5 = 'I3';
                                var address_of_cell6 = 'J3';
                            }

                            if (Pau=='ON'){
                                var address_of_cell5 = 'I4';
                                var address_of_cell6 = 'J4';
                            }
                        if (Pau=='CA'){
                            var address_of_cell5 = 'I5';
                            var address_of_cell6 = 'J5';
                        }
                        if (Pau=='NJ'){
                            var address_of_cell5 = 'I6';
                            var address_of_cell6 = 'J6';
                        }
                        if (Pau=='TX'){
                            var address_of_cell5 = 'I7';
                            var address_of_cell6 = 'J7';
                        }
                        if (Pau=='FL'){
                            var address_of_cell5 = 'I8';
                            var address_of_cell6 = 'J8';
                        }
                        if (Pau=='GA'){
                            var address_of_cell5 = 'I9';
                            var address_of_cell6 = 'J9';
                        }
                        if (Pau=='WA'){
                            var address_of_cell5 = 'I10';
                            var address_of_cell6 = 'J10';
                        }



                           // var address_of_cell5 = 'E' +i;
                            var desired_cell5 = worksheet[address_of_cell5];
                        var KRos = desired_cell5.v;
                           // var KRos = desired_cell5.v;
                        //console.log(KRos);
                            Zkross.push(KRos);


                           // var address_of_cell6 = 'F' +i;
                            var desired_cell6 = worksheet[address_of_cell6];
                            var Zpik = desired_cell6.v;
                        //console.log(Zpik);
                            Zpikap.push(Zpik);

                            var address_of_cell7 = 'D' +i;
                            var desired_cell7 = worksheet[address_of_cell7];
                            var Nlog = desired_cell7.v;
                        if (Nlog=='ALL'){
                            var address_of_cell8 = 'J20';

                        }
                        if (Nlog=='AL'){
                            var address_of_cell8 = 'J17';

                        }
                        if (Nlog=='MI'){
                            var address_of_cell8 = 'J18';

                        }
                        if (Nlog=='WI'){
                            var address_of_cell8 = 'J19';

                        }
                        var desired_cell8 = worksheet[address_of_cell8];
                        var Zl = desired_cell8.v;
                        Zlogic.push(Zl);
                       // }
                    }
                    else{
                        //return
                        break;
                    }
                };

                var opt12=document.getElementById('stat');
                for (var i = 0; i < Zkross.length; i++)  {
                    $('<option value='+valauc[i]+' '+'data-port='+portau[i]+ ' data-zkoss= '+Zkross[i]+ ' data-zpicap='+Zpikap[i]+ ' data-zlogic='+ Zlogic[i]+ ' >' + nameauction[i] + '</option>').appendTo(opt12);
                }


                $("#stat:first").focus();
                Port();
            }
            oReq.send();
            //Port();


        }







        //==Заполнение  выпадающего списка Штат аукциона для аукциона IAAI
        if (typeauction=='iaai'){

            var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/price_iaai.xlsx";
            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.responseType = "arraybuffer";
            oReq.onload = function(e) {
                var arraybuffer = oReq.response;
                var data = new Uint8Array(arraybuffer);

                var arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                var bstr = arr.join("");
                var cfb = XLSX.read(bstr, { type: 'binary' });

                var workbook = XLSX.read(bstr, {type:"binary"});

                var first_sheet_name = workbook.SheetNames[0];

                var worksheet = workbook.Sheets[first_sheet_name];

                // var typearbd=$("#typearb option:selected").html();

                var nameauctioni = [];
                var valauci = [];
                var portaui = [];
                var Zkrossi = [];
                var Zpikapi = [];
                var Zlogici= [];
               // console.log('============');

                for (var i = 2; i != 300; i++)  {
                    var address_of_cell = 'A' +i;
                    var desired_cell = worksheet[address_of_cell];

                    if (typeof(desired_cell) !== 'undefined') {
                        // var TR = desired_cell.v;
                        var address_of_cell2 = 'A' +i;
                        var desired_cell2 = worksheet[address_of_cell2];
                        var Name = desired_cell2.v;
                       // console.log(Name);
                        nameauctioni.push(Name);

                        // if (typearbd==TR){


                        var address_of_cell3 = 'C' +i;
                        var desired_cell3 = worksheet[address_of_cell3];
                        var Va = desired_cell3.v;
                       // console.log(Va);
                        valauci.push(Va);

                        var address_of_cell4 = 'B' +i;
                        var desired_cell4 = worksheet[address_of_cell4];
                        var Pau = desired_cell4.v;
                       // console.log(Pau);
                        portaui.push(Pau);

                        if (Pau=='QC'){
                            var address_of_cell5 = 'I3';
                            var address_of_cell6 = 'I3';
                        }

                        if (Pau=='ON'){
                            var address_of_cell5 = 'I4';
                            var address_of_cell6 = 'I4';
                        }
                        if (Pau=='CA'){
                            var address_of_cell5 = 'I5';
                            var address_of_cell6 = 'I5';
                        }
                        if (Pau=='NJ'){
                            var address_of_cell5 = 'I6';
                            var address_of_cell6 = 'I6';
                        }
                        if (Pau=='TX'){
                            var address_of_cell5 = 'I7';
                            var address_of_cell6 = 'I7';
                        }
                        if (Pau=='FL'){
                            var address_of_cell5 = 'I8';
                            var address_of_cell6 = 'I8';
                        }
                        if (Pau=='GA'){
                            var address_of_cell5 = 'I9';
                            var address_of_cell6 = 'I9';
                        }
                        if (Pau=='WA'){
                            var address_of_cell5 = 'I10';
                            var address_of_cell6 = 'I10';
                        }



                        // var address_of_cell5 = 'E' +i;
                        var desired_cell5 = worksheet[address_of_cell5];
                        var KRos = desired_cell5.v;
                        Zkrossi.push(KRos);


                        // var address_of_cell6 = 'F' +i;
                        var desired_cell6 = worksheet[address_of_cell6];
                        var Zpik = desired_cell6.v;
                        Zpikapi.push(Zpik);

                        var address_of_cell7 = 'D' +i;
                        var desired_cell7 = worksheet[address_of_cell7];
                        var Nlog = desired_cell7.v;
                        if (Nlog=='ALL'){
                            var address_of_cell8 = 'J19';

                        }
                        if (Nlog=='AL'){
                            var address_of_cell8 = 'J16';

                        }
                        if (Nlog=='MI'){
                            var address_of_cell8 = 'J17';

                        }
                        if (Nlog=='WI'){
                            var address_of_cell8 = 'J18';

                        }
                        var desired_cell8 = worksheet[address_of_cell8];
                        var Zl = desired_cell8.v;
                        Zlogici.push(Zl);
                        //console.log(Zl);
                        // }
                    }
                    else{
                        break;
                    }
                };

                var opt12=document.getElementById('stat');
                for (var i = 0; i < Zkrossi.length; i++)  {
                    $('<option value='+valauci[i]+' '+'data-port='+portaui[i]+ ' data-zkoss= '+Zkrossi[i]+ ' data-zpicap='+Zpikapi[i]+ ' data-zlogic='+ Zlogici[i]+ ' >' + nameauctioni[i] + '</option>').appendTo(opt12);
                }

                $("#stat:first").focus();
                Port();
            }
            oReq.send();



            // var opt12=document.getElementById('stat');
            // for (var i = 0; i < iaai.length; i++)  {
            //     $('<option value='+iaai[i].val+' data-port='+iaai[i].port+ ' data-zkoss= '+iaai[i].zkoss+ ' data-zpicap='+iaai[i].zpicap+ ' data-zlogic='+ iaai[i].zlogic+ ' >' + iaai[i].name + '</option>').appendTo(opt12);
            // }

        };




     //    //==Заполнение  поля "Доставка в порт (суша, по США)"
     //    var port1=document.getElementById('stat').value;
     //    document.getElementById('res_port1').value=port1;
     //    var typavto=document.getElementById('type_avto').value;
     //    if (typavto=='pickup'){
     //        port1=port1*1.5;
     //    }
     //    //==Заполнение  поля "Международная доставка (море)"
     //    var zmore=0;
     //    var type_avto=document.getElementById('type_avto').value;
     //    if(type_avto=='crossover'){
     //        zmore=$("#stat option:selected").attr('data-zkoss');
     //                 }
     //    if (type_avto=='pickup'){
     //        zmore= zmore=$("#stat option:selected").attr('data-zpicap');
     //        zmore=zmore*2;
     //
     //    }
     //    if((type_avto=='passenger')||(type_avto=='motorcycle')){
     //        zmore= zmore=$("#stat option:selected").attr('data-zpicap');
     //    }
     //
     //    document.getElementById('res_port2').value=zmore;
     //
     //    //==Заполнение  поля   "Из порта в США "
     //    var potrimport=$("#stat option:selected").attr('data-port');
     //
     //    $('#import').find('option').remove();
     //    var opt11=document.getElementById('import');
     //    $('<option value='+potrimport+'  >' + potrimport + '</option>').appendTo(opt11);
     //    document.getElementById('import2').value='Houston';
     //
     // //==Заполнение  поля   "Комиссия My America"
     //    var zlogict=0;
     //    var logict=document.getElementById('logict').value;
     //
     //
     //    if (logict==0){
     //        zlogict=0;
     //    }
     //    else{
     //        zlogict=document.getElementById('logict').value;
     //    }
     //    document.getElementById('res_logis').value=zlogict;
     //   Port();

    }

    // function Port() {
    //     //==Заполнение  поля "Доставка в порт (суша, по США)"
    //     var port1=document.getElementById('stat').value;
    //     console.log('=======');
    //     console.log(port1);
    //     document.getElementById('res_port1').value=port1;
    //     var typavto=document.getElementById('type_avto').value;
    //     if (typavto=='pickup'){
    //         port1=port1*1.5;
    //     }
    //     //==Заполнение  поля "Международная доставка (море)"
    //     var zmore=0;
    //     var type_avto=document.getElementById('type_avto').value;
    //     if(type_avto=='crossover'){
    //         zmore=$("#stat option:selected").attr('data-zkoss');
    //     }
    //     if (type_avto=='pickup'){
    //         zmore= zmore=$("#stat option:selected").attr('data-zpicap');
    //         zmore=zmore*2;
    //
    //     }
    //     if((type_avto=='passenger')||(type_avto=='motorcycle')){
    //         zmore= zmore=$("#stat option:selected").attr('data-zpicap');
    //     }
    //     console.log(zmore)
    //     document.getElementById('res_port2').value=zmore;
    //
    //     //==Заполнение  поля   "Из порта в США "
    //     var potrimport=$("#stat option:selected").attr('data-port');
    //
    //     $('#import').find('option').remove();
    //     var opt11=document.getElementById('import');
    //     $('<option value='+potrimport+'  >' + potrimport + '</option>').appendTo(opt11);
    //     document.getElementById('import2').value='Houston';
    //
    //     //==Заполнение  поля   "Комиссия My America"
    //     var zlogict=0;
    //     var logict=document.getElementById('logict').value;
    //
    //
    //     if (logict==0){
    //         zlogict=0;
    //     }
    //     else{
    //         zlogict=document.getElementById('logict').value;
    //     }
    //     document.getElementById('res_logis').value=zlogict;
    //
    //
    //
    // };
    //





    //==Вызов Функции заполнения поля Штат аукциона и смена выпадающего списка при открытие сайта

    selectadd();



    //=====Функция  Расчета Аукционного сбора   =======//

    function sbor1(){
        var prise1 = document.getElementById('lot_price').value;
        if(Zsbor<1){
            Zsbor=prise1*Zsbor;
           // sbor1();
        }
       //  alert(27);
       //console.log(Zsbor);
        console.log('====Copar++=====');
        console.log(Zsbor);


        Zsbor=Zsbor+99+59;
       /// console.log(Zsbor);
        Zsbor=Math.ceil(Zsbor);
        document.getElementById('res_auction').value=Zsbor;
    };

    function sbor2(){
        alert('iaai_3')
        var prise1 = document.getElementById('lot_price').value;
       // console.log('=======');
       // alert(38);
        if(Zsbor<1){
            Zsbor=prise1*Zsbor;
            // sbor1();
        }
        console.log('====iaai+=====');
        console.log(Zsbor);
        console.log(Zproksi);

        Zsbor=Zsbor+Zproksi+59;


    Zsbor=Math.ceil(Zsbor);
    document.getElementById('res_auction').value=Zsbor;


    };


    function tsbor1() {
        console.log('====Copar+N=====');
        var prise1 = document.getElementById('lot_price').value;
        var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/sbor_copart.xlsx";
        var oReq = new XMLHttpRequest();
        oReq.open("GET", url, true);
        oReq.responseType = "arraybuffer";
        oReq.onload = function(e) {
            var arraybuffer = oReq.response;
            var data = new Uint8Array(arraybuffer);

            var arr = new Array();
            for (var i = 0; i != data.length; ++i) {
                arr[i] = String.fromCharCode(data[i]);
            }
            var bstr = arr.join("");
            var cfb = XLSX.read(bstr, { type: 'binary' });

            var workbook = XLSX.read(bstr, {type:"binary"});

            var first_sheet_name = workbook.SheetNames[0];

            var worksheet = workbook.Sheets[first_sheet_name];

            // var typearbd=$("#typearb option:selected").html();



            for (var i = 2; i != 300; i++)  {
                var address_of_cell = 'A' +i;
                var desired_cell = worksheet[address_of_cell];

                if (typeof(desired_cell) !== 'undefined') {

                    var address_of_cell2 = 'A' +i;
                    var desired_cell2 = worksheet[address_of_cell2];
                    var Zlotmin = desired_cell2.v;
                    Zlotmin=Zlotmin*1;


                    var address_of_cell3 = 'B' +i;
                    var desired_cell3 = worksheet[address_of_cell3];
                    var Zlotmax = desired_cell3.v;
                    Zlotmax=Zlotmax*1;

                   // console.log(Zlotmin);



                    if ((prise1>=Zlotmin)&&(prise1<Zlotmax)){
                        var address_of_cell4 = 'C' +i;
                        var desired_cell4 = worksheet[address_of_cell4];
                        Zsbor = desired_cell4.v;
                       // console.log('=========');
                       //  console.log(prise1);
                      //  console.log(Zlotmin);
                       // console.log(Zlotmax);
                      //  console.log(Zsbor);
                     sbor1();
                    }

                    // if(Zsbor<0){
                    //     Zsbor=prise1*Zsbor;
                    //     sbor1();
                    // }
                    // console.log(Zsbor);

                }
                else{
                    //return;
                    break;
                }
            };



        }
       // sbor1();
        oReq.send();
       // sbor1();


    }


    function tsbor2() {
        var prise1 = document.getElementById('lot_price').value;
        function tproksi_iaai() {
            alert('iaai_2')
            var prise1 = document.getElementById('lot_price').value;

            //==== Вычисление цены  "За участие в интернет торгах «Internet Bid Fee» Zproksi в заивисмотсти от стоимости лота prise1

            var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/proksi_iaai.xlsx";
            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.responseType = "arraybuffer";
            oReq.onload = function (e) {
                var arraybuffer = oReq.response;
                var data = new Uint8Array(arraybuffer);

                var arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                var bstr = arr.join("");
                var cfb = XLSX.read(bstr, {type: 'binary'});

                var workbook = XLSX.read(bstr, {type: "binary"});

                var first_sheet_name = workbook.SheetNames[0];

                var worksheet = workbook.Sheets[first_sheet_name];

                // var typearbd=$("#typearb option:selected").html();


                for (var i = 2; i != 300; i++) {
                    var address_of_cell = 'A' + i;
                    var desired_cell = worksheet[address_of_cell];
                    // console.log(desired_cell);


                    if (typeof(desired_cell) !== 'undefined') {

                        var address_of_cell2 = 'A' + i;
                        var desired_cell2 = worksheet[address_of_cell2];
                        var Zlotmin = desired_cell2.v;
                        Zlotmin = Zlotmin * 1;


                        var address_of_cell3 = 'B' + i;
                        var desired_cell3 = worksheet[address_of_cell3];
                        var Zlotmax = desired_cell3.v;
                        Zlotmax = Zlotmax * 1;


                        if ((prise1 >= Zlotmin) && (prise1 < Zlotmax)) {
                            var address_of_cell4 = 'C' + i;
                            var desired_cell4 = worksheet[address_of_cell4];
                            Zproksi = desired_cell4.v;
                            alert(Zproksi);
                            console.log('====froksi=====');
                            console.log(prise1);
                            console.log(Zlotmin);
                            console.log(Zlotmax);
                            console.log(Zproksi);
                            sbor2();
                        }


                    }
                    else {
                        break;
                    }
                }


            }

            //sbor2();
            oReq.send();
        }



        function tsbor_iaai() {
            alert('iaai_1')

            var prise1 = document.getElementById('lot_price').value;

            var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/sbor_iaai2.xlsx";
            //alert('====fbor_Z=====')

            var oReq = new XMLHttpRequest();
            oReq.open("GET", url, true);
            oReq.responseType = "arraybuffer";
            oReq.onload = function (e) {
                var arraybuffer = oReq.response;
                var data = new Uint8Array(arraybuffer);

                var arr = new Array();
                for (var i = 0; i != data.length; ++i) {
                    arr[i] = String.fromCharCode(data[i]);
                }
                var bstr = arr.join("");
                var cfb = XLSX.read(bstr, {type: 'binary'});

                var workbook = XLSX.read(bstr, {type: "binary"});

                var first_sheet_name = workbook.SheetNames[0];

                var worksheet = workbook.Sheets[first_sheet_name];

                // var typearbd=$("#typearb option:selected").html();


                for (var i = 2; i != 300; i++) {
                    var address_of_cell = 'A' + i;
                    var desired_cell = worksheet[address_of_cell];
                    console.log(desired_cell)

                    if (typeof(desired_cell) !== 'undefined') {

                        var address_of_cell2 = 'A' + i;
                        var desired_cell2 = worksheet[address_of_cell2];
                        var Zlotmin = desired_cell2.v;
                        Zlotmin = Zlotmin * 1;
                        console.log(Zlotmin)

                        var address_of_cell3 = 'B' + i;
                        var desired_cell3 = worksheet[address_of_cell3];
                        var Zlotmax = desired_cell3.v;
                        Zlotmax = Zlotmax * 1;

                        console.log('====fbor_1=====');
                        console.log(prise1);
                        console.log(Zlotmin);
                        console.log(Zlotmax);


                        if ((prise1 >= Zlotmin) && (prise1 < Zlotmax)) {
                            var address_of_cell4 = 'C' + i;
                            var desired_cell4 = worksheet[address_of_cell4];
                            Zsbor = desired_cell4.v;

                            // alert(Zsbor);
                            console.log('====fbor_Z=====');
                            console.log(prise1);
                            console.log(Zlotmin);
                            console.log(Zlotmax);
                            console.log(Zsbor);
                            tproksi_iaai();
                            //  sbor1();
                        }

                        // if(Zsbor<0){
                        //     Zsbor=prise1*Zsbor;
                        //     sbor1();
                        // }
                        // console.log(Zsbor);

                    }
                    else {
                        //return;
                        break;
                    }
                };


                // }
                // sbor1();

                oReq.send();

            }
        }






        // function tproksi_iaai() {
        //     alert('iaai_2')
        //     var prise1 = document.getElementById('lot_price').value;
        //
        //     //==== Вычисление цены  "За участие в интернет торгах «Internet Bid Fee» Zproksi в заивисмотсти от стоимости лота prise1
        //
        //     var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/proksi_iaai.xlsx";
        //     var oReq = new XMLHttpRequest();
        //     oReq.open("GET", url, true);
        //     oReq.responseType = "arraybuffer";
        //     oReq.onload = function (e) {
        //         var arraybuffer = oReq.response;
        //         var data = new Uint8Array(arraybuffer);
        //
        //         var arr = new Array();
        //         for (var i = 0; i != data.length; ++i) {
        //             arr[i] = String.fromCharCode(data[i]);
        //         }
        //         var bstr = arr.join("");
        //         var cfb = XLSX.read(bstr, {type: 'binary'});
        //
        //         var workbook = XLSX.read(bstr, {type: "binary"});
        //
        //         var first_sheet_name = workbook.SheetNames[0];
        //
        //         var worksheet = workbook.Sheets[first_sheet_name];
        //
        //         // var typearbd=$("#typearb option:selected").html();
        //
        //
        //         for (var i = 2; i != 300; i++) {
        //             var address_of_cell = 'A' + i;
        //             var desired_cell = worksheet[address_of_cell];
        //           // console.log(desired_cell);
        //
        //
        //             if (typeof(desired_cell) !== 'undefined') {
        //
        //                 var address_of_cell2 = 'A' + i;
        //                 var desired_cell2 = worksheet[address_of_cell2];
        //                 var Zlotmin = desired_cell2.v;
        //                 Zlotmin = Zlotmin * 1;
        //
        //
        //                 var address_of_cell3 = 'B' + i;
        //                 var desired_cell3 = worksheet[address_of_cell3];
        //                 var Zlotmax = desired_cell3.v;
        //                 Zlotmax = Zlotmax * 1;
        //
        //
        //                 if ((prise1 >= Zlotmin) && (prise1 < Zlotmax)) {
        //                     var address_of_cell4 = 'C' + i;
        //                     var desired_cell4 = worksheet[address_of_cell4];
        //                     Zproksi = desired_cell4.v;
        //                     alert(Zproksi);
        //                     console.log('====froksi=====');
        //                     console.log(prise1);
        //                     console.log(Zlotmin);
        //                     console.log(Zlotmax);
        //                     console.log(Zproksi);
        //                 }
        //
        //
        //             }
        //             else {
        //                 break;
        //             }
        //         }
        //         ;
        //
        //
        //     }
        //
        //     //sbor2();
        //     oReq.send();
        // }




        // console.log('====f======');
        // console.log(Zsbor);
        // console.log(Zproksi);
        // console.log('====f======');
        // sbor2();


        //  Zsbor=Zsbor+Zproksi+59;
        tsbor_iaai();
        // tproksi_iaai();
        // alert(43)
        // sbor2();
    }



    // function tsbor2() {
    //     var prise1 = document.getElementById('lot_price').value;
    //
    //     function tsbor_iaai() {
    //         alert('iaai_1')
    //
    //         var prise1 = document.getElementById('lot_price').value;
    //
    //         var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/sbor_iaai2.xlsx";
    //         //alert('====fbor_Z=====')
    //
    //         var oReq = new XMLHttpRequest();
    //         oReq.open("GET", url, true);
    //         oReq.responseType = "arraybuffer";
    //         oReq.onload = function (e) {
    //             var arraybuffer = oReq.response;
    //             var data = new Uint8Array(arraybuffer);
    //
    //             var arr = new Array();
    //             for (var i = 0; i != data.length; ++i) {
    //                 arr[i] = String.fromCharCode(data[i]);
    //             }
    //             var bstr = arr.join("");
    //             var cfb = XLSX.read(bstr, {type: 'binary'});
    //
    //             var workbook = XLSX.read(bstr, {type: "binary"});
    //
    //             var first_sheet_name = workbook.SheetNames[0];
    //
    //             var worksheet = workbook.Sheets[first_sheet_name];
    //
    //             // var typearbd=$("#typearb option:selected").html();
    //
    //
    //             for (var i = 2; i != 300; i++) {
    //                 var address_of_cell = 'A' + i;
    //                 var desired_cell = worksheet[address_of_cell];
    //                 console.log(desired_cell)
    //
    //                 if (typeof(desired_cell) !== 'undefined') {
    //
    //                     var address_of_cell2 = 'A' + i;
    //                     var desired_cell2 = worksheet[address_of_cell2];
    //                     var Zlotmin = desired_cell2.v;
    //                     Zlotmin = Zlotmin * 1;
    //                     console.log(Zlotmin)
    //
    //                     var address_of_cell3 = 'B' + i;
    //                     var desired_cell3 = worksheet[address_of_cell3];
    //                     var Zlotmax = desired_cell3.v;
    //                     Zlotmax = Zlotmax * 1;
    //
    //                     console.log('====fbor_1=====');
    //                     console.log(prise1);
    //                     console.log(Zlotmin);
    //                     console.log(Zlotmax);
    //
    //
    //                     if ((prise1 >= Zlotmin) && (prise1 < Zlotmax)) {
    //                         var address_of_cell4 = 'C' + i;
    //                         var desired_cell4 = worksheet[address_of_cell4];
    //                         Zsbor = desired_cell4.v;
    //
    //                         // alert(Zsbor);
    //                         console.log('====fbor_Z=====');
    //                         console.log(prise1);
    //                         console.log(Zlotmin);
    //                         console.log(Zlotmax);
    //                         console.log(Zsbor);
    //                         //  sbor1();
    //                     }
    //
    //                     // if(Zsbor<0){
    //                     //     Zsbor=prise1*Zsbor;
    //                     //     sbor1();
    //                     // }
    //                     // console.log(Zsbor);
    //
    //                 }
    //                 else {
    //                     //return;
    //                     break;
    //                 }
    //             };
    //
    //
    //             // }
    //             // sbor1();
    //
    //             oReq.send();
    //
    //         }
    //     }
    //
    //
    //
    //
    //
    //
    //     function tproksi_iaai() {
    //         alert('iaai_2')
    //         var prise1 = document.getElementById('lot_price').value;
    //
    //         //==== Вычисление цены  "За участие в интернет торгах «Internet Bid Fee» Zproksi в заивисмотсти от стоимости лота prise1
    //
    //         var url = "https://aleksandr.tupichenkov.com/CalcAvtoUSA_New1/js/proksi_iaai.xlsx";
    //         var oReq = new XMLHttpRequest();
    //         oReq.open("GET", url, true);
    //         oReq.responseType = "arraybuffer";
    //         oReq.onload = function (e) {
    //             var arraybuffer = oReq.response;
    //             var data = new Uint8Array(arraybuffer);
    //
    //             var arr = new Array();
    //             for (var i = 0; i != data.length; ++i) {
    //                 arr[i] = String.fromCharCode(data[i]);
    //             }
    //             var bstr = arr.join("");
    //             var cfb = XLSX.read(bstr, {type: 'binary'});
    //
    //             var workbook = XLSX.read(bstr, {type: "binary"});
    //
    //             var first_sheet_name = workbook.SheetNames[0];
    //
    //             var worksheet = workbook.Sheets[first_sheet_name];
    //
    //             // var typearbd=$("#typearb option:selected").html();
    //
    //
    //             for (var i = 2; i != 300; i++) {
    //                 var address_of_cell = 'A' + i;
    //                 var desired_cell = worksheet[address_of_cell];
    //               // console.log(desired_cell);
    //
    //
    //                 if (typeof(desired_cell) !== 'undefined') {
    //
    //                     var address_of_cell2 = 'A' + i;
    //                     var desired_cell2 = worksheet[address_of_cell2];
    //                     var Zlotmin = desired_cell2.v;
    //                     Zlotmin = Zlotmin * 1;
    //
    //
    //                     var address_of_cell3 = 'B' + i;
    //                     var desired_cell3 = worksheet[address_of_cell3];
    //                     var Zlotmax = desired_cell3.v;
    //                     Zlotmax = Zlotmax * 1;
    //
    //
    //                     if ((prise1 >= Zlotmin) && (prise1 < Zlotmax)) {
    //                         var address_of_cell4 = 'C' + i;
    //                         var desired_cell4 = worksheet[address_of_cell4];
    //                         Zproksi = desired_cell4.v;
    //                         alert(Zproksi);
    //                         console.log('====froksi=====');
    //                         console.log(prise1);
    //                         console.log(Zlotmin);
    //                         console.log(Zlotmax);
    //                         console.log(Zproksi);
    //                     }
    //
    //
    //                 }
    //                 else {
    //                     break;
    //                 }
    //             }
    //             ;
    //
    //
    //         }
    //
    //         //sbor2();
    //         oReq.send();
    //     }
    //
    //
    //
    //
    //     // console.log('====f======');
    //     // console.log(Zsbor);
    //     // console.log(Zproksi);
    //     // console.log('====f======');
    //     // sbor2();
    //
    //
    //     //  Zsbor=Zsbor+Zproksi+59;
    //     tsbor_iaai();
    //     tproksi_iaai();
    //     // alert(43)
    //     sbor2();
    // }

    //sbor2();



//}



    function tsbor() {
        var typeauction = document.getElementById('type_auction').value;

        var prise1 = document.getElementById('lot_price').value;
        Zsbor = 0;
        Zproksi = 0;


      //=====  Расчет Аукционного сбора для аукциона Сopart вычисляем как сумму сбора +99+59.
      // Сумму сбора Zsbor вычисляем в зависимости от стоимости лота prise1 Таблица передана в переписке по заказу    =======//

    //var typeauction = document.getElementById('type_auction').value;

        if (typeauction=='copart'){


            tsbor1();

        }





        //=====  Расчет Аукционного сбора для аукциона iaai вычисляем как сумму сбора +За участие в интернет торгах «Internet Bid Fee+59.
        // Сумму сбора Zsbor вычисляем в зависимости от стоимости лота prise1 Таблица передана в переписке по заказу    =======//
        if (typeauction=='iaai'){


           tsbor2();

        }


    }


    //===== Расчет Страховка от полной гибели** = стоимости лота+стоимость участия в аукционе умноженные на 0.0135  =======//
    function strax(){
         if ( $('#strah').is(':checked') ) {
            var v1=document.getElementById('res_lot').value;
            var v2=document.getElementById('res_auction').value;

            var Zstr=(v1*1+v2*1)*0.0135;
            Zstr=Math.ceil(Zstr);
            document.getElementById('res_strah').value=Zstr;
        } else
         {
            document.getElementById('res_strah').value=0;

        }

    };


    //===== Расчет Страховка авто от повреждений = стоимости лота+стоимость участия в аукционе умноженные на 0.015  =======//
    function strax2(){
         if ( $('#strah2').is(':checked') ) {
            var v1=document.getElementById('res_lot').value;
            var v2=document.getElementById('res_auction').value;
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


        //===== Расчет Акцизный сбор   =======//
        var Zakz=0;
        var tupedva=document.getElementById('tupedv').value;

        var Vdva=document.getElementById('Vdv').value;

        var jar1a=document.getElementById('jar1').value;

        var currentTime = new Date();
        var yeart = currentTime.getFullYear();


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
        var typavto=document.getElementById('type_avto').value;
        if (typavto=='pickup'){
            port1=port1*1.5;
        }

        document.getElementById('res_port1').value=port1;

        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
        }
        if (type_avto=='pickup'){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');
            zmore=zmore*2;

        }
        if((type_avto=='passenger')||(type_avto=='motorcycle')){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');

        }

        document.getElementById('res_port2').value=zmore;

       /// Заполнение поля "Из порта США в зависисмости от выбора Штата Аукциона "
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

        var port1=document.getElementById('stat').value;
        var typavto=document.getElementById('type_avto').value;
        if (typavto=='pickup'){
            port1=port1*1.5;
        }

        document.getElementById('res_port1').value=port1;



        var zmore=0;
        var type_avto=document.getElementById('type_avto').value;
        if(type_avto=='crossover'){
            zmore=$("#stat option:selected").attr('data-zkoss');
        }
        if (type_avto=='pickup'){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');
            zmore=zmore*2;

        }
        if((type_avto=='passenger')||(type_avto=='motorcycle')){
            zmore= zmore=$("#stat option:selected").attr('data-zpicap');


        }

        document.getElementById('res_port2').value=zmore;
        var typavto=document.getElementById('type_avto').value;
        if (typavto=='pickup'){
            Zbroker2=Zbroker2+200;
        }
        else{
            Zbroker2=Zbroker2;
        }

        document.getElementById('res_brocer').value=Zbroker2;
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
        document.getElementById('res_remont').value=Zremont2;
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


    // Открытие формы заказа авто при клике на кнопку

    $('#btn-calc').click(function () {

        $('.popup-fade2').fadeIn();
         return false;

    });





});



