<? 

if (isset($_POST['name'])) {$name = $_POST['name'];}
if (isset($_POST['email'])) {$text_message = $_POST['email'];}


$name = stripslashes($name);
$name = htmlspecialchars($name);

$email = stripslashes($email);
$email = htmlspecialchars($email);

$address = "as@2eng.ru";






$message = "".$text_message."\nС уважением, ";

$verify = mail($name,$email,"Content-type:text/plain; Charset=windows-1251\r\n");


if ($verify == 'true')
{
 {echo 'Сообщение успешно отправлено';}
}
else {echo 'Ошибка отправки сообщения';}


?>