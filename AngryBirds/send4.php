<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name5']) && !empty($_POST['user_name5']) &&
    isset($_POST['email5']) && !empty($_POST['email5'])) {

    $user_name5 = substr(htmlspecialchars(trim($_POST['user_name5'])), 0, 1000);
    $email5 = substr(htmlspecialchars(trim($_POST['email5'])), 0, 1000);
    $picture = "";

    // Если поле выбора вложения не пустое - закачиваем его на сервер

    if (!empty($_FILES['mail_file']['tmp_name']))

    {

        // Закачиваем файл

        $path = $_FILES['mail_file']['name'];

        if (copy($_FILES['mail_file']['tmp_name'], $path)) $picture = $path;

    }

    // Отправляем почтовое сообщение



        $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'nikonova.irina2010@ya.ru';
    $title = 'Новый заказ на конкурс';
    $message = "
        Был получен заказ на конкурс с сайта:
        Имя: $user_name5
        Телефон: $email5

       ";

    $verify = mail($to, $title, $message, $path, "Content-type:text/plain; Charset=utf-8\r\n");
    echo "<center>Ваше сообщениеуспешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";

}
?>


