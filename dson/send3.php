<?

$discs = [];
for($i = 0; $i < 11; $i++) {
 $name = "disk$i";
 if (isset($_POST[$name])) {
  $discs[$name] = 1;
 }
}

$address = "alexandr.tupichenkov@yandex.ru";
$subject = "subject";
$message = "disks: ".var_export($discs, true);

$verify = mail(
    $address,
    $subject,
    $message,
    "Content-type:text/plain; Charset=windows-1251\r\n"
);


