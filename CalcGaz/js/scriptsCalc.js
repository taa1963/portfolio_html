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
         document.getElementById('vgaz').value = VgazV;
        // document.getElementById('VgazmaxR').value = VgazV;
        var val = $('.vgaz').val();
        val=+val;
        val=((val-1000)*100)/8000*0.72;
        var vgazline1 = document.getElementById('vgazline');
        vgazline1.style.width = +val+"%";
    });

    $('#VgazmaxR').bind('change keyup',function () {
        var VgazV = document.getElementById('VgazmaxR').value;
        VgazV=+VgazV;
        document.getElementById('vgaz').value = VgazV;
        // document.getElementById('VgazmaxR').value = VgazV;
        var val = $('.vgaz').val();
        val=+val;
        val=((val-1000)*100)/8000*0.72;
        var vgazline1 = document.getElementById('vgazline');
        vgazline1.style.width = +val+"%";

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
        var val2 = $('.lvgaz').val();
        val2=+val2;
        val2=((val2)*100)/200*0.63;
        var vgazline12 = document.getElementById('lgazline');
        vgazline12.style.width = +val2+"%";

    });

    $('#LgazmaxR').click(function () {
        var LVgazV = document.getElementById('LgazmaxR').value;
        LVgazV=+LVgazV;
        document.getElementById('lgaz').value = LVgazV;
        var val2 = $('.lvgaz').val();
        val2=+val2;
        val2=((val2)*100)/200*0.63;
        var vgazline12 = document.getElementById('lgazline');
        vgazline12.style.width = +val2+"%";

    });


    //============== Вычисление окончательной цены ===================================//

    $('#ZenaR').click(function () {
        Zena();
    });




    function Zena() {

        var Vgaz = document.getElementById('VgazmaxR').value;
        var LVgaz = document.getElementById('LgazmaxR').value;
        var Zenal;
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




