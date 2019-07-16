<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name_client']) && !empty($_POST['name_client']) &&
    isset($_POST['tel_prod']) && !empty($_POST['tel_prod'])) {

    $name_client = substr(htmlspecialchars(trim($_POST['name_client'])), 0, 1000);
    $tel_prod = substr(htmlspecialchars(trim($_POST['tel_prod'])), 0, 1000000);


    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта от:
        Имя: $tel_prod
        Телефон: $email
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

//    echo "<center>Ваше сообщениеуспешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";


}
?>