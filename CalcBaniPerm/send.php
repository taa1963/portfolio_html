<?php
// если была нажата кнопка "Отправить"
print_r($_POST);
//
print_r(iconv("UTF-8", "UTF-8", $_POST));
//
//$items = $_POST['item'];
//
//$result = '';


//echo $result;
if (
    isset($_POST['fund2m']) && !empty($_POST['fund2m']) &&
    isset($_POST['Msten2m']) && !empty($_POST['Msten2m']) &&
    isset($_POST['Etag2m']) && !empty($_POST['Etag2m']) &&
    isset($_POST['Sb2m']) && !empty($_POST['Sb2mf']) &&
    isset($_POST['Zb2m']) && !empty($_POST['Zb2m']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['tel']) && !empty($_POST['tel']) &&
    isset($_POST['mailv']) && !empty($_POST['mailv']))
	{
    $fund2m = substr(htmlspecialchars(trim($_POST['fund2m'])), 0, 1000);
    $Msten2m = substr(htmlspecialchars(trim($_POST['Msten2m'])), 0, 1000);
    $Etag2m = substr(htmlspecialchars(trim($_POST['Etag2m'])), 0, 10000000000);
    $Sb2m = substr(htmlspecialchars(trim($_POST['Sb2m'])), 0, 10000000000);
    $Zb2m = substr(htmlspecialchars(trim($_POST['Zb2m'])), 0, 10000000000);
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 10000000000);
    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 10000000000);
    $mailv = substr(htmlspecialchars(trim($_POST['mailv'])), 0, 10000000000);


       $to = 'alexandr.tupichenkov@yandex.ru';
  //  $to = '1000vp@mail.ru';
    $title = 'Новый заказ бани';

    $message = "
        Был получен заказ бани с сайта от:
        Имя: $name
        Телефон: $tel
        Email: $mailv
        Подробности заказа:
        Тип фундамента:$fund2m
        Материал стен:$Msten2m
        Этажность здания:$Etag2m
        Площадь бани:$Sb2m
        Ориентировочная цена заказа:$Zb2m

       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        print_r(iconv("UTF-8", "UTF-8", $_POST));
        header('Location: https://aleksandr.tupichenkov.com/CalcBaniPerm/', true, 302);
        exit;
    } else {
        print_r(iconv("UTF-8", "UTF-8", 'errrrr'));
        header('Location: https://aleksandr.tupichenkov.com/CalcBaniPerm/', true, 302);
        exit;
    }
}



?>