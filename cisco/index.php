<?php
include("config.php");

// запоминаем utm-метки

foreach ($_GET as $key => $val) {

	if (0 == strpos($key, 'ref')) {
		$value = substr($key, 4);
		setcookie('referer', $value, mktime(0, 0, 0, 1, 1, 2020));
		echo 'Привет '.$_COOKIE['referer'].', как дела';
	}
}

?>

<html lang="RU_ru">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
		<link rel="shortcut icon" href="img/favicon.png" type="image/png">
		<meta http-equiv="content-type" content="text/html; charset=utf-8" />
		<link rel="stylesheet" href="css/bootstrap.min.css">
		<link rel="stylesheet" href="css/liquidcarousel.css">
		<link rel="stylesheet" href="css/jquery.fancybox.css" />
		<link rel="stylesheet" href="css/animate.css">
		<link rel="stylesheet" href="css/style.css">
		<link href='https://fonts.googleapis.com/css?family=Open+Sans:400,700,300&subset=latin,cyrillic' rel='stylesheet' type='text/css'>
		
		<title>Cisco Distribution Partner</title>
	</head>
<body>
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter25377170 = new Ya.Metrika({
                    id:25377170,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/25377170" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->

</script>

<header>
	<div class="container">
		<div class="col-lg-3 col-md-3 col-sm-12 col-xs-12">
			<a href=""><img src="img/logo.jpg" alt="logo" width="" height="" /></a>
		</div>
		<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12 text-right">
			<ul class="list-group" id="menu">
				<li class="list-group-item"><a href="#contacts">Контакты</a></li>
				<li class="list-group-item"><a href="#preim">О решении</a></li>

			</ul>
		</div>
<div class="ref_adr">



	<h2>Ref ссылка партнера <span id="key"><?= $_COOKIE['referer'] ?></span>    </h2>
	</div>
	</div>
</header>

<section id="spec" class="hidden-sm hidden-xs">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left tWhite paddingTop10">


				<div class="row text-center ">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right"><img src="img/icon04.png" style="margin-top: 20px;margin-right: 10px;" alt="icon01" width="" height="" /></div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 text-left">
						<h1 class="tSize22 tBold">&nbsp;Отличная возможность приобрести сервера Cisco с хорошей скидкой!</h1>
					</div>
				</div>
	
				<div class="row text-left paddingTop20">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
						<img src="img/icon09.png" alt="icon09" width="" class="iconV" height="" />
					</div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
						<div class="tSize16">
							В настоящее время доступно ограниченное по времени предложение на Rack- и Blade- сервера Cisco, которые можно приобрести по выгодным условиям. Программа Cisco SmartPlay предоставляет всем желающим дополнительные скидки на ограниченный набор серверов в заранее определенных фиксированных конфигурациях. В том случае, если сервера Cisco в аналогичных конфигурациях приобретать под заказ, их стоимость будет приблизительно на 25% выше. По акции доступны следующие фиксированные конфигурации серверов . <img src="img/icon06.png" alt="icon02" width="" height="" />
						</div>
					</div>
				</div>
		</div>
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
		</div>		
	</div>
</section>

<section id="specMob" class="hidden-lg hidden-md">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left tWhite paddingTop10">


				<div class="row text-center ">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right"><img src="img/icon04.png" style="margin-top: 20px;margin-right: 10px;" alt="icon01" width="" height="" /></div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 text-left">
						<h1 class="tSize22 tBold">&nbsp;Отличная возможность приобрести сервера Cisco с хорошей скидкой!</h1>
					</div>
				</div>
	
				<div class="row text-left paddingTop20">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
						<img src="img/icon09.png" alt="icon09" width="" class="iconV" height="" />
					</div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
						<div class="tSize16">
							В настоящее время доступно ограниченное по времени предложение на Rack- и Blade- сервера Cisco, которые можно приобрести по выгодным условиям. Программа Cisco SmartPlay предоставляет всем желающим дополнительные скидки на ограниченный набор серверов в заранее определенных фиксированных конфигурациях. В том случае, если сервера Cisco в аналогичных конфигурациях приобретать под заказ, их стоимость будет приблизительно на 25% выше. По акции доступны следующие фиксированные конфигурации серверов . <img src="img/icon06.png" alt="icon02" width="" height="" />
						</div>
					</div>
				</div>

		</div>
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
		</div>		
	</div>
</section>

<section id="slider" class="hidden-sm hidden-xs">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center paddingTop10">
			<img src="img/skidka25.png" class="img-responsive" alt="skidka25" width="" height="" class="" />
		</div>
		<div class="col-lg-6 col-md-6 hidden-sm hidden-xs paddingTop50">
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
						<div class="tSize16">
							Заказчики, которые никогда ранее не приобретали сервера Cisco, вправе получить дополнительную скидку 15%.<br>
							Таким образом, совокупная скидка может составить до 40% при условии одновременного использования двух программ.<br>
							Заказчики, кторые приобретут серверное оборудование Cisco в рамках данного предложения,  получат бесплатное техническое обучение от дистрибьютора RRC.
						</div>
		</div>
	</div>
</section>

<section id="sliderMob" class="hidden-lg hidden-md">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center paddingTop10">
			<img src="img/skidka25.png" class="img-responsive" alt="skidka25" width="" height="" class="" />
		</div>
		<div class="col-sm-12 col-xs-12 hidden-lg hidden-md ">
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
						<div class="tSize16">
							Заказчики, которые никогда ранее не приобретали сервера Cisco, вправе получить дополнительную скидку 15%.<br>
							Таким образом, совокупная скидка может составить до 40% при условии одновременного использования двух программ.<br>
							Заказчики, кторые приобретут серверное оборудование Cisco в рамках данного предложения,  получат бесплатное техническое обучение от дистрибьютора RRC.
						</div>
		</div>
	</div>
</section>







<section id="gotovo" class="hidden-sm hidden-xs">
	<div class="container-fluid noPad">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left tWhite paddingTop60  ">


			<div class="pull-right width600">

				<div class="row text-center ">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right"></div>
					<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 text-left">
					<h1 class="tSize24 tBold">До конца акции осталось:</h1>
					
					</div>
				</div>
	
			<div class="row text-left paddingTop20" style="margin-top:20px;">
					<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
						<script src="http://megatimer.ru/s/5981dd004cc6b4afcfec10392aa314f4.js"></script>
					</div>
				</div> 
	
			</div>
		</div>
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 noPad">

			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P_NkP6tHTrA" frameborder="0" width="100%" height="100%" allowfullscreen></iframe>

		</div>		
	</div>
</section>

<section id="gotovoMob" class="hidden-lg hidden-md">
	<div class="container noPad">

			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
				<h1 class="tSize24 tBold">До конца акции осталось:</h1>
			</div>
			<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
				<script src="http://megatimer.ru/s/e8d93e0bb67c683142048b9645c0a392.js"></script>
			</div>

			<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/P_NkP6tHTrA" frameborder="0" width="100%" allowfullscreen></iframe><br/><br/>

		</div>		
	</div>
</section>

<section id="free">
	<div class="container text-center">
		<h2 class="tSize24 tBold">
			*Обучение будет проводиться в формате вебинара, специалисты ответят на все интересующие вас вопросы.
		</h2>
		
	</div>
</section>

<section id="preim" class="hidden-sm hidden-xs">
	<div class="container">
		<div class="col-lg-5 col-md-5 col-sm-5 col-xs-5">
		</div>		
		<div class="col-lg-7 col-md-7 col-sm-7 col-xs-7 text-left tWhite paddingTop40">
			
			<div class="row text-center">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right"></div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 text-left">
					<h1 class="tSize24 tBold"><img src="img/icon03.png" style="margin-top:-24px;" alt="icon01" width="" height="" />&nbsp;Преимущества Cisco UCS SmartPlays:</h1>
				</div>
			</div>

			<div class="row text-left paddingTop10">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
					<img src="img/icon09.png" alt="icon09" width="" class="iconV" height="" />
				</div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
					<div class="tSize16">
						UCS SmartPlay Select B-Series и C-Series – решение нового поколения, которое идеально подходит для сервис-провайдеров, дата-центров, больших корпораций и компаний с развитой филиальной сетью, необходимое для виртуализации рабочих столов, создания частного облака компании и серверной виртуализации.

				</div>
				</div>
			</div>

			<div class="row text-left paddingTop20">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-right">
					<img src="img/icon09.png" alt="icon09" width="" class="iconV" height="" />
				</div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11">
					<div class="tSize16">
						Мы предлагаем надежное и гибкое решение по выгодной цене, которое позволит снизить затраты на электропитание на 54%, упростить кабельную организацию и администрирование в среднем на 80%, и в общем снизить TCO на 61%.
					</div>
				</div>
			</div>			
			
		</div>
	</div>
</section>

<section id="preimMob" class="hidden-lg hidden-md">
	<div class="container">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
			<h1 class="tSize24 tBold"><img src="img/icon03.png" style="margin-top:-24px;" alt="icon01" width="" height="" />&nbsp;Преимущества Cisco UCS SmartPlays:</h1>
		</div>

		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="tSize16">
				UCS SmartPlay Select B-Series и C-Series – решение нового поколения, которое идеально подходит для сервис-провайдеров, дата-центров, больших корпораций и компаний с развитой филиальной сетью, необходимое для виртуализации рабочих столов, создания частного облака компании и серверной виртуализации.
			</div>
		</div>

		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="tSize16">
				Мы предлагаем надежное и гибкое решение по выгодной цене, которое позволит снизить затраты на электропитание на 54%, упростить кабельную организацию и администрирование в среднем на 80%, и в общем снизить TCO на 61%.
			</div>
		</div>
	</div>
</section>


<section id="preimMob" class="hidden-lg hidden-md">
	<div class="container">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left">
			<h1 class="tSize24 tBold"><img src="img/icon03.png" style="margin-top:-24px;" alt="icon01" width="" height="" />&nbsp;Преимущества Cisco UCS SmartPlays:</h1>
		</div>

		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="tSize16">
				UCS SmartPlay Select B-Series и C-Series – решение нового поколения, которое идеально подходит для сервис-провайдеров, дата-центров, больших корпораций и компаний с развитой филиальной сетью, необходимое для виртуализации рабочих столов, создания частного облака компании и серверной виртуализации.
			</div>
		</div>

		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
			<div class="tSize16">
				Мы предлагаем надежное и гибкое решение по выгодной цене, которое позволит снизить затраты на электропитание на 54%, упростить кабельную организацию и администрирование в среднем на 80%, и в общем снизить TCO на 61%.
			</div>
		</div>
	</div>
</section>


<section id="spisok">
	<div class="container paddingTop20 paddingBot20">
		
		<center><h2 class="tSize24 tBold">Cisco UCS обеспечивает целостный подход к построению дата-центра и предоставляет:</h2></center>


		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis02.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Единая система управления.</span><br/>
				Cisco UCS Manager – интегрированная система, которая предоставляет полный контроль над всеми компонентами, что выгодно отличает этот подход в сравнении с традиционными инструментами управления вычислительной архитектурой.
			</div>
		</div>

		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis03.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Дифференцированная платформа.</span><br/>
				Cisco UCS – это дифференцированная платформа корпоративного уровня с интегрированной серверной фабрикой, которая широко поддерживается партнёрами, независимыми разработчиками программного обеспечения и системными интеграторами.
			</div>
		</div>

		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis04.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Комплексное решение.</span><br/>
				Система Cisco UCS и доступные услуги технической поддержки отвечают самым высоким требованиям к сервису дата-центров.
			</div>
		</div>

		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis05.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Соответствие стандартам.</span><br/>
				Cisco UCS поддерживает интерфейсы 10-GbE и Fibre Channel, полностью соответствующие стандартам. А также, предоставляет другие транспортные опции (Fibre Channel, iSCSI, FCoE) и широкий спектр поддерживаемых производителей комплектующих по сравнению с конкурирующими решениями. Это даёт клиентам еще большую гибкость выбора и лёгкую интеграцию с уже существующей инфраструктурой.
			</div>
		</div>

		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis06.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Быстрое развёртывание.</span><br/>
				Результаты независимой оценки, показывают, что серверное решение Cisco разворачивается на 77% быстрее и использует на 67% меньше шагов установки в сравнении с конкурирующим решением.
			</div>
		</div>

		<div class="row marginTop20">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis07.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Сокращение капитальных и операционных расходов.</span><br/>
				Устаревший подход к построению дата-центра, предлагаемый некоторыми конкурентами может привести к разрастанию количества физических серверов, а затем и к большим затратам по их поддержанию и обновлению. Решение Cisco UCS, в свою очередь, помогает снизить сложность и расходы на 84%, обеспечивая необходимый сервис меньшим количеством серверов, коммутаторов, адаптеров, кабелей при сниженном энергопотреблении.
			</div>
		</div>

		<div class="row marginTop20 ">
			<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
				<img src="img/spis08.png" alt="spis01" width="" height="" />
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
				<span class="tBold">Эффективная производительность.</span><br/>
				Поколение процессоров Intel Xeon E5 интеллектуально реагирует на нужды приложений, автоматически регулируя производительность. Это позволяет эффективно экономить энергию в моменты простоя и оперативно получать необходимую вычислительную мощность в нужный момент.
			</div>
		</div>

	</div>
</section>

<section id="contacts" class="hidden-sm hidden-xs">
	<div class="container">
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
		</div>		
		<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left tWhite paddingTop30">
			<div class="row marginTop20">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center"></div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize24">
					Контакты:
				</div>
			</div>
			<div class="row marginTop10">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
					<img src="img/icon07.png" style="margin-top:5px;" alt="icon07" width="" height="" />
				</div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
					По всем вопросам можно обращаться по телефону<br/>
					<span class="tSize24">+495-956-17-17</span>
				</div>
			</div>
			<div class="row marginTop20">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center">
					<img src="img/icon08.png" style="margin-top:0px;" alt="icon07" width="" height="" />
				</div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
					или по адресу<br/>
					<span class="tSize24">khomenko_v@rrc.ru</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="contactsMob" class="hidden-lg hidden-md">
	<div class="container">
		<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-left tWhite paddingTop30">
			<div class="row marginTop20">
				<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1 text-center"></div>
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize24">
					Контакты:
				</div>
			</div>
			<div class="row marginTop10">
				<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
					По всем вопросам можно обращаться по телефону<br/>
					<span class="tSize24">+495-956-17-17</span>
				</div>
			</div>
			<div class="col-lg-11 col-md-11 col-sm-11 col-xs-11 tSize18">
					или по адресу<br/>
					<span class="tSize24">khomenko_v@rrc.ru</span>
				</div>
		</div>
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
				<a href="https://www.facebook.com/RRC-Uzbekistan-479188518939713/" target="_blank"><img src="img/iconFb.png" alt="iconFb" width="" height="" /></a>

				<a href="http://www.youtube.com/user/rrcgroup" target="_blank"><img src="img/iconYt.png" alt="iconYt" width="" height="" /></a>
			</div>
			<div class="row paddingTop10">
				© 2016 Cisco. Все права защищены.
			</div>
		</div>
	</div>
</footer>



<!-- Modal -->
<div class="modal" id="modalCall" tabindex="-1" role="dialog" aria-hidden="false">
	<div class="modal-dialog">
		<div class="modal-content">
			<div class="modal-header text-center">
				<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
				<h4 class="modal-title tWhite tBold tSize24">Заявка</h4>
			</div>
			<div class="modal-body tWhite">
				<form action="complete.php" method="POST">

					<div class="row">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<p class="tSize18"><img src="img/icon12.png" alt="icon12" style="margin-top: -14px;" width="" height="" /> Ваше Имя</p>
							<input class="form-control" type="text" name="name" required="">
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<p class="tSize18"><img src="img/icon13.png" alt="icon12" style="margin-top: -12px;" width="" height="" /> email</p>
							<input class="form-control" type="email" name="email" required="">
						</div>
					</div>

					<div class="row marginTop20">
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<p class="tSize18"><img src="img/icon14.png" alt="icon12" style="margin-top: -10px;" width="" height="" /> Компания</p>
							<input class="form-control" type="text" name="company" required="">
						</div>
						<div class="col-lg-6 col-md-6 col-sm-6 col-xs-6">
							<p class="tSize18"><img src="img/icon15.png" alt="icon12" style="margin-top: -14px;" width="" height="" /> Телефон</p>
							<input class="form-control" type="tel" name="phone" required="" placeholder="+_ ___ ___ __ __">
						</div>
					</div>

			</div>
			<div class="modal-footer">
				<center>
					<button type="submit" name="submit" class="btn btn-danger btn-lg" onclick="yaCounter38805185.reachGoal('send_invoice'); return true;">ОТПРАВИТЬ</button>
				</center>
				</form>
			</div>
		</div>
	</div>
</div>

<button class="btn btn-danger btn-lg" id="bFix" type="button" data-toggle="modal" data-target="#modalCall">СФОРМИРОВАТЬ ЗАЯВКУ</button>




</body>
	<script src="js/jquery.min.js"></script>
	<script src="js/bootstrap.min.js"></script>
	<script src="js/jquery.scrollTo.js"></script>
	<script>$(document).ready(function(){
		$("#menu li a").click(function(){
			var selected = $(this).attr('href');	
			$.scrollTo(selected, 500);		
			return false;
		});
				$('#bFix').fadeIn();
/*

		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
			} else {
				$('#bFix').fadeOut();
			}
		});
*/

	$('#GoTop').click(function () {$('body,html').animate({scrollTop: 0}, 400); return false;});

	});</script>
	<script src="js/jquery.mask.js"></script>
	<script type="text/javascript">
		jQuery(function($){
		   $("input[type=tel]").mask("+7 999 999 999",{placeholder:"+_ ___ ___ __ __"});
		});
	</script>


</html>