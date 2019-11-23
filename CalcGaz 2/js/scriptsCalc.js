var  Zena1000, Zena1000_2, ZenaGaz;


Zena1000=19;
// Zena2000=18.5;
// Zena3000=18;
// Zena6000=17.7;

Zena1000_2=19.5;
// Zena2000_2=19;
// Zena3000_2=18.5;
// Zena6000_2=18;

ZenaGaz=0;

$(document).ready(function() {



//========== Определение объема газа ввод значения =======================================//
   //===== запрет на ввод точки, запятой, минуса   =====//

    $('#VgazmaxR').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


   //===== Вычитка введеного значения и движение ползунка.
    // Определение обема газа после ввода значения   =====//
    $('.VgazmaxR').bind('change keyup',function () {

        var VgazV = document.getElementById('VgazmaxR').value;
        //
        // VgazV=+VgazV;
        // if  (VgazV<1000){
        //     VgazV=1000;
        // }
        //
        // if  (VgazV>8000){
        //     VgazV=8000;
        // }

        document.getElementById('vgaz').value = VgazV;
        // document.getElementById('VgazmaxR').value = VgazV;




    });

    $('.VgazmaxR').click(function () {

        var VgazV = document.getElementById('VgazmaxR').value;

        VgazV=+VgazV;
        // if  (VgazV<1000){
        //     VgazV=1000;
        // }

        // if  (VgazV>8000){
        //     VgazV=8000;
        // }

        document.getElementById('vgaz').value = VgazV;
        // document.getElementById('VgazmaxR').value = VgazV;




    });








//========== Определение Региона   =======================================//

    $('#list1').click(function () {
        var val = document.getElementById("list1").value;

        $('#val').text(val);
        if (val==1) {ZenaGaz=Zena1000; };
        if (val==2) {ZenaGaz=Zena1000_2; };


    });


    //============== Вычисление окончательной цены ===================================//

    $('#ZenaR').click(function () {


        Zena();



    });




    function Zena() {

        var Vgaz = document.getElementById('VgazmaxR').value;

        var val = document.getElementById("list1").value;

        $('#val').text(val);
        if (val==1) {var Zenal=Zena1000; };
        if (val==2) {var Zenal=Zena1000_2; };

        ZenaGaz=Vgaz*Zenal;

         $('#Zena').text(ZenaGaz);

       };








});




