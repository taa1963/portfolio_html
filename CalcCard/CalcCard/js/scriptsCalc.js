//var  Zena,KpsKadstr,KchoseKadstr,KchoseKadstrV,jar,mon;

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
    var valut=document.getElementById('summ_sel').value;
    document.getElementById('komis1_sel_opt').innerHTML=valut;
    document.getElementById('komis2_sel_opt').innerHTML=valut;

    $("#summ_sel").click(function () {
        var valut=document.getElementById('summ_sel').value;
        document.getElementById('komis1_sel_opt').innerHTML=valut;
        document.getElementById('komis2_sel_opt').innerHTML=valut;
    });




    //=======Нажатие кнопки Рассчитать ========//
   $("#calc_price").click(function () {

       var block = $(this).parents('.calculator');
       block.find('.calc_block_itog_table').show();
       block.find('.calc_block_grafik').show();
       block.find('.calc_block_itog_text').hide();

       del_sek();




       //=====вычисление  ежемесячного платежа и переплат======///


       var sort_selv= document.getElementById('sort_sel').value;
       sort_selv=+sort_selv;

       if (sort_selv==1){



           //=====процентная ставка в месяц======///
           var mont_cr=document.getElementById('period').value;

           var mont_ed=document.getElementById('period_sel').value;
           mont_ed=+mont_ed;
           mont_cr=+mont_cr;
           var n =mont_cr*mont_ed;

           var period =document.getElementById('stavka_sel').value;
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
           pl=Math.round(pl);
           var valut=document.getElementById('summ_sel').value;


           var plv=pl+''+valut;

           $('#itog_pl').text(plv);

           // document.getElementById('mont_summ').value=pl;
           //
           //
           //
           // var valut=document.getElementById('summ_sel').value;
           // document.getElementById('val_summ').value=valut;

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
           sum_perepl=Math.round(sum_perepl);
           var sum_pereplv=sum_perepl+' '+valut;

           $('#pr').text(sum_pereplv);
           // document.getElementById('pr_cr').value=sum_perepl;
           // document.getElementById('val_summ1').value=valut;


           // //=====вычисление эффективной процентной ставки======///
           // var pr_cr=document.getElementById('stavka').value;
           // pr_cr=+pr_cr;
           // var i=pr_cr/100;
           //
           // var prstav_moth=document.getElementById('komis2').value;
           // prstav_moth=+prstav_moth;
           // var prstav_moth_ed=document.getElementById('komis2_sel').value;
           //
           //
           // if (prstav_moth_ed==1){
           //     prstav_moth=prstav_moth;
           //     prstav_moth=(prstav_moth/100)*12;
           //     i=i+prstav_moth;
           //     // alert(i);
           // }
           //
           //
           //
           // var mont_cr=document.getElementById('period').value;
           //
           // var mont_ed=document.getElementById('period_sel').value;
           // mont_ed=+mont_ed;
           // mont_cr=+mont_cr;
           // var n =mont_cr*mont_ed;
           // var ef_st1=(1+(i/n)) ;
           // var ef_st2=Math.pow(ef_st1,n);
           // // var ef_st=ef_st2-1;
           //
           //
           //
           // var stav_per=document.getElementById('stavka_sel').value;
           //
           // var prstav_moth=document.getElementById('komis2').value;
           // prstav_moth=+prstav_moth;
           // var prstav_moth_ed=document.getElementById('komis2_sel').value;
           //
           //
           // stav_per=+stav_per;
           // if (stav_per==2){
           //     var ef_st1=(1+(i/12)) ;
           //
           //
           //     var ef_st2=Math.pow(ef_st1,12);
           //     // console.log(ef_st2);
           //
           // }
           // var ef_st=ef_st2-1;
           // ef_st=ef_st*100;
           // ef_st=ef_st.toFixed(2);
           // document.getElementById('pr_stav').value=ef_st;


		   
		   
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
           var summ_dolgpr1 =sum_perepl
           summ_dolgpr1=+summ_dolgpr1;

           var summ_dolg=summ_dolg1;
           //var summ_dolg=summ_dolg1+summ_dolgpr1;

           summ_dolg=+summ_dolg;


			for (var i = 1; i < n+1; i++) {	 var newSection = $('<tr class="block_uv"></tr>');
        newSection.html(
		
            '<td style="width:10%;">  <input type="text" class="sel_num"  value="0" readonly="readonly"> </td>\n <td style="width:15%;"> <input type="text" class="date_num"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="sum_plgr"  value="0" readonly="readonly"> </td>\n <td style="width:15%;"> <input type="text" class="osn_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="proz_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="komis"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="ost_dolg"  value="0" readonly="readonly"> </td>\n>'
              );
			$('#table_uv').append(newSection);
            }

           var st_sum = document.getElementsByClassName( "sel_num" ); // находим элементы с классом
           var plau = document.getElementsByClassName( "sum_plgr" ); // находим элементы с классом
           var plgr=pl1.toFixed(2);


           var years_grn = document.getElementById("year_sel").value;  // находим выбранный год
           var month_grn =document.getElementById("month_sel").value;  // находим выбранный месяц
           var n_moth = +month_grn;
            years_grn=+years_grn;
            var nyears_grn=0;
           var date_numgr= document.getElementsByClassName( "date_num" ); // находим элементы с классом
           // alert(years_gr);
           //alert(month_gr);
          // var summ_dolg = document.getElementById("summ").value;
           var pr_stavka = document.getElementById("stavka").value;
           var pr_stavgr= document.getElementsByClassName( "proz_dolg" ); // находим элементы с классом

           var osn_plgr= document.getElementsByClassName( "osn_dolg" ); // находим элементы с классом
           var summ_dolggr=document.getElementsByClassName("ost_dolg" ); // находим элементы с классом
           //console.log(summ_dolggr);

           var komis_gr=document.getElementsByClassName("komis" ); // находим элементы с классом Ежемесячные комиссии

           var z_kom2 = document.getElementById("komis2").value;

           var k_kom2 = document.getElementById("komis2_sel").value;






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



              // === Заполнение суммы платежа=====//
              //  plau[i].value=plgr;  // Заполнение суммы платежа


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


               komis_gr[i].value=kom2_grv; // Заполнение Ежемесячные комиссии

               // === Заполнение уточненной суммы платежа =====//

               var plgrv;
               plgrv=plgr+kom2_grvr;

               plgrv=plgrv.toFixed(2);
               plau[i].value=plgrv;  // Заполнение суммы платежа
               plgr=+plgr;



               // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg*pr_stavka/100)/12;
               summ_pr=summ_pr.toFixed(2);

               pr_stavgr[i].value=summ_pr;

               //=======Заполнение Ежемесячные комиссии====//

               var osn_plv=plgr-summ_pr;
               osn_plv=+osn_plv;
               osn_plv=osn_plv.toFixed(2);
               osn_plgr[i].value=osn_plv; // Заполнение Ежемесячные комиссии

               //=======Заполнение остатка задолженности======//
               var summ_dolg=summ_dolg-osn_plv;
              // console.log(summ_dolg);
               summ_dolg=+summ_dolg;
               summ_dolg=summ_dolg.toFixed(2);
               summ_dolggr[i].value=summ_dolg; // Заполнение остатка задолженности





           }



           //=======Итоговая переплата с учетом комиссий:=======//
           var prstav_moth_ed=document.getElementById('komis2_sel').value;
           var itog_pereplat=sum_perepl;

           if (prstav_moth_ed==1){
               var pr_kom=document.getElementById('komis2').value;
               pr_kom=pr_kom/100;
               var summ_d=document.getElementById('summ').value;
               var pr_summ=pr_kom*n*summ_d;
              // itog_pereplat=itog_pereplat+pr_summ;
               // alert(i);
           }

           var ed_moth_kom=document.getElementById('komis2_sel').value;

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
               var pr_moth_kom=document.getElementById('komis2').value;

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

           var ed_kom1=document.getElementById('komis1_sel').value;
           var z_kom1=document.getElementById('komis1').value;
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

           // document.getElementById('pereplat').value=itog_pereplat;
           // document.getElementById('val_summ2').value=valut;



           //=====вычисление эффективной процентной ставки======///
           var S0=document.getElementById('summ').value;


           var pr_S=itod_pereplv;

          // var pr_S=document.getElementById('pereplat').value;
           var pr_S=itog_pereplat;
           S0=+S0;
           pr_S=+pr_S;

           var S=S0+pr_S;
           // alert(S);
           // alert(S0);
           // alert(n);

           var ef_st= (((S/S0)-1))*100;



           ef_st=ef_st.toFixed(2);


           var valut=document.getElementById('summ_sel').value;


           var ef_stv=ef_st+''+valut;

           $('#itog_stav').text(ef_st);

           //document.getElementById('pr_stav').value=ef_st;







       }
	   
	   
	   if (sort_selv==2){



           //=====процентная ставка в месяц======///
           var mont_cr=document.getElementById('period').value;

           var mont_ed=document.getElementById('period_sel').value;
           mont_ed=+mont_ed;
           mont_cr=+mont_cr;
           var n =mont_cr*mont_ed;

           var period =document.getElementById('stavka_sel').value;
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
           //document.getElementById('mont_summ').value=pl;

           var valut=document.getElementById('summ_sel').value;
         //  document.getElementById('val_summ').value=valut;



           
		   
		   
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
		
            '<td style="width:10%;">  <input type="text" class="sel_num"  value="0" readonly="readonly"> </td>\n <td style="width:15%;"> <input type="text" class="date_num"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="sum_plgr"  value="0" readonly="readonly"> </td>\n <td style="width:15%;"> <input type="text" class="osn_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="proz_dolg"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="komis"  value="0" readonly="readonly"> </td>\n <td  style="width:15%"> <input type="text" class="ost_dolg"  value="0" readonly="readonly"> </td>\n>'
              );
			$('#table_uv').append(newSection);
            }

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

           var z_kom2 = document.getElementById("komis2").value;

           var k_kom2 = document.getElementById("komis2_sel").value;






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



          //=======Заполнение основной долг ====//
		  
		      //var summ_dolg = document.getElementById("summ").value;
			  //summ_dolg=+summ_dolg;
               var osn_plv=summ_dolg/n;
		        osn_plv=+osn_plv;
               osn_plv=osn_plv.toFixed(2);
               osn_plgr[i].value=osn_plv; // Вывод основного долга
			   
			    // =======Заполнение % платежа======//

                var summ_pr= (summ_dolg_ost*pr_stavka/100)/12;
               summ_pr=summ_pr.toFixed(2);

               pr_stavgr[i].value=summ_pr;


            //=======Заполнение остатка задолженности======//
              summ_dolg_ost=summ_dolg_ost-osn_plv;
              // console.log(summ_dolg);
               summ_dolg_ost=+summ_dolg_ost;
               summ_dolg_ost=summ_dolg_ost.toFixed(2);
               summ_dolggr[i].value=summ_dolg_ost; // Заполнение остатка задолженности




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


               komis_gr[i].value=kom2_grv; // Заполнение Ежемесячные комиссии

               // === Заполнение уточненной суммы платежа =====//

               var plgrv;
               plgrv=plgr+kom2_grvr;

               plgrv=plgrv.toFixed(2);
               plau[i].value=plgrv;  // Заполнение суммы платежа
               plgr=+plgr;



           }


       //======Переплата по процентам за кредит=======//
 
        var  per_pr=0;
               $('.proz_dolg').each(function () {
                   per_pr += parseFloat($(this).val())
               });
			   
            // alert(per_pr);


            var sum_perepl=per_pr;
           sum_perepl=Math.round(sum_perepl);


           //document.getElementById('pr_cr').value=sum_perepl;
           var sum_pereplv=sum_perepl+' '+valut;

           $('#pr').text(sum_pereplv);








           //=======Итоговая переплата с учетом комиссий:=======//
           var prstav_moth_ed=document.getElementById('komis2_sel').value;
           var itog_pereplat=sum_perepl;

           if (prstav_moth_ed==1){
               var pr_kom=document.getElementById('komis2').value;
               pr_kom=pr_kom/100;
               var summ_d=document.getElementById('summ').value;
               var pr_summ=pr_kom*n*summ_d;
              // itog_pereplat=itog_pereplat+pr_summ;
               // alert(i);
           }

           var ed_moth_kom=document.getElementById('komis2_sel').value;

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
               var pr_moth_kom=document.getElementById('komis2').value;

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

           var ed_kom1=document.getElementById('komis1_sel').value;
           var z_kom1=document.getElementById('komis1').value;
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
           // alert(S);
           // alert(S0);
           // alert(n);

           var ef_st= (((S/S0)-1))*100;


           ef_st=ef_st.toFixed(2);

           var valut=document.getElementById('summ_sel').value;


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







   });


	

  


});






