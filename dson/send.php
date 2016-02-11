<?
// если была нажата кнопка "Отправить"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {

 $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
 $user_phone = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 1000000);


 $user_name = iconv("utf-8", "windows-1251", $user_name);
 $user_phone = iconv("utf-8", "windows-1251", $user_phone);




 $to = 'as@2eng.ru';


 $title = 'Был получен заказ с сайта';
 $message = "
        Имя: $user_name
        Телефон: $user_phone

 ";
 // функция, которая отправляет наше письмо
 mail($to, $title, $message);
 $verify = mail($name, $email, "Content-type:text/plain; Charset=windows-1251\r\n");

 if ($verify == 'true')
 {
  echo "
<link rel='stylesheet' type='text/css' href='style-send.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <img align='center' src='img/screens.png'>
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше Ваша заявка доставлена администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
 }
 else
 {
  echo "
<link rel='stylesheet' type='text/css' href='style-send.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <img align='center' src='img/warning.png'>
 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>

 </td>
 </tr>
 </table>";
 }
}
?>

