var Kpr1, Kpr2, Kpr3,Kpr4,Kall,C5;
Kpr1=1;
Kpr2=1;
Kpr3=1;
Kpr4=1;
Kall=1;
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
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.amount').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });

    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.edism').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });
    //===== закрываем ввод в поле  цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.zenaed').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });





    $('#name').on('input', function() {
      var name=document.getElementById('name').value;
        $('#name3').text(name);
    });

    ADDST1i();

    function ADDST1i() {
        var newSection = $('<tr class="block_uv1i"></tr>');
        newSection.html(
            '<th ><input type="text" class="numt" value="1" readonly></th>\n <th> <input type="text"   class="namet"  placeholder="Название товара" > </th>\n <th> <input type="text"   class="amount"  value="1" oninput="Sel_LineN1i(this)" > </th>\n<th> <input type="text"   class="edism"  value="1" > </th>\n<th> <input type="text"   class="zenaed" value="1000" oninput="Sel_LineN2i(this)"> </th>\n <th> <input type="text" class="zenapoz" value="1000" readonly> </th>'
        );
        $('#table_uv1i').append(newSection);


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
        C5=0;
        var number=document.getElementsByClassName('numt');
        var NN=$('.numt').length;


       for (var i = 0; i < NN; i++){
           var num=i+1;
           $(number[i]).val(num);
       }
        $('.zenapoz').each(function(){
            C5 += parseFloat($(this).val())
        });

        $('#itog1').text(C5);
        $('#itog2').text(C5);
        $('#itog3').text(C5);
        $('#numitog').text(NN);

        document.getElementById('itog1').value=C5;
        document.getElementById('itog2').value=C5;
        document.getElementById('itog3').value=C5;
        document.getElementById('numitog').value=NN;


    };
});



