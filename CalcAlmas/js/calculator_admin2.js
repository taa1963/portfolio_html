var Typefundv,TypeFundamentName,GorodPr,NumberBl,TeploPr,DrenagPr, Typefundvp,TypeFundamentNamep,Paswdcl,NPasw,NPaswv;
Typefundv=1;
Typefundvp=1;

TypeFundamentName='Плита'; 
TypeFundamentNamep='Плита'; 
GorodPr=0;
TeploPr=0;
DrenagPr=0;
NumberBl=1;
Paswdcl='admin1';
NPasw=3;
NPaswv=0;


$(document).ready(function() {

    //localStorage.setItem('list', 1);
    var listv=sessionStorage.getItem('list');
    //alert(listv);
     if (listv==2){
       // alert(listv);
        var block = $(this).parents('.zakas');
        block.find('.zakas_block_admin1').show();
        $('#zakas_block_admin1').show();

        block.find('.zakas_block_autoris').hide();
         block.find('.zakas_block1').hide();
         block.find('.zakas_block2').hide();
         block.find('.zakas_block3').hide();
         block.find('.zakas_block3').hide(); 
         block.find('.zakasp').hide(); 
     }
     else{
        var block = $(this).parents('.zakas');
        block.find('.zakas_block_admin1').hide();
        block.find('.zakas_block_autoris').show();
        $('.zakas_block_autoris').show();

         block.find('.zakas_block1').hide();
         block.find('.zakas_block2').hide();
         block.find('.zakas_block3').hide();
         block.find('.zakas_block3').hide(); 
         block.find('.zakasp').hide(); 

     }





    var block2=document.getElementsByClassName('tablbl1');
    while (block2.length > 0){
   block2[0].remove();
   }

   var block2=document.getElementsByClassName('tablbl2');
    while (block2.length > 0){
   block2[0].remove();
   }
   var block2=document.getElementsByClassName('tablbl3');
  
   while (block2.length > 0){
   block2[0].remove();
   }
    typefundfunc();
    typefundfuncp();
    $('#land18').addClass('closeelm');
        $('#land19').addClass('closeelm');
        $('#landline18').addClass('closeelm');
        $('#landline19').addClass('closeelm');

        $('#land19p').addClass('closeelm');
        $('#landline18p').addClass('closeelm');
        $('#landline19p').addClass('closeelm');




        var errnv=NPasw;

        //========== Авторизация на первом блоке =======================================//
  
      $('#but_block_autoris').click(function () {      
         var passwv=document.getElementById('paswrd').value;
         if (passwv==Paswdcl){     
            var block = $(this).parents('.zakas');
       block.find('.zakas_block_admin1').show();
       block.find('.zakas_block_autoris').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide(); 
        block.find('.zakasp').hide(); 
        sessionStorage.setItem('list', 2);
       // localStorage.setItem('list', 2);
         }
  
         else{
          var block = $(this).parents('.zakas');
          block.find('.zakas_autoris_err').show();
          NPaswv=NPaswv+1;
          errnv=errnv-1;
          $('#errn').text(errnv);
         
          if (NPaswv>NPasw){
              window.open("admin.html", "_self");
              window.close();
          }       
         }      
      }); 


       

      


    /========== Нажатие "Формировать смету администратора" на блоке выбора администратора =======================================//

    $('#but_block_adm_1').click(function () {
        var block = $(this).parents('.zakas');
       block.find('.zakas_block_admin1').hide();
        block.find('.zakas_block1').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide(); 
        block.find('.zakasp').hide(); 
        //block.find('.zakas_block1').load();

       // $(".zakas").load(".zakas_block1"); 

    });
    //========== Нажатие "Формировать смету" на блоке выбора администратора =======================================//

    $('#but_block_adm_5').click(function () {
      var block = $(this).parents('.zakas');
       block.find('.zakas_block_admin1').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide(); 
        block.find('.zakasp').show();
     });

     /========== Нажатие "Назад" на 1 блоке сметы =======================================//

     $('#but_block1_1p').click(function () {
        var block = $(this).parents('.zakas');
         block.find('.zakas_block_admin1').show();
          block.find('.zakas_block1').hide();
          block.find('.zakas_block2').hide();
          block.find('.zakas_block3').hide();
          block.find('.zakas_block3').hide(); 
          block.find('.zakasp').hide();
       });


       /========== Нажатие "Назад" на 1 блоке сметы админа =======================================//

       $('#but_block1_1a').click(function () {
          var block = $(this).parents('.zakas');
           block.find('.zakas_block_admin1').show();
            block.find('.zakas_block1').hide();
            block.find('.zakas_block2').hide();
            block.find('.zakas_block3').hide();
            block.find('.zakas_block3').hide(); 
            block.find('.zakasp').hide();
         });
   
     









    /========== Нажатие "Редактировать данные" на блоке выбора администратора =======================================//

    $('#but_block_adm_2').click(function () {
      
       // alert(3)
      // $("#scriptbl").load(location.href + " #scriptbl");
        var block = $(this).parents('.zakas');
        block.find('.zakas_block_admin2').show();
        block.find('.zakas_block_admin1').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide(); 
        document.getElementById('ZbutovkaNameAdm').value=ZbutovkaName;
        document.getElementById('ZbutovkaAdm').value=Zbutovka;
        document.getElementById('ZbutovkaPrAdm').value=Zbutovkapr;

        document.getElementById('ZbutovkaManipNameAdm').value=ZbutovkaManipName;
        document.getElementById('ZbutovkaManipadm').value=ZbutovkaManip;
        document.getElementById('ZbutovkaManipprAdm').value=ZbutovkaManippr;

        document.getElementById('BioTyalNameAdm').value=BioTyalName;
        document.getElementById('ZBioTyalAdm').value=ZBioTyal;
        document.getElementById('ZBioTyalprAdm').value=ZBioTyalpr;
           
        document.getElementById('DostavkaBioTyalNameAdm').value=DostavkaBioTyalName;
        document.getElementById('DostavkaBioTyalAdm').value=DostavkaBioTyal;
        document.getElementById('DostavkaBioTyalprAdm').value=DostavkaBioTyalpr;

        document.getElementById('PrivjzkaNameAdm').value=PrivjzkaName;
        document.getElementById('ZPrivjzkaAdm').value=ZPrivjzka;
        document.getElementById('ZPrivjzkaprAdm').value=ZPrivjzkapr;

        document.getElementById('ZKotlovanNameAdm').value=ZKotlovanName;
        document.getElementById('ZKotlovanAdm').value=ZKotlovan;
        document.getElementById('ZKotlovanprAdm').value=ZKotlovanpr;

        document.getElementById('ZGeoTekstUNameAdm').value=ZGeoTekstUName;
        document.getElementById('ZGeoTekstUAdm').value=ZGeoTekstU;
        document.getElementById('ZGeoTekstUprAdm').value=ZGeoTekstUpr;

        document.getElementById('ZGeoTekst200NameAdm').value=ZGeoTekst200Name;
        document.getElementById('ZGeoTekst200Adm').value=ZGeoTekst200;
        document.getElementById('ZGeoTekst200prAdm').value=ZGeoTekst200pr;

        document.getElementById('ZOtsup200NameAdm').value=ZOtsup200Name;
        document.getElementById('ZOtsup200Adm').value=ZOtsup200;
        document.getElementById('ZOtsup200prAdm').value=ZOtsup200pr;

        document.getElementById('ZekskovatorNameAdm').value=ZekskovatorName;
        document.getElementById('ZekskovatorAdm').value=Zekskovator;
        document.getElementById('ZekskovatorprAdm').value=Zekskovatorpr;

        document.getElementById('ZPesokNNameAdm').value=ZPesokNName;
        document.getElementById('ZPesokNAdm').value=ZPesokN;
        document.getElementById('ZPesokNprAdm').value=ZPesokNpr;

        document.getElementById('ZOtsupSh150NameAdm').value=ZOtsupSh150Name;
        document.getElementById('ZOtsupSh150Adm').value=ZOtsupSh150;
        document.getElementById('ZOtsupSh150prAdm').value=ZOtsupSh150pr;

        document.getElementById('Zekskovator29NameAdm').value=Zekskovator29Name;
        document.getElementById('Zekskovator29Adm').value=Zekskovator29;
        document.getElementById('Zekskovator29prAdm').value=Zekskovator29pr;

        document.getElementById('ZSheb2040NameAdm').value=ZSheb2040Name;
        document.getElementById('ZSheb2040Adm').value=ZSheb2040;
        document.getElementById('ZSheb2040prAdm').value=ZSheb2040pr;

        document.getElementById('ZfanTrNameAdm').value=ZfanTrName;
        document.getElementById('ZfanTrAdm').value=ZfanTr;
        document.getElementById('ZfanTrprAdm').value=ZfanTrpr;

        document.getElementById('ZfanTr110NameAdm').value=ZfanTr110Name;
        document.getElementById('ZfanTr110Adm').value=ZfanTr;
        document.getElementById('ZfanTr110prAdm').value=ZfanTr110pr;

        document.getElementById('ZOtbod110NameAdm').value=ZOtbod110Name;
        document.getElementById('ZOtbod110Adm').value=ZOtbod110;
        document.getElementById('ZOtbod110prAdm').value=ZOtbod110pr;

        document.getElementById('Troyn110NameAdm').value=Troyn110Name;
        document.getElementById('Troyn110Adm').value=Troyn110;
        document.getElementById('Troyn110prAdm').value=Troyn110pr;

        document.getElementById('Zaglyshrf110NameAdm').value=Zaglyshrf110Name;
        document.getElementById('Zaglyshrf110Adm').value=Zaglyshrf110;
        document.getElementById('Zaglyshrf110prAdm').value=Zaglyshrf110pr;

        document.getElementById('ZTeplo144NameAdm').value=ZTeplo144Name;
        document.getElementById('ZTeplo144Adm').value=ZTeplo144;
        document.getElementById('ZTeplo144prAdm').value=ZTeplo144pr;

        document.getElementById('ZGilsaNameAdm').value=ZGilsaName;
        document.getElementById('ZGilsaAdm').value=ZGilsa;
        document.getElementById('ZGilsaprAdm').value=ZGilsapr;

        document.getElementById('ZTruba50NameAdm').value=ZTruba50Name;
        document.getElementById('ZTruba50Adm').value=ZTruba50;
        document.getElementById('ZTruba50prAdm').value=ZTruba50pr;

        document.getElementById('ZTrubaGof110NameAdm').value=ZTrubaGof110Name;
        document.getElementById('ZTrubaGof110Adm').value=ZTrubaGof110;
        document.getElementById('ZTrubaGof110prAdm').value=ZTrubaGof110pr;

        document.getElementById('ZDostavkaBl3NameAdm').value=ZDostavkaBl3Name;
        document.getElementById('ZDostavkaBl3Adm').value=ZDostavkaBl3;
        document.getElementById('ZDostavkaBl3prAdm').value=ZDostavkaBl3pr;

        document.getElementById('ZOpalybkaNameAdm').value=ZOpalybkaName;
        document.getElementById('ZOpalybkaAdm').value=ZOpalybka;
        document.getElementById('ZOpalybkaprAdm').value=ZOpalybkapr;

        document.getElementById('ZPiloMatNameAdm').value=ZPiloMatName;
        document.getElementById('ZPiloMatAdm').value=ZPiloMat;
        document.getElementById('ZPiloMatprAdm').value=ZPiloMatpr;

        document.getElementById('ZYtepPlNameAdm').value=ZYtepPlName;
        document.getElementById('ZYtepPlAdm').value=ZYtepPl;
        document.getElementById('ZYtepPlprAdm').value=ZYtepPlpr;

        document.getElementById('ZGenoPolistirolNameAdm').value=ZGenoPolistirolName;
        document.getElementById('ZGenoPolistirolAdm').value=ZGenoPolistirol;
        document.getElementById('ZGenoPolistirolprAdm').value=ZGenoPolistirolpr;

        document.getElementById('ZYteplTorzNameAdm').value=ZYteplTorzName;
        document.getElementById('ZYteplTorzAdm').value=ZYteplTorz;
        document.getElementById('ZYteplTorzprAdm').value=ZYteplTorzpr;

        document.getElementById('ZGenoPolistirol2NameAdm').value=ZGenoPolistirol2Name;
        document.getElementById('ZGenoPolistirol2Adm').value=ZGenoPolistirol2;
        document.getElementById('ZGenoPolistirol2prAdm').value=ZGenoPolistirol2pr;

        document.getElementById('ZDubekTeploNameAdm').value=ZDubekTeplosmName;
        document.getElementById('ZDubekTeploAdm').value=ZDubekTeplo;
        document.getElementById('ZDubekTeploprAdm').value=ZDubekTeplopr;

        document.getElementById('ZKleyPolisNameAdm').value=ZKleyPolisName;
        document.getElementById('ZKleyPolisAdm').value=ZKleyPolis;
        document.getElementById('ZKleyPolisprAdm').value=ZKleyPolispr;

        document.getElementById('ZGidroFundNameAdm').value=ZGidroFundName;
        document.getElementById('ZGidroFundAdm').value=ZGidroFund;
        document.getElementById('ZGidroFundprAdm').value=ZGidroFundpr;

        document.getElementById('ZMembramaNameAdm').value=ZMembramaName;
        document.getElementById('ZMembramaAdm').value=ZMembrama;
        document.getElementById('ZMembramaprAdm').value=ZMembramapr;

        document.getElementById('ZVjzkaD12NameAdm').value=ZVjzkaD12Name;
        document.getElementById('ZVjzkaD12Adm').value=ZVjzkaD12;
        document.getElementById('ZVjzkaD12prAdm').value=ZVjzkaD12pr;

        document.getElementById('ZArmatura65NameAdm').value=ZArmatura65Name;
        document.getElementById('ZArmatura65Adm').value=ZArmatura65;
        document.getElementById('ZArmatura65prAdm').value=ZArmatura65pr;

        document.getElementById('ZKrepegNameAdm').value=ZKrepegName;
        document.getElementById('ZKrepegAdm').value=ZKrepeg;
        document.getElementById('ZKrepegprAdm').value=ZKrepegpr;

        document.getElementById('ZBetonFundNameAdm').value=ZBetonFundName;
        document.getElementById('ZBetonFundAdm').value=ZBetonFund;
        document.getElementById('ZBetonFundprAdm').value=ZBetonFundpr;

        document.getElementById('ZBetonM400NameAdm').value=ZBetonM400Name;
        document.getElementById('ZBetonM400Adm').value=ZBetonM400;
        document.getElementById('ZBetonM400prAdm').value=ZBetonM400pr;

        document.getElementById('ZMikserNameAdm').value=ZMikserName;
        document.getElementById('ZMikserAdm').value=ZMikser;
        document.getElementById('ZMikserprAdm').value=ZMikserpr;

        document.getElementById('ZNasosNameAdm').value=ZNasosName;
        document.getElementById('ZNasosAdm').value=ZNasos;
        document.getElementById('ZNasosprAdm').value=ZNasospr;

        document.getElementById('ZDostavkaRachodNameAdm').value=ZDostavkaRachodName;
        document.getElementById('ZDostavkaRachodAdm').value=ZDostavkaRachod;
        document.getElementById('ZDostavkaRachodprAdm').value=ZDostavkaRachodpr;

        document.getElementById('ZDostavkaPenoplNameAdm').value=ZDostavkaPenoplName;
        document.getElementById('ZDostavkaPenoplAdm').value=ZDostavkaPenopl;
        document.getElementById('ZDostavkaPenoplprAdm').value=ZDostavkaPenoplpr;

        document.getElementById('ZDostavkaPilomatNameAdm').value=ZDostavkaPilomatName;
        document.getElementById('ZDostavkaPilomatAdm').value=ZDostavkaPilomat;
        document.getElementById('ZDostavkaPilomatprAdm').value=ZDostavkaPilomatpr;

        document.getElementById('ZUhodFundNameAdm').value=ZUhodFundName;
        document.getElementById('ZUhodFundAdm').value=ZUhodFund;
        document.getElementById('ZUhodFundprAdm').value=ZUhodFundpr;

        document.getElementById('ZDostavkaArmNameAdm').value=ZDostavkaArmName;
        document.getElementById('ZDostavkaArmAdm').value=ZDostavkaArm;
        document.getElementById('ZDostavkaArmprAdm').value=ZDostavkaArmpr;

        document.getElementById('ZLivenNameAdm').value=ZLivenName;
        document.getElementById('ZLivenAdm').value=ZLiven;
        document.getElementById('ZLivenprAdm').value=ZLivenpr;

        document.getElementById('ZDorabTrNameAdm').value=ZDorabTrName;
        document.getElementById('ZDorabTrAdm').value=ZDorabTr;
        document.getElementById('ZDorabTrprAdm').value=ZDorabTrpr;

        document.getElementById('ZUkladkaGeoNameAdm').value=ZUkladkaGeoName;
        document.getElementById('ZUkladkaGeoAdm').value=ZUkladkaGeo;
        document.getElementById('ZUkladkaGeoprAdm').value=ZUkladkaGeopr;

        document.getElementById('ZGeo150NameAdm').value=ZGeo150Name;
        document.getElementById('ZGeo150Adm').value=ZGeo150;
        document.getElementById('ZGeo150prAdm').value=ZGeo150pr;

        document.getElementById('ZUkladkaDrenagTrNameAdm').value=ZUkladkaDrenagTrName;
        document.getElementById('ZUkladkaDrenagTrAdm').value=ZUkladkaDrenagTr;
        document.getElementById('ZUkladkaDrenagTrprAdm').value=ZUkladkaDrenagTrpr;

        document.getElementById('ZDrenagTr110NameAdm').value=ZDrenagTr110Name;
        document.getElementById('ZDrenagTr110Adm').value=ZDrenagTr110;
        document.getElementById('ZDrenagTr110prAdm').value=ZDrenagTr110pr;

        document.getElementById('ZMontagKolNameAdm').value=ZMontagKolName;
        document.getElementById('ZMontagKolAdm').value=ZMontagKol;
        document.getElementById('ZMontagKolprAdm').value=ZMontagKolpr;

        document.getElementById('ZKolodezNameAdm').value=ZKolodezName;
        document.getElementById('ZKolodezAdm').value=ZKolodez;
        document.getElementById('ZKolodezprAdm').value=ZKolodezpr;

        document.getElementById('ZShebObratNameAdm').value=ZShebObratName;
        document.getElementById('ZShebObratAdm').value=ZShebObrat;
        document.getElementById('ZShebObratprAdm').value=ZShebObratpr;

        document.getElementById('ZShebObrat2NameAdm').value=ZShebObrat2Name;
        document.getElementById('ZShebObrat2Adm').value=ZShebObrat2;
        document.getElementById('ZShebObrat2prAdm').value=ZShebObrat2pr;

        document.getElementById('ZDostavkaTrub2NameAdm').value=ZDostavkaTrub2Name;
        document.getElementById('ZDostavkaTrub2Adm').value=ZDostavkaTrub2;
        document.getElementById('ZDostavkaTrub2prAdm').value=ZDostavkaTrub2pr;
        

    });


    

//=================================================================



    //========== Нажатие "Дальше" на первом блоке =======================================//

    $('#but_block1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').show();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide(); 
       

    });
//=================================================================



    //========== Нажатие "Назад" на втором блоке =======================================//

    $('#but_block2_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block1').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
    });

    //========== Нажатие "Вперед" на втором блоке =======================================//

    $('#but_block2_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block4').hide();
     });



    //========== Нажатие "Назад" на третьем блоке =======================================//

    $('#but_block3_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block2').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
     });

    //========== Нажатие "Вперед" на третьем блоке =======================================//

    $('#but_block3_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
    });



    //========== Нажатие "Назад" на четвертом блоке =======================================//

    $('#but_block4_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3').show();
        block.find('.zakas_block4').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
    });

//========== Нажатие "Вперед" на четвертом блоке =======================================//

    $('#but_block4_2').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block5').show();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block4').hide();
     });


    //========== Нажатие "Назад" на пятом блоке =======================================//

    $('#but_block5_1').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4').show();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block5').hide();
        $('#zakas_smeta_lenta').removeClass('smeta_active');  
        $('.printpdf').removeClass('printpdf_active');   
        NumberBl=1; 
        var block2=document.getElementsByClassName('tablbl1');
         while (block2.length > 0){
        block2[0].remove();
        }

        var block2=document.getElementsByClassName('tablbl2');
         while (block2.length > 0){
        block2[0].remove();
        }
        var block2=document.getElementsByClassName('tablbl3');
       
        while (block2.length > 0){
        block2[0].remove();
        }


    });
    //============= формирование сметы клиента  =========//
    
    //===================   Выбор типа фундамента для клиента==============================//
    $('#typefund1p').click(function () {
        Typefundvp=1;
        typefundfuncp();
    });
    $('#typefund2p').click(function () {
        Typefundvp=2;
        typefundfuncp();
    });
    $('#typefund3p').click(function () {
        Typefundvp=3;
        typefundfuncp();
    });
   
     //=================== После выбора фундамента скрываем\открываем поля ввода на вторм шаге  ===========================///
     function typefundfuncp() {
       // alert(Typefundvp)
       
        if (Typefundvp==1){
          
          $('#land2p').removeClass('closeelm');
          $('#land3p').addClass('closeelm');
          $('#land4p').addClass('closeelm');
          $('#land3rp').addClass('closeelm');
          $('#land4rp').addClass('closeelm');
   
          $('#line1land2p').removeClass('closeelm');
           $('#line1land3p').addClass('closeelm');
           $('#line1land4p').addClass('closeelm');
           $('#line1land3rp').addClass('closeelm');
           $('#line1land4rp').addClass('closeelm');
           TypeFundamentNamep='Плита'; 
        }
   
   
        if (Typefundvp==2){
           $('#land2p').removeClass('closeelm');
           $('#land3p').addClass('closeelm');
           $('#land4p').addClass('closeelm');
           $('#land3rp').removeClass('closeelm');
           $('#land4rp').removeClass('closeelm');
   
           $('#line1land2p').removeClass('closeelm');
           $('#line1land3p').addClass('closeelm');
           $('#line1land4p').addClass('closeelm');
           $('#line1land3rp').removeClass('closeelm');
           $('#line1land4rp').removeClass('closeelm');
           TypeFundamentNamep='Плита с ребрами'; 
        }
   
        if (Typefundvp==3){
           $('#land2p').addClass('closeelm');
           $('#land3p').removeClass('closeelm');
           $('#land4p').removeClass('closeelm');
           $('#land3rp').addClass('closeelm');
           $('#land4rp').addClass('closeelm');
   
           $('#line1land2p').addClass('closeelm');
           $('#line1land3p').removeClass('closeelm');
           $('#line1land4p').removeClass('closeelm');
           $('#line1land3rp').addClass('closeelm');
           $('#line1land4rp').addClass('closeelm');      
           TypeFundamentNamep='Ленточный фундамент'; 
        }
       };    
       

 //========== Нажатие "Дальше" на первом блоке CLIENT =======================================//

 $('#but_block1p').click(function () {
    var block = $(this).parents('.zakas');
    block.find('.zakas_block1p').hide();
    block.find('.zakas_block2p').show();
    block.find('.zakas_block3p').hide();
    block.find('.zakas_block3p').hide(); 
   

});


    //========== Нажатие "Назад" на втором блоке =======================================//

    $('#but_block2_1p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block1p').show();
        block.find('.zakas_block2p').hide();
        block.find('.zakas_block3p').hide();
        block.find('.zakas_block4p').hide();
    });

    //========== Нажатие "Вперед" на втором блоке =======================================//

    $('#but_block2_2p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3p').show();
        block.find('.zakas_block2p').hide();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block4p').hide();
     });



    //========== Нажатие "Назад" на третьем блоке =======================================//

    $('#but_block3_1p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block2p').show();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block3p').hide();
        block.find('.zakas_block4p').hide();
     });

    //========== Нажатие "Вперед" на третьем блоке =======================================//

    $('#but_block3_2p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4p').show();
        block.find('.zakas_block2p').hide();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block3p').hide();
    });



    //========== Нажатие "Назад" на четвертом блоке =======================================//

    $('#but_block4_1p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block3p').show();
        block.find('.zakas_block4p').hide();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block2p').hide();
    });

