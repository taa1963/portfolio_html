var  sort_selv,itogpl,pr, vd, vm,summinp;
sort_selv=1;
itogpl=0;
pr=0;
vd=0;
vm=0;
summinp=0;
var plaua=[];

//Zena=0;
//KchoseKadstrV=0;


$(document).ready(function() {

    datav();
    datav2();
    datam();
    datam2();

    //=======Определние ссылки на текущую страницу ========//
    var hreh=window.location.href;
    document.getElementById('poptext').value=hreh;

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
    Summa();
    function Summa() {
        var s1=document.getElementById('summ').value;
        //var sl =summinp;
        summinp=s1;
        //s1=Intl.NumberFormat('ru-RU').format(s1);
        //
        //document.getElementById('summ').value=s1;

    }



    //$('#summ').bind('change keyup',function(){
        $('#summ22').on('focus',function(){
        var s1=document.getElementById('summ').value;

        summinp=s1;

        s1=Intl.NumberFormat('ru-RU').format(s1);
        document.getElementById('summ').value=s1;
    });

    //=======Синхронная смена валюты ========//


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
    //var link1 = document.getElementById("vievall");
    //$(link1).click (function(e) {
    //   alert(4555);
    //});
    //
    //$('#vievall').on('click', function (e) {
    //  alert(1222)
    //});

    function Change(e) {
        var elements = document.getElementsByClassName('block_uv');
       //$(elements).addClass('table_uv');
        $(elements).removeClass('table_unvisible');
        $('.block_all').remove();

    }
    window.Change = Change;

    function Change_mob(e) {
        var elements = document.getElementsByClassName('block_uv_mob');
        //$(elements).addClass('table_uv');
        $(elements).removeClass('table_unvisible');
        $('.block_all_mob').remove();

    }
    window.Change_mob = Change_mob;



    //=======Нажатие кнопки Рассчитать ========//
    $("#calc_price").click(function () {

        Zena();

    });

    function Zena() {
        var s1=document.getElementById('summ').value;
        //var sl =summinp;
        summinp=s1;

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


        var sum_plgr_itiog=0;
        var osn_dolg_itog=0;
        var proz_dolg_itog=0;

       // var sort_selv= document.getElementById('sort_sel').value;
        //sort_selv=+sort_selv;

        if (sort_selv==1){

          //var sum_plgr_itiog=0;

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


            //var pl_mothz =document.getElementById('summ').value;

            var pl_mothz =summinp;
            pl_mothz=+pl_mothz;
            var pl=pl_mothz*kpr2;
            var pl1=pl;

            //pl=Math.round(pl);
            pl=pl.toFixed(2);
            //var valut=document.getElementById('summ_sel').value;
            var valut='руб.';


            //var plv=pl+''+valut;
            var plv=new Intl.NumberFormat('ru-RU').format(pl);

            $('#itog_pl').text(plv);



            //======Переплата по процентам за кредит=======//
            var mont_cr=document.getElementById('period').value;
            mont_cr=+mont_cr;
            var mont_ed=document.getElementById('period_sel').value;
            mont_ed=+mont_ed;
            //var summ_kr=document.getElementById('summ').value;


            var summ_kr =summinp;
            summ_kr=+summ_kr;
            var nr;
            if (mont_ed==1){nr=mont_cr}
            else{
                nr=mont_cr*12;
            }
            var sum_perepl=pl1*nr-summ_kr;
            pr=sum_perepl;

            sum_perepl=sum_perepl.toFixed(2);

           // var plv=new Intl.NumberFormat('ru-RU').format(pl);
            var sum_pereplv=Intl.NumberFormat('ru-RU').format(sum_perepl);

            $('#pr').text(sum_pereplv);


             itogpl=pl1*nr-summ_kr+summ_kr;
            itogpl=itogpl.toFixed(2);


            var itogplv=Intl.NumberFormat('ru-RU').format(itogpl);
            $('#itogpl').text(itogplv);


            var osnsp=Intl.NumberFormat('ru-RU').format(summ_kr)+' '+'руб.';


            $('#kros').text(osnsp);
            var osnPrpz=(summ_kr*100)/itogpl;
            osnPrpz=Math.round(osnPrpz);

            $('#krosProz').text(osnPrpz);
            var prd2=sum_pereplv+' '+"руб.";
            $('#perepld2').text(prd2);

            var prozd2=100-osnPrpz;
            $('#prozd2').text(prozd2);


            //var prozd2=100-osnPrpz;
            var prdeg=(prozd2*36)/10;

            prdeg='rotate'+'('+prdeg+'deg'+')';



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


            var summ_dolgpr1 =sum_perepl;
            summ_dolgpr1=+summ_dolgpr1;

            var summ_dolg=summ_dolg1;


            summ_dolg=+summ_dolg;
             //alert(n)

            for (var i = 1; i < n+1; i++) {

                if (n<=24){
                    var newSection = $('<tr class="block_uv"></tr>');
                    newSection.html(
                        '<td style="width:3%">  <span class="sel_num"></span>  </td>\n <td > <span class="date_num"> </span></td>\n <td  > <span  class="sum_plgr" ></span> </td>\n <td > <span class="osn_dolg" ></span> </td>\n <td > <span class="proz_dolg"></span> </td>\n <td > <span class="ost_dolg"></span> </td>'
                    );
                    $('#table_uv').append(newSection);
                }

                if (n>24) {
                    if (i <= 5) {
                        var newSection = $('<tr class="block_uv"></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                    }
                    if ((i > 5) && (i <= n - 5)) {
                        var newSection = $('<tr class="block_uv table_unvisible" ></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                        //$('.block_uv').addClass('table_unvisible');
                    }

                    if(i==5){
                        var newSection = $('<tr class="block_all"></tr>');
                        newSection.html(
                        '<th >...</th>\n<th colspan="5"><a class="vievall" id="vievall" style="text-decoration: underline" onclick="Change(this);">Нажмите, чтобы показать все строки</a></th>'
                      );
                        $('#table_uv').append(newSection);

                    }
                    if (i >= n - 4) {
                        var newSection = $('<tr class="block_uv"></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                    }
                }

        }
            var newSection = $('<tr class="block_itog"></tr>');
            newSection.html(
                '<td style="width:3%">    </td>\n <td style="width:3%;"> </td>\n <td  style="width:20%"> <span  class="sum_plgr_itog" ></span> руб. <br>(Сумма выплачено всего) </td>\n <td style="width:20%;"> <span class="osn_dolg_itog" ></span> руб.<br>(Сумма выплачено долга) </td>\n <td  style="width:18%"> <span class="proz_dolg_itog"></span> руб.<br>(Сумма выплаченных процентов)  </td>\n <td  style="width:18%">  </td>\n>'
            );
            $('#table_uv').append(newSection);

                 //===Заполнение данных по мобильной верстке
            for (var i = 1; i < n+1; i++) {

                if (n<=24){
                    var newSection = $('<tr class="block_uv_mob"></tr>');
                    newSection.html(
                        '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                    );
                    $('#table_uv_mob').append(newSection);
                }

                if (n>24) {
                    if (i <= 5) {
                        var newSection = $('<tr class="block_uv_mob"></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                         );
                        $('#table_uv_mob').append(newSection);
                    }
                    if ((i > 5) && (i <= n - 5)) {
                        var newSection = $('<tr class="block_uv_mob table_unvisible" ></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                        );
                        $('#table_uv_mob').append(newSection);
                        //$('.block_uv').addClass('table_unvisible');
                    }

                    if(i==5){
                        var newSection = $('<tr class="block_all_mob"></tr>');
                        newSection.html(
                            '<th >...</th>\n<th colspan="5"><a class="vievall_mob" id="vievall_mob" style="text-decoration: underline" onclick="Change_mob(this);">Нажмите, чтобы показать все строки</a></th>'
                        );
                        $('#table_uv_mob').append(newSection);

                    }
                    if (i >= n - 4) {
                        var newSection = $('<tr class="block_uv_mob"></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                        );
                        $('#table_uv_mob').append(newSection);
                    }
                }

            }


            var newSection = $('<tr class="block_itog_mob"></tr>');
            newSection.html(
                '<td style="width:3%">    </td>\n <td style="width:5%;"> </td>\n <td  style="width:46%"> <span  class="sum_plgr_itog" ></span> руб. <br>(Сумма выплачено всего) </td>\n <td style="width:18%;"> \n  </td>\n <td  style="width:46%">  </td>\n>'
            );
            $('#table_uv_mob').append(newSection);






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
            var v1=(100/n);

             vd=v1*0.8;

             vm=v1*0.2;

            var vdd=vd+'%';
            var vmd=vm+'%';

            $('.diagr2').css({'width':vdd});
            $('.diagr2').css({'margin-right':vmd});


           //================= Номер Платежа ===========================//
            var st_sum = document.getElementsByClassName( "sel_num" ); // находим элементы с классом
            var st_sum_mob = document.getElementsByClassName( "sel_num_mob" ); // находим элементы с классом

            //================= Основной платеж ===========================//
            var plau = document.getElementsByClassName( "sum_plgr" ); // находим элементы с классом
            var plau_mob = document.getElementsByClassName( "sum_plgr_mob" ); // находим элементы с классом

            //sum_plgr_mob
            var plgr=pl1.toFixed(2);


            var years_grn = document.getElementById("year_sel").value;  // находим выбранный год
            var month_grn =document.getElementById("month_sel").value;  // находим выбранный месяц
            var n_moth = +month_grn;
            years_grn=+years_grn;
            var nyears_grn=0;

            //================== Дата платежа для таблицы=========//
            var date_numgr= document.getElementsByClassName( "date_num" ); // находим элементы с классом
            var date_numgr_mob= document.getElementsByClassName( "date_num_mob" ); // находим элементы с классом


            var d2v= document.getElementsByClassName( "d2" ); // находим элементы с классом
            var diagr= document.getElementsByClassName( "diagr" ); // находим элементы с классом
            var pl2v= document.getElementsByClassName( "pl2" ); // находим элементы с классом
            var osnov2v=document.getElementsByClassName( "osnov2" ); // находим элементы с классом
            var prg2v=document.getElementsByClassName( "prg2" ); // находим элементы с классом

            var pr_stavka = document.getElementById("stavka").value;

            //================== Основной долг для таблицы=========//
            var pr_stavgr= document.getElementsByClassName( "proz_dolg" ); // находим элементы с классом
            var pr_stavgr_mob= document.getElementsByClassName( "proz_dolg_mob" ); // находим элементы с классом

            //================== Основной долг для таблицы=========//
            var osn_plgr= document.getElementsByClassName( "osn_dolg" ); // находим элементы с классом
            var osn_plgr_mob= document.getElementsByClassName( "osn_dolg_mob" ); // находим элементы с классом

            //================== Остаток долг для таблицы=========//
            var summ_dolggr=document.getElementsByClassName("ost_dolg" ); // находим элементы с классом
            var summ_dolggr_mob=document.getElementsByClassName("ost_dolg_mob" ); // находим элементы с классом


            //console.log(summ_dolggr);

            var komis_gr=document.getElementsByClassName("komis" ); // находим элементы с классом Ежемесячные комиссии

            var z_kom2 = 0;

            var k_kom2 = '';


            var nn=0;



            for (var i = 0; i < n; i++) {
                // =====Заполнение номера платежа======///
                var num=i+1;
                var st_sumt=st_sum[i];
                $(st_sumt).text(num);

                //var st_sumt_mob=st_sum_mob[i];
                //$(st_sumt_mob).text(num);

                var st_sumtmob=st_sum_mob[i];
                $(st_sumtmob).text(num);


                //st_sum[i].value=num; // Заполнение номера платежа

                // ====Заполнение date платежа====//
                var month_gr;

                if (n_moth==0){
                    month_gr= "Январь";
                }
                if (n_moth==1){
                    month_gr= "Февраль";
                }
                if (n_moth==2){
                    month_gr= "Март";
                }

                if (n_moth==3){
                    month_gr= "Апрель";
                }
                if (n_moth==4){
                    month_gr= "Май";
                }
                if (n_moth==5){
                    month_gr= "июнь";
                }
                if (n_moth==6){
                    month_gr= "Июль";
                }
                if (n_moth==7){
                    month_gr= "Август";
                }
                if (n_moth==8){
                    month_gr= "Сентябрь";
                }
                if (n_moth==9){
                    month_gr= "Октябрь";
                }
                if (n_moth==10){
                    month_gr= "Ноябрь";
                }

                if (n_moth==11){
                    month_gr= "Декабрь";
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

                    $('.wrapper').append(newSection);


                    var lin1=document.getElementsByClassName("calc_block_diagr2_line_date" ); // находим элементы с классом


                    var vdl=((vd+vm)*(i+1));
                    vdl=vdl+'%';


                    $(lin1[nn]).css({'margin-left':vdl});

                    var ddg=document.getElementsByClassName("ddg" ); // находим элементы с классом
                    $(ddg[nn]).text(years_grn);

                    nn=nn+1;
                }



                var date_pl=month_gr+ ' '+' , '+''+years_grn;

                var date_numgrt=date_numgr[i];
                $(date_numgrt).text(date_pl);
                var date_numgrt_mob=date_numgr_mob[i];
                $(date_numgrt_mob).text(date_pl);


               // date_numgr[i].value=date_pl;// Заполнение date платежа
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
                    //alert(plgr)
                    //alert(summ_pr)

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
                sum_plgr_itiog=sum_plgr_itiog+plgrv;
                var sum_plgr_itiogt=Intl.NumberFormat('ru-RU').format(sum_plgr_itiog);

                $('.sum_plgr_itog').text(sum_plgr_itiogt);
                //plaua[i]=plgrv;
                //console.log( plaua[i])
                var plgrv2=Intl.NumberFormat('ru-RU').format(plgrv);


               // plau[i].value=plgrv2;  // Заполнение суммы платежа
                var  plauvv= plau[i];

                $(plauvv).text(plgrv2);

                var  plauvv_mob= plau_mob[i];

                $(plauvv_mob).text(plgrv2);



                plgr=+plgr;


                var pli=Intl.NumberFormat('ru-RU').format(plgr)+' '+'руб.';

                pl2v[i].value=pli;  // Заполнение суммы платежа в выпадающем списке



                // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg*pr_stavka/100)/12;

                var summ_pr1=Intl.NumberFormat('ru-RU').format(summ_pr);



               //var  pr_stavgrt= pr_stavgr[i];

                proz_dolg_itog=proz_dolg_itog+summ_pr;
                var proz_dolg_itogt=Intl.NumberFormat('ru-RU').format(proz_dolg_itog);
              //  console.log(pr_stavgr[i])
                $('.proz_dolg_itog').text(proz_dolg_itogt);


                var  pr_stavgrt= pr_stavgr[i];
                $(pr_stavgrt).text(summ_pr1);

                var  pr_stavgrt_mob= pr_stavgr_mob[i];
                $(pr_stavgrt_mob).text(summ_pr1);



                //pr_stavgr[i].value=summ_pr1;



                //var summ_prd=summ_pr+' '+'руб.';
                var summ_prd=Intl.NumberFormat('ru-RU').format(summ_pr)+' '+'руб.';

                prg2v[i].value=summ_prd;

                //=======Заполнение Ежемесячные комиссии====//

                var osn_plv=plgr-summ_pr;
                //alert(plgr-summ_pr)
                osn_plv=+osn_plv;
                plgr=+plgr;
                summ_pr=+summ_pr;

               // console.log(plgr);
               // console.log(summ_pr);
               // console.log(osn_plv);


                var osn_plv2=osn_plv;
                //console.log(osn_plv)
                osn_plv2=Intl.NumberFormat('ru-RU').format(osn_plv);

                var osn_plgrt=osn_plgr[i];
                var osn_plgrt_mob=osn_plgr_mob[i];

                osn_dolg_itog=osn_dolg_itog+osn_plv;
                var osn_dolg_itogt=Intl.NumberFormat('ru-RU').format(osn_dolg_itog);
                $('.osn_dolg_itog').text(osn_dolg_itogt);


                $(osn_plgrt).text(osn_plv2);
                $(osn_plgrt_mob).text(osn_plv2);

               // osn_plgr[i].value=osn_plv2; // Заполнение Ежемесячные комиссии


               //var osn_plvd=osn_plv+' '+'руб.';
                var osn_plvd2=Intl.NumberFormat('ru-RU').format(osn_plv)+' '+'руб.';

                osnov2v[i].value=osn_plvd2;

                //=======Заполнение остатка задолженности======//
                var summ_dolg=summ_dolg-osn_plv;
                // console.log(summ_dolg);
                var summ_dolg2=+summ_dolg;
                summ_dolg2=Intl.NumberFormat('ru-RU').format(summ_dolg2);

                var summ_dolggrt=summ_dolggr[i];
                $(summ_dolggrt).text(summ_dolg2);

                var summ_dolggrt_mob=summ_dolggr_mob[i];
                $(summ_dolggrt_mob).text(summ_dolg2);



               // summ_dolggr[i].value=summ_dolg2; // Заполнение остатка задолженности

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
               // var summ_d=document.getElementById('summ').value;

                var summ_d =summinp;
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
             S0 =summinp;


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
            //var pl_mothz =document.getElementById('summ').value;
            var pl_mothz =summinp;
            pl_mothz=+pl_mothz;
            var pl=pl_mothz*kpr2;
            var pl1=pl;
            pl=Math.round(pl);
             var valut='руб.';



            //var prozd2=100-osnPrpz;
            //var prdeg=(prozd2*36)/10;
            //
            //prdeg='rotate'+'('+prdeg+'deg'+')';
            //
            //
            //
            //document.getElementById('pie').style.setProperty('--sq-r',prdeg);


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

            for (var i = 1; i < n+1; i++) {

                if (n<=24){
                    var newSection = $('<tr class="block_uv"></tr>');
                    newSection.html(
                        '<td style="width:3%">  <span class="sel_num"></span>  </td>\n <td > <span class="date_num"> </span></td>\n <td  > <span  class="sum_plgr" ></span> </td>\n <td > <span class="osn_dolg" ></span> </td>\n <td > <span class="proz_dolg"></span> </td>\n <td > <span class="ost_dolg"></span> </td>'
                    );
                    $('#table_uv').append(newSection);
                }

                if (n>24) {
                    if (i <= 5) {
                        var newSection = $('<tr class="block_uv"></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                    }
                    if ((i > 5) && (i <= n - 5)) {
                        var newSection = $('<tr class="block_uv table_unvisible" ></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                        //$('.block_uv').addClass('table_unvisible');
                    }

                    if(i==5){
                        var newSection = $('<tr class="block_all"></tr>');
                        newSection.html(
                            '<th >...</th>\n<th colspan="5"><a class="vievall" id="vievall" style="text-decoration: underline" onclick="Change(this);">Нажмите, чтобы показать все строки</a></th>'
                        );
                        $('#table_uv').append(newSection);

                    }
                    if (i >= n - 4) {
                        var newSection = $('<tr class="block_uv"></tr>');
                        newSection.html(
                            '<td style="width:5%">  <span class="sel_num"></span>  </td>\n <td style="width:18%;"> <span class="date_num"> </span></td>\n <td  style="width:18%"> <span  class="sum_plgr" ></span> </td>\n <td style="width:18%;"> <span class="osn_dolg" ></span> </td>\n <td  style="width:18%"> <span class="proz_dolg"></span> </td>\n <td  style="width:18%"> <span class="ost_dolg"></span> </td>\n>'
                        );
                        $('#table_uv').append(newSection);
                    }
                }

            }
            var newSection = $('<tr class="block_itog"></tr>');
            newSection.html(
                '<td style="width:3%">    </td>\n <td style="width:3%;"> </td>\n <td  style="width:20%"> <span  class="sum_plgr_itog" ></span> руб. <br>(Сумма выплачено всего) </td>\n <td style="width:20%;"> <span class="osn_dolg_itog" ></span> руб.<br>(Сумма выплачено долга) </td>\n <td  style="width:18%"> <span class="proz_dolg_itog"></span> руб.<br>(Сумма выплаченных процентов)  </td>\n <td  style="width:18%">  </td>\n>'
            );
            $('#table_uv').append(newSection);

            //===Заполнение данных по мобильной верстке
            for (var i = 1; i < n+1; i++) {

                if (n<=24){
                    var newSection = $('<tr class="block_uv_mob"></tr>');
                    newSection.html(
                        '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                    );
                    $('#table_uv_mob').append(newSection);
                }

                if (n>24) {
                    if (i <= 5) {
                        var newSection = $('<tr class="block_uv_mob"></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                        );
                        $('#table_uv_mob').append(newSection);
                    }
                    if ((i > 5) && (i <= n - 5)) {
                        var newSection = $('<tr class="block_uv_mob table_unvisible" ></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                        );
                        $('#table_uv_mob').append(newSection);
                        //$('.block_uv').addClass('table_unvisible');
                    }

                    if(i==5){
                        var newSection = $('<tr class="block_all_mob"></tr>');
                        newSection.html(
                            '<th >...</th>\n<th colspan="5"><a class="vievall_mob" id="vievall_mob" style="text-decoration: underline" onclick="Change_mob(this);">Нажмите, чтобы показать все строки</a></th>'
                        );
                        $('#table_uv_mob').append(newSection);

                    }
                    if (i >= n - 4) {
                        var newSection = $('<tr class="block_uv_mob"></tr>');
                        newSection.html(
                            '<td style="width:3%">  <span class="sel_num_mob"></span>  </td>\n <td > <span class="date_num_mob"> </span></td>\n <td  > <span  class="sum_plgr_mob" ></span> <br> Долг: <span class="osn_dolg_mob" ></span> <br> Проценты:<span class="proz_dolg_mob"></span> </td>\n <td > <span class="ost_dolg_mob"></span> </td>'
                        );
                        $('#table_uv_mob').append(newSection);
                    }
                }

            }


            var newSection = $('<tr class="block_itog_mob"></tr>');
            newSection.html(
                '<td style="width:3%">    </td>\n <td style="width:5%;"> </td>\n <td  style="width:46%"> <span  class="sum_plgr_itog" ></span> руб. <br>(Сумма выплачено всего) </td>\n <td style="width:18%;"> \n  </td>\n <td  style="width:46%">  </td>\n>'
            );
            $('#table_uv_mob').append(newSection);





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
            var v1=(100/n);

            vd=v1*0.8;

            vm=v1*0.2;

            var vdd=vd+'%';
            var vmd=vm+'%';

            $('.diagr2').css({'width':vdd});
            $('.diagr2').css({'margin-right':vmd});

            var st_sum = document.getElementsByClassName( "sel_num" ); // находим элементы с классом номер платежа
            var st_sum_mob = document.getElementsByClassName( "sel_num_mob" ); // находим элементы с классом номер платежа



            var plau = document.getElementsByClassName( "sum_plgr" ); // находим элементы с классом сумма платежа
            var plau_mob = document.getElementsByClassName( "sum_plgr_mob" ); // находим элементы с классом сумма платежа
            var plgr=pl1.toFixed(2);


            var years_grn = document.getElementById("year_sel").value;  // находим выбранный год
            var month_grn =document.getElementById("month_sel").value;  // находим выбранный месяц
            var n_moth = +month_grn;
            years_grn=+years_grn;
            var nyears_grn=0;


            var date_numgr= document.getElementsByClassName( "date_num" ); // находим элементы с классом дата платежа
            var date_numgr_mob= document.getElementsByClassName( "date_num_mob" ); // находим элементы с классом дата платежа
            // alert(years_gr);
            //alert(month_gr);
            // var summ_dolg = document.getElementById("summ").value;
            var summ_dolg = document.getElementById("summ").value;
            summ_dolg=+summ_dolg;
            summ_dolg_ost=summ_dolg;

            var pr_stavka = document.getElementById("stavka").value;
            var pr_stavgr= document.getElementsByClassName( "proz_dolg" ); // находим элементы с классом проценты по долгу
            var pr_stavgr_mob= document.getElementsByClassName( "proz_dolg_mob" ); // находим элементы с классом проценты по долгу



            var osn_plgr= document.getElementsByClassName( "osn_dolg" ); // находим элементы с классом основной долг
            var osn_plgr_mob= document.getElementsByClassName( "osn_dolg_mob" ); // находим элементы с классом основной долг


            var summ_dolggr=document.getElementsByClassName("ost_dolg" ); // находим элементы с классом
            var summ_dolggr_mob=document.getElementsByClassName("ost_dolg_mob" ); // находим элементы с классом
            //console.log(summ_dolggr);

            var komis_gr=document.getElementsByClassName("komis" ); // находим элементы с классом Ежемесячные комиссии

            var diagr2= document.getElementsByClassName( "diagr2" ); // находим элементы с классом
            var diagr= document.getElementsByClassName( "diagr" ); // находим элементы с классом

            var pl2v= document.getElementsByClassName( "pl2" ); // находим элементы с классом
            var osnov2v=document.getElementsByClassName( "osnov2" ); // находим элементы с классом
            var prg2v=document.getElementsByClassName( "prg2" ); // находим элементы с классом
            var d2v= document.getElementsByClassName( "d2" ); // находим элементы с классом

            var z_kom2 = 0;

            var k_kom2 = '';



            var nn=0;


            for (var i = 0; i < n; i++) {
                // =====Заполнение номера платежа======///
                var num=i+1;
                var st_sumt=st_sum[i];
                $(st_sumt).text(num);
                var st_sumt_mob=st_sum_mob[i];
                $(st_sumt_mob).text(num);
               // st_sum[i].value=num; // Заполнение номера платежа

                // ====Заполнение date платежа====//
                var month_gr;

                if (n_moth==0){
                    month_gr= "Январь";
                }
                if (n_moth==1){
                    month_gr= "Февраль";
                }
                if (n_moth==2){
                    month_gr= "Март";
                }

                if (n_moth==3){
                    month_gr= "Апрель";
                }
                if (n_moth==4){
                    month_gr= "Май";
                }
                if (n_moth==5){
                    month_gr= "Июнь";
                }
                if (n_moth==6){
                    month_gr= "Июль";
                }
                if (n_moth==7){
                    month_gr= "Август";
                }
                if (n_moth==8){
                    month_gr= "Сентябрь";
                }
                if (n_moth==9){
                    month_gr= "Октябрь";
                }
                if (n_moth==10){
                    month_gr= "Ноябрь";
                }

                if (n_moth==11){
                    month_gr= "Декабрь";
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

                    $('.wrapper').append(newSection);


                    var lin1=document.getElementsByClassName("calc_block_diagr2_line_date" ); // находим элементы с классом


                    var vdl=((vd+vm)*(i+1));
                    vdl=vdl+'%';


                    $(lin1[nn]).css({'margin-left':vdl});

                    var ddg=document.getElementsByClassName("ddg" ); // находим элементы с классом
                    $(ddg[nn]).text(years_grn);

                    nn=nn+1;
                }



                var date_pl=month_gr+ ' '+' , '+''+years_grn;

                var date_numgrt=date_numgr[i];
                $(date_numgrt).text(date_pl);
                var date_numgrt_mob=date_numgr_mob[i];
                $(date_numgrt_mob).text(date_pl);



               // date_numgr[i].value=date_pl;// Заполнение date платежа



                d2v[i].value=date_pl;// Заполнение date платежа



                //=======Заполнение основной долг ====//

                //var summ_dolg = document.getElementById("summ").value;
                //summ_dolg=+summ_dolg;
                var osn_plv=summ_dolg/n;
               // alert(summ_dolg)
                osn_plv=+osn_plv;
                var osn_plv2=osn_plv;
                osn_plv2=Intl.NumberFormat('ru-RU').format(osn_plv2);

                var osn_plgrt=osn_plgr[i];
                $(osn_plgrt).text(osn_plv2);
                var osn_plgrt_mob=osn_plgr_mob[i];
                $(osn_plgrt_mob).text(osn_plv2);




                osn_dolg_itog=osn_dolg_itog+osn_plv;
                var osn_dolg_itogt=Intl.NumberFormat('ru-RU').format(osn_dolg_itog);
                $('.osn_dolg_itog').text(osn_dolg_itogt);

                //osn_plgr[i].value=osn_plv2; // Вывод основного долга


                var osn_plvd=Intl.NumberFormat('ru-RU').format(osn_plv)+' '+'руб.';

                osnov2v[i].value=osn_plvd;

                // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg_ost*pr_stavka/100)/12;
                var summ_pr2=Intl.NumberFormat('ru-RU').format(summ_pr);

                var pr_stavgrt=pr_stavgr[i];
                var pr_stavgrt_mob=pr_stavgr_mob[i];

                proz_dolg_itog=proz_dolg_itog+summ_pr;

                var proz_dolg_itogt=Intl.NumberFormat('ru-RU').format(proz_dolg_itog);
                 $('.proz_dolg_itog').text(proz_dolg_itogt);

                $(pr_stavgrt).text(summ_pr2);
                $(pr_stavgrt_mob).text(summ_pr2);

                //pr_stavgr[i].value=summ_pr2;

                //var summ_prd=summ_pr+' '+'руб.';
                var summ_prd=Intl.NumberFormat('ru-RU').format(summ_pr)+' '+'руб.';

                prg2v[i].value=summ_prd;
                //=======Заполнение остатка задолженности======//
                var summ_dolg_ost=summ_dolg_ost-osn_plv;
               // console.log(osn_plv);
                summ_dolg_ost=+summ_dolg_ost;
                var summ_dolg_ost2=Intl.NumberFormat('ru-RU').format(summ_dolg_ost);

                var summ_dolggrt=summ_dolggr[i];
                $(summ_dolggrt).text(summ_dolg_ost2);
                var summ_dolggrt_mob=summ_dolggr_mob[i];
                $(summ_dolggrt_mob).text(summ_dolg_ost2);



               // summ_dolggr[i].value=summ_dolg_ost2; // Заполнение остатка задолженности

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
                plaua[i]=plgrv;
              //  console.log( plaua[i])
                var plgrv2=plgrv;
                plgrv2=Intl.NumberFormat('ru-RU').format(plgrv);

                sum_plgr_itiog=sum_plgr_itiog+plgrv;
                var sum_plgr_itiogt=Intl.NumberFormat('ru-RU').format(sum_plgr_itiog);

                $('.sum_plgr_itog').text(sum_plgr_itiogt);



                var plaut=plau[i];
                $(plaut).text(plgrv2);
                var plaut_mob=plau_mob[i];
                $(plaut_mob).text(plgrv2);



                //plau[i].value=plgrv2;  // Заполнение суммы платежа
                plgr=+plgr;

                //var prh= (plgrv/100)*summ_pr;
                //==========================================================//
                var prh1= summ_pr/plgrv;

                var prh= prh1*20;
                prh=prh+'em';
                var dd2=diagr[i];

                $(dd2).css('height',prh);
                //
                var pli=Intl.NumberFormat('ru-RU').format(plgr)+' '+'руб.';

                pl2v[i].value=pli;  // Заполнение суммы платежа в выпадающем списке
              //======================================================//
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
            var sum_pereplv2= sum_perepl;
            //$('#pr').text(sum_perepl);
            var sum_pereplv2=Intl.NumberFormat('ru-RU').format(sum_perepl);
           //console.log(proz_dolg_itog)

            var proz_dolg_itogv=proz_dolg_itog.toFixed(2)
            proz_dolg_itogv=Intl.NumberFormat('ru-RU').format(proz_dolg_itogv);

           $('#pr').text(proz_dolg_itogv);
           // $('#pr').text(sum_perepl);

             itogpl=proz_dolg_itog+summ_dolg1;
            var itogp12=itogpl;
            itogp12=itogp12.toFixed(2);

            itogp12=Intl.NumberFormat('ru-RU').format(itogp12);


            $('#itogpl').text(itogp12);

            var osnsp=Intl.NumberFormat('ru-RU').format(summ_dolg1)+' '+'руб.';
            $('#kros').text(osnsp);

            var osnPrpz=(summ_dolg1*100)/itogpl;
            osnPrpz=Math.round(osnPrpz);
            $('#krosProz').text(osnPrpz);

            var prozd2=100-osnPrpz;
            var prdeg=(prozd2*36)/10;

            prdeg='rotate'+'('+prdeg+'deg'+')';



            document.getElementById('pie').style.setProperty('--sq-r',prdeg);




           // var proz_dolg_itogv=proz_dolg_itog.toFixed(2)
           // var prd2=Intl.NumberFormat('ru-RU').format(proz_dolg_itogv)+' '+"руб.";
           // alert(proz_dolg_itogv)
            var proz_dolg_itogv=proz_dolg_itog.toFixed(2);
            var proz_dolg_itogv3=Intl.NumberFormat('ru-RU').format(proz_dolg_itogv)+' '+"руб." ;
            $('#perepld2').text(proz_dolg_itogv3);

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
                //var summ_d=document.getElementById('summ').value;
                var summ_d =summinp;
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

                var p_max=plaua[i];
                if (p_max>pl_max){
                    pl_max=p_max;
                }
            }

            var pl_min=100000000000;
            for (var i = 0; i < n; i++) {

                var p_min=plaua[i];
                if (p_min<pl_min){
                    pl_min=p_min;
                }
            }




            var plv=Intl.NumberFormat('ru-RU').format(pl_max)+ ''+'... '+Intl.NumberFormat('ru-RU').format(pl_min);

            $('#itog_pl').text(plv);

            for (var i = 0; i < n; i++) {

                var hd2t=(plaua[i]*20)/pl_max;
                //console.log(plaua[i])
                var dd2v=diagr2[i];
               var  hd2t2=hd2t+'em';

                $(dd2v).css('height',hd2t2);

               var md=20-hd2t;
                md=md+'em';
                $(dd2v).css('margin-top',md);
               // $(dd2v).css('float','none');

                //var p_max = plaua[i];
                //if (p_max > pl_max) {
                //    pl_max = p_max;
                //
                //
                //}
            }



            //var prh1= summ_pr/plgrv;
            //
            //var prh= prh1*20;
            //prh=prh+'em';
            //var dd2=diagr[i];
            //
            //$(dd2).css('height',prh);


            //var pli=Intl.NumberFormat('ru-RU').format(plgr)+' '+'руб.';
            //
            //pl2v[i].value=pli;  // Заполнение суммы платежа в выпадающем списке




            //=====вычисление эффективной процентной ставки======///
            //var S0=document.getElementById('summ').value;
            var S0 =summinp;
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
            var del_bl2 = document.getElementsByClassName('block_all');
            var m=del_bl2.length;
            if (m>0){
                $(".block_all").remove()
            }
            var del_bl3 = document.getElementsByClassName('block_itog');
            var m=del_bl3.length;
            if (m>0){
                $(".block_itog").remove()
            }
            var del_bl = document.getElementsByClassName('block_uv_mob');
            var m=del_bl.length;
            if (m>0){
                $(".block_uv_mob").remove()
            }
            var del_bl2 = document.getElementsByClassName('block_all_mob');
            var m=del_bl2.length;
            if (m>0){
                $(".block_all_mob").remove()
            }
            var del_bl3 = document.getElementsByClassName('block_itog_mob');
            var m=del_bl3.length;
            if (m>0){
                $(".block_itog_mob").remove()
            }



        }

        //var del_bl2 = document.getElementsByClassName('block_all2');
        //var m=del_bl2.length;
        //if (m>0){
        //    $(".block_all").remove()
        //}


    };



});






