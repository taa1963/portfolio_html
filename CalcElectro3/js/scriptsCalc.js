






$(document).ready(function() {


    //===== закрываем ввод в поле мощность цифр и отрицательных значений, запятую меняем на точку   =====//


    $('#powers').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });


    // ======Только одна точка или одна запятая=====//

    $('#powers').keypress(function(e) {
        if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
            return !(/[.,]/.test(e.key));
         }
        var powersvv = document.getElementById('powers').value;
        powersvv=+powersvv;
        if (powersvv>=999){
            powersvv=999;
            document.getElementById('powers').value=powersvv;
        }
    });



    //===== Открытие и закрытие блоков после введение мощности Enter  =====//


    // $("#id_of_input").keyup(function(event){
    //     if(event.keyCode == 13){
    //         event.preventDefault();
    //
    //     }
    // });


    $('#powers').keyup(function (event){

        if(event.keyCode == 13){
            event.preventDefault();


        var powersv = document.getElementById('powers').value;
        if (powersv==''){
            var block = $(this).parents('.calc_form');
            block.find('.potential').hide();
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();
             block.find('.bild').hide();
            document.getElementById('reliabilitys').value=-1;
            document.getElementById('payments').value=-1;
            $('#building1').prop({'checked': false});
            $('#building2').prop({'checked': false});
            Zorg=0;

        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.potential').show();
            if (powersv>150) {
                if ($('#bild3').css('display') == "block"){
                    var div = document.getElementById('galer_block');
                    $('.block_galer_uv').remove();
                    div.style.display = 'none';
                    $('#galer_check').prop({'checked': false});
                    //ADDLGAL();
                    C3=0;

                    var div = document.getElementById('linev_block');
                    $('.block_line_uv').remove();
                    div.style.display = 'none';
                    $('#linev_check').prop({'checked': false});
                    C2=0;

                    var div = document.getElementById('sekcion_block');
                    $('.block_sek').remove();
                    div.style.display = 'none';
                    $('#sekcion_check').prop({'checked': false});
                    C6=0;

                    var div = document.getElementById('transformv_block');
                    $('.block_uv').remove();
                    div.style.display = 'none'
                    $('#transformv_check').prop({'checked': false});
                    C5=0;
                    zena();
                }


                if ($('#bild3i').css('display') == "block"){

                    var div = document.getElementById('galer_blocki');
                    $('.block_galer_uvi').remove();
                    div.style.display = 'none';
                    $('#galer_checki').prop({'checked': false});
                    //ADDLGAL();
                    C3=0;

                    var div = document.getElementById('linev_blocki');
                    $('.block_line_uvi').remove();
                    div.style.display = 'none';
                    $('#linev_checki').prop({'checked': false});
                    C2=0;

                    var div = document.getElementById('sekcion_blocki');
                    $('.block_seki').remove();
                    div.style.display = 'none';
                    $('#sekcion_checki').prop({'checked': false});
                    C6=0;

                    var div = document.getElementById('transformv_blocki');
                    $('.block_uvi').remove();
                    div.style.display = 'none'
                    $('#transformv_checki').prop({'checked': false});
                    C5=0;


                    zena();
                }


                if ($('#bild1').css('display') == "block"){
                    var div = document.getElementById('galer_block1');
                    $('.block_galer_uv1').remove();
                    div.style.display = 'none';
                    $('#galer_check1').prop({'checked': false});
                    //ADDLGAL();
                    C3=0;

                    var div = document.getElementById('linev_block1');
                    $('.block_line_uv1').remove();
                    div.style.display = 'none';
                    $('#linev_check1').prop({'checked': false});
                    C2=0;

                    var div = document.getElementById('sekcion_block1');
                    $('.block_sek1').remove();
                    div.style.display = 'none';
                    $('#sekcion_check1').prop({'checked': false});
                    C6=0;

                    var div = document.getElementById('transformv_block1');
                    $('.block_uv1').remove();
                    div.style.display = 'none'
                    $('#transformv_check1').prop({'checked': false});
                    C5=0;


                    zena();
                }


                if ($('#bild1i').css('display') == "block"){

                    var div = document.getElementById('galer_block1i');
                    $('.block_galer_uv1i').remove();
                    div.style.display = 'none';
                    $('#galer_check1i').prop({'checked': false});
                    //ADDLGAL();
                    C3=0;

                    var div = document.getElementById('linev_block1i');
                    $('.block_line_uv1i').remove();
                    div.style.display = 'none';
                    $('#linev_check1i').prop({'checked': false});
                    C2=0;

                    var div = document.getElementById('sekcion_block1i');
                    $('.block_sek1i').remove();
                    div.style.display = 'none';
                    $('#sekcion_check1i').prop({'checked': false});
                    C6=0;

                    var div = document.getElementById('transformv_block1i');
                    $('.block_uv1i').remove();
                    div.style.display = 'none'
                    $('#transformv_check1i').prop({'checked': false});
                    C5=0;

                    zena();
                }
            }
           zena();

        }
        }
    });

    // $('#powers').bind('change keyup',function (){
    //     var powersvv = document.getElementById('powers').value;
    //     powersvv=+powersvv;
    //     if (powersvv>=999){
    //         powersvv=999;
    //         document.getElementById('powers').value=powersvv;
    //     }
    //
    //     var powersv = document.getElementById('powers').value;
    //     if (powersv==''){
    //         var block = $(this).parents('.calc_form');
    //         block.find('.potential').hide();
    //         block.find('.reliability').hide();
    //         block.find('.payment').hide();
    //         block.find('.building').hide();
    //         block.find('.itog').hide();
    //         block.find('.bild').hide();
    //         document.getElementById('reliabilitys').value=-1;
    //         document.getElementById('payments').value=-1;
    //         $('#building1').prop({'checked': false});
    //         $('#building2').prop({'checked': false});
    //         Zorg=0;
    //
    //     }
    //
    //
    //         else {
    //         var block = $(this).parents('.calc_form');
    //         block.find('.potential').show();
    //          if (powersv>150){
    //              if ($('#bild3i').css('display') == "block") {
    //                  Sel_GalZAlli();
    //                  Sel_LineZAlli();
    //                  ALLUvvi();
    //                  ALLSeki();
    //              }
    //
    //              if ($('#bild3').css('display') == "block") {
    //
    //                  var element=document.getElementById('sekcion_uv');
    //                      //sekcion_uv
    //                  for  (var i = 0; i < $(element).parents('.block_sek').length; i++)  {
    //
    //                      var ZsekST = element.value;
    //
    //                      var block = $(element).parents('.block_sek');
    //                      block.find('.sek_v').val(ZsekST);
    //
    //                      var Ni = document.getElementById('powers').value;
    //
    //                      Ni = +Ni;
    //                      var ZsekZena = ZsekST * Ni;
    //                      var block = $(element).parents('.block_sek');
    //                      block.find('.sek_v_z').val(ZsekZena);
    //                  }
    //
    //
    //                  Sel_GalZAll();
    //                  Sel_LineZAll();
    //                  ALLSek();
    //                  ALLUvv();
    //              }
    //     }
    //         //alert(2);
    //         // powersv=+powersv;
    //         // console.log(powersv);
    //             zena();
    //         }
    // });



    //===== Открытие и закрытие блоков после выбора уровня напряжения   =====//


    $('#potentials').click(function (){

        var potentialsv = document.getElementById('potentials').value;
        // alert(powersv);

        if (potentialsv>=0){

            var block = $(this).parents('.calc_form');
            block.find('.reliability').show();

            if ($('#bild').css('display')== "block"){
                block.find('.itog').show();
                block.find('.reliability').show();
                block.find('.payment').show();
                block.find('.building').show();
                zena();
            }


           if ($('#bild3').css('display') == "block"){
              var div = document.getElementById('galer_block');
               $('.block_galer_uv').remove();
               div.style.display = 'none';
               $('#galer_check').prop({'checked': false});
               //ADDLGAL();
               C3=0;

               var div = document.getElementById('linev_block');
               $('.block_line_uv').remove();
               div.style.display = 'none';
               $('#linev_check').prop({'checked': false});
               C2=0;

               zena();
            }


            if ($('#bild3i').css('display') == "block"){

                var div = document.getElementById('galer_blocki');
                $('.block_galer_uvi').remove();
                div.style.display = 'none';
                $('#galer_checki').prop({'checked': false});
                //ADDLGAL();
                C3=0;

                var div = document.getElementById('linev_blocki');
                $('.block_line_uvi').remove();
                div.style.display = 'none';
                $('#linev_checki').prop({'checked': false});
                C2=0;

                zena();
            }


            if ($('#bild1').css('display') == "block"){
                var div = document.getElementById('galer_block1');
                $('.block_galer_uv1').remove();
                div.style.display = 'none';
                $('#galer_check1').prop({'checked': false});
                //ADDLGAL();
                C3=0;

                var div = document.getElementById('linev_block1');
                $('.block_line_uv1').remove();
                div.style.display = 'none';
                $('#linev_check1').prop({'checked': false});
                C2=0;

                zena();
            }


            if ($('#bild1i').css('display') == "block"){

                var div = document.getElementById('galer_block1i');
                $('.block_galer_uv1i').remove();
                div.style.display = 'none';
                $('#galer_check1i').prop({'checked': false});
                //ADDLGAL();
                C3=0;

                var div = document.getElementById('linev_block1i');
                $('.block_line_uv1i').remove();
                div.style.display = 'none';
                $('#linev_check1i').prop({'checked': false});
                C2=0;

                zena();
            }





        }

        if (potentialsv==-1){

            var block = $(this).parents('.calc_form');
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();
            block.find('.bild').hide();
            document.getElementById('reliabilitys').value=-1;
            document.getElementById('payments').value=-1;
            $('#building1').prop({'checked': false});
            $('#building2').prop({'checked': false});
            Zorg=0;

        }
    });

    //===== Открытие и закрытие блоков после выбора категории нажежности   =====//


    $('#reliabilitys').click(function (){

        var reliabilitysv = document.getElementById('reliabilitys').value;
        // alert(powersv);

        if (reliabilitysv>=0){


                var block = $(this).parents('.calc_form');
            block.find('.payment').show();
            if (itog==1){
                block.find('.itog').show();
                block.find('.payment').show();
                block.find('.building').show();

            }
            if (StrN=0){
                block.find('.bild').show();

            }
            zena();



        }
        else{
            var block = $(this).parents('.calc_form');
             block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();
            block.find('.bild').hide();
            document.getElementById('payments').value=-1;
            $('#building1').prop({'checked': false});
            $('#building2').prop({'checked': false})
            Zorg=0;
        }
    });


    //===== Открытие и закрытие блоков после выбора способа расчета   =====//


    $('#payments').click(function (){

        var paymentsv = document.getElementById('payments').value;
        // alert(powersv);

        if (paymentsv>=0){
              C2=0;
              C3=0;
              C5=0;
              C6=0;

                var block = $(this).parents('.calc_form');
                block.find('.building').show();
                 if (itog==1){
                     block.find('.itog').show();

                 }
               if (StrN=1){
                   block.find('.bild').show();

               }

                zena();


        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.building').hide();
            block.find('.itog').hide();
            block.find('.bild').hide();
            $('#building1').prop({'checked': false});
            $('#building2').prop({'checked': false});
            Zorg=0;

        }
    });

