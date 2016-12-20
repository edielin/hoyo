<?php
ob_start();
session_start();

$memNo = $_SESSION["HOYO_memNo"] ;
$TR_no = $_REQUEST['TR_no'];

try{
	require_once('connectToHoyo.php');
	$pdo->beginTransaction();
	$sql = 'UPDATE tr SET TR_close=1 WHERE TR_no=:TR_no AND MEM_no=:MEM_no';
	$cancelFavW = $pdo->prepare($sql);
	$cancelFavW->bindValue(':TR_no',$TR_no);
	$cancelFavW->bindValue(':MEM_no',$memNo);
	$cancelFavW->execute();
	$pdo->commit();

	echo 'closeTRok';

}catch(PDOException $ex){
	$pdo->rollBack();
	echo "連線失敗,原因 : ",$ex->getMessage(),"<br>";
	echo "行號 : ",$ex->getLine(),"<br>";
}

?>