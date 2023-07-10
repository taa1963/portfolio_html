$( document ).ready(function() {

  


    $("#but_block_adm_3").click(function(){
        var ZbutovkaAdmv=document.getElementById('ZbutovkaAdm').value;

        var strvv='';
        strvv=strvv+'//======== Бытовка металлическая========//'+"\n";
        strvv=strvv+'var Zbutovka='+' '+ZbutovkaAdmv+';'+'//Цена бытовки'+"\n" ;
        // strvv=strvv+'var Zbutovkapr='


         $('#stsx').text(strvv);
         var block = $(this).parents('.zakas');
        block.find('.zakas_block_admin2').show();
        block.find('.zakas_block_admin1').hide();
        block.find('.zakas_block1').hide();
        block.find('.zakas_block2').hide();
        block.find('.zakas_block3').hide();
        block.find('.zakas_block3').hide();
        //alert(2)




           sendAjaxForm('result_form', 'form1', 'saves.php');
           return false;
        }
    );
});


function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url,

        type:     "post", //метод отправки
        data: $("#"+ajax_form).serialize(),  // Сеарилизуем объект
        dataType: "html", //формат данных
        success: function(response) { //Данные отправлены успешно
            console.log(response);
            // отправляем данные в ГТМ
			dataLayer.push({'event':'formSendCalk'});
            if (response.status !== 'ok') {
                //$('.plankal2').addClass('plankaadd');
                

                
                alert('Данные успешно отправлены. Мы Вам перезвоним в ближайшее время.');
                return;
            }

           		 
			 
        },
        error: function(response) { // Данные не отправлены

           
         
            alert('Данные yyyyyy  успешно отправлены. Мы Вам перезвоним в ближайшее время.');
        }
    });
}
