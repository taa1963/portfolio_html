<?php

header('Content-type: text/plain; charset=utf-8');

// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;


if (
    isset($_POST['result']) && !empty($_POST['result']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['phone']) && !empty($_POST['phone'])) {
    $name1 = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
    $result = substr(htmlspecialchars(trim($_POST['result'])), 0, 1000000);


        //$to = 'clublaser@mail.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Приборы';
    $message = "
        Был получен заказ с сайта от:
        E_MAIL: $name1
        Телефон: $telefon
        Заказаны устройства:$result
        
       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><center><font color="green"> Заявка отправлена.</font><br/>
   <center><a href="https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/">Вернуться на главную</a>
   </body>';}
    else {
        echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="http://https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/">Вернуться на главную</a>
   </body>';}
}
?>