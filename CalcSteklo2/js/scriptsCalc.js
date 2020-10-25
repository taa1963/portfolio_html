
var typeS, typeF, N, Sall ;
typeS=0;
typeF=0;
N=1;
Sall=0;
$(document).ready(function() {



    //======== Выбор на первом блоке сделан=====//
$(".calculator_types input").on("click", function() {

    $(".calculator_types input").removeAttr("checked"); // Снимаем чекбокс со всей группы
    $(this).prop("checked", true); // Оставляем выбранный чекбокс
    typeS=$(this).val();
    //alert(typeS);
    $('.calculator_typesf').addClass('open');

   if ($('.calculator_itog').is(":visible"))
    {

        $('.calculator_itog').removeClass('open');
       // $('.calculator_typesf').removeClass('open');
        $('.calculator_typest').removeClass('open');
        $('.calculator_shsts').removeClass('open');
        $('.calculator_farn').removeClass('open');
        $(".calculator_typef input").removeAttr("checked"); // Снимаем чекбокс со всей группы


    }


});

    //======== Выбор на втором блоке сделан=====//
    $(".calculator_typesf input").on("click", function() {

        $(".calculator_typef input").removeAttr("checked"); // Снимаем чекбокс со всей группы
        $(this).prop("checked", true); // Оставляем выбранный чекбокс
        typeF=$(this).val();

        if ($('.calculator_itog').is(":visible")){
            ADDST();
            calculate();
        }

            else
            {
                $('.calculator_typest').addClass('open');
                ADDST();
            }
    });




    //======== Заполнения выпадающего списка в 3 блоке=====//

    function ADDST() {

        var m=0;

        if (typeS==1){
            if (typeF==1){
               m= pr1;

            }
            if (typeF==2){
                m= pr2;


            }
            if (typeF==3){
                m= pr3;
            }

        }
        if (typeS==2){
            if (typeF==1){
                m=pomb1;
            }
            if (typeF==2){
                m=pomb2;
            }
            if (typeF==3){
                m=pomb3;
            }
        }
        var sss= $('.block_uv2');
        sss.remove();

        var newSection = $('<div class="block_uv2"> </div>');
        newSection.html(
            ' <select required class="thickness" id="sel1" onChange="SelST(this)" >\n <option value="0"> Выберите толщину стекла</option>\n</select>'
        );
        $('#calculator_typet').append(newSection);

        var newSelSek = $('.thickness');


        for (var i = 0; i < m.length; i++)  {
            $('<option  value="' + m[i].zena + '">' + m[i].name + '</option>').appendTo(newSelSek);

        }
     }



    //======== Выбор на3 блоке сделан=====//
       function SelST(){

           $('.calculator_shsts').addClass('open');
           $('.calculator_itog').addClass('open');
           var Ns= document.getElementsByClassName('block_uv').length;


           if (Ns==0){
               ADST();
           }

           calculate();


    }
    window.SelST = SelST;

    function ADST() {

        var newSection = $('<tr class="block_uv"></tr>');
        newSection.html(
            '<td style="width:20%;"> <span class="num">Name</span></td>\n <td style="width:20%;">\n <input type="text" class="dlokna" value="0"  maxlength="6" min="0" oninput="Sokna(this)">\n</td>\n <td style="width:20%;"> <input type="text" class="lokna" value="0"  maxlength="6" oninput="Sokna(this)"></td>\n <td  style="width:20%"> <input type="text" class="soknav"  value="0" oninput="SoknaS(this)" > </td>\n <td  style="width:25%"><button class="but_del" onclick="DelOkna(this); ">Удалить объект</button>  </td>'
        );
        $('#table_uv').append(newSection);

        var newSelSek = $(newSection).find('.num');

        var Name="Стекло №"+N;
        $(newSelSek).text(Name);
        N=N+1;

    }



    // ======Только одна точка или одна запятая=====//

    function t(e) {
        //if (e.currentTarget.val().indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
        //    return !(/[.,]/.test(e.key));
        //}
        // alert(333333)
        var keyCodeEntered = (event.which) ? event.which : (window.event.keyCode) ? window.event.keyCode : -1;

        if ((keyCodeEntered >= 48) && (keyCodeEntered <= 57)) {
            return true;

        } else if (keyCodeEntered == 46) {

            if ((e.val()) && (e.val().indexOf('.') >= 0)) {
                return false;
            } else {
                return true;
            }
        }
        return false;

    }



    //=======  Вычисление площади одного окна    =====//
    function Sokna(element){
        //===== закрываем ввод в полях окна  цифр и отрицательных значений, запятую меняем на точку   =====//
        var block1 = $(element).parents('.block_uv').find('.dlokna');
        $(block1).val($(block1).val().replace(/\,/g, '.'));
        $(block1).val($(block1).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

        var dlokna=parseFloat($(block1).val());





        var block2 = $(element).parents('.block_uv').find('.lokna');
//===== закрываем ввод в полях окна  цифр и отрицательных значений, запятую меняем на точку   =====//
       $(block2).val($(block2).val().replace(/\,/g, '.'));
        $(block2).val($(block2).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

        var lokna=parseFloat($(block2).val());
        var zokna=dlokna*lokna;

       var Pr= Number.isNaN(zokna);
        if (Pr==true){
            zokna=0;
        }
        zokna=zokna.toFixed(2);
        var block3 = $(element).parents('.block_uv');
        block3.find('.soknav').val(zokna);
        SALL();
    }
    window.Sokna = Sokna;

    //=======  Вычисление площади одного окна    =====//
    function SoknaS(element){
        //===== закрываем ввод в полях окна  цифр и отрицательных значений, запятую меняем на точку   =====//
        var block1 = $(element).parents('.block_uv').find('.soknav');
        $(block1).val($(block1).val().replace(/\,/g, '.'));
        $(block1).val($(block1).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));

        var soknavP=parseFloat($(block1).val());

        // alert(soknavP);





        var lokna=soknavP/2;


        var Pr= Number.isNaN(lokna);
        if (Pr==true){
            lokna=0;
        }
        lokna=lokna.toFixed(2);
        var block3 = $(element).parents('.block_uv');
        block3.find('.lokna').val(lokna);
        block3.find('.dlokna').val(lokna);


        SALL();
    }
    window.SoknaS = SoknaS;



  //=======  добавление нового окна    =====//
    $('#but_add').click(function () {
        ADST();
    });

//===== Удаление текущего окна    =====//
    function DelOkna(element) {
        var sss= $(element).parents('.block_uv');
        sss.remove();
        SALL();
    }

    window.DelOkna = DelOkna;


//===== вычисление общей площади окон    =====//
    function SALL() {
        Sall=0;
        $('.soknav').each(function(){
            Sall += parseFloat($(this).val())
        });
        calculate();
     }



    // ======Открытие блока фарнитуры=====//
   $('#farn').on("click", function() {

       if ($("#farn").is(':checked')){
               $('#farns1').addClass('open');
       } else {
           $('#farns1').removeClass('open');
       }
       calculate();
       });


    // ======Количество держателей=====//

    $('#Nder').on("input", function() {
   //===== закрываем ввод в полях окна  все кроме цифр    =====//
        $('#Nder').val($('#Nder').val().replace (/\D/, ''));

       var Nd=document.getElementById('Nder').value;

        if (Nd<=6){
            document.getElementById('Nder').value=6;
        }
        calculate();
    });


    function calculate() {
        var St = document.getElementById('sel1').value;
        var Zena =St*Sall;
        if ($("#farn").is(':checked')){
            var Nd=document.getElementById('Nder').value;
            var Ns= document.getElementsByClassName('block_uv').length;
            var ZFarn=Nd*Zder;
            //Zena=Zena+dZ;
        }
        Zena=Zena*Naz;
        var ZenaR=Zena;
        var Sv=Sall;
        Sv=Sv.toFixed(2);


        $('#StsS').text(Sv);

        Zena=Zena.toFixed(2);

        Zena=new Intl.NumberFormat('ru-RU').format(Zena);
        $('#ZenaS').text(Zena);

        var Zm=ZenaR/Sall;
        if (Sall==0){
            Zm=0;
        }
        Zm=Zm.toFixed(2);
        Zm=new Intl.NumberFormat('ru-RU').format(Zm);
        $('#ZenaM').text(Zm);

        ZFarn=ZFarn.toFixed(2);
        $('#ZenaF').text(ZFarn);
    }



});





