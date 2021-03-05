
var ZfloorM,  PfloorM, Zfloor,PfloorV,Vfloorv, ZloftM, Sfloorv,Vloftr, VwallsV, PloftM,PloftV, Zloftr, Sloftrv, PwallsM, ZwallsM, Zwalls, Swallsv,PwallsV ;
ZfloorM=15750;
PfloorM=35;
PfloorV=0;
Zfloor=0;
Sfloorv=0;
Vfloorv=0;

ZloftM=24750;
PloftM=55;
PloftV=55;
Zloftr=0;
Sloftrv=0;
Vloftr=0;

PwallsM=65;
PwallsV=0;
ZwallsM=29250;
VwallsV=0;
Zwalls=0;
Swallsv=0;

$(document).ready(function() {

    //======================= Заполнение данных по типу сооружения ========================\\
    function ADDTypeOb() {
        var newCategor = $('#type_ob');
        for (var i = 0; i < tupeob.length; i++) {
            $('<option value="' + tupeob[i].value + '">' + tupeob[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypeOb();

    //======================= Первоначальное заполнение Заполнение данных по  Материал сооружения при открытие сайта ========================\\
    function ADDTypematerial() {
        var newCategor = $('#material');
        for (var i = 0; i < materialhouse.length; i++) {
            $('<option value="' + materialhouse[i].value + '">' + materialhouse[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypematerial();

    //======================= Первоначальное заполнение Заполнение данных по  Периметру сооружения при открытие сайта ========================\\
    function ADDTypePerimetr() {
        var newCategor = $('#perimetr');
        for (var i = 0; i < perimetrhouse1.length; i++) {
            $('<option value="' + perimetrhouse1[i].value + '" data-mp="' + perimetrhouse1[i].mp + '"     >' + perimetrhouse1[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypePerimetr();

    //======================= Первоначальное заполнение Заполнение данных по  Обвязке сооружения при открытие сайта ========================\\
    function ADDTypeStud() {
        var newCategor = $('#stud');
        for (var i = 0; i < stud1.length; i++) {
            $('<option value="' + stud1[i].value + '" >' + stud1[i].name + '</option>').appendTo(newCategor);
        }
    }

    ADDTypeStud() ;

    ITOG();

    //======================= Выбор Типа сооружения - вызов функций изменениея материала, периметра и обвязки========================\\
    $("#type_ob").on('change', function() {
        UpTypematerial();
        UpTypePerimetr();
        UPTypeStud();
        ITOG();
    });


    //======================= Выбор Материала  сооружения - вызов функций изменениея  периметра========================\\

    $("#material").on('change', function() {
        UpTypePerimetr();
        ITOG();
    });


    //======================= Выбор Периметра  сооружения ========================\\
    $("#perimetr").on('change', function() {
        ITOG();
    });

    //======================= Выбор Обвязка  сооружения ========================\\
    $("#stud").on('change', function() {
        ITOG();
    });

    //======================= Выбор Установка  сооружения ========================\\
    $("#work").on('change', function() {
        ITOG();
    });

    //======================= Заполнение данных Материал сооружения после выбора Типа сооружения ========================\\
    function UpTypematerial() {
        var typeob=document.getElementById('type_ob').value;

        $('#material').find('option').remove(); //удаление старых данных Материал сооружения

        if (typeob==1){
            var newCategor = $('#material');
            for (var i = 0; i < materialhouse.length; i++) {
                $('<option value="' + materialhouse[i].value + '">' + materialhouse[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==2){
            var newCategor = $('#material');
            for (var i = 0; i <materialbath.length; i++) {
                $('<option value="' + materialbath[i].value + '">' + materialbath[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==3){
            var newCategor = $('#material');
            for (var i = 0; i <materialannex1.length; i++) {
                $('<option value="' + materialannex1[i].value + '">' + materialannex1[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==4){
            var newCategor = $('#material');
            for (var i = 0; i <materialannex2.length; i++) {
                $('<option value="' + materialannex2[i].value + '">' + materialannex2[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==5){
            var newCategor = $('#material');
            for (var i = 0; i <materialpalisade.length; i++) {
                $('<option value="' + materialpalisade[i].value + '">' + materialpalisade[i].name + '</option>').appendTo(newCategor);
            }
        }

    }


    //======================= Заполнение данных Материал сооружения после выбора Типа сооружения ========================\\
    function UpTypePerimetr() {
        var typeob=document.getElementById('type_ob').value;
        var typematerial=document.getElementById('material').value;

        $('#perimetr').find('option').remove(); //удаление старых данных Материал сооружения

        if (((typeob==1)&&(typematerial==1)) || ((typeob==1)&&(typematerial==3))||((typeob==1)&&(typematerial==5))||((typeob==1)&&(typematerial==6))){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrhouse1.length; i++) {
                $('<option value="' + perimetrhouse1[i].value + '" data-mp="' + perimetrhouse1[i].mp + '"     >' + perimetrhouse1[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (((typeob==1)&&(typematerial==2)) || ((typeob==1)&&(typematerial==4))){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrhouse2.length; i++) {
                $('<option value="' + perimetrhouse2[i].value + '" data-mp="' + perimetrhouse2[i].mp + '"     >' + perimetrhouse2[i].name + '</option>').appendTo(newCategor);
            }
          }

        if (((typeob==2)&&(typematerial==1)) || ((typeob==2)&&(typematerial==3))||((typeob==2)&&(typematerial==5))||((typeob==2)&&(typematerial==6))){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrbath1.length; i++) {
                $('<option value="' + perimetrbath1[i].value + '" data-mp="' + perimetrbath1[i].mp + '"     >' + perimetrbath1[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (((typeob==2)&&(typematerial==2)) || ((typeob==2)&&(typematerial==4))){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrbath2.length; i++) {
                $('<option value="' + perimetrbath2[i].value + '" data-mp="' + perimetrbath2[i].mp + '"     >' + perimetrbath2[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==3){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrlannex1.length; i++) {
                $('<option value="' + perimetrlannex1[i].value + '" data-mp="' + perimetrlannex1[i].mp + '"     >' + perimetrlannex1[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==4){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrlannex2.length; i++) {
                $('<option value="' + perimetrlannex2[i].value + '" data-mp="' + perimetrlannex2[i].mp + '"     >' + perimetrlannex2[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==5){
            var newCategor = $('#perimetr');
            for (var i = 0; i < perimetrpalisade .length; i++) {
                $('<option value="' + perimetrpalisade [i].value + '" data-mp="' + perimetrpalisade [i].mp + '"     >' + perimetrpalisade [i].name + '</option>').appendTo(newCategor);
            }
        }

    }





//=======================  заполнение Заполнение данных по  Обвязке сооружения после измениния Типа Объекта ========================\\
    function UPTypeStud() {
        var typeob=document.getElementById('type_ob').value;
        $('#stud').find('option').remove(); //удаление старых данных Материал сооружения

        if ((typeob==1)|| (typeob==2)|| (typeob==3)){
            var newCategor = $('#stud');
            for (var i = 0; i < stud1.length; i++) {
                $('<option value="' + stud1[i].value + '" >' + stud1[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==4){
            var newCategor = $('#stud');
            for (var i = 0; i < stud2.length; i++) {
                $('<option value="' + stud2[i].value + '" >' + stud2[i].name + '</option>').appendTo(newCategor);
            }
        }
        if (typeob==5){
            var newCategor = $('#stud');
            for (var i = 0; i < stud3.length; i++) {
                $('<option value="' + stud3[i].value + '" >' + stud3[i].name + '</option>').appendTo(newCategor);
            }
        }
    }



    //===== Функция расчета вычисляемых данных   =====//

    function ITOG() {
        var typeob=document.getElementById('type_ob').value;

        var typematerial=document.getElementById('material').value;
        var Nsvai=document.getElementById('perimetr').value;
        var Kworksv=document.getElementById('work').value;


        var selectedOption = $('#perimetr').find('option:selected');
        var Lperimetr = $(selectedOption).attr('data-mp');

        var typesv='';
        var Ztypesv=0;
        var Zsvaiv=0;


        if (((typeob==1)&&(typematerial==1)) || ((typeob==1)&&(typematerial==3))||((typeob==1)&&(typematerial==5))||((typeob==1)&&(typematerial==6))){

            typesv=typesv1;
            Ztypesv=Ztypesv1;

        }

        if (((typeob==1)&&(typematerial==2)) || ((typeob==1)&&(typematerial==4))){

            typesv=typesv2;
            Ztypesv=Ztypesv2;

        }

        if (((typeob==2)&&(typematerial==1)) || ((typeob==2)&&(typematerial==3))||((typeob==2)&&(typematerial==5))){

            typesv=typesv3;
            Ztypesv=Ztypesv3;

        }

        if (((typeob==2)&&(typematerial==2)) || ((typeob==2)&&(typematerial==4))){

            typesv=typesv4;
            Ztypesv=Ztypesv4;

        }

        if (typeob==3){

            typesv=typesv5;
            Ztypesv=Ztypesv5;

        }
        if (typeob==4){

            typesv=typesv6;
            Ztypesv=Ztypesv6;

        }

        if ((typeob==5)&&(typematerial==1)){

            typesv=typesv7;
            Ztypesv=Ztypesv7;

        }
        if ((typeob==5)&&(typematerial==2)){

            typesv=typesv8;
            Ztypesv=Ztypesv8;

        }



        var Zworksv=Kworksv*Zsvwork1*Nsvai;


        Zsvaiv=Nsvai*Ztypesv+Zworksv;

        $('#typesv').text(typesv);
        $('#Ztypesv').text(Ztypesv);
        $('#Nsvai').text( Nsvai+' шт');
        $('#Zsvaiv').text( Zsvaiv);


        var Kstud=document.getElementById('stud').value;
        //alert(Kstud)
        if (Kstud==0){
            $('.sw1').removeClass('sw2');
            $('.sw3').removeClass('sw2');
        }

        if (Kstud>0){
            $('.sw1').addClass('sw2');
            $('.sw3').addClass('sw2');
        }
        // Название швелера вычитываем //
        var Nstud1=document.getElementById('stud');
        var Nstud3=$(Nstud1).find(":selected").text();



        $('#typeswel').text(Nstud3);
        $('#typeswe2').text(Nstud3);

        $('#Npm1').text(Lperimetr);
        $('#Npm2').text(Lperimetr);

        var Zstud1=document.getElementById('stud').value;
        $('#Zstud1').text(Zstud1);
        $('#Zstud2').text(Zobmont);

        var ZstudItog1=Zstud1*Lperimetr;
        var ZstudItog2=Zobmont*Lperimetr;

        $('#ZstudItog1').text(ZstudItog1);
        $('#ZstudItog2').text(ZstudItog2);

        if (Kstud==0){
            ZstudItog1=0;
            ZstudItog2=0;


        }


       var Zitosw=Zsvaiv+ZstudItog1+ZstudItog2;
        $('#Zitosw').text(Zitosw);



    }






});





