<?php
require __DIR__ . '/vendor/autoload.php';


global $db;
$db = new MysqliDb (Array (

	'host' => 'mysql',
	'username' => 'root', 
	'password' => '123456',
	'db'=> 'cisco',
	'prefix' => '',
	'charset' => 'utf8'));

