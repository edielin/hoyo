<?php
ob_start();
session_start();

$memNo = $_SESSION["HOYO_memNo"];
$TR_no = $_REQUEST["TR_no"];

try{
	require_once('connectToHoyo.php');
	$pdo->beginTransaction();
	$sql = "DELETE FROM tc WHERE MEM_no=$memNo and TR_no=$TR_no";
	$deleteTC = $pdo->exec($sql);
	$pdo->commit();
	// echo "ok";

}catch(PDOException $ex){
	$pdo->rollBack();
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>