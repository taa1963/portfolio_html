var  ZenaBas, KVostV,KgasV,Kgasz,  Kserv, Kstanz, NServmax, Zenaserv,NStanmax,Zenastan, Kobsl, Kpisyt;


Kserv=0;
Kstanz=800;
ZenaBas=0;
NServmax=0;
Zenaserv=0;
NStanmax=0;
Zenastan=0;
Kobsl=1;
Kpisyt=1;

KVostV=0;
KgasV=0;
Kgasz=0;


$(document).ready(function() {
//========== Введение объема газголдера при движение ползунка  =====================//
    var vgas,Vgas,KgasV;
    var Vgas = document.getElementById('vgas').value;
     $('#VgasR').text(Vgas);


    // zena();



//========== Определение объема газголдера ввод значения =======================================//
   //===== запрет на ввод точки, запятой, минуса   =====//

    $('#VgasR').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


   //===== Вычитка введеного значения и движение ползунка.
    // Определение объема газголдера после ввода значения и синхронное движение ползунка   =====//
    $('.VgasR').bind('change keyup',function () {

        var KgasV = document.getElementById('VgasR').value;

        Kgas=+KgasV;

        $('#KgasV').text(KgasV);
        document.getElementById('vgas').value = KgasV;
        var VgasR = document.getElementById("vgas").value;
        Kgasz=+KgasV;
        $('#Kgasz').text(Kgasz);
        zena();

    });

    // Определение объема газголдера при нажатие стрелок и синхронное движение ползунка   =====//
    $('.VgasR').click(function (){

        var KgasV = document.getElementById('VgasR').value;

        Kgas=+KgasV;

        $('#KgasV').text(KgasV);

        document.getElementById('vgas').value = KgasV;
        var VgasR = document.getElementById("vgas").value;
        Kgasz=+KgasV;
        $('#Kgasz').text(Kgasz);
        zena();
    });



//========== Определение объема газголдера  после движение ползунка=====//
    $(function() {

        $("#vgas").on('input',function () {

            var KgasV = document.getElementById('VgasR').value;

            Kgasz=+KgasV;
            $('#Kgasz').text(Kgasz);

          zena();

        })
    })


//========== Определение процента остатка газа =======================================//

    //===== запрет на ввод точки, запятой, минуса   =====//

    $('#Vost').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });



    // Определение процента остатка газа после ввода значения   =====//

    $('.Vost').bind('change keyup',function che() {

        var KVost = document.getElementById('Vost').value;

        KVostV = +KVost;

        $('#KVostV').text(KVostV);


        zena();

        // if (KVost <= 0) {KVost=0;
        //     $('#KVost').text(KVost);
        // }

    // снятие чека в значение первичной заправки, если указали процента остатка газа   ===//
        if (KVost > 0) {

            $('#primary').attr('checked', false);

        }


        //zena();


    });


    // Определение установки значения первичной заправки, если установили процента остатка газа ставим=0   =====//

    $('#primary').click(function (){
        var chbox;
        chbox=document.getElementById('primary');
        if (chbox.checked) {
            document.getElementById("Vost").value = 0;
            // alert ('Не выбран');

        }
        else {
            // alert ('Не выбран');
        }


        var KVost = document.getElementById('Vost').value;

        KVostV = +KVost;

        $('#KVostV').text(KVostV);


        zena();

    });


    //============== Вычисление окончательной цены ===================================//

    function zena() {


       
        Zena=(Kgasz*0.85 - (Kgasz*KVostV/100))*20;
        //Zena=(Kgasz*0.85)*20;
       // alert(KVostV);
        // alert(KVost);

        $('#Zena').text(Zena);





        document.getElementById("bs").style.display="block";

        // if (Kpisyt==2) {
        //     Zena=130000;
        // };
        // if (Zena>200000) {
        //     Zena="Свяжитесь с нами для получения предложения";
        //     document.getElementById("bs").style.display="none";
        // };
        //
        // if (Kobsl==5) {
        //     Zena="Свяжитесь с нами для получения предложения";
        //     document.getElementById("bs").style.display="none";
        // };

        // $('#Zena').text(Zena);

    };


    $('#but1').click(function (){
        var block = $(this).parents('.calc');
        block.find('.calc_form').show();
        // block.find('.zakas_block2').show();


    });




});




