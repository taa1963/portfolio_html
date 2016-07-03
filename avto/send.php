<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['fon1']) && !empty($_POST['fon1'])) {

    $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
    $fon1 = substr(htmlspecialchars(trim($_POST['fon1'])), 0, 1000000);

// Если поле выбора вложения не пустое - закачиваем его на сервер


    $down = '';
    $adown = array();

    if (!empty($_FILES['mail_file']['tmp_name'])){
        // Закачиваем файл
        //for($i=0;$i<count($_FILES['file']['name']);$i++) {
        //if()
        if(is_array($_FILES['mail_file']['tmp_name'])){

            foreach($_FILES['mail_file']['tmp_name'] as $ind => $file_tmp){

                $path = $_FILES['mail_file']['name'][$ind];
                if (copy($file_tmp, $path)){
                    $picture = $path;

                    $adown[] = 'http://'.$_SERVER['SERVER_NAME'].'/'.basename(dirname(__FILE__)).'/'.$path;
                }

            }
        }else{

            $path = $_FILES['mail_file']['name'];
            if (copy($_FILES['mail_file']['tmp_name'], $path)) $adown[] ='http://'.$_SERVER['SERVER_NAME'].'/'.basename(dirname(__FILE__)).'/'.$path;

        }

    }



    $to = 'alexandr.tupichenkov@yandex.ru';

    $title = 'Новый заказ на оценку';
    $message = "
        Был получен заказ на оценку с сайта:
        Имя: $user_name
        Телефон: $fon1
        Файлы: ".implode(',',$adown)."

       ";
    $verify = mail($to, $title, $message, $path, "Content-type:text/plain; Charset=utf-8\r\n");
    $to = 'alexandr.tupichenkov@yandex.ru';
    $verify = mail($to, $title, $message, $path, "Content-type:text/plain; Charset=utf-8\r\n");

    //print_r($_POST);


    //echo $message;

    echo "<center>Ваше сообщение успешно <br><center> отправлено<BR><center><a href='index.html'>Вернуться на сайт</a>";



}
   ?>




