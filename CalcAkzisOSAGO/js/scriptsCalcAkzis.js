var typeavtov,tupemotor,tupegibrid,typetopgibrid;



typeavtov=1; //Тип авто, по умолчанию при открытие сайта мотоцикл
tupemotor=1; //Тип мотора для Легковой автомобиль по умолчанию Дизель
tupegibrid=1; //Плагин-гибрид
typetopgibrid=1; //Тип топлива Гибрид дизель


$(document).ready(function() {

    //===  Закрываем возможность введения кроме цифр в инпут       ==//

    $(".paraminp").keyup(function(e){
        this.value = this.value.replace(/[^0-9]/g, '');
       
      });


    //===  Выбрали тип МОТОЦИКЛ       ==//
      $('#typeavtoli1').click(function () {
        $('.gibrid_tupe_block').removeClass('blockactive'); 
        $('.gibrid_typetop_block').removeClass('blockactive');
        $('.massakzis_block').addClass('blockclose');
       
        typeavtov=1;
        $('.calculator_block_motor').removeClass('blockactive');
        $('.calculator_block_gibrid').removeClass('blockactive');
        $('.calculator_block_typetop').removeClass('blockactive');

        var elem = document.getElementById('calculator_block_itog');
         var displayStyle = window.getComputedStyle(elem).display; 
            if (displayStyle === 'block') {

               $('.calculator_block_param_akzis').removeClass('blockclose') 
       
               $('.calculator_block_itog').removeClass('blockactive');                
           }
           $('.volumeakzis_block').removeClass('blockclose');

        
           
             
      });



      //===  Выбрали тип Легковой автомобиль        ==//
      $('#typeavtoli2').click(function () {
        typeavtov=2;
        $('.calculator_block_motor').addClass('blockactive'); 
        $('.massakzis_block').addClass('blockclose'); 
        var elem = document.getElementById('calculator_block_itog');
        var displayStyle = window.getComputedStyle(elem).display; 
           if (displayStyle === 'block') {

              $('.calculator_block_param_akzis').removeClass('blockclose') 
      
              $('.calculator_block_itog').removeClass('blockactive'); 
          }     


      });

      //===  Выбрали тип Грузовой автомобиль       ==//
     $('#typeavtoli3').click(function () {
        $('.massakzis_block').removeClass('blockclose');
        $('.gibrid_tupe_block').removeClass('blockactive'); 
        $('.gibrid_typetop_block').removeClass('blockactive');
        typeavtov=3;
       $('.calculator_block_motor').removeClass('blockactive');
       $('.calculator_block_gibrid').removeClass('blockactive');
       $('.calculator_block_typetop').removeClass('blockactive');
       var elem = document.getElementById('calculator_block_itog');
       var displayStyle = window.getComputedStyle(elem).display; 
          if (displayStyle === 'block') {

             $('.calculator_block_param_akzis').removeClass('blockclose') 
     
             $('.calculator_block_itog').removeClass('blockactive'); 
             $('.volumeakzis_block').removeClass('blockclose');
         }
         
     });


       //===  Выбрали тип мотора ДИЗЕЛЬ       ==//
       $('#motorli1').click(function () {
        $('.gibrid_tupe_block').removeClass('blockactive'); 
        $('.gibrid_typetop_block').removeClass('blockactive');
        tupemotor=1;
        $('.volumeakzis_block').removeClass('blockclose');
        var elem = document.getElementById('calculator_block_itog');
        var displayStyle = window.getComputedStyle(elem).display; 
           if (displayStyle === 'block') {

              $('.calculator_block_param_akzis').removeClass('blockclose') 
      
              $('.calculator_block_itog').removeClass('blockactive');                
          }
       });

          //===  Выбрали тип мотора БЕНЗИН       ==//
          $('#motorli2').click(function () {
            $('.gibrid_tupe_block').removeClass('blockactive'); 
            $('.gibrid_typetop_block').removeClass('blockactive');
            tupemotor=2;
            $('.volumeakzis_block').removeClass('blockclose');
            var elem = document.getElementById('calculator_block_itog');
            var displayStyle = window.getComputedStyle(elem).display; 
               if (displayStyle === 'block') {
   
                  $('.calculator_block_param_akzis').removeClass('blockclose') 
          
                  $('.calculator_block_itog').removeClass('blockactive');                
              }
           });

            //===  Выбрали тип мотора ГИБРИД       ==//
          $('#motorli3').click(function () {
            tupemotor=3;
            $('.gibrid_tupe_block').addClass('blockactive');  

            $('.volumeakzis_block').removeClass('blockclose');
            var elem = document.getElementById('calculator_block_itog');
            var displayStyle = window.getComputedStyle(elem).display; 
               if (displayStyle === 'block') {
   
                  $('.calculator_block_param_akzis').removeClass('blockclose') 
          
                  $('.calculator_block_itog').removeClass('blockactive');                
              }
           });
    
          //===  Выбрали тип мотора ЭЛЕКТРОМОБИЛЬ       ==//
          $('#motorli4').click(function () {
            $('.gibrid_tupe_block').removeClass('blockactive');  
            $('.gibrid_typetop_block').removeClass('blockactive');
            tupemotor=4;
            $('.volumeakzis_block').addClass('blockclose');
            var elem = document.getElementById('calculator_block_itog');
            var displayStyle = window.getComputedStyle(elem).display; 
               if (displayStyle === 'block') {
   
                  $('.calculator_block_param_akzis').removeClass('blockclose') 
          
                  $('.calculator_block_itog').removeClass('blockactive');                
              }

           });

           //===  Выбрали тип Плагин-гибрид       ==//
          $('#gibridli1').click(function () {
            $('.gibrid_typetop_block').addClass('blockactive');
            tupegibrid=1;
          });   

           //===  Выбрали тип Полный гибрид       ==//
           $('#gibridli2').click(function () {
            $('.gibrid_typetop_block').addClass('blockactive');
            tupegibrid=2;
          }); 

             //===  Выбрали тип Мягкий гибрид       ==//
             $('#gibridli3').click(function () {
                $('.gibrid_typetop_block').addClass('blockactive');
                tupegibrid=3;
              });

            //===  Выбрали Тип топлива гибрид  дизель     ==//
            $('#typetopli1').click(function () {
                typetopgibrid=1;
              });

               //===  Выбрали Тип топлива гибрид  бензин     ==//
            $('#typetopli2').click(function () {
                typetopgibrid=2;
              });

              
     



     //===== Нажали кнопку РАСЧИТАТЬ     =====///
      $('#calc_akzis_btn1').click(function () {
        var n1=0;
        var n2=0;
       
        let ageakzisv = parseInt($("#ageakzis").val());

        //==== Проверяем заполнения поля объём двигателя  =====//
        let volumeakzisv = parseInt($("#volumeakzis").val());

        let volumeakzisvpr= isNaN(volumeakzisv);
        
        if (volumeakzisvpr==true){  
             $('#volumeakzis').addClass('paraminp_active');          
        }
        else
        {$('#volumeakzis').removeClass('paraminp_active'); 
        n1=1;
        }

         //==== Проверяем заполнения поля объём цена  =====//
        
         var prisevv=parseInt($("#prisev").val());  
         var prisevvpr= isNaN(prisevv);
         
         if (prisevvpr==true){  
              $('#prisev').addClass('paraminp_active');          
         }
         else
         {$('#prisev').removeClass('paraminp_active');        
         n2=1;
         }

         if ((n1==1)&&(n2==1)){

         $('.calculator_block_param_akzis').addClass('blockclose') 
         pricse();
         }
    })


     //===== Нажали кнопку ИСПРАВИТЬ     =====///
     $('#calc_akzis_btn3').click(function () {
        $('.calculator_block_param_akzis').removeClass('blockclose') 
       
        $('.calculator_block_itog').removeClass('blockactive'); 
     
       coor = $('.calculator_block_param_akzis');
      
       $('html, body').scrollTop(coor);      

     });

     //===== Нажали кнопку НОВЫЙ РАСЧЕТ     =====///
     $('#calc_akzis_btn2').click(function () {
        $('.calculator_block_param_akzis').removeClass('blockclose');
       // $('.calculator_block_motor').removeClass('blockactive');
       // $('.calculator_block_gibrid').removeClass('blockactive');
       // $('.calculator_block_typetop').removeClass('blockactive'); 
       
        $('.calculator_block_itog').removeClass('blockactive'); 
     
       coor = $('.calculator_block_param_akzis');
      
       $('html, body').scrollTop(coor);
       document.getElementById('ageakzis').value=2;
       document.getElementById('volumeakzis').value=''; 
       document.getElementById('prisev').value=''; 
      
       

     });








// ======================      =================================///

    function pricse(){
        $('.calculator_block_itog').addClass('blockactive'); 
       var  akzisv=0;
       var ageakzisvt=0;
       var volumeakzisv='';
       var prisevv=0;
       var ndsv=0;
       var tamogv=0;
       var tamogallv=0;
       var priseavtoallv=0;


       ///==================Для варианта МОТОЦИКЛ      =======================///
       if (typeavtov==1){
        $('.nsdmoto').removeClass('blockclose');
        $('.roskoh').addClass('blockclose');
        $('.volumeakzis_itog_block').removeClass('.blockclose');
        $('.massitog').addClass('blockclose');
        

       

        volumeakzisv=parseInt($("#volumeakzis").val());
     //=========== Вычитываем Сумма акцизных сборов и выводим в форму итогов ====================//

        var jares=parseInt($("#ageakzis").val()); 

        if (jares>=11){
            var npr=21.24+((jares-11)*5);
            akzisv=volumeakzisv*npr;
            akzisv=Math.ceil(akzisv);
            $('#akzisvv').text(akzisv);

        }
        else{
       // akzisv=volumeakzisv*npr;
        akzisv=0; 
         $('#akzisvv').text(akzisv);
        }   
      
        //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
        ageakzisvt = $('#ageakzis option:selected').text();
         $('#jarev').text(ageakzisvt);

       //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
         volumeakzisv=parseInt($("#volumeakzis").val());  
         $('#volumeakzisvv').text(volumeakzisv);

         //=========== Вычитываем цена и выводим в форму итогов ====================//
         prisevv=parseInt($("#prisev").val());  
         $('#prisevv').text(prisevv);

            //=========== Вычисляем НДС  и выводим в форму итогов ====================//
            
            ndsv=(prisevv/100)*20.08; 
            ndsv=Math.ceil(ndsv);            
            $('#ndsvv').text(ndsv);

             //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
            
             tamogv=(prisevv/100)*0.4; 
             tamogv=Math.ceil(tamogv);            
             $('#tamogvv').text(tamogv);

              //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
            
              tamogallv=tamogv+ndsv+akzisv; 
                        
              $('#tamogallvv').text(tamogallv);

               //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
            
               priseavtoallv=tamogallv+prisevv; 
                        
               $('#priseavtoallvv').text(priseavtoallv);
   
       }


 ///==================Для варианта Легковой автомобиль - ДИЗЕЛЬ      =======================///
     if ((typeavtov==2)&&(tupemotor==1)){

        var roskohv=0;
        $('.nsdmoto').addClass('blockclose');
        $('.roskoh').addClass('blockclose');
        $('.volumeakzis_itog_block').removeClass('.blockclose');
        $('.massitog').addClass('blockclose');

       //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
       ageakzisvt = $('#ageakzis option:selected').text();
       $('#jarev').text(ageakzisvt);

     //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
       volumeakzisv=parseInt($("#volumeakzis").val());  
       $('#volumeakzisvv').text(volumeakzisv);

       //=========== Вычитываем цена и выводим в форму итогов ====================//
       prisevv=parseInt($("#prisev").val());  
       $('#prisevv').text(prisevv);

       //=========== Вычитываем Акциз на роскошь и выводим в форму итогов ====================//
       if (prisevv<600000){
        roskohv=0;
        $('.roskoh').addClass('blockclose');
       }

       if ((prisevv>=600000)&&(prisevv<=700000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*2;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=700001)&&(prisevv<=800000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*3;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=800001)&&(prisevv<=900000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*4;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=900001)&&(prisevv<=1000000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*5;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=1000001)&&(prisevv<=1200000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*6;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=1200001)&&(prisevv<=1400000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*7;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=1400001)&&(prisevv<=1600000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*8;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>=1600001)&&(prisevv<=1800000)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*9;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }

       if ((prisevv>1800001)){        
        $('.roskoh').removeClass('blockclose');
        roskohv=(prisevv/100)*10;
        roskohv=Math.ceil(roskohv); 
        $('#roskohvv').text(roskohv);
       }



    //=========== Вычиcтываем АКЦИЗ и выводим в форму итогов ====================//

        //==== коэф акциза=====//
        volumeakzisv=parseInt($("#volumeakzis").val());
        var jares=parseInt($("#ageakzis").val());
        if (volumeakzisv<=1500){
            volumeakzisv=1500;
        }

        if ((volumeakzisv>1500)&&(volumeakzisv<=2500)){
            volumeakzisv=2500;
        }

        if (volumeakzisv>2500){
            volumeakzisv=3000;
        }

        var Nkdisel='Kdisel'+jares+volumeakzisv;
       
        //window.Nkdisel = Nkdisel;

        var KdiselAkzis=eval(Nkdisel);

        //alert(KdiselAkzis)
        var volumeakzisr=parseInt($("#volumeakzis").val());
        akzisv=KdiselAkzis*volumeakzisr;
        akzisv=Math.ceil(akzisv); 
        $('#akzisvv').text(akzisv);

         //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
            
         tamogv=(prisevv/100)*0.4; 
         tamogv=Math.ceil(tamogv);            
         $('#tamogvv').text(tamogv);

          //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
        
          tamogallv=tamogv+roskohv+akzisv; 
                    
          $('#tamogallvv').text(tamogallv);

           //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
        
           priseavtoallv=tamogallv+prisevv; 
                    
           $('#priseavtoallvv').text(priseavtoallv);


     }   

     
 ///==================Для варианта Легковой автомобиль - бензин      =======================///
 if ((typeavtov==2)&&(tupemotor==2)){

    var roskohv=0;
    $('.nsdmoto').addClass('blockclose');
    $('.roskoh').addClass('blockclose');
    $('.volumeakzis_itog_block').removeClass('.blockclose');
    $('.massitog').addClass('blockclose');

   //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
   ageakzisvt = $('#ageakzis option:selected').text();
   $('#jarev').text(ageakzisvt);

 //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
   volumeakzisv=parseInt($("#volumeakzis").val());  
   $('#volumeakzisvv').text(volumeakzisv);

   //=========== Вычитываем цена и выводим в форму итогов ====================//
   prisevv=parseInt($("#prisev").val());  
   $('#prisevv').text(prisevv);

   //=========== Вычитываем Акциз на роскошь и выводим в форму итогов ====================//
   if (prisevv<600000){
    roskohv=0;
    $('.roskoh').addClass('blockclose');
   }

   if ((prisevv>=600000)&&(prisevv<=700000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*2;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=700001)&&(prisevv<=800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*3;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=800001)&&(prisevv<=900000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*4;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=900001)&&(prisevv<=1000000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*5;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1000001)&&(prisevv<=1200000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*6;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1200001)&&(prisevv<=1400000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*7;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1400001)&&(prisevv<=1600000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*8;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1600001)&&(prisevv<=1800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*9;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>1800001)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*10;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }



//=========== Вычиcтываем АКЦИЗ и выводим в форму итогов ====================//

    //==== коэф акциза=====//
    volumeakzisv=parseInt($("#volumeakzis").val());
    var jares=parseInt($("#ageakzis").val());
    if (volumeakzisv<=1000){
        volumeakzisv=1000;
    }

    if ((volumeakzisv>1001)&&(volumeakzisv<=1500)){
        volumeakzisv=1500;
    }

    if ((volumeakzisv>=1501)&&(volumeakzisv<=2000)){
        volumeakzisv=2000;
    }
    if ((volumeakzisv>=2001)&&(volumeakzisv<=3000)){
        volumeakzisv=3000;
    }
    if (volumeakzisv>=3001){
        volumeakzisv=3500;
    }

   

    var Nbensin='Kbensin'+jares+volumeakzisv;
   
    //window.Nkdisel = Nkdisel;
   // alert(Nbensin)
    var KbensinlAkzis=eval(Nbensin);

    //alert(KdiselAkzis)
    var volumeakzisr=parseInt($("#volumeakzis").val());
   // alert(KbensinlAkzis)
    //alert(volumeakzisr)

    akzisv=KbensinlAkzis*volumeakzisr;


    akzisv=Math.ceil(akzisv); 
    $('#akzisvv').text(akzisv);

     //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
        
     tamogv=(prisevv/100)*0.4; 
     tamogv=Math.ceil(tamogv);            
     $('#tamogvv').text(tamogv);

      //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
    
      tamogallv=tamogv+roskohv+akzisv; 
                
      $('#tamogallvv').text(tamogallv);

       //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
    
       priseavtoallv=tamogallv+prisevv; 
                
       $('#priseavtoallvv').text(priseavtoallv);

 }

   ///==================Для варианта Легковой автомобиль - гибрид      =======================///
 if ((typeavtov==2)&&(tupemotor==3)){

    var roskohv=0;
    $('.nsdmoto').addClass('blockclose');
    $('.roskoh').addClass('blockclose');
    $('.volumeakzis_itog_block').removeClass('.blockclose');
    $('.massitog').addClass('blockclose');

   //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
   ageakzisvt = $('#ageakzis option:selected').text();
   $('#jarev').text(ageakzisvt);

 //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
   volumeakzisv=parseInt($("#volumeakzis").val());  
   $('#volumeakzisvv').text(volumeakzisv);

   //=========== Вычитываем цена и выводим в форму итогов ====================//
   prisevv=parseInt($("#prisev").val());  
   $('#prisevv').text(prisevv);

   //=========== Вычитываем Акциз на роскошь и выводим в форму итогов ====================//
   if (prisevv<600000){
    roskohv=0;
    $('.roskoh').addClass('blockclose');
   }

   if ((prisevv>=600000)&&(prisevv<=700000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*2;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=700001)&&(prisevv<=800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*3;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=800001)&&(prisevv<=900000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*4;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=900001)&&(prisevv<=1000000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*5;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1000001)&&(prisevv<=1200000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*6;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1200001)&&(prisevv<=1400000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*7;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1400001)&&(prisevv<=1600000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*8;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1600001)&&(prisevv<=1800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*9;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>1800001)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*10;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }



//=========== Вычиcтываем АКЦИЗ и выводим в форму итогов ====================//

    //==== коэф акциза=====//
            // =====дизель====/// 
   if (typetopgibrid==1){

    volumeakzisv=parseInt($("#volumeakzis").val());
    var jares=parseInt($("#ageakzis").val());
    if (volumeakzisv<=1000){
        volumeakzisv=1000;
    }

    if ((volumeakzisv>=1000)&&(volumeakzisv<=1500)){
        volumeakzisv=1500;
    }
    if ((volumeakzisv>=1501)&&(volumeakzisv<=2000)){
        volumeakzisv=2000;
    }
    if ((volumeakzisv>=2001)&&(volumeakzisv<=3000)){
        volumeakzisv=3000;
    }
    if (volumeakzisv>=3001){
        volumeakzisv=3500;
    }

   

    var Nkdisel='Kbensin'+jares+volumeakzisv;
   
    //window.Nkdisel = Nkdisel;

    var KdiselAkzis=eval(Nkdisel);

    //alert(KdiselAkzis)
    var volumeakzisr=parseInt($("#volumeakzis").val());
    akzisv=KdiselAkzis*volumeakzisr;
    
     }

         // =====бензин====/// 
   if (typetopgibrid==2){
    volumeakzisv=parseInt($("#volumeakzis").val());
    var jares=parseInt($("#ageakzis").val());
    if (volumeakzisv<=1000){
        volumeakzisv=1000;
    }

    if ((volumeakzisv>=1001)&&(volumeakzisv<=1500)){
        volumeakzisv=1500;
    }
    if ((volumeakzisv>=1501)&&(volumeakzisv<=2000)){
        volumeakzisv=2000;
    }
    if ((volumeakzisv>=2001)&&(volumeakzisv<=3000)){
        volumeakzisv=3000;
    }
    if (volumeakzisv>=3001){
        volumeakzisv=3500;
    }

   

    var Nkdisel='Kbensin'+jares+volumeakzisv;
   
    //window.Nkdisel = Nkdisel;

    var KdiselAkzis=eval(Nkdisel);

    //alert(KdiselAkzis)
    var volumeakzisr=parseInt($("#volumeakzis").val());
    akzisv=KdiselAkzis*volumeakzisr;
   
   }


   if (tupegibrid==1){
    akzisv=akzisv/2;
   akzisv=Math.ceil(akzisv); 
   $('#akzisvv').text(akzisv);
   }

   if (tupegibrid==2){
    akzisv=(akzisv/100)*75;
   akzisv=Math.ceil(akzisv); 
   $('#akzisvv').text(akzisv);
   }
   if (tupegibrid==3){
    akzisv=akzisv;
   akzisv=Math.ceil(akzisv); 
   $('#akzisvv').text(akzisv);
   }






     //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
        
     tamogv=(prisevv/100)*0.4; 
     tamogv=Math.ceil(tamogv);            
     $('#tamogvv').text(tamogv);

      //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
    
      tamogallv=tamogv+roskohv+akzisv; 
                
      $('#tamogallvv').text(tamogallv);

       //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
    
       priseavtoallv=tamogallv+prisevv; 
                
       $('#priseavtoallvv').text(priseavtoallv);

 }



 ///==================Для варианта Легковой автомобиль - электромобиль      =======================///
 if ((typeavtov==2)&&(tupemotor==4)){

    var roskohv=0;
    $('.nsdmoto').addClass('blockclose');
    $('.roskoh').addClass('blockclose');
    $('.massitog').addClass('blockclose');

   //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
   ageakzisvt = $('#ageakzis option:selected').text();
   $('#jarev').text(ageakzisvt);

 //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
//    volumeakzisv=parseInt($("#volumeakzis").val());  
//    $('#volumeakzisvv').text(volumeakzisv);
      $('.volumeakzis_itog_block').addClass('.blockclose')

   //=========== Вычитываем цена и выводим в форму итогов ====================//
   prisevv=parseInt($("#prisev").val());  
   $('#prisevv').text(prisevv);

   //=========== Вычитываем Акциз на роскошь и выводим в форму итогов ====================//
   if (prisevv<600000){
    roskohv=0;
    $('.roskoh').addClass('blockclose');
   }

   if ((prisevv>=600000)&&(prisevv<=700000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*2;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=700001)&&(prisevv<=800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*3;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=800001)&&(prisevv<=900000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*4;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=900001)&&(prisevv<=1000000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*5;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1000001)&&(prisevv<=1200000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*6;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1200001)&&(prisevv<=1400000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*7;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1400001)&&(prisevv<=1600000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*8;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>=1600001)&&(prisevv<=1800000)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*9;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }

   if ((prisevv>1800001)){        
    $('.roskoh').removeClass('blockclose');
    roskohv=(prisevv/100)*10;
    roskohv=Math.ceil(roskohv); 
    $('#roskohvv').text(roskohv);
   }



//=========== Вычиcтываем АКЦИЗ и выводим в форму итогов ====================//

    

   
    akzisv=0; 
    $('#akzisvv').text(akzisv);

     //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
        
     tamogv=(prisevv/100)*0.4; 
     tamogv=Math.ceil(tamogv);            
     $('#tamogvv').text(tamogv);

      //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
    
      tamogallv=tamogv+roskohv+akzisv; 
                
      $('#tamogallvv').text(tamogallv);

       //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
    
       priseavtoallv=tamogallv+prisevv; 
                
       $('#priseavtoallvv').text(priseavtoallv);


 }


       ///==================Для варианта Грузовой автомобиль      =======================///
       if (typeavtov==3){
        $('.nsdmoto').removeClass('blockclose');
        $('.roskoh').addClass('blockclose');
        $('.volumeakzis_itog_block').removeClass('.blockclose');
        $('.massitog').removeClass('blockclose');
        

       

        volumeakzisv=parseInt($("#volumeakzis").val());
     //=========== Вычитываем Сумма акцизных сборов и выводим в форму итогов ====================//

        var jares=parseInt($("#ageakzis").val()); 
        if (jares<11){            
            akzisv=0; 
         $('#akzisvv').text(akzisv);
        }

        if ((jares>=11)&&(jares<13)){            
            akzisv=(volumeakzisv/100)*1300;
            akzisv=Math.ceil(akzisv);
            $('#akzisvv').text(akzisv);
        }

        if ((jares>=13)&&(jares<16)){            
            akzisv=(volumeakzisv/100)*1700;
            akzisv=Math.ceil(akzisv);
            $('#akzisvv').text(akzisv);

        }
        if (jares>16){            
            akzisv=(volumeakzisv/100)*8000;
            akzisv=Math.ceil(akzisv);
            $('#akzisvv').text(akzisv);

        }

      
        //=========== Вычитываем txt возраст авто и выводим в форму итогов ====================//
        ageakzisvt = $('#ageakzis option:selected').text();
         $('#jarev').text(ageakzisvt);

       //=========== Вычитываем объём двигателя и выводим в форму итогов ====================//
         volumeakzisv=parseInt($("#volumeakzis").val());  
         $('#volumeakzisvv').text(volumeakzisv);

         //=========== Вычитываем цена и выводим в форму итогов ====================//
         prisevv=parseInt($("#prisev").val());  
         $('#prisevv').text(prisevv);

         //=========== Вычитываем разрешенная максимальная масса и выводим в форму итогов ====================//
         massakzisv=parseInt($("#massakzis").val());
         var massakzisvtxt='';  
         if(massakzisv==1){
            massakzisvtxt='0-3500 кг';
         }
         if(massakzisv==2){
            massakzisvtxt='3501-12000 кг';
         }
         if(massakzisv==3){
            massakzisvtxt='от 12000 кг';
         }
         
         $('#massvv').text(massakzisvtxt);



            //=========== Вычисляем НДС  и выводим в форму итогов ====================//
            
            ndsv=(prisevv/100)*20.08; 
            ndsv=Math.ceil(ndsv);            
            $('#ndsvv').text(ndsv);

             //=========== Вычисляем Сбор за осуществление таможенных процедур  и выводим в форму итогов ====================//
            
             tamogv=(prisevv/100)*0.4; 
             tamogv=Math.ceil(tamogv);            
             $('#tamogvv').text(tamogv);

              //=========== Вычисляем ВСЕГО таможенные расходы  и выводим в форму итогов ====================//
            
              tamogallv=tamogv+ndsv+akzisv; 
                        
              $('#tamogallvv').text(tamogallv);

               //=========== Вычисляем ВСЕГО за автомобиль  и выводим в форму итогов ====================//
            
               priseavtoallv=tamogallv+prisevv; 
                        
               $('#priseavtoallvv').text(priseavtoallv);
   
       }






    }


  






});




