var C5;

C5=0;


$(document).ready(function() {
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


    //var name=document.getElementById('name').value;
    //console.log(name)
    //alert(name)
    //$('#name3').text(name);

    //======================= Заполнение данных по Типу карты ========================\\
    function ADDProduct() {
        var newCategor = $('#typecard');
        for (var i = 0; i < product.length; i++) {
            $('<option value="' + product[i].val + '">' + product[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDProduct();


    ////======================= Заполнение данных по Типу оплаты ========================\\
    //function ADDOplata() {
    //    var newCategor = $('#typepl');
    //    for (var i = 0; i < oplata.length; i++) {
    //        $('<option value="' + oplata[i].val + '">' + oplata[i].name + '</option>').appendTo(newCategor);
    //    }
    //}
    //
    //ADDOplata();


    //===== закрываем ввод в поле мощность цифр и отрицательных значений, запятую меняем на точку   =====//


    //$('#card').on('input', function() {
    //    //alert(3333)
    //    $(this).val($(this).val().replace (/\D/, ''));
    //    //this.value.replace(/\s+/g, '');
    //    //$(this).val($(this).val().replace(/\,/g));
    //    //$(this).val($(this).val().replace(
    //    //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    //    Zena();
    //});

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.amount').on('input', function() {
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.edism').on('input', function() {
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });
    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


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





    $('#name').on('input', function() {
      var name=document.getElementById('name').value;
        $('#name3').text(name);
        $('#namepr').text(name);


    });

    $('#name4').on('input', function() {
        var name=document.getElementById('name4').value;

        $('#name4pr').text(name);


    });

    ADDST1i();
    Zena();

    function ADDST1i() {
        var newSection = $('<tr class="block_uv1i"></tr>');
        newSection.html(
            '<th ><input type="text" class="numt" value="1" readonly></th>\n <th> <input type="text" style="text-align:left";  class="namet"  placeholder="Название товара"  > </th>\n <th> <input type="text"   class="amount"  value="1" oninput="Sel_LineN1i(this)" > </th>\n<th> <input type="text"   class="edism"  value="1" > </th>\n<th style="word-wrap:break-word;"> <input type="text"   class="zenaed" value="1000"  oninput="Sel_LineN2i(this)"> </th>\n <th style="word-wrap:break-word;"> <input style="word-wrap:break-word;" type="text" class="zenapoz" value="1000" readonly > </th>'
        );
        $('#table_uv1i').append(newSection);


        var newSection = $('<tr class="block_uv1ipr"></tr>');
        newSection.html(
            '<th ><input type="text" class="numtpr" value="1" readonly></th>\n <th> <input type="text"   class="nametpr" value="1"  > </th>\n <th> <input type="text"   class="amountpr"  value="1"  > </th>\n<th> <input type="text"   class="edismpr"  value="1" > </th>\n<th> <input type="text"   class="zenaedpr" value="1000" > </th>\n <th> <input type="text" class="zenapozpr" value="1000" readonly> </th>'
        );

        $('#table_uv1ipr').append(newSection);


    }

    $('#butuv1i').click(function () {
        ADDST1i();
        Zena();
    });

    function ADDST2i() {
        var newSection = $('<p class="card">Номер карты:</p>');
        newSection.html(
            'Номер карты:<input type="text" class="card1"  value="5644332244"  maxlength="120">'
        );
        $('.cardbl').append(newSection);


    }


    $('#butuv2i').click(function () {
        ADDST2i();
        //Zena();
    });




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

        var typecardv=document.getElementById('typecard').value;
        $('#typecardpr').text(typecardv);

        //var typeplv=document.getElementById('typepl').value;
        //$('#typeplpr').text(typeplv);





        //var cardv=document.getElementById('card1').value;
        //$('#cardpr').text(cardv);

        var name=document.getElementById('name').value;
         $('#namepr').text(name);
        $('#name3pr').text(name);

        var card2v=document.getElementById('card2').value;
        $('#card2pr').text(card2v);


        var mothv=document.getElementById('zakaz_moth').value;
        $('#zakaz_mothpr').text(mothv);

        var zakaz_datev=document.getElementById('zakaz_date').value;
        $('#zakaz_datepr').text(zakaz_datev);

        var zakaz_jarv=document.getElementById('zakaz_jar').value;
        $('#zakaz_jarpr').text(zakaz_jarv);

        var name4v=document.getElementById('name4').value;
        $('#name4pr').text(name4v);




        C5=0;
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


       for (var i = 0; i < NN; i++){
           var num=i+1;
           $(number[i]).val(num);
           $(numberpr[i]).val(num);
           var namev= $(nametr[i]).val();
            $(nametpr[i]).val(namev);

           var amountrv= $(amountr[i]).val();
           $(amounttpr[i]).val(amountrv);

           var edismrv= $(edismr[i]).val();
           $(edismpr[i]).val(edismrv);

           var zenaedrv= $(zenaedr[i]).val();
           $(zenaedpr[i]).val(zenaedrv);

           var zenapozrv= $(zenapozr[i]).val();
           $(zenapozpr[i]).val(zenapozrv);



       }



        $('.zenapoz').each(function(){
            C5 += parseFloat($(this).val())
        });

        $('#itog1').text(C5);
        $('#itog2').text(C5);
        $('#itog3').text(C5);
        $('#numitog').text(NN);

        $('#itog1pr').text(C5);
        $('#itog2pr').text(C5);
        $('#itog3pr').text(C5);
        $('#numitogpr').text(NN);

        document.getElementById('itog1').value=C5;
        document.getElementById('itog2').value=C5;
        document.getElementById('itog3').value=C5;
        document.getElementById('numitog').value=NN;


    };

    function getPDF(){



        var typecardv=document.getElementById('typecard').value;
        //var typeplv=document.getElementById('typepl').value;

        var cardv='';
        var NN1=$('.card1').length;

        var cardr=document.getElementsByClassName('card1');
        for (var i = 0; i < NN1; i++){
            var cardv=cardv+$(cardr[i]).val()+','+' ';
        }





        var name=document.getElementById('name').value;
        var name2=document.getElementById('name').value;

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
            value.push({ text: zenaedrv, fontSize:8,alignment:'left,wordWrap:"break-word"'});
            value.push({ text: zenapozrv,style:"header33", fontSize:8,alignment:'left'});
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
            pageMargins:[80,100,30,60],

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
                    text:'Номер карты:'+' '+ cardv,
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

                {

                    text:['Поставщик:'+'          ',{text:name2,bold:true}],
                    style:'header5'
                },

                {
                    text:['Покупатель:'+'         ',{text:name4v,bold:true,alignment:'left'}],
                    style:'header5'
                },

                //{
                //    text:'',
                //    style:'header5'
                //},


                {
                    table:{
                        margin:[0,5,0,0],
                        widths:[15,170,35,35,35,50],
                        body: body,

                        headerRows:1
                    }
                },


                {
                    text:['Итого:','                         ', {text:zenav,bold:true}],
                    style:'header7'

                },
                {
                    text:['Всего к оплате:','                         ', {text:zenav,bold:true}],
                    style:'header7'

                },

                {


                    text:['Всего наименований'+'  '+NNV +', на сумму'+zenav+''+'руб.'],
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
                    margin:[-5,5,0,0],
                    image: 'data:image/jpeg;base64,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'


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
                    margin:[0,0,0,0],
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
                    margin:[2,2,90,0],
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

                }
            }
        }

        pdfMake.createPdf(docInfo).download('faktura.pdf');
    }


    window.getPDF = getPDF;



});



