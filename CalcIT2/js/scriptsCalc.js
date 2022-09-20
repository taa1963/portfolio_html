
var disprise, saiteprise, adapt1prise,adapt2prise,adaptprise,lizen1prise,lizenprise,ssl1prise,host1prise, domen1prise,
rasdel1prise, func1prise,rasdel_funk_prise,mag1f1prise,card1prise,zakaz1prise,dost1fprise,oplata1prise,dost1prise,integr1prise,
tz1prise,arbaitprise,tehn1prise,content1prise,content2prise,hostd1prise,tarif1prise,konsul1prise,tarif3prise,tarif_SEO_prise,
jnd1prise,reklamacont,googl1prise,bitricz_price,settings1prise,settings2prise,integra2prise,zajv1prise,tarifb1prise,korob1prise,
itog_price,prisemail,dis1text,adapt1text,bitr1text,ssl1text,host1text,dome1text,rasdel1text,modul1text,magas1text,card1text
,zakaz1text,dostav1text,oplata1text,interg1text,texn1text,texn2text,content2text,content3text,host3text,tarif1text,konsul1text
,tarif2text,reklama1text,reklama2text,seting1email,zvon1email,tarifb11email,tarifb12email;
disprise=0;
saiteprise=0;
adapt1prise=0;
adapt2prise=0;
adaptprise=0;
lizen1prise=0;
lizenprise=0;
ssl1prise=0;
host1prise=0;
domen1prise=0;
rasdel1prise=0;
rasdel_funk_prise=0;
func1prise=0;
mag1f1prise=0;
card1prise=0;
zakaz1prise=0;
dost1fprise=0;
oplata1prise=0;
dost1prise=0;
integr1prise=0;
tz1prise=0;
arbaitprise=0;
tehn1prise=0;
content1prise=0;
content2prise=0;
hostd1prise=0;
tarif1prise=0;
konsul1prise=0;
tarif3prise=0;
tarif_SEO_prise=0;
jnd1prise=0;
reklamacont=0;
googl1prise=0;
bitricz_price=0;
settings1prise=0;
settings2prise=0;
integra2prise=0;
zajv1prise=0;
tarifb1prise=0;
korob1prise=0;
itog_price=0;
prisemail=0;
dis1text=':';
adapt1text=':'
bitr1text=':';
ssl1text=':';
host1text=':';
dome1text=':';
rasdel1text=':';
modul1text=':';
magas1text=':';
card1text=':';
zakaz1text=':';
dostav1text=':';
oplata1text=':';
interg1text=':';
texn1text=':';
texn2text=':';
content2text=':';
content3text=':';
host3text=':';
tarif1text=':';
konsul1text=':';
tarif2text=':';
reklama1text=':';
reklama2text=':';
seting1email=':';
zvon1email=':';
tarifb11email=':';
tarifb12email=':';


