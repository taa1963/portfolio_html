$( document ).ready(function() {
    $("#sm").click(function(){

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
        //dataType: "text", //формат данных
        dataType: "json", //формат данных
        success: function(response) { //Данные отправлены успешно
            console.log(response);

            if (response.status !== 'ok') {
                alert('Somthing went wrong');
                return;
            }

            // result = $.parseJSON(response);
            // $('#result_form').show();



        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');

            $('#post_form_err').show();
        }
    });
}

