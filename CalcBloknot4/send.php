<?php

header('Content-type: text/plain; charset=utf-8');

$json = file_get_contents('php://input');
$data = json_decode($json, true, 512);

if (
    is_array($data) && !empty($data) &&

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


   // $to = 'info@groupregion.ru';
    $to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'Блокнот';


    $html = "<html>
        <head><title>$title</title></head>
        <body>
            <div>Был получен заказ с сайта от:</div>
            <div>Имя:$name</div>
             <div>Телефон: $telefon</div>
            <div>Формат:$tupblitogf</div>
            <div>крепление:$itogkrf</div>
            <div>тираж:$tiragvf</div>
            <div>материал:$mat_oblvf</div>
            <div>цветность:$color_oblvf</div>
            <div>ламинация:$lamin_oblvf</div>
            <div>>количество страниц:$Nstrf</div>
            <div>>материал:$mat_blvf</div>
            <div>>цветность:$color_blvf</div>
             <div>>ламинация:$lamin_blvf</div>

        </body>
    </html>";

    $verify = mail($to, $title, $html, "Content-type:text/html; Charset=utf-8\r\n");

    if ($verify) {
        echo '<div class="param_calc_all">';

        //   header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
        exit;
//    } else {
//        header('Location: https://eco-lab.kz/services/podbor-postavka-laboratornogo-oborudovaniya/', true, 302);
//        exit;
    }


}
?>