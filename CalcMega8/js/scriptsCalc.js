var  Zena,KpsKadstr,KchoseKadstr,KchoseKadstrV;

Zena=0;
KchoseKadstrV=0;



$(document).ready(function() {

//Установка значений по умолчанию при открытие сайта.
document.getElementById('type_work').value = 1;
		 $(".object_type_block").addClass("l-hide");
		 $(".room_area_block").addClass("l-hide");
		 $(".number_points_block").addClass("l-hide");
		document.getElementById('region_work').value = 1;
        $(".distance_sp_block").addClass("l-hide");
        document.getElementById('Highway').value = 680;
    zena();






//================= Выбор "Регион работ".====================//


    $('#region_work').on('click change mouseenter', function()

    {

	 var reg = document.getElementById("region_work").value;
	 $('#reg').text(reg);

    //================= Выбор "Московская область".====================//

	if (reg == 1){
			  $(".distance_sp_block").addClass("l-hide");
			  $(".Highway_block").removeClass("l-hide");
			  $(".distance_mkad_block").removeClass("l-hide");
			   document.getElementById('mkad').value = 1;
		 }

    //================= Выбор "Москва".====================//
		 if (reg == 2){
			  $(".distance_sp_block").addClass("l-hide");
			  $(".Highway_block").addClass("l-hide");
			  $(".distance_mkad_block").addClass("l-hide");
		 }


    //================= Выбор "Санкт-Петербург".====================//
		 if (reg == 3){
			  $(".distance_sp_block").addClass("l-hide");
			  $(".distance_mkad_block").addClass("l-hide");
			  $(".Highway_block").addClass("l-hide");
		 }


    //================= Выбор "Ленинградская область".====================//
		 if (reg == 4){
			  $(".distance_sp_block").removeClass("l-hide");
			  $(".Highway_block").addClass("l-hide");
			  $(".distance_mkad_block").addClass("l-hide");
             document.getElementById('dist_sp').value = 1;
			 		  			 
		 }

    zena();
	
	
});



//================= Выбор УСЛУГИ.====================

    $('#type_work').on('click change mouseenter', function(){

	 var work = document.getElementById("type_work").value;
	 $('#work').text(work);

//================= Выбор "Межевание".====================//
    if (work == 1){
        $(".mezhi_types_block").removeClass("l-hide");
        $(".object_type_block").addClass("l-hide");
        $(".land_area_block").removeClass("l-hide");
        $(".room_area_block").addClass("l-hide");
        $(".number_points_block").addClass("l-hide");
        $(".Highway_block").removeClass("l-hide");
        $(".region_work_block").removeClass("l-hide");
        $(".distance_mkad_block").removeClass("l-hide");
        document.getElementById('region_work').value = 1;
        $(".distance_sp_block").addClass("l-hide");
        document.getElementById('Highway').value = 680;
   }

//================= Выбор "Вынос точек"===================
	if (work == 2){
			  $(".mezhi_types_block").addClass("l-hide");
              $(".object_type_block").addClass("l-hide");
              $(".land_area_block").addClass("l-hide");
              $(".room_area_block").addClass("l-hide");
              $(".number_points_block").removeClass("l-hide");
        	  $(".Highway_block").removeClass("l-hide");
              $(".region_work_block").removeClass("l-hide");
			  $(".distance_mkad_block").removeClass("l-hide");
              $(".distance_sp_block").addClass("l-hide");
              document.getElementById('region_work').value = 1;
              document.getElementById('number_points').value = 3;

      }



    //================= Выбор "Технический план"===================
    if (work == 3){
        $(".mezhi_types_block").addClass("l-hide");
        $(".object_type_block").removeClass("l-hide");
        document.getElementById('object_type').value = 1;

        $(".land_area_block").addClass("l-hide");
        $(".room_area_block").removeClass("l-hide");
        document.getElementById('room_area').value = 30;

        $(".number_points_block").addClass("l-hide");

        $(".Highway_block").removeClass("l-hide");
        $(".region_work_block").removeClass("l-hide");
        $(".distance_mkad_block").removeClass("l-hide");
        $(".distance_sp_block").addClass("l-hide");
        document.getElementById('region_work').value = 1;
        document.getElementById('number_points').value = 3;

    }


    //================= Выбор "Акт обследования"===================
    if (work == 4){
        $(".mezhi_types_block").addClass("l-hide");
        $(".object_type_block").addClass("l-hide");
        //document.getElementById('object_type').value = 1;

        $(".land_area_block").addClass("l-hide");
        $(".room_area_block").addClass("l-hide");
        //document.getElementById('room_area').value = 30;

        $(".number_points_block").addClass("l-hide");

        $(".Highway_block").removeClass("l-hide");
        $(".region_work_block").removeClass("l-hide");
        $(".distance_mkad_block").removeClass("l-hide");
        $(".distance_sp_block").addClass("l-hide");
        document.getElementById('region_work').value = 1;
        document.getElementById('number_points').value = 3;

    }

    //================= Выбор "Подача документов в Росреестр"===================
    if (work == 5){
        $(".mezhi_types_block").addClass("l-hide");
        $(".object_type_block").addClass("l-hide");
        $(".land_area_block").addClass("l-hide");
        $(".room_area_block").addClass("l-hide");
        $(".number_points_block").addClass("l-hide");
        $(".Highway_block").addClass("l-hide");
        $(".region_work_block").addClass("l-hide");
        $(".distance_mkad_block").addClass("l-hide");
        $(".distance_sp_block").addClass("l-hide");


    }

//================= Выбор "Исправление кадастровых ошибок"===================


    if (work == 6){
        $(".mezhi_types_block").addClass("l-hide");
        $(".object_type_block").addClass("l-hide");
        //document.getElementById('object_type').value = 1;

        $(".land_area_block").addClass("l-hide");
        document.getElementById('land').value = 5;

        $(".room_area_block").addClass("l-hide");
        //document.getElementById('room_area').value = 30;

        $(".number_points_block").addClass("l-hide");

        $(".Highway_block").removeClass("l-hide");
        $(".region_work_block").removeClass("l-hide");
        $(".distance_mkad_block").removeClass("l-hide");
        $(".distance_sp_block").addClass("l-hide");
        document.getElementById('region_work').value = 1;
        document.getElementById('number_points').value = 3;
    }
    zena();
});


//===== Вызов расчета цены при выборе статуса клиента Физ или Юр   =====//
    $('#owner').on('click change mouseenter', function(){
        zena();
    });


    //===== Вызов расчета цены при выборе Региона работ   =====//
    $('#mkad').click(function (){
        zena();
    });

    //===== Вызов расчета цены при вводе Удаленность от Санкт-Петербурга   =====//

     $('#dist_sp').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
         var KpsKadstr = document.getElementById("dist_sp").value;
         zena();
     });


    $('#dist_sp').bind('change keyup',function () {
        var KpsKadstr = document.getElementById("dist_sp").value;
         zena();
    });


    //===== Вызов расчета цены при вводе Удаленность от  МКАД    =====//

     $('#mkad').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
         var KmkadKadstr = document.getElementById("mkad").value;
         zena();
     });


    $('#mkad').bind('change keyup',function () {
        var KmkadKadstr = document.getElementById("mkad").value;
         zena();
    });

	//===== Вызов расчета цены при вводе Количества точек    =====//

     $('#number_points').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
         var KNum = document.getElementById("number_points").value;
         zena();
     });


    $('#number_points').bind('change keyup',function () {
        var KNum = document.getElementById("number_points").value;
         zena();
    });
	
	

    //===== Вызов расчета цены при выборе Шоссе  МКАД    =====//

    $('#Highway').on('click change mouseenter', function () {
    //$('#Highway').click(function (){
      zena();
    });


    //===== Вызов расчета цены при выборе Вид межевания    =====//
    $('#mezhi_types').on('click change mouseenter', function () {
   // $('#mezhi_types').click(function (){
        zena();
    });



        //===== Вызов расчета цены при вводе Площадь участка     =====//

    $('#land').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
        var Kland = document.getElementById("land").value;
        zena();
    });


    $('#land').bind('change keyup',function () {
        var Kland = document.getElementById("land").value;
        zena();
    });

