<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_org']) && !empty($_POST['user_org']) &&
    isset($_POST['user_mail']) && !empty($_POST['user_mail'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $user_mail = substr(htmlspecialchars(trim($_POST['user_mail'])), 0, 1000000);
    $user_org = substr(htmlspecialchars(trim($_POST['user_org'])), 0, 1000000);

    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'as@2eng.ru';
    $title = 'Бесплатное подключение';
    $message = "
        Был получен заказ с сайта бесплатное подключение
        Имя: $user_name
        Mail: $user_mail
        Организация: $user_org
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {

        header('Location: https://aleksandr.tupichenkov.com/LandMenu/#success', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/LandMenu/?form_error=1', true, 302);
        exit;
    }
}
?>


