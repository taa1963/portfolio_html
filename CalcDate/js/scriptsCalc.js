
$(document).ready(function() {


    document.getElementById('summv').value=summ_str;
    document.getElementById('date1').value=date_begin_period;
    document.getElementById('date2').value=date_end_period;



    // function datam2() {
    //     var j=document.getElementsByClassName('month').length;
    //     for (var i = 0; i < j; i++) {
    //         var mothv=document.getElementsByClassName('month')[i].value;
    //         if (mothv==mon){
    //             document.getElementsByClassName('month')[i].selected = true;
    //         }
    //     }
    // }


   $("#calc_price").click(function () {

       var date1v = Date.parse( date1.value ); // введенное время Дата сдачи (по договору)
       //alert(date1v);

       var date2v = Date.parse( date2.value ); // введенное время Дата сдачи (фактическая)
       //alert(date1v);

       var dater=(date2v-date1v)/(1000*3600*24);
       //alert(dater);

       var summ_v=document.getElementById('summv').value;
       summ_v=+summ_v;

       if (summ_v<0){
           var block = $(this).parents('.calculator');
           block.find('.calc_summ_err').show();
         }
         else{
           var block = $(this).parents('.calculator');
           block.find('.calc_summ_err').hide();
       }


       if (dater<0) {
           var block = $(this).parents('.calculator');
           block.find('.calc_date_err').show();
          // alert(1);

       }

       else{
           var block = $(this).parents('.calculator');
           block.find('.calc_date_err').hide();
           // alert(2);
       }

	   
	   if ((dater>0)&&(summ_v>0)) {
		  var block = $(this).parents('.calculator');
         block.find('.calc_block_out').show();

         var n=period.length;

           for (var i = 0; i < n; i++)  {
             var date_beg_p= Date.parse(period[i].date_begin);
              var date_end_p= Date.parse(period[i].date_end);
              var stavka_p= period[i].stavka;



               if ((date1v>=date_beg_p)&&(date2v<=date_end_p)){
                   summ_r=0;
                   summ_r=summ_r+dater*summ_v*stavka_p/(100*365);
                    break;
               }
               else {

                   if ((date1v <= date_end_p) && (date2v > date_end_p)) {
                       var date_del = (date_end_p - date1v) / (1000 * 3600 * 24);
                       dater = (date2v - date1v) / (1000 * 3600 * 24);
                       // var date_ost=(dater-date_del);
                       summ_r = summ_r + date_del * summ_v * stavka_p / (100 * 365);
                       date1v = date_end_p + 1;

                   }
               }


           }


           summ_r=Math.round(summ_r);
           $('#summ').text(summ_r);


           var summ_r_straf=summ_r/2;
           summ_r_straf=Math.round(summ_r_straf);
           $('#summ_pr').text(summ_r_straf);


           var summ_r_itog=summ_r+summ_r_straf;
           $('#summ_itog').text(summ_r_itog);


	   }
   });


  


});