//========== Нажатие "Вперед" на четвертом блоке =======================================//

    $('#but_block4_2p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block5p').show();
        block.find('.zakas_block2p').hide();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block3p').hide();
        block.find('.zakas_block4p').hide();
     });


    //========== Нажатие "Назад" на пятом блоке =======================================//

    $('#but_block5_1p').click(function () {
        var block = $(this).parents('.zakas');
        block.find('.zakas_block4p').show();
        block.find('.zakas_block1p').hide();
        block.find('.zakas_block2p').hide();
        block.find('.zakas_block3p').hide();
        block.find('.zakas_block5p').hide();
        $('#zakas_smeta_lentap').removeClass('smeta_active');  
        $('.printpdf').removeClass('printpdf_active');   
        NumberBlp=1; 
        var block2=document.getElementsByClassName('tablbl1p');
         while (block2.length > 0){
        block2[0].remove();
        }

        var block2=document.getElementsByClassName('tablbl2p');
         while (block2.length > 0){
        block2[0].remove();
        }
        var block2=document.getElementsByClassName('tablbl3p');
       
        while (block2.length > 0){
        block2[0].remove();
        }

    });
        
//========== Необходимость утепления фундамента   =======================================//

$('#teplofp').click(function () {

    var chkBox = document.getElementById('teplofp');
    if (chkBox.checked){
        $('#land18p').removeClass('closeelm');
        $('#land19p').removeClass('closeelm');
        $('#landline18p').removeClass('closeelm');
        $('#landline19p').removeClass('closeelm');
    }
    else
    {
        $('#land18p').addClass('closeelm');
        $('#land19p').addClass('closeelm');
        $('#landline18p').addClass('closeelm');
        $('#landline19p').addClass('closeelm');        
    }
   
});



//========== Необходимлсть устройства городка строителей  =======================================//

$('#gorodp').click(function () {

    var chkBox = document.getElementById('gorodp');
    if (chkBox.checked){
        GorodPr=1;
    }
    else{
        GorodPr=0;
    }
    var block2=document.getElementsByClassName('tablbl1p');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});


//========== Необходимость утепления фундамента  =======================================//

$('#teplofp').click(function () {

    var chkBox = document.getElementById('teplofp');
    if (chkBox.checked){
        TeploPr=1;
    }
    else{
        TeploPr=0;
    }
    var block2=document.getElementsByClassName('tablbl2p');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});

//========== Необходимость устройства дренажа  =======================================//

$('#drenagp').click(function () {

    var chkBox = document.getElementById('drenagp');
    if (chkBox.checked){
        DrenagPr=1;
    }
    else{
        DrenagPr=0;
    }
    var block2=document.getElementsByClassName('tablbl3p');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});

  $('.ZenaPoz,.PrPoz').on('input', function(event) {
    var preg = $(this).val().replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
     $(this).val(preg);
   });


 //===== оставляем ввод только цифр и точку в полях ввода данных  =====//
$('#landfp,#breadthfp,#heightrp,#heightr2p,#widthr2p,#widthrp,#thicknesspesokp,#thicknessshebnjp,#kanalstp,#waterp,#elektrop').on('input', function(event) {
   var preg = $(this).val().replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
    $(this).val(preg);
  });


//===== Функция выгрузки сметы в ВОРД  =====//
$('#wordpp').click(function () {   
exportHTML();    
   
   function exportHTML(){
     // alert(123)
      var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
           "xmlns:w='urn:schemas-microsoft-com:office:word' "+
           "xmlns='http://www.w3.org/TR/REC-html40'>"+
           "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
      var footer = "</body></html>";
      var sourceHTML = header+document.getElementById("zakas_smeta_lentap").innerHTML+footer;
      
      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'smetap.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
   }

 });

//===== Нажали кнопку отображения сметы  =====//

 $('#testp').click(function () { 
   
    $('#zakas_smeta_lentap').addClass('smeta_active');  
    $('.printpdf').addClass('printpdf_active');  
	 var block2=document.getElementsByClassName('tablbl1p');
         while (block2.length > 0){
        block2[0].remove();
        }

        var block2=document.getElementsByClassName('tablbl2p');
         while (block2.length > 0){
        block2[0].remove();
        }
        var block2=document.getElementsByClassName('tablbl3p');
       
        while (block2.length > 0){
        block2[0].remove();
		}

    smetap();
  });

  //===== Функция расчета параметров сметы  =====//

  function smetap() {
    var zena_smetup=0;
    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ   =================//

 //====Определение текущей даты=========///
    var date = new Date();  

    var jar=date.getFullYear();
    var month= date.getMonth();
	month=month+1;	
    var dd= date.getDate();
    var ddv=dd+'.'+month+'.'+jar;
    $('#ddsmp').text(ddv);


    //========== Тип фундамента ==========//
      $('#TupePlitasmp').text(TypeFundamentNamep);

    //====Растояние до КАД=========///
    var lmksd = document.getElementById('lkadp').value;
    $('#lkadsmp').text(lmksd);


   //================================///
    var landlfsm = document.getElementById('landfp').value;
    landlfsm = +landlfsm;

    var breadthlfsm = document.getElementById('breadthfp').value;
    breadthlfsm = +breadthlfsm;

    //====Площадь фундамента:=========///
    var Sfundv=landlfsm*breadthlfsm;
    Sfundv=Sfundv.toFixed(2);
    $('#Sfundvsmp').text(Sfundv);

     //====Толщина плиты=========///
     var thicknessv = document.getElementById('thicknessp').value;

     if (Typefundvp==3){
        thicknessv=0;
     }
     //alert(thicknessv)
     $('#thicknesssmpp').text(thicknessv);

       //====Периметр фундамента:=========///
    var Pfundv=landlfsm*2+breadthlfsm*2;
    Pfundv=Pfundv.toFixed(2);
    $('#Pfundvsmpp').text(Pfundv);

     //====Длина ленты/ребер:=========///
     var hrosv
     hrosv=document.getElementById('heightrp').value;
     if (Typefundv==2){
        hrosv=document.getElementById('heightr2p').value;

     }

     if(hrosv>0)
     {
        var Lrebra=Pfundv*1+landlfsm*1+breadthlfsm*1;
        Lrebra=Lrebra.toFixed(2);
     }
     else
     {
        Lrebra=0;
     }     
     $('#Lrebrasmpp').text(Lrebra);

     //====Толщина песчаной подушки=========///
     var thicknesspesokv = document.getElementById('thicknesspesokp').value;
     $('#thicknesspesokvsmp').text(thicknesspesokv);

     //====Толщина щебеночной подушки=========///
     var thicknessshebnjv = document.getElementById('thicknessshebnjp').value;
     $('#thicknessshebnjsmp').text(thicknessshebnjv);


     //====Глубина котлована=========///
     var thicknesspodbetonv = document.getElementById('thicknesspodbetonp').value;
     var thicknessgorytepv = document.getElementById('thicknessgorytepp').value;

     var hkotlv=thicknesspesokv*1+thicknessshebnjv*1+thicknesspodbetonv*1+thicknessgorytepv*1;

     hkotlv=hkotlv.toFixed(2);
     $('#hkotlsmp').text(hkotlv);

     //====Утепление под фундаментом=========///
     var thicknessverytepv = document.getElementById('thicknessverytepp').value;
     thicknessverytepv=thicknessverytepv*1;
     thicknessverytepv=thicknessverytepv.toFixed(2);
     $('#thicknessverytepsmp').text(thicknessverytepv);

      //====Канализацационный стояк под фундаментом=========///
      var kanalv = document.getElementById('kanalstp').value;     
      $('#kanalsmp').text(kanalv);

       //====Ввод воды , электричества под фундаментом=========///
       var waterv = document.getElementById('waterp').value;   
       var elektrov = document.getElementById('elektrop').value;    
       var vaterelv=waterv*1+elektrov*1;      

       $('#vaterelsmp').text(vaterelv);

     if (GorodPr==1){
       //====Первый блок Сметы=========///        

        var newSection = $('<tr class="tablbl1p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;font-weight: bold;">1</td>\n+'+
            '<td  style="width:40%;text-align: left;font-weight: bold;">Устройство городка строителей</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">к-т</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">1</td>\n+'+
            '<td style="width:15%;text-align: center;font-weight: bold;"><span id="Zblock1smp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;font-weight: bold;"></span></td>');
        $('#tablecalnew1p').append(newSection);


        //====Бытовка металлическая=========///  
        var newSection = $('<tr class="tablbl1p"></tr>');
        newSection.html(
             '<td style="width:10%;text-align: center;">1.1</td>\n+'+
             '<td  style="width:40%;text-align: left;"><span id="ZbutovkaNamesmp"></span> </td>\n+'+
             '<td style="width:10%;text-align: center;">мес</td>\n+'+
             '<td style="width:10%;text-align: center;">1</td>\n+'+
             '<td style="width:15%;text-align: center;"> <span id="Zbutovkasmp"></span>  </td>\n+'+
             '<td style="width:15%;text-align: center;font-weight: bold;"></span></td>');
             $('#tablecalnew1p').append(newSection);        

        var Zbutovkav=Zbutovka +((Zbutovka/100)*Zbutovkapr); 
        var Zbutovkavv=new Intl.NumberFormat('ru-RU').format(Zbutovkav); 
        $('#Zbutovkasmp').text(Zbutovkavv);
        $('#ZbutovkaNamesmp').text(ZbutovkaName);

        //====доставка  бытовки манипулятором=========///     
        var newSection = $('<tr class="tablbl1p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;">1.2</td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZbutovkaManipNamesmp"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">рейс</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="ZbutovkaManipsmp"></span>  </td>');
            $('#tablecalnew1p').append(newSection); 

         var ZbutovkaManipv=2*(ZbutovkaManip +((ZbutovkaManip/100)*ZbutovkaManippr)); 
         var ZbutovkaManipvv=new Intl.NumberFormat('ru-RU').format(ZbutovkaManipv); 
         $('#ZbutovkaManipsmp').text(ZbutovkaManipvv);
         $('#ZbutovkaManipNamesmp').text(ZbutovkaManipName);

         
         //====аренда био туалета=========///     
         var newSection = $('<tr class="tablbl1p"></tr>');
         newSection.html(
            '<td style="width:10%;text-align: center;">1.3</td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="BioTyalNamesmp"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">мес</td>\n+'+
            '<td style="width:10%;text-align: center;">1</td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="BioTyalsmp"></span>  </td>');
            $('#tablecalnew1p').append(newSection); 

          var ZBioTyalv=ZBioTyal +((ZBioTyal/100)*ZBioTyalpr); 
          var ZBioTyalvv=new Intl.NumberFormat('ru-RU').format(ZBioTyalv); 
           $('#BioTyalsmp').text(ZBioTyalvv);
           $('#BioTyalNamesmp').text(BioTyalName);


          //====доставка и вывоз  биотуалета=========/// 
          var newSection = $('<tr class="tablbl1p"></tr>');
         newSection.html(
            '<td style="width:10%;text-align: center;">1.4</td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="DostavkaBioTyalNamesmp"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">рейс</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="DostavkaBioTyalsmp"></span>  </td>');
            $('#tablecalnew1p').append(newSection);   


      var DostavkaBioTyalv=2*(DostavkaBioTyal +((DostavkaBioTyal/100)*DostavkaBioTyalpr)); 
      var DostavkaBioTyalvv=new Intl.NumberFormat('ru-RU').format(DostavkaBioTyalv); 
      $('#DostavkaBioTyalsmp').text(DostavkaBioTyalvv);
      $('#DostavkaBioTyalNamesmp').text(DostavkaBioTyalName);

      //====Устройство городка строителей=========///           
      var Zblock1v= DostavkaBioTyalv+ZBioTyalv+ZbutovkaManipv+Zbutovkav; 
      var Zblock1vv=new Intl.NumberFormat('ru-RU').format(Zblock1v); 
      $('#Zblock1smp').text(Zblock1vv);
      NumberBl=2;

     }

     else  //Если городок не нужен, удаляем все  строки по городку, стоимость по перовму блоку =0
     {
        var block2=document.getElementsByClassName('tablbl1p');
       
       while (block2.length > 0){
       block2[0].remove();
       }

        Zblock1v=0;
        NumberBl=1;
     }



      //====Второй блок Сметы=========///   
         
          
          //====Подготовка котлована и основания=========///           
          var SKotlovanv= (landlfsm+2)*(breadthlfsm+2); 
          SKotlovanv=SKotlovanv.toFixed(2);
          $('#SKotlovansmp').text(SKotlovanv);
          $('#NumberBl2smp').text(NumberBl);
        


          //====Привязка пятна застройки=========///           
         var ZPrivjzkav=ZPrivjzka +((ZPrivjzka/100)*ZPrivjzkapr); 
         var ZPrivjzkavv=new Intl.NumberFormat('ru-RU').format(ZPrivjzkav); 
         $('#Privjzkasmp').text(ZPrivjzkavv);
         $('#NumberBl21smp').text(NumberBl+'.'+'1');
         $('#PrivjzkaNamesmp').text(PrivjzkaName);


         //====земляные работы по устройству котлована спецтехникой=========///           
         var NKotlovanv=SKotlovanv*hkotlv; 
         NKotlovanv=NKotlovanv.toFixed(2);
         $('#NKotlovansmp').text(NKotlovanv);

         var ZKotlovanv= NKotlovanv*(ZKotlovan +((ZKotlovan/100)*ZKotlovanpr)); 
         var ZKotlovanvv=new Intl.NumberFormat('ru-RU').format(ZKotlovanv); 
         $('#ZKotlovansmp').text(ZKotlovanvv);
         $('#NumberBl22smp').text(NumberBl+'.'+'2');
         $('#ZKotlovanNamesmp').text(ZKotlovanName);


         //====Укладка геотекстиля========///           
         var NGeoTekstUv=SKotlovanv*1.1; 
         var NGeoTekstUv2=SKotlovanv*1.1;
         NGeoTekstUv=Math.round(NGeoTekstUv);
         $('#NGeoTekstUsmp').text(NGeoTekstUv);         

         var ZGeoTekstUv= NGeoTekstUv2*(ZGeoTekstU +((ZGeoTekstU/100)*ZGeoTekstUpr)); 
         ZGeoTekstUv=Math.round(ZGeoTekstUv);
         var ZGeoTekstUvv=new Intl.NumberFormat('ru-RU').format(ZGeoTekstUv); 
         $('#ZGeoTekstUsmp').text(ZGeoTekstUvv);
         $('#NumberBl23smp').text(NumberBl+'.'+'3');
         $('#ZGeoTekstUNamesmp').text(ZGeoTekstUName);


        //====геотекстиль 200 (50 м2)========///           
        var NGeoTekst200v=(NGeoTekstUv*1.3)/50;
        NGeoTekst200v=Math.ceil(NGeoTekst200v) ;
        $('#NGeoTekst200smp').text(NGeoTekst200v);         

        var ZGeoTekst200v= NGeoTekst200v*(ZGeoTekst200 +((ZGeoTekst200/100)*ZGeoTekst200pr)); 
         ZGeoTekst200v=Math.round(ZGeoTekst200v);
         var ZGeoTekst200vv=new Intl.NumberFormat('ru-RU').format(ZGeoTekst200v);
        $('#ZGeoTekst200smp').text(ZGeoTekst200vv); 
        $('#NumberBl24smp').text(NumberBl+'.'+'4');
        $('#ZGeoTekst200Namesmp').text(ZGeoTekst200Name);

        //====Отсыпка основания фундамента песком========/// 
        var I15= (landlfsm+1.2)*(breadthlfsm+1.2); 
        var L14=I15*thicknesspesokv;       
        
        var NOtsup200v=L14*1.3;
        var NOtsup200v2=Math.round(NOtsup200v) ;
        $('#NOtsup200smp').text(NOtsup200v2);         

        var ZOtsup200v= NOtsup200v*(ZOtsup200 +((ZOtsup200/100)*ZOtsup200pr)); 
        ZOtsup200v=Math.round(ZOtsup200v);
        var ZOtsup200vv=new Intl.NumberFormat('ru-RU').format(ZOtsup200v);
        $('#ZOtsup200smp').text(ZOtsup200vv); 
        $('#NumberBl25smp').text(NumberBl+'.'+'5');
        $('#ZOtsup200Namesmp').text(ZOtsup200Name); 

        //====Экскаватор/погрузчик========/// 
        var Zekskovatorv= (Zekskovator +((Zekskovator/100)*ZOtsup200pr)); 
        Zekskovatorv=Math.round(Zekskovatorv);
        var Zekskovatorvv=new Intl.NumberFormat('ru-RU').format(Zekskovatorv);
        $('#Zekskovatorsmp').text(Zekskovatorvv); 
        $('#NumberBl26smp').text(NumberBl+'.'+'6');
        $('#ZekskovatorNamesmp').text(ZekskovatorName); 


        //====песок намывной с доставкой========/// 
        var NPesokNv=NOtsup200v/10;
        NPesokNv=(Math.ceil(NPesokNv))*10 ;
        $('#NPesokNsmp').text(NPesokNv); 

        var ZPesokNv= (ZPesokN +((ZPesokN/100)*ZPesokNpr)); 
        ZPesokNv=ZPesokNv*NPesokNv;
        ZPesokNv=Math.round(ZPesokNv);
        var ZPesokNvv=new Intl.NumberFormat('ru-RU').format(ZPesokNv);
        $('#ZPesokNsmp').text(ZPesokNvv); 
        $('#NumberBl27smp').text(NumberBl+'.'+'7');
        $('#ZPesokNNamesmp').text(ZPesokNName); 


        //====Отсыпка основания фундамента щебнем спецтехникой и уплотнением, 150мм.========/// 
        var I14= (landlfsm+1.6)*(breadthlfsm+1.6); 
        var L15=I14*thicknessshebnjv;          
        var NOtsupSh150v=L15*1.1;
        var NOtsupSh150v2=Math.round(NOtsupSh150v) ;
        $('#NOtsupSh150smp').text(NOtsupSh150v2); 

        var ZOtsupSh150v= (ZOtsupSh150 +((ZOtsupSh150/100)*ZOtsupSh150pr)); 
        ZOtsupSh150v=ZOtsupSh150v*NOtsupSh150v;
        ZOtsupSh150v=Math.round(ZOtsupSh150v);
        var ZOtsupSh150vv=new Intl.NumberFormat('ru-RU').format(ZOtsupSh150v);
        $('#ZOtsupSh150smp').text(ZOtsupSh150vv); 
        $('#NumberBl28smp').text(NumberBl+'.'+'8');
        $('#ZOtsupSh150Namesmp').text(ZOtsupSh150Name); 

        
        //====Экскаватор/погрузчик29.========///         
        var Zekskovator29v= (Zekskovator29 +((Zekskovator29/100)*Zekskovator29pr)); 
        Zekskovator29v=Math.round(Zekskovator29v);
        var Zekskovator29vv=new Intl.NumberFormat('ru-RU').format(Zekskovator29v);
        $('#Zekskovator29smp').text(Zekskovator29vv); 
        $('#NumberBl29smp').text(NumberBl+'.'+'9');
        $('#Zekskovator29Namesmp').text(Zekskovator29Name); 


        //====щебень гранитный 20-40 с доставкой.========/// 
        var NSheb2040v=NOtsupSh150v/10;
        NSheb2040v=(Math.ceil(NSheb2040v))*10 ;
        $('#NSheb2040smp').text(NSheb2040v); 

        var ZSheb2040v= (ZSheb2040 +((ZSheb2040/100)*ZSheb2040pr)); 
        ZSheb2040v=ZSheb2040v*NSheb2040v;
        ZSheb2040v=Math.round(ZSheb2040v);
        var ZSheb2040vv=new Intl.NumberFormat('ru-RU').format(ZSheb2040v);
        $('#ZSheb2040smp').text(ZSheb2040vv); 
        $('#NumberBl210smp').text(NumberBl+'.'+'10');
        $('#ZSheb2040Namesmp').text(ZSheb2040Name); 


         //====Итоговая цена по 2 Блоку.========/// 
         var Zblock2v=ZSheb2040v+Zekskovator29v+ZOtsupSh150v+ZPesokNv+Zekskovatorv+ZGeoTekst200v+ZGeoTekstUv+ZKotlovanv+ZPrivjzkav+ZOtsup200v;
        // NSheb2040v=(Math.ceil(NSheb2040v))*10 ;
        var Zblock2vv=new Intl.NumberFormat('ru-RU').format(Zblock2v);
         $('#Zblock2smp').text(Zblock2vv); 
 
         NumberBl= NumberBl+1;


         
         
     ///==================БЛОК ТРЕТИЙ===============//
     //====Количество  по 3 Блоку.========/// 
     var Nblock3v= waterv*1+elektrov*1+kanalv*1; 
     $('#Nblock3smp').text(Nblock3v); 
     $('#NumberBl3smp').text(NumberBl);


//====Монтаж фановой трубы под фундаментом, с выходом за границу фундамента на 1м. (без подключения) й.========/// 
    var NfanTrv=kanalv*1; 
    $('#NfanTrsmp').text(NfanTrv); 

    var ZfanTrv= (ZfanTr +((ZfanTr/100)*ZfanTrpr)); 
    ZfanTrv=ZfanTrv*NfanTrv
    //ZSheb2040v=Math.round(ZSheb2040v);
    var ZfanTrvv=new Intl.NumberFormat('ru-RU').format(ZfanTrv);
    $('#ZfanTrsmp').text(ZfanTrvv); 
    $('#NumberBl31smp').text(NumberBl+'.'+'1');
    $('#ZfanTrNamesmp').text(ZfanTrName); 


    //====труба фановая 110мм наружная 1000мм Ostendorf.========/// 
    var NfanTr110v=kanalv*6; 
    $('#NfanTr110smp').text(NfanTr110v); 

    var ZfanTr110v= (ZfanTr110 +((ZfanTr110/100)*ZfanTr110pr));
    ZfanTr110v=NfanTr110v*ZfanTr110v
    ZfanTr110v=Math.round(ZfanTr110v);
    var ZfanTr110vv=new Intl.NumberFormat('ru-RU').format(ZfanTr110v);
    $('#ZfanTr110smp').text(ZfanTr110vv); 
    $('#NumberBl32smp').text(NumberBl+'.'+'2');
    $('#ZfanTr110Namesmp').text(ZfanTr110Name); 

    //====отвод 45 гр. 110мм , наружный Ostendorf========/// 
    var NOtbod110v=kanalv*2; 
    $('#NOtbod110smp').text(NOtbod110v); 

    var ZOtbod110v= (ZOtbod110 +((ZOtbod110/100)*ZOtbod110pr));
    ZOtbod110v=NOtbod110v*ZOtbod110v
    ZOtbod110v=Math.round(ZOtbod110v);
    var ZOtbod110vv=new Intl.NumberFormat('ru-RU').format(ZOtbod110v);
    $('#ZOtbod110smp').text(ZOtbod110vv); 
    $('#NumberBl33smp').text(NumberBl+'.'+'3');
    $('#ZOtbod110Namesmp').text(ZOtbod110Name); 


    //====тройник 110мм наружный========/// 
    var Troyn110v= (Troyn110 +((Troyn110/100)*Troyn110pr));      
    Troyn110v=Math.round(Troyn110v);
    var Troyn110vv=new Intl.NumberFormat('ru-RU').format(Troyn110v);
    $('#Troyn110smp').text(Troyn110vv); 
    $('#NumberBl34smp').text(NumberBl+'.'+'4');
    $('#Troyn110Namesmp').text(Troyn110Name); 

    //====заглушка фановой трубы 110мм.========/// 
    var Naglyshrf110v=kanalv*1; 
    $('#Naglyshrf110smp').text(Naglyshrf110v); 

    var Zaglyshrf110v= (Zaglyshrf110 +((Zaglyshrf110/100)*Zaglyshrf110pr));
    Zaglyshrf110v=Naglyshrf110v*Zaglyshrf110v;
    Zaglyshrf110v=Math.round(Zaglyshrf110v);
    var Zaglyshrf110vv=new Intl.NumberFormat('ru-RU').format(Zaglyshrf110v);
    $('#Zaglyshrf110smp').text(Zaglyshrf110vv); 
    $('#NumberBl35smp').text(NumberBl+'.'+'5');
    $('#Zaglyshrf110Namesmp').text(Zaglyshrf110Name); 

    //====теплоизоляция на трубу 114*13*2000.========/// 
    var NTeplo144v=(NfanTr110v/2)+1; 
    $('#NTeplo144smp').text(NTeplo144v); 

    var ZTeplo144v= (ZTeplo144 +((ZTeplo144/100)*ZTeplo144pr));
    ZTeplo144v=NTeplo144v*ZTeplo144v;
    ZTeplo144v=Math.round(ZTeplo144v);
    var ZTeplo144vv=new Intl.NumberFormat('ru-RU').format(ZTeplo144v);
    $('#ZTeplo144smp').text(ZTeplo144vv); 
    $('#NumberBl36smp').text(NumberBl+'.'+'6');
    $('#ZTeplo144Namesmp').text(ZTeplo144Name); 

    //====Монтаж гильз для  коммуникаций , под фундаментом .========/// 
    var NGilsav=waterv*1+elektrov*1; 
    $('#NGilsasm').text(NGilsav); 

    var ZGilsav= (ZGilsa +((ZGilsa/100)*ZGilsapr));
    ZGilsav=NGilsav*ZGilsav;
    ZGilsav=Math.round(ZGilsav);
    var ZGilsavv=new Intl.NumberFormat('ru-RU').format(ZGilsav);
    $('#ZGilsasmp').text(ZGilsavv);
    $('#NumberBl37smp').text(NumberBl+'.'+'7');
    $('#ZGilsaNamesmp').text(ZGilsaName); 

     //====труба ПНД50мм ========/// 
     var NTruba50v=(NGilsav*10)/2; 
     $('#NTruba50smp').text(NTruba50v); 

     var ZTruba50v= (ZTruba50 +((ZTruba50/100)*ZTruba50pr));
     ZTruba50v=NTruba50v*ZTruba50v;
     ZTruba50v=Math.round(ZTruba50v);
     var ZTruba50vv=new Intl.NumberFormat('ru-RU').format(ZTruba50v);
     $('#ZTruba50smp').text(ZTruba50vv); 
     $('#NumberBl38smp').text(NumberBl+'.'+'8');
     $('#ZTruba50Namesmp').text(ZTruba50Name); 

     //====труба гофрированная 110 мм. ========/// 
     var NTrubaGof110v=(NGilsav*8)/2; 
     $('#NTrubaGof110smp').text(NTrubaGof110v); 

     var ZTrubaGof110v= (ZTrubaGof110 +((ZTrubaGof110/100)*ZTrubaGof110pr));
     ZTrubaGof110v=NTrubaGof110v*ZTrubaGof110v;
     ZTrubaGof110v=Math.round(ZTrubaGof110v);
     var ZTrubaGof110vv=new Intl.NumberFormat('ru-RU').format(ZTrubaGof110v);
     $('#ZTrubaGof110smp').text(ZTrubaGof110vv); 
     $('#NumberBl39smp').text(NumberBl+'.'+'9');
     $('#ZTrubaGof110Namesmp').text(ZTrubaGof110Name); 

     
     //====Доставка материалов. ========///         
     var ZDostavkaBl3v= (ZDostavkaBl3 +((ZDostavkaBl3/100)*ZDostavkaBl3pr));
     ZDostavkaBl3v=Math.round(ZDostavkaBl3v);
     var ZDostavkaBl3vv=new Intl.NumberFormat('ru-RU').format(ZDostavkaBl3v);
     $('#ZDostavkaBl3smp').text(ZDostavkaBl3vv);
     $('#NumberBl310smp').text(NumberBl+'.'+'10');
     $('#ZDostavkaBl3Namesmp').text(ZDostavkaBl3Name);


     //====Итоговая цена по 3 Блоку.========/// 
     var Zblock3v=ZDostavkaBl3v+ZTrubaGof110v+ZTruba50v+ZGilsav+ZTeplo144v+Zaglyshrf110v+Troyn110v+ZOtbod110v+ZfanTr110v+ZfanTrv;
     var Zblock3vv=new Intl.NumberFormat('ru-RU').format(Zblock3v);
     $('#Zblock3smp').text(Zblock3vv); 

     NumberBl= NumberBl+1;




     
     
     ///==================БЛОК 4===============//
     //====Количество  по 4 Блоку.========/// 
     var k=1; //Номер позиции в блоке

     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NumberBl4smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;font-weight: bold;">Устройство фундамента на готовом основании</td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Nblock4smp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;font-weight: bold;"><span id="Zblock4smp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;font-weight: bold;"></td>');
     $('#tablecalnew2p').append(newSection);


     var Nblock4v= Sfundv; 
     $('#Nblock4smp').text(Nblock4v); 
     $('#NumberBl4smp').text(NumberBl);


     //====Устройство опалубки для  фундамента. ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl41smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZOpalybkaNamesmp"></span></td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NOpalybkasmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"><span id="ZOpalybkasmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"></td>');
     $('#tablecalnew2p').append(newSection);

     var C26=document.getElementById('thicknessgorytepp').value; 
     C26=C26*1; 
     var I21=Pfundv*(thicknessv*1+C26*1); 
     var C19=document.getElementById('heightrp').value;
     if (Typefundv==2){
        C19=document.getElementById('heightr2p').value;

     }
     C19=C19*1;
     let F19=0;
     if(C19>0){
        F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
       }
     else
     {
        F19=0;
     }

     let I23=0;
     if(C19>0){
        I23=F19*C19*2;
       
     }
     else{
        I23=0; 
     }         
     var NOpalybkav=I21+I23;
     var NOpalybkav2=NOpalybkav;
     NOpalybkav=NOpalybkav.toFixed(2);
     $('#NOpalybkasmp').text(NOpalybkav); 

     var ZOpalybkav= (ZOpalybka +((ZOpalybka/100)*ZOpalybkapr));
     ZOpalybkav=NOpalybkav2*ZOpalybkav;
     ZOpalybkav=Math.round(ZOpalybkav);
     var ZOpalybkavv=new Intl.NumberFormat('ru-RU').format(ZOpalybkav);
     $('#ZOpalybkasmp').text(ZOpalybkavv); 
     $('#NumberBl41smp').text(NumberBl+'.'+k);
     $('#ZOpalybkaNamesmp').text(ZOpalybkaName); 
     k=k+1;



     //====Пиломатериалы вспомогательные ========/// 
 var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl42smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZPiloMatNamesmp"></span></td>\n+'+
         '<td style="width:10%;text-align: center;">м3</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NPiloMatsmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"><span id="ZPiloMatsmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"></td>');
     $('#tablecalnew2p').append(newSection);


     var NPiloMatv=(NOpalybkav2/10)*1.1;    
     var NPiloMatv2=NPiloMatv;
     NPiloMatv=NPiloMatv.toFixed(2);
     $('#NPiloMatsmp').text(NPiloMatv); 

     var ZPiloMatv= (ZPiloMat +((ZPiloMat/100)*ZPiloMatpr));
     ZPiloMatv=NPiloMatv2*ZPiloMatv;
     ZPiloMatv=Math.round(ZPiloMatv);
     var ZPiloMatvv=new Intl.NumberFormat('ru-RU').format(ZPiloMatv);
     $('#ZPiloMatsmp').text(ZPiloMatvv);
     $('#NumberBl42smp').text(NumberBl+'.'+k);
     $('#ZPiloMatNamesmp').text(ZPiloMatName); 
     k=k+1;


     //====Утепление под плитой ========/// 
     var C26=document.getElementById('thicknessgorytepp').value; 
    var NYtepPlv=0;
    
      if (TeploPr==1){
        var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl43smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZYtepPlNamesmp"></span></td>\n+'+
            '<td style="width:10%;text-align: center;">м2</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NYtepPlsmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;"><span id="ZYtepPlsmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;"></td>');
        $('#tablecalnew2p').append(newSection);



        var C26=document.getElementById('thicknessgorytepp').value; 
     C26=C26*1;
     
     if (C26>0){
        NYtepPlv=Sfundv;
     }
     else
     { NYtepPlv=0;}

     
     $('#NYtepPlsmp').text(NYtepPlv); 
     var ZYtepPlv= (ZYtepPl +((ZYtepPl/100)*ZYtepPlpr));
     ZYtepPlv=NYtepPlv*ZYtepPlv;
     ZYtepPlv=Math.round(ZYtepPlv);
     var ZYtepPlvv=new Intl.NumberFormat('ru-RU').format(ZYtepPlv);
     $('#ZYtepPlsmp').text(ZYtepPlvv);
     $('#NumberBl43smp').text(NumberBl+'.'+k);
     $('#ZYtepPlNamesmp').text(ZYtepPlName);

     k=k+1;
      }
      else{
        ZYtepPlv=0;
      }
     

     


     //====Экструдированный пенополистирол Технониколь ========/// 
     var C26=document.getElementById('thicknessgorytepp').value;
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl44smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZGenoPolistirolNamesmp"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NGenoPolistirolsmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZGenoPolistirolsmp"></span>  </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>');
            $('#tablecalnew2p').append(newSection);


     var NGenoPolistirolv=0;
     if (C26>0.05){
        NGenoPolistirolv=(NYtepPlv/0.684)*2.1; 
     }
     else{
        NGenoPolistirolv=(NYtepPlv/0.684)*1.05;
     }

    
     NGenoPolistirolv=Math.round(NGenoPolistirolv);     
     $('#NGenoPolistirolsmp').text(NGenoPolistirolv); 

     var ZGenoPolistirolv= (ZGenoPolistirol +((ZGenoPolistirol/100)*ZGenoPolistirolpr));
     ZGenoPolistirolv=NGenoPolistirolv*ZGenoPolistirolv;
     ZGenoPolistirolv=Math.round(ZGenoPolistirolv);
     var ZGenoPolistirolvv=new Intl.NumberFormat('ru-RU').format(ZGenoPolistirolv);
     $('#ZGenoPolistirolsmp').text(ZGenoPolistirolvv);
     $('#NumberBl44smp').text(NumberBl+'.'+k);
     $('#ZGenoPolistirolNamesmp').text(ZGenoPolistirolName);
     k=k+1;

    }
    else
    {
        ZGenoPolistirolv=0; 
    }

  

