<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['cod']) && !empty($_POST['cod']) &&
    isset($_POST['client_tel']) && !empty($_POST['client_tel'])) {
    $cod = substr(htmlspecialchars(trim($_POST['cod'])), 0, 1000);
    $client_tel = substr(htmlspecialchars(trim($_POST['client_tel'])), 0, 100);


    //$to = 'clublaser@mail.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Разделка вагонов';
    $message = "
        Был получен заказ с сайта от:
        Код страны: $cod
        Телефон клиента $TypeClient
        
       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        echo json_encode([
            'status' => 'ok',
        ]);

//        header('Location: https://aleksandr.tupichenkov.com/CalcFund3/#popup_block', true, 302);
        exit;
    } else {
        echo json_encode([
            'status' => 'error',
        ]);
        //header('Location: https://aleksandr.tupichenkov.com/CalcFund3/?form_error=1', true, 302);
        exit;
    }

}
?>