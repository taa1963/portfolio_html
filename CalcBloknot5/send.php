<?php
// если была нажата кнопка "Отправить"
print_r($_POST);

print_r(iconv("UTF-8", "UTF-8", $_POST));

$items = $_POST['item'];

$result = '';


echo $result;
if (

    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['phone']) && !empty($_POST['phone']) &&
    isset($_POST['tupblitogf']) && !empty($_POST['tupblitogf']) &&
    isset($_POST['itogkrf']) && !empty($_POST['itogkrf']) &&
    isset($_POST['tiragvf']) && !empty($_POST['tiragvf']) &&
    isset($_POST['mat_oblvf']) && !empty($_POST['mat_oblvf']) &&
    isset($_POST['lamin_oblvf']) && !empty($_POST['lamin_oblvf']) &&
    isset($_POST['Nstrf']) && !empty($_POST['Nstrf']) &&
    isset($_POST['mat_blvf']) && !empty($_POST['mat_blvf']) &&
    isset($_POST['color_blvf']) && !empty($_POST['color_blvf']) &&
    isset($_POST['lamin_blvf']) && !empty($_POST['lamin_blvf']) &&
    isset($_POST['Zitof']) && !empty($_POST['Zitof']) &&
    isset($_POST['color_oblvf']) && !empty($_POST['color_oblvf'])
) {
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
    $telefon = substr(htmlspecialchars(trim($_POST['phone'])), 0, 100);
    $tupblitogf = substr(htmlspecialchars(trim($_POST['tupblitogf'])), 0, 10000000000);
    $itogkrf = substr(htmlspecialchars(trim($_POST['itogkrf'])), 0, 10000000000);
    $tiragvf = substr(htmlspecialchars(trim($_POST['tiragvf'])), 0, 10000000000);
    $mat_oblvf = substr(htmlspecialchars(trim($_POST['mat_oblvf'])), 0, 10000000000);
    $color_oblvf = substr(htmlspecialchars(trim($_POST['color_oblvf'])), 0, 10000000000);
    $lamin_oblvf = substr(htmlspecialchars(trim($_POST['lamin_oblvf'])), 0, 10000000000);
    $Nstrf = substr(htmlspecialchars(trim($_POST['Nstrf'])), 0, 10000000000);
    $mat_blvf = substr(htmlspecialchars(trim($_POST['mat_blvf'])), 0, 10000000000);
    $color_blvf = substr(htmlspecialchars(trim($_POST['color_blvf'])), 0, 10000000000);
    $lamin_blvf = substr(htmlspecialchars(trim($_POST['lamin_blvf'])), 0, 10000000000);
    $Zitof = substr(htmlspecialchars(trim($_POST['Zitof'])), 0, 10000000000);


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