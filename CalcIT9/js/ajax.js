$( document ).ready(function() {

    $("#btn22").click(function(){
        elementUpdate();      
    });

    function elementUpdate() {
        $('.maillabel').addClass('maillabeladd');
         floor1_1();
         clear_sait1();
         clear_adapt1();
         clear_adapt2();
         clear_lizen1();  
         clear_ssl();
         clear_host();
         clear_domen();
         clear_rasdel();
         clear_func();
         clear_mag();
         clear_card();
         clear_zakaz();
         clear_dost();
         clear_oplata();
         clear_integr();
         clear_tz();
         calculator_floor2f1();
         clear_texpod();
         clear_contentf(); 
         clear_content2f();
         clear_hostdf();
         clear_tariff();
         clear_konsulf();
         calculator_floor3f();
         clear_tarif3f();
         calculator_floor4f();
         clear_jnd1f();
         clear_googlf();
         calculator_floor5ff();
         clear_settingsf();
         clear_zajvf();
         clear_tarifbfunc();
         clear_korobf();
       
      }






    $("#btn2").click(function(){

           sendAjaxForm('result_form', 'form1', 'send.php');
           return false;
        }
    );
});


function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url,

        type:     "post", //метод отправки
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        dataType: "json", //формат данных
        success: function(response) { //Данные отправлены успешно
            //console.log(response);
            // отправляем данные в ГТМ
			dataLayer.push({'event':'formSendCalk'});
            if (response.status !== 'ok') {
                //$('.plankal2').addClass('plankaadd');
                $('.maillabel').addClass('.maillabeladd');
                $('.maillabel').addClass('maillabeladd');
                floor1_1();
                clear_sait1();
                clear_adapt1();
                clear_adapt2();
                clear_lizen1();  
                clear_ssl();
                clear_host();
                clear_domen();
                clear_rasdel();
                clear_func();
                clear_mag();
                clear_card();
                clear_zakaz();
                clear_dost();
                clear_oplata();
                clear_integr();
                clear_tz();
                calculator_floor2f1();
                clear_texpod();
                clear_contentf(); 
                clear_content2f();
                clear_hostdf();
                clear_tariff();
                clear_konsulf();
                calculator_floor3f();
                clear_tarif3f();
                calculator_floor4f();
                clear_jnd1f();
                clear_googlf();
                calculator_floor5ff();
                clear_settingsf();
                clear_zajvf();
                clear_tarifbfunc();
                clear_korobf();
                
               // alert('Данные успешно отправлены. Мы Вам перезвоним в ближайшее время.');
                return;
            }

           		 
			 
        },
        error: function(response) { // Данные не отправлены

            $('.maillabel').addClass('maillabeladd');
         floor1_1();
         clear_sait1();
         clear_adapt1();
         clear_adapt2();
         clear_lizen1();  
         clear_ssl();
         clear_host();
         clear_domen();
         clear_rasdel();
         clear_func();
         clear_mag();
         clear_card();
         clear_zakaz();
         clear_dost();
         clear_oplata();
         clear_integr();
         clear_tz();
         calculator_floor2f1();
         clear_texpod();
         clear_contentf(); 
         clear_content2f();
         clear_hostdf();
         clear_tariff();
         clear_konsulf();
         calculator_floor3f();
         clear_tarif3f();
         calculator_floor4f();
         clear_jnd1f();
         clear_googlf();
         calculator_floor5ff();
         clear_settingsf();
         clear_zajvf();
         clear_tarifbfunc();
         clear_korobf();
            //alert('Данные успешно отправлены. Мы Вам перезвоним в ближайшее время.');
        }
    });
}
