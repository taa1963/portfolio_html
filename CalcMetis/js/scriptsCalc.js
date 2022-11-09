var  typemetisv;


$(document).ready(function() {
var typemetisv;


//===== добавление нового блока (строки) выбора метизов   =====//

function ADDST() {
    var newSection = $('<tr class="metis_str" "></tr>');
    newSection.html(
        '<td class="table_cell"> <select class="cell_select typemetis" onchange="typemetisf(this)"></td>\n+'+
        '<td class="table_cell"> <select class="cell_select standart" onchange="standartf(this)"></td>\n+'+ 
        '<td class="table_cell"> <select class="cell_select diametr" onchange="diametrf(this)"></td>\n+'+
        '<td class="table_cell"> <select class="cell_select long" onchange="longf(this)"  ></td>\n+'+   
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
   price();
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

       
    var tupemetis=element.value;
    typemetisv=element.value;

    if ((tupemetis=='gaika')||(tupemetis=='shaiba')){
    var tp=typemetisv+'standart';
    var typemetisv2=eval(tp);
    }

    if (tupemetis=='shpilka'){
      tp=typemetisv+'standart1000';
      typemetisv2=eval(tp);
    }
    if (tupemetis=='bolt'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }
    if (tupemetis=='wint'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='anker'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }
    if (tupemetis=='dubel'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }
    if (tupemetis=='rondol'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='zaklepka'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='takelag'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='samores'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='provoloka'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='gwosdi'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='tros'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='zepi'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='abrasiv'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='kregeq'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }

    if (tupemetis=='homut'){
      tp=typemetisv+'standart';
      typemetisv2=eval(tp);
    }



        
      var parentbl=$(element).parents('.metis_str');
 /// ======================= заполняем первоначальные списки для типа метизов "Шпилька"==================//
      if (tupemetis=='shpilka'){
           //====удаляем предыдущий список в селекте "Стандарт"=========///
      var newSelSek = $(parentbl).find('.standart');
      var sss= $(newSelSek).find('.standart_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Стандарт" новыми значениями=========///
      for (var i = 0; i < typemetisv2.length; i++)  {
         $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
       }
      //====удаляем предыдущий список в селекте "Тип покрытия"=========///
      var newSelSek2 = $(parentbl).find('.coating');
      var sss= $(newSelSek2).find('.coating_opt');
      sss.remove();      
      //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
      console.log(typemetisv2[0].coating.length)
      for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
          $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
      }
      //====удаляем предыдущий список в селекте "Класс прочности"=========///
       var newSelSek3 = $(parentbl).find('.strength');
       var sss= $(newSelSek3).find('.strength_opt');
       sss.remove();
      //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
       for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
          $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
      }
       //====удаляем предыдущий список в селекте "Диаметр "=========///
       var newSelSek4 = $(parentbl).find('.diametr');
       var sss= $(newSelSek4).find('.diametr_opt');
       sss.remove();
      //====заполняем  список в селекте "Диаметр " новыми значениями=========///
       var nn=typemetisv2[0].diamerts.length;
      // alert(nn)
       for (var i = 0; i < typemetisv2[0].diamerts.length; i++)  {
          $('<option class="diametr_opt" value="' + typemetisv2[0].diamerts[i].weight1 + '">' + typemetisv2[0].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
      }
      //====удаляем предыдущий список в селекте "Длина "=========///
      var newSelSek = $(parentbl).find('.long');
      var sss= $(newSelSek).find('.long_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Длина " новыми значениями=========///
      for (var i = 0; i < shpilkalong.length; i++)  {
         $('<option class="long_opt" value="' + shpilkalong[i].value + '">' + shpilkalong[i].name + '</option>').appendTo(newSelSek);
      }
   }


     /// ======================= заполняем первоначальные списки для типа метизов "Гайка" и "Шайба"==================//
      if ((tupemetis=='gaika')||(tupemetis=='shaiba')){
       //====удаляем предыдущий список в селекте "Стандарт"=========///
      var newSelSek = $(parentbl).find('.standart');
      var sss= $(newSelSek).find('.standart_opt');
      sss.remove();
     //====заполняем  список в селекте "Стандарт" новыми значениями=========///
      for (var i = 0; i < typemetisv2.length; i++)  {
         $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
      }
      //====удаляем предыдущий список в селекте "Тип покрытия"=========///
      var newSelSek2 = $(parentbl).find('.coating');
      var sss= $(newSelSek2).find('.coating_opt');
      sss.remove();      
      //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
      for (var i = 0; i < typemetisv2[i].coating.length; i++)  {
          $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
      }
      //====удаляем предыдущий список в селекте "Класс прочности"=========///
       var newSelSek3 = $(parentbl).find('.strength');
       var sss= $(newSelSek3).find('.strength_opt');
       sss.remove();
      //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
       for (var i = 0; i < typemetisv2[i].coating.length; i++)  {
          $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
      }
       //====удаляем предыдущий список в селекте "Диаметр "=========///
       var newSelSek4 = $(parentbl).find('.diametr');
       var sss= $(newSelSek4).find('.diametr_opt');
       sss.remove();
      //====заполняем  список в селекте "Диаметр " новыми значениями=========///
       var nn=typemetisv2[0].diamerts.length;
      // alert(nn)
       for (var i = 0; i < typemetisv2[0].diamerts.length; i++)  {
          $('<option class="diametr_opt" value="' + typemetisv2[0].diamerts[i].weight1 + '">' + typemetisv2[0].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
      }
      //====удаляем предыдущий список в селекте "Длина "=========///
      var newSelSek = $(parentbl).find('.long');
      var sss= $(newSelSek).find('.long_opt');
      sss.remove();
        
      //====заполняем  список в селекте "Длина " новыми значениями=========///
      for (var i = 0; i < typemetisv2[i].length; i++)  {
         $('<option class="long_opt" value="' + typemetisv2[i].diamerts[i].leng + '">' + typemetisv2[i].diamerts[i].leng + '</option>').appendTo(newSelSek);
      }


   }

   /// ======================= заполняем первоначальные списки для типа метизов "Болт"==================//
   if (tupemetis=='bolt'){
      //====удаляем предыдущий список в селекте "Стандарт"=========///
 var newSelSek = $(parentbl).find('.standart');
 var sss= $(newSelSek).find('.standart_opt');
 sss.remove();
   
 //====заполняем  список в селекте "Стандарт" новыми значениями=========///
 for (var i = 0; i < typemetisv2.length; i++)  {
  // console.log(typemetisv2[i].name)

    $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
  }
 //====удаляем предыдущий список в селекте "Тип покрытия"=========///
 var newSelSek2 = $(parentbl).find('.coating');
 var sss= $(newSelSek2).find('.coating_opt');
 sss.remove();      
 //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
 for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
     $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
 }
 //====удаляем предыдущий список в селекте "Класс прочности"=========///
  var newSelSek3 = $(parentbl).find('.strength');
  var sss= $(newSelSek3).find('.strength_opt');
  sss.remove();
 //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
  for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
     $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
 }
  //====удаляем предыдущий список в селекте "Диаметр "=========///
  var newSelSek4 = $(parentbl).find('.diametr');
  var sss= $(newSelSek4).find('.diametr_opt');
  sss.remove();
 //====заполняем  список в селекте "Диаметр " новыми значениями=========///
 // var nn=typemetisv2[0].diamerts.length;
 // alert(nn)
  for (var i = 0; i <boltdiametr_7805_10.length; i++)  {
     $('<option class="diametr_opt" value="' + boltdiametr_7805_10[i].value + '">' + boltdiametr_7805_10[i].name + '</option>').appendTo(newSelSek4);
 }
 //====удаляем предыдущий список в селекте "Длина "=========///
 var newSelSek = $(parentbl).find('.long');
 var sss= $(newSelSek).find('.long_opt');
 sss.remove();
   
 //====заполняем  список в селекте "Длина " новыми значениями=========///
 for (var i = 0; i < boltlong7805.length; i++)  {
    $('<option class="long_opt" value="' + boltlong7805[i].value + '">' + boltlong7805[i].name + '</option>').appendTo(newSelSek);
 }
}


 /// ======================= заполняем первоначальные списки для типа метизов "ВИНТЫ"==================//
 if (tupemetis=='wint'){
   //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

 $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <wintdiametr_912_5.length; i++)  {
  $('<option class="diametr_opt" value="' + wintdiametr_912_5[i].value + '">' + wintdiametr_912_5[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < wintlong912.length; i++)  {
 $('<option class="long_opt" value="' + wintlong912[i].value + '">' + wintlong912[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "АНКЕРА"==================//
if (tupemetis=='anker'){
   //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

 $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <ankerdiametr_HNM_8.length; i++)  {
  $('<option class="diametr_opt" value="' + ankerdiametr_HNM_8[i].value + '">' + ankerdiametr_HNM_8[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < ankerlongHNM.length; i++)  {
 $('<option class="long_opt" value="' + ankerlongHNM[i].value + '">' + ankerlongHNM[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ДЮБЕЛЬ"==================//
if (tupemetis=='dubel'){
   //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

 $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <dubeldiametr_PA_32.length; i++)  {
  $('<option class="diametr_opt" value="' + dubeldiametr_PA_32[i].value + '">' + dubeldiametr_PA_32[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < dubellongPA.length; i++)  {
 $('<option class="long_opt" value="' + dubellongPA[i].value + '">' + dubellongPA[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "РОНДОЛ"==================//
if (tupemetis=='rondol'){
   //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

 $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <rondoldiametr_IZO_10.length; i++)  {
  $('<option class="diametr_opt" value="' + rondoldiametr_IZO_10[i].value + '">' + rondoldiametr_IZO_10[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < rondollongIZO.length; i++)  {
 $('<option class="long_opt" value="' + rondollongIZO[i].value + '">' + rondollongIZO[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ЗАКЛЕПКА"==================//
if (tupemetis=='zaklepka'){
   //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

 $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
  $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <zaklepkadiametr_ZK_32.length; i++)  {
  $('<option class="diametr_opt" value="' + zaklepkadiametr_ZK_32[i].value + '">' + zaklepkadiametr_ZK_32[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < zaklepkalongZK.length; i++)  {
 $('<option class="long_opt" value="' + zaklepkalongZK[i].value + '">' + zaklepkalongZK[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ТАКЕЛАЖ"==================//
if (tupemetis=='takelag'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <takelagdiametr_741.length; i++)  {
 $('<option class="diametr_opt" value="' + takelagdiametr_741[i].value + '">' + takelagdiametr_741[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < takelaglong741.length; i++)  {
$('<option class="long_opt" value="' + takelaglong741[i].value + '">' + takelaglong741[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "САМОРЕЗЫ"==================//
if (tupemetis=='samores'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <samoresdiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + samoresdiametr_1[i].value + '">' + samoresdiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < samoreslong1.length; i++)  {
$('<option class="long_opt" value="' + samoreslong1[i].value + '">' + samoreslong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "Проволока"==================//
if (tupemetis=='provoloka'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <provolokadiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + provolokadiametr_1[i].value + '">' + provolokadiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < provolokalong1.length; i++)  {
$('<option class="long_opt" value="' + provolokalong1[i].value + '">' + provolokalong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "Проволока"==================//
if (tupemetis=='gwosdi'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <gwosdidiametr_12.length; i++)  {
 $('<option class="diametr_opt" value="' + gwosdidiametr_12[i].value + '">' + gwosdidiametr_12[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < gwosdilong1.length; i++)  {
$('<option class="long_opt" value="' + gwosdilong1[i].value + '">' + gwosdilong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ТРОС"==================//
if (tupemetis=='tros'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <trosdiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + trosdiametr_1[i].value + '">' + gwosdidiametr_12[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < troslong1.length; i++)  {
$('<option class="long_opt" value="' + troslong1[i].value + '">' + troslong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ТРОС"==================//
if (tupemetis=='zepi'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <zepidiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + zepidiametr_1[i].value + '">' + zepidiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < zepilong1.length; i++)  {
$('<option class="long_opt" value="' + zepilong1[i].value + '">' + zepilong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "ТРОС"==================//
if (tupemetis=='abrasiv'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <abrasivdiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + abrasivdiametr_1[i].value + '">' + abrasivdiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < abrasivlong1.length; i++)  {
$('<option class="long_opt" value="' + abrasivlong1[i].value + '">' + abrasivlong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "Перфорированный крепеж"==================//
if (tupemetis=='kregeq'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <kregeqdiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + kregeqdiametr_1[i].value + '">' + kregeqdiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < kregeqlong1.length; i++)  {
$('<option class="long_opt" value="' + kregeqlong1[i].value + '">' + kregeqlong1[i].name + '</option>').appendTo(newSelSek);
}
}

/// ======================= заполняем первоначальные списки для типа метизов "Перфорированный крепеж"==================//
if (tupemetis=='homut'){
  //====удаляем предыдущий список в селекте "Стандарт"=========///
var newSelSek = $(parentbl).find('.standart');
var sss= $(newSelSek).find('.standart_opt');
sss.remove();

//====заполняем  список в селекте "Стандарт" новыми значениями=========///
for (var i = 0; i < typemetisv2.length; i++)  {
// console.log(typemetisv2[i].name)

$('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
}
//====удаляем предыдущий список в селекте "Тип покрытия"=========///
var newSelSek2 = $(parentbl).find('.coating');
var sss= $(newSelSek2).find('.coating_opt');
sss.remove();      
//====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
}
//====удаляем предыдущий список в селекте "Класс прочности"=========///
var newSelSek3 = $(parentbl).find('.strength');
var sss= $(newSelSek3).find('.strength_opt');
sss.remove();
//====заполняем  список в селекте "Класс прочности" новыми значениями=========///
for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
 $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
}
//====удаляем предыдущий список в селекте "Диаметр "=========///
var newSelSek4 = $(parentbl).find('.diametr');
var sss= $(newSelSek4).find('.diametr_opt');
sss.remove();
//====заполняем  список в селекте "Диаметр " новыми значениями=========///
// var nn=typemetisv2[0].diamerts.length;
// alert(nn)
for (var i = 0; i <homutdiametr_1.length; i++)  {
 $('<option class="diametr_opt" value="' + homutdiametr_1[i].value + '">' + homutdiametr_1[i].name + '</option>').appendTo(newSelSek4);
}
//====удаляем предыдущий список в селекте "Длина "=========///
var newSelSek = $(parentbl).find('.long');
var sss= $(newSelSek).find('.long_opt');
sss.remove();

//====заполняем  список в селекте "Длина " новыми значениями=========///
for (var i = 0; i < homutlong1.length; i++)  {
$('<option class="long_opt" value="' + homutlong1[i].value + '">' + homutlong1[i].name + '</option>').appendTo(newSelSek);
}
}








    price(element);
 }
 window.typemetisf = typemetisf;


//===== Изменение значения в выпадающем списке "Стандарт" изменяем другие выпадающие списки и вызвываем пересчет веса   =====//
function standartf(element){
    var standartv=element.value;
    var parentbl=$(element).parents('.metis_str');
    var blocktupemetis=parentbl.find('.typemetis');
    tupemetisv=blocktupemetis.val();
    //alert (tupemetisv)  

 if ((tupemetisv=='gaika')||(tupemetisv=='shaiba')||(tupemetisv=='shpilka')){
    var tp=typemetisv+'standart';
    var typemetisv2=eval(tp);
    var nn2=typemetisv2.findIndex(i => i.name ==standartv);

   //alert (tupemetisv)
      //====удаляем предыдущий список в селекте "Диаметр "=========///
       var newSelSek4 = $(parentbl).find('.diametr');
       var sss= $(newSelSek4).find('.diametr_opt');
       sss.remove();
     //====заполняем  список в селекте "Диаметр " новыми значениями=========///
      var nn=typemetisv2[nn2].diamerts.length;
      for (var i = 0; i < typemetisv2[nn2].diamerts.length; i++)  {
        $('<option class="diametr_opt" value="' + typemetisv2[nn2].diamerts[i].weight1 + '">' + typemetisv2[nn2].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
      }
      //====удаляем предыдущий список в селекте "Тип покрытия"=========///
      var newSelSek2 = $(parentbl).find('.coating');
      var sss= $(newSelSek2).find('.coating_opt');
      sss.remove();
     //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
      for (var i = 0; i < typemetisv2[nn2].coating.length; i++)  {
         $('<option class="coating_opt" value="' + typemetisv2[nn2].coating[i].typecoating + '">' + typemetisv2[nn2].coating[i].typecoating + '</option>').appendTo(newSelSek2);
       }
       //====удаляем предыдущий список в селекте "Класс прочности"=========///
       var newSelSek3 = $(parentbl).find('.strength');
       var sss= $(newSelSek3).find('.strength_opt');
       sss.remove();
      //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
       for (var i = 0; i < typemetisv2[nn2].coating.length; i++)  {
          $('<option class="strength_opt" value="' + typemetisv2[nn2].coating[i].klass + '">' + typemetisv2[nn2].coating[i].klass + '</option>').appendTo(newSelSek3);
       }

}

if ((tupemetisv=='bolt')||(tupemetisv=='wint')||(tupemetisv=='anker')||(tupemetisv=='dubel')||(tupemetisv=='rondol')
||(tupemetisv=='takelag')||(tupemetisv=='samores')||(tupemetisv=='provoloka')||(tupemetisv=='gwosdi')
||(tupemetisv=='tros')||(tupemetisv=='zepi')||(tupemetisv=='abrasiv')||(tupemetisv=='kregeq')||(tupemetisv=='homut')){
   var tp=typemetisv+'standart';
    var typemetisv2=eval(tp);
    var nn2=typemetisv2.findIndex(i => i.name ==standartv);
     //alert(tp)
    //alert(standartv)
   // alert(nn2)


   //====удаляем предыдущий список в селекте "Тип покрытия"=========///
 var newSelSek2 = $(parentbl).find('.coating');
 var sss= $(newSelSek2).find('.coating_opt');
 sss.remove();      
 //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
// console.log(typemetisv2[0].coating.length)
 for (var i = 0; i < typemetisv2[nn2].coating.length; i++)  {
     $('<option class="coating_opt" value="' + typemetisv2[nn2].coating[i].typecoating + '">' + typemetisv2[nn2].coating[i].typecoating + '</option>').appendTo(newSelSek2);
 }
 //====удаляем предыдущий список в селекте "Класс прочности"=========///
  var newSelSek3 = $(parentbl).find('.strength');
  var sss= $(newSelSek3).find('.strength_opt');
  sss.remove();
 //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
  for (var i = 0; i < typemetisv2[nn2].coating.length; i++)  {
     $('<option class="strength_opt" value="' + typemetisv2[nn2].coating[i].klass + '">' + typemetisv2[nn2].coating[i].klass + '</option>').appendTo(newSelSek3);
 }
  
 
  if (standartv=='7805-70/7798-70')
  {
   var boltdiametr='boltdiametr_7805_10';
   boltdiametr=eval(boltdiametr);
  var boltlong='boltlong7805';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 933/931')
  {
   var boltdiametr='boltdiametr_933_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='boltlong933';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 603')
  {
   var boltdiametr='boltdiametr_603_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='boltlong603';
  boltlong=eval(boltlong);
  }
   
  if (standartv=='ГОСТ 24379')
  {
   var boltdiametr='boltdiametr_24379_16';
   boltdiametr=eval(boltdiametr);
   var boltlong='boltlong24379';
  boltlong=eval(boltlong);
  }
  ///====="ВИНТЫ"============//
  if (standartv=='DIN 912')
  {
   var boltdiametr='wintdiametr_912_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='wintlong24379';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 7985')
  {
   var boltdiametr='wintdiametr_7985_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='wintlong7985';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 965')
  {
   var boltdiametr='wintdiametr_965_3';
   boltdiametr=eval(boltdiametr);
   var boltlong='wintlong965';
  boltlong=eval(boltlong);
  }

  if (standartv=='Винт конфирмат')
  {
   var boltdiametr='wintdiametr_KF_63';
   boltdiametr=eval(boltdiametr);
   var boltlong='wintlongKF';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкерный болт с гайкой HNM')
  {
   var boltdiametr='ankerdiametr_HNM_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongHNM';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкерный болт HBM')
  {
   var boltdiametr='ankerdiametr_HBM_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongHBM';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкер кольцо HA')
  {
   var boltdiametr='ankerdiametr_NA_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongNA';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкер крюк HG')
  {
   var boltdiametr='ankerdiametr_HG_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongHG';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкер MAN')
  {
   var boltdiametr='ankerdiametr_MAN_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongMAN';
  boltlong=eval(boltlong);
  }

  if (standartv=='Анкер  цанга DRМ')
  {
   var boltdiametr='ankerdiametr_DRМ_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='ankerlongDRМ';
  boltlong=eval(boltlong);
  }

  if (standartv=='DRIVA PA')
  {
   var boltdiametr='dubeldiametr_PA_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='dubellongPA';
  boltlong=eval(boltlong);
  }

  if (standartv=='RD')
  {
   var boltdiametr='dubeldiametr_RD_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='dubellongRD';
  boltlong=eval(boltlong);
  }
  if (standartv=='IZO')
  {
   var boltdiametr='dubeldiametr_IZO_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='dubellongIZO';
  boltlong=eval(boltlong);
  }
  if (standartv=='SM-L')
  {
   var boltdiametr='rondoldiametr_SML_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongSML';
  boltlong=eval(boltlong);
  }

  if (standartv=='SM-G')
  {
   var boltdiametr='rondoldiametr_SMG_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongSMG';
  boltlong=eval(boltlong);
  }
 
  if (standartv=='ДГМ')
  {
   var boltdiametr='rondoldiametr_DQM_45';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongDQM';
  boltlong=eval(boltlong);
  }

  if (standartv=='Дюбель фасадный TSX-S')
  {
   var boltdiametr='rondoldiametr_TSX_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongTSX';
  boltlong=eval(boltlong);
  }

  if (standartv=='Фасадный анкер с шайбой TSX-500')
  {
   var boltdiametr='rondoldiametr_TSX500_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongTSX500';
  boltlong=eval(boltlong);
  }

  if (standartv=='TCHAPPAI')
  {
   var boltdiametr='rondoldiametr_TCHAPPAI_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='rondollongTCHAPPAI';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 741')
  {
   var boltdiametr='takelagdiametr_741';
   boltdiametr=eval(boltdiametr);
   var boltlong='takelaglong741';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 1480')
  {
   var boltdiametr='takelagdiametr_1480';
   boltdiametr=eval(boltdiametr);
   var boltlong='takelaglong1480';
  boltlong=eval(boltlong);
  }

  if (standartv=='Кровельный шуруп, без шайбы сверло')
  {
   var boltdiametr='samoresdiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong1';
  boltlong=eval(boltlong);
  }
  if (standartv=='Кровельный шуруп, с шайбой, резиновая прокладка сверло')
  {
   var boltdiametr='samoresdiametr_2_48';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong2';
  boltlong=eval(boltlong);
  }

  if (standartv=='Кровельный шуруп, с шайбой, резиновая прокладка удлиненное сверло')
  {
   var boltdiametr='samoresdiametr_3_55';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong3';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморезы для сэндвич - панелей')
  {
   var boltdiametr='samoresdiametr_4_55';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong4';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез оконный SD')
  {
   var boltdiametr='samoresdiametr_5_39';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong5';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез оконный SP')
  {
   var boltdiametr='samoresdiametr_6_41';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong6';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез для гипсокартонных листов на деревянные основания')
  {
   var boltdiametr='samoresdiametr_7_35';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong7';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез для гипсокартонных листов в металлические основания')
  {
   var boltdiametr='samoresdiametr_8_35';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong8';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез с прессшайбой острый')
  {
   var boltdiametr='samoresdiametr_9_42';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong9';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез с прессшайбой  со сверлом')
  {
   var boltdiametr='samoresdiametr_10_42';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong10';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='Саморез острый/белый')
  {
   var boltdiametr='samoresdiametr_11_35';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong11';
  boltlong=eval(boltlong);
  }

  if (standartv=='Шуруп монтажный FRS-S')
  {
   var boltdiametr='samoresdiametr_12_75';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong12';
  boltlong=eval(boltlong);
  }

  if (standartv=='Саморез для деревянных лаг (глухарь)')
  {
   var boltdiametr='samoresdiametr_13_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong13';
  boltlong=eval(boltlong);
  }

  if (standartv=='Универсальный шуруп')
  {
   var boltdiametr='samoresdiametr_14_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='samoreslong14';
  boltlong=eval(boltlong);
  }

  if (standartv=='ГОСТ 3282-74 Т/О')
  {
   var boltdiametr='provolokadiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='provolokalong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='ГОСТ 285-69')
  {
   var boltdiametr='provolokadiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='provolokalong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Гвоздь строительный')
  {
   var boltdiametr='gwosdidiametr_12';
   boltdiametr=eval(boltdiametr);
   var boltlong='gwosdilong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Гвоздь финишный1,6*20, , КГ')
  {
   var boltdiametr='gwosdidiametr_2_16';
   boltdiametr=eval(boltdiametr);
   var boltlong='gwosdilong2';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 2/3, , м')
  {
   var boltdiametr='trosdiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 3/4, , м')
  {
   var boltdiametr='trosdiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 4/5, , м')
  {
   var boltdiametr='trosdiametr_3';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 5/6, , м')
  {
   var boltdiametr='trosdiametr_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 6/8, , м')
  {
   var boltdiametr='trosdiametr_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Трос в оплетке ПВХ 8/10, , м')
  {
   var boltdiametr='trosdiametr_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN 3055')
  {
   var boltdiametr='trosdiametr_2_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='troslong1';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='DIN 763')
  {
   var boltdiametr='zepidiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='zepilong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='DIN766')
  {
   var boltdiametr='zepidiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='zepilong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 125*1,6*22 , 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 125*1,8*22 , 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 150*1,6*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_3';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 150*1,8*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 180*1,6*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 180*1,8*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 230*1,6*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_7';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Круг отрезной 230*1,8*22, 1 штука, ШТ')
  {
   var boltdiametr='abrasivdiametr_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='abrasivlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 20*20*80*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 40*40*20*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 40*40*40*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_3';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 50*50*40*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 50*50*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 50*50*60*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 50*50*80*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_7';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 80*80*40*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 80*80*60*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_9';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок 80*80*80*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок с анкерным отверстием 105*105*90*2 усиленный, , ШТ')
  {
   var boltdiametr='kregeqdiametr_11';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='Крепежный уголок с анкерным отверстием 125*125*65*2 усиленный, , ШТ')
  {
   var boltdiametr='kregeqdiametr_12';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок с анкерным отверстием 50*50*40*2 усиленный, , ШТ')
  {
   var boltdiametr='kregeqdiametr_13';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок с анкерным отверстием 70*70*55*2 усиленный, , ШТ')
  {
   var boltdiametr='kregeqdiametr_14';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежный уголок с анкерным отверстием 90*90*65*2 усиленный, , ШТ')
  {
   var boltdiametr='kregeqdiametr_15';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса закрытая 100*76*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_16';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса закрытая 140*76*100*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_17';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса закрытая 140*76*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_18';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса открытая 100*76*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_19';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса открытая 140*76*100*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_20';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса открытая 140*76*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_21';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Опора бруса открытая 140*76*50*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_21';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина с анкерным отверстием 100*35*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_22';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина с анкерным отверстием 140*55*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_23';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='Крепежная пластина с анкерным отверстием 180*65*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_24';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина с анкерным отверстием 210*90*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_25';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 100*200*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_26';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 100*240*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_27';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='Крепежная пластина 100*300*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_28';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 100*400*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_29';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 40*120*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_30';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }
  
  if (standartv=='Крепежная пластина 40*200*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_31';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 60*140*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_32';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 60*200*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_33';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 60*240*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_34';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 60*300*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_35';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 80*240*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_36';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Крепежная пластина 80*300*2, , ШТ')
  {
   var boltdiametr='kregeqdiametr_37';
   boltdiametr=eval(boltdiametr);
   var boltlong='kregeqlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 10-16')
  {
   var boltdiametr='homutdiametr_1';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 12-20')
  {
   var boltdiametr='homutdiametr_2';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 16-25')
  {
   var boltdiametr='homutdiametr_3';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 20-32')
  {
   var boltdiametr='homutdiametr_4';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 25-40')
  {
   var boltdiametr='homutdiametr_5';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 32-50')
  {
   var boltdiametr='homutdiametr_6';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 40-60')
  {
   var boltdiametr='homutdiametr_7';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 50-70')
  {
   var boltdiametr='homutdiametr_8';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 60-80')
  {
   var boltdiametr='homutdiametr_9';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 70-90')
  {
   var boltdiametr='homutdiametr_10';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 8-12')
  {
   var boltdiametr='homutdiametr_11';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 80-100')
  {
   var boltdiametr='homutdiametr_12';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут червячный DIN 3017 90-110')
  {
   var boltdiametr='homutdiametr_13';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*100')
  {
   var boltdiametr='homutdiametr_14';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*101')
  {
   var boltdiametr='homutdiametr_15';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  
  if (standartv=='Хомут-стяжка 3*102')
  {
   var boltdiametr='homutdiametr_16';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*103')
  {
   var boltdiametr='homutdiametr_17';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*104')
  {
   var boltdiametr='homutdiametr_18';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*105')
  {
   var boltdiametr='homutdiametr_19';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*106')
  {
   var boltdiametr='homutdiametr_20';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*107')
  {
   var boltdiametr='homutdiametr_21';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*108')
  {
   var boltdiametr='homutdiametr_22';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

  if (standartv=='Хомут-стяжка 3*109')
  {
   var boltdiametr='homutdiametr_23';
   boltdiametr=eval(boltdiametr);
   var boltlong='homutlong1';
  boltlong=eval(boltlong);
  }

 



 
 //====удаляем предыдущий список в селекте "Диаметр "=========///
  var newSelSek4 = $(parentbl).find('.diametr');
  var sss= $(newSelSek4).find('.diametr_opt');
  sss.remove();
 //====заполняем  список в селекте "Диаметр " новыми значениями=========///
 // var nn=typemetisv2[0].diamerts.length;
 // alert(nn)
  for (var i = 0; i <boltdiametr.length; i++)  {
     $('<option class="diametr_opt" value="' + boltdiametr[i].value + '">' + boltdiametr[i].name + '</option>').appendTo(newSelSek4);
 }
 //====удаляем предыдущий список в селекте "Длина "=========///
 var newSelSek = $(parentbl).find('.long');
 var sss= $(newSelSek).find('.long_opt');
 sss.remove();
   
 //====заполняем  список в селекте "Длина " новыми значениями=========///
 for (var i = 0; i < boltlong.length; i++)  {
    $('<option class="long_opt" value="' + boltlong[i].value + '">' + boltlong[i].name + '</option>').appendTo(newSelSek);
 }




}





      price(element);
}   

window.standartf = standartf;

//====Изменение значения в выпадающем списке "Длина " изменяем другие выпадающие списки и вызвываем пересчет веса
function longf(element){


  // alert(tupemetis)
   var longv=element.value;
   var parentbl=$(element).parents('.metis_str');
   var blocktupemetis=parentbl.find('.typemetis');
   tupemetisv=blocktupemetis.val();

   var standartblock=parentbl.find('.standart');
   var standartv=standartblock.val();

   if (tupemetisv=='shpilka'){
   var tp=tupemetisv+'standart'+longv;
   var typemetisv2=eval(tp);
   //console.log(tp)
   }


   if ((tupemetisv=='bolt')||(tupemetisv=='wint')||(tupemetisv=='anker')
   ||(tupemetisv=='dubel')||(tupemetisv=='rondol')||(tupemetisv=='zaklepka')||(tupemetisv=='takelag')||(tupemetisv=='samores')
   ||(tupemetisv=='gwosdi'))  {
      //alert(standartv)

      if (standartv=='7805-70/7798-70'){
         var tp=tupemetisv+'diametr_7805_'+longv;
         var typemetisv2=eval(tp);
         }
      
        if (standartv=='DIN 933/931'){
         var tp=tupemetisv+'diametr_933_'+longv;
         var typemetisv2=eval(tp);
        }
        if (standartv=='DIN 603'){
         var tp=tupemetisv+'diametr_603_'+longv;
         var typemetisv2=eval(tp);
        }
        if (standartv=='ГОСТ 24379'){
         var tp=tupemetisv+'diametr_24379_'+longv;
         var typemetisv2=eval(tp);
        }

        ///====="ВИНТЫ"============//
       if (standartv=='DIN 912')
      
        {
         var tp=tupemetisv+'diametr_912_'+longv;
         var typemetisv2=eval(tp);
       }


       if (standartv=='DIN 7985')
      
       {
        var tp=tupemetisv+'diametr_7985_'+longv;
        var typemetisv2=eval(tp);
      }

      if (standartv=='DIN 965')
      
       {
        var tp=tupemetisv+'diametr_965_'+longv;
        var typemetisv2=eval(tp);
      }


      if (standartv=='Винт конфирмат')
      
       {
        var tp=tupemetisv+'diametr_KF_'+longv;
        var typemetisv2=eval(tp);
      }

      if (standartv=='Анкерный болт с гайкой HNM')
      
      {
       var tp=tupemetisv+'diametr_HNM_'+longv;
       var typemetisv2=eval(tp);
     }

     if (standartv=='Анкерный болт HBM')      
      {
       var tp=tupemetisv+'diametr_HBM_'+longv;
       var typemetisv2=eval(tp);
     }

     if (standartv=='Анкер кольцо HA')      
     {
      var tp=tupemetisv+'diametr_NA_'+longv;
      var typemetisv2=eval(tp);
    }

    if (standartv=='Анкер крюк HG')      
    {
     var tp=tupemetisv+'diametr_HG_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='DRIVA PA')      
    {
     var tp=tupemetisv+'diametr_PA_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='RD')      
    {
     var tp=tupemetisv+'diametr_RD_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='IZO')      
    {
     var tp=tupemetisv+'diametr_IZO_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='SM-L')      
    {
     var tp=tupemetisv+'diametr_SML_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='SM-G')      
    {
     var tp=tupemetisv+'diametr_SMG_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='TCHAPPAI')      
    {
     var tp=tupemetisv+'diametr_TCHAPPAI_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='Заклепка ZK AL/ST')      
    {      
     var tp=tupemetisv+'diametr_ZK_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='Кровельный шуруп, без шайбы сверло')      
    {          
     var tp=tupemetisv+'1';
     var typemetisv2=eval(tp);
   }


   if (standartv=='Кровельный шуруп, с шайбой, резиновая прокладка сверло')      
    {      
     var tp=tupemetisv+'diametr_2_'+longv;
     var typemetisv2=eval(tp);
   }

   if (standartv=='Саморез для гипсокартонных листов на деревянные основания')      
   {      
    var tp=tupemetisv+'diametr_7_'+longv;
    var typemetisv2=eval(tp);
  }

  if (standartv=='Саморез для гипсокартонных листов в металлические основания')      
  {      
   var tp=tupemetisv+'diametr_8_'+longv;
   var typemetisv2=eval(tp);
 }

 if (standartv=='Саморез для деревянных лаг (глухарь)')      
 {      
  var tp=tupemetisv+'diametr_13_'+longv;
  var typemetisv2=eval(tp);
}

if (standartv=='Универсальный шуруп')      
 {      
  var tp=tupemetisv+'diametr_14_'+longv;
  var typemetisv2=eval(tp);
}

if (standartv=='Гвоздь строительный')      
 {      
  var tp=tupemetisv+'diametr_'+longv;
   var typemetisv2=eval(tp);
}

if (standartv=='Гвоздь финишный1,6*20, , КГ')      
 {      
  var tp=tupemetisv+'diametr_2_'+longv;
  var typemetisv2=eval(tp);
}




      }

 //console.log(tp)

   if (tupemetisv=='shpilka'){
        //====удаляем предыдущий список в селекте "Стандарт"=========///
        var newSelSek = $(parentbl).find('.standart');
        var sss= $(newSelSek).find('.standart_opt');
        sss.remove();
       // console.log(typemetisv2)
          
        //====заполняем  список в селекте "Стандарт" новыми значениями=========///
        for (var i = 0; i < typemetisv2.length; i++)  {
           $('<option class="standart_opt" value="' + typemetisv2[i].val + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek);
         }
        //====удаляем предыдущий список в селекте "Тип покрытия"=========///
        var newSelSek2 = $(parentbl).find('.coating');
        var sss= $(newSelSek2).find('.coating_opt');
        sss.remove();      
        //====заполняем  список в селекте "Тип покрытия" новыми значениями=========///
            for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
            $('<option class="coating_opt" value="' + typemetisv2[i].coating[i].typecoating + '">' + typemetisv2[i].coating[i].typecoating + '</option>').appendTo(newSelSek2);
        }
        //====удаляем предыдущий список в селекте "Класс прочности"=========///
         var newSelSek3 = $(parentbl).find('.strength');
         var sss= $(newSelSek3).find('.strength_opt');
         sss.remove();
        //====заполняем  список в селекте "Класс прочности" новыми значениями=========///
         for (var i = 0; i < typemetisv2[0].coating.length; i++)  {
            $('<option class="strength_opt" value="' + typemetisv2[i].coating[i].klass + '">' + typemetisv2[i].coating[i].klass + '</option>').appendTo(newSelSek3);
        }
         //====удаляем предыдущий список в селекте "Диаметр "=========///
         var newSelSek4 = $(parentbl).find('.diametr');
         var sss= $(newSelSek4).find('.diametr_opt');
         sss.remove();
        //====заполняем  список в селекте "Диаметр " новыми значениями=========///
         var nn=typemetisv2[0].diamerts.length;
           for (var i = 0; i < typemetisv2[0].diamerts.length; i++)  {
            $('<option class="diametr_opt" value="' + typemetisv2[0].diamerts[i].weight1 + '">' + typemetisv2[0].diamerts[i].diamert + '</option>').appendTo(newSelSek4);
        }
      }

      if ((tupemetisv=='bolt')||(tupemetisv=='wint')||(tupemetisv=='anker')||(tupemetisv=='dubel')
      ||(tupemetisv=='rondol')||(tupemetisv=='zaklepka')||(tupemetisv=='samores')||(tupemetisv=='gwosdi')){
        
        
         //====удаляем предыдущий список в селекте "Диаметр "=========///
         var newSelSek4 = $(parentbl).find('.diametr');
         var sss= $(newSelSek4).find('.diametr_opt');
         sss.remove();
        //====заполняем  список в селекте "Диаметр " новыми значениями=========///
         var nn=typemetisv2.length;
         // console.log(typemetisv2)
           for (var i = 0; i < typemetisv2.length; i++)  {
            $('<option class="diametr_opt" value="' + typemetisv2[i].value + '">' + typemetisv2[i].name + '</option>').appendTo(newSelSek4);
        }

      }   
      
      price(element);


       

}
window.longf = longf;



//============ Изменили "Количество" закрываем ввод букв, точку, запятую и вызваем функцию персчета веса =================//

  function amountf(element){
   $(element).val($(element).val().replace(/[A-Za-zА-Яа-яЁё.,-]/, ''));
   price(element);
  }
  window.amountf = amountf;


  //============ Изменили поле "Диаметр" вызываем функция пересчета веса =================//

  function diametrf(element){
      price(element);
  }
  window.diametrf = diametrf;



  //============ Функция вычисленияя ВЕСА  изделий =================//
  function price(element){
    var priceall=0;
    var parentbl=$(element).parents('.metis_str');

    var pricebl1 = $(parentbl).find('.typemetis');
    var tupem=pricebl1.val();
    if(tupem=='takelag'){
      var pricebl1 = $(parentbl).find('.long');
      var price1=pricebl1.val(); 
    }
    else{
      var pricebl1 = $(parentbl).find('.diametr');
      var price1=pricebl1.val(); 
    }


    var callbl1 = $(parentbl).find('.amount');
    var call1=callbl1.val();
   priceall=price1*call1;

   priceall=priceall.toFixed(5);
   $(parentbl).find('.weight').val(priceall);



   
   var bl=$('.metis_str');
   var nn=bl.length;
     
   var metismailv='';
   var metismailvarea='';
   for (var i = 0; i < nn; i++)  {

    var block1=$(bl[i]);
   // console.log(block1)
    var priceblm1 = $(block1).find('.typemetis');
     var tupemv=priceblm1.find('option:selected').text();
    
     var stand=$(bl[i]).find('.standart');
    var standm=stand.val();

    var diam=$(bl[i]).find('.long');
    var diamm=diam.find('option:selected').text();

    var long=$(bl[i]).find('.diametr');
    var longm=long.find('option:selected').text();

    var weit=$(bl[i]).find('.weight');
    var weitm=weit.val();

    weitm=(weitm*1).toFixed(5);  

    var nm=$(bl[i]).find('.amount');
    var nmv=nm.val()

     metismailv='Тип метизов'+' '+tupemv+ ';'+'Стандарт. '+' '+standm+ ';'+'Диаметр '+' '+diamm+ ';'+'Длина  '+' '+longm+ ';'+'Кол-во, шт. '+' '+nmv+ ';'+';'+'Вес '+' '+weitm+ ';'+'-------------------->';

    metismailvarea=metismailvarea+ metismailv

   }

   $('#metismail').text(metismailvarea);

  }

});
