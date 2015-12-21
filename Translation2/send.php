<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['prod'])) {$email = $_POST['prod'];}
if (isset($_POST['tel'])) {$subject = $_POST['tel'];}
if (isset($_POST['email'])) {$text_message = $_POST['email'];}


$name = stripslashes($name);
$name = htmlspecialchars($name);

$prod = stripslashes($prod);
$prod = htmlspecialchars($prod);

$tel = stripslashes($tel);
$tel = htmlspecialchars($tel);

$email = stripslashes($email);
$email = htmlspecialchars($email);









$address = "alexandr.tupichenkov@yandex.ru";

$message = "".$text_message."\nС уважением, ";

$verify = mail($name,$prod,$tel,$email,"Content-type:text/plain; Charset=windows-1251\r\n");


if ($verify == 'true')
{
echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>
 
 <img align='center' src='images/warning.png'>
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
 
 <img align='center' src='images/warning.png'>
 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='index.html' class='all_links'>Вернуться назад</a></div></p>
 
 </td>
 </tr>
 </table>";
}
?>