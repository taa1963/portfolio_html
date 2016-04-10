<?php
// если была нажата кнопка "Отправить" 
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $user_phone = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 1000000);
       // $to - от кого отправлено письмо
	  $from = 'webmaster@medhalat39.ru';
	  
         // $to - кому отправляем
      $to = 'admin@medhalat39.ru';

    $title = 'Было отправлено письмо с сайта';
    $message = "
        Имя: $user_name
        Телефон: $user_phone
    ";
    // функция, которая отправляет наше письмо
    mail($to, $title, $message);

    header('Location: http://medhalat39.ru/#success', true, 302);
    exit;
} else {
    header('Location: http://medhalat39.ru?form_error=1', true, 302);
    exit;
}