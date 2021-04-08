var C5;

C5=0;


$(document).ready(function() {

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


    //======================= Заполнение данных по Типу оплаты ========================\\
    function ADDOplata() {
        var newCategor = $('#typepl');
        for (var i = 0; i < oplata.length; i++) {
            $('<option value="' + oplata[i].val + '">' + oplata[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDOplata();


    //===== закрываем ввод в поле мощность цифр и отрицательных значений, запятую меняем на точку   =====//


    $('#card').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.amount').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.edism').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });
    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.zenaed').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
        Zena();
    });





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
            '<th ><input type="text" class="numt" value="1" readonly></th>\n <th> <input type="text"   class="namet"  value="Название товара"  > </th>\n <th> <input type="text"   class="amount"  value="1" oninput="Sel_LineN1i(this)" > </th>\n<th> <input type="text"   class="edism"  value="1" > </th>\n<th> <input type="text"   class="zenaed" value="1000" oninput="Sel_LineN2i(this)"> </th>\n <th> <input type="text" class="zenapoz" value="1000" readonly> </th>'
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

    function Sel_LineN1i(element) {

        var N = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.zenaed');
        var zenaed=parseFloat($(block2).val());

        var zenav=N*zenaed;



        zenav=zenav.toFixed(2);

        var block = $(element).parents('.block_uv1i');
        block.find('.zenapoz').val(zenav);
        Zena();


    }
    window.Sel_LineN1i = Sel_LineN1i;

    function Sel_LineN2i(element) {

        var zenaed = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.amount');
        var N=parseFloat($(block2).val());

        var zenav=N*zenaed;



        zenav=zenav.toFixed(2);

        var block = $(element).parents('.block_uv1i');
        block.find('.zenapoz').val(zenav);
        Zena();


    }
    window.Sel_LineN2i = Sel_LineN2i;







    function Zena(){

        var typecardv=document.getElementById('typecard').value;
        $('#typecardpr').text(typecardv);

        var typeplv=document.getElementById('typepl').value;
        $('#typeplpr').text(typeplv);

        var cardv=document.getElementById('card').value;
        $('#cardpr').text(cardv);

        var name=document.getElementById('name').value;
         $('#namepr').text(name);
        $('#name3pr').text(name);

        var card2v=document.getElementById('card2').value;
        $('#card2pr').text(card2v);

        //card2pr
         //alert(cardv)
        var mothv=document.getElementById('zakaz_moth').value;
        $('#zakaz_mothpr').text(mothv);

        var zakaz_datev=document.getElementById('zakaz_date').value;
        $('#zakaz_datepr').text(zakaz_datev);

        var zakaz_jarv=document.getElementById('zakaz_jar').value;
        $('#zakaz_jarpr').text(zakaz_jarv);

        var name4v=document.getElementById('name4').value;
        $('#name4pr').text(name4v);


        //zakaz_mothpr
        //cardpr



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


        // amount

        //namet


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
        var typeplv=document.getElementById('typepl').value;
        var cardv=document.getElementById('card').value;
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


        // amount

        //namet


        var NN=$('.numt').length;

       // var vv='[{text:'№',bold:true},{text:'Товары (работы, услуги)',bold:true},{text:'Кол-во',bold:true},{text:'Ед.',bold:true},{text:'Цена',bold:true},{text:'Сумма',bold:true}],;

            //['Первая','Вторая','Третья','Четвертая','Четвертая','Четвертая'],';

        var body = [];

        var body1 = [];

        body1.push({ text:'№',bold:true});
        body1.push({ text:'Товары (работы, услуги)',bold:true});
        body1.push({ text:'Кол-во)',bold:true});
        body1.push({ text:'Ед.)',bold:true});
        body1.push({ text:'Цена)',bold:true});
        body1.push({ text:'Сумма.)',bold:true});
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

            //['Первая','Вторая','Третья','Четвертая','Четвертая','Четвертая'],';
           // var vv=vv+[num+','+namev+','+amountrv+','+edismrv+','+zenaedrv+','+zenapozrv]+',';
           // vv=vv.toString();

            var num1=String(num);

            var value = new Array();
            value.push({ text:num1});
            value.push({ text: namev});
            value.push({ text: amountrv});
            value.push({ text: edismrv});
            value.push({ text: zenaedrv});
            value.push({ text: zenapozrv});
            body.push(value);

        }
       // C5 += parseFloat($(this).val());
        var zenav=C5;
        var zenav=String(zenav);
       // alert(zenav)
        var NNV=$('.numt').length;
       // var num1=String(num)
       //
       // var column = [];
       // column.push({ text:'№',bold:true});
       // column.push({ text:'Товары (работы, услуги)',bold:true});
       // column.push({ text:'Кол-во)',bold:true});
       // column.push({ text:'Ед.)',bold:true});
       // column.push({ text:'Цена)',bold:true});
       // column.push({ text:'Сумма.)',bold:true});





        var docInfo = {

            info: {
                title:'Счет-фактура',
                author:'alex',
                subject:'Theme',
                keywords:'Счет-фактура'
            },

            pageSize:'A4',
            pageOrientation:'landscape',//'portrait'
            pageMargins:[50,50,30,60],

            header:function(currentPage,pageCount) {
                return {
                    text: currentPage.toString() + 'из' + pageCount,
                    alignment:'right',
                    margin:[0,30,10,50]
                }
            },


            content: [

                {
                  text:typecardv,
                  style:'header2'
                },

                {
                    text:typeplv,
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
                    text:'__________________________________________________________________________________________________________________________________________________________________',
                    style:'header2'


                },

                {

                    text:['Поставщик:',' ',{text:name2,bold:true}],
                    style:'header5'
                },

                {
                    text:['Покупатель:',' ',{text:name4v,bold:true}],
                    style:'header5'
                },

                {
                    text:'',
                    style:'header5'
                },


                {
                    table:{
                        margin:[0,15,0,0],
                        widths:[65,320,65,65,65,130],
                        body: body,

                        headerRows:1
                    }
                },


                {
                    text:['Итого:','                                       ', {text:zenav,bold:true}],
                    style:'header7'

                },
                {
                    text:['Всего к оплате:','                                       ', {text:zenav,bold:true}],
                    style:'header7'

                },

                {

                   // text:'Номер карты:'+' '+ cardv,
                    text:['Всего наименований'+'  '+NNV +', на сумму'+zenav+''+'руб.'],
                    style:'header3'

                },
                {
                    text:'__________________________________________________________________________________________________________________________________________________________________',
                    style:'header2'


                },

                {


                    text:[{text:'Исполнитель',bold:true}, {text:'         '}, {text:'_______________________ ',bold:false}, {text:'                                                               '},  {text:'Заказчик',bold:true}, {text:'         '},{text:'_____________________ ',bold:false}],
                    style:'header9'
                }
              //  {
              //      width: 500,
              //     // alignment: 'center',
              //      //image: '"../img/pp1.PNG"',
              //      //image: 'data:image/png;base64, '+this.getBase64Image("../img/pp1.PNG"),
              //      image:  'data:image/png;base64,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'
              //
              ////  'data:image/png;base64,'+ this.getBase64Image("../imagenes/logoExportarPdf.png")
              //    //  bold:true,
              //     // fontSize: 10
              //     // margin: [40, 20, 0, 0],
              //     // height:80
              //  }











            ],

            styles: {

                header: {
                    fontSize:25,
                    bold:true,
                    alignment:'right'
                },

                header2: {
                    fontFamily: "ArialBold",
                    fontSize:10,
                    bold:true

                },
                header3: {
                    fontFamily: "ArialRegular",
                    fontSize:10,
                    margin:[0,5,0,0],
                    bold:false

                },
                header4: {
                    fontFamily: "ArialBold",
                    fontSize:18,
                    margin:[0,20,0,0],
                    fontWeight:900,
                    bold:false

                },
                header5: {
                    fontFamily: "ArialRegular",
                    fontSize:12,
                    margin:[0,15,0,0],
                    bold:false

                },
                header6: {
                    fontFamily: "ArialRegular",
                    fontSize:12,
                    border:'none',
                    layout: 'noBorders'
                },
                header7: {
                    margin:[120,5,0,0],
                    fontFamily: "ArialBold",
                    fontSize:12,
                    bold:true,
                    alignment:'right'
                },
                header9: {
                    fontFamily: "ArialBold",
                    fontSize:12,
                    bold:true,
                    margin:[0,15,0,0]
                }
            }
        }

        pdfMake.createPdf(docInfo).download('faktura.pdf');
    }


    window.getPDF = getPDF;



});



