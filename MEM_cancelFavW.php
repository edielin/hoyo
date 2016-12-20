<?php
ob_start(); 
session_start();

$memNo = $_SESSION["HOYO_memNo"];
$NOTE_no = $_REQUEST['NOTE_no'];

try{
	require_once('connectToHoyo.php');
	$pdo->beginTransaction();
	$sql = 'UPDATE nc SET NC_isCollected=0 WHERE NOTE_no=:NOTE_no AND MEM_no=:MEM_no';
	$cancelFavW = $pdo->prepare($sql);
	$cancelFavW->bindValue(':NOTE_no',$NOTE_no);
	$cancelFavW->bindValue(':MEM_no',$memNo);
	$cancelFavW->execute();
	$pdo->commit();

}catch(PDOException $ex){
	$pdo->rollBack();
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>