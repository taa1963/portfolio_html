var  Zena,zenaPr,ZenaPd;

Zena=0;
ZenaPr=0;
ZenaPd=0;
$('#Zena').text(Zena);



$(document).ready(function() {

    //===== Контроль ввода длинны простыни    =====//

    $('#land_pr').click (function() {
        var land_prv = document.getElementById("land_pr").value;
        $('#land_prv').text(land_prv);
         zena();
    });


    $('#land_pr').bind('change keyup',function () {
        var land_prv = document.getElementById("land_pr").value;
        $('#land_prv').text(land_prv);
        zena();
    });


     $('#land_pr').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
         var land_prv = document.getElementById("land_pr").value;
         zena();
     });


//===== Контроль ввода ширины  простыни  =====//
    $('#breadth_pr').click (function() {
        var breadth_prv = document.getElementById("breadth_pr").value;
        $('#breadth_prv').text(breadth_prv);
        zena();
    });


    $('#breadth_pr').bind('change keyup',function () {
            var breadth_prv = document.getElementById("breadth_pr").value;
            zena();
        });

        $('#breadth_pr').keypress(function(e) {
            if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
            var breadth_prv = document.getElementById("breadth_pr").value;
            zena();
        });



    //===== Контроль ввода длинны пододеяльника    =====//

    $('#land_pd').click (function() {
        var land_pdv = document.getElementById("land_pd").value;
        $('#land_pdv').text(land_pdv);
        zena();
    });


    $('#land_pd').bind('change keyup',function () {
        var land_pdv = document.getElementById("land_pd").value;
        $('#land_pdv').text(land_pdv);
        zena();
    });


    $('#land_pd').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
        var land_pdv = document.getElementById("land_pd").value;
        zena();
    });



//===== Контроль ввода ширины  пододеяльника  =====//
    $('#breadth_pd').click (function() {
        var breadth_pdv = document.getElementById("breadth_pd").value;
        $('#breadth_pdv').text(breadth_pdv);
        zena();
    });


    $('#breadth_pd').bind('change keyup',function () {
        var breadth_pdv = document.getElementById("breadth_pd").value;
        zena();
    });

    $('#breadth_pd').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
        var breadth_pdv = document.getElementById("breadth_pd").value;
        zena();
    });







    //============== Вычисление цены ===================================//

    function zena() {
        ZenaPr=0;
        ZenaPd=0;

        //============== Вычисление цены простыни ===================================//

        var land_prv = document.getElementById("land_pr").value;
        $('#land_prv').text(land_prv);
        // if (document.getElementById("owner").value == 1)

        if ((document.getElementById("breadth_pr").value>= 147)&&(document.getElementById("breadth_pr").value<=152)) {
            var land_prv = document.getElementById("land_pr").value;
            $('#land_prv').text(land_prv);

            ZenaPr = 1.95*land_prv+37.55;
            $('#ZenaPr').text(ZenaPr);
        }

        if ((document.getElementById("breadth_pr").value>= 153)&&(document.getElementById("breadth_pr").value<=237)) {
            var land_prv = document.getElementById("land_pr").value;
            $('#land_prv').text(land_prv);

            ZenaPr= 3.25*land_prv+54.25;
            $('#ZenaPr').text(ZenaPr);
        }

        if ((document.getElementById("breadth_pr").value>= 238)&&(document.getElementById("breadth_pr").value<=277)) {
            var land_prv = document.getElementById("land_pr").value;
            $('#land_prv').text(land_prv);

            ZenaPr = 3.64*land_prv+62.76;
            $('#ZenaPr').text(ZenaPr);
        }

        if ((document.getElementById("breadth_pr").value>= 278)&&(document.getElementById("breadth_pr").value<=310)) {
            var land_prv = document.getElementById("land_pr").value;
            $('#land_prv').text(land_prv);

            ZenaPr = 3.9*land_prv+70.1;
            $('#ZenaPr').text(ZenaPr);
        }


        //============== Вычисление цены пододеяльника ===================================//

        var land_pdv = document.getElementById("land_pd").value;
        $('#land_pdv').text(land_pdv);


        if ((document.getElementById("breadth_pd").value>= 147)&&(document.getElementById("breadth_pd").value<=152)) {
            var land_pdv = document.getElementById("land_pd").value;
            $('#land_pdv').text(land_pdv);
            ZenaPd = 3.9*land_pdv+72.300;
            $('#ZenaPd').text(ZenaPd);
        }

        if ((document.getElementById("breadth_pd").value>= 153)&&(document.getElementById("breadth_pd").value<=237)) {
            var land_pdv = document.getElementById("land_pd").value;
            $('#land_pdv').text(land_pdv);
            ZenaPd = 6.5021*land_pdv+94.9821;
            $('#ZenaPd').text(ZenaPd);

        }

        if ((document.getElementById("breadth_pd").value>= 238)&&(document.getElementById("breadth_pd").value<=277)) {
            var land_pdv = document.getElementById("land_pd").value;
            $('#land_pdv').text(land_pdv);
            ZenaPd = 7.2801*land_pdv+105.95;
            $('#ZenaPd').text(ZenaPd);
        }

        if ((document.getElementById("breadth_pd").value>= 278)&&(document.getElementById("breadth_pd").value<=310)) {
            var land_pdv = document.getElementById("land_pd").value;
            $('#land_pdv').text(land_pdv);
            ZenaPd = 7.8*land_pdv+114.6;
            $('#ZenaPd').text(ZenaPd);
         }





        //============== Вычисление окончательной цены   ===================================//
        var breadth_pdv = document.getElementById("breadth_pd").value;
        $('#breadth_pdv').text(breadth_pdv);

        if ((breadth_pdv<137)||(breadth_pdv>308)){
            ZenaPd=0;
        }

        if ((land_pdv<200)||(land_pdv>351)){
            ZenaPd=0;
        }

        //==============
        var breadth_prv = document.getElementById("breadth_pr").value;
        $('#breadth_prv').text(breadth_prv);

        if ((breadth_prv<137)||(breadth_prv>308)){
            ZenaPr=0;
        }

        if ((land_prv<200)||(land_prv>351)){
            ZenaPr=0;
        }





        ZenaPr=Math.round(ZenaPr);
        ZenaPd=Math.round(ZenaPd);

        Zena=ZenaPr+ZenaPd;
        $('#Zena').text(Zena);


    };


});




