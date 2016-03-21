<?php

$discs = [];
for($i = 0; $i < 11; $i++) {
 $name = "disk$i";
 if (isset($_POST[$name])) {
  $discs[$name] = $i;
 }
}
if (
isset($_POST['user_name2']) && !empty($_POST['user_name2']) &&
isset($_POST['user_phone2']) && !empty($_POST['user_phone2'])) {

    $user_name2 = substr(htmlspecialchars(trim($_POST['user_name2'])), 0, 1000);
    $user_phone2 = substr(htmlspecialchars(trim($_POST['user_phone2'])), 0, 1000000);


    $message = "
        Был получен заказ с сайта
        Имя: $user_name2
        Телефон: $user_phone2
       ";


    $to = "as@2eng.ru";
    $title = "Заказ дисков";
    $message .= "Заказаны диски: диск " . implode(', диск ', $discs);

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


    if ($verify) {
        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/#success', true, 302);

        exit;
    } else {
        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/?form_error=1', true, 302);
        exit;
    }
}

?>








