var type,Nkarat,color,purity,data_color,data_purity;   
type=1;
Nkarat=0.5;
color=3;
purity=3;
data_color="F";
data_purity='VVS2';

$(document).ready(function() {

    prise();
    //========== Нажатие "Оценить" на втором блоке =======================================//

    $('#button_block3').click(function () {
        var block = $(this).parents('.container');
        block.find('.bl2_mail').show();
        block.find('.block1_right_text').hide();       
    });

     //========== Нажатие "Закрыть" на блоке отправки =======================================//

     $('#fa-times').click(function () {
        var block = $(this).parents('.container');
        block.find('.bl2_mail').hide();
        block.find('.block1_right_text').show();

       
    });


 //========== Нажатие "Заказать" на втором блоке =======================================//

 $('#btnprise').click(function () {
    
    var block = $(this).parents('.container');
    block.find('.sakas2').show();
    block.find('.block3_zakas_left').addClass('block3_zakas_maail');       
});

 //========== Нажатие "Закрыть" на блоке отправки =======================================//

 $('#fa-times3').click(function () {
    var block = $(this).parents('.container');
    block.find('.sakas2').hide();
    block.find('.block3_zakas_left').removeClass('block3_zakas_maail'); 

   
});

//========== Нажатие "Подробнее" на втором блоке =======================================//

$('#envelope-open').click(function () {
    var block = $(this).parents('.container');
    block.find('.block4_text').show();
    block.find('.block1').hide();       
});

//========== Нажатие "Назад" на четвертом блоке =======================================//

$('#left4').click(function () {
    var block = $(this).parents('.container');
    block.find('.block4_text').hide();
    block.find('.block1').show();       
});




//========== Нажатие "левой" кнопки гавной форме  =======================================//

    $('#left1,.button_block2').click(function () {
       var block = $(this).parents('.container');
       block.find('.block1').hide();
       block.find('.block3_zakas').show();
    });

    //========== Нажатие "правой" кнопки форме заказа  =======================================//

    $('#right2').click(function () {
        var block = $(this).parents('.container');
        block.find('.block1').show();
        block.find('.block3_zakas').hide();
     });

   


     //========== функция выбора типа брилианта =======================================//
    function form1f(elem){
      type =elem.value;
       
       var block = $(elem).parents('.forma_almaz');
       
      var img=block.find('.formimg'); 
       
       var fimg=$(img).attr("src");
      

       var str3 = fimg.slice(-5,-4);

       

       if ((str3 != 'a')&&(type==1)){
        $(img).attr("src", "img/forma/f1a.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");
        prise();
       }
       else
       {
        prise();
       }


       if ((str3 != 'a')&&(type==2)){
        $(img).attr("src", "img/forma/f2a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==3)){
        $(img).attr("src", "img/forma/f3a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==4)){
        $(img).attr("src", "img/forma/f4a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==5)){
        $(img).attr("src", "img/forma/f5a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==6)){
        $(img).attr("src", "img/forma/f6a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==7)){
        $(img).attr("src", "img/forma/f7a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");       
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==8)){
        $(img).attr("src", "img/forma/f8a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");       
        $('#formimg9').attr("src", "img/forma/f9.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==9)){
        $(img).attr("src", "img/forma/f9a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg10').attr("src", "img/forma/f10.png");

        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(type==10)){
        $(img).attr("src", "img/forma/f10a.png");
        $('#formimg1').attr("src", "img/forma/f1.png");
        $('#formimg2').attr("src", "img/forma/f2.png");
        $('#formimg3').attr("src", "img/forma/f3.png");
        $('#formimg4').attr("src", "img/forma/f4.png");
        $('#formimg5').attr("src", "img/forma/f5.png");
        $('#formimg6').attr("src", "img/forma/f6.png");
        $('#formimg7').attr("src", "img/forma/f7.png");
        $('#formimg8').attr("src", "img/forma/f8.png");
        $('#formimg9').attr("src", "img/forma/f9.png");

        prise();
       }
       else
       {
        prise();
       }      

    }

    window.form1f=form1f;
    

    //=========== Нажатие стрелки вверх на размерах каратов    ======================//

    $('#pluskarat').click(function () {
        Nkarat=document.getElementById('inpkarat').value;
        Nkarat=Nkarat*1+0.1;
        Nkarat=Nkarat.toFixed(2);
        if(Nkarat>5){
            Nkarat=5;
        }
        document.getElementById('inpkarat').value=Nkarat;
        $('#spankarat').text(Nkarat);
        prise();
    }); 
    
    //=========== Нажатие стрелки вниз на размерах каратов    ======================//

    $('#minuskarat').click(function () {
        Nkarat=document.getElementById('inpkarat').value;
        Nkarat=Nkarat*1-0.1;
        Nkarat=Nkarat.toFixed(2);
        if(Nkarat<0.5){
            Nkarat=0.5;
        }
        document.getElementById('inpkarat').value=Nkarat;
        $('#spankarat').text(Nkarat);
        prise();
    });  
   

 //========== функция выбора Цвет бриллианта =======================================//
 function color1f(elem){
    color =elem.value;
     
     var block = $(elem).parents('.forma_color');
     
    var img=block.find('.formimg'); 
     
     var fimg=$(img).attr("src");
    

     var str3 = fimg.slice(-5,-4);
     data_color=elem.dataset.color;
     if ((str3 != 'a')&&(color==1)){
      $(img).attr("src", "img/color/z1a.png");
      $('#colorimg2').attr("src", "img/color/z2.png");
      $('#colorimg3').attr("src", "img/color/z3.png");
      $('#colorimg4').attr("src", "img/color/z4.png");
      $('#colorimg5').attr("src", "img/color/z5.png");
      $('#colorimg6').attr("src", "img/color/z6.png");
      $('#colorimg7').attr("src", "img/color/z7.png");
      $('#colorimg8').attr("src", "img/color/z8.png");
      
      prise();
     }
     else
     {
      prise();
     }

     if ((str3 != 'a')&&(color==2)){
        $(img).attr("src", "img/color/z2a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==3)){
        $(img).attr("src", "img/color/z3a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==4)){
        $(img).attr("src", "img/color/z4a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==5)){
        $(img).attr("src", "img/color/z5a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==6)){
        $(img).attr("src", "img/color/z6a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==7)){
        $(img).attr("src", "img/color/z7a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg8').attr("src", "img/color/z8.png");
        
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(color==8)){
        $(img).attr("src", "img/color/z8a.png");
        $('#colorimg1').attr("src", "img/color/z1.png");
        $('#colorimg2').attr("src", "img/color/z2.png");
        $('#colorimg4').attr("src", "img/color/z4.png");
        $('#colorimg3').attr("src", "img/color/z3.png");
        $('#colorimg5').attr("src", "img/color/z5.png");
        $('#colorimg6').attr("src", "img/color/z6.png");
        $('#colorimg7').attr("src", "img/color/z7.png");
        
        prise();
       }
       else
       {
        prise();
       }




    }

    window.color1f=color1f;

    //========== функция выбора Чистота бриллианта =======================================//
 function purityf(elem){
    purity =elem.value;
     
     var block = $(elem).parents('.forma_purity');
     
    var img=block.find('.formimg'); 
     
     var fimg=$(img).attr("src");
    

     var str3 = fimg.slice(-5,-4);
     data_purity=elem.dataset.purity;

     if ((str3 != 'a')&&(purity==1)){
      $(img).attr("src", "img/purity/h1a.png");
      $('#purityimg2').attr("src", "img/purity/h2.png");
      $('#purityimg3').attr("src", "img/purity/h3.png");
      $('#purityimg4').attr("src", "img/purity/h4.png");
      $('#purityimg5').attr("src", "img/purity/h5.png");
      $('#purityimg6').attr("src", "img/purity/h6.png");
      $('#purityimg7').attr("src", "img/purity/h7.png");
      $('#purityimg8').attr("src", "img/purity/h8.png");      
      prise();
     }
     else
     {
      prise();
     }

     if ((str3 != 'a')&&(purity==2)){
        $(img).attr("src", "img/purity/h2a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }
       if ((str3 != 'a')&&(purity==3)){
        $(img).attr("src", "img/purity/h3a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(purity==4)){
        $(img).attr("src", "img/purity/h4a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(purity==5)){
        $(img).attr("src", "img/purity/h5a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(purity==6)){
        $(img).attr("src", "img/purity/h6a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(purity==7)){
        $(img).attr("src", "img/purity/h7a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg8').attr("src", "img/purity/h8.png");      
        prise();
       }
       else
       {
        prise();
       }

       if ((str3 != 'a')&&(purity==8)){
        $(img).attr("src", "img/purity/h8a.png");
        $('#purityimg1').attr("src", "img/purity/h1.png");
        $('#purityimg2').attr("src", "img/purity/h2.png");
        $('#purityimg3').attr("src", "img/purity/h3.png");
        $('#purityimg4').attr("src", "img/purity/h4.png");
        $('#purityimg5').attr("src", "img/purity/h5.png");
        $('#purityimg6').attr("src", "img/purity/h6.png");
        $('#purityimg7').attr("src", "img/purity/h7.png");      
        prise();
       }
       else
       {
        prise();
       }

    }

   window.purityf=purityf;


//===== Функция расчета цены  =====//
 function prise(){
    //===  Вычитываем значение базовой цены в заисимости от формы брилианта    ===//
    var Ztypest=window['Zbriliant'+type];

    //===  Вычитываем Размер в каратах брилианта    ===//
    var Nkarat=document.getElementById('inpkarat').value;

    var Nkaratv='05';

    if((Nkarat>=0.5)&&(Nkarat<0.7)){
        var Nkaratv='05';  
    }

    if((Nkarat>=0.7)&&(Nkarat<0.9)){
        var Nkaratv='07';  
    }

    if((Nkarat>=0.9)&&(Nkarat<1)){
        var Nkaratv='09'; 
    }

    if((Nkarat>=1.0)&&(Nkarat<1.5)){
        var Nkaratv='10'; 
    }

    if((Nkarat>=1.5)&&(Nkarat<2.0)){
        var Nkaratv='15'; 
    }
    if((Nkarat>=2.0)&&(Nkarat<3.0)){
        var Nkaratv='25'; 
    }

    if((Nkarat>=3.0)&&(Nkarat<4.0)){
        var Nkaratv='35'; 
    }
    if((Nkarat>=4.0)&&(Nkarat<=5.0)){
        var Nkaratv='45'; 
    }       

    var KAll=window[data_color+data_purity+Nkaratv];
  
    var Prise=Ztypest*1*Nkarat*1*KAll;

     Prise=Prise.toFixed(2); 

    $('#prisev').text(Prise);  

 }

});














