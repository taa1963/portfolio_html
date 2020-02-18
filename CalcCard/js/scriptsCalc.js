var  Zena,KpsKadstr,KchoseKadstr,KchoseKadstrV,jar,mon;

Zena=0;
KchoseKadstrV=0;


 




$(document).ready(function() {

    datav();
    datav2();
    datam();
    datam2();

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


   $("#calc_price").click(function () {

       var block = $(this).parents('.calculator');
       block.find('.calc_block_itog_table').show();
       block.find('.calc_block_itog_text').hide();

       del_sek();


       //=====вычисление эффективной процентной ставки======///

       var pr_cr=document.getElementById('stavka').value;
       pr_cr=+pr_cr;
       var i=pr_cr/100;
       var mont_cr=document.getElementById('period').value;

       var mont_ed=document.getElementById('period_sel').value;
       mont_ed=+mont_ed;
       mont_cr=+mont_cr;
       var n =mont_cr*mont_ed;
       var ef_st1=(1+(i/n)) ;
       var ef_st2=Math.pow(ef_st1,n);
       // var ef_st=ef_st2-1;

       var stav_per=document.getElementById('stavka_sel').value;

       stav_per=+stav_per;
        if (stav_per==2){
            var ef_st1=(1+(i/12)) ;
            var ef_st2=Math.pow(ef_st1,12);
           // console.log(ef_st2);

        }
       var ef_st=ef_st2-1;
       ef_st=ef_st*100;
       ef_st=ef_st.toFixed(2);
       document.getElementById('pr_stav').value=ef_st;

       //=====вычисление  ежемесячного платежа и переплат======///


       var sort_selv= document.getElementById('sort_sel').value;
       sort_selv=+sort_selv;

       if (sort_selv==1){
    //=====процентная ставка в месяц======///
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
           document.getElementById('mont_summ').value=pl;

           var valut=document.getElementById('summ_sel').value;
           document.getElementById('val_summ').value=valut;

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
           document.getElementById('pr_cr').value=sum_perepl;
           document.getElementById('val_summ1').value=valut;

           //=======Итоговая переплата с учетом комиссий:=======//

           var itog_pereplat=sum_perepl;
           document.getElementById('pereplat').value=itog_pereplat;
           document.getElementById('val_summ2').value=valut;
		   
		   
		    //=======График погащения:=======//
         //  $('#calc_block_detail').hide();
          // $('#calc_block_detail').show();

       //     var del_bl = document.getElementsByClassName('block_uv');
       //     var m=del_bl.length;
       //    // console.log(del_bl);
       //     //alert(m);
       //     if (m>0){
       //         console.log(m);
       //         console.log(del_bl);
       //         m=+m;
       //     // for (j = 0; j <= m-1; j++){
       //     //     del_bl[j].remove();
       //     //   // console.log(i);
       //     // }
       // }

           var mont_cr=document.getElementById('period').value;

           var mont_ed=document.getElementById('period_sel').value;
           mont_ed=+mont_ed;
           mont_cr=+mont_cr;
           var n =mont_cr*mont_ed;
           //alert(n);


           var summ_dolg1 = document.getElementById("summ").value;
           summ_dolg1=+summ_dolg1;

           var summ_dolgpr1 = document.getElementById("pr_cr").value;
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

           for (var i = 0; i < n; i++) {

                 var num=i+1;
               st_sum[i].value=num; // Заполнение номера платежа


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


               plau[i].value=plgr;  // Заполнение суммы платежа
               plgr=+plgr;

                var summ_pr= (summ_dolg*pr_stavka/100)/12;
               summ_pr=summ_pr.toFixed(2);

               pr_stavgr[i].value=summ_pr;// Заполнение % платежа

               var osn_plv=plgr-summ_pr;
               osn_plv=+osn_plv;
               osn_plv=osn_plv.toFixed(2);
               osn_plgr[i].value=osn_plv; // Заполнение основного долга

               var summ_dolg=summ_dolg-osn_plv;
              // console.log(summ_dolg);
               summ_dolg=+summ_dolg;
               summ_dolg=summ_dolg.toFixed(2);
               summ_dolggr[i].value=summ_dolg; // Заполнение остатка задолженности

           }


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






