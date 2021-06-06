
<?
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name_client']) && !empty($_POST['name_client']) &&
    isset($_POST['tel_prod']) && !empty($_POST['tel_prod']) &&
    isset($_POST['name_prod']) && !empty($_POST['name_prod']) &&
    isset($_POST['email_prod']) && !empty($_POST['email_prod'])) {

 $name_client = substr(htmlspecialchars(trim($_POST['name_client'])), 0, 1000);
 $tel_prod = substr(htmlspecialchars(trim($_POST['tel_prod'])), 0, 1000000);
 $email_prod = substr(htmlspecialchars(trim($_POST['email_prod'])), 0, 1000);
 $name_prod = substr(htmlspecialchars(trim($_POST['name_prod'])), 0, 1000);


 $to = 'alexandr.tupichenkov@yandex.ru';
 $title = 'Новый заказ на продукцию';
 $message = "
        Имя :name_$name_client
        Телефон :$tel_prod
		email :$email_prod
		Наименование продукта :$name_prod
       ";

 $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


 if ($verify == 'true') {
  echo "
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо доставлено администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>Вернуться назад</a></div></p>

 ";
 }
 else

 {
  echo "

 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='http://xn--80aai0ag2c.xn--80atjc.xn--p1ai/%D0%9A%D0%BE%D0%BC%D0%BF%D0%B0%D0%BD%D0%B8%D0%B8/t3858-%D0%9B%D1%8E%D0%B4%D0%B8%D0%BD%D0%BE%D0%B2%D0%BE' class='all_links'>Вернуться назад</a></div></p>



 ";
 }

}

?>
