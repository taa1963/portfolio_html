<?php

header('Content-type: text/plain; charset=utf-8');

$json = file_get_contents('php://input');
$data = json_decode($json, true, 512);

if (
    is_array($data) && !empty($data) &&
    isset($data['table']) && !empty($data['table']) && is_array($data['table']) &&
    isset($data['name']) && !empty($data['name']) &&
    isset($data['email']) && !empty($data['email']) &&
    isset($data['lisingtupe']) && !empty($data['lisingtupe']) &&
    isset($data['Slising']) && !empty($data['Slising']) &&
    isset($data['dlising']) && !empty($data['dlising']) &&
    isset($data['smotch']) && !empty($data['smotch']) &&
    isset($data['telefon']) && !empty($data['telefon'])
) {
    $name = substr(htmlspecialchars(trim($data['name'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($data['email'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($data['telefon'])), 0, 100);
    $lisingtupe = substr(htmlspecialchars(trim($data['lisingtupe'])), 0, 10000000000);
    $Slising = substr(htmlspecialchars(trim($data['Slising'])), 0, 10000000000);
    $dlising = substr(htmlspecialchars(trim($data['dlising'])), 0, 10000000000);
    $smotch = substr(htmlspecialchars(trim($data['smotch'])), 0, 10000000000);
    $table = $data['table'];

    $tabl = '<table>';
    foreach ($table as $row) {
        $tabl .= '<tr>';
        foreach ($row as $item) {
            $tabl .= '<td>' . $item . '</td>';
        }
        $tabl .= '</tr>';
    }
    $tabl .= '</table>';


    //$to = 'clublaser@mail.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Лизинг';


    $html = "<html>
        <head><title>$title</title></head>
        <body>
            <div>Был получен заказ с сайта от:</div>
            <div>Имя:$name</div>
            <div>E_MAIL: $email</div>
            <div>Телефон: $telefon</div>
            <div>Тип лизинга:$lisingtupe</div>
            <div>Сумма договора:$Slising</div>
            <div>Сумма удорожания:$dlising</div>
            <div>Ежемесячный платеж:$smotch</div>
            <div>График платежей:$tabl</div>
        </body>
    </html>";

    $verify = mail($to, $title, $html, "Content-type:text/html; Charset=utf-8\r\n");


//    if ($verify) {
//
//        header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
//        exit;
//    } else {
//        header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
//        exit;
//    }


}
?>