$(document).ready(function() {

//======================= Кликнули на блоке "Разрабока сайтов" открываем\закрываем блоки, вращаем стрелку========================\\
$('#calculator_floor1').on('click', function() {
  var  floor1 = document.getElementById('calculator_floor1');

  var parent1 = floor1.closest('.calculator_floor');

  var cl= parent1.classList.contains('flop_add');
 

  if (cl==false){
    $(parent1).addClass('flop_add');

    var param1=document.getElementById('calculator_block_param1');
    $(param1).addClass('calculator_block_param_add')

    let fa_prise=document.getElementById('fa_prise1');
    $(fa_prise).addClass('fa-rotate-180');

  }

  else{
    $(parent1).removeClass('flop_add');

   var param1=document.getElementById('calculator_block_param1');
   $(param1).removeClass('calculator_block_param_add');
   let fa_prise=document.getElementById('fa_prise1');
   $(fa_prise).removeClass('fa-rotate-180');

  }
 
  });

//======================= Кликнули на блоке "Наполнение, размещение и техническая поддержка" открываем\закрываем блоки, вращаем стрелку========================\\
$('#calculator_floor2').on('click', function() {
  var  floor2 = document.getElementById('calculator_floor2');

  var parent1 = floor2.closest('.calculator_floor');

  var cl= parent1.classList.contains('flop_add');
 

  if (cl==false){
    $(parent1).addClass('flop_add');

    var param1=document.getElementById('calculator_block_param2');
    $(param1).addClass('calculator_block_param_add')

    let fa_prise=document.getElementById('fa_prise2');
    $(fa_prise).addClass('fa-rotate-180');

  }

  else{
    $(parent1).removeClass('flop_add');

   var param1=document.getElementById('calculator_block_param2');
   $(param1).removeClass('calculator_block_param_add');
   let fa_prise=document.getElementById('fa_prise2');
   $(fa_prise).removeClass('fa-rotate-180');

  }
 
  });


  //======================= Кликнули на блоке "Продвижение" открываем\закрываем блоки, вращаем стрелку========================\\
$('#calculator_floor3').on('click', function() {
  var  floor2 = document.getElementById('calculator_floor3');

  var parent1 = floor2.closest('.calculator_floor');

  var cl= parent1.classList.contains('flop_add');
 

  if (cl==false){
    $(parent1).addClass('flop_add');

    var param1=document.getElementById('calculator_block_param3');
    $(param1).addClass('calculator_block_param_add')

    let fa_prise=document.getElementById('fa_prise3');
    $(fa_prise).addClass('fa-rotate-180');

  }

  else{
    $(parent1).removeClass('flop_add');

   var param1=document.getElementById('calculator_block_param3');
   $(param1).removeClass('calculator_block_param_add');
   let fa_prise=document.getElementById('fa_prise3');
   $(fa_prise).removeClass('fa-rotate-180');

  }
 
  });


   //======================= Кликнули на блоке "Реклама" открываем\закрываем блоки, вращаем стрелку========================\\
$('#calculator_floor4').on('click', function() {
  var  floor2 = document.getElementById('calculator_floor4');

  var parent1 = floor2.closest('.calculator_floor');

  var cl= parent1.classList.contains('flop_add');
 

  if (cl==false){
    $(parent1).addClass('flop_add');

    var param1=document.getElementById('calculator_block_param4');
    $(param1).addClass('calculator_block_param_add')

    let fa_prise=document.getElementById('fa_prise4');
    $(fa_prise).addClass('fa-rotate-180');

  }

  else{
    $(parent1).removeClass('flop_add');

   var param1=document.getElementById('calculator_block_param4');
   $(param1).removeClass('calculator_block_param_add');
   let fa_prise=document.getElementById('fa_prise4');
   $(fa_prise).removeClass('fa-rotate-180');

  }
 
  });

    //======================= Кликнули на блоке "CRM" открываем\закрываем блоки, вращаем стрелку========================\\
$('#calculator_floor5').on('click', function() {
  var  floor2 = document.getElementById('calculator_floor5');

  var parent1 = floor2.closest('.calculator_floor');

  var cl= parent1.classList.contains('flop_add');
 

  if (cl==false){
    $(parent1).addClass('flop_add');

    var param1=document.getElementById('calculator_block_param5');
    $(param1).addClass('calculator_block_param_add')

    let fa_prise=document.getElementById('fa_prise5');
    $(fa_prise).addClass('fa-rotate-180');

  }

  else{
    $(parent1).removeClass('flop_add');

   var param1=document.getElementById('calculator_block_param5');
   $(param1).removeClass('calculator_block_param_add');
   let fa_prise=document.getElementById('fa_prise5');
   $(fa_prise).removeClass('fa-rotate-180');

  }
 
  });










  //======================= "Разрабока сайтов"  1 блок==================//

//======================= Клик (выбор) "Дизайн предоставляет заказчик" снимаем  чек со всех других элементов========================\\

$('#disain-1').on('click', function() {
  var desian = document.getElementsByName('disain2');
  
    for(i=0; i < desian.length; i++){
           desian[i].checked = false;
  }

  $('#disain-31').prop('checked', false);
  disainprise();

});  



 //======================= Клик (выбор) "Уникальный адаптивный дизайн" передаем чек на первый элемент========================\\

  $('#disain-2').on('click', function() {

    $('#disain-21').prop('checked', true);
    $('#disain-31').prop('checked', false);
    disainprise();

  });  

  //======================= Клик (выбор) "Шаблонный дизайн сайта" снимаем  чек со всех других элементов========================\\

$('#disain-3').on('click', function() {
  var desian = document.getElementsByName('disain2');
  
    for(i=0; i < desian.length; i++){
           desian[i].checked = false;
  }

  $('#disain-31').prop('checked', true);
  disainprise();

});



 //======================= Клик (выбор) на любом элементе "Уникальный адаптивный дизайн"" снимаем  чек со всех других элементов========================\\

 function disain2(element){

  $('#disain-1').prop('checked', false);
  $('#disain-2').prop('checked', true);
  $('#disain-3').prop('checked', false);
 //let disprise=element.value;
 disainprise();
 
 }

 window.disain2=disain2;

//======================= Клик (выбор) на любом элементе "Уникальный адаптивный дизайн"" снимаем  чек со всех других элементов========================\\

function disain3(element){

  $('#disain-1').prop('checked', false);
  $('#disain-2').prop('checked', false);
  $('#disain-3').prop('checked', true);
  //let disprise=element.value;
  disainprise();
 
 }

 window.disain3=disain3;

 //======================= Функция вычисления цены по блоку  "1 Этап - Дизайн" ========================\\

function disainprise(){
  disprise=0;
  dis1text=':';
  var dis1=document.getElementById('disain-1');

  if (dis1.checked) {
    disprise=0;
  }

 var desian2i = document.getElementsByName('disain2');
  
   for(i=0; i < desian2i.length; i++){
         if (desian2i[i].checked)
         {
          
           disprise=desian2i[i].value;
         
         var vd1=desian2i[i].closest('label');
        
         var txt=vd1.innerText;
         dis1text=dis1text+txt+';';
         
          //alert(txt);
         }
        
 }
 saitprise();
}

  //======================= Очистить все на блоке  "Разработка сайтов" снимаем  чек со всех  элементов========================\\

  $('#clear_sait').on('click', function() {
    $('#disain-1').prop('checked', false);
    $('#disain-2').prop('checked', false);
    $('#disain-3').prop('checked', false);

    var desian2i = document.getElementsByName('disain2');
  
    for(i=0; i < desian2i.length; i++){
         desian2i[i].checked=false;
    }
    disainprise();
  });  



  
   //======================= "Разрабока сайтов"  2 блок "Адаптивная верстка"==================//

    //======================= Выбор на блоке "Адаптивная верстка"  2 блок==================//
   function adapt1(element){
    adapt1prise=0;
    adapt1text=':'

    var adpt1 = document.getElementsByName('adapt1');
     for(i=0; i < adpt1.length; i++){
          if (adpt1[i].checked)
          {
            adapt1prise=adpt1[i].value; 

            var vd1=adpt1[i].closest('label');
            var txt=vd1.innerText;
            adapt1text=adapt1text+txt+';';



          }
  }  
   adatp_nprise();
   
   }
  
   window.adapt1=adapt1;

//======================= Очистить все на блоке  "Адаптивная верстка" снимаем  чек со всех  элементов========================\\

$('#clear_adapt1').on('click', function() {
  var adapt1i = document.getElementsByName('adapt1');

  for(i=0; i < adapt1i.length; i++){
    adapt1i[i].checked=false;
  }
  adapt1prise=0;
  adatp_nprise();
});  







   //======================= Выбор на блоке "Адаптация верстки действующего сайта под адаптив"  2 блок==================//
   function adapt2(element){
    adapt2prise=0;
    adapt1text=':';

    var adpt2 = document.getElementsByName('adapt2');
  
    for(i=0; i < adpt2.length; i++){
          if (adpt2[i].checked)
          {
            adapt2prise=adpt2[i].value; 

            var vd1=adpt2[i].closest('label');
            var txt=vd1.innerText;
            adapt1text=adapt1text+txt+';';

          }
  }
 
   adatp_nprise();
   
   }
  
   window.adapt2=adapt2;

//======================= Очистить все на блоке  "Адаптация верстки действующего сайта под адаптив" снимаем  чек со всех  элементов========================\\

$('#clear_adapt2').on('click', function() {
  var adapt2i = document.getElementsByName('adapt2');

  for(i=0; i < adapt2i.length; i++){
    adapt2i[i].checked=false;
  }
  adapt2prise=0;
  adatp_nprise();
});  





//======================= Вычисление общей цены бор на блоке "Адаптация верстки"  2 блок==================//
   function adatp_nprise(){
    adaptprise=adapt1prise*1+adapt2prise*1;
    saitprise();
   };  










//======================= "Разрабока сайтов" ---"3 Этап - Лицензирование, хостинг и домен"==================//

    //======================= Выбор на блоке "Подбор лицензии 1С-Bitrix"  1 блок==================//
    function lizen1(element){
      lizen1prise=0;
      bitr1text=':';
      var lizens1 = document.getElementsByName('lizen1');
       for(i=0; i < lizens1.length; i++){
            if (lizens1[i].checked)
            {
              lizen1prise=lizens1[i].value; 
              var vd1=lizens1[i].closest('label');
              var txt=vd1.innerText;
              bitr1text=bitr1text+txt+';';

            }
    }  
   // alert(lizen1prise)
    lizense_prise();
     
     }
    
     window.lizen1=lizen1;
  
  //======================= Очистить все на блоке  "Подбор лицензии 1С-Bitrix" снимаем  чек со всех  элементов========================\\
  
  $('#clear_lizen1').on('click', function() {
   
    var lizens1 = document.getElementsByName('lizen1');
  
    for(i=0; i < lizens1.length; i++){
      lizens1[i].checked=false;
    }
    lizen1prise=0;
    lizense_prise();
  });  



   //======================= Выбор на блоке "Подбор SSL-сертификата"  2 блок==================//
   function ssl1(element){
    ssl1prise=0;
    ssl1text=':';

    var ssl1 = document.getElementsByName('ssl1');
     for(i=0; i < ssl1.length; i++){
          if (ssl1[i].checked)
          {
            ssl1prise=ssl1[i].value; 
            var vd1=ssl1[i].closest('label');
            var txt=vd1.innerText;
            ssl1text=ssl1text+txt+';';
          }
  }  
 // alert(lizen1prise)
  lizense_prise();
   
   }
  
   window.ssl1=ssl1;

//======================= Очистить все на блоке  "Подбор SSL-сертификата" снимаем  чек со всех  элементов========================\\

$('#clear_ssl').on('click', function() {
 
  var ssl1 = document.getElementsByName('ssl1');

  for(i=0; i < ssl1.length; i++){
    ssl1[i].checked=false;
  }
  ssl1prise=0;
  lizense_prise();
});  

//======================= Выбор на блоке "Подбор Подбор хостинга"  3 блок==================//
function host1(element){
  host1prise=0;
  host1text=':';
  var host1 = document.getElementsByName('host1');
   for(i=0; i < host1.length; i++){
        if (host1[i].checked)
        {
          host1prise=host1[i].value; 

          var vd1=host1[i].closest('label');
          var txt=vd1.innerText;
          host1text=host1text+txt+';';
        }
}  
// alert(lizen1prise)
lizense_prise();
 
 }

 window.host1=host1;

//======================= Очистить все на блоке  "Подбор хостинга снимаем  чек со всех  элементов========================\\

$('#clear_host').on('click', function() {

var host1 = document.getElementsByName('host1');

for(i=0; i < host1.length; i++){
  host1[i].checked=false;
}
host1prise=0;
lizense_prise();
});  


//======================= Выбор на блоке "Регистрация домена"  3 блок==================//
function domen1(element){
  domen1prise=0;
  dome1text=':';

  var domen1 = document.getElementsByName('domen1');
   for(i=0; i < domen1.length; i++){
        if (domen1[i].checked)
        {
          domen1prise=domen1[i].value; 

          var vd1=domen1[i].closest('label');
          var txt=vd1.innerText;
          dome1text=dome1text+txt+';';
        }
}  

lizense_prise();
 
 }

 window.domen1=domen1;

//======================= Очистить все на блоке  "Регистрация домена" снимаем  чек со всех  элементов========================\\

$('#clear_domen').on('click', function() {

var domen1 = document.getElementsByName('domen1');

for(i=0; i < domen1.length; i++){
  domen1[i].checked=false;
}
domen1prise=0;
lizense_prise();
});  

//======================= Вычисление общей цены  на блоке "Лицензирование, хостинг и домен"  3 блок==================//
function lizense_prise(){
  lizenprise=0;
  lizenprise=lizen1prise*1+ssl1prise*1+host1prise*1+domen1prise*1;
 
  saitprise();
 }; 



//======================= "Разрабока сайтов" ---"4 Этап - Функционал и разделы сайта"==================//

    //======================= Выбор на блоке "Разделы сайта"  1 блок==================//
    function rasdel1f(){
      rasdel1prise=0;
      rasdel1text=':';
      var rasdel1 = document.getElementsByName('rasdel1');
       for(i=0; i < rasdel1.length; i++){
            if (rasdel1[i].checked)
            {
              var t=rasdel1[i].value;
              rasdel1prise=rasdel1prise+t*1; 
              var vd1=rasdel1[i].closest('label');
              var txt=vd1.innerText;
              rasdel1text=rasdel1text+txt+';';
            }
    }  
  
    rasdel_prise();
     
     }
    
     window.rasdel1f=rasdel1f;
  
  //======================= Очистить все на блоке  "Разделы сайта" снимаем  чек со всех  элементов========================\\
  
  $('#clear_rasdel').on('click', function() {
   
    var rasdel1 = document.getElementsByName('rasdel1');
  
    for(i=0; i < rasdel1.length; i++){
      rasdel1[i].checked=false;
    }
    rasdel1prise=0;
    rasdel_prise();
  });  

  //======================= Добавить все на блоке  "Разделы сайта" снимаем  чек со всех  элементов========================\\
  
  $('#add_rasdel').on('click', function() {
   
    var rasdel1 = document.getElementsByName('rasdel1');
  
    for(i=0; i < rasdel1.length; i++){
      rasdel1[i].checked=true;
    }
    rasdel1f();
  });  



   //======================= Выбор на блоке "Функциональные модули сайта"  2 блок==================//
   function func1f(){
    func1prise=0;
    modul1text=':';

    var funcl1 = document.getElementsByName('funcl1');
     for(i=0; i < funcl1.length; i++){
          if (funcl1[i].checked)
          {
            var t=funcl1[i].value;
            func1prise=func1prise+t*1; 

            var vd1=funcl1[i].closest('label');
            var txt=vd1.innerText;
            modul1text=modul1text+txt+';';


          }
  }  

  rasdel_prise();
   
   }
  
   window.func1f=func1f;

//======================= Очистить все на блоке  "Функциональные модули сайта" снимаем  чек со всех  элементов========================\\

$('#clear_func').on('click', function() {
 
  var funcl1 = document.getElementsByName('funcl1');

  for(i=0; i < funcl1.length; i++){
    funcl1[i].checked=false;
  }
  func1prise=0;
  rasdel_prise();
});  

//======================= Добавить все на блоке  "Функциональные модули сайта" снимаем  чек со всех  элементов========================\\

$('#add_func').on('click', function() {
 
  var funcl1 = document.getElementsByName('funcl1');

  for(i=0; i < funcl1.length; i++){
    funcl1[i].checked=true;
  }
  func1f();
});  


//======================= Выбор на блоке "Функции интернет-магазина"  3 блок==================//
function mag1f(){
  mag1f1prise=0;
  magas1text=':';
  var mag1 = document.getElementsByName('mag1');
   for(i=0; i < mag1.length; i++){
        if (mag1[i].checked)
        {
          var t=mag1[i].value;
          mag1f1prise=mag1f1prise+t*1; 

          var vd1=mag1[i].closest('label');
          var txt=vd1.innerText;
          magas1text=magas1text+txt+';';



        }
}  

rasdel_prise();
 
 }

 window.mag1f=mag1f;

//======================= Очистить все на блоке  "Функции интернет-магазина снимаем  чек со всех  элементов========================\\

$('#clear_mag').on('click', function() {

var mag1 = document.getElementsByName('mag1');

for(i=0; i < mag1.length; i++){
  mag1[i].checked=false;
}
mag1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Функции интернет-магазина" снимаем  чек со всех  элементов========================\\

$('#add_mag').on('click', function() {

var mag1 = document.getElementsByName('mag1');

for(i=0; i < mag1.length; i++){
  mag1[i].checked=true;
}
mag1f();
});  






//======================= Выбор на блоке "Карточка товара"  4 блок==================//
function card1f(){
  card1prise=0;
  card1text=':';

  var card1 = document.getElementsByName('card1');
   for(i=0; i < card1.length; i++){
        if (card1[i].checked)
        {
          var t=card1[i].value;
          card1prise=card1prise+t*1; 

          var vd1=card1[i].closest('label');
          var txt=vd1.innerText;
          card1text=card1text+txt+';';
        }
}  

rasdel_prise();
 
 }

 window.card1f=card1f;

//======================= Очистить все на блоке  "Карточка товара снимаем  чек со всех  элементов========================\\

$('#clear_card').on('click', function() {

var card1 = document.getElementsByName('card1');

for(i=0; i < card1.length; i++){
  card1[i].checked=false;
}
card1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Карточка товара" снимаем  чек со всех  элементов========================\\

$('#add_card').on('click', function() {

var card1 = document.getElementsByName('card1');

for(i=0; i < card1.length; i++){
  card1[i].checked=true;
}
card1f();
});  


  

  //======================= Выбор на блоке "Оформление заказа"  5 блок==================//
function zakaz1f(){
  zakaz1prise=0;
  zakaz1text=':';

  var zakaz1 = document.getElementsByName('zakaz1');
   for(i=0; i < zakaz1.length; i++){
        if (zakaz1[i].checked)
        {
          var t=zakaz1[i].value;
          zakaz1prise=zakaz1prise+t*1; 

          var vd1=zakaz1[i].closest('label');
          var txt=vd1.innerText;
          zakaz1text=zakaz1text+txt+';';
        }
}  

rasdel_prise();
 
 }

 window.zakaz1f=zakaz1f;

//======================= Очистить все на блоке  "Оформление заказа снимаем  чек со всех  элементов========================\\

$('#clear_zakaz').on('click', function() {

var zakaz1 = document.getElementsByName('zakaz1');

for(i=0; i < zakaz1.length; i++){
  zakaz1[i].checked=false;
}
zakaz1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Оформление заказа" снимаем  чек со всех  элементов========================\\

$('#add_zakaz').on('click', function() {

var zakaz1 = document.getElementsByName('zakaz1');

for(i=0; i < zakaz1.length; i++){
  zakaz1[i].checked=true;
}
zakaz1f();
});   




 //======================= Выбор на блоке "Варианты доставки"  6 блок==================//
 function dost1f(){
  dost1prise=0;
  dostav1text=':';

  var dost1 = document.getElementsByName('dost1');
   for(i=0; i < dost1.length; i++){
        if (dost1[i].checked)
        {
          var t=dost1[i].value;
          dost1prise=dost1prise+t*1;

          var vd1=dost1[i].closest('label');
          var txt=vd1.innerText;
          dostav1text=dostav1text+txt+';';  
          
        }
}  

rasdel_prise();
 
 }

 window.dost1f=dost1f;

//======================= Очистить все на блоке  "Варианты доставки" снимаем  чек со всех  элементов========================\\

$('#clear_dost').on('click', function() {

var dost1 = document.getElementsByName('dost1');

for(i=0; i < dost1.length; i++){
  dost1[i].checked=false;
}
dost1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Варианты доставки" снимаем  чек со всех  элементов========================\\

$('#add_dost').on('click', function() {

var dost1 = document.getElementsByName('dost1');

for(i=0; i < dost1.length; i++){
  dost1[i].checked=true;
}
dost1f();
});  



//======================= Выбор на блоке "Варианты оплаты"  6 блок==================//
function oplata1f(){
  oplata1prise=0;
  oplata1text=':';

  var oplata1 = document.getElementsByName('oplata1');
   for(i=0; i < oplata1.length; i++){
        if (oplata1[i].checked)
        {
          var t=oplata1[i].value;
         
          oplata1prise=oplata1prise+t*1; 
          var vd1=oplata1[i].closest('label');
          var txt=vd1.innerText;
          oplata1text=oplata1text+txt+';';
        }
}  

rasdel_prise();
 
 }

 window.oplata1f=oplata1f;

//======================= Очистить все на блоке  "Варианты оплаты" снимаем  чек со всех  элементов========================\\

$('#clear_oplata').on('click', function() {

var oplata1 = document.getElementsByName('oplata1');

for(i=0; i < oplata1.length; i++){
  oplata1[i].checked=false;
}
oplata1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Варианты оплаты" снимаем  чек со всех  элементов========================\\

$('#add_oplata').on('click', function() {

var oplata1 = document.getElementsByName('oplata1');

for(i=0; i < oplata1.length; i++){
  oplata1[i].checked=true;
}
oplata1f();
});  


//======================= Выбор на блоке "Выгрузки и интеграции "  6 блок==================//
function integr1f(){
  integr1prise=0;
  interg1text=':';
  var integr1 = document.getElementsByName('integr1');
   for(i=0; i < integr1.length; i++){
        if (integr1[i].checked)
        {
          var t=integr1[i].value;
         
          integr1prise=integr1prise+t*1; 

          var vd1=integr1[i].closest('label');
          var txt=vd1.innerText;
          interg1text=interg1text+txt+';';
        }
}  

rasdel_prise();
 
 }

 window.integr1f=integr1f;

//======================= Очистить все на блоке  "Выгрузки и интеграции " снимаем  чек со всех  элементов========================\\

$('#clear_integr').on('click', function() {

var integr1 = document.getElementsByName('integr1');

for(i=0; i < integr1.length; i++){
  integr1[i].checked=false;
}
integr1prise=0;
rasdel_prise();
});  

//======================= Добавить все на блоке  "Выгрузки и интеграции " снимаем  чек со всех  элементов========================\\

$('#add_integr').on('click', function() {

var integr1 = document.getElementsByName('integr1');

for(i=0; i < integr1.length; i++){
  integr1[i].checked=true;
}
integr1f();
});  

//======================= Раздел   "5 Этап - Подготовка технического задания " ========================\\
//======================= Клик (выбор) "Техническое задание подготовлено заказчиком" снимаем  чек со всех других элементов========================\\

$('#tz-1').on('click', function() {
  var tz =document.getElementsByName('tz2');
  
    for(i=0; i < tz.length; i++){
      tz[i].checked = false;
  }

  tz1prise=0;
  rasdel_prise();

}); 


//======================= Выбор на блоке "Выгрузки и интеграции "  6 блок==================//
function tz1f(){
  tz1prise=0;
  texn1text=':';

  var tz2 =document.getElementById('tz-2');
 
  tz2.checked = true; 

  var tz2 = document.getElementsByName('tz2');
   for(i=0; i < tz2.length; i++){
        if (tz2[i].checked)
        {
          tz1prise=tz2[i].value;
         
          var vd1=tz2[i].closest('label');
          var txt=vd1.innerText;
          texn1text=texn1text+txt+';';
        
        }
}  

rasdel_prise();
 
 }

 window.tz1f=tz1f;


//======================= Клик (выбор) "Разработка технического задания" снимаем  чек со всех других элементов========================\\

$('#tz-2').on('click', function() {
  var tz =document.getElementById('tz-21');
 
      tz.checked = true;
      tz1f();

}); 

//======================= Очистить "Разработка технического задания" снимаем  чек со всех других элементов========================\\

$('#clear_tz').on('click', function() {

  var tz1 =document.getElementById('tz-1');
 
      tz1.checked = false;
   var tz2 =document.getElementById('tz-2');
 
      tz2.checked = false; 

      var tz21 = document.getElementsByName('tz2');
   for(i=0; i < tz21.length; i++){
       tz21[i].checked=false;
       
      }   


      tz1prise=0;
  rasdel_prise();

}); 

  //======================= Вычисление общей цены  на блоке "Функционал и разделы сайта"  4 блок==================//
function rasdel_prise(){
  rasdel_funk_prise=0;
  rasdel_funk_prise=rasdel1prise*1+func1prise*1+mag1f1prise*1+card1prise*1+ zakaz1prise*1+dost1prise*1+oplata1prise*1
  +integr1prise*1+tz1prise*1;
  
 
  saitprise();
 }; 


 //======================= Функция вычисления цены по всему блоку  "Разработка сайтов" ========================\\
function saitprise(){
  saiteprise=0;
 
  saiteprise=disprise*1+adaptprise*1+lizenprise*1+rasdel_funk_prise*1;
  $('#prise_sait').text(saiteprise);
  all_prisef();

}  



//======================= "Отдельные виды работ по техподдержке сайтов" ==================//

//======================= "Отдельные виды работ по техподдержке сайтов" 1 БЛОК ==================//
function tehn2f(){
  tehn1prise=0;
  texn2text=':';

  var tehn2 = document.getElementsByName('tehn2');
   for(i=0; i < tehn2.length; i++){
        if (tehn2[i].checked)
        {
          tehn1prise=tehn2[i].value;

          var vd1=tehn2[i].closest('label');
          var txt=vd1.innerText;
          texn2text=texn2text+txt+';';
        }
}  
arbaitprisef();
 
 }

 window.tehn2f=tehn2f;


 //======================= "Наполнение" 2 БЛОК ==================//
function content1f(){
  content1prise=0;
  content2text=':';
 

  var content1 = document.getElementsByName('content1');
   for(i=0; i < content1.length; i++){
        if (content1[i].checked)
        {
          var z=content1[i].value;
          content1prise=content1prise+z*1;

          var vd1=content1[i].closest('label');
          var txt=vd1.innerText;
          content2text=content2text+txt+';';

        }
}  
arbaitprisef();
 
 }

 window.content1f=content1f;

//======================= Очистить все на блоке  "Наполнение" 2 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_content').on('click', function() {

  var content1 = document.getElementsByName('content1');
  for(i=0; i < content1.length; i++){
    content1[i].checked=false;
  }
  content1prise=0;
  arbaitprisef();
  });  
  
  //======================= Добавить все на блоке  "Наполнение" 2 БЛОК снимаем  чек со всех  элементов========================\\
  
  $('#add_content').on('click', function() {
  
    var content1 = document.getElementsByName('content1');
    for(i=0; i < content1.length; i++){
      content1[i].checked=true;
  }
  content1f();
  });  

//======================= "Подготовка контента" 3 БЛОК ==================//
function content2f(){
  content2prise=0;
  content3text=':';

  var content2 = document.getElementsByName('content2');
   for(i=0; i < content2.length; i++){
        if (content2[i].checked)
        {
          var z=content2[i].value;
          content2prise=content2prise+z*1;

          var vd1=content2[i].closest('label');
          var txt=vd1.innerText;
          content3text=content3text+txt+';';
        }
}  
arbaitprisef();
 
 }

 window.content2f=content2f;

//======================= Очистить все на блоке  "Подготовка контента" 3 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_content2').on('click', function() {

  var content2 = document.getElementsByName('content2');
  for(i=0; i < content2.length; i++){
    content2[i].checked=false;
  }
  content2prise=0;
  arbaitprisef();
  });  
  
  //======================= Добавить все на блоке  "Подготовка контента" 3 БЛОК снимаем  чек со всех  элементов========================\\
  
  $('#add_content2').on('click', function() {
  
    var content2 = document.getElementsByName('content2');
    for(i=0; i < content2.length; i++){
      content2[i].checked=true;
  }
  content2f();
  });  


//======================= "Размещение" 4 БЛОК ==================//
function hostd1f(){
  hostd1prise=0;
  host3text=':';
 

  var hostd1 = document.getElementsByName('hostd');
   for(i=0; i < hostd1.length; i++){
        if (hostd1[i].checked)
        {
          var z=hostd1[i].value;
          hostd1prise=hostd1prise+z*1;

          var vd1=hostd1[i].closest('label');
          var txt=vd1.innerText;
          host3text=host3text+txt+';';
        }
}  
arbaitprisef();
 
 }

 window.hostd1f=hostd1f;

//======================= Очистить все на блоке  "Размещение" 4 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_hostd').on('click', function() {

  var hostd1 = document.getElementsByName('hostd');
  for(i=0; i < hostd1.length; i++){
    hostd1[i].checked=false;
  }
  hostd1prise=0;
  arbaitprisef();
  });  


  //======================= "Тарифные планы" 5 БЛОК ==================//
function tarif1f(){
  tarif1prise=0;
  tarif1text=':';
 

  var tarif1 = document.getElementsByName('tarif');
   for(i=0; i < tarif1.length; i++){
        if (tarif1[i].checked)
        {
          var z=tarif1[i].value;
          tarif1prise=tarif1prise+z*1;

          var vd1=tarif1[i].closest('label');
          var txt=vd1.innerText;
          tarif1text= tarif1text+txt+';';
        }
}  
arbaitprisef();
 
 }

 window.tarif1f=tarif1f;

//======================= Очистить все на блоке  "Тарифные планы" 5 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_tarif').on('click', function() {

  var tarif1 = document.getElementsByName('tarif');
   for(i=0; i < tarif1.length; i++){
    tarif1[i].checked=false;
  }
  tarif1prise=0;
  arbaitprisef();
  });  


  //======================= "Консультации специалистов" 6 БЛОК ==================//
function konsul1f(){
  konsul1prise=0;
  konsul1text=':';
 

  var konsul1 = document.getElementsByName('konsul');
   for(i=0; i < konsul1.length; i++){
        if (konsul1[i].checked)
        {
          var z=konsul1[i].value;
          konsul1prise=konsul1prise+z*1;

          var vd1=konsul1[i].closest('label');
          var txt=vd1.innerText;
          konsul1text=konsul1text+txt+';';
        }
}  
arbaitprisef();
 
 }

 window.konsul1f=konsul1f;

//======================= Очистить все на блоке  "Консультации специалистов" 6 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_konsul').on('click', function() {

  var konsul1 = document.getElementsByName('konsul');
  for(i=0; i < konsul1.length; i++){
    konsul1[i].checked=false;
  }
  konsul1prise=0;
  arbaitprisef();
  });   

 //======================= Функция вычисления цены по всему блоку  "Отдельные виды работ по техподдержке сайтов" ========================\\
 function arbaitprisef(){
  arbaitprise=0;
  arbaitprise=tehn1prise*1+ content1prise*1+content2prise*1+hostd1prise*1+tarif1prise*1+konsul1prise*1;
  $('#arbaitprise').text(arbaitprise)
  all_prisef();


}  



 //======================= Блок "SEO оптимизация сайта" 1 БЛОК ==================//

 //======================= "Тарифные планы" 1 БЛОК ==================//
 function tarif3f(){
  tarif3prise=0;
  tarif2text=':';

  var tarif3 = document.getElementsByName('tarif3');
   for(i=0; i < tarif3.length; i++){
        if (tarif3[i].checked)
        {
          var z=tarif3[i].value;
          tarif3prise=tarif3prise+z*1;

          var vd1=tarif3[i].closest('label');
          var txt=vd1.innerText;
          tarif2text=tarif2text+txt+';';
        }
}  
tarif3prisef();
 
 }

 window.tarif3f=tarif3f;

//======================= Очистить все на блоке  "Тарифные планы" 1 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_tarif3').on('click', function() {

  var tarif3 = document.getElementsByName('tarif3');
   for(i=0; i < tarif3.length; i++){
    tarif3[i].checked=false;
  }
  tarif3prise=0;
  tarif3prisef();
  });  

