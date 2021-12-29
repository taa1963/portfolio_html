<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);
//
//print_r(iconv("UTF-8", "UTF-8", $_POST));
//
//$items = $_POST['item'];
//
//$result = '';


//echo $result;
if (
    isset($_POST['NKcomplm']) && !empty($_POST['NKcomplm']) &&
    isset($_POST['typest1m']) && !empty($_POST['typest1m']) &&
    isset($_POST['typeisd2m']) && !empty($_POST['typeisd2m']) &&	
    isset($_POST['Sisd1m']) && !empty($_POST['Sisd1m']) &&
	isset($_POST['Nisdm']) && !empty($_POST['Nisdm']) &&
	isset($_POST['Colorisdm']) && !empty($_POST['Colorisdm']) &&
	isset($_POST['Zzakasm']) && !empty($_POST['Zzakasm']) &&
	isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['tel']) && !empty($_POST['tel']) &&
    isset($_POST['mailv']) && !empty($_POST['mailv']))
	{
    $NKcomplm = substr(htmlspecialchars(trim($_POST['NKcomplm'])), 0, 1000000);
    $typest1m = substr(htmlspecialchars(trim($_POST['typest1m'])), 0, 10000000);
    $typeisd2m = substr(htmlspecialchars(trim($_POST['typeisd2m'])), 0, 10000000000);
	$Sisd1m = substr(htmlspecialchars(trim($_POST['Sisd1m'])), 0, 10000000000);
	$Nisdm = substr(htmlspecialchars(trim($_POST['Nisdm'])), 0, 10000000000);
	$Colorisdm = substr(htmlspecialchars(trim($_POST['Colorisdm'])), 0, 10000000000);
    $Zzakasm = substr(htmlspecialchars(trim($_POST['Zzakasm'])), 0, 10000000000);
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 10000000000);
    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 10000000000);
    $mailv = substr(htmlspecialchars(trim($_POST['mailv'])), 0, 10000000000);


       $to = 'alexandr.tupichenkov@yandex.ru';
  //  $to = '1000vp@mail.ru';
    $title = 'Новый заказ постельного белья';

    $message = "
        Был получен заказ постельного белья с сайта от:
        Имя: $name
        Телефон: $tel
        Email: $mailv
        Подробности заказа:
        Вид заказа::$NKcomplm
	    Вид изделия:$typest1m
	    Тип изделия:$typeisd2m
		Размер или состав:$Sisd1m
		Количество изделий:$Nisdm
		Цвет изделия:$Colorisdm
	    Ориентировочная цена заказа:$Zzakasm

       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
      //  print_r(iconv("UTF-8", "UTF-8", $_POST));
        header('Location: https://aleksandr.tupichenkov.com/CalcPostel/', true, 302);
        exit;
    } else {
     //   print_r(iconv("UTF-8", "UTF-8", 'errrrr'));
        header('Location: https://aleksandr.tupichenkov.com/CalcPostel/', true, 302);
        exit;
    }
}



?>