<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']) &&
    isset($_POST['TypeClient']) && !empty($_POST['TypeClient']) &&
    isset($_POST['ClientWork']) && !empty($_POST['ClientWork']) &&
    isset($_POST['ClientRegion']) && !empty($_POST['ClientRegion']) &&
    isset($_POST['FormZena']) && !empty($_POST['FormZena'])) {
    $name1 = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    $TypeClient = substr(htmlspecialchars(trim($_POST['TypeClient'])), 0, 100);
    $ClientWork = substr(htmlspecialchars(trim($_POST['ClientWork'])), 0, 1000);
    $ClientRegion = substr(htmlspecialchars(trim($_POST['ClientRegion'])), 0, 1000);
    $FormZena = substr(htmlspecialchars(trim($_POST['FormZena'])), 0, 1000000);
    //$to = 'clublaser@mail.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'MEQA';
    $message = "
        Был получен заказ с сайта от:
        Имя: $name1
        Телефон: $telefon
        Тип клиента: $TypeClient
        Тип услуги: $ClientWork
        Регион работ: $ClientRegion
        Цена заказа: $FormZena
       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center><font color="green"> Заявка отправлена.</font><br/> 
   <center><a href="https://aleksandr.tupichenkov.com/CalcMega8//">Вернуться на главную</a> 
   </body>';}
    else {
        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="https://aleksandr.tupichenkov.com/CalcMega8/">Вернуться на главную</a> 
   </body>';}
}
?>