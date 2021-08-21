
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['tupeavtom']) && !empty($_POST['tupeavtom']) &&
    isset($_POST['modelavto']) && !empty($_POST['modelavto']) &&
    isset($_POST['jar1m']) && !empty($_POST['jar1m']) &&
    isset($_POST['butget']) && !empty($_POST['butget']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $tupeavtom = substr(htmlspecialchars(trim($_POST['tupeavtom'])), 0, 100);
    $modelavto = substr(htmlspecialchars(trim($_POST['modelavto'])), 0, 100);
    $jar1m = substr(htmlspecialchars(trim($_POST['jar1m'])), 0, 100);
    $butget = substr(htmlspecialchars(trim($_POST['butget'])), 0, 100);


    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

    //$to = 'clublaser@mail.ru';
   // $to = $_POST['email'] ; ;
    // $to = $email;
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@itbconsult.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта :
        Тип авто:tupeavtom
        Модель авто:$modelavto
        Год выпуска: $jar1m
        Бюджет до: $butget
        Имя пользователя: $name
        Телефон: $telefon

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
    echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center><font color="green"> Заявка отправлена.</font><br/> 
   <center><a href="https://aleksandr.tupichenkov.com/Calc_Avto/">Вернуться на главную</a>
   </body>';}
else {

    echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="https://aleksandr.tupichenkov.com/Calc_Avto/">Вернуться на главную</a>
   </body>';}
}



?>