
<?
// если была нажата кнопка "Отправить"
if (
    isset($_POST['name']) && !empty($_POST['name']) &&
    isset($_POST['tel']) && !empty($_POST['tel']))
{

 $user_name = substr(htmlspecialchars(trim($_POST['name'])), 0, 1000);
 $user_phone = substr(htmlspecialchars(trim($_POST['tel'])), 0, 1000000);


 $to = 'alexandr.tupichenkov@yandex.ru';
 $title = 'Новый заказ на замер москитной сетки';
 $message = "
        Имя: $user_name
        Телефон : $user_phone

       ";

 $verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");


 if ($verify == 'true') {
  echo "
 <div align='center' class='warning_font_big'>Поздравляем!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо доставлено администратору. Через некоторое время Вы получите ответ!</div>
 <p align='center'><a href='https://aleksandr.tupichenkov.com/CalcSetka2/' class='all_links'>Вернуться назад</a></div></p>

 ";
 }
 else

 {
  echo "

 <div align='center' class='warning_font_big'>ОШИБКА!!!</div>
 <div align='center' class='warning_font' align='left'>Ваше письмо не доставлено. Повторите отправку немного позже!</div>
 <p align='center'><a href='https://aleksandr.tupichenkov.com/CalcSetka2/' class='all_links'>Вернуться назад</a></div></p>



 ";
 }

}

?>
