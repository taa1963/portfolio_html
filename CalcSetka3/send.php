<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['tel']) && !empty($_POST['tel']))
{

    $user_name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $user_phone = substr(htmlspecialchars(trim($_POST['tel'])), 0, 1000000);


    $to = 'alexandr.tupichenkov@yandex.ru';
    $title = 'Новый заказ на замер москитной сетки';
    $message = "
       Имя: $user_name
       Телфон : $user_phone

       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {
        header('Location: https://aleksandr.tupichenkov.com/CalcSetka2/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcSetka2/', true, 302);
        exit;
    }

}
?>
