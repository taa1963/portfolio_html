<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$text_message = $_POST['email'];}


$name = stripslashes($name);
$name = htmlspecialchars($name);

$email = stripslashes($email);
$email = htmlspecialchars($email);

$address = "alexandr.tupichenkov@yandex.ru";






$message = "".$text_message."\n� ���������, ";

$verify = mail($name,$email,"Content-type:text/plain; Charset=windows-1251\r\n");


if ($verify == 'true')
{
 echo "
<link rel='stylesheet' type='text/css' href='style-send.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>

 <img align='center' src='img/warning.png'>
 <div align='center' class='warning_font_big'>�����������!</div>
 <div align='center' class='warning_font' align='left'>���� ���� ������ ���������� ��������������. ����� ��������� ����� �� �������� �����!</div>
 <p align='center'><a href='index.html' class='all_links'>��������� �����</a></div></p>

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
 <div align='center' class='warning_font_big'>������!!!</div>
 <div align='center' class='warning_font' align='left'>���� ������ �� ����������. ��������� �������� ������� �����!</div>
 <p align='center'><a href='index.html' class='all_links'>��������� �����</a></div></p>

 </td>
 </tr>
 </table>";
}

?>