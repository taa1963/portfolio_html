var Zbroker2, Zremont2,Zsbor,Zproksi;


$(document).ready(function() {



    function ClSp1(element) {
        var sss= $(element).parents('.first_level_sp');
        if (sss.hasClass("act1")) {
            sss.find(".second_level").removeClass('act2');
            sss.find(".second_level").removeClass('act2');
            $(".second_level").removeClass('act2');

            sss.find(".second_level").removeClass('act3');

            sss.removeClass('act1');
            var t2=sss.find(".sp1");
            $(t2).text('+');
        }
        else
        {
            sss.find(".second_level").addClass('act2');
            sss.addClass('act1');
            var t2=sss.find(".sp1");
            $(t2).text('-');
        }
    }

    window.ClSp1=ClSp1;







   function ClLi(element) {
       $('.sps').css('background', '');
       $(element).css('background', '#ccc');
      // $(element).style.backgroundColor = "#000000";
       var name=element.innerHTML;
       $('#namev').text(name);
      // alert(name)
       var  suhayaplotnostv=$(element).attr('data-suhayaplotnost');
       document.getElementById('suhaya-plotnost').value=suhayaplotnostv;

       var suhayaudteplov=$(element).attr('data-suhayaudteplo');
       document.getElementById('suhaya-udteplo').value=suhayaudteplov;

       var suhayateploprv=$(element).attr('data-suhayateplopr');
       document.getElementById('suhaya-teplopr').value=suhayateploprv;

       var vlagaav=$(element).attr('data-vlagaa');
       document.getElementById('vlagaa').value=vlagaav;

       var vlagabv=$(element).attr('data-vlagab');
       document.getElementById('vlagab').value=vlagabv;

       var teploav=$(element).attr('data-teploa');
       document.getElementById('teploa').value=teploav;

       var teplobv=$(element).attr('data-teplob');
       document.getElementById('teplob').value=teplobv;

       var teplousvoenav=$(element).attr('data-teplousvoena');
       document.getElementById('teplousvoena').value=teplousvoenav;

       var teplousvoenbv=$(element).attr('data-teplousvoenb');
       document.getElementById('teplousvoenb').value=teplousvoenbv;

       var papopronizbv=$(element).attr('data-papopronizb');
       document.getElementById('papoproniz').value=papopronizbv;
   }

    window.ClLi=ClLi;




     $('.first_level_sp').click(function(element) {
         var t4= $(element.target).children(".sp1");
         ClSp1(t4);
    });


    function ClSp2(element) {
        var sss= $(element).parents('.second_level');
        if (sss.hasClass("act3")) {
            sss.find(".third_level").removeClass('act3');
            sss.removeClass('act3');
            var t2=sss.find(".sp2");
            $(t2).text('+');
        }
        else
        {
            sss.find(".third_level").addClass('act3');
            sss.addClass('act3');
            var t2=sss.find(".sp2");
            $(t2).text('-');
        }
    }

    window.ClSp2=ClSp2;

    $('.second_level').click(function(element) {
        var t4= $(element.target).children(".sp2");
        ClSp2(t4);
    });



    function ClSp3(element) {

        var sss= $(element).closest('.sp3l').next('.fourth_level');
        if (sss.hasClass("act4")) {



            var sss1 = $(element).closest('.sp3l').next('.fourth_level');
            sss1.removeClass('act4');
            var t2=sss.find(".sp3");
            $(t2).text('+');
            $(element).text('+');

        }
        else
        {
           var sss1 = $(element).closest('.sp3l').next('.fourth_level');
            sss1.addClass('act4')
            sss.addClass('act4');
            var t2=sss.find(".sp3");
            $(t2).text('-');
            $(element).text('-');
        }
    }

    window.ClSp3=ClSp3;

    $('.sp3l').click(function(element) {
        var t4= $(element.target).children(".sp3");
        ClSp3(t4);
    });












    //==Функция заполнение аккордеона  и при открытие сайта   =======//
    function selectadd(){

       // $('#stat').find('option').remove();//Удаляем предыдущие данные

       // var typeauction=document.getElementById('type_auction').value;
        //==Заполнение  выпадающего списка Штат аукциона для аукциона СОРАRT


       // if (typeauction=='copart'){

            var url = "https://aleksandr.tupichenkov.com/CalcExel_Tabl/js/Prise.xlsx";

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
                // var valauc = [];
                // var portau = [];
                // var Zkross = [];
                // var Zpikap = [];
                // var Zlogic= [];
                var level1=0;
                var level2=0;
                var level3=0;


                for (var i = 3; i != 300; i++)  {
                    var address_of_cell = 'A' +i;
                    var desired_cell = worksheet[address_of_cell];


                    if (typeof(desired_cell) !== 'undefined') {
                       // var TR = desired_cell.v;
                        var address_of_cell2 = 'A' +i;
                        var desired_cell2 = worksheet[address_of_cell2];
                        var Name1 = desired_cell2.v;

                        nameauction.push(Name1);
                        if(Name1.indexOf('1#') === 0) {
                            var Name2 = Name1.split('#')[1];
                            var opt12=document.getElementById('spisok');
                            $(' <ul class="first_level">' +
                                ' <li class="first_level_sp">  <span class="sp1" onclick="ClSp1(this);" >+</span> '+Name2+''+
                                '</li>'+
                                '</ul>')
                                .appendTo(opt12);

                        }


                        if(Name1.indexOf('2#') === 0) {
                            var Name2 = Name1.split('#')[1];

                            var newSection = $('<ul class="second_level">"></ul>');
                            newSection.html(
                                '<li><span class="sp2" onclick="ClSp2(this);">+</span> '+Name2+' </li>'
                            );
                            //$('.first_level').append(newSection);
                            $('.first_level:last').append(newSection);
                           // $('.spisok .first_level:last').append(newSection);




                            var opt12=$('.spisok .first_level:last');

                           // var opt12=document.getElementsByClassName('first_level:last-child');

                           // if (level1==0){

                            //var Name2 = Name1.split('#')[1];
                            //var opt12=document.getElementById('spisok');
                            $('  <ul class="second_level">' +
                               ' <li><span class="sp2" onclick="ClSp2(this);">+</span> '+Name2+' </li>'+
                               '</ul>')
                                .appendTo(opt12);
                            //  }
                            //
                            //  else {
                            //     $('</ul>'+
                            //         '  <ul class="second_level">' +
                            //         ' <li><span class="sp2" onclick="ClSp2(this);">+</span> '+Name2+' </li>')
                            //         .appendTo(opt12);
                            // }

                            }

                        level1=level1+1;

                        if(Name1.indexOf('3#') === 0) {
                            var Name2 = Name1.split('#')[1];

                            var newSection = $('<ul class="third_level">"></ul>');
                            newSection.html(
                                '<li class="sp3l"><span class="sp3" onclick="ClSp3(this);" >+</span> '+Name2+' </li>'+
                                ' <ul class="fourth_level">'+
                                '</ul>');
                            // $('.first_level').append(newSection);
                            //$('.second_level').append(newSection);
                            $('.second_level:last').append(newSection);






                            var opt12=$('.spisok .second_level:last');
                           // var opt12=document.getElementsByClassName('second_level:last-child');
                           // var opt12=document.getElementById('spisok');

                           // if (level2==0){

                               // var Name2 = Name1.split('#')[1];
                                //var opt12=document.getElementById('spisok');
                                $('<ul class="third_level">' +
                                    '<li class="sp3l"><span class="sp3" onclick="ClSp3(this);" >+</span> '+Name2+' </li>'+
                                ' <ul class="fourth_level">'+
                                '</ul>')
                                   .appendTo(opt12);
                           // }

                            // else {
                            //     $('</ul>'+
                            //         '</ul>'+
                            //         '<ul class="third_level">' +
                            //         '<li class="sp3l"><span class="sp3" onclick="ClSp3(this);" >+</span> '+Name2+' </li>'+
                            //       ' <ul class="fourth_level">')
                            //         .appendTo(opt12);
                            // }

                        }

                        level2=level1+2;


                        if (Name1.indexOf('#') > -1)
                        {
                           // console.log(Name1)
                        }

                        else{
                            //console.log(Name1)
                            var address_of_cell3 = 'B' +i;
                            var desired_cell3 = worksheet[address_of_cell3];
                            var suhayaplotnost = desired_cell3.v;

                            //var address_of_cell3 = 'B' +i;
                           // var desired_cell3 = worksheet[address_of_cell3];
                           // var suhayaplotnost = desired_cell3.v;



                            //valauc.push(Va);

                            var address_of_cell4 = 'C' +i;
                            var desired_cell4 = worksheet[address_of_cell4];
                            var suhayaudteplo = desired_cell4.v;

                            var address_of_cell5 = 'E' +i;
                            var desired_cell5 = worksheet[address_of_cell5];
                            var suhayateplopr = desired_cell5.v;

                            var address_of_cell6 = 'G' +i;
                            var desired_cell6 = worksheet[address_of_cell6];
                            var vlagaa = desired_cell6.v;

                            var address_of_cell7 = 'I' +i;
                            var desired_cell7 = worksheet[address_of_cell7];
                            var vlagab = desired_cell7.v;

                            var address_of_cell8 = 'J' +i;
                            var desired_cell8 = worksheet[address_of_cell8];
                            var teploa = desired_cell8.v;

                            var address_of_cell9 = 'K' +i;
                            var desired_cell9 = worksheet[address_of_cell9];
                            var teplob = desired_cell9.v;

                            var address_of_cell10 = 'L' +i;
                            var desired_cell10 = worksheet[address_of_cell10];
                            var teplousvoena = desired_cell10.v;

                            var address_of_cell11 = 'N' +i;
                            var desired_cell11 = worksheet[address_of_cell11];
                            var teplousvoenb = desired_cell11.v;

                            var address_of_cell12 = 'O' +i;
                            var desired_cell12 = worksheet[address_of_cell12];
                            var papopronizb = desired_cell12.v;

                            var opt12=$('.fourth_level:last')
                           // var opt12=document.getElementsByClassName('fourth_level:last-child');
                           // var opt12=document.getElementById('spisok');

                            $(' <li class="sps" data-suhayaplotnost='+suhayaplotnost+' + data-suhayaudteplo='+suhayaudteplo+' + data-suhayateplopr='+suhayateplopr+' + data-vlagaa='+vlagaa+' + data-vlagab='+vlagab+' + data-teploa='+teploa+' + data-teplob='+teplob+' +  data-teplousvoena='+teplousvoena+' + data-teplousvoenb='+teplousvoenb+' + data-papopronizb='+papopronizb+' +  onclick="ClLi(this);" >'+Name1+'</li>')
                                .appendTo(opt12);


                        }



                       // nameauction.push(Name);






                    }
                    else{
                       // var opt12=document.getElementById('spisok');

                       // $(' </li>' +
                        //    ' </ul>')
                        //    .appendTo(opt12);



                        //return
                        break;
                    }
                };





            }
            oReq.send();
       // }








    }



    selectadd();




});