//======================= Функция вычисления цены по всему блоку  "Тарифные планы" ========================\\
function tarif3prisef(){
  tarif_SEO_prise=0;
  tarif_SEO_prise=tarif3prise*1;
  $('#tarifSeo').text(tarif_SEO_prise)
  all_prisef();

}  



 //======================= Блок "Контекстная реклама" 1 БЛОК ==================//

 //======================= "Яндекс.Директ" 1 БЛОК ==================//
 function jnd1f(){
  jnd1prise=0;
  reklama1text=':';
 

  var jnd1 = document.getElementsByName('jnd1');
   for(i=0; i < jnd1.length; i++){
        if (jnd1[i].checked)
        {
          var z=jnd1[i].value;
          jnd1prise=jnd1prise+z*1;

          var vd1=jnd1[i].closest('label');
          var txt=vd1.innerText;
          reklama1text=reklama1text+txt+';';
        }
}  
jnd1prisef();
 
 }

 window.jnd1f=jnd1f;

//======================= Очистить все на блоке  "Яндекс.Директ" 1 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_jnd1').on('click', function() {

  var jnd1 = document.getElementsByName('jnd1');
  for(i=0; i < jnd1.length; i++){
    jnd1[i].checked=false;
  }
  jnd1prise=0;
  jnd1prisef();
  });  

  //======================= "Google AdWords" 2 БЛОК ==================//
 function googl1f(){
  googl1prise=0;
  reklama2text=':';
 

  var googl1 = document.getElementsByName('googl1');
   for(i=0; i < googl1.length; i++){
        if (googl1[i].checked)
        {
          var z=googl1[i].value;
          googl1prise=googl1prise+z*1;

          var vd1=googl1[i].closest('label');
          var txt=vd1.innerText;
          reklama2text=reklama2text+txt+';';


        }
}  
jnd1prisef();
 
 }

 window.googl1f=googl1f;

