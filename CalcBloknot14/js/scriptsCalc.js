var typeCalck, Lbloknot, Hbloknot,Nobl;
typeCalck=2;
Lbloknot=105;
Hbloknot=148;
Nobl=1;


$(document).ready(function() {

    if(BlockOpen==1){
        $('.itog_block').addClass('itog_block_open');
    }


    $('.content_block1_img1').click (function(){
       // alert(5);
        $('.content_block1_img1_2').addClass('active_img2');
        $('.content_block1_img1_1').addClass('active_imgnone');

        $('.content_block1_img2_1').removeClass('active_img2');
        $('.content_block1_img2_1').addClass('active_imgnone');
        $('.content_block1_img2_2').addClass('active_img2');
        $('.content_block1_img2_2').removeClass('active_imgnone');

        $('.content_block1_img3_2').removeClass('active_img2');
        $('.content_block1_img3_1').removeClass('active_imgnone');


        $('.param_block_list2').addClass('act_block');
        $('.param_block_list1').addClass('non_block');
        typeCalck=1;
        Zena();

    });

    $('.content_block1_img2').click (function(){
        // alert(5);
        $('.content_block1_img2_1').addClass('active_img2');
        $('.content_block1_img2_2').addClass('active_imgnone');
        $('.content_block1_img2_1').removeClass('active_imgnone');
        $('.content_block1_img1_2').removeClass('active_img2');
        $('.content_block1_img1_1').removeClass('active_imgnone');
        $('.content_block1_img3_2').removeClass('active_img2');
        $('.content_block1_img3_1').removeClass('active_imgnone');


        $('.param_block_list2').removeClass('act_block');
        $('.param_block_list1').removeClass('non_block');
        typeCalck=2;
        Zena();

    });

    $('.content_block1_img3').click (function(){
        // alert(5);
        $('.content_block1_img3_2').addClass('active_img2');
        $('.content_block1_img3_1').addClass('active_imgnone');
        $('.content_block1_img1_2').removeClass('active_img2');
        $('.content_block1_img1_1').removeClass('active_imgnone');
        $('.content_block1_img2_1').removeClass('active_img2');
        $('.content_block1_img2_1').addClass('active_imgnone');
        $('.content_block1_img2_2').addClass('active_img2');
        $('.content_block1_img2_2').removeClass('active_imgnone');
        $('.param_block_list2').removeClass('act_block');
        $('.param_block_list1').removeClass('non_block');

        typeCalck=3;

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

        var newCategor = $('#colorb_bl');
        for (var i = 0; i < colorb.length; i++) {
            $('<option value="' + colorb[i].val + '">' + colorb[i].name + '</option>').appendTo(newCategor);
        }

        var newCategor = $('#laminb_bl');
        for (var i = 0; i < laminir.length; i++) {
            $('<option value="' + laminir[i].val + '">' + laminir[i].name + '</option>').appendTo(newCategor);
        }
        Zena();
    }

    ADDBloknot();


    //======================= Пересчет после изменения ТИРАЖа ========================\\

    $('#tirag').click(function () {
        Zena();
    });

    $('#tirag').keyup(function(e){
        Zena();
    });


    //======================= Заполнение данных поле выбоа формата блокнота ========================\\

    $('#format').click(function () {
        var formatl = document.getElementById('format').value;
         if (formatl==1){
             Lbloknot=105;
             Hbloknot=148;
             $('.cont_img_itog1').addClass('active_bl');
             $('.cont_img_itog2').addClass('active_img');
             $('.cont_img_itog2').removeClass('active_bl');
             $('.NameBl').text('вертикальный, A6 (105 × 148 мм)');

         }
        if (formatl==2){
            Lbloknot=148;
            Hbloknot=210;
            $('.cont_img_itog1').addClass('active_bl');
            $('.cont_img_itog2').addClass('active_img');
            $('.cont_img_itog2').removeClass('active_bl');
            $('.NameBl').text('вертикальный, A5 (148 × 210 мм)');
        }

        if (formatl==3){
            Lbloknot=210;
            Hbloknot=297;
            $('.cont_img_itog1').addClass('active_bl');
            $('.cont_img_itog2').addClass('active_img');
            $('.cont_img_itog2').removeClass('active_bl');
            $('.NameBl').text('вертикальный, A4 (210 × 297 мм)');
        }

        if (formatl==4){
            Lbloknot=297;
            Hbloknot=420;
            $('.cont_img_itog1').addClass('active_bl');
            $('.cont_img_itog2').addClass('active_img');
            $('.cont_img_itog2').removeClass('active_bl');
            $('.NameBl').text('вертикальный, A4 (297 × 420 мм)');
        }
        if (formatl==5){
            Lbloknot=148;
            Hbloknot=105;
            $('.cont_img_itog2').addClass('active_bl');
            $('.cont_img_itog1').addClass('active_img');
            $('.cont_img_itog1').removeClass('active_bl');
            $('.NameBl').text('горизонтальный, A6 (148 × 105 мм)');
        }
        if (formatl==6){
            Lbloknot=210;
            Hbloknot=148;
            $('.cont_img_itog2').addClass('active_bl');
            $('.cont_img_itog1').addClass('active_img');
            $('.cont_img_itog1').removeClass('active_bl');
            $('.NameBl').text('горизонтальный, A5 (210 × 148 мм)');
        }
        if (formatl==7){
            Lbloknot=297;
            Hbloknot=210;
            $('.cont_img_itog2').addClass('active_bl');
            $('.cont_img_itog1').addClass('active_img');
            $('.cont_img_itog1').removeClass('active_bl');
            $('.NameBl').text('горизонтальный, A4 (297 × 210 мм)');
        }
        if (formatl==8){
            Lbloknot=420;
            Hbloknot=297;
            $('.cont_img_itog2').addClass('active_bl');
            $('.cont_img_itog1').addClass('active_img');
            $('.cont_img_itog1').removeClass('active_bl');
            $('.NameBl').text('горизонтальный, A4 (420 × 297 мм)');
        }

        document.getElementById('Llist').value=Lbloknot;
        document.getElementById('Hlist').value=Hbloknot;
        $('#Lbl').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb12').text(Lbl2);
        $('#Hbl').text(Hbloknot);


        $('#Lb2').text(Hbloknot);
        var Lb22=Lbloknot*2;
        $('#Lb22').text(Lb22);
        $('#Hb2').text(Lbloknot);





        if (formatl==9){

            document.getElementById('Llist').disabled = false;
            document.getElementById('Hlist').disabled = false;
            $('.cont_img_itog1').addClass('active_bl');
            $('.cont_img_itog2').addClass('active_img');
            $('.cont_img_itog2').removeClass('active_bl');
            $('.NameBl').text('Свой размер');


        }
        else{
            document.getElementById('Llist').setAttribute('disabled', 'disabled');
            document.getElementById('Hlist').setAttribute('disabled', 'disabled');

        }
        Zena();
    });


    $('#Llist').click (function(){
        Lbloknot=document.getElementById('Llist').value;
        Hbloknot=document.getElementById('Hlist').value;
        $('#Lbl').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb12').text(Lbl2);
        $('#Hbl').text(Hbloknot);
        $('#Lb2').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb22').text(Lbl2);
        $('#Hb2').text(Hbloknot);
        Zena();
    });

    $('#Hlist').click (function(){
        Lbloknot=document.getElementById('Llist').value;
        Hbloknot=document.getElementById('Hlist').value;
        $('#Lbl').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb12').text(Lbl2);
        $('#Hbl').text(Hbloknot);
        $('#Lb2').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb22').text(Lbl2);
        $('#Hb2').text(Hbloknot);
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
        var Lbl2=Lbloknot*2;
        $('#Lb12').text(Lbl2);
        $('#Hbl').text(Hbloknot);
        $('#Lb2').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb22').text(Lbl2);
        $('#Hb2').text(Hbloknot);
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
        var Lbl2=Lbloknot*2;
        $('#Lb12').text(Lbl2);
        $('#Hbl').text(Hbloknot);
        $('#Lb2').text(Lbloknot);
        var Lbl2=Lbloknot*2;
        $('#Lb22').text(Lbl2);
        $('#Hb2').text(Hbloknot);
        Zena();
    });

    $('#list').click (function(){
        Zena();
    });

    $('#list').keyup (function(){
        Zena();
    });

    $('#list2').click (function(){
        Zena();
    });


    $('#button1').click (function(){

        var txtbtn =  document.getElementById('button1').value;

        if (txtbtn=='Убрать'){
            document.getElementById('button1').value='Добавить';
            $('.param_obl').addClass('active_none');
            $('.itog_obl').addClass('active_none');
            $('.param_oblm').addClass('active_none');
            $('.itog_oblm').addClass('active_none');
            Nobl=2;
            document.getElementById('Nobl').value=Nobl;
            $('#Nobl').text(Nobl);
        }
        else{
            document.getElementById('button1').value='Убрать';
            $('.param_obl').removeClass('active_none');
            $('.itog_obl').removeClass('active_none');
            $('.param_oblm').removeClass('active_none');
            $('.itog_oblm').removeClass('active_none');
            Nobl=1;
            $('#Nobl').text(Nobl);
            document.getElementById('Nobl').value=Nobl;
        }

         Zena();

    });




    //========================= Выбор типа бумаги ОБЛОЖКА   ===========================///
    $('#typeb').change(function () {

        $('#select option:selected').text();
        var typebtext=  $('#typeb option:selected').text();
        $('#type_obl').text(typebtext+';');
        var pl_otbl=document.getElementById('typeb').value;
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
        var typeb_bl= document.getElementById('typeb_bl').value;
        // var typebtext= document.getElementById('typeb').text;
        var typebtext=  $('#typeb_bl option:selected').text();
        $('#type_bl').text(typebtext+';');
        var pl_otbl=document.getElementById('typeb_bl').value;
        $('#pl_bl').text(pl_otbl+';');
        Zena();
    });

    //========================= Выбор плотности бумаги БЛОКНОТ   ===========================///
    $('#plb_bl').change(function () {
        var pl_otbl=document.getElementById('plb_bl').value;
        $('#pl_bl').text(pl_otbl+';');
        Zena();
    });

    //========================= Выбор цветности бумаги БЛОКНОТ   ===========================///
    $('#colorb_bl').change(function () {
        var colorb=$('#colorb_bl option:selected').text();
        $('#color_blv').text(colorb+';');
        Zena();
    });

    //========================= Выбор ламинции бумаги БЛОКНОТА   ===========================///
    $('#laminb_bl').change(function () {
        var laminb=$('#laminb_bl option:selected').text();
        $('#lamin_bl').text(laminb+';');
        Zena();
    });

     $('#color_pr').click(function (){
         Zena();
    });

    function Zena(){


     //=====Заполненеи данных по Брошюрв=========///
        //==== формат:  =====//
        var Tbr=$('#format option:selected').text();
       $('#tupblitog').text(Tbr);
        document.getElementById('tupblitogf').value=Tbr;
        //==== крепление:   =====//
        if (typeCalck==1){
            $('#itogkr').text("Cкоба");
            document.getElementById('itogkrf').value="Cкоба";

        }
        if (typeCalck==2){
           // var color_pr=document.getElementById('color_pr').value;
            $('#itogkr').text("Пружина");
            document.getElementById('itogkrf').value="Пружина";

        }
        if (typeCalck==3){
            $('#itogkr').text("Клей");
            document.getElementById('itogkrf').value="Клей";

        }
        //==== тираж:  =====//
        var tiragvr=document.getElementById('tirag').value;
        $('#tiragv').text(tiragvr);
        document.getElementById('tiragvf').value=tiragvr;


        //==== Обложка материал:  =====//
        var mat_oblv=$('#typeb option:selected').text();
      //  var tiragvr=document.getElementById('tirag').value;
        $('#mat_oblv').text(mat_oblv);


        var TypeObl=$('#typeb option:selected').text();


        var Ztonnab=0;
        if (TypeObl.includes('меловка')){
            Ztonnab=Zmelov;
        }
        if (TypeObl.includes('офсетка')){
            Ztonnab=Zofsrt;
        }
        if (TypeObl.includes('картон')){
            Ztonnab=Zkart;
        }
        if (TypeObl.includes('dnc')){
           Ztonnab=Zdns;

        }

        document.getElementById('mat_oblvf').value=mat_oblv;


        //==== Обложка цветность:  =====//
        var color_oblv=$('#colorb option:selected').text();
        //  var tiragvr=document.getElementById('tirag').value;
        $('#color_oblv').text(color_oblv);
        document.getElementById('color_oblvf').value=color_oblv;

        //==== Обложка ламинация:  =====//
        var lamin_oblv=$('#laminb option:selected').text();
        //  var tiragvr=document.getElementById('tirag').value;
        $('#lamin_oblv').text(lamin_oblv);
        document.getElementById('lamin_oblvf').value=lamin_oblv;

        //==== Блокнот :  =====//
        //==== Блокнот количестов страниц:  =====//

                if (typeCalck==1){
            var Nstrvr=document.getElementById('list2').value;
            $('#Nstr').text(Nstrvr);
            document.getElementById('Nstrf').value=Nstrvr;
            }
        else{
            var Nstrvr=document.getElementById('list').value;
            $('#Nstr').text(Nstrvr);
            document.getElementById('Nstrf').value=Nstrvr;

        }

        //==== Блокнот материал:  =====//
        var mat_blv=$('#typeb_bl option:selected').text();
        //  var tiragvr=document.getElementById('tirag').value;
        $('#mat_blv').text(mat_blv);

        var Type_bl=$('#typeb_bl option:selected').text();

        var Ztonna_bl=0;

        if (Type_bl.includes('меловка')){
            Ztonna_bl=Zmelov;
        }
        if (Type_bl.includes('офсетка')){
            Ztonna_bl=Zofsrt;
        }
        if (Type_bl.includes('картон')){
            Ztonna_bl=Zkart;
        }
        if (Type_bl.includes('dnc')){
            Ztonna_bl=Zdns;
        }

        document.getElementById('mat_blvf').value=mat_blv;


        //==== Блокнот цветность:  =====//
        var color_blv=$('#colorb_bl option:selected').text();
        $('#color_blv').text(color_blv);
        document.getElementById('color_blvf').value=color_blv;

        //==== Блокнот ламинация:  =====//
        var lamin_blv=$('#laminb_bl option:selected').text();
        $('#lamin_blv').text(lamin_blv);
        document.getElementById('lamin_blvf').value=lamin_blv;





        //=====Расчет кол-ва тиражных листов блока=========///

        var f=document.getElementById('format').value;

        //=====Для варианта Клей если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==3)&&(f==7))
         {
             Lbloknot=210;
             Hbloknot=297;

        }
        //=====Для варианта Скоба если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==1)&&(f==7))
        {
            Lbloknot=210;
            Hbloknot=297;

        }

        //=====Для варианта Пружина если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==2)&&(f==7))
        {
            Lbloknot=210;
            Hbloknot=297;

        }


        var C26=Lsra3/(Lbloknot*2);
        C26=Math.trunc(C26);

        var D26=Hsra3/(Hbloknot*1);
        D26=Math.trunc(D26);

        var V1=C26*D26;

        var C27=Lsra3/(Hbloknot*1);
        C27=Math.trunc(C27);

        var D27=Hsra3/(Lbloknot*2);
        D27=Math.trunc(D27);

        var V2=C27*D27;

        var NSpa3=4*Math.max(V1, V2);

        //=====Для варианта Пружина если выбрали А3-Альбом - кол-во тиражных листов блока ставим = 2=========///

        if ((typeCalck==2)&&(f==8))
        {
            NSpa3=2;

        }


     //======Расчет кол-ва тиражных листов обложки======//
      var Ntirag=document.getElementById('tirag').value;
      var   NtiragList=(4/NSpa3)*Ntirag;


     //======цена листа=====//
      var TypeObl=$('#typeb option:selected').text();

        var Ztonnab=0;
        if (TypeObl.includes('меловка')){
            Ztonnab=Zmelov;
        }
        if (TypeObl.includes('офсетка')){
            Ztonnab=Zofsrt;
        }
        if (TypeObl.includes('картон')){
            Ztonnab=Zkart;
        }
        if (TypeObl.includes('dnc')){
            Ztonnab=Zdns;

        }

        var PlObl=document.getElementById('typeb').value;

        var ZlistObl=(0.47*0.65*PlObl/1000)*(Ztonnab*Kevro/1000)/2;

        ZlistObl=ZlistObl.toFixed(5);


       //======== стоимость бумаги обложка ========//
        var ZbumObl=ZlistObl*NtiragList;
        ZbumObl=ZbumObl.toFixed(5);



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
        var Zprogon=0;
        if (Kcolorb==1){
           Zprogon=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(NprogonObk, -0.436))/100;
        }
        if (Kcolorb==2){
            Zprogon=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(NprogonObk, -0.436))/100;
        }
        if (Kcolorb==3){
            NprogonObk=NprogonObk/2;
            Zprogon=(5.9091*(Math.pow(NprogonObk, -0.192)))+0.19;
        }
        if (Kcolorb==4){
            Zprogon=(5.9091*(Math.pow(NprogonObk, -0.192)))+0.19;
        }



        Zprogon=Zprogon.toFixed(5);
      //  console.log(Zprogon);

        //====== цена печати обложка  ===//
        var ZprintObl=Zprogon*NprogonObk;


        var KcolorObl = document.getElementById('colorb').value;

        if ((KcolorObl==1)||(KcolorObl==2))
        {
            ZprintObl=ZprintObl*KzenaOblColor;
        }
        if ((KcolorObl==3)||(KcolorObl==4))
        {
            ZprintObl=ZprintObl*KzenaOblChb;
        }
        ZprintObl=ZprintObl.toFixed(5);

    //=======стоимость ламинация обложка===========//

        var KlaminObl=document.getElementById('laminb').value;
        var ZlaminObl=KlaminObl*Kevro*NtiragList;


        //=======стоимость  обложка полная ===========//

        var ZoblItog=ZlaminObl*1+ZprintObl*1+ZbumObl*1;



        $('#ZoblItog1').text(ZlaminObl);
        $('#ZoblItog2').text(ZprintObl);
        $('#ZoblItog3').text(ZbumObl);



       // Lsra3
        //=======стоимость  обложка полная печать ===========//
        ZoblItog=ZoblItog*1;
        ZoblItog= Math.ceil(ZoblItog);
        if (Nobl==2){
            ZoblItog=0;
        }
        $('#ZoblItog').text(ZoblItog);


        //======= БЛОКНОТ  ===========//
        //======Расчет кол-ва тиражных листов БЛОКНОТ======//

      //  console.log('=============================');

        if (typeCalck==1){
            var Ntirag_bl=document.getElementById('list2').value;
        }
        else{
            var Ntirag_bl=document.getElementById('list').value;
        }
       var   NtiragList_bl=Ntirag_bl/NSpa3*Ntirag;



        //======цена листа БЛОК=====//


        var Type_bl=$('#typeb_bl option:selected').text();

       // var Type_bl=document.getElementById('typeb_bl').value;
        var Ztonna_bl=0;

        if (Type_bl.includes('меловка')){
            Ztonna_bl=Zmelov;
        }
        if (Type_bl.includes('офсетка')){
            Ztonna_bl=Zofsrt;
        }
        if (Type_bl.includes('картон')){
            Ztonna_bl=Zkart;
        }
        if (Type_bl.includes('dnc')){
            Ztonna_bl=Zdns;
        }
        //if (Type_bl==4){
        //    Ztonna_bl=Zcolorcopi;
        //}
        //if (Type_bl==5){
        //    Ztonna_bl=Zcolorcopi;
        //}

        var Pl_bl=document.getElementById('typeb_bl').value;
        var Zlist_bl=(0.47*0.65*Pl_bl/1000)*(Ztonna_bl*Kevro/1000)/2;

        Zlist_bl=Zlist_bl.toFixed(5);


   //============Стоимость тиража=============//
        //============Стоимость тиража бумага=============//
        var Ztirag_bl=Zlist_bl*NtiragList_bl;

        Ztirag_bl=Ztirag_bl.toFixed(5);

        //=======стоимость печати БЛОКНОТ===========//
        //======кол-во прогонов====//
        var Kcolor_bl=document.getElementById('colorb_bl').value;
        var Nprogon_bl=0;

        if (Kcolor_bl==1){
            Nprogon_bl=NtiragList_bl;
        }
        else {
            Nprogon_bl=NtiragList_bl*2;
        }
        //else{
        //    Nprogon_bl=NtiragList_bl;
        //}

        //====== цена прогон &&&&&&&&&&&&&&&&& ===//
        var Zprogon_bl=0;
        var  Zprogon_bl1=0;
        if (Kcolor_bl==1){
            Zprogon_bl=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(Nprogon_bl, -0.436))/100;
        }
        if (Kcolor_bl==2){
            Zprogon_bl=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(Nprogon_bl, -0.436))/100;
        }
        if (Kcolor_bl==3){
            Nprogon_bl=Nprogon_bl/2;
             Zprogon_bl1=(5.9091*(Math.pow(Nprogon_bl, -0.192)))+0.19;
            //var Zprogon_bl2= Zprogon_bl1+(Zprogon_bl1*0.2);
            Zprogon_bl= Zprogon_bl1*Nprogon_bl;
            //console.log(Nprogon_bl);
            //console.log(Zprogon_bl);
            //console.log('=======================');
        }
        if (Kcolor_bl==4){
            Nprogon_bl=Nprogon_bl;
            Zprogon_bl1=(5.9091*(Math.pow(Nprogon_bl, -0.192)))+0.19;
            //var Zprogon_bl2= Zprogon_bl1+(Zprogon_bl1*0.2);

           // Zprogon_bl= Zprogon_bl2*NSpa3;
            Zprogon_bl= Zprogon_bl1*Nprogon_bl;
            //console.log(Nprogon_bl);
            //console.log(Zprogon_bl);
            //console.log('=======================');

            //Zprogon_bl=0.0425*Kevro+0.0425*Kevro*1497.4*(Math.pow(Nprogon_bl, -0.436))/100;
        }

        Zprogon_bl=Zprogon_bl.toFixed(5);


        //====== цена печати БЛОКНОТ  ===//
        var Zprint_bl=Zprogon_bl*Nprogon_bl;
        if (Kcolor_bl==3){
            Zprint_bl=Zprogon_bl;
        }
        if (Kcolor_bl==4){
            Zprint_bl=Zprogon_bl;

        }

        Zprint_bl=Zprint_bl*1;
        var Kcolorbl = document.getElementById('colorb_bl').value;

        if ((Kcolorbl==1)||(Kcolorbl==2)){
            Zprint_bl=Zprint_bl*KzenaBlockColor;
        }
        if ((Kcolorbl==3)||(Kcolorbl==4)){
            Zprint_bl=Zprint_bl*KzenaBlockChb;
        }


        Zprint_bl=Zprint_bl.toFixed(5);


        //=======стоимость ламинация БЛОКНОТ===========//

        var Klamin_bl=document.getElementById('laminb_bl').value;
        var Zlamin_bl=Klamin_bl*Kevro*NtiragList_bl;
        // console.log(Zlamin_bl);

        //=======стоимость  Блокнот  полная ===========//

        var Z_blItog=Zlamin_bl*1+Zprint_bl*1+Ztirag_bl*1;
        //var Kcolorbl = document.getElementById('colorb_bl').value;
        //
        //if ((Kcolorbl==1)||(Kcolorbl==2)){
        //    Z_blItog=Z_blItog*KzenaBlockColor;
        //}
        //if ((Kcolorbl==3)||(Kcolorbl==4)){
        //    Z_blItog=Z_blItog*KzenaBlockChb;
        //}


        //=======стоимость  обложка полная печать ===========//
       // Z_blItog=Z_blItog*Kzena;

        $('#Z_blItog1').text(Zlamin_bl);
        $('#Z_blItog2').text(Zprint_bl);
        $('#Z_blItog3').text(Ztirag_bl);


        Z_blItog= Math.ceil(Z_blItog);
        $('#Z_blItog').text(Z_blItog);


        //=======cтоимость  ПЕРЕПЛЕТА ===========//
        var NtiragP=document.getElementById('tirag').value;
       // var TypeObl=document.getElementById('typeb').value;
       if (NtiragP>=1000){
            NtiragP=1000;
       }
        var Kper=0;
        if (typeCalck==1){
            Kper=Kskoba[NtiragP-1];
        }
        if (typeCalck==2){
            Kper=Kprug[NtiragP-1];
        }
        if (typeCalck==3){
            Kper=Kklii[NtiragP-1];
        }



        var ZPerepl=0;

        if (typeCalck==1){
           ZPerepl=NtiragP*Kper+KpriladraSkoba;
        }
        if (typeCalck==2){
            ZPerepl=NtiragP*Kper+KpriladraPrugina;
        }
        if (typeCalck==3){
            ZPerepl=NtiragP*Kper+KpriladraKlei;
        }




        //=======  Общая стоимость по всему ===========//
        if (Nobl==2){
            ZoblItog=0;
        }
        var ZitogV=ZPerepl*1+Z_blItog*1+ZoblItog*1;
        ZitogV=ZitogV*Kzena;
        //=====Для варианта Клей если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==3)&&(f==7))
        {
            ZitogV=ZitogV*KA4Klei;
        }
        //=====Для варианта Скоба если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==1)&&(f==7))
        {
            ZitogV=ZitogV*KA4Skoba;
        }

        //=====Для варианта Пружина если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==2)&&(f==7))
        {
            ZitogV=ZitogV*KA4Prugina;
        }

        //=====Для варианта Пружина если выбрали А4-Альбом - заменяем размеры на А4-Книга=========///
        if ((typeCalck==2)&&(f==8))
        {
            ZitogV=ZitogV*KA3Prugina;
        }


        ZPerepl=ZPerepl*1;
        ZPerepl= Math.ceil(ZPerepl);
        $('#Z_perepl').text(ZPerepl+'p');
        //Z_perepl

        ZitogV= Math.ceil(ZitogV);
        $('#Zitog').text(ZitogV+'p');
        document.getElementById('Zitof').value=ZitogV+'p';

    };
});



