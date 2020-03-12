var NPercon,NKinder,NNumberAll;
NPercon=0;
NKinder=0;
NNumberAll=0;

jQuery(document).ready(function() {
    window.$ = jQuery;



    $('#calc_hover_btn').click(function () {
        openbox2("calc_block_2", this);


    });

    function openbox2(id, calc_block_2) {
        var div = document.getElementById(id);
        if (div.style.display == 'block') {
            div.style.display = 'none';

        }
        else {
            div.style.display = 'block';
            AllPercon();
            NumberBlock();

        }
    }


    function DelNum(element) {

        var block2 = $(element).parents('.adults-block').find('.adults-num');
        var NP = parseFloat($(block2).val());
        NP = NP - 1;
        if (NP <= 0) {
            NP = 0;
        }
        $(block2).val(NP);
        AllPercon();
    }

    window.DelNum = DelNum;


    function AddNum(element) {
        var block2 = $(element).parents('.adults-block').find('.adults-num');
        var NP = parseFloat($(block2).val());
        NP = NP + 1;
        if (NP >= 6) {
            NP = 6;
        }
        $(block2).val(NP);
        AllPercon();

    }

    window.AddNum = AddNum;


    function DelNumK(element) {

        var block2 = $(element).parents('.adults-block').find('.kinder-num');
        var NK = parseFloat($(block2).val());
        NK = NK - 1;
        if (NK <= 0) {
            NK = 0;
        }
        $(block2).val(NK);

        if (NK > 0) {
            var block3 = $(element).parents('.calc_nomer_block2');
            block3.find('.calc_nomer_block2_3').show();
            AllPercon();

        }
        else {
            var block3 = $(element).parents('.calc_nomer_block2');
            block3.find('.calc_nomer_block2_3').hide();
            AllPercon();
        }

        if (NK >= 0) {

            var block4=$(element).parents('.calc_nomer_block2').find('.kinder-block').last();
            block4.remove();
            AllPercon();

        }

    }

    window.DelNumK = DelNumK;


    function AddNumK(element) {
        var block2 = $(element).parents('.adults-block').find('.kinder-num');
        var NK = parseFloat($(block2).val());
        NK = NK + 1;
        if (NK >= 4) {
            NK = 4;
        }
        $(block2).val(NK);

        if ((NK > 0) && (NK <= 4)) {
            var block3 = $(element).parents('.calc_nomer_block2');
            block3.find('.calc_nomer_block2_3').show();
            var block4=$(element).parents('.calc_nomer_block2').find('.calc_nomer_block2_3');

            var NKr = block3.find('.kinder-block').length;
                if (NKr < 4) {
                var newSection = $('<div class="kinder-block">');
                newSection.html('<select required class="kider_sel" size="1" > \n <option value="0"> 0</option>\n <option value="1"> 1</option>\n <option value="2"> 2</option>\n <option value="3"> 3</option>\n <option value="4"> 4</option> \n <option value="5"> 5</option>\n <option value="6"> 6</option>\n <option value="7"> 7</option>\n <option value="8"> 8</option>\n <option value="9"> 9</option>\n <option value="10"> 10</option>\n <option value="11"> 11</option>\n <option value="12"> 12</option>\n <option value="13"> 13</option>\n <option value="14"> 14</option>\n <option value="15"> 15</option>\n <option value="16"> 16</option>\n <option value="17"> 17</option>\n </select> \n </div>'
                );
                block4.append(newSection);
                    AllPercon();
            }
        }
        else {
            var block3 = $(element).parents('.calc_nomer_block2');
            block3.find('.calc_nomer_block2_3').hide();
            AllPercon();
        }

    }

    window.AddNumK = AddNumK;

      $('#addnomers').click(function () {

        var newSection = $('<div class="calc_blocks_nomer">');
        newSection.html('<div class="calc_nomer_block1"> \n <h3><input class="bloc_n"> </input> номер</h3>\n <button type="button" class="delnum" onclick="DelNumer(this); "> Удалить </button>\n  </div> \n <div class="calc_nomer_block2">\n <div class="calc_nomer_block2_1"> \n <h3>Взрослые</h3>\n <div class="adults-block">\n <button type="button" class="arrow-minus" onclick="DelNum(this); "> - </button> \n<input class="adults-num" type="number" value="0" min="0" max="6" readonly/>\n <button type="button" class="qarrow-plus" onclick="AddNum(this); " > + </button>\n </div> \n </div>\n <div class="calc_nomer_block2_2">\n  <h3>Дети</h3>\n <div class="adults-block">\n  <button type="button" class="kinder-minus" onclick="DelNumK(this); "> - </button>\n  <input class="kinder-num" type="number" value="0" min="0" max="4" readonly/>\n <button type="button" class="kinder-plus" onclick="AddNumK(this); " > + </button>\n </div>\n </div>\n  <div class="calc_nomer_block2_3">\n <h3>Возраст ребенка</h3>\n </div>\n </div>\n </div>'
        );
        $('#calc_nomers').append(newSection);
          AllPercon();
          CloseBtn();
          NumberBlock();
      });





     function DelNumer(element) {

         var block4=$(element).parents('.calc_blocks_nomer');
         block4.remove();
         AllPercon();
         CloseBtn();
         NumberBlock();
     }

      window.DelNumer=DelNumer;


     function AllPercon() {

         NPercon=0;
         NKinder=0;
         NNumberAll=0;

         $('.adults-num').each(function () {
             NPercon += parseFloat($(this).val());
          });


         $('.kinder-num').each(function () {
             NKinder += parseFloat($(this).val());
         });
         var NNumberAll = $('.calc_blocks_nomer').length;
         NPercon=+NPercon;
         NKinder=+NKinder;

         var NPerconAll=NPercon+NKinder;
         NPerconAll=NPerconAll+' ';
         NNumberAll=NNumberAll+' ';

         $('#person').text(NPerconAll);
         $('#nomers').text(NNumberAll);
     }


    function CloseBtn() {
        var NNumberAll = $('.calc_blocks_nomer').length;

        if(NNumberAll==6){
            var div = document.getElementById('addnomers');
            div.style.display = 'none';
            var div2 = document.getElementById('addnomers2');
            div2.style.display = 'block';
        }
        else
        {
            var div = document.getElementById('addnomers');
            div.style.display = 'block';
            var div2 = document.getElementById('addnomers2');
            div2.style.display = 'none';
        }


    }

    function NumberBlock() {
        var N = $('.bloc_n').length;

        var block2 = document.getElementsByClassName('bloc_n');

            var Nbl=1;

        for (var i = 0; i < N; i++) {
            block2[i].value=Nbl;
            Nbl=Nbl+1;
        }
    }

  });











