var Zmin, Zmax, Kf, Ks,Kp, F_type, S_type, P_type;


Kf=1;
Ks=1;
Kp=1;
F_type='Не выбрано';
$('#F_type').text(F_type);

S_type='Не выбрано';
$('#S_type').text(S_type);

P_type='Не выбрано';
$('#P_type').text(P_type);




$(document).ready(function() {

    //Kz=1;

    var long,beam,l1,s1;
    var l1 = document.getElementById('long').value;
    var s1 = document.getElementById('beam').value;
    var h1 = document.getElementById('elevation').value;

    proportions();
    zena();

    function print(){
        l1=l1.toFixed(2);
        document.getElementById('long').value = l1;
        s1=s1.toFixed(2);
        document.getElementById('beam').value = s1;
        document.getElementById('elevation').value = h1;

        proportions();
        zena();
        // alert(l1);
    }


//=================================================================

    $('.long').click(function () {
        var l3 = document.getElementById('long').value;
        var s3 = document.getElementById('beam').value;
            l1=+l3;
            s1=+s3;
            h1=+h1;
        print();
    });

    $('.long').bind('change keyup',function () {
        var l3 = document.getElementById('long').value;
        var s3 = document.getElementById('beam').value;
        l1=+l3;
        s1=+s3;
        h1=+h1;
     print();
    });


    $('.beam').click(function () {
        var l3 = document.getElementById('long').value;
        var s3 = document.getElementById('beam').value;
        l1=+l3;
        s1=+s3;
        h1=+h1;
        print();
    });

    $('.beam').bind('change keyup',function () {
        var l3 = document.getElementById('long').value;
        var s3 = document.getElementById('beam').value;
        l1=+l3;
        s1=+s3;
        h1=+h1;
        print();
    });

    $('.elevation').click(function () {
        var l3 = document.getElementById('long').value;
        var s3 = document.getElementById('beam').value;
        var h3 = document.getElementById('elevation').value;
        l1=+l3;
        s1=+s3;
        h1=+h3;
        // $('#Hmax').text(h1);
        // alert(h1);
        print();
    });




//=================================================================



    $('.fa-angle-up').click(function () {
        var l2 = document.getElementById('long').value;
        var s2 = document.getElementById('beam').value;
        l2=+l2+0.1;
        if (l2>10) {l2=10} ;
        s2=+s2;
        l1=l2;
        s1=s2;
        print();
    });

    $('.fa-angle-down').click(function () {
        var l2 = document.getElementById('long').value;
        var s2 = document.getElementById('beam').value;
        l2=+l2-0.1;
        if (l2<3) {l2=3};
        s1=+s2;
        l1=l2;
        print();
    });

    $('.fa-angle-left').click(function () {
        var l2 = document.getElementById('long').value;
        var s2 = document.getElementById('beam').value;
        s2=+s2+0.1;
        if (s2>5) {s2=5} ;
        l1=+l2;
        s1=s2;
        print();
    });

    $('.fa-angle-right').click(function () {
        var l2 = document.getElementById('long').value;
        var s2 = document.getElementById('beam').value;
        s2=+s2-0.1;
        if (s2<2) {s2=2} ;
        l1=+l2;
        s1=s2;
        print();
    });


    //========== Прорисовка периметра стены =======================================//
    function proportions() {

        var div = document.getElementById('zakas_foundation');
        div.style.height = +s1*20+"px";
        div.style.width = +l1*20+"px";

        $('#Lmax').text(l1);
        $('#Lmaxp').text(l1);


        $('#Smax').text(s1);
        $('#Smaxp').text(s1);

        //Smax =Math.ceil((Smax* 100)/ 100);


        $('#Hmax').text(h1);
        $('#Hmaxp').text(h1);

        //Hmax =Math.ceil((Hmax)/ 100) * 100;

        // alert(Hmax);
    }

//========== Нажатие "Дальше" на первом блоке =======================================//

    $('#but_block2').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').show();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide();

        // alert(3);

    });

    //========== Нажатие "Назад" на втором блоке =======================================//

    $('#but_block2_1').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block1').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
    });

    //========== Нажатие "Вперед" на втором блоке =======================================//

    $('#but_block2_3').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block4').hide();
     });

    //========== Нажатие "Назад" на третьем блоке =======================================//

    $('#but_block3_2').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block2').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
     });

    //========== Нажатие "Вперед" на третьем блоке =======================================//

    $('#but_block3_4').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block4').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
    });



    //========== Нажатие "Назад" на четвертом блоке =======================================//

    $('#but_block4_3').click(function () {
        var block = $(this).parents('.content');
        block.find('.zakas_block3').show();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
    });





