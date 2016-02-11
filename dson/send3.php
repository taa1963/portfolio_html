<?

$discs = [];
for($i = 0; $i < 11; $i++) {
 $name = "disk$i";
 if (isset($_POST[$name])) {
  $discs[$name] = 1;
 }
}

$address = "as@2eng.ru";
$subject = "subject";
$message = "disks: ".var_export($discs, true);

$verify = mail(
    $address,
    $subject,
    $message,
    "Content-type:text/plain; Charset=windows-1251\r\n"
);

if ($verify == 'true')
{
    echo "
<link rel='stylesheet' type='text/css' href='style-send.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <img align='center' src='img/screens.png'>
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше Ваша заявка на диски отправлена. Через некоторое время Мы с Вами свяжемся!</div>
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
?>


