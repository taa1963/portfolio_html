
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['itogmail']) && !empty($_POST['itogmail']) &&
    isset($_POST['emailmail']) && !empty($_POST['emailmail']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']))
    {
    $itogmail = substr(htmlspecialchars(trim($_POST['itogmail'])), 0, 100000000);
    $emailmail = substr(htmlspecialchars(trim($_POST['emailmail'])), 0, 100);
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

  
   
    $to = 'alexandr.tupichenkov@yandex.ru';
    
    $title = 'Заказ с сайта тарифов';


    $message = "
        Был получен заказ с сайта :
         
        $itogmail

        Данные клиента.        
        Имя пользователя: $name
        Телефон: $telefon
        E-mail: $emailmail

       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    
}



?>