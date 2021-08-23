
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['tupeavtom']) && !empty($_POST['tupeavtom']) &&
    isset($_POST['modelavto']) && !empty($_POST['modelavto']) &&
    isset($_POST['jar1m']) && !empty($_POST['jar1m']) &&
    isset($_POST['budget']) && !empty($_POST['budget']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $tupeavtom = substr(htmlspecialchars(trim($_POST['tupeavtom'])), 0, 100);
    $modelavto = substr(htmlspecialchars(trim($_POST['modelavto'])), 0, 100);
    $jar1m = substr(htmlspecialchars(trim($_POST['jar1m'])), 0, 100);
    $budget = substr(htmlspecialchars(trim($_POST['budget'])), 0, 100);


    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

    //$to = 'clublaser@mail.ru';
   // $to = $_POST['email'] ; ;
    // $to = $email;
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@itbconsult.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта :
        Тип авто:$tupeavtom
        Модель авто:$modelavto
        Год выпуска: $jar1m
        Бюджет до: $budget
        Имя пользователя: $name
        Телефон: $telefon

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        header('Location: https://aleksandr.tupichenkov.com/CalcAvtoUSA2/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcAvtoUSA2/', true, 302);
        exit;
    }
}



?>