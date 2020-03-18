var variant, NPercon,NKinder,NNumberAll;
NPercon=0;
NKinder=0;
NNumberAll=0;
variant=1;

$(document).ready(function() {
    // window.$ = jQuery;


    //===== закрываем ввод в поле мощность цифр и отрицательных значений, запятую меняем на точку   =====//


    $('.text').on('input', function() {
        $(this).val($(this).val().replace(/\,/g, '.'));
        $(this).val($(this).val().replace(
            /(?=(\d+\.\d{2})).+|(\.(?=\.))|([^\.\d])|(^\D)/gi, '$1'));
    });


    // ======Только одна точка или одна запятая=====//

    $('.text').keypress(function(e) {
        if (e.currentTarget.value.indexOf(".") != '-1' || e.currentTarget.value.indexOf(",") != '-1') {
            return !(/[.,]/.test(e.key));
        }
        // var powersvv = document.getElementById('powers').value;
        // powersvv=+powersvv;
        // if (powersvv>=999){
        //     powersvv=999;
        //     document.getElementById('powers').value=powersvv;
        // }
    });


    $('#vanna').addClass('active');

    // ====Открытие - закрытие блоков при выборе пункта меню====//

    $('#vanna').click(function (){
        $('#vanna').addClass('active');
        $('#closet').removeClass('active');
        $('#pol').removeClass('active');
        $('#kuxen').removeClass('active');
        $('#plitka').removeClass('active');

        var block = $(this).parents('.calculator');
        block.find('.calc_block_vanna').show();
        block.find('.calc_block_closet').hide();
        block.find('.calc_block_pol').hide();
        block.find('.calc_block_kuxen').hide();
        block.find('.calc_block_plitka').hide();
        block.find('.calc_blocks_itog_vanna').show();
        block.find('.calc_blocks_itog_closet').hide();
        block.find('.calc_blocks_itog_pol').hide();
        block.find('.calc_blocks_itog_kuxen').hide();
        block.find('.calc_blocks_itog_plitka').hide();
        var block2=$('.calc_block_date_err');
        block2.hide();
        variant=1;
        //Zena ();

    });


    $('#closet').click(function (){
        $('#closet').addClass('active');
        $('#vanna').removeClass('active');
        $('#pol').removeClass('active');
        $('#kuxen').removeClass('active');
        $('#plitka').removeClass('active');
        var block = $(this).parents('.calculator');
        block.find('.calc_block_vanna').hide();
        block.find('.calc_block_closet').show();
        block.find('.calc_block_pol').hide();
        block.find('.calc_block_kuxen').hide();
        block.find('.calc_block_plitka').hide();
        block.find('.calc_blocks_itog_vanna').hide();
        block.find('.calc_blocks_itog_closet').show();
        block.find('.calc_blocks_itog_pol').hide();
        block.find('.calc_blocks_itog_kuxen').hide();
        block.find('.calc_blocks_itog_plitka').hide();
        var block2=$('.calc_block_err_closet');
        block2.hide();
        variant=2;
      //  Zena ();

    });

    $('#pol').click(function (){
        $('#pol').addClass('active');
        $('#closet').removeClass('active');
        $('#vanna').removeClass('active');
        $('#kuxen').removeClass('active');
        $('#plitka').removeClass('active');
        var block = $(this).parents('.calculator');
        block.find('.calc_block_vanna').hide();
        block.find('.calc_block_closet').hide();
        block.find('.calc_block_pol').show();
        block.find('.calc_block_kuxen').hide();
        block.find('.calc_block_plitka').hide();
        block.find('.calc_blocks_itog_vanna').hide();
        block.find('.calc_blocks_itog_closet').hide();
        block.find('.calc_blocks_itog_pol').show();
        block.find('.calc_blocks_itog_kuxen').hide();
        block.find('.calc_blocks_itog_plitka').hide();
        variant=3;
       // Zena ();

    });

    $('#kuxen').click(function (){
        $('#kuxen').addClass('active');
        $('#closet').removeClass('active');
        $('#vanna').removeClass('active');
        $('#pol').removeClass('active');
        $('#plitka').removeClass('active');
        var block = $(this).parents('.calculator');
        block.find('.calc_block_vanna').hide();
        block.find('.calc_block_closet').hide();
        block.find('.calc_block_pol').hide();
        block.find('.calc_block_kuxen').show();
        block.find('.calc_block_plitka').hide();
        block.find('.calc_blocks_itog_vanna').hide();
        block.find('.calc_blocks_itog_closet').hide();
        block.find('.calc_blocks_itog_pol').hide();
        block.find('.calc_blocks_itog_kuxen').show();
        block.find('.calc_blocks_itog_plitka').hide();
        variant=4;
       // Zena ();

    });

    $('#plitka').click(function (){
        $('#plitka').addClass('active');
        $('#closet').removeClass('active');
        $('#vanna').removeClass('active');
        $('#pol').removeClass('active');
        $('#kuxen').removeClass('active');
        var block = $(this).parents('.calculator');
        block.find('.calc_block_vanna').hide();
        block.find('.calc_block_closet').hide();
        block.find('.calc_block_pol').hide();
        block.find('.calc_block_kuxen').hide();
        block.find('.calc_block_plitka').show();
        block.find('.calc_blocks_itog_vanna').hide();
        block.find('.calc_blocks_itog_closet').hide();
        block.find('.calc_blocks_itog_pol').hide();
        block.find('.calc_blocks_itog_kuxen').hide();
        block.find('.calc_blocks_itog_plitka').show();
        variant=5;
       // Zena ();


    });
    // ======Обработка нажатия кнопки Рассчитать=====//
    $('#price').click(function (){
        var l1=document.getElementById('stenav1').value;
        var l2=document.getElementById('stenav2').value;
        var l3=document.getElementById('stenav3').value;
        var l4=document.getElementById('stenav4').value;
        var hv=document.getElementById('hv1').value;

        if ((l1==0)||(l2==0)||(l3==0)||(l4==0)||(hv==0))
        {
            var block2=$('.calc_block_date_err');
            block2.show();
        }
        else{
            var block2=$('.calc_block_date_err');
            block2.hide();
        }

        var lc1=document.getElementById('stenacloset1').value;
        var lc2=document.getElementById('stenacloset2').value;
        var lc3=document.getElementById('stenacloset3').value;
        var lc4=document.getElementById('stenacloset4').value;
        var hcv=document.getElementById('hcloset1').value;

        if ((lc1==0)||(lc2==0)||(lc3==0)||(lc4==0)||(hcv==0))
        {
            var block2=$('.calc_block_err_closet');
            block2.show();
        }
        else{
            var block2=$('.calc_block_err_closet');
            block2.hide();
        }

        var spol=document.getElementById('spol').value;
        var hpol=document.getElementById('hpol').value;

        if ((spol==0)||(hpol==0))
        {
            var block2=$('.calc_block_err_pol');
            block2.show();
        }
        else{
            var block2=$('.calc_block_err_pol');
            block2.hide();
        }

        var skuxen=document.getElementById('skuxen').value;
        var hkuxen=document.getElementById('hkuxen').value;

        if ((skuxen==0)||(hkuxen==0))
        {
            var block2=$('.calc_block_err_kuxen');
            block2.show();
        }
        else{
            var block2=$('.calc_block_err_kuxen');
            block2.hide();
        }

        var lplitk1=document.getElementById('splitka1').value;
        var hplitk1=document.getElementById('splitka2').value;

        if ((lplitk1==0)||(hplitk1==0)) {
            var block2 = $('.calc_block_err_plitka');
            block2.show();
        }
        else{
            var block2 = $('.calc_block_err_plitka');
            block2.hide();
        }



        Zena ();
    });


    // ======Общая функция расчета размеров и цены=====//
    function Zena (){

        // ======Расчет размеров и цены для ванны=====//
      if (variant==1){

          var l1=document.getElementById('stenav1').value;
          var l2=document.getElementById('stenav2').value;
          var l3=document.getElementById('stenav3').value;
          var l4=document.getElementById('stenav4').value;
          var hv=document.getElementById('hv1').value;



          // ======Расчет периметра=====//

          l1=+l1;
          l2=+l2;
          l3=+l3;
          l4=+l4;
          var Pvanna=l1+l2+l3+l4;
          if ((l1==0)&&(l2==0)&&(l3==0)&&(l4==0))
          {
              Pvanna=0;
          }

          Pvanna=Pvanna.toFixed(2);
          $('#pvanna').text(Pvanna);

          // ======Расчет площади плитки стена=====//
          // var hv=document.getElementById('hv1').value;
          hv=+hv;
          var Svanna=Pvanna*hv;
          // ======Расчет площади двери=====//
          var ldv=document.getElementById('sdv').value;
          ldv=+ldv;
          var hdv=document.getElementById('hdv').value;
          hdv=+hdv;
          var sdv=ldv*hdv;
          // ======Расчет площади за ванной=====//
          var sdzv=document.getElementById('sdzv').value;
          sdzv=+sdzv;
          var ldzv=document.getElementById('ldzv').value;
          ldzv=+ldzv;
          var hdzv=document.getElementById('hdzv').value;
          hdzv=+hdzv;
          var sdopzv=(2*sdzv+ldzv)*hdzv;


         // ======Расчет площади окна=====//
          var soknov=document.getElementById('soknov').value;
          soknov=+soknov;
          var loknov=document.getElementById('loknov').value;
          loknov=+loknov;
          var soknovdop=soknov*loknov;

          // ======Расчет площади доп минус=====//
          var sdopminusv=document.getElementById('sdopminusv').value;
          sdopminusv=+sdopminusv;
          var ldopminusv=document.getElementById('ldopminusv').value;
          sdopminusv=+ldopminusv;
          var Sdopminusvr=sdopminusv*ldopminusv;


          // ======Расчет площади доп плюс=====//
          var sdopplusv=document.getElementById('sdopplusv').value;
          sdopplusv=+sdopplusv;
          var ldopplusv=document.getElementById('ldopplusv').value;
          ldopplusv=+ldopplusv;
          var Sdopplusvr=sdopplusv*ldopplusv;

          // ======Расчет общей площади с  доп элементами=====//
          Svanna=Svanna-sdv-sdopzv-soknovdop-Sdopminusvr+Sdopplusvr;
          Svanna=Svanna+(Svanna/100)*5;
          Svanna=Svanna.toFixed(2);
          $('#NplvannaStena').text(Svanna);

          // ======Расчет площади пола =====//
          var SvannaPol=((l1+l3)/2)*((l2+l4)/2);
          SvannaPol=SvannaPol+SvannaPol*0.05;
          SvannaPol=SvannaPol.toFixed(2);
          $('#NplvannaPol').text(SvannaPol);

          // ======Расчет стоимости плитки =====//
          var zvsten=document.getElementById('zvsten').value;
          zvsten=+zvsten;
          var ZvstenV=zvsten*Svanna;
          ZvstenV=ZvstenV.toFixed(2);
          $('#ZvannaStena').text(ZvstenV);

          var zvpol=document.getElementById('zvpol').value;
          zvpol=+zvpol;
          var ZvpolV=zvpol*SvannaPol;
          ZvpolV=ZvpolV.toFixed(2);
          $('#ZvannaStena').text(ZvstenV);

          $('#ZvannaPol').text(ZvpolV);

          if ((l1==0)||(l2==0)||(l3==0)||(l4==0)||(hv==0))
          {
              var block2=$('.calc_block_date_err');
              block2.show();
              Pvanna=0;
              $('#pvanna').text(Pvanna);
              Svanna=0;
              $('#NplvannaStena').text(Svanna);
              SvannaPol=0;
              $('#NplvannaPol').text(SvannaPol);
              ZvstenV=0;
              $('#ZvannaStena').text(ZvstenV);
              SvannaPol=0;
              $('#NplvannaPol').text(SvannaPol);
               ZvstenV=0;
              $('#ZvannaStena').text(ZvstenV);
              ZvpolV=0;
              $('#ZvannaPol').text(ZvpolV);
          }
          else{
              var block2=$('.calc_block_date_err');
              block2.hide();
          }
      }


        // ======Расчет размеров и цены для туалета=====//
        if (variant==2){

            var lc1=document.getElementById('stenacloset1').value;
            var lc2=document.getElementById('stenacloset2').value;
            var lc3=document.getElementById('stenacloset3').value;
            var lc4=document.getElementById('stenacloset4').value;
            var hcv=document.getElementById('hcloset1').value;


            // ======Расчет периметра=====//

            lc1=+lc1;
            lc2=+lc2;
            lc3=+lc3;
            lc4=+lc4;
            var Pcloset=lc1+lc2+lc3+lc4;
            if ((lc1==0)&&(lc2==0)&&(lc3==0)&&(lc4==0))
            {
                Pcloset=0;
            }

            Pcloset=Pcloset.toFixed(2);
            $('#pcloset').text(Pcloset);

            // ======Расчет площади плитки стена=====//
            // var hv=document.getElementById('hv1').value;
            hcv=+hcv;
            var Scloset=Pcloset*hcv;
            // ======Расчет площади двери=====//
            var ldc=document.getElementById('sdcloset').value;
            ldc=+ldc;
            var hdc=document.getElementById('hdcloset').value;
            hdc=+hdc;
            var sdc=ldc*hdc;


            // ======Расчет общей площади с  доп элементами=====//
            Scloset=Scloset-sdc;
            Scloset=Scloset+(Scloset/100)*5;
            Scloset=Scloset.toFixed(2);
            $('#NPlclosetStena').text(Scloset);



            // ======Расчет площади пола =====//
            var SclosetPol=((lc1+lc3)/2)*((lc2+lc4)/2);
            SclosetPol=SclosetPol+SclosetPol*0.05;
            SclosetPol=SclosetPol.toFixed(2);
            $('#NPlclosetPol').text(SclosetPol);

            // ======Расчет стоимости плитки =====//
            var zclosetsten=document.getElementById('zclosetsten').value;
            zclosetsten=+zclosetsten;
            var ZclosetstenV=zclosetsten*Scloset;
            ZclosetstenV=ZclosetstenV.toFixed(2);
            $('#ZPlclosetStena').text(ZclosetstenV);

            var zclosetpol=document.getElementById('zclosetpol').value;
            zclosetpol=+zclosetpol;
            var ZclosetpolV=zclosetpol*SclosetPol;
            ZclosetpolV=ZclosetpolV.toFixed(2);
            $('#ZPlclosetPol').text(ZclosetpolV);

            if ((lc1==0)||(lc2==0)||(lc3==0)||(lc4==0)||(hcv==0))
            {
                var block2=$('.calc_block_err_closet');
                block2.show();
                Pcloset=0;
                $('#pcloset').text(Pcloset);

                Scloset=0;
                $('#NPlclosetStena').text(Scloset);

                SclosetPol=0;
                $('#NPlclosetPol').text(SclosetPol);

                ZclosetstenV=0;
                $('#ZPlclosetStena').text(ZclosetstenV);

                ZclosetpolV=0;
                $('#ZPlclosetPol').text(ZclosetpolV);
             }
            else{
                var block2=$('.calc_block_err_closet');
                block2.hide();
            }
        }

        // ======Расчет размеров и цены для пола=====//
        if (variant=3){

            var spolv=document.getElementById('spol').value;
            var hpol=document.getElementById('hpol').value;

            spolv=+spolv;
            hpol=+hpol;


            // ======Расчет площади плитки =====//
            // var hv=document.getElementById('hv1').value;

            var Spol=spolv*hpol;

            // ======Расчет площади +=====//
            var LPolDopPlus=document.getElementById('spokdopplus').value;
            LPolDopPlus=+LPolDopPlus;
            var HPolDopPlus=document.getElementById('hpokdopplus').value;
            HPolDopPlus=+HPolDopPlus;
            var SPolDopPlus=LPolDopPlus*HPolDopPlus;

            // ======Расчет площади -=====//
            var LPolDopMinus=document.getElementById('spokdopminus').value;
            LPolDopMinus=+LPolDopMinus;
            var HPolDopMinus=document.getElementById('hpokdopminus').value;
            HPolDopMinus=+HPolDopMinus;
            var SPolDopMinus=HPolDopMinus*LPolDopMinus;


            // ======Расчет общей площади с  доп элементами 5%=====//
            var Spol5=Spol+SPolDopPlus-SPolDopMinus;
            Spol5=Spol5+(Spol5/100)*5;
            Spol5=Spol5.toFixed(2);
            $('#NPlPolPol').text(Spol5);

            // ======Расчет общей площади с  доп элементами 10%=====//
            var Spol10=Spol+SPolDopPlus-SPolDopMinus;
            Spol10=Spol10+(Spol10/100)*10;
            Spol10=Spol10.toFixed(2);
            $('#NPlPolPolDiag').text(Spol10);


            // ======Расчет стоимости плитки =====//
            var Zpolpol=document.getElementById('zpol').value;
            Zpolpol=+Zpolpol;

            var ZPol5=Spol5*Zpolpol;
            ZPol5=ZPol5.toFixed(2);
            $('#ZPlPolPol').text(ZPol5);

            var ZPol10=Spol10*Zpolpol;
            ZPol10=ZPol10.toFixed(2);
            $('#ZPlPolPolDiag').text(ZPol10);


            if ((spolv==0)||(hpol==0))
            {
                var block2=$('.calc_block_err_pol');
                block2.show();
                Spol5=0;
                $('#NPlPolPol').text(Spol5);

                Spol10=0;
                $('#NPlPolPolDiag').text(Spol10);

                ZPol5=0;
                $('#ZPlPolPol').text(ZPol5);

                ZPol10=0;
                $('#ZPlPolPolDiag').text(ZPol10);
            }
            else{
                var block2=$('.calc_block_err_pol');
                block2.hide();
            }
        }


         // ======Расчет размеров и цены для кухни=====//
        if (variant=4){

            var lkuxen=document.getElementById('skuxen').value;
            var hkuxen=document.getElementById('hkuxen').value;

            lkuxen=+lkuxen;
            hkuxen=+hkuxen;


            // ======Расчет площади плитки =====//
            var Skuxen=lkuxen*hkuxen;

            // ======Расчет площади +=====//
            var LKuxenDopPlus=document.getElementById('skuxendopplus').value;
            LKuxenDopPlus=+LKuxenDopPlus;
            var HKuxenDopPlus=document.getElementById('hkuxendopplus').value;
            HKuxenDopPlus=+HKuxenDopPlus;
            var SKuxenDopPlus=HKuxenDopPlus*LKuxenDopPlus;


            // ======Расчет площади -=====//
            var LKuxenDopMinus=document.getElementById('skuxendopminus').value;
            LKuxenDopMinus=+LKuxenDopMinus;
            var  HKuxenDopMinus=document.getElementById('hkuxenkdopminus').value;
            HKuxenDopMinus=+HKuxenDopMinus;
            var SKuxenDopMinus=HKuxenDopMinus*LKuxenDopMinus;


            // ======Расчет общей площади с  доп элементами 5%=====//
            Skuxen=Skuxen+SKuxenDopPlus-SKuxenDopMinus;

            Skuxen=Skuxen+(Skuxen/100)*5;
            Skuxen=Skuxen.toFixed(2);
            $('#NPlkuxen').text(Skuxen);



            // ======Расчет стоимости плитки =====//
            var Zkuxen=document.getElementById('zkuxen').value;
            Zkuxen=+Zkuxen;

            var Zkuxenv=Zkuxen*Skuxen;
            Zkuxenv=Zkuxenv.toFixed(2);
            $('#ZPlkuxen').text(Zkuxenv);

            if ((lkuxen==0)||(hkuxen==0))
            {
                var block2=$('.calc_block_err_kuxen');
                block2.show();

                Skuxen=0;
                $('#NPlkuxen').text(Skuxen);

                Skuxen=0;
                $('#NPlkuxen').text(Skuxen);


            }
            else{
                var block2=$('.calc_block_err_kuxen');
                block2.hide();
            }
        }



      // ======Расчет плитки =====//
        if (variant=5){

            var lplitk1=document.getElementById('splitka1').value;
            var hplitk1=document.getElementById('splitka2').value;
            var Nplitka=document.getElementById('Nplitka').value;
            var splitkaV=document.getElementById('splitkaV').value;
            var ZplitkaV=document.getElementById('ZplitkaV').value;

            lplitk1=+lplitk1/100;
            hplitk1=+hplitk1/100;
            Nplitka=+Nplitka;
            splitkaV=+splitkaV;
            ZplitkaV=+ZplitkaV;


            // ======Расчет площади 1плитки =====//
            var SPlitka1=lplitk1*hplitk1;

            var NPlMetr=1/SPlitka1;

            NPlMetr=NPlMetr.toFixed(2);
            $('#NPlMetr').text(NPlMetr);




            // ======Расчет площади N=====//
            //var Nplitka=document.getElementById('Nplitka').value;
            Nplitka=+Nplitka;

            var Nplitkas=Nplitka*SPlitka1;

            Nplitkas=Nplitkas.toFixed(2);
            $('#NMetr').text(Nplitkas);



            // ======Расчет площади S =====//
            var Spitpaall=document.getElementById('splitkaV').value;
            Spitpaall=+Spitpaall;

            var NplitaAll=Spitpaall/SPlitka1;

            NplitaAll=NplitaAll.toFixed(2);
            $('#NPlAll').text(NplitaAll);


            // ======Расчет стоимости 1 плитки=====//

            var Zpitpa1m=document.getElementById('ZplitkaV').value;
            Zpitpa1m=+Zpitpa1m;

            var Zpitpa1=Zpitpa1m*SPlitka1;

            Zpitpa1=Zpitpa1.toFixed(2);
            $('#Z1Pl').text(Zpitpa1);




            if ((lplitk1==0)||(hplitk1==0))
            {
                var block2=$('.calc_block_err_plitka');
                block2.show();

                NPlMetr=0;
                $('#NPlMetr').text(NPlMetr);

                Nplitkas=0;
                $('#NMetr').text(Nplitkas);

                NplitaAll=0;
                $('#NPlAll').text(NplitaAll);

                Zpitpa1=0;
                $('#Z1Pl').text(Zpitpa1);


            }
            else{
                var block2=$('.calc_block_err_plitka');
                block2.hide();
            }
        }




    }










    function DelNum(element) {

        var block2 = $(element).parents('.adults-block').find('.adults-num');
        var NP = parseFloat($(block2).val());
        NP = NP - 1;
        if (NP <= 0) {
            NP = 0;
        }
        $(block2).val(NP);
        AllPercon();
    }




    window.DelNum = DelNum;






     function DelNumer(element) {

         var block4=$(element).parents('.calc_blocks_nomer');
         block4.remove();
         AllPercon();
         CloseBtn();
         NumberBlock();
     }

      window.DelNumer=DelNumer;



  });











