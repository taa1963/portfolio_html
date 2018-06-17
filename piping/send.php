<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['mail1']) && !empty($_POST['mail1']) &&
    isset($_POST['tel1']) && !empty($_POST['tel1'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $user_mail = substr(htmlspecialchars(trim($_POST['mail1'])), 0, 1000);
    $user_phone = substr(htmlspecialchars(trim($_POST['tel1'])), 0, 1000000);


    $to = 'as333@2333e3ng.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта
        Имя: $user_name
        Маил: $user_name        
        Телефон: $user_phone
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {

        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/#success', true, 302);
        exit;
    } else {
        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/?form_error=1', true, 302);
        exit;
    }
}
?>


