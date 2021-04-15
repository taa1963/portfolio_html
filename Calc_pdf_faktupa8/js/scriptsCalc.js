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


    document.getElementById('zakaz_moth_mob').value=datev;
    document.getElementById('zakaz_date_mob').value=dateMonthr;
    document.getElementById('zakaz_jar_mob').value=datejar;






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
    $('#butuv_add_mob').click(function () {
        var newSection = $(' <div class="dev_mob_bl"></div>');
        newSection.html(
            ' <input type="text"   class="namet_mob"  placeholder="Наименование товара" >' +
            ' <div class="zena_mob">' +
            '<div class="zena_mob_block">' +
            '<input type="text"   class="amount_mob"  placeholder="Кол-во"  >' +'' +
            '<input type="text"   class="zenaed_mob" placeholder="Цена" >' +
            '</div>' +
            '</div>'+
            '<div class="line_mob2"></div>'
        );
        $('#dev_mob').append(newSection);


    });

    $('#butuv_del_mob').click(function () {

        var ssdel= $(".dev_mob_bl:last");
        //var ssdel=document.getElementsByClassName('dev_mob_bl:last');
       // console.log(ssdel)
        $(ssdel).remove();
       // document.querySelectorAll(".some-element:last")

    });

    $('#butuv_add_pdf').click(function () {
        getPDF();
    });



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
            var cardv=cardv+$(cardt[i]).val()+':'+$(cardn[i]).val()+'\n';
        }

        //
        //const devices = new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini', "i");
        //
        //if (devices.test(navigator.userAgent))
        //{
        //    alert("Вы используете мобильное устройство (телефон или планшет).")
        //}
        //else
        //{
        //    alert("Вы используете ПК.")
        //}
        if ( $('.card_block').css('display') == 'none')
        {
            var card2v=document.getElementById('card2_mob').value;
            var mothv=document.getElementById('zakaz_moth_mob').value;
            var zakaz_datev=document.getElementById('zakaz_date_mob').value;
            var zakaz_jarv=document.getElementById('zakaz_jar_mob').value;
            var name4v=document.getElementById('name4_mob').value;



           // var number=document.getElementsByClassName('numt');
           // var numberpr=document.getElementsByClassName('numtpr');

            var nametr=document.getElementsByClassName('namet_mob');
           // var nametpr=document.getElementsByClassName('nametpr');

            var amountr=document.getElementsByClassName('amount_mob');
           // var amounttpr=document.getElementsByClassName('amountpr');


           // var edismr=document.getElementsByClassName('edism');
           // var edismpr=document.getElementsByClassName('edismpr');

            var zenaedr=document.getElementsByClassName('zenaed_mob');
            //var zenaedpr=document.getElementsByClassName('zenaedpr');

           // var zenapozr=document.getElementsByClassName('zenapoz');
           // var zenapozpr=document.getElementsByClassName('zenapozpr');



            var NN=$('.zenaed_mob').length;

            C5=0;

            var body = [];

            var body1 = [];

            body1.push({ text:'№',bold:true, fontSize:8,alignment:'center'});
            body1.push({ text:'Товары (работы, услуги)',bold:true, fontSize:8,alignment:'center'});
            body1.push({ text:'Кол-во',bold:true, fontSize:8,alignment:'center'});
            body1.push({ text:'Ед.',bold:true, fontSize:8,alignment:'center'});
            body1.push({ text:'Цена',bold:true, fontSize:8,alignment:'center'});
            body1.push({ text:'Сумма',bold:true, fontSize:8,alignment:'center'});
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

                var edismrv= '1';
                //$(edismpr[i]).val(edismrv);

                var zenaedrv= $(zenaedr[i]).val();
                //$(zenaedpr[i]).val(zenaedrv);


                var zenapozrv= amountrv*zenaedrv;

                C5=C5+zenapozrv;
                zenapozrv=String(zenapozrv);
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

                //C5=C5+zenapozrv;

            }

            var zenav=C5;
            var zenav=String(zenav);
            // alert(zenav)
            var NNV=$('.zenaed_mob').length;

        }

        else{
            var card2v=document.getElementById('card2').value;
            var mothv=document.getElementById('zakaz_moth').value;
            var zakaz_datev=document.getElementById('zakaz_date').value;
            var zakaz_jarv=document.getElementById('zakaz_jar').value;
            var name4v=document.getElementById('name4').value;
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
            body1.push({ text:'Сумма',bold:true, fontSize:8,alignment:'center'});
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




        }


        //var name=document.getElementById('typeprofil').text;
        //var name2=document.getElementById('typeprofil').text;


        var name=$("#typeprofil option:selected").text();

        var name2=$("#typeprofil option:selected").text();
       // alert(name2)

       // var card2v=document.getElementById('card2').value;
       // var mothv=document.getElementById('zakaz_moth').value;
       // var zakaz_datev=document.getElementById('zakaz_date').value;
       // var zakaz_jarv=document.getElementById('zakaz_jar').value;
       // var name4v=document.getElementById('name4').value;
       // name4v="Покупатель:,bold:false"+'          '+name4v;


       // var number=document.getElementsByClassName('numt');
       // var numberpr=document.getElementsByClassName('numtpr');
       //
       // var nametr=document.getElementsByClassName('namet');
       // var nametpr=document.getElementsByClassName('nametpr');
       //
       // var amountr=document.getElementsByClassName('amount');
       // var amounttpr=document.getElementsByClassName('amountpr');
       //
       //
       // var edismr=document.getElementsByClassName('edism');
       // var edismpr=document.getElementsByClassName('edismpr');
       //
       // var zenaedr=document.getElementsByClassName('zenaed');
       // var zenaedpr=document.getElementsByClassName('zenaedpr');
       //
       // var zenapozr=document.getElementsByClassName('zenapoz');
       // var zenapozpr=document.getElementsByClassName('zenapozpr');
       //
       //
       //
       // var NN=$('.numt').length;
       //
       //
       //
       // var body = [];
       //
       // var body1 = [];
       //
       // body1.push({ text:'№',bold:true, fontSize:8,alignment:'center'});
       // body1.push({ text:'Товары (работы, услуги)',bold:true, fontSize:8,alignment:'center'});
       // body1.push({ text:'Кол-во',bold:true, fontSize:8,alignment:'center'});
       // body1.push({ text:'Ед.',bold:true, fontSize:8,alignment:'center'});
       // body1.push({ text:'Цена',bold:true, fontSize:8,alignment:'center'});
       // body1.push({ text:'Сумма',bold:true, fontSize:8,alignment:'center'});
       // body.push(body1);
       //
       //
       // var body2 = [];
       //
       // for (var i = 0; i < NN; i++){
       //     var num=i+1;
       //     //$(number[i]).val(num);
       //     //$(numberpr[i]).val(num);
       //
       //     var namev= $(nametr[i]).val();
       //     //$(nametpr[i]).val(namev);
       //
       //     var amountrv= $(amountr[i]).val();
       //     //$(amounttpr[i]).val(amountrv);
       //
       //     var edismrv= $(edismr[i]).val();
       //     //$(edismpr[i]).val(edismrv);
       //
       //     var zenaedrv= $(zenaedr[i]).val();
       //     //$(zenaedpr[i]).val(zenaedrv);
       //
       //     var zenapozrv= $(zenapozr[i]).val();
       //     //$(zenapozpr[i]).val(zenapozrv);
       //
       //
       //
       //     var num1=String(num);
       //
       //     var value = new Array();
       //     value.push({ text:num1, fontSize:8,alignment:'center'});
       //     value.push({ text: namev, fontSize:8,alignment:'left'});
       //     value.push({ text: amountrv, fontSize:8,alignment:'center'});
       //     value.push({ text: edismrv, fontSize:8,alignment:'center'});
       //     value.push({ text: zenaedrv, fontSize:8,alignment:'right'});
       //     value.push({ text: zenapozrv,style:"header33", fontSize:8,alignment:'right'});
       //     body.push(value);
       //
       // }
       //
       // var zenav=C5;
       // var zenav=String(zenav);
       //// alert(zenav)
       // var NNV=$('.numt').length;






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

                //{
                //  text:typecardv,
                //  style:'header2'
                //},

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
                    width: 405,
                    margin:[-5,0,0,0],

                   // image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RFQRXhpZgAATU0AKgAAAAgABAE7AAIAAABBAAAISodpAAQAAAABAAAIjJydAAEAAABEAAARBOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCi0YPQv9GW0YfQtdC90LrQvtCyINCe0LvQtdC60YHQsNC90LTRgCDQkNC90LDRgtC+0LvRltC50L7QstC40YcAAAAFkAMAAgAAABQAABDakAQAAgAAABQAABDukpEAAgAAAAMyOQAAkpIAAgAAAAMyOQAA6hwABwAACAwAAAjOAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyMTowNDoxMyAyMjoxMjowNwAyMDIxOjA0OjEzIDIyOjEyOjA3AAAAIgRDBD8EVgRHBDUEPQQ6BD4EMgQgAB4EOwQ1BDoEQQQwBD0ENARABCAAEAQ9BDAEQgQ+BDsEVgQ5BD4EMgQ4BEcEAAD/4QtTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIvPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj48eG1wOkNyZWF0ZURhdGU+MjAyMS0wNC0xM1QyMjoxMjowNy4yODk8L3htcDpDcmVhdGVEYXRlPjwvcmRmOkRlc2NyaXB0aW9uPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48ZGM6Y3JlYXRvcj48cmRmOlNlcSB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6bGk+0KLRg9C/0ZbRh9C10L3QutC+0LIg0J7Qu9C10LrRgdCw0L3QtNGAINCQ0L3QsNGC0L7Qu9GW0LnQvtCy0LjRhzwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCABmBAYDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6RooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAbJIkUbSSsERAWZicAAdTXAab401a81Wz1V7djoGp3n2CyhSP8Aed8Tsf7pKnj0rX8fzvLotvolsxFzrVwtmuDgqh+aRvwQH86159Ms44NMtUXyYrSZDAkfAG1SAPpiuunyQp3kruV/ku/3/kxM06KKK5BhRRRQAUUUUAJRQaTpQA6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAqtfXqWUKswLSSMEijHV2PQVZrn4mbUPHk+STBpdqqquePNlySfqEA/76rSEU229kBG2oahpfiPSLK8lN2NV85XCqFW3ZF3gjvjHy8+xrpKqyWiy6pBctyYI3VfYtj/4mrROBk8CiclKzA5O2dtX+KV4zANbaHZrDHntPN8zH8EVR+Jq9dPLfeNrO1j4t9Pga5mbPV3yiL+Qc/lWX4RvYYPDuseJ7zCR395Pd5z/yyT5EH4qg/Otnw3bzGzl1O8j8u61JxO8Z6xrgBE/BcZ9ya6KnuN+St8+v6iNmiiiuMYUUUUAFFFFACUgpaQUAOooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACqWp61peixRSazqVnp6TSCONrudYg7n+EFiMn2q7Xiv7TH/IteGf+w5H/AOgNQt0u7S+92E9It9k39yPYdR1Kx0ixe91a9t7G1jxvnuZVjRcnAyzEAckCn2l5bahZxXdhcRXVtMoeKaFw6Op6EMOCPpXzV8ffEd/431jUPDvh9i2keF4Gu9UmU/I033QhPcrnaB6l/wC7XY2fxEfwF8DPBEenWK6jrOrW8VrYWrPtVnwMsx9BlR9SOR1pRd439LfO6/NFNWlb1v8AK36M9qorzvw34o8fW/jWLQPHnh60aC6gMsGraHFO9tGw/wCWcpfO08Hkkc465zXI6N8Sfif4oHiW60G28JR2Wg3MsTi9juRI6puIxtYgnC+3NDaWvz+7QS10PcqK8h0j41yQ/AxfHXiWzt2vJLh7eG0sw0azSBiFUbixHAJJ54B47VBP8UvG/g+TRtR+I+iaRBoWsSLGsmnSSedYlhkCUOSGOOu30PPaqs729Px2FfS/r+G57LRXl3xF8f8AirRPiJ4e8LeD4NGkl1mFmEuppKVVgT3jYYGB6Gq/hvx944X4xx+CPGUHh/5rFrsy6Uk/p8ozI3tz8v40o+9t5/huOWn4fies0V5x8NfiHq3jGHxW+p29nEdGvpLa3+zo67lXdgtljk8dsVx6fHDxI3wHk8bGy0r+0l1T7GIvKk8nZgc48zdnn+9+FLmVr+Sf37Dtrbza+7c93orxD4ifHi88L6n4f0nQ7ewudQvIIZ9R89HZIBIFKqoVwQ3JPJOAV9at/FDx78Sfh8f7QSDwrPpF1fC1s1KXLXABBKmT5lXovOKqzv8AO3z/AKZKd/uv8j2SivMNe8feKvh54DutY8e22iXeoS3CW+m22jGYJIzAn5zJyMYJ49MdTUGnfEPxjoHjHQ9E+Jel6RBH4gBWyudKeQiKUY/dyBycnLAZBxyOvNC1dl/T3sF7K/8AVu56tRXkviLx945f4yTeCPBsHh7Edkt2JdVSf0G4Zjb34+Wl8E/EbxbqXi3xZ4f8VW+irc6Ba+aH01JQjvjPV2yR07A1HMrX9fw3Ktrb0/HY9ZorhvhD411Hx/4Ai1zWYbWC5e4kiKWqMqYU8cMzHP413NW01uSmnsFFFFIYUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVyngqTzpfEl/LkebrEy/N2WMLGP/AEGurrzzwxNI2o634bgkbzU1m4numIz5du+HUA+rZx+ddVGPNTnby+6//DCO7stzQea5yZSXGR0B6D8qpeKbxdP8I6rducCK0lYH32nH61qABVAHAA49q8t+NHjLT7Tw03hy2v4Fv9TljgkO8H7PGWGXI/DpSw9KVatGMV1/AG7I1NGshq/9l6BDGDpPh+KE3UoIK3FyqDEWO4Unc3vgV39cNo3iLR9G0uDR/Cun6hrHkjBktoDtdzyXaRsDJPJNaRPjHUgHj+waMmfuODcSY98YFa1qcpS10Xn+dt9RJnT9OtYmp+MvDujqTqOs2kRHG0SBm/IZNUl8GG9O7xFrN/qh3bvJ8zyYR/wBMZ/Emtex8PaPpqBbDS7SADoUhUH8+tYWpR3bfpp+f+Q9Tnv+FmaVNn+zNM1rUlxw9rp7lW57FsUz/hONcnDfYvAmsNxlTcPHFn82rtQABgDAoo9pSW0Pvb/SwanCQeL/ABnHLK+peAbgQLgp9lvYpHx9CRk+wq3pXxN0C/1Aadfm50TUGIVbXVITAzk/3SeG/A12FY3ifwzpPinRpbLWraOWPaSkrAboTj7yt1BFVz0pO0o29L/rcNTYorjfhNqF7qPw206XUrg3U0ZkhWc9ZURyqt78Ac12VZVIOnNwfQYtFFFZgFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAVir4z8Ltqf8AZq+JNIN9v8v7KL6Lzd393Zuzn2xT/FWhHxP4Xv8ARhqFzp32yIxm5tSA6g9Rz2PQ+xPIr5j+KXhD4c/DzR4vCqadqFz4pmt45o9YeYpCNzkFmXeQB8rfKEPGPmzzU3s9f+HKtdf1ofWdFed2914s0X4W+HLXwbDZeKNRa3iik1Ke7UWsaBRmUncGkXsNvOBk88HL8FfE/X734oXHgjxZDodxdLbGeO80KZ3iUgAlGDknOCfQjA4wc1o17zivP8DNP3VJ9T1iivD7X446y/h3xFPNY6dLqltrS6TpFtGHQTuzEAuCxJwBk4x+Ga7TW9V+JVrpuk22k6NoUuoyxl9S1K4uGWwtiM/KqbhK2fXBxx15xCd1f+tr/kV1t6/g7HeUV5V8PPiprPiTUvEui6vp2n3mqaGhkSTRJ90F51G1C7cHIAyT3OcYrKf4qeP9CvNAvvGPhzSrPStcvvskVhC0v2+DLYDMGO0+vA54+7mqtdrzt+Owm7J+R7VRXnWnfEDV7v4+6r4ImtrNdMtLFbmKYRuJmYrGeW3bSMu3RewqtpnxJ1i98f8AjrQ5baxFt4dtDPaOsb73bbn5zuwR9AKnmVk/Jv5LcqzvbzS+/Y9Oorwn/hf99afBGLxTqNtp/wDb17eSWtnaRI4ibYRl2UuWwAecHqVHGaval8YvEFn8NvBPiCKz003fiC9FvdI0Unlou5hlBvyDx3JqrP8AFL79ibr839257RRXBeGfGmteLPiFrVrpcGnf8Ivo8ptJLos7Tz3AXJ2EfJtB4OeenPPHe0uifcfVrsFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABXjX7SmjazrPg3R08Pabe6hcw6mJSllbvMyARv8xCg4Gcc17LRSauNOx4hF8Nb3wx+zjr9ibWa/8AEmrwG5vREhllklZgRGMZLbR9eSx71Q1zwP4iuPhR8OtX0rTLibVvC3lTy6XIvlyuuULDDDIYGMcYzgng9K9+oqm/e5l5fhe35iWis/P8dzznQPHHjDxX40tYtP8ACF3onhuKIm+uNdtWhuGfBwsSh8EZxyQe/TgHmPhZoOsad4f+JEeoaVfWr3l7ctbLPbOhnBR8FAR8wOR0r22iplFSTXdNfe1/kNNpp9mn93/Dnzjp3w08QeIv2XbbRFsLiz1mz1CS8isruMwPJhmG0h8YyrkgnAyBV/xefFfxj07QfCo8H6toQt7mOfVr7UYPKhjKqVPlE/6wfMxGPbjHNe/0VfN71/R/Nf8ADIWyt6/ieK6tZav4q/aO8PXdnoGq2mmeHY5Y7i+vbUxwykbsGN84cHK479eMVek0bVD+1ZFq4028/s0aN5ZvfIbyQ+D8u/G3PtmvXKKmPupLtf8AG/8AmJq7fy/A+dfAHwe0vX5/GN5448L3huRqUzWDXH2i33oSxyoBUOM455rCi8I+JB+ytNpJ8PaqNSOueaLL7FJ5xTA+bZt3Y98V9T0VPL7vL5Jfc0/xsVe7v5t/ff8AK58u698MdfsPhf4fuptMv9S8RanrUN7qQht2kkgjEbBEYKPlVQR14BYj0r0f9onRtU1vwZpEGjabeahLHq0cjx2kDSsqhHyxCg4HI5r1uitHK7v53+63+RKVvut+f+Z5j8dfA2peN/h/BDokIub3T7pbpbVm2+eoVlZQeOcNnqOh74rg/CXgfTdU+IGiz6D8LLvw7Zaey3N/e6492rrKpBVYAZgH+YdSCO5Axg/RVFTH3ZXXqDV42+R4v4Rs9Y8R/tF6p4uk0DVdI0qHTvsqNqlqYGlf5R8oJORwxyO2PWjwzoWrwfGT4lXs+l3sVpe2m21ne3cRznaOEYjDH6Zr2iip5Va3k195V9b+af3Hin7NWhvoXhnVIdR8N6to+rtLGbq4v7aSFLlPn8sRhjyVy2cAfeXr29rooq27kpWCiio7mV4LWWWKCS5eNCywxFQ8hAyFXcQuT0GSB6kUhklFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc0fFGsdvAmv/AIz6f/8AJVIfFGtc7fAuve2Z7D/5KoA6aiuXbxPruPk8C64D7z2H/wAlVEPEviPJ3eCtbx2w9h/8l1VvMDraK46TxB4lfOzwjrsf+6dPP87uq0mr+LXX5fD/AIiRs54XTcY9P+PqqUIveS/H/IR3VFcB9t8Us+X0XxVj+6raYO3/AF81A6+IJoyk2keNjkk5S701Pw4uKtU6fWa+5/5Bdno1Vp9SsbbP2i8t4sDJ3ygY/WvP/wCzDLEI73wV4vvB3+0apZtn8PtdWrW0s7IDyPhbq2R3eTT3P5m6NPloL7Tfy/4IanSS+M/DkK5fWLU56BH3H8hWK/xX8MnUBYWctxd3rHC28UJDt+DYqHUfE0ukWuYfAl/YXVw4htXnNlteVvug+VM7ds9McdRXOnwp9o0S7j1LwFrd3rd2GeXV2fTzIJT0ZM3WQBxgccCuqlDCqPPVTs9Fqv8ALZeotTd8SfEXWNHghFp4SuXuLqQRW0VxcIjSsewUZP1rnfDOieOLDxpqMOo6rZadda5EL+RoYfOwynaUBOOgYVs+HYNV0udNQ1jwj4j1fWFjEQvJpdPHlpjG1F+1YUep6nvVfxF45OneNtFm1Xw9qtnMtvOtrayfZ3kuJHKqMGOVxj8c98GtqVSF3RoRTund2ve2qtfoDXcn8Q6GdKslh1DX9V1XVNRYxWtqkoiEjnvhRwo6k1mt8MdB8Of8IzBJZpe6hd6shurmcl2fEbuQM/wgqPyrV0Rtfttbudc17wfrV7qswMcZgnsfJtouyR7rkH6kgE1F4/1LUNR8MSXD+EvEGnXFgwuLe8+0WmIH6biIrhmIwSMBTUxxEvaRoqW+7W19vuX9dBWW56WiLGoWNQqjoFGAKWuKtPHepanaRyaJ4N1i74AZrl4bdenUMznd+FKvxElNmLh/CWtBPONsWElqR5wO0oF87eeRj7nv0rz3RqLdFHaUV5z4L8VeKLjSLi91Twzq+pG8u5ZYHtZbQRxRZ2qi+ZOjcbTzjvXRf8JRq/8A0IviD/v/AKf/APJVTUg6c3B9BnSUVzf/AAlGr/8AQi+IP+/+n/8AyVVa78dXNg8K3/g/XbczPsjzLZOWPoAtyT+lQk27IDra4jxHf3viu6k8M+G5DHbEhNU1JCMRRn70SHu5HHtmodWvfEOsyCG68L66mn7lcLY3NojygdmZ7hWA9gPxrRstavdOtEtbH4f65BDGPlRJtPAH/k1W0XGk77v8F/mLc6HTNNtNH0u307TohDa20YjjQdgKtVzn/CT6t/0I2v8A/f8AsP8A5Ko/4SfVv+hF1/8A7/6f/wDJVYttu7GdJRXN/wDCUav/ANCJ4g/7/wCn/wDyVR/wlGr/APQieIP+/wDp/wD8lUgOkorm/wDhKNX/AOhE8Qf9/wDT/wD5Ko/4SjV/+hE8Qf8Af/T/AP5KoA6Siub/AOEo1f8A6ETxB/3/ANP/APkqtLSNUu9S877ZoWoaR5e3b9tkt283Oc7fJlfpjnOOoxnnABpUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQBh+M/+Ej/4RC/Pgo2/9tiPNsLkAqxyMgZOA2M4zxnGeK8O8Q+NviV4t8FzeDtS+Fl7LqN1ELeXUZYn8gv3kAKBFPcNvwDz7V9G0Urb32He1mt0fOHin4feJ9C+HPgPSLvTb/XtJ06d31zTdLdmeTfIHCgKQWCgsuRwD3Gc1b8D6Hd237QFhrFh4E1Hw14fm014LYSWm3GFPzTbciN2IIw5yfl65r6Eoq+bVvzb+9W/4Ylq6t/W9/8Ahz5Usvhx4igs/FHi7S9H1K18TaRrputND2r5uoCzbgiMMOOd2QCTjHeuo+IFvq/iTxh4T8ReIvB+v6x4VewBudGtIJPNtrr5t2+LKng7eTgEDr2P0HRURVkl2t+Vv+D6lPVt97/nf8PyPAPhjpXiLQ/iN4z1G18Dz6Qt5YCbS7GVPKt2wQViMqgorkEEr1BznoazPEL+LvGXiTw/qmkeBdb0LxzZzrHd6nJCy2IhXdwGZirD5s9MnkZbivpKiqjo4+X6N/569yWr38/6/wCGOI8W/CrQ/F2u22uS3ep6PrMCeWNQ0i68iVl54JwfU84zjjOK878GeDtV0H4gfEmM2esXFpPpzR2l9fJJI14xXtIR+8bJ7V73RUOO68mvvKvt6r8D5T8A/C7xC3w48S6r4h0rUEubTTbm00bTZrZlkDyKTI6xkbiTkKDjnJ9BWt4i8Ha3qHwP+HOkvoGpTSwX+L21W0k8yGMs+S4Aygwepx1r6Woq27/h+Db/ABuRb9fxt+VjyT4Z6brHgH4g654KOnXz+F5CbzSL37OzRRFuWiaXGM84+Y5yn+1XrdFFF9En0HbV2CiiikMKKKKACiufufEeqQXUsUXgvXLlI3KrNFNYhJADgMu65DYPUZAPqBUf/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVR/wlGr/9CJ4g/wC/+n//ACVQB0lFc3/wlGr/APQieIP+/wDp/wD8lUf8JRq//QieIP8Av/p//wAlUAdJRXN/8JRq/wD0IniD/v8A6f8A/JVH/CUav/0IniD/AL/6f/8AJVAHSUVzf/CUav8A9CJ4g/7/AOn/APyVRQB0lFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAQ3l5Bp9jPeXj+Xb28bSyvgnaqjJOByeB2rB03x9oGq6hY2drJfpNqClrQ3OlXVuk4C7yVeSNVPy89aveLIZbnwZrUFvG8sslhOiRopZnYxsAAB1JPauPk0jUJX+HKLaXCfZbOWO5YxNi3Y2e0b+Pl+bjnHPFK7tJ9rfjf/IH087/AIW/zLGqeJdI1jxdoH9n3ElzFa30kbzC2lEDSFSuEmKiNyGyCFYkc+lberePNA0S9vLW/lvvMsYhLdG30y5nSBCCwZ3jjZVGATye1cHbW+py/DrQfBMOh39vrNjNBDcSvaOtvAsbfPOs+PLbKgkBWLEtjHXEcniC21Dwv4ylVr3UL7xBZstlDZabczb0FqI0J2IQoZyx+bHDCt6knKiuXXlv81un82/wHFJySel/wPQ73xvodjd29q8l7PPc2ou4orPTbm5Ywk4DkRRttGfXFFj4n8N65caTNazLPPfrO1g0lq6uREQsv3lBTBwCDgn3rmfBxbUfF+kavaQzvp7+FYoBctC6p5gmGUyQMNweOtcvYaR4it4/BUFlpl/BcMdWt5bgwMosRLMCJXJHy/IGZc/eIUd6zejsvP8ABtL8kRF338vyTPTYvHnhqfTL/UIdUSS20+8NjO6ROT54IHlou3MjEsAAgOc8ZqRfGegvoNzrDXjx2VpL5Nz5ttLHJC+QNrxModT8y8FehB6HNecx+GbzSJrm5s9GuW0/SPF0d4tskDFntVtEi8yJcZk2k5wuSdpxzWt40kl174d+KrnTvD9zYrM8Hl3JtWjub0IybpGhZA6hACBvBJCk4Axmel/T8l/m/u9Snvb+t3/kmeharqlro2lz39/II4IVLMe59gO5PpXC2dje6N4Kutd1XMuq3TSy2tv2tnuH+VR/tfMuT7YrE8Pa23iLxKjarq0uqaDb75En1EQxMjAr5fEaRq275jjaSABkjPPU+JPFWmT69oGl2lwt60t0bmSK2XzW2RoSDgdtxWvShSnSahbXd+i6f5kcyZ1ekaemlaNZ2EQ+W2hWMe+BjNJqGrWmmqPtEmZW+5CnLv8AQVB5mp6in7pP7NiJ5aQB5SPYdFP1zU2n6PaadloVaSZjlppmLu34muJ2veb1K9CJ/wC075gIithbleWK7pT+HRf1qWx0i1sCXjVpZmOXnmbe7H6np+FXqKjmdrIYUUUlSAUgPNLSDrQA6iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAMzXfEOneHLSG51aWVEnnW3iWG2kneSRs7VCRqzEnB7VStPHXh+7g1KY3ktomlosl7/aFpNaGFWBKkiZFODg4xVPx5Z3V43hr7JbTT+Tr9rLL5UZby0G7LNjoBnqeK5TxX4e1fUdc8XzWWmzXK+ZpFzFGV2rdrA5eSNGb5WOBjGepA70ltr3t+C1/Fg97Ltf8Xp+B3+i+KtJ1+4lt9PmnW4hRZHt7u0ltpdjdHCSqrFSQRuAxkYzVC1+Ivhu9urSCC4vv9NuDbW00ml3UcMsoz8qytGEJ+Vv4uxrl9Z8RKfFsPjBNN1K30vRtKmgkkutPmgluLieSMRQJG6h25UchdoLDnrjFk1W30/wp4DtLm31lZNK1O2n1CefRbyKOIlJFZi7xAY8yQDr3prVr1X4u35a/NB0b8n+Cv+eh3958SfDNi179ouL/AMuxmaC5nj0m7khikBAKmVYinBI7960rjxXotpHrElzfLGmiKH1BmRgIQUEg7fNlSD8ufTrxXn+o6Pqb/DLx7app121xd6zcSW8IgYvMheMhkXGWBweR6UsuiapqXj3xjbTabdJpTG3vRM8RCXkiWqrHGnHz4kBc46GNB3NS2+W/W1/y/wCCVFJys9rtfjY7a58d+HrXT7C8a8mmi1G3+1Wy21nNPI8OAfMMaIXVQCMlgAMgHmr6+ItKe40uGO9SR9WjaSxMYLLOqqHLBgMY2kHkjPavNvCkF54SuNB1XWNI1J7abwpaWBNtYyzzW08RLNE8aKXXcG6kAZXBxxU/iG2vEu/A94um6n4ahtku/Pi0OxF61jvjAVNqQyLz0PyYznB4zWkkk36/q/8AJP8ApEK7t/XRf8MeqUVyvgO/1y+stROt/apbaK8ZNOu7+0+zXNzBgfNJFtXaQxZR8iZABxzk9VSGFFFFIAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAPI5rAPgzSItOsrTTopLA6enl2k0Ejb4l9NxJLD2bNb9FVGUoO8QOZ0zSdZ8OWMdhpYsbqxgXEMblo3AyScnkHk1YGr64kMfn+HpDKT84huY2XHsSR7VvUVp7VPeKf9eQjBOoeI551+z6NBbwkYJubkbh74XNZ2reFNa8R6VcWGr6+beC5QJIljCFwM5IDH16V19FNVnF3gkv687hY5XQvhx4c0C1SG3tDOU/5aXDbix9T2q+fDsKeLLPVodkcdrZyWyQogAUsynPHsuMVt0UpV6s25Sk2CSQUUUViMKKKKACkpaKAEpMc0tFAC0UUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAVNU0qz1mxNnqUPnW5kjkKbivzI4dTkEHhlB/CjU9Ls9Z097HUofOtpCrMm4rkqwYcgg9QDVuigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAEooooAWiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooA//9k='


                    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4RFQRXhpZgAATU0AKgAAAAgABAE7AAIAAABBAAAISodpAAQAAAABAAAIjJydAAEAAABEAAARBOocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCi0YPQv9GW0YfQtdC90LrQvtCyINCe0LvQtdC60YHQsNC90LTRgCDQkNC90LDRgtC+0LvRltC50L7QstC40YcAAAAFkAMAAgAAABQAABDakAQAAgAAABQAABDukpEAAgAAAAM2NgAAkpIAAgAAAAM2NgAA6hwABwAACAwAAAjOAAAAABzqAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyMTowNDoxNCAxNzoyNzo0OAAyMDIxOjA0OjE0IDE3OjI3OjQ4AAAAIgRDBD8EVgRHBDUEPQQ6BD4EMgQgAB4EOwQ1BDoEQQQwBD0ENARABCAAEAQ9BDAEQgQ+BDsEVgQ5BD4EMgQ4BEcEAAD/4QtTaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49J++7vycgaWQ9J1c1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCc/Pg0KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyI+PHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj48cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0idXVpZDpmYWY1YmRkNS1iYTNkLTExZGEtYWQzMS1kMzNkNzUxODJmMWIiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIvPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIj48eG1wOkNyZWF0ZURhdGU+MjAyMS0wNC0xNFQxNzoyNzo0OC42NTg8L3htcDpDcmVhdGVEYXRlPjwvcmRmOkRlc2NyaXB0aW9uPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIj48ZGM6Y3JlYXRvcj48cmRmOlNlcSB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6bGk+0KLRg9C/0ZbRh9C10L3QutC+0LIg0J7Qu9C10LrRgdCw0L3QtNGAINCQ0L3QsNGC0L7Qu9GW0LnQvtCy0LjRhzwvcmRmOmxpPjwvcmRmOlNlcT4NCgkJCTwvZGM6Y3JlYXRvcj48L3JkZjpEZXNjcmlwdGlvbj48L3JkZjpSREY+PC94OnhtcG1ldGE+DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9J3cnPz7/2wBDAAcFBQYFBAcGBQYIBwcIChELCgkJChUPEAwRGBUaGRgVGBcbHichGx0lHRcYIi4iJSgpKywrGiAvMy8qMicqKyr/2wBDAQcICAoJChQLCxQqHBgcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKir/wAARCABvBCADASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD6RooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiimySJFE0kjBURSzMegA70AY+t+LNL0C+tLO+kcz3R+VY13eWg6u3oo9a2QQygqQQRkEd6890TRG8R+Htf8AEF+nm3WvwSRW6HjyrcAiNAff72feu40m2+xaLZWoUr5Fuke0nOMKBjNdNanCCUY7rf8Ary2ErluiiiuYYUUUUAFJS0hoAKWkpaACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKyrvxBa2c7iVJPIidUmucARxMxwAST9M46ZFN8R6hLZWMMFp/x930620Jz90t1b8FBP4VB4i0OK/8ACUujIreVcGOJuecb13En1xk1tCMdHPr/AFcDe61zHj26YaBHpNvK0V1rVwlhEy9VD/fb8EDV04GAAOgrk79RqPxT0qEHculWE1069leQiNPxwHooW5+Z9Nfu/wCCBpa1cReH/CjJaoFEcaW1tGO7HCIo/MVsoCsahuoAzWFfbdV8VWVmuJItNzdz9wshG2NfryzfgK3qU9Iq++/9f11EFFFFZDCiiigApKWigBtOHSm96dQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFcF8afEureEvhbqGr+H7v7JfQywqkvlpJgNIoPDAjoT2pN2VxpXO9oryb4i/FK68G/CPSL23mWXxFrNpELY7AcOY1Ly7cY4z0xjLDjGa0fhB41vdb+EMXiTxlqcbSJJOZ7uVUhVUVyATtAUYHtVW1kv5SU7qL/mPSKK4/w58V/BHizWP7K0DX4bq+OdsLRSRl8Ak7d6gNwCeM8DNVdb+NHgDw7rVzpOs699mvrV9k0X2Od9pxnGVQg8Hs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'
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



