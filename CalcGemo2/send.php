
<?php
// если была нажата кнопка "Отправить"
if (
    isset($_POST['ekran']) && !is_int($_POST['ekran']) &&
    isset($_POST['ekrank']) && !is_int($_POST['ekrank']) &&
    isset($_POST['ekranm']) && !is_int($_POST['ekranm']) &&
    isset($_POST['email']) && !empty($_POST['email'])) {
    $ekran = substr(htmlspecialchars(trim($_POST['ekran'])), 0, 100);
    $ekrank = substr(htmlspecialchars(trim($_POST['ekrank'])), 0, 100);
    $ekranm = substr(htmlspecialchars(trim($_POST['ekranm'])), 0, 100);
    $email = substr(htmlspecialchars(trim($_POST['email'])), 0, 1000000);
    //$to = 'clublaser@mail.ru';
    $to = $_POST['email'];
    //$from = 'alexandr2.tupichenkov2@yandex.ru';
    // $to = $email;
    //$to = 'alexandr.tupichenkov@yandex.ru';
    //$to = 'info@partwork.ru';
    $title = 'ЧЕТВЕРТОЕ ПОЛЕ';
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers = 'Content-type: text/html;  charset=utf-8'. "\r\n";
    $headers ='From: webmaster@example.com';



    $message = "
       
        <h1 style='text-align: center'> Добрый день! </h1>
        <p style='text-align: left'>Опаснее всего для здоровья человека излучение от мобильного телефона, так как он находится в постоянной близости к телу. Поэтому, 
        в первую очередь рекомендуется приобрести защиту на телефон \"Экран\".</p>
        <p style='text-align: left'> При наличии роутера в квартире используйте защиту на роутер \"Экран-М\" - 1 шт.</p>
        <p style='text-align: left'>Помимо этого для восстановления организма важно использовать аккумулятор-корректрор \"Витязь\" (достаточно 1 шт для всех членов семьи).  </p>
        <p style='text-align: left'>Все остальные устройства рекомендуется защищать уже после этого. </p>
        <p style='text-align: center'>*** </p>
        <p style='text-align: left'>Вот количество защиты для часто используемых Вами устройств: </p>
        

          <table style='width: 50%;margin: 0 auto' class='table'  cellspacing='0'; border='1' >
         
                       <tr>
                           <td style='text-align:center; width:70%; font-weight: bold'>Наименование устройства</td>


                           <td style='text-align:center;width:30%'>Кол-во устройств </td>

                       </tr>

                       <tr>
                           <th style='text-align:left'>Экран</th>
                           <th style='text-align:left'>$ekran</th>
                       </tr>

                       <tr>
                           <th style='text-align:left'>Экран-К</th>
                           <th style='text-align:left'>$ekrank</th>
                       </tr>

                       <tr>
                           <th style='text-align:left'>Экран-М</th>
                           <th style='text-align:left'> $ekranm</th>
                       </tr>
                   </table>
                   
                  <p style='text-align: left'> Здесь подробная информация, куда и в каком количестве устанавливать защиту. </p> 
        
        <p><label>***</label></p>
                     <table style='width: 90%;margin: 0 auto' class='table'  cellspacing='0'; border='1' >

                         <tr>
                             <td style='text-align:center; width:30%; font-weight: bold'>Куда</td>
                             <td style='text-align:center;width:50%'>Как </td>
                             <td style='text-align:center;width:10%'>Что </td>
                             <td style='text-align:center;width:10%'>Кол-во </td>

                         </tr>

                         <tr>
                             <th style='text-align:left'>на мобильный телефон</th>
                             <th style='text-align:center'>Устанавливается под крышкой мобильного телефона аккумуляторного отсека цветным знаком к крышке или в чехле телефона</th>
                             <th style='text-align:center'>Экран</th>
                             <th style='text-align:center'>1</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на планшет</th>
                             <th style='text-align:center'>две пластины с обратной стороны параллельно коротким граням на одинаковом расстоянии от краев и друг друга</th>
                             <th style='text-align:center'>Экран-К</th>
                             <th style='text-align:center'>2</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на ноутбук</th>
                             <th style='text-align:center'>пластины — по краям монитора по диагонали, одна с обратной стороны основной части ноутбука по центру</th>
                             <th style='text-align:center'>Экран-К</th>
                             <th style='text-align:center'>3</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на персональный компьютер</th>
                             <th style='text-align:center'>пластины — по бокам монитора на каждую сторону по одной, одна — на процессор, обращенный в сторону оператора</th>
                             <th style='text-align:center'>Экран-К</th>
                             <th style='text-align:center'>3</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на телевизор</th>
                             <th style='text-align:center'>Сзади экрана по 1 шт по углам</th>
                             <th style='text-align:center'>Экран-К</th>
                             <th style='text-align:center'>4</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на роутер</th>
                             <th style='text-align:center'>пластина — на центральную часть верхней поверхности роутера</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>1</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на декодер для цифрового телевидения</th>
                             <th style='text-align:center'>пластина — на центральную часть верхней поверхности декодера</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>1</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на микроволновую печь</th>
                             <th style='text-align:center'>четыре пластины — по боковым граням СВЧ на каждую сторону по одной</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>4</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на кондиционер</th>
                             <th style='text-align:center'>в центре по боковым торцам кондиционера.</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>2</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>в машину</th>
                             <th style='text-align:center'>пластина — на центральную консоль под мультимедийной системой машины</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>1</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на видеорегистратор в машине</th>
                             <th style='text-align:center'>пластина — на видеорегистратор на боковую грань, обращенную в сторону салона</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>1</th>
                         </tr>

                         <tr>
                             <th style='text-align:left'>на систему охраны с видеонаблюдением/ видеодомофон</th>
                             <th style='text-align:center'>в центре на верхней и нижней грани корпуса видеонаблюдения.</th>
                             <th style='text-align:center'>Экран-М</th>
                             <th style='text-align:center'>2</th>
                         </tr>



                     </table>
        
        
        <p style='text-align: left'>Защитные устройства можно приобрести в интернет-магазине на сайте 4pole.ru.</p>
        
           
       ";


    $verify = mail($to, $title, $message, $headers);
    ini_set('display_errors','On');
    error_reporting('E_ALL');
    if ($verify) {

        header('Location: https://aleksandr.tupichenkov.com/CalcGemo2/#popup_success', true, 302);
        exit;
    } else {
        header('Location: https://aleksandr.tupichenkov.com/CalcGemo2/#popup_success', true, 302);
        exit;
    }
}


//    if ($verify) {
//        echo '<head>
//    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
//    <body><center><font color="green"> Заявка отправлена.</font><br/>
//   <center><a href="https://aleksandr.tupichenkov.com/CalcGemo">Вернуться на главную</a>
//   </body>';}
//    else {
//        echo '<head>
//    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
//    <body><center>Письмо не отправлено.<br/> <center>
//   <a href="https://aleksandr.tupichenkov.com/CalcGemo">Вернуться на главную</a>
//   </body>';}
//}

?>