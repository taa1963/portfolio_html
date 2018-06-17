<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $fon1 = substr(htmlspecialchars(trim($_POST['fon1'])), 0, 1000000);

// Если поле выбора вложения не пустое - закачиваем его на сервер



  //  $to = 'alexandr.tupichenkov@yandex.ru';
    $to = '  hello@newproperty.ru';


    $title = 'Новый заказ на оценку';
    $message = "
        Был получен заказ на оценку с сайта:
        Имя: $user_name
        Телефон: $fon1
        ";
    $verify = mail($to, $title, $message, $path, "Content-type:text/plain; Charset=utf-8\r\n");
   

    //print_r($_POST);


    //echo $message;

    if ($verify == 'true') {
        echo "
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо доставлено администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>Вернуться назад</a></div></p>

 ";
    }
    else

    {
        echo "

 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>Вернуться назад</a></div></p>



 ";
    }

}

?>



