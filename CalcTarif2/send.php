
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['tupeobmail']) && !empty($_POST['tupeobmail']) &&
    isset($_POST['posnomelmail']) && !empty($_POST['posnomelmail']) &&
    isset($_POST['orgformmail']) && !empty($_POST['orgformmail']) &&
    isset($_POST['colopermail']) && !empty($_POST['colopermail']) &&
    isset($_POST['npersmail']) && !empty($_POST['npersmail']) &&
    isset($_POST['basepaketmail']) && !empty($_POST['basepaketmail']) &&
    isset($_POST['doppaketmail']) && !empty($_POST['doppaketmail']) &&
    isset($_POST['nobpodrmail']) && !empty($_POST['nobpodrmail']) &&
    isset($_POST['marketmail']) && !empty($_POST['marketmail']) &&
    isset($_POST['assistantmail']) && !empty($_POST['assistantmail']) &&
    isset($_POST['assistandoptmail']) && !empty($_POST['assistandoptmail']) &&
    isset($_POST['lawyermail']) && !empty($_POST['lawyermail']) &&
    isset($_POST['stprogrammail']) && !empty($_POST['stprogrammail']) &&
    isset($_POST['ychetmail']) && !empty($_POST['ychetmail']) &&
    isset($_POST['zpaketbasmail']) && !empty($_POST['zpaketbasmail']) &&
    isset($_POST['zpaketallmail']) && !empty($_POST['zpaketallmail']) &&
    isset($_POST['emailmail']) && !empty($_POST['emailmail']) &&
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['telefon']) && !empty($_POST['telefon'])) {
    $tupeobmail = substr(htmlspecialchars(trim($_POST['tupeobmail'])), 0, 100);
    $posnomelmail = substr(htmlspecialchars(trim($_POST['posnomelmail'])), 0, 100);
    $orgformmail = substr(htmlspecialchars(trim($_POST['orgformmail'])), 0, 100);
    $colopermail = substr(htmlspecialchars(trim($_POST['colopermail'])), 0, 100);
    $npersmail = substr(htmlspecialchars(trim($_POST['npersmail'])), 0, 100);
    $basepaketmail = substr(htmlspecialchars(trim($_POST['basepaketmail'])), 0, 100);
    $doppaketmail = substr(htmlspecialchars(trim($_POST['doppaketmail'])), 0, 100);
    $nobpodrmail = substr(htmlspecialchars(trim($_POST['nobpodrmail'])), 0, 100);
    $marketmail = substr(htmlspecialchars(trim($_POST['marketmail'])), 0, 100);
    $assistantmail = substr(htmlspecialchars(trim($_POST['assistantmail'])), 0, 100);
    $assistandoptmail = substr(htmlspecialchars(trim($_POST['assistandoptmail'])), 0, 100);
    $lawyermail = substr(htmlspecialchars(trim($_POST['lawyermail'])), 0, 100);
    $stprogrammail = substr(htmlspecialchars(trim($_POST['stprogrammail'])), 0, 100);
    $ychetmail = substr(htmlspecialchars(trim($_POST['ychetmail'])), 0, 100);
    $zpaketbasmail = substr(htmlspecialchars(trim($_POST['zpaketbasmail'])), 0, 100);
    $zpaketallmail = substr(htmlspecialchars(trim($_POST['zpaketallmail'])), 0, 100);
    $emailmail = substr(htmlspecialchars(trim($_POST['emailmail'])), 0, 100);
    $name = substr(htmlspecialchars(trim($_POST['name'])), 0, 100);
    $telefon = substr(htmlspecialchars(trim($_POST['telefon'])), 0, 100);

   // $to = 'RomCola20065563@gmail.com';
   
    $to = 'alexandr.tupichenkov@yandex.ru';
    
    $title = 'Заказ с сайта тарифов';


    $message = "
        Был получен заказ с сайта :
           Основные данные.
        Вид деятельности:$tupeobmail
        Количество позиций номенклатуры:$posnomelmail
        Организационная форма: $orgformmail
        Количество операций: $colopermail
        Количество сотрудников: $npersmail
        Базовый пакет: $basepaketmail

          Дополнительные услуги.
        Дополнительный пакет: $doppaketmail
        Кол-во обособленных подраздедений: $nobpodrmail
        Маркетплейс: $marketmail
        Помощник: $assistantmail
        Помощник +: $assistandoptmail
        Юрист: $lawyermail
        Работа со сторонней программой: $stprogrammail
        Управленческий учет: $ychetmail

          Цены.
        Базовый пакет цена: $zpaketbasmail
        Общая цена с допами: $zpaketallmail

          Данные клиента.        
        Имя пользователя: $name
        Телефон: $telefon
        E-mail: $emailmail

       ";



    $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
    if ($verify) {
        header('Location: https://aleksandr.tupichenkov.com/CalcTarif/', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcTarif/', true, 302);
        exit;
    }
}



?>