//======================= Очистить все на блоке  "Google AdWords" 2 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_googl').on('click', function() {

  var googl1 = document.getElementsByName('googl1');
   for(i=0; i < googl1.length; i++){
    googl1[i].checked=false;
  }
  googl1prise=0;
  jnd1prisef();
  });  

//======================= Функция вычисления цены по всему блоку  "Контекстная реклама" ========================\\
function jnd1prisef(){
  reklamacont=0;
  reklamacont=jnd1prise*1+googl1prise*1;
  $('#reklamacont').text(reklamacont);
  all_prisef();


}  


//======================= Битрикс24 - внедрение ==================//

 //======================= "Общие настройки" 1 БЛОК-chek ==================//
 function settings1f(){
  settings1prise=0;
  seting1email=':';

  var settings1 = document.getElementsByName('settings1');
   for(i=0; i < settings1.length; i++){
        if (settings1[i].checked)
        {
          var z=settings1[i].value;
          settings1prise=settings1prise+z*1;

          var vd1=settings1[i].closest('label');
          var txt=vd1.innerText;
          seting1email=seting1email+txt+';';

        }
}  
bitricz1prisef()
 
 }

 window.settings1f=settings1f;

//======================= Очистить все на блоке  "Общие настройки" 1 БЛОК снимаем  чек со всех  элементов========================\\

