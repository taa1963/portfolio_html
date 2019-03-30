<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon']) &&
    isset($_POST['Form_Zena']) && !empty($_POST['Form_Zena'])) {

    $name1 = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    $Form_Zena = substr(htmlspecialchars(trim($_POST['Form_Zena'])), 0, 1000);


    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@parrrrtwork.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта от:
        Имя: $name1
        Телефон: $telefon
        Цена заказа: $Form_Zena
        
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


    if ($verify) {
        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center><font color="green"> Заявка отправлена.</font><br/> 
   <center><a href="https://aleksandr.tupichenkov.com/CalcMega2">Вернуться на главную</a> 
   </body>';}
    else {

        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="https://aleksandr.tupichenkov.com/CalcMega2">Вернуться на главную</a> 
   </body>';}



//    echo "<center>Ваше сообщениеуспешно <br><center> отправлено<BR><center><a href='http://www.partwork.ru/angrybirds/'>Вернуться на сайт</a>";


}
?>