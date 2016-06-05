<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['email']) && !empty($_POST['email'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000000);


    //$to = 'alexandr.tupichenkov@yandex.ru';
    $to = 'nikonova.irina2010@ya.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта от:
        Имя: $user_name
        Телефон: $email
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    echo "<center>Ваше сообщениеуспешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";


}
   ?>




