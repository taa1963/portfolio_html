
$(document).ready(function() {


    function onmov(element){
        var block = $(element).parents('.content3_block_content');
        block.addClass('conthover');
        block.find('.text6').addClass('text6hover');


    };
    window.onmov=onmov;

    function onmodel(element){
        var block = $(element).parents('.content3_block_content');
        block.removeClass('conthover');
        block.find('.text6').removeClass('text6hover');

    };
    window.onmodel=onmodel;

    function onmovp(element){
        var block = $(element).parents('.content3_block_content');
        block.addClass('conthover');
        $(element).addClass('text6hover');


    };
    window.onmovp=onmovp;

    function onmodelp(element){
        var block = $(element).parents('.content3_block_content');
        block.removeClass('conthover');
        $(element).removeClass('text6hover');

    };
    window.onmodelp=onmodelp;




 ///  === Раскрытие вопроса в 8 блоке    ===   ///
   function add81(element){
    var block = $(element).parents('.content8_block_text1');
    block.addClass('content8_del');

    var block2 = $(element).parents('.content8_block');
    block2.find('.content8_block_text2').addClass('content8_act');

   };

   window.add81=add81;


   ///  === Сворачивание вопроса в 8 блоке    ===   ///
   function del81(element){
    var block = $(element).parents('.content8_block_text2');
    block.removeClass('content8_act');

    var block2 = $(element).parents('.content8_block');
    block2.find('.content8_block_text1').removeClass('content8_del');


   };

   window.del81=del81;


   $('#btnhead').click(function(){
      let bl2=document.getElementsByClassName('menu_block2_mob');
      if ($(bl2).is(':visible')) {
        $(bl2).removeClass('menu_block2_mob_add');
      }
      else{


      $(bl2).addClass('menu_block2_mob_add');
      }

   });




});






