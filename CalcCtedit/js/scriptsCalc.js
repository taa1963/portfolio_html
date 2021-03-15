var  sort_selv,itogpl,pr;
sort_selv=1;
itogpl=0;
pr=0;

//Zena=0;
//KchoseKadstrV=0;


$(document).ready(function() {

    datav();
    datav2();
    datam();
    datam2();
//=======Определние текущего года========//
    function datav() {
        var Y = new Date();
        jar = Y.getFullYear().toString();
    }

    function datav2() {
        var j=document.getElementsByClassName('years').length;
        for (var i = 0; i < j; i++) {
            var jarv=document.getElementsByClassName('years')[i].value;
            if (jarv==jar){
                document.getElementsByClassName('years')[i].selected = true;
            }
        }
    }
    //=======Определние текущего месяца========//
    function datam() {
        var Y = new Date();
        mon = Y.getMonth().toString();
        //alert(mon);
    }

    function datam2() {
        var j=document.getElementsByClassName('month').length;
        for (var i = 0; i < j; i++) {
            var mothv=document.getElementsByClassName('month')[i].value;
            if (mothv==mon){
                document.getElementsByClassName('month')[i].selected = true;
            }
        }
    }




    //=======Синхронная смена валюты ========//

    //var valut=document.getElementById('summ_sel').value;
    var valut='руб.';



   // document.getElementById('komis1_sel_opt').innerHTML=valut;
   // document.getElementById('komis2_sel_opt').innerHTML=valut;

    $("#summ_sel").click(function () {
       // var valut=document.getElementById('summ_sel').value;
        var valut='руб.';
       // document.getElementById('komis1_sel_opt').innerHTML=valut;
      //  document.getElementById('komis2_sel_opt').innerHTML=valut;
    });



    $('#sort_sel1').click(function () {
        sort_selv=1;

        Zena();


    });
    $('#sort_sel2').click(function () {
        sort_selv=2;

        Zena();


    });



    //=======Нажатие кнопки Рассчитать ========//
    $("#calc_price").click(function () {
        Zena();

    });

    function Zena() {

        var block = $(this).parents('.calculator');
        block.find('.calc_block_itog_table').show();
        block.find('.calc_block_grafik').show();
        block.find('.calc_block_itog_text').hide();

        $('.calc_block_grafik').addClass('active');
        $('.calc_block_diagr_text').addClass('active');
        $('.calc_block_diagr2').addClass('active');


        del_sek();


        $('.diagr2').remove();
        $('.calc_block_diagr2_line_date').remove();

        //calc_block_diagr2_line_date

        //=====вычисление  ежемесячного платежа и переплат======///


       // var sort_selv= document.getElementById('sort_sel').value;
        //sort_selv=+sort_selv;

        if (sort_selv==1){



            //=====процентная ставка в месяц======///
            var mont_cr=document.getElementById('period').value;

            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            mont_cr=+mont_cr;
            var n =mont_cr*mont_ed;

           // var period =document.getElementById('stavka_sel').value;
            var period =2;

            period=+period;
            var stav =document.getElementById('stavka').value;
            stav=+stav;

            if (period==2){
                var pr_stavka = stav/12;
            }
            else
            {
                var pr_stavka = stav;
            }
            pr_stavka=pr_stavka/100;
            //pr_stavka=pr_stavka.toFixed(3);

            //=======Ежемесячный аннуитетный платеж=====//
            pr_stavka=+pr_stavka;
            var kpr1z=1+pr_stavka;
            var kpr1=Math.pow(kpr1z,n);
            var kpr2z=(pr_stavka/(kpr1-1));
            var kpr2=(pr_stavka + kpr2z);
            var pl_mothz =document.getElementById('summ').value;
            pl_mothz=+pl_mothz;
            var pl=pl_mothz*kpr2;
            var pl1=pl;

            //pl=Math.round(pl);
            pl=pl.toFixed(2);
            //var valut=document.getElementById('summ_sel').value;
            var valut='руб.';


            var plv=pl+''+valut;

            $('#itog_pl').text(plv);



            //======Переплата по процентам за кредит=======//
            var mont_cr=document.getElementById('period').value;
            mont_cr=+mont_cr;
            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            var summ_kr=document.getElementById('summ').value;
            summ_kr=+summ_kr;
            var nr;
            if (mont_ed==1){nr=mont_cr}
            else{
                nr=mont_cr*12;
            }
            var sum_perepl=pl1*nr-summ_kr;
            pr=sum_perepl;

            sum_perepl=sum_perepl.toFixed(2);


            var sum_pereplv=sum_perepl+' '+valut;

            $('#pr').text(sum_pereplv);


             itogpl=pl1*nr-summ_kr+summ_kr;
            itogpl=itogpl.toFixed(2);
            $('#itogpl').text(itogpl);


            var osnsp=summ_kr+' '+'руб.';
            $('#kros').text(osnsp);
            var osnPrpz=(summ_kr*100)/itogpl;
            osnPrpz=Math.round(osnPrpz);

            $('#krosProz').text(osnPrpz);
            var prd2=sum_pereplv+' '+"руб.";
            $('#perepld2').text(prd2);

            var prozd2=100-osnPrpz;
            $('#prozd2').text(prozd2);

            var prdeg=(prozd2*36)/10;
            //alert(prdeg);
            prdeg='rotate'+'('+prdeg+'deg'+')';

            //rotate(32deg)
            //alert(prdeg);
            //$('.pie').css({'--sq-r':prdeg});

            //var piebl=document.getElementsByClassName('pie');
           // $(piebl).style.setProperty('--sq-r',prdeg);

            document.getElementById('pie').style.setProperty('--sq-r',prdeg);
           // $('.pie').css({'width':'150px'});
            //document.getElementsByClassName("pie").style.setProperty('--sq-r', prdeg);



            //=======График погащения:=======//


            var mont_cr=document.getElementById('period').value;

            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            mont_cr=+mont_cr;
            var n =mont_cr*mont_ed;
            //alert(n);


            var summ_dolg1 = document.getElementById("summ").value;
            summ_dolg1=+summ_dolg1;


            var summ_dolgpr1 =sum_perepl
            summ_dolgpr1=+summ_dolgpr1;

            var summ_dolg=summ_dolg1;


            summ_dolg=+summ_dolg;


            for (var i = 1; i < n+1; i++) {	 var newSection = $('<tr class="block_uv"></tr>');
                newSection.html(

                    '<td style="width:10%;">  <input type="text" class="sel_num"  value="0" readonly="readonly"> </td>\n <td style="width:18%;"> <input type="text" class="date_num"  value="0" readonly="readonly"> </td>\n <td  style="width:18%"> <input type="text" class="sum_plgr"  value="0" readonly="readonly"> </td>\n <td style="width:18%;"> <input type="text" class="osn_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:18%"> <input type="text" class="proz_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:18%"> <input type="text" class="ost_dolg"  value="0" readonly="readonly"> </td>\n>'
                );
                $('#table_uv').append(newSection);
            }


            for (var i = 1; i < n+1; i++) {
                var newSection = $('<div class="diagr2"></div>');
            newSection.html(
                '<div class="diagr"></div>' +
                '<div class="popup_1_2">' +
                '<p><input type="text" class="d2"  value="0" readonly="readonly">  </p>' +
                '<p> Платеж: <input type="text" class="pl2"  value="0" readonly="readonly"> </p>' +
                '<p><div class="rectangle"></div>Основной долг: <input type="text" class="osnov2"  value="0" readonly="readonly"></p>' +
                '<p><div class="rectangle2"></div>Проценты:<input type="text" class="prg2"  value="0" readonly="readonly"></p>' +
                '</div>' +
                '</div>'
            );

                $('#wrapper').append(newSection);

            }
            var v1=(80/n);
            //var vd=v1*0.8;
            var vd=v1;
            var vm=v1*0.2;
            //var vm=v1*0.2-1;
            vd=vd+'%';
            vm=vm+'%';


            //$('.diagr').css({'width':vd});
            $('.diagr2').css({'width':vd});
            $('.diagr').css({'margin-right':vm});


            var st_sum = document.getElementsByClassName( "sel_num" ); // находим элементы с классом
            var plau = document.getElementsByClassName( "sum_plgr" ); // находим элементы с классом
            var plgr=pl1.toFixed(2);


            var years_grn = document.getElementById("year_sel").value;  // находим выбранный год
            var month_grn =document.getElementById("month_sel").value;  // находим выбранный месяц
            var n_moth = +month_grn;
            years_grn=+years_grn;
            var nyears_grn=0;
            var date_numgr= document.getElementsByClassName( "date_num" ); // находим элементы с классом


            var d2v= document.getElementsByClassName( "d2" ); // находим элементы с классом
            var diagr= document.getElementsByClassName( "diagr" ); // находим элементы с классом
            var pl2v= document.getElementsByClassName( "pl2" ); // находим элементы с классом
            var osnov2v=document.getElementsByClassName( "osnov2" ); // находим элементы с классом
            var prg2v=document.getElementsByClassName( "prg2" ); // находим элементы с классом

            var pr_stavka = document.getElementById("stavka").value;
            var pr_stavgr= document.getElementsByClassName( "proz_dolg" ); // находим элементы с классом

            var osn_plgr= document.getElementsByClassName( "osn_dolg" ); // находим элементы с классом
            var summ_dolggr=document.getElementsByClassName("ost_dolg" ); // находим элементы с классом
            //console.log(summ_dolggr);

            var komis_gr=document.getElementsByClassName("komis" ); // находим элементы с классом Ежемесячные комиссии

            var z_kom2 = 0;

            var k_kom2 = '';


            var nn=0;



            for (var i = 0; i < n; i++) {
                // =====Заполнение номера платежа======///
                var num=i+1;
                st_sum[i].value=num; // Заполнение номера платежа

                // ====Заполнение date платежа====//
                var month_gr;

                if (n_moth==0){
                    month_gr= "январь";
                }
                if (n_moth==1){
                    month_gr= "февраль";
                }
                if (n_moth==2){
                    month_gr= "март";
                }

                if (n_moth==3){
                    month_gr= "апрель";
                }
                if (n_moth==4){
                    month_gr= "май";
                }
                if (n_moth==5){
                    month_gr= "июнь";
                }
                if (n_moth==6){
                    month_gr= "июль";
                }
                if (n_moth==7){
                    month_gr= "август";
                }
                if (n_moth==8){
                    month_gr= "сентябрь";
                }
                if (n_moth==9){
                    month_gr= "октябрь";
                }
                if (n_moth==10){
                    month_gr= "ноябрь";
                }

                if (n_moth==11){
                    month_gr= "декабрь";
                }

                if ((n_moth==0)&& (nyears_grn>0))  {
                    years_grn=years_grn+1;
                }

                n_moth=n_moth+1;

                if (n_moth>11)  {
                    n_moth=0;
                    nyears_grn=nyears_grn+1;


                    var newSection = $('<div class="calc_block_diagr2_line_date" "></div>');
                    newSection.html(

                        '<p><span class="ddg" id="ddg"></span></p>'+
                        '<div class="lineV"></div>'

                    );
                    //$('#ddg').text(years_grn);
                    $('.wrapper').append(newSection);
                    //nn=nn+1;

                    var lin1=document.getElementsByClassName("calc_block_diagr2_line_date" ); // находим элементы с классом
                    var vdl=((80/n)*1.2)*(i+1);
                    vdl=vdl+'%';


                    $(lin1[nn]).css({'margin-left':vdl});
                    //console.log(lin1)
                    //$('.calc_block_diagr2_line_date').css({'margin-left':vdl});
                    //nn=nn+1;
                    // var jard=document.getElementById('year_sel').value;
                    var ddg=document.getElementsByClassName("ddg" ); // находим элементы с классом
                    $(ddg[nn]).text(years_grn);
                    //jard=jard*1+1;
                    //alert(jard);
                    nn=nn+1;
                }



                var date_pl=month_gr+ ' '+' , '+''+years_grn;

                date_numgr[i].value=date_pl;// Заполнение date платежа
                d2v[i].value=date_pl;// Заполнение date платежа



                plgr=+plgr;

                var kom2_grv;
                kom2_grv=0;

                if (k_kom2==1){
                    kom2_grv= summ_dolg1*z_kom2/100;
                }

                if (k_kom2==2){
                    var summ_pr= (summ_dolg*pr_stavka/100)/12;
                    var osn_plv=plgr-summ_pr;
                    osn_plv=+osn_plv;

                    var summ_dolg1=summ_dolg-osn_plv;
                    // console.log(summ_dolg);
                    summ_dolg1=+summ_dolg1;
                    kom2_grv= summ_dolg1*z_kom2/100;
                }

                if (k_kom2==3){
                    z_kom2=+z_kom2;
                    kom2_grv=z_kom2;
                }
                var kom2_grvr=kom2_grv;
                kom2_grv=kom2_grv.toFixed(2);



                // === Заполнение уточненной суммы платежа =====//

                var plgrv;
                plgrv=plgr+kom2_grvr;

                plgrv=plgrv.toFixed(2);
                plau[i].value=plgrv;  // Заполнение суммы платежа
                plgr=+plgr;
                var pli=plgr+' '+'руб.';

                pl2v[i].value=pli;  // Заполнение суммы платежа в выпадающем списке



                // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg*pr_stavka/100)/12;
                summ_pr=summ_pr.toFixed(2);

                pr_stavgr[i].value=summ_pr;
                var summ_prd=summ_pr+' '+'руб.';

                prg2v[i].value=summ_prd;

                //=======Заполнение Ежемесячные комиссии====//

                var osn_plv=plgr-summ_pr;
                osn_plv=+osn_plv;
                osn_plv=osn_plv.toFixed(2);
                osn_plgr[i].value=osn_plv; // Заполнение Ежемесячные комиссии
                var osn_plvd=osn_plv+' '+'руб.';

                osnov2v[i].value=osn_plvd;

                //=======Заполнение остатка задолженности======//
                var summ_dolg=summ_dolg-osn_plv;
                // console.log(summ_dolg);
                summ_dolg=+summ_dolg;
                summ_dolg=summ_dolg.toFixed(2);
                summ_dolggr[i].value=summ_dolg; // Заполнение остатка задолженности

                var prh1= summ_pr/plgrv;
                //var prh= prh1*230;
                var prh= prh1*20;
                prh=prh+'em';
                //var prh= (plgrv/100)*summ_pr;


                var dd2=diagr[i];

                $(dd2).css('height',prh);
            }



            //=======Итоговая переплата с учетом комиссий:=======//
            var prstav_moth_ed=0;
            var itog_pereplat=sum_perepl;

            if (prstav_moth_ed==1){
                var pr_kom=0;
                pr_kom=pr_kom/100;
                var summ_d=document.getElementById('summ').value;
                var pr_summ=pr_kom*n*summ_d;
           }

            var ed_moth_kom='';

            if (ed_moth_kom==1){
                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;

            }
            if (ed_moth_kom==3){
                var pr_moth_kom=0;

                //var per_kom2=pr_moth_kom*n;
                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;
            }

            if (ed_moth_kom==2) {

                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;
            }

            var ed_kom1='';
            var z_kom1=0;
            z_kom1=+z_kom1;

            if (ed_kom1==2){
                itog_pereplat=itog_pereplat+ z_kom1;
            }

            if (ed_kom1==1){
                z_kom1=z_kom1/100;
                z_kom1=z_kom1*summ_dolg1;

                itog_pereplat=itog_pereplat+ z_kom1;
            }


            itog_pereplat=Math.round(itog_pereplat);

            var itod_pereplv=itog_pereplat+' '+valut;

            $('#itog_pr').text(itod_pereplv);



            //=====вычисление эффективной процентной ставки======///
            var S0=document.getElementById('summ').value;


            var pr_S=itod_pereplv;

            // var pr_S=document.getElementById('pereplat').value;
            var pr_S=itog_pereplat;
            S0=+S0;
            pr_S=+pr_S;

            var S=S0+pr_S;


            var ef_st= (((S/S0)-1))*100;



            ef_st=ef_st.toFixed(2);


            //var valut=document.getElementById('summ_sel').value;
            var valut='руб.';


            var ef_stv=ef_st+''+valut;

            $('#itog_stav').text(ef_st);





        }


        if (sort_selv==2){



            //=====процентная ставка в месяц======///
            var mont_cr=document.getElementById('period').value;

            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            mont_cr=+mont_cr;
            var n =mont_cr*mont_ed;

            var period =2;
            period=+period;
            var stav =document.getElementById('stavka').value;
            stav=+stav;

            if (period==2){
                var pr_stavka = stav/12;
            }
            else
            {
                var pr_stavka = stav;
            }
            pr_stavka=pr_stavka/100;
            //pr_stavka=pr_stavka.toFixed(3);

            // //=======Ежемесячный аннуитетный платеж=====//
            pr_stavka=+pr_stavka;
            var kpr1z=1+pr_stavka;
            var kpr1=Math.pow(kpr1z,n);
            var kpr2z=(pr_stavka/(kpr1-1));
            var kpr2=(pr_stavka + kpr2z);
            var pl_mothz =document.getElementById('summ').value;
            pl_mothz=+pl_mothz;
            var pl=pl_mothz*kpr2;
            var pl1=pl;
            pl=Math.round(pl);
             var valut='руб.';


            //=======График погащения:=======//


            var mont_cr=document.getElementById('period').value;

            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            mont_cr=+mont_cr;
            var n =mont_cr*mont_ed;
            //alert(n);


            var summ_dolg1 = document.getElementById("summ").value;
            summ_dolg1=+summ_dolg1;

            // var summ_dolgpr1 = document.getElementById("pr_cr").value;
            summ_dolgpr1=+summ_dolgpr1;

            var summ_dolg=summ_dolg1;
            //var summ_dolg=summ_dolg1+summ_dolgpr1;

            summ_dolg=+summ_dolg;


            for (var i = 1; i < n+1; i++) {	 var newSection = $('<tr class="block_uv"></tr>');
                newSection.html(

                    '<td style="width:10%;">  <input type="text" class="sel_num"  value="0" readonly="readonly"> </td>\n <td style="width:18%;"> <input type="text" class="date_num"  value="0" readonly="readonly"> </td>\n <td  style="width:18%"> <input type="text" class="sum_plgr"  value="0" readonly="readonly"> </td>\n <td style="width:18%;"> <input type="text" class="osn_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:18%"> <input type="text" class="proz_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="ost_dolg"  value="0" readonly="readonly"> </td>\n>'
                );
                $('#table_uv').append(newSection);
            }
            for (var i = 1; i < n+1; i++) {
                var newSection = $('<div class="diagr2"></div>');
                newSection.html(
                    '<div class="diagr"></div>' +
                    '<div class="popup_1_2">' +
                    '<p><input type="text" class="d2"  value="0" readonly="readonly">  </p>' +
                    '<p> Платеж: <input type="text" class="pl2"  value="0" readonly="readonly"> </p>' +
                    '<p><div class="rectangle"></div>Основной долг: <input type="text" class="osnov2"  value="0" readonly="readonly"></p>' +
                    '<p><div class="rectangle2"></div>Проценты:<input type="text" class="prg2"  value="0" readonly="readonly"></p>' +
                    '</div>' +
                    '</div>'
                );

                $('#wrapper').append(newSection);

            }
            var v1=(80/n)+1;
            //var vd=v1*0.8;
            var vd=v1;
            var vm=v1*0.2;
            //var vm=v1*0.2-1;
            vd=vd+'%';
            vm=vm+'%';

            //$('#wrapper').append(newSection);
            //$('.diagr').css({'width':'100%'});
            //$('.diagr').css({'width':vd});
            $('.diagr2').css({'width':vd});
            $('.diagr').css({'margin-right':vm});

            var st_sum = document.getElementsByClassName( "sel_num" ); // находим элементы с классом номер платежа
            var plau = document.getElementsByClassName( "sum_plgr" ); // находим элементы с классом сумма платежа
            var plgr=pl1.toFixed(2);


            var years_grn = document.getElementById("year_sel").value;  // находим выбранный год
            var month_grn =document.getElementById("month_sel").value;  // находим выбранный месяц
            var n_moth = +month_grn;
            years_grn=+years_grn;
            var nyears_grn=0;
            var date_numgr= document.getElementsByClassName( "date_num" ); // находим элементы с классом дата платежа
            // alert(years_gr);
            //alert(month_gr);
            // var summ_dolg = document.getElementById("summ").value;
            var summ_dolg = document.getElementById("summ").value;
            summ_dolg=+summ_dolg;
            summ_dolg_ost=summ_dolg;

            var pr_stavka = document.getElementById("stavka").value;
            var pr_stavgr= document.getElementsByClassName( "proz_dolg" ); // находим элементы с классом проценты по долгу

            var osn_plgr= document.getElementsByClassName( "osn_dolg" ); // находим элементы с классом основной долг
            var summ_dolggr=document.getElementsByClassName("ost_dolg" ); // находим элементы с классом
            //console.log(summ_dolggr);

            var komis_gr=document.getElementsByClassName("komis" ); // находим элементы с классом Ежемесячные комиссии

            var diagr= document.getElementsByClassName( "diagr" ); // находим элементы с классом
            var pl2v= document.getElementsByClassName( "pl2" ); // находим элементы с классом
            var osnov2v=document.getElementsByClassName( "osnov2" ); // находим элементы с классом
            var prg2v=document.getElementsByClassName( "prg2" ); // находим элементы с классом
            var d2v= document.getElementsByClassName( "d2" ); // находим элементы с классом

            var z_kom2 = 0;

            var k_kom2 = '';






            for (var i = 0; i < n; i++) {
                // =====Заполнение номера платежа======///
                var num=i+1;
                st_sum[i].value=num; // Заполнение номера платежа

                // ====Заполнение date платежа====//
                var month_gr;

                if (n_moth==0){
                    month_gr= "январь";
                }
                if (n_moth==1){
                    month_gr= "февраль";
                }
                if (n_moth==2){
                    month_gr= "март";
                }

                if (n_moth==3){
                    month_gr= "апрель";
                }
                if (n_moth==4){
                    month_gr= "май";
                }
                if (n_moth==5){
                    month_gr= "июнь";
                }
                if (n_moth==6){
                    month_gr= "июль";
                }
                if (n_moth==7){
                    month_gr= "август";
                }
                if (n_moth==8){
                    month_gr= "сентябрь";
                }
                if (n_moth==9){
                    month_gr= "октябрь";
                }
                if (n_moth==10){
                    month_gr= "ноябрь";
                }

                if (n_moth==11){
                    month_gr= "декабрь";
                }

                if ((n_moth==0)&& (nyears_grn>0))  {
                    years_grn=years_grn+1;
                }

                n_moth=n_moth+1;

                if (n_moth>11)  {
                    n_moth=0;
                    nyears_grn=nyears_grn+1;
                }



                var date_pl=month_gr+ ' '+' , '+''+years_grn;

                date_numgr[i].value=date_pl;// Заполнение date платежа
                d2v[i].value=date_pl;// Заполнение date платежа



                //=======Заполнение основной долг ====//

                //var summ_dolg = document.getElementById("summ").value;
                //summ_dolg=+summ_dolg;
                var osn_plv=summ_dolg/n;
                osn_plv=+osn_plv;
                osn_plv=osn_plv.toFixed(2);
                osn_plgr[i].value=osn_plv; // Вывод основного долга
                var osn_plvd=osn_plv+' '+'руб.'

                osnov2v[i].value=osn_plvd;

                // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg_ost*pr_stavka/100)/12;
                summ_pr=summ_pr.toFixed(2);

                pr_stavgr[i].value=summ_pr;

                var summ_prd=summ_pr+' '+'руб.';

                prg2v[i].value=summ_prd;
                //=======Заполнение остатка задолженности======//
                summ_dolg_ost=summ_dolg_ost-osn_plv;
                // console.log(summ_dolg);
                summ_dolg_ost=+summ_dolg_ost;
                summ_dolg_ost=summ_dolg_ost.toFixed(2);
                summ_dolggr[i].value=summ_dolg_ost; // Заполнение остатка задолженности

                //var prh= (plgrv/100)*summ_pr;
                //
                //var dd2=diagr[i];
                //
                //$(dd2).css('height',prh);


                // === Заполнение суммы платежа=====//
                osn_plv=+osn_plv;
                summ_pr=+summ_pr;
                plgr=osn_plv+summ_pr;

                plgr=+plgr;

                var kom2_grv;
                kom2_grv=0;

                if (k_kom2==1){
                    kom2_grv= summ_dolg1*z_kom2/100;
                }

                if (k_kom2==2){
                    var summ_pr= (summ_dolg*pr_stavka/100)/12;
                    var osn_plv=plgr-summ_pr;
                    osn_plv=+osn_plv;

                    var summ_dolg1=summ_dolg-osn_plv;
                    // console.log(summ_dolg);
                    summ_dolg1=+summ_dolg1;
                    kom2_grv= summ_dolg1*z_kom2/100;
                }

                if (k_kom2==3){
                    z_kom2=+z_kom2;
                    kom2_grv=z_kom2;
                }
                var kom2_grvr=kom2_grv;
                kom2_grv=kom2_grv.toFixed(2);


                //komis_gr[i].value=kom2_grv; // Заполнение Ежемесячные комиссии

                // === Заполнение уточненной суммы платежа =====//

                var plgrv;
                plgrv=plgr+kom2_grvr;

                plgrv=plgrv.toFixed(2);
                plau[i].value=plgrv;  // Заполнение суммы платежа
                plgr=+plgr;

                //var prh= (plgrv/100)*summ_pr;
                var prh1= summ_pr/plgrv;

                var prh= prh1*20;
                prh=prh+'em';
                var dd2=diagr[i];

                $(dd2).css('height',prh);

                var pli=plgr+' '+'руб.';

                pl2v[i].value=pli;  // Заполнение суммы платежа в выпадающем списке

            }




            //======Переплата по процентам за кредит=======//

            var  per_pr=0;
            $('.proz_dolg').each(function () {
                per_pr += parseFloat($(this).val())
            });

            // alert(per_pr);


            var sum_perepl=per_pr;
            pr=sum_perepl;

            //sum_perepl=Math.round(sum_perepl);
            sum_perepl=sum_perepl.toFixed(2);


            //document.getElementById('pr_cr').value=sum_perepl;
            var sum_pereplv=sum_perepl+' '+valut;

            $('#pr').text(sum_pereplv);

             itogpl=per_pr+summ_dolg1;
            itogpl=itogpl.toFixed(2);
            $('#itogpl').text(itogpl);

            var osnsp=summ_dolg1+' '+'руб.';
            $('#kros').text(osnsp);

            var osnPrpz=(summ_dolg1*100)/itogpl;
            osnPrpz=Math.round(osnPrpz);
            $('#krosProz').text(osnPrpz);


            var prd2=per_pr.toFixed(2)+' '+"руб.";
            $('#perepld2').text(prd2);

            var prozd2=100-osnPrpz;
            $('#prozd2').text(prozd2);





            //=======Итоговая переплата с учетом комиссий:=======//
           // var prstav_moth_ed=document.getElementById('komis2_sel').value;
            var prstav_moth_ed=1;

            var itog_pereplat=sum_perepl;

            if (prstav_moth_ed==1){
                //var pr_kom=document.getElementById('komis2').value;
                var pr_kom=1;

                pr_kom=pr_kom/100;
                var summ_d=document.getElementById('summ').value;
                var pr_summ=pr_kom*n*summ_d;
                // itog_pereplat=itog_pereplat+pr_summ;
                // alert(i);
            }

           // var ed_moth_kom=document.getElementById('komis2_sel').value;
            var ed_moth_kom=1;

            if (ed_moth_kom==1){
                // var pr_moth_kom=document.getElementById('komis2').value;
                // pr_moth_kom=pr_moth_kom/100;
                // var per_kom2=summ_kr*pr_moth_kom*n;

                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;

            }
            if (ed_moth_kom==3){
                //var pr_moth_kom=document.getElementById('komis2').value;
                var pr_moth_kom=0;

                //var per_kom2=pr_moth_kom*n;
                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;
            }

            if (ed_moth_kom==2) {

                var  per_kom2=0;
                $('.komis').each(function () {
                    per_kom2 += parseFloat($(this).val())
                });

                itog_pereplat=itog_pereplat+per_kom2;
            }

            var ed_kom1='';
            var z_kom1=0;
            z_kom1=+z_kom1;

            if (ed_kom1==2){
                itog_pereplat=itog_pereplat+ z_kom1;
            }

            if (ed_kom1==1){
                z_kom1=z_kom1/100;
                z_kom1=z_kom1*summ_dolg1;

                itog_pereplat=itog_pereplat+ z_kom1;
            }


            itog_pereplat=Math.round(itog_pereplat);



            var itod_pereplv=itog_pereplat+' '+valut;

            $('#itog_pr').text(itod_pereplv);

            //document.getElementById('val_summ2').value=valut;


            //=======Ежемесячный аннуитетный платеж=====//
            var pl_max=0;
            for (var i = 0; i < n; i++) {

                var p_max=plau[i].value
                if (p_max>pl_max){
                    pl_max=p_max;
                }
            }

            var pl_min=100000000000;
            for (var i = 0; i < n; i++) {

                var p_min=plau[i].value
                if (p_min<pl_min){
                    pl_min=p_min;
                }
            }




            var plv=pl_max+ ''+'... '+pl_min+''+valut;

            $('#itog_pl').text(plv);




            //=====вычисление эффективной процентной ставки======///
            var S0=document.getElementById('summ').value;
            var pr_S=itog_pereplat;
            // var pr_S=document.getElementById('pereplat').value;
            S0=+S0;
            pr_S=+pr_S;

            var S=S0+pr_S;

            var ef_st= (((S/S0)-1))*100;


            ef_st=ef_st.toFixed(2);

            //var valut=document.getElementById('summ_sel').value;
            var valut='руб.';


            var ef_stv=ef_st+''+valut;

            $('#itog_stav').text(ef_st);
            //document.getElementById('pr_stav').value=ef_st;
        }

        function del_sek() {
            var del_bl = document.getElementsByClassName('block_uv');
            var m=del_bl.length;
            if (m>0){
                $(".block_uv").remove()
            }
        }




    };


});






