<?php

if (
    isset($data['name']) && !empty($data['name']) &&
    isset($data['phone']) && !empty($data['phone']) &&
    isset($data['tupblitogf']) && !empty($data['tupblitogf']) &&
    isset($data['itogkrf']) && !empty($data['itogkrf']) &&
    isset($data['tiragvf']) && !empty($data['tiragvf']) &&
    isset($data['mat_oblvf']) && !empty($data['mat_oblvf']) &&
    isset($data['lamin_oblvf']) && !empty($data['lamin_oblvf']) &&
    isset($data['Nstrf']) && !empty($data['Nstrf']) &&
    isset($data['mat_blvf']) && !empty($data['mat_blvf']) &&
    isset($data['color_blvf']) && !empty($data['color_blvf']) &&
    isset($data['lamin_blvf']) && !empty($data['lamin_blvf']) &&
    isset($data['Zitof']) && !empty($data['Zitof']) &&
    isset($data['color_oblvf']) && !empty($data['color_oblvf'])
) {
    $name = substr(htmlspecialchars(trim($data['name'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($data['phone'])), 0, 100);
    $tupblitogf = substr(htmlspecialchars(trim($data['tupblitogf'])), 0, 10000000000);
    $itogkrf = substr(htmlspecialchars(trim($data['itogkrf'])), 0, 10000000000);
    $tiragvf = substr(htmlspecialchars(trim($data['tiragvf'])), 0, 10000000000);
    $mat_oblvf = substr(htmlspecialchars(trim($data['mat_oblvf'])), 0, 10000000000);
    $color_oblvf = substr(htmlspecialchars(trim($data['color_oblvf'])), 0, 10000000000);
    $lamin_oblvf = substr(htmlspecialchars(trim($data['lamin_oblvf'])), 0, 10000000000);
    $Nstrf = substr(htmlspecialchars(trim($data['Nstrf'])), 0, 10000000000);
    $mat_blvf = substr(htmlspecialchars(trim($data['mat_blvf'])), 0, 10000000000);
    $color_blvf = substr(htmlspecialchars(trim($data['color_blvf'])), 0, 10000000000);
    $lamin_blvf = substr(htmlspecialchars(trim($data['lamin_blvf'])), 0, 10000000000);
    $Zitof = substr(htmlspecialchars(trim($data['Zitof'])), 0, 10000000000);


   // $to = 'info@groupregion.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Новый заказ';

    $message = "
        Был получен заказ с сайта от:
        Имя: $name
        Телефон: $telefon
        Брошюра
        Формат:$tupblitogf
        Крепление:$itogkrf
        Tираж:$tiragvf
        Oбложка
        Mатериал:$mat_oblvf
        Цветность:$color_oblvf
        Ламинация:$lamin_oblvf
        Блок
        Количество страниц:$Nstrf
        Материал:$mat_blvf
        Цветность:$color_blvf
        Ламинация:$lamin_blvf
        Стоимость:$Zitof
       ";

    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {

        header('Location: https://aleksandr.tupichenkov.com/CalcBloknot4/#popup_success', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcBloknot4//#popup_success', true, 302);
        exit;
    }
}

?>