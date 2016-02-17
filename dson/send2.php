<?

if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['email2']) && !empty($_POST['email2'])) {

    $name1 = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $email2 = substr(htmlspecialchars(trim($_POST['email2'])), 0, 1000000);
    $name1 = iconv("utf-8", "windows-1251", $name1);
    $email2 = iconv("utf-8", "windows-1251", $email2);

    $to = "as@2eng.ru";
    $title = 'Клиент подписался на рассылку';
    $message = "
        Имя: $name1
        E_mal: $email2
     ";
  // функция, которая отправляет наше письмо


    $verify = mail($to, $title, $message,"Content-type:text/plain; Charset=windows-1251\r\n");

    if ($verify)
    {

        {echo 'Сообщение успешно отправлено';}
    }
    else echo 'Ошибка отправки сообщения';
}