//====Утепление под плитой ========/// 

     var C27=document.getElementById('thicknessverytepp').value; 
     C27=C27*1;

     var C19=document.getElementById('heightrp').value; 
     if (Typefundv==2){
         C19=document.getElementById('heightr2p').value;

     }

     C19=C19*1;
     var C17=document.getElementById('thicknessp').value; 
     C17=C17*1;

     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl45smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZYteplTorzNamesmp"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NYteplTorzsmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;">  <span id="ZYteplTorzsmp"></span>  </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>'); 
            $('#tablecalnew2p').append(newSection);




     var NYteplTorzv=0;
     if (C27>0){
        NYteplTorzv=Pfundv*(C19+C17);
     }
     else
     { 
        NYteplTorzv=0;
    }
    NYteplTorzv=NYteplTorzv.toFixed(2);
     
     $('#NYteplTorzsmp').text(NYteplTorzv); 

     var ZYteplTorzv= (ZYteplTorz +((ZYteplTorz/100)*ZYteplTorzpr));
     ZYteplTorzv=NYteplTorzv*ZYteplTorzv;
     ZYteplTorzv=Math.round(ZYteplTorzv);
     var ZYteplTorzvv=new Intl.NumberFormat('ru-RU').format(ZYteplTorzv);
     $('#ZYteplTorzsmp').text(ZYteplTorzvv);
     $('#NumberBl45smp').text(NumberBl+'.'+k);
     $('#ZYteplTorzNamesmp').text(ZYteplTorzName);
     k=k+1;

     }
    else
    {
        ZYteplTorzv=0;
    }
     
   
     
        
     //====Экструдированный пенополистирол Технониколь 2 ========/// 

     var C26=document.getElementById('thicknessgorytepp').value;
     var NGenoPolistirol2v=0;
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl46smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZGenoPolistirol2Namesmp"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NGenoPolistirol2smp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;">  <span id="ZGenoPolistirol2smp"></span>  </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>'); 
            $('#tablecalnew2p').append(newSection);




     if (C26>0.05){
        NGenoPolistirol2v=(NYteplTorzv/0.684)*2.2; 
     }
     else{
        NGenoPolistirol2v=(NYteplTorzv/0.684)*1.1;
     }     
     NGenoPolistirol2v=Math.round(NGenoPolistirol2v);     
     $('#NGenoPolistirol2smp').text(NGenoPolistirol2v); 

     var ZGenoPolistirol2v= (ZGenoPolistirol2 +((ZGenoPolistirol2/100)*ZGenoPolistirol2pr));
     ZGenoPolistirol2v=NGenoPolistirol2v*ZGenoPolistirol2v;
     ZGenoPolistirol2v=Math.round(ZGenoPolistirol2v);
     var ZGenoPolistirol2vv=new Intl.NumberFormat('ru-RU').format(ZGenoPolistirol2v);
     $('#ZGenoPolistirol2smp').text(ZGenoPolistirol2vv);
     $('#NumberBl46smp').text(NumberBl+'.'+k);
     $('#ZGenoPolistirol2Namesmp').text(ZGenoPolistirol2Name);
     k=k+1;


    }
     
     else{
        ZGenoPolistirol2v=0;
     }

     //====дюбель для теплоизоляции 10*100 ========/// 
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl47smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZDubekTeplosmNamesmp"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NDubekTeplosmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;">  <span id="ZDubekTeplosmp"></span>  </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>'); 
            $('#tablecalnew2p').append(newSection);

     var NDubekTeplov=NGenoPolistirol2v*2; 
     NDubekTeplov=Math.round(NDubekTeplov);     
     $('#NDubekTeplosmp').text(NDubekTeplov); 

     var ZDubekTeplov= (ZDubekTeplo +((ZDubekTeplo/100)*ZDubekTeplopr));
     ZDubekTeplov=NDubekTeplov*ZDubekTeplov;
     ZDubekTeplov=Math.round(ZDubekTeplov);
     var ZDubekTeplovv=new Intl.NumberFormat('ru-RU').format(ZDubekTeplov);
     $('#ZDubekTeplosmp').text(ZDubekTeplovv);    
     $('#NumberBl47smp').text(NumberBl+'.'+k);
     $('#ZDubekTeplosmNamesmp').text(ZDubekTeplosmName);
     k=k+1;
     }
     else{
        ZDubekTeplov=0;
      
     }

     
     //====клей-пена для полистерола ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl48smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZKleyPolisNamesmp"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZKleyPolissmp"></span>  </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>'); 
            $('#tablecalnew2p').append(newSection);

     var ZKleyPolisv= (ZKleyPolis +((ZKleyPolis/100)*ZKleyPolispr));
     ZKleyPolisv=2*ZKleyPolisv;
     ZKleyPolisv=Math.round(ZKleyPolisv);
     var ZKleyPolisvv=new Intl.NumberFormat('ru-RU').format(ZKleyPolisv);
     $('#ZKleyPolissmp').text(ZKleyPolisvv);
     $('#NumberBl48smp').text(NumberBl+'.'+k);
     $('#ZKleyPolisNamesmp').text(ZKleyPolisName);
     k=k+1;

     //====Укладка гидроизоляционной мембраны в основание  фундамента  ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl49smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZGidroFundNamesmp"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NGidroFundsmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZGidroFundsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var  NGidroFundv=Sfundv*1.2; 
     var NGidroFundv2=NGidroFundv;
     NGidroFundv=NGidroFundv.toFixed(2);     
     $('#NGidroFundsmp').text(NGidroFundv); 

     var ZGidroFundv= (ZGidroFund +((ZGidroFund/100)*ZGidroFundpr));
     ZGidroFundv=NGidroFundv2*ZGidroFundv;
     ZGidroFundv=Math.round(ZGidroFundv);
     var ZGidroFundvv=new Intl.NumberFormat('ru-RU').format(ZGidroFundv);
     $('#ZGidroFundsmp').text(ZGidroFundvv);
     $('#NumberBl49smp').text(NumberBl+'.'+k);
     $('#ZGidroFundNamesmp').text(ZGidroFundName);
     k=k+1;


     //====Мембрана плантер 2*20  ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl410smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZMembramaNamesmp"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">шт</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NMembramasmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZMembramasmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var  NMembramav=(NGidroFundv*1.2)/40; 
     var NMembramav2=NMembramav;
     NMembramav=Math.round(NMembramav);     
     $('#NMembramasmp').text(NMembramav); 

     var ZMembramav= (ZMembrama +((ZMembrama/100)*ZMembramapr));
     ZMembramav=NMembramav*ZMembramav;
     ZMembramav=Math.round(ZMembramav);
     var ZMembramavv=new Intl.NumberFormat('ru-RU').format(ZMembramav);
     $('#ZMembramasmp').text(ZMembramavv);
     $('#NumberBl410smp').text(NumberBl+'.'+k);
     $('#ZMembramaNamesmp').text(ZMembramaName);
     k=k+1;



     //====Вязка арматуры D12 в два слоя с ячейкой 200*200  ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl411smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZVjzkaD12Namesmp"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">кг</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NVjzkaD12smp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZVjzkaD12smp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var C13=document.getElementById('breadthfp').value; 
     C13=C13*1;
     var C14=document.getElementById('landfp').value; 
     C14=C14*1;
     var F171=((C13/0.2)*(C14*4));     
     var F172=(C13+C14)*2/0.4*1.4;    
     var F17= (F171+F172+(Sfundv/4))*1.1;

     var C19=document.getElementById('heightrp').value;
     if (Typefundv==2){
        C19=document.getElementById('heightr2p').value;

     }
     C19=C19*1;
     var C20=document.getElementById('widthrp').value;
     C20=C20*1;
     F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
     C19=C19*1;

     var F20=0;
     if (C19>0)
     {
      var F201=C19/0.2*2;      
      var F202=5*(C19+C17+C20)*2.4;     
      F20=(F201+F202)*F19;
     }
   var F22=F17+F20;  

     var   NVjzkaD12v=F22*1.05;; 
     var NVjzkaD12v2=NVjzkaD12v;
     NVjzkaD12v=Math.round(NVjzkaD12v);     
     $('#NVjzkaD12smp').text(NVjzkaD12v); 

     var ZVjzkaD12v= (ZVjzkaD12 +((ZVjzkaD12/100)*ZVjzkaD12pr));
     ZVjzkaD12v=NVjzkaD12v2*ZVjzkaD12v;
     ZVjzkaD12v=Math.round(ZVjzkaD12v);
     var ZVjzkaD12vv=new Intl.NumberFormat('ru-RU').format(ZVjzkaD12v);
     $('#ZVjzkaD12smp').text(ZVjzkaD12vv);
     $('#NumberBl411smp').text(NumberBl+'.'+k);
     $('#ZVjzkaD12Namesmp').text(ZVjzkaD12Name);
     k=k+1;


     //====арматура по проекту (65 кг/м3) ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl412smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZArmatura65Namesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">кг</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NArmatura65smp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZArmatura65smp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var  NArmatura65v=NVjzkaD12v2; 

     var NArmatura652v=NArmatura65v;
     NArmatura65v=Math.round(NArmatura65v);     
     $('#NArmatura65smp').text(NArmatura65v); 

     var ZArmatura65v= (ZArmatura65 +((ZArmatura65/100)*ZArmatura65pr));
     ZArmatura65v=NArmatura652v*ZArmatura65v;
     ZArmatura65v=Math.round(ZArmatura65v);
     var ZArmatura65vv=new Intl.NumberFormat('ru-RU').format(ZArmatura65v);
     $('#ZArmatura65smp').text(ZArmatura65vv);
     $('#NumberBl412smp').text(NumberBl+'.'+k);
     $('#ZArmatura65Namesmp').text(ZArmatura65Name);
     k=k+1;

     
     //====крепеж, фиксаторы, проволока ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl413smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZKrepegNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NKrepegsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZKrepegsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
    // var  NKrepegv=NYtepPlv;
     var  NKrepegv=Nblock4v;

    //  var NArmatura652v=NArmatura65v;
    //  NArmatura65v=Math.round(NArmatura65v);     
     $('#NKrepegsmp').text(NKrepegv); 
     var ZKrepegv= (ZKrepeg +((ZKrepeg/100)*ZKrepegpr));
     ZKrepegv=NKrepegv*ZKrepegv;
     ZKrepegv=Math.round(ZKrepegv);
     var ZKrepegvv=new Intl.NumberFormat('ru-RU').format(ZKrepegv);
     $('#ZKrepegsmp').text(ZKrepegvv);
     $('#NumberBl413smp').text(NumberBl+'.'+k);
     $('#ZKrepegNamesmp').text(ZKrepegName);
     k=k+1;

     //====Бетонирование  фундамента с подачей) ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl414smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZBetonFundNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">м3</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NBetonFundsmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZBetonFundsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
      var I19=2;
      var C17=document.getElementById('thicknessp').value; 
     C17=C17*1;
     var C19=document.getElementById('heightrp').value;
     if (Typefundv==2){
         C19=document.getElementById('heightr2p').value;

     }
     C19=C19*1;
     var C20=document.getElementById('widthrp').value;
     C20=C20*1;
     var L27=I19*C17*1.3;
     //console.log(L27);
     var I17=Sfundv;
     var L25=I17*C17;
     //console.log('LL25='+L25);
     F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
     var L24=F19*C19*C20;
     //console.log('LL24='+L24);
     var L26=L24+L25;
     var L28=L26+L27;
     var  NBetonFundv=L28*1.1;
      var NBetonFundv2=NBetonFundv;
    NBetonFundv=Math.round(NBetonFundv);    
     $('#NBetonFundsmp').text(NBetonFundv); 

     var ZBetonFundv= (ZBetonFund +((ZBetonFund/100)*ZBetonFundpr));
     ZBetonFundv=NBetonFundv2*ZBetonFundv;
     ZBetonFundv=Math.round(ZBetonFundv);
     var ZBetonFundvv=new Intl.NumberFormat('ru-RU').format(ZBetonFundv);
     $('#ZBetonFundsmp').text(ZBetonFundvv);
     $('#NumberBl414smp').text(NumberBl+'.'+k);
     $('#ZBetonFundNamesmp').text(ZBetonFundName);
     k=k+1;



    //====бетон М400, П4 ========/// 
    var newSection = $('<tr class="tablbl2p"></tr>');
    newSection.html(
        '<td style="width:10%;text-align: center;"><span id="NumberBl415smp"></span></td>\n+'+
        '<td  style="width:40%;text-align: left;"><span id="ZBetonM400Namesmp"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;">м3</td>\n+'+
        '<td style="width:10%;text-align: center;"><span id="NBetonM400smp"></span></td>\n+'+
        '<td style="width:15%;text-align: center;"> <span id="ZBetonM400smp"></span> </td>\n+'+
        '<td style="width:15%;text-align: center;"></td>'); 
        $('#tablecalnew2p').append(newSection);

    var  NBetonM400v=NBetonFundv; 
    // var NArmatura652v=NArmatura65v;
    // NArmatura65v=Math.round(NArmatura65v);     
    $('#NBetonM400smp').text(NBetonM400v); 

    var ZBetonM400v= (ZBetonM400 +((ZBetonM400/100)*ZBetonM400pr));
    ZBetonM400v=NBetonFundv2*ZBetonM400v;
    ZBetonM400v=Math.round(ZBetonM400v);
    var ZBetonM400vv=new Intl.NumberFormat('ru-RU').format(ZBetonM400v);
    $('#ZBetonM400smp').text(ZBetonM400vv);
    $('#NumberBl415smp').text(NumberBl+'.'+k);
    $('#ZBetonM400Namesmp').text(ZBetonM400Name);
    k=k+1


    //====миксер для перевозки бетона ========/// 
    var newSection = $('<tr class="tablbl2p"></tr>');
    newSection.html(
        '<td style="width:10%;text-align: center;"><span id="NumberBl416smp"></span></td>\n+'+
        '<td  style="width:40%;text-align: left;"><span id="ZMikserNamesmp"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;">м3</td>\n+'+
        '<td style="width:10%;text-align: center;"><span id="NMiksersmp"></span></td>\n+'+
        '<td style="width:15%;text-align: center;"> <span id="ZMiksersmp"></span> </td>\n+'+
        '<td style="width:15%;text-align: center;"></td>'); 
        $('#tablecalnew2p').append(newSection);
    var  NMikserv=NBetonFundv; 
    $('#NMiksersmp').text(NMikserv); 

    var ZMikserv= (ZMikser +((ZMikser/100)*ZMikserpr));
    ZMikserv=NBetonFundv2*ZMikserv;
    ZMikserv=Math.round(ZMikserv);
    var ZMikservv=new Intl.NumberFormat('ru-RU').format(ZMikserv);
    $('#ZMiksersmp').text(ZMikservv);
    $('#NumberBl416smp').text(NumberBl+'.'+k);
    $('#ZMikserNamesmp').text(ZMikserName);
    k=k+1

     //====Подача бетона насосом ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl417smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZNasosNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">смена</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NNasossmp"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZNasossmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var NNasosv=1;
     if (NBetonFundv<70){
        NNasosv=1;
     }
     else{
        NNasosv =1.5;
     } 
     $('#NNasossmp').text(NNasosv); 
 
     var ZNasosv= (ZNasos +((ZNasos/100)*ZNasospr));
     ZNasosv=NNasosv*ZNasosv;
     ZNasosv=Math.round(ZNasosv);
     var ZNasosvv=new Intl.NumberFormat('ru-RU').format(ZNasosv);
     $('#ZNasossmp').text(ZNasosvv);
     $('#NumberBl417smp').text(NumberBl+'.'+k);
     $('#ZNasosNamesmp').text(ZNasosName);
     k=k+1
 



     //====достака расходников  ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl418smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZDostavkaRachodNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaRachodsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var ZDostavkaRachodv= (ZDostavkaRachod +((ZDostavkaRachod/100)*ZDostavkaRachodpr));
     //ZNasosv=NNasosv*ZNasosv;
     ZDostavkaRachodv=Math.round(ZDostavkaRachodv);
     var ZDostavkaRachodvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaRachodv);
     $('#ZDostavkaRachodsmp').text(ZDostavkaRachodvv);
     $('#NumberBl418smp').text(NumberBl+'.'+k);
     $('#ZDostavkaRachodNamesmp').text(ZDostavkaRachodName);
     k=k+1;

     //====Доставка пеноплекса и геотекстиля  ========/// 
     var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl419smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZDostavkaPenoplNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPenoplsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
     var ZDostavkaPenoplv= (ZDostavkaPenopl +((ZDostavkaPenopl/100)*ZDostavkaPenoplpr));
     //ZNasosv=NNasosv*ZNasosv;
     ZDostavkaPenoplv=Math.round(ZDostavkaPenoplv);
     var ZDostavkaPenoplvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaPenoplv);
     $('#ZDostavkaPenoplsmp').text(ZDostavkaPenoplvv);
     $('#NumberBl419smp').text(NumberBl+'.'+k);
     $('#ZDostavkaPenoplNamesmp').text(ZDostavkaPenoplName);
     k=k+1;

       //====Доставка пиломатериалов  ========/// 
       var newSection = $('<tr class="tablbl2p"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl420smp"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZDostavkaPilomatNamesmp"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPilomatsmp"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"></td>'); 
         $('#tablecalnew2p').append(newSection);
       var ZDostavkaPilomatv= (ZDostavkaPilomat +((ZDostavkaPilomat/100)*ZDostavkaPilomatpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZDostavkaPilomatv=Math.round(ZDostavkaPilomatv);
       var ZDostavkaPilomatvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaPilomatv);
       $('#ZDostavkaPilomatsmp').text(ZDostavkaPilomatvv);
       $('#NumberBl420smp').text(NumberBl+'.'+k);
       $('#ZDostavkaPilomatNamesmp').text(ZDostavkaPilomatName);
       k=k+1;

       //====уход за фундаментом  ========/// 
       var newSection = $('<tr class="tablbl2p"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl421smp"></span></td>\n+'+
           '<td  style="width:40%;text-align: left;"><span id="ZUhodFundNamesmp"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">сут</td>\n+'+
           '<td style="width:10%;text-align: center;">2</td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZUhodFundsmp"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"></td>'); 
           $('#tablecalnew2p').append(newSection);
       var ZUhodFundv= (ZUhodFund +((ZUhodFund/100)*ZUhodFundpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZUhodFundv=2*Math.round(ZUhodFundv);
       var ZUhodFundvv=new Intl.NumberFormat('ru-RU').format(ZUhodFundv);
       $('#ZUhodFundsmp').text(ZUhodFundvv);
       $('#NumberBl421smp').text(NumberBl+'.'+k);
       $('#ZUhodFundNamesmp').text(ZUhodFundName);
       k=k+1;

       //====Доставка арматуры на плиту  ========/// 
       var newSection = $('<tr class="tablbl2p"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl422smp"></span></td>\n+'+
           '<td  style="width:40%;text-align: left;"><span id="ZDostavkaArmNamesmp"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">рейс</td>\n+'+
           '<td style="width:10%;text-align: center;">1</td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZDostavkaArmsmp"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"></td>'); 
           $('#tablecalnew2p').append(newSection);
       var ZDostavkaArmv= (ZDostavkaArm +((ZDostavkaArm/100)*ZDostavkaArmpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZZDostavkaArmv=Math.round(ZDostavkaArmv);
       var ZDostavkaArmvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaArmv);
       $('#ZDostavkaArmsmp').text(ZDostavkaArmvv);
       $('#NumberBl422smp').text(NumberBl+'.'+k);
       $('#ZDostavkaArmNamesmp').text(ZDostavkaArmName);
       k=k+1;
       NumberBl=NumberBl+1;

       //====Итого по 4 блоку  ========/// 
       var Zblock4v=ZDostavkaArmv+ZUhodFundv+ZDostavkaPilomatv+ZDostavkaPenoplv+ZDostavkaRachodv+ZNasosv+ZMikserv
       +ZBetonM400v+ZBetonFundv+ZKrepegv+ZArmatura65v+ZVjzkaD12v+ZMembramav+ZKleyPolisv+ZDubekTeplov+ZGenoPolistirol2v
       +ZYteplTorzv+ZPiloMatv+ZOpalybkav+ZGidroFundv+ZGenoPolistirolv+ZYtepPlv;

       
       var Zblock4vv=new Intl.NumberFormat('ru-RU').format(Zblock4v);
       $('#Zblock4smp').text(Zblock4vv);




       ///=========================== 5 BLOCK=============================//

       if (DrenagPr==1){
         
        n=1;

        //====Дренаж  ========//
        var newSection = $('<tr class="tablbl3p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NumberBl5smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;font-weight: bold;">Дренаж</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">м2</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NDrenagsmp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;font-weight: bold;"><span id="Zblock5smp"></span></td>\n+'+
            '<td style="width:15%;text-align: center;font-weight: bold;"></td>');
        $('#tablecalnew3p').append(newSection);
       var C13=document.getElementById('breadthfp').value; 
       C13=C13*1;
       var C14=document.getElementById('landfp').value; 
       C14=C14*1;
       var NDrenagv= (C13+3)*2+(C14+3)*2+2;
       //ZNasosv=NNasosv*ZNasosv;
       var NDrenagv2=NDrenagv;
       NDrenagv=Math.round(NDrenagv);
       $('#NDrenagsmp').text(NDrenagv);
       $('#NumberBl5smp').text(NumberBl);
        

        //====Устройство траншеи по периметру дома под ливневку  ========/// 
        var newSection = $('<tr class="tablbl3p"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl51smp"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZLivenNamesmp"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">см.</td>\n+'+
            '<td style="width:10%;text-align: center;">1</td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZLivensmp"></span> </td>\n+'+
            '<td style="width:15%;text-align: center;"></td>'); 
            $('#tablecalnew3p').append(newSection);

        var ZLivenv= (ZLiven +((ZLiven/100)*ZLivenpr));
        ZLivenv=Math.round(ZLivenv);
        var ZLivenvv=new Intl.NumberFormat('ru-RU').format(ZLivenv);
        $('#ZLivensmp').text(ZLivenvv);
        $('#NumberBl51smp').text(NumberBl+'.'+n);
        $('#ZLivenNamesmp').text(ZLivenName);
        n=n+1;
    
    
       //====Доработка траншеи вручную ( разуклонка песком ) ========/// 
       var newSection = $('<tr class="tablbl3p"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl52smp"></span></td>\n+'+
           '<td  style="width:40%;text-align: left;"><span id="ZDorabTrNamesmp"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
           '<td style="width:10%;text-align: center;"><span id="NDorabTrsmp"></span></td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZDorabTrsmp"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"></td>'); 
           $('#tablecalnew3p').append(newSection);
     var  NDorabTrv=NDrenagv;         
     $('#NDorabTrsmp').text(NDorabTrv); 
 
     var ZDorabTrv= (ZDorabTr +((ZDorabTr/100)*ZDorabTrpr));
     ZDorabTrv=NDrenagv2*ZDorabTrv;
     ZDorabTrv=Math.round(ZDorabTrv);
     var ZDorabTrvv=new Intl.NumberFormat('ru-RU').format(ZDorabTrv);
     $('#ZDorabTrsmp').text(ZDorabTrvv);
     $('#NumberBl52smp').text(NumberBl+'.'+n);
        $('#ZDorabTrNamesmp').text(ZDorabTrName);
        n=n+1;
 
      //====Укладка геотекстиля в траншею ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl53smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZUkladkaGeoNamesmp"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NUkladkaGeosmp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZUkladkaGeosmp"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var  NUkladkaGeov=NDrenagv;         
      $('#NUkladkaGeosmp').text(NUkladkaGeov); 
  
      var ZUkladkaGeov= (ZUkladkaGeo +((ZUkladkaGeo/100)*ZUkladkaGeopr));
      ZUkladkaGeov=NDrenagv2*ZUkladkaGeov;
      ZUkladkaGeov=Math.round(ZUkladkaGeov);
      var ZUkladkaGeovv=new Intl.NumberFormat('ru-RU').format(ZUkladkaGeov);
      $('#ZUkladkaGeosmp').text(ZUkladkaGeovv);
      $('#NumberBl53smp').text(NumberBl+'.'+n);
      $('#ZUkladkaGeoNamesmp').text(ZUkladkaGeoName);
      n=n+1;
 
      //====Геотекстиль 150 г/кв.м термоскрепленный 1,6х50 м (80 кв.м) ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl54smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZGeo150Namesmp"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">рул</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NGeo150smp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZGeo150smp"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var  NGeo150v=(NDrenagv*1.2)/50;  
      NGeo150v=Math.round(NGeo150v);
      $('#NGeo150smp').text(NGeo150v); 
  
      var ZGeo150v= (ZGeo150 +((ZGeo150/100)*ZGeo150pr));
      ZGeo150v=NGeo150v*ZGeo150v;
      ZGeo150v=Math.round(ZGeo150v);
      var ZGeo150vv=new Intl.NumberFormat('ru-RU').format(ZGeo150v);
      $('#ZGeo150smp').text(ZGeo150vv);
      $('#NumberBl54smp').text(NumberBl+'.'+n);
      $('#ZGeo150Namesmp').text(ZGeo150Name);
      n=n+1;

 
      //====укладка в траншею дренажной трубы с уклоном ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl55smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZUkladkaDrenagTrNamesmp"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NUkladkaDrenagTrsmp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZUkladkaDrenagTrsmp"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var  NUkladkaDrenagTrsmv=NDrenagv;         
      $('#NUkladkaDrenagTrsmp').text(NUkladkaDrenagTrsmv); 
  
      var ZUkladkaDrenagTrv= (ZUkladkaDrenagTr +((ZUkladkaDrenagTr/100)*ZUkladkaDrenagTrpr));
      ZUkladkaDrenagTrv=NDrenagv2*ZUkladkaDrenagTrv;
      ZUkladkaDrenagTrv=Math.round(ZUkladkaDrenagTrv);
      var ZUkladkaDrenagTrvv=new Intl.NumberFormat('ru-RU').format(ZUkladkaDrenagTrv);
      $('#ZUkladkaDrenagTrsmp').text(ZUkladkaDrenagTrvv);
      $('#NumberBl55smp').text(NumberBl+'.'+n);
      $('#ZUkladkaDrenagTrNamesmp').text(ZUkladkaDrenagTrName);
      n=n+1;

 
      //====труба дренажная  гофрированная , без перфорации 110 мм ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl56smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZDrenagTr110Namesmp"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NDrenagTr110smp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZDrenagTr110smp"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var  NDrenagTr110v=(NDrenagv2*1.1);
      //console.log(NDrenagTr110v)  
      NDrenagTr110v=Math.round(NDrenagTr110v);
      $('#NDrenagTr110smp').text(NDrenagTr110v); 
  
      var ZDrenagTr110v= (ZDrenagTr110 +((ZDrenagTr110/100)*ZDrenagTr110pr));
      ZDrenagTr110v=NDrenagTr110v*ZDrenagTr110v;
      ZDrenagTr110v=Math.round(ZDrenagTr110v);
      var ZDrenagTr110vv=new Intl.NumberFormat('ru-RU').format(ZDrenagTr110v);
      $('#ZDrenagTr110smp').text(ZDrenagTr110vv);
      $('#NumberBl56smp').text(NumberBl+'.'+n);
      $('#ZDrenagTr110Namesmp').text(ZDrenagTr110Name);
      n=n+1;
      
 
 
      //====Монтаж смотрового колодца ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl57smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZMontagKolNamesmp"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">шт</td>\n+'+
          '<td style="width:10%;text-align: center;">4</td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZMontagKolsmp"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var ZMontagKolv= (ZMontagKol +((ZMontagKol/100)*ZMontagKolpr));
      ZMontagKolv=4*ZMontagKolv;
      ZMontagKolv=Math.round(ZMontagKolv);
      var ZMontagKolvv=new Intl.NumberFormat('ru-RU').format(ZMontagKolv);
      $('#ZMontagKolsmp').text(ZMontagKolvv);
      $('#NumberBl57smp').text(NumberBl+'.'+n);
      $('#ZMontagKolNamesmp').text(ZMontagKolName);
      n=n+1;
 
      
      //====Колодец дренажный смотровой ========/// 
      var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl58smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZKolodezNamesmp"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">шт</td>\n+'+
          '<td style="width:10%;text-align: center;">4</td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZKolodezsmp"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var ZKolodezv= (ZKolodez +((ZKolodez/100)*ZKolodezpr));
      ZKolodezv=4*ZKolodezv;
      ZKolodezv=Math.round(ZKolodezv);
      var ZKolodezvv=new Intl.NumberFormat('ru-RU').format(ZKolodezv);
      $('#ZKolodezsmp').text(ZKolodezvv);
      $('#NumberBl58smp').text(NumberBl+'.'+n);
      $('#ZKolodezNamesmp').text(ZKolodezName);
      n=n+1;
   
   
     //==== обратная засыпка щебнем ========/// 
     var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl59smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"> <span id="ZShebObratNamesmp"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NShebObratsmp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;">  <span id="ZShebObratsmp"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
     var  NShebObratv=NDrenagv;         
     $('#NShebObratsmp').text(NShebObratv); 
 
     var ZShebObratv= (ZShebObrat +((ZShebObrat/100)*ZShebObratpr));
     ZShebObratv=NDrenagv2*ZShebObratv;
     ZShebObratv=Math.round(ZShebObratv);
     var ZShebObratvv=new Intl.NumberFormat('ru-RU').format(ZShebObratv);
     $('#ZShebObratsmp').text(ZShebObratvv);
     $('#NumberBl59smp').text(NumberBl+'.'+n);
      $('#ZShebObratNamesmp').text(ZShebObratName);
      n=n+1;
 
     
     //==== щебень для обр. засыпки ========/// 
     var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl510smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"> <span id="ZShebObrat2Namesmp"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NShebObrat2smp"></span></td>\n+'+
          '<td style="width:15%;text-align: center;">  <span id="ZShebObrat2smp"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
     var  NShebObrat2v=NDrenagv*0.6*0.2;
     NShebObrat2v=10*(Math.round(NShebObrat2v/10));
     $('#NShebObrat2smp').text(NShebObrat2v); 
     var ZShebObrat2v= (ZShebObrat2 +((ZShebObrat2/100)*ZShebObrat2pr));
     ZShebObrat2v=NShebObrat2v*ZShebObrat2v;
     ZShebObrat2v=Math.round(ZShebObrat2v);
     var ZShebObrat2vv=new Intl.NumberFormat('ru-RU').format(ZShebObrat2v);
     $('#ZShebObrat2smp').text(ZShebObrat2vv);
     $('#NumberBl510smp').text(NumberBl+'.'+n);
     $('#ZShebObrat2Namesmp').text(ZShebObrat2Name);
     n=n+1;
 
     //==== Доставка труб и колодцев ========/// 
     var newSection = $('<tr class="tablbl3p"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl511smp"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZDostavkaTrub2Namesmp"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">рейс</td>\n+'+
          '<td style="width:10%;text-align: center;">1</td>\n+'+
          '<td style="width:15%;text-align: center;"><span id="ZDostavkaTrub2smp"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"></td>'); 
          $('#tablecalnew3p').append(newSection);
      var ZDostavkaTrub2v= (ZDostavkaTrub2 +((ZDostavkaTrub2/100)*ZDostavkaTrub2pr));    
      ZDostavkaTrub2v=Math.round(ZDostavkaTrub2v);
      var ZDostavkaTrub2vv=new Intl.NumberFormat('ru-RU').format(ZDostavkaTrub2v);
     $('#ZDostavkaTrub2smp').text(ZDostavkaTrub2vv);
     $('#NumberBl511smp').text(NumberBl+'.'+n);
     $('#ZDostavkaTrub2Namesmp').text(ZDostavkaTrub2Name);
     n=n+1;
 
     //==== Итого по 5 ПУНКТУ ========/// 
     Zblock5v=ZDostavkaTrub2v+ ZShebObrat2v+ZShebObratv+ZKolodezv+ZMontagKolv+ZDrenagTr110v+ZUkladkaDrenagTrv+ZGeo150v
     +ZUkladkaGeov+ZDorabTrv+ZLivenv;
     ZDostavkaTrub2v=Math.round(ZDostavkaTrub2v);
     var Zblock5vv=new Intl.NumberFormat('ru-RU').format(Zblock5v);
    $('#Zblock5smp').text(Zblock5vv);        

       }

       else{
        var Zblock5v=0;
        NDrenagv2=0;
        NDrenagTr110v=0;
        NShebObrat2v=0;
       }





   //==== Итого по этапу ========/// 
   var ZItog1v=Zblock5v+Zblock4v+Zblock3v+Zblock2v+Zblock1v;
   ZItog1v=ZItog1v.toFixed(2);
   var ZItog1vv=new Intl.NumberFormat('ru-RU').format(ZItog1v);
  $('#ZItog1smp').text(ZItog1vv);

   //==== накладные расходы: ========/// 
   var ZNakladv=(ZItog1v/100)*3;
   ZNakladv=ZNakladv.toFixed(2);
   var ZNakladvv=new Intl.NumberFormat('ru-RU').format(ZNakladv);
  $('#ZNakladsmp').text(ZNakladvv);

   //==== Всего по смете:: ========/// 
   var ZItogAllv=ZNakladv*1+ZItog1v*1;
   ZItogAllv=ZItogAllv.toFixed(2);
   var ZItogAllvv=new Intl.NumberFormat('ru-RU').format(ZItogAllv);
  $('#ZItogAllsmp').text(ZItogAllvv);

  //==== NAME: ========/// 
  var namev=document.getElementById('namep').value;  
 $('#namesmp').text(namev);

  //==== PHONE ========/// 
  var phonev=document.getElementById('phonep').value;  
 $('#phonesmp').text(phonev);

 




//==== Итого по Работы ========/// 
var ZItogRabotav=ZShebObrat*1.5*NDrenagv2+ZMontagKol*1.5*4+ZUkladkaDrenagTr*1.5*NDrenagv2+ZUkladkaGeo*1.5*NDrenagv2+ZPrivjzka*1.5
+ZDorabTr*1.5*NDrenagv2+ZGeoTekstU*1.5*NGeoTekstUv2+ZLiven*1.5+ZOtsup200*1.5*NOtsup200v+ZBetonFund*1.5*L28+ZOtsupSh150*1.5*L15*1.1
+ZVjzkaD12*1.5*NVjzkaD12v2+ZGidroFund*1.5*NGidroFundv2+ZfanTr*1.5+ZOpalybka*1.5*NOpalybkav2+ZGilsa*1.5*2;
ZItogRabotav=ZItogRabotav.toFixed(2);
var ZItogRabotavv=new Intl.NumberFormat('ru-RU').format(ZItogRabotav);
$('#ZItogRabotasmp').text(ZItogRabotavv);






//==== Итого по Материалы ========/// 
var ZItogMateriakv=ZShebObrat2*1.02*NShebObrat2v+ZBioTyal*1.5+ZKolodez*1.02*4+ZDrenagTr110*1.02*NDrenagTr110v+ZGeo150*1.02*2
+ZBetonM400*1.02*NBetonFundv2+ZKrepeg*1.02*NKrepegv+ZGeoTekst200*1.02*NGeoTekst200v+ZArmatura65*1.02*NVjzkaD12v2+ZMembrama*1.02*NMembramav
+ZPesokN*1.02*NPesokNv+ZKleyPolis*1.02*2+ZDubekTeplo*1.02*0+ZSheb2040*1.02*NSheb2040v+ZfanTr110*1.02*NfanTr110v+ZOtbod110*1.02*2
+Troyn110*1.02*1+Zaglyshrf110*1.02*1+ZTeplo144*1.02*4+ZPiloMat*1.02*NPiloMatv2+ZTruba50*1.02*NTruba50v+ZTrubaGof110*1.02*NTrubaGof110v;
ZItogMateriakv=ZItogMateriakv.toFixed(2);
var ZItogMateriakvv=new Intl.NumberFormat('ru-RU').format(ZItogMateriakv);
$('#ZItogMateriaksmp').text(ZItogMateriakvv);


//==== Итого по Механизмы ========/// 
var ZItogMehanizmv=ZNasos*1.5+Zekskovator*1.5+Zekskovator29*1.5+ZKotlovan*2.6*NKotlovanv;

ZItogMehanizmv=ZItogMehanizmv.toFixed(2);
var ZItogMehanizmvv=new Intl.NumberFormat('ru-RU').format(ZItogMehanizmv);
$('#ZItogMehanizmsmp').text(ZItogMehanizmvv);


   //==== Итого по Доставка ========/// 
   var ZItogDostavkav=ZbutovkaManip*2*1.5+ZDostavkaTrub2*1.5+DostavkaBioTyal*2*1.5+ZDostavkaArm*1.5+ZDostavkaPilomat*1.5
   +ZDostavkaPenopl*1.5+ZDostavkaRachod*1.5+ZDostavkaBl3Itog*1.5+ZMikser*1.5*NBetonFundv2;
   
 
   ZItogDostavkav=ZItogDostavkav.toFixed(2);
   var ZItogDostavkavv=new Intl.NumberFormat('ru-RU').format(ZItogDostavkav);
  $('#ZItogDostavkasmp').text(ZItogDostavkavv);

  };















    //============= формирование сметы ADMIN  =========//

    //===================   Выбор типа фундамента==============================//
    $('#typefund1').click(function () {
        Typefundv=1;
        typefundfunc();
    });
    $('#typefund2').click(function () {
        Typefundv=2;
        typefundfunc();
    });
    $('#typefund3').click(function () {
        Typefundv=3;
        typefundfunc();
    });


  //=================== После выбора фундамента скрываем\открываем поля ввода на вторм шаге  ===========================///
    function typefundfunc() {
       
     if (Typefundv==1){
       
       $('#land2').removeClass('closeelm');
       $('#land3').addClass('closeelm');
       $('#land4').addClass('closeelm');
       $('#land3r').addClass('closeelm');
       $('#land4r').addClass('closeelm');

       $('#line1land2').removeClass('closeelm');
        $('#line1land3').addClass('closeelm');
        $('#line1land4').addClass('closeelm');
        $('#line1land3r').addClass('closeelm');
        $('#line1land4r').addClass('closeelm');
        TypeFundamentName='Плита'; 
     }


     if (Typefundv==2){
        $('#land2').removeClass('closeelm');
        $('#land3').addClass('closeelm');
        $('#land4').addClass('closeelm');
        $('#land3r').removeClass('closeelm');
        $('#land4r').removeClass('closeelm');

        $('#line1land2').removeClass('closeelm');
        $('#line1land3').addClass('closeelm');
        $('#line1land4').addClass('closeelm');
        $('#line1land3r').removeClass('closeelm');
        $('#line1land4r').removeClass('closeelm');
        TypeFundamentName='Плита с ребрами'; 
     }

     if (Typefundv==3){
        $('#land2').addClass('closeelm');
        $('#land3').removeClass('closeelm');
        $('#land4').removeClass('closeelm');
        $('#land3r').addClass('closeelm');
        $('#land4r').addClass('closeelm');

        $('#line1land2').addClass('closeelm');
        $('#line1land3').removeClass('closeelm');
        $('#line1land4').removeClass('closeelm');
        $('#line1land3r').addClass('closeelm');
        $('#line1land4r').addClass('closeelm');      
        TypeFundamentName='Ленточный фундамент'; 
     }
    };    
    
    
//========== Необходимость утепления фундамента   =======================================//

$('#teplof').click(function () {

    var chkBox = document.getElementById('teplof');
    if (chkBox.checked){
        $('#land18').removeClass('closeelm');
        $('#land19').removeClass('closeelm');
        $('#landline18').removeClass('closeelm');
        $('#landline19').removeClass('closeelm');
    }
    else
    {
        $('#land18').addClass('closeelm');
        $('#land19').addClass('closeelm');
        $('#landline18').addClass('closeelm');
        $('#landline19').addClass('closeelm');        
    }
   
});



//========== Необходимлсть устройства городка строителей  =======================================//

$('#gorod').click(function () {

    var chkBox = document.getElementById('gorod');
    if (chkBox.checked){
        GorodPr=1;
    }
    else{
        GorodPr=0;
    }
    var block2=document.getElementsByClassName('tablbl1');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});


//========== Необходимость утепления фундамента  =======================================//

$('#teplof').click(function () {

    var chkBox = document.getElementById('teplof');
    if (chkBox.checked){
        TeploPr=1;
    }
    else{
        TeploPr=0;
    }
    var block2=document.getElementsByClassName('tablbl2');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});

//========== Необходимость устройства дренажа  =======================================//

$('#drenag').click(function () {

    var chkBox = document.getElementById('drenag');
    if (chkBox.checked){
        DrenagPr=1;
    }
    else{
        DrenagPr=0;
    }
    var block2=document.getElementsByClassName('tablbl3');
       
    while (block2.length > 0){
    block2[0].remove();
    }

});

  $('.ZenaPoz,.PrPoz').on('input', function(event) {
    var preg = $(this).val().replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
     $(this).val(preg);
   });


 //===== оставляем ввод только цифр и точку в полях ввода данных  =====//
$('#landf,#breadthf,#heightr,#heightr2,#widthr2,#widthr,#thicknesspesok,#thicknessshebnj,#kanalst,#water,#elektro').on('input', function(event) {
   var preg = $(this).val().replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
    $(this).val(preg);
  });


//===== Функция выгрузки сметы в ВОРД  =====//
$('#wordp').click(function () {   
exportHTML();    
   
   function exportHTML(){
     // alert(123)
      var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
           "xmlns:w='urn:schemas-microsoft-com:office:word' "+
           "xmlns='http://www.w3.org/TR/REC-html40'>"+
           "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
      var footer = "</body></html>";
      var sourceHTML = header+document.getElementById("zakas_smeta_lenta").innerHTML+footer;
      
      var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
      var fileDownload = document.createElement("a");
      document.body.appendChild(fileDownload);
      fileDownload.href = source;
      fileDownload.download = 'smeta.doc';
      fileDownload.click();
      document.body.removeChild(fileDownload);
   }

 });

//===== Нажали кнопку отображения сметы  =====//

 $('#test').click(function () {       
    $('#zakas_smeta_lenta').addClass('smeta_active');  
    $('.printpdf').addClass('printpdf_active');  
	 var block2=document.getElementsByClassName('tablbl1');
         while (block2.length > 0){
        block2[0].remove();
        }

        var block2=document.getElementsByClassName('tablbl2');
         while (block2.length > 0){
        block2[0].remove();
        }
        var block2=document.getElementsByClassName('tablbl3');
       
        while (block2.length > 0){
        block2[0].remove();
		}

    smeta();
  });


//===== Функция расчета параметров сметы  =====//

  function smeta() {
    var zena_smetu=0;
    //========== РАСЧЕТ ПАРАМЕТРОМ СМЕТЫ   =================//

 //====Определение текущей даты=========///
    var date = new Date();  

    var jar=date.getFullYear();
    var month= date.getMonth();
	month=month+1;	
    var dd= date.getDate();
    var ddv=dd+'.'+month+'.'+jar;
    $('#ddsm').text(ddv);


    //========== Тип фундамента ==========//
      $('#TupePlitasm').text(TypeFundamentName);

    //====Растояние до КАД=========///
    var lmksd = document.getElementById('lkad').value;
    $('#lkadsm').text(lmksd);


   //================================///
    var landlfsm = document.getElementById('landf').value;
    landlfsm = +landlfsm;

    var breadthlfsm = document.getElementById('breadthf').value;
    breadthlfsm = +breadthlfsm;

    //====Площадь фундамента:=========///
    var Sfundv=landlfsm*breadthlfsm;
    Sfundv=Sfundv.toFixed(2);
    $('#Sfundvsm').text(Sfundv);

     //====Толщина плиты=========///
     var thicknessv = document.getElementById('thickness').value;

     if (Typefundv==3){
        thicknessv=0;
     }
     $('#thicknesssm').text(thicknessv);

       //====Периметр фундамента:=========///
    var Pfundv=landlfsm*2+breadthlfsm*2;
    Pfundv=Pfundv.toFixed(2);
    $('#Pfundvsm').text(Pfundv);

     //====Длина ленты/ребер:=========///
     var hrosv
     hrosv=document.getElementById('heightr').value;
     if (Typefundv==2){
        hrosv=document.getElementById('heightr2').value;

     }

     if(hrosv>0)
     {
        var Lrebra=Pfundv*1+landlfsm*1+breadthlfsm*1;
        Lrebra=Lrebra.toFixed(2);
     }
     else
     {
        Lrebra=0;
     }     
     $('#Lrebrasm').text(Lrebra);

     //====Толщина песчаной подушки=========///
     var thicknesspesokv = document.getElementById('thicknesspesok').value;
     $('#thicknesspesokvsm').text(thicknesspesokv);

     //====Толщина щебеночной подушки=========///
     var thicknessshebnjv = document.getElementById('thicknessshebnj').value;
     $('#thicknessshebnjsm').text(thicknessshebnjv);


     //====Глубина котлована=========///
     var thicknesspodbetonv = document.getElementById('thicknesspodbeton').value;
     var thicknessgorytepv = document.getElementById('thicknessgorytep').value;

     var hkotlv=thicknesspesokv*1+thicknessshebnjv*1+thicknesspodbetonv*1+thicknessgorytepv*1;

     hkotlv=hkotlv.toFixed(2);
     $('#hkotlsm').text(hkotlv);

     //====Утепление под фундаментом=========///
     var thicknessverytepv = document.getElementById('thicknessverytep').value;
     thicknessverytepv=thicknessverytepv*1;
     thicknessverytepv=thicknessverytepv.toFixed(2);
     $('#thicknessverytepsm').text(thicknessverytepv);

      //====Канализацационный стояк под фундаментом=========///
      var kanalv = document.getElementById('kanalst').value;     
      $('#kanalsm').text(kanalv);

       //====Ввод воды , электричества под фундаментом=========///
       var waterv = document.getElementById('water').value;   
       var elektrov = document.getElementById('elektro').value;    
       var vaterelv=waterv*1+elektrov*1;      

       $('#vaterelsm').text(vaterelv);

     if (GorodPr==1){
       //====Первый блок Сметы=========///        

        var newSection = $('<tr class="tablbl1"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;font-weight: bold;">1</td>\n+'+
            '<td  style="width:30%;text-align: left;font-weight: bold;">Устройство городка строителей</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">к-т</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">1</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock1smIsx"></span></td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock1smPr"></span></td>\n+'+
            '<td style="width:20%;text-align: center;font-weight: bold;"><span id="Zblock1sm"></span></td>');
        $('#tablecalnew1').append(newSection);


        //====Бытовка металлическая=========///  
        var newSection = $('<tr class="tablbl1"></tr>');
        newSection.html(
             '<td style="width:10%;text-align: center;">1.1</td>\n+'+
             '<td  style="width:30%;text-align: left;"><span id="ZbutovkaNamesm"></span> </td>\n+'+
             '<td style="width:10%;text-align: center;">мес</td>\n+'+
             '<td style="width:10%;text-align: center;">1</td>\n+'+
             '<td style="width:10%;text-align: center;"> <span id="ZbutovkasmIsx"></span>  </td>\n+'+
             '<td style="width:10%;text-align: center;"> <span id="ZbutovkasmPr"></span>  </td>\n+'+
             '<td style="width:20%;text-align: center;"> <span id="Zbutovkasm"></span>  </td>');
             $('#tablecalnew1').append(newSection);        

        var Zbutovkav=Zbutovka +((Zbutovka/100)*Zbutovkapr); 
        var Zbutovkavv=new Intl.NumberFormat('ru-RU').format(Zbutovkav); 
        $('#Zbutovkasm').text(Zbutovkavv);
        $('#ZbutovkaNamesm').text(ZbutovkaName);
        $('#ZbutovkasmIsx').text(Zbutovka);
        $('#ZbutovkasmPr').text(Zbutovkapr);
        var ZbutovkaSebest=Zbutovka*1;

        //====доставка  бытовки манипулятором=========///     
        var newSection = $('<tr class="tablbl1"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;">1.2</td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZbutovkaManipNamesm"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">рейс</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZbutovkaManipsmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZbutovkaManipsmPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;"> <span id="ZbutovkaManipsm"></span>  </td>');
            $('#tablecalnew1').append(newSection); 

         var ZbutovkaManipv=2*(ZbutovkaManip +((ZbutovkaManip/100)*ZbutovkaManippr)); 
         var ZbutovkaManipvv=new Intl.NumberFormat('ru-RU').format(ZbutovkaManipv); 
         $('#ZbutovkaManipsm').text(ZbutovkaManipvv);
         $('#ZbutovkaManipNamesm').text(ZbutovkaManipName);
         $('#ZbutovkaManipsmIsx').text(ZbutovkaManip);
         $('#ZbutovkaManipsmPr').text(ZbutovkaManippr);
         var ZbutovkaManipSebest=ZbutovkaManip*2;

         
         //====аренда био туалета=========///     
         var newSection = $('<tr class="tablbl1"></tr>');
         newSection.html(
            '<td style="width:10%;text-align: center;">1.3</td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="BioTyalNamesm"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">мес</td>\n+'+
            '<td style="width:10%;text-align: center;">1</td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="BioTyalsmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="BioTyalsmPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;"> <span id="BioTyalsm"></span>  </td>');
            $('#tablecalnew1').append(newSection); 

          var ZBioTyalv=ZBioTyal +((ZBioTyal/100)*ZBioTyalpr); 
          var ZBioTyalvv=new Intl.NumberFormat('ru-RU').format(ZBioTyalv); 
           $('#BioTyalsm').text(ZBioTyalvv);
           $('#BioTyalNamesm').text(BioTyalName);
           $('#BioTyalsmIsx').text(ZBioTyal);
           $('#BioTyalsmPr').text(ZBioTyalpr);
           var ZBioTyalSebest=ZBioTyal*1;


          //====доставка и вывоз  биотуалета=========/// 
          var newSection = $('<tr class="tablbl1"></tr>');
         newSection.html(
            '<td style="width:10%;text-align: center;">1.4</td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="DostavkaBioTyalNamesm"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">рейс</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="DostavkaBioTyalsmIsx"></span>  </td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="DostavkaBioTyalsmPr"></span>  </td>\n+'+
            '<td style="width:30%;text-align: center;"> <span id="DostavkaBioTyalsm"></span>  </td>');
            $('#tablecalnew1').append(newSection);   


      var DostavkaBioTyalv=2*(DostavkaBioTyal +((DostavkaBioTyal/100)*DostavkaBioTyalpr)); 
      var DostavkaBioTyalvv=new Intl.NumberFormat('ru-RU').format(DostavkaBioTyalv); 
      $('#DostavkaBioTyalsm').text(DostavkaBioTyalvv);
      $('#DostavkaBioTyalNamesm').text(DostavkaBioTyalName);
      $('#DostavkaBioTyalsmIsx').text(DostavkaBioTyal);
      $('#DostavkaBioTyalsmPr').text(DostavkaBioTyalpr);
      var DostavkaBioTyalSebest=DostavkaBioTyal*2;


      //====Устройство городка строителей=========///           
      var Zblock1v= DostavkaBioTyalv+ZBioTyalv+ZbutovkaManipv+Zbutovkav; 
      var Zblock1vv=new Intl.NumberFormat('ru-RU').format(Zblock1v); 
      $('#Zblock1sm').text(Zblock1vv);
      
      var Zblock1Sebest= DostavkaBioTyalSebest+ZBioTyalSebest+ZbutovkaManipSebest+ZbutovkaSebest;
      var Zblock1vSebestv=new Intl.NumberFormat('ru-RU').format(Zblock1Sebest);
      $('#Zblock1smIsx').text(Zblock1vSebestv); 

      var Zblock1smPr=(Zblock1v/Zblock1Sebest)*100-100;
      Zblock1smPr=Zblock1smPr.toFixed(2);
      $('#Zblock1smPr').text(Zblock1smPr); 

      NumberBl=2;

     }

     else  //Если городок не нужен, удаляем все  строки по городку, стоимость по перовму блоку =0
     {
        var block2=document.getElementsByClassName('tablbl1');
       
       while (block2.length > 0){
       block2[0].remove();
       }

        Zblock1v=0;
        NumberBl=1;
        Zblock1vSebest=0;
        Zblock1Sebest=0;
     }



      //====Второй блок Сметы=========///   
         
          
          //====Подготовка котлована и основания=========///           
          var SKotlovanv= (landlfsm+2)*(breadthlfsm+2); 
          SKotlovanv=SKotlovanv.toFixed(2);
          $('#SKotlovansm').text(SKotlovanv);
          $('#NumberBl2sm').text(NumberBl);
        


          //====Привязка пятна застройки=========///           
         var ZPrivjzkav=ZPrivjzka +((ZPrivjzka/100)*ZPrivjzkapr); 
         var ZPrivjzkavv=new Intl.NumberFormat('ru-RU').format(ZPrivjzkav); 
         $('#Privjzkasm').text(ZPrivjzkavv);
         var ZPrivjzkaaSebest=ZPrivjzka;
         var ZPrivjzkaasvv=new Intl.NumberFormat('ru-RU').format(ZPrivjzka); 
         $('#Privjzkasmisx').text(ZPrivjzkaasvv);         
         $('#Privjzkasmpr').text(ZPrivjzkapr);
         $('#NumberBl21sm').text(NumberBl+'.'+'1');
         $('#PrivjzkaNamesm').text(PrivjzkaName);




         //====земляные работы по устройству котлована спецтехникой=========///           
         var NKotlovanv=SKotlovanv*hkotlv; 
         NKotlovanv=NKotlovanv.toFixed(2);
         $('#NKotlovansm').text(NKotlovanv);
         var ZKotlovanv= NKotlovanv*(ZKotlovan +((ZKotlovan/100)*ZKotlovanpr)); 
         var ZKotlovanvv=new Intl.NumberFormat('ru-RU').format(ZKotlovanv); 
         $('#ZKotlovansm').text(ZKotlovanvv);      
         var ZKotlovanSebest =NKotlovanv*ZKotlovan;
        //  var ZKotlovansmisxvv=new Intl.NumberFormat('ru-RU').format(ZKotlovansmisxv); 
        //  $('#ZKotlovansmisx').text(ZKotlovansmisxvv);
        $('#ZKotlovansmisx').text(ZKotlovan);
         $('#ZKotlovansmpr').text(ZKotlovanpr);
         $('#NumberBl22sm').text(NumberBl+'.'+'2');
         $('#ZKotlovanNamesm').text(ZKotlovanName);




         //====Укладка геотекстиля========///           
         var NGeoTekstUv=SKotlovanv*1.1; 
         var NGeoTekstUv2=SKotlovanv*1.1;
         NGeoTekstUv=Math.round(NGeoTekstUv);
         $('#NGeoTekstUsm').text(NGeoTekstUv);         

         var ZGeoTekstUv= NGeoTekstUv2*(ZGeoTekstU +((ZGeoTekstU/100)*ZGeoTekstUpr)); 
         ZGeoTekstUv=Math.round(ZGeoTekstUv);
         var ZGeoTekstUvv=new Intl.NumberFormat('ru-RU').format(ZGeoTekstUv); 
         $('#ZGeoTekstUsm').text(ZGeoTekstUvv);
         $('#NumberBl23sm').text(NumberBl+'.'+'3');
         $('#ZGeoTekstUNamesm').text(ZGeoTekstUName);

          var ZGeoTekstUSebest=NGeoTekstUv2*ZGeoTekstU;
        //  ZGeoTekstUsmisxv=Math.round(ZGeoTekstUsmisxv);
        //  var ZGeoTekstUsmisxvv=new Intl.NumberFormat('ru-RU').format(ZGeoTekstUsmisxv); 
        //  $('#ZGeoTekstUsmisx').text(ZGeoTekstUsmisxvv);

         $('#ZGeoTekstUsmisx').text(ZGeoTekstU);
         $('#ZGeoTekstUsmpr').text(ZGeoTekstUpr);


        //====геотекстиль 200 (50 м2)========///           
        var NGeoTekst200v=(NGeoTekstUv*1.3)/50;
        NGeoTekst200v=Math.ceil(NGeoTekst200v) ;
        $('#NGeoTekst200sm').text(NGeoTekst200v);         

        var ZGeoTekst200v= NGeoTekst200v*(ZGeoTekst200 +((ZGeoTekst200/100)*ZGeoTekst200pr)); 
         ZGeoTekst200v=Math.round(ZGeoTekst200v);
         var ZGeoTekst200vv=new Intl.NumberFormat('ru-RU').format(ZGeoTekst200v);
         var ZGeoTekst200vSebest=NGeoTekst200v*ZGeoTekst200;
        $('#ZGeoTekst200sm').text(ZGeoTekst200vv); 
        $('#NumberBl24sm').text(NumberBl+'.'+'4');
        $('#ZGeoTekst200Namesm').text(ZGeoTekst200Name);
        var ZGeoTekst200vv=new Intl.NumberFormat('ru-RU').format(ZGeoTekst200);
        $('#ZGeoTekst200smisx').text(ZGeoTekst200vv); 
        $('#ZGeoTekst200smpr').text(ZGeoTekst200pr); 


        //====Отсыпка основания фундамента песком========/// 
        var I15= (landlfsm+1.2)*(breadthlfsm+1.2); 
        var L14=I15*thicknesspesokv;       
        
        var NOtsup200v=L14*1.3;
        var NOtsup200v2=Math.round(NOtsup200v) ;
        $('#NOtsup200sm').text(NOtsup200v2);         

        var ZOtsup200v= NOtsup200v*(ZOtsup200 +((ZOtsup200/100)*ZOtsup200pr)); 
        ZOtsup200v=Math.round(ZOtsup200v);
        var ZOtsup200vv=new Intl.NumberFormat('ru-RU').format(ZOtsup200v);
        var ZOtsup200Sebest=NOtsup200v*ZOtsup200;
        $('#ZOtsup200sm').text(ZOtsup200vv); 
        $('#NumberBl25sm').text(NumberBl+'.'+'5');
        $('#ZOtsup200Namesm').text(ZOtsup200Name);       
        $('#ZOtsup200smisx').text(ZOtsup200); 
        $('#ZOtsup200smpr').text(ZOtsup200pr); 



        //====Экскаватор/погрузчик========/// 
        var Zekskovatorv= (Zekskovator +((Zekskovator/100)*ZOtsup200pr)); 
        Zekskovatorv=Math.round(Zekskovatorv);
        var Zekskovatorvv=new Intl.NumberFormat('ru-RU').format(Zekskovatorv);
        $('#Zekskovatorsm').text(Zekskovatorvv); 
        $('#NumberBl26sm').text(NumberBl+'.'+'6');
        $('#ZekskovatorNamesm').text(ZekskovatorName); 
        var ZekskovatorSebest=Zekskovator;
        var Zekskovatorisxv=new Intl.NumberFormat('ru-RU').format(Zekskovator);
        $('#Zekskovatorsmisx').text(Zekskovatorisxv);
        $('#Zekskovatorsmpr').text(Zekskovatorpr);


        //====песок намывной с доставкой========/// 
        var NPesokNv=NOtsup200v/10;
        NPesokNv=(Math.ceil(NPesokNv))*10 ;
        $('#NPesokNsm').text(NPesokNv); 

        var ZPesokNv= (ZPesokN +((ZPesokN/100)*ZPesokNpr)); 
        ZPesokNv=ZPesokNv*NPesokNv;
        ZPesokNv=Math.round(ZPesokNv);
        var ZPesokNvv=new Intl.NumberFormat('ru-RU').format(ZPesokNv);
        $('#ZPesokNsm').text(ZPesokNvv); 
        $('#NumberBl27sm').text(NumberBl+'.'+'7');
        $('#ZPesokNNamesm').text(ZPesokNName); 
        $('#ZPesokNsmisx').text(ZPesokN); 
        $('#ZPesokNsmpr').text(ZPesokNpr); 
        var ZPesokNSebest=ZPesokN*NPesokNv;





        //====Отсыпка основания фундамента щебнем спецтехникой и уплотнением, 150мм.========/// 
        var I14= (landlfsm+1.6)*(breadthlfsm+1.6); 
        var L15=I14*thicknessshebnjv;          
        var NOtsupSh150v=L15*1.1;
        var NOtsupSh150v2=Math.round(NOtsupSh150v) ;
        $('#NOtsupSh150sm').text(NOtsupSh150v2); 

        var ZOtsupSh150v= (ZOtsupSh150 +((ZOtsupSh150/100)*ZOtsupSh150pr)); 
        ZOtsupSh150v=ZOtsupSh150v*NOtsupSh150v;
        ZOtsupSh150v=Math.round(ZOtsupSh150v);
        var ZOtsupSh150vv=new Intl.NumberFormat('ru-RU').format(ZOtsupSh150v);
        $('#ZOtsupSh150sm').text(ZOtsupSh150vv); 
        $('#NumberBl28sm').text(NumberBl+'.'+'8');
        $('#ZOtsupSh150Namesm').text(ZOtsupSh150Name); 
        $('#ZOtsupSh150smisx').text(ZOtsupSh150); 
        $('#ZOtsupSh150smpr').text(ZOtsupSh150pr); 
        var ZOtsupSh150Sebest=ZOtsupSh150*NOtsupSh150v;




        
        //====Экскаватор/погрузчик29.========///         
        var Zekskovator29v= (Zekskovator29 +((Zekskovator29/100)*Zekskovator29pr)); 
        Zekskovator29v=Math.round(Zekskovator29v);
        var Zekskovator29vv=new Intl.NumberFormat('ru-RU').format(Zekskovator29v);
        $('#Zekskovator29sm').text(Zekskovator29vv); 
        $('#NumberBl29sm').text(NumberBl+'.'+'9');
        $('#Zekskovator29Namesm').text(Zekskovator29Name); 
        $('#Zekskovator29smisx').text(Zekskovator29); 
        $('#Zekskovator29smpr').text(Zekskovator29pr); 
        var Zekskovator29Sebest=Zekskovator29;


        //====щебень гранитный 20-40 с доставкой.========/// 
        var NSheb2040v=NOtsupSh150v/10;
        NSheb2040v=(Math.ceil(NSheb2040v))*10 ;
        $('#NSheb2040sm').text(NSheb2040v); 

        var ZSheb2040v= (ZSheb2040 +((ZSheb2040/100)*ZSheb2040pr)); 
        ZSheb2040v=ZSheb2040v*NSheb2040v;
        ZSheb2040v=Math.round(ZSheb2040v);
        var ZSheb2040vv=new Intl.NumberFormat('ru-RU').format(ZSheb2040v);
        $('#ZSheb2040sm').text(ZSheb2040vv); 
        $('#NumberBl210sm').text(NumberBl+'.'+'10');
        $('#ZSheb2040Namesm').text(ZSheb2040Name); 
        $('#ZSheb2040smisx').text(ZSheb2040); 
         $('#ZSheb2040smpr').text(ZSheb2040pr); 
         var Sheb2040Sebest=ZSheb2040*NSheb2040v;




         //====Итоговая цена по 2 Блоку.========/// 
         var Zblock2v=ZSheb2040v+Zekskovator29v+ZOtsupSh150v+ZPesokNv+Zekskovatorv+ZGeoTekst200v+ZGeoTekstUv+ZKotlovanv+ZPrivjzkav+ZOtsup200v;
        // NSheb2040v=(Math.ceil(NSheb2040v))*10 ;
        var Zblock2vv=new Intl.NumberFormat('ru-RU').format(Zblock2v);
         $('#Zblock2sm').text(Zblock2vv); 

         var Zblock2Sebest=Zekskovator29Sebest+Sheb2040Sebest+ZOtsupSh150Sebest+ZPesokNSebest+ZekskovatorSebest+ZOtsup200Sebest+ZGeoTekst200vSebest
         +ZGeoTekstUSebest+ZPrivjzkaaSebest+ZKotlovanSebest;
         
         var Zblock2Sebestv=Zblock2Sebest.toFixed(2);
         Zblock2vSebestv=new Intl.NumberFormat('ru-RU').format(Zblock2Sebestv);        
         $('#Zblock2smSebest').text(Zblock2vSebestv); 
         
         var Zblock2smSebestPrv=(Zblock2v/Zblock2Sebest)*100 -100;
         Zblock2smSebestPrv=Zblock2smSebestPrv.toFixed(2)
         $('#Zblock2smSebestPr').text(Zblock2smSebestPrv);
        
        
         NumberBl= NumberBl+1;


         
         
     ///==================БЛОК ТРЕТИЙ===============//
     //====Количество  по 3 Блоку.========/// 
     var Nblock3v= waterv*1+elektrov*1+kanalv*1; 
     $('#Nblock3sm').text(Nblock3v); 
     $('#NumberBl3sm').text(NumberBl);


//====Монтаж фановой трубы под фундаментом, с выходом за границу фундамента на 1м. (без подключения) й.========/// 
    var NfanTrv=kanalv*1; 
    $('#NfanTrsm').text(NfanTrv); 

    var ZfanTrv= (ZfanTr +((ZfanTr/100)*ZfanTrpr)); 
    ZfanTrv=ZfanTrv*NfanTrv
    //ZSheb2040v=Math.round(ZSheb2040v);
    var ZfanTrvv=new Intl.NumberFormat('ru-RU').format(ZfanTrv);
    $('#ZfanTrsm').text(ZfanTrvv); 
    $('#NumberBl31sm').text(NumberBl+'.'+'1');
    $('#ZfanTrNamesm').text(ZfanTrName); 
    $('#ZfanTrsmIsx').text(ZfanTr); 
    $('#ZfanTrsmPr').text(ZfanTrpr); 
    var ZfanTrSebest=ZfanTr*NfanTrv;




    //====труба фановая 110мм наружная 1000мм Ostendorf.========/// 
    var NfanTr110v=kanalv*6; 
    $('#NfanTr110sm').text(NfanTr110v); 

    var ZfanTr110v= (ZfanTr110 +((ZfanTr110/100)*ZfanTr110pr));
    ZfanTr110v=NfanTr110v*ZfanTr110v
    ZfanTr110v=Math.round(ZfanTr110v);
    var ZfanTr110vv=new Intl.NumberFormat('ru-RU').format(ZfanTr110v);
    $('#ZfanTr110sm').text(ZfanTr110vv); 
    $('#NumberBl32sm').text(NumberBl+'.'+'2');
    $('#ZfanTr110Namesm').text(ZfanTr110Name); 
    $('#ZfanTr110smIsx').text(ZfanTr110);
    $('#ZfanTr110smPr').text(ZfanTr110pr);
    var ZfanTr110Sebest=ZfanTr110*NfanTr110v;


    //====отвод 45 гр. 110мм , наружный Ostendorf========/// 
    var NOtbod110v=kanalv*2; 
    $('#NOtbod110sm').text(NOtbod110v); 

    var ZOtbod110v= (ZOtbod110 +((ZOtbod110/100)*ZOtbod110pr));
    ZOtbod110v=NOtbod110v*ZOtbod110v
    ZOtbod110v=Math.round(ZOtbod110v);
    var ZOtbod110vv=new Intl.NumberFormat('ru-RU').format(ZOtbod110v);
    $('#ZOtbod110sm').text(ZOtbod110vv); 
    $('#NumberBl33sm').text(NumberBl+'.'+'3');
    $('#ZOtbod110Namesm').text(ZOtbod110Name); 
    $('#ZOtbod110smIsx').text(ZOtbod110); 
    $('#ZOtbod110smPr').text(ZOtbod110pr); 
    var ZOtbod110Sebest= ZOtbod110*NOtbod110v;

    //====тройник 110мм наружный========/// 
    var Troyn110v= (Troyn110 +((Troyn110/100)*Troyn110pr));      
    Troyn110v=Math.round(Troyn110v);
    var Troyn110vv=new Intl.NumberFormat('ru-RU').format(Troyn110v);
    $('#Troyn110sm').text(Troyn110vv); 
    $('#NumberBl34sm').text(NumberBl+'.'+'4');
    $('#Troyn110Namesm').text(Troyn110Name); 
    $('#ZTroyn110smIsx').text(Troyn110); 
    $('#ZTroyn110smPr').text(Troyn110pr);
    var ZTroyn110Sebest=Troyn110;

    //====заглушка фановой трубы 110мм.========/// 
    var Naglyshrf110v=kanalv*1; 
    $('#Naglyshrf110sm').text(Naglyshrf110v); 

    var Zaglyshrf110v= (Zaglyshrf110 +((Zaglyshrf110/100)*Zaglyshrf110pr));
    Zaglyshrf110v=Naglyshrf110v*Zaglyshrf110v;
    Zaglyshrf110v=Math.round(Zaglyshrf110v);
    var Zaglyshrf110vv=new Intl.NumberFormat('ru-RU').format(Zaglyshrf110v);
    $('#Zaglyshrf110sm').text(Zaglyshrf110vv); 
    $('#NumberBl35sm').text(NumberBl+'.'+'5');
    $('#Zaglyshrf110Namesm').text(Zaglyshrf110Name); 
    $('#Zaglyshrf110smIsx').text(Zaglyshrf110);
    $('#Zaglyshrf110smPr').text(Zaglyshrf110pr);  
    var Zaglyshrf110Sebest=Zaglyshrf110*Naglyshrf110v;

    //====теплоизоляция на трубу 114*13*2000.========/// 
    var NTeplo144v=(NfanTr110v/2)+1; 
    $('#NTeplo144sm').text(NTeplo144v); 

    var ZTeplo144v= (ZTeplo144 +((ZTeplo144/100)*ZTeplo144pr));
    ZTeplo144v=NTeplo144v*ZTeplo144v;
    ZTeplo144v=Math.round(ZTeplo144v);
    var ZTeplo144vv=new Intl.NumberFormat('ru-RU').format(ZTeplo144v);
    $('#ZTeplo144sm').text(ZTeplo144vv); 
    $('#NumberBl36sm').text(NumberBl+'.'+'6');
    $('#ZTeplo144Namesm').text(ZTeplo144Name); 
    $('#ZTeplo144smIsx').text(ZTeplo144); 
    $('#ZTeplo144smPr').text(ZTeplo144pr); 
    var ZTeplo144Sebest=ZTeplo144*NTeplo144v;

    //====Монтаж гильз для  коммуникаций , под фундаментом .========/// 
    var NGilsav=waterv*1+elektrov*1; 
    $('#NGilsasm').text(NGilsav); 

    var ZGilsav= (ZGilsa +((ZGilsa/100)*ZGilsapr));
    ZGilsav=NGilsav*ZGilsav;
    ZGilsav=Math.round(ZGilsav);
    var ZGilsavv=new Intl.NumberFormat('ru-RU').format(ZGilsav);
    $('#ZGilsasm').text(ZGilsavv);
    $('#NumberBl37sm').text(NumberBl+'.'+'7');
    $('#ZGilsaNamesm').text(ZGilsaName); 
    $('#ZGilsasmIsx').text(ZGilsa);
    $('#ZGilsasmPr').text(ZGilsapr);
    var ZGilsaSwbest=ZGilsa*NGilsav;


     //====труба ПНД50мм ========/// 
     var NTruba50v=(NGilsav*10)/2; 
     $('#NTruba50sm').text(NTruba50v); 

     var ZTruba50v= (ZTruba50 +((ZTruba50/100)*ZTruba50pr));
     ZTruba50v=NTruba50v*ZTruba50v;
     ZTruba50v=Math.round(ZTruba50v);
     var ZTruba50vv=new Intl.NumberFormat('ru-RU').format(ZTruba50v);
     $('#ZTruba50sm').text(ZTruba50vv); 
     $('#NumberBl38sm').text(NumberBl+'.'+'8');
     $('#ZTruba50Namesm').text(ZTruba50Name); 
     $('#ZTruba50smIsx').text(ZTruba50); 
     $('#ZTruba50smPr').text(ZTruba50pr); 
     var ZTruba50Sebest=ZTruba50*NTruba50v;


     //====труба гофрированная 110 мм. ========/// 
     var NTrubaGof110v=(NGilsav*8)/2; 
     $('#NTrubaGof110sm').text(NTrubaGof110v); 

     var ZTrubaGof110v= (ZTrubaGof110 +((ZTrubaGof110/100)*ZTrubaGof110pr));
     ZTrubaGof110v=NTrubaGof110v*ZTrubaGof110v;
     ZTrubaGof110v=Math.round(ZTrubaGof110v);
     var ZTrubaGof110vv=new Intl.NumberFormat('ru-RU').format(ZTrubaGof110v);
     $('#ZTrubaGof110sm').text(ZTrubaGof110vv); 
     $('#NumberBl39sm').text(NumberBl+'.'+'9');
     $('#ZTrubaGof110Namesm').text(ZTrubaGof110Name); 
     $('#ZTrubaGof110smIsx').text(ZTrubaGof110); 
     $('#ZTrubaGof110smPr').text(ZTrubaGof110pr); 
     var ZTrubaGof110Sebest=ZTrubaGof110*NTrubaGof110v;

     
     //====Доставка материалов. ========///         
     var ZDostavkaBl3v= (ZDostavkaBl3 +((ZDostavkaBl3/100)*ZDostavkaBl3pr));
     ZDostavkaBl3v=Math.round(ZDostavkaBl3v);
     var ZDostavkaBl3vv=new Intl.NumberFormat('ru-RU').format(ZDostavkaBl3v);
     $('#ZDostavkaBl3sm').text(ZDostavkaBl3vv);
     $('#NumberBl310sm').text(NumberBl+'.'+'10');
     $('#ZDostavkaBl3Namesm').text(ZDostavkaBl3Name);
     $('#ZDostavkaBl3smIsx').text(ZDostavkaBl3);
     $('#ZDostavkaBl3smPr').text(ZDostavkaBl3pr); 
     var ZDostavkaBl3Sebest=ZDostavkaBl3;


     //====Итоговая цена по 3 Блоку.========/// 
     var Zblock3v=ZDostavkaBl3v+ZTrubaGof110v+ZTruba50v+ZGilsav+ZTeplo144v+Zaglyshrf110v+Troyn110v+ZOtbod110v+ZfanTr110v+ZfanTrv;
     var Zblock3vv=new Intl.NumberFormat('ru-RU').format(Zblock3v);
     $('#Zblock3sm').text(Zblock3vv); 

     var Zblock3Sebestv=ZDostavkaBl3Sebest+ZTrubaGof110Sebest+ZTruba50Sebest+ZGilsaSwbest+ZTeplo144Sebest+Zaglyshrf110Sebest
     +ZTroyn110Sebest+ZOtbod110Sebest+ZfanTr110Sebest+ZfanTrSebest;
      
     var Zblock3Sebestvv=new Intl.NumberFormat('ru-RU').format(Zblock3Sebestv);
     $('#Zblock3smSebest').text(Zblock3Sebestvv);

     var Zblock3Pr=(Zblock3v/Zblock3Sebestv)*100-100;
     Zblock3Pr=Zblock3Pr.toFixed(2);

     $('#Zblock3smSebestPr').text(Zblock3Pr);

     NumberBl= NumberBl+1;




     
     
     ///==================БЛОК 4===============//
     //====Количество  по 4 Блоку.========/// 
     var k=1; //Номер позиции в блоке

     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NumberBl4sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;font-weight: bold;">Устройство фундамента на готовом основании</td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Nblock4sm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock4smIsx"></span></td>\n+'+
         '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock4smPr"></span></td>\n+'+
         '<td style="width:20%;text-align: center;font-weight: bold;"><span id="Zblock4sm"></span></td>');
     $('#tablecalnew2').append(newSection);


     var Nblock4v= Sfundv; 
     $('#Nblock4sm').text(Nblock4v); 
     $('#NumberBl4sm').text(NumberBl);


     //====Устройство опалубки для  фундамента. ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl41sm"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZOpalybkaNamesm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NOpalybkasm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="ZOpalybkasmIsx"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="ZOpalybkasmPr"></span></td>\n+'+
         '<td style="width:20%;text-align: center;"><span id="ZOpalybkasm"></span></td>');
     $('#tablecalnew2').append(newSection);

     var C26=document.getElementById('thicknessgorytep').value; 
     C26=C26*1; 
     var I21=Pfundv*(thicknessv*1+C26*1); 
     var C19=document.getElementById('heightr').value;
     if (Typefundv==2){
        C19=document.getElementById('heightr2').value;

     }
     C19=C19*1;
     let F19=0;
     if(C19>0){
        F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
       }
     else
     {
        F19=0;
     }

     let I23=0;
     if(C19>0){
        I23=F19*C19*2;
       
     }
     else{
        I23=0; 
     }         
     var NOpalybkav=I21+I23;
     var NOpalybkav2=NOpalybkav;
     NOpalybkav=NOpalybkav.toFixed(2);
     $('#NOpalybkasm').text(NOpalybkav); 

     var ZOpalybkav= (ZOpalybka +((ZOpalybka/100)*ZOpalybkapr));
     ZOpalybkav=NOpalybkav2*ZOpalybkav;
     ZOpalybkav=Math.round(ZOpalybkav);
     var ZOpalybkavv=new Intl.NumberFormat('ru-RU').format(ZOpalybkav);
     $('#ZOpalybkasm').text(ZOpalybkavv); 
     $('#NumberBl41sm').text(NumberBl+'.'+k);
     $('#ZOpalybkaNamesm').text(ZOpalybkaName); 
     $('#ZOpalybkasmIsx').text(ZOpalybka); 
     $('#ZOpalybkasmPr').text(ZOpalybkapr); 
     var ZOpalybkaSebest=ZOpalybka*NOpalybkav2;

     
     k=k+1;



     //====Пиломатериалы вспомогательные ========/// 
 var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl42sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZPiloMatNamesm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;">м3</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NPiloMatsm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="ZPiloMatsmIsx"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="ZPiloMatsmPr"></span></td>\n+'+   
         '<td style="width:20%;text-align: center;"><span id="ZPiloMatsm"></span></td>');
     $('#tablecalnew2').append(newSection);


     var NPiloMatv=(NOpalybkav2/10)*1.1;    
     var NPiloMatv2=NPiloMatv;
     NPiloMatv=NPiloMatv.toFixed(2);
     $('#NPiloMatsm').text(NPiloMatv); 

     var ZPiloMatv= (ZPiloMat +((ZPiloMat/100)*ZPiloMatpr));
     ZPiloMatv=NPiloMatv2*ZPiloMatv;
     ZPiloMatv=Math.round(ZPiloMatv);
     var ZPiloMatvv=new Intl.NumberFormat('ru-RU').format(ZPiloMatv);
     $('#ZPiloMatsm').text(ZPiloMatvv);
     $('#NumberBl42sm').text(NumberBl+'.'+k);
     $('#ZPiloMatNamesm').text(ZPiloMatName); 
     $('#ZPiloMatsmIsx').text(ZPiloMat);
     $('#ZPiloMatsmPr').text(ZPiloMatpr);
     var ZPiloMatSebest=ZPiloMat*NPiloMatv2;

     k=k+1;


     //====Утепление под плитой ========/// 
     var C26=document.getElementById('thicknessgorytep').value; 
    var NYtepPlv=0;
    var ZYtepPlsmSebest=0
    
      if (TeploPr==1){
        var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl43sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZYtepPlNamesm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;">м2</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NYtepPlsm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="ZYtepPlsmIsx"></span></td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="ZYtepPlsmPr"></span></td>\n+'+
            '<td style="width:20%;text-align: center;"><span id="ZYtepPlsm"></span></td>');
        $('#tablecalnew2').append(newSection);



        var C26=document.getElementById('thicknessgorytep').value; 
     C26=C26*1;
     
     if (C26>0){
        NYtepPlv=Sfundv;
     }
     else
     { NYtepPlv=0;}

     
     $('#NYtepPlsm').text(NYtepPlv); 
     var ZYtepPlv= (ZYtepPl +((ZYtepPl/100)*ZYtepPlpr));
     ZYtepPlv=NYtepPlv*ZYtepPlv;
     ZYtepPlv=Math.round(ZYtepPlv);
     var ZYtepPlvv=new Intl.NumberFormat('ru-RU').format(ZYtepPlv);
     $('#ZYtepPlsm').text(ZYtepPlvv);
     $('#NumberBl43sm').text(NumberBl+'.'+k);
     $('#ZYtepPlNamesm').text(ZYtepPlName);
     $('#ZYtepPlsmIsx').text(ZYtepPl);
     $('#ZYtepPlsmPr').text(ZYtepPlpr);
     ZYtepPlsmSebest=ZYtepPl+NYtepPlv;

     k=k+1;
      }
      else{
        ZYtepPlv=0;
        ZYtepPlsmSebest=0;
      }
     

     


     //====Экструдированный пенополистирол Технониколь ========/// 
     var C26=document.getElementById('thicknessgorytep').value;
     var ZGenoPolistirolSebest=0;
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl44sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZGenoPolistirolNamesm"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NGenoPolistirolsm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZGenoPolistirolsmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZGenoPolistirolsmPr"></span>  </td>\n+'+      
            '<td style="width:20%;text-align: center;"> <span id="ZGenoPolistirolsm"></span>  </td>');
            $('#tablecalnew2').append(newSection);


     var NGenoPolistirolv=0;
     if (C26>0.05){
        NGenoPolistirolv=(NYtepPlv/0.684)*2.1; 
     }
     else{
        NGenoPolistirolv=(NYtepPlv/0.684)*1.05;
     }

    
     NGenoPolistirolv=Math.round(NGenoPolistirolv);     
     $('#NGenoPolistirolsm').text(NGenoPolistirolv); 

     var ZGenoPolistirolv= (ZGenoPolistirol +((ZGenoPolistirol/100)*ZGenoPolistirolpr));
     ZGenoPolistirolv=NGenoPolistirolv*ZGenoPolistirolv;
     ZGenoPolistirolv=Math.round(ZGenoPolistirolv);
     var ZGenoPolistirolvv=new Intl.NumberFormat('ru-RU').format(ZGenoPolistirolv);
     $('#ZGenoPolistirolsm').text(ZGenoPolistirolvv);
     $('#NumberBl44sm').text(NumberBl+'.'+k);
     $('#ZGenoPolistirolNamesm').text(ZGenoPolistirolName);
     $('#ZGenoPolistirolsmIsx').text(ZGenoPolistirol);
     $('#ZGenoPolistirolsmPr').text(ZGenoPolistirolpr);
     ZGenoPolistirolSebest=ZGenoPolistirol*NGenoPolistirolv;
     k=k+1;

    }
    else
    {
        ZGenoPolistirolv=0; 
        ZGenoPolistirolSebest=0;
    }

  

