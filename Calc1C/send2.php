
<?php
// если была нажата кнопка "Отправить"
if (

   isset($_POST['typeb']) && !empty($_POST['typeb']) &&
    isset($_POST['name2']) && !empty($_POST['name2']) &&
    isset($_POST['email2']) && !empty($_POST['email2']) &&
    isset($_POST['telefon2']) && !empty($_POST['telefon2'])) {
    $typeb = substr(htmlspecialchars(trim($_POST['typeb'])), 0, 1000);
    $name2 = substr(htmlspecialchars(trim($_POST['name2'])), 0, 100);
    $email2 = substr(htmlspecialchars(trim($_POST['email2'])), 0, 100);
    $telefon2 = substr(htmlspecialchars(trim($_POST['telefon2'])), 0, 100);

    //$to = 'clublaser@mail.ru';
    // $to = $_POST['email'] ; ;
    // $to = $email;
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта :
        Тип бизнеса:$typeb
        Имя пользователя: $name2
        Телефон: $telefon2
        Email:$email2

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


    if ($verify) {

        header('Location: https://aleksandr.tupichenkov.com/Calc1C/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/Calc1C/', true, 302);
        exit;
    }
}



?>