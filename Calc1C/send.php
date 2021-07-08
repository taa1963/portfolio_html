
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['emailk'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

    //$to = 'clublaser@mail.ru';
   // $to = $_POST['email'] ; ;
    // $to = $email;
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта на другой тип услугм:
        Имя пользователя: $name
        Телефон: $telefon
        Email:$email

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