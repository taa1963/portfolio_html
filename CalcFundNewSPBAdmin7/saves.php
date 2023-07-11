<?php
// если была нажата кнопка "Отправить"


if (
    isset($_POST['stsx']) && !empty($_POST['stsx']) 
   ) 
	{
    $stsx = substr(htmlspecialchars(trim($_POST['stsx'])), 0, 100000000000000);
	
	//echo $stsx;

    // на какие данные рассчитан этот скрипт
     header("Content-Type: application/html");
	 
	 unlink("https://aleksandr.tupichenkov.com/CalcFundNewSPBAdmin7/js/ajax_old.js");

     // Берём новую переменную и пишем в неё имя файла
    // $filename = 'data2.js';
    
	 
	  $file = fopen("https://aleksandr.tupichenkov.com/CalcFundNewSPBAdmin7/js/data2.js"+"a+");
	  
	  
	  
    file_put_contents($file, $stsx);	
	
   
   echo 'Изменение модификации файла прошло успешно';

    fclose($file);
    
    }

?>