//====Утепление под плитой ========/// 

     var C27=document.getElementById('thicknessverytep').value; 
     C27=C27*1;
     var ZYteplTorzSebest=0;

     var C19=document.getElementById('heightr').value; 
     if (Typefundv==2){
         C19=document.getElementById('heightr2').value;

     }

     C19=C19*1;
     var C17=document.getElementById('thickness').value; 
     C17=C17*1;

     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl45sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZYteplTorzNamesm"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NYteplTorzsm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZYteplTorzsmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZYteplTorzsmPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;">  <span id="ZYteplTorzsm"></span>  </td>'); 
            $('#tablecalnew2').append(newSection);




     var NYteplTorzv=0;
     if (C27>0){
        NYteplTorzv=Pfundv*(C19+C17);
     }
     else
     { 
        NYteplTorzv=0;
    }
    NYteplTorzv=NYteplTorzv.toFixed(2);
     
     $('#NYteplTorzsm').text(NYteplTorzv); 

     var ZYteplTorzv= (ZYteplTorz +((ZYteplTorz/100)*ZYteplTorzpr));
     ZYteplTorzv=NYteplTorzv*ZYteplTorzv;
     ZYteplTorzv=Math.round(ZYteplTorzv);
     var ZYteplTorzvv=new Intl.NumberFormat('ru-RU').format(ZYteplTorzv);
     $('#ZYteplTorzsm').text(ZYteplTorzvv);
     $('#NumberBl45sm').text(NumberBl+'.'+k);
     $('#ZYteplTorzNamesm').text(ZYteplTorzName);
     $('#ZYteplTorzsmIsx').text(ZYteplTorz);
     $('#ZYteplTorzsmPr').text(ZYteplTorzpr);
     ZYteplTorzSebest=ZYteplTorz*NYteplTorzv;
     k=k+1;

     }
    else
    {
        ZYteplTorzv=0;
        ZYteplTorzSebest=0;
    }
     
   
     
        
     //====Экструдированный пенополистирол Технониколь 2 ========/// 

     var C26=document.getElementById('thicknessgorytep').value;
     var NGenoPolistirol2v=0;
     var ZGenoPolistirol2Sebest=0;
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl46sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZGenoPolistirol2Namesm"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NGenoPolistirol2sm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZGenoPolistirol2smIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZGenoPolistirol2smPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;">  <span id="ZGenoPolistirol2sm"></span>  </td>'); 
            $('#tablecalnew2').append(newSection);




     if (C26>0.05){
        NGenoPolistirol2v=(NYteplTorzv/0.684)*2.2; 
     }
     else{
        NGenoPolistirol2v=(NYteplTorzv/0.684)*1.1;
     }     
     NGenoPolistirol2v=Math.round(NGenoPolistirol2v);     
     $('#NGenoPolistirol2sm').text(NGenoPolistirol2v); 

     var ZGenoPolistirol2v= (ZGenoPolistirol2 +((ZGenoPolistirol2/100)*ZGenoPolistirol2pr));
     ZGenoPolistirol2v=NGenoPolistirol2v*ZGenoPolistirol2v;
     ZGenoPolistirol2v=Math.round(ZGenoPolistirol2v);
     var ZGenoPolistirol2vv=new Intl.NumberFormat('ru-RU').format(ZGenoPolistirol2v);
     $('#ZGenoPolistirol2sm').text(ZGenoPolistirol2vv);
     $('#NumberBl46sm').text(NumberBl+'.'+k);
     $('#ZGenoPolistirol2Namesm').text(ZGenoPolistirol2Name);
     $('#ZGenoPolistirol2smIsx').text(ZGenoPolistirol2);
     $('#ZGenoPolistirol2smPr').text(ZGenoPolistirol2pr);
     ZGenoPolistirol2Sebest=ZGenoPolistirol2*NGenoPolistirol2v;
     k=k+1;


    }
     
     else{
        ZGenoPolistirol2v=0;
        ZGenoPolistirol2Sebest=0;
     }

     //====дюбель для теплоизоляции 10*100 ========/// 
     var ZDubekTeploSebest=0;
     if (TeploPr==1){
        var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl47sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZDubekTeplosmNamesm"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;"><span id="NDubekTeplosm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZDubekTeplosmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">  <span id="ZDubekTeplosmPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;">  <span id="ZDubekTeplosm"></span>  </td>'); 
            $('#tablecalnew2').append(newSection);

     var NDubekTeplov=NGenoPolistirol2v*2; 
     NDubekTeplov=Math.round(NDubekTeplov);     
     $('#NDubekTeplosm').text(NDubekTeplov); 

     var ZDubekTeplov= (ZDubekTeplo +((ZDubekTeplo/100)*ZDubekTeplopr));
     ZDubekTeplov=NDubekTeplov*ZDubekTeplov;
     ZDubekTeplov=Math.round(ZDubekTeplov);
     var ZDubekTeplovv=new Intl.NumberFormat('ru-RU').format(ZDubekTeplov);
     $('#ZDubekTeplosm').text(ZDubekTeplovv);    
     $('#NumberBl47sm').text(NumberBl+'.'+k);
     $('#ZDubekTeplosmNamesm').text(ZDubekTeplosmName);
     $('#ZDubekTeplosmIsx').text(ZDubekTeplo); 
     $('#ZDubekTeplosmPr').text(ZDubekTeplopr); 
     ZDubekTeploSebest=ZDubekTeplo*NDubekTeplov;
     k=k+1;
     }
     else{
        ZDubekTeplov=0;
        ZDubekTeploSebest=0;
      
     }

     
     //====клей-пена для полистерола ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl48sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;"><span id="ZKleyPolisNamesm"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;">шт</td>\n+'+
            '<td style="width:10%;text-align: center;">2</td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZKleyPolissmIsx"></span>  </td>\n+'+
            '<td style="width:10%;text-align: center;"> <span id="ZKleyPolissmPr"></span>  </td>\n+'+
            '<td style="width:20%;text-align: center;"> <span id="ZKleyPolissm"></span>  </td>'); 
            $('#tablecalnew2').append(newSection);

     var ZKleyPolisv= (ZKleyPolis +((ZKleyPolis/100)*ZKleyPolispr));
     ZKleyPolisv=2*ZKleyPolisv;
     ZKleyPolisv=Math.round(ZKleyPolisv);
     var ZKleyPolisvv=new Intl.NumberFormat('ru-RU').format(ZKleyPolisv);
     $('#ZKleyPolissm').text(ZKleyPolisvv);
     $('#NumberBl48sm').text(NumberBl+'.'+k);
     $('#ZKleyPolisNamesm').text(ZKleyPolisName);
     $('#ZKleyPolissmIsx').text(ZKleyPolis);
     $('#ZKleyPolissmPr').text(ZKleyPolispr);
     var ZKleyPolisSebest=ZKleyPolis*2;
     k=k+1;

     //====Укладка гидроизоляционной мембраны в основание  фундамента  ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl49sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZGidroFundNamesm"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NGidroFundsm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZGidroFundsmIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZGidroFundsmPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZGidroFundsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var  NGidroFundv=Sfundv*1.2; 
     var NGidroFundv2=NGidroFundv;
     NGidroFundv=NGidroFundv.toFixed(2);     
     $('#NGidroFundsm').text(NGidroFundv); 

     var ZGidroFundv= (ZGidroFund +((ZGidroFund/100)*ZGidroFundpr));
     ZGidroFundv=NGidroFundv2*ZGidroFundv;
     ZGidroFundv=Math.round(ZGidroFundv);
     var ZGidroFundvv=new Intl.NumberFormat('ru-RU').format(ZGidroFundv);
     $('#ZGidroFundsm').text(ZGidroFundvv);
     $('#NumberBl49sm').text(NumberBl+'.'+k);
     $('#ZGidroFundNamesm').text(ZGidroFundName);
     $('#ZGidroFundsmIsx').text(ZGidroFund);
     $('#ZGidroFundsmPr').text(ZGidroFundpr);
     var ZGidroFundSebest=ZGidroFund*NGidroFundv2;
     k=k+1;


     //====Мембрана плантер 2*20  ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl410sm"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZMembramaNamesm"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">шт</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NMembramasm"></span></td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZMembramasmIsx"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZMembramasmPr"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZMembramasm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var  NMembramav=(NGidroFundv*1.2)/40; 
     var NMembramav2=NMembramav;
     NMembramav=Math.round(NMembramav);     
     $('#NMembramasm').text(NMembramav); 

     var ZMembramav= (ZMembrama +((ZMembrama/100)*ZMembramapr));
     ZMembramav=NMembramav*ZMembramav;
     ZMembramav=Math.round(ZMembramav);
     var ZMembramavv=new Intl.NumberFormat('ru-RU').format(ZMembramav);
     $('#ZMembramasm').text(ZMembramavv);
     $('#NumberBl410sm').text(NumberBl+'.'+k);
     $('#ZMembramaNamesm').text(ZMembramaName);
     $('#ZMembramasmIsx').text(ZMembrama);
     $('#ZMembramasmPr').text(ZMembramapr);
     var  ZMembramaSebest=ZMembrama*NMembramav;
     k=k+1;



     //====Вязка арматуры D12 в два слоя с ячейкой 200*200  ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl411sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZVjzkaD12Namesm"></span>  </td>\n+'+
         '<td style="width:10%;text-align: center;">кг</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NVjzkaD12sm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZVjzkaD12smIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZVjzkaD12smPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZVjzkaD12sm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var C13=document.getElementById('breadthf').value; 
     C13=C13*1;
     var C14=document.getElementById('landf').value; 
     C14=C14*1;
     var F171=((C13/0.2)*(C14*4));     
     var F172=(C13+C14)*2/0.4*1.4;    
     var F17= (F171+F172+(Sfundv/4))*1.1;

     var C19=document.getElementById('heightr').value;
     if (Typefundv==2){
        C19=document.getElementById('heightr2').value;

     }
     C19=C19*1;
     var C20=document.getElementById('widthr').value;
     C20=C20*1;
     F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
     C19=C19*1;

     var F20=0;
     if (C19>0)
     {
      var F201=C19/0.2*2;      
      var F202=5*(C19+C17+C20)*2.4;     
      F20=(F201+F202)*F19;
     }
   var F22=F17+F20;  

     var   NVjzkaD12v=F22*1.05;; 
     var NVjzkaD12v2=NVjzkaD12v;
     NVjzkaD12v=Math.round(NVjzkaD12v);     
     $('#NVjzkaD12sm').text(NVjzkaD12v); 

     var ZVjzkaD12v= (ZVjzkaD12 +((ZVjzkaD12/100)*ZVjzkaD12pr));
     ZVjzkaD12v=NVjzkaD12v2*ZVjzkaD12v;
     ZVjzkaD12v=Math.round(ZVjzkaD12v);
     var ZVjzkaD12vv=new Intl.NumberFormat('ru-RU').format(ZVjzkaD12v);
     $('#ZVjzkaD12sm').text(ZVjzkaD12vv);
     $('#NumberBl411sm').text(NumberBl+'.'+k);
     $('#ZVjzkaD12Namesm').text(ZVjzkaD12Name);
     $('#ZVjzkaD12smIsx').text(ZVjzkaD12);
     $('#ZVjzkaD12smPr').text(ZVjzkaD12pr);
     var ZVjzkaD12Sebest=ZVjzkaD12*NVjzkaD12v2;
     k=k+1;


     //====арматура по проекту (65 кг/м3) ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl412sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZArmatura65Namesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">кг</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NArmatura65sm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZArmatura65smIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZArmatura65smPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZArmatura65sm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var  NArmatura65v=NVjzkaD12v2; 

     var NArmatura652v=NArmatura65v;
     NArmatura65v=Math.round(NArmatura65v);     
     $('#NArmatura65sm').text(NArmatura65v); 

     var ZArmatura65v= (ZArmatura65 +((ZArmatura65/100)*ZArmatura65pr));
     ZArmatura65v=NArmatura652v*ZArmatura65v;
     ZArmatura65v=Math.round(ZArmatura65v);
     var ZArmatura65vv=new Intl.NumberFormat('ru-RU').format(ZArmatura65v);
     $('#ZArmatura65sm').text(ZArmatura65vv);
     $('#NumberBl412sm').text(NumberBl+'.'+k);
     $('#ZArmatura65Namesm').text(ZArmatura65Name);
     $('#ZArmatura65smIsx').text(ZArmatura65);
     $('#ZArmatura65smPr').text(ZArmatura65pr);
     var ZArmatura65Sebest=ZArmatura65*NArmatura652v;

     k=k+1;

     
     //====крепеж, фиксаторы, проволока ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl413sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZKrepegNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">м2</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NKrepegsm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZKrepegsmIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZKrepegsmPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZKrepegsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
    // var  NKrepegv=NYtepPlv;
     var  NKrepegv=Nblock4v;

    //  var NArmatura652v=NArmatura65v;
    //  NArmatura65v=Math.round(NArmatura65v);     
     $('#NKrepegsm').text(NKrepegv); 
     var ZKrepegv= (ZKrepeg +((ZKrepeg/100)*ZKrepegpr));
     ZKrepegv=NKrepegv*ZKrepegv;
     ZKrepegv=Math.round(ZKrepegv);
     var ZKrepegvv=new Intl.NumberFormat('ru-RU').format(ZKrepegv);
     $('#ZKrepegsm').text(ZKrepegvv);
     $('#NumberBl413sm').text(NumberBl+'.'+k);
     $('#ZKrepegNamesm').text(ZKrepegName);
     $('#ZKrepegsmIsx').text(ZKrepeg);
     $('#ZKrepegsmPr').text(ZKrepegpr);
     var ZKrepegSebest=ZKrepeg*NKrepegv;
     k=k+1;

     //====Бетонирование  фундамента с подачей) ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl414sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZBetonFundNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">м3</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NBetonFundsm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZBetonFundsmIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZBetonFundsmPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZBetonFundsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
      var I19=2;
      var C17=document.getElementById('thickness').value; 
     C17=C17*1;
     var C19=document.getElementById('heightr').value;
     if (Typefundv==2){
         C19=document.getElementById('heightr2').value;

     }
     C19=C19*1;
     var C20=document.getElementById('widthr').value;
     C20=C20*1;
     var L27=I19*C17*1.3;
     //console.log(L27);
     var I17=Sfundv;
     var L25=I17*C17;
     //console.log('LL25='+L25);
     F19=Pfundv*1+landlfsm*1+breadthlfsm*1;
     var L24=F19*C19*C20;
     //console.log('LL24='+L24);
     var L26=L24+L25;
     var L28=L26+L27;
     var  NBetonFundv=L28*1.1;
      var NBetonFundv2=NBetonFundv;
    NBetonFundv=Math.round(NBetonFundv);    
     $('#NBetonFundsm').text(NBetonFundv); 

     var ZBetonFundv= (ZBetonFund +((ZBetonFund/100)*ZBetonFundpr));
     ZBetonFundv=NBetonFundv2*ZBetonFundv;
     ZBetonFundv=Math.round(ZBetonFundv);
     var ZBetonFundvv=new Intl.NumberFormat('ru-RU').format(ZBetonFundv);
     $('#ZBetonFundsm').text(ZBetonFundvv);
     $('#NumberBl414sm').text(NumberBl+'.'+k);
     $('#ZBetonFundNamesm').text(ZBetonFundName);
     $('#ZBetonFundsmIsx').text(ZBetonFund);
     $('#ZBetonFundsmPr').text(ZBetonFundpr);
     var ZBetonFundSebest=ZBetonFund*NBetonFundv2;
     k=k+1;



    //====бетон М400, П4 ========/// 
    var newSection = $('<tr class="tablbl2"></tr>');
    newSection.html(
        '<td style="width:10%;text-align: center;"><span id="NumberBl415sm"></span></td>\n+'+
        '<td  style="width:30%;text-align: left;"><span id="ZBetonM400Namesm"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;">м3</td>\n+'+
        '<td style="width:10%;text-align: center;"><span id="NBetonM400sm"></span></td>\n+'+
        '<td style="width:10%;text-align: center;"> <span id="ZBetonM400smIsx"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;"> <span id="ZBetonM400smPr"></span> </td>\n+'+
        '<td style="width:20%;text-align: center;"> <span id="ZBetonM400sm"></span> </td>'); 
        $('#tablecalnew2').append(newSection);

    var  NBetonM400v=NBetonFundv; 
    // var NArmatura652v=NArmatura65v;
    // NArmatura65v=Math.round(NArmatura65v);     
    $('#NBetonM400sm').text(NBetonM400v); 

    var ZBetonM400v= (ZBetonM400 +((ZBetonM400/100)*ZBetonM400pr));
    ZBetonM400v=NBetonFundv2*ZBetonM400v;
    ZBetonM400v=Math.round(ZBetonM400v);
    var ZBetonM400vv=new Intl.NumberFormat('ru-RU').format(ZBetonM400v);
    $('#ZBetonM400sm').text(ZBetonM400vv);
    $('#NumberBl415sm').text(NumberBl+'.'+k);
    $('#ZBetonM400Namesm').text(ZBetonM400Name);
    $('#ZBetonM400smIsx').text(ZBetonM400);
    $('#ZBetonM400smPr').text(ZBetonM400pr);
    var ZBetonM400Sebest=ZBetonM400*NBetonFundv2;
    k=k+1


    //====миксер для перевозки бетона ========/// 
    var newSection = $('<tr class="tablbl2"></tr>');
    newSection.html(
        '<td style="width:10%;text-align: center;"><span id="NumberBl416sm"></span></td>\n+'+
        '<td  style="width:30%;text-align: left;"><span id="ZMikserNamesm"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;">м3</td>\n+'+
        '<td style="width:10%;text-align: center;"><span id="NMiksersm"></span></td>\n+'+
        '<td style="width:10%;text-align: center;"> <span id="ZMiksersmIsx"></span> </td>\n+'+
        '<td style="width:10%;text-align: center;"> <span id="ZMiksersmPr"></span> </td>\n+'+
        '<td style="width:20%;text-align: center;"> <span id="ZMiksersm"></span> </td>'); 
        $('#tablecalnew2').append(newSection);
    var  NMikserv=NBetonFundv; 
    $('#NMiksersm').text(NMikserv); 

    var ZMikserv= (ZMikser +((ZMikser/100)*ZMikserpr));
    ZMikserv=NBetonFundv2*ZMikserv;
    ZMikserv=Math.round(ZMikserv);
    var ZMikservv=new Intl.NumberFormat('ru-RU').format(ZMikserv);
    $('#ZMiksersm').text(ZMikservv);
    $('#NumberBl416sm').text(NumberBl+'.'+k);
    $('#ZMikserNamesm').text(ZMikserName);
    $('#ZMiksersmIsx').text(ZMikser);
    $('#ZMiksersmPr').text(ZMikserpr);
    var ZMikserSebest=ZMikser*NBetonFundv2;
    k=k+1

     //====Подача бетона насосом ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl417sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZNasosNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">смена</td>\n+'+
         '<td style="width:10%;text-align: center;"><span id="NNasossm"></span></td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZNasossmIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZNasossmPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZNasossm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var NNasosv=1;
     if (NBetonFundv<70){
        NNasosv=1;
     }
     else{
        NNasosv =1.5;
     } 
     $('#NNasossm').text(NNasosv); 
 
     var ZNasosv= (ZNasos +((ZNasos/100)*ZNasospr));
     ZNasosv=NNasosv*ZNasosv;
     ZNasosv=Math.round(ZNasosv);
     var ZNasosvv=new Intl.NumberFormat('ru-RU').format(ZNasosv);
     $('#ZNasossm').text(ZNasosvv);
     $('#NumberBl417sm').text(NumberBl+'.'+k);
     $('#ZNasosNamesm').text(ZNasosName);
     $('#ZNasossmIsx').text(ZNasos);
     $('#ZNasossmPr').text(ZNasospr);
     var ZNasosSebest=ZNasos*NNasosv;
     k=k+1
 



     //====достака расходников  ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl418sm"></span></td>\n+'+
         '<td  style="width:30%;text-align: left;"><span id="ZDostavkaRachodNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZDostavkaRachodsmIsx"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;"> <span id="ZDostavkaRachodsmPr"></span> </td>\n+'+
         '<td style="width:20%;text-align: center;"> <span id="ZDostavkaRachodsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var ZDostavkaRachodv= (ZDostavkaRachod +((ZDostavkaRachod/100)*ZDostavkaRachodpr));
     //ZNasosv=NNasosv*ZNasosv;
     ZDostavkaRachodv=Math.round(ZDostavkaRachodv);
     var ZDostavkaRachodvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaRachodv);
     $('#ZDostavkaRachodsm').text(ZDostavkaRachodvv);
     $('#NumberBl418sm').text(NumberBl+'.'+k);
     $('#ZDostavkaRachodNamesm').text(ZDostavkaRachodName);
     $('#ZDostavkaRachodsmIsx').text(ZDostavkaRachod);
     $('#ZDostavkaRachodsmPr').text(ZDostavkaRachodpr);
     var ZDostavkaRachodSebest=ZDostavkaRachod*1;
     k=k+1;

     //====Доставка пеноплекса и геотекстиля  ========/// 
     var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl419sm"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZDostavkaPenoplNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPenoplsmIsx"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPenoplsmPr"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPenoplsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
     var ZDostavkaPenoplv= (ZDostavkaPenopl +((ZDostavkaPenopl/100)*ZDostavkaPenoplpr));
     //ZNasosv=NNasosv*ZNasosv;
     ZDostavkaPenoplv=Math.round(ZDostavkaPenoplv);
     var ZDostavkaPenoplvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaPenoplv);
     $('#ZDostavkaPenoplsm').text(ZDostavkaPenoplvv);
     $('#NumberBl419sm').text(NumberBl+'.'+k);
     $('#ZDostavkaPenoplNamesm').text(ZDostavkaPenoplName);
     $('#ZDostavkaPenoplsmIsx').text(ZDostavkaPenopl);
     $('#ZDostavkaPenoplsmPr').text(ZDostavkaPenoplpr);
     var ZDostavkaPenoplprSebest=ZDostavkaPenopl*1;
     k=k+1;

       //====Доставка пиломатериалов  ========/// 
       var newSection = $('<tr class="tablbl2"></tr>');
     newSection.html(
         '<td style="width:10%;text-align: center;"><span id="NumberBl420sm"></span></td>\n+'+
         '<td  style="width:40%;text-align: left;"><span id="ZDostavkaPilomatNamesm"></span> </td>\n+'+
         '<td style="width:10%;text-align: center;">рейс</td>\n+'+
         '<td style="width:10%;text-align: center;">1</td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPilomatsmIsx"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPilomatsmPr"></span> </td>\n+'+
         '<td style="width:15%;text-align: center;"> <span id="ZDostavkaPilomatsm"></span> </td>'); 
         $('#tablecalnew2').append(newSection);
       var ZDostavkaPilomatv= (ZDostavkaPilomat +((ZDostavkaPilomat/100)*ZDostavkaPilomatpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZDostavkaPilomatv=Math.round(ZDostavkaPilomatv);
       var ZDostavkaPilomatvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaPilomatv);
       $('#ZDostavkaPilomatsm').text(ZDostavkaPilomatvv);
       $('#NumberBl420sm').text(NumberBl+'.'+k);
       $('#ZDostavkaPilomatNamesm').text(ZDostavkaPilomatName);
       $('#ZDostavkaPilomatsmIsx').text(ZDostavkaPilomat);
       $('#ZDostavkaPilomatsmPr').text(ZDostavkaPilomatpr);
       var ZDostavkaPilomatSebest=ZDostavkaPilomat*1;
       k=k+1;

       //====уход за фундаментом  ========/// 
       var newSection = $('<tr class="tablbl2"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl421sm"></span></td>\n+'+
           '<td  style="width:40%;text-align: left;"><span id="ZUhodFundNamesm"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">сут</td>\n+'+
           '<td style="width:10%;text-align: center;">2</td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZUhodFundsmIsx"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZUhodFundsmPr"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZUhodFundsm"></span> </td>'); 
           $('#tablecalnew2').append(newSection);
       var ZUhodFundv= (ZUhodFund +((ZUhodFund/100)*ZUhodFundpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZUhodFundv=2*Math.round(ZUhodFundv);
       var ZUhodFundvv=new Intl.NumberFormat('ru-RU').format(ZUhodFundv);
       $('#ZUhodFundsm').text(ZUhodFundvv);
       $('#NumberBl421sm').text(NumberBl+'.'+k);
       $('#ZUhodFundNamesm').text(ZUhodFundName);
       $('#ZUhodFundsmIsx').text(ZUhodFund);
       $('#ZUhodFundsmPr').text(ZUhodFundpr);
       var ZUhodFundSebest=ZUhodFund*1;

       k=k+1;

       //====Доставка арматуры на плиту  ========/// 
       var newSection = $('<tr class="tablbl2"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl422sm"></span></td>\n+'+
           '<td  style="width:40%;text-align: left;"><span id="ZDostavkaArmNamesm"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">рейс</td>\n+'+
           '<td style="width:10%;text-align: center;">1</td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZDostavkaArmsmIsx"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZDostavkaArmsmPr"></span> </td>\n+'+
           '<td style="width:15%;text-align: center;"> <span id="ZDostavkaArmsm"></span> </td>'); 
           $('#tablecalnew2').append(newSection);
       var ZDostavkaArmv= (ZDostavkaArm +((ZDostavkaArm/100)*ZDostavkaArmpr));
       //ZNasosv=NNasosv*ZNasosv;
       ZZDostavkaArmv=Math.round(ZDostavkaArmv);
       var ZDostavkaArmvv=new Intl.NumberFormat('ru-RU').format(ZDostavkaArmv);
       $('#ZDostavkaArmsm').text(ZDostavkaArmvv);
       $('#NumberBl422sm').text(NumberBl+'.'+k);
       $('#ZDostavkaArmNamesm').text(ZDostavkaArmName);
       $('#ZDostavkaArmsmIsx').text(ZDostavkaArm);
       $('#ZDostavkaArmsmPr').text(ZDostavkaArmpr);
       var ZDostavkaArmSebest=ZDostavkaArm*1;
       k=k+1;
       NumberBl=NumberBl+1;

       //====Итого по 4 блоку  ========/// 
       var Zblock4v=ZDostavkaArmv+ZUhodFundv+ZDostavkaPilomatv+ZDostavkaPenoplv+ZDostavkaRachodv+ZNasosv+ZMikserv
       +ZBetonM400v+ZBetonFundv+ZKrepegv+ZArmatura65v+ZVjzkaD12v+ZMembramav+ZKleyPolisv+ZDubekTeplov+ZGenoPolistirol2v
       +ZYteplTorzv+ZPiloMatv+ZOpalybkav+ZGidroFundv+ZGenoPolistirolv+ZYtepPlv;

       
       var Zblock4vv=new Intl.NumberFormat('ru-RU').format(Zblock4v);
       $('#Zblock4sm').text(Zblock4vv);

       var Zblock4Sebest=ZDostavkaArmSebest*1+ZUhodFundSebest*1+ZDostavkaPilomatSebest*1+ZDostavkaPenoplprSebest*1+ZDostavkaRachodSebest*1
       +ZNasosSebest*1+ZMikserSebest*1+ZBetonM400Sebest*1+ZBetonFundSebest*1+ZKrepegSebest*1+ZArmatura65Sebest*1+ZVjzkaD12Sebest*1+ZMembramaSebest*1
       +ZKleyPolisSebest*1+ZDubekTeploSebest*1+ZGenoPolistirol2Sebest*1
       +ZYteplTorzSebest*1+ZPiloMatSebest*1+ZOpalybkaSebest*1+ZGidroFundSebest*1+ZGenoPolistirolSebest*1+ZYtepPlsmSebest*1;

    //    console.log('Zblock4Sebest='+Zblock4Sebest)
    //    console.log('ZYtepPlsmSebest='+ZYtepPlsmSebest);
    //    console.log('ZDubekTeploSebest='+ZDubekTeploSebest);
    //    console.log('ZGenoPolistirol2Sebest='+ZGenoPolistirol2Sebest)
    //    console.log('ZYteplTorzSebest='+ZYteplTorzSebest)
    //    console.log('ZGenoPolistirolSebest='+ZGenoPolistirolSebest)
     
      var Zblock4Sebestv=Zblock4Sebest.toFixed(2);
     Zblock4Sebestv=new Intl.NumberFormat('ru-RU').format(Zblock4Sebestv);

     var Zblock4smPrv=(Zblock4v/Zblock4Sebest)*100-100;
     Zblock4smPrv=Zblock4smPrv.toFixed(2);

       $('#Zblock4smIsx').text(Zblock4Sebestv);
       $('#Zblock4smPr').text(Zblock4smPrv);




       ///=========================== 5 BLOCK=============================//

       if (DrenagPr==1){
         
        n=1;

        //====Дренаж  ========//
        var newSection = $('<tr class="tablbl3"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NumberBl5sm"></span></td>\n+'+
            '<td  style="width:30%;text-align: left;font-weight: bold;">Дренаж</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;">м2</td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="NDrenagsm"></span></td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock5smIsx"></span></td>\n+'+
            '<td style="width:10%;text-align: center;font-weight: bold;"><span id="Zblock5smPr"></span></td>\n+'+
            '<td style="width:20%;text-align: center;font-weight: bold;"><span id="Zblock5sm"></span></td>');
        $('#tablecalnew3').append(newSection);
       var C13=document.getElementById('breadthf').value; 
       C13=C13*1;
       var C14=document.getElementById('landf').value; 
       C14=C14*1;
       var NDrenagv= (C13+3)*2+(C14+3)*2+2;
       //ZNasosv=NNasosv*ZNasosv;
       var NDrenagv2=NDrenagv;
       NDrenagv=Math.round(NDrenagv);
       $('#NDrenagsm').text(NDrenagv);
       $('#NumberBl5sm').text(NumberBl);
        

        //====Устройство траншеи по периметру дома под ливневку  ========/// 
        var newSection = $('<tr class="tablbl3"></tr>');
        newSection.html(
            '<td style="width:10%;text-align: center;"><span id="NumberBl51sm"></span></td>\n+'+
            '<td  style="width:40%;text-align: left;"><span id="ZLivenNamesm"></span> </td>\n+'+
            '<td style="width:10%;text-align: center;">см.</td>\n+'+
            '<td style="width:10%;text-align: center;">1</td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZLivensmIsx"></span> </td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZLivensmPr"></span> </td>\n+'+
            '<td style="width:15%;text-align: center;"> <span id="ZLivensm"></span> </td>'); 
            $('#tablecalnew3').append(newSection);

        var ZLivenv= (ZLiven +((ZLiven/100)*ZLivenpr));
        ZLivenv=Math.round(ZLivenv);
        var ZLivenvv=new Intl.NumberFormat('ru-RU').format(ZLivenv);
        $('#ZLivensm').text(ZLivenvv);
        $('#NumberBl51sm').text(NumberBl+'.'+n);
        $('#ZLivenNamesm').text(ZLivenName);
        $('#ZLivensmIsx').text(ZLiven);
        $('#ZLivensmPr').text(ZLivenpr);
        var ZLivenSebest=ZLiven*1;
        n=n+1;
    
    
       //====Доработка траншеи вручную ( разуклонка песком ) ========/// 
       var newSection = $('<tr class="tablbl3"></tr>');
       newSection.html(
           '<td style="width:10%;text-align: center;"><span id="NumberBl52sm"></span></td>\n+'+
           '<td  style="width:30%;text-align: left;"><span id="ZDorabTrNamesm"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
           '<td style="width:10%;text-align: center;"><span id="NDorabTrsm"></span></td>\n+'+
           '<td style="width:10%;text-align: center;"> <span id="ZDorabTrsmIsx"></span> </td>\n+'+
           '<td style="width:10%;text-align: center;"> <span id="ZDorabTrsmPr"></span> </td>\n+'+
           '<td style="width:20%;text-align: center;"> <span id="ZDorabTrsm"></span> </td>'); 
           $('#tablecalnew3').append(newSection);
     var  NDorabTrv=NDrenagv;         
     $('#NDorabTrsm').text(NDorabTrv); 
 
     var ZDorabTrv= (ZDorabTr +((ZDorabTr/100)*ZDorabTrpr));
     ZDorabTrv=NDrenagv2*ZDorabTrv;
     ZDorabTrv=Math.round(ZDorabTrv);
     var ZDorabTrvv=new Intl.NumberFormat('ru-RU').format(ZDorabTrv);
     $('#ZDorabTrsm').text(ZDorabTrvv);
     $('#NumberBl52sm').text(NumberBl+'.'+n);
        $('#ZDorabTrNamesm').text(ZDorabTrName);
        $('#ZDorabTrsmIsx').text(ZDorabTr);
        $('#ZDorabTrsmPr').text(ZDorabTrpr);
        var ZDorabTrSebest=ZDorabTr*NDrenagv2;

        n=n+1;
 
      //====Укладка геотекстиля в траншею ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl53sm"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZUkladkaGeoNamesm"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NUkladkaGeosm"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZUkladkaGeosmIsx"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZUkladkaGeosmPr"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZUkladkaGeosm"></span> </td>'); 
          $('#tablecalnew3').append(newSection);
      var  NUkladkaGeov=NDrenagv;         
      $('#NUkladkaGeosm').text(NUkladkaGeov); 
  
      var ZUkladkaGeov= (ZUkladkaGeo +((ZUkladkaGeo/100)*ZUkladkaGeopr));
      ZUkladkaGeov=NDrenagv2*ZUkladkaGeov;
      ZUkladkaGeov=Math.round(ZUkladkaGeov);
      var ZUkladkaGeovv=new Intl.NumberFormat('ru-RU').format(ZUkladkaGeov);
      $('#ZUkladkaGeosm').text(ZUkladkaGeovv);
      $('#NumberBl53sm').text(NumberBl+'.'+n);
      $('#ZUkladkaGeoNamesm').text(ZUkladkaGeoName);
      $('#ZUkladkaGeosmIsx').text(ZUkladkaGeo);
      $('#ZUkladkaGeosmPr').text(ZUkladkaGeopr);
      var ZUkladkaGeoSebest=ZUkladkaGeo*NDrenagv2;
      n=n+1;
 
      //====Геотекстиль 150 г/кв.м термоскрепленный 1,6х50 м (80 кв.м) ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl54sm"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZGeo150Namesm"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">рул</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NGeo150sm"></span></td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZGeo150smIsx"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZGeo150smPr"></span> </td>\n+'+
          '<td style="width:15%;text-align: center;"> <span id="ZGeo150sm"></span> </td>'); 
          $('#tablecalnew3').append(newSection);
      var  NGeo150v=(NDrenagv*1.2)/50;  
      NGeo150v=Math.round(NGeo150v);
      $('#NGeo150sm').text(NGeo150v); 
  
      var ZGeo150v= (ZGeo150 +((ZGeo150/100)*ZGeo150pr));
      ZGeo150v=NGeo150v*ZGeo150v;
      ZGeo150v=Math.round(ZGeo150v);
      var ZGeo150vv=new Intl.NumberFormat('ru-RU').format(ZGeo150v);
      $('#ZGeo150sm').text(ZGeo150vv);
      $('#NumberBl54sm').text(NumberBl+'.'+n);
      $('#ZGeo150Namesm').text(ZGeo150Name);
      $('#ZGeo150smIsx').text(ZGeo150);
      $('#ZGeo150smPr').text(ZGeo150pr);
      var ZGeo150Sebest=ZGeo150*NGeo150v;
      n=n+1;

 
      //====укладка в траншею дренажной трубы с уклоном ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl55sm"></span></td>\n+'+
          '<td  style="width:30%;text-align: left;"><span id="ZUkladkaDrenagTrNamesm"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NUkladkaDrenagTrsm"></span></td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZUkladkaDrenagTrsmIsx"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZUkladkaDrenagTrsmPr"></span> </td>\n+'+
          '<td style="width:20%;text-align: center;"> <span id="ZUkladkaDrenagTrsm"></span> </td>'); 
          $('#tablecalnew3').append(newSection);
      var  NUkladkaDrenagTrsmv=NDrenagv;         
      $('#NUkladkaDrenagTrsm').text(NUkladkaDrenagTrsmv); 
  
      var ZUkladkaDrenagTrv= (ZUkladkaDrenagTr +((ZUkladkaDrenagTr/100)*ZUkladkaDrenagTrpr));
      ZUkladkaDrenagTrv=NDrenagv2*ZUkladkaDrenagTrv;
      ZUkladkaDrenagTrv=Math.round(ZUkladkaDrenagTrv);
      var ZUkladkaDrenagTrvv=new Intl.NumberFormat('ru-RU').format(ZUkladkaDrenagTrv);
      $('#ZUkladkaDrenagTrsm').text(ZUkladkaDrenagTrvv);
      $('#NumberBl55sm').text(NumberBl+'.'+n);
      $('#ZUkladkaDrenagTrNamesm').text(ZUkladkaDrenagTrName);
      $('#ZUkladkaDrenagTrsmIsx').text(ZUkladkaDrenagTr);
      $('#ZUkladkaDrenagTrsmPr').text(ZUkladkaDrenagTrpr);
      var ZUkladkaDrenagTrSebest=ZUkladkaDrenagTr*NDrenagv2;
      n=n+1;

 
      //====труба дренажная  гофрированная , без перфорации 110 мм ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl56sm"></span></td>\n+'+
          '<td  style="width:30%;text-align: left;"><span id="ZDrenagTr110Namesm"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NDrenagTr110sm"></span></td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZDrenagTr110smIsx"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZDrenagTr110smPr"></span> </td>\n+'+
          '<td style="width:20%;text-align: center;"> <span id="ZDrenagTr110sm"></span> </td>'); 
          $('#tablecalnew3').append(newSection);
      var  NDrenagTr110v=(NDrenagv2*1.1);
      //console.log(NDrenagTr110v)  
      NDrenagTr110v=Math.round(NDrenagTr110v);
      $('#NDrenagTr110sm').text(NDrenagTr110v); 
  
      var ZDrenagTr110v= (ZDrenagTr110 +((ZDrenagTr110/100)*ZDrenagTr110pr));
      ZDrenagTr110v=NDrenagTr110v*ZDrenagTr110v;
      ZDrenagTr110v=Math.round(ZDrenagTr110v);
      var ZDrenagTr110vv=new Intl.NumberFormat('ru-RU').format(ZDrenagTr110v);
      $('#ZDrenagTr110sm').text(ZDrenagTr110vv);
      $('#NumberBl56sm').text(NumberBl+'.'+n);
      $('#ZDrenagTr110Namesm').text(ZDrenagTr110Name);
      $('#ZDrenagTr110smIsx').text(ZDrenagTr110);
      $('#ZDrenagTr110smPr').text(ZDrenagTr110pr);
      var ZDrenagTr110Sebest=ZDrenagTr110*NDrenagTr110v;
      n=n+1;
      
 
 
      //====Монтаж смотрового колодца ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl57sm"></span></td>\n+'+
          '<td  style="width:30%;text-align: left;"><span id="ZMontagKolNamesm"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;">шт</td>\n+'+
          '<td style="width:10%;text-align: center;">4</td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZMontagKolsmIsx"></span> </td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZMontagKolsmPr"></span> </td>\n+'+
          '<td style="width:20%;text-align: center;"> <span id="ZMontagKolsm"></span> </td>'); 
          $('#tablecalnew3').append(newSection);
      var ZMontagKolv= (ZMontagKol +((ZMontagKol/100)*ZMontagKolpr));
      ZMontagKolv=4*ZMontagKolv;
      ZMontagKolv=Math.round(ZMontagKolv);
      var ZMontagKolvv=new Intl.NumberFormat('ru-RU').format(ZMontagKolv);
      $('#ZMontagKolsm').text(ZMontagKolvv);
      $('#NumberBl57sm').text(NumberBl+'.'+n);
      $('#ZMontagKolNamesm').text(ZMontagKolName);
      $('#ZMontagKolsmIsx').text(ZMontagKol);
      $('#ZMontagKolsmPr').text(ZMontagKolpr);
      var ZMontagKolSebest=ZMontagKol*4;

      n=n+1;
 
      
      //====Колодец дренажный смотровой ========/// 
      var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl58sm"></span></td>\n+'+
          '<td  style="width:30%;text-align: left;"><span id="ZKolodezNamesm"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">шт</td>\n+'+
          '<td style="width:10%;text-align: center;">4</td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZKolodezsmIsx"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;"> <span id="ZKolodezsmPr"></span>  </td>\n+'+
          '<td style="width:20%;text-align: center;"> <span id="ZKolodezsm"></span>  </td>'); 
          $('#tablecalnew3').append(newSection);
      var ZKolodezv= (ZKolodez +((ZKolodez/100)*ZKolodezpr));
      ZKolodezv=4*ZKolodezv;
      ZKolodezv=Math.round(ZKolodezv);
      var ZKolodezvv=new Intl.NumberFormat('ru-RU').format(ZKolodezv);
      $('#ZKolodezsm').text(ZKolodezvv);
      $('#NumberBl58sm').text(NumberBl+'.'+n);
      $('#ZKolodezNamesm').text(ZKolodezName);
      $('#ZKolodezsmIsx').text(ZKolodez);
      $('#ZKolodezsmPr').text(ZKolodezpr);
      var ZKolodezSebest=ZKolodez*4;
      n=n+1;
   
   
     //==== обратная засыпка щебнем ========/// 
     var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl59sm"></span></td>\n+'+
          '<td  style="width:30%;text-align: left;"> <span id="ZShebObratNamesm"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NShebObratsm"></span></td>\n+'+
          '<td style="width:10%;text-align: center;">  <span id="ZShebObratsmIsx"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">  <span id="ZShebObratsmPr"></span>  </td>\n+'+
          '<td style="width:20%;text-align: center;">  <span id="ZShebObratsm"></span>  </td>'); 
          $('#tablecalnew3').append(newSection);
     var  NShebObratv=NDrenagv;         
     $('#NShebObratsm').text(NShebObratv); 
 
     var ZShebObratv= (ZShebObrat +((ZShebObrat/100)*ZShebObratpr));
     ZShebObratv=NDrenagv2*ZShebObratv;
     ZShebObratv=Math.round(ZShebObratv);
     var ZShebObratvv=new Intl.NumberFormat('ru-RU').format(ZShebObratv);
     $('#ZShebObratsm').text(ZShebObratvv);
     $('#NumberBl59sm').text(NumberBl+'.'+n);
      $('#ZShebObratNamesm').text(ZShebObratName);
      $('#ZShebObratsmIsx').text(ZShebObrat);
      $('#ZShebObratsmPr').text(ZShebObratpr);
      var ZShebObratSwbest=ZShebObrat*NDrenagv2;
      n=n+1;
 
     
     //==== щебень для обр. засыпки ========/// 
     var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl510sm"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"> <span id="ZShebObrat2Namesm"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">м.п.</td>\n+'+
          '<td style="width:10%;text-align: center;"><span id="NShebObrat2sm"></span></td>\n+'+
          '<td style="width:15%;text-align: center;">  <span id="ZShebObrat2smIsx"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;">  <span id="ZShebObrat2smPr"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;">  <span id="ZShebObrat2sm"></span>  </td>'); 
          $('#tablecalnew3').append(newSection);
     var  NShebObrat2v=NDrenagv*0.6*0.2;
     NShebObrat2v=10*(Math.round(NShebObrat2v/10));
     $('#NShebObrat2sm').text(NShebObrat2v); 
     var ZShebObrat2v= (ZShebObrat2 +((ZShebObrat2/100)*ZShebObrat2pr));
     ZShebObrat2v=NShebObrat2v*ZShebObrat2v;
     ZShebObrat2v=Math.round(ZShebObrat2v);
     var ZShebObrat2vv=new Intl.NumberFormat('ru-RU').format(ZShebObrat2v);
     $('#ZShebObrat2sm').text(ZShebObrat2vv);
     $('#NumberBl510sm').text(NumberBl+'.'+n);
     $('#ZShebObrat2Namesm').text(ZShebObrat2Name);
     $('#ZShebObrat2smIsx').text(ZShebObrat2);
     $('#ZShebObrat2smPr').text(ZShebObrat2pr);
     var ZShebObrat2Sebest=ZShebObrat2*NShebObrat2v;
     n=n+1;
 
     //==== Доставка труб и колодцев ========/// 
     var newSection = $('<tr class="tablbl3"></tr>');
      newSection.html(
          '<td style="width:10%;text-align: center;"><span id="NumberBl511sm"></span></td>\n+'+
          '<td  style="width:40%;text-align: left;"><span id="ZDostavkaTrub2Namesm"></span>  </td>\n+'+
          '<td style="width:10%;text-align: center;">рейс</td>\n+'+
          '<td style="width:10%;text-align: center;">1</td>\n+'+
          '<td style="width:15%;text-align: center;"><span id="ZDostavkaTrub2smIsx"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"><span id="ZDostavkaTrub2smPr"></span>  </td>\n+'+
          '<td style="width:15%;text-align: center;"><span id="ZDostavkaTrub2sm"></span>  </td>'); 
          $('#tablecalnew3').append(newSection);
      var ZDostavkaTrub2v= (ZDostavkaTrub2 +((ZDostavkaTrub2/100)*ZDostavkaTrub2pr));    
      ZDostavkaTrub2v=Math.round(ZDostavkaTrub2v);
      var ZDostavkaTrub2vv=new Intl.NumberFormat('ru-RU').format(ZDostavkaTrub2v);
     $('#ZDostavkaTrub2sm').text(ZDostavkaTrub2vv);
     $('#NumberBl511sm').text(NumberBl+'.'+n);
     $('#ZDostavkaTrub2Namesm').text(ZDostavkaTrub2Name);
     $('#ZDostavkaTrub2smIsx').text(ZDostavkaTrub2);
     $('#ZDostavkaTrub2smPr').text(ZDostavkaTrub2pr);
     var ZDostavkaTrub2Sebest=ZDostavkaTrub2*1;
     n=n+1;
     var Zblock5v=0;
     var Zblock5Sebest=0;
     //==== Итого по 5 ПУНКТУ ========/// 
      Zblock5v=ZDostavkaTrub2v+ ZShebObrat2v+ZShebObratv+ZKolodezv+ZMontagKolv+ZDrenagTr110v+ZUkladkaDrenagTrv+ZGeo150v
     +ZUkladkaGeov+ZDorabTrv+ZLivenv;

     ZDostavkaTrub2v=Math.round(ZDostavkaTrub2v);
     var Zblock5vv=new Intl.NumberFormat('ru-RU').format(Zblock5v);
    $('#Zblock5sm').text(Zblock5vv); 
    
    Zblock5Sebest=ZDostavkaTrub2Sebest+ ZShebObrat2Sebest+ZShebObratSwbest+ZKolodezSebest+ZMontagKolSebest+ZDrenagTr110Sebest+ZUkladkaDrenagTrSebest+ZGeo150Sebest
     +ZUkladkaGeoSebest+ZDorabTrSebest+ZLivenSebest;

     var Zblock5Sebestv=new Intl.NumberFormat('ru-RU').format(Zblock5Sebest);

     $('#Zblock5smIsx').text(Zblock5Sebestv); 

     var Zblock5smPr=(Zblock5v/ Zblock5Sebest)*100-100;
     Zblock5smPr=Zblock5smPr.toFixed(2);
     $('#Zblock5smPr').text(Zblock5smPr); 
    
    

       }

       else{
         Zblock5v=0;
        NDrenagv2=0;
        NDrenagTr110v=0;
        NShebObrat2v=0;
        Zblock5Sebest=0;
       }





   //==== Итого по этапу ========/// 
   var ZItog1v=Zblock5v+Zblock4v+Zblock3v+Zblock2v+Zblock1v;
   ZItog1v=ZItog1v.toFixed(2);
   var ZItog1vv=new Intl.NumberFormat('ru-RU').format(ZItog1v);
  $('#ZItog1sm').text(ZItog1vv);

   //==== накладные расходы: ========/// 
   var ZNakladv=(ZItog1v/100)*3;
   ZNakladv=ZNakladv.toFixed(2);
   var ZNakladvv=new Intl.NumberFormat('ru-RU').format(ZNakladv);
  $('#ZNakladsm').text(ZNakladvv);

   //==== Всего по смете:: ========/// 
   var ZItogAllv=ZNakladv*1+ZItog1v*1;
   ZItogAllv=ZItogAllv.toFixed(2);
   var ZItogAllvv=new Intl.NumberFormat('ru-RU').format(ZItogAllv);
  $('#ZItogAllsm').text(ZItogAllvv);


 //==== Себестоимость (стоимость без наценки) руб: ========/// 
  var ZItogAllSebest=Zblock5Sebest*1+Zblock4Sebest*1+Zblock3Sebestv*1+Zblock2Sebest*1+Zblock1Sebest*1;
  var ZItogAllSebestv=ZItogAllSebest.toFixed(2);
  ZItogAllSebestv=new Intl.NumberFormat('ru-RU').format(ZItogAllSebestv);
  $('#ZItogAllSebestsm').text(ZItogAllSebestv);

