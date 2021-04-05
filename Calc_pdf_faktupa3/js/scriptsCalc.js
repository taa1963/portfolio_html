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
});



