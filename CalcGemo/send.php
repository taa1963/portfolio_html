<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['ekran']) && !empty($_POST['ekran']) &&
    isset($_POST['ekrank']) && !empty($_POST['ekrank']) &&
    isset($_POST['ekranm']) && !empty($_POST['ekranm']) &&
    isset($_POST['email']) && !empty($_POST['email'])) {
    $ekran = substr(htmlspecialchars(trim($_POST['ekran'])), 0, 100);
    $ekrank = substr(htmlspecialchars(trim($_POST['ekrank'])), 0, 100);
    $ekranm = substr(htmlspecialchars(trim($_POST['ekranm'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000000);
    //$to = 'clublaser@mail.ru';
    $to = $_POST['email'] ; ;
    // $to = $email;
    //$to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'ЧЕТВЕРТОЕ ПОЛЕ';
    $message = "
        Был получен заказ с сайта 'ЧЕТВЕРТОЕ ПОЛЕ':
        Вы заказали следующие типы экранов
        Экран: $ekran
        Экран-К: $ekrank
        Экран-М: $ekranm
        
        
       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    ini_set('display_errors','On');
    error_reporting('E_ALL');
    if ($verify) {
        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center><font color="green"> Заявка отправлена.</font><br/> 
   <center><a href="https://aleksandr.tupichenkov.com/CalcGemo">Вернуться на главную</a> 
   </body>';}
    else {
        echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="https://aleksandr.tupichenkov.com/CalcGemo">Вернуться на главную</a> 
   </body>';}
}
?>