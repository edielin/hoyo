<?php 
ob_start();
session_start();
$noteObj=json_decode($_REQUEST["NOTE_no"]);  //將JSON轉換成物件
try {
	require_once("connectToHoyo.php");
	if($noteObj->NOTE_type==4){	
		$sql="SELECT * from re where NOTE_no=:NOTE_no and RE_no=:NOTE_re and RE_reportedTimes!=0";
		$reItem=$pdo->prepare($sql);
		$reItem->bindValue(":NOTE_no",$noteObj->NOTE_no);
		$reItem->bindValue(":NOTE_re",$noteObj->NOTE_re);
		$reItem->execute();

			$updatasql="DELETE from re where RE_no=:RE_no";
			$updataItem=$pdo->prepare($updatasql);
			$updataItem->bindValue(":RE_no",$noteObj->NOTE_re);
			$updataItem->execute();
			echo "更新完成";
	}
} catch (PDOException $ex) {
	$ex->getLine();
	$ex->getMessage();
}
?>