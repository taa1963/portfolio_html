var NameKant, Zmaterial, Namematerial,NameKrepeg,ZKrepeg,NameOsnova,ZOsnova,Sall ;

NameKant='';
Zmaterial=0;
Namematerial='';
NameKrepeg='';
ZKrepeg=0;
NameOsnova='';
ZOsnova=0;
Sall=0;

$(document).ready(function() {


//===== Вычитываем цвет окантовки при выюоре в блоке   =====//

function okantf(element)
{
  NameKant= $(element).attr('data-name');
 
}
window.okantf=okantf;

var div = document.querySelector('.popblcockcalc');
  
  div.addEventListener('wheel', function(e) {
    e.stopPropagation();
    e.preventDefault();
  });


//===== Нажать "Далее на первом блоке "Выберите цвет окантовки"."=======//
$('#but_block1').on("click",function(){
 if (NameKant==''){
  alert("Выбор не сделан")
 }
 else{
  $('#calc_block1').addClass('calc_block_close');
  $('#calc_block2').addClass('calc_block_active');
  $('#calc_block2').removeClass('calc_block_close');
 }
});



//===== Нажать "Назад на втором блоке "Выберите тип  материала"."=======//
$('#but_block2_1').on("click",function(){
 
   $('#calc_block1').removeClass('calc_block_close');
   $('#calc_block2').addClass('calc_block_close');  
 });


 //===== Изменено значение в выпадающем списке "Выберите материал"=======//
$('#material').on("change",function(){
  Zmaterial=document.getElementById('material').value;
  var priceblm1 = $('#material');
 
  Namematerial=priceblm1.find('option:selected').text(); 

}); 

//===== Нажать "Дальше на втором блоке "Выберите тип  материала"."=======//
$('#but_block2_3').on("click",function(){
 
  $('#calc_block2').addClass('calc_block_close');
  $('#calc_block3').addClass('calc_block_active');  
  $('#calc_block3').removeClass('calc_block_close');
  Zmaterial=document.getElementById('material').value;
  var priceblm1 = $('#material');
 
  Namematerial=priceblm1.find('option:selected').text();
});




//===== Вычитываем тип  крепления при выюоре в блоке   =====//

function krepegf(element)
{
  NameKrepeg= $(element).attr('data-name');
  ZKrepeg=$(element).attr('data-prise');  
}
window.krepegf=krepegf;


//===== Нажать "Назад на третьем блоке "Выберите тип  крепления "=======//
$('#but_block3_2').on("click",function(){
 
  $('#calc_block2').removeClass('calc_block_close');
  $('#calc_block3').addClass('calc_block_close');  
});

//===== Нажать "Далее на на третьем блоке "Выберите тип  крепления"=======//
$('#but_block3_4').on("click",function(){
  if (NameKrepeg==''){
   alert("Выбор не сделан")
  }
  else{
    $('#calc_block3').addClass('calc_block_close');
    $('#calc_block4').addClass('calc_block_active'); 
    $('#calc_block4').removeClass('calc_block_close');
  }
 });

 //===== Вычитываем материал на который крепиться изделие при выюоре в блоке   =====//

function osnovaf(element)
{
  NameOsnova= $(element).attr('data-name');
  ZOsnova=$(element).attr('data-prise');
 // alert(ZOsnova)
 
}
window.osnovaf=osnovaf;

//===== Нажать "Назад на 4 блоке "Выберите материал на который крепиться изделие "=======//
$('#but_block4_3').on("click",function(){
 
  $('#calc_block3').removeClass('calc_block_close');
  $('#calc_block4').addClass('calc_block_close');  
});

//===== Нажать "Далее на 4 блоке "Выберите материал на который крепиться изделие"=======//
$('#but_block4_5').on("click",function(){
  if (NameOsnova==''){
   alert("Выбор не сделан")
  }
  else{
    $('#calc_block4').addClass('calc_block_close');
    $('#calc_block5').addClass('calc_block_active'); 
    $('#calc_block5').removeClass('calc_block_close');
  }
 });

 //===== Нажать "Назад на 5 блоке "Размеры окна (окон) "=======//
$('#but_block5_4').on("click",function(){
 
  $('#calc_block4').removeClass('calc_block_close');
  $('#calc_block5').addClass('calc_block_close');  
});



//===== закрываем ввод в поля "Длинна"  и "Ширина" букв и отрицательных значений   =====//

$('.breadth,.lang').on('input', function() {
  this.value = this.value.replace(/[^0-9\.]/g, ''); 
 
});



// ======Только одна точка или одна запятаяв поля "Длинна"  и "Ширина" =====//

$('.breadth,.lang').keypress(function(e)  {
  if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
      return !(/[.,]/.test(e.key));
   } 
});


$('.Oknoadd').on("click",function(){
  var newSection = $('<div class="calc_okno"></div>');
  newSection.html(
      '<p>Длинна  <input type="number" class="lang"  value="0" min="0" step="1" oninput="langf(this)" >    см</p>\n'+
      '<p>Ширина<input type="number" class="breadth"  value="0" min="0" step="1" oninput="langf(this)" >   см</p>\n'+ 
      '<button class="Oknoadd" onclick="addblock()" > Добавить еще  окно   </button>'); 
      // '<button class="Oknodel" onclick="delblock(this)"> Удалить текущее окно   </button>'); 
      $('#calc_oknos').append(newSection);

});

function addblock(){
  var newSection = $('<div class="calc_okno"></div>');
  newSection.html(
      '<p>Длинна  <input type="number" class="lang"  value="0" min="0" step="1" oninput="langf(this)"  >    см</p>\n'+
      '<p>Ширина<input type="number" class="breadth"  value="0" min="0" step="1" oninput="langf(this)" >   см</p>\n'+ 
      '<button class="Oknoadd" onclick="addblock()" > Добавить еще  окно   </button>'); 
      // '<button class="Oknodel" onclick="delblock(this)" > Удалить текущее окно   </button>'); 
      $('#calc_oknos').append(newSection);

};
window.addblock = addblock;



function langf(element) {
 
 
   var n=document.getElementsByClassName('calc_okno').length;

   var blocks=document.getElementsByClassName('calc_okno');
   Sall=0;

   for (var i = 0; i < n; i++)  {

    var block1=blocks[i];
    //$(block1)
    var langel=$(block1).find('.lang');
    var langelv=langel.val();
  
    var breadthel=$(block1).find('.breadth');
    var breadthv=breadthel.val();
  
    Sall=Sall+langelv*breadthv;
    // console.log(langelv);
    // console.log(breadthv);
    // console.log(Sall);
    // console.log('--------------------');
  
  }

  


}  
window.langf = langf;


//===== Нажать "Далее на 5 блоке "Размеры окна (окон)"=======//
$('#but_block5_6').on("click",function(){
  
    $('#calc_block5').addClass('calc_block_close');
    $('#calc_block6').addClass('calc_block_active'); 
    $('#calc_block6').removeClass('calc_block_close');
  
 });


// function delblock(element) {
//   var target = event.target;
//   var sss= $(element).parents('.calc_okno');
//  sss.remove();
 
//   };		 
//   window.delblock = delblock;

$('#but_block6_1').on("click",function(){

  var namev=document.getElementById('name').value;
  var telefonv=document.getElementById('telefon').value;

  if ((namev !=='')&&(telefonv !=='')){
    $('.submit').addClass('submit_active');
    $('#but_block6_1').addClass('but_close');

    


  $('#first2').addClass('first2_active');
  var PriseAll =(Zmaterial*1+ZKrepeg*1+ZOsnova*1)/(Sall/10000);
  PriseAll=PriseAll.toFixed(2);

  var Zakasmailv=''
   Zakasmailv='Цвет окантовки:'+' '+NameKant+ ';'+"\n";
   Zakasmailv=Zakasmailv+'Tип материала:'+' '+Namematerial+ ';'+"\n" ;
   Zakasmailv=Zakasmailv+'тип крепления:'+' '+NameKrepeg+ ';'+"\n" ;
   Zakasmailv=Zakasmailv+'материал на который крепиться изделие:'+' '+NameOsnova+ ';'+"\n" ;
   Zakasmailv=Zakasmailv+'Стоимость:'+' '+PriseAll+ 'руб'+';'+"\n" ; 
   $('#zakas').text(Zakasmailv);
  }

  else
  {
    alert("Не заполнены все параметры"  
    )
  }
  

});












});

