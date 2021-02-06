var typeCalck, Lbloknot, Hbloknot;
typeCalck=1;
Lbloknot=105;
Hbloknot=148;

$(document).ready(function() {
    $('.calc_content_img_block1').click (function ()  {
        $(".calc_content_img_block1").removeClass("active"); // Снимаем чекбокс со всей группы
        $(this). addClass('active'); // Оставляем выбранный чекбокс
        typeCalck=$(this).attr('id');
        if (typeCalck==1){
            $('#typeCalck').text("Блокнот на скобу");
        }
        if (typeCalck==2){
            $('#typeCalck').text("Блокнот на пружину");
        }
        if (typeCalck==3){
            $('#typeCalck').text("Блокнот на клею");
        }
        Zena();
    });
    //======================= Заполнение данных по формату блокнотов ========================\\
    function ADDFormat() {
        var newCategor = $('#format');
        for (var i = 0; i < format.length; i++) {
            $('<option value="' + format[i].val + '">' + format[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDFormat();

    //======================= Заполнение данных на первом попап Обложка ========================\\

    function ADDOblogka() {
        var newCategor = $('#typeb');
        for (var i = 0; i < typeb.length; i++) {
            $('<option value="' + typeb[i].val + '">' + typeb[i].name + '</option>').appendTo(newCategor);
        }
        var newCategor = $('#plb');
        for (var i = 0; i < melov.length; i++) {
            $('<option value="' + melov[i].val + '">' + melov[i].name + '</option>').appendTo(newCategor);
        }

        var newCategor = $('#colorb');
        for (var i = 0; i < colorb.length; i++) {
            $('<option value="' + colorb[i].val + '">' + colorb[i].name + '</option>').appendTo(newCategor);
        }

        var newCategor = $('#laminb');
        for (var i = 0; i < laminir.length; i++) {
            $('<option value="' + laminir[i].val + '">' + laminir[i].name + '</option>').appendTo(newCategor);
        }
        Zena()
    }

    ADDOblogka();

    //======================= Заполнение данных на втором попап Блокнот ========================\\

    function ADDBloknot() {
        var newCategor = $('#typeb_bl');
        for (var i = 0; i < typeb.length; i++) {
            $('<option value="' + typeb[i].val + '">' + typeb[i].name + '</option>').appendTo(newCategor);
        }
        var newCategor = $('#plb_bl');
        for (var i = 0; i < melov.length; i++) {
            $('<option value="' + melov[i].val + '">' + melov[i].name + '</option>').appendTo(newCategor);
        }

        var newCategor = $('#colorb_bl');
        for (var i = 0; i < colorb.length; i++) {
            $('<option value="' + colorb[i].val + '">' + colorb[i].name + '</option>').appendTo(newCategor);
        }

        var newCategor = $('#laminb_bl');
        for (var i = 0; i < laminir.length; i++) {
            $('<option value="' + laminir[i].val + '">' + laminir[i].name + '</option>').appendTo(newCategor);
        }
        Zena()
    }

    ADDBloknot();


    //======================= Заполнение данных поле выбоа формата блокнота ========================\\

    $('#format').click(function () {
        var formatl = document.getElementById('format').value;
         if (formatl==1){
             Lbloknot=105;
             Hbloknot=148;
         }
        if (formatl==2){
            Lbloknot=148;
            Hbloknot=210;
        }

        if (formatl==3){
            Lbloknot=210;
            Hbloknot=297;
        }

        if (formatl==4){
            Lbloknot=297;
            Hbloknot=420;
        }
        if (formatl==5){
            Lbloknot=148;
            Hbloknot=105;
        }
        if (formatl==6){
            Lbloknot=210;
            Hbloknot=148;
        }
        if (formatl==7){
            Lbloknot=297;
            Hbloknot=210;
        }
        if (formatl==8){
            Lbloknot=420;
            Hbloknot=297;
        }

        document.getElementById('Llist').value=Lbloknot;
        document.getElementById('Hlist').value=Hbloknot;
        $('#Lbl').text(Lbloknot);
        $('#Hbl').text(Hbloknot);

        if (formatl==9){
            $('.calc_content_format2').addClass('format2_active');
        }
        else{
            $('.calc_content_format2').removeClass('format2_active');
        }
        Zena();
    });


    $('#Llist').click (function(){
        Lbloknot=document.getElementById('Llist').value;
        Hbloknot=document.getElementById('Hlist').value;
        $('#Lbl').text(Lbloknot);
        $('#Hbl').text(Hbloknot);
        Zena();
    });

    $('#Hlist').click (function(){
        Lbloknot=document.getElementById('Llist').value;
        Hbloknot=document.getElementById('Hlist').value;
        $('#Lbl').text(Lbloknot);
        $('#Hbl').text(Hbloknot);
        Zena();
    });

    $('#Llist').keyup(function(e){
        Lbloknot=document.getElementById('Llist').value;
        if(Lbloknot<0){
            Lbloknot=0;
        }
        document.getElementById('Llist').value=Lbloknot;

        Hbloknot=document.getElementById('Hlist').value;
        if(Hbloknot<0){
            Hbloknot=0;
        }
        document.getElementById('Hlist').value=Hbloknot;

        $('#Lbl').text(Lbloknot);
        $('#Hbl').text(Hbloknot);
        Zena();
    });

    $('#Hlist').keyup(function(e){
        Lbloknot=document.getElementById('Llist').value;
        if(Lbloknot<0){
            Lbloknot=0;
        }
        document.getElementById('Llist').value=Lbloknot;

        Hbloknot=document.getElementById('Hlist').value;
        if(Hbloknot<0){
            Hbloknot=0;
        }
        document.getElementById('Hlist').value=Hbloknot;

        $('#Lbl').text(Lbloknot);
        $('#Hbl').text(Hbloknot);
        Zena();
    });

    //========================= Выбор типа бумаги ОБЛОЖКА   ===========================///
    $('#typeb').change(function () {

        //========================= удаление выпадающего списка по плотности   ===========================///
        var list = document.querySelector('#plb');
        var optionsCount=list.options.length;
            for (var j = 0; j < optionsCount; j++){
                list.removeChild(list.children[0]);
            }


   //========================= заполнение выпадающего списка по плотности   ===========================///
        var typeb= document.getElementById('typeb').value;
        if (typeb==1){
            var newCategor = $('#plb');
            for (var i = 0; i < melov.length; i++) {
                $('<option value="' + melov[i].val + '">' + melov[i].name + '</option>').appendTo(newCategor);
            }
         }

        if (typeb==2){
            var newCategor = $('#plb');
            for (var i = 0; i < ocfet.length; i++) {
                $('<option value="' +ocfet[i].val + '">' + ocfet[i].name + '</option>').appendTo(newCategor);
            }
        }

        if (typeb==3){
            var newCategor = $('#plb');
            for (var i = 0; i < colorcopi.length; i++) {
                $('<option value="' +colorcopi[i].val + '">' + colorcopi[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeb==4){
            var newCategor = $('#plb');
            for (var i = 0; i < smorl.length; i++) {
                $('<option value="' +smorl[i].val + '">' + smorl[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeb==5){
            var newCategor = $('#plb');
            for (var i = 0; i < dns.length; i++) {
                $('<option value="' +dns[i].val + '">' + dns[i].name + '</option>').appendTo(newCategor);
            }
        }
        $('#select option:selected').text();
       // var typebtext= document.getElementById('typeb').text;
        var typebtext=  $('#typeb option:selected').text();

        $('#type_obl').text(typebtext+';');

        var pl_otbl=document.getElementById('plb').value;

        $('#pl_otbl').text(pl_otbl+';');
        Zena();

    });

    //========================= Выбор плотности бумаги ОБЛОЖКА   ===========================///
    $('#plb').change(function () {

        var pl_otbl=document.getElementById('plb').value;

        $('#pl_otbl').text(pl_otbl+';');
        Zena();

    });

    //========================= Выбор цветности бумаги ОБЛОЖКА   ===========================///
    $('#colorb').change(function () {

        var colorb=$('#colorb option:selected').text();

        $('#color_obl').text(colorb+';');
        Zena();

    });

    //========================= Выбор ламинции бумаги ОБЛОЖКА   ===========================///
    $('#laminb').change(function () {

        var laminb=$('#laminb option:selected').text();

        $('#lamin_obl').text(laminb+';');
        Zena();

    });








    //========================= Выбор типа бумаги БЛОКНОТ   ===========================///
    $('#typeb_bl').change(function () {

        //========================= удаление выпадающего списка по плотности   ===========================///
        var list = document.querySelector('#plb_bl');
        var optionsCount=list.options.length;
        for (var j = 0; j < optionsCount; j++){
            list.removeChild(list.children[0]);
        }


        //========================= заполнение выпадающего списка по плотности   ===========================///
        var typeb_bl= document.getElementById('typeb_bl').value;
        if (typeb_bl==1){
            var newCategor = $('#plb_bl');
            for (var i = 0; i < melov.length; i++) {
                $('<option value="' + melov[i].val + '">' + melov[i].name + '</option>').appendTo(newCategor);
            }
        }

        if (typeb_bl==2){
            var newCategor = $('#plb_bl');
            for (var i = 0; i < ocfet.length; i++) {
                $('<option value="' +ocfet[i].val + '">' + ocfet[i].name + '</option>').appendTo(newCategor);
            }
        }

        if (typeb_bl==3){
            var newCategor = $('#plb_bl');
            for (var i = 0; i < colorcopi.length; i++) {
                $('<option value="' +colorcopi[i].val + '">' + colorcopi[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeb_bl==4){
            var newCategor = $('#plb_bl');
            for (var i = 0; i < smorl.length; i++) {
                $('<option value="' +smorl[i].val + '">' + smorl[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeb_bl==5){
            var newCategor = $('#plb_bl');
            for (var i = 0; i < dns.length; i++) {
                $('<option value="' +dns[i].val + '">' + dns[i].name + '</option>').appendTo(newCategor);
            }
        }

        // var typebtext= document.getElementById('typeb').text;
        var typebtext=  $('#typeb_bl option:selected').text();

        $('#type_bl').text(typebtext+';');

        var pl_otbl=document.getElementById('plb_bl').value;

        $('#pl_bl').text(pl_otbl+';');
        Zena();

    });

    //========================= Выбор плотности бумаги БЛОКНОТ   ===========================///
    $('#plb_bl').change(function () {

        var pl_otbl=document.getElementById('plb_bl').value;

        $('#pl_bl').text(pl_otbl+';');
       // alert(pl_otbl);
        Zena();

    });

    //========================= Выбор цветности бумаги БЛОКНОТ   ===========================///
    $('#colorb_bl').change(function () {

        var colorb=$('#colorb_bl option:selected').text();
       // alert(colorb);
        $('#color_blv').text(colorb+';');
        Zena();

    });

    //========================= Выбор ламинции бумаги БЛОКНОТА   ===========================///
    $('#laminb_bl').change(function () {

        var laminb=$('#laminb_bl option:selected').text();

        $('#lamin_bl').text(laminb+';');
        Zena();

    });



    function Zena(){

        if (typeCalck==1){
            $('#tupblitog').text("Блокнот на скобу");
        }
        if (typeCalck==2){
            $('#tupblitog').text("Блокнот на пружину");
        }
        if (typeCalck==3){
            $('#tupblitog').text("Блокнот на клею");
        }


        $('#Litog').text(Lbloknot);
        $('#Hitog').text(Hbloknot);


        //=====Расчет кол-ва тиражных листов блока=========///

        var C26=Lsra3/(Lbloknot*2);
        C26=Math.trunc(C26);

        var D26=Hsra3/(Hbloknot);
        D26=Math.trunc(D26);

        var V1=C26*D26;

        var C27=Lsra3/(Hbloknot);
        C27=Math.trunc(C27);

        var D27=Hsra3/(Lbloknot*2);
        D27=Math.trunc(D27);

        var V2=C27*D27;

        var NSpa3=4*Math.max(V1, V2);

        //console.log(C26);
        //console.log(D26);
        //console.log(V1);
        //console.log('==================');
        //console.log(V2);
        //console.log(C27);
        //console.log(D27);
        //console.log('==================');
       // console.log(NSpa3);

     //======Расчет кол-ва тиражных листов обложки======//
      var Ntirag=document.getElementById('tirag').value;
      var   NtiragList=(4/NSpa3)*Ntirag;
       // console.log(NtiragList);


     //======цена листа=====//
        var TypeObl=document.getElementById('typeb').value;
        var Ztonnab=0;
        if (TypeObl==1){
            Ztonnab=Zmelov;
        }
        if (TypeObl==2){
            Ztonnab=Zofsrt;
        }
        if (TypeObl==3){
            Ztonnab=Zdns;
        }
        if (TypeObl==4){
            Ztonnab=Zcolorcopi;
        }
        if (TypeObl==5){
            Ztonnab=Zcolorcopi;
        }

       // console.log(Ztonnab);

        var PlObl=document.getElementById('plb').value;

       // console.log(PlObl);

        var ZlistObl=(0.47*0.65*PlObl/1000)*(Ztonnab*Kevro/1000)/2;

        ZlistObl=ZlistObl.toFixed(5);
       // console.log(ZlistObl);

        //======== стоимость бумаги обложка ========//
        var ZbumObl=ZlistObl*NtiragList;
        ZbumObl=ZbumObl.toFixed(5);
       // console.log(ZbumObl);


  //=======стоимость печати обложка===========//
        //======кол-во прогонов====//
        var Kcolorb=document.getElementById('colorb').value;
        var NprogonObk=0;
        if (Kcolorb==1){
            NprogonObk=NtiragList;
        }
        else{
            NprogonObk=NtiragList*2;
        }

        //====== цена прогон  ===//

        var Zprogon=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(NprogonObk, -0.436))/100;

        Zprogon=Zprogon.toFixed(5);
      //  console.log(Zprogon);

        //====== цена печати обложка  ===//
        var ZprintObl=Zprogon*NprogonObk;
        ZprintObl=ZprintObl.toFixed(5);
       // console.log(ZprintObl);

    //=======стоимость ламинация обложка===========//

        var KlaminObl=document.getElementById('laminb').value;
        var ZlaminObl=KlaminObl*Kevro*NtiragList;
       // console.log(ZlaminObl);

        //=======стоимость  обложка полная ===========//

        var ZoblItog=ZlaminObl*1+ZprintObl*1+ZbumObl*1;
       // console.log(ZoblItog);

       // Lsra3
        //=======стоимость  обложка полная печать ===========//
        $('#ZoblItog').text(ZoblItog);


        //======= БЛОКНОТ  ===========//
        //======Расчет кол-ва тиражных листов БЛОКНОТ======//

      //  console.log('=============================');
        var Ntirag_bl=document.getElementById('list').value;

        var   NtiragList_bl=Ntirag_bl/NSpa3*Ntirag;
        // console.log(NtiragList_bl);


        //======цена листа БЛОКНОТ=====//
        var Type_bl=document.getElementById('typeb_bl').value;
        var Ztonna_bl=0;
        if (Type_bl==1){
            Ztonna_bl=Zmelov;
        }
        if (Type_bl==2){
            Ztonna_bl=Zofsrt;
        }
        if (Type_bl==3){
            Ztonna_bl=Zdns;
        }
        if (Type_bl==4){
            Ztonna_bl=Zcolorcopi;
        }
        if (Type_bl==5){
            Ztonna_bl=Zcolorcopi;
        }

       //  console.log(Ztonna_bl);

        var Pl_bl=document.getElementById('plb_bl').value;

        // console.log(PlObl);

        var Zlist_bl=(0.47*0.65*Pl_bl/1000)*(Ztonna_bl*Kevro/1000)/2;

        Zlist_bl=Zlist_bl.toFixed(5);
       //  console.log(Zlist_bl);

   //============Стоимость тиража=============//
        //============Стоимость тиража бумага=============//
        var Ztirag_bl=Zlist_bl*NtiragList_bl;

        Ztirag_bl=Ztirag_bl.toFixed(5);
      //  console.log(Ztirag_bl);

        //=======стоимость печати БЛОКНОТ===========//
        //======кол-во прогонов====//
        var Kcolor_bl=document.getElementById('colorb_bl').value;
        var Nprogon_bl=0;

        if (Kcolor_bl==1){
            Nprogon_bl=NtiragList_bl;
        }
        else{
            Nprogon_bl=NtiragList_bl*2;
        }

        //====== цена прогон &&&&&&&&&&&&&&&&& ===//

        var Zprogon_bl=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(Nprogon_bl, -0.436))/100;

        Zprogon_bl=Zprogon_bl.toFixed(5);

     //    console.log(Zprogon_bl);

        //====== цена печати БЛОКНОТ  ===//
        var Zprint_bl=Zprogon_bl*Nprogon_bl;
        Zprint_bl=Zprint_bl.toFixed(5);
       //  console.log(Zprint_bl);

        //=======стоимость ламинация БЛОКНОТ===========//

        var Klamin_bl=document.getElementById('laminb_bl').value;
        var Zlamin_bl=Klamin_bl*Kevro*NtiragList_bl;
        // console.log(Zlamin_bl);

        //=======стоимость  Блокнот  полная ===========//

        var Z_blItog=Zlamin_bl*1+Zprint_bl*1+Ztirag_bl*1;

        //console.log(Zlamin_bl);
       // console.log(Zprint_bl);
       // console.log(Ztirag_bl);

        // console.log(Z_blItog);

       // console.log('=============================');

        // Lsra3
        //=======стоимость  обложка полная печать ===========//
        $('#Z_blItog').text(Z_blItog);


        //=======cтоимость  ПЕРЕПЛЕТА ===========//
        var NtiragP=document.getElementById('tirag').value;
        var ZPerepl=NtiragP*19.558+100;

        //=======  Общая стоимость по всему ===========//

        var ZitogV=ZPerepl*1+Z_blItog*1+ZoblItog*1;
        $('#Zitog').text(ZitogV);


    };




});






