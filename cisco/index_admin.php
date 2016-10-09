<?php
include("config.php");
global $db;
if (!empty($_POST)) {
	if (isset($_POST['delete'])) {
		$id = intval($_POST['id']);
		echo "delete " . $_POST['id'];
	}
	if (isset($_POST['update'])) {
		echo "update " . $_POST['id'];
	}
	die;
	
}

?>


<html lang="RU_ru">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<link rel="shortcut icon" href="/img/favicon.png" type="image/png">
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="/css/bootstrap.min.css">
		<link rel="stylesheet" href="/css/jquery.fancybox.css" />
		<link rel="stylesheet" href="/css/styleadmin.css" />
		<script src="/js/jquery.min.js"></script>
		<script src="/js/bootstrap.min.js"></script>
		<script src="/js/jquery.js"></script>
		<script src="/js/scripts.js"></script>
		


		
		<title>CiscoDistribution Partner _Admin</title>
	</head>
<body>


<header>
	<div class="container">
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
		<a href=""><img src="img/logo.jpg" alt="logo" width="" height="" /></a>
			
		</div>

	</div>
</header>

</div>
<?php

$result = $db->get('partner');

//$query = "SELECT * FROM partner";

if ($result = $db->get('partner')): ?>
	printf("Select вернул %d строк.\n", $result->num_rows);
	if ($result): ?>
	<table>
	<? while($row = $result->fetch_array()) : ?>
		<tr>
			<td><?= $row['partner_id'] ?></td>
			<td><?= $row['partner_name'] ?></td>
			<td><?= $row['partner_ref'] ?></td>
			
			<td>
				<form action="/index_admin.php/" method="POST">
					<input type="hidden" name="id" value="<?= $row['partner_id'] ?>">
					<input type="submit" name="delete" value="delete">
					<input type="submit" name="update" value="update">
					
				</form>
			</td>
		</tr>
	<? endwhile ?>
	</table>
	
	<? $result->close(); ?>
<? endif ?>
<?

die;




?>

<section id="spec" class="hidden-sm hidden-xs">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left tWhite paddingTop10">


				<div class="row text-center ">

					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 text-left">
						<h1 class="tSize22 tBold">&nbsp;Наши партнеры!</h1>
					</div>
				</div>


		</div>
		<div class="col-md-12 column">
			<div class="partner">


			<table class="table">
				<thead>
				<tr>
					<th>
						№
					</th>
					<th>
						Партнер
					</th>
					<th>
						Емейл
					</th>
					<th>
						ref_ссылка
					</th>
					<th>
						Редактирование
					</th>
				</tr>
				</thead>
				<tbody>
				
				
				

				

				<tr class="success">
					<td>
						1
					</td>
					<td>
						 Партнер 1
					</td>
					<td>
						ttt@trtr.444
					</td>
					<td>
						http://192.168.99.100:8080/index.php&ref-8406135126
					</td>
					<td>
						3500
					</td>

				<tr class="success">
					<td>
						2
					</td>
					<td>
						Партнер 2
					</td>
					<td>
						ttt@trtr.4443
					</td>
					<td>
						http://192.168.99.100:8080/index.php&ref-3406135121
					</td>
					<td>
						2000
					</td>

				<tr class="success">
					<td>
						3
					</td>
					<td>
						Партнер 3
					</td>
					<td>
						ttt@trtr.4446
					</td>
					<td>
						http://192.168.99.100:8080/index.php&ref-7406135127
					</td>
					<td>
						1500
					</td>



				</tbody>
			</table>
			

			
		<?php



		echo '<input name="name" type="text" value="'.$partner_name.'" id= "partner_name" >';
		echo '<input name="name" type="text" value="'.$partner_name.'" id= "partner_name" >';



			 

?>







				<br>
				<br>





				<input name="id" type="text"   value="" id= "partner_id">
				<input name="name" type="text" value="" id= ".$partner_name." >
				<input name="mail" type="text" value="" id= "partner_mail" >
				<input name="ref" type="text" value="" id= "partner_ref" >







 

			<p class="button_add"><button type="submit">ДОБАВИТЬ ПАРТНЕРА</button></p>

			<div class="form_add">

				<div class="add_name">
					<h2>Наименование партнера<input type="text" name="user_name2" id="user_name2" placeholder=""  required></h2>
				</div>

				<div class="add_mail">
					<h2>Емейл партнера  <input type="text" name="user_mail" id="user_mail" placeholder="" required > </h2>
				</div>

				<div class="add_ref">
				<h2>Ref ссылка партнера <span id="num1"> </span>    </h2>
				</div>



				<p class="button_gen"><button type="submit">СГЕНЕРИРОВАТЬ</button></p>
				<p class="button_insern"><button type="submit">ДОБАВИТЬ</button></p>
				<p class="button_clos"><button type="submit">ЗАКРЫТЬ</button></p>

			</div>

			</div>
		</div>


	</div>
	</div>
</section>








<footer id="footer">


		<div class="col-lg-9 col-md-9 col-sm-9 col-xs-9 tWhite text-left" id="social">

			<div class="row paddingTop10">
				© 2016 Cisco. Все права защищены.
			</div>
		</div>

</footer>





</body>




</html>