//===== Открытие блока цен и вычисление цен при выборе необходимости строительства   =====//
    $('#building2').click(function (){
        itog=1;
       var block = $(this).parents('.calc_form');
            block.find('.itog').show();
            block.find('.bild').hide();
        C5=0;
        C6=0;
        C2=0;
        C3=0;
        zena();

    });

    $('#building1').click(function (){
        itog=1;
        var block = $(this).parents('.calc_form');
        block.find('.itog').show();
        block.find('.bild').hide();
        C5=0;
        C6=0;
        C2=0;
        C3=0;
         zena();

    });

    //===== Открытие блока Строительство трансформаторных подстанций  3 категория надежности стандарт  =====//


    $('#transformv_check').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('sekcion_block');
            // $('.block_sek').remove();
            // div.style.display = 'none';
            //
            // $('#sekcion_check').prop({'checked': false})
            // C6=0;


            var div = document.getElementById('transformv_block');
            div.style.display = 'block';
            ADDST();
        }
        else{
            var div = document.getElementById('transformv_block');
            $('.block_uv').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены подстанции поле выбора типа  3 категория надежности стандарт =====//

    function Uvv(element) {

        var N_uv = element.value;

        var block = $(element).parents('.block_uv');
        block.find('.sel_uv_z').val(N_uv);

        $('.block_uv').focus();

        ALLUvv(element);
      }
    window.Uvv = Uvv

    //===== добавление подстанции   =====//

    function ADDST() {
        var newSection = $('<tr class="block_uv"></tr>');
        newSection.html(
            '<td style="width:25%;">\n <select required class="sel_uv" onclick="Uvv(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td style="width:25%;"> <span id="Uv">НН, CH <br> (до 20 кВ)</span></td>\n <td  style="width:25%"> <input type="text" class="sel_uv_z"  value="0" readonly="readonly"> </td>\n <td  style="width:25%"><button class="butuv_del" onclick="DelUvv(this); ">Удалить объект</button>  </td>'
    );
         $('#table_uv').append(newSection);

        var newSelSek = $(newSection).find('.sel_uv');

        for (var i = 0; i < transform.length; i++)  {
            $('<option value="' + transform[i].zenat + '">' + transform[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#butuv').click(function () {
        ADDST();
     });


//===== Удаление текущей  подстанции    =====//
    function DelUvv(element) {
        var sss= $(element).parents('.block_uv');
        sss.remove();
        ALLUvv(element);
     }
    window.DelUvv = DelUvv;

    //===== вычисление общей цены по подстанциям    =====//
    function ALLUvv(element) {
        C5=0;
           $('.sel_uv_z').each(function(){
            C5 += parseFloat($(this).val())
        });
        zena();
     }

    window.ALLUvv = ALLUvv;




    //===== Открытие блока Строительство пунктов секционирования 3 категория надежности стандарт  =====//

    $('#sekcion_check').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('transformv_block');
            // $('.block_uv').remove();
            // div.style.display = 'none';
            //
            //
            // $('#transformv_check').prop({'checked': false})
            // C5=0;


            var div = document.getElementById('sekcion_block');
            div.style.display = 'block';
            ADDSEK();
            }
        else{
            var div = document.getElementById('sekcion_block');
            $('.block_sek').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены Строительство пунктов секционирования после выбора типа   =====//

    function SekCel(element) {

        var ZsekST = element.value;

        var block = $(element).parents('.block_sek');
        block.find('.sek_v').val(ZsekST);

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;
        var ZsekZena=ZsekST* Ni;
        ZsekZena=ZsekZena.toFixed(2);
        var block = $(element).parents('.block_sek');
        block.find('.sek_v_z').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek();

    }
    window.SekCel = SekCel;

    //===== добавление пунктов секционирования   =====//

    function ADDSEK() {
        var newSection = $('<tr class="block_sek"></tr>');
        newSection.html(
            '<td style="width:25%;">\n    <select required class="sel_sek" onclick="SekCel(this)"  >\n    <option value="0"> Выберите тип</option>\n    </select>\n</td>\n<td style="width:25%;"><input type="text" class="sek_v"  value="0" readonly="readonly"></td>\n<td  style="width:25%"><input type="text" class="sek_v_z"  value="0" readonly="readonly"> </td>\n<td  style="width:25%"><button class="Sek_del" onclick="DelSek(this); ">Удалить объект</button>  </td>'
        );

        $('#sekcion_uv').append(newSection);

        var newSelSek = $(newSection).find('.sel_sek');

        for (var i = 0; i < section.length; i++)  {
            $('<option value="' + section[i].zenat + '">' + section[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#but_sek').click(function () {
        ADDSEK();
     });


//===== Удаление пунктов секционирования    =====//
    function DelSek(element) {
        var sss= $(element).parents('.block_sek');
        sss.remove();
        ALLSek();
    }

    window.DelSek = DelSek;


    //===== вычисление общей цены по подстанциям    =====//
    function ALLSek() {
        C6=0;
        $('.sek_v_z').each(function(){
            C6 += parseFloat($(this).val())
        });
       // alert(C6);
        zena();
    }

    window.ALLSek = ALLSek;



    // ====Строительство линий электропередачи (ЛЭП) 6-10 кВ  3 категория надежности стандарт========//


    $('#linev_check').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('galer_block');
            $('.block_galer_uv').remove();
            div.style.display = 'none';
            $('#galer_check').prop({'checked': false});
            C3=0;


            var div = document.getElementById('linev_block');
            div.style.display = 'block';
            ADDLINE();

        }
        else{
            var div = document.getElementById('linev_block');
            $('.block_line_uv').remove();
            div.style.display = 'none';
            C2=0;

        }
        zena();
    });



    //===== Заполнение цены линий электропередачи  после выбора типа   =====//

    function sel_line(element) {

        var ZlineST = element.value;

        var block = $(element).parents('.block_line_uv');
        block.find('.linestav').val(ZlineST);

        var block2 = $(element).parents('.block_line_uv').find('.lini_l');
        var zlie=parseFloat($(block2).val());
        var zlinev=0;
        zlie=+zlie;
        ZlineST=+ZlineST/1000;

        zlinev=ZlineST*zlie;

        zlinev=zlinev.toFixed(2);
        var block = $(element).parents('.block_line_uv');
        block.find('.lina_z').val(zlinev);

        Sel_LineZAll();

    }
    window.sel_line = sel_line;

    //===== добавление линий электропередачи   =====//

    function ADDLINE() {
        var Uv = document.getElementById('potentials').value;


        if (Uv==0) {

            var newSection = $('<tr class="block_line_uv"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uv" onclick="sel_line(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"> <input type="number" class="lini_l" id="lini_l1" value="0" min="0" step="1" onkeyup="Sel_LineZ(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del" onclick="DelLine(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv').append(newSection);

            var newSelSek = $(newSection).find('.line_uv');

            for (var i = 0; i < elline04.length; i++) {
                $('<option value="' + elline04[i].zenat + '">' + elline04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_line_uv"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uv" onclick="sel_line(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"> <input type="number" class="lini_l" id="lini_l1"  value="0" min="0" step="1" onkeyup="Sel_LineZ(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del" onclick="DelLine(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv').append(newSection);

            var newSelSek = $(newSection).find('.line_uv');

            for (var i = 0; i < elline6.length; i++) {
                $('<option value="' + elline6[i].zenat + '">' + elline6[i].name + '</option>').appendTo(newSelSek);
            }
        }




    }

    $('#but_line').click(function () {
        ADDLINE();
    });



//===== Удаление линий электропередачи     =====//
    function DelLine(element) {
        var sss= $(element).parents('.block_line_uv');
        alert(element);
        sss.remove();
        Sel_LineZAll();

    }
    window.DelLine = DelLine;


    //===== вычисление  цены текущей по линий электропередачи     =====//
    function Sel_LineZ(element) {
        //var block1 = $(element).parents('.block_line_uv').find('.lini_l');
        //var Lline=parseFloat($(block1).val());

       var Lline = element.value;

        var block2 = $(element).parents('.block_line_uv').find('.linestav');
        var zlie=parseFloat($(block2).val());
         Lline=+Lline/1000;
        zlie=+zlie;

        var zlinev=Lline*zlie;
        zlinev=zlinev.toFixed(2);
        var block = $(element).parents('.block_line_uv');
        block.find('.lina_z').val(zlinev);

        Sel_LineZAll();
    }

    window.Sel_LineZ = Sel_LineZ;


    //===== вычисление общей цены по линий электропередачи     =====//
    function Sel_LineZAll() {
        C2=0;
        $('.lina_z').each(function(){
            C2 += parseFloat($(this).val());
            // var Ni = document.getElementById('powers').value;
            //
            // Ni=+Ni;
            //C2=C2;
        });
          zena();
    }


    //========Строительство закрытых галерей 3 категория надежности стандарт=======//

    $('#galer_check').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('linev_block');
            $('.block_line_uv').remove();
            div.style.display = 'none';
            $('#linev_check').prop({'checked': false})
            C2=0;


            var div = document.getElementById('galer_block');
            div.style.display = 'block';
            ADDLGAL();

        }
        else{
            var div = document.getElementById('galer_block');
            $('.block_galer_uv').remove();
            div.style.display = 'none';
            C3=0;

        }
        zena();
    });



    //===== Заполнение цены закрытых галерей  после выбора типа   =====//

    function galer_line(element) {

        var ZgaleST = element.value;

        var block = $(element).parents('.block_galer_uv');
        block.find('.galertav').val(ZgaleST);

        var block2 = $(element).parents('.block_galer_uv').find('.galer_l');
        var Lgaler=parseFloat($(block2).val());
        var zgalerv=0;
        Lgaler=+Lgaler/1000;
        zgalerv=ZgaleST*Lgaler;
        zgalerv=zgalerv.toFixed(2);
        var block = $(element).parents('.block_galer_uv');
        block.find('.galer_z').val(zgalerv);
        Sel_GalZAll();

    }
    window.galer_line = galer_line;

    //===== добавление закрытых галерей   =====//

    function ADDLGAL() {

        var Uv = document.getElementById('potentials').value;
        console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_galer_uv"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv" onclick="galer_line(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l"  value="0" step="1" min="0" onkeyup="Sel_galerZ(this)"> </td>\n<td  style="width:20%"> <input type="text" class="galer_z"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del" onclick="Delgaler(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv');

            for (var i = 0; i < galer04.length; i++) {
                $('<option value="' + galer04[i].zenat + '">' + galer04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_galer_uv"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv" onclick="galer_line(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l"  value="0" step="1" min="0" onkeyup="Sel_galerZ(this)"> </td>\n<td  style="width:20%"> <input type="text" class="galer_z"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del" onclick="Delgaler(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv');

            for (var i = 0; i < galer6.length; i++) {
                $('<option value="' + galer6[i].zenat + '">' + galer6[i].name + '</option>').appendTo(newSelSek);
            }
        }




    }

    $('#but_gal').click(function () {
        //alert(999)
        ADDLGAL();
    });

//===== Удаление закрытых галерей     =====//
    function Delgaler(element) {
         var sss= $(element).parents('.block_galer_uv');
         sss.remove();

        Sel_GalZAll();
    }

    window.Delgaler = Delgaler;


    //===== вычисление  цены текущей по закрытых галерей     =====//
    function Sel_galerZ(element) {
        var Lgaler = element.value;

        var block2 = $(element).parents('.block_galer_uv').find('.galertav');
        var zgaler=parseFloat($(block2).val());
        Lgaler=+Lgaler/1000;
        zgaler=+zgaler;
        var zgalerv=Lgaler*zgaler;
        zgalerv=zgalerv.toFixed(2);
        var block = $(element).parents('.block_galer_uv');
        block.find('.galer_z').val(zgalerv);

        Sel_GalZAll();


    }

    window.Sel_galerZ = Sel_galerZ;


    //===== вычисление общей цены по закрытых галерей     =====//
    function Sel_GalZAll() {
        C3=0;


        $('.galer_z').each(function(){
            C3 += parseFloat($(this).val())
        });
         //console.log(C3);
        zena();
    }




    ////// ========== BLOCK 3I ===========////

    //===== Открытие блока Строительство трансформаторных подстанций  3 категория надежности стандарт  =====//


    $('#transformv_checki').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('sekcion_blocki');
            // $('.block_seki').remove();
            // div.style.display = 'none';
            //
            // $('#sekcion_checki').prop({'checked': false})
            // C6=0;


            var div = document.getElementById('transformv_blocki');
            div.style.display = 'block';
            ADDSTi();
        }
        else{
            var div = document.getElementById('transformv_blocki');
            $('.block_uvi').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены подстанции поле выбора типа  3 категория надежности стандарт =====//

    function Uvvi(element) {

        var N_uv = element.value;
       // N_uv=N_uv.toFixed(2);
        var block = $(element).parents('.block_uvi');
        block.find('.sel_uv_zi').val(N_uv);

        ALLUvvi();
    }
    window.Uvvi = Uvvi;

    //===== добавление подстанции   =====//

    function ADDSTi() {
        var newSection = $('<tr class="block_uvi"></tr>');
        newSection.html(
            '<td style="width:20%;">\n <select required class="sel_uvi" onclick="Uvvi(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td style="width:20%;"> <span id="Uvi">НН, CH <br> (до 20 кВ)</span></td>\n <td style="width:20%;"> <span class="Pv3i"></span></td>\n <td  style="width:20%"> <input type="text" class="sel_uv_zi"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"><button class="butuv_deli" onclick="DelUvvi(this); ">Удалить объект</button>  </td>'
        );
        $('#table_uvi').append(newSection);

        var newSelSek = $(newSection).find('.sel_uvi');

        for (var i = 0; i < transformi04.length; i++)  {
            $('<option value="' + transformi04[i].zenat + '">' + transformi04[i].name + '</option>').appendTo(newSelSek);

        }

        var Ni = document.getElementById('powers').value;
        Ni=+Ni;

        $('.Pv3i').text(Ni);


    }

    $('#butuvi').click(function () {
        ADDSTi();
    });


//===== Удаление текущей  подстанции    =====//
    function DelUvvi(element) {
        var sss= $(element).parents('.block_uvi');
        sss.remove();
        ALLUvvi();
    }
    window.DelUvvi = DelUvvi;

    //===== вычисление общей цены по подстанциям    =====//
    function ALLUvvi() {
        C5=0;
        $('.sel_uv_zi').each(function(){
            C5 += parseFloat($(this).val())
        });
        zena();
       // console.log(C5);
    }

    window.ALLUvvi = ALLUvvi;




    //===== Открытие блока Строительство пунктов секционирования 3 категория надежности стандарт  =====//

    $('#sekcion_checki').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('transformv_blocki');
            // $('.block_uvi').remove();
            // div.style.display = 'none';
            //
            //
            // $('#transformv_checki').prop({'checked': false})
            // C5=0;


            var div = document.getElementById('sekcion_blocki');
            div.style.display = 'block';
            ADDSEKi();
        }
        else{
            var div = document.getElementById('sekcion_blocki');
            $('.block_seki').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены Строительство пунктов секционирования после выбора типа   =====//

    function SekCeli(element) {
        var ZsekST = element.value;

        var block = $(element).parents('.block_seki');
        block.find('.sek_vi').val(ZsekST);
        //console.log(ZsekST);

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;
        var ZsekZena=ZsekST* Ni;
        ZsekZena=ZsekZena.toFixed(2);
        var block = $(element).parents('.block_seki');
        block.find('.sek_v_zi').val(ZsekZena);
        //alert(ZsekZena);

        ALLSeki();

    }
    window.SekCeli = SekCeli;

    //===== добавление пунктов секционирования   =====//

    function ADDSEKi() {
        var newSection = $('<tr class="block_seki"></tr>');
        newSection.html(
            '<td style="width:20%;">\n    <select required class="sel_seki" onclick="SekCeli(this)"  >\n    <option value="0"> Выберите тип</option>\n    </select>\n</td>\n<td style="width:20%;"><input type="text" class="sek_vi"  value="0" readonly="readonly"></td>\n<td style="width:20%;"> <span class="Pv3i"></span></td>\n<td  style="width:20%"><input type="text" class="sek_v_zi"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="Sek_deli" onclick="DelSeki(this); ">Удалить объект</button>  </td>'
        );

        $('#sekcion_uvi').append(newSection);

        var newSelSek = $(newSection).find('.sel_seki');

        for (var i = 0; i < sectioni04.length; i++)  {
            $('<option value="' + sectioni04[i].zenat + '">' + sectioni04[i].name + '</option>').appendTo(newSelSek);

        }
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;

        $('.Pv3i').text(Ni);

    }

    $('#but_seki').click(function () {
        ADDSEKi();
    });


//===== Удаление пунктов секционирования    =====//
    function DelSeki(element) {
        var sss= $(element).parents('.block_seki');
        sss.remove();
        ALLSeki();
    }

    window.DelSeki = DelSeki


    //===== вычисление общей цены по подстанциям    =====//
    function ALLSeki() {
        C6=0;
        $('.sek_v_zi').each(function(){
            C6 += parseFloat($(this).val());

        });
        console.log(C6);
         //alert(C6);
        zena();
    }

    window.ALLSeki = ALLSeki;



    // ====Строительство линий электропередачи (ЛЭП) 6-10 кВ  3 категория надежности стандарт========//


    $('#linev_checki').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('galer_blocki');
            $('.block_galer_uvi').remove();
            div.style.display = 'none';
            $('#galer_checki').prop({'checked': false});
            C3=0;


            var div = document.getElementById('linev_blocki');
            div.style.display = 'block';
            ADDLINEi();
        }
        else{
            var div = document.getElementById('linev_blocki');
            $('.block_line_uvi').remove();
            div.style.display = 'none';
            C2=0;

        }
        zena();
    });



    //===== Заполнение цены линий электропередачи  после выбора типа   =====//

    function sel_linei(element) {

        var ZlineST = element.value;

        var block = $(element).parents('.block_line_uvi');
        block.find('.linestavi').val(ZlineST);
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;

         var zlinev=ZlineST*Ni;
        zlinev=zlinev.toFixed(2);


        var block = $(element).parents('.block_line_uvi');
        block.find('.lina_zi').val(zlinev);

        Sel_LineZAlli();

    }
    window.sel_linei = sel_linei;

    //===== добавление иний электропередачи   =====//

    function ADDLINEi() {

        var Uv = document.getElementById('potentials').value;
        console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_line_uvi"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uvi" onclick="sel_linei(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestavi"  value="0" readonly="readonly"> </td>\n <td style="width:20%;"> <span class="Pv3i"></span></td>\n <td  style="width:20%"> <input type="text" class="lina_zi"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"><button class="butuv_deli" onclick="DelLinei(this); ">Удалить объект</button>  </td>'
            );

            $('#linev_uvi').append(newSection);

            var newSelSek = $(newSection).find('.line_uvi');

            for (var i = 0; i < ellinei04.length; i++)  {
                $('<option value="' + ellinei04[i].zenat + '">' + ellinei04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_line_uvi"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uvi" onclick="sel_linei(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestavi"  value="0" readonly="readonly"> </td>\n <td style="width:20%;"> <span class="Pv3i"></span></td>\n <td  style="width:20%"> <input type="text" class="lina_zi"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"><button class="butuv_deli" onclick="DelLinei(this); ">Удалить объект</button>  </td>'
            );

            $('#linev_uvi').append(newSection);

            var newSelSek = $(newSection).find('.line_uvi');

            for (var i = 0; i < ellinei6.length; i++)  {
                $('<option value="' + ellinei6[i].zenat + '">' + ellinei6[i].name + '</option>').appendTo(newSelSek);
            }
        }
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;

        $('.Pv3i').text(Ni);

    }

    $('#but_linei').click(function () {
        ADDLINEi();
    });


