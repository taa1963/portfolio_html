<?php
require __DIR__ . '/vendor/autoload.php';

$db = new MysqliDb (Array (
	'host' => 'mysql',
	'username' => 'root', 
	'password' => '123456',
	'db'=> 'cisco',
	'port' => 3306,
	'prefix' => '',
	'charset' => 'utf8'));

