



$(document).ready(function() {





//===== закрываем ввод в поля "Укажите общее количество"  и "Укажите количество окон" букв и отрицательных значений   =====//

$('#allm,#Nokon').on('input', function() {
  this.value = this.value.replace(/[^0-9\.]/g, ''); 
});



// ======Только одна точка или одна запятаяв поля "Укажите общее количество"  и "Укажите количество окон" =====//

$('#allm,#Nokon').keypress(function(e)  {
  if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
      return !(/[.,]/.test(e.key));
   } 
});



//================== Функция заполнения выпадающего списка "Выберите материал"====================//
var newSelSek = $('#material');

     for (var i = 0; i < tupematerial.length; i++)  {
        $('<option class="standart_opt" value="' + tupematerial[i].val + '">' + tupematerial[i].name + '</option>').appendTo(newSelSek);
     }

    //================== Функция заполнения выпадающего списка "Выберите окантовку"====================//
var newSelSek = $('#kant');

for (var i = 0; i < tupekant.length; i++)  {
   $('<option class="standart_opt" value="' + tupekant[i].val + '">' + tupekant[i].name + '</option>').appendTo(newSelSek);
} 
   //================== Функция заполнения выпадающего списка "Выберите крепление"====================//
   var newSelSek = $('#krepeg');

   for (var i = 0; i < tupekrepeg.length; i++)  {
      $('<option class="standart_opt" value="' + tupekrepeg[i].val + '">' + tupekrepeg[i].name + '</option>').appendTo(newSelSek);
   } 


//===== Изменено значение в выпадающем списке "Выберите материал"=======//
$('#material').on("change",function(){
  prise();
});  

//===== Изменено значение в выпадающем списке "Выберите окантовку"=======//
$('#kant').on("change",function(){
  prise();
}); 

//===== Изменено значение в выпадающем списке "Выберите крепление"=======//
$('#krepeg').on("change",function(){
  prise();
}); 


//===== Изменено значение в  "Укажите общее количество кв.м."=======//
$('#allm').on("input",function(){
  prise();
}); 

//===== Изменено значение в  "Укажите количество окон."=======//
$('#Nokon').on("input",function(){
  prise();
});



function prise(){
 var materialv=document.getElementById('material').value;
 materialv=materialv*1;
 var kantv=document.getElementById('kant').value;
 kantv=kantv*1;
 var krepegv=document.getElementById('krepeg').value;
 krepegv=krepegv*1;

 var Nmv=document.getElementById('allm').value;
 if (Nmv==''){
  Nmv=0;
 }
 Nmv=Nmv*1;
 
 var PriseAll=materialv*kantv*krepegv*Nmv;
 $('#itog').text(PriseAll);

 var priceblm1 = $('#material');
   var materialmail=priceblm1.find('option:selected').text();

   var priceblm2 = $('#kant');
   var kantmail=priceblm2.find('option:selected').text(); 

   var priceblm3 = $('#krepeg');
   var krepegmail=priceblm3.find('option:selected').text(); 

   var allmail= Nmv;

   var Nokonmail= document.getElementById('Nokon').value;

   var Zakasmailv=''

   Zakasmailv='Материал:'+' '+materialmail+ ';'+"\n";

   Zakasmailv=Zakasmailv+'Oкантовкa:'+' '+kantmail+ ';'+"\n" ;

   Zakasmailv=Zakasmailv+'крепление:'+' '+krepegmail+ ';'+"\n" ;

   Zakasmailv=Zakasmailv+'общее количество кв.м.:'+' '+allmail+ ';'+"\n" ;

   Zakasmailv=Zakasmailv+'количество окон:'+' '+Nokonmail+ ';'+"\n" ;

   Zakasmailv=Zakasmailv+'Стоимость:'+' '+PriseAll+ 'руб'+';'+"\n" ;
   
 
   $('#zakas').text(Zakasmailv);

}










//===== Нажатие кнопки Отправить заявку=======//
$('#btn3').on("click",function(){
  $('.mailform').addClass('mailformadd');

  var textArea = document.getElementById('metismail');

  var list = document.querySelectorAll('.itog_all');
  textArea.value='';
let mailval;
 let mailob = document.getElementsByName('radiomail');
 for (var i = 0; i < mailob.length; i++) {
     if (mailob[i].type == "radio" && mailob[i].checked) {
      mailval= mailob[i].value;
     }
    }
   

    if (mailval==1){
      for (var i = 0; i < list.length; i++) {

        var text = list[i].innerText;
        textArea.value += text + '\n';
      }
    }
    if (mailval==2){
      textArea.value += 'Нужна консультация. Свяжитесь сначала со мной. ';
    }
})
//===========================      ==========================//
function mailvf(element){
  var textArea = document.getElementById('metismail');

  var list = document.querySelectorAll('.itog_all');
  textArea.value='';
let mailval;
 let mailob = document.getElementsByName('radiomail');
 for (var i = 0; i < mailob.length; i++) {
     if (mailob[i].type == "radio" && mailob[i].checked) {
      mailval= mailob[i].value;
     }
    }
   

    if (mailval==1){
      for (var i = 0; i < list.length; i++) {

        var text = list[i].innerText;
        textArea.value += text + '\n';
      }
    }
    if (mailval==2){
      textArea.value += 'Нужна консультация. Свяжитесь сначала со мной. ';
    }

}
  
window.mailvf=mailvf;


});

