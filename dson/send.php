<?
// ���� ���� ������ ������ "���������"
if (
    isset($_POST['user_name']) && !empty($_POST['user_name']) &&
    isset($_POST['user_phone']) && !empty($_POST['user_phone'])) {

 $user_name = substr(htmlspecialchars(trim($_POST['user_name'])), 0, 1000);
 $user_phone = substr(htmlspecialchars(trim($_POST['user_phone'])), 0, 1000000);


 $user_name = iconv("utf-8", "windows-1251", $user_name);
 $user_phone = iconv("utf-8", "windows-1251", $user_phone);




 $to = 'as@2eng.ru';


 $title = '��� ������� ����� � �����';
 $message = "
        ���: $user_name
        �������: $user_phone

 ";
 // �������, ������� ���������� ���� ������
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
}
?>

