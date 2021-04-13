var C5,numpr;

C5=0;
numpr=0;



$(document).ready(function() {


    //======================= Заполнение даты платежа ========================\\
    var now = new Date();
    //alert(now);
    var datev=now.getDate();

    var dateMonth=now.getMonth();
    var dateMonthr='';
    if (dateMonth==0){
        dateMonthr='января'
    }
    if (dateMonth==1){
        dateMonthr='февраля'
    }
    if (dateMonth==2){
        dateMonthr='марта'
    }
    if (dateMonth==3){
        dateMonthr='апреля'
    }
    if (dateMonth==4){
        dateMonthr='мая'
    }
    if (dateMonth==5){
        dateMonthr='июня'
    }
    if (dateMonth==6){
        dateMonthr='июля'
    }
    if (dateMonth==7){
        dateMonthr='августа'
    }
    if (dateMonth==8){
        dateMonthr='сентября'
    }
    if (dateMonth==9){
        dateMonthr='октября'
    }
    if (dateMonth==10){
        dateMonthr='ноября'
    }
    if (dateMonth==11){
        dateMonthr='декабря'
    }

    var datejar=now.getFullYear();

    document.getElementById('zakaz_moth').value=datev;
    document.getElementById('zakaz_date').value=dateMonthr;
    document.getElementById('zakaz_jar').value=datejar;



    //======================= Заполнение данных по Профиль поставщика ========================\\
    function ADDProduct() {
        var newCategor = $('#typeprofil');
        for (var i = 0; i < product.length; i++) {
            $('<option value="' +  product[i].val + '"data-ncadt="' +  product[i].ncadt + '">' + product[i].name + '</option>').appendTo(newCategor);
        }
        ADDCard();
    }

    ADDProduct();



    //======================= Заполнение карточек по выбранному профилю ========================\\
    function ADDCard() {


        $('.cardbl').remove();

        numpr=document.getElementById('typeprofil').value;
        var numprv=numpr-1;
        var NN=product[numprv].fields.length;
        for (var i = 0; i < NN; i++){
            var newSection = $('<div class="cardbl"></div>');
            newSection.html(
                '  <p class="card"> Тип карты:   <input type="text" class="cardtype"  value=""  readonly> &emsp;&emsp;         Номер карты:   <input type="text" class="cardnum"  value=""  readonly> </p>'
            );

            $('.card_block').append(newSection);

            var card1=product[numprv].fields[i].typecard;
            var cardN=product[numprv].fields[i].numbercard;

            var typecard=document.getElementsByClassName('cardtype');
            var cardnum=document.getElementsByClassName('cardnum');


           // console.log(card1)

            $(typecard)[i].value=card1;
            $(cardnum)[i].value=cardN;

        }


    };

    //======================= Вбор (изменение) профиля ========================\\
    $("#typeprofil").bind("change click", function () {

        ADDCard();
      });



    //===== закрываем ввод в поле  цифр и отрицательных значений,   =====//


    $('.amount').on('input', function() {
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений,    =====//


    $('.edism').on('input', function() {
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });
    //===== закрываем ввод в поле  цифр и отрицательных значений,    =====//


    $('.zenaed').on('input', function() {
        //alert(3333)
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });

    //$('.zenaed').on('keyup', function(){
    //   // alert(3333)
    //    $(this).val($(this).val().replace (/\D/, ''));
    //});





    //$('#name').on('input', function() {
    //  var name=document.getElementById('name').value;
    //    $('#name3').text(name);
    //    $('#namepr').text(name);
    //
    //
    //});

    //$('#name4').on('input', function() {
    //    var name=document.getElementById('name4').value;
    //
    //   // $('#name4pr').text(name);
    //
    //
    //});

    ADDST1i();
   // Zena();
    //===== Добавление   записи таблицы    =====//
    function ADDST1i() {
        var newSection = $('<tr class="block_uv1i"></tr>');
        newSection.html(
            '<th ><input type="text" class="numt" value="1" readonly></th>\n <th> <input type="text" style="text-align:left";  class="namet"  placeholder="Название товара"  > </th>\n <th> <input type="text"   class="amount"  value="1" oninput="Sel_LineN1i(this)" > </th>\n<th> <input type="text"   class="edism"  value="1" > </th>\n<th style="word-wrap:break-word;"> <input type="text"   class="zenaed" value="1000"  oninput="Sel_LineN2i(this)"> </th>\n <th style="word-wrap:break-word;"> <input style="word-wrap:break-word;" type="text" class="zenapoz" value="1000" readonly > </th>\n  <th> <button class="butuv_del" onclick="ADDST1i(this); ">Добаваить объект</button> </th>\n <th><button class="butuv_del" onclick="DelUvv(this); ">Удалить объект</button>  </th>'
        );
        $('#table_uv').append(newSection);
        Number();
        Zena();

    }

    window.ADDST1i = ADDST1i;

    $('#butuv1i').click(function () {
        ADDST1i();
        Zena();
    });

    //===== Удаление текущей  записи таблицы    =====//
    function DelUvv(element) {
        var sss= $(element).parents('.block_uv1i');
        sss.remove();

        Number();

    }
    window.DelUvv = DelUvv;

    //===== Нумерация записей таблицы    =====//
    function Number() {
        var num=document.getElementsByClassName('numt');

        var NN=num.length;
        for (var i = 0; i < NN; i++){
            var NNV=i+1;
            num[i].value=NNV;
        }
        Zena();


    }



//===== пересчет при изменеие количества в таблице    =====//
    function Sel_LineN1i(element) {
        $(element).val($(element).val().replace (/\D/, ''));
        var N = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.zenaed');
        var zenaed=parseFloat($(block2).val());

        var zenav=N*zenaed;



        //zenav=zenav.toFixed(2);

        var block = $(element).parents('.block_uv1i');
        block.find('.zenapoz').val(zenav);
        Zena();


    }
    window.Sel_LineN1i = Sel_LineN1i;

    //===== пересчет при изменеие цены в таблице    =====//
    function Sel_LineN2i(element) {
       $(element).val($(element).val().replace (/\D/, ''));

        var zenaed = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.amount');
        var N=parseFloat($(block2).val());

        var zenav=N*zenaed;


        var block = $(element).parents('.block_uv1i');
        block.find('.zenapoz').val(zenav);
        Zena();


    }
    window.Sel_LineN2i = Sel_LineN2i;







    function Zena(){
        C5=0;
        var NN=$('.numt').length;

        $('.zenapoz').each(function(){
            C5 += parseFloat($(this).val())
        });

        $('#itog1').text(C5);
        $('#itog2').text(C5);
        $('#itog3').text(C5);
        $('#numitog').text(NN);
        //



    };

    function getPDF(){



        var typecardv=document.getElementById('typeprofil').value;
        var typecardv="Пластиковая карточка";
        //var typeplv=document.getElementById('typepl').value;

        var cardv='';


        var NN1=$('.cardtype').length;

        var cardt=document.getElementsByClassName('cardtype');
        var cardn=document.getElementsByClassName('cardnum');

        for (var i = 0; i < NN1; i++){
            var cardv=cardv+'Номер карты:'+$(cardt[i]).val()+':'+$(cardn[i]).val()+'\n';
        }





        //var name=document.getElementById('typeprofil').text;
        //var name2=document.getElementById('typeprofil').text;


        var name=$("#typeprofil option:selected").text();

        var name2=$("#typeprofil option:selected").text();
       // alert(name2)

        var card2v=document.getElementById('card2').value;
        var mothv=document.getElementById('zakaz_moth').value;
        var zakaz_datev=document.getElementById('zakaz_date').value;
        var zakaz_jarv=document.getElementById('zakaz_jar').value;
        var name4v=document.getElementById('name4').value;
       // name4v="Покупатель:,bold:false"+'          '+name4v;


        var number=document.getElementsByClassName('numt');
        var numberpr=document.getElementsByClassName('numtpr');

        var nametr=document.getElementsByClassName('namet');
        var nametpr=document.getElementsByClassName('nametpr');

        var amountr=document.getElementsByClassName('amount');
        var amounttpr=document.getElementsByClassName('amountpr');


        var edismr=document.getElementsByClassName('edism');
        var edismpr=document.getElementsByClassName('edismpr');

        var zenaedr=document.getElementsByClassName('zenaed');
        var zenaedpr=document.getElementsByClassName('zenaedpr');

        var zenapozr=document.getElementsByClassName('zenapoz');
        var zenapozpr=document.getElementsByClassName('zenapozpr');



        var NN=$('.numt').length;



        var body = [];

        var body1 = [];

        body1.push({ text:'№',bold:true, fontSize:8,alignment:'center'});
        body1.push({ text:'Товары (работы, услуги)',bold:true, fontSize:8,alignment:'center'});
        body1.push({ text:'Кол-во',bold:true, fontSize:8,alignment:'center'});
        body1.push({ text:'Ед.',bold:true, fontSize:8,alignment:'center'});
        body1.push({ text:'Цена',bold:true, fontSize:8,alignment:'center'});
        body1.push({ text:'Сумма.',bold:true, fontSize:8,alignment:'center'});
        body.push(body1);


        var body2 = [];

        for (var i = 0; i < NN; i++){
            var num=i+1;
            //$(number[i]).val(num);
            //$(numberpr[i]).val(num);

            var namev= $(nametr[i]).val();
            //$(nametpr[i]).val(namev);

            var amountrv= $(amountr[i]).val();
            //$(amounttpr[i]).val(amountrv);

            var edismrv= $(edismr[i]).val();
            //$(edismpr[i]).val(edismrv);

            var zenaedrv= $(zenaedr[i]).val();
            //$(zenaedpr[i]).val(zenaedrv);

            var zenapozrv= $(zenapozr[i]).val();
            //$(zenapozpr[i]).val(zenapozrv);



            var num1=String(num);

            var value = new Array();
            value.push({ text:num1, fontSize:8,alignment:'center'});
            value.push({ text: namev, fontSize:8,alignment:'left'});
            value.push({ text: amountrv, fontSize:8,alignment:'center'});
            value.push({ text: edismrv, fontSize:8,alignment:'center'});
            value.push({ text: zenaedrv, fontSize:8,alignment:'right'});
            value.push({ text: zenapozrv,style:"header33", fontSize:8,alignment:'right'});
            body.push(value);

        }

        var zenav=C5;
        var zenav=String(zenav);
       // alert(zenav)
        var NNV=$('.numt').length;






        var docInfo = {

            info: {
                title:'Счет-фактура',
                author:'alex',
                subject:'Theme',
                keywords:'Счет-фактура'
            },

            pageSize:'A4',
            pageOrientation:'',//'portrait'
            pageMargins:[120,100,30,60],

            //header:function(currentPage,pageCount) {
            //    return {
            //        text: currentPage.toString() + 'из' + pageCount,
            //        alignment:'right',
            //        margin:[0,30,10,50]
            //    }
            //},


            content: [

                {
                  text:typecardv,
                  style:'header2'
                },

                {
                    text:'Оплата от частного лица',
                    style:'header3'

                },

                {
                    text: cardv,
                    style:'header3'

                },
                {
                    text:name,
                    style:'header3'

                },

                {
                    text:'Заказ покупателя №:'+' '+ card2v+' '+'от'+' '+mothv+' '+zakaz_datev+' '+zakaz_jarv+' '+'г.',
                    style:'header4'

                },
                {
                    text:'____________________________________________________',
                    style:'header10'


                },

                //{
                //
                //    text:['Поставщик:'+'          ',{text:name2,bold:true}],
                //    style:'header5'
                //},
                //
                //{
                //    text:['Покупатель:'+'         ',{text:name4v,bold:true,alignment:'left'}],
                //   // text:name4v,bold:true,
                //    style:'header5'
                //},

                //{
                //    text:'',
                //    style:'header5'
                //},

                {
                    table:{
                        margin:[10,5,10,10],
                        widths:[55,370],



                        body:[

                            ['Поставщик:',{text:name2,bold:true}],
                            ['Покупатель:',{text:name4v,bold:true,alignment:'left'}]
                        ]


                    },
                    layout: 'noBorders',
                    style: 'tableExample'
                },


                {
                    table:{
                        margin:[0,5,0,0],
                        widths:[15,170,35,35,35,50],
                        body: body,

                        headerRows:1
                    }
                },

                {
                    table:{
                        margin:[10,5,10,10],
                        widths:[330,50],



                        body:[

                            //['Поставщик:',{text:name2,bold:true}],
                            [{text:'Итого:',bold:true,alignment:'right'},{text:zenav,bold:true,alignment:'right'}],
                            [{text:'Всего к оплате:',bold:true,alignment:'right'},{text:zenav,bold:true,alignment:'right'}]
                        ]


                    },
                    layout: 'noBorders',
                    style:'header7'
                },


                //{
                //    text:['Итого:','                ', {text:zenav,bold:true}],
                //    style:'header7'
                //
                //},
                //{
                //    text:['Всего к оплате:','                ', {text:zenav,bold:true}],
                //    style:'header7'
                //
                //},

                {


                    text:['Всего наименований'+'  '+NNV +', на сумму'+'  '+zenav+' '+'руб.'],
                    style:'header11'

                },
                {
                    text:'____________________________________________________',
                    style:'header10'


                },

                //{
                //
                //
                //    text:[{text:'Исполнитель',bold:true}, {text:'         '}, {text:'_______________________ ',bold:false}, {text:'                                                           '},  {text:'Заказчик',bold:true}, {text:'         '},{text:'_____________________ ',bold:false}],
                //    style:'header9'
                //},
                {
                    width: 410,
                    margin:[-10,5,0,0],

                    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RFQRXhpZgAATU0AKgAAAAgABAE7AAIAAABBAAAISodpAAQAAAABAAAIjJydAAEAAABEAAARBOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCi0YPQv9GW0YfQtdC90LrQvtCyINCe0LvQtdC60YHQsNC90LTRgCDQkNC90LDRgtC+0LvRltC50L7QstC40YcAAAAFkAMAAgAAABQAABDakAQAAgAAABQAABDukpEAAgAAAAMyOQAAkpIAAgAAAAMyOQAA6hwABwAACAwAAAjOAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyMTowNDoxMyAyMjoxMjowNwAyMDIxOjA0OjEzIDIyOjEyOjA3AAAAIgRDBD8EVgRHBDUEPQQ6BD4EMgQgAB4EOwQ1BDoEQQQwBD0ENARABCAAEAQ9BDAEQgQ+BDsEVgQ5BD4EMgQ4BEcEAAD/4QtTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIvPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj48eG1wOkNyZWF0ZURhdGU+MjAyMS0wNC0xM1QyMjoxMjowNy4yODk8L3htcDpDcmVhdGVEYXRlPjwvcmRmOkRlc2NyaXB0aW9uPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48ZGM6Y3JlYXRvcj48cmRmOlNlcSB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6bGk+0KLRg9C/0ZbRh9C10L3QutC+0LIg0J7Qu9C10LrRgdCw0L3QtNGAINCQ0L3QsNGC0L7Qu9GW0LnQvtCy0LjRhzwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCABmBAYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6RooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAbJIkUbSSsERAWZicAAdTXAab401a81Wz1V7djoGp3n2CyhSP8Aed8Tsf7pKnj0rX8fzvLotvolsxFzrVwtmuDgqh+aRvwQH86159Ms44NMtUXyYrSZDAkfAG1SAPpiuunyQp3kruV/ku/3/kxM06KKK5BhRRRQAUUUUAJRQaTpQA6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqtfXqWUKswLSSMEijHV2PQVZrn4mbUPHk+STBpdqqquePNlySfqEA/76rSEU229kBG2oahpfiPSLK8lN2NV85XCqFW3ZF3gjvjHy8+xrpKqyWiy6pBctyYI3VfYtj/4mrROBk8CiclKzA5O2dtX+KV4zANbaHZrDHntPN8zH8EVR+Jq9dPLfeNrO1j4t9Pga5mbPV3yiL+Qc/lWX4RvYYPDuseJ7zCR395Pd5z/yyT5EH4qg/Otnw3bzGzl1O8j8u61JxO8Z6xrgBE/BcZ9ya6KnuN+St8+v6iNmiiiuMYUUUUAFFFFACUgpaQUAOooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqWp61peixRSazqVnp6TSCONrudYg7n+EFiMn2q7Xiv7TH/IteGf+w5H/AOgNQt0u7S+92E9It9k39yPYdR1Kx0ixe91a9t7G1jxvnuZVjRcnAyzEAckCn2l5bahZxXdhcRXVtMoeKaFw6Op6EMOCPpXzV8ffEd/431jUPDvh9i2keF4Gu9UmU/I033QhPcrnaB6l/wC7XY2fxEfwF8DPBEenWK6jrOrW8VrYWrPtVnwMsx9BlR9SOR1pRd439LfO6/NFNWlb1v8A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ooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAPI5rAPgzSItOsrTTopLA6enl2k0Ejb4l9NxJLD2bNb9FVGUoO8QOZ0zSdZ8OWMdhpYsbqxgXEMblo3AyScnkHk1YGr64kMfn+HpDKT84huY2XHsSR7VvUVp7VPeKf9eQjBOoeI551+z6NBbwkYJubkbh74XNZ2reFNa8R6VcWGr6+beC5QJIljCFwM5IDH16V19FNVnF3gkv687hY5XQvhx4c0C1SG3tDOU/5aXDbix9T2q+fDsKeLLPVodkcdrZyWyQogAUsynPHsuMVt0UpV6s25Sk2CSQUUUViMKKKKACkpaKAEpMc0tFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAVNU0qz1mxNnqUPnW5kjkKbivzI4dTkEHhlB/CjU9Ls9Z097HUofOtpCrMm4rkqwYcgg9QDVuigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k='

                }



            ],

            styles: {

                header: {
                    fontSize:25,
                    bold:true,
                    alignment:'right'
                },

                header2: {
                    fontFamily: "ArialBold",
                    fontSize:7,
                    bold:true

                },
                header3: {
                    fontFamily: "ArialRegular",
                    fontSize:7,
                    // margin:[0,0,0,0],
                    bold:false

                },
                header4: {
                    fontFamily: "ArialBold",
                    fontSize:11,
                    margin:[0,25,0,0],
                    fontWeight:900,
                    bold:true

                },
                header5: {
                    fontFamily: "ArialRegular",
                    fontSize:8,
                    margin:[0,0,5,5],
                    bold:false

                },
                header6: {
                    fontFamily: "ArialRegular",
                    fontSize:12,
                    border:'none',
                    layout: 'noBorders'
                },
                header7: {
                    margin:[2,2,55,0],
                    fontFamily: "ArialBold",
                    fontSize:8,
                    bold:true,
                   alignment:'right'
                },
                header9: {
                    fontFamily: "ArialBold",
                    fontSize:8,
                    bold:true,
                    margin:[0,15,0,0]
                },
                header10: {
                    fontFamily: "ArialBold",
                    fontSize:17,
                    width: 80,
                    bold:true

                },
                header11: {
                    fontFamily: "ArialRegular",
                    fontSize:8,
                    margin:[0,0,0,0],
                    bold:false
                },
                header33: {
                    fontFamily: "ArialRegular",
                    fontSize:7,
                    margin:[0,0,0,0],
                    bold:false,
                    whiteSpace:'pre-wrap',
                    wordWrap:'break-word',
                    wordBreak: 'break-all',
                    hyphens:'auto'

                },
                tableExample: {
                    fontFamily: "ArialRegular",
                    fontSize:8,

                    bold:false,
                    margin:[0,0,0,10]
                    //layout: 'noBorders',
                    //layout: 'headerLineOnly'
                }
            }
        }

        pdfMake.createPdf(docInfo).download('faktura.pdf');
    }


    window.getPDF = getPDF;



});



