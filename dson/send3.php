<?

$discs = [];
for($i = 0; $i < 11; $i++) {
 $name = "disk$i";
 if (isset($_POST[$name])) {
  $discs[$name] = 1;
 }
}

$address = "as@2eng.ru";
$subject = "subject";
$message = "disks: ".var_export($discs, true);


mail($address,  $subject, $message);

$verify = mail(
    $address,
    $subject,
    $message,
    "Content-type:text/plain; Charset=windows-1251\r\n"
);

if ($verify == 'true')

{
    {echo '��������� ������� ����������';}
}
else {echo '<div class="err">'.$error.'</div>';}


?>