//========== Определение типа фундамента =======================================//

    $('#fund1').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis1').show();
        block.find('.zakas_block2_type_opis2').hide();
        block.find('.zakas_block2_type_opis3').hide();
        F_type='Ленточный';
        $('#F_type').text(F_type);
        // alert(1);

    });

    $('#fund2').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis2').show();
        block.find('.zakas_block2_type_opis1').hide();
        block.find('.zakas_block2_type_opis3').hide();
        F_type='Столбовой';
        $('#F_type').text(F_type);
        // alert(2);

    });



    $('#fund3').click(function () {
        var block = $(this).parents('.zakas_block2');
        block.find('.zakas_block2_type_opis3').show();
        block.find('.zakas_block2_type_opis1').hide();
        block.find('.zakas_block2_type_opis2').hide();
        F_type='Плита монолит';
        $('#F_type').text(F_type);
        // alert(3);

    });

    //========== Определение коэффицента фундамента =======================================//


    $('#fund1').click(function () {
        Kf =1.2;
        zena();
        //alert(Kz);

    });

    $('#fund2').click(function () {
        Kf = 1.3;
        zena();


    });

    $('#fund3').click(function () {
        Kf = 1.4;
        zena();
        //alert(Kz);

    });




    //========== Определение материала стен =======================================//

    $('#stena1').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis1').show();
        block.find('.zakas_block3_type_opis2').hide();
        block.find('.zakas_block3_type_opis3').hide();
        S_type='Бревно';
        $('#S_type').text(S_type);
        // alert(1);

    });

    $('#stena2').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis2').show();
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis3').hide();
        S_type='Брус';
        $('#S_type').text(S_type);
        // alert(2);

    });



    $('#stena3').click(function () {
        var block = $(this).parents('.zakas_block3');
        block.find('.zakas_block3_type_opis3').show();
        block.find('.zakas_block3_type_opis1').hide();
        block.find('.zakas_block3_type_opis2').hide();
        S_type='Кирпич';
        $('#S_type').text(S_type);
        // alert(3);

    });

    //========== Определение коэффицента стен =======================================//


    $('#stena1').click(function () {
        Ks =1.2;
        zena();
        //alert(Kz);

    });

    $('#stena2').click(function () {
        Ks = 1.3;
        zena();


    });

    $('#stena3').click(function () {
        Ks = 1.4;
        zena();
        //alert(Kz);

    });



    //========== Определение типа печи =======================================//

    $('#pech1').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis1').show();
        block.find('.zakas_block4_type_opis2').hide();
        block.find('.zakas_block4_type_opis3').hide();
        P_type='Кирпичная';
        $('#P_type').text(P_type);
        // alert(1);

    });

    $('#pech2').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis2').show();
        block.find('.zakas_block4_type_opis1').hide();
        block.find('.zakas_block4_type_opis3').hide();
        P_type='Чугунная';
        $('#P_type').text(P_type);
        // alert(2);

    });



    $('#pech3').click(function () {
        var block = $(this).parents('.zakas_block4');
        block.find('.zakas_block4_type_opis3').show();
        block.find('.zakas_block4_type_opis1').hide();
        block.find('.zakas_block4_type_opis2').hide();
        P_type='Электро';
        $('#P_type').text(P_type);
        // alert(3);

    });

    //========== Определение коэффицента печи =======================================//


    $('#pech1').click(function () {
        Kp =1.2;
        zena();
        //alert(Kz);

    });

    $('#pech2').click(function () {
        Kp = 1.3;
        zena();


    });

    $('#pech3').click(function () {
        Kp = 1.4;
        zena();
        // alert(Kp);

    });










    //=================================================//

    function zena() {

        Zmin= (2*l1+2*s1)*h1*Kf*Ks*Kp*1100;

        Zmin=Zmin.toFixed(2);

        $('#Zmin').text(Zmin);
        $('#Zminp').text(Zmin);

        // alert(Zmin);


        Zmax= (2*l1+2*s1)*h1*Kf*Ks*Kp*2200;
        Zmax=Zmax.toFixed(2);
        $('#Zmax').text(Zmax);
        $('#Zmaxp').text(Zmax);

       // Zmax=Zmax.toFixed(2);



    };




});














