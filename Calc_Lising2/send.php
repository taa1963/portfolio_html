<?php

header('Content-type: text/plain; charset=utf-8');

// если была нажата кнопка "Отправить"
print_r($_POST);

print_r(iconv("UTF-8", "UTF-8", $_POST));

$items = $_POST['item'];

$result = '';


echo $result;


if (
    isset($_POST['table']) && !empty($_POST['table']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['email']) && !empty($_POST['email']) &&
    isset($_POST['lisingtupe']) && !empty($_POST['lisingtupe']) &&
    isset($_POST['Slising']) && !empty($_POST['Slising']) &&
    isset($_POST['dlising']) && !empty($_POST['dlising']) &&
    isset($_POST['smotch']) && !empty($_POST['smotch']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);
    $lisingtupe = substr(htmlspecialchars(trim($_POST['lisingtupe'])), 0, 10000000000);
    $Slising = substr(htmlspecialchars(trim($_POST['Slising'])), 0, 10000000000);
    $dlising = substr(htmlspecialchars(trim($_POST['dlising'])), 0, 10000000000);
    $smotch = substr(htmlspecialchars(trim($_POST['smotch'])), 0, 10000000000);
    $table = substr(htmlspecialchars(trim($_POST['table'])), 0, 100000000000000000);


//    $tabl= '<table>';
//    for ($i=0; $i<count($table); $i++)
//    {
//        $tabl='<tr>';
//        for ($j=1; $j<3; $j++)
//        {
//            $tabl='<td>'.$table[$i][$j].'</td>';
//        }
//        $tabl='</tr>';
//    }
//    $tabl='</table>';


        //$to = 'clublaser@mail.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Лизинг';
    $message = "
        Был получен заказ с сайта от:
        Имя:$name
        E_MAIL: $email
        Телефон: $telefon
        Тип лизинга:$lisingtupe
        Сумма договора:$Slising
        Сумма удорожания:$dlising
        Ежемесячный платеж:$smotch
//        График платежей:$tabl

        
       ";
    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


    if ($verify) {

        header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
        exit;
    } else {
        header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
        exit;
    }



}
?>