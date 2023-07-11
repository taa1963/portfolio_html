<?php


if (
    isset($_POST['stsx']) && !empty($_POST['stsx'])
) {
    $stsx = substr(htmlspecialchars(trim($_POST['stsx'])), 0, 100000000000000);

    header("Content-Type: application/html");

// Берём новую переменную и пишем в неё имя файла
    $filename = 'data2.js';
    $fullFilePath = __DIR__ . DIRECTORY_SEPARATOR . $filename;

// Выводим на экран то куда сохраняем
    echo $fullFilePath . "\n";

// Сохраняем
    $result = file_put_contents($fullFilePath, $stsx);
    if ($result === false) {
        echo 'File saving error';
    }

    $fcontents = file_get_contents($fullFilePath, $stsx);

// Выводим на екран контент файла
    echo $fcontents;
}

?>