//===== Удаление линий электропередачи     =====//
    function DelLinei(element) {
        var sss= $(element).parents('.block_line_uvi');
        sss.remove()
        Sel_LineZAlli();
     }
    window.DelLinei = DelLinei


    //===== вычисление  цены текущей по линий электропередачи     =====//
    function Sel_LineZi(element) {
        var block2 = $(element).parents('.block_line_uvi').find('.linestavi');
        var zlie=parseFloat($(block2).val());
        zlie=+zlie/1000;
        var zlinev=zlie;
        zlinev=zlinev.toFixed(2);
        var block = $(element).parents('.block_line_uvi');
        block.find('.lina_zi').val(zlinev);

        Sel_LineZAlli();
    }

    window.Sel_LineZi = Sel_LineZi;


    //===== вычисление общей цены по линий электропередачи     =====//
    function Sel_LineZAlli(element) {
        C2=0;
        $('.lina_zi').each(function(){
            C2 += parseFloat($(this).val());

        });
         console.log(C2);
        zena();
    }


    //========Строительство закрытых галерей 3 категория надежности стандарт=======//

    $('#galer_checki').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('linev_blocki');
            $('.block_line_uvi').remove();
            div.style.display = 'none';
            $('#linev_checki').prop({'checked': false})
            C2=0;


            var div = document.getElementById('galer_blocki');
            div.style.display = 'block';
            ADDLGALi();

        }
        else{
            var div = document.getElementById('galer_blocki');
            $('.block_galer_uvi').remove();
            div.style.display = 'none';
            C3=0;

        }
        zena();
    });



    //===== Заполнение цены закрытых галерей  после выбора типа   =====//

    function galer_linei(element) {

        var ZgaleST = element.value;

        var block = $(element).parents('.block_galer_uvi');
        block.find('.galertavi').val(ZgaleST);
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;
        var zgalerv=ZgaleST*Ni;

        zgalerv=zgalerv.toFixed(2);


        var block = $(element).parents('.block_galer_uvi');
        block.find('.galer_zi').val(zgalerv);
        Sel_GalZAlli();

    }
    window.galer_linei = galer_linei;

    //===== добавление закрытых галерей   =====//

    function ADDLGALi() {
        var Uv = document.getElementById('potentials').value;
        console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_galer_uvi"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uvi" onclick="galer_linei(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertavi"  value="0" readonly="readonly"> </td>\n <td style="width:20%;"> <span class="Pv3i"></span></td>\n <td  style="width:20%"> <input type="text" class="galer_zi"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del" onclick="Delgaleri(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvvi').append(newSection);

            var newSelSek = $(newSection).find('.galer_uvi');

            for (var i = 0; i < galeri04.length; i++)  {
                $('<option value="' + galeri04[i].zenat + '">' + galeri04[i].name + '</option>').appendTo(newSelSek);
            }

            var Ni = document.getElementById('powers').value;
            Ni=+Ni;

            $('.Pv3i').text(Ni);
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_galer_uvi"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uvi" onclick="galer_linei(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertavi"  value="0" readonly="readonly"> </td>\n <td style="width:20%;"> <span class="Pv3i"></span></td>\n<td  style="width:20%"> <input type="text" class="galer_zi"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del" onclick="Delgaleri(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvvi').append(newSection);

            var newSelSek = $(newSection).find('.galer_uvi');

            for (var i = 0; i < galeri6.length; i++)  {
                $('<option value="' + galeri6[i].zenat + '">' + galeri6[i].name + '</option>').appendTo(newSelSek);
            }
            var Ni = document.getElementById('powers').value;
            Ni=+Ni;

            $('.Pv3i').text(Ni);
        }
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;

        $('.Pv3i').text(Ni);

     }

    $('#but_gali').click(function () {
        //alert(999)
        ADDLGALi();
    });

//===== Удаление закрытых галерей     =====//
    function Delgaleri(element) {
        var sss= $(element).parents('.block_galer_uvi');
        sss.remove();

        Sel_GalZAlli();
    }

    window.Delgaleri = Delgaleri;


    //===== вычисление  цены текущей по закрытых галерей     =====//
    function Sel_galerZi(element) {
        var Lgaler = element.value;
        Lgaler=+Lgaler;
        var zgaler=Lgaler;
        var Ni = document.getElementById('powers').value;
        Ni=+Ni;
        zgaler=zgaler*Ni;
        zgaler=zgaler.toFixed(2);
        var block = $(element).parents('.block_galer_uvi');
        block.find('.galer_zi').val(zgaler);

        Sel_GalZAlli();
    }

    window.Sel_galerZi = Sel_galerZi;


    //===== вычисление общей цены по закрытых галерей     =====//
    function Sel_GalZAlli(element) {
        C3=0;


        $('.galer_zi').each(function(){
            C3 += parseFloat($(this).val());

        });
        //console.log(C3);
        zena();
    }



    ///========  BLOCK 1==========//

    //===== Открытие блока Строительство трансформаторных подстанций  1 -2 категория надежности стандарт  =====//


    $('#transformv_check1').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('sekcion_block1');
            // $('.block_sek1').remove();
            // div.style.display = 'none';
            //
            // $('#sekcion_check1').prop({'checked': false})
            // C6=0;


            var div = document.getElementById('transformv_block1');
            div.style.display = 'block';
            ADDST1();
        }
        else{
            var div = document.getElementById('transformv_block1');
            $('.block_uv1').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены подстанции поле выбора типа  3 категория надежности стандарт =====//

    function Uvv1(element) {

        var N_uv = element.value;

        var block2 = $(element).parents('.block_uv1').find('.sel_uv_n1');
        var Nst=parseFloat($(block2).val());

        N_uv=N_uv*Nst;

        var block = $(element).parents('.block_uv1');
        block.find('.sel_uv_z1').val(N_uv);


        ALLUvv1(element);
    }
    window.Uvv1 = Uvv1;

    function Sel_LineN1(element) {

        var N_uv = element.value;

        var block2 = $(element).parents('.block_uv1').find('.sel_uv1');
        var Nst=parseFloat($(block2).val());

        N_uv=N_uv*Nst;

        var block = $(element).parents('.block_uv1');
        block.find('.sel_uv_z1').val(N_uv);


        ALLUvv1(element);
    }
    window.Sel_LineN1 = Sel_LineN1;



    //===== добавление подстанции   =====//

    function ADDST1() {
        var newSection = $('<tr class="block_uv1"></tr>');
        newSection.html(
            '<td style="width:25%;">\n <select required class="sel_uv1" onclick="Uvv1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td style="width:25%;"> <span id="Uv1">НН, CH <br> (до 20 кВ)</span></td>\n<td  style="width:20%"> <input type="number" class="sel_uv_n1"  value="1" min="0" step="1" onkeydown="Sel_LineN1(this)"> </td>\n  <td  style="width:25%"> <input type="text" class="sel_uv_z1"  value="0" readonly="readonly"> </td>\n<td  style="width:25%"><button class="butuv_del1" onclick="DelUvv1(this); ">Удалить объект</button>  </td>'
        );
        $('#table_uv1').append(newSection);

        var newSelSek = $(newSection).find('.sel_uv1');

        for (var i = 0; i < transform.length; i++)  {
            $('<option value="' + transform[i].zenat + '">' + transform[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#butuv1').click(function () {
        ADDST1();
    });


//===== Удаление текущей  подстанции    =====//
    function DelUvv1(element) {
        var sss= $(element).parents('.block_uv1');
        sss.remove();
        ALLUvv1(element);
    }
    window.DelUvv1 = DelUvv1;

    //===== вычисление общей цены по подстанциям    =====//
    function ALLUvv1(element) {
        C5=0;
        $('.sel_uv_z1').each(function(){
            C5 += parseFloat($(this).val())
        });
        zena();
    }

    window.ALLUvv1 = ALLUvv1;




    //===== Открытие блока Строительство пунктов секционирования 3 категория надежности стандарт  =====//

    $('#sekcion_check1').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('transformv_block1');
            // $('.block_uv1').remove();
            // div.style.display = 'none';
            //
            //
            // $('#transformv_check1').prop({'checked': false})
            // C5=0;


            var div = document.getElementById('sekcion_block1');
            div.style.display = 'block';
            ADDSEK1();
        }
        else{
            var div = document.getElementById('sekcion_block1');
            $('.block_sek1').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены Строительство пунктов секционирования после выбора типа   =====//

    function SekCel1(element) {
        var ZsekST = element.value;

        var block = $(element).parents('.block_sek1');
        block.find('.sek_v1').val(ZsekST);

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;

        var block2 = $(element).parents('.block_sek1').find('.sel_sek_n1');
        var Nsek=parseFloat($(block2).val());



        var ZsekZena=ZsekST* Ni*Nsek;

        var block = $(element).parents('.block_sek1');
        block.find('.sek_v_z1').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek1(element);

    }
    window.SekCel1 = SekCel1;

    function Sel_sekN1(element) {
        var ZsekST = element.value;



        var Ni = document.getElementById('powers').value;

        Ni=+Ni;

        var block2 = $(element).parents('.block_sek1').find('.sel_sek1');
        var Nsek=parseFloat($(block2).val());



        var ZsekZena=ZsekST* Ni*Nsek;

        var block = $(element).parents('.block_sek1');
        block.find('.sek_v_z1').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek1(element);

    }
    window.Sel_sekN1 = Sel_sekN1;







    //===== добавление пунктов секционирования   =====//

    function ADDSEK1() {
        var newSection = $('<tr class="block_sek1"></tr>');
        newSection.html(
            '<td style="width:25%;">\n    <select required class="sel_sek1" onclick="SekCel1(this)"  >\n    <option value="0"> Выберите тип</option>\n    </select>\n</td>\n<td style="width:25%;"><input type="text" class="sek_v1"  value="0" readonly="readonly"></td>\n<td  style="width:20%"> <input type="number" class="sel_sek_n1"  value="1" min="0" step="1" onkeydown="Sel_sekN1(this)"> </td>\n <td  style="width:25%"><input type="text" class="sek_v_z1"  value="0" readonly="readonly"> </td>\n<td  style="width:25%"><button class="Sek_del1" onclick="DelSek1(this); ">Удалить объект</button>  </td>'
        );

        $('#sekcion_uv1').append(newSection);

        var newSelSek = $(newSection).find('.sel_sek1');

        for (var i = 0; i < section.length; i++)  {
            $('<option value="' + section[i].zenat + '">' + section[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#but_sek1').click(function () {
        ADDSEK1();
    });


//===== Удаление пунктов секционирования    =====//
    function DelSek1(element) {
        var sss= $(element).parents('.block_sek1');
        sss.remove();
        ALLSek1(element);
    }

    window.DelSek1 = DelSek1;


    //===== вычисление общей цены по подстанциям    =====//
    function ALLSek1(element) {
        C6=0;
        $('.sek_v_z1').each(function(){
            C6 += parseFloat($(this).val())
        });
        // alert(C6);
        zena();
    }

    window.ALLSek1 = ALLSek1



    // ====Строительство линий электропередачи (ЛЭП) 6-10 кВ  3 категория надежности стандарт========//


    $('#linev_check1').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('galer_block1');
            $('.block_galer_uv1').remove();
            div.style.display = 'none';
            $('#galer_check1').prop({'checked': false});
            C3=0;


            var div = document.getElementById('linev_block1');
            div.style.display = 'block';
            var Knad = document.getElementById('reliabilitys').value;
            //console.log(Uv);

            if (Knad==2){
                ADDLINE1();
            }
            if ((Knad==0)||(Knad==1)) {
                ADDLINE2();
               // ADDLINE1();
            }


        }
        else{
            var div = document.getElementById('linev_block1');
            $('.block_line_uv1').remove();
            div.style.display = 'none';
            C2=0;

        }
        zena();
    });



    //===== Заполнение цены линий электропередачи  после выбора типа   =====//

    function sel_line1(element) {

        var ZlineST = element.value;

        var block = $(element).parents('.block_line_uv1');
        block.find('.linestav1').val(ZlineST);

        var block2 = $(element).parents('.block_line_uv1').find('.lini_l1');
        var zlie=parseFloat($(block2).val());
          zlie=+zlie/1000;

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;

        var zlinev=ZlineST*zlie*Ni;
        zlinev=zlinev.toFixed(2);

        var block = $(element).parents('.block_line_uv1');
        block.find('.lina_z1').val(zlinev);

        Sel_LineZAll1();

    }
    window.sel_line1 = sel_line1;

    //===== добавление пунктов секционирования   =====//

    function ADDLINE1() {
        var Uv = document.getElementById('potentials').value;
        console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект3</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline04.length; i++)  {
                $('<option value="' + elline04[i].zenat + '">' + elline04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline6.length; i++)  {
                $('<option value="' + elline6[i].zenat + '">' + elline6[i].name + '</option>').appendTo(newSelSek);
            }
        }
    }

    function ADDLINE2() {
        var Uv = document.getElementById('potentials').value;
        console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td> \n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline04.length; i++)  {
                $('<option value="' + elline04[i].zenat + '">' + elline04[i].name + '</option>').appendTo(newSelSek);
            }

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline04.length; i++)  {
                $('<option value="' + elline04[i].zenat + '">' + elline04[i].name + '</option>').appendTo(newSelSek);
            }


        }

        if (Uv==1) {

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline6.length; i++)  {
                $('<option value="' + elline6[i].zenat + '">' + elline6[i].name + '</option>').appendTo(newSelSek);
            }

            var newSection = $('<tr class="block_line_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n<td style="width:20%;">\n <select required class="line_uv1" onclick="sel_line1(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav1"  value="0" readonly="readonly"> </td>\n <td  style="width:10%"> <input type="number" class="lini_l1"  value="0" min="0" step="1" onkeydown="Sel_LineZ1(this)"> </td>\n </td>\n <td  style="width:20%"> <input type="text" class="lina_z1"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1" onclick="DelLine1(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1');

            for (var i = 0; i < elline6.length; i++)  {
                $('<option value="' + elline6[i].zenat + '">' + elline6[i].name + '</option>').appendTo(newSelSek);
            }



        }
    }






    $('#but_line1').click(function () {

        var Knad = document.getElementById('reliabilitys').value;
        //console.log(Uv);

        if (Knad==2){
            ADDLINE1();
        }
        if ((Knad==0)||(Knad==1)) {
            ADDLINE2();

        }
    });


