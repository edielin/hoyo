<?php
ob_start(); 
session_start();

$memNo = $_SESSION["HOYO_memNo"];
$NOTE_no = $_REQUEST['NOTE_no'];


try{
	require_once('connectToHoyo.php');
	$pdo->beginTransaction();
	$sql = 'UPDATE note SET NOTE_close=1 WHERE NOTE_no=:NOTE_no && MEM_no=:MEM_no';
	$deleteW = $pdo->prepare($sql);
	$deleteW->bindValue(":NOTE_no",$NOTE_no);
	$deleteW->bindValue(":MEM_no",$memNo);
	$deleteW->execute();
	$pdo->commit();

	$sql = 'UPDATE tr SET NOTE_no=1 WHERE NOTE_no=:NOTE_no && MEM_no=:MEM_no';
	$updateTR = $pdo->prepare($sql);
	$updateTR->bindValue(":NOTE_no",$NOTE_no);
	$updateTR->bindValue(":MEM_no",$memNo);
	$updateTR->execute();
	$pdo->commit();

}catch(PDOException $ex){
	$pdo->rollBack();
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>