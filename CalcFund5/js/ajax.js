$( document ).ready(function() {
    $("#sm").click(
        function(){
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
            console.log(response);

            if (response.status !== 'ok') {
                alert('Somthing went wrong');
                return;
            }

            // result = $.parseJSON(response);
            // $('#result_form').show();
            //$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);

            var block = $('body .content');


            if (VarFund==1) {
                block.find('.zakas_smeta_lenta').show();
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').hide();

            }


            if (VarFund==2){
                block.find('.zakas_smeta_plita').show();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').hide();

            }

            if (VarFund==3){
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plitanr').show();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').hide();
            }

            if (VarFund==4){
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').show();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').hide();

            }

            if (VarFund==5){
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').show();
                block.find('.zakas_smeta_plitazok').hide();

            }

            if (VarFund==6){
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').show();

            }


            smeta();
            block.find('.zena').show();
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');

            $('#post_form_err').show();
        }
    });
}
