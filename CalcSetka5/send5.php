<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;
if (
    isset($_POST['name2']) && !empty($_POST['name2']) &&
    isset($_POST['tel2']) && !empty($_POST['tel2'])&&
    isset($_POST['num_mail']) && !is_int($_POST['num_mail']) &&
    isset($_POST['rasmer_mail']) && !is_int($_POST['rasmer_mail']) &&
    isset($_POST['typepol_mail']) && !is_int($_POST['typepol_mail']) &&
    isset($_POST['colorpol_mail']) && !is_int($_POST['colorpol_mail']) &&
    isset($_POST['devpol_mail']) && !is_int($_POST['devpol_mail']) &&
    isset($_POST['zena_mail']) && !is_int($_POST['zena_mail']) &&
    isset($_POST['dostavka_mail']) && !is_int($_POST['dostavka_mail']) &&
    isset($_POST['itogzena_mail']) && !is_int($_POST['itogzena_mail']))
	{
    $user_name = substr(htmlspecialchars(trim($_POST['name2'])), 0, 1000);
    $user_phone = substr(htmlspecialchars(trim($_POST['tel2'])), 0, 1000000);
    $num_mail = substr(htmlspecialchars(trim($_POST['num_mail'])), 0, 1000);
    $rasmer_mail = substr(htmlspecialchars(trim($_POST['rasmer_mail'])), 0, 100);
    $typepol_mail = substr(htmlspecialchars(trim($_POST['typepol_mail'])), 0, 10000000000);
    $colorpol_mail = substr(htmlspecialchars(trim($_POST['colorpol_mail'])), 0, 10000000000);
    $devpol_mail = substr(htmlspecialchars(trim($_POST['devpol_mail'])), 0, 10000000000);
    $zena_mail = substr(htmlspecialchars(trim($_POST['zena_mail'])), 0, 10000000000);
    $dostavka_mail = substr(htmlspecialchars(trim($_POST['dostavka_mail'])), 0, 10000000000);
    $itogzena_mail = substr(htmlspecialchars(trim($_POST['itogzena_mail'])), 0, 10000000000);





    $to = 'alexandr.tupichenkov@yandex.ru';
    $title = 'Был получен заказ с сайта москитных сеток:';
    $message = "
     Был получен заказ с сайта москитных сеток:

        Количество сеток: $num_mail
        Размер сеток: $rasmer_mail
        Тип полотна: $typepol_mail
        Цвет полотна:$colorpol_mail
        Тип крепежа:$devpol_mail
        Цена сетки:$zena_mail
        Доп параметры
        Цена доставки:$dostavka_mail
        Итоговая цена:$itogzena_mail
       Имя: $user_name
       Телфон : $user_phone

       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

    if ($verify) {
       header('Location: https://aleksandr.tupichenkov.com/CalcSetka5/', true, 302);
        exit;
    } else {
       header('Location: https://aleksandr.tupichenkov.com/CalcSetka5/', true, 302);
        exit;
    }

}
?>
