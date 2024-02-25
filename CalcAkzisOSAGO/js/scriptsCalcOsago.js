var typecountry,Кbasetypeavto,Ktypecl,KMB;



typecountry=1; //Страна регистрации по умолчанию Молдова
Кbasetypeavto=0; //коэф тип авто по умолчанию не выбран
Ktypecl=0;     //коэф тип клиента по умолчанию не выбран
KMB=0;      // bonus-malus



$(document).ready(function() {


 



  var Data = new Date();
 

  var yare=Data.getFullYear();
  var moth=Data.getMonth();
  moth=moth+1;
  var day=Data.getDate();
  

  var sysdata=day+'-'+moth+'-'+yare
  document.getElementById('date1').value=sysdata;
 




    //===  Закрываем возможность введения кроме цифр в инпут       ==//

    $("#inptupeavtol1,#inptupeavtol2,#numberseats1,#inptupeavtomikro,#traktorls,#gruskg,#vmotoz").keyup(function(e){
        this.value = this.value.replace(/[^0-9]/g, '');
       
      });


   //===  В поле "Данные автомобиля" проверяем заполнение поля по клиенту или установку чекбокса в поле ро клиенту       ==//
      $("#dataavto").keyup(function(){
        var n1=0;
        var n2=0;
        var n3=0;
       var dataavtov=document.getElementById('dataavto').value;
       if (!dataavtov) { n1=0; }
      else { n1=1;}

      var datapersonv=document.getElementById('dataperson').value;
       if (!datapersonv) { n2=0; }
      else{ n2=1; }

      var personchekv = document.getElementById('personchek');
       if (personchekv.checked) {
        var n3=1;
    }

    if (((n1==1)&&(n2==1))||((n1==1)&&(n3==1))){     
      document.getElementById("calc_osago_btn1").disabled=false;
      document.getElementById("calc_osago_btn1").style.opacity = "1";
    }
    else{
      document.getElementById("calc_osago_btn1").disabled=true;
      document.getElementById("calc_osago_btn1").style.opacity = "0.5"
    }     
    }); 
    

    //===  В поле "Данные о человеке" проверяем заполнение поля по автомобилю или установку чекбокса в поле по автомобилю       ==//
    $("#dataperson").keyup(function(){
      var n1=0;
      var n2=0;
      var n3=0;
     var dataavtov=document.getElementById('dataperson').value;
     if (!dataavtov) { n1=0; }
    else { n1=1;}

    var datapersonv=document.getElementById('dataavto').value;
     if (!datapersonv) { n2=0; }
    else{ n2=1; }

    var personchekv = document.getElementById('avtochek');
     if (personchekv.checked) {
      var n3=1;
  }

  if (((n1==1)&&(n2==1))||((n1==1)&&(n3==1))){     
    document.getElementById("calc_osago_btn1").disabled=false;
    document.getElementById("calc_osago_btn1").style.opacity = "1";
  }
  else{
    document.getElementById("calc_osago_btn1").disabled=true;
    document.getElementById("calc_osago_btn1").style.opacity = "0.5"
  }     
  }); 



  //===  В чекбоксе  "Данные автомобиля" проверяем заполнение поля по клиенту или установку чекбокса в поле по клиенту       ==//
  $("#avtochek").click(function(){
    var n1=0;
    var n2=0;
    var n3=0;
    var personchekv = document.getElementById('avtochek');
    if (personchekv.checked) {
     var n1=1;
 }
  var datapersonv=document.getElementById('dataperson').value;
   if (!datapersonv) { n2=0; }
  else{ n2=1; }

  var personchekv = document.getElementById('personchek');
   if (personchekv.checked) {
    var n3=1;
}

if (((n1==1)&&(n2==1))||((n1==1)&&(n3==1))){     
  document.getElementById("calc_osago_btn1").disabled=false;
  document.getElementById("calc_osago_btn1").style.opacity = "1";
}
else{
  document.getElementById("calc_osago_btn1").disabled=true;
  document.getElementById("calc_osago_btn1").style.opacity = "0.5"
}     
}); 


  //===  В чекбоксе  "Данные по клиенту" проверяем заполнение поля по авто или установку чекбокса в поле по авто       ==//
  $("#personchek").click(function(){
    var n1=0;
    var n2=0;
    var n3=0;
    var personchekv = document.getElementById('personchek');
    if (personchekv.checked) {
     var n1=1;
 }
  var datapersonv=document.getElementById('dataavto').value;
   if (!datapersonv) { n2=0; }
  else{ n2=1; }

  var personchekv = document.getElementById('avtochek');
   if (personchekv.checked) {
    var n3=1;
}

if (((n1==1)&&(n2==1))||((n1==1)&&(n3==1))){     
  document.getElementById("calc_osago_btn1").disabled=false;
  document.getElementById("calc_osago_btn1").style.opacity = "1";
}
else{
  document.getElementById("calc_osago_btn1").disabled=true;
  document.getElementById("calc_osago_btn1").style.opacity = "0.5"
}     
}); 
    


   //=====  Нажали Расчет на первой странице             ================\\\

      $('#calc_osago_btn1').click(function () {
       $('.calculator_osago_block1').addClass('block_close');
       $('.calculator_osago_block2').addClass('block_active');

      });  


      //===  В чекбоксе  "За границей" нажали       ==//
  $("#avtochek2").click(function(){
    var avtochek2chekv = document.getElementById('avtochek2');
   if (avtochek2chekv.checked) {
       $('#dataavto2').addClass('block_close');
       $('#dataavtoselec2').addClass('block_active');
       typecountry=document.getElementById('dataavtoselec2').value;

      }
      else{
        $('#dataavto2').removeClass('block_close');
       $('#dataavtoselec2').removeClass('block_active');
       typecountry=1;
      }
  });

    //===  Изменения в селекте  "Место регистрации"       ==//
  $("#dataavtoselec2").change(function(){
    typecountry=document.getElementById('dataavtoselec2').value;
    //alert(typecountry)
  }); 


    //===  Изменения в селекте  "Тип транспорта"       ==//
    $("#typevtoselec2").change(function(){
      var typeavtov=document.getElementById('typevtoselec2').value;
      if (typeavtov==1){
            Кbasetypeavto=Ktypeavto1;
            $('.tupeavtol').addClass('block_active');
            $('.tupeavtomkro').removeClass('block_active');
            $('.tupeavtotraktor').removeClass('block_active');
            $('.tupeavtogrus').removeClass('block_active');
            $('.tupeavtomotoz').removeClass('block_active');
      }

      if (typeavtov==2){
        Кbasetypeavto=Ktypeavto2;
        $('.tupeavtol').removeClass('block_active');
        $('.tupeavtomkro').addClass('block_active');
        $('.tupeavtotraktor').removeClass('block_active');
        $('.tupeavtogrus').removeClass('block_active');
        $('.tupeavtomotoz').removeClass('block_active');
       }
       
       if (typeavtov==3){
        Кbasetypeavto=Ktypeavto3;
        $('.tupeavtol').removeClass('block_active');
        $('.tupeavtomkro').removeClass('block_active');
        $('.tupeavtotraktor').addClass('block_active');
        $('.tupeavtogrus').removeClass('block_active');
        $('.tupeavtomotoz').removeClass('block_active');
       }

       if (typeavtov==4){
        Кbasetypeavto=Ktypeavto4;
        $('.tupeavtol').removeClass('block_active');
        $('.tupeavtomkro').removeClass('block_active');
        $('.tupeavtotraktor').removeClass('block_active');
        $('.tupeavtogrus').addClass('block_active');
        $('.tupeavtomotoz').removeClass('block_active');
       }

       if (typeavtov==5){
        Кbasetypeavto=Ktypeavto5;
        $('.tupeavtol').removeClass('block_active');
        $('.tupeavtomkro').removeClass('block_active');
        $('.tupeavtotraktor').removeClass('block_active');
        $('.tupeavtogrus').removeClass('block_active');
        $('.tupeavtomotoz').addClass('block_active');
       }  
       activatebtn2();   
    }); 

          //===  Изменения в   "Объём двигателя (см3):" - Леговой авто      ==//
    $("#inptupeavtol1").keypress(function(){
      activatebtn2();   
    });

      //===  Изменения в   "Разрешенная максимальная масca (кг):" - Леговой авто      ==//
      $("#inptupeavtol2").keypress(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Количество мест:" - Автобус      ==//
      $("#numberseats1").keypress(function(){
        activatebtn2();   
      });
       
      //===  Изменения в   "Разрешенная максимальная масca (кг):" - Автобус      ==//
      $("#inptupeavtomikro").keypress(function(){
        activatebtn2();   
      });

       //===  Изменения в   "Мощность двигателя:" - Трактор      ==//
       $("#traktorls").keypress(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Общая масса:" - Грузовик      ==//
      $("#gruskg").keypress(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Объём двигателя (см3):" -Мотоцикл      ==//
      $("#vmotoz").keypress(function(){
        activatebtn2();   
      });

     //===  Изменения в селекте  " Владелец транспортного средства является"       ==//
      $("#typeclsel").change(function(){

           var typecl=document.getElementById('typeclsel').value;
           if (typecl==1){
            Ktypecl=Ktypeclfis;
           }

           var typecl=document.getElementById('typeclsel').value;
           if (typecl==2){
            Ktypecl=Ktypeclur;
           }
           activatebtn2(); 

      });

       //===  Изменения в селекте  " Место жительства"       ==//
       $("#residencesel").change(function(){
        activatebtn2(); 
       });
      
        //===  Изменения в селекте  " Район/ Город"       ==//
        $("#citi").change(function(){
          activatebtn2(); 
         });
  

      //===  первоначальное заполнение селекта  " Место жительства"       ==//
        
        var newSelSek = $('#residencesel');
        for (var i = 0; i < residenceselv.length; i++)  {
           $('<option class="standart_opt" data-num ="' + residenceselv[i].datan + '"  value="' + residenceselv[i].val + '">' + residenceselv[i].name + '</option>').appendTo(newSelSek);
        }


     //===  Изменения в селекте  " Место жительства" - заменяем селект "Район/ Город"       ==//
     $("#residencesel").change(function(){
      
      var residenceselv=$("#residencesel option:selected").attr('data-num');
      
      var sitin='siti'+residenceselv;

      sitin=eval(sitin);
     
       if (residenceselv==1){
        $('#citi').empty();
        var newSelSek = $('#citi');
        for (var i = 0; i < sitin.length; i++)  {
           $('<option class="standart_opt" value="' + sitin[i].val + '">' + sitin[i].name + '</option>').appendTo(newSelSek);
        }
      }

      if (residenceselv==2){
        $('#citi').empty();
        var newSelSek = $('#citi');
        for (var i = 0; i < sitin.length; i++)  {
           $('<option class="standart_opt" value="' + sitin[i].val + '">' + sitin[i].name + '</option>').appendTo(newSelSek);
        }
      }
     });

      //===  Изменения в селекте  " Была ли у вас раньше страховка ОСАГО?"       ==//
      $("#strahovka").change(function(){
        var strahovkav=document.getElementById('strahovka').value;
        
        if (strahovkav==1){
          $('.avarblock').addClass('block_active');
          avarblockact();
         // $('.strahovkablock').addClass('block_active');
        }
        else{
          $('.avarblock').removeClass('block_active');
          avarblockact();
          //$('.strahovkablock').removeClass('block_active');
        } 
        activatebtn2(); 
  
       });
     
        //===  Изменения в селекте  " Опыт вождения владельца       ==//
      $("#experience").change(function(){
        avarblockact();
        activatebtn2(); 
      });   

       //===  Изменения в селекте  " В скольких ДТП вы виноваты?       ==//
       $("#avar").change(function(){
          activatebtn2(); 
      });   


      function avarblockact(){
        var strahovkav=document.getElementById('strahovka').value;
        var experiencev=document.getElementById('experience').value;
        if ((strahovkav==1)&&(experiencev>0)){
          $('.strahovkablock').addClass('block_active');
          $('.databloc').remove();
          var innerHtml = "";
          var NN=yare;
          for (var i = 0; i < experiencev; i++)  {
           
            innerHtml += '<div class="databloc" onclick="dataf(this)">'+NN+'</div>';
            NN=NN-1;   
          
         }
         $(".strahovkablock2").html(innerHtml);


        }
        else{
          $('.strahovkablock').removeClass('block_active');
          $('.databloc').remove();
        }

      }


   window.dataf=dataf;

   function dataf(elem) {    
    var datav=elem.innerHTML;
    var innerHtml = '';  
    innerHtml += '<div class="databloc2" onclick="dataf2(this)">'+datav+'<span class="databloc2cp">X</span> </div>';    
    $(".strahovkablock1").append(innerHtml);    
    elem.remove();    
   }


  window.dataf2=dataf2;
  function dataf2(elem){
    var datav=elem.innerText;
    datav = datav.slice(0, -1);
    var blold='';
    blold += '<div class="databloc" onclick="dataf(this)">'+datav+'</div>';
    $(".strahovkablock2").append(blold);
    elem.remove();
  }


  function activatebtn2(){
    var typeavtov=document.getElementById('typevtoselec2').value;
    var K1bl=0;
    var K2bl=0;
    var K3bl=0;
    var K4bl=0;

    if (typeavtov==1){
      var vv1=document.getElementById('inptupeavtol1').value;
      var dd1=document.getElementById('inptupeavtol2').value
      if ((vv1>0)&&(dd1>0)){
        K1bl=1;
      }
    }

    if (typeavtov==2){
      var vv1=document.getElementById('numberseats1').value;
      var dd1=document.getElementById('inptupeavtomikro').value
      if ((vv1>0)&&(dd1>0)){
        K1bl=1;
      }
    }

    if (typeavtov==3){
      var vv1=document.getElementById('traktorls').value;      
      if (vv1>0){
        K1bl=1;
      }
    }

    if (typeavtov==4){
      var vv1=document.getElementById('gruskg').value;      
      if (vv1>0){
        K1bl=1;
      }
    }

    if (typeavtov==5){
      var vv1=document.getElementById('vmotoz').value;      
      if (vv1>0){
        K1bl=1;
      }
    }
    //==== выбран тип клиента======//
    if (Ktypecl>0){
      K2bl=1;
    }

    var mm1=document.getElementById('residencesel').value;
    var mm2=document.getElementById('citi').value;

    if ((mm1>0)&&(mm2>0)){
      K3bl=1;
    }

    var strah1=document.getElementById('experience').value;
    var strah2=document.getElementById('strahovka').value;
    var strah3=document.getElementById('avar').value;

    if ((strah1>0)&&(strah2==1)&&(strah3>=0)){
      K4bl=1;
    }

    if ((strah1>0)&&(strah2==2)){
      K4bl=1;
    }

    if ((K1bl==1)&&(K2bl==1)&&(K3bl==1)&&(K4bl==1)){
      document.getElementById("calc_osago_btn2").disabled=false;
      document.getElementById("calc_osago_btn2").style.opacity = "1";
    }
    else{
      document.getElementById("calc_osago_btn2").disabled=true;
      document.getElementById("calc_osago_btn2").style.opacity = "0.5"
    }    
  }


//===  Нажали РАСЧИТАТЬ на втором блоке       ==//
$("#calc_osago_btn2").click(function(){

  $('#calculator_osago_block2').removeClass('block_active');
  $('#calculator_osago_block_itog').addClass('block_active');
 
  //Кbasetypeavto; //базовая ставка по типу авто
  //Ktypecl=0; //базовая ставка по типу клиента

  //показатель, который формируется в зависимости от территории регистрации собственника//
  //  var KT=0;
  // var kt1=document.getElementById('residencesel').value;
  // var kt2=document.getElementById('citi').value;
  // KT=kt1*kt2;

 
///==числовой показатель, учитывающий возраст и стаж водителя или водителей===//
var nj=document.getElementById('experience').value;
if (nj<3){
  KJAR=KJAR1;
}
if (nj>=3){
  KJAR=KJAR2;
}


///====показатель, который зависит от мощности ТС===//

var KM=0;
var tavto = document.getElementById('typevtoselec2').value;

if (tavto==1){
  var pover = document.getElementById('inptupeavtol1').value;
  if (pover<1200){
    KM=KPOVER1L;
  }
  if ((pover>=1201)&&(pover<=1600)){
    KM=KPOVER2L;
  }
  if ((pover>=1601)&&(pover<=2000)){
    KM=KPOVER3L;
  }
  if ((pover>=2001)&&(pover<=2400)){
    KM=KPOVER4L;
  }
  if ((pover>=2401)&&(pover<=3000)){
    KM=KPOVER5L;
  }
  if (pover>=3001){
    KM=KPOVER6L;
  }
}

if (tavto==2){
  var pover = document.getElementById('numberseats1').value;
  if (pover<17){
    KM=KPOVER1BUS;
  }
  if ((pover>=18)&&(pover<=30)){
    KM=KPOVER2BUS;
  }
  
  if (pover>31){
    KM=KPOVER3BUS;
  }
}

if (tavto==3){
  var pover = document.getElementById('traktorls').value;
  if (pover<=45){
    KM=KPOVER1TR;
  }
  if ((pover>=46)&&(pover<=100)){
    KM=KPOVER2TR;
  }
  
  if (pover>=101){
    KM=KPOVER3TR;
  }
}

if (tavto==4){
  var pover = document.getElementById('gruskg').value;
  if (pover<3500){
    KM=KPOVER1GR;
  }
  if ((pover>=3501)&&(pover<1200)){
    KM=KPOVER2GR;
  }
 
  if (pover>=1201){
    KM=KPOVER3GR;
  }
}

if (tavto==5){
  var pover = document.getElementById('vmotoz').value;
  if (pover<=300){
    KM=KPOVER1MOTOZ;
  }
  
  if (pover>=301){
    KM=KPOVER2MOTOZ;
  }
}






var count_accidents=document.getElementById('avar').value;
//count_accidents=count_accidents-1;

var policybl=document.getElementsByClassName('databloc2');
var policy_years=policybl.length;
//policy_years=policy_years+1;

var bonus_malus = get_class_bonus_malus(count_accidents, policy_years, staj);
//console.log('staj='+staj);
//console.log('count_accidents='+count_accidents);
//console.log('policy_years='+policy_years);
KMB=bonus_malust[bonus_malus];
//console.log(KMB);




  var osagoz=Кbasetypeavto*Ktypecl*KJAR*KMB*KM;
   osagoz=osagoz.toFixed(2);
  $('#osagozv').text(osagoz)


});  
function get_class_bonus_malus(count_accidents, policy_years, staj) {
  var bonus_malus = 7;
  var init_bonus_malus = "0";

  if (staj >= 10 && policy_years == 10) {
      bonus_malus = "17"
      init_bonus_malus = "17"
  }

  

  if (count_accidents > 4) {
      return "m"
  }

  if (policy_years==0){
    bonus_malus = 7;
  }

   if (policy_years>=10)
   {
    policy_years=10;
   }
  if (policy_years>0){
    bonus_malus = 7+policy_years*1;
    position=count_accidents*1;
  //  bonus_malus = bonus_malus_rules[17][1];
    bonus_malus = bonus_malus_rules[bonus_malus][position];
  }



  if (bonus_malus === "17") {
      return bonus_malus;
  }


  KMB=bonus_malus[bonus_malus];
  //return bonus_malus;
  return bonus_malus;
  //KMB=bonus_malus[bonus_malus];
}

//window.get_class_bonus_malus=get_class_bonus_malus;

$('#test').click(function(){

  var staj=document.getElementById('staj').value;

  var count_accidents=document.getElementById('count_accidents').value

  
  var policy_years=document.getElementById('policy_years').value;
  //policy_years=policy_years+1;
  
  var bonus_malus = get_class_bonus_malus(count_accidents, policy_years, staj);
  KMB=bonus_malust[bonus_malus];
 // console.log('bonus_malus='+bonus_malus)
 // console.log('KMB='+KMB)
  //console.log('=========================')

});




});




