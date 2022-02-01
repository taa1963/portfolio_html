
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['nmembermLarge']) && !empty($_POST['nmembermLarge']) &&
    isset($_POST['ZenaNalmLarge']) && !empty($_POST['ZenaNalmLarge']) &&
    isset($_POST['ZenaBezNalmLarge']) && !empty($_POST['ZenaBezNalmLarge']) &&
    isset($_POST['JaxtmLarge']) && !empty($_POST['JaxtmLarge']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $nmemberm = substr(htmlspecialchars(trim($_POST['nmembermLarge'])), 0, 100);
    $ZenaNalm = substr(htmlspecialchars(trim($_POST['ZenaNalmLarge'])), 0, 100);
    $ZenaBezNalm = substr(htmlspecialchars(trim($_POST['ZenaBezNalmLarge'])), 0, 100);
    $Jaxtm = substr(htmlspecialchars(trim($_POST['JaxtmLarge'])), 0, 100);

    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

   
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@itbconsult.ru';
    $title = 'Заказ с сайта от 41 до 100 участников';


    $message = "
        Был получен заказ с сайта :
        Кол-во участников:$nmembermLarge
        Кол-во яхт:$JaxtmLarge
        Наличный расчет:$ZenaNalmLarge
        Безналичный расчет: $ZenaBezNalmLarge
        Имя пользователя: $name
        Телефон: $telefon
        Email:$email

       ";



   
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
      //  print_r(iconv("UTF-8", "UTF-8", $_POST));
        header('Location: https://aleksandr.tupichenkov.com/CalcRegatLarge/', true, 302);
        exit;
    } else {
     //   print_r(iconv("UTF-8", "UTF-8", 'errrrr'));
        header('Location: https://aleksandr.tupichenkov.com/CalcRegataLarge/', true, 302);
        exit;
    }
}

   



?>