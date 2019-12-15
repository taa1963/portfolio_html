

// function load1(){
//
// for (var i = 0; i < region.length; i++)  {
//
//         $('<option value="' + i + '">' + region[i] + '</option>').appendTo('#region');
//
// }
// };
//
// load1();






$(document).ready(function() {

    function load1(){

        for (var i = 0; i < region.length; i++)  {

            $('<option value="' + i + '">' + region[i] + '</option>').appendTo('#region');

        }
    };

    load1();


    //===== Открытие блоко при выборе региона   =====//

    $('#region').click(function (){

        var rigionv=document.getElementById('region').value;
        if (rigionv>=0){
            var block = $(this).parents('.calc_form');
            block.find('.compani').show();
            block.find('.tarif').show();
            compani();
            // alert(rigionv);


        }
        else{
            var block = $(this).parents('.calc_form');
            block.find('.compani').hide();
            block.find('.tarif').hide();
        }


    });


   function compani(){
       var rigionv=document.getElementById('region').value;
       var compani="compani"+rigionv;
       alert(compani);
     // var c;
     //   if (rigionv=0){
     //       c='compani0';
     //   }
     //   if (rigionv=1){
     //       c='compani1';
     //   }
      // alert(c);
       // toString: function() { return this.c; }
       //
       // var room = {
       //     number: compani0,
       //
       //       toString: function() { return this.number; }
       // };
       //
       //
       //
       // alert(room );  // 777, вызвался toString



       // var companiz = {
       //     c: companio,
       //     toString: function() {
       //         return  this.c;
       //     }
       // };

       var companiz=String(compani);
       alert(companiz );

       // var c;
       //     if (rigionv=0){
       //        c:'companio';
       //     }
       // if (rigionv=1){
       //     c:'compani1';
       // }
       //
       // alert(c);

       j=+companiz.length;
       alert(j);

       for (var i = 0; i < c.length; i++)  {
           $('<option value="' + i + '">' + c[i] + '</option>').appendTo('#companis');



       }


    }






});




