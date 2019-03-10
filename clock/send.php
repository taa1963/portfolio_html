<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['email']) && !empty($_POST['email'])) {

    $name1 = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);


    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта от:
        Имя: $name1
        Телефон: telefon
        E-mail: email
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

//    echo "<center>Ваше сообщениеуспешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";


}
?>