$('#clear_settings').on('click', function() {

  var settings1 = document.getElementsByName('settings1');
   for(i=0; i < settings1.length; i++){
    settings1[i].checked=false;
  }
  var settings2 = document.getElementsByName('settings2');
   for(i=0; i < settings2.length; i++){
    settings2[i].checked=false;
  }
  document.getElementById('settings2').checked=false;


  settings1prise=0;
  settings2prise=0;
  bitricz1prisef()
  }); 

//======================= "Общие настройки" 2 БЛОК-radio ==================//
  function settings2f(){
    settings2prise=0;
   
  
    var settings2 = document.getElementsByName('settings2');
     for(i=0; i < settings2.length; i++){
          if (settings2[i].checked)
          {
            var z=settings2[i].value;
            settings2prise=settings2prise+z*1;
          }
  }  
  document.getElementById('settings2').checked=true;
  bitricz1prisef()
   
   }
  
   window.settings2f=settings2f;

//======================= "Общие настройки" 2 БЛОК-radio верхняя ==================//
   $('#settings2').on('click', function() {
    document.getElementById('settings2-1').checked=true;
    settings2f();

   }); 
   
   //======================= Выбрать все на блоке  "Общие настройки" 1 БЛОК снимаем  чек со всех  элементов========================\\

$('#add_settings').on('click', function() {

  var settings1 = document.getElementsByName('settings1');
   for(i=0; i < settings1.length; i++){
    settings1[i].checked=true;
  }
  
  document.getElementById('settings2').checked=true;
  document.getElementById('settings2-5').checked=true;

  settings1f();
  settings2f();
  
  }); 



