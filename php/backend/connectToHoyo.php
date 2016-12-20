<?php
	$dsn="mysql:host=localhost;port=3306;dbname=ad103g1;charset=utf8";
	$user="ad103g1";
	$psw="ad103g1";
	$options=array( PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION );
	$pdo=new PDO($dsn, $user, $psw, $options);
?>