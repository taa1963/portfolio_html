
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['nmemberm']) && !empty($_POST['nmemberm']) &&
    isset($_POST['ZenaNalm']) && !empty($_POST['ZenaNalm']) &&
    isset($_POST['ZenaBezNalm']) && !empty($_POST['ZenaBezNalm']) &&
    isset($_POST['Jaxtm']) && !empty($_POST['Jaxtm']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $nmemberm = substr(htmlspecialchars(trim($_POST['nmemberm'])), 0, 100);
    $ZenaNalm = substr(htmlspecialchars(trim($_POST['ZenaNalm'])), 0, 100);
    $ZenaBezNalm = substr(htmlspecialchars(trim($_POST['ZenaBezNalm'])), 0, 100);
    $Jaxtm = substr(htmlspecialchars(trim($_POST['Jaxtm'])), 0, 100);

    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

   
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@itbconsult.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта :
        Кол-во участников:$nmemberm
        Кол-во яхт:$Jaxtm
        Наличный расчет:$ZenaNalm
        Безналичный расчет: $ZenaBezNalm
        Имя пользователя: $name
        Телефон: $telefon
        Email:$email

       ";



   
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
      //  print_r(iconv("UTF-8", "UTF-8", $_POST));
        header('Location: https://aleksandr.tupichenkov.com/CalcRegata/', true, 302);
        exit;
    } else {
     //   print_r(iconv("UTF-8", "UTF-8", 'errrrr'));
        header('Location: https://aleksandr.tupichenkov.com/CalcRegata/', true, 302);
        exit;
    }
}

   



?>