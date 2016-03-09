<?

if (
    isset($_POST['name1']) && !empty($_POST['name1']) &&
    isset($_POST['email2']) && !empty($_POST['email2'])) {

    $name1 = substr(htmlspecialchars(trim($_POST['name1'])), 0, 1000);
    $email2 = substr(htmlspecialchars(trim($_POST['email2'])), 0, 1000000);


    $to = "as@2eng.ru";
    $title = 'Клиент подписался на рассылку';
    $message = "
    Клиент подписался на рассылку
        Имя: $name1
        E_mal: $email2
     ";
    // функция, которая отправляет наше письмо


    $verify = mail($to, $title, $message,
        "Content-type:text/plain; Charset=utf-8\r\n"
    );

    if ($verify)

        if ($verify) {

            header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/#success', true, 302);
            exit;
        } else {
            header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/?form_error=1', true, 302);
            exit;
        }
}
?>