//================  Наценка руб:   ================//
  var ZItogNazenka=ZItogAllv-ZItogAllSebest;
  var ZItogNazenkav=ZItogNazenka.toFixed(2);
  ZItogNazenkav=new Intl.NumberFormat('ru-RU').format(ZItogNazenkav);
  $('#ZItogNazenkasm').text(ZItogNazenkav);

  //================  Наценка %:   ================//
  var ZItogNazenkaPr= (ZItogAllv/ZItogAllSebest)*100-100;
  var ZItogNazenkaPrv=ZItogNazenkaPr.toFixed(2);
  
  $('#ZItogNazenkaPrsm').text(ZItogNazenkaPrv);


  //==== NAME: ========/// 
  var namev=document.getElementById('name').value;  
 $('#namesm').text(namev);

  //==== PHONE ========/// 
  var phonev=document.getElementById('phone').value;  
 $('#phonesm').text(phonev);

 




//==== Итого по Работы ========/// 
var ZItogRabotav=ZShebObrat*1.5*NDrenagv2+ZMontagKol*1.5*4+ZUkladkaDrenagTr*1.5*NDrenagv2+ZUkladkaGeo*1.5*NDrenagv2+ZPrivjzka*1.5
+ZDorabTr*1.5*NDrenagv2+ZGeoTekstU*1.5*NGeoTekstUv2+ZLiven*1.5+ZOtsup200*1.5*NOtsup200v+ZBetonFund*1.5*L28+ZOtsupSh150*1.5*L15*1.1
+ZVjzkaD12*1.5*NVjzkaD12v2+ZGidroFund*1.5*NGidroFundv2+ZfanTr*1.5+ZOpalybka*1.5*NOpalybkav2+ZGilsa*1.5*2;
ZItogRabotav=ZItogRabotav.toFixed(2);
var ZItogRabotavv=new Intl.NumberFormat('ru-RU').format(ZItogRabotav);
$('#ZItogRabotasm').text(ZItogRabotavv);






