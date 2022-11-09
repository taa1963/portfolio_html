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
    isset($_POST['metismail']) && !empty($_POST['metismail'])) 
	{
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    
    $metismail = substr(htmlspecialchars(trim($_POST['metismail'])), 0, 10000000000);


   // $to = 'info@groupregion.ru';
   $to = 'alexandr.tupichenkov@yandex.ru';
  //  $to = '1000vp@mail.ru,v.partner@yandex.ru';
  //  $menedger = 'v.partner@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Новый заказ ';

        $message = "
         Был получен заказ с сайта крепежа и метизов 
         От клиента:
        Имя: $name
        Телефон: $telefon
        
        Подробности заказа:
        Заказ клиента: $metismail
       ";




       




    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
       // header('Location: http://gusmanof.ru/CalcBloknot5/', true, 302);
         header('Location: https://aleksandr.tupichenkov.com/CalcMetis/', true, 302);
        exit;
    } else {
       // header('Location: http://gusmanof.ru/CalcBloknot5/', true, 302);
        header('Location: https://aleksandr.tupichenkov.com/CalcMetis/', true, 302);
        exit;
    }
}

?>