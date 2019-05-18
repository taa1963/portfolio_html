<?php

// если была нажата кнопка "Отправить"
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['tel']) && !empty($_POST['tel']) &&
    isset($_POST['type']) && !empty($_POST['type']) &&
    isset($_POST['lang_mail']) && !empty($_POST['lang_mail']) &&
    isset($_POST['breadthf_mail']) && !empty($_POST['breadthf_mail']) &&
    isset($_POST['elevation_mail']) && !empty($_POST['elevation_mail']) &&
    isset($_POST['breadthlf_mail']) && !empty($_POST['breadthlf_mail']) &&
    isset($_POST['landlf_mail']) && !empty($_POST['landlf_mail']) &&
//    isset($_POST['perimeterlf_mail']) && !empty($_POST['perimeterlf_mail']) &&
//    isset($_POST['area_mail']) && !empty($_POST['area_mail']) &&
//    isset($_POST['pesok_mail']) && !empty($_POST['pesok_mail']) &&
    isset($_POST['shebenka_mail']) && !empty($_POST['shebenka_mail']) &&
    isset($_POST['langrosv_mail']) && !empty($_POST['langrosv_mail']) &&
    isset($_POST['hrosv_mail']) && !empty($_POST['hrosv_mail']) &&
    isset($_POST['lkad_mail']) && !empty($_POST['lkad_mail']) &&

    isset($_POST['adr']) && !empty($_POST['adr'])) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 100);
    $tel = substr(htmlspecialchars(trim($_POST['tel'])), 0, 100);
    $adr = substr(htmlspecialchars(trim($_POST['adr'])), 0, 1000000);
    $type = substr(htmlspecialchars(trim($_POST['type'])), 0, 100);
    $lang_mail = substr(htmlspecialchars(trim($_POST['lang_mail'])), 0, 100);
    $breadthf_mail = substr(htmlspecialchars(trim($_POST['breadthf_mail'])), 0, 100);
    $elevation_mail = substr(htmlspecialchars(trim($_POST['elevation_mail'])), 0, 100);
    $breadthlf_mail = substr(htmlspecialchars(trim($_POST['breadthlf_mail'])), 0, 100);
    $landlf_mail = substr(htmlspecialchars(trim($_POST['landlf_mail'])), 0, 100);
//    $perimeterlf_mail = substr(htmlspecialchars(trim($_POST['perimeterlf_mail'])), 0, 100);
//    $area_mail = substr(htmlspecialchars(trim($_POST['area_mail'])), 0, 100);
//    $pesok_mail = substr(htmlspecialchars(trim($_POST['pesok_mail'])), 0, 100);
    $shebenka_mail = substr(htmlspecialchars(trim($_POST['shebenka_mail'])), 0, 100);
    $langrosv_mail = substr(htmlspecialchars(trim($_POST['langrosv_mail'])), 0, 100);
    $hrosv_mail = substr(htmlspecialchars(trim($_POST['hrosv_mail'])), 0, 100);
    $lkad_mail = substr(htmlspecialchars(trim($_POST['lkad_mail'])), 0, 100);



    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'i555yyynyyyfo@payyyrtwork.ru';
    $title = 'FUNDAMENT';
    $message = "
        Был получен заказ с сайта от пользователя:
        Имя: $name
        Е-mail: $email
        Телефон клиента: $tel
        Адрес: $adr
         Параметры заказа :
         Тип фундамента: $type
         Длина: $lang_mail
         Высота плиты:$breadthf_mail
         Высота ленты или плиты:$elevation_mail
         Ширина ленты:$breadthlf_mail
         Длина ленты:$landlf_mail
//         Периметр фундамента:$perimeterlf_mail
//         Площадь:$area_mail
//         Толщина песчаной подушки: $pesok_mail
         Толщина щебёночной подушки: $shebenka_mail
         Общая длина ростверка:$langrosv_mail
         Высота ростверка:$hrosv_mail
         Растояние от КАД:$lkad_mail
        
        ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        echo json_encode([
            'status' => 'ok',
        ]);

//        header('Location: https://aleksandr.tupichenkov.com/CalcFund3/#popup_block', true, 302);
        exit;
    } else {
        echo json_encode([
            'status' => 'error',
        ]);
        //header('Location: https://aleksandr.tupichenkov.com/CalcFund3/?form_error=1', true, 302);
        exit;
    }
}

echo json_encode([
    'status' => 'error',
    'message' => 'please fill data',
    'data' => [
        $_POST
    ]
]);

