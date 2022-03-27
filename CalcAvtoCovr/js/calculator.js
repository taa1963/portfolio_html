let jacheka=1;
let colorj=1;
let border=1;
let zshild=0;
let complekt=0;
let zshildv=0;
let zkovrbagaq=0;
let zpodpjtnikchek=0;

$(document).ready(function() {

  //== первоначальное заполнение полей цен при открытие страницы ==//
    $('#complect_all').text(complect_all+' '+'руб');
    $('#complect_per').text(complect_per+' '+'руб');
    $('#bagag').text(bagag+' '+'руб');
    $('#podpjtnik').text(podpjtnik+' '+'руб');
    $('#shildik').text(shildik+' '+'руб');

    $('.color_romb1').hide();
    $('.color_sota1').show();
    $('.calculator_color_color_romb').addClass('calculator_color_close');
    $('.calculator_color_color_sota').removeClass('calculator_color_close');
    $('.kovr_romb1').addClass('kovr_close1');
    
    zena();

   // == нажатие на элементе "С бортиком"====//
    $('#but_select1').click(function () {
        $('.but_select1').addClass('but_select_celect');
        $('.but_select2').removeClass('but_select_celect');
    });   


    // == нажатие на элементе "Без бортика"====//
    $('#but_select2').click(function () {
        $('.but_select2').addClass('but_select_celect');
        $('.but_select1').removeClass('but_select_celect');
    });  



    // == нажатие на элементе "КОМПЛЕКТ ПОЛНЫЙ   "====//
    $('#but_select3').click(function () {
        $('.but_select3').addClass('but_select_celect');
        $('.but_select4').removeClass('but_select_celect');
        complekt=complect_all;
        zena();
    });   


    // == нажатие на элементе "КОМПЛЕКТ ПЕРЕДНИХ      "====//
    $('#but_select4').click(function () {
        $('.but_select4').addClass('but_select_celect');
        $('.but_select3').removeClass('but_select_celect');
        complekt=complect_per;
        zena();
    });  


    // == нажатие кнопки "МИНУС" в элементе "ШИЛЬДИК"====//
    $('#spminus').click(function () {
       let n= document.getElementById('numshild').value;
       n=n*1;
       if (n==1) {
           n=1;
       }
       else {
           n=n-1;
       }
       document.getElementById('numshild').value=n;
       zshild=n*shildik;
       $('#shildik').text(zshild+' '+'руб');

       if($("#shild").is(":checked")) {  
        zshildv=zshild;
        }
        else{
            zshildv=0;   
        }
       zena();
    });


    // == нажатие кнопки "ПЛЮС" в элементе "ШИЛЬДИК"====//
    $('#spplus').click(function () {
        let n= document.getElementById('numshild').value;
        n=n*1;
            n=n+1;
            document.getElementById('numshild').value=n;
            zshild=n*shildik;
       $('#shildik').text(zshild+' '+'руб');

       if($("#shild").is(":checked")) {  
        zshildv=zshild;
        }
        else{
            zshildv=0;   
        }
       zena(); 
     });

   // == клик на элементе "ШИЛЬДИК", проверяем выбор эелента====//

     $('#shild').click(function () {

     if($("#shild").is(":checked")) {  
         if (zshild==0){
            zshild=200;
         }


        zshildv=zshild;
        }
        else{
            zshildv=0;   
        }
       zena(); 
    });  

    // == клик на элементе "Коврик в багажник", проверяем выбор эелента====//

    $('#kovrbagaq').click(function () {

        if($("#kovrbagaq").is(":checked")) {  
            zkovrbagaq=bagag;
           }
           else{
               zkovrbagaq=0;   
           }
          zena(); 
       }); 


      // == клик на элементе "Подпятник", проверяем выбор эелента====//

    $('#podpjtnikchek').click(function () {

        if($("#podpjtnikchek").is(":checked")) {  
            zpodpjtnikchek=podpjtnik;
           }
           else{
               zpodpjtnikchek=0;   
           }
          zena(); 
       });  

       



    
// == нажатие на элементе "Сота   "====//
    $('#sota').click(function () {
        $('.calculator_color_jacheka_img_sota').addClass('calculator_color_jacheka_img_cl');
        $('.calculator_color_jacheka_img_romb').removeClass('calculator_color_jacheka_img_cl');
        jacheka=1;

        $('.calculator_color_color_romb').addClass('calculator_color_close');
        $('.calculator_color_color_sota').removeClass('calculator_color_close');
        $('.color_romb1').hide();
        $('.color_sota1').show();
        print_kovr();
 





    });

    // == нажатие на элементе "Ромб "====//
    $('#romb').click(function () {
        $('.calculator_color_jacheka_img_sota').removeClass('calculator_color_jacheka_img_cl');
        $('.calculator_color_jacheka_img_romb').addClass('calculator_color_jacheka_img_cl');

        $('.calculator_color_color_romb').removeClass('calculator_color_close');
        $('.calculator_color_color_sota').addClass('calculator_color_close');
        $('.color_romb1').show();
        $('.color_sota1').hide();
        jacheka=2;
        print_kovr();

    });


    function colorf(vthis){
        colorj=$(vthis).attr('data-color');
        $('.calculator_color_color_img_sota').removeClass('calculator_color_color_img_cl');
        let block = $(vthis).parent('.calculator_color_color_img_sota');
        block.addClass('calculator_color_color_img_cl');
        print_kovr();
    }
    window.colorf = colorf;



    function colorbord(vthis){
        border=$(vthis).attr('data-border');
        $('.calculator_color_color_img_border').removeClass('calculator_color_color_img_cl');
        let block = $(vthis).parent('.calculator_color_color_img_border');
        block.addClass('calculator_color_color_img_cl');
        print_border();
    }
    window.colorbord = colorbord;


    function print_border(){
        if(border==1)  {
          $('.border1').removeClass('border_close');
          $('.border2').addClass('border_close');
          $('.border3').addClass('border_close');
          $('.border4').addClass('border_close');
          $('.border5').addClass('border_close');
          $('.border6').addClass('border_close');
          $('.border7').addClass('border_close');
          $('.border8').addClass('border_close');
          $('.border9').addClass('border_close');
          $('.border10').addClass('border_close');
          $('.border11').addClass('border_close');
          $('.border12').addClass('border_close');
          $('.border13').addClass('border_close');
          $('.border14').addClass('border_close');
        }

        if(border==2)  {
            $('.border1').addClass('border_close');
            $('.border2').removeClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==3)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').removeClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==4)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').removeClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==5)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').removeClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }
          if(border==6)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').removeClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }
          if(border==7)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').removeClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==8)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').removeClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==9)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').removeClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==10)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').removeClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==11)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').removeClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==12)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').removeClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==13)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').removeClass('border_close');
            $('.border14').addClass('border_close');
          }

          if(border==14)  {
            $('.border1').addClass('border_close');
            $('.border2').addClass('border_close');
            $('.border3').addClass('border_close');
            $('.border4').addClass('border_close');
            $('.border5').addClass('border_close');
            $('.border6').addClass('border_close');
            $('.border7').addClass('border_close');
            $('.border8').addClass('border_close');
            $('.border9').addClass('border_close');
            $('.border10').addClass('border_close');
            $('.border11').addClass('border_close');
            $('.border12').addClass('border_close');
            $('.border13').addClass('border_close');
            $('.border14').removeClass('border_close');
          }



    };      





    function print_kovr(){
      if((jacheka==1) &&(colorj==1)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==1)) {
        $('.kovr_romb1').removeClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==2)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').removeClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==2)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').removeClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==3)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').removeClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==3)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').removeClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==4)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').removeClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==4)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').removeClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==5)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').removeClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==5)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').removeClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }


      if((jacheka==1) &&(colorj==6)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').removeClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==6)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').removeClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==7)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').removeClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==7)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').removeClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }


      if((jacheka==1) &&(colorj==8)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==8)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').removeClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==9)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').removeClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==9)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_sota8').addClass('kovr_close1');
        $('.kovr_romb9').removeClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==10)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==10)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').removeClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==11)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
       $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==11)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').removeClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==12)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==12)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').removeClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==13)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').removeClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==13)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').removeClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }

      if((jacheka==1) &&(colorj==14)) {
        $('.kovr_romb1').addClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).removeClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').removeClass('kovr_close1');
      }

      if((jacheka==2) &&(colorj==14)) {
        $('.kovr_romb1').removeClass('kovr_close1');
        $('.kovr_sota1').addClass('kovr_close1');
        $('.kovr_romb2').addClass('kovr_close1');
        $('.kovr_sota2').addClass('kovr_close1');
        $('.kovr_romb3').addClass('kovr_close1');
        $('.kovr_sota3').addClass('kovr_close1');
        $('.kovr_romb4').addClass('kovr_close1');
        $('.kovr_sota4').addClass('kovr_close1');
        $('.kovr_romb5').addClass('kovr_close1');
        $('.kovr_sota5').addClass('kovr_close1');
        $('.kovr_romb6').addClass('kovr_close1');
        $('.kovr_sota6').addClass('kovr_close1');
        $('.kovr_romb7').addClass('kovr_close1');
        $('.kovr_sota7').addClass('kovr_close1');
        $('.kovr_romb8').addClass('kovr_close1');
        let cl =$('.calculator_color_color_img_sota');
        $(cl[0]).addClass('calculator_color_color_img_cl');
        $('.kovr_romb9').addClass('kovr_close1');
        $('.kovr_sota9').addClass('kovr_close1');
        $('.kovr_romb10').addClass('kovr_close1');
        $('.kovr_romb11').addClass('kovr_close1');
        $('.kovr_romb12').addClass('kovr_close1');
        $('.kovr_romb13').addClass('kovr_close1');
        $('.kovr_sota14').addClass('kovr_close1');
      }
    };


    function zena(){
        let zenav=0;

        zenav=complekt+zshildv+zkovrbagaq+zpodpjtnikchek;

        $('#prisev').text(zenav+' '+'руб.')

    };     




});














