
var ZPaket, NamePaket, prisepaketitogall1  ;
prisepaketitogall1=0;

ZPaket=0;
NamePaket='Пакет не выбран';

$(document).ready(function() {

  //======================= Заполнение базовых стомостей пакетов========================\\
  $('#ZPaket1').text(ZPaket1);
  $('#ZPaket2').text(ZPaket2);
  $('#ZPaket3').text(ZPaket3);


    //======================= Заполнение данных по 'Вид деятельности' при открытие сайта========================\\
    function ADDTypeOb() {
        var newCategor = $('#type_ob');
        for (var i = 0; i < tupeob.length; i++) {
            $('<option value="' + tupeob[i].value + '">' + tupeob[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypeOb();

    //======================= Заполнение данных по  'Количество позиций номенклатуры' при открытие сайта ========================\\
    function ADDPosition() {
        var newCategor = $('#col_position');
        for (var i = 0; i < position.length; i++) {
            $('<option value="' + position[i].value + '">' + position[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDPosition();

     //======================= Заполнение данных по  'Организационная форма' при открытие сайта ========================\\
     function ADDTypeOrg() {
        var newCategor = $('#type_org');
        for (var i = 0; i < typeorg.length; i++) {
            $('<option value="' + typeorg[i].value + '">' + typeorg[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypeOrg();


     //======================= Заполнение данных по  'Количество операций' при открытие сайта и изменение организационной формы ========================\\
     function ADDColOper() {
        var sss= $('.colopers');
        sss.remove();

      var org=document.getElementById('type_org').value;
      
      if ((org==1)||(org==2)){
        var newCategor = $('#col_oper');
        for (var i = 0; i < coloper1.length; i++) {
            $('<option class="colopers" value="' + coloper1[i].value + '">' + coloper1[i].name + '</option>').appendTo(newCategor);
        }

      }

      if ((org==3)||(org==4)){
        var newCategor = $('#col_oper');
        for (var i = 0; i < coloper2.length; i++) {
            $('<option class="colopers" value="' + coloper2[i].value + '">' + coloper2[i].name + '</option>').appendTo(newCategor);
        }

      }
      if (org==5){
        var newCategor = $('#col_oper');
        for (var i = 0; i < coloper3.length; i++) {
            $('<option class="colopers" value="' + coloper3[i].value + '">' + coloper3[i].name + '</option>').appendTo(newCategor);
        }

      }
     // Pacet();



     
    }

    ADDColOper();


 //======================= Заполнение данных по  'Количество сотрудников' при открытие сайта ========================\\
 function ADDColPers() {
    var newCategor = $('#col_pers');
    for (var i = 0; i < colpers.length; i++) {
        $('<option value="' + colpers[i].value + '">' + colpers[i].name + '</option>').appendTo(newCategor);
    }
}

ADDColPers();

//======================= Изменение селекта   'Вид деятельности'  ========================\\

$("#type_ob").on('change', function() {
    Pacet();
});


 //======================= Изменение селекта   'Организационная форма'  ========================\\

    $("#type_org").on('change', function() {
        ADDColOper();
        Pacet();
        
    });

    //======================= Изменение селекта   'Количество позиций номенклатуры'  ========================\\

    $("#col_position").on('change', function() {
          Pacet();
    });

    //======================= Изменение селекта   'Количество операций'  ========================\\

    $("#col_oper").on('change', function() {
        Pacet();
  });

  //======================= Изменение селекта   'Количество сотрудников'  ========================\\

  $("#col_pers").on('change', function() {
    Pacet();
});


Pacet();

 //======================= Изменение селекта   'Количество сотрудников'  ========================\\

 $("#btn_dop").on('click', function() {
  $('#dopparam').removeClass('itogClose');
});





 //======================= Функция отображения\скрытия рекомендованных пакетов при изменение данных в основной форме'  ========================\\

    function Pacet() {
        $('#itog1').removeClass('itogClose');
       // $('#dopparam').addClass('itogClose');
      var typearb=document.getElementById('type_ob').value;
      var nomenk=document.getElementById('col_position').value;
      var operacion=document.getElementById('col_oper').value;
      var Npers=document.getElementById('col_pers').value;
      

       if ((typearb==1)||(typearb==2)){
         if ((nomenk==1)&&(operacion==1)&&(Npers==1)){
            $('#paket1').removeClass('itogClose'); 
            $('#paket2').addClass('itogClose'); 
            $('#paket3').addClass('itogClose'); 
         }
         if ((nomenk>=2)||(operacion>=2)||(Npers>=2)){
            $('#paket1').removeClass('itogClose'); 
            $('#paket2').removeClass('itogClose'); 
            $('#paket3').addClass('itogClose'); 
           }
           if ((nomenk>=3)||(operacion>=3)||(Npers>=3)){
            $('#paket1').removeClass('itogClose'); 
            $('#paket2').removeClass('itogClose'); 
            $('#paket3').removeClass('itogClose'); 
           }
        }


       if ((typearb==3)||(typearb==4)||(typearb==5)){
         if ((nomenk<=2)||(operacion<=2)||(Npers<=2)){
           $('#paket1').addClass('itogClose'); 
           $('#paket2').removeClass('itogClose'); 
           $('#paket3').addClass('itogClose'); 
          }
          if ((nomenk>=3)||(operacion>=3)||(Npers>=3)){
           $('#paket1').addClass('itogClose'); 
           $('#paket2').removeClass('itogClose'); 
           $('#paket3').removeClass('itogClose'); 
          }     
      }

      if (typearb==6){
       
           $('#paket1').addClass('itogClose'); 
           $('#paket2').addClass('itogClose'); 
           $('#paket3').removeClass('itogClose'); 
        }
      
    }   
    
    
//======================= Выбрали пакет  'Смелый'  ========================\\

$("#btnpaket1").on('click', function() {
    ZPaket=ZPaket1;
    NamePaket="Смелый";
    $('#itog1').addClass('itogClose');
    //$('#dopparam').removeClass('itogClose');

   $('#doppaket').addClass('itogClose');
    $('#doppodr').addClass('itogClose');
    $('#market').addClass('itogClose');
    $('#vnprogram').addClass('itogClose');  

    //$('#namepaketitog1').text(NamePaket);
    //$('#prisepaketitog1').text(ZPaket);
    //prisepaketitogall1=0;
    //$('#prisepaketitogall1').text(prisepaketitogall1);

});

//======================= Выбрали пакет  'Успешный'  ========================\\
$("#btnpaket2").on('click', function() {
    ZPaket=ZPaket2;
    NamePaket="Успешный";
    $('#itog1').addClass('itogClose');
   // $('#dopparam').removeClass('itogClose');

    //$('#doppaket').removeClass('itogClose');
    $('#doppodr').removeClass('itogClose');
    $('#market').removeClass('itogClose');
    $('#vnprogram').removeClass('itogClose');

    //$('#namepaketitog1').text(NamePaket);
    //$('#prisepaketitog1').text(ZPaket);
    //prisepaketitogall1=0;
    //$('#prisepaketitogall1').text(prisepaketitogall1);
  });

//======================= Выбрали пакет  'Эффективный'  ========================\\
$("#btnpaket3").on('click', function() {
    ZPaket=ZPaket3;
    NamePaket="Эффективный";
    $('#itog1').addClass('itogClose');
   // $('#dopparam').removeClass('itogClose');

    //$('#doppaket').removeClass('itogClose');
    $('#doppodr').removeClass('itogClose');
    $('#market').removeClass('itogClose');
    $('#vnprogram').removeClass('itogClose');

   // $('#namepaketitog1').text(NamePaket);
   // $('#prisepaketitog1').text(ZPaket);
   // prisepaketitogall1=0;
   // $('#prisepaketitogall1').text(prisepaketitogall1);
});

 

//===== закрываем ввод в поле "Кол-во обособленных подраздедений"букв и отрицательных значений, запятую меняем на точку   =====//
$('#power').on('input', function() {
    $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
            
    
});


$('#power').keypress(function(e) {
    if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
        return !(/[.,]/.test(e.key));
     }
   
});

// ======Только одна точка или одна запятая "Кол-во обособленных подраздедений"=====//
$('#power').keyup(function (event){
    var podr = document.getElementById('power').value;
    podr=+podr;
    if (podr>=500){
        podr=500;
        document.getElementById('power').value=podr;
    }
   

});   


// Открытие формы заказа авто при клике на кнопку

$('#btn-calc').click(function () {

    $('.popup-fade2').fadeIn();
     return false;

});

$('.popup-close').click(function() {
    $(this).parents('.popup-fade2').fadeOut();
    return false;
});
$('#button1').click(function() {
     $(this).parents('.popup-fade2').fadeOut();
    $('.popup-fade2').fadeOut();
    return false;
});


$('.popup-fade2').click(function(e) {
    if ($(e.target).closest('.popup').length == 0) {
        $(this).fadeOut();
    }
});




  //===== Функция расчета вычисляемых данных   =====//

$("#btn-calc").on('click', function() {
    prisepaketitogall1=ZPaket;

   
    var  typearbm = $('#type_ob option:selected' ).text();
    document.getElementById('tupeobmail').value=typearbm;

    var nomenk=$('#col_position option:selected' ).text();
    document.getElementById('posnomelmail').value=nomenk;

    var orgform=$('#type_org option:selected' ).text();
    document.getElementById('orgformmail').value=orgform;


    var operacion=$('#col_oper option:selected' ).text();
    document.getElementById('colopermail').value=operacion;

    var Npers=$('#col_pers option:selected' ).text();
    document.getElementById('npersmail').value=Npers;


    document.getElementById('basepaketmail').value=NamePaket;


  //====================================//
 // console.log(prisepaketitogall1)
     var doppak = document.getElementById('doppaketinp');    
     if (doppak.checked) {
        prisepaketitogall1=prisepaketitogall1+ZPaketDop;
        var namedoppaket="Заказан";
        }
      else{
       
        var namedoppaket="Не заказан";
        
      }
      console.log(prisepaketitogall1)
      document.getElementById('doppaketmail').value=namedoppaket;

      //====================================//
      if (NamePaket=="Смелый"){
        var obosobpaket="Не поддерживается"
      }
      else
      {
        var obosobpaket=document.getElementById('power').value
        prisepaketitogall1=prisepaketitogall1+ZObPodr;
      }
      console.log(prisepaketitogall1)
      document.getElementById('nobpodrmail').value=obosobpaket;

      //=====================================//
      if (NamePaket=="Смелый"){
        var marketname="Не поддерживается"
      }
      else
      {
        var marketname=$('#col_markpl option:selected' ).text();
         
        var Nmar=document.getElementById('col_markpl').value;
        if (Nmar==1){
            var Zmark=ZMarket1;
        }
        if (Nmar==2){
            var Zmark=ZMarket2;
        }
        if (Nmar==3){
            var Zmark=ZMarket3;
        }


         prisepaketitogall1=prisepaketitogall1+Zmark;
         console.log(prisepaketitogall1)
      }

      document.getElementById('marketmail').value=marketname;

       //=====================================//

       var nameasis=$('#col_help1 option:selected' ).text();
       var Nasis=document.getElementById('col_help1').value;
        if (Nasis==1){
            var Zasis=ZAssistant1;
        }
        if (Nasis==2){
            var Zasis=ZAssistant2;
        }
        prisepaketitogall1=prisepaketitogall1+Zasis;
       document.getElementById('assistantmail').value=nameasis;
       console.log(prisepaketitogall1)
     
       //============================//
       var asisdop = document.getElementById('help2');    
       if (asisdop.checked) {
          prisepaketitogall1=prisepaketitogall1+ZAssistantDop;
          var nameasisdop="Заказан";
          }
        else{
          var nameasisdop="Не заказан";
        }
  
        document.getElementById('assistantdopmail').value=nameasisdop;
      // assistandoptmail
      console.log(prisepaketitogall1)

       //============================//

       var namelawyer=$('#lawyer option:selected' ).text();
       var Nlawyer=document.getElementById('lawyer').value;
        if (Nlawyer==1){
            var ZLawyer=ZLawyer1;
        }
        if (Nlawyer==2){
            var ZLawyer=ZLawyer2;
        }
        if (Nlawyer==3){
            var ZLawyer=ZLawyer3;
        }        
        prisepaketitogall1=prisepaketitogall1+ZLawyer;
       document.getElementById('lawyermail').value=namelawyer;
       console.log(prisepaketitogall1)

//===========================================//

if (NamePaket=="Смелый"){
    var namestprogram="Не поддерживается"
  }
  else
  {
    var stprogr = document.getElementById('stprogram');    
       if (stprogr.checked) {
          prisepaketitogall1=prisepaketitogall1+Zstprogram;
          var namestprogram="Заказан";
          }
        else{
            var namestprogram="Не заказан";
        }    
  }

  document.getElementById('stprogrammail').value=namestprogram;
  console.log(prisepaketitogall1)

 //============================//
 var nuchet = document.getElementById('ychet');    
       if (nuchet.checked) {
          prisepaketitogall1=prisepaketitogall1+ZUchet1;
          var nameuchet="Заказан";
          }
        else{
            var nameuchet="Не заказан";
        }    
        console.log(prisepaketitogall1)

  document.getElementById('ychetmail').value=nameuchet;
  
  document.getElementById('zpaketallmail').value=prisepaketitogall1;
  //zpaketallmail
  document.getElementById('zpaketbasmail').value=ZPaket;
  //zpaketbasmail



});    













});