//==== Итого по Материалы ========/// 
var ZItogMateriakv=ZShebObrat2*1.02*NShebObrat2v+ZBioTyal*1.5+ZKolodez*1.02*4+ZDrenagTr110*1.02*NDrenagTr110v+ZGeo150*1.02*2
+ZBetonM400*1.02*NBetonFundv2+ZKrepeg*1.02*NKrepegv+ZGeoTekst200*1.02*NGeoTekst200v+ZArmatura65*1.02*NVjzkaD12v2+ZMembrama*1.02*NMembramav
+ZPesokN*1.02*NPesokNv+ZKleyPolis*1.02*2+ZDubekTeplo*1.02*0+ZSheb2040*1.02*NSheb2040v+ZfanTr110*1.02*NfanTr110v+ZOtbod110*1.02*2
+Troyn110*1.02*1+Zaglyshrf110*1.02*1+ZTeplo144*1.02*4+ZPiloMat*1.02*NPiloMatv2+ZTruba50*1.02*NTruba50v+ZTrubaGof110*1.02*NTrubaGof110v;
ZItogMateriakv=ZItogMateriakv.toFixed(2);
var ZItogMateriakvv=new Intl.NumberFormat('ru-RU').format(ZItogMateriakv);
$('#ZItogMateriaksm').text(ZItogMateriakvv);


//==== Итого по Механизмы ========/// 
var ZItogMehanizmv=ZNasos*1.5+Zekskovator*1.5+Zekskovator29*1.5+ZKotlovan*2.6*NKotlovanv;

ZItogMehanizmv=ZItogMehanizmv.toFixed(2);
var ZItogMehanizmvv=new Intl.NumberFormat('ru-RU').format(ZItogMehanizmv);
$('#ZItogMehanizmsm').text(ZItogMehanizmvv);


   //==== Итого по Доставка ========/// 
   var ZItogDostavkav=ZbutovkaManip*2*1.5+ZDostavkaTrub2*1.5+DostavkaBioTyal*2*1.5+ZDostavkaArm*1.5+ZDostavkaPilomat*1.5
   +ZDostavkaPenopl*1.5+ZDostavkaRachod*1.5+ZDostavkaBl3Itog*1.5+ZMikser*1.5*NBetonFundv2;
   
 
   ZItogDostavkav=ZItogDostavkav.toFixed(2);
   var ZItogDostavkavv=new Intl.NumberFormat('ru-RU').format(ZItogDostavkav);
  $('#ZItogDostavkasm').text(ZItogDostavkavv);

  };



});














