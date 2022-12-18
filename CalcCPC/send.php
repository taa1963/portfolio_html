
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['typem']) && !empty($_POST['typem']) &&
    isset($_POST['vidarbm']) && !empty($_POST['vidarbm']) &&
    isset($_POST['namearbm']) && !empty($_POST['namearbm']) &&
    isset($_POST['zenaarbm']) && !empty($_POST['zenaarbm']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $typem = substr(htmlspecialchars(trim($_POST['typem'])), 0, 100);
    $vidarbm = substr(htmlspecialchars(trim($_POST['vidarbm'])), 0, 100);
    $namearbm = substr(htmlspecialchars(trim($_POST['namearbm'])), 0, 100);
    $zenaarbm = substr(htmlspecialchars(trim($_POST['zenaarbm'])), 0, 100);


    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

    //$to = 'clublaser@mail.ru';
   // $to = $_POST['email'] ; ;
    // $to = $email;
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@itbconsult.ru';
    $title = 'Заказ с сайта';


    $message = "
        Был получен заказ с сайта :
        Тип авто:$typem
        Вид работ:$vidarbm
        Наименование работ: $namearbm
        Цена работ: $zenaarbm
        Имя пользователя: $name
        Телефон: $telefon
        Email:$email

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
    echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center><font color="green"> Заявка отправлена.</font><br/> 
   <center><a href="https://aleksandr.tupichenkov.com/CalcAvto1/">Вернуться на главную</a>
   </body>';}
else {

    echo '<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head> 
    <body><center>Письмо не отправлено.<br/> <center>
   <a href="https://aleksandr.tupichenkov.com/CalcAvto1/">Вернуться на главную</a>
   </body>';}
}



?>