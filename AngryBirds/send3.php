<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name1']) && !empty($_POST['user_name1']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1']) &&
    isset($_POST['post1']) && !empty($_POST['post1']) &&
    isset($_POST['city1']) && !empty($_POST['city1']) &&
    isset($_POST['kiosk']) && !empty($_POST['kiosk'])) {

    $user_name1 = substr(htmlspecialchars(trim($_POST['user_name1'])), 0, 1000);
    $fon1 = substr(htmlspecialchars(trim($_POST['fon1'])), 0, 1000);
    $post1 = substr(htmlspecialchars(trim($_POST['post1'])), 0, 1000000);
    $city1 = substr(htmlspecialchars(trim($_POST['city1'])), 0, 1000000);
    $kiosk = substr(htmlspecialchars(trim($_POST['kiosk'])), 0, 1000000);


    //$to = 'alexandr.tupichenkov@yandex.ru';
    $to = 'nikonova.irina2010@ya.ru';
    $title = 'Новый заказ на журнал';
    $message = "
        Был получен заказ на журнал с сайта от:
        Имя: $user_name1
        Телефон: $fon1
        Почта: $post1
        Город: $city1
        Адрес киоска: $kiosk
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    echo "<center>Ваше сообщение успешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";

}
?>


