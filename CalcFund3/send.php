<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['tel']) && !empty($_POST['tel']) &&
    isset($_POST['adr']) && !empty($_POST['adr'])) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);
    $adr = substr(htmlspecialchars(trim($_POST['adr'])), 0, 1000000);
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'i555yyynyyyfo@payyyrtwork.ru';
    $title = 'FUNDAMENT';
    $message = "
        Был получен заказ с сайта от:
        Имя: $name
        Е-mail: $email
        Телефон клиента: $tel
        Адрес: $adr
        ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {

        header('Location: https://aleksandr.tupichenkov.com/CalcFund3/#popup_block', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcFund3/?form_error=1', true, 302);
        exit;
    }
}
?>