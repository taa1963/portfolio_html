


$(document).ready(function() {
var typemetisv;


//===== добавление нового блока (строки) выбора метизов   =====//

function ADDST() {
    var newSection = $('<tr class="metis_str" "></tr>');
    newSection.html(
        '<td class="table_cell"> <select class="cell_select typemetis" onchange="typemetisf(this)"></td>\n+'+
        '<td class="table_cell"> <select class="cell_select standart" onchange="standartf(this)"></td>\n+'+ 
        '<td class="table_cell"> <select class="cell_select diametr" onchange="diametrf(this)"></td>\n+'+
        '<td class="table_cell"> <select class="cell_select long" ></td>\n+'+   
        '<td class="table_cell"> <select class="cell_select coating" "></td>\n+'+ 
        '<td class="table_cell"> <select class="cell_select strength" "></td>\n+'+ 
        '<td class="table_cell"> <input type="text" class="cell_select amount" value="1000" placeholder="1000" onkeyup="amountf(this)"></td>\n+'+ 
        '<td class="table_cell"> <input type="text" class="cell_select weight" readonly ></td>\n+'+  
        '<td class="table_cell"><a class="delblock"  onclick="delblock(this)"></a></td>\n+'+ 
        '<td class="table_cell"><a class="addblock"  onclick="addblock()"></a></td>'); 
        $('#table_metis').append(newSection);

        //td class="table_cell"><a class="delblock"  onclick="delblock(this)"></a></td>');

    var newSelSek = $(newSection).find('.typemetis');

     for (var i = 0; i < tupemetis.length; i++)  {
        $('<option class="standart_opt" value="' + tupemetis[i].val + '">' + tupemetis[i].name + '</option>').appendTo(newSelSek);

     }
     visiblebtn();
}

ADDST();

//============ Функция обработки кнопки "+" вызываем добавления нового блока выбора метизов =================//
   function addblock(){ 
    ADDST();
    visiblebtn();
   }
   window.addblock=addblock;


  //============ Функция обработки кнопки "Х" выполняем удаление текущего блока =================// 

   function delblock(element) {
    var sss= $(element).parents('.metis_str');
   sss.remove();
   visiblebtn();
    };		 
    window.delblock = delblock;



 //============ Функция скрытия/открытия отображения кнопок добавить-удалить =================// 

 function visiblebtn() {
    var block=document.getElementsByClassName('metis_str');
    var n=block.length;
   
    for (var i = 0; i < n; i++)  {
      var blockt=block[i];
     if (i==0){
     var delbl =$(blockt).find('.delblock');
     delbl.addClass('closeblock');
    }

    if (n>=2){
      var addbl =$(blockt).find('.addblock');
     addbl.addClass('closeblock');
    }
    if (i==(n-1)){
      var addbl =$(blockt).find('.addblock');
     addbl.removeClass('closeblock');
    }
   }
 }

//===== Изменение значения в выпадающем списке "Тип метизов "   =====//
 function typemetisf(element){

       //========= Выбрали тип "Гайка" заполняем остальные выпадающие списки    =========================//
    var tupemetis=element.value;
    typemetisv=element.value;

    var tp=typemetisv+'standart';
    tp=eval(tp);
    var nn=tp.length;
    alert(nn)


    if (tupemetis=='gaika'){

      var parentbl=$(element).parents('.metis_str');

       //====удаляем предыдущий список в селекте "Стандарт"=========///
      var newSelSek = $(parentbl).find('.standart');
      var sss= $(newSelSek).parents('.standart_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Стандарт" новыми значениями=========///
      for (var i = 0; i < gaikastandart.length; i++)  {
         $('<option value="' + gaikastandart[i].val + '">' + gaikastandart[i].name + '</option>').appendTo(newSelSek);
 
      }

    

      //====удаляем предыдущий список в селекте "Тип покрытия"=========///
      var newSelSek2 = $(parentbl).find('.coating');
      var sss= $(newSelSek2).find('.coating_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
      for (var i = 0; i < gaikastandart[i].coating.length; i++)  {
         $('<option class="coating_opt" value="' + gaikastandart[i].coating[i].typecoating + '">' + gaikastandart[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
 
      }

       //====удаляем предыдущий список в селекте "Класс прочности"=========///
       var newSelSek3 = $(parentbl).find('.strength');
       var sss= $(newSelSek3).find('.strength_opt');
       sss.remove();
         
       //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
       for (var i = 0; i < gaikastandart[i].coating.length; i++)  {
          $('<option class="strength_opt" value="' + gaikastandart[i].coating[i].klass + '">' + gaikastandart[i].coating[i].klass + '</option>').appendTo(newSelSek3);
  
       
      }
       //====удаляем предыдущий список в селекте "Диаметр "=========///
       var newSelSek4 = $(parentbl).find('.diametr');
       var sss= $(newSelSek4).find('.diametr_opt');
       sss.remove();
         
       //====заполняем  список в селекте "Диаметр " новыми значениями=========///
       var nn=gaikastandart[0].diamerts.length;
      // alert(nn)
       for (var i = 0; i < gaikastandart[0].diamerts.length; i++)  {
          $('<option class="diametr_opt" value="' + gaikastandart[0].diamerts[i].weight1 + '">' + gaikastandart[0].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
  
       
      }







      
    }
    price(element);
 }
 window.typemetisf = typemetisf;


//===== Изменение значения в выпадающем списке "Стандарт"   =====//
function standartf(element){

 //========= Выбрали тип "Гайка" и изменили "Стандарт" заполняем остальные выпадающие списки    =========================//
 var standartv=element.value;
 var parentbl=$(element).parents('.metis_str');

 var nn2=gaikastandart.findIndex(i => i.name ==standartv);

  //====удаляем предыдущий список в селекте "Диаметр "=========///
  var newSelSek4 = $(parentbl).find('.diametr');
  var sss= $(newSelSek4).find('.diametr_opt');
  sss.remove();
    
  //====заполняем  список в селекте "Диаметр " новыми значениями=========///
  var nn=gaikastandart[nn2].diamerts.length;
  for (var i = 0; i < gaikastandart[nn2].diamerts.length; i++)  {
     $('<option class="diametr_opt" value="' + gaikastandart[nn2].diamerts[i].weight1 + '">' + gaikastandart[nn2].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
  }

  
      //====удаляем предыдущий список в селекте "Тип покрытия"=========///
      var newSelSek2 = $(parentbl).find('.coating');
      var sss= $(newSelSek2).find('.coating_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
      for (var i = 0; i < gaikastandart[nn2].coating.length; i++)  {
         $('<option class="coating_opt" value="' + gaikastandart[nn2].coating[i].typecoating + '">' + gaikastandart[nn2].coating[i].typecoating + '</option>').appendTo(newSelSek2);
         // var zz=gaikastandart[nn2].coating[i].typecoating;
         // alert(zz)
      }

       //====удаляем предыдущий список в селекте "Класс прочности"=========///
       var newSelSek3 = $(parentbl).find('.strength');
       var sss= $(newSelSek3).find('.strength_opt');
       sss.remove();
         
       //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
       for (var i = 0; i < gaikastandart[nn2].coating.length; i++)  {
          $('<option class="strength_opt" value="' + gaikastandart[nn2].coating[i].klass + '">' + gaikastandart[nn2].coating[i].klass + '</option>').appendTo(newSelSek3);
  
       
      }


      price(element);


}   

window.standartf = standartf;





//============ Функция ввода количества изделий =================//

  function amountf(element){

   $(element).val($(element).val().replace(/[A-Za-zА-Яа-яЁё.]/, ''));

   price(element);

  }
  window.amountf = amountf;


  //============ Функция ввода количества изделий =================//

  function diametrf(element){
      price(element);

  }
  window.diametrf = diametrf;





  //============ Функция вычисленияя ВЕСА  изделий =================//
  function price(element){
  // alert(111)
   var priceall=0;
   //console.log(element)
   var parentbl=$(element).parents('.metis_str');
   

  // console.log(parentbl)

   var pricebl1 = $(parentbl).find('.diametr');
   var price1=pricebl1.val();

  // console.log($(parentbl).find('.diametr'))
   var callbl1 = $(parentbl).find('.amount');
   var call1=callbl1.val();

  // console.log(call1)
  // console.log(ccc2)
  // console.log("================================")


   priceall=price1*call1;

   //block.find('.sek_v').val(ZsekST);

   $(parentbl).find('.weight').val(priceall);

  }



 // $('#laminb').change(function () {
   //         var laminb=$('#laminb option:selected').text();
   //         $('#lamin_obl').text(laminb+';');
   //         Zena();
   //     });




//     $('#Llist').keyup(function(e){
//         Lbloknot=document.getElementById('Llist').value;
//         if(Lbloknot<0){
//             Lbloknot=0;
//         }
//         document.getElementById('Llist').value=Lbloknot;

//         Hbloknot=document.getElementById('Hlist').value;
//         if(Hbloknot<0){
//             Hbloknot=0;
//         }
//         document.getElementById('Hlist').value=Hbloknot;

//         $('#Lbl').text(Lbloknot);
//         var Lbl2=Lbloknot*2;
//         $('#Lb12').text(Lbl2);
//         $('#Hbl').text(Hbloknot);
//         $('#Lb2').text(Lbloknot);
//         var Lbl2=Lbloknot*2;
//         $('#Lb22').text(Lbl2);
//         $('#Hb2').text(Hbloknot);
//         Zena();
//     });



//     //========================= Выбор плотности бумаги ОБЛОЖКА   ===========================///
//     $('#plb').change(function () {
//         var pl_otbl=document.getElementById('plb').value;
//         $('#pl_otbl').text(pl_otbl+';');
//         Zena();
//     });




});