<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name1']) && !empty($_POST['user_name1']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1']) &&
    isset($_POST['kiosk']) && !empty($_POST['kiosk'])) {

    $user_name1 = substr(htmlspecialchars(trim($_POST['user_name1'])), 0, 1000);
    $fon1 = substr(htmlspecialchars(trim($_POST['fon1'])), 0, 1000);
    $email1 = substr(htmlspecialchars(trim($_POST['email1'])), 0, 1000000);
    $city = substr(htmlspecialchars(trim($_POST['city'])), 0, 1000000);
    $kiosk = substr(htmlspecialchars(trim($_POST['kiosk'])), 0, 1000000);


    $to = 'alexandr.tupichenkov@yandex.ru';
   // $to = 'nikonova.irina2010@ya.ru';
    $title = 'Новый заказ на журнал';
    $message = "
        Был получен заказ на журнал с сайта от:
        Имя: $user_name1
        Телефон: $fon1
        Почта: $email1
        Город: $city
        Адрес киоска: $kiosk
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


}
?>


