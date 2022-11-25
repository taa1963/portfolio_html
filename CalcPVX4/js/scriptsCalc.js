let  typemetisv;
let lnaxl=0;
let Kb=0;
let Kz=0;
let Dz=0;
let prisepvx=0;



$(document).ready(function() {
var typemetisv;

//===== закрываем ввод в поля Ширина и высота букв и отрицательных значений, запятую меняем на точку   =====//
var myInput = document.querySelectorAll("input[type=number]");

function keyAllowed(key) {
  var keys = [8, 9, 13, 16, 17, 18, 19, 20, 27, 46, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 91, 92, 93 
  ];
  if (key && keys.indexOf(key) === -1)
    return false;
  else
    return true;
}

myInput.forEach(function(element) {
  element.addEventListener('keypress', function(e) {
    var key = !isNaN(e.charCode) ? e.charCode : e.keyCode;
    if (!keyAllowed(key))
      e.preventDefault();
  }, false);

  // Disable pasting of non-numbers
  element.addEventListener('paste', function(e) {
    var pasteData = e.clipboardData.getData('text/plain');
    if (pasteData.match(/[^0-9]/))
      e.preventDefault();
  }, false);
})

// ======Только одна точка или одна запятая=====//

$('#lpr').keypress(function(e) {
  if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
      return !(/[.,]/.test(e.key));
   } 
});

// ======Только одна точка или одна запятая=====//

$('#shpr').keypress(function(e) {
  if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
      return !(/[.,]/.test(e.key));
   }
 
});





// //===== функция изменения выпадающего списка "ПЛАНКА" при изменение типа шторы ПВХ   =====//
function pvxf(element){
let namepvx=element.value;

if (namepvx==400){
  var newSelSek = $('#planka');
      var sss= $(newSelSek).find('.plankaopt');
       sss.remove();
       $('<option class="plankaopt" value="0">Без планок </option>\n+'+
       '<option class="plankaopt" value="1">Стальные </option>').appendTo(newSelSek); 
    }
    else{
      var newSelSek = $('#planka');
      var sss= $(newSelSek).find('.plankaopt');
       sss.remove();
       $('<option class="plankaopt" value="0">Без планок </option>\n+'+
       '<option class="plankaopt" value="1">Стальные </option>\n+'+
       '<option class="plankaopt" value="2">Из нержавеющей стали</option>').appendTo(newSelSek); 
    }
}
window.pvxf=pvxf;

//===== Нажатие кнопки Рассчитать=======//
$('#btn1').on("click",function(){
 
 let shpvx=document.getElementById('shpr').value;//ширина проема
 let hpvx=document.getElementById('lpr').value; //высота проема

 let haxlv=document.getElementById('naxl').value;
 //====== Определение типа штор      ====//
 let pvxval=0;
 let pvxob = document.getElementsByName('pvxradio');
 for (var i = 0; i < pvxob.length; i++) {
     if (pvxob[i].type == "radio" && pvxob[i].checked) {
         pvxval= pvxob[i].value;
     }
    }
    //=============определение величины нахлеста=====//
   
   lnaxl=0;
    if (haxlv==0){
      lnaxl=0;
    }

    if ((haxlv==20)&&(pvxval==200)){
      lnaxl=4;
    }
    if (((haxlv==20)&&(pvxval==300))||((haxlv==20)&&(pvxval==400))){
      lnaxl=5;
    }


    if ((haxlv==40)&&(pvxval==200)){
      lnaxl=8;
    }
    if (((haxlv==40)&&(pvxval==300))||((haxlv==40)&&(pvxval==400))){
      lnaxl=11;
    }
    if ((haxlv==50)&&(pvxval==200)){
      lnaxl=12;
    }
    if (((haxlv==50)&&(pvxval==300))||((haxlv==50)&&(pvxval==400))){
      lnaxl=15;
    }
    //=====Количество завес======//

    Kz=(shpvx*100)/((pvxval/10)-lnaxl);
    Kz=Math.ceil(Kz);

  //===========4.	Количество бухт ==========//
//длинна всей пвх ленты
let LlennS=Kz*hpvx;
//кол-во бухт
Kb=Math.floor(LlennS/50);

//==// остаток от бухты
//let Dz=0;

let Obk=0;

if (LlennS>50){
 let Ost=50-(Math.floor(50/hpvx))*hpvx;

 Obk =Kb*Ost;

 
}
Dz=Math.ceil(Kz*hpvx)+Obk;

let Price=Dz*140;



 //$(".itog_all").addClass("itog_visible");

 $('#shpvxv').text(shpvx);

 if ((shpvx<=0)||(hpvx<=0)){
  alert('Не заполнены все необходимые параметры (высота или ширина проема).')
 }
 else
 {
  $(".itog_all").addClass("itog_visible");

 ADDST();

 if ($('.itog2').length > 0) {
  
} else {
  var newSection = $('<table class="itog2" cellspacing="0" cellpadding="0" border="1"> </table>');
  newSection.html(
   '<tr class="metis_str" ">\n+'+
      '<td class="table_cell"> Итого</td>\n+'+
     '<td class="table_cell"><span type="text" id="itog_all_pr" class="itog_all_pr" readonly value="0"></span)</td>\n+'+
     '</tr>\n+'+
     '<tr class="metis_str" ">\n+'+
     '<td class="table_cell"> В том числе НДС 20%</td>\n+'+
    '<td class="table_cell"><span type="text" id="itog_all_NDC" class="itog_all_NDC" readonly value="0" ></span></td>\n+'+
    '</tr>'); 
     $('#tabl2').append(newSection);
}

ADDPrice();
 }

});

