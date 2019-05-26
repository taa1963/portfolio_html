$( document ).ready(function() {
    $("#sm").click(function(){



            if (VarSM==1) {
                smeta();
                var block = $('body .content');
                block.find('.zakas_form1_title').hide();
                block.find('.zakas_smeta_lenta').hide();
                block.find('.zakas_smeta_plita').hide();
                block.find('.zakas_smeta_plitanr').hide();
                block.find('.zakas_smeta_plitavr').hide();
                block.find('.zakas_smeta_plitauhp').hide();
                block.find('.zakas_smeta_plitazok').hide();
                // document.getElementById('zena_mail').value = zena_mail;
                // alert(zena_mail);

            }


            if (VarFund==1) {

                document.getElementById('type').value = "Ленточный";

                var lang_mailr = document.getElementById('landf').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthf').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('elevationf').value;
                document.getElementById('elevation_mail').value = elevation_mailr;

                var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = breadthlf_mailr;


                var landlf_mailr = document.getElementById('landlf').value;
                document.getElementById('landlf_mail').value = landlf_mailr;

                var perimeterlf_mailr = document.getElementById('perimeterlf').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                document.getElementById('area_mail').value = "0";

                document.getElementById('pesok_mail').value = "0";

                document.getElementById('shebenka_mail').value = "0";

                document.getElementById('langrosv_mail').value = "0";

                document.getElementById('hrosv_mail').value = "0";

                var lkad_mailr = document.getElementById('distancelplf').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;
                // alert("zena_mail");

            }

            if (VarFund==2) {

                document.getElementById('type').value = "Плита";

                var lang_mailr = document.getElementById('landpli').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthpli').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('elevationf').value;
                document.getElementById('elevation_mail').value = elevation_mailr;

                //var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = 0;


                //var landlf_mailr = document.getElementById('landlf').value;
                document.getElementById('landlf_mail').value = 0;

                var perimeterlf_mailr = document.getElementById('perimplf').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                var area_mailr = document.getElementById('areapplf').value;
                document.getElementById('area_mail').value = area_mailr;

                var pesok_mailr = document.getElementById('pesokplf').value;
                document.getElementById('pesok_mail').value = pesok_mailr;

                var shebenka_mailr = document.getElementById('shebenplf').value;
                document.getElementById('shebenka_mail').value = shebenka_mailr;

                document.getElementById('langrosv_mail').value = "0";

                document.getElementById('hrosv_mail').value = "0";

                var lkad_mailr = document.getElementById('distancelentf').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;
            }

            if (VarFund==3) {

                document.getElementById('type').value = "Плита нижним  ростверком";

                var lang_mailr = document.getElementById('landplfnr').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthplfnr').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('elevationplnr').value;
                document.getElementById('elevation_mail').value = 0;

                //var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = elevation_mailr;


                //var landlf_mailr = document.getElementById('landlf').value;
                document.getElementById('landlf_mail').value = 0;

                var perimeterlf_mailr = document.getElementById('perimplfnr').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                var area_mailr = document.getElementById('areapplfnr').value;
                document.getElementById('area_mail').value = area_mailr;

                var pesok_mailr = document.getElementById('pesokplfnr').value;
                document.getElementById('pesok_mail').value = pesok_mailr;

                var shebenka_mailr = document.getElementById('shebenplfnr').value;
                document.getElementById('shebenka_mail').value = shebenka_mailr;

                var langrosv_mailr = document.getElementById('langplnr').value;
                document.getElementById('langrosv_mail').value = langrosv_mailr;

                var hrosv_mailr = document.getElementById('hplplnr').value;
                document.getElementById('hrosv_mail').value = hrosv_mailr;

                var lkad_mailr = document.getElementById('distancelentfnr').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;
            }

            if (VarFund==4) {

                document.getElementById('type').value = "Плита верхним  ростверком";

                var lang_mailr = document.getElementById('landplfvr').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthplfvr').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('elevationplvr').value;
                document.getElementById('elevation_mail').value = 0;

                //var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = elevation_mailr;


                //var landlf_mailr = document.getElementById('landlf').value;
                document.getElementById('landlf_mail').value = 0;

                var perimeterlf_mailr = document.getElementById('perimplfvr').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                var area_mailr = document.getElementById('areapplfvr').value;
                document.getElementById('area_mail').value = area_mailr;

                var pesok_mailr = document.getElementById('pesokplfvr').value;
                document.getElementById('pesok_mail').value = pesok_mailr;

                var shebenka_mailr = document.getElementById('shebenplfvr').value;
                document.getElementById('shebenka_mail').value = shebenka_mailr;

                var langrosv_mailr = document.getElementById('langplvr').value;
                document.getElementById('langrosv_mail').value = langrosv_mailr;

                var hrosv_mailr = document.getElementById('hplplvr').value;
                document.getElementById('hrosv_mail').value = hrosv_mailr;

                var lkad_mailr = document.getElementById('distancelentfvr').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;
            }

            if (VarFund==5) {

                document.getElementById('type').value = "Плита УШП";

                var lang_mailr = document.getElementById('landuhp').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthuhp').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('hpluhp').value;
                document.getElementById('elevation_mail').value = 0;

                //var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = elevation_mailr;


                var landlf_mailr = document.getElementById('langrebpluhp').value;
                document.getElementById('landlf_mail').value = landlf_mailr;

                var perimeterlf_mailr = document.getElementById('perimuhp').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                var area_mailr = document.getElementById('areauhp').value;
                document.getElementById('area_mail').value = area_mailr;

                var pesok_mailr = document.getElementById('pesokuhp').value;
                document.getElementById('pesok_mail').value = pesok_mailr;

                //var shebenka_mailr = document.getElementById('shebenplfvr').value;
                document.getElementById('shebenka_mail').value = 0;

                // var langrosv_mailr = document.getElementById('langplvr').value;
                document.getElementById('langrosv_mail').value = 0;

                //var hrosv_mailr = document.getElementById('hplplvr').value;
                document.getElementById('hrosv_mail').value = 0;

                var lkad_mailr = document.getElementById('distanceuhdp').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;
            }

            if (VarFund==6) {

                document.getElementById('type').value = "Цокольный";

                var lang_mailr = document.getElementById('landzok').value;
                document.getElementById('lang_mail').value = lang_mailr;

                var breadthf_mailr = document.getElementById('breadthzok').value;
                document.getElementById('breadthf_mail').value = breadthf_mailr;

                var elevation_mailr = document.getElementById('elevationzok').value;
                document.getElementById('elevation_mail').value = 0;

                //var breadthlf_mailr = document.getElementById('breadthlf').value;
                document.getElementById('breadthlf_mail').value = elevation_mailr;


                var landlf_mailr = document.getElementById('langrebpluhp').value;
                document.getElementById('landlf_mail').value = 0;

                var perimeterlf_mailr = document.getElementById('perimpzok').value;
                document.getElementById('perimeterlf_mail').value = perimeterlf_mailr;

                var area_mailr = document.getElementById('areazok').value;
                document.getElementById('area_mail').value = area_mailr;

                var pesok_mailr = document.getElementById('pesokzok').value;
                document.getElementById('pesok_mail').value = pesok_mailr;

                var shebenka_mailr = document.getElementById('shebenzok').value;
                document.getElementById('shebenka_mail').value = shebenka_mailr;

                // var langrosv_mailr = document.getElementById('langplvr').value;
                document.getElementById('langrosv_mail').value = 0;

                //var hrosv_mailr = document.getElementById('hplplvr').value;
                document.getElementById('hrosv_mail').value = 0;

                var lkad_mailr = document.getElementById('distancelentfzok').value;
                document.getElementById('lkad_mail').value = lkad_mailr;
                document.getElementById('zena_mail').value = zena_mail;

            }



            sendAjaxForm('result_form', 'form1', '../send.php');
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
            //$('#result_form').html('Имя: '+result.name+'<br>Телефон: '+result.phonenumber);
            VarMail=2;
            VarSM=2;

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

