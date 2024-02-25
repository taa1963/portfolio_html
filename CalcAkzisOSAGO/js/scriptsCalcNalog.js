var typecountry,Кbasetypeavto,Ktypecl;



typecountry=1; //Страна регистрации по умолчанию Молдова
Кbasetypeavto=0; //коэф тип авто по умолчанию не выбран
Ktypecl=0;     //коэф тип клиента по умолчанию не выбран



$(document).ready(function() {


  var Data = new Date();
 

  var yare=Data.getFullYear();
  var moth=Data.getMonth();
  moth=moth+1;
  var day=Data.getDate();
  

  var sysdata=day+'-'+moth+'-'+yare
  document.getElementById('date1').value=sysdata;
 




    //===  Закрываем возможность введения кроме цифр в инпут       ==//

    $("#inptupeavtol1n,#inptupeavtol2n,#numberseats1n,#inptupeavtomikron,#traktorlsn,#gruskgn,#vmotozn").keyup(function(e){
        this.value = this.value.replace(/[^0-9]/g, '');
       
      });



    //===  Изменения в селекте  "Тип транспорта"       ==//
    $("#typevtoselec2n").change(function(){
      var typeavtov=document.getElementById('typevtoselec2n').value;
      if (typeavtov==1){
            Кbasetypeavto=Ktypeavto1;
            $('.tupeavtoln').removeClass('block_close');
            $('.tupeavtomkron').removeClass('block_active');
            $('.tupeavtotraktorn').removeClass('block_active');
            $('.tupeavtogrusn').removeClass('block_active');
            $('.tupeavtomotozn').removeClass('block_active');
      }

      if (typeavtov==2){
        Кbasetypeavto=Ktypeavto2;
        $('.tupeavtoln').addClass('block_close');
        $('.tupeavtomkron').addClass('block_active');
        $('.tupeavtotraktorn').removeClass('block_active');
        $('.tupeavtogrusn').removeClass('block_active');
        $('.tupeavtomotozn').removeClass('block_active');
       }
       
       if (typeavtov==3){
        Кbasetypeavto=Ktypeavto3;
        $('.tupeavtoln').addClass('block_close');
        $('.tupeavtomkron').removeClass('block_active');
        $('.tupeavtotraktorn').addClass('block_active');
        $('.tupeavtogrusn').removeClass('block_active');
        $('.tupeavtomotozn').removeClass('block_active');
       }

       if (typeavtov==4){
        Кbasetypeavto=Ktypeavto4;
        $('.tupeavtoln').addClass('block_close');
        $('.tupeavtomkron').removeClass('block_active');
        $('.tupeavtotraktorn').removeClass('block_active');
        $('.tupeavtogrusn').addClass('block_active');
        $('.tupeavtomotozn').removeClass('block_active');
       }

       if (typeavtov==5){
        Кbasetypeavto=Ktypeavto5;
        $('.tupeavtoln').addClass('block_close');
        $('.tupeavtomkron').removeClass('block_active');
        $('.tupeavtotraktorn').removeClass('block_active');
        $('.tupeavtogrusn').removeClass('block_active');
        $('.tupeavtomotozn').addClass('block_active');
       }  
       activatebtn2();   
    }); 

          //===  Изменения в   "Объём двигателя (см3):" - Леговой авто      ==//
    $("#inptupeavtol1n").keyup(function(){
      activatebtn2();   
    });

      //===  Изменения в   "Разрешенная максимальная масca (кг):" - Леговой авто      ==//
      $("#inptupeavtol2n").keyup(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Количество мест:" - Автобус      ==//
      $("#numberseats1n").keyup(function(){
        activatebtn2();   
      });
       
      //===  Изменения в   "Разрешенная максимальная масca (кг):" - Автобус      ==//
      $("#inptupeavtomikron").keyup(function(){
        activatebtn2();   
      });

       //===  Изменения в   "Мощность двигателя:" - Трактор      ==//
       $("#traktorlsn").keyup(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Общая масса:" - Грузовик      ==//
      $("#gruskgn").keyup(function(){
        activatebtn2();   
      });

      //===  Изменения в   "Объём двигателя (см3):" -Мотоцикл      ==//
      $("#vmotozn").keyup(function(){
        activatebtn2();   
      });

    //===  Изменения типа клиента " Физическое лицо"       ==//
       $("#fisl").click(function(){        
        Ktypecl=Ktypeclfisn;
        activatebtn2(); 
       });   

        //===  Изменения типа клиента "Юридическое лицо"       ==//
        $("#url").click(function(){        
          Ktypecl=Ktypeclurn;
          activatebtn2(); 
         }); 

     

      //  //===  Изменения в селекте  " Место жительства"       ==//
      //  $("#residenceseln").change(function(){
      //   activatebtn2(); 
      //  });
      
        //===  Изменения в селекте  " Район/ Город"       ==//
        $("#citin").change(function(){
          activatebtn2(); 
         });
  

      //===  первоначальное заполнение селекта  " Место жительства"       ==//
        
        var newSelSek = $('#residenceseln');
        for (var i = 0; i < residenceselv.length; i++)  {
           $('<option class="standart_opt" data-num ="' + residenceselv[i].datan + '"  value="' + residenceselv[i].val + '">' + residenceselv[i].name + '</option>').appendTo(newSelSek);
        }


     //===  Изменения в селекте  " Место жительства" - заменяем селект "Район/ Город"       ==//
     $("#residenceseln").change(function(){
      
      var residenceselv=$("#residenceseln option:selected").attr('data-num');
     // alert(residenceselv)
      var sitin='siti'+residenceselv;

      sitin=eval(sitin);
     
       if (residenceselv==1){
        $('#citin').empty();
        var newSelSek = $('#citin');
        for (var i = 0; i < sitin.length; i++)  {
           $('<option class="standart_opt" value="' + sitin[i].val + '">' + sitin[i].name + '</option>').appendTo(newSelSek);
        }
      }

      if (residenceselv==2){
        $('#citin').empty();
        var newSelSek = $('#citin');
        for (var i = 0; i < sitin.length; i++)  {
           $('<option class="standart_opt" value="' + sitin[i].val + '">' + sitin[i].name + '</option>').appendTo(newSelSek);
        }
      }
      activatebtn2(); 
     });


     ///======= Активируем кнопку на первом блоке если все выбрано  =================///
     function activatebtn2(){
      var typeavtov=document.getElementById('typevtoselec2n').value;
      var K1bl=0;
      var K2bl=0;
      var K3bl=0;
      //alert('typeavtov1='+typeavtov)
  
      if (typeavtov==1){
        var vv1=document.getElementById('inptupeavtol1n').value;
        var dd1=document.getElementById('inptupeavtol2n').value
       
        if ((vv1>0)&&(dd1>0)){
          K1bl=1;
         
        }
      }
  
      if (typeavtov==2){
        var vv1=document.getElementById('numberseats1n').value;
        var dd1=document.getElementById('inptupeavtomikron').value
        if ((vv1>0)&&(dd1>0)){
          K1bl=1;
        }
      }
  
      if (typeavtov==3){
        var vv1=document.getElementById('traktorlsn').value;      
        if (vv1>0){
          K1bl=1;
        }
      }
  
      if (typeavtov==4){
        var vv1=document.getElementById('gruskgn').value;      
        if (vv1>0){
          K1bl=1;
        }
      }
  
      if (typeavtov==5){
        var vv1=document.getElementById('vmotozn').value;      
        if (vv1>0){
          K1bl=1;
        }
      }
      //==== выбран тип клиента======//
      if (Ktypecl>0){
        K2bl=1;
      }
      
  
      var mm1=document.getElementById('residenceseln').value;
      var mm2=document.getElementById('citin').value;
       
      if ((mm1>0)&&(mm2>0)){
        K3bl=1;
      }
  
       //alert('typeavtov='+typeavtov)
       
  
      if ((K1bl==1)&&(K2bl==1)&&(K3bl==1)){
        document.getElementById("calc_nalog_btn2").disabled=false;
        document.getElementById("calc_nalog_btn2").style.opacity = "1";
      }
      else{
        document.getElementById("calc_nalog_btn2").disabled=true;
        document.getElementById("calc_nalog_btn2").style.opacity = "0.5"
      }    
    }


//===  Нажали РАСЧИТАТЬ на 1 блоке       ==//
$("#calc_nalog_btn2").click(function(){

  $('#calculator_nalog_block2').addClass('block_close');
  $('#calculator_nalog_block3').addClass('block_active');
});







      //===  Изменения в селекте  " Была ли у вас раньше страховка ОСАГО?"       ==//
      $("#strahovkan").change(function(){
        var strahovkav=document.getElementById('strahovkan').value;
        
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
        activatebtn3(); 
  
       });
     
        //===  Изменения в селекте  " Опыт вождения владельца       ==//
      $("#experiencen").change(function(){
        avarblockact();
        activatebtn3(); 
      });   

       //===  Изменения в селекте  " В скольких ДТП вы виноваты?       ==//
       $("#avarn").change(function(){
          activatebtn3(); 
      });  
      
      
 ///======= Активируем кнопку на втором блоке если все выбрано  =================///
 function activatebtn3(){

  var experiencenv=document.getElementById('experiencen').value;
  var K1bl=0;
  var K2bl=0;
  var K3bl=0;
  //alert('typeavtov1='+typeavtov)

  if (experiencenv>0){
    K1bl=1;
  }

  var strahovkanv=document.getElementById('strahovkan').value;
  if (strahovkanv==2){
    K2bl=1;
  }

  var avarnv=document.getElementById('avarn').value;
  if ((strahovkanv==1)&&(avarnv>0)){
    K2bl=1;
  }


  
   //alert('typeavtov='+typeavtov)
   

  if ((K1bl==1)&&(K2bl==1)){
    document.getElementById("calc_nalog_btn3").disabled=false;
    document.getElementById("calc_nalog_btn3").style.opacity = "1";
  }
  else{
    document.getElementById("calc_nalog_btn3").disabled=true;
    document.getElementById("calc_nalog_btn3").style.opacity = "0.5"
  }    
}



      function avarblockact(){
        var strahovkav=document.getElementById('strahovkan').value;
        var experiencev=document.getElementById('experiencen').value;
        if ((strahovkav==1)&&(experiencev>0)){
          $('.strahovkablockn').addClass('block_active');
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
          $('.strahovkablockn').removeClass('block_active');
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


 
  calc_nalog_btn3

  //===  Нажали РАСЧИТАТЬ на втором блоке       ==//
$("#calc_nalog_btn3").click(function(){

  $('#calculator_nalog_block3').removeClass('block_active');
  $('#calculator_nalog_block_itog').addClass('block_active');

});  


//===  Нажали РАСЧИТАТЬ на втором блоке       ==//
$("#calc_nalog_btn1112").click(function(){

  $('#calculator_nalog_block3').removeClass('block_active');
  $('#calculator_osago_block_itog').addClass('block_active');
 
  //Кbasetypeavto; //базовая ставка по типу авто
  //Ktypecl=0; //базовая ставка по типу клиента

  //показатель, который формируется в зависимости от территории регистрации собственника//
   var KT=0;
  var kt1=document.getElementById('residencesel').value;
  var kt2=document.getElementById('citi').value;
  KT=kt1*kt2;

 // параметр безаварийности или «бонус-малус».//
 var KB=0;
 var os=document.getElementById('strahovkan').value;
 var avar=document.getElementById('avarn').value;

  if (os==2){
    KB=1;
  }

  if ((os==1)&&(avar==1)){
    KB=KB1;
  } 
  if ((os==1)&&(avar==2)){
    KB=KB2;
  } 
  if ((os==1)&&(avar==3)){
    KB=KB3;
  } 
  if ((os==1)&&(avar==4)){
    KB=KB4;
  } 
  if ((os==1)&&(avar==5)){
    KB=KB5;
  } 
///==числовой показатель, учитывающий возраст и стаж водителя или водителей===//
var nj=document.getElementById('experiencen').value;
var kj='KJAR'+nj;
kj=eval(kj);
//kj=eval(kj);
var KJAR=kj;

///====показатель, который зависит от мощности ТС===//

var KM=0;
var tavto = document.getElementById('typevtoselec2n').value;

if (tavto==1){
  var pover = document.getElementById('inptupeavtol1n').value;
  if (pover<70){
    KM=KPOVER1L;
  }
  if ((pover>=70)&&(pover<100)){
    KM=KPOVER2L;
  }
  if ((pover>=100)&&(pover<120)){
    KM=KPOVER3L;
  }
  if ((pover>=120)&&(pover<150)){
    KM=KPOVER4L;
  }
  if (pover>=150){
    KM=KPOVER5L;
  }
}

if (tavto==2){
  var pover = document.getElementById('inptupeavtomikro').value;
  if (pover<70){
    KM=KPOVER1BUS;
  }
  if ((pover>=70)&&(pover<100)){
    KM=KPOVER2BUS;
  }
  if ((pover>=100)&&(pover<120)){
    KM=KPOVER3BUS;
  }
  if ((pover>=120)&&(pover<150)){
    KM=KPOVER4BUS;
  }
  if (pover>=150){
    KM=KPOVER5BUS;
  }
}

if (tavto==3){
  var pover = document.getElementById('traktorlsn').value;
  if (pover<70){
    KM=KPOVER1TR;
  }
  if ((pover>=70)&&(pover<100)){
    KM=KPOVER2TR;
  }
  if ((pover>=100)&&(pover<120)){
    KM=KPOVER3TR;
  }
  if ((pover>=120)&&(pover<150)){
    KM=KPOVER4TR;
  }
  if (pover>=150){
    KM=KPOVER5TR;
  }
}

if (tavto==4){
  var pover = document.getElementById('gruskgn').value;
  if (pover<70){
    KM=KPOVER1GR;
  }
  if ((pover>=70)&&(pover<100)){
    KM=KPOVER2GR;
  }
  if ((pover>=100)&&(pover<120)){
    KM=KPOVER3GR;
  }
  if ((pover>=120)&&(pover<150)){
    KM=KPOVER4GR;
  }
  if (pover>=150){
    KM=KPOVER5GR;
  }
}

if (tavto==5){
  var pover = document.getElementById('vmotozn').value;
  if (pover<70){
    KM=KPOVER1MOTOZ;
  }
  if ((pover>=70)&&(pover<100)){
    KM=KPOVER2MOTOZ;
  }
  if ((pover>=100)&&(pover<120)){
    KM=KPOVER2MOTOZ;
  }
  if ((pover>=120)&&(pover<150)){
    KM=KPOVER2MOTOZ;
  }
  if (pover>=150){
    KM=KPOVER2MOTOZ;
  }
}






  var osagoz=Кbasetypeavto*Ktypecl*KT*KB*KJAR*KM;
   osagoz=osagoz.toFixed(2);
  $('#osagozv').text(osagoz)


});  





});




