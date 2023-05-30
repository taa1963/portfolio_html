$( document ).ready(function() {

  


    $("#but_block6_1").click(function(){
        $('#calc_block7').addClass('calc_block_active');
        $('#calc_block6').addClass('calc_block_close');
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
                $('#calc_block7').addClass('calc_block_active');         

                
               // alert('Данные успешно отправлены. Мы Вам перезвоним в ближайшее время.');
                return;
            }

           		 
			 
        },
        error: function(response) { // Данные не отправлены

            $('#calc_block7').addClass('calc_block_active');
         
            //alert('Данные успешно отправлены. Мы Вам перезвоним в ближайшее время.');
        }
    });
}
