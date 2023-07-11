<?php
// если была нажата кнопка "Отправить"
//print_r($_POST);

//print_r(iconv("UTF-8", "UTF-8", $_POST));

//$items = $_POST['item'];

//$result = '';


//echo $result;
if (
    isset($_POST['stsx']) && !empty($_POST['stsx']) 
   ) 
	{
    $stsx = substr(htmlspecialchars(trim($_POST['stsx'])), 0, 100000000000000);
	
	//echo $stsx;

    // на какие данные рассчитан этот скрипт
     header("Content-Type: application/html");
	 
	 unlink('data2.js');

     // Берём новую переменную и пишем в неё имя файла
     $filename = 'data2.js';
     $f = 'data2.js';



        // 3. Если есть — запоминаем его содержимое, а если такого файла нет — создаём его отдельной командой.
if (file_exists($filename)) {
    // Если файл есть — открываем его и читаем данные
    $file = file_get_contents('data2.js');
    // Если такого файла нет…
} 
else 
{
// …то создаём его сами
    $file = fopen("data2.js", "a+");

}
	
    //$fh = fopen('data2.js', 'a');
    //fwrite($fh, '<h1>Привет, мир!</h1>');
    file_put_contents($file, $stsx);
	
	$fcontents = file_get_contents($file, $stsx);
      
      echo $fcontents;
	 
	
	
	
	$file2 = fopen("data.js", "a+");
    
	$current .= "Test_John Smith\n";
     // Пишем содержимое обратно в файл
   file_put_contents($file2, $current);
   
   echo 'Изменение модификации файла прошло успешно';

    fclose($file);
	fclose($file2);





    // 4/ Всё, что было в этом файле, переводим в массив, с которым умеет работать PHP. Таким способом у нас каждая JSON-запись будет храниться в отдельной ячейке массива.
//$taskList = '';
// 5. Добавляем новую запись в этот массив — кладём в него то, что пришло со страницы.
//$taskList = $stsx;
// 6. Записываем это всё обратно в файл и тут же читаем обратно из него — так мы убедимся, что запись прошла нормально и мы можем с этим работать.
// Записываем данные в файл…
//file_put_contents('data2.js', json_encode($taskList));


// Освобождаем память от переменных, которые нам пока не нужны
//unset($file);
//unset($taskList);

    


    
    }

?>