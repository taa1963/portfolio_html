var region, Zmin, Zmax, Kf, Ks,Kp;


Kf=0;
Ks=0;
Kp=0;
region=0;

$(document).ready(function() {

    //========== Нажатие "Дальше" на первом блоке =======================================//

    $('#but_block1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').show();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide();

        var inp1 = document.getElementsByName('region');

        for (var i = 0; i < inp1.length; i++) {
            if (inp1[i].type == "radio" && inp1[i].checked) {
                region=inp1[i].value;
                //alert("selected: " + inp1[i].value);
            }
        }
       //  alert(region);

    });


//=================================================================



    //========== Нажатие "Назад" на втором блоке =======================================//

    $('#but_block2_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block1').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
    });

    //========== Нажатие "Вперед" на втором блоке =======================================//

    $('#but_block2_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block4').hide();
     });



    //========== Нажатие "Назад" на третьем блоке =======================================//

    $('#but_block3_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block2').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
     });

    //========== Нажатие "Вперед" на третьем блоке =======================================//

    $('#but_block3_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
    });



    //========== Нажатие "Назад" на четвертом блоке =======================================//

    $('#but_block4_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3').show();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
    });

//========== Нажатие "Вперед" на четвертом блоке =======================================//

    $('#but_block4_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block5').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
      //  alert(42)
    });


    //========== Нажатие "Назад" на пятом блоке =======================================//

    $('#but_block5_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').hide();
    });

//========== Нажатие "Вперед" на пятом блоке =======================================//

    $('#but_block5_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block6').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block5').hide();
    });

    //========== Нажатие "Назад" на шестом блоке =======================================//

    $('#but_block6_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block5').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block6').hide();
    });


    //=================================================//

    function zena() {

        Zmin= (2*l1+2*s1)*h1*Kf*Ks*Kp*1100;

        Zmin=Zmin.toFixed(2);

        $('#Zmin').text(Zmin);
        // alert(Zmin);

        Zmax= (2*l1+2*s1)*h1*Kf*Ks*Kp*2200;
        Zmax=Zmax.toFixed(2);
        $('#Zmax').text(Zmax);

       // Zmax=Zmax.toFixed(2);



    };




});