//======================= "Интеграции, автоматизация и продвинутые функции"  ==================//
function integra1f(){
  integra2prise=0;
 

  var integra1 = document.getElementsByName('integra1');
   for(i=0; i < integra1.length; i++){
        if (integra1[i].checked)
        {
          var z=integra1[i].value;
          integra2prise=integra2prise+z*1;
        }
}  

bitricz1prisef();
 
 }

 window.integra1f=integra1f;

 //======================= Выбрать все на блоке  "Интеграции, автоматизация и продвинутые функции" снимаем  чек со всех  элементов========================\\

 $('#add_integra').on('click', function() {

  var integra1 = document.getElementsByName('integra1');
   for(i=0; i < integra1.length; i++){
    integra1[i].checked=true;
  }
   integra1f();
  
  }); 

//======================= Очистить все на блоке  "Интеграции, автоматизация и продвинутые функции"  снимаем  чек со всех  элементов========================\\

$('#clear_integra').on('click', function() {

  var integra1 = document.getElementsByName('integra1');
  for(i=0; i < integra1.length; i++){
    integra1[i].checked=false;
  }
  
  integra2prise=0;
  
  bitricz1prisef()
  }); 


  //======================= ">Контроль входящих заявок и общения с клиентами "  ==================//
function zajv1f(){
  zajv1prise=0;
  zvon1email=':';
 

  var zajv1 = document.getElementsByName('zajv1');
   for(i=0; i < zajv1.length; i++){
        if (zajv1[i].checked)
        {
          var z=zajv1[i].value;
          zajv1prise=zajv1prise+z*1;

          var vd1=zajv1[i].closest('label');
          var txt=vd1.innerText;
          zvon1email=zvon1email+txt+';';

        }
}  

bitricz1prisef();
 
 }

 window.zajv1f=zajv1f;

 //======================= Выбрать все на блоке  ">Контроль входящих заявок и общения с клиентами " снимаем  чек со всех  элементов========================\\

 $('#add_zajv').on('click', function() {

  var zajv1 = document.getElementsByName('zajv1');
  for(i=0; i < zajv1.length; i++){
    zajv1[i].checked=true;
  }
   zajv1f();
    
  }); 

