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

$title = '����� �����';
$message = "
        ��� ������� ����� � �����
        ���: $name
        �������: $$tel
        �����:$email
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


 <div align='center' class='warning_font_big'>������!!!</div>
 <div align='center' class='warning_font' align='left'>���� ������ �� ����������. ��������� �������� ������� �����!</div>
 <p align='center'><a href='index.html' class='all_links'>��������� �����</a></div></p>

 </td>
 </tr>
 </table>";
}
?>