//=====================Расчет окончательной цены по всем блокам   ===============//

function ADDPrice(){
  let C5=0;
  let npr=document.getElementsByClassName('priceallbl');
  let j=npr.length;
  for(let i = 0; i <npr.length; i++){
    let prz=npr[i].innerText;
    C5=C5+prz*1;
  }

C5=C5.toFixed(2);
$('#itog_all_pr').text(C5);
let C5nds=0;
C5nds=(C5/120)*20;

//document.getElementById('itog_all_NDC').value=C5nds;
C5nds=C5nds.toFixed(2);
$('#itog_all_NDC').text(C5nds);

}





function ADDST() {
  let N=1;
  let zmontagall=0;
  let zgrebenkaall=0;
  let zplankaall=0;
  let zpvxv=0;
  let shpvx=document.getElementById('shpr').value;//ширина проема
     let hpvx=document.getElementById('lpr').value; //высота проема

    
  var newSection = $(' <div class="tabl_block" > </div>');
  newSection.html(
    '<p class="titelt">Ширина:<span class="shpvxv"></span>Высота:<span class="lpvxv"></span>Нахлест - <span class="lnaxl"></span><a class="delblock"  onclick="delblock(this)">удалить проем</a> </p>\n'+
    '<table class="itog1" cellspacing="0" cellpadding="0" border="1">\n'+
      '<tr class="itog_str">\n'+
      '<th class="table_cell" style="width:5%;">№ п\п </th>\n'+
      '<th class="table_cell" style="width:30%;">Наименование </th>\n'+
      '<th class="table_cell" style="width:15%;">Ед.изм. </th>\n'+
      '<th class="table_cell" style="width:15%;">Кол-во 	 </th>\n'+
      '<th class="table_cell" style="width:15%;"> 	Цена. Руб. 	 </th>\n'+
      '<th class="table_cell" style="width:20%;"> Сумма. Руб. 	 </th>\n'+
      '</tr>\n'+
      '<tr class="itog_str">\n'+
      '<td class="table_cell"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
      '<td class="table_cell"> <span type="text" class="cell_select namepvx" value="" readonly ></span></td>\n'+ 
      '<td class="table_cell"> <span type="text" class="cell_select edizm" value="м.п." readonly >м.п.</span</td>\n'+ 
      '<td class="table_cell"> <span type="text" class="cell_select callmp" value="" readonly ></span</td>\n'+  
      '<td class="table_cell"> <span type="text" class="cell_select pricepvx" value="" readonly ></span</td>\n'+ 
      '<td class="table_cell"> <span type="text" class="cell_select pricepvxv" value="" readonly ></span</td>\n'+      
     '</tr>\n'+
     '</table>'); 
     $('#tabl1_all').append(newSection);
     


    //  let shpvx=document.getElementById('shpr').value;//ширина проема
    //  let hpvx=document.getElementById('lpr').value; //высота проема

    //  if ((shpvx<=0)||(hpvx<=0)){
    //   alert('Не заполнены все параметры')
    //  }
    //  else
    //  {

     //====== Определение типа штор      ====//
      let pvxval=0;
      let pvxob = document.getElementsByName('pvxradio');
      for (var i = 0; i < pvxob.length; i++) {
         if (pvxob[i].type == "radio" && pvxob[i].checked) {
              pvxval= pvxob[i].value;
         }
     }
     let namempvx='';
     if (pvxval==200){
      namempvx='ПВХ завеса стандартная 2x200';
      prisepvx=prisepvx1;
     }
     if (pvxval==300){
      namempvx='ПВХ завеса стандартная 3x300';
      prisepvx=prisepvx2;
     }
     if (pvxval==400){
      namempvx='ПВХ завеса стандартная 4x400';
      prisepvx=prisepvx3;
     }

     let namepvxinp=document.getElementsByClassName('namepvx');
     let num=namepvxinp.length;
     let j=num-1;
     //namepvxinp[j].value=namempvx;
     $(namepvxinp[j]).text(namempvx); 


     let callnumber=document.getElementsByClassName('callmp');
     $(callnumber[j]).text(Dz);
     //callnumber[j].value=Dz;

     
     let numberbl=document.getElementsByClassName('number');
     var k=numberbl.length-1;
     $(numberbl[k]).text(N);
    // numberbl[k].value=N;
     N=N+1;

     let pricepvxbl=document.getElementsByClassName('pricepvx');
     $(pricepvxbl[j]).text(prisepvx);
     //pricepvxbl[j].value=prisepvx;

     let pricepvxvbl=document.getElementsByClassName('pricepvxv');
     //pricepvxvbl[j].value=prisepvx*Dz;
     zpvxv=prisepvx*Dz;
     zpvxv=zpvxv.toFixed(2);
     $(pricepvxvbl[j]).text(zpvxv);
     //zpvxv=prisepvx*Dz;

     let shpvxvn=document.getElementsByClassName('shpvxv');
     $(shpvxvn[j]).text(shpvx+'м'+';');
        
     let lpvxvbl=document.getElementsByClassName('lpvxv');
     $(lpvxvbl[j]).text(hpvx+'м'+';');

     let lnaxlbl=document.getElementsByClassName('lnaxl');
     $(lnaxlbl[j]).text(lnaxl+'мм'+';');   




     //=======================  Выбрана планка================//
     let plankaval=document.getElementById('planka').value;//Выбрана планка

     if (plankaval>0){

      var itog1bl=document.getElementsByClassName('itog1');
      var newSection = $('<tr class="itog_str"> </tr>');
      newSection.html(       
          
          '<td class="table_cell" style="width:10%;"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
          '<td class="table_cell" style="width:40%;"> <span type="text" class="cell_select nameplanka" value="" readonly ></span></td>\n'+ 
          '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select edizm" value="шт." readonly >шт.</span></td>\n'+ 
          '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select callplanka" value="" readonly ></span></td>\n'+  
          '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select priceplanka1" value="" readonly ></span></td>\n'+ 
          '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select priceplanka" value="" readonly ></span></td>')      
        
         $(itog1bl[j]).append(newSection);


         let numberbl=document.getElementsByClassName('number');
         var k=numberbl.length-1;
         numberbl[k].value=N;
         $(numberbl[k]).text(N);
           N=N+1;
           let pvxob = document.getElementsByName('pvxradio');
           for (var i = 0; i < pvxob.length; i++) {
              if (pvxob[i].type == "radio" && pvxob[i].checked) {
                   pvxval= pvxob[i].value;
              }
          }
          let nameplanka='';
          let zplanka1=0;

          if ((plankaval==1)&&(pvxval==200)){
            nameplanka='Комплект планок для ПВХ завес 200мм';
            zplanka1=zplanka1v;
          }
          if ((plankaval==1)&&(pvxval==300)){
            nameplanka='Комплект планок для ПВХ завес 300мм';
            zplanka1=zplanka2v;
          }
          if ((plankaval==1)&&(pvxval==400)){
            nameplanka='Комплект планок для ПВХ завес 400мм';
            zplanka1=zplanka3v;
          }
          if ((plankaval==2)&&(pvxval==200)){
            nameplanka='Комплект планок для ПВХ завес 200мм(нержавейка)';
            zplanka1=zplanka4v;
          }
          if ((plankaval==2)&&(pvxval==300)){
            nameplanka='Комплект планок для ПВХ завес 300мм(нержавейка)';
            zplanka1=80;
          }

          let nameplankabl=document.getElementsByClassName('nameplanka');
          jj=nameplankabl.length-1;
          //nameplankabl[jj].value=nameplanka;
          $(nameplankabl[jj]).text(nameplanka); 
           
          let callplankabl=document.getElementsByClassName('callplanka');
         // callplankabl[jj].value=Kz;
          $(callplankabl[jj]).text(Kz);

          let priceplanka1bl=document.getElementsByClassName('priceplanka1');
         // priceplanka1bl[jj].value=zplanka1;
          $(priceplanka1bl[jj]).text(zplanka1);

          let priceplankabl=document.getElementsByClassName('priceplanka');
          priceplankabl[jj].value=zplanka1*Kz;
          zplankaall=zplanka1*Kz;
          zplankaall=zplankaall.toFixed(2);
          $(priceplankabl[jj]).text(zplankaall);
     }
//=======================  Выбрана Гребенка ================//
let grebenkaval=document.getElementById('grebenka').value;//Выбрана Гребенка 

if (grebenkaval>0){
  var itog1bl=document.getElementsByClassName('itog1');
  var newSection = $('<tr class="itog_str"> </tr>');
 newSection.html(       
     
     '<td class="table_cell" style="width:10%;"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:40%;"> <span type="text" class="cell_select namegrebenka" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select edizm" value="шт." readonly >шт.</span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select callgrebenka" value="" readonly ></span></td>\n'+  
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select pricegrebenka1" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select pricegrebenka" value="" readonly ></span></td>')      
   
    $(itog1bl[j]).append(newSection);


    let numberbl=document.getElementsByClassName('number');
    var k=numberbl.length-1;
    //numberbl[k].value=N;
    $(numberbl[k]).text(N);

      N=N+1;       

     let namegrebenka='';
     let zgrebenka1=0;

     if(grebenkaval==1){
        namegrebenka='Гребенка для ПВХ завес';
        zgrebenka1=zgrebenka1v;
     }
     if(grebenkaval==2){
        namegrebenka='Гребенка из нержавеющей стали для ПВХ завес';
        zgrebenka1=zgrebenka2v;
     }

     let namegrebenkabl=document.getElementsByClassName('namegrebenka');
     jj=namegrebenkabl.length-1;
    // namegrebenkabl[jj].value=namegrebenka;
     $(namegrebenkabl[jj]).text(namegrebenka);
      
     let shpvx=document.getElementById('shpr').value;//ширина проема
     let ngrebenka=Math.ceil(shpvx);

     let callgrebenkabl=document.getElementsByClassName('callgrebenka');
     //callgrebenkabl[jj].value=shpvx;
     $(callgrebenkabl[jj]).text(ngrebenka);

     let pricegrebenka1bl=document.getElementsByClassName('pricegrebenka1');
     //pricegrebenka1bl[jj].value=zgrebenka1;
     $(pricegrebenka1bl[jj]).text(zgrebenka1);

     let pricegrebenkabl=document.getElementsByClassName('pricegrebenka');
     //pricegrebenkabl[jj].value=zgrebenka1*shpvx;
     zgrebenkaall=zgrebenka1*ngrebenka;
     zgrebenkaall=zgrebenkaall.toFixed(2);
     $(pricegrebenkabl[jj]).text(zgrebenkaall);
     //zgrebenkaall=zgrebenka1*shpvx;
   }


   //=======================  Выбрана Монтаж ================//
let montagval=document.getElementById('montag').value;//Выбрана Гребенка 

if (montagval>0){
  let itog1bl=document.getElementsByClassName('itog1');
  let newSection = $('<tr class="itog_str"> </tr>');
 newSection.html(       
     
     '<td class="table_cell" style="width:10%;"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:40%;"> <span type="text" class="cell_select namemontag" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select edizm" value="шт." readonly >шт.</span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select callmontag" value="" readonly ></span></td>\n'+  
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select pricemontag1" value="" readonly ></span></td>\n'+ 
     '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select pricemontag" value="" readonly ></span></td>')      
   
    $(itog1bl[j]).append(newSection);


    let numberbl=document.getElementsByClassName('number');
    let k=numberbl.length-1;
   // numberbl[k].value=N;
    $( numberbl[k]).text(N);
      N=N+1;       

     let namemontag='';
     let zmontag1=0;

     if(montagval==1){
      namemontag='Изготовление ';       
     }

     let pvxob = document.getElementsByName('pvxradio');
     for (var i = 0; i < pvxob.length; i++) {
        if (pvxob[i].type == "radio" && pvxob[i].checked) {
             pvxval= pvxob[i].value;
        }
    }
     if(pvxval==200){       
        zmontag1=zmontag1v;
     }
     if(pvxval==300){       
      zmontag1=zmontag2v;
     }
     if(pvxval==400){       
      zmontag1=zmontag3v;
     }

     let namemontagbl=document.getElementsByClassName('namemontag');
     jjj=namemontagbl.length-1;
    // namemontagbl[jjj].value=namemontag;
     $(namemontagbl[jjj]).text(namemontag);

      
     

     let callmontagbl=document.getElementsByClassName('callmontag');
     //callmontagbl[jjj].value=Kz;
     $(callmontagbl[jjj]).text(Kz);

     let pricemontag1bl=document.getElementsByClassName('pricemontag1');
     //pricemontag1bl[jjj].value=zmontag1;
     $(pricemontag1bl[jjj]).text(zmontag1);
     
     let pricemontagbl=document.getElementsByClassName('pricemontag');
     pricemontagbl[jjj].value=zmontag1*Kz;
     zmontagall=zmontag1*Kz;
     zmontagall=zmontagall.toFixed(2);
     $(pricemontagbl[jjj]).text(zmontagall);
   }


   var newSection = $('<tr class="itog_str"> </tr>');
   let tabbl1=document.getElementsByClassName('tabl_block');
   let numbl=tabbl1.length;
   let jk=numbl-1;
   //alert(jk)
   let itog1b2=document.getElementsByClassName('itog1');

   newSection.html(       
       
       '<td class="table_cell" style="width:10%;"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:40%;"> <span type="text" class="cell_select" value="Итого" readonly >Итого</span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+  
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select priceallbl" value="" readonly ></span></td>')      
     
      $(itog1b2[jk]).append(newSection);
    //    numberbl=document.getElementsByClassName('number');
    //    k=numberbl.length-1;
    //  // numberbl[k].value=N;
    //   $( numberbl[k]).text(N);
    //     N=N+1; 


      let tabl_block=document.getElementsByClassName('tabl_block');
      let nbl=tabl_block.length-1;
      let priceallvv=zgrebenkaall*1+zplankaall*1+zpvxv*1+zmontagall*1;
      let priceallbl=document.getElementsByClassName('priceallbl');
      //priceallbl[nbl].value=priceallvv;
      priceallvv=priceallvv.toFixed(2);
      $(priceallbl[nbl]).text(priceallvv);

      var newSection = $('<tr class="itog_str"> </tr>');
   newSection.html(       
       
       '<td class="table_cell" style="width:10%;"> <span type="text" class="cell_select number" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:40%;"> <span type="text" class="cell_select" value="В том числе НДС 20%" readonly >В том числе НДС 20%</span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+  
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select" value="" readonly ></span></td>\n'+ 
       '<td class="table_cell" style="width:15%;"> <span type="text" class="cell_select priceallblnds" value="" readonly ></span></td>')      
     
      $(itog1b2[jk]).append(newSection);

    //   numberbl=document.getElementsByClassName('number');
    //    k=numberbl.length-1;
    //  // numberbl[k].value=N;
    //   $( numberbl[k]).text(N);
    //     N=N+1; 
      
      let priceallvvnds=(priceallvv/120)*20;
      let priceallblnds=document.getElementsByClassName('priceallblnds');
     // priceallblnds[nbl].value=priceallvvnds;
     let priceallvvndsv=priceallvvnds.toFixed(2)
      $(priceallblnds[nbl]).text(priceallvvndsv);
     

   }


   function delblock(element) {
   
    let sss= $(element).parents('.tabl_block');
   
    sss.remove();
    ADDPrice();
   }

   window.delblock=delblock;


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
    //alert(mailval)

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
   // alert(mailval)

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

