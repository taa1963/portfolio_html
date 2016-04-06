<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['tel']) && !empty($_POST['tel']))  {

    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 1000);



    $to = 'grass@mail.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта
       Телефон: $tel
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {

        header('Location: http://..../#success', true, 302);
        exit;
    } else {
        header('Location: http://....../?form_error=1', true, 302);
        exit;
    }
}
?>


