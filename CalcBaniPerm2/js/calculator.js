var  Kf, Ks, Ket, Nfund, Nsten, Net;


Kf=0;
Ks=22300;
Ket=1;
Nfund='Свайный';
Nsten='Рубленное Бревно 140-200';
Net='Один этаж';

$(document).ready(function() {

    //========== Нажатие "Назад" на  блоке "Фундамент" =======================================//

    $('#but_block2_1').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block2').show();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
    });

    //========== Нажатие "Вперед" на блоке "Фундамент" =======================================//

    $('#but_block2_3').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
     });

    //========== Нажатие "Назад" на  блоке "Стены" =======================================//

    $('#but_block3_2').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block2').show();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
     });

    //========== Нажатие "Вперед" на  блоке "Стены" =======================================//

    $('#but_block3_4').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block4').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
    });



    //========== Нажатие "Назад" на  блоке "Этажность"=======================================//

    $('#but_block4_3').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').show();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
    });

    //========== Нажатие "Вперед" на  блоке "Этажность" =======================================//

    $('#but_block4_5').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block4').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').show();
        block.find('.zakas_block6').hide();
    });


    //========== Нажатие "Назад" на  блоке "Площадь"=======================================//

    $('#but_block5_4').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').hide();
    });

    //========== Нажатие "Вперед" на  блоке "Площадь" =======================================//

    $('#but_block5_6').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block4').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').show();
        zena();
    });


    //========== Нажатие "Назад" на  блоке "Итоги"=======================================//

    $('#but_block6_5').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block5').show();
        block.find('.zakas_block6').hide();
       // zena();
    });

    //========== Нажатие "Вперед" на  блоке "Итоги" =======================================//

    $('#but_block6_6').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block4').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').hide();
        block.find('.zakas_block6').show();
    });



