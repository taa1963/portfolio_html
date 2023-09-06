<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['sertif']) && !empty($_POST['sertif']) &&
    isset($_POST['detail']) && !empty($_POST['detail']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']))
{

    $user_name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $user_name = substr(htmlspecialchars(trim($_POST['sertif'])), 0, 1000);
    $user_name = substr(htmlspecialchars(trim($_POST['detail'])), 0, 100000);
    $user_phone = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 1000000);


    $to = 'alexandr.tupichenkov@yandex.ru';
    $title = 'Новый заказ на оценку алмаза';
    $message = "
       Имя: $user_name
       Телефон : $user_phone
       Сертификат:$sertif
       Подробности:$detail

       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {
        header('Location: https://aleksandr.tupichenkov.com/CalcAlmas/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcAlmas/', true, 302);
        exit;
    }

}
?>