//===== Удаление линий электропередачи     =====//
    function DelLine1(element) {
        var sss= $(element).parents('.block_line_uv1');
        sss.remove();
        Sel_LineZAll1();
        //alert(434334);
    }
    window.DelLine1 = DelLine1;


    //===== вычисление  цены текущей по линий электропередачи     =====//
    function Sel_LineZ1(element) {
        var Lline = element.value;

        var block2 = $(element).parents('.block_line_uv1').find('.linestav1');
        var zlie=parseFloat($(block2).val());
        Lline=+Lline/1000;
        zlie=+zlie;
        var Ni = document.getElementById('powers').value;

        Ni=+Ni;


        var zlinev=Lline*zlie*Ni;
        zlinev=zlinev.toFixed(2);


        var block = $(element).parents('.block_line_uv1');
        block.find('.lina_z1').val(zlinev);

        Sel_LineZAll1();
    }

    window.Sel_LineZ1 = Sel_LineZ1;



    //===== вычисление общей цены по линий электропередачи     =====//
    function Sel_LineZAll1() {
        C2=0;
        $('.lina_z1').each(function(){
            C2 += parseFloat($(this).val());
            // var Ni = document.getElementById('powers').value;
            //
            // Ni=+Ni;
            // C2=C2*Ni;
        });
     //   console.log(C2);
        zena();
    }


    //========Строительство закрытых галерей 3 категория надежности стандарт=======//

    $('#galer_check1').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('linev_block1');
            $('.block_line_uv1').remove();
            div.style.display = 'none';
            $('#linev_check1').prop({'checked': false})
            C2=0;


            var div = document.getElementById('galer_block1');
            div.style.display = 'block';

            var Knad = document.getElementById('reliabilitys').value;
            //console.log(Uv);

            if (Knad==2){
                ADDLGAL1();
            }
            if ((Knad==0)||(Knad==1)) {
                ADDLGAL2();

            }

        }
        else{
            var div = document.getElementById('galer_block1');
            $('.block_galer_uv1').remove();
            div.style.display = 'none';
            C3=0;

        }
        zena();
    });



    //===== Заполнение цены закрытых галерей  после выбора типа   =====//

    function galer_line1(element) {

        var ZgaleST = element.value;

        var block = $(element).parents('.block_galer_uv1');
        block.find('.galertav1').val(ZgaleST);

        var block2 = $(element).parents('.block_galer_uv1').find('.galer_l1');
        var Lgaler=parseFloat($(block2).val());
        Lgaler=+Lgaler/1000;
        var zgalerv=0;
        zgalerv=ZgaleST*Lgaler;
        zgalerv=zgalerv.toFixed(2);
        var block = $(element).parents('.block_galer_uv1');
        block.find('.galer_z1').val(zgalerv);
        Sel_GalZAll1();

    }
    window.galer_line1 = galer_line1;

    //===== добавление закрытых галерей   =====//

    function ADDLGAL1() {

        var Uv = document.getElementById('potentials').value;
        //console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n  <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer04.length; i++)  {
                $('<option value="' + galer04[i].zenat + '">' + galer04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer6.length; i++)  {
                $('<option value="' + galer6[i].zenat + '">' + galer6[i].name + '</option>').appendTo(newSelSek);
            }
        }
    }


    function ADDLGAL2() {

        var Uv = document.getElementById('potentials').value;
        //console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n <td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n  <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer04.length; i++)  {
                $('<option value="' + galer04[i].zenat + '">' + galer04[i].name + '</option>').appendTo(newSelSek);
            }

            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n <td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n  <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer04.length; i++)  {
                $('<option value="' + galer04[i].zenat + '">' + galer04[i].name + '</option>').appendTo(newSelSek);
            }
        }



        if (Uv==1) {

            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n <td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer6.length; i++)  {
                $('<option value="' + galer6[i].zenat + '">' + galer6[i].name + '</option>').appendTo(newSelSek);
            }
            var newSection = $('<tr class="block_galer_uv1"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n <td style="width:20%;">\n <select required class="galer_uv1" onclick="galer_line1(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l1"  value="0" step="1" min="0" onkeydown="Sel_galerZ1(this)"> </td>\n <td  style="width:20%"> <input type="text" class="galer_z1"  value="0" readonly="readonly1"> </td>\n<td  style="width:20%"><button class="butuv_del1" onclick="Delgaler1(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1');

            for (var i = 0; i < galer6.length; i++)  {
                $('<option value="' + galer6[i].zenat + '">' + galer6[i].name + '</option>').appendTo(newSelSek);
            }
        }
    }



    $('#but_gal1').click(function () {

        var Knad = document.getElementById('reliabilitys').value;
        //console.log(Uv);

        if (Knad==2){
            ADDLGAL1();
        }
        if ((Knad==0)||(Knad==1)) {
            ADDLGAL2();

        }
    });






