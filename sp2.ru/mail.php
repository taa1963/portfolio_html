<?php
/**
 * Created by PhpStorm.
 * User: Aleks
 * Date: 12.04.15
 * Time: 12:41
 */

$post_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $from = 'lead@veterinarniy-vrach-na-dom.ru';
        $to = 'doctor.lavrov@yandex.ru';
        $reply = 'vdovichev@gmail.com';
        //$to = 'alexandr.tupichenkov@yandex.ru';
        //$reply = 'alexandr.tupichenkov@yandex.ru';
        $headers = 'From: ' . $from . "\r\n" .
            'Reply-To: ' . $reply . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        $phone = htmlspecialchars($_POST['phone']);
        $subject = 'Обратный звонок';
        $message = 'Обратный звонок: ' . $phone;

        $result = mail($to, $subject, $message, $headers);

        if($result){
            $post_message = 'Письмо отправлено успешно';
        } else {
            $post_message = 'Ошибка отправки письма';
        }
    } else {
        $post_message = 'Не заполнен телефон';
    }
}

