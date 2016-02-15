<?
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {

 $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
 $user_phone = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 1000000);


 $user_name = iconv("utf-8", "windows-1251", $user_name);
 $user_phone = iconv("utf-8", "windows-1251", $user_phone);




 $to = 'as@2eng.ru';


 $title = 'Был получен заказ с сайта';
 $message = "
        Имя: $user_name
        Телефон: $user_phone

 ";
 // функция, которая отправляет наше письмо
 mail($to, $title, $message);
 $verify = mail($name, $email, "Content-type:text/plain; Charset=windows-1251\r\n");

 if ($verify == 'true')
 {

   {echo 'Сообщение успешно отправлено';}
}
else {echo 'Ошибка отправки сообщения';}
}

?>