//===== Удаление закрытых галерей     =====//
    function Delgaler1(element) {
        var sss= $(element).parents('.block_galer_uv1');
        sss.remove();

        Sel_GalZAll1();
    }

    window.Delgaler1 = Delgaler1;


    //===== вычисление  цены текущей галерей     =====//
    function Sel_galerZ1(element) {
        var Lgaler = element.value;

        var block2 = $(element).parents('.block_galer_uv1').find('.galertav1');
        var zgaler=parseFloat($(block2).val());
        Lgaler=+Lgaler/1000;
        var zgalerx=Lgaler*zgaler;
        zgalerx=zgalerx.toFixed(2);
        var block = $(element).parents('.block_galer_uv1');
        block.find('.galer_z1').val(zgalerx);

        Sel_GalZAll1();


    }

    window.Sel_galerZ1 = Sel_galerZ1;


    //===== вычисление общей цены по закрытых галерей     =====//
    function Sel_GalZAll1() {
        C3=0;


        $('.galer_z1').each(function(){
            C3 += parseFloat($(this).val());
        });
       // console.log(C3);
        zena();
    }


///========  BLOCK 1I==========//

    //===== Открытие блока Строительство трансформаторных подстанций  1 -2 категория надежности мощность  =====//


    $('#transformv_check1i').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('sekcion_block1i');
            // $('.block_sek1').remove();
            // div.style.display = 'none';
            //
            // $('#sekcion_check1i').prop({'checked': false})
            // C6=0;


            var div = document.getElementById('transformv_block1i');
            div.style.display = 'block';
            ADDST1i();
        }
        else{
            var div = document.getElementById('transformv_block1i');
            $('.block_uv1i').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены подстанции поле выбора типа  3 категория надежности стандарт =====//

    function Uvv1i(element) {

        var N_uv = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.sel_uv_n1i');
        var Nst=parseFloat($(block2).val());

        N_uv=N_uv*Nst;

        var block = $(element).parents('.block_uv1i');
        block.find('.sel_uv_z1i').val(N_uv);


        ALLUvv1i(element);
    }
    window.Uvv1i = Uvv1i;

    function Sel_LineN1i(element) {

        var N_uv = element.value;

        var block2 = $(element).parents('.block_uv1i').find('.sel_uv1i');
        var Nst=parseFloat($(block2).val());

        N_uv=N_uv*Nst;

        var block = $(element).parents('.block_uv1i');
        block.find('.sel_uv_z1i').val(N_uv);


        ALLUvv1i(element);
    }
    window.Sel_LineN1i = Sel_LineN1i;



    //===== добавление подстанции   =====//

    function ADDST1i() {
        var newSection = $('<tr class="block_uv1i"></tr>');
        newSection.html(
            '<td style="width:25%;">\n <select required class="sel_uv1i" onclick="Uvv1i(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td style="width:25%;"> <span id="Uv1i">НН, CH <br> (до 20 кВ)</span></td>\n<td  style="width:20%"> <input type="number" class="sel_uv_n1i"  value="1" min="0" step="1" onkeydown="Sel_LineN1i(this)"> </td>\n  <td  style="width:25%"> <input type="text" class="sel_uv_z1i"  value="0" readonly="readonly"> </td>\n<td  style="width:25%"><button class="butuv_del1i" onclick="DelUvv1i(this); ">Удалить объект</button>  </td>'
        );
        $('#table_uv1i').append(newSection);

        var newSelSek = $(newSection).find('.sel_uv1i');

        for (var i = 0; i < transformi6.length; i++)  {
            $('<option value="' + transformi6[i].zenat + '">' + transformi6[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#butuv1i').click(function () {
        ADDST1i();
    });


//===== Удаление текущей  подстанции    =====//
    function DelUvv1i(element) {
        var sss= $(element).parents('.block_uv1i');
        sss.remove();
        ALLUvv1i(element);
    }
    window.DelUvv1i = DelUvv1i;

    //===== вычисление общей цены по подстанциям    =====//
    function ALLUvv1i(element) {
        C5=0;
        $('.sel_uv_z1i').each(function(){
            C5 += parseFloat($(this).val())
        });
        zena();
    }

    window.ALLUvv1i = ALLUvv1i;




    //===== Открытие блока Строительство пунктов секционирования 3 категория надежности стандарт  =====//

    $('#sekcion_check1i').click(function () {
        if ($(this).prop('checked')) {

            // var div = document.getElementById('transformv_block1i');
            // $('.block_uv1i').remove();
            // div.style.display = 'none';
            //
            //
            // $('#transformv_check1i').prop({'checked': false})
            // C5=0;


            var div = document.getElementById('sekcion_block1i');
            div.style.display = 'block';
            ADDSEK1i();
        }
        else{
            var div = document.getElementById('sekcion_block1i');
            $('.block_sek1i').remove();
            div.style.display = 'none';

        }
        zena();
    });



    //===== Заполнение цены Строительство пунктов секционирования после выбора типа   =====//

    function SekCel1i(element) {
        var ZsekST = element.value;

        var block = $(element).parents('.block_sek1i');
        block.find('.sek_v1i').val(ZsekST);

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;

        var block2 = $(element).parents('.block_sek1i').find('.sel_sek_n1i');
        var Nsek=parseFloat($(block2).val());



        var ZsekZena=ZsekST* Ni*Nsek;

        var block = $(element).parents('.block_sek1i');
        block.find('.sek_v_z1i').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek1i(element);

    }
    window.SekCel1i = SekCel1i;

    function Sel_sekN1i(element) {
        var ZsekST = element.value;

        var Ni = document.getElementById('powers').value;

        Ni=+Ni;

        var block2 = $(element).parents('.block_sek1i').find('.sel_sek1i');
        var Nsek=parseFloat($(block2).val());

        var ZsekZena=ZsekST* Ni*Nsek;

        var block = $(element).parents('.block_sek1i');
        block.find('.sek_v_z1i').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek1i(element);

    }
    window.Sel_sekN1i = Sel_sekN1i;







    //===== добавление пунктов секционирования   =====//

    function ADDSEK1i() {
        var newSection = $('<tr class="block_sek1i"></tr>');
        newSection.html(
            '<td style="width:25%;">\n    <select required class="sel_sek1i" onclick="SekCel1i(this)"  >\n    <option value="0"> Выберите тип</option>\n    </select>\n</td>\n<td style="width:25%;"><input type="text" class="sek_v1i"  value="0" readonly="readonly"></td>\n<td  style="width:20%"> <input type="number" class="sel_sek_n1i"  value="1" min="0" step="1" onkeydown="Sel_sekN1i(this)"> </td>\n <td  style="width:25%"><input type="text" class="sek_v_z1i"  value="0" readonly="readonly"> </td>\n<td  style="width:25%"><button class="Sek_del1i" onclick="DelSek1i(this); ">Удалить объект</button>  </td>'
        );

        $('#sekcion_uv1i').append(newSection);

        var newSelSek = $(newSection).find('.sel_sek1i');

        for (var i = 0; i < sectioni6.length; i++)  {
            $('<option value="' + sectioni6[i].zenat + '">' + sectioni6[i].name + '</option>').appendTo(newSelSek);

        }
    }

    $('#but_sek1i').click(function () {
        ADDSEK1i();
    });


//===== Удаление пунктов секционирования    =====//
    function DelSek1i(element) {
        var sss= $(element).parents('.block_sek1i');
        sss.remove();
        ALLSek1i(element);
    }

    window.DelSek1i = DelSek1i;


    //===== вычисление общей цены по подстанциям    =====//
    function ALLSek1i(element) {
        C6=0;
        $('.sek_v_z1i').each(function(){
            C6 += parseFloat($(this).val())
        });
        zena();
    }

    window.ALLSek1i = ALLSek1i;



    // ====Строительство линий электропередачи (ЛЭП) 6-10 кВ  1 категория надежности стандарт========//


    $('#linev_check1i').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('galer_block1i');
            $('.block_galer_uv1i').remove();
            div.style.display = 'none';
            $('#galer_check1i').prop({'checked': false});
            C3=0;


            var div = document.getElementById('linev_block1i');
            div.style.display = 'block';
            ADDLINE1i();
           // ADDLINE1i();

        }
        else{
            var div = document.getElementById('linev_block1i');
            $('.block_line_uv1i').remove();
            div.style.display = 'none';
            C2=0;

        }
        zena();
    });



    //===== Заполнение цены линий электропередачи  после выбора типа   =====//

    function sel_line1i(element) {

        var ZlineST = element.value;

        var block = $(element).parents('.block_line_uv1i');
        block.find('.linestav1i').val(ZlineST);
        var Ni = document.getElementById('powers').value;

        Ni=+Ni;
        var zlinev=ZlineST*Ni;
        zlinev=zlinev.toFixed(2);
        var block = $(element).parents('.block_line_uv1i');
        block.find('.lina_z1i').val(zlinev);

        Sel_LineZAll1i();

    }
    window.sel_line1i = sel_line1i;

    //===== добавление линий электропередачи    =====//

    function ADDLINE1i() {
        var Uv = document.getElementById('potentials').value;
        //console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_line_uv1i"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n<td style="width:20%;">\n <select required class="line_uv1i" onclick="sel_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:10%"> <input type="text" class="linestav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="lina_z1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1i" onclick="DelLine1i(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1i').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1i');

            for (var i = 0; i < ellinei04.length; i++)  {
                $('<option value="' + ellinei04[i].zenat + '">' + ellinei04[i].name + '</option>').appendTo(newSelSek);
            }

            var newSection = $('<tr class="block_line_uv1i"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n <td style="width:20%;">\n <select required class="line_uv1i" onclick="sel_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:10%"> <input type="text" class="linestav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="lina_z1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del1i" onclick="DelLine1i(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1i').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1i');

            for (var i = 0; i < ellinei04.length; i++)  {
                $('<option value="' + ellinei04[i].zenat + '">' + ellinei04[i].name + '</option>').appendTo(newSelSek);
            }


        }

        if (Uv==1) {

            var newSection = $('<tr class="block_line_uv1i"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 1</span> </td>\n <td style="width:20%;">\n <select required class="line_uv1i" onclick="sel_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:10%"> <input type="text" class="linestav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="lina_z1i"  value="0" readonly="readonly"> </td>\n   <td  style="width:20%"><button class="butuv_del1i" onclick="DelLine1i(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1i').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1i');

            for (var i = 0; i < ellinei6.length; i++)  {
                $('<option value="' + ellinei6[i].zenat + '">' + ellinei6[i].name + '</option>').appendTo(newSelSek);
            }

            var newSection = $('<tr class="block_line_uv1i"></tr>');
            newSection.html(
                '<td style="width:10%;"> <span>Источник 2</span> </td>\n <td style="width:20%;">\n <select required class="line_uv1i" onclick="sel_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:10%"> <input type="text" class="linestav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="lina_z1i"  value="0" readonly="readonly"> </td>\n   <td  style="width:20%"><button class="butuv_del1i" onclick="DelLine1i(this); ">Удалить объект</button>  </td>'
            );
            $('#linev_uv1i').append(newSection);

            var newSelSek = $(newSection).find('.line_uv1i');

            for (var i = 0; i < ellinei6.length; i++)  {
                $('<option value="' + ellinei6[i].zenat + '">' + ellinei6[i].name + '</option>').appendTo(newSelSek);
            }
        }
    }

    $('#but_line1i').click(function () {
        ADDLINE1i();
    });


