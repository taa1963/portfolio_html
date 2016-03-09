<?

$discs = [];
for($i = 0; $i < 11; $i++) {
 $name = "disk$i";
 if (isset($_POST[$name])) {
  $discs[$name] = 1;
 }
}

$address = "as@2eng.ru";
$subject = "Заказ дисков";
$message = "Заказаны диски: ".var_export($discs, true);

$verify = mail($to, $title, $message, "Content-type:text/plain; Charset=utf-8\r\n");
$verify = mail(
    $address,
    $subject,
    $message,
    "Content-type:text/plain; Charset=utf-8\r\n"
);


if ($verify)

    if ($verify) {

        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/#success', true, 302);
        exit;
    } else {
        header('Location: http://xn--b1aafccte5ahahmiiee2dvg.xn--p1ai/?form_error=1', true, 302);
        exit;
    }




