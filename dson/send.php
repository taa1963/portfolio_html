<?
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $user_phone = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 1000000);


    $to = 'as@2eng.ru';
    $title = 'Новый заказ';
    $message = "
        Был получен заказ с сайта
        Имя: $user_name
        Телефон: $user_phone
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8");

    if ($verify) {

        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/#success', true, 302);
        exit;
    } else {
        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/?form_error=1', true, 302);
        exit;
    }
}



