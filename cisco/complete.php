<?/////////////////////////////////////////////////////////////////// ПОЛЬЗОВАТЕЛЬСКИЕ НАСТРОЙКИ START=================================
$s = new stdClass;

$s->siteName = "RRC Cisco Distribution Partner";
$s->email = 'khomenko_v@rrc.ru';

/////////////////////////////////////////////////////////////////// ПОЛЬЗОВАТЕЛЬСКИЕ НАСТРОЙКИ END===================================


/////////////////////////////////////////////////////////////////// ОТПРАВКА ПОЧТЫ START=============================================

if($_POST) { 

	
	$to  = $s->email;
	//Заголовок сообщения
	$subject = "Сообщение с Сайта CISCO от $_POST[name]"; 
	//Сообщение на почту
	$message = "
	<html> 
	    <head> 
	        <title>Поступило новое сообщение</title> 
	    </head> 
	    <body> 
	        <p>Имя: ".$_POST['name']."</p>
	        <p>Компания: ".$_POST['company']."</p>
			<p>Город: ".$_POST['city']."</p>
	        <p>Телефон: <strong>".$_POST['phone']."</strong></p>
	    </body> 
	</html>"; 

	$headers = "Content-type: text/html; charset=utf-8 \r\n"; 
	$headers .= 'From: '.$s->email.'' . "\r\n" .
    'Reply-To: '.$s->email.'' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

	if (mail($to, $subject, $message, $headers)) {$resultPost = "Ваша заявка принята, наш менеджер свяжется с Вами в ближайшее время!";}
	else {$resultPost = "Что-то пошло не так, обратитесь к администратору!";}
}


/////////////////////////////////////////////////////////////////// ОТПРАВКА ПОЧТЫ END=============================================?>
<html>
	<head>
		<meta name="viewport" content="width=1280, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<link rel="stylesheet" href="//cdn.jsdelivr.net/bootstrap/3.3.4/css/bootstrap.min.css">
		<link rel="stylesheet" href="css/liquidcarousel.css">
		<link rel="stylesheet" href="css/jquery.fancybox.css" />
		<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" href="css/style.css">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		
		<title>Cisco Distribution Partner</title>
	</head>
<body>
<header>
	<div class="container">
		<div class="col-lg-3 col-md-3 col-sm-3 col-xs-3">
			<a href="http://www.rrc.ru/cisco_bundle_server_sale/index.html"><img src="img/logo.jpg" alt="logo" width="" height="" /></a>
		</div>
		<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 text-right">
			
			<ul class="list-group" id="menu">
				<li class="list-group-item"><a href="#contacts">Контакты</a></li>
				<li class="list-group-item"><a href="#preim">О решении</a></li>
			</ul>
		</div>
	</div>
</header>



<section>
	<div class="container">
		<h2><?=$resultPost;?></h2><br/><br/><br/><br/><br/><br/><br/>

	</div>
</section>






<footer id="footer">
	<div class="container text-center paddingBottom20">
		<div class="paddingTop20">
			<img src="img/up.png" id="GoTop" alt="up" width="" height="" class="pull-right" />
		</div>
		<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 tWhite text-left" id="social">
			<div class="row paddingTop10">
				Следите за нами в соцсетях:&nbsp;
				<a href="https://www.facebook.com/rrcgroup" target="_blank"><img src="img/iconFb.png" alt="iconFb" width="" height="" /></a>
				<a href="http://www.youtube.com/user/rrcgroup" target="_blank"><img src="img/iconYt.png" alt="iconYt" width="" height="" /></a>
			</div>
			<div class="row paddingTop10">
				© 2016 Cisco. Все права защищены.
			</div>
		</div>
	</div>
</footer>


</body>
	<script src="//cdn.jsdelivr.net/jquery/2.1.4/jquery.min.js"></script>
	<script src="//cdn.jsdelivr.net/bootstrap/3.3.4/js/bootstrap.min.js"></script>

</html>