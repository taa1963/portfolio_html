
<?
// ���� ���� ������ ������ "���������"
if (
    isset($_POST['name_client4']) && !empty($_POST['name_client4']) &&
    isset($_POST['tel_client4']) && !empty($_POST['tel_client4'])) {

 $name_client4 = substr(htmlspecialchars(trim($_POST['name_client4'])), 0, 1000);
 $tel_client4 = substr(htmlspecialchars(trim($_POST['tel_client4'])), 0, 1000000);

 $to = 'alexandr.tupichenkov@yandex.ru';
 $title = '����� ����� ������';
 $message = "
        ���: $name_client4
        ������� : $tel_client4

       ";

 $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


 if ($verify == 'true') {
  echo "
 <div align='center' class='warning_font_big'>�����������!</div>
 <div align='center' class='warning_font' align='left'>���� ������ ���������� ��������������. ����� ��������� ����� �� �������� �����!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>��������� �����</a></div></p>

 ";
 }
 else

 {
  echo "

 <div align='center' class='warning_font_big'>������!!!</div>
 <div align='center' class='warning_font' align='left'>���� ������ �� ����������. ��������� �������� ������� �����!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>��������� �����</a></div></p>



 ";
 }

}

?>
