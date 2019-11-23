var  Zena1000, Zena2000, Zena3000, Zena6000,Zena1000_2, Zena2000_2, Zena3000_2, Zena6000_2,ZenaGaz;


Zena1000=19;
Zena2000=18.5;
Zena3000=18;
Zena6000=17.7;

Zena1000_2=19.5;
Zena2000_2=19;
Zena3000_2=18.5;
Zena6000_2=18;

ZenaGaz=0;

$(document).ready(function() {



//========== Определение объема газа ввод значения =======================================//
   //===== запрет на ввод точки, запятой, минуса   =====//

    $('#VgazmaxR').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


   //===== Вычитка введеного значения и движение ползунка.
    // Определение обема газа после ввода значения   =====//


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




    //========== Определение растояния доставки ввод значения =======================================//
    //===== запрет на ввод точки, запятой, минуса   =====//

    $('#LgazmaxR').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
    });


    //===== Вычитка введеного значения и движение ползунка.
    // Определение растояния  после ввода значения   =====//
    $('#LgazmaxR').bind('change keyup',function () {

        var LVgazV = document.getElementById('LgazmaxR').value;
        LVgazV=+LVgazV;

        document.getElementById('lgaz').value = LVgazV;

    });

    $('#LgazmaxR').click(function () {

        var LVgazV = document.getElementById('LgazmaxR').value;

        LVgazV=+LVgazV;
        document.getElementById('lgaz').value = LVgazV;


    });





//========== Определение режима  обслуживания клиента  =======================================//

    $('#list1').click(function () {
        var val = document.getElementById("list1").value;

        $('#val').text(val);
        if (val==1) {Kobsl=1; };
        if (val==2) {Kobsl=1.5; };
        if (val==3) {Kobsl=2; };
        if (val==4) {Kobsl=5; };
        zena();

    });


    //============== Вычисление окончательной цены ===================================//

    $('#ZenaR').click(function () {


        Zena();



    });




    function Zena() {

        var Vgaz = document.getElementById('VgazmaxR').value;
        var LVgaz = document.getElementById('LgazmaxR').value;
        var Zenal;
        // alert("eeee");
        LVgaz=+LVgaz;
        Vgaz=+Vgaz;

        if (LVgaz<=100){
            if (Vgaz<=1000){
                Zenal=Zena1000
            }
            if ((Vgaz>1000)&&(Vgaz<=2000)){
                Zenal=Zena2000
            }
            if ((Vgaz>2000)&&(Vgaz<=3000)){
                Zenal=Zena3000
            }
            if ((Vgaz>3000)){
                Zenal=Zena6000
            }
         }

        if (LVgaz>100){
            if (Vgaz<=1000){
                Zenal=Zena1000_2
            }
            if ((Vgaz>1000)&&(Vgaz<=2000)){
                Zenal=Zena2000_2
            }
            if ((Vgaz>2000)&&(Vgaz<=3000)){
                Zenal=Zena3000_2
            }
            if ((Vgaz>3000)){
                Zenal=Zena6000_2
            }
        }



        ZenaGaz=Vgaz*Zenal;

         $('#Zena').text(ZenaGaz);

       };








});