//========== Определение типа фундамента =======================================//

    $('#fund1').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis1').show();
        block.find('.zakas_block2_type_opis2').hide();
        block.find('.zakas_block2_type_opis3').hide();
    });

    $('#fund2').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis2').show();
        block.find('.zakas_block2_type_opis1').hide();
        block.find('.zakas_block2_type_opis3').hide();
     });



    $('#fund3').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis3').show();
        block.find('.zakas_block2_type_opis1').hide();
        block.find('.zakas_block2_type_opis2').hide();
     });

    //========== Определение коэффицента фундамента =======================================//


    $('#fund1').click(function () {
        Kf=Kflenta;
        Nfund=document.getElementById('fund1').value;
        zena();

    });

    $('#fund2').click(function () {
        Kf=Kfsv;
        Nfund=document.getElementById('fund2').value;
        zena();
    });

    $('#fund3').click(function () {
        Kf=Kfplita;
        Nfund=document.getElementById('fund3').value;
        zena();
    });







    //========== Определение материала стен =======================================//

    $('#stena1').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').show();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
      });

    $('#stena2').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').show();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena3').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').show();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena4').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').show();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena5').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').show();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena6').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').show();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
    });

    $('#stena7').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').show();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
    });

    $('#stena8').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').show();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena9').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').show();
        block.find('.zakas_block3_type_opis6').hide();
     });

    $('#stena10').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').show();
     });

    $('#stena11').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').show();
    });

    $('#stena12').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        block.find('.zakas_block3_type_opis4').hide();
        block.find('.zakas_block3_type_opis5').hide();
        block.find('.zakas_block3_type_opis6').show();

    });




    //========== Определение коэффицента стен =======================================//


    $('#stena1').click(function () {
        Ks =Ks1;
        Nsten=document.getElementById('br1').value;

        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').show();
        block.find('.zakas_block2_type_pr').hide();
        block.find('.zakas_block2_type_zifr').hide();
        block.find('.zakas_block2_type_gaz').hide();
        zena();

    });

    $('br1').click(function () {
        Ks =Ks1;
        Nsten=document.getElementById('br1').value;
        zena();
    });

    $('br2').click(function () {
        Ks = Ks2;
        Nsten=document.getElementById('br2').value;
        zena();
    });



    //$('#stena2').click(function () {
    //    Ks = Ks2;
    //    Nsten=document.getElementById('stena2').value;
    //    zena();
    //});

    $('#stena3').click(function () {
        Ks = Ks3;
        Nsten=document.getElementById('prof1').value;
        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').hide();
        block.find('.zakas_block2_type_pr').show();
        block.find('.zakas_block2_type_zifr').hide();
        block.find('.zakas_block2_type_gaz').hide();
        zena();

    });

    $('#prof1').click(function () {
        Ks = Ks3;
        Nsten=document.getElementById('prof1').value;
        zena();
    });


    $('#prof2').click(function () {
        Ks = Ks4;
        Nsten=document.getElementById('prof2').value;
        zena();
      });





    $('#stena5').click(function () {
        Ks = Ks5;
        Nsten=document.getElementById('type_zifr1').value;
        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').hide();
        block.find('.zakas_block2_type_pr').hide();
        block.find('.zakas_block2_type_zifr').show();
        block.find('.zakas_block2_type_gaz').hide();
        zena();
    });

    $('#type_zifr1').click(function () {
        Ks = Ks5;
        Nsten=document.getElementById('type_zifr1').value;
        zena();
    });
    $('#type_zifr2').click(function () {
        Ks = Ks6;
        Nsten=document.getElementById('type_zifr2').value;
        zena();
    });
    $('#type_zifr3').click(function () {
        Ks = Ks7;
        Nsten=document.getElementById('type_zif32').value;
        zena();
    });


    //$('#stena6').click(function () {
    //    Ks = Ks6;
    //    Nsten=document.getElementById('stena6').value;
    //    zena();
    //});
    //
    //
    //$('#stena7').click(function () {
    //    Ks = Ks7;
    //    Nsten=document.getElementById('stena7').value;
    //    zena();
    //});
    $('#stena8').click(function () {
        Ks = Ks8;
        Nsten=document.getElementById('stena8').value;
        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').hide();
        block.find('.zakas_block2_type_pr').hide();
        block.find('.zakas_block2_type_zifr').hide();
        block.find('.zakas_block2_type_gaz').hide();
        zena();
    });

    $('#stena9').click(function () {
        Ks = Ks9;
        Nsten=document.getElementById('stena9').value;
        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').hide();
        block.find('.zakas_block2_type_pr').hide();
        block.find('.zakas_block2_type_zifr').hide();
        block.find('.zakas_block2_type_gaz').hide();
        zena();
    });

    $('#stena10').click(function () {
        Ks = Ks10;
        Nsten=document.getElementById('gaz1').value;
        var block = $(this).parents('.zakas_block2_type_vubor');
        block.find('.zakas_block2_type_br').hide();
        block.find('.zakas_block2_type_pr').hide();
        block.find('.zakas_block2_type_zifr').hide();
        block.find('.zakas_block2_type_gaz').show();


        zena();
    });

    $('#gaz1').click(function () {
        Ks = Ks10;
        Nsten=document.getElementById('gaz1').value;
        zena();
    });

    $('#gaz2').click(function () {
        Ks = Ks11;
        Nsten=document.getElementById('gaz2').value;
        zena();
    });
    $('#gaz3').click(function () {
        Ks = Ks12;
        Nsten=document.getElementById('gaz3').value;
        zena();
    });

    //
    //$('#stena11').click(function () {
    //    Ks = Ks11;
    //    Nsten=document.getElementById('stena11').value;
    //    zena();
    //});
    //$('#stena12').click(function () {
    //    Ks = Ks12;
    //    Nsten=document.getElementById('stena12').value;
    //    zena();
    //});







    //========== Определение этажности здания =======================================//

    $('#etahg1').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis1').show();
        block.find('.zakas_block4_type_opis2').hide();
        block.find('.zakas_block4_type_opis3').hide();
     });

    $('#etahg2').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis2').show();
        block.find('.zakas_block4_type_opis1').hide();
        block.find('.zakas_block4_type_opis3').hide();
     });



    $('#etahg3').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis3').show();
        block.find('.zakas_block4_type_opis1').hide();
        block.find('.zakas_block4_type_opis2').hide();
     });

    //========== Определение коэффицента этажности здания =======================================//


    $('#etahg1').click(function () {
        Ket=Ket1;
        Net=document.getElementById('etahg1').value;
        zena();
    });

    $('#etahg2').click(function () {
        Ket=Ket2;
        Net=document.getElementById('etahg2').value;
        zena();
    });

    $('#etahg3').click(function () {
        Ket=Ket3;
        Net=document.getElementById('etahg3').value;
        zena();
    });



    //=================================================//

    function zena() {


       var Sst=document.getElementById('sp').value;
        var Zitog=(Ks*Ket+Kf)*Sst;

        $('#fundament1').text(Nfund);
        $('#typest1').text(Nsten);
        $('#et1').text(Net);
        $('#Sst1').text(Sst);
        $('#Zi1').text(Zitog);

        document.getElementById('fund2m').value=Nfund;
        document.getElementById('Msten2m').value=Nsten;
        document.getElementById('Etag2m').value=Net;
        document.getElementById('Sb2m').value=Sst;
        document.getElementById('Zb2m').value=Zitog;



    };




});