//===== Удаление линий электропередачи     =====//
    function DelLine1i(element) {
        var sss= $(element).parents('.block_line_uv1i');
        sss.remove()
        Sel_LineZAll1i();
       }
    window.DelLine1i = DelLine1i;


    //===== вычисление общей цены по линий электропередачи     =====//
    function Sel_LineZAll1i() {
        C2=0;
        $('.lina_z1i').each(function(){
            C2 += parseFloat($(this).val());
        });
        //console.log(C2);
        zena();
    }


    //========Строительство закрытых галерей 3 категория надежности стандарт=======//

    $('#galer_check1i').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('linev_block1i');
            $('.block_line_uv1i').remove();
            div.style.display = 'none';
            $('#linev_check1i').prop({'checked': false})
            C2=0;


            var div = document.getElementById('galer_block1i');
            div.style.display = 'block';
            ADDLGAL1i();

        }
        else{
            var div = document.getElementById('galer_block1i');
            $('.block_galer_uv1i').remove();
            div.style.display = 'none';
            C3=0;

        }
        zena();
    });



    //===== Заполнение цены закрытых галерей  после выбора типа   =====//

    function galer_line1i(element) {

        var ZgaleST = element.value;

        var block = $(element).parents('.block_galer_uv1i');
        block.find('.galertav1i').val(ZgaleST);
        var zgalerv=0;
        zgalerv=ZgaleST;
       // zgalerv=zgalerv.toFixed(2);
        var block = $(element).parents('.block_galer_uv1i');
        block.find('.galer_z1i').val(zgalerv);
        Sel_GalZAll1i();

    }
    window.galer_line1i = galer_line1i;

    //===== добавление закрытых галерей   =====//

    function ADDLGAL1i() {

        var Uv = document.getElementById('potentials').value;
        //console.log(Uv);

        if (Uv==0) {

            var newSection = $('<tr class="block_galer_uv1i"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv1i" onclick="galer_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="galer_z1i"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del1i" onclick="Delgaler1i(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1i').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1i');

            for (var i = 0; i < galeri04.length; i++)  {
                $('<option value="' + galeri04[i].zenat + '">' + galeri04[i].name + '</option>').appendTo(newSelSek);
            }
        }

        if (Uv==1) {

            var newSection = $('<tr class="block_galer_uv1i"></tr>');
            newSection.html(
                '<td style="width:20%;">\n <select required class="galer_uv1i" onclick="galer_line1i(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav1i"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"> <input type="text" class="galer_z1i"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del1i" onclick="Delgaler1i(this); ">Удалить объект</button>  </td>'
            );

            $('#galer_uvv1i').append(newSection);

            var newSelSek = $(newSection).find('.galer_uv1i');

            for (var i = 0; i < galeri6.length; i++)  {
                $('<option value="' + galeri6[i].zenat + '">' + galeri6[i].name + '</option>').appendTo(newSelSek);
            }
        }

    }

    $('#but_gal1i').click(function () {
        //alert(999)
        ADDLGAL1i();
    });

