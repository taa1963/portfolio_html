<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['tel'])) {$subject = $_POST['tel'];}


$name = stripslashes($name);
$name = htmlspecialchars($name);


$tel = stripslashes($tel);
$tel = htmlspecialchars($tel);


$address = "alexandr.tupichenkov@yandex.ru";

$message = "".$text_message."\n� ���������, ";

$verify = mail($name,$tel,"Content-type:text/plain; Charset=windows-1251\r\n");


if ($verify == 'true')
{
echo "
<link rel='stylesheet' type='text/css' href='style.css'/>
<table width='600' height='300' align='center'>
 <tr>
 <td class='warning_table' width='220' align='center' valign='middle'>
 

 <div align='center' class='warning_font_big'>�����������!</div>
 <div align='center' class='warning_font' align='left'>���� ������ ���������� ��������������. ����� ��������� ����� �� �������� �����!</div>
 <p align='center'><a href='index.html' class='all_links'>��������� �����</a></div></p>
 
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
 <div align='center' class='warning_font_big'>������!!!</div>
 <div align='center' class='warning_font' align='left'>���� ������ �� ����������. ��������� �������� ������� �����!</div>
 <p align='center'><a href='index.html' class='all_links'>��������� �����</a></div></p>
 
 </td>
 </tr>
 </table>";
}
?>