//======================= Очистить все на блоке  ">Контроль входящих заявок и общения с клиентами "  снимаем  чек со всех  элементов========================\\

$('#clear_zajv').on('click', function() {

  var zajv1 = document.getElementsByName('zajv1');
  for(i=0; i < zajv1.length; i++){
    zajv1[i].checked=false;
  }
  
  zajv1prise=0;
  
  bitricz1prisef()
  }); 

   //======================= "Тарифы "  ==================//
function tarifb1f(){
  tarifb1prise=0;
  tarifb11email=':';
 

  var tarifb1 = document.getElementsByName('tarifb1');
   for(i=0; i < tarifb1.length; i++){
        if (tarifb1[i].checked)
        {
          var z=tarifb1[i].value;
          tarifb1prise=tarifb1prise+z*1;

          var vd1=tarifb1[i].closest('label');
          var txt=vd1.innerText;
          tarifb11email=tarifb11email+txt+';';


        }
}  

bitricz1prisef();
 
 }

 window.tarifb1f=tarifb1f;

 //======================= Выбрать все на блоке  "Тарифы " снимаем  чек со всех  элементов========================\\

 $('#add_tarifb').on('click', function() {

  var tarifb1 = document.getElementsByName('tarifb1');
   for(i=0; i < tarifb1.length; i++){
    tarifb1[i].checked=true;
  }
  tarifb1f();
    
  }); 