//===== Удаление закрытых галерей     =====//
    function Delgaler1i(element) {
        var sss= $(element).parents('.block_galer_uv1i');
        sss.remove();

        Sel_GalZAll1i();
    }

    window.Delgaler1i = Delgaler1i;


    //===== вычисление  цены текущей галерей     =====//
    function Sel_galerZ1i(element) {
        var Lgaler = element.value;



        var zgaler=Lgaler;
        // var zlinev=7777777;
        var block = $(element).parents('.block_galer_uv1i');
        block.find('.galer_z1i').val(zgaler);

        Sel_GalZAll1i();


    }

    window.Sel_galerZ1i = Sel_galerZ1i;

    //===== вычисление  цены текущей галерей     =====//
    function Sel_galerZ2i(element) {
        var Lgaler = element.value;
        var zgaler=Lgaler;
        var block = $(element).parents('.block_galer_uv1i');
        block.find('.galer_z1').val(zgaler);
        Sel_GalZAll1i();
    }

    window.Sel_galerZ2i = Sel_galerZ2i;



    //===== вычисление общей цены по закрытых галерей     =====//
    function Sel_GalZAll1i() {
        C3=0;
        $('.galer_z1i').each(function(){
            C3 += parseFloat($(this).val());
        });
       // console.log(C3);
        zena();
    }








    function zena() {
        Zorg=0;
       Zorg_ndc=0;
        Zorgndc=0;
        Zorg_itog=0;
        Zmerop_itog=0;

        //===== Вычитка введенной мощности   =====//
        var Ni = document.getElementById('powers').value;

        Ni=+Ni;


        //===== Вычитка уровня напряжения   =====//
        var Un = document.getElementById('potentials').value;

        //===== Вычитка коэфффицента надежности   =====//
        var Knad = document.getElementById('reliabilitys').value;

        //===== Вычитка способа расчета   =====//
        var Sr = document.getElementById('payments').value;

        //===== определение  Необходимо cтроительство 1- Необходимо  =====//
        var Str1=$("#building1").prop("checked");
        if (Str1==true){
            StrN=1;
        }
        else{
            StrN=0;
        }

        //==== Мощность меньше 15   =====//
        if ( (Ni>=0) && (Ni<=15) ){

            var div = document.getElementById('bild');
            div.style.display = 'none';
            if (Knad==2){
                Zorg=Ptp;
            }

            if ((Knad==0)|| (Knad==1)) {
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }
            }

            if ((Knad==0)|| (Knad==1)) {
                if (Sr == 1) {
                    Zorg = C1;
                }
            }
        }
        //===== Мощность больше 15    =====//
        if ( (Ni>15) && (Ni<=150) ){
            var div = document.getElementById('bild');
            div.style.display = 'none';
            if (Sr == 1) {
                Zorg = C1;
            }
            if (Sr == 0) {
                Zorg = C1maxN * Ni;
            }



        }
        //===== Мощность больше 150    =====//
        if ( (Ni>150)  ){
            // alert(155);

            //Строительство не нужно//
            if (StrN==0){
                if (Sr == 1) {
                    Zorg = C1;
                }
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }
                var div = document.getElementById('bild');
                div.style.display = 'none';



            }

            //Строительство  нужно//
            if (StrN==1) {
                if (Sr == 1) {
                    Zorg = C1;
                }
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }
                var div = document.getElementById('bild');
                div.style.display = 'block';

            }


                // категория надежности 3  уровень напряжения 04-06 ставка за единицу мощности/
                if ((Knad==2)&& (Sr==0)){
                    var div = document.getElementById('bild3i');
                    div.style.display = 'block';

                    var Unv = document.getElementById('potentials').value;
                    if(Unv==0){
                       var linev3V='Строительство линий электропередачи (ЛЭП) 0,4 кВ';
                    }
                    if(Unv==1){
                        var linev3V='Строительство линий электропередачи (ЛЭП) 6-10 кВ';
                    }
                    $('#linev3i').text(linev3V);

                    var div2 = document.getElementById('bild3');
                    div2.style.display = 'none';
                    var div = document.getElementById('bild1');
                    div.style.display = 'none';
                    var div = document.getElementById('bild1i');
                    div.style.display = 'none';



                    var div = document.getElementById('sekcion_block');
                    $('.block_sek').remove();
                    div.style.display = 'none'
                    $('#sekcion_check').prop({'checked': false});

                   var div = document.getElementById('transformv_block');
                    $('.block_uv').remove();
                    div.style.display = 'none'
                    $('#transformv_check').prop({'checked': false});


                   var div = document.getElementById('galer_block');
                   $('.block_galer_uv').remove();
                    div.style.display = 'none';
                    $('#galer_check').prop({'checked': false});


                    var div = document.getElementById('linev_block');
                    $('.block_line_uv').remove();
                   div.style.display = 'none';
                    $('#linev_check').prop({'checked': false})

                }
               // категория надежности 3  уровень напряжения 04 - 6 ставка стандартизировнная/

                if ((Knad==2)&& (Sr==1)){

                   // alert(210);
                    var div = document.getElementById('bild3');
                    div.style.display = 'block';
                    var Unv = document.getElementById('potentials').value;
                    if(Unv==0){
                        var linev3V='Строительство линий электропередачи (ЛЭП) 0,4 кВ';
                    }
                    if(Unv==1){
                        var linev3V='Строительство линий электропередачи (ЛЭП) 6-10 кВ';
                    }
                    $('#linev3').text(linev3V);


                    var div2 = document.getElementById('bild3i');
                    div2.style.display = 'none';
                    var div = document.getElementById('bild1');
                    div.style.display = 'none';
                    var div = document.getElementById('bild1i');
                    div.style.display = 'none';

                    var div = document.getElementById('sekcion_blocki');
                   $('.block_seki').remove();
                    div.style.display = 'none';
                    $('#sekcion_checki').prop({'checked': false});

                    var div = document.getElementById('transformv_blocki');
                    $('.block_uvi').remove();
                    div.style.display = 'none'
                    $('#transformv_checki').prop({'checked': false});

                    var div = document.getElementById('galer_blocki');
                    $('.block_galer_uvi').remove();
                    div.style.display = 'none';
                    $('#galer_checki').prop({'checked': false});


                    var div = document.getElementById('linev_blocki');
                    $('.block_line_uvi').remove();
                    div.style.display = 'none';
                    $('#linev_checki').prop({'checked': false})


                }

            // категория надежности 1,2  уровень напряжения 04 - 6 ставка стандартизировнная/
            if ((Knad>=0)&& (Knad<2)&&(Sr==1)) {
                var div = document.getElementById('bild1');
                div.style.display = 'block';
                var Unv = document.getElementById('potentials').value;
                if(Unv==0){
                    var linev3V='Строительство линий электропередачи (ЛЭП) 0,4 кВ';
                }
                if(Unv==1){
                    var linev3V='Строительство линий электропередачи (ЛЭП) 6-10 кВ';
                }
                $('#linev_1').text(linev3V);


                var div = document.getElementById('bild1i');
                div.style.display = 'none';
                var div = document.getElementById('bild3');
                div.style.display = 'none';
                var div2 = document.getElementById('bild3i');
                div2.style.display = 'none';


                var div = document.getElementById('sekcion_block1i');
                $('.block_sek1i').remove();
                div.style.display = 'none';
                $('#sekcion_check1i').prop({'checked': false});

                var div = document.getElementById('transformv_block1i');
                $('.block_uv1i').remove();
                div.style.display = 'none'
                $('#transformv_check1i').prop({'checked': false});

                var div = document.getElementById('galer_block1i');
                $('.block_galer_uv1i').remove();
                div.style.display = 'none';
                $('#galer_check1i').prop({'checked': false});


                var div = document.getElementById('linev_block1i');
                $('.block_line_uv1i').remove();
                div.style.display = 'none';
                $('#linev_check1i').prop({'checked': false})


            }

            // категория надежности 1 2  уровень напряжения 04-06 ставка за единицу мощности/
            if ((Knad>=0)&& (Knad<2)&&(Sr==0)) {
                var div = document.getElementById('bild1i');
                div.style.display = 'block';
                var Unv = document.getElementById('potentials').value;
                if(Unv==0){
                    var linev3V='Строительство линий электропередачи (ЛЭП) 0,4 кВ';
                }
                if(Unv==1){
                    var linev3V='Строительство линий электропередачи (ЛЭП) 6-10 кВ';
                }
                $('#linev_1i').text(linev3V);

                var div = document.getElementById('bild1');
                div.style.display = 'none';
                var div = document.getElementById('bild3');
                div.style.display = 'none';
                var div2 = document.getElementById('bild3i');
                div2.style.display = 'none';

                var div = document.getElementById('sekcion_block1');
                $('.block_sek1').remove();
                div.style.display = 'none';
                $('#sekcion_check1').prop({'checked': false});

                var div = document.getElementById('transformv_block1');
                $('.block_uv1').remove();
                div.style.display = 'none'
                $('#transformv_check1').prop({'checked': false});

                var div = document.getElementById('galer_block1');
                $('.block_galer_uv1').remove();
                div.style.display = 'none';
                $('#galer_check1').prop({'checked': false});


                var div = document.getElementById('linev_block1');
                $('.block_line_uv1').remove();
                div.style.display = 'none';
                $('#linev_check1').prop({'checked': false})


            }


        }


        //===============
 //Стоимость организационных мероприятий, не включающих в себя расходы на строительство объектов электросетевого хозяйства//

       //====Цена  без   НДС
        Zorg_ndc=Zorg;
        var Zorg_ndcR=Zorg_ndc;
        Zorg_ndc=Zorg_ndc.toFixed(2);
        Zorg_ndc=new Intl.NumberFormat('ru-RU').format(Zorg_ndc);
        $('#Zorg_ndc').text(Zorg_ndc);

        //=====Цена   НДС =====//
        Zorgndc=(Zorg/100)*20;
        var ZorgndcR=Zorgndc;
        Zorgndc=Zorgndc.toFixed(2);
        Zorgndc=new Intl.NumberFormat('ru-RU').format(Zorgndc);
        $('#Zorgndc').text(Zorgndc);

        //=====Цена с НДС =====//
        Zorg_itog=Zorg_ndcR+ZorgndcR;
        var Zorg_itogR=Zorg_itog;
        Zorg_itog=Zorg_itog.toFixed(2);
        Zorg_itog=new Intl.NumberFormat('ru-RU').format(Zorg_itog);
        $('#Zorg_itog').text(Zorg_itog);







        //Стоимость мероприятий, связанных со строительством "последней мили"//
        //====Цена  без   НДС
        Zmerop_nds=Zmerop_itog +C5+C6+C2+C3;
        var Zmerop_ndsR=+Zmerop_nds;
        Zmerop_nds=Zmerop_nds.toFixed(2);
        Zmerop_nds=new Intl.NumberFormat('ru-RU').format(Zmerop_nds);
        $('#Zmerop_nds').text(Zmerop_nds);



               //=====Цена   НДС =====//
        Zmeropnds= (Zmerop_ndsR/100)*20;
        var ZmeropndsR=+Zmeropnds;
        Zmeropnds=Zmeropnds.toFixed(2);
        Zmeropnds=new Intl.NumberFormat('ru-RU').format(Zmeropnds);
        $('#Zmeropnds').text(Zmeropnds);

        //=====Цена с НДС =====//

        Zmerop_itog=Zmerop_ndsR+ZmeropndsR;

        var Zmerop_itogR=Zmerop_itog;

        Zmerop_itog=Zmerop_itog.toFixed(2);
        Zmerop_itog=new Intl.NumberFormat('ru-RU').format(Zmerop_itog);
        $('#Zmerop_itog').text(Zmerop_itog);



//Ориентировочная стоимость технологического присоединения//
        //====Цена  без   НДС
        Ztexn_nds= Zmerop_ndsR+Zorg_ndcR;
        var Ztexn_ndsR=+Ztexn_nds;
        Ztexn_nds=Ztexn_nds.toFixed(2);
        Ztexn_nds=new Intl.NumberFormat('ru-RU').format(Ztexn_nds);
        $('#Ztexn_nds').text(Ztexn_nds);


        //=====Цена   НДС =====//
        Ztexnnds= (Ztexn_ndsR/100)*20;
        var ZtexnndsR=+Ztexnnds;
        Ztexnnds=Ztexnnds.toFixed(2);
        Ztexnnds=new Intl.NumberFormat('ru-RU').format(Ztexnnds);
        $('#Ztexnnds').text(Ztexnnds);


        //=====Цена с НДС =====//

        Ztexn_itog=Ztexn_ndsR+ZtexnndsR;

        var Ztexn_itogR=+Ztexn_itog;
        Ztexn_itog=Ztexn_itog.toFixed(2);
        Ztexn_itog=new Intl.NumberFormat('ru-RU').format(Ztexn_itog);
        $('#Ztexn_itog').text(Ztexn_itog);
    }


});




