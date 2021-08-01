$( document ).ready(function() {
    $('#but_block6_2').click(function () {
        var block = $(this).parents('.container_mob');
        block.find('.call_block1_mob').hide();
        block.find('.call_block1_mob_titel').hide();
        block.find('.call_block2_mob').hide();
        block.find('.call_block3_mob').hide();
        block.find('.call_block_nes_mob').hide();
        block.find('.call_block_setka_mob').hide();
        block.find('.call_block_samer1_mob').hide();
        block.find('.call_block_samer2_mob').hide();
        block.find('.call_block4_mob').hide();
        block.find('.call_block_sam_mob').hide();
        block.find('.call_block_itog_mob').hide();
        block.find('.call_block_QR_mob').show();
        block.find('.call_block_MAP_mob').hide();

        sendAjaxForm('result_form', 'form2m', 'send2.php');
        return false;
        //      }
//    );
    });


    $('#but_block6_2_dev').click(function () {
        var block = $(this).parents('.container');
        block.find('.call_block1').hide();
        block.find('.call_titel').hide();
        block.find('.call_block2').hide();
        block.find('.call_block3').hide();
        block.find('.call_block_nes').hide();
        block.find('.call_block_setka').hide();
        block.find('.call_block_samer1').hide();
        block.find('.call_block_samer2').hide();
        block.find('.call_block4').hide();
        block.find('.call_block_sam_dev').hide();
        block.find('.call_block_itog_dev').hide();
        block.find('.call_block_QR_dev').show();

        sendAjaxForm2('result_form', 'form2', 'send2.php');
        return false;



    });


    function sendAjaxForm(result_form, ajax_form, url) {
        $.ajax({
            url: url,

            type: "post", //метод отправки
            data: $("#" + ajax_form).serialize(),  // Сеарилизуем объект
            //dataType: "text", //формат данных
            dataType: "json", //формат данных
            success: function (response) { //Данные отправлены успешно
                //console.log(response);
                // отправляем данные в ГТМ
                dataLayer.push({'event': 'formSendCalk'});
                if (response.status !== 'ok') {
                    alert('Somthing went wrong');
                    return;
                }
                var block = $(this).parents('.container_mob');
                block.find('.call_block1_mob').hide();
                block.find('.call_block1_mob_titel').hide();
                block.find('.call_block2_mob').hide();
                block.find('.call_block3_mob').hide();
                block.find('.call_block_nes_mob').hide();
                block.find('.call_block_setka_mob').hide();
                block.find('.call_block_samer1_mob').hide();
                block.find('.call_block_samer2_mob').hide();
                block.find('.call_block4_mob').hide();
                block.find('.call_block_sam_mob').hide();
                block.find('.call_block_itog_mob').hide();
                block.find('.call_block_QR_mob').show();
                block.find('.call_block_MAP_mob').hide();

            },
            error: function (response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');

                $('#post_form_err').show();
            }
        });
    }

    function sendAjaxForm2(result_form, ajax_form, url) {
        $.ajax({
            url: url,

            type:     "post", //метод отправки
            data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
            //dataType: "text", //формат данных
            dataType: "json", //формат данных
            success: function(response) { //Данные отправлены успешно
                //console.log(response);
                // отправляем данные в ГТМ
                dataLayer.push({'event':'formSendCalk'});
                if (response.status !== 'ok') {
                    alert('Somthing went wrong');
                    return;
                }
                var block = $(this).parents('.container');
                block.find('.call_block1').hide();
                block.find('.call_titel').hide();
                block.find('.call_block2').hide();
                block.find('.call_block3').hide();
                block.find('.call_block_nes').hide();
                block.find('.call_block_setka').hide();
                block.find('.call_block_samer1').hide();
                block.find('.call_block_samer2').hide();
                block.find('.call_block4').hide();
                block.find('.call_block_sam_dev').hide();
                block.find('.call_block_itog_dev').hide();
                block.find('.call_block_QR_dev').show();

            },
            error: function(response) { // Данные не отправлены
                $('#result_form').html('Ошибка. Данные не отправлены.');

                $('#post_form_err').show();
            }
        });
    }


});