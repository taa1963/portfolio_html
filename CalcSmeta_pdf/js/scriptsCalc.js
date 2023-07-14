var C5,numpr,SParkv,TypeSel;

C5=0;
numpr=0;
SParkv=0;
TypeSel=1;




$(document).ready(function() {



  



    //===== закрываем ввод в поле  цифр и отрицательных значений,   =====//


    $('#Lpark').on('input', function() {
        $(this).val($(this).val().replace (/\D/, ''));
        //$(this).val($(this).val().replace(/\,/g, '.'));
        //$(this).val($(this).val().replace(
        //    /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
       
    });


    $('#profilselect').on('change', function() {
        TypeSel=document.getElementById('profilselect').value;
        //alert(TypeSel)
        if (TypeSel==1)
        {
            $('#profil2').hide();
            $('#profil').show();
        }
        if (TypeSel==2)
        {
            $('#profil').hide();
            $('#profil2').show();
        }


    });   

  


    $('#smemtaadd').click(function () {

        $('.block_table_meta').show();

       


        if (TypeSel==1){
        var Lparkv=document.getElementById('Lpark').value;
        var Dparkv=document.getElementById('Dpark').value;
         SParkv=Lparkv*Dparkv;
        }
        if (TypeSel==2){
            var SParkv=document.getElementById('Spark').value;
           
            }



  //========Заполнение первой строки сметы    =======//
        $('#kotlovans').text(SParkv);
        var kotlovanPrv=kotlovanPr;
        var kotlovanPrvv=kotlovanPrv.toFixed(2)
        var kotlovanPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(kotlovanPrvv);
        $('#kotlovanPrsm').text(kotlovanPrvvv);
        var kotlovanItogv=SParkv*kotlovanPr;
        var kotlovanItogvv=kotlovanItogv.toFixed(2);
        var kotlovanItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(kotlovanItogvv);
        $('#kotlovanItogsm').text(kotlovanItogvvv);

        //========Заполнение 2 строки сметы    =======//
        $('#YplGrunt').text(SParkv);
        var YplGruntPrv=YplGruntPr;
        var YplGruntPrvv=YplGruntPrv.toFixed(2)
        var YplGruntPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGruntPrvv);
        $('#YplGruntPrsm').text(YplGruntPrvvv);
        var YplGruntItogv=SParkv*YplGruntPr;
        var YplGruntItogvv=YplGruntItogv.toFixed(2);
        var YplGruntItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGruntItogvv);
        $('#YplGruntItogsm').text(YplGruntItogvvv);

        
        //========Заполнение 3 строки сметы    =======//
        $('#GeoTekstil1').text(SParkv);
        var GeoTekstil1Prv=GeoTekstil1Pr;
        var GeoTekstil1Prvv=GeoTekstil1Prv.toFixed(2);
        var GeoTekstil1Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil1Prvv);
        $('#GeoTekstil1Prsm').text(GeoTekstil1Prvvv);
        var GeoTekstil1Itogv=SParkv*GeoTekstil1Pr;
        var GeoTekstil1Itogvv=GeoTekstil1Itogv.toFixed(2);
        var GeoTekstil1Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil1Itogvv);
        $('#GeoTekstil1Itogsm').text(GeoTekstil1Itogvvv);

         //========Заполнение 4 строки сметы    =======//
         $('#Shebenka1').text(SParkv);
         var Shebenka1Prv=Shebenka1Pr;
         var Shebenka1Prvv=Shebenka1Prv.toFixed(2);
         var Shebenka1Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Shebenka1Prvv);
         $('#Shebenka1Prsm').text(Shebenka1Prvvv);
         var Shebenka1Itogv=SParkv*Shebenka1Pr;
         var Shebenka1Itogvv=Shebenka1Itogv.toFixed(2);
         var Shebenka1Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Shebenka1Itogvv);
         $('#Shebenka1Itogsm').text(Shebenka1Itogvvv);      
         
          //========Заполнение 5 строки сметы    =======//
        $('#YplGrunt2').text(SParkv);
        var YplGrunt2Prv=YplGrunt2Pr;
        var YplGrunt2Prvv=YplGrunt2Prv.toFixed(2);
        var YplGrunt2Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt2Prvv);
        $('#YplGruntPr2sm').text(YplGrunt2Prvvv);
        var YplGrunt2Itogv=SParkv*YplGrunt2Pr;
        var YplGrunt2Itogvv=YplGrunt2Itogv.toFixed(2);
        var YplGrunt2Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt2Itogvv);
        $('#YplGruntItog2sm').text(YplGrunt2Itogvvv);

         //========Заполнение 6 строки сметы    =======//
         $('#SadBarud').text(SParkv);
         var SadBarudPrv=SadBarudPr;
         var SadBarudPrvv=SadBarudPrv.toFixed(2);
         var SadBarudPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(SadBarudPrvv);
         $('#SadBarudPrsm').text(SadBarudPrvvv);
         var SadBarudItogv=SParkv*SadBarudPr;
         var SadBarudItogvv=SadBarudItogv.toFixed(2);
         var SadBarudItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(SadBarudItogvv);
         $('#SadBarudItogsm').text(SadBarudItogvvv);

         //========Заполнение 7 строки сметы    =======//
        $('#GeoTekstil2').text(SParkv);
        var GeoTekstil2Prv=GeoTekstil2Pr;
        var GeoTekstil2Prvv=GeoTekstil2Prv.toFixed(2);
        var GeoTekstil2Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil2Prvv);
        $('#GeoTekstil2Prsm').text(GeoTekstil2Prvvv);
        var GeoTekstil2Itogv=SParkv*GeoTekstil2Pr;
        var GeoTekstil2Itogvv=GeoTekstil2Itogv.toFixed(2);
        var GeoTekstil2Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil2Itogvv);
        $('#GeoTekstil2Itogsm').text(GeoTekstil2Itogvvv);

         //========Заполнение 8 строки сметы    =======//
         $('#Pesok10').text(SParkv);
         var Pesok10Prv=Pesok10Pr;
         var Pesok10Prvv=Pesok10Prv.toFixed(2);
         var Pesok10Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Pesok10Prvv);
         $('#Pesok10Prsm').text(Pesok10Prvvv);
         var Pesok10Itogv=SParkv*Pesok10Pr;
         var Pesok10Itogvv=Pesok10Itogv.toFixed(2);
         var Pesok10Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Pesok10Itogvv);
         $('#Pesok10Itogsm').text(Pesok10Itogvvv);

         //========Заполнение 9 строки сметы    =======//
        $('#YplGrunt3').text(SParkv);
        var YplGrunt3Prv=YplGrunt3Pr;
        var YplGrunt3Prvv=YplGrunt3Prv.toFixed(2);
        var YplGrunt3Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt3Prvv);
        $('#YplGruntPr3sm').text(YplGrunt3Prvvv);
        var YplGrunt3Itogv=SParkv*YplGrunt3Pr;
        var YplGrunt3Itogvv=YplGrunt3Itogv.toFixed(2);
        var YplGrunt3Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt3Itogvv);
        $('#YplGruntItog3sm').text(YplGrunt3Itogvvv);

        //========Заполнение 10 строки сметы    =======//
        $('#EkoPark').text(SParkv);
        var EkoParkPrv=EkoParkPr;
        var EkoParkPrvv=EkoParkPrv.toFixed(2);
        var EkoParkPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(EkoParkPrvv);
        $('#EkoParkPrsm').text(EkoParkPrvvv);
        var EkoParkItogv=SParkv*EkoParkPr;
        var EkoParkItogvv=EkoParkItogv.toFixed(2);
        var EkoParkItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format( EkoParkItogvv);
        $('#EkoParktogsm').text(EkoParkItogvvv);

         //========Заполнение 11 строки сметы    =======//
         $('#YplGrunt4').text(SParkv);
         var YplGrunt4Prv=YplGrunt4Pr;
         var YplGrunt4Prvv=YplGrunt4Prv.toFixed(2);
         var YplGrunt4Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt4Prvv);
         $('#YplGruntPr4sm').text(YplGrunt4Prvvv);
         var YplGrunt4Itogv=SParkv*YplGrunt4Pr;
         var YplGrunt4Itogvv=YplGrunt4Itogv.toFixed(2);
         var YplGrunt4Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(YplGrunt4Itogvv);
         $('#YplGruntItog4sm').text(YplGrunt4Itogvvv);

          //========Заполнение 12 строки сметы    =======//
          $('#RaspGrunt1').text(SParkv);
          var RaspGrunt1Prv=RaspGrunt1Pr;
          var RaspGrunt1Prvv=RaspGrunt1Prv.toFixed(2);
          var RaspGrunt1Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(RaspGrunt1Prvv);
          $('#RaspGrunt1Pr1sm').text(RaspGrunt1Prvvv);
          var RaspGrunt1Itogv=SParkv*RaspGrunt1Pr;
          var RaspGrunt1Itogvv=RaspGrunt1Itogv.toFixed(2);
          var RaspGrunt1Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(RaspGrunt1Itogvv);
          $('#RaspGrunt1Itog1sm').text(RaspGrunt1Itogvvv);

          //========Заполнение 13 строки сметы    =======//
          $('#RaspGrunt2').text(SParkv*KRaspGrunt2Pr);
          var RaspGrunt2Prv=RaspGrunt2Pr;
          var RaspGrunt2Prvv=RaspGrunt2Prv.toFixed(2);
          var RaspGrunt2Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(RaspGrunt2Prvv);
          $('#RaspGrunt1Pr2sm').text(RaspGrunt2Prvvv);
          var RaspGrunt2Itogv=SParkv*KRaspGrunt2Pr*RaspGrunt2Pr;
          var RaspGrunt2Itogvv=RaspGrunt2Itogv.toFixed(2);
          var RaspGrunt2Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(RaspGrunt2Itogvv);
          $('#RaspGrunt1Itog2sm').text(RaspGrunt2Itogvvv);

          //========Заполнение 13 строки сметы    =======//
          $('#Posev').text(SParkv);
          var PosevPrv=PosevPr;
          var PosevPrvv=PosevPrv.toFixed(2);
          var PosevPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(PosevPrvv);
          $('#PosevPrsm').text(PosevPrvvv);
          var PosevItogv=SParkv*PosevPr;
          var PosevItogvv=PosevItogv.toFixed(2);
          var PosevItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(PosevItogvv);
          $('#PosevItogsm').text(PosevItogvvv);

          //========Итого по первому блоку    =======//
          var ItogArb1 = PosevItogv+RaspGrunt2Itogv+RaspGrunt1Itogv+YplGrunt4Itogv+EkoParkItogv+YplGrunt3Itogv+Pesok10Itogv
          +GeoTekstil2Itogv+SadBarudItogv+YplGrunt2Itogv+Shebenka1Itogv+GeoTekstil1Itogv+YplGruntItogv+kotlovanItogv;
          var ItogArb1v=ItogArb1.toFixed(2);
          var ItogArb1vv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ItogArb1v);
          $('#ItogArb1sm').text(ItogArb1vv);

          //========Заполнение 1 строки сметы  Материалы  =======//
          $('#Pesoksm').text(SParkv*KPesokPr);
          var PesokPrv=PesokPr;
          var PesokPrvv=PesokPrv.toFixed(2);
          var PesokPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(PesokPrvv);
          $('#PesokPrsm').text(PesokPrvvv);
          var PesokItogv=SParkv*KPesokPr*PesokPr;
          var PesokItogvv=PesokItogv.toFixed(2);
          var PesokItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(PesokItogvv);
          $('#PesokItogsm').text(PesokItogvvv);

          //========Заполнение 2 строки сметы  Материалы  =======//
          $('#Zement500sm').text(SParkv*KZement500Pr);
          var Zement500Prv=Zement500Pr;
          var Zement500Prvv=Zement500Prv.toFixed(2);
          var Zement500Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Zement500Prvv);
          $('#Zement500Prsm').text(Zement500Prvvv);
          var Zement500Itogv=SParkv*KZement500Pr*Zement500Pr;
          var Zement500Itogvv=Zement500Itogv.toFixed(2);
          var Zement500Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Zement500Itogvv);
          $('#Zement500Itogsm').text(Zement500Itogvvv);

           //========Заполнение 3 строки сметы  Материалы  =======//
           $('#Grunt3ksm').text(SParkv*KGrunt3kPr);
           var Grunt3kPrv=Grunt3kPr;
           var Grunt3kPrvv=Grunt3kPrv.toFixed(2);
           var Grunt3kPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Grunt3kPrvv);
           $('#Grunt3kPrsm').text(Grunt3kPrvvv);
           var Grunt3kItogv=SParkv*KGrunt3kPr*Grunt3kPr;
           var Grunt3kItogvv=Grunt3kItogv.toFixed(2);
           var Grunt3kItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Grunt3kItogvv);
           $('#Grunt3kItogsm').text(Grunt3kItogvvv);

           //========Заполнение 4 строки сметы  Материалы  =======//
           var ShebenkaGrsmv=SParkv*KShebenkaGrPr;
           ShebenkaGrsmv=ShebenkaGrsmv.toFixed(2);
           $('#ShebenkaGrsm').text(ShebenkaGrsmv);
           var ShebenkaGrPrv=ShebenkaGrPr;
           var ShebenkaGrPrvv=ShebenkaGrPrv.toFixed(2);
           var ShebenkaGrPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ShebenkaGrPrvv);
           $('#ShebenkaGrPrsm').text(ShebenkaGrPrvvv);
           var ShebenkaGrItogv=SParkv*KShebenkaGrPr*ShebenkaGrPr;
           var ShebenkaGrItogvv=ShebenkaGrItogv.toFixed(2);
           var ShebenkaGrItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ShebenkaGrItogvv);
           $('#ShebenkaGrItogsm').text(ShebenkaGrItogvvv);

           //========Заполнение 5строки сметы  Материалы  =======//
           $('#GeoTekstil100sm').text(SParkv*KGeoTekstil100Pr);
           var GeoTekstil100Prv=GeoTekstil100Pr;
           var GeoTekstil100Prvv=GeoTekstil100Prv.toFixed(2);
           var GeoTekstil100Prvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil100Prvv);
           $('#GeoTekstil100Prsm').text(GeoTekstil100Prvvv);
           var GeoTekstil100Itogv=SParkv*KGeoTekstil100Pr*GeoTekstil100Pr;
           var GeoTekstil100Itogvv=GeoTekstil100Itogv.toFixed(2);
           var GeoTekstil100Itogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(GeoTekstil100Itogvv);
           $('#GeoTekstil100Itogsm').text(GeoTekstil100Itogvvv);

            //========Заполнение 6 строки сметы  Материалы  =======//
            var NBort=0;
            if (TypeSel==1){
            NBort=Lparkv*1+Dparkv*1+KBortPr*1;
            //console.log( NBort)
            }
            if (TypeSel==2){
                NBort=2*(Math.sqrt(SParkv))+KBortPr*1;
              //  console.log(Math.sqrt(SParkv))
               // console.log( NBort)
            }    
            NBort=NBort.toFixed(2);


            $('#Bortsm').text(NBort);
            var BortPrv=BortPr;
            var BortPrvv=BortPrv.toFixed(2);
            var BortPrvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(BortPrvv);
            $('#BortPrsm').text(BortPrvvv);
            var Borttogv=NBort*BortPr;
            var Borttogvv=Borttogv.toFixed(2);
            var Borttogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Borttogvv);
            $('#BortItogsm').text(Borttogvvv);

             //========Заполнение 7 строки сметы  Материалы  =======//
             var NBetonResh=SParkv*1+KBetonReshPr*1;
             $('#BetonReshsm').text(NBetonResh);
             var BetonReshv=BetonReshPr;
             var BetonReshvv=BetonReshv.toFixed(2);
             var BetonReshvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(BetonReshvv);
             $('#BetonReshPrsm').text(BetonReshvvv);
             var BetonReshItogv=NBetonResh*BetonReshPr;
             var BetonReshItogvv=BetonReshItogv.toFixed(2);
             var BetonReshItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(BetonReshItogvv);
             $('#BetonReshItogsm').text(BetonReshItogvvv);

             //========Заполнение 8 строки сметы  Материалы  =======//
             var NSemenav=SParkv*1*KSemenaPr*1;
             $('#Semenasm').text(NSemenav);
             var Semenav=SemenaPr;
             var Semenavv=Semenav.toFixed(2);
             var Semenavvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Semenavv);
             $('#SemenaPrsm').text(Semenavvv);
             var SemenaItogv=NSemenav*SemenaPr;
             var SemenaItogvv=SemenaItogv.toFixed(2);
             var SemenaItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(SemenaItogvv);
             $('#SemenaItogsm').text(SemenaItogvvv);

             //========Заполнение 9 строки сметы  Материалы  =======//
             var NManipylv=Manipyl*1;
             $('#Manipylsm').text(NManipylv);
             var Manipylv=ManipylPr;
             var Manipylvv=Manipylv.toFixed(2);
             var Manipylvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(Manipylvv);
             $('#ManipylPrsm').text(Manipylvvv);
             var ManipylItogv=NManipylv*ManipylPr;
             var ManipylItogvv=ManipylItogv.toFixed(2);
             var ManipylItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ManipylItogvv);
             $('#ManipylItogsm').text(ManipylItogvvv);
  
             //========Заполнение 10 строки сметы  Материалы  =======//
             var NDostavkaMatv=DostavkaMat*1;
             $('#DostavkaMatsm').text(NDostavkaMatv);
             var DostavkaMatv=DostavkaMatPr;
             var DostavkaMatvv=DostavkaMatv.toFixed(2);
             var DostavkaMatvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(DostavkaMatvv);
             $('#DostavkaMatPrsm').text(DostavkaMatvvv);
             var DostavkaMatItogv=NDostavkaMatv*DostavkaMatPr;
             var DostavkaMatItogvv=DostavkaMatItogv.toFixed(2);
             var DostavkaMatItogvvv=new Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(DostavkaMatItogvv);
             $('#DostavkaMatItogsm').text(DostavkaMatItogvvv);
  
 
           //========Итого по 2 блоку    =======//
          var ItogMateial = DostavkaMatItogv+ManipylItogv+SemenaItogv+BetonReshItogv+Borttogv+GeoTekstil100Itogv+ShebenkaGrItogv
          +Grunt3kItogv+Zement500Itogv+PesokItogv;
          var ItogMateialv=ItogMateial.toFixed(2);
          var ItogMateialvv=Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ItogMateialv);
          $('#ItogMaterialsm').text(ItogMateialvv);

          //========Итого     =======//
          var ItogSmeta = ItogMateial+ItogArb1;
          var ItogSmetav=ItogSmeta.toFixed(2);
          var ItogSmetavv=Intl.NumberFormat("ru-RU", {minimumFractionDigits : 2}).format(ItogSmetav);
          $('#ItogSmetasm').text(ItogSmetavv);
 

    });

   






    function getPDF(){

       
        var kotlovansv=document.getElementById('kotlovans').innerHTML;
        var kotlovanPrsmv=document.getElementById('kotlovanPrsm').innerHTML;
        kotlovanPrsmv= kotlovanPrsmv+' '+'р';
        var kotlovanItogsmv=document.getElementById('kotlovanItogsm').innerText;             
        kotlovanItogsmv= kotlovanItogsmv+' '+'р';

        var YplGruntv=document.getElementById('YplGrunt').innerHTML;
        var YplGruntPrsmv=document.getElementById('YplGruntPrsm').innerHTML;
        YplGruntPrsmv= YplGruntPrsmv+' '+'р';
        var YplGruntItogsmv=document.getElementById('YplGruntItogsm').innerText;             
        YplGruntItogsmv= YplGruntItogsmv+' '+'р';

        var GeoTekstil1v=document.getElementById('GeoTekstil1').innerHTML;
        var GeoTekstil1Prsmv=document.getElementById('GeoTekstil1Prsm').innerHTML;
        GeoTekstil1Prsmv= GeoTekstil1Prsmv+' '+'р';
        var GeoTekstil1Itogsmv=document.getElementById('GeoTekstil1Itogsm').innerText;             
        GeoTekstil1Itogsmv= GeoTekstil1Itogsmv+' '+'р';

        var Shebenka1v=document.getElementById('Shebenka1').innerHTML;
        var Shebenka1Prsmv=document.getElementById('Shebenka1Prsm').innerHTML;
        Shebenka1Prsmv= Shebenka1Prsmv+' '+'р';
        var Shebenka1Itogsmv=document.getElementById('Shebenka1Itogsm').innerText;             
        Shebenka1Itogsmv= Shebenka1Itogsmv+' '+'р';

        var YplGrunt2v=document.getElementById('YplGrunt2').innerHTML;
        var YplGrunt2Prsmv=document.getElementById('YplGruntPr2sm').innerHTML;
        YplGrunt2Prsmv= YplGrunt2Prsmv+' '+'р';
        var YplGrunt2Itogsmv=document.getElementById('YplGruntItog2sm').innerText;             
        YplGrunt2Itogsmv= YplGrunt2Itogsmv+' '+'р';

        var SadBarudv=document.getElementById('SadBarud').innerHTML;
        var SadBarudPrsmv=document.getElementById('SadBarudPrsm').innerHTML;
        SadBarudPrsmv= SadBarudPrsmv+' '+'р';
        var SadBarudItogsmv=document.getElementById('SadBarudItogsm').innerText;             
        SadBarudItogsmv= SadBarudItogsmv+' '+'р';

        var GeoTekstil2v=document.getElementById('GeoTekstil2').innerHTML;
        var GeoTekstil2Prsmv=document.getElementById('GeoTekstil2Prsm').innerHTML;
        GeoTekstil2Prsmv= GeoTekstil2Prsmv+' '+'р';
        var GeoTekstil2Itogsmv=document.getElementById('GeoTekstil2Itogsm').innerText;             
        GeoTekstil2Itogsmv= GeoTekstil2Itogsmv+' '+'р';

        var Pesok10v=document.getElementById('Pesok10').innerHTML;
        var Pesok10Prsmv=document.getElementById('Pesok10Prsm').innerHTML;
        Pesok10Prsmv= Pesok10Prsmv+' '+'р';
        var Pesok10Itogsmv=document.getElementById('Pesok10Itogsm').innerText;             
        Pesok10Itogsmv= Pesok10Itogsmv+' '+'р';

        var YplGrunt3v=document.getElementById('YplGrunt3').innerHTML;
        var YplGrunt3Prsmv=document.getElementById('YplGruntPr3sm').innerHTML;
        YplGrunt3Prsmv= YplGrunt3Prsmv+' '+'р';
        var YplGrunt3Itogsmv=document.getElementById('YplGruntItog3sm').innerText;             
        YplGrunt3Itogsmv= YplGrunt3Itogsmv+' '+'р';

        var EkoParkv=document.getElementById('EkoPark').innerHTML;
        var EkoParkPrsmv=document.getElementById('EkoParkPrsm').innerText;
        EkoParkPrsmv= EkoParkPrsmv+' '+'р';
        var EkoParkItogsmv=document.getElementById('EkoParktogsm').innerText;             
        EkoParkItogsmv= EkoParkItogsmv+' '+'р';

        var YplGrunt4v=document.getElementById('YplGrunt4').innerHTML;
        var YplGrunt4Prsmv=document.getElementById('YplGruntPr4sm').innerText;
        YplGrunt4Prsmv= YplGrunt4Prsmv+' '+'р';
        var YplGrunt4Itogsmv=document.getElementById('YplGruntItog4sm').innerText;             
        YplGrunt4Itogsmv= YplGrunt4Itogsmv+' '+'р';

        var RaspGrunt1v=document.getElementById('RaspGrunt1').innerHTML;
        var RaspGrunt1Prsmv=document.getElementById('RaspGrunt1Pr1sm').innerText;
        RaspGrunt1Prsmv= RaspGrunt1Prsmv+' '+'р';
        var RaspGrunt1Itogsmv=document.getElementById('RaspGrunt1Itog1sm').innerText;             
        RaspGrunt1Itogsmv= RaspGrunt1Itogsmv+' '+'р';

        var RaspGrunt2v=document.getElementById('RaspGrunt2').innerHTML;
        var RaspGrunt2Prsmv=document.getElementById('RaspGrunt1Pr2sm').innerText;
        RaspGrunt2Prsmv= RaspGrunt2Prsmv+' '+'р';
        var RaspGrunt2Itogsmv=document.getElementById('RaspGrunt1Itog2sm').innerText;             
        RaspGrunt2Itogsmv= RaspGrunt2Itogsmv+' '+'р';

        var Posevv=document.getElementById('Posev').innerHTML;
        var PosevPrsmv=document.getElementById('PosevPrsm').innerText;
        PosevPrsmv= PosevPrsmv+' '+'р';
        var PosevItogsmv=document.getElementById('PosevItogsm').innerText;             
        PosevItogsmv= PosevItogsmv+' '+'р';

        var Itog1smv=document.getElementById('ItogArb1sm').innerText;
        Itog1smv= Itog1smv+' '+'р';

        var Pesoksmv=document.getElementById('Pesoksm').innerHTML;
        var PesoksmPrsmv=document.getElementById('PesokPrsm').innerText;
        PesoksmPrsmv= PesoksmPrsmv+' '+'р';
        var PesoksmItogsmv=document.getElementById('PesokItogsm').innerText;             
        PesoksmItogsmv= PesoksmItogsmv+' '+'р';

        var Zement500smv=document.getElementById('Zement500sm').innerHTML;
        var Zement500smPrsmv=document.getElementById('Zement500Prsm').innerText;
        Zement500smPrsmv=  Zement500smPrsmv+' '+'р';
        var Zement500smItogsmv=document.getElementById('Zement500Itogsm').innerText;             
        Zement500smItogsmv= Zement500smItogsmv+' '+'р';

        var Grunt3ksmv=document.getElementById('Grunt3ksm').innerHTML;
        var Grunt3ksmPrsmv=document.getElementById('Grunt3kPrsm').innerText;
        Grunt3ksmPrsmv=  Grunt3ksmPrsmv+' '+'р';
        var Grunt3ksmItogsmv=document.getElementById('Grunt3kItogsm').innerText;             
        Grunt3ksmItogsmv= Grunt3ksmItogsmv+' '+'р';

        var ShebenkaGrsmv=document.getElementById('ShebenkaGrsm').innerHTML;
        var ShebenkaGrPrsmv=document.getElementById('ShebenkaGrPrsm').innerText;
        ShebenkaGrPrsmv=  ShebenkaGrPrsmv+' '+'р';
        var ShebenkaGrItogsmv=document.getElementById('ShebenkaGrItogsm').innerText;             
        ShebenkaGrItogsmv= ShebenkaGrItogsmv+' '+'р';

        var GeoTekstil100smv=document.getElementById('GeoTekstil100sm').innerHTML;
        var GeoTekstil100Prsmv=document.getElementById('GeoTekstil100Prsm').innerText;
        GeoTekstil100Prsmv=  GeoTekstil100Prsmv+' '+'р';
        var GeoTekstil100Itogsmv=document.getElementById('GeoTekstil100Itogsm').innerText;             
        GeoTekstil100Itogsmv= GeoTekstil100Itogsmv+' '+'р';

        var Bortsmv=document.getElementById('Bortsm').innerHTML;
        var BortPrsmv=document.getElementById('BortPrsm').innerText;
        BortPrsmv=  BortPrsmv+' '+'р';
        var BortItogsmv=document.getElementById('BortItogsm').innerText;             
        BortItogsmv= BortItogsmv+' '+'р';

        var BetonReshsmv=document.getElementById('BetonReshsm').innerHTML;
        var BetonReshPrsmv=document.getElementById('BetonReshPrsm').innerText;
        BetonReshPrsmv=  BetonReshPrsmv+' '+'р';
        var BetonReshItogsmv=document.getElementById('BetonReshItogsm').innerText;             
        BetonReshItogsmv= BetonReshItogsmv+' '+'р';

        var Semenasmv=document.getElementById('Semenasm').innerHTML;
        var SemenaPrsmv=document.getElementById('SemenaPrsm').innerText;
        SemenaPrsmv=  SemenaPrsmv+' '+'р';
        var SemenaItogsmv=document.getElementById('SemenaItogsm').innerText;             
        SemenaItogsmv= SemenaItogsmv+' '+'р';

        var Manipylsmv=document.getElementById('Manipylsm').innerHTML;
        var ManipylPrsmv=document.getElementById('ManipylPrsm').innerText;
        ManipylPrsmv=  ManipylPrsmv+' '+'р';
        var ManipylItogsmv=document.getElementById('ManipylItogsm').innerText;             
        ManipylItogsmv= ManipylItogsmv+' '+'р';

        var DostavkaMatsmv=document.getElementById('DostavkaMatsm').innerHTML;
        var DostavkaMatPrsmv=document.getElementById('DostavkaMatPrsm').innerText;
        DostavkaMatPrsmv=  DostavkaMatPrsmv+' '+'р';
        var DostavkaMatItogsmv=document.getElementById('DostavkaMatItogsm').innerText;             
        DostavkaMatItogsmv= DostavkaMatItogsmv+' '+'р';


      var Itog2smv=document.getElementById('ItogMaterialsm').innerText;
      Itog2smv= Itog2smv+' '+'р';

      var Itog3smv=document.getElementById('ItogSmetasm').innerText;
      Itog3smv= Itog3smv+' '+'р';




       
        

        var docInfo = {


            info: {
                title:'Смета Экопарковки',
                author:'alex',
                subject:'Theme',
                keywords:'Смета Экопарковки'
            },

            pageSize:'A4',
            pageOrientation:'',//'portrait'
            pageMargins:[10,10,10,60],
            content: [

                {
                    table:{
                        margin:[10,5,10,0],
                        widths:['100%'],
   
                        body:[


                            [{ width: 105,
                             alignment:'center',  
                             margin:[-5,0,0,0],
                             
                    image:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAeAB4AAD/4REcRXhpZgAATU0AKgAAAAgABAE7AAIAAAAoAAAISodpAAQAAAABAAAIcpydAAEAAAAqAAAQ6uocAAcAAAgMAAAAPgAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCQ0LvQtdC60YHQsNC90LTRgCDQotGD0L/QuNGH0LXQvdC60L7QsgAABZADAAIAAAAUAAAQwJAEAAIAAAAUAAAQ1JKRAAIAAAADOTEAAJKSAAIAAAADOTEAAOocAAcAAAgMAAAItAAAAAAc6gAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADIwMjM6MDc6MDYgMjI6NTM6MjEAMjAyMzowNzowNiAyMjo1MzoyMQAAABAEOwQ1BDoEQQQwBD0ENARABCAAIgRDBD8EOARHBDUEPQQ6BD4EMgQAAP/hCzpodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+DQo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIj48cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPjxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSJ1dWlkOmZhZjViZGQ1LWJhM2QtMTFkYS1hZDMxLWQzM2Q3NTE4MmYxYiIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIi8+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iPjx4bXA6Q3JlYXRlRGF0ZT4yMDIzLTA3LTA2VDIyOjUzOjIxLjkxNDwveG1wOkNyZWF0ZURhdGU+PC9yZGY6RGVzY3JpcHRpb24+PHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9InV1aWQ6ZmFmNWJkZDUtYmEzZC0xMWRhLWFkMzEtZDMzZDc1MTgyZjFiIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iPjxkYzpjcmVhdG9yPjxyZGY6U2VxIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+PHJkZjpsaT7QkNC70LXQutGB0LDQvdC00YAg0KLRg9C/0LjRh9C10L3QutC+0LI8L3JkZjpsaT48L3JkZjpTZXE+DQoJCQk8L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwveDp4bXBtZXRhPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8P3hwYWNrZXQgZW5kPSd3Jz8+/9sAQwAHBQUGBQQHBgUGCAcHCAoRCwoJCQoVDxAMERgVGhkYFRgXGx4nIRsdJR0XGCIuIiUoKSssKxogLzMvKjInKisq/9sAQwEHCAgKCQoUCwsUKhwYHCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq/8AAEQgANwDfAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A+kaparqUelWYuZUZ03hSFPPNN1jSk1ezELStCytuV1GcH6VT1Ga6sEtLZbL7fCdoZzkkMD1PXH1rCpOUU+nnv+BLbRam1y0hFo7FjFdjKSAcDp1/Os/xONQla3jsFcoMyMU9R0qbWtSg0x7FrizEikkjB5jOB09etVGvrnS47zUpJFlgumH2ZM9c9D7YH8q5q1RNSpyl626aX/ElvozRudXks7qxtGtnkluNoZh91fX8etatYP2rVNQsLG4sfLUSYEpxznOCeeg4q1qtzqcVzbRadAGSRgHkIzt/wGK3jV0ctWtLaDT6mpRRRXSWFFV21CzVirXcAIOCDIOKT+0bL/n8t/8Av6v+NTzR7gWaKgjvbWVwkVzC7HoqyAk1PTTT2AKKKQkKpLEAAZJPamAtFRRXVvOxEE8cpHJCODj8qlpJp7AFFFFMAooooAKKKQkKpLEADkk9qAFoqCO9tZZAkVzC7noqyAk1PSTT2AKKKKYBRRRQBDdWy3cBidnQZB3RttI/GsTxBql/ZQ79OEckC8SSJ87Iff0reliWaF4pBlXBBGccVmx6SdM0+4TRyBM/KGTB/DP+Nc9aMpL3dPNbkyT6GboUw8SWLf2jLFceU4ZVAw6H39jWtNJpqWzJOsa29s20Ej5VbHQe/NZS3uoadoU0l8NlzI/lxR7AMMe+R1rUS3tLDRFt71l8sriQsfvseT9cmsKe1uttW/wuTHYyL/Sp9UltH0qYRWATGWYgKAcfKvX8TWktjerqsJhumFhEgyu8EuQOnT+dZHiXTry5ktzYxTTRlQEgVNqxAD69a0tE0SWw0mVDIIruccsBu8v0HvUQi/atcnzv/X3CW+xqWly9yrmS3kg2ttG/Hze4qxUdvG8VuiSymZ1GGkIxu/CpK9CN7ampy1x4TnmupZRcxgO5YAg8ZOaztT0M6XbiSe6jZmOFQA5auzvbyGwtHubltsaDJ9/YVwPnXfifW8Jxu6DqI0rx8Xh6ENIRvJ+bM5WRf8MWcs+qLcIMRQ/eY+uOldfdXttZIGupljB6ZPJ/CksrOHT7NYIBhEHJPU+5rz971da8QZvbgQws5G5jwijoK1ivqVJQjrJv5Dvyo7iHXtNnkCR3S7jwA3Gas3v/AB4T/wDXJv5VxGt2mkQWYm0u9V3UgNHv3bh6itjw/qT33hm6SVtz26Mue5Xbx/WtaeInKTpVEr26Apa2ZX8HHN7cf9cx/Ounury3so991KsSnpuPWuR8Dybr+656RD+dZt3errHiJhdXIhg3lQ7HhFHpXNQrOhhopK7bEpWidtFr+mTSBFukBPTdxV93WONnc4VQST6CuE1mz0aCx83Tb5XlUjKb924Vp+H9Re88LX0cpLG3jZQT/d2nFdVLEz5/Z1Er2voNS1szdi1ewmVzHdRkRruY5xgVHHr+mSSBFu0yTgZyBXDeH7P+19S+ytIyRbC8m08kAj+pFXfFGjQ6OkEtq7lJCVIY5waxWLrun7VRVkLmdrne9ax/E979k0dkU4ec7B9O/wCn86XwvcPc+HbZ5DuI3Lk+gJA/Sua8Yah9o1pbSM5EICkf7R5/wrfE1v8AZ+ZdV+Y5S925nwTSWk8FwAVw29D64P8A9avSYZVngSVOVdQwrkfE2m/ZPD1k6jm3ARz9f/r1o+DtRF5o5hJy9u20/wC6eR/UfhXNg4PD1XRfVJijo7GpdatY2U3lXVwsb4ztIPSiXVrGG5WCS4USsQAo561xnjWXZryj/piv8zWlpPheSYW+oXd2fMciUoFz78nNb/WK0qsqcI7P8B8zbsiv4g1h21L/AEC9fytg/wBW5xmuttLyC7izbzLLtADFTnBrz3xJaQ6Tqn2e2LbNgb5jk13elaXb6ZARbb8SYZtxz2rPCur7efN/XoKLd2X6KKK9Q0OX8Xl3udPiVtu5zg+hyBWvbaPFHKk91I93cL0eU5Cn2HQVm+L9n9nwXyEMLaYZK84B/wDrgV0EMqzW8csZyrqGU+oIrihTTrzcvKxCS5mPooortLCiiigDy/xT4ifVdQMMRK2sLFVX+8e7Guh8P6poGjaeEN9G1w4zK4U8n0HHQVLJ8P8ATJJGdri6yxJOGX/Cm/8ACvNL/wCfi6/76X/CvOjSrRqOpZNmCjNO5r2/iLSdQmFrb3aySSgqFAPPFedWMdrb+Ijaa2rLCrtHIQxG09j9K7jTvBen6ZqEV3BNcNJGcgOwx0+lWdZ8L2GtP5swaKfGPNj6n6+tXUo1KqTkldFOMpK7MDUrbwjptusm5rkscBLefc3168VoaIdPk8OahcaVbXEETowPnnO4hT05PrVe1+HdnHLuuruSZR/CqBM/Xk11IsoV082cS+XD5ZjAXsCMVVOlK7bikEYu92jhvh42/UbwH/niP51jpFbWvih7bWQy24lZXIJGPQ8fhXf6L4ZtNCnkltZJnaRdp8wg9/YUuseGdP1phJcK0c2MebGcEj39ay+qy9lFdULkfKjA1Gz8I6fa+cXNwScCOCfcx/WruinTpPDepz6TbXEETRuD5xzuIU9OT61Bb/Du0SYNc3kkyD+BUCZ/HJrqF0+3j01rGFPKgMZjwvYEY/OtadKXNdxSHGLvdo4L4fOW8QzZ/wCfVv8A0NK1viI23TbP/rsf5Vq6N4Vs9DvHubWWZ3aMxkSEEYJB7D2qzrWh2+uQRxXTyIsbbh5ZA5xjuKUaElh3T6govksZvhS5W28EpcyHCxiRz+DGuGs7a/8AEGrTG0GZmJlYlsY59fxr0dfD1snh86Qk0wgJ5YEbj82cdKNF8OWehNK1q0jtKACZCDgD6ClPDymoReyQnBuyZx8vhXxLLGUll3oeqtcZB/CofBV+1l4j+zTfKJwYyD2YdK9MrnZfBdhJqTXqzXEcpk80bGXCtnPHFJ4Xkkp0+gOnZpxOY8fsR4jTH/Puv82r0Kx/5B1t/wBcl/kKytX8K2WtXoubqWZXCBMIQBgZ9R71sxRiGFI1yQihRn2ralTcakpPqXGLUmzzjx6xHiIY/wCeK/1r0Kyu7e7t1a1njmCgAmNw2OO+Kz9Z8M2OtypLcmRJFG3fGQMj05FS6LoVvocMsdrJI4kYMfMI/oBSp05wqyfRiSak2adcb41g1iQloH/0ALyiPjJ5zkd6KKuvHmptDmrxOGWWRI3jSRlR8blDEBseo71qaf4n1XTbdYLe4BiX7quobHsKKK8GM5Rd4s402tjsPDPiuTWLprW7gVJdpZXj6EehBrp6KK9vCzlOneR1023HUKKKK6jQKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAP/Z'}]                            
                        ]   
                    },
                   // layout: 'lightHorizontalLines',
                   border:true
                },
                
                {
                    table:{
                        margin:[10,5,10,0],
                        widths:['100%'],
   
                        body:[
                            [{text:'Работы',bold:true,alignment:'center'}]                            
                        ]   
                    },
                   // layout: 'lightHorizontalLines',
                   border:true
                },
              

                {
                    table:{
                        margin:[0,5,10,0],
                        widths:['5%','40%','5%','10%','20%','20%'],                      
                        
                       
                        body:[

                            [
                              {text:'1',bold:false,alignment:'center'},
                              {text:' 	Разработка котлована до 35 см ',bold:false,alignment:'left'},
                              {text:'м² ',bold:true,alignment:'center'},
                              {text:''+kotlovansv,bold:false,alignment:'center'},
                              {text:''+kotlovanPrsmv,bold:false,alignment:'center'},
                              {text:''+kotlovanItogsmv,bold:false,alignment:'center'}
                            ],   
                            [
                            {text:'2',bold:false,alignment:'center'},
                            {text:'Уплотнение грунта виброплитой',bold:false,alignment:'left'},
                            {text:'м² ',bold:true,alignment:'center'},
                            {text:''+YplGruntv,bold:false,alignment:'center'},
                            {text:''+YplGruntPrsmv,bold:false,alignment:'center'}
                            ,{text:''+YplGruntItogsmv,bold:false,alignment:'center'}
                            ], 
                            [
                                {text:'3',bold:false,alignment:'center'},
                                {text:'Укрытие геотекстилем',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+GeoTekstil1v,bold:false,alignment:'center'},
                                {text:''+GeoTekstil1Prsmv,bold:false,alignment:'center'}
                                ,{text:''+GeoTekstil1Itogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'4',bold:false,alignment:'center'},
                                {text:'Распределение щебня 10 см',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+Shebenka1v,bold:false,alignment:'center'},
                                {text:''+Shebenka1Prsmv,bold:false,alignment:'center'}
                                ,{text:''+Shebenka1Itogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'5',bold:false,alignment:'center'},
                                {text:'Уплотнение виброплитой',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+YplGrunt2v,bold:false,alignment:'center'},
                                {text:''+YplGrunt2Prsmv,bold:false,alignment:'center'}
                                ,{text:''+YplGrunt2Itogsmv,bold:false,alignment:'center'}
                            ],   
                            [
                                {text:'6',bold:false,alignment:'center'},
                                {text:'Установка садового барюра 20*80*1000',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+SadBarudv,bold:false,alignment:'center'},
                                {text:''+SadBarudPrsmv,bold:false,alignment:'center'}
                                ,{text:''+SadBarudItogsmv,bold:false,alignment:'center'}
                            ], 
                            [
                                {text:'7',bold:false,alignment:'center'},
                                {text:'Укрытие геотекстилем',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+GeoTekstil2v,bold:false,alignment:'center'},
                                {text:''+GeoTekstil2Prsmv,bold:false,alignment:'center'}
                                ,{text:''+GeoTekstil2Itogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'8',bold:false,alignment:'center'},
                                {text:'Распределение песка 10 см',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+Pesok10v,bold:false,alignment:'center'},
                                {text:''+Pesok10Prsmv,bold:false,alignment:'center'}
                                ,{text:''+Pesok10Itogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'9',bold:false,alignment:'center'},
                                {text:'	Уплотнение виброплитой',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+YplGrunt3v,bold:false,alignment:'center'},
                                {text:''+YplGrunt3Prsmv,bold:false,alignment:'center'}
                                ,{text:''+YplGrunt3Itogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'10',bold:false,alignment:'center'},
                                {text:'Укладка экопарковки',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+EkoParkv,bold:false,alignment:'center'},
                                {text:''+EkoParkPrsmv,bold:false,alignment:'center'}
                                ,{text:''+EkoParkItogsmv,bold:false,alignment:'center'}
                            ], 
                            [
                                {text:'11',bold:false,alignment:'center'},
                                {text:'Уплотнение виброплитой',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+YplGrunt4v,bold:false,alignment:'center'},
                                {text:''+YplGrunt4Prsmv,bold:false,alignment:'center'}
                                ,{text:''+YplGrunt4Itogsmv,bold:false,alignment:'center'}
                            ],   
                            [
                                {text:'12',bold:false,alignment:'center'},
                                {text:'Распределение привозного грунта',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+RaspGrunt1v,bold:false,alignment:'center'},
                                {text:''+RaspGrunt1Prsmv,bold:false,alignment:'center'}
                                ,{text:''+RaspGrunt1Itogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'13',bold:false,alignment:'center'},
                                {text:'Распределение грунта по участку до 15 метров',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+RaspGrunt2v,bold:false,alignment:'center'},
                                {text:''+RaspGrunt2Prsmv,bold:false,alignment:'center'}
                                ,{text:''+RaspGrunt2Itogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'14',bold:false,alignment:'center'},
                                {text:'Посев семян газона',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+Posevv,bold:false,alignment:'center'},
                                {text:''+PosevPrsmv,bold:false,alignment:'center'}
                                ,{text:''+PosevItogsmv,bold:false,alignment:'center'}
                            ],                      

                            
                        ]
                       // body:body1,


                    },
                   // layout: 'lightHorizontalLines',
                   border:true,
                    style: 'tableExample'
                },

                {
                    table:{
                        margin:[0,0,0,0],
                        widths:['80%','20%'],
   
                        body:[
                            [{text:'Итого работы:',bold:true,alignment:'right'},
                            {text:''+Itog1smv,bold:true,alignment:'center,background:darkcyan',style: 'headercol'}]                            
                        ]   
                    },
                   
                   border:true
                },
                {
                    table:{
                        margin:[10,5,10,0],
                        widths:['100%'],
   
                        body:[
                            [{text:'Материалы ',bold:true,alignment:'center'}]                            
                        ]   
                    },
                   // layout: 'lightHorizontalLines',
                   border:true
                },

                {
                    table:{
                        margin:[0,5,10,0],
                        widths:['5%','40%','5%','10%','20%','20%'],                      
                        
                       
                        body:[

                            [
                              {text:'1',bold:false,alignment:'center'},
                              {text:'Песок ',bold:false,alignment:'left'},
                              {text:'м³  ',bold:true,alignment:'center'},
                              {text:''+Pesoksmv,bold:false,alignment:'center'},
                              {text:''+PesoksmPrsmv,bold:false,alignment:'center'},
                              {text:''+PesoksmItogsmv,bold:false,alignment:'center'}
                            ],   
                            [
                            {text:'2',bold:false,alignment:'center'},
                            {text:'Цемент м500',bold:false,alignment:'left'},
                            {text:'мешки ',bold:true,alignment:'center'},
                            {text:''+Zement500smv,bold:false,alignment:'center'},
                            {text:''+Zement500smPrsmv,bold:false,alignment:'center'}
                            ,{text:''+Zement500smItogsmv,bold:false,alignment:'center'}
                            ], 
                            [
                                {text:'3',bold:false,alignment:'center'},
                                {text:'Грунт привозной 3х компонентный',bold:false,alignment:'left'},
                                {text:'м³ ',bold:true,alignment:'center'},
                                {text:''+Grunt3ksmv,bold:false,alignment:'center'},
                                {text:''+Grunt3ksmPrsmv,bold:false,alignment:'center'}
                                ,{text:''+Grunt3ksmItogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'4',bold:false,alignment:'center'},
                                {text:'Щебень гравийный фр.5-20 ',bold:false,alignment:'left'},
                                {text:'м³ ',bold:true,alignment:'center'},
                                {text:''+ShebenkaGrsmv,bold:false,alignment:'center'},
                                {text:''+ShebenkaGrPrsmv,bold:false,alignment:'center'}
                                ,{text:''+ShebenkaGrItogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'5',bold:false,alignment:'center'},
                                {text:'Геотекстиль 100м2 ',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+GeoTekstil100smv,bold:false,alignment:'center'},
                                {text:''+GeoTekstil100Prsmv,bold:false,alignment:'center'}
                                ,{text:''+GeoTekstil100Itogsmv,bold:false,alignment:'center'}
                            ],   
                            [
                                {text:'6',bold:false,alignment:'center'},
                                {text:'Борт садовый 200х80х1000',bold:false,alignment:'left'},
                                {text:'мп ',bold:true,alignment:'center'},
                                {text:''+SadBarudv,bold:false,alignment:'center'},
                                {text:''+SadBarudPrsmv,bold:false,alignment:'center'}
                                ,{text:''+SadBarudItogsmv,bold:false,alignment:'center'}
                            ], 
                            [
                                {text:'7',bold:false,alignment:'center'},
                                {text:'Бетонная решетка экопарковки	',bold:false,alignment:'left'},
                                {text:'м² ',bold:true,alignment:'center'},
                                {text:''+BetonReshsmv,bold:false,alignment:'center'},
                                {text:''+BetonReshPrsmv,bold:false,alignment:'center'}
                                ,{text:''+BetonReshItogsmv,bold:false,alignment:'center'}
                            ],
                            [
                                {text:'8',bold:false,alignment:'center'},
                                {text:'	Семена газона',bold:false,alignment:'left'},
                                {text:'кг ',bold:true,alignment:'center'},
                                {text:''+Semenasmv,bold:false,alignment:'center'},
                                {text:''+SemenaPrsmv,bold:false,alignment:'center'}
                                ,{text:''+SemenaItogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'9',bold:false,alignment:'center'},
                                {text:'	Доставка манипулятором',bold:false,alignment:'left'},
                                {text:'рейс ',bold:true,alignment:'center'},
                                {text:''+Manipylsmv,bold:false,alignment:'center'},
                                {text:''+ManipylPrsmv,bold:false,alignment:'center'}
                                ,{text:''+ManipylItogsmv,bold:false,alignment:'center'}
                            ],  
                            [
                                {text:'10',bold:false,alignment:'center'},
                                {text:'Доставка сыпучих материалов',bold:false,alignment:'left'},
                                {text:'рейс ',bold:true,alignment:'center'},
                                {text:''+DostavkaMatsmv,bold:false,alignment:'center'},
                                {text:''+DostavkaMatPrsmv,bold:false,alignment:'center'}
                                ,{text:''+DostavkaMatItogsmv,bold:false,alignment:'center'}
                            ], 
                            
                        ]
                       // body:body1,


                    },
                   // layout: 'lightHorizontalLines',
                   border:true,
                    style: 'tableExample'
                },
                {
                    table:{
                        margin:[0,0,0,0],
                        widths:['80%','20%'],
   
                        body:[
                            [{text:'Итого материалы:',bold:true,alignment:'right'},
                            {text:''+Itog2smv,bold:true,alignment:'center,background:darkcyan',style: 'headercol'}]                            
                        ]   
                    },
                   
                   border:true
                },

                {
                    table:{
                        margin:[0,0,0,0],
                        widths:['80%','20%'],
   
                        body:[
                            [{text:'Итого:',bold:true,alignment:'right'},
                            {text:''+Itog3smv,bold:true,alignment:'center,background:darkcyan',style: 'headercol2'}]                            
                        ]   
                    },
                   
                   border:true
                },

               

              


               
 
            ],

            styles: {
                headercol: {
                    fillColor: 'darkcyan',

                },
                headercol2: {
                    fillColor: 'aquamarine',

                },


                
                header5: {
                    fontFamily: "ArialRegular",
                    fontSize:8,
                    margin:[0,0,5,5],
                    bold:false

                },
                header6: {
                    fontFamily: "ArialRegular",
                    fontSize:12,
                    border:'none',
                    layout: 'noBorders'
                },
                header7: {
                    margin:[2,2,55,0],
                    fontFamily: "ArialBold",
                    fontSize:8,
                    bold:true,
                   alignment:'right'
                },
                header9: {
                    fontFamily: "ArialBold",
                    fontSize:8,
                    bold:true,
                    margin:[0,15,0,0]
                },
                header10: {
                    fontFamily: "ArialBold",
                    fontSize:17,
                    width: 80,
                    bold:true

                },
                header11: {
                    fontFamily: "ArialRegular",
                    fontSize:8,
                    margin:[0,0,0,0],
                    bold:false
                },
                header33: {
                    fontFamily: "ArialRegular",
                    fontSize:7,
                    margin:[0,0,0,0],
                    bold:false,
                    whiteSpace:'pre-wrap',
                    wordWrap:'break-word',
                    wordBreak: 'break-all',
                    hyphens:'auto'

                },
                tableExample: {
                    fontFamily: "ArialItalic",
                    fontSize:8,
                    bold:false,
                    margin:[0,0,0,0]
                    //layout: 'noBorders',
                    //layout: 'headerLineOnly'
                }
            }
        }

        pdfMake.createPdf(docInfo).download('SmetaEko.pdf');
    }


    window.getPDF = getPDF;



});



