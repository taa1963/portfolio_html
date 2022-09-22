
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['prisemail']) && !empty($_POST['prisemail']) &&
    isset($_POST['dis1email']) && !empty($_POST['dis1email']) &&
    isset($_POST['adapt1email']) && !empty($_POST['adapt1email']) &&
    isset($_POST['bitr1email']) && !empty($_POST['bitr1email']) &&
    isset($_POST['ssl1email']) && !empty($_POST['ssl1email']) &&
    isset($_POST['host1email']) && !empty($_POST['host1email']) &&
    isset($_POST['dome1email']) && !empty($_POST['dome1email']) &&
    isset($_POST['rasdel1email']) && !empty($_POST['rasdel1email']) &&
    isset($_POST['modul1email']) && !empty($_POST['modul1email']) &&
    isset($_POST['magas1email']) && !empty($_POST['magas1email']) &&
    isset($_POST['card1email']) && !empty($_POST['card1email']) &&
    isset($_POST['zakaz1email']) && !empty($_POST['zakaz1email']) &&
    isset($_POST['dostav1email']) && !empty($_POST['dostav1email']) &&
    isset($_POST['oplata1email']) && !empty($_POST['oplata1email']) &&
    isset($_POST['interg1email']) && !empty($_POST['interg1email']) &&
    isset($_POST['texn1email']) && !empty($_POST['texn1email']) &&
    isset($_POST['texn2email']) && !empty($_POST['texn2email']) &&
    isset($_POST['content2email']) && !empty($_POST['content2email']) &&
    isset($_POST['content3email']) && !empty($_POST['content3email']) &&
    isset($_POST['host3email']) && !empty($_POST['host3email']) &&
    isset($_POST['tarif1email']) && !empty($_POST['tarif1email']) &&
    isset($_POST['konsul1email']) && !empty($_POST['konsul1email']) &&
    isset($_POST['tarif2email']) && !empty($_POST['tarif2email']) &&
    isset($_POST['reklama1email']) && !empty($_POST['reklama1email']) &&
    isset($_POST['reklama2email']) && !empty($_POST['reklama2email']) &&
    isset($_POST['seting1email']) && !empty($_POST['seting1email']) &&
    isset($_POST['zvon1email']) && !empty($_POST['zvon1email']) &&
    isset($_POST['tarifb11email']) && !empty($_POST['tarifb11email']) &&
    isset($_POST['tarifb12email']) && !empty($_POST['tarifb12email']) &&   
    isset($_POST['emailmail']) && !empty($_POST['emailmail']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $prisemail = substr(htmlspecialchars(trim($_POST['prisemail'])), 0, 1000);
    $dis1email = substr(htmlspecialchars(trim($_POST['dis1email'])), 0, 1000);
    $adapt1email = substr(htmlspecialchars(trim($_POST['adapt1email'])), 0, 1000);
    $bitr1email = substr(htmlspecialchars(trim($_POST['bitr1email'])), 0, 1000);
    $ssl1email = substr(htmlspecialchars(trim($_POST['ssl1email'])), 0, 1000);
    $host1email = substr(htmlspecialchars(trim($_POST['host1email'])), 0, 1000);
    $dome1email = substr(htmlspecialchars(trim($_POST['dome1email'])), 0, 1000);
    $rasdel1email = substr(htmlspecialchars(trim($_POST['rasdel1email'])), 0, 1000);
    $modul1email = substr(htmlspecialchars(trim($_POST['modul1email'])), 0, 1000);
    $magas1email = substr(htmlspecialchars(trim($_POST['magas1email'])), 0, 1000);
    $card1email = substr(htmlspecialchars(trim($_POST['card1email'])), 0, 1000);
    $zakaz1email = substr(htmlspecialchars(trim($_POST['zakaz1email'])), 0, 1000);
    $dostav1email = substr(htmlspecialchars(trim($_POST['dostav1email'])), 0, 1000);
    $oplata1email = substr(htmlspecialchars(trim($_POST['oplata1email'])), 0, 1000);
    $interg1email = substr(htmlspecialchars(trim($_POST['interg1email'])), 0, 1000);
    $texn1email = substr(htmlspecialchars(trim($_POST['texn1email'])), 0, 1000);
    $texn2email = substr(htmlspecialchars(trim($_POST['texn2email'])), 0, 1000);
    $content2email = substr(htmlspecialchars(trim($_POST['content2email'])), 0, 1000);
    $content3email = substr(htmlspecialchars(trim($_POST['content3email'])), 0, 1000);
    $host3email = substr(htmlspecialchars(trim($_POST['host3email'])), 0, 1000);
    $tarif1email = substr(htmlspecialchars(trim($_POST['tarif1email'])), 0, 1000);
    $konsul1email = substr(htmlspecialchars(trim($_POST['konsul1email'])), 0, 1000);
    $tarif2email = substr(htmlspecialchars(trim($_POST['tarif2email'])), 0, 1000);
    $reklama1email = substr(htmlspecialchars(trim($_POST['reklama1email'])), 0, 1000);
    $reklama2email = substr(htmlspecialchars(trim($_POST['reklama2email'])), 0, 1000);
    $seting1email = substr(htmlspecialchars(trim($_POST['seting1email'])), 0, 1000);
    $zvon1email = substr(htmlspecialchars(trim($_POST['zvon1email'])), 0, 1000);
    $tarifb11email = substr(htmlspecialchars(trim($_POST['tarifb11email'])), 0, 1000);
    $tarifb12email = substr(htmlspecialchars(trim($_POST['tarifb12email'])), 0, 1000);

    
    $emailmail = substr(htmlspecialchars(trim($_POST['emailmail'])), 0, 100);
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

  
   
    $to = 'alexandr.tupichenkov@yandex.ru';
    
    $title = 'Заказ с сайта тарифов';


    $message = "
        Был получен заказ с сайта :
           Основные данные.
        Цена заказа:$prisemail
        Разработка сайта:
        Варианты дизайна:$dis1email
        Адаптивная верстка:$adapt1email
        Подбор лицензии 1С-Bitrix:$bitr1email
        Подбор SSL-сертификата:$ssl1email
        Подбор хостинга:$host1email
        Регистрация домена:$dome1email
             Функционал и разделы сайта
        Разделы сайта:$rasdel1email 
        Функциональные модули сайта:$modul1email
        Функции интернет-магазина:$magas1email  
        Карточка товара:$card1email 
        Оформление заказа:$zakaz1email 
        Варианты доставки:$dostav1email
        Варианты оплаты:$oplata1email
        Выгрузки и интеграции:$interg1email 
        Подготовка технического задания:$texn1email
             Наполнение, размещение и техническая поддержка
        Отдельные виды работ по техподдержке сайтов:$texn2email
        Наполнение:$content2email
        Подготовка контента:$content3email
        Размещение на хостинге и домене заказчика:$host3email
        Тарифные планы:$tarif1email
        Консультации специалистов:$konsul1email
             SEO оптимизация сайта
        Тарифные планы:$tarif2email 
            Контекстная реклама
       Яндекс.Директ:$reklama1email 
       Google AdWords:$reklama2email 
            Битрикс24 - внедрение
      Общие настройки:$seting1email 
      Контроль входящих заявок:$zvon1email
      Битрикс24 облако:$tarifb11email
      Битрикс24 коробка:$tarifb12email

          Данные клиента.        
        Имя пользователя: $name
        Телефон: $telefon
        E-mail: $emailmail

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        header('Location: https://aleksandr.tupichenkov.com/CalcIT/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcIT/', true, 302);
        exit;
    }
}



?>