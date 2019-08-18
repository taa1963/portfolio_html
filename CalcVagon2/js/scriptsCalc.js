var  summlom, summsap, summitog;
summlom=0;
summsap=0;
summitog=0;



$(document).ready(function() {

//Определение исходных  значений по умолчанию при открытие сайта.

  var tarav =document.getElementById('tara').value;
    var tarae =document.getElementById('tara').value;
       $('#tarae').text(tarae);
    document.getElementById('tarae').value=tarae;


    zena();

    //===== Вызов расчета цены при Движение ползунка   =====//
    $("#tara").on('input',function () {

        var tarae =document.getElementById('tara').value;
              $('#tarae').text(tarae);
        document.getElementById('tarae').value=tarae;
        if (tarae>=18){
            $(".sp18").addClass("spbl");
        }
        if (tarae>=21){
            $(".sp21").addClass("spbl");
        }


        if (tarae>=24) {
          $(".sp24").addClass("spbl");
        }
        if (tarae>=27) {
          $(".sp27").addClass("spbl");
        }
        if (tarae>=30) {
          $(".sp30").addClass("spbl");
        }

        if (tarae>=33) {
          $(".sp33").addClass("spbl");
        }

        if (tarae>=36) {
          $(".sp36").addClass("spbl");
        }
        if (tarae>=39) {
           $(".sp39").addClass("spbl");
        }
        if (tarae>=42) {
            $(".sp42").addClass("spbl");
        }

        if (tarae>=45) {
            $(".sp45").addClass("spbl");
        }

        if (tarae>=48) {
            $(".sp48").addClass("spbl");
        }
        if (tarae>=51) {
            $(".sp51").addClass("spbl");
        }
        if (tarae>=54) {
            $(".sp54").addClass("spbl");
        }
        if (tarae>=57) {
            $(".sp57").addClass("spbl");
        }
        if (tarae>=60) {
            $(".sp60").addClass("spbl");
        }




        if (tarae<21){
            $(".sp21").removeClass("spbl");
        }
        if (tarae<24){
            $(".sp24").removeClass("spbl");
        }
        if (tarae<27){
            $(".sp27").removeClass("spbl");
        }
        if (tarae<30){
            $(".sp30").removeClass("spbl");
        }
        if (tarae<33){
            $(".sp33").removeClass("spbl");
        }
        if (tarae<36){
            $(".sp36").removeClass("spbl");
        }
        if (tarae<39){
            $(".sp39").removeClass("spbl");
        }
        if (tarae<42){
            $(".sp42").removeClass("spbl");
        }
        if (tarae<45){
            $(".sp45").removeClass("spbl");
        }
        if (tarae<48){
            $(".sp48").removeClass("spbl");
        }
        if (tarae<51){
            $(".sp51").removeClass("spbl");
        }
        if (tarae<54){
            $(".sp54").removeClass("spbl");
        }
        if (tarae<57){
            $(".sp57").removeClass("spbl");
        }
        if (tarae<60){
            $(".sp60").removeClass("spbl");
        }

        zena();
    })


//===== Вызов расчета цены при вводе веса   =====//
    $('#ves').click(function (){

         zena();
    });

    $('#ves').keypress(function(e) {

        zena();
    });

    $('#ves').bind('change keyup',function () {

        zena();
    });




//===== Вызов расчета цены при КОЛ.ПАРА №1   =====//
    $('#wheel1_1').on('click change mouseenter', function(){
        zena();
    });
//===== Вызов расчета цены при КОЛ.ПАРА №2   =====//
    $('#wheel1_2').on('click change mouseenter', function(){
        zena();
    });
//===== Вызов расчета цены при КОЛ.ПАРА №3   =====//
    $('#wheel1_3').on('click change mouseenter', function(){
        zena();
    });

    //===== Вызов расчета цены при КОЛ.ПАРА №4   =====//
    $('#wheel1_4').on('click change mouseenter', function(){
        zena();
    });


    //===== Вызов расчета цены при РАМА №1   =====//
    $('#frame1_1').on('click change mouseenter', function(){
        zena();
    });

    //===== Вызов расчета цены при РАМА №2   =====//
    $('#frame1_2').on('click change mouseenter', function(){
        zena();
    });
    //===== Вызов расчета цены при РАМА №3   =====//
    $('#frame1_3').on('click change mouseenter', function(){
        zena();
    });
    //===== Вызов расчета цены при РАМА №4   =====//
    $('#frame1_4').on('click change mouseenter', function(){
        zena();
    });


    //===== Вызов расчета цены при БАЛКА №1   =====//
    $('#fbeam1_1').on('click change mouseenter', function(){
        zena();
    });
//===== Вызов расчета цены при БАЛКА №2   =====//
    $('#fbeam1_2').on('click change mouseenter', function(){
        zena();
    });


//============== Вычисление кода страны ===================================//
    $('#selectpicker').on('click change mouseenter', function(){
        var cod1=document.getElementById('selectpicker').value;
        if (cod1=='pkr'){
            var codst='+7';
           document.getElementById('cod').value=codst;
        }
        if (cod1=='ukr'){
            var codst='+38';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='kz'){
            var codst='+77';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='bv'){
            var codst='+375';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='az'){
            var codst='+994';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='am'){
            var codst='+374';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='kg'){
            var codst='+996';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='md'){
            var codst='+373';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='tj'){
            var codst='+992';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='tm'){
            var codst='+993';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='uz'){
            var codst='+998';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='us'){
            var codst='+1';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='gb'){
            var codst='+44';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='ca'){
            var codst='+1';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='au'){
            var codst='+61';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='ie'){
            var codst='+353';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='nz'){
            var codst='+64';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='in'){
            var codst='+91';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='pk'){
            var codst='+92';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='ph'){
            var codst='+63';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='ng'){
            var codst='+234';
            document.getElementById('cod').value=codst;
        }
        if (cod1=='za'){
            var codst='+27';
            document.getElementById('cod').value=codst;
        }




    });



    //============== Вычисление окончательной цены ===================================//

    function zena() {


        var tarav =document.getElementById('tara').value;
        // alert(tarav);
        var vesv=document.getElementById('ves').value;
        // alert(vesv);

        //============== Толщина колес =========//
        var wheel1_1=document.getElementById('wheel1_1').value;
         if (wheel1_1==0){
             var kwheel1_1=1.4;
         }
         else{
             kwheel1_1=0;
         }


        var wheel1_2=document.getElementById('wheel1_2').value;
        if (wheel1_2==0){
            var kwheel1_2=1.4;
        }
        else{
            kwheel1_2=0;
        }



        var wheel1_3=document.getElementById('wheel1_3').value;
        if (wheel1_3==0){
            var kwheel1_3=1.4;
        }
        else{
            kwheel1_3=0;
        }
        // alert(wheel1_3);


        var wheel1_4=document.getElementById('wheel1_4').value;
        if (wheel1_4==0){
            var kwheel1_4=1.4;
        }
        else{
            kwheel1_4=0;
        }
        // alert(wheel1_4);

        //============== Боковые рамы =========//
        var frame1_1=document.getElementById('frame1_1').value;
        if (frame1_1==0){
            var kframe1_1=0.38;
        }
        else{
            kframe1_1=0;
        }
        // alert(frame1_1);


        var frame1_2=document.getElementById('frame1_2').value;
        if (frame1_2==0){
            var kframe1_2=0.38;
        }
        else{
            kframe1_2=0;
        }
        // alert(frame1_2);
        var frame1_3=document.getElementById('frame1_3').value;
        if (frame1_3==0){
            var kframe1_3=0.38;
        }
        else{
            kframe1_3=0;
        }
        // alert(frame1_3);
        var frame1_4=document.getElementById('frame1_4').value;
        if (frame1_4==0){
            var kframe1_4=0.38;
        }
        else{
            kframe1_4=0;
        }
        // alert(frame1_4);

        //============== Балка надрессорная =========//
        var fbeam1_1=document.getElementById('fbeam1_1').value;
        if (fbeam1_1==0){
            var kfbeam1_1=0.5;
        }
        else{
            kfbeam1_1=0;
        }
        // alert(fbeam1_1);
        var fbeam1_2=document.getElementById('fbeam1_2').value;
        if (fbeam1_2==0){
            var kfbeam1_2=0.5;
        }
        else{
            kfbeam1_2=0;
        }
        // alert(fbeam1_2);
        wheel1_1=+wheel1_1;
        wheel1_2=+wheel1_2;
        wheel1_3=+wheel1_3;
        wheel1_4=+wheel1_4;
        frame1_1=+frame1_1;
        frame1_2=+frame1_2;
        frame1_3=+frame1_3;
        frame1_4=+frame1_4;
        fbeam1_1=+fbeam1_1;
        fbeam1_2=+fbeam1_2;
        tarav=+tarav;
        vesv=+vesv;


        summlom=tarav-(vesv*0.1/100)-5.6-1.5-1+kwheel1_1+kwheel1_2+kwheel1_3+kwheel1_4+kframe1_1
            +kframe1_2+kframe1_3+kframe1_4+kfbeam1_1+kfbeam1_2;
        summlom =  summlom.toFixed(2);

        summsap=wheel1_1+wheel1_2+wheel1_3+wheel1_4+frame1_1+frame1_2+frame1_3+frame1_4+fbeam1_1+fbeam1_2;
        //summsap=new Intl.NumberFormat('ru-RU').format(summsap);


        summitog=(summlom*15000)+summsap;


        summitog =  summitog.toFixed(2);

        summitog=new Intl.NumberFormat('ru-RU').format(summitog);
       //alert(summitog);
        $('#summlom').text(summlom);

        summsap=new Intl.NumberFormat('ru-RU').format(summsap);
        $('#summsap').text(summsap);

        $('#summitog').text(summitog);


    }

});