//===== Вызов расчета цены при выборе Площадь помещения    =====//
    $('#room_area').keypress(function(e) {
        if (( e.which==8 ||e.which==44 ||e.which==45 ||e.which==46 )) return false;
        var Kroom = document.getElementById("room_area").value;
        zena();
    });


    $('#room_area').bind('change keyup',function () {
        var Kroom = document.getElementById("room_area").value;
        zena();
    });



    //===== Вызов расчета цены при выборе Вид объекта    =====//
    $('#object_type').on('click change mouseenter', function () {
   // $('#object_type').click(function (){
        zena();
    });







    //============== Вычисление окончательной цены ===================================//

    function zena() {


        //============== Вычисление цены для "Подача документов в Росреестр"  ===================================//

        if (document.getElementById("type_work").value == 5) {
            //Физ. Лицо
            if (document.getElementById("owner").value == 1) {
                Zena = 5000;
                $('#Zena').text(Zena);
            }
            //Юр. Лицо
            if (document.getElementById("owner").value == 2) {
                Zena = 8500;
                $('#Zena').text(Zena);
            }
        }

//============== Вычисление цены для "Исправление кадастровых ошибок" и "Акт обследования"  ===================================//

        if ((document.getElementById("type_work").value == 6) || (document.getElementById("type_work").value == 4)) {

            //Физ. Лицо
            if (document.getElementById("owner").value == 1) {

                if (document.getElementById("type_work").value == 6) {
                    KKadsr = 101889;


                }
                if (document.getElementById("type_work").value == 4) {
                    KKadsr = 9000;
                }


                //Москва
                if (document.getElementById("region_work").value == 2) {
                    Zena = KKadsr;
                    $('#Zena').text(Zena);
                }

                //Санкт-Петербург
                if (document.getElementById("region_work").value == 3) {
                    Zena = KKadsr;
                    $('#Zena').text(Zena);
                }

                //Ленинградская область
                if (document.getElementById("region_work").value == 4) {
                    var KpsKadstr = document.getElementById("dist_sp").value;
                    KpsKadstr = +KpsKadstr;
                    $('#KpsKadstr').text(KpsKadstr);
                    ZenaR = KKadsr + 30 * KpsKadstr;
                    Zena = +ZenaR;
                    $('#Zena').text(Zena);
                }


                //Московская область
                if (document.getElementById("region_work").value == 1) {
                    var KmkadKadstr = document.getElementById("mkad").value;
                    KmkadKadstr = +KmkadKadstr;
                    $('#KmkadKadstr').text(KmkadKadstr);
                    KchoseKadstrV = -250;

                    var KchoseKadstr = document.getElementById("Highway").value;
                    KchoseKadstr = +KchoseKadstr;
                    $('#KchoseKadstr').text(KchoseKadstr);
                    KchoseKadstrV = KchoseKadstr;
                    $('#KchoseKadstrV').text(KchoseKadstrV);


                    // if (KchoseKadstr==1){

                    ZenaR = KKadsr + 30 * KmkadKadstr + KchoseKadstrV;

                    Zena = +ZenaR;

                    $('#Zena').text(Zena);

                }


            }

            //Юр. Лицо

            if (document.getElementById("owner").value == 2) {
                if (document.getElementById("type_work").value == 6) {
                    KKadsr = 172511;
                }

                if (document.getElementById("type_work").value == 4) {
                    KKadsr = 14600;
                }


                //Москва
                if (document.getElementById("region_work").value == 2) {
                    Zena = KKadsr;
                    $('#Zena').text(Zena);
                }

                //Санкт-Петербург
                if (document.getElementById("region_work").value == 3) {
                    Zena = KKadsr;
                    $('#Zena').text(Zena);
                }

                //Ленинградская область
                if (document.getElementById("region_work").value == 4) {
                    var KpsKadstr = document.getElementById("dist_sp").value;
                    KpsKadstr = +KpsKadstr;
                    $('#KpsKadstr').text(KpsKadstr);
                    ZenaR = KKadsr + 30 * KpsKadstr;
                    Zena = +ZenaR;
                    $('#Zena').text(Zena);

                }


                //Московская область
                if (document.getElementById("region_work").value == 1) {
                    var KmkadKadstr = document.getElementById("mkad").value;
                    KmkadKadstr = +KmkadKadstr;
                    $('#KmkadKadstr').text(KmkadKadstr);

                    var KchoseKadstr = document.getElementById("Highway").value;
                    KchoseKadstr = +KchoseKadstr;
                    $('#KchoseKadstr').text(KchoseKadstr);
                    KchoseKadstrV = KchoseKadstr;
                    $('#KchoseKadstrV').text(KchoseKadstrV);

                    ZenaR = KKadsr + 30 * KmkadKadstr + KchoseKadstrV;

                    Zena = +ZenaR;

                    $('#Zena').text(Zena);

                }

            }

        }


        //======================================================

        //============== Вычисление цены для "Вынос точек"  ===================================//

        if (document.getElementById("type_work").value == 2) {

            //Физ. Лицо
            if (document.getElementById("owner").value == 1) {


                if (document.getElementById("number_points").value <= 2) {
                    KNumV = 7000;


                }
                if (document.getElementById("number_points").value == 3) {
                    KNumV = 6100;
                }

                if (document.getElementById("number_points").value == 4) {
                    KNumV = 6000;
                }

                if (document.getElementById("number_points").value == 5) {
                    KNumV = 7000;
                }

                if (document.getElementById("number_points").value >= 6) {
                    var KNum = document.getElementById("number_points").value;
                    KNumV = 7600 + (KNum - 6) * 1100;
                }


                //Москва
                if (document.getElementById("region_work").value == 2) {
                    Zena = KNumV;
                    $('#Zena').text(Zena);
                }

                //Санкт-Петербург
                if (document.getElementById("region_work").value == 3) {
                    Zena = KNumV;
                    $('#Zena').text(Zena);
                }

                //Ленинградская область
                if (document.getElementById("region_work").value == 4) {
                    var KpsKadstr = document.getElementById("dist_sp").value;
                    KpsKadstr = +KpsKadstr;
                    $('#KpsKadstr').text(KpsKadstr);

                    ZenaR = KNumV + 30 * KpsKadstr;
                    Zena = +ZenaR;
                    $('#Zena').text(Zena);

                }


                //Московская область
                if (document.getElementById("region_work").value == 1) {
                    var KmkadKadstr = document.getElementById("mkad").value;
                    KmkadKadstr = +KmkadKadstr;
                    $('#KmkadKadstr').text(KmkadKadstr);

                    var KchoseKadstr = document.getElementById("Highway").value;
                    KchoseKadstr = +KchoseKadstr;
                    $('#KchoseKadstr').text(KchoseKadstr);
                    KchoseKadstrV = KchoseKadstr;
                    $('#KchoseKadstrV').text(KchoseKadstrV);


                    ZenaR = KNumV + 30 * KmkadKadstr + KchoseKadstrV;

                    Zena = +ZenaR;

                    $('#Zena').text(Zena);

                }


            }

            //Юр. Лицо

            if (document.getElementById("owner").value == 2) {

                if (document.getElementById("number_points").value <= 2) {
                    KNumV = 11200;


                }
                if (document.getElementById("number_points").value == 3) {
                    KNumV = 9670;
                }

                if (document.getElementById("number_points").value == 4) {
                    KNumV = 9500;
                }

                if (document.getElementById("number_points").value == 5) {
                    KNumV = 11200;
                }

                if (document.getElementById("number_points").value >= 6) {
                    var KNum = document.getElementById("number_points").value;
                    KNumV = 12220 + (KNum - 6) * 1870;
                }


                //Москва//Москва
                if (document.getElementById("region_work").value == 2) {
                    Zena = KNumV;
                    $('#Zena').text(Zena);
                }

                //Санкт-Петербург
                if (document.getElementById("region_work").value == 3) {
                    Zena = KNumV;
                    $('#Zena').text(Zena);
                }

                //Ленинградская область
                if (document.getElementById("region_work").value == 4) {
                    var KpsKadstr = document.getElementById("dist_sp").value;
                    KpsKadstr = +KpsKadstr;
                    $('#KpsKadstr').text(KpsKadstr);

                    ZenaR = KNumV + 30 * KpsKadstr;
                    Zena = +ZenaR;
                    $('#Zena').text(Zena);

                }


                //Московская область
                if (document.getElementById("region_work").value == 1) {
                    var KmkadKadstr = document.getElementById("mkad").value;
                    KmkadKadstr = +KmkadKadstr;
                    $('#KmkadKadstr').text(KmkadKadstr);

                    var KchoseKadstr = document.getElementById("Highway").value;
                    KchoseKadstr = +KchoseKadstr;
                    $('#KchoseKadstr').text(KchoseKadstr);
                    KchoseKadstrV = KchoseKadstr;
                    $('#KchoseKadstrV').text(KchoseKadstrV);


                    ZenaR = KNumV + 30 * KmkadKadstr + KchoseKadstrV;

                    Zena = +ZenaR;

                    $('#Zena').text(Zena);

                }


            }


        }
        //=============================================================================//





        //============== Вычисление цены для "Межевой план"  ===================================//

        if (document.getElementById("type_work").value == 1) {

            //============== Вычисление цены для "Межевание" для "Уточнение границ" ===================================//

            if ((document.getElementById("mezhi_types").value == 1)||(document.getElementById("mezhi_types").value == 2))


            {


            //Физ. Лицо
                if (document.getElementById("owner").value == 1) {


                    if (document.getElementById("land").value<= 3) {
                        KlandV = 11000;
                    }

                    if (document.getElementById("land").value>= 4) {
                        KlandV = 12000;
                    }
                    if (document.getElementById("land").value>= 6) {
                        KlandV = 13000;
                    }
                    if (document.getElementById("land").value>= 12) {
                        KlandV = 14000;
                    }
                    if (document.getElementById("land").value>= 24) {
                        KlandV = 15000;
                    }
                    if (document.getElementById("land").value>= 36) {
                        KlandV = 15000;
                    }
                    if (document.getElementById("land").value>= 38) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 16000 +(Kland-37)*406+22;
                    }





                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }

            //Юр. Лицо

                if (document.getElementById("owner").value == 2) {


                    if (document.getElementById("land").value<= 3) {
                        KlandV = 18000;
                    }

                    if (document.getElementById("land").value>= 4) {
                        KlandV = 19700;
                    }
                    if (document.getElementById("land").value>= 6) {
                        KlandV = 21400;
                    }
                    if (document.getElementById("land").value>= 12) {
                        KlandV = 23100;
                    }
                    if (document.getElementById("land").value>= 24) {
                        KlandV = 24800;
                    }
                    if (document.getElementById("land").value>= 36) {
                        KlandV = 26500;
                    }
                    if (document.getElementById("land").value>= 38) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 27228 +(Kland-38)*690;
                    }





                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }
            }


            //============== Вычисление цены для "Объединение земельных участков"  ===================================//

            if (document.getElementById("mezhi_types").value == 3){


                //Физ. Лицо
                if (document.getElementById("owner").value == 1) {


                    if (document.getElementById("land").value<= 23) {
                        KlandV = 8000;
                    }

                    if (document.getElementById("land").value>= 24) {
                        KlandV = 10000;
                    }
                    if (document.getElementById("land").value>= 36) {
                        KlandV = 12000;
                    }

                    if (document.getElementById("land").value>= 38) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 12000 +(Kland-37)*325+25;
                    }





                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }

                //Юр. Лицо

                if (document.getElementById("owner").value == 2) {


                    if (document.getElementById("land").value<= 23) {
                        KlandV = 13600;
                    }

                    if (document.getElementById("land").value>= 24) {
                        KlandV = 17000;
                    }
                    if (document.getElementById("land").value>= 36) {
                        KlandV = 20440;
                    }

                    if (document.getElementById("land").value>= 38) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 21000 +(Kland-38)*652;
                    }


                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }
            }


            //============== Вычисление цены для "Раздел (выдел) земельного участка"  ===================================//

            if (document.getElementById("mezhi_types").value == 4){


                //Физ. Лицо
                if (document.getElementById("owner").value == 1) {


                    if (document.getElementById("land").value<= 11) {
                        KlandV = 8000;
                    }

                    if (document.getElementById("land").value>= 12) {
                        KlandV = 9000;
                    }
                    if (document.getElementById("land").value>= 24) {
                        KlandV = 12000;
                    }

                    if (document.getElementById("land").value>= 31) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 12000 +(Kland)*400;
                    }





                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }

                //Юр. Лицо

                if (document.getElementById("owner").value == 2) {


                    if (document.getElementById("land").value<= 11) {
                        KlandV = 13600;
                    }

                    if (document.getElementById("land").value>= 12) {
                        KlandV = 15300;
                    }

                    if (document.getElementById("land").value>= 25) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 17000 +(Kland-34)*680;
                    }


                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }
            }



            //============== Вычисление цены для "Перераспределение земельных участков"  ===================================//

            if (document.getElementById("mezhi_types").value == 5){


                //Физ. Лицо
                if (document.getElementById("owner").value == 1) {


                    if (document.getElementById("land").value<= 10) {
                        KlandV = 10000;
                    }



                    if (document.getElementById("land").value>= 11) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 10000 +(Kland)*1000;
                    }





                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }

                //Юр. Лицо

                if (document.getElementById("owner").value == 2) {


                    if (document.getElementById("land").value<= 10) {
                        KlandV = 17000;
                    }



                    if (document.getElementById("land").value>= 11) {
                        var Kland =document.getElementById("land").value;

                        KlandV = 17000 +(Kland-10)*17080;
                    }


                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KlandV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KlandV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KlandV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }
            }

            //===================================
    }



  //=============================================================================//

        //============== Вычисление цены для "Технический план"  ===================================//

        if (document.getElementById("type_work").value == 3) {

            //============== Вычисление цены для "Перераспределение земельных участков"  ===================================//

            //if (document.getElementById("mezhi_types").value == 5){


                //Физ. Лицо
                if (document.getElementById("owner").value == 1) {


                    //Жилой дом
                    if (document.getElementById("object_type").value == 1) {
                        if (document.getElementById("room_area").value<= 99) {
                            KobV = 13000;
                        }
                        if (document.getElementById("room_area").value>= 100) {
                            KobV = 14000;
                        }
                        if (document.getElementById("room_area").value>= 150) {
                            KobV = 15000;
                        }
                        if (document.getElementById("room_area").value>= 200) {
                            KobV = 17000;
                        }
                        if (document.getElementById("room_area").value>= 250) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 19000 +(Kob-250)*72;
                        }


                    }



                    //Квартира
                    if (document.getElementById("object_type").value == 2) {
                        if (document.getElementById("room_area").value<= 55) {
                            KobV = 7000;
                        }
                        if (document.getElementById("room_area").value>= 56) {
                            KobV = 8000;
                        }
                        if (document.getElementById("room_area").value>= 60) {
                            KobV = 9000;
                        }
                        if (document.getElementById("room_area").value>= 90) {
                            KobV = 10000;
                        }
                        if (document.getElementById("room_area").value>= 120) {
                            KobV = 11000;
                        }

                        if (document.getElementById("room_area").value>= 180) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 19060 +(Kob-180)*67;
                        }


                    }

                    //Гараж
                    if (document.getElementById("object_type").value == 3) {
                        if (document.getElementById("room_area").value<= 49) {
                            KobV = 11000;
                        }
                        if (document.getElementById("room_area").value>= 50) {
                            KobV = 13000;
                        }
                        if (document.getElementById("room_area").value>= 60) {
                            KobV = 9000;
                        }
                        if (document.getElementById("room_area").value>= 90) {
                            KobV = 10000;
                        }
                        if (document.getElementById("room_area").value>= 120) {
                            KobV = 11000;
                        }

                        if (document.getElementById("room_area").value>= 180) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 19029 +(Kob-179)*129;
                        }



                    }

                    //Машино-место
                    if (document.getElementById("object_type").value == 4) {
                        if (document.getElementById("room_area").value<= 100) {
                            KobV = 11000;
                        }

                        if (document.getElementById("room_area").value>= 101) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 11000 +(Kob-100)*100;
                        }
                    }

                    //Нежилое помещение
                    if (document.getElementById("object_type").value == 5) {
                        if (document.getElementById("room_area").value<= 99) {
                            KobV = 12000;
                        }
                        if (document.getElementById("room_area").value>= 100) {
                            KobV = 13000;
                        }
                        if (document.getElementById("room_area").value>= 150) {
                            KobV = 14000;
                        }
                        if (document.getElementById("room_area").value>= 200) {
                            KobV = 15000;
                        }
                        if (document.getElementById("room_area").value>= 250) {
                            KobV = 16000;
                        }


                        if (document.getElementById("room_area").value>= 300) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 19200 +(Kob-300)*54;
                        }
                    }

                    //Здание
                    if (document.getElementById("object_type").value == 6) {

                        if (document.getElementById("room_area").value<= 229) {
                            KobV = 16000;
                        }
                        if (document.getElementById("room_area").value>= 230) {
                            var Kob =document.getElementById("room_area").value;

                            KobV = 17100 +(Kob-230)*70;
                        }

                    }

                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KobV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KobV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KobV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KobV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;

                        $('#Zena').text(Zena);

                    }


                }



                //======Юр. Лицо=======

                if (document.getElementById("owner").value == 2) {



                    //Жилой дом
                    if (document.getElementById("object_type").value == 1) {
                        KobV = 28331;
                    }

                    //Квартира
                    if (document.getElementById("object_type").value == 2) {
                        KobV = 27539;
                    }

                    //Гараж
                    if (document.getElementById("object_type").value == 3) {
                        KobV = 52097;
                    }

                    //Машино-место
                    if (document.getElementById("object_type").value == 4) {
                        KobV = 40610;
                    }

                    //Нежилое помещение
                    if (document.getElementById("object_type").value == 5) {
                        KobV = 25162;
                    }

                    //Здание
                    if (document.getElementById("object_type").value == 6) {
                        KobV = 28727;
                    }







                    //Москва
                    if (document.getElementById("region_work").value == 2) {
                        Zena = KobV;
                        $('#Zena').text(Zena);
                    }

                    //Санкт-Петербург
                    if (document.getElementById("region_work").value == 3) {
                        Zena = KobV;
                        $('#Zena').text(Zena);
                    }

                    //Ленинградская область
                    if (document.getElementById("region_work").value == 4) {
                        var KpsKadstr = document.getElementById("dist_sp").value;
                        KpsKadstr = +KpsKadstr;
                        $('#KpsKadstr').text(KpsKadstr);

                        ZenaR = KobV + 30 * KpsKadstr;
                        Zena = +ZenaR;
                        $('#Zena').text(Zena);

                    }


                    //Московская область
                    if (document.getElementById("region_work").value == 1) {
                        var KmkadKadstr = document.getElementById("mkad").value;
                        KmkadKadstr = +KmkadKadstr;
                        $('#KmkadKadstr').text(KmkadKadstr);

                        var KchoseKadstr = document.getElementById("Highway").value;
                        KchoseKadstr = +KchoseKadstr;
                        $('#KchoseKadstr').text(KchoseKadstr);
                        KchoseKadstrV = KchoseKadstr;
                        $('#KchoseKadstrV').text(KchoseKadstrV);


                        ZenaR = KobV + 30 * KmkadKadstr + KchoseKadstrV;

                        Zena = +ZenaR;
                        $('#Zena').text(Zena);
                    }
                }

        }
      //============ Блок подготовки данных к перчати  =======================//

        var TypeClient = $("#owner option:selected").text();
        $('#TypeClient').text(TypeClient);
        document.getElementById("TypeClient").value = TypeClient;

       //--------------------------------------------------//

        Form_Zena=+Zena;
        $('#Form_Zena').text(Form_Zena);
        document.getElementById("FormZena").value = Form_Zena;


      //--------------------------------------------------//

        var Form_workP = $("#type_work option:selected").text();
         $('#Form_workP').text(Form_workP);
        document.getElementById("ClientWork").value = Form_workP;

        //-------------------------------------//
        var Form_regionP = $("#region_work option:selected").text();
        $('#Form_regionP').text(Form_regionP);
        document.getElementById("ClientRegion").value = Form_regionP;


        var HeadR = document.getElementById("type_work").value;
         if (HeadR==1){
             HeadV="Цена межевания участка";
         }

        if (HeadR==2){
            HeadV="Цена выноса точек";
        }

        if (HeadR==3){
            HeadV="Цена технического плана";
        }

        if (HeadR==4){
            HeadV="Цена акта обследования";
        }

        if (HeadR==5){
            HeadV="Цена подачи документов в Росреест";
        }
        if (HeadR==6){
            HeadV="Цена исправления кадастровых ошибок";
        }

        $('#HeadV').text(HeadV);
        document.getElementById("HeadV").value = HeadV;


    };
});