//======================= Очистить все на блоке  "Тарифы "  снимаем  чек со всех  элементов========================\\

$('#clear_tarifb').on('click', function() {

  var tarifb1 = document.getElementsByName('tarifb1');
  for(i=0; i < tarifb1.length; i++){
    tarifb1[i].checked=false;
  }
  
  tarifb1prise=0;
  
  bitricz1prisef()
  }); 


 //======================= "Битрикс24 - коробка "  ==================//
 function korob1f(){
  korob1prise=0;
  tarifb12email=':';

  var korob1 = document.getElementsByName('korob1');
   for(i=0; i < korob1.length; i++){
        if (korob1[i].checked)
        {
          var z=korob1[i].value;
          korob1prise=korob1prise+z*1;

          var vd1=korob1[i].closest('label');
          var txt=vd1.innerText;
          tarifb12email=tarifb12email+txt+';';
        }
}  

bitricz1prisef();
 
 }

 window.korob1f=korob1f;

 

//======================= Очистить все на блоке  "Битрикс24 - коробка "  снимаем  чек со всех  элементов========================\\

$('#clear_korob').on('click', function() {

  var korob1 = document.getElementsByName('korob1');
  for(i=0; i < korob1.length; i++){
    korob1[i].checked=false;
  }
  
  korob1prise=0;
  
  bitricz1prisef()
  }); 








//======================= Функция вычисления цены по всему блоку  "Битрикс24 - внедрение" ========================\\
function bitricz1prisef(){
  bitricz_price=0;
  bitricz_price=settings1prise*1+settings2prise*1+integra2prise*1+zajv1prise*1+tarifb1prise*1+korob1prise*1;
  $('#bitricz_price').text(bitricz_price);
  all_prisef();

}  

//======================= Функция вычисления  общей цены по всем блокам сайта" ========================\\
function all_prisef(){
  itog_price=0;
  itog_price=bitricz_price*1+reklamacont*1+tarif_SEO_prise*1+saiteprise*1+arbaitprise*1;
  $('#itog_price').text(itog_price);
  document.getElementById('prisemail').value=itog_price;
  document.getElementById('dis1email').value=dis1text;
  document.getElementById('adpt1email').value=adapt1text;
  document.getElementById('bitr1email').value=bitr1text; 
  document.getElementById('ssl1email').value=ssl1text; 
  document.getElementById('host1email').value=host1text; 
  document.getElementById('dome1email').value=dome1text;
  document.getElementById('rasdel1email').value=rasdel1text;
  document.getElementById('modul1email').value= modul1text;
  document.getElementById('magas1email').value= magas1text;
  document.getElementById('card1email').value=card1text;
  document.getElementById('zakaz1email').value=zakaz1text;
  document.getElementById('dostav1email').value=dostav1text;
  document.getElementById('oplata1email').value=oplata1text;
  document.getElementById('interg1email').value= interg1text;
  document.getElementById('texn1email').value=texn1text;
  document.getElementById('texn2email').value=texn2text;
  document.getElementById('content2email').value=content2text;
  document.getElementById('content3email').value=content3text;
  document.getElementById('host3email').value=host3text;
  document.getElementById('tarif1email').value=tarif1text;
  document.getElementById('konsul1email').value=konsul1text;
  document.getElementById('tarif2email').value=tarif2text;
  document.getElementById('reklama1email').value=reklama1text; 
  document.getElementById('reklama2email').value=reklama2text; 
  document.getElementById('seting1email').value=seting1email;
  document.getElementById('zvon1email').value=zvon1email;
  document.getElementById('tarifb11email').value=tarifb11email;
  document.getElementById('tarifb12email').value=tarifb12email;

  
 
 
 
 

 

}  







});





