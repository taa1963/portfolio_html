






$(document).ready(function() {


    //===== закрываем ввод в поле мощность цифр и отрицательных значений   =====//
    var flag = true;
    $('#powers').keypress(function(e) {

        if ((event.keyCode != 44 || !flag) && (event.keyCode < 48 || event.keyCode > 57)) {
            event.returnValue = false;
        }
        if(event.keyCode == 44) flag = true;

    });


        // ======Только одна точка или одна запятая=====

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



    //===== Открытие и закрытие блоков после введение мощности   =====//

    $('#powers').click(function (){

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
            block.find('.reliability').hide();
            block.find('.payment').hide();
            block.find('.building').hide();
            block.find('.itog').hide();
            block.find('.bild').hide();

        }
    });

    $('#powers').bind('change keyup',function (){
        var powersvv = document.getElementById('powers').value;
        powersvv=+powersvv;
        if (powersvv>=999){
            powersvv=999;
            document.getElementById('powers').value=powersvv;
        }

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


            else {

                var block = $(this).parents('.calc_form');
                block.find('.potential').show();
                block.find('.reliability').hide();
                block.find('.payment').hide();
                block.find('.building').hide();
                block.find('.itog').hide();
                block.find('.bild').hide();
            }


    });



    //===== Открытие и закрытие блоков после выбора уровня напряжения   =====//


    $('#potentials').click(function (){

        var potentialsv = document.getElementById('potentials').value;
        // alert(powersv);

        if (potentialsv>=0){

            var block = $(this).parents('.calc_form');
            block.find('.reliability').show();

            if (itog==1){
                block.find('.itog').show();
                block.find('.reliability').show();
                block.find('.payment').hide();
                block.find('.building').show();
                zena();
            }
            if (StrN=0){
                block.find('.bild').show();
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
        zena();
        //StrN=0;
    });

    $('#building1').click(function (){
        itog=1;
        var block = $(this).parents('.calc_form');
        block.find('.itog').show();
        block.find('.bild').hide();
         zena();

    });

    //===== Открытие блока Строительство трансформаторных подстанций   =====//


    $('#transformv_check').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('sekcion_block');
            $('.block_sek').remove();
            div.style.display = 'none';

            $('#sekcion_check').prop({'checked': false})
            C6=0;


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



    //===== Заполнение цены подстанции поле выбора типа   =====//

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
       // alert(444444);

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


    //===== Открытие блока Строительство пунктов секционирования   =====//

    $('#sekcion_check').click(function () {
        if ($(this).prop('checked')) {

            var div = document.getElementById('transformv_block');
            $('.block_uv').remove();
            div.style.display = 'none';


            $('#transformv_check').prop({'checked': false})
            C5=0;


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
        var block = $(element).parents('.block_sek');
        block.find('.sek_v_z').val(ZsekZena);
        //alert(ZsekZena);

        ALLSek(element);

    }
    window.SekCel = SekCel

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
        sss.remove()
        ALLSek(element);
    }

    window.DelSek = DelSek



    //===== вычисление общей цены по подстанциям    =====//
    function ALLSek(element) {
        C6=0;
        $('.sek_v_z').each(function(){
            C6 += parseFloat($(this).val())
        })
       // alert(C6);
        zena();
    }

    window.ALLSek = ALLSek



    // ====Строительство линий электропередачи (ЛЭП) 6-10 кВ========//


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

            // for (var i = 0; i < elline.length; i++)  {
            //     $('<option value="' + elline[i].zenat + '">' + elline[i].name + '</option>').appendTo('.line_uv');
            // }
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
        // console.log(ZlineST);
        // console.log(zlie);

        var zlinev=ZlineST*zlie;
        var block = $(element).parents('.block_line_uv');
        block.find('.lina_z').val(zlinev);

        Sel_LineZAll();


    }
    window.sel_line = sel_line;

    //===== добавление пунктов секционирования   =====//

    function ADDLINE() {
        var newSection = $('<tr class="block_line_uv"></tr>');
        newSection.html(
            '<td style="width:20%;">\n <select required class="line_uv" onclick="sel_line(this)"  >\n <option value="0"> Выберите тип</option>\n </select>\n </td>\n <td  style="width:20%"> <input type="text" class="linestav"  value="0" readonly="readonly"> </td>\n <td  style="width:20%"> <input type="number" class="lini_l"  value="0" min="0" step="1" onclick="Sel_LineZ(this)"> </td>\n <td  style="width:20%"> <input type="text" class="lina_z"  value="0" readonly="readonly"> </td>\n  <td  style="width:20%"><button class="butuv_del" onclick="DelLine(this); ">Удалить объект</button>  </td>'
        );


        $('#linev_uv').append(newSection);

        var newSelSek = $(newSection).find('.line_uv');

        for (var i = 0; i < elline.length; i++)  {
            $('<option value="' + elline[i].zenat + '">' + elline[i].name + '</option>').appendTo(newSelSek);
        }
    }

    $('#but_line').click(function () {
        ADDLINE();
    });





//===== Удаление линий электропередачи     =====//
    function DelLine(element) {
        var sss= $(element).parents('.block_line_uv');
        sss.remove()
        Sel_LineZAll();
        //alert(434334);
    }

    window.DelLine = DelLine






    //===== вычисление  цены текущей по линий электропередачи     =====//
    function Sel_LineZ(element) {
        var Lline = element.value;

        var block2 = $(element).parents('.block_line_uv').find('.linestav');
        var zlie=parseFloat($(block2).val());
         Lline=+Lline;
        zlie=+zlie;
        var zlinev=Lline*zlie;
       // var zlinev=7777777;
        var block = $(element).parents('.block_line_uv');
        block.find('.lina_z').val(zlinev);

        Sel_LineZAll();


    }

    window.Sel_LineZ = Sel_LineZ;


    //===== вычисление общей цены по линий электропередачи     =====//
    function Sel_LineZAll(element) {
        C2=0;


        $('.lina_z').each(function(){
            C2 += parseFloat($(this).val())
        });
       // console.log(C2);
        zena();
    }




    //========Строительство закрытых галерей=======//

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
        var zgaler=parseFloat($(block2).val());
        var zgalerv=0;
        zgaler=+zgaler;
        // console.log(ZgaleST);
        // console.log(zgaler);

        zgalerv=ZgaleST*zgaler;
        var block = $(element).parents('.block_galer_uv');
        block.find('.galer_z').val(zgalerv);

        Sel_GalZAll();


    }
    window.galer_line = galer_line;

    //===== добавление закрытых галерей   =====//

    function ADDLGAL() {
        var newSection = $('<tr class="block_galer_uv"></tr>');
        newSection.html(
            '<td style="width:20%;">\n <select required class="galer_uv" onclick="galer_line(this)"  >\n <option value="0"> Выберите тип</option>\n</select>\n</td>\n <td  style="width:20%"> <input type="text" class="galertav"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"> <input type="number" class="galer_l"  value="0" step="1" min="0" onclick="Sel_galerZ(this)"> </td>\n<td  style="width:20%"> <input type="text" class="galer_z"  value="0" readonly="readonly"> </td>\n<td  style="width:20%"><button class="butuv_del" onclick="Delgaler(this); ">Удалить объект</button>  </td>'
       );



        $('#galer_uvv').append(newSection);

        var newSelSek = $(newSection).find('.galer_uv');

        for (var i = 0; i < galer.length; i++)  {
            $('<option value="' + galer[i].zenat + '">' + galer[i].name + '</option>').appendTo(newSelSek);
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
        Lgaler=+Lgaler;
        zgaler=+zgaler;
        var zgaler=Lgaler*zgaler;
        // var zlinev=7777777;
        var block = $(element).parents('.block_galer_uv');
        block.find('.galer_z').val(zgaler);

        Sel_GalZAll();


    }

    window.Sel_galerZ = Sel_galerZ;


    //===== вычисление общей цены по закрытых галерей     =====//
    function Sel_GalZAll(element) {
        C3=0;


        $('.galer_z').each(function(){
            C3 += parseFloat($(this).val())
        })
         //console.log(C3);
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
            if (StrN==1){
                if (Sr == 1) {
                    Zorg = C1;
                }
                if (Sr == 0) {
                    Zorg = C1maxN * Ni;
                }

                var div = document.getElementById('bild');
                div.style.display = 'block';






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




