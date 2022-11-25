<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']) &&
    isset($_POST['metismail']) && !empty($_POST['metismail']) &&
    isset($_POST['email']) && !empty($_POST['email'])) 
	{
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    $metismail = substr(htmlspecialchars(trim($_POST['metismail'])), 0, 1000000000);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 10000000000);


   // $to = 'info@groupregion.ru';
   $to = 'alexandr.tupichenkov@yandex.ru';
  //  $to = '1000vp@mail.ru,v.partner@yandex.ru';
  //  $menedger = 'v.partner@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Новый заказ ';

        $message = "
         Был получен заказ с сайта  
         От клиента:
        Имя: $name
        Телефон: $telefon
        email:$email
        Подробности заказа:
        $metismail       
       
       ";


    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

}

?>