<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$subject = $_POST['tel'];}
if (isset($_POST['email'])) {$text_message = $_POST['email'];}


$name = stripslashes($name);
$name = htmlspecialchars($name);


$tel = stripslashes($tel);
$tel = htmlspecialchars($tel);

$email = stripslashes($email);
$email = htmlspecialchars($email);

$to = "alexandr.tupichenkov@yandex.ru";

$title = 'Новый заказ';
$message = "
        Был получен заказ с сайта
        Имя: $name
        Телефон: $$tel
        Адрес:$email
       ";

$verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");

if ($verify == 'true')

    if ($verify == 'true')
    {
        echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>


 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо доставлено администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
    }
    else
    {
        echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>


 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
}
?>