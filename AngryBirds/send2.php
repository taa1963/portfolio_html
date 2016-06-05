<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name2']) && !empty($_POST['user_name2']) &&
    isset($_POST['pol']) && !empty($_POST['pol']) &&
    isset($_POST['age']) && !empty($_POST['age']) &&
    isset($_POST['otkuda']) && !empty($_POST['otkuda']) &&
    isset($_POST['interess']) && !empty($_POST['interess']) &&
    isset($_POST['sites']) && !empty($_POST['sites']) &&
    isset($_POST['freetime']) && !empty($_POST['freetime']) &&
    isset($_POST['pawo']) && !empty($_POST['pawo']) &&
    isset($_POST['tema']) && !empty($_POST['tema'])) {


    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $pol = substr(htmlspecialchars(trim($_POST['pol'])), 0, 1000);
    $age = substr(htmlspecialchars(trim($_POST['age'])), 0, 1000);
    $otkuda = substr(htmlspecialchars(trim($_POST['otkuda'])), 0, 1000);
    $interess = substr(htmlspecialchars(trim($_POST['interess'])), 0, 1000);
    $sites = substr(htmlspecialchars(trim($_POST['sites'])), 0, 1000);
    $freetime = substr(htmlspecialchars(trim($_POST['freetime'])), 0, 1000);
    $pawo = substr(htmlspecialchars(trim($_POST['pawo'])), 0, 1000);
    $tema = substr(htmlspecialchars(trim($_POST['tema'])), 0, 1000000);


    $to = 'alexandr.tupichenkov@yandex.ru';
   // $to = 'nikonova.irina2010@ya.ru';
    $title = 'Новое скачивание';
    $message = "
        Был получен заказ с сайта от:
        Имя: $user_name
        Пол: $pol
        Возраст: $age
        Откуда узнали: $otkuda
        Ваши интересы: $interess
        Посещаемые сайты: $sites
        Свободное время: $freetime
        партворки: $pawo
        Тема: $tema